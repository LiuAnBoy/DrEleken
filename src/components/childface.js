import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(30deg, #84e1e1 20%, #adebeb 80%)",
    padding: "40px 0",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  img: {
    width: 400,
    height: 400,
    [theme.breakpoints.down("md")]: {
      width: 300,
      height: 300,
    },
    [theme.breakpoints.down("sm")]: {
      width: 250,
      height: 250,
    },
    [theme.breakpoints.down("xs")]: {
      width: 320,
      height: 320,
    },
  },

  card: {
    height: 400,
    width: 780,
    boxShadow: "none",
    padding: "0 10px",
    [theme.breakpoints.down("md")]: {
      width: 580,
      height: 300,
    },
    [theme.breakpoints.down("sm")]: {
      width: 400,
      height: 250,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
      height: 400,
    },
  },
  icon: {
    fontSize: 48,
    transform: "scaleX(-1)",
    color: "#009999",
    display: "block",
    margin: "0 0 15px",
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
      margin: "0 0 12.5px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 32,
      margin: "0 0 10px",
    },
  },
  title: {
    fontSize: 60,
    margin: 0,
    fontStyle: "italic",
    display: "inline-block",
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 36,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 40,
    },
  },
  content: {
    lineHeight: "40px",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
      lineHeight: "24px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "18px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      lineHeight: "24px",
    },
  },
}));

const childface = () => {
  const data = useStaticQuery(query);
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Img fluid={data.file.childImageSharp.fluid} className={classes.img} />
      <div>
        <Card className={classes.card}>
          <CardContent>
            <FormatQuoteIcon className={classes.icon} />
            <Typography variant="h6" className={classes.content}>
              <p className={classes.title}>你知道嗎？</p>
              每10個小朋友就有7.5個顎骨發育不良。許多家長認為孩子會換牙，不需要去注意牙齒問題，進而忽略了孩子顎骨的發育問題。
              <strong>
                若咬合不正將影響咬食物的效率，顎骨發育不良將影響孩子睡眠進而影響大腦專注力。
              </strong>
              7歲~10歲的孩童處於成長發育階段，身體各部位尚未定型所以可塑性大，這將有利於肯恩象團隊醫師進行調整改善，且能避免一些不必要的受累
              例如：拔牙、手術。
              肯恩象醫生團隊堅持顏面管理一定要營養、睡眠、矯正、生長發育、大腦發育5大方面同時進行，因為它們是息息相關不可分割的關聯。
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export const query = graphql`
  {
    file(relativePath: { eq: "tooth.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default childface;
