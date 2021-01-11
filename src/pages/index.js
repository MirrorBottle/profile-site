import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        meta={[
          {
            name: `description`,
            content: description,
          },
          {
            name: `keywords`,
            content: "cerita, cerpen, blog, review",
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: `Bayu Setiawan`,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
          {
            name: `google-site-verification`,
            content: "5oUcfGF2aQTPcIZIdvLyyfVqbU08-amZ0BVp_5_F-94",
          },
        ]}
      />
      <App />
    </>
  );
};
