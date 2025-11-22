import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Container } from "@mui/material";
import Preview from "../components/Preview";
import { MdEditDocument } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { deleteResume, editResume, getResume } from "../services/allapi";

const History = () => {
  const [data, setData] = useState([]);
  const [editdata, setEditData] = useState({
    fullName: "",
    jobTitle: "",
    location: "",
    email: "",
    phoneNumber: "",
    githubLink: "",
    linkedinLink: "",
    portfolioLink: "",
    courseName: "",
    collegeName: "",
    university: "",
    yop: "",
    jobOrInternship: "",
    companyName: "",
    companyLocation: "",
    duration: "",
    skills: [],
    summary: "",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputvalue, setInputValue] = useState("");

  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    getAllResume();
  }, []);
  const getAllResume = async () => {
    try {
      let apiresponse = await getResume();
      if (apiresponse.status == 200) {
        setData(apiresponse.data);
      } else {
        Swal.fire({
          title: "error",
          text: "error occurred ",
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteClick = async (id) => {
    let apiresponse = await deleteResume(id);
    if (apiresponse.status == 200) {
      Swal.fire({
        title: "success",
        text: "successfully deleted",
        icon: "success",
      });
      getAllResume();
    } else {
      Swal.fire({
        title: "error",
        text: "error occurred ",
        icon: "error",
      });
    }
  };

  const addSkills = (skill) => {
    if (editdata.skills.includes(skill)) {
      alert("skill is already added");
      setInputValue("");
    } else {
      setEditData({ ...editdata, skills: [...editdata.skills, skill] });
      setInputValue("");
    }
  };
  const editbtnclick=async()=>{
    let apiresponse=await editResume(editdata.id,editdata)
    if(apiresponse.status==200){
      alert("success")
      setOpen(faslse)
       getAllResume();
    }else{
      alert("error")
    }
  }
  return (
    <div className="container">
      {data.length > 0 ? (
        <div className="row">
          {data?.map((eachResume) => (
            <div className="col-6">
              <div className="d-flex justify-content-around mt-5">
                <button
                  onClick={() => {
                    setEditData(eachResume);
                    handleOpen();
                  }}
                  className="btn btn-warning"
                >
                  <MdEditDocument />
                </button>
                <button
                  onClick={() => onDeleteClick(eachResume.id)}
                  className="btn btn-danger"
                >
                  <MdDeleteOutline />
                </button>
              </div>
              <Preview resumeData={eachResume} />
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-center">No Resume Added</h1>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <div className="row">
            <div className="col-6">
              <TextField
                id="standard-basic"
                label="fulname"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, fullName: e.target.value })
                }
                value={editdata.fullName}
              />
              <TextField
                id="standard-basic"
                label="job title"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, jobTitle: e.target.value })
                }
                value={editdata.jobTitle}
              />
              <TextField
                id="standard-basic"
                label="location"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, location: e.target.value })
                }
                value={editdata.location}
              />
              <TextField
                id="standard-basic"
                label="email"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, email: e.target.value })
                }
                value={editdata.email}
              />
              <TextField
                id="standard-basic"
                label="phone number"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, phoneNumber: e.target.value })
                }
                value={editdata.phoneNumber}
              />
              <TextField
                id="standard-basic"
                label="git hub"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, githubLink: e.target.value })
                }
                value={editdata.githubLink}
              />
              <TextField
                id="standard-basic"
                label="linkdn"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, linkedinLink: e.target.value })
                }
                value={editdata.linkedinLink}
              />
              <TextField
                id="standard-basic"
                label="portfolio"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, portfolioLink: e.target.value })
                }
                value={editdata.portfolioLink}
              />
              <TextField
                id="standard-basic"
                label="cource name"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, courseName: e.target.value })
                }
                value={editdata.courseName}
              />
            </div>
            <div className="col-6">
              <TextField
                id="standard-basic"
                label="College Name"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, collegeName: e.target.value })
                }
                value={editdata.collegeName}
              />
              <TextField
                id="standard-basic"
                label="University"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, university: e.target.value })
                }
                value={editdata.university}
              />
              <TextField
                id="standard-basic"
                label="Year of passout"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, yop: e.target.value })
                }
                value={editdata.yop}
              />
              <TextField
                id="standard-basic"
                label="Job or iternship"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, jobOrInternship: e.target.value })
                }
                value={editdata.jobOrInternship}
              />
              <TextField
                id="standard-basic"
                label="Company Name"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, companyName: e.target.value })
                }
                value={editdata.companyName}
              />
              <TextField
                id="standard-basic"
                label="Duration"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, duration: e.target.value })
                }
                value={editdata.duration}
              />
              <TextField
                id="standard-basic"
                label="Summary"
                variant="standard"
                onChange={(e) =>
                  setEditData({ ...editdata, summary: e.target.value })
                }
                value={editdata.summary}
              />
              <Typography variant="h4">Skills</Typography>
              <TextField
              onChange={(e)=>setInputValue(e.target.value)}
                id="skill"
                label="Skills"
                variant="standard"
                className="w-100"
              />

              <button onClick={()=>addSkills(inputvalue)} className="mt-3 btn btn-outline-primary">Add</button>
              <Typography variant="h6" className="mt-2">
                Add Skills:
              </Typography>
              {editdata?.skills.map((eachSkills) => (
                <button className="btn btn-outline-primary">
                  {eachSkills}
                </button>
              ))}
            </div>
          </div>
          <Button className="btn btn-warning" onClick={editbtnclick}>
            Edit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default History;