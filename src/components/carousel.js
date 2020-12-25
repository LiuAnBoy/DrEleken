import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const useStyles = makeStyles(theme => ({
  card: {
    transform: "scale(1.3)",
    boxShadow: "0 3px 10px #c2c2c2",
    "&:hover": {
      transform: "scale(1.3)",
      transitionDuration: "2s",
    },
    [theme.breakpoints.down("xs")]: {
      transform: "scale(1)",
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
  const [cIdx, setCidx] = useState(1);
  const settings = {
    // variableWidth: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: 0,
    slidesToShow: document.body.clientWidth < 376 ? 1 : 3,
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
        <Card className={cIdx === 1 ? classes.card : ""}>
          <CardContent>
            <h1>王世忠 醫師</h1>
            資歷： 前台中市牙醫師公會理事 中華民國植牙安全學會 副秘書長
            中華民國植牙安全學會 專科醫師 中國醫藥大學 牙科部醫師 前台中榮總醫師
            前台中市模範醫師
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className={cIdx === 2 ? classes.card : ""}>
          <CardContent>
            <h1>王世忠 醫師</h1>
            資歷： 前台中市牙醫師公會理事 中華民國植牙安全學會 副秘書長
            中華民國植牙安全學會 專科醫師 中國醫藥大學 牙科部醫師 前台中榮總醫師
            前台中市模範醫師
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className={cIdx === 3 ? classes.card : ""}>
          <CardContent>
            <h1>王世忠 醫師</h1>
            資歷： 前台中市牙醫師公會理事 中華民國植牙安全學會 副秘書長
            中華民國植牙安全學會 專科醫師 中國醫藥大學 牙科部醫師 前台中榮總醫師
            前台中市模範醫師
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className={cIdx === 4 ? classes.card : ""}>
          <CardContent>
            <h1>王世忠 醫師</h1>
            資歷： 前台中市牙醫師公會理事 中華民國植牙安全學會 副秘書長
            中華民國植牙安全學會 專科醫師 中國醫藥大學 牙科部醫師 前台中榮總醫師
            前台中市模範醫師
          </CardContent>
        </Card>
      </div>
    </Slider>
  );
};

export default introDoc;
