import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import img from "../assets/img/favicon.png"

const helmet = () => {
  const { site } = useStaticQuery(query);
  const { description, title } = site.siteMetadata;

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title}`}>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="image" content={`${img}`} />
      <link rel="icon" href={img} />
    </Helmet>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        description
        author
        title
        img
      }
    }
  }
`;

export default helmet;
