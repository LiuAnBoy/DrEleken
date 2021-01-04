import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button, Typography } from "@material-ui/core";
import { sendEmail, NORMAL, SEND_FAIL, SEND_SUCCESS } from "../constants/email";

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
    width: 300,
  },
  btn: {
    width: 100,
    boxShadow: "none",
    position: "relative",
    marginTop: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#00cccc",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#00b3b3",
    },
  },
  successMsg: {
    fontSize: 14,
    display: "inline-block",
    position: "relative",
    left: "120px",
    top: "10px",
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
})(props => <Radio color="default" required {...props} />);

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

const contact = ({ assessmentData }) => {
  const classes = useStyles();
  const [sendMsg, setSendMsg] = useState("送出");
  const [btnDisable, setBtnDisable] = useState(false);
  const [appointment, setAppointment] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
    age: "",
  });
  const [assessment, setAssessment] = useState();
  useEffect(() => {
    setAssessment(assessmentData)
  })

  const handleChange = e => {
    const targetName = e.target.name;
    setAppointment({
      ...appointment,
      [targetName]: e.target.value,
    });
  };

  const onButtonStatusChange = status => {
    switch (status) {
      case NORMAL:
        setSendMsg("送出");
        setBtnDisable(false);
        break;
      case SEND_SUCCESS:
        setSendMsg("送出成功");
        setBtnDisable(true);
        break;
      case SEND_FAIL:
        setSendMsg("送出失敗");
        setBtnDisable(true);
        break;
      default:
        setSendMsg("送出");
        setBtnDisable(false);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    sendEmail({ onButtonStatusChange, appointment, assessment });
  };

  return (
    <div className={classes.root} id="Contact-Us">
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
              name="name"
              className={classes.textboxSmall}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="電話"
              variant="outlined"
              name="phone"
              className={classes.textboxSmall}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="電子郵件"
              variant="outlined"
              name="email"
              className={classes.textboxBig}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="留言訊息"
              name="msg"
              variant="outlined"
              multiline
              rows={5}
              className={classes.textboxBig}
              onChange={handleChange}
            />
            <FormLabel className={classes.qTitle}>
              請問您的孩子的年齡是：
            </FormLabel>
            <RadioGroup
              aria-label="age"
              name="age"
              row
              className={classes.radioGroup}
              onChange={handleChange}
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
            <Button
              type="submit"
              variant="contained"
              className={classes.btn}
              onClick={onSubmit}
              disabled={btnDisable}
            >
              {sendMsg}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default contact;
