		var averages = [];
		var colorBuffer = [];
		var par = $("#map-par").val();
		var map = L.map('map');
		var info = L.control();
		var position1;
		var position2;
		var position3;
		var position4;
		var croatiaLayer;

		console.log("par" + par);
		function style(feature) 
		{	
			var averageStation1 = averages[0];
			var averageStation2 = averages[1];
			var averageStation3 = averages[2];
			var averageStation4 = averages[3];

			var colorStation1;
			var colorStation2;
			var colorStation3;
			var colorStation4;
			var colorRest = "#ffffff";

			if(par == "sm1" || par == "sm2" || par == "sm3" || par == "sm4" || par == "sm5" || par == "sm6")
			{
				colorBuffer = [];
				colorBuffer.push("#ffd1b3");
				colorBuffer.push("#ffc299");
				colorBuffer.push("#ffb380");
				colorBuffer.push("#ff944d");
				colorBuffer.push("#ff8533");
				colorBuffer.push("#e65c00");
				colorBuffer.push("#cc5200");
				colorBuffer.push("#b34700");
				colorBuffer.push("#803300");
				colorBuffer.push("#662900");

				if(averageStation1<=10){ colorStation1 = colorBuffer[0];}
				else if(averageStation1>10 && averageStation1 <= 20) {colorStation1 = colorBuffer[1]; }
				else if(averageStation1>20 && averageStation1 <= 30) {colorStation1 = colorBuffer[2]; }
				else if(averageStation1>30 && averageStation1 <= 40) {colorStation1 = colorBuffer[3]; }
				else if(averageStation1>40 && averageStation1 <= 50) {colorStation1 = colorBuffer[4]; }
				else if(averageStation1>50 && averageStation1 <= 60) {colorStation1 = colorBuffer[5]; }
				else if(averageStation1>60 && averageStation1 <= 70) {colorStation1 = colorBuffer[6]; }
				else if(averageStation1>70 && averageStation1 <= 80) {colorStation1 = colorBuffer[7]; }
				else if(averageStation1>80 && averageStation1 <= 90) {colorStation1 = colorBuffer[8]; }
				else if(averageStation1>90 && averageStation1 <= 110) {colorStation1 = colorBuffer[9]; }

				if(averageStation2<=10){ colorStation2 = colorBuffer[0];}
				else if(averageStation2>10 && averageStation2 <= 20) {colorStation2 = colorBuffer[1]; }
				else if(averageStation2>20 && averageStation2 <= 30) {colorStation2 = colorBuffer[2]; }
				else if(averageStation2>30 && averageStation2 <= 40) {colorStation2 = colorBuffer[3]; }
				else if(averageStation2>40 && averageStation2 <= 50) {colorStation2 = colorBuffer[4]; }
				else if(averageStation2>50 && averageStation2 <= 60) {colorStation2 = colorBuffer[5]; }
				else if(averageStation2>60 && averageStation2 <= 70) {colorStation2 = colorBuffer[6]; }
				else if(averageStation2>70 && averageStation2 <= 80) {colorStation2 = colorBuffer[7]; }
				else if(averageStation2>80 && averageStation2 <= 90) {colorStation2 = colorBuffer[8]; }
				else if(averageStation2>90 && averageStation2 <= 110) {colorStation2 = colorBuffer[9]; }

				if(averageStation3<=10){ colorStation3 = colorBuffer[0];}
				else if(averageStation3>10 && averageStation3 <= 20) {colorStation3 = colorBuffer[1]; }
				else if(averageStation3>20 && averageStation3 <= 30) {colorStation3 = colorBuffer[2]; }
				else if(averageStation3>30 && averageStation3 <= 40) {colorStation3 = colorBuffer[3]; }
				else if(averageStation3>40 && averageStation3 <= 50) {colorStation3 = colorBuffer[4]; }
				else if(averageStation3>50 && averageStation3 <= 60) {colorStation3 = colorBuffer[5]; }
				else if(averageStation3>60 && averageStation3 <= 70) {colorStation3 = colorBuffer[6]; }
				else if(averageStation3>70 && averageStation3 <= 80) {colorStation3 = colorBuffer[7]; }
				else if(averageStation3>80 && averageStation3 <= 90) {colorStation3 = colorBuffer[8]; }
				else if(averageStation3>90 && averageStation3 <= 110) {colorStation3 = colorBuffer[9]; }

				if(averageStation4<=10){ colorStation4 = colorBuffer[0];}
				else if(averageStation4>10 && averageStation4 <= 20) {colorStation4 = colorBuffer[1]; }
				else if(averageStation4>20 && averageStation4 <= 30) {colorStation4 = colorBuffer[2]; }
				else if(averageStation4>30 && averageStation4 <= 40) {colorStation4 = colorBuffer[3]; }
				else if(averageStation4>40 && averageStation4 <= 50) {colorStation4 = colorBuffer[4]; }
				else if(averageStation4>50 && averageStation4 <= 60) {colorStation4 = colorBuffer[5]; }
				else if(averageStation4>60 && averageStation4 <= 70) {colorStation4 = colorBuffer[6]; }
				else if(averageStation4>70 && averageStation4 <= 80) {colorStation4 = colorBuffer[7]; }
				else if(averageStation4>80 && averageStation4 <= 90) {colorStation4 = colorBuffer[8]; }
				else if(averageStation4>90 && averageStation4 <= 110) {colorStation4 =colorBuffer[9]; }

			}
			else if(par == "ah1")
			{
				colorBuffer = [];
				colorBuffer.push("#ccebff");
				colorBuffer.push("#99d6ff");
				colorBuffer.push("#80ccff");
				colorBuffer.push("#66c2ff");
				colorBuffer.push("#4db8ff");
				colorBuffer.push("#33adff");
				colorBuffer.push("#1aa3ff");
				colorBuffer.push("#0099ff");
				colorBuffer.push("#007acc");
				colorBuffer.push("#006bb3");

				if(averageStation1<=10){ colorStation1 = colorBuffer[0];}
				else if(averageStation1>10 && averageStation1 <= 20) {colorStation1 = colorBuffer[1]; }
				else if(averageStation1>20 && averageStation1 <= 30) {colorStation1 =  colorBuffer[2]; }
				else if(averageStation1>30 && averageStation1 <= 40) {colorStation1 =  colorBuffer[3]; }
				else if(averageStation1>40 && averageStation1 <= 50) {colorStation1 =  colorBuffer[4]; }
				else if(averageStation1>50 && averageStation1 <= 60) {colorStation1 =  colorBuffer[5]; }
				else if(averageStation1>60 && averageStation1 <= 70) {colorStation1 =  colorBuffer[6]; }
				else if(averageStation1>70 && averageStation1 <= 80) {colorStation1 =  colorBuffer[7]; }
				else if(averageStation1>80 && averageStation1 <= 90) {colorStation1 =  colorBuffer[8]; }
				else if(averageStation1>90 && averageStation1 <= 110) {colorStation1 = colorBuffer[9]; }

				if(averageStation2<=10){ colorStation2 = colorBuffer[0];;}
				else if(averageStation2>10 && averageStation2 <= 20) {colorStation2 =  colorBuffer[1];}
				else if(averageStation2>20 && averageStation2 <= 30) {colorStation2 =  colorBuffer[2]; }
				else if(averageStation2>30 && averageStation2 <= 40) {colorStation2 = colorBuffer[3]; }
				else if(averageStation2>40 && averageStation2 <= 50) {colorStation2 =  colorBuffer[4]; }
				else if(averageStation2>50 && averageStation2 <= 60) {colorStation2 =  colorBuffer[5]; }
				else if(averageStation2>60 && averageStation2 <= 70) {colorStation2 =  colorBuffer[6]; }
				else if(averageStation2>70 && averageStation2 <= 80) {colorStation2 =  colorBuffer[7]; }
				else if(averageStation2>80 && averageStation2 <= 90) {colorStation2 =  colorBuffer[8]; }
				else if(averageStation2>90 && averageStation2 <= 110) {colorStation2 =  colorBuffer[9]; }

				if(averageStation3<=10){ colorStation3 =  colorBuffer[0];}
				else if(averageStation3>10 && averageStation3 <= 20) {colorStation3 =  colorBuffer[1]; }
				else if(averageStation3>20 && averageStation3 <= 30) {colorStation3 =  colorBuffer[2]; }
				else if(averageStation3>30 && averageStation3 <= 40) {colorStation3 =  colorBuffer[3]; }
				else if(averageStation3>40 && averageStation3 <= 50) {colorStation3 =  colorBuffer[4]; }
				else if(averageStation3>50 && averageStation3 <= 60) {colorStation3 =  colorBuffer[5]; }
				else if(averageStation3>60 && averageStation3 <= 70) {colorStation3 =  colorBuffer[6]; }
				else if(averageStation3>70 && averageStation3 <= 80) {colorStation3 =  colorBuffer[7]; }
				else if(averageStation3>80 && averageStation3 <= 90) {colorStation3 =  colorBuffer[8]; }
				else if(averageStation3>90 && averageStation3 <= 110) {colorStation3 = colorBuffer[9]; }

				if(averageStation4<=10){ colorStation4 =  colorBuffer[0];}
				else if(averageStation4>10 && averageStation4 <= 20) {colorStation4 =  colorBuffer[1]; }
				else if(averageStation4>20 && averageStation4 <= 30) {colorStation4 =  colorBuffer[2]; }
				else if(averageStation4>30 && averageStation4 <= 40) {colorStation4 =  colorBuffer[3]; }
				else if(averageStation4>40 && averageStation4 <= 50) {colorStation4 =  colorBuffer[4]; }
				else if(averageStation4>50 && averageStation4 <= 60) {colorStation4 =  colorBuffer[5]; }
				else if(averageStation4>60 && averageStation4 <= 70) {colorStation4 =  colorBuffer[6]; }
				else if(averageStation4>70 && averageStation4 <= 80) {colorStation4 =  colorBuffer[7]; }
				else if(averageStation4>80 && averageStation4 <= 90) {colorStation4 =  colorBuffer[8]; }
				else if(averageStation4>90 && averageStation4 <= 110) {colorStation4 =  colorBuffer[9]; }
			}
			else if(par == "at1")
			{
				colorBuffer = [];
				colorBuffer.push("#ffe6e6");
				colorBuffer.push("#ffcccc");
				colorBuffer.push("#ffb3b3");
				colorBuffer.push("#ff9999");
				colorBuffer.push("#ff8080");
				colorBuffer.push("#ff6666");
				
	
				if(averageStation1>-25 && averageStation1 <= -10){ colorStation1 = colorBuffer[0];}
				else if(averageStation1>-10 && averageStation1 <= 0) {colorStation1 = colorBuffer[1]; }
				else if(averageStation1>0 && averageStation1 <= 10) {colorStation1 =  colorBuffer[2]; }
				else if(averageStation1>10 && averageStation1 <= 20) {colorStation1 =  colorBuffer[3]; }
				else if(averageStation1>20 && averageStation1 <= 30) {colorStation1 =  colorBuffer[4]; }
				else if(averageStation1>30 && averageStation1 <= 45) {colorStation1 =  colorBuffer[5]; }

				if(averageStation2>-25 && averageStation2 <= -10){ colorStation2 = colorBuffer[0];}
				else if(averageStation2>-10 && averageStation2 <= 0) {colorStation2 = colorBuffer[1]; }
				else if(averageStation2>0 && averageStation2 <= 10) {colorStation2 =  colorBuffer[2]; }
				else if(averageStation2>10 && averageStation2 <= 20) {colorStation2 =  colorBuffer[3]; }
				else if(averageStation2>20 && averageStation2 <= 30) {colorStation2 =  colorBuffer[4]; }
				else if(averageStation2>30 && averageStation2 <= 45) {colorStation2 =  colorBuffer[5]; }

				if(averageStation3>-25 && averageStation3 <= -10){ colorStation3 = colorBuffer[0];}
				else if(averageStation3>-10 && averageStation3 <= 0) {colorStation3 = colorBuffer[1]; }
				else if(averageStation3>0 && averageStation3 <= 10) {colorStation3 =  colorBuffer[2]; }
				else if(averageStation3>10 && averageStation3 <= 20) {colorStation3 =  colorBuffer[3]; }
				else if(averageStation3>20 && averageStation3 <= 30) {colorStation3 =  colorBuffer[4]; }
				else if(averageStation3>30 && averageStation3 <= 45) {colorStation3 =  colorBuffer[5]; }

				if(averageStation4>-25 && averageStation4 <= -10){ colorStation4 = colorBuffer[0];}
				else if(averageStation4>-10 && averageStation4 <= 0) {colorStation4 = colorBuffer[1]; }
				else if(averageStation4>0 && averageStation4 <= 10) {colorStation4 =  colorBuffer[2]; }
				else if(averageStation4>10 && averageStation4 <= 20) {colorStation4 =  colorBuffer[3]; }
				else if(averageStation4>20 && averageStation4 <= 30) {colorStation4 =  colorBuffer[4]; }
				else if(averageStation4>30 && averageStation4 <= 45) {colorStation4 =  colorBuffer[5]; }
			}
			else if(par == "ws1")
			{
				colorBuffer = [];
				colorBuffer.push("#99ccff");
				colorBuffer.push("#1a8cff");
				colorBuffer.push("#0066cc");
				colorBuffer.push("#003366");

				if(averageStation1<=10){ colorStation1 = colorBuffer[0];}
				else if(averageStation1>10 && averageStation1 <= 20) {colorStation1 = colorBuffer[1]; }
				else if(averageStation1>20 && averageStation1 <= 30) {colorStation1 =  colorBuffer[2]; }
				else if(averageStation1>30 && averageStation1 <= 45) {colorStation1 =  colorBuffer[3]; }	

				if(averageStation2<=10){ colorStation2 = colorBuffer[0];;}
				else if(averageStation2>10 && averageStation2 <= 20) {colorStation2 =  colorBuffer[1];}
				else if(averageStation2>20 && averageStation2 <= 30) {colorStation2 =  colorBuffer[2]; }
				else if(averageStation2>30 && averageStation2 <= 45) {colorStation2 = colorBuffer[3]; }
			
				if(averageStation3<=10){ colorStation3 =  colorBuffer[0];}
				else if(averageStation3>10 && averageStation3 <= 20) {colorStation3 =  colorBuffer[1]; }
				else if(averageStation3>20 && averageStation3 <= 30) {colorStation3 =  colorBuffer[2]; }
				else if(averageStation3>30 && averageStation3 <= 45) {colorStation3 =  colorBuffer[3]; }
				
				if(averageStation4<=10){ colorStation4 =  colorBuffer[0];}
				else if(averageStation4>10 && averageStation4 <= 20) {colorStation4 =  colorBuffer[1]; }
				else if(averageStation4>20 && averageStation4 <= 30) {colorStation4 =  colorBuffer[2]; }
				else if(averageStation4>30 && averageStation4 <= 45) {colorStation4 =  colorBuffer[3]; }
		
			}
			else if(par == "pp1")
			{
				colorBuffer = [];
				colorBuffer.push("#d4d6d8");
				colorBuffer.push("#e6f2ff");
				colorBuffer.push("#cce6ff");
				colorBuffer.push("#b3d9ff");
				colorBuffer.push("#99ccff");
				colorBuffer.push("#80bfff");
				colorBuffer.push("#66b3ff");
				colorBuffer.push("#4da6ff");
				colorBuffer.push("#3399ff");
				colorBuffer.push("#1a8cff");
				colorBuffer.push("#0066cc");
				colorBuffer.push("#004d99");

				if(averageStation1==0){ colorStation1 = colorBuffer[0];}
				else if(averageStation1>0 && averageStation1 <= 5) {colorStation1 = colorBuffer[1]; }
				else if(averageStation1>5 && averageStation1 <= 10) {colorStation1 =  colorBuffer[2]; }
				else if(averageStation1>10 && averageStation1 <= 15) {colorStation1 =  colorBuffer[3]; }
				else if(averageStation1>15 && averageStation1 <= 20) {colorStation1 =  colorBuffer[4]; }
				else if(averageStation1>20 && averageStation1 <= 25) {colorStation1 =  colorBuffer[5]; }
				else if(averageStation1>25 && averageStation1 <= 30) {colorStation1 =  colorBuffer[6]; }
				else if(averageStation1>30 && averageStation1 <= 35) {colorStation1 =  colorBuffer[7]; }
				else if(averageStation1>35 && averageStation1 <= 40) {colorStation1 =  colorBuffer[8]; }
				else if(averageStation1>40 && averageStation1 <= 45) {colorStation1 = colorBuffer[9]; }
				else if(averageStation1>45 && averageStation1 <= 50) {colorStation1 = colorBuffer[10]; }
				else if(averageStation1>50 && averageStation1 <= 110) {colorStation1 = colorBuffer[11]; }

				if(averageStation2==0){ colorStation2 = colorBuffer[0];}
				else if(averageStation2>0 && averageStation2 <= 5) {colorStation2 = colorBuffer[1]; }
				else if(averageStation2>5 && averageStation2 <= 10) {colorStation2 =  colorBuffer[2]; }
				else if(averageStation2>10 && averageStation2 <= 15) {colorStation2 =  colorBuffer[3]; }
				else if(averageStation2>15 && averageStation2 <= 20) {colorStation2 =  colorBuffer[4]; }
				else if(averageStation2>20 && averageStation2 <= 25) {colorStation2 =  colorBuffer[5]; }
				else if(averageStation2>25 && averageStation2 <= 30) {colorStation2 =  colorBuffer[6]; }
				else if(averageStation2>30 && averageStation2 <= 35) {colorStation2 =  colorBuffer[7]; }
				else if(averageStation2>35 && averageStation2 <= 40) {colorStation2 =  colorBuffer[8]; }
				else if(averageStation2>40 && averageStation2 <= 45) {colorStation2 = colorBuffer[9]; }
				else if(averageStation2>45 && averageStation2 <= 50) {colorStation2 = colorBuffer[10]; }
				else if(averageStation2>50 && averageStation2 <= 110) {colorStation2 = colorBuffer[11]; }

				if(averageStation3==0){ colorStation3 = colorBuffer[0];}
				else if(averageStation3>0 && averageStation3 <= 5) {colorStation3 = colorBuffer[1]; }
				else if(averageStation3>5 && averageStation3 <= 10) {colorStation3 =  colorBuffer[2]; }
				else if(averageStation3>10 && averageStation3 <= 15) {colorStation3 =  colorBuffer[3]; }
				else if(averageStation3>15 && averageStation3 <= 20) {colorStation3 =  colorBuffer[4]; }
				else if(averageStation3>20 && averageStation3 <= 25) {colorStation3 =  colorBuffer[5]; }
				else if(averageStation3>25 && averageStation3 <= 30) {colorStation3 =  colorBuffer[6]; }
				else if(averageStation3>30 && averageStation3 <= 35) {colorStation3 =  colorBuffer[7]; }
				else if(averageStation3>35 && averageStation3 <= 40) {colorStation3 =  colorBuffer[8]; }
				else if(averageStation3>40 && averageStation3 <= 45) {colorStation3 = colorBuffer[9]; }
				else if(averageStation3>45 && averageStation3 <= 50) {colorStation3 = colorBuffer[10]; }
				else if(averageStation3>50 && averageStation3 <= 110) {colorStation3 = colorBuffer[11]; }

				if(averageStation4==0){ colorStation4 = colorBuffer[0];}
				else if(averageStation4>0 && averageStation4 <= 5) {colorStation4 = colorBuffer[1]; }
				else if(averageStation4>5 && averageStation4 <= 10) {colorStation4 =  colorBuffer[2]; }
				else if(averageStation4>10 && averageStation4 <= 15) {colorStation4 =  colorBuffer[3]; }
				else if(averageStation4>15 && averageStation4 <= 20) {colorStation4 =  colorBuffer[4]; }
				else if(averageStation4>20 && averageStation4 <= 25) {colorStation4 =  colorBuffer[5]; }
				else if(averageStation4>25 && averageStation4 <= 30) {colorStation4 =  colorBuffer[6]; }
				else if(averageStation4>30 && averageStation4 <= 35) {colorStation4 =  colorBuffer[7]; }
				else if(averageStation4>35 && averageStation4 <= 40) {colorStation4 =  colorBuffer[8]; }
				else if(averageStation4>40 && averageStation4 <= 45) {colorStation4 = colorBuffer[9]; }
				else if(averageStation4>45 && averageStation4 <= 50) {colorStation4 = colorBuffer[10]; }
				else if(averageStation4>50 && averageStation4 <= 110) {colorStation4 = colorBuffer[11]; }
			}
	
			 switch (feature.properties.name) 
			 {
			 	//Stanica1
			 	case 'Osjecko-Baranjska':   return {color: colorStation1, opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1};
			 	case 'Vukovarsko-Srijemska':   return {color: colorStation1,opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1};
			 	case 'Brodsko-Posavska':   return {color: colorStation1, opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1};
			 	case 'Viroviticko-Podravska':   return {color: colorStation1, opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1};

			 	//Stanica2
			 	case 'Sisacko-Moslavacka':   return {color: colorStation2, opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1};
			 	case 'Bjelovarska-Bilogorska':   return {color: colorStation2, opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1};
			 	case 'Zagrebacka':   return {color: colorStation2, opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1};
			 	case 'Grad Zagreb':   return {color: colorStation2, opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1};

			 	//Stanica3
			 	case 'Krapinsko-Zagorska':   return {color: colorStation3, opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1};
				case 'VaraВћdinska':   return {color: colorStation3, opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1};
				case 'Medimurska':   return {color: colorStation3, opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1};
				case 'Koprivnicko-KriВћevacka':   return {color: colorStation3, opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1};

				//Stanica4
				case 'Karlovacka':   return {color: colorStation4, opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1};
				case 'Licko-Senjska':   return {color: colorStation4, opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1};
		        case 'Primorsko-Goranska':   return {color: colorStation4, opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1}; 
		        case 'Istarska':   return {color: colorStation4, opacity: 1, weight: 5, dashArray: '5',fillOpacity: 1};

		        //Ostalo
		        case 'Dubrovacko-Neretvanska': return { color: colorRest};    
		        case 'Zadarska':   return {color: colorRest};
		        case 'ВЉibensko-Kninska':   return {color: colorRest};    
		        case 'Splitsko-Dalmatinska':   return {color: colorRest};		           
		     }		
		}	

		function createMap(){			
			//zoom disable
			map.touchZoom.disable();
			map.doubleClickZoom.disable();
			map.scrollWheelZoom.disable();
			map.boxZoom.disable();
			map.keyboard.disable();
			//map.dragging.disable();
			$(".leaflet-control-zoom").css("visibility", "hidden");
			croatiaLayer = L.geoJson(croatia, {style: style}).addTo(map);

			map.fitBounds(croatiaLayer.getBounds());

			var point1 = [45.45667, 18.01667 ];
			var point2 = [45.36667, 16.51667 ];
			var point3 = [46.19667, 16.51667 ];
			var point4 = [45.16667, 15.11667 ];

			position1 = L.marker(point1).addTo(map).on('click', onClick);
	     	position2 = L.marker(point2).addTo(map).on('click', onClick);
			position3 = L.marker(point3).addTo(map).on('click', onClick);
			position4 = L.marker(point4).addTo(map).on('click', onClick);
		}


		function dataForPreviousDay()
		{
			var station1Avg = 0;
			var station2Avg = 0;
			var station3Avg = 0;
			var station4Avg = 0;
			console.log("test");
			$.ajax({
	          type: "POST",
	          url: "php/getDataByPreviousDay.php",
	          dataType: "json",
	          async: false,
	          data: {par: par },
	          success: function(data) 
	          {	          	 
	          	console.log(data);       	    	
				for(i=0; i<data.length; i++)
				{
				  	if(i<24)
				  	{
						station1Avg = station1Avg + parseFloat(data[i].par);
				  	}
				  	else if(i>=24 && i<48)
				  	{
				  		station2Avg += parseFloat(data[i].par); 
				  	}
				  	else if(i>=48 && i<72)
				  	{
				  		station3Avg += parseFloat(data[i].par); 
				  	}
				  	else
				  	{
				  		station4Avg += parseFloat(data[i].par);
				  	}
				}

				averages.push(station1Avg/24);
				averages.push(station2Avg/24);
				averages.push(station3Avg/24);
				averages.push(station4Avg/24);

	          }//end of success
	        });//end of ajax
		}

		function setLegend(){
			var legend = L.control({position: 'bottomright'});
			legend.onAdd = function (map) 
			{
			    var div = L.DomUtil.create('div', 'info legend');
			    labels = [];
			    if(par == "sm1" || par == "sm2" || par == "sm3" || par == "sm4" || par == "sm5"
			    	|| par == "sm6" || par == "ah1")
			    {
			    	 div.innerHTML += "<p>Vrijednosti u %</p>"; 
				    for (var i = 0; i < colorBuffer.length; i++) {
				        div.innerHTML +=
				            '<i style="background-color:' + colorBuffer[i] +'"></i>' + i*10 + ' &ndash; ' + (i+1)*10 + '<br>';
				    }
			    }
			    else if(par == "at1")
			    {
			    	div.innerHTML += "<p>Vrijednosti u °C</p>";
			    	for (var i = 0; i < colorBuffer.length; i++) {
				        div.innerHTML +=
				            '<i style="background-color:' + colorBuffer[i] +'"></i>' + (-20 +(i*10)) + ' &ndash; ' + ((-20)+(i+1)*10) + '<br>';
				    }
			    }
			    else if(par =="ws1")
			    {
			    	div.innerHTML += "<p>Vrijednosti u km/h </p>"; 
				    for (var i = 0; i < colorBuffer.length; i++) {
				        div.innerHTML +=
				            '<i style="background-color:' + colorBuffer[i] +'"></i>' + i*10 + ' &ndash; ' + (i+1)*10 + '<br>';
				    }
			    }
			    else if(par = "pp1")
			    {
			    	div.innerHTML += "<p>Vrijednosti u mm </p>"; 
				    for (var i = 0; i < colorBuffer.length; i++) {
				    	if(i == 0)
				    	{
				    		div.innerHTML +=
				            '<i style="background-color:' + colorBuffer[i] +'"></i>' + i + '<br>';
				    	}
				    	else if(i>0 && i<11)
				    	{
				    		 div.innerHTML +=
				            '<i style="background-color:' + colorBuffer[i] +'"></i>' + i*5 + ' &ndash; ' + (i+1)*5 + '<br>';
				    	}
				    	else
				    	{
				    		div.innerHTML +=
				            '<i style="background-color:' + colorBuffer[i] +'"></i>' + 55 + ' &ndash; ' + 100 + '<br>';
				    	}
				        
				    }
			    }
			   

	    		return div;
	    	}

	    	legend.addTo(map);	
		}

		function onClick(e) {

			var positionNumber;
			var par1;		

			par1 = $("#map-par").val();
			console.log("Ovo je parametar " + par1);
			var parText = $("#map-par option:selected").text();
			
			console.log("partext je" + parText);
			if(45.45667 == e.latlng.lat){ positionNumber = 1; tableString ="<h3>Stanica 1</h3><hr>"}
			else if(45.36667 == e.latlng.lat){ positionNumber = 2;  tableString ="<h3>Stanica 2</h3><hr>"}
			else if(46.19667 == e.latlng.lat) {positionNumber = 3;  tableString ="<h3>Stanica 3</h3><hr>"}
			else{ positionNumber = 4; tableString ="<h3>Stanica 4</h3><hr>"}
           

			$.ajax({
	          type: "POST",
	          url: "php/getDataByStation.php",
	          dataType: "json",
	          data: {stationID: positionNumber, par: par1 },
	          success: function(data) 
	          {	       
	          	console.log("uspjeh");   	
	          	console.log(data);
	          	tableString = tableString + "<h4>Prikaz mjerenja za prethodnih 7 dana za par " + parText +"</h4><hr><div><table class='table table-bordered map-table'><tr><td></td><th>00:00</th><th>01:00</th><th>02:00</th><th>03:00</th><th>04:00</th><th>05:00</th><th>06:00</th><th>07:00</th><th>08:00</th><th>09:00</th><th>10:00</th><th>11:00</th><th>12:00</th><th>13:00</th><th>14:00</th><th>15:00</th><th>16:00</th><th>17:00</th><th>18:00</th><th>19:00</th><th>20:00</th><th>21:00</th><th>22:00</th><th>23:00</th></tr>";
	          	var tableData=" ";
				var buffer= [];
				var counter = 0;

	          	//SM1 ROW
	          	for(i=0; i<data.length-1;i++)
	          	{
	          		console.log(i);
	          		if(i%24 == 0)
	          		{
		          			buffer.push({
		          			datum: data[i].datum,
		          			v00: data[i].par,
		          			v01: data[i+1].par,
		          			v02: data[i+2].par,
		          			v03: data[i+3].par,
		          			v04: data[i+4].par,
		          			v05: data[i+5].par,
		          			v06: data[i+6].par,
		          			v07: data[i+7].par,
		          			v08: data[i+8].par,
		          			v09: data[i+9].par,
		          			v10: data[i+10].par,
		          			v11: data[i+11].par,
		          			v12: data[i+12].par,
		          			v13: data[i+13].par,
		          			v14: data[i+14].par,
		          			v15: data[i+15].par,
		          			v16: data[i+16].par,
		          			v17: data[i+17].par,
		          			v18: data[i+18].par,
		          			v19: data[i+19].par,
		          			v20: data[i+20].par,
		          			v21: data[i+21].par,
		          			v22: data[i+22].par,
		          			v23: data[i+23].par
		          		})
	          		}	          		
	          	}
	        
	          	for(i=0; i<buffer.length;i++)
	          	{
	          		console.log(buffer[i].datum.slice(0,10));
	          		console.log(buffer[i].v00);
	          		tableData += 
	          		"<tr><th class='left-th'style='width:300px'>" + buffer[i].datum.slice(0,10) + "</th><td>" + buffer[i].v00 + 
	          		"</td><td>"  + buffer[i].v01 + "</td><td>" + buffer[i].v02 + "</td><td>"+ buffer[i].v03 + "</td><td>" + buffer[i].v04 + "</td><td>"+ buffer[i].v05 + "</td><td>" + buffer[i].v06 + "</td><td>"+ buffer[i].v07 + "</td><td>"+ buffer[i].v08 + "</td><td>"+ buffer[i].v09 + "</td><td>"+ buffer[i].v10 + "</td><td>"+ buffer[i].v11 + "</td><td>"+ buffer[i].v12 + "</td><td>"+ buffer[i].v13 + "</td><td>"+ buffer[i].v14 + "</td><td>"+ buffer[i].v15 + "</td><td>"+ buffer[i].v16 + "</td><td>"+ buffer[i].v17 + "</td><td>"+ buffer[i].v18 + "</td><td>"+ buffer[i].v19 + "</td><td>"+ buffer[i].v20 + "</td><td>"+ buffer[i].v21 + "</td><td>"+ buffer[i].v22 + "</td><td>" + buffer[i].v23 + "</td><tr>"

	          	}

	          	tableData += "</table>";
            	tableString = tableString + tableData;

	          	if(positionNumber == 1){ position1.bindPopup(tableString,{maxWidth: "auto"}).openPopup(); }
            	else if(positionNumber == 2){ position2.bindPopup(tableString,{maxWidth: "auto"}).openPopup(); }
            	else if(positionNumber == 3){ position3.bindPopup(tableString,{maxWidth: "auto"}).openPopup(); }
            	else if(positionNumber == 4){ position4.bindPopup(tableString,{maxWidth: "auto"}).openPopup(); }	
	           
	          },//end of success
	           error: function (request, status, error) {
			    	console.log(request.responseText);
			    	console.log("errr");
			  }

	        });//end of ajax
		}

		function detectParametarChange(){
			$('#map-par').on('change', function() {
				par = $(this).val();
				console.log("parametar change " + par);
				averages = [];
				dataForPreviousDay();
	    		croatiaLayer.setStyle(style);
	    		$( ".info" ).remove();
	    		setLegend();
	    		setInfo();
			});
		}

	

		
