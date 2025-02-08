import { model, Schema } from "mongoose";

const schema = new Schema({
  id: String,
  name: String,
});

export default model("users", schema);
