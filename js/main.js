$( document ).ready(function() {
    
    var dict = {};
  
    $( "#datetimepicker1" ).datetimepicker();


    $('.mainbutton').click(function() { 
    	
    	var task = $('#task').val() 
    	
    	var date = $("#datetimepicker1").find("input").val();
    	
       
    	if(Object.keys(dict).indexOf(date) < 0) {
    		dict[date] = new Array()
    	}
    	
    	dict[date].push(task);
    	
        $('.schedule').empty();
    	
      
        for (var i=0; i<=Object.keys(dict).length; i++) {
           var key = Object.keys(dict)[i];
           $('.schedule').append(formatData(dict[key], key));

        }

	});


});

function formatData(tasks, date) {
    var resultTask = "";
    var resultDate = '<h3>' + date + '</h3>'; 
    for (var i=0; i<tasks.length; i++) {
        resultTask += ('<p>' + tasks[i] + '</p>')
    }
    var div = ("<div class='thumbnail tile tile-medium tile-teal'>" + resultDate + resultTask + '</div>')
    return div
}

