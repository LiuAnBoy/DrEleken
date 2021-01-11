import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    maxWidth: "100%",
    padding: "50px 0 0",
    // background: "linear-gradient(30deg, #039696 20%, #039b9b 80%)",
    background: "#f4fafd",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "0 0 20px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  contact: {
    position: "relative",
    // left: 100,
    margin: "0 4.3vw",
    [theme.breakpoints.down("md")]: {
      left: 0,
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 4.3vw",
    },
  },
  title: {
    fontSize: 36,
    fontWeight: 400,
    color: "#40bdce",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 400,
    color: "#40bdce",
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  content: {
    fontSize: 18,
    fontWeight: 400,
    color: "#40bdce",
  },
  iframe: {
    margin: "0 4.3vw",
  },
  copyright: {
    position: "relative",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#036363",
    color: "#fff",
    padding: "4px 0",
    display: "block",
    "&>span": {
      color: "orange",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },
}));

const footer = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <div className={classes.contact}>
          <h2 className={classes.title}>聯絡資訊：</h2>
          <p className={classes.subtitle}>
            肯恩象醫生 | 兒童顏值管理專家 | 兒童早期矯正
          </p>
          <h4 className={classes.content}>地址：台中市大甲區中華街85號</h4>
          <h4 className={classes.content}>電話：04-268-66662</h4>
        </div>
        <div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdreleken%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2454196381463451"
            width="330"
            height="400"
            className={classes.iframe}
            // style="border:none;overflow:hidden"
            scrolling="no"
            // frameborder="0"
            // allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className={classes.copyright}>
        copyright&copy;{new Date().getFullYear()}
        <span>肯恩象</span> all rights reserved.
        未經授權許可，禁止擷取或轉載內容。
      </div>
    </section>
  );
};

export default footer;
