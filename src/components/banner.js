import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import BackgroundImage from "gatsby-background-image";
import { Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  img: {
    width: "100vw",
    height: "100vh",
    maxWidth: "100%",
    backgroundColor: red[100],
  },
  btnGroup: {
    position: "absolute",
    top: "300px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100vw",
    maxWidth: "100%",
    [theme.breakpoints.down("lg")]: {
      top: "18vw",
    },
    [theme.breakpoints.down("md")]: {
      top: "270px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "40vw",
    },
    [theme.breakpoints.down("xs")]: {
      top: "55vw",
    },
  },
  title: {
    fontFamily: "Roboto, sans-serif",
    color: "#fff",
    textAlign: "center",
    fontSize: "5.6vw",
    fontWeight: 400,
    letterSpacing: "0.42vw",
    borderRadius: "6px",
    margin: 0,
    [theme.breakpoints.down("lg")]: {
      fontSize: "6.4vw",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "10vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10.8vw",
    },
  },
  subtitle: {
    fontFamily: "Roboto, sans-serif",
    color: "#fff",
    fontSize: "1.4vw",
    fontWeight: 400,
    letterSpacing: "0.42vw",
    margin: 0,
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
      fontSize: "2vw",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "3.2vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.8vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "4vw",
    },
  },
  button: {
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#fff",
    border: "2px solid #fff",
    borderRadius: 0,
    width: "150px",
    height: "50px",
    fontSize: "18px",
  },
  background: {
    width: "100vw",
    height: "100vh",
    maxWidth: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: -1,
  },
}));

const Banner = () => {
  const data = useStaticQuery(query);
  const classes = useStyles();
  return (
    <BackgroundImage
      Tag="section"
      className={classes.img}
      fluid={data.file.childImageSharp.fluid}
    >
      <div className={classes.background}></div>
      <div className={classes.btnGroup}>
        <h1 className={classes.title}>兒童顏值管理專家</h1>
        <p className={classes.subtitle}>守護所有孩子的健康與自信</p>
      </div>
      <Button variant="outlined" className={classes.button}>
        立即預約
      </Button>
    </BackgroundImage>
  );
};

export const query = graphql`
  {
    file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Banner;
