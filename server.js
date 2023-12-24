import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express();

app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000/"
}))

app.get('/', (req, res) => {
    let planet = req._parsedUrl.query;

    // search for planet in database


    res.send(planet);
})

const connectDB = (url) => {
    return mongoose.connect(url);
}

const checkData = () => {
    
}

const start = async() => {
    try {
        connectDB("mongodb://localhost:27017");
        app.listen(5000, ()=>{
            console.log("Server is listening at localhost:5000");
        })
    } catch (error) {
        console.log(error);
    }
}

start();