import mongoose from "mongoose";
const mongoD = (url) => {
    let NAME = {
        dbname: "Decode"
    }
    mongoose.connect(url, NAME).then(console.log("Database Created Successfully"))
}
export default mongoD;