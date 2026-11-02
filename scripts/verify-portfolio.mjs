import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import ts from "typescript";

const manifest = JSON.parse(readFileSync("src/data/asset-manifest.json", "utf8"));
for (const asset of manifest) {
  const bytes = readFileSync(asset.destination);
  assert.equal(bytes.length, asset.bytes, asset.destination);
  assert.equal(createHash("sha256").update(bytes).digest("hex"), asset.sha256, asset.destination);
}

// Load the typed data without adding a runtime dependency or writing build files.
const require = createRequire(import.meta.url);
function loadData(file, dependencies = {}) {
  const { outputText } = ts.transpileModule(readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } });
  const module = { exports: {} };
  new Function("require", "module", "exports", outputText)((name) => dependencies[name] ?? require(name), module, module.exports);
  return module.exports;
}
const { DATA } = loadData("src/data/resume.tsx");
const { projects, featuredProjects } = loadData("src/data/projects.ts", {
  "./resume": loadData("src/data/resume.tsx"),
  "./legacy-projects.json": JSON.parse(readFileSync("src/data/legacy-projects.json", "utf8")),
});
assert.equal(projects.length, 33);
assert.equal(new Set(projects.map((project) => project.id)).size, projects.length);
assert.equal(featuredProjects.length, 6);
assert.ok(featuredProjects.every((project) => project?.featured));
for (const project of projects) {
  assert.ok(project.description?.en && project.description?.ja, `Missing bilingual description: ${project.id}`);
  assert.ok(project.client.en && project.client.ja, project.id);
  assert.ok(project.images.length > 0, project.id);
  for (const image of project.images) assert.ok(existsSync(`public${image}`), image);
  if (project.url) assert.match(project.url, /^https?:\/\//);
}
assert.ok(existsSync(`public${DATA.cv}`));
assert.ok(readFileSync(`public${DATA.cv}`).subarray(0, 5).toString() === "%PDF-");
for (const job of DATA.work) if (job.logo) assert.ok(existsSync(`public${job.logo}`), job.logo);
console.log(`Verified ${manifest.length} byte-identical legacy assets, ${projects.length} bilingual projects, six featured projects, and the CV.`);
