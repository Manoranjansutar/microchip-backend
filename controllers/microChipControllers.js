import microChipModels from "../models/microChipModels.js";


const createAddressController = async (req, res) => {
    const newAddress = new microChipModels(req.body);
    try {
        const savedAddress = await newAddress.save();
        res.status(200).json(savedAddress);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getAddressController = async (req, res) => {
    try {
        const address = await microChipModels.find();
        res.status(200).json(address);
    } catch (err) {
        res.status(500).json(err);
    }
}

const searchAddressController = async (req,res) =>{
    try {
        const query = req.query.q ? req.query.q.trim() : '';
    
        if (query === '') {
          return res.json([]);
        }
    
        const searchResults = await microChipModels.find({
          $or: [
            { houseNo: { $regex: new RegExp(query, 'i') } },  
            { apartment: { $regex: new RegExp(query, 'i') } },
            { addressName: { $regex: new RegExp(query, 'i') } },
            { addressType: { $regex: new RegExp(query, 'i') } },
            { placeTitle: { $regex: new RegExp(query, 'i') } },
            { placeAddress: { $regex: new RegExp(query, 'i') } }
          ]
        });
    
        res.json(searchResults);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
}

export { createAddressController , getAddressController , searchAddressController}