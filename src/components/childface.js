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
    alignItems: "stretch",
    background: "#f4fafd",
    padding: "60px 0",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      padding: "30px 0",
      alignItems: "center",
    },
  },
  img: {
    width: 400,
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "91.4vw",
      height: "100%",
    },
  },

  card: {
    width: 780,
    boxShadow: "none",
    padding: "0 10px",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "91.4vw",
      height: "53vw",
      padding: "0"
    },
  },
  icon: {
    fontSize: 48,
    transform: "scaleX(-1)",
    color: "#009999",
    display: "block",
    margin: "0 0 15px",
    [theme.breakpoints.down("md")]: {
      fontSize: 30,
      margin: "0",
    },
  },
  title: {
    fontSize: 60,
    margin: 0,
    fontStyle: "italic",
    display: "inline-block",
    [theme.breakpoints.down("md")]: {
      fontSize: "4.6vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "7vw",
    },
  },
  content: {
    lineHeight: "40px",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "2vw",
      lineHeight: "3.2vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4vw",
      lineHeight: "3.2vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.6vw",
      lineHeight: "5.2vw",
    },
  },
}));

const childface = () => {
  const data = useStaticQuery(query);
  const classes = useStyles();

  return (
    <section className={classes.root} id="Child-Face-Control">
      <Img fluid={data.file.childImageSharp.fluid} className={classes.img} />
      <Card className={classes.card}>
        <CardContent>
          <FormatQuoteIcon className={classes.icon} />
          <Typography variant="h6" className={classes.content}>
            <p className={classes.title}>你知道嗎？</p>
            每10個小朋友就有7.5個顎骨發育不良。許多家長認為孩子會換牙，不需要去注意牙齒問題，進而忽略了孩子顎骨的發育問題。
            。7歲~10歲的孩童處於成長發育階段，是治療的黃金期。肯恩象醫生團隊堅持顏面管理一定要營養、睡眠、矯正、生長發育、大腦發育5大方面同時進行，因為它們是息息相關不可分割的關聯。
          </Typography>
        </CardContent>
      </Card>
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
