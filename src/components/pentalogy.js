import React from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalHotelIcon from "@material-ui/icons/LocalHotel";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import FaceIcon from "@material-ui/icons/Face";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import Title from "./title";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "50px 0",
    background: "#f4fafd",
    fontFamily: "Roboto",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "80px 0",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      display: "flex",
      flexWrap: "wrap",
      margin: "10vw 0",
    },
  },
  group: {
    margin: "0 3vw",
    width: 150,
    [theme.breakpoints.down("xs")]: {
      margin: "20px 0",
      width: 120,
    },
  },
  icon: {
    fontSize: 72,
    textAlign: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "6vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12vw",
    },
  },
  text: {
    margin: "10px 0 0",
    fontSize: 22,
    textAlign: "center",
    width: "100%",
    fontWeight: 300,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.2vw",
    },
  },
  btn: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      fontSize: "3.2vw"
    },
  },
}));

const Pentalogy = () => {
  const classes = useStyles();

  const handleClick = () => {
    const anchor = document.getElementById("Contact-Us");
    const headerOffset = 90;
    const elementPosition = anchor.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    if (anchor) {
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };
  return (
    <section className={classes.root}>
      <Title title="顏值管理五部曲" />
      <div className={classes.content}>
        <div className={classes.group}>
          <FastfoodIcon className={classes.icon} />
          <p className={classes.text}>營養</p>
        </div>
        <div className={classes.group}>
          <LocalHotelIcon className={classes.icon} />
          <p className={classes.text}>睡眠</p>
        </div>{" "}
        <div className={classes.group}>
          <FavoriteIcon className={classes.icon} />
          <p className={classes.text}>矯正</p>
        </div>{" "}
        <div className={classes.group}>
          <SportsHandballIcon className={classes.icon} />
          <p className={classes.text}>生長發育</p>
        </div>{" "}
        <div className={classes.group}>
          <FaceIcon className={classes.icon} />
          <p className={classes.text}>大腦發育</p>
        </div>
      </div>
      <Button
        className={classes.btn}
        size="large"
        variant="outlined"
        onClick={handleClick}
      >
        立刻預約諮詢
      </Button>
    </section>
  );
};

export default Pentalogy;
