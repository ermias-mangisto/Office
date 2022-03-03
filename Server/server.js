const dotenv=require('dotenv');
const path=require('path');
dotenv.config();
const express=require('express');
const app=express();
const cors=require('cors');
const EmployeeRouter=require('./Routes/EmployeeRouter');
const UserRouter=require('./Routes/UserRoute')
const passport=require('passport');
require('./config/passport')(passport);
require('./DB/DB');
app.use(cors());
app.use(express.json());
const port=process.env.PORT ;
console.log(port)
app.listen(port);  
app.use(passport.initialize())
app.use('/register',UserRouter);
app.use('/employee',passport.authenticate("jwt",{session:false}),EmployeeRouter);

if(process.env.NODE_ENV == 'production'){
    app.use(express.static(path.join(__dirname,"Office/client/build","index.html")));
    app.get("/",(req, res) =>{
        res.sendFile(path.join(__dirname,"Office/client/build","index.html"))
    })
}