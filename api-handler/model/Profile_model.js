import mongoose from "mongoose";
import { models, model } from "mongoose";

const Schema = mongoose.Schema

const profileSchema = new Schema({
    personalid:{type:String, required: true, },
    fname:{type:String, required: true, },
    lname:{type:String,  },
    imageurl:{type:String, required: true, },
    location:{type:String, required: true, },
    description:{type:String,  },
    date:{type:String,  },
    assignedto:{type:String,  },
    assignedStatus: {type:Boolean,  },
})

export default mongoose.models.Profile || mongoose.model('Profile', profileSchema)



// const Profiledb = mongoose.models.profiledb || model('Profile', profileSchema)
// export default Profiledb;
