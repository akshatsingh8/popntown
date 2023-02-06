import mongoose from "mongoose";
import { connectToDatabase } from "../../api-handler/utils";
import { getAllProfile, addProfile } from "../../api-handler/Controllers/profile-controller";


export default async function handler(req, res) {
     connectToDatabase();

     if (req.method === "GET") {
        return getAllProfile(req, res);
     }
     else if (req.method === "POST" ) {
      return addProfile(req, res);
   }
}