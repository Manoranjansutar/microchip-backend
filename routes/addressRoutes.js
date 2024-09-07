import express from "express";
import { createAddressController, getAddressController , searchAddressController} from "../controllers/microChipControllers.js";


const addressRoutes = express.Router();

addressRoutes.post('/createAddress' , createAddressController)
addressRoutes.get('/getAddress' , getAddressController)
addressRoutes.get('/search' , searchAddressController)

export default addressRoutes