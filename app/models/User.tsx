import mongoose, { Document, Schema } from "mongoose";

interface Settings {
    emailVisible: boolean;
    connectionVisible: boolean;
}

export interface IUser extends Document {
    displayName : string;
    username : string;
    pronouns : string;

    userid : string;
    email : string;
    passwordHash : string;

    avatar : string;
    banner : string;

    isVerified : boolean;
    isEmailVerified: boolean;

    roblox_userid : number;
    badges: Array<number>;
    customBadge: {
        name: string;
        color: string;
    }

    bio:string;
    joinedOn: Date;

    rank: string;
    session: string;

    isTermed: boolean;

    discord : {
        verified: boolean;
        userid: string;
        username: string;
        avatar:string;
        refresh_token: string;
        connections: Array<{}>;
    };

    roblox : {
        verified: boolean;
        userid: string;
        username: string;
    };

    sessions: Array<string>;
}

const schema : Schema = new mongoose.Schema({
    displayName : String,
    username : String,
    pronouns : String,

    userid : String,
    email : String,
    passwordHash : String,

    avatar : String,
    banner : String,

    isEmailVerified: Boolean,
    isVerified : Boolean,

    roblox_userid : Number,
    badges: Array<number>,
    customBadge: {
        name: String,
        color: String,
    },

    bio:String,
    joinedOn: Date,

    rank: String,
    isTermed: Boolean,

    discord : {
        verified: Boolean,
        userid: String,
        username: String,
        avatar:String,
        refresh_token: String,
        connections: Array<object>,
    },

    roblox : {
        verified: Boolean,
        userid: String,
        username: String,
    },

    sessions: Array,
    createdAt : Date
})

export default mongoose.models.User || mongoose.model<IUser>("User", schema);