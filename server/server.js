const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const authRouter = require('./routes/auth/auth-routes')
const adminProductsRouter = require('./routes/admin/products-routes')

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://sp1172389:Q3zRK7hX8LgT0V4h@cluster0.k7qld.mongodb.net/")
.then(()=> console.log("MongoDb connect"))
.catch((err)=>console.log("error",err));

app.use(
    cors({
        origin:"http://localhost:5173",
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials:true
    })
);

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth',authRouter);
app.use('/api/admin/products',adminProductsRouter);

app.listen(PORT,(req,res)=>{
    console.log(`server is now running on port ${PORT}`);
});
