$.ajax({
       url : 'http://api.openweathermap.org/data/2.5/weather?id=6448311&APPID=0514f164e0a0459957ae7ae149a4afdc&mode=html',

       success: function(data){
       	console.log(data);
       	console.log('success');
       	$("#ville").append(data);
       },

       error: function(err){
       	console.log('error');

       },
    });