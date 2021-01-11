import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import about from "../constants/about";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    background: "#d9d9d9",
    padding: "40px 0 50px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  iconSection: {
    width: 400,
    height: 400,
    background: "#d9d9d9",
    padding: "40px 0",
    [theme.breakpoints.down("sm")]: {
      width: 375,
    },
    [theme.breakpoints.down("xs")]: {
      width: 375,
      height: 375,
      padding: 0,
      margin: "0 auto",
    },
  },
  cardSection: {
    width: 800,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    [theme.breakpoints.down("lg")]: {
      width: 800,
    },
    [theme.breakpoints.down("md")]: {
      width: 550,
    },
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
    [theme.breakpoints.down("xs")]: {
      width: 343,
      margin: "0 auto",
      display: "block",
    },
  },
  card: {
    width: "100%",
    background: "rgba(255,255,255,1)",
    boxShadow: "none",
    borderRadius: 8,
    "&:hover": {
      boxShadow: "0px 2px 10px -1px rgba(0,0,0,0.2)",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "20px 0",
      display: "block",
    },
  },
  title: {
    fontSize: 24,
    margin: "0 0 6px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.6vw",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.8vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "6vw",
    },
  },
  typo: {
    fontSize: 18,
    fontWeight: 300,
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.1vw",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "4vw",
    },
  },
}));

const AboutUs = () => {
  const data = useStaticQuery(query);
  const classes = useStyles();
  return (
    <section className={classes.root} id="About-Us">
      <div className={classes.iconSection}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
      <div className={classes.cardSection}>
        {about.map(a => {
          const { id, title, text } = a;
          return (
            <Card className={classes.card} key={id}>
              <CardContent>
                <div className={classes.title}>{title}</div>
                <Typography variant="h6" className={classes.typo}>
                  {text}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export const query = graphql`
  {
    file(relativePath: { eq: "aboutus.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutUs;
