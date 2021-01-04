import React, { useState } from "react";
import ContactFrom from "./contact";
import AssessmentFrom from "./assessment";
import { sendEmail } from "../constants/email";

const contactus = () => {
  const [assessment, setAssessment] = useState();
  const getData = data => {
    setAssessment(data);
  };

  return (
    <section>
      <AssessmentFrom getData={getData} />
      <ContactFrom assessmentData={assessment}/>
    </section>
  );
};

export default contactus;
