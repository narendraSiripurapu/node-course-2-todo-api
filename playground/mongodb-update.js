
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db)=>{

   if(err){
       return console.log('unable to connect to mongodb server');
   }
    console.log('connected to mongodb server');

   db.collection('Todos').findOneAndUpdate({
       _id = new ObjectID('5a6891f718e3b81cfc0d57cb')},
    {
        $set:{
            completed: true
        }
    },{
        returnOriginal:false

    }).then((result)=>{
        console.log(result);
    });
    // db.close()
});
   
