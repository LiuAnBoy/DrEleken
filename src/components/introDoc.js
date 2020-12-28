import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import Title from "./title";

import Carousel from "./carousel";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "50px 0",
    width: "100vw",
    maxWidth: "100%",
    background: "linear-gradient(30deg, #039b9b 50%, #04afaf 60%)",
    // position: "relative",
    // top: "100px"
  },
  slide: {
    margin: "0 auto",
    width: "80%",
    outline: "none",
    "&:active": {
      outline: "none",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  title: {
    color: "#fff"
  }
}));

const introDoc = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  return (
    <section
      className={classes.root}
      id="Our-Group"
    >
      <Title title="醫師團隊" color="#fff"/>
      <div className={classes.slide}>
        <Carousel />
      </div>
    </section>
  );
};

export const query = graphql`
  {
    file(relativePath: { eq: "child.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default introDoc;
