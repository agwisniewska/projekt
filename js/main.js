$( document ).ready(function() {
    
    var dict = {};
  
    $( "#datetimepicker1" ).datetimepicker();

    $(document).on( 'click', '.date', function() {
        $(this).siblings( ".tasks" ).toggle();
    });
    
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
           if (dict[key] !== undefined){
                $('.schedule').append(formatData(dict[key], key));
                $('.form-control').val("");
           
              
             
           }
              
        }
        showAlert();
     
	});

});


function formatData(tasks, date) {
    var resultDate = '<h3 class="date">' + date + '</h3>';
    var resultTask = "";
    for (var i=0; i < tasks.length; i++) {
        resultTask += ('<p class="tasks">' + tasks[i] + '</p>')
    }
    var div = ("<div class='thumbnail tile tile-medium tile-teal'>" + resultDate + resultTask + '</div>');
    return div
}


function showAlert() {
    var alert = document.getElementById('confirmation');
    if (alert.style.display === "none") {
        return alert.style.display = "block";
    }
    else {
        console.log("ok")
    }
}


function hideDiv() {
    $('#confirmation').fadeOut( "slow" );
};
