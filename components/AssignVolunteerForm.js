import { Button, Checkbox, FormControl, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import { DataGrid } from '@mui/x-data-grid';
import Link from 'next/link';

const lableSx = {marginTop : "10px" }

const Form = ({data, onSubmit}) => {
    const [inputs, setinputs] = useState (
        data ? {
            personalid: data.personalid,
            fname: data.fname,
            lname: data.lname,
            location: data.location,
            description: data.description,
            date: data.date,
            assignedto: data.assignedto,
            assignedStatus: data.assignedStatus,
            imageurl: data.imageurl
        } : {
            personalid: "",
            fname: "",
            lname: "",
            location: "",
            description: "",
            date: "",
            assignedto: "",
            assignedStatus: false,
            imageurl: ""
        }
    );
    const handleChange = (e) => {
        setinputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputs);
    }
  return (
    <div>
    <form onSubmit={handleSubmit} style = {{width: "80%", height: "100%" , margin:  "auto", boxShadow:'1px 10px 30px #ccc', borderRadius: "20px", background: "linear-gradient(180deg, rgb(237, 219, 185) 0px, rgb(255, 212, 149) 7%, rgb(249, 245, 231) 10%, rgb(248, 234, 216) 100%)"}}>
        <Typography colour={"#395144"}
        fontWeight="bold" fontSize={50} mt={1}padding={2} textAlign="center">{data ? "Profile Details" : "Create Profile"}</Typography>
        <Box padding={3} display="flex" flexDirection="column" >
        <div><b>Profile Name :- {data.fname} {data.lname}<br/>Location :- {data.location}<br/>Date:-{data.date}</b></div>
            <FormLabel sx ={lableSx}>Assigned To</FormLabel>
            <FormControl margin="normal">
            <InputLabel>Select Volunteer</InputLabel>
            <Select onChange={handleChange} value={inputs.assignedto} name="assignedto">
                <InputLabel> Location - KILPAUK </InputLabel>
                <MenuItem value={1}>KILPAUK - TR. MUTHUKRISHNAN</MenuItem>
                <MenuItem value={2}>KILPAUK - TR. MURALI</MenuItem>
                <MenuItem value={3}>KILPAUK - TR. SRINIVASAN</MenuItem>
                <MenuItem value={4}>KILPAUK - TR. VETRITHAMIZHAN</MenuItem>
                <MenuItem value={5}>KILPAUK - TR. ANTONY BELLARD</MenuItem>
                <InputLabel> Location - THURAIPAKKAM </InputLabel>
                <MenuItem value={9}>THURAIPAKKAM - TR.VENKATESH</MenuItem>
                <MenuItem value={10}>THURAIPAKKAM - TR.SARAVANAN</MenuItem>
                <MenuItem value={11}>THURAIPAKKAM - TMT.REETA</MenuItem>
                <MenuItem value={12}>THURAIPAKKAM - TR.RAMESH</MenuItem>
                <MenuItem value={13}>THURAIPAKKAM - TR.VELAN</MenuItem>
                <InputLabel> Location - MYLAPORE </InputLabel>
                <MenuItem value={17}>MYLAPORE - TR.CLEMENT</MenuItem>
                <MenuItem value={18}>MYLAPORE - TMT.MARINA ANTONITA</MenuItem>
                <MenuItem value={19}>MYLAPORE - TR.SHANMUGAM</MenuItem>
                <MenuItem value={20}>MYLAPORE - TR.DHEJES KUMAR</MenuItem>
                <MenuItem value={21}>MYLAPORE - TMT.MAHALAKSHMI</MenuItem>
            </Select>
            </FormControl>
            <Button type= "submit" variant="contained" size="large"> Submit </Button>
        </Box>
    </form>
    <div style={{ height: 800, width: '100%', background: "linear-gradient(180deg, rgb(237, 219, 199) 0%, rgb(255, 212, 149) 15%, rgb(249, 245, 231) 15%, rgb(248, 234, 216) 100%)", color:"#2F0F1C", borderRadius: "20px"}}><Typography colour={"#395144"}
        fontWeight="bold" fontSize={50} mt={1}padding={2} textAlign="center"> Assign Volunteer</Typography><center><br />
        <table>
            <thead>
                <tr>
                    <th >
                        <span >Volunteer ID</span>
                    </th>
                    <th >
                        <span >Name</span>
                    </th>
                    <th >
                        <span >Locaton</span>
                    </th>
                    <th >
                        <span >Phone No</span>
                    </th>
                    <th >
                        <span >Detail</span>
                    </th>
                    <th >
                        <span >Actions</span>
                    </th>
                </tr>
            </thead>
            <tbody>
            <tr>
                  
                  <td ><span> <center>101</center></span></td>
                  <td ><span> <center>Akshat Singh</center> </span></td>
                  <td ><span> <center>Chennai</center> </span></td>
                  <td ><span> <center>1234567890</center></span></td>
                  <td ><span> <center>Declined</center></span></td>
                  <td ><center><button ><span>Assign</span></button> </center></td>
                      
                  </tr>
                  <tr>
                  
                  <td ><span> <center>102</center></span></td>
                  <td ><span> <center>name 2</center> </span></td>
                  <td ><span> <center>Chennai</center> </span></td>
                  <td ><span> <center>1234567890</center></span></td>
                  <td ><span> <center>Declined</center></span></td>
                  <td ><center><button ><span>Assign</span></button> </center></td>
                      
                  </tr>
                  <tr>
                  
                  <td ><span> <center>103</center></span></td>
                  <td ><span> <center>name 3</center> </span></td>
                  <td ><span> <center>Chennai</center> </span></td>
                  <td ><span> <center>1234567890</center></span></td>
                  <td ><span> <center>Declined</center></span></td>
                  <td ><center><button ><span>Assign</span></button> </center></td>
                      
                  </tr>
                  <tr>
                  
                  <td ><span> <center>104</center></span></td>
                  <td ><span> <center>skajhdfls</center> </span></td>
                  <td ><span> <center>Chennai</center> </span></td>
                  <td ><span> <center>1234567890</center></span></td>
                  <td ><span> <center>Declined</center></span></td>
                  <td ><center><button ><span>Assign</span></button> </center></td>
                      
                  </tr>
                  <tr>
                  
                  <td ><span> <center>105</center></span></td>
                  <td ><span> <center>kjasfhd</center> </span></td>
                  <td ><span> <center>Chennai</center> </span></td>
                  <td ><span> <center>1234567890</center></span></td>
                  <td ><span> <center>Declined</center></span></td>
                  <td ><center><button ><span>Assign</span></button> </center></td>
                      
                  </tr>
                  <tr>
                  
                  <td ><span> <center>106</center></span></td>
                  <td ><span> <center>ajkshf</center> </span></td>
                  <td ><span> <center>Chennai</center> </span></td>
                  <td ><span> <center>1234567890</center></span></td>
                  <td ><span> <center>Declined</center></span></td>
                  <td ><center><button ><span>Assign</span></button> </center></td>
                      
                  </tr>
            </tbody>
        </table></center>
        </div>
    </div>
  )
}

export default Form
