import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
    resDate: {
        type: Date,
        required: [true, 'Please add a date']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Please add a user ID']
    },
    coWorkingSpace: {
        type: mongoose.Schema.ObjectId,
        ref: 'CoWorkingSpace',
        required: [true, 'Please add a co-working space ID']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Reservation = mongoose.models.Reservation || mongoose.model("Reservation", ReservationSchema);
export default Reservation;