import express from 'express'
const postdoc = express.Router()
import mongoose from 'mongoose'
const formSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String }
})
const formModal = mongoose.model("form", formSchema)
postdoc.get("/get", async (req, res) => {
    try {
        const formData = await formModal.find();
        res.status(200).json({ success: true, data: formData });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});



postdoc.post("/add", async (req, res) => {
    try {
        console.log(req.body);
        const formDoc = new formModal(req.body);
        const result = await formDoc.save();
        res.status(200).json({ success: false, data: result });
        console.log(result);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }


});
postdoc.post('/as', async (req, res) => {
    try {
        console.log(req.body.id,);
        let id = req.body.id
        const Deletedata = await formModal.findByIdAndDelete(id)
        res.status(200).json({ success: false, data: Deletedata });


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

postdoc.post('/update', async (req, res) => {
    try {
        console.log(req.body.updatedData.id);
        const updatedData = {
            name: req.body.updatedData.name,
            email: req.body.updatedData.email
        };

        const Updatedata = await formModal.findByIdAndUpdate(req.body.updatedData.id, updatedData, { upsert: true });
        if (updatedData) {
            res.status(200).json({ success: true, data: Updatedata });
        } else {
            res.status(404).json({ success: false, message: 'Data not found' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
    
});

export default postdoc;