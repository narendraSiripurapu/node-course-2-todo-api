var {mongoose} = require(./db/mongoose);



/* var newTodo = new Todo({
    text: 'Cook Dinner'
});

newTodo.save().then((doc)=>{
    console.log('saved todo',doc);
},(e)=>{
    console.log('unable to save todo',e);
});  */

var otherTodo = new Todo({
    text: 'Feed The Cat',
    completed: true,
    compeltedAt : 123

});

otherTodo.save().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2));
},(e)=>{
    console.log('unable to save todo',e);
});


