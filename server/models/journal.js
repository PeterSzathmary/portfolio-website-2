import mongoose from "mongoose";
const journalSchema = new mongoose.Schema({
    content: { type: String, required: true },
    createdAt: { type: String, required: true },
    day: { type: String, required: true },
});
export const journal = mongoose.model("JournalModel", journalSchema);
