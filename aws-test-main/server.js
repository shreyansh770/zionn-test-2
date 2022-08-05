const express = require('express');
require('dotenv/config');
const cors = require('cors');
const newsRouter = require('./router/getNews');
const db = require('./config/db')
const authRouter = require('./router/auth');
const uploadRouter = require('./upload');
const reportRouter = require('./router/reports');


const app = express();
app.use(express.json());
app.use(cors())


app.use("/auth", authRouter)
app.use("/getnews", newsRouter)
app.use("/reports",uploadRouter)
app.use("/company",reportRouter)
app.use((req,res)=>{
    res.json({
        message : "Page not found"
    })
})


// console.log(Date.now());
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server running`)
})