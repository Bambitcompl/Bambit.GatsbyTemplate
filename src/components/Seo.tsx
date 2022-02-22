/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type MetaTagType = {
  content: string;
  name?: string;
  property?: string;
};

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: MetaTagType[];
  keywords?: string[];
  title: string;
}

function Seo({ description, lang, meta, keywords, title }: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const combinedKeywords = keywords?.join(',  ');

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <meta name="description" content={metaDescription} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {meta?.map(tag => (
        <meta name={tag.name} property={tag.property} content={tag.content} />
      ))}
      <meta name="keywords" content={combinedKeywords} />
    </Helmet>
  );
}

export default Seo;
