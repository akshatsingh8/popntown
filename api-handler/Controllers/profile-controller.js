
import Profile from "../model/Profile_model";


export const getAllProfile = async (req, res) => {
    let profiles;

    try{
        profiles = await Profile.find();
    }
    catch (err) {
        return new Error(err);
    }

    if (!profiles) {
        return res.status(500).json({ message : "Internal Server Error"});
    }

    if (profiles.length === 0) {
        return res.status(200).json({ message : "No Profiles Found"});
    }
    return res.status(200).json({profiles});
};

export const addProfile = async(req, res) => {
    const {personalid, fname, lname, location, description, date, assignedto, imageurl, assignedStatus} = req.body;
    if (!personalid && personalid.trim()==="" 
        && !fname && !fname.trim()===""
        && !location && !location.trim()===""
        && !imageurl && !imageurl.trim()==="")
    {
        return res.status(422).json({message: "Invalid Inputs, Please Fill All Required Fields"});
    }
let profile;
try{
    profile = new Profile({personalid, fname, lname, location, description, date, assignedto, imageurl, assignedStatus});
    profile = await profile.save();
    }
    catch (err) {
        return new Error(err);
    }

    if (!profile) {
        return res.status(500).json({ message : "Internal Server Error"});
    }
        return res.status(201).json({ profile });
}

export const updateProfile = async(req, res) =>{
    const id = req.query.id;
    console.log(id);

    const {personalid, fname, lname, location, description, date, assignedto, imageurl, assignedStatus} = req.body;
    if (!personalid && personalid.trim()==="" 
        && !fname && !fname.trim()===""
        && !location && !location.trim()===""
        && !imageurl && !imageurl.trim()==="")
    {
        return res.status(422).json({message: "Invalid Inputs, Please Fill All Required Fields"});
    }
    let profile;
    try {
        profile = await Profile.findByIdAndUpdate(id, {
            personalid, fname ,lname, imageurl, location, description, date, assignedto, assignedStatus
        })
    }
    catch (err) {
        return console.log(err);
    }
    if (!profile) {
        return res.status(500).json({ message : "Internal Server Error"});
    }
        return res.status(200).json({ message : "Successfully Updated Profile" });
};

export const deleteProfile = async(req, res) =>{
    const id = req.query.id;

    let profile;
    try {
        profile = await Profile.findByIdAndRemove(id);
    }
    catch (err) {
        return new Error(err);
    }

    if (!profile) {
        return res.status(500).json({ message : "Unable To Delete"});
    }
        return res.status(201).json({ message : "Successfully Deleted" });
};

export const getProfileFromId = async(req, res) =>{
    const id = req.query.id;

    let profile;
    try{
    profile = await Profile.findById(id);
    }
    catch (err) {
        return new Error(err);
    }

    if (!profile) {
        return res.status(404).json({ message :"No Profile Found For The Given Id"})
    }
    return res.status(200).json({ profile });
};


