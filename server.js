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
app.use(express.json())
app.use(express.urlencoded({
    extended: true
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
    console.log("VVVVVVVVVVVV")
    console.log(req.body);
    

    res.redirect("/");
})

const connectDB = (url) => {
    return mongoose.connect(url);
}

const writeData = () => {
    var data;


    MongoClient.connect("mongodb://localhost:27017", (err, db) => {
        if (err) {
            console.log("error!");
        }

        // Add Card to deck
        const dbo = db.db("local");
        const collection = dbo.collection("celestial_bodies");
        console.log(data);
    })
    
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