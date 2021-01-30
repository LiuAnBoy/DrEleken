import emailjs from "emailjs-com";

export const NORMAL = "NORMAL";
export const SEND_FAIL = "SEND_FAIL";
export const SEND_SUCCESS = "SEND_SUCCESS";

export const sendEmail = ({
  onButtonStatusChange,
  appointment,
  assessment,
}) => {
  const { name, phone, email, msg, age } = appointment;
  const templateParams = {
    name: name,
    phone: phone,
    email: email,
    msg: msg,
    age: age,
    filled: "未填寫",
    Q1: "未填寫",
    Q2: "未填寫",
    Q3: "未填寫",
    Q4: "未填寫",
    Q5: "未填寫",
    Q6: "未填寫",
    Q7: "未填寫",
    Q8: "未填寫",
    Q9: "未填寫",
    Q10: "未填寫",
    Q11: "未填寫",
  };

  const serviceID = process.env.EMAILJS_SERVICE_ID;
  const templateID = process.env.EMAILJS_TEMPLATE_ID;
  const userID = process.env.EMAILJS_USER_ID;

  const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  if (assessment) {
    const { Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11 } = assessment;
    templateParams.filled = "已填寫"
    templateParams.Q1 = Q1;
    templateParams.Q2 = Q2;
    templateParams.Q3 = Q3;
    templateParams.Q4 = Q4;
    templateParams.Q5 = Q5;
    templateParams.Q6 = Q6;
    templateParams.Q7 = Q7;
    templateParams.Q8 = Q8;
    templateParams.Q9 = Q9;
    templateParams.Q10 = Q10;
    templateParams.Q11 = Q11;
  }


  emailjs
    .send(serviceID, templateID, templateParams, userID)
    .then(async res => {
      onButtonStatusChange(SEND_SUCCESS);
    })
    .catch(async error => {
      onButtonStatusChange(SEND_FAIL);
    })
    .finally(async () => {
      await sleep(1500);
      onButtonStatusChange(NORMAL);
    });
};
