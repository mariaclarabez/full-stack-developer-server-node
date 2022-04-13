import express from 'express';
import cors from 'cors';
import helloController
    from "./controllers/hello-controller.js";
import usersController   from "./controllers/users-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://0.0.0.0:27017/webdev';
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})

helloController(app);
usersController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);

