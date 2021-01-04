import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "20px 0",
    background: "#acecec",
  },
  card: {
    width: 800,
    // boxShadow: "none",
    margin: "20px auto",
    background: "#fbfcfe",
    [theme.breakpoints.down("sm")]: {
      width: 600,
    },
    [theme.breakpoints.down("xs")]: {
      width: 343,
    },
  },
  Title: {
    fontSize: 48,
    fontWeight: 300,
    margin: "30px 0 10px",
    textAlign: "center",
  },
  qTitle: {
    fontSize: 18,
    fontWeight: 400,
    color: "#2db9b9",
    marginTop: "15px",
    "&.Mui-focused": {
      color: "#2db9b9",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
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
}));

const CheckBox = withStyles({
  root: {
    color: "#737373",
    "&$checked": {
      color: "#2db9b9",
    },
  },
  checked: {},
})(props => (
  <Checkbox
    color="default"
    icon={<RadioButtonUncheckedIcon />}
    checkedIcon={<RadioButtonCheckedIcon />}
    {...props}
  />
));

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

const assessment = ({ getData }) => {
  const [value, setValue] = useState({
    Q1: "",
    Q2: [],
    Q3: [],
    Q4: [],
    Q5: [],
    Q6: [],
    Q7: "",
    Q8: "",
    Q9: "",
    Q10: "",
    Q11: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [isFilled, checkIsFilled] = useState(false);

  const handleChange = event => {
    if (event.target.value) {
      const name = event.target.name;
      setValue({
        ...value,
        [name]: event.target.value,
      });
    }
  };

  const handleCheck = event => {
    const name = event.target.name;
    let data = value[name];
    if (event.target.checked === true) {
      data.push(event.target.value);
    }
    if (event.target.checked === false) {
      const index = data.indexOf(event.target.value);
      if (index > -1) {
        data.splice(index, 1);
      }
    }
  };

  const scrollToContactUs = () => {
    const anchor = document.getElementById("Contact-Us");
    const headerOffset = 90;
    const elementPosition = anchor.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    if (anchor) {
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    scrollToContactUs();
    getData(value);
  };

  const classes = useStyles();
  return (
    <div className={classes.root} id="Assessment-List">
      <Card className={classes.card}>
        <h1 className={classes.Title}>自評表</h1>
        <CardContent>
          <form onSubmit={onSubmit}>
            <FormControl component="fieldset">
              <FormLabel className={classes.qTitle}>
                請問您的孩子的年齡是：
              </FormLabel>
              <RadioGroup aria-label="Q1" name="Q1" onChange={handleChange} row>
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
                <FormControlLabel
                  value="超過12歲"
                  control={<RadioBox />}
                  label={<Typo>超過12歲</Typo>}
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel className={classes.qTitle}>
                請問您的孩子有無下列習慣(多選)：
              </FormLabel>
              <FormGroup aria-label="Q2" name="Q2" onClick={handleCheck} row>
                <FormControlLabel
                  control={<CheckBox value="喜歡用嘴巴呼吸" name="Q2" />}
                  label={<Typo>喜歡用嘴巴呼吸</Typo>}
                />
                <FormControlLabel
                  control={<CheckBox value="喜歡吐舌頭" name="Q2" />}
                  label={<Typo>喜歡吐舌頭</Typo>}
                />
                <FormControlLabel
                  control={<CheckBox value="喜歡吃手指" name="Q2" />}
                  label={<Typo>喜歡吃手指</Typo>}
                />
                <FormControlLabel
                  control={<CheckBox value="喜歡咬嘴唇" name="Q2" />}
                  label={<Typo>喜歡咬嘴唇</Typo>}
                />
                <FormControlLabel
                  control={<CheckBox value="喜歡趴睡" name="Q2" />}
                  label={<Typo>喜歡趴睡</Typo>}
                />
                <FormControlLabel
                  control={<CheckBox value="無" name="Q2" />}
                  label={<Typo>無</Typo>}
                />
              </FormGroup>
            </FormControl>
            <FormLabel className={classes.qTitle}>
              請問您的孩子有無下列問題(多選)：
            </FormLabel>
            <FormGroup aria-label="Q3" name="Q3" onClick={handleCheck} row>
              <FormControlLabel
                control={<CheckBox value="吃東西比較慢" name="Q3" />}
                label={<Typo>吃東西比較慢</Typo>}
              />
              <FormControlLabel
                control={
                  <CheckBox value="不喜歡咀嚼，只喜歡吃軟爛的食物" name="Q3" />
                }
                label={<Typo>不喜歡咀嚼，只喜歡吃軟爛的食物</Typo>}
              />
              <FormControlLabel
                control={<CheckBox value="無" name="Q3" />}
                label={<Typo>無</Typo>}
              />
            </FormGroup>
            <FormLabel className={classes.qTitle}>
              請問您的孩子有無下列狀況(多選)：
            </FormLabel>
            <FormGroup aria-label="Q4" name="Q4" onClick={handleCheck} row>
              <FormControlLabel
                control={<CheckBox value="經常覺得鼻塞" name="Q4" />}
                label={<Typo>經常覺得鼻塞</Typo>}
              />
              <FormControlLabel
                control={<CheckBox value="經常鼻子過敏" name="Q4" />}
                label={<Typo>經常鼻子過敏</Typo>}
              />
              <FormControlLabel
                control={<CheckBox value="經常嘴開開" name="Q4" />}
                label={<Typo>經常嘴開開</Typo>}
              />
              <FormControlLabel
                control={<CheckBox value="無" name="Q4" />}
                label={<Typo>無</Typo>}
              />
            </FormGroup>
            <FormLabel className={classes.qTitle}>
              請問您的孩子有無下列姿態(多選)：
            </FormLabel>
            <FormGroup aria-label="Q5" name="Q5" onClick={handleCheck} row>
              <FormControlLabel
                control={<CheckBox value="一不注意就駝背" name="Q5" />}
                label={<Typo>一不注意就駝背</Typo>}
              />
              <FormControlLabel
                control={<CheckBox value="站姿歪歪的，高低肩" name="Q5" />}
                label={<Typo>站姿歪歪的，高低肩</Typo>}
              />
              <FormControlLabel
                control={<CheckBox value="無" name="Q5" />}
                label={<Typo>無</Typo>}
              />
            </FormGroup>
            <FormLabel className={classes.qTitle}>
              請問您的孩子有無下列情形(多選)：
            </FormLabel>
            <FormGroup aria-label="Q6" name="Q6" onClick={handleCheck} row>
              <FormControlLabel
                control={<CheckBox value="牙齒不整齊" name="Q6" />}
                label={<Typo>牙齒不整齊</Typo>}
              />
              <FormControlLabel
                control={<CheckBox value="嘴比較凸" name="Q6" />}
                label={<Typo>嘴比較凸</Typo>}
              />
              <FormControlLabel
                control={<CheckBox value="下巴較其他小朋友不明顯" name="Q6" />}
                label={<Typo>下巴較其他小朋友不明顯</Typo>}
              />
              <FormControlLabel
                control={<CheckBox value="需要用力才能將嘴巴閉上" name="Q6" />}
                label={<Typo>需要用力才能將嘴巴閉上</Typo>}
              />
              <FormControlLabel
                control={<CheckBox value="無" name="Q6" />}
                label={<Typo>無</Typo>}
              />
            </FormGroup>
            <FormLabel className={classes.qTitle}>
              請問您是否知道一些被忽視的習慣會影響兒童言不發育的進度：
            </FormLabel>
            <RadioGroup aria-label="Q7" name="Q7" onChange={handleChange} row>
              <FormControlLabel
                value="是"
                control={<RadioBox />}
                label={<Typo>是</Typo>}
              />
              <FormControlLabel
                value="否"
                control={<RadioBox />}
                label={<Typo>否</Typo>}
              />
            </RadioGroup>
            <FormLabel className={classes.qTitle}>
              請問您是否知道顏面發育進步不良會直接造成當下跟未來顏值美觀上的問題：
            </FormLabel>
            <RadioGroup aria-label="Q8" name="Q8" onChange={handleChange} row>
              <FormControlLabel
                value="是"
                control={<RadioBox />}
                label={<Typo>是</Typo>}
              />
              <FormControlLabel
                value="否"
                control={<RadioBox />}
                label={<Typo>否</Typo>}
              />
            </RadioGroup>
            <FormLabel className={classes.qTitle}>
              請問您是否知道顏部的發育生長時期在12歲之前
              <span className={classes.span}>(只有12歲前世改善的黃金時期)</span>
              ：
            </FormLabel>
            <RadioGroup aria-label="Q9" name="Q9" onChange={handleChange} row>
              <FormControlLabel
                value="是"
                control={<RadioBox />}
                label={<Typo>是</Typo>}
              />
              <FormControlLabel
                value="否"
                control={<RadioBox />}
                label={<Typo>否</Typo>}
              />
            </RadioGroup>
            <FormLabel className={classes.qTitle}>
              請問您是否知道顏面發育進度不足幾乎是無法自行改善的：
            </FormLabel>
            <RadioGroup aria-label="Q10" name="Q10" onChange={handleChange} row>
              <FormControlLabel
                value="是"
                control={<RadioBox />}
                label={<Typo>是</Typo>}
              />
              <FormControlLabel
                value="否"
                control={<RadioBox />}
                label={<Typo>否</Typo>}
              />
            </RadioGroup>
            <FormLabel className={classes.qTitle}>
              是否願意帶孩子一起來參加免費兒童顏面部發育評估及專家講座：
            </FormLabel>
            <RadioGroup aria-label="Q11" name="Q11" onChange={handleChange} row>
              <FormControlLabel
                value="是"
                control={<RadioBox />}
                label={<Typo>是</Typo>}
              />
              <FormControlLabel
                value="否"
                control={<RadioBox />}
                label={<Typo>否</Typo>}
              />
            </RadioGroup>

            <Button
              className={classes.btn}
              variant="contained"
              // onClick={onSubmit}
              type="submit"
            >
              送出
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default assessment;
