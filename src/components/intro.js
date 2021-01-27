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
    padding: "60px 0",
    background: "#40bdce",
    fontFamily: "Roboto",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      padding: "40px 0",
    },
  },
  card: {
    width: 300,
    padding: "2vw 0",
    boxShadow: "none",
    margin: "0 2vw",
    backgroundColor: "#f4fafd",
    [theme.breakpoints.down("xs")]: {
      width: "91.4vw",
      margin: "10px auto",
      padding: "4vw 0",
    },
  },
  icon: {
    fontSize: 72,
    textAlign: "center",
    margin: 0,
    color: "rgba(73, 192, 208,0.9)",
    height: 70,
    [theme.breakpoints.down("sm")]: {
      fontSize: "7vw",
      height: "6.9vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14vw",
      height: "13.6vw",
    },
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    margin: "10px 0",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      margin: "2px 0",
      fontSize: "2vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "4.8vw",
    },
  },
  content: {
    width: "87%",
    margin: "0 auto",
    height: "8vw",
    [theme.breakpoints.down("xs")]: {
      height: "18vw",
      padding: "2vw 16px",
    },
    [theme.breakpoints.down("md")]: {
      height: "10vw",
      padding: "1vw 16px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "16vw",
      padding: "1vw 16px",
    },
  },
  typo: {
    fontSize: 18,
    fontWeight: 300,
    padding: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4vw",
      height: "10vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2vw",
      height: "16vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.2vw",
    },
  },
  btn: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.2vw",
    },
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
            <div className={classes.icon}>{icon}</div>
            <div className={classes.title}>{title}</div>
            <CardContent className={classes.content}>
              <Typography variant="h6" className={classes.typo}>
                {text}
              </Typography>
            </CardContent>
            <Button
              className={classes.btn}
              variant="outlined"
              onClick={e => handleClick(e, index)}
            >
              {button}
            </Button>
          </Card>
        );
      })}
    </section>
  );
};

export default Intro;
