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
    background: "#40bdce",
    // background: "linear-gradient(30deg, #40bdce 20%, #84e1e1 80%)",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  card: {
    width: 300,
    height: 350,
    boxShadow: "none",
    margin: "20px 40px",
    backgroundColor: "#f4fafd",
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
    color: "rgba(73, 192, 208,0.9)",
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
    width: "91.4%",
    margin: "0 auto 20px",
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

const Intro = () => {
  const classes = useStyles();

  const handleClick = (e, index) => {
    const validate = () => {
      if (index === 0) {
        return "Child-Face-Control";
      }
      if (index === 1) {
        return "About-Us";
      }
      if (index === 2) {
        return "Contact-Us";
      }
    };

    // const anchor = document.querySelector(validate());
    const anchor = document.getElementById(validate());
    const headerOffset = 90;
    const elementPosition = anchor.offsetTop;
    console.log(elementPosition);
    const offsetPosition = elementPosition - headerOffset;

    if (anchor) {
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className={classes.root}>
      {intro.map((i, index) => {
        const { id, icon, title, text, button } = i;
        return (
          <Card key={id} className={classes.card}>
            <CardContent>
              <div className={classes.icon}>{icon}</div>
              <div className={classes.font}>{title}</div>
              <Typography variant="h6" className={classes.typo}>
                {text}
              </Typography>
              <Button
                className={classes.btn}
                variant="outlined"
                onClick={e => handleClick(e, index)}
              >
                {button}
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
};

export default Intro;
