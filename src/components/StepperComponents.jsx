import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography, { typographyClasses } from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Swal from "sweetalert2";
import { addResume } from "../services/allapi";
const StepperComponents = ({ setResumeData, resumeData }) => {
  const steps = [
    "basic information",
    "contact details",
    "education details",
    "work experince",
    "skills and communication",
    "previe& submit",
  ];
  const [activeStep, setActiveStep] = React.useState(0);
  const [inputValue, setValue] = React.useState("");

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const addskil = (skill) => {
    if (resumeData.skills.includes(skill)) {
      alert("Already added");
      
    } else {
      setResumeData({
        ...resumeData,
        skills: [...resumeData.skills, skill],
      });
    }
  };

  const createResume = async () => {
    if (
      resumeData.fullName == "" ||
      resumeData.jobTitle == "" ||
      resumeData.jobLocation == "" ||
      resumeData.email == "" ||
      resumeData.phoneNumber == "" ||
      resumeData.gitLink == "" ||
      resumeData.linkedinLink == "" ||
      // resumeData.portfolioLink == "" ||
      resumeData.courseName == "" ||
      resumeData.collegeName == "" ||
      resumeData.university == "" ||
      resumeData.yop == "" ||
      resumeData.jobOrIntership == "" ||
      resumeData.companyName == "" ||
      resumeData.duration == "" ||
      resumeData.skills == [] ||
      resumeData.summary == ""
    ) {
      Swal.fire({
        title: "error!",
        text: "please fill the form",
        icon: "error",
      });
      return;
    } else {
      try {
        let apiresponse = await addResume(resumeData);
        if (apiresponse.status == 201) {
          Swal.fire({
            title: "success!",
            text: "successfully saved",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "error!",
            text: "error ocuured while calling api",
            icon: "error",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "error!",
          text: "error ocuured while calling api",
          icon: "error",
        });
      }
    }
  };

  const displayfrom = (currentstep) => {
    console.log(currentstep);
    switch (currentstep) {
      case 0:
        return (
          <>
            <Typography varient="h5">personal details</Typography>
            <TextField
              // onChange={(e)=>setResumeData(e.target.value)}
              onChange={(e) =>
                setResumeData({ ...resumeData, fullName: e.target.value })
              }
              className="w-100"
              id="full-name"
              label="fullname"
              variant="standard"
              value={resumeData.fullName}
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, jobTitle: e.target.value })
              }
              className="w-100"
              id="job-title"
              label="jobtitle"
              variant="standard"
              value={resumeData.jobTitle}
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, jobLocation: e.target.value })
              }
              className="w-100"
              id="location"
              label="location"
              variant="standard"
              value={resumeData.jobLocation}
            />
          </>
        );
      case 1:
        return (
          <>
            <Typography varient="h5">contact details</Typography>
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, email: e.target.value })
              }
              className="w-100"
              id="email"
              label="email"
              variant="standard"
              value={resumeData.email}
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, phoneNumber: e.target.value })
              }
              className="w-100"
              id="phoe"
              label="phonenumber"
              variant="standard"
              value={resumeData.phoneNumber}
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, gitLink: e.target.value })
              }
              className="w-100"
              id="github"
              label="githubprofile"
              variant="standard"
              value={resumeData.gitLink}
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, linkedinLink: e.target.value })
              }
              className="w-100"
              id="linkedin"
              label="linkedin"
              variant="standard"
              value={resumeData.linkedinLink}
            />
          </>
        );
      case 2:
        return (
          <>
            <Typography varient="h5">educational details</Typography>
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, courseName: e.target.value })
              }
              className="w-100"
              id="coursena"
              label="coursename"
              variant="standard"
              value={resumeData.courseName}
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, collegeName: e.target.value })
              }
              className="w-100"
              id="college"
              label="college name"
              variant="standard"
              value={resumeData.collegeName}
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, university: e.target.value })
              }
              className="w-100"
              id="univer"
              label="university"
              variant="standard"
              value={resumeData.university}
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, yop: e.target.value })
              }
              className="w-100"
              id="year"
              label="year of passout"
              variant="standard"
              value={resumeData.yop}
            />
          </>
        );

      case 3:
        return (
          <>
            <Typography varient="h5">professional details</Typography>
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, jobOrIntership: e.target.value })
              }
              value={resumeData.jobOrIntership}
              className="w-100"
              id="intership"
              label="job ot internship"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, companyName: e.target.value })
              }
              value={resumeData.companyName}
              className="w-100"
              id="companyna"
              label="company name"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, location: e.target.value })
              }
              value={resumeData.location}
              className="w-100"
              id="location"
              label="location"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setResumeData({ ...resumeData, duration: e.target.value })
              }
              value={resumeData.duration}
              className="w-100"
              id="duration"
              label="duration"
              variant="standard"
            />
          </>
        );
      case 4:
        return (
          <>
            <Typography variant="h5">Skills</Typography>

            <TextField
              value={inputValue}
              onChange={(e) => setValue(e.target.value)}
              className="w-100"
              id="skill"
              label="Skills"
              variant="standard"
            />

            <Button
              variant="contained"
              onClick={() => {
                addskil(inputValue);
              }}
            >
              Add
            </Button>

            <Typography variant="h6">suggestion</Typography>
            <Stack direction="row" spacing={2}>
              <Button onClick={() => addskil("react")} variant="outlined">
                react
              </Button>
              <Button onClick={() => addskil("node.js")} variant="outlined">
                node.js
              </Button>
              <Button onClick={() => addskil("mongodb")} variant="outlined">
                mongodb
              </Button>
              <Button onClick={() => addskil("java")} variant="outlined">
                java
              </Button>
              <Button onClick={() => addskil("python")} variant="outlined">python</Button>
            </Stack>
          </>
        );
      case 5:
        return (
          <>
            <Typography varient="h5">professional details</Typography>
            <TextField
              className="w-100 mb-3"
              id="summary"
              rows={3}
              multiline
              label="write a short summary of yourself"
              variant="standard"
              onChange={(e) =>
                setResumeData({ ...resumeData, summary: e.target.value })
              }
              value={resumeData.summary}
            />
          </>
        );
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

          {displayfrom(activeStep)}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep === steps.length - 1 ? (
              <button onClick={createResume}>Finish</button>
            ) : (
              <Button onClick={handleNext}>next</Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default StepperComponents;
