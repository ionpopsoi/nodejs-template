import 'dotenv/config';
import express from 'express';

import router from './router';

const app = express();
const PORT = process.env.PORT || 2443;
const ENV = process.env.ENV || "DEV";

app.use(express.json());
app.use(router);

app.listen(PORT, ()=> {
    console.log("------------------------------------------");
    console.log("Service running on '%d' mode on port %d", ENV, PORT);
    console.log("------------------------------------------");
})