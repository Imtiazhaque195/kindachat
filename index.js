var express = require('express');
var app = express();
var http = require('http').Server(app);
var fs = require('fs');


app.get('/write', function(req,res){

    var message = req.query.msg;

    if(message){

    fs.appendFileSync('index.html', '<p>' + message + '</p>');
    
    res.sendFile('index.html', {root:__dirname});
        
    }else{
    
    res.sendFile('index.html', {root:__dirname});
    
    
};


app.get('/delete', function(req, res){
    
   fs.writeFileSync('index.html', ' ');
   res.send('All cleared!');
});
})



app.listen(3000);