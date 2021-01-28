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
    alignItems: "center",
    background: "#d9d9d9",
    padding: "50px 0",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "20px 0",
    },
  },
  iconSection: {
    width: 400,
    background: "#d9d9d9",
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
  },
  cardSection: {
    width: 800,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "91.4vw",
      margin: "0 auto",
    },
  },
  card: {
    width: "100%",
    background: "rgba(255,255,255,1)",
    boxShadow: "none",
    borderRadius: 8,
    margin: "10px 0",
    "&:hover": {
      boxShadow: "0px 2px 10px -1px rgba(0,0,0,0.2)",
    },
  },
  title: {
    fontSize: 24,
    margin: "0 0 6px",
    [theme.breakpoints.down("md")]: {
      fontSize: "2vw",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "4vw",
    },
  },
  typo: {
    fontSize: 18,
    fontWeight: 300,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.6vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.2vw",
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
