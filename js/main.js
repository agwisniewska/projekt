$( document ).ready(function() {
    
    var dict = {};
  
    	
    $('#datetimepicker1').datetimepicker();

    $('.guzik').click(function() { 
    	// console.log("guzik") 
    	var task = $('#task').val() 
    	// var date = $('#date_task').text()
    	// console.log(task)
    	var date = $("#datetimepicker1").find("input").val();
    	// console.log(date)
    	// console.log(slownik)
    	
    	// if (date in dict.keys().indexOf) {
    	// dict[date] = task
    	
    	
    	// dict[date].push(task);
    	
    	
    	console.log(dict)
	});

});