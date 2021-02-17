import * as mongoose from 'mongoose';

import { model } from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    jobprofile: { type: String, required: true },
    skills: { type: String, required: true },
    address: { type: String, required: true },
    education: { type: String, required: true },
    created_at: { type: Date, required: true },

    updated_at: { type: Date, required: true }



});

export default model('users', userSchema)