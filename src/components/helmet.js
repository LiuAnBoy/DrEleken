import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import img from "../assets/img/favicon.png";

const helmet = () => {
  const { site } = useStaticQuery(query);
  const { description, title } = site.siteMetadata;

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title}`}>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="image" content={`${img}`} />
      <link rel="icon" href={img} />
      <meta property="og:url" content="www.dreleken.com" />
      <meta property="og:locale" content="utf-8" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="兒童顏值管理專家" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${img}`} />
      <meta property="og:image:alt" content="兒童顏值管理專家" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="300px" />
      <meta property="og:image:height" content="300px" />
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
