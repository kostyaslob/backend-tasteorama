import { model, Schema } from "mongoose";

const sessionSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: "users" },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    accessTokenValidUntil: { type: Date, required: true },
    refreshTokenValidUntil: { type: Date, required: true },
  },
  {
    versionKey: false,
  },
);

export const SessionCollection = model("sessions", sessionSchema);
