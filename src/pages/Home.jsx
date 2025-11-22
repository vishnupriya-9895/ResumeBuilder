import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
function Home() {
  return (
    <div >
      {/* first background image and box */}
      <div className='main'>
     <div className='box1'>
      <h1>Designed to get hired</h1>
      <h3 style={{fontSize:"900"}}>your skills your story your next job-all in one</h3>
      <Button  component={Link}
  to="/Resumegenerator"
       style={{marginLeft:"90px",background:"#200863"}} variant="contained">  Make your resume</Button>
     </div>
      </div>
      {/* second div with content */}
      <div style={{paddingTop:"40px"}} id="tools" className='container'>
       <h2 style={{textAlign:"center"}}>Tools</h2>
       <div  style={{height:"450px"}} className="row">
        <div className="col-6">
<h4 style={{fontWeight:"bold"}}>Resume</h4>
<p>Create unlimited new resumes and easily edit them afterwards.</p>
<h4 style={{fontWeight:"bold"}}>Cover letter</h4>
<p>Easily write professional cover letters.</p>
<h4 style={{fontWeight:"bold"}}>Jobs</h4>
<p>Automatically receive new and relevant job postings.</p>
<h4 style={{fontWeight:"bold"}}>Applications</h4>
<p>Effortlessly manage and track your job applications in an organized manner</p>
        </div>
         <div className="col-6">
<img style={{width:"500px"}} src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="" />
        </div>

       </div>
      </div>
      {/* third  image*/}
      <div className='secondimage'>
      </div>
      {/* content */}
      <div className="container">
        <div style={{paddingTop:"40px",height:"643px"}} className='content'>
        <h4 style={{textAlign:"center",marginBottom:"40px"}}>Testimony</h4>
        <div className="row">
          <div className="col-6"><h4>Trusted by professionals worldwide.</h4>
          <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.

In fact, users who used LiveCareer reported getting hired an average of 48 days faster.

Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div  className="col-6">
           <div style={{display:'flex',marginTop:"10px"}}>
             <div className="col-3"><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" /></div>
            <div className="col-3"><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" /></div>
            <div className="col-3"><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" /></div>
             <div className="col-3"><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="" /></div>
           </div>
           <div style={{display:"flex", marginTop:"30px"}}>
            <div className="col-3"><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" /></div>
            <div className="col-3"><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" /></div>
            <div className="col-3"><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" /></div>
             <div className="col-3"><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="" /></div>
           </div>
           <div style={{display:"flex" , marginTop:"30px"}}>
            <div className="col-3"><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" /></div>
            <div className="col-3"><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" /></div>
            <div className="col-3"><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" /></div>
             <div className="col-3"><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="" /></div>
           </div>
          
             
             
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Home