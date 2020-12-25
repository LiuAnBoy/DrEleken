import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

import Title from "./title";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "10px 0 20px",
    background: "linear-gradient(30deg, #84e1e1 20%, #adebeb 80%)",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  card: {
    width: 450,
    height: 460,
    boxShadow: "none",
    margin: "20px auto",
    // backgroundColor: "rgba(255,255,255,0.2)",
    transition: theme.transitions.create("transform", {
      duration: ".6s",
    }),
    display: "block",
    "&:hover": {
      transform: "scale(1.1)",
      // boxShadow: "1px 10px 15px black",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "20px 18px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: " 10px auto",
      width: 343,
      height: 390,
    },
  },
  font: {
    fontSize: 18,
    fontWeight: 400,
    margin: "0 0 5px",
  },
  typo: {
    fontSize: 16,
    fontWeight: 300,
    height: 180,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
}));

const service = () => {
  const data = useStaticQuery(query);
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Title title="服務診所" />
      <Card className={classes.card}>
        <CardMedia>
          <Img
            fluid={data.file.childImageSharp.fluid}
            className={classes.img}
          />
        </CardMedia>
        <CardContent>
          <div className={classes.font}>大甲精品牙醫</div>
          <Typography variant="h6" className={classes.typo}>
            診所地址 : 437台中市大甲區中華街85號
            <br />
            預約電話 : 04-268-66662
            <br />
            營業時間 : 週一～週五 9:00-20:30
            <br />
            週六 9:00-17:30(週日全日公休)
          </Typography>
        </CardContent>
      </Card>
      {/* TODO 陸續增加中．．． */}
    </section>
  );
};

export const query = graphql`
  {
    file(relativePath: { eq: "clinic.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default service;
