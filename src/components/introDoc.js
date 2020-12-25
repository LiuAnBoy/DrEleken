import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Carousel from "./carousel";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "20px 0",
    width: "100vw",
    maxWidth: "100%",
    background: "#c2c2c2",
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
  return (
    <section className={classes.root}>
      <div className={classes.slide}>
        <Carousel />
      </div>
    </section>
  );
};

export default introDoc;
