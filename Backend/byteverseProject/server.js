const app=require("./app");
const connectToDBs= require('./utils/db')
connectToDBs();
app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});

////////////////////////////


// app.listen(5001,(error)=>{
//     if(error) console.log(err);
//     console.log("Hurrahh user!!!, It's working");
// });
