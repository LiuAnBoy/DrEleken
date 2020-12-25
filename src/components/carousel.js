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
    transform: "scale(1.3)",
    // boxShadow: "0 3px 10px #c2c2c2",
    width: 540,
    height: 300,
    position: "relative",
    left: "-30%",
    zIndex: 9999,
    transition: theme.transitions.create("transform", { duration: ".4s" }),
    [theme.breakpoints.down("xs")]: {
      transform: "scale(1)",
    },
  },
  initCard: {
    display: "flex",
    flexDirection: "row",
    // boxShadow: "0 3px 10px #c2c2c2",
    width: 450,
    height: 250,
    position: "relative",
    left: "-15%",
    transition: theme.transitions.create("transform", { duration: ".4s" }),
    fontSize: 13,
  },
  cardMedia: {
    zIndex: 0,
  },
  img: {
    width: 150,
    margin: "0 0px 0 20px",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  },
  name: {
    margin: "10px 0",
    fontSize: 20,
  },
  content: {
    // fontSize: 16,
    fontWeight: 300,
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
  const [cIdx, setCidx] = useState(1);
  const [clientWidth, setClientWidth] = useState();

  useEffect(() => setClientWidth(document.body.clientWidth > 414));
  const settings = {
    // variableWidth: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: 0,
    slidesToShow: clientWidth ? 3 : 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (currentIndex, nextIndex) => {
      setCidx(nextIndex + 1);
    },
  };
  return (
    <Slider {...settings}>
      <div>
        <Card className={cIdx === 1 ? classes.card : classes.initCard}>
          <CardMedia className={classes.cardMedia}>
            <Img
              fluid={data.allFile.nodes[0].childImageSharp.fluid}
              className={classes.img}
            />
          </CardMedia>
          <CardContent>
            <p className={classes.name}>王世忠 醫師</p>
            <h4 className={classes.content}>
              資歷：<br />
              前台中市牙醫師公會理事<br />
              中華民國植牙安全學會 副秘書長<br />
              中華民國植牙安全學會 專科醫師<br />
              中國醫藥大學 牙科部醫師<br />
              前台中榮總醫師<br />
              前台中市模範醫師
            </h4>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className={cIdx === 2 ? classes.card : classes.initCard}>
          <CardMedia className={classes.cardMedia}>
            <Img
              fluid={data.allFile.nodes[2].childImageSharp.fluid}
              className={classes.img}
            />
          </CardMedia>
          <CardContent>
            <p className={classes.name}>蔡婷如 醫師</p>
            <h4 className={classes.content}>
              資歷： <br />
              前中山醫學大學附設醫院 牙科部醫師<br />
              前衛生福利部豐原醫院 牙科部醫師<br />
              台中榮總口腔外科訓練醫師<br />
              日本齒科大學口腔醫學院部研修<br />
              中華民國臨床植牙學會 會員醫師
            </h4>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className={cIdx === 3 ? classes.card : classes.initCard}>
          <CardMedia className={classes.cardMedia}>
            <Img
              fluid={data.allFile.nodes[1].childImageSharp.fluid}
              className={classes.img}
            />
          </CardMedia>
          <CardContent>
            <p className={classes.name}>葉俊佑 醫師</p>
            <h4 className={classes.content}>
              資歷： <br />
              賓州大學(UPenn)進階美學暨數位植牙認證醫師<br />
              西雅圖華盛頓大學(uw)牙醫學院進修<br />
              日本齒科大學生命齒學部研修<br />
              台灣牙醫顯微美學治療學會 會員醫師<br />
              家庭牙醫學科專科醫師<br />
              中山醫學大學附設醫院醫師
            </h4>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className={cIdx === 4 ? classes.card : classes.initCard}>
          <CardMedia className={classes.cardMedia}>
            <Img
              fluid={data.allFile.nodes[3].childImageSharp.fluid}
              className={classes.img}
            />
          </CardMedia>
          <CardContent>
          <p className={classes.name}>李雨柔 醫師</p>
            <h4 className={classes.content}>
              資歷： <br />
              NYU美國紐約大學植牙訓練<br />
              台灣-南加州牙周植牙研究中心認證醫師<br />
              台灣植牙醫學會 會員醫師<br />
              TissueArt植牙美學認證醫師<br />
              台灣美容植牙醫學會會員醫師<br />
              前台中榮民總醫院牙科部醫師<br />
              前中山醫學大學附設醫院醫師<br />
              中山醫學大學牙醫學士
            </h4>
          </CardContent>
        </Card>
      </div>
    </Slider>
  );
};

export const query = graphql`
  {
    allFile(filter: { relativePath: { regex: "/^doc[1-9].png/" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default introDoc;
