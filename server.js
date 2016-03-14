var express = require('express');


// Bootstrap express

var app = express();

// URLS management

var sortBy = require('sort-by'),
    users = [];

users = [{
    id: 7,
    name: 'Foo',
    age: '2015',
    months : [ 'jan' , 'feb' , 'march' ] 
}, {
    id: 3,
    name: 'Baz',
    year: '2015',
    months : [ 'jan' , 'feb' , 'march' ] 
}, {
    id: 4,
    name: 'Bar',
    age: '2014',
    months : [ 'jan' , 'feb' , 'march' ] 
}];


app.get('/sort/:age/:months', function (req, res)
	 {    
		res.json(req.params.age + req.params.months);
});


/*app.get('/tenants', function(req, res)
	{
		res.sendFile(__dirname+'/sample1.html');
	});
*/

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://locahost:%s", port)

})