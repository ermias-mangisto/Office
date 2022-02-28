const mongoose=require('mongoose');

const ConnectionString="mongodb+srv://Ermias:ermi7890@officedb.w8uzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(ConnectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log('connected'))
.catch((err)=>console.log('err'));
module.exports=mongoose.connection;