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
    padding: "50px 0 40px",
    background: "#f2f2f2",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  clinic: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  card: {
    width: 450,
    height: 460,
    boxShadow: "none",
    margin: "50px auto 20px",
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
      margin: "50px auto 20px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: " 50px auto 10px",
      width: 343,
      height: 460,
    },
  },
  img: {
    width: "100%",
    height: 300,
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
  businessHours: {
    display: "inline-block",
    marginRight: 8,
  },
}));

const service = () => {
  const data = useStaticQuery(query);
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Title title="服務診所" />
      <div className={classes.clinic}>
        {data.allContentfulClinics.nodes.map((clinic, index) => {
          const { image, name, phone, address, id } = clinic;
          return (
            <Card className={classes.card} key={index}>
              <CardMedia>
                <Img fluid={image.fluid} className={classes.img} />
              </CardMedia>
              <CardContent>
                <div className={classes.font}>{name}</div>
                <Typography variant="h6" className={classes.typo}>
                  診所地址 : {address}
                  <br />
                  預約電話 : {phone}
                  <br />
                  營業時間 :{" "}
                  {clinic.businessHours.map((time, index) => {
                    return (
                      <div className={classes.businessHours} key={index}>
                        {time}
                        <br />
                      </div>
                    );
                  })}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
      {/* TODO 陸續增加中．．． */}
    </section>
  );
};

export const query = graphql`
  {
    allContentfulClinics(sort: { fields: createdAt, order: ASC }) {
      nodes {
        image {
          fluid {
            src
            aspectRatio
            base64
            sizes
            srcSet
            srcSetWebp
            srcWebp
            tracedSVG
          }
        }
        name
        phone
        businessHours
        id
        address
      }
    }
  }
`;

export default service;
