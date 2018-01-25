const {MongoClient, ObjectID} = require('mongodb');
/* var obj = new ObjectID();
console.log(obj); */

/* var user = {name:'naren',age:25};
var {name}= user;
console.log(name);
*/

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db)=>{

   if(err){
       return console.log('unable to connect to mongodb server');
   }
    console.log('connected to mongodb server');

    db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
        console.log('todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
       console.log('unable to fetch todos',err);
    });

    // db.close()
});
   