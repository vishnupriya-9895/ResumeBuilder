import { Typography } from '@mui/material'
import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { FaFileAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Form from './Form';
function Resumegenerator() {
  return (
    <div className='container'>
      <Typography sx={{mt:'100px',mb:'80px',textAlign:'center'}} variant="h4">create a job wining resume in minutes</Typography>
    <box className='cards'>
     <div className='card2'>
<Typography sx={{marginTop:"10px",marginBottom:"20px"}} variant='h2'><FaFileAlt /></Typography>
      <Typography variant='h5'>add your informations</Typography>
      <Typography variant='p'>add pre written examples to each section</Typography>
      <Typography variant='h6'>step1</Typography>
      
     </div>
      <div className='card2'>
<Typography sx={{marginTop:"10px",marginBottom:"20px"}} variant='h2'><FaFileDownload /></Typography>
      <Typography variant='h5'>add your informations</Typography>
      <Typography variant='p'>add pre written examples to each section</Typography>
      <Typography variant='h6'>step1</Typography>
      
     </div>


    </box>
   <Button style={{marginLeft:"600px",marginBottom:"40px",marginTop:"5px"}}
  component={Link}
  to="/Form"
  variant="contained"
  color="primary"
>Text</Button>
    </div>
  )
}

export default Resumegenerator