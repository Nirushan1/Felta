
function gofunction() {
	
	//Getting data from html
	var age = document.getElementsByName("age")[0].value;
	var height = document.getElementsByName("height")[0].value;
	var weight = document.getElementsByName("weight")[0].value;
	
	if (age!=""&&height!=""&&weight!=""&&!isNaN(age)&&!isNaN(weight)&&!isNaN(height)&&age>=1) {
		document.getElementById("resultDesc").style.display = "block";
		document.getElementById("emptyFields").style.display = "none";
		document.getElementById("bmiButtonLink").href = "index.html#bmiButtonGo";
	}
	else {
		document.getElementById("emptyFields").style.display = "block";
		document.getElementById("resultDesc").style.display = "none";
		document.getElementById("bmiButtonLink").href = "index.html#bmiDivId";
	}
	
	//Dealing with bmi
	var bmi_notround = weight/(height*height);
	var bmi = Math.round(bmi_notround*100)/100;
		
	var bmi_status;
	if (bmi<18.5) {
		bmi_status = "underweight";
	}
	else if (bmi<24.9) {
		bmi_status = "normal weight";
	}
	else if (bmi<29.9) {
		bmi_status = "overweight";
	}
	else {
		bmi_status = "obesity";
	}
	
	
	//Dealing with age
	var life_part, carb;
	if (age<13) {
		life_part = "kid";
	}
	else if (age<20) {
		life_part = "teen";
	}
	else if (age<35) {
		life_part = "young adult";
	}
	else if (age<75) {
		life_part = "adult";
	}
	else {
		life_part = "elderly";
	}
	
	
	//Recommendations
	var prot = Math.round((0.8*weight)*100)/100;
	var fat = Math.round(((1/bmi)*1600)*100)/100;
	var carb = Math.round((130+age*2.5)*100)/100;
	
	
	//Passing to html
	document.getElementById("lifePart").innerHTML = life_part;
	document.getElementById("bmiValue").innerHTML = bmi;
	document.getElementById("bmiStatus").innerHTML = bmi_status;
	document.getElementById("fat").innerHTML = fat;
	document.getElementById("carb").innerHTML = carb;
	document.getElementById("prot").innerHTML = prot;
	
	document.getElementById("fatLim").value = fat;
	document.getElementById("carbLim").value = carb;
	document.getElementById("protLim").value = prot;
	
}


function sumfunction() {
	
	//Table manipulation
	var totFat = Number(document.getElementById("fat1").value)+Number(document.getElementById("fat2").value)+Number(document.getElementById("fat3").value)+Number(document.getElementById("fat4").value)+Number(document.getElementById("fat5").value)+Number(document.getElementById("fat6").value)+Number(document.getElementById("fat7").value)+Number(document.getElementById("fat8").value)+Number(document.getElementById("fat9").value)+Number(document.getElementById("fat10").value);
	var totCarb = Number(document.getElementById("carb1").value)+Number(document.getElementById("carb2").value)+Number(document.getElementById("carb3").value)+Number(document.getElementById("carb4").value)+Number(document.getElementById("carb5").value)+Number(document.getElementById("carb6").value)+Number(document.getElementById("carb7").value)+Number(document.getElementById("carb8").value)+Number(document.getElementById("carb9").value)+Number(document.getElementById("carb10").value);
	var totProt = Number(document.getElementById("prot1").value)+Number(document.getElementById("prot2").value)+Number(document.getElementById("prot3").value)+Number(document.getElementById("prot4").value)+Number(document.getElementById("prot5").value)+Number(document.getElementById("prot6").value)+Number(document.getElementById("prot7").value)+Number(document.getElementById("prot8").value)+Number(document.getElementById("prot9").value)+Number(document.getElementById("prot10").value);

	var difFat = totFat-document.getElementById("fatLim").value;
	var difCarb = totCarb-document.getElementById("carbLim").value;
	var difProt = totProt-document.getElementById("protLim").value;
	
	document.getElementById("fatSum").value=totFat;
	document.getElementById("carbSum").value=totCarb;
	document.getElementById("protSum").value=totProt;
	
	document.getElementById("fatExc").value=difFat;
	document.getElementById("carbExc").value=difCarb;
	document.getElementById("protExc").value=difProt;
	
	
	//Food advice
	
	if (Number(document.getElementById("fatExc").value)>0) {
		alert("Beware! You have exceeded fat intake limit");
	}
	
	if (Number(document.getElementById("carbExc").value)>0) {
		alert("Beware! You have exceeded carbohydrate intake limit");
	}
	
	if (Number(document.getElementById("protExc").value)>0) {
		alert("Beware! You have exceeded protein intake limit");
	}
	
	if (Number(document.getElementById("fatExc").value)>0) {
		document.getElementById("fatAdvice").style.display="block";
	}
	else {
		document.getElementById("fatAdvice").style.display="none";
	}
	
	if (Number(document.getElementById("carbExc").value)>0) {
		document.getElementById("carbAdvice").style.display="block";
	}
	else {
		document.getElementById("carbAdvice").style.display="none";
	}
	
	if (Number(document.getElementById("protExc").value)>0) {
		document.getElementById("protAdvice").style.display="block";
	}
	else {
		document.getElementById("protAdvice").style.display="none";
	}
	
}

function setWaterTime() {
	var water_rec = document.getElementById("waterRec").value;
	var water_gap = document.getElementById("waterGap").value;
	
	if(water_gap!="" && !isNaN(water_gap)&&water_rec!="" && !isNaN(water_rec)) {
		document.getElementById("waterTime").innerHTML = water_gap;
		document.getElementById("recommendWater").style.display = "block";
		document.getElementById("waterError").style.display = "none";
		document.getElementById("setWaterButton").href = "index.html#setWaterButton";
	}
	else {
		document.getElementById("recommendWater").style.display = "none";
		document.getElementById("waterError").style.display = "block";
		document.getElementById("setWaterButton").href = "index.html#setWaterDiv";
	}
	
	var water_amount = Math.round((water_rec*1000*water_gap/24)*100)/100;
	document.getElementById("waterLitre").value = water_amount;
}

var totWater = 0;

function addWater() {
	var waterDrop = Number(document.getElementById("waterDrop").value)
	totWater += waterDrop;
	document.getElementById("waterJug").innerHTML=totWater;
	
	var recWater = Number(document.getElementById("waterRec").value);
	if(totWater>=recWater*1000) {
		document.getElementById("waterDaily").style.display="none";
		document.getElementById("waterDailyDesc").style.color="green";
	}
	
	var recWaterDrop = Number(document.getElementById("waterLitre").value);
	document.getElementById("compRateDesc").style.display="block";
	
	if(waterDrop>recWaterDrop) {
		document.getElementById("compareRate").innerHTML="higher rate than";
		document.getElementById("compRateDesc").style.color="green";
	}
	else if(waterDrop==recWaterDrop) {
		document.getElementById("compareRate").innerHTML="same rate as";
		document.getElementById("compRateDesc").style.color="green";
	}
	else {
		document.getElementById("compareRate").innerHTML="lower rate than";
		document.getElementById("compRateDesc").style.color="red";
		alert("Alert! You are consuming water at lower rate than expected");
	}
	
}

function clearWater() {
	totWater = 0
	document.getElementById("waterJug").innerHTML=totWater;
	document.getElementById("waterDaily").style.display="inline";
	document.getElementById("waterDailyDesc").style.color="red";
	document.getElementById("compRateDesc").style.display="none";
}


function restoreButton() {
	if (typeof(Storage) !== "undefined") {
		
		//waterGap textbox value
		if (sessionStorage.process1) {
			sessionStorage.process1 = sessionStorage.process1;
		} else {
			sessionStorage.process1 = document.getElementById("waterGap").value;
		}
		document.getElementById("waterGap").value = sessionStorage.process1;
		
		//age textbox value
		if (sessionStorage.process2) {
			sessionStorage.process2 = sessionStorage.process2;
		} else {
			sessionStorage.process2 = document.getElementsByName("age")[0].value;
		}
		document.getElementsByName("age")[0].value = sessionStorage.process2;
		
		//weight textbox value
		if (sessionStorage.process3) {
			sessionStorage.process3 = sessionStorage.process3;
		} else {
			sessionStorage.process3 = document.getElementsByName("weight")[0].value;
		}
		document.getElementsByName("weight")[0].value = sessionStorage.process3;
		
		//height textbox value
		if (sessionStorage.process4) {
			sessionStorage.process4 = sessionStorage.process4;
		} else {
			sessionStorage.process4 = document.getElementsByName("height")[0].value;
		}
		document.getElementsByName("height")[0].value = sessionStorage.process4;
		
		//waterRec textbox value
		if (sessionStorage.process5) {
			sessionStorage.process5 = sessionStorage.process5;
		} else {
			sessionStorage.process5 = document.getElementById("waterRec").value;
		}
		document.getElementById("waterRec").value = sessionStorage.process5;
		
		//foodTable textboxes values
		if (sessionStorage.processT11) {
			sessionStorage.processT11 = sessionStorage.processT11;
		} else {
			sessionStorage.processT11 = document.getElementById("food1").value;
		}
		document.getElementById("food1").value = sessionStorage.processT11;
		
		//foodTable textboxes values
		if (sessionStorage.processT21) {
			sessionStorage.processT21 = sessionStorage.processT21;
		} else {
			sessionStorage.processT21 = document.getElementById("food2").value;
		}
		document.getElementById("food2").value = sessionStorage.processT21;
		
		//foodTable textboxes values
		if (sessionStorage.processT31) {
			sessionStorage.processT31 = sessionStorage.processT31;
		} else {
			sessionStorage.processT31 = document.getElementById("food3").value;
		}
		document.getElementById("food3").value = sessionStorage.processT31;
		
		//foodTable textboxes values
		if (sessionStorage.processT41) {
			sessionStorage.processT41 = sessionStorage.processT41;
		} else {
			sessionStorage.processT41 = document.getElementById("food4").value;
		}
		document.getElementById("food4").value = sessionStorage.processT41;
		
		//foodTable textboxes values
		if (sessionStorage.processT51) {
			sessionStorage.processT51 = sessionStorage.processT51;
		} else {
			sessionStorage.processT51 = document.getElementById("food5").value;
		}
		document.getElementById("food5").value = sessionStorage.processT51;
		
		//foodTable textboxes values
		if (sessionStorage.processT61) {
			sessionStorage.processT61 = sessionStorage.processT61;
		} else {
			sessionStorage.processT61 = document.getElementById("food6").value;
		}
		document.getElementById("food6").value = sessionStorage.processT61;
		
		//foodTable textboxes values
		if (sessionStorage.processT71) {
			sessionStorage.processT71 = sessionStorage.processT71;
		} else {
			sessionStorage.processT71 = document.getElementById("food7").value;
		}
		document.getElementById("food7").value = sessionStorage.processT71;
		
		//foodTable textboxes values
		if (sessionStorage.processT81) {
			sessionStorage.processT81 = sessionStorage.processT81;
		} else {
			sessionStorage.processT81 = document.getElementById("food8").value;
		}
		document.getElementById("food8").value = sessionStorage.processT81;
		
		//foodTable textboxes values
		if (sessionStorage.processT91) {
			sessionStorage.processT91 = sessionStorage.processT91;
		} else {
			sessionStorage.processT91 = document.getElementById("food9").value;
		}
		document.getElementById("food9").value = sessionStorage.processT91;
		
		//foodTable textboxes values
		if (sessionStorage.processT101) {
			sessionStorage.processT101 = sessionStorage.processT101;
		} else {
			sessionStorage.processT101 = document.getElementById("food10").value;
		}
		document.getElementById("food10").value = sessionStorage.processT101;
		
		//foodTable textboxes values
		if (sessionStorage.processT12) {
			sessionStorage.processT12 = sessionStorage.processT12;
		} else {
			sessionStorage.processT12 = document.getElementById("fat1").value;
		}
		document.getElementById("fat1").value = sessionStorage.processT12;
		
		//foodTable textboxes values
		if (sessionStorage.processT22) {
			sessionStorage.processT22 = sessionStorage.processT22;
		} else {
			sessionStorage.processT22 = document.getElementById("fat2").value;
		}
		document.getElementById("fat2").value = sessionStorage.processT22;
		
		//foodTable textboxes values
		if (sessionStorage.processT32) {
			sessionStorage.processT32 = sessionStorage.processT32;
		} else {
			sessionStorage.processT32 = document.getElementById("fat3").value;
		}
		document.getElementById("fat3").value = sessionStorage.processT32;
		
		//foodTable textboxes values
		if (sessionStorage.processT42) {
			sessionStorage.processT42 = sessionStorage.processT42;
		} else {
			sessionStorage.processT42 = document.getElementById("fat4").value;
		}
		document.getElementById("fat4").value = sessionStorage.processT42;
		
		//foodTable textboxes values
		if (sessionStorage.processT52) {
			sessionStorage.processT52 = sessionStorage.processT52;
		} else {
			sessionStorage.processT52 = document.getElementById("fat5").value;
		}
		document.getElementById("fat5").value = sessionStorage.processT52;
		
		//foodTable textboxes values
		if (sessionStorage.processT62) {
			sessionStorage.processT62 = sessionStorage.processT62;
		} else {
			sessionStorage.processT62 = document.getElementById("fat6").value;
		}
		document.getElementById("fat6").value = sessionStorage.processT62;
		
		//foodTable textboxes values
		if (sessionStorage.processT72) {
			sessionStorage.processT72 = sessionStorage.processT72;
		} else {
			sessionStorage.processT72 = document.getElementById("fat7").value;
		}
		document.getElementById("fat7").value = sessionStorage.processT72;
		
		//foodTable textboxes values
		if (sessionStorage.processT82) {
			sessionStorage.processT82 = sessionStorage.processT82;
		} else {
			sessionStorage.processT82 = document.getElementById("fat8").value;
		}
		document.getElementById("fat8").value = sessionStorage.processT82;
		
		//foodTable textboxes values
		if (sessionStorage.processT92) {
			sessionStorage.processT92 = sessionStorage.processT92;
		} else {
			sessionStorage.processT92 = document.getElementById("fat9").value;
		}
		document.getElementById("fat9").value = sessionStorage.processT92;
		
		//foodTable textboxes values
		if (sessionStorage.processT102) {
			sessionStorage.processT102 = sessionStorage.processT102;
		} else {
			sessionStorage.processT102 = document.getElementById("fat10").value;
		}
		document.getElementById("fat10").value = sessionStorage.processT102;
		
		//foodTable textboxes values
		if (sessionStorage.processT13) {
			sessionStorage.processT13 = sessionStorage.processT13;
		} else {
			sessionStorage.processT13 = document.getElementById("carb1").value;
		}
		document.getElementById("carb1").value = sessionStorage.processT13;
		
		//foodTable textboxes values
		if (sessionStorage.processT23) {
			sessionStorage.processT23 = sessionStorage.processT23;
		} else {
			sessionStorage.processT23 = document.getElementById("carb2").value;
		}
		document.getElementById("carb2").value = sessionStorage.processT23;
		
		//foodTable textboxes values
		if (sessionStorage.processT33) {
			sessionStorage.processT33 = sessionStorage.processT33;
		} else {
			sessionStorage.processT33 = document.getElementById("carb3").value;
		}
		document.getElementById("carb3").value = sessionStorage.processT33;
		
		//foodTable textboxes values
		if (sessionStorage.processT43) {
			sessionStorage.processT43 = sessionStorage.processT43;
		} else {
			sessionStorage.processT43 = document.getElementById("carb4").value;
		}
		document.getElementById("carb4").value = sessionStorage.processT43;
		
		//foodTable textboxes values
		if (sessionStorage.processT53) {
			sessionStorage.processT53 = sessionStorage.processT53;
		} else {
			sessionStorage.processT53 = document.getElementById("carb5").value;
		}
		document.getElementById("carb5").value = sessionStorage.processT53;
		
		//foodTable textboxes values
		if (sessionStorage.processT63) {
			sessionStorage.processT63 = sessionStorage.processT63;
		} else {
			sessionStorage.processT63 = document.getElementById("carb6").value;
		}
		document.getElementById("carb6").value = sessionStorage.processT63;
		
		//foodTable textboxes values
		if (sessionStorage.processT73) {
			sessionStorage.processT73 = sessionStorage.processT73;
		} else {
			sessionStorage.processT73 = document.getElementById("carb7").value;
		}
		document.getElementById("carb7").value = sessionStorage.processT73;
		
		//foodTable textboxes values
		if (sessionStorage.processT83) {
			sessionStorage.processT83 = sessionStorage.processT83;
		} else {
			sessionStorage.processT83 = document.getElementById("carb8").value;
		}
		document.getElementById("carb8").value = sessionStorage.processT83;
		
		//foodTable textboxes values
		if (sessionStorage.processT93) {
			sessionStorage.processT93 = sessionStorage.processT93;
		} else {
			sessionStorage.processT93 = document.getElementById("carb9").value;
		}
		document.getElementById("carb9").value = sessionStorage.processT93;
		
		//foodTable textboxes values
		if (sessionStorage.processT103) {
			sessionStorage.processT103 = sessionStorage.processT103;
		} else {
			sessionStorage.processT103 = document.getElementById("carb10").value;
		}
		document.getElementById("carb10").value = sessionStorage.processT103;
		
		//foodTable textboxes values
		if (sessionStorage.processT14) {
			sessionStorage.processT14 = sessionStorage.processT14;
		} else {
			sessionStorage.processT14 = document.getElementById("prot1").value;
		}
		document.getElementById("prot1").value = sessionStorage.processT14;
		
		//foodTable textboxes values
		if (sessionStorage.processT24) {
			sessionStorage.processT24 = sessionStorage.processT24;
		} else {
			sessionStorage.processT24 = document.getElementById("prot2").value;
		}
		document.getElementById("prot2").value = sessionStorage.processT24;
		
		//foodTable textboxes values
		if (sessionStorage.processT34) {
			sessionStorage.processT34 = sessionStorage.processT34;
		} else {
			sessionStorage.processT34 = document.getElementById("prot3").value;
		}
		document.getElementById("prot3").value = sessionStorage.processT34;
		
		//foodTable textboxes values
		if (sessionStorage.processT44) {
			sessionStorage.processT44 = sessionStorage.processT44;
		} else {
			sessionStorage.processT44 = document.getElementById("prot4").value;
		}
		document.getElementById("prot4").value = sessionStorage.processT44;
		
		//foodTable textboxes values
		if (sessionStorage.processT54) {
			sessionStorage.processT54 = sessionStorage.processT54;
		} else {
			sessionStorage.processT54 = document.getElementById("prot5").value;
		}
		document.getElementById("prot5").value = sessionStorage.processT54;
		
		//foodTable textboxes values
		if (sessionStorage.processT64) {
			sessionStorage.processT64 = sessionStorage.processT64;
		} else {
			sessionStorage.processT64 = document.getElementById("prot6").value;
		}
		document.getElementById("prot6").value = sessionStorage.processT64;
		
		//foodTable textboxes values
		if (sessionStorage.processT74) {
			sessionStorage.processT74 = sessionStorage.processT74;
		} else {
			sessionStorage.processT74 = document.getElementById("prot7").value;
		}
		document.getElementById("prot7").value = sessionStorage.processT74;
		
		//foodTable textboxes values
		if (sessionStorage.processT84) {
			sessionStorage.processT84 = sessionStorage.processT84;
		} else {
			sessionStorage.processT84 = document.getElementById("prot8").value;
		}
		document.getElementById("prot8").value = sessionStorage.processT84;
		
		//foodTable textboxes values
		if (sessionStorage.processT94) {
			sessionStorage.processT94 = sessionStorage.processT94;
		} else {
			sessionStorage.processT94 = document.getElementById("prot9").value;
		}
		document.getElementById("prot9").value = sessionStorage.processT94;
		
		//foodTable textboxes values
		if (sessionStorage.processT104) {
			sessionStorage.processT104 = sessionStorage.processT104;
		} else {
			sessionStorage.processT104 = document.getElementById("prot10").value;
		}
		document.getElementById("prot10").value = sessionStorage.processT104;
		
		//foodTable textboxes values
		if (sessionStorage.processTL2) {
			sessionStorage.processTL2 = sessionStorage.processTL2;
		} else {
			sessionStorage.processTL2 = document.getElementById("fatLim").value;
		}
		document.getElementById("fatLim").value = sessionStorage.processTL2;
		
		//foodTable textboxes values
		if (sessionStorage.processTS2) {
			sessionStorage.processTS2 = sessionStorage.processTS2;
		} else {
			sessionStorage.processTS2 = document.getElementById("fatSum").value;
		}
		document.getElementById("fatSum").value = sessionStorage.processTS2;
		
		//foodTable textboxes values
		if (sessionStorage.processTO2) {
			sessionStorage.processTO2 = sessionStorage.processTO2;
		} else {
			sessionStorage.processTO2 = document.getElementById("fatExc").value;
		}
		document.getElementById("fatExc").value = sessionStorage.processTO2;
		
		//foodTable textboxes values
		if (sessionStorage.processTL3) {
			sessionStorage.processTL3 = sessionStorage.processTL3;
		} else {
			sessionStorage.processTL3 = document.getElementById("carbLim").value;
		}
		document.getElementById("carbLim").value = sessionStorage.processTL3;
		
		//foodTable textboxes values
		if (sessionStorage.processTS3) {
			sessionStorage.processTS3 = sessionStorage.processTS3;
		} else {
			sessionStorage.processTS3 = document.getElementById("carbSum").value;
		}
		document.getElementById("carbSum").value = sessionStorage.processTS3;
		
		//foodTable textboxes values
		if (sessionStorage.processTO3) {
			sessionStorage.processTO3 = sessionStorage.processTO3;
		} else {
			sessionStorage.processTO3 = document.getElementById("carbExc").value;
		}
		document.getElementById("carbExc").value = sessionStorage.processTO3;
		
		//foodTable textboxes values
		if (sessionStorage.processTL4) {
			sessionStorage.processTL4 = sessionStorage.processTL4;
		} else {
			sessionStorage.processTL4 = document.getElementById("protLim").value;
		}
		document.getElementById("protLim").value = sessionStorage.processTL4;
		
		//foodTable textboxes values
		if (sessionStorage.processTS4) {
			sessionStorage.processTS4 = sessionStorage.processTS4;
		} else {
			sessionStorage.processTS4 = document.getElementById("protSum").value;
		}
		document.getElementById("protSum").value = sessionStorage.processTS4;
		
		//foodTable textboxes values
		if (sessionStorage.processTO4) {
			sessionStorage.processTO4 = sessionStorage.processTO4;
		} else {
			sessionStorage.processTO4 = document.getElementById("protExc").value;
		}
		document.getElementById("protExc").value = sessionStorage.processTO4;
		
	  } 
	else {
		alert("Sorry, your browser does not support web storage...");
	}
}
