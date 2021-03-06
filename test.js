var express = require('express');
var app = express();
var sql = require('mssql');

var config ={
		user:'sa',
		password:'123456',
		server:'127.0.0.1',
		database:'QPGameSiteDB',
		options:{
				encrypt:true
			}
	};
	
app.get('/api/user',function(){
		sql.connect(config).then(function(){
				new sql.Request()
					.input('input_parmeter',sql.Int,9)
					.query('SELECT *  FROM [QPGameSiteDB].[dbo].[XT_Mall] where id=@input_parameter').then(function(recordset){
						console.dir(recordset);
						res.json(recordset);
					}).catch(function(err){
						
						console.log(err);
						res.send(err);
						});
			}).catch(function(err){
				console.log(err);
				res.send(err);
				});
	});
	
	app.post('asp/user',function(req,res){})
	
	app.delete('api/user/:userId',function(req,res){})
	
	app.listen(8088,function(){
		console.log('app listening on 8088');
		});