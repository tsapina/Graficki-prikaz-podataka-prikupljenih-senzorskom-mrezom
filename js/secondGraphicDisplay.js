		var secondCounter = 0;
	var startDate;
	var endDate;
	var par; 

	$(document).ready(function() {
	 
	    $('#reportrange').daterangepicker(
	    {
	      autoUpdateInput: false // da mi automatski ne stavi vrijednost
	    },
	    function(start, end) {
	      $('#reportrange').val(start.format('YYYY/MM/DD') + " - " + end.format('YYYY/MM/DD')); // set value to input element
	    }
	    );


	    $('#save').click(function(){
	      par = $("#parametar").val();
	      var enteredDate= $("#reportrange").val(); // uzimanje vrijednosti
	      //provjera dali postoji vrijednost,ako ne izbaci poruku
	      if(!enteredDate) {
	       $('#validationAlert').modal('show');
	      }
	      else
	      {

	        //split entered  date to startDate and endDate
	        var splitedDateContainer = enteredDate.split('-');
	        //get splited and trimed date
	        var startDate = $.trim(splitedDateContainer[0]);
	        var endDate = $.trim(splitedDateContainer[1]);

	        $.ajax({
	          type: "POST",
	          url: "php/getDataByPar.php",
	          dataType: "json",
	          data: {startDate: startDate, endDate: endDate, parametar: par},   
	          success: function(data) {
	          	console.log(data);
	            //provjerava data ima za property numRowsError
	            if(data.hasOwnProperty('numRowsError')){
	               console.log("num rows error");
	              $('#noDataAlert').modal('show');
	            }else{
	              secondCounter++;
	              waitingDialog.show('Graf se učitava...', {dialogSize: 'sm', progressType: 'warning'});
	              setTimeout(function () {
	                waitingDialog.hide();
	                showGraph(data, secondCounter);
	              }, 1500); 
	            }
	  
	          },//end of success
	          error: function (request, status, error) {
	          	console.log(request.responseText);
		    
		    }
	        });//end of ajax
	          
	      }//end of if(!enteredDate)

	    });//end of $('#save').click(function(){

	 });//end of $(document).ready(function() 


	function showGraph(data, secondCounter) {
	  
	  var buffer = [];
	  var current;
	  var date;
	  var counter = 0;

		for(var i = 0; i < data.length; i++) 
		{
			//console.log(i);
			
			date = new Date(data[i][0]);
		    //prvu iteraciju postavi prvi date na current
		    if(i < 1)
		    {
		    	current = date;
		    	buffer[counter] = [];
		    }
		    //console.log("current" + current);
		    //console.log("date" + date);
		    //provjerava dali je date isti

		    if(current.toString() != date.toString())
		    {
		    	//console.log("razliciti");
		    	//console.log("counter" + counter);
		    	current = date;
		    	counter++;
		    	buffer[counter] = [];
		    }

		    buffer[counter][0]=current; // spremanje datea na prvo mjesto
		    buffer[counter][data[i][1]] = data[i][2]; // spremanje vrijednosti na mjesto 1, 2, 3, ili 4
		}

	console.log(buffer);
	//var startDate = arr[1][0];
	//var endDate = arr[test.length][0];

	var startDate = dateFormat(buffer[0][0], "yyyy/dd/mm");
	var endDate = dateFormat(buffer[buffer.length-1][0], "yyyy/dd/mm");

	var choosenPar;
	switch (par) {
	    case "sm1":
	        choosenPar = "Vlažnost tla 1";
	        break;
	    case "sm2":
	        choosenPar = "Vlažnost tla 2";
	        break;
	    case "sm3":
	        choosenPar = "Vlažnost tla 3";
	        break;
	    case "sm4":
	        choosenPar = "Vlažnost tla 4";
	        break;
	    case "sm5":
	        choosenPar = "Vlažnost tla 5";
	        break;
	    case "sm6":
	        choosenPar = "Vlažnost tla 6";
	        break;
	    case "ah1":
	        choosenPar = "Vlažnost zraka";
	        break;
        case "at1":
        	choosenPar = "Temperatura zraka";
        	break;
	    case "ws1":
	        choosenPar = "Brzina vjetra";
	        break;
	    case "pp1":
	        choosenPar = "Padaline";
	        break;
	}

	// provjerava dali se objekt kreira prvi put, ako se ne kreira onda samo update napravi sa datama
	if(secondCounter == 1)
	{
	  g2 = new Dygraph(
	    document.getElementById("graphdiv2"),
	    buffer,
	     {
	        labels: [ "date", "Stanica1", "Stanica2", "Stanica3", "Stanica4"],
	        legend: 'always',
	        title: 'Prikaz mjerenja za parametar ' + choosenPar + ' u periodu od ' + startDate + ' do ' + endDate,
	        titleHeight: 32,
	        ylabel: 'Vrijednosti',
	        xlabel: 'Vremenski period',
	     }
	  );
	}
	else
	{
	  g2.updateOptions(
	      { 
	        title: 'Prikaz mjerenja za parametar ' + choosenPar + ' u periodu od ' + startDate + ' do ' + endDate,
	          'file': buffer
	      }
	  );
	}
	}

	function sleep(miliseconds) {
	   var currentTime = new Date().getTime();
	   while (currentTime + miliseconds >= new Date().getTime()) {
	   }
	}