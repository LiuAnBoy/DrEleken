import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { makeStyles } from "@material-ui/core/styles";

import Title from "./title";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    maxWidth: "100%",
    background: "#f4fafd",
    padding: "20px 0"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "70%",
    margin: "0 auto",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  img: {
    width: 350,
    margin: "10px 20px",
    [theme.breakpoints.down("lg")]: {
      width: 400,
    },
    [theme.breakpoints.down("md")]: {
      width: 300,
    },
  },
}));

const QA = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  return (
    <section className={classes.root}>
      <Title title="Q&A" />
      <div className={classes.container}>
        {data.allFile.nodes.map((d, index) => {
          return (
            <Img
              fluid={d.childImageSharp.fluid}
              key={index}
              className={classes.img}
            />
          );
        })}
      </div>
    </section>
  );
};

export const query = graphql`
  {
    allFile(filter: { relativePath: { regex: "/^Q[1-9].jpg/" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
export default QA;
