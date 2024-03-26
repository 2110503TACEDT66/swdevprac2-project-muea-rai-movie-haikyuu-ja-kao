import mongoose from "mongoose";
const CoWorkingSpaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxLength: [100, 'Name cannot be more than 100 characters']
    },
    address: {
        type: String,
        required: [true, 'Please add a address'],
    },
    tel: {
        type: String,
    },
    open_close_time: {
        type: String,
        required: [true, 'Please add a open-close time'],
    },
    picture: {
        type: String,
        required : [true]
    }
}
);
const coworkingspace = mongoose.models.coworkingspace || mongoose.model("coworkingspace", CoWorkingSpaceSchema)
export default coworkingspace
