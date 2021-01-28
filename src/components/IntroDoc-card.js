import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { Button, Collapse } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "start",
    fontFamily: "Roboto",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  card: {
    width: "18vw",
    padding: "3vw 0",
    boxShadow: "none",
    margin: "0 2vw",
    [theme.breakpoints.down("xs")]: {
      padding: "10vw 0",
      width: "91.4vw",
      margin: "2vw auto",
    },
  },
  img: {
    width: "12vw",
    margin: "0 auto",
    [theme.breakpoints.down("xs")]: {
      width: "60vw",
      margin: "0 auto",
    },
  },
  name: {
    fontSize: "1.2vw",
    textAlign: "center",
    margin: "2.6vw 0 1.8vw",
    [theme.breakpoints.down("xs")]: {
      fontSize: "5.3vw",
      margin: "8vw auto",
    },
  },
  button: {
    margin: "0",
    width: "14vw",
    boxShadow: "none",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    borderColor: "#00cccc",
    // background: "#00cccc",
    color: "#00cccc",
    textAlign: "left",
    fontSize: "1vw",
    "&:hover": {
      backgroundColor: "#00b3b3",
      color: "#fff",
      borderColor: "#00b3b3",
    },
    [theme.breakpoints.down("xs")]: {
      width: "84vw",
      margin: "0 auto",
      fontSize: "3.2vw",
    },
  },
  content: {
    padding: "0",
    width: "84%",
    margin: "0 auto",
    position: "relative",
    top: 48,
    fontSize: "1.3vw",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.2vw",
    },
  },
}));

const introDoc = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleExpandClick = index => {
    setSelectedIndex(selectedIndex === index ? -1 : index);
  };

  return (
    <div className={classes.root}>
      {data.doctors.nodes.map((doctor, index) => {
        const { name, avatar, experience, id } = doctor;
        return (
          <Card className={classes.card} key={index}>
            <CardMedia className={classes.cardMedia}>
              <Img fluid={avatar.fluid} className={classes.img} />
              <p className={classes.name}>{name} 醫師</p>
            </CardMedia>
            <Button
              className={classes.button}
              variant="outlined"
              onClick={() => handleExpandClick(index)}
            >
              ＋經歷
            </Button>
            <Collapse in={selectedIndex === index} timeout="auto" unmountOnExit>
              <CardContent className={classes.content}>
                {experience.map((exp, index) => {
                  return <p key={index}>{exp}</p>;
                })}
              </CardContent>
            </Collapse>
          </Card>
        );
      })}
    </div>
  );
};
// ...GatsbyContentfulFluid
export const query = graphql`
  {
    doctors: allContentfulDoctor(sort: { fields: createdAt, order: ASC }) {
      nodes {
        id
        name
        experience
        avatar {
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
      }
    }
  }
`;

export default introDoc;
