
import axios from "axios";

export const getAllProfile = async () => {
    const res = await axios.get("http://localhost:3000/api/Profiles_api");
    if (res.status !== 200){
        return new Error("Internal Server Error");
    }
    const data = await res.data?.profiles;
    return data;
};

export const getUnassignedProfiles = async() =>{
    const profiles = await getAllProfile();
    if(profiles.length == 0){
        return [];
    }
    const unassignedProfiles = profiles.filter((profile) => profile.assigned == false);
    return unassignedProfiles;
};

export const sendProfile = async(data) =>{
        const res = await axios.post("http://localhost:3000/api/Profiles_api", {
            personalid: data.personalid,
            fname: data.fname,
            lname: data.lname,
            location: data.location,
            description: data.description,
            date: data.date,
            assignedto: data.assignedto,
            assignedStatus: Boolean(data.assignedStatus),
            imageurl: data.imageurl,
        });
        if (res.status !== 201){
            return new Error("Database Request Rejected");
        }
        const resdata = await res.data;
    return resdata;
    };

export const getProfileFromId = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/profile/${id}`);
    if (res.status !==200) {
        return new Error("Unable To Fetch Profile From Given ID")
    }
    const data = await res.data;
    return data.profile;
};

export const updateProfile = async (id, data) => {
    const res = await axios.put(`http://localhost:3000/api/profile/${id}`, {
        personalid: data.personalid,
        fname: data.fname,
        lname: data.lname,
        location: data.location,
        description: data.description,
        date: data.date,
        assignedto: data.assignedto,
        assignedStatus: Boolean(data.assignedStatus),
        imageurl: data.imageurl,
    });
    if (res.status !==200) {
        return new Error("Unable To Update Profile")
    }
    const resdata = await res.data;
    return resdata;
};

export const deleteProfile = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/profile/${id}`);
    if (res.status !==200) {
        return new Error("Unable To Delete The Profile")
    }
    const data = await res.data;
    return data.profile;
};