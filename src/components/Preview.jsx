import React from "react";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { FaFileDownload } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";



const Preview = ({ resumeData }) => {
  const onDownloadClick=async()=>{
let paperElement=document.getElementById('paper')

let papercanvas= await html2canvas(paperElement,{scale:2})
let imageUrl=papercanvas.toDataURL('image/png')
let pdf=new jsPDF("p", "mm", "a4");
let pdfwidth=pdf.internal.pageSize.getWidth()
let pdfheight=(pdfwidth*papercanvas.height)/papercanvas.width
pdf.addImage(imageUrl,"png",0,0,pdfwidth,pdfheight)
pdf.save('resume.pdf')
  }
  console.log(resumeData);
  return (
    <div>
      <div className="text-end mb-2">
        <Button onClick={onDownloadClick} className="btn btn-primary">
          <FaFileDownload />
        </Button>
      </div>
      <Paper id="paper" className="p-5" elevation={3}>
        <Typography variant="h5" className="text-center">
          {resumeData?.fullName}
        </Typography>
        <Typography color="blue" className="text-center">
          {resumeData?.jobTitle}
        </Typography>
        <Typography color="blue" className="text-center">
          {resumeData?.jobLocation}| {resumeData?.email}|{" "}
          {resumeData?.phoneNumber}
        </Typography>

        <Typography className="text-center m-3">
          <a href="">{resumeData?.gitLink}</a>|
          <a href="">{resumeData?.linkedinLink}</a>|{""}
          {/* <a href="">{resumeData?.portfolio}</a> */}
        </Typography>
       

        <Divider>education</Divider>
        <Typography component="div" className="text-center  m-3">
          {resumeData?.courseName}| {resumeData?.collegeName}|{" "}
          {resumeData?.university}|{resumeData?.yop}
        </Typography>

        <Divider>profesional experience</Divider>
        <Typography variant="body1" className="text-center  m-3">
          {resumeData?.jobOrIntership}| {resumeData?.companyName}|
          {resumeData?.location}|{resumeData?.duration}
        </Typography>
         <Divider>Summary</Divider>
        <Typography component="div">{resumeData?.summary}</Typography>

        <Divider>Skills</Divider>

        {resumeData?.skills?.length > 0 && (
          <Box className="d-flex gap-2 flex-wrap">
            {resumeData.skills.map((eachSkill, index) => (
              <Button key={index} variant="outlined">
                {eachSkill}
              </Button>
              
            ))}
            
          </Box>
        )}
      </Paper>
    </div>
  );
};

export default Preview;
