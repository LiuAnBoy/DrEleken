import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import { Fab } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollButton from "./scrollbutton";
import { makeStyles } from "@material-ui/core/styles";
import BookmarkIcon from "@material-ui/icons/Bookmark";

import Sidebar from "./sidebar";

const useStyles = makeStyles(theme => ({
  appBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "-1",
  },
  show: {
    display: "none",
  },
  toolBar: {
    width: "60%",
    height: "80px",
    backgroundColor: "inherit",
    justifyContent: "space-between",
    display: "flex",
    margin: "0 auto",
    padding: ".4vw 0",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      justifyContent: "center",
    },
  },
  img: {
    height: "60px",
    width: "170px",
    [theme.breakpoints.down("xs")]: {
      position: "default",
    },
  },
  btnGroup: {
    width: "60%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  btn: {
    fontFamily: "Roboto, sans-serif",
    color: "#1a1a1a",
    fontSize: "0.9vw",
    fontWeight: 400,
    cursor: "pointer",
    "&:hover": {
      color: "#00b3b3",
    },
  },
  reservationBtn: {
    fontFamily: "Roboto, sans-serif",
    color: "#fff",
    fontSize: "0.9vw",
    fontWeight: 400,
    backgroundColor: "#00cccc",
    borderRadius: "6px",
    cursor: "pointer",
    padding: "10px 20px",
    margin: 0,
    "&:hover": {
      backgroundColor: "#00b3b3",
    },
  },
  sideBarBtn: {
    position: "absolute",
    top: "-8px",
    right: "20px",
    width: "42px",
    height: "42px",
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export const Header = props => {
  const data = useStaticQuery(query);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div id="back-to-top-anchor">
      <AppBar position="fixed" className={classes.appbar} color="inherit">
        <Toolbar className={classes.toolBar}>
          <Link to="/">
            <Img
              fluid={data.file.childImageSharp.fluid}
              className={classes.img}
            />
          </Link>
          <div className={classes.btnGroup}>
            <div color="inherit" className={classes.btn}>
              關於肯恩象醫生
            </div>
            <div color="inherit" className={classes.btn}>
              兒童顏值管理
            </div>
            <div color="inherit" className={classes.btn}>
              我們的團隊
            </div>
            <div color="inherit" className={classes.btn}>
              自主檢測
            </div>
            <div color="inherit" className={classes.reservationBtn}>
              立即預約
            </div>
          </div>
          <div className={classes.sideBarBtn} onClick={handleOpen}>
            <BookmarkIcon style={{ fontSize: "48px", color: "#00b3b3" }} />
          </div>
        </Toolbar>
      </AppBar>
      <Sidebar handleOpen={handleOpen} open={open} />
      <ScrollButton {...props}>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollButton>
    </div>
  );
};

export const query = graphql`
  {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Header;
