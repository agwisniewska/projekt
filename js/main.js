$( document ).ready(function() {
    
    var dict = {};
  
    
    $('#datetimepicker1').datetimepicker();


    $('.mainbutton').click(function() { 
    	// console.log("guzik") 
    	var task = $('#task').val() 
    	// var date = $('#date_task').text()
    	// console.log(task)
    	var date = $("#datetimepicker1").find("input").val();
    	// console.log(date)
    	// console.log(slownik)
    	
    	// if (date in dict.keys().indexOf) {
    	// dict[date] = task
    	// dict[date] = task
    	
    	// dict[date].push(task);
       
    	if(Object.keys(dict).indexOf(date) < 0) {
    		dict[date] = new Array()
    	}
    	
    	dict[date].push(task);
    	
        $('schedule').empty();
    	
      
        
        for (var i=0; i<=Object.keys(dict).length; i++) {
    	   // $('#schedule p').append(Object.keys(dict)[i]); 
           var key = Object.keys(dict)[i];
           // console.log(dict[klucz])
           // $('.listoftasks p').append(dict[key]); 
                // console.log(dict[date]);
           
           $('.schedule').append(formatData(dict[key], key));

        }

        
                
 
        // console.log(key)

	});


});


function formatData(tasks, date) {
    var resultTask = "";
    var resultDate = '<h3>' + date + '</h3>'; 
    for (var i=0; i<tasks.length; i++) {
        resultTask += ('<p>' + tasks[i] + '</p>')
    }
    return("<div>" + resultDate + resultTask + '</div>')
}

