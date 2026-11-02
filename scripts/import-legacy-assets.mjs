import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import vm from "node:vm";

// Read Git objects directly: never switch branches or modify the Git index.
const sources = [
  { ref: "origin/main", folder: "main", prefixes: ["src/images/"] },
  { ref: "origin/v2", folder: "v2", prefixes: ["public/assets/images/", "public/assets/files/"] },
];
const manifest = [];
for (const { ref, folder, prefixes } of sources) {
  const commit = execFileSync("git", ["rev-parse", ref], { encoding: "utf8" }).trim();
  const paths = execFileSync("git", ["ls-tree", "-r", "--name-only", ref], { encoding: "utf8" }).trim().split("\n");
  for (const source of paths.filter((p) => prefixes.some((prefix) => p.startsWith(prefix)))) {
    const prefix = prefixes.find((p) => source.startsWith(p));
    const relative = source.slice(prefix.length);
    const destination = `public/legacy/${folder}/${prefix.endsWith("files/") ? "files" : "images"}/${relative}`;
    const bytes = execFileSync("git", ["show", `${ref}:${source}`], { maxBuffer: 32 * 1024 * 1024 });
    mkdirSync(dirname(resolve(destination)), { recursive: true });
    writeFileSync(destination, bytes);
    manifest.push({ ref, commit, source, destination, bytes: bytes.length, sha256: createHash("sha256").update(bytes).digest("hex") });
  }
}
mkdirSync("src/data", { recursive: true });
writeFileSync("src/data/asset-manifest.json", JSON.stringify(manifest, null, 2) + "\n");

const source = execFileSync("git", ["show", "origin/v2:src/components/ProjectIsotop.js"], { encoding: "utf8" });
const array = source.split("const projects = ")[1].split(";\n  useEffect")[0];
const projects = vm.runInNewContext(`(${array})`, { nanoid: () => "legacy" });
writeFileSync("src/data/legacy-projects.json", JSON.stringify(projects.map(({ id, ...project }) => project), null, 2) + "\n");
console.log(`Preserved ${manifest.length} assets and imported ${projects.length} project records.`);
