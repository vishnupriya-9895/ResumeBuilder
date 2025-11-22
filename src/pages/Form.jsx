import React, { useState } from "react";
import StepperComponents from "../components/StepperComponents";
import Preview from "../components/Preview";

function Form() {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    jobTitle: "",
    jobLocation: "",
    email: "",
    phoneNumber: "",
    gitLink: "",
    linkedinLink: "",
    // portfolioLink: "",
    courseName: "",
    collegeName: "",
    university: "",
    location:"",
    yop: "",
    jobOrIntership: "",
    companyName: "",
    duration: "",
    skills: [],
    summary: "",
  });
  return (
    <div className="row container mt-5 mx-5">
      <div className="col-md-6">
        <StepperComponents setResumeData={setResumeData} resumeData={resumeData} />
      </div>

      <div className="col-md-6">
        <Preview resumeData={resumeData} />
      </div>
    </div>
  );
}

export default Form;
