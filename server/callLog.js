const {Schema, model} = require("mongoose");

const callLogSchema = new Schema(
    {
        callId: {
            type: String,
            required: true,
            unique: true,
        },
        caller: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        receiver: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        doctor: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        patient: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        callStatus: {
            type: String,
        },
        callerType: {
            type: String,
        },
        callEndBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        dialAt: {
            type: Date,
        },
        connectedAt: {
            type: Date,
        },
        hasVideo: {
            type: Boolean,
            default: false,
        },
        endAt: {
            type: Date,
        },
        prescription: {
            type: Schema.Types.ObjectId,
            ref: "Prescription",
        },
        patientSubscription: {
            type: Schema.Types.ObjectId,
            ref: "PatientSubscription",
        },
        ringAt: {
            type: Date
        },
    },
    {
        timestamps: true,
    },
);

const CallLog = model("CallLog", callLogSchema);

module.exports = CallLog;
