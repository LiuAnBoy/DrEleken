import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    maxWidth: "100%",
    padding: "50px 0 50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    background: "linear-gradient(30deg, #04c8c8 20%, #2abbbb 80%)",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  card: {
    width: 590,
    margin: "0 20px",
    [theme.breakpoints.down("xs")]: {
      width: 343,
      margin: "0 auto",
    },
  },
  content: {
    margin: "0 20px",
  },
  title: {
    fontSize: 48,
    fontWeight: 300,
    color: "#fff",
  },
  p: {
    fontSize: 28,
    fontWeight: 300,
    color: "#fff",
    "&>span": {
      color: "orange",
    },
  },
  p2: {
    fontSize: 22,
    fontWeight: 300,
    color: "#fff",
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textboxSmall: {
    width: 260,
    margin: "10px 10px",
    [theme.breakpoints.down("lg")]: {
      width: 200,
    },
    [theme.breakpoints.down("md")]: {
      width: 140,
    },
    [theme.breakpoints.down("xs")]: {
      width: 140,
    },
  },
  textboxBig: {
    width: 540,
    margin: "10px 10px",
    [theme.breakpoints.down("lg")]: {
      width: 420,
    },
    [theme.breakpoints.down("md")]: {
      width: 300,
    },
  },
  qTitle: {
    margin: "20px 10px",
    display: "block",
    width: 200,
    [theme.breakpoints.down("xs")]: {
      margin: "10px 10px 8px",
    },
  },
  radioGroup: {
    margin: "5px 10px",
    display: "block",
    width: 290
  },
}));

const RadioBox = withStyles({
  root: {
    color: "#737373",
    "&$checked": {
      color: "#2db9b9",
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

const Typo = withStyles(theme => ({
  root: {
    fontSize: 16,
    color: "#666666",
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
}))(Typography);

const contact = () => {
  const classes = useStyles();
  return (
    <section className={classes.root} id="Contact-Us">
      <div className={classes.content}>
        <h2 className={classes.title}>線上預約</h2>
        <p className={classes.p}>
          本院採<span>預約制</span>，請儘早來電預約看診時間。
        </p>
        <p className={classes.p2}>
          ＊由於每個人的治療時間不一定，如佔用您的時間，請見諒。
        </p>
        <h5>免費預約諮詢專線：04-268-66662</h5>
      </div>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="姓名"
              variant="outlined"
              className={classes.textboxSmall}
            />
            <TextField
              id="outlined-basic"
              label="電話"
              variant="outlined"
              className={classes.textboxSmall}
            />
            <TextField
              id="outlined-basic"
              label="電話"
              variant="outlined"
              className={classes.textboxBig}
            />
            <TextField
              id="outlined-basic"
              label="留言訊息"
              variant="outlined"
              multiline
              rows={5}
              className={classes.textboxBig}
            />
            <FormLabel className={classes.qTitle}>
              請問您的孩子的年齡是：
            </FormLabel>
            <RadioGroup
              aria-label="Q1"
              name="Q1"
              row
              className={classes.radioGroup}
            >
              <FormControlLabel
                value="0-6歲"
                control={<RadioBox />}
                label={<Typo>6-10歲</Typo>}
              />
              <FormControlLabel
                value="7-10歲"
                control={<RadioBox />}
                label={<Typo>7-10歲</Typo>}
              />
              <FormControlLabel
                value="11-12歲"
                control={<RadioBox />}
                label={<Typo>11-12歲</Typo>}
              />
            </RadioGroup>
            <Button type="submit" variant="contained">
              送出
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default contact;