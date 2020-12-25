import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";

import Carousel from "./carousel";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "20px 0",
    width: "100vw",
    maxWidth: "100%",
    background: "linear-gradient(30deg, #039b9b 50%, #04afaf 60%)",
    // position: "relative",
    // top: "100px"
  },
  slide: {
    margin: "0 auto",
    width: "62%",
    outline: "none",
    "&:active": {
      outline: "none",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
}));

const introDoc = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  return (
    <section
      className={classes.root}
    >
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
