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
    padding: "0px 0 40px",
    background: "#fff",
  },
  title: {
    display: "block",
    textAlign: "center",
    fontSize: 48,
    margin: "30px 0 50px",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  group: {
    margin: "0 10px",
    width: "150px",
  },
  icon: {
    fontSize: 48,
    textAlign: "center",
    width: "100%",
    color: "",
  },
  text: {
    margin: "10px 0 0",
    fontSize: 26,
    textAlign: "center",
    width: "100%",
  },
  btn: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    margin: "40px 0 0"
  }
}));

const pentalogy = () => {
  const classes = useStyles();
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
      <Button className={classes.btn} size="large" variant="outlined">立刻預約諮詢</Button>
    </section>
  );
};

export default pentalogy;