import express from 'express';
import cors from 'cors';
import helloController
    from "./controllers/hello-controller.js";
import usersController   from "./controllers/users-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

const app = express();
app.use(express.json());
app.use(cors());

helloController(app);
usersController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);

