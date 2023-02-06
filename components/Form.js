import { Button, Checkbox, FormLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'

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
    <form onSubmit={handleSubmit} style = {{width: "80%", height: "100%" , margin:  "auto", boxShadow:'1px 10px 30px #ccc', borderRadius: "20px", background: "linear-gradient(180deg, rgb(237, 219, 185) 0px, rgb(255, 212, 149) 7%, rgb(249, 245, 231) 10%, rgb(248, 234, 216) 100%)"}}>
        <Typography colour={"#395144"}
        fontWeight="bold" fontSize={50} mt={1}padding={2} textAlign="center">{data ? "Profile Details" : "Create Profile"}</Typography>
        <Box padding={3} display="flex" flexDirection="column" >
            <FormLabel sx ={lableSx}>Personal Id</FormLabel>
            <TextField onChange={handleChange} value={inputs.personalid} name="personalid" margin="normal"/>
            <FormLabel sx ={lableSx}>First Name</FormLabel>
            <TextField onChange={handleChange} value={inputs.fname} name="fname" margin="normal"/>
            <FormLabel sx ={lableSx}>Last Name</FormLabel>
            <TextField onChange={handleChange} value={inputs.lname} name="lname" margin="normal"/>
            <FormLabel sx ={lableSx}>Location</FormLabel>
            <TextField onChange={handleChange} value={inputs.location} name="location" margin="normal"/>
            <FormLabel sx ={lableSx}>Description</FormLabel>
            <TextField onChange={handleChange} value={inputs.description} name="description" margin="normal"/>
            <FormLabel sx ={lableSx}>Date</FormLabel>
            <TextField onChange={handleChange} value={inputs.date} name="date" margin="normal"/>
            <FormLabel sx ={lableSx}>Assigned To</FormLabel>
            <TextField onChange={handleChange} value={inputs.assignedto} name="assignedto" margin="normal"/>
            <FormLabel sx ={lableSx}>Assigned Status</FormLabel>

            <Checkbox onChange={(e)=>setinputs((prevState)=>({...prevState,assignedStatus: e.target.checked,}))} checked={inputs.assignedStatus} name="assignedStatus" sx={{marginRight: "auto"}}/>
            
            <FormLabel sx ={lableSx}>imageurl</FormLabel>
            <TextField onChange={handleChange} value={inputs.imageurl} name="imageurl" margin="normal"/>
            <Button type= "submit" variant="contained" size="large"> Submit </Button>
        </Box>
    </form>
  )
}

export default Form