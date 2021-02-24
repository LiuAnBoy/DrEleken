import React from "react";
import Layout from "../components/layout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    maxWidth: "100%",
    height: "46.08vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
    backgroundColor: "#fafafa",
    [theme.breakpoints.down("md")]: {
      height: "46.6vh",
    },
  },
  fof: {
    fontSize: 84,
    margin: 0,
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 6,
    color: "#00cccc",
  },
  pnf: {
    fontSize: 36,
    margin: 0,
    color: "#00cccc",
    fontWeight: 300,
  },
}));

const FourOFore = () => {
  const classes = useStyles();
  return (
    <Layout>
      <section className={classes.root}>
        <div>
          <h1 className={classes.fof}>404</h1>
          <p className={classes.pnf}>Page Not Found</p>
        </div>
      </section>
    </Layout>
  );
};

export default FourOFore;
