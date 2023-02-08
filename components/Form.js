import { Button, Checkbox, FormControl, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
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