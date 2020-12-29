import React, { useEffect, useState, useRef, createRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import { Fab } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollButton from "./scrollbutton";
import { makeStyles } from "@material-ui/core/styles";
import BookmarkIcon from "@material-ui/icons/Bookmark";

import NavLink from "../constants/navlink";
import Sidebar from "./sidebar";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    maxWidth: "100%",
  },
  appBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "100vw",
    // maxWidth: "100%",
    // zIndex: "-1",
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
      width: "375px",
      justifyContent: "center",
      maxWidth: "100%",
    },
  },
  img: {
    height: "60px",
    width: "170px",
    [theme.breakpoints.down("xs")]: {
      position: "default",
    },
  },
  test: {
    width: "60%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
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
  const [navLinkDisplay, setNavLinkDisplay] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (document.body.clientWidth <= 414) {
      setNavLinkDisplay(false);
    }
  });

  return (
    <div id="back-to-top-anchor" className={classes.root}>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar className={classes.toolBar}>
          <Link to="/">
            <Img
              fluid={data.file.childImageSharp.fluid}
              className={classes.img}
            />
          </Link>
          <NavLink Display={classes.test}/>
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
