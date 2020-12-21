import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Img from "gatsby-image";
import { Button } from "@material-ui/core";
import backgroundImage from "../assets/img/banner.jpg";

const useStyles = makeStyles(theme => ({
  img: {
    width: "100vw",
    height: "100vh",
    maxWidth: "100%",
    zIndex: -1,
    position: "absolute",
    top: 0,
  },
  btnGroup: {
    position: "absolute",
    top: "20vw",
    left: "50%",
    transform: "translateX(-50%)",
    [theme.breakpoints.down("lg")]: {
      top: "18vw"
    },
    [theme.breakpoints.down("md")]: {
      top: "40vw"
    },
    [theme.breakpoints.down("sm")]: {
      top: "40vw"
    },
    [theme.breakpoints.down("xs")]: {
      top: "55vw"
    },
  },
  title: {
    fontFamily: "Roboto, sans-serif",
    color: "#fff",
    width: "50vw",
    textAlign: "center",
    fontSize: "5.6vw",
    fontWeight: 400,
    letterSpacing: "0.42vw",
    backgroundColor: "rgba(255,255,255,.4)",
    borderRadius: "6px",
    margin: 0,
    [theme.breakpoints.down("lg")]: {
      fontSize: "6.4vw"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "10vw"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10vw"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10.8vw"
    },
  },
  subtitle: {
    fontFamily: "Roboto, sans-serif",
    color: "#fff",
    fontSize: "1.9vw",
    fontWeight: 400,
    letterSpacing: "0.42vw",
    margin: 0,
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.5vw"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "3.2vw"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.8vw"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "4.8vw"
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
}));

const Banner = () => {
  const data = useStaticQuery(query);
  const classes = useStyles();
  return (
    <section>
      <Img fluid={data.file.childImageSharp.fluid} className={classes.img} />
      <div className={classes.btnGroup}>
        <h1 className={classes.title}>兒童顏值管理專家</h1>
        <p className={classes.subtitle}>守護所有孩子的健康與自信</p>
      </div>
      <Button variant="outlined" className={classes.button}>
        立即預約
      </Button>
    </section>
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
