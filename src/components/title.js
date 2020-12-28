import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: 48,
    margin: "0 0 20px",
    display: "block",
    textAlign: "center",
    fontWeight: 300,
    lineHeight: "48px",
    [theme.breakpoints.down("xs")]: {
      fontSize: 36,
    },
  },
  underLine: {
    height: "3px",
    width: "100px",
    backgroundColor: "orange",
    border: 0,
    margin: "15px auto",
    [theme.breakpoints.down("xs")]: {
      margin: "8px auto",
    },
  }
}));

const title = ({ title, color }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{color: color ? color : ""}}>
      {title}
      <hr className={classes.underLine}/>
    </div>
  );
};

export default title;
