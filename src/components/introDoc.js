import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { graphql, useStaticQuery } from "gatsby";
import Title from "./title";

import Carousel from "./carousel";
import DocCard from "./IntroDoc-card"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "50px 0",
    width: "100vw",
    maxWidth: "100%",
    background: "#40bdce",
  },
  content: {
    margin: "80px auto",
    width: "100%",
    outline: "none",
    "&:active": {
      outline: "none",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "10vw auto",
    },
  },
  title: {
    color: "#fff"
  }
}));

const introDoc = () => {
  const classes = useStyles();
  return (
    <section
      className={classes.root}
      id="Our-Group"
    >
      <Title title="醫師團隊" color="#fff"/>
      <div className={classes.content}>
        <DocCard />
      </div>
    </section>
  );
};

export default introDoc;
