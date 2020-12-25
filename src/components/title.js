import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: 48,
    margin: "0 0 10px",
    display: "block",
    textAlign: "center",
    fontWeight: 300,
  },
}));

const title = ({ title }) => {
  const classes = useStyles();
  return <div className={classes.root}>{title}</div>;
};

export default title;
