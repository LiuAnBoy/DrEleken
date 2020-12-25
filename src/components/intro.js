import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import intro from "../constants/intro";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "20px 0",
    background: "linear-gradient(30deg, #84e1e1 20%, #adebeb 80%)",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  card: {
    width: 300,
    height: 350,
    boxShadow: "none",
    margin: "20px 40px",
    backgroundColor: "rgba(255,255,255,0.2)",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 18px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: " 10px auto",
    },
  },
  icon: {
    fontSize: 72,
    textAlign: "center",
    margin: 0,
    color: "rgba(255,255,255,0.9)",
    height: "80px",
  },
  font: {
    fontSize: 18,
    textAlign: "center",
    margin: "0 0 20px",
    fontWeight: 400,
  },
  typo: {
    fontSize: 18,
    margin: "0 0 20px",
    fontWeight: 300,
    height: 132,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  btn: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      {intro.map(i => {
        const { id, icon, title, text, button } = i;
        return (
          <Card key={id} className={classes.card}>
            <CardContent>
              <div className={classes.icon}>{icon}</div>
              <div className={classes.font}>{title}</div>
              <Typography variant="h6" className={classes.typo}>
                {text}
              </Typography>
              <Button className={classes.btn} variant="outlined">
                {button}
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
