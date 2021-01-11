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
    position: "relative",
    zIndex: 9999,
    transition: theme.transitions.create("transform", { duration: ".4s" }),
    [theme.breakpoints.down("xl")]: {
      width: 320,
      height: 460,
      transform: "scale(1.2)",
    },
    [theme.breakpoints.down("md")]: {
      width: 300,
      height: 450,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
      height: 410,
      boxShadow: 0,
    },
  },
  initCard: {
    position: "relative",
    zIndex: 9998,
    transition: theme.transitions.create("transform", { duration: ".4s" }),
    fontSize: 13,
    [theme.breakpoints.down("xl")]: {
      width: 320,
      height: 460,
    },
    [theme.breakpoints.down("md")]: {
      width: 300,
      height: 450,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
      height: 410,
      boxShadow: 0,
    },
  },
  cardMedia: {
    zIndex: 0,
  },
  img: {
    margin: "20px auto 0",
    width: 180,
    [theme.breakpoints.up("md")]: {
      width: 120,
    },
    [theme.breakpoints.up("sm")]: {
      width: 120,
    },
    [theme.breakpoints.down("xs")]: {
      width: 90,
    },
  },
  name: {
    fontSize: 20,
    margin: 0,
    textAlign: "center",
    margin: "20px 0px 0",
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0px 0",
    },
  },
  content: {
    width: "92%",
    margin: "10px auto",
    fontWeight: 300,
    lineHeight: "25px",
    fontSize: "30px",

    [theme.breakpoints.up("md")]: {
      fontSize: 14,
      margin: "0px auto",
      lineHeight: "24px",
      width: "92%",
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: "20px",
      fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      margin: "0 12px",
      
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

  return (
    <Slider {...settings}>
      {data.doctors.nodes.map((doctor, i) => {
        const { name, avatar, experience, id } = doctor;
        return (
          <div key={id}>
            <Card className={onScale(i) ? classes.card : classes.initCard}>
              <CardMedia className={classes.cardMedia}>
                <Img fluid={avatar.fluid} className={classes.img} />
                <p className={classes.name}>{name} 醫師</p>
              </CardMedia>
              <CardContent>
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
