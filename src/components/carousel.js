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

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    zIndex: 9999,
    transition: theme.transitions.create("transform", { duration: ".4s" }),
    [theme.breakpoints.down("xl")]: {
      width: 600,
      height: 350,
      transform: "scale(1.2)",
      left: "-5%",
    },
    [theme.breakpoints.down("lg")]: {
      width: 600,
      height: 300,
    },
    [theme.breakpoints.down("md")]: {
      transform: "scale(1.2)",
      left: "-25px",
      width: 600,
      height: 260,
    },
    [theme.breakpoints.down("sm")]: {
      transform: "scale(1.2)",
      left: "20px",
      // left: "10px",
      // width: 343,
      // height: 230,
    },
    [theme.breakpoints.down("xs")]: {
      transform: "scale(1)",
      width: 343,
      height: 230,
      left: "102px",
    },
  },
  initCard: {
    display: "flex",
    flexDirection: "row",
    // boxShadow: "0 3px 10px #c2c2c2",
    // width: 450,
    // height: 250,
    // left: "-15%",
    position: "relative",
    zIndex: 9998,
    transition: theme.transitions.create("transform", { duration: ".4s" }),
    fontSize: 13,
    [theme.breakpoints.down("xl")]: {
      width: 600,
      height: 350,
    },
    [theme.breakpoints.down("lg")]: {
      width: 600,
      height: 300,
    },
    [theme.breakpoints.down("md")]: {
      height: 260,
    },
    [theme.breakpoints.down("sm")]: {
      // left: "-30px",
      // width: 430,
      // height: 260,
    },
    [theme.breakpoints.down("xs")]: {
      transform: "scale(1)",
    },
  },
  cardMedia: {
    zIndex: 0,
  },
  img: {
    margin: "0 40px 0 50px",
    width: 150,
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    [theme.breakpoints.up("xl")]: {
    },
    [theme.breakpoints.down("xs")]: {
      width: 90,
      margin: "0 -10px 0 0px",
    },
  },
  name: {
    fontSize: 20,
    [theme.breakpoints.up("xl")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
      margin: "0 0",
    },
  },
  content: {
    fontWeight: 300,
    [theme.breakpoints.down("xl")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: 15,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
    },
  },
}));

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-next-arrow"
      onClick={onClick}
      style={{
        ...style,
      }}
    >
      <NavigateNextIcon style={{ fontSize: 48 }} />
    </div>
  );
};

const PrevArrow = props => {
  const { className, style, onClick } = props;

  return (
    <div
      className="slick-prev-arrow"
      onClick={onClick}
      style={{
        ...style,
      }}
    >
      <NavigateBeforeIcon style={{ fontSize: 48 }} />
    </div>
  );
};

const introDoc = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [clientWidth, setClientWidth] = useState();

  const onScale = index => {
    if (currentIdx === index) {
      return true;
    } else return false;
  };

  useEffect(() => setClientWidth(document.body.clientWidth <= 768));
  const settings = {
    variableWidth: true,
    centerMode: true,
    infinite: true,
    slidesToShow: clientWidth ? 1 : 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, currentIndex) => {
      setCurrentIdx(currentIndex);
    },
  };

  console.log(document.body.clientWidth)

  return (
    <Slider {...settings}>
      {data.doctors.nodes.map((doctor, i) => {
        const { name, avatar, experience, id } = doctor;
        return (
          <div key={id}>
            <Card className={onScale(i) ? classes.card : classes.initCard}>
              <CardMedia className={classes.cardMedia}>
                <Img fluid={avatar.fluid} className={classes.img} />
              </CardMedia>
              <CardContent>
                <p className={classes.name}>{name} 醫師</p>
                <h4 className={classes.content}>
                  資歷：
                  {experience.map((exp, index) => {
                    return <div key={index}>{exp}</div>;
                  })}
                </h4>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </Slider>
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
