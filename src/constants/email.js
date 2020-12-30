import React from "react";
import emailjs from "emailjs-com";

const NORMAL = "NORMAL";
const SEND_FAIL = "SEND_FAIL";
const SEND_SUCCESS = "SEND_SUCCESS";

export const sendEmail = ({ onButtonStatusChange, appointment }) => {
  const { name, phone, email, msg, age } = appointment;
  const templateParams = {
    name: name,
    phone: phone,
    email: email,
    msg: msg,
    age: age,
  };

  const serviceID = process.env.EMAILJS_SERVICE_ID;
  const templateID = process.env.EMAILJS_TEMPLATE_ID;
  const userID = process.env.EMAILJS_USER_ID;

  const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

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
