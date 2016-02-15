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
    	
        $('#schedule p').empty();
    	
      
        
        for (var i=0; i<=Object.keys(dict).length; i++) {
    	   $('#schedule p').append(Object.keys(dict)[i]); 
           var klucz = Object.keys(dict)[i];
           // console.log(dict[klucz])
           $('.listoftasks p').append(dict[klucz]); 
                // console.log(dict[date]);
           

        }
                
    	
        // console.log(klucz)

	});

});