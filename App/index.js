 import * as dotenv from 'dotenv';
 dotenv.config({});
 import express from 'express';
import bootstrap from './src/app.controller.js';

 const app = express();
 const port = process.env.PORT || 8888;


 bootstrap(app,express)
 app.listen(port, ()=> console.log(`sara7a app listening on port ${port}`));
 