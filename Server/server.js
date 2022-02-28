require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
const EmployeeRouter=require('./Routes/EmployeeRouter');
require('./DB/DB');
app.use(cors());
app.use(express.json());
let port=8000;
app.use('/employee',EmployeeRouter);

app.listen(port);