import { deleteProfile, getProfileFromId, updateProfile } from "@/api-handler/Controllers/profile-controller";
import { connectToDatabase } from "@/api-handler/utils";


export default async function handler(req, res) {
    await connectToDatabase();
    if (req.method === "PUT"){
        return updateProfile(req, res);
    }
    else if (req.method === "DELETE") {
        return deleteProfile(req, res);
    }
    else if(req.method === "GET"){
        return getProfileFromId(req, res);
    }
}