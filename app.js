var express = require('express')
    ,app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send('/views')
});



app.listen(80, function(){
    console.log('rodou');
});