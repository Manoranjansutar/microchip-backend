import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  houseNo: { type: String, required: true },
  apartment: { type: String, required: true },
  addressName: { type: String, required: true },
  addressType: { type: String, required: true },
  placeTitle: { type: String, required: false },
  placeAddress: { type: String, required: false },
});

const microChipModels = mongoose.model("address", addressSchema) || mongoose.model("address");
export default microChipModels
