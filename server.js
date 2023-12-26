import express from 'express'
import mongoose from 'mongoose'
import { MongoClient } from 'mongodb'
import axios from 'axios'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express();

app.use(cors({
    origin: "http://localhost:3000/"
}))
app.use(express.json( {limit: '50mb' }))
app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}));

app.get('/get', (req, res) => {
    let query = req._parsedUrl.query;

    // search for planet in database
    MongoClient.connect("mongodb://localhost:27017", (err, db) => {
        if (err) {
            console.log("error!");
        }

        // Find Planet
        const dbo = db.db("local");
        const collection = dbo.collection("celestial_bodies");
        // collection.find({
            
        // })
        
    })

    res.send(planet);
})

app.post('/post', (req, res) => {
    // console.log(req.body);
    
    // writeData(req.body);

    res.send("stooopiit")
})

const connectDB = (url) => {
    return mongoose.connect(url);
}

const writeData = (data) => {


    mongoose.connect("mongodb://localhost:27017/local");
    var conn = mongoose.connection;
    conn.collection("celestial_bodies").insertOne(data);

    console.log("Data written!")
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