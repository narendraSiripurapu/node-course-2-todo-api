const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db)=>{

   if(err){
       return console.log('unable to connect to mongodb server');
   }
    console.log('connected to mongodb server');

    /* db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
        console.log(result);
    }); */

    /* db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
        console.log(result);
    }); */

    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    });


    // db.close()
});
   