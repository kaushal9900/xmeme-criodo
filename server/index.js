import express from 'express';
import bodyParser from 'body-parser';
import mongoose from  'mongoose';
import cors from 'cors';
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/memes',postRoutes);
app.use('/',(req,res) => {
    res.send("Welcome to xmeme api");
});
const PORT = process.env.PORT || 8081;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => app.listen(PORT,() => console.log("Server running")))
.catch((err) => console.log(err));

mongoose.set('useFindAndModify',false);