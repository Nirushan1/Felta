
function gofunction() {
	
	//Getting data from html
	var age = document.getElementsByName("age")[0].value;
	var heightCm = document.getElementsByName("height")[0].value;
	var weight = document.getElementsByName("weight")[0].value;
	var height = heightCm/100;
	
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
	var bmi_notround = (weight)/(height*height);
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

	var difFat = Math.round((totFat-document.getElementById("fatLim").value)*100)/100;
	var difCarb = Math.round((totCarb-document.getElementById("carbLim").value)*100)/100;
	var difProt = Math.round((totProt-document.getElementById("protLim").value)*100)/100;
	
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


//Local storage dealings

function resetFn() {
	document.getElementsByName("age")[0].value = "";
	document.getElementsByName("height")[0].value = "";
	document.getElementsByName("weight")[0].value = "";
	document.getElementById("food1").value = "";
	document.getElementById("food2").value = "";
	document.getElementById("food3").value = "";
	document.getElementById("food4").value = "";
	document.getElementById("food5").value = "";
	document.getElementById("food6").value = "";
	document.getElementById("food7").value = "";
	document.getElementById("food8").value = "";
	document.getElementById("food9").value = "";
	document.getElementById("food10").value = "";
	document.getElementById("fat1").value = "";
	document.getElementById("fat2").value = "";
	document.getElementById("fat3").value = "";
	document.getElementById("fat4").value = "";
	document.getElementById("fat5").value = "";
	document.getElementById("fat6").value = "";
	document.getElementById("fat7").value = "";
	document.getElementById("fat8").value = "";
	document.getElementById("fat9").value = "";
	document.getElementById("fat10").value = "";
	document.getElementById("carb1").value = "";
	document.getElementById("carb2").value = "";
	document.getElementById("carb3").value = "";
	document.getElementById("carb4").value = "";
	document.getElementById("carb5").value = "";
	document.getElementById("carb6").value = "";
	document.getElementById("carb7").value = "";
	document.getElementById("carb8").value = "";
	document.getElementById("carb9").value = "";
	document.getElementById("carb10").value = "";
	document.getElementById("prot1").value = "";
	document.getElementById("prot2").value = "";
	document.getElementById("prot3").value = "";
	document.getElementById("prot4").value = "";
	document.getElementById("prot5").value = "";
	document.getElementById("prot6").value = "";
	document.getElementById("prot7").value = "";
	document.getElementById("prot8").value = "";
	document.getElementById("prot9").value = "";
	document.getElementById("prot10").value = "";
	document.getElementById("fatLim").value = "0";
	document.getElementById("carbLim").value = "0";
	document.getElementById("protLim").value = "0";
	document.getElementById("fatSum").value = "";
	document.getElementById("carbSum").value = "";
	document.getElementById("protSum").value = "";
	document.getElementById("fatExc").value = "";
	document.getElementById("carbExc").value = "";
	document.getElementById("protExc").value = "";
	document.getElementById("waterRec").value = "2";
	document.getElementById("waterGap").value = "";
	document.getElementById("waterJug").innerHTML = "0";
	document.getElementById("waterDaily").style.display = "inline";
	document.getElementById("waterDailyDesc").style.color = "red";
	location.reload();
}


var proc1,proc2,proc3,proc4,proc5,proc6,proc7,proc8,proc9,proc10,proc11,proc12,proc13,proc14,proc15,proc16,proc17,proc18,proc19,proc20,proc21,proc22,proc23,proc24,proc25,proc26,proc27,proc28,proc29,proc30,proc31,proc32,proc33,proc34,proc35,proc36,proc37,proc38,proc39,proc40,proc41,proc42,proc43,proc44,proc45,proc46,proc47,proc48,proc49,proc50,proc51,proc52,proc53,proc54,proc55,proc56,proc57;

window.onbeforeunload = function(event) {
	
	//proc1 = document.getElementById('waterGap').value;
	proc1 = document.getElementsByName("age")[0].value;
	proc2 = document.getElementsByName("height")[0].value;
	proc3 = document.getElementsByName("weight")[0].value;
	proc4 = document.getElementById("food1").value;
	proc5 = document.getElementById("food2").value;
	proc6 = document.getElementById("food3").value;
	proc7 = document.getElementById("food4").value;
	proc8 = document.getElementById("food5").value;
	proc9 = document.getElementById("food6").value;
	proc10 = document.getElementById("food7").value;
	proc11 = document.getElementById("food8").value;
	proc12 = document.getElementById("food9").value;
	proc13 = document.getElementById("food10").value;
	proc14 = document.getElementById("fat1").value;
	proc15 = document.getElementById("fat2").value;
	proc16 = document.getElementById("fat3").value;
	proc17 = document.getElementById("fat4").value;
	proc18 = document.getElementById("fat5").value;
	proc19 = document.getElementById("fat6").value;
	proc20 = document.getElementById("fat7").value;
	proc21 = document.getElementById("fat8").value;
	proc22 = document.getElementById("fat9").value;
	proc23 = document.getElementById("fat10").value;
	proc24 = document.getElementById("carb1").value;
	proc25 = document.getElementById("carb2").value;
	proc26 = document.getElementById("carb3").value;
	proc27 = document.getElementById("carb4").value;
	proc28 = document.getElementById("carb5").value;
	proc29 = document.getElementById("carb6").value;
	proc30 = document.getElementById("carb7").value;
	proc31 = document.getElementById("carb8").value;
	proc32 = document.getElementById("carb9").value;
	proc33 = document.getElementById("carb10").value;
	proc34 = document.getElementById("prot1").value;
	proc35 = document.getElementById("prot2").value;
	proc36 = document.getElementById("prot3").value;
	proc37 = document.getElementById("prot4").value;
	proc38 = document.getElementById("prot5").value;
	proc39 = document.getElementById("prot6").value;
	proc40 = document.getElementById("prot7").value;
	proc41 = document.getElementById("prot8").value;
	proc42 = document.getElementById("prot9").value;
	proc43 = document.getElementById("prot10").value;
	proc44 = document.getElementById("fatLim").value;
	proc45 = document.getElementById("carbLim").value;
	proc46 = document.getElementById("protLim").value;
	proc47 = document.getElementById("fatSum").value;
	proc48 = document.getElementById("carbSum").value;
	proc49 = document.getElementById("protSum").value;
	proc50 = document.getElementById("fatExc").value;
	proc51 = document.getElementById("carbExc").value;
	proc52 = document.getElementById("protExc").value;
	proc53 = document.getElementById("waterRec").value;
	proc54 = document.getElementById("waterGap").value;
	proc55 = document.getElementById("waterJug").innerHTML;
	proc56 = document.getElementById("waterDaily").style.display;
	proc57 = document.getElementById("waterDailyDesc").style.color;
	totWater = document.getElementById("waterJug").innerHTML;
	
	
	//localStorage.setItem("water_gap", proc1);
	localStorage.setItem("age", proc1);
	localStorage.setItem("height", proc2);
	localStorage.setItem("weight", proc3);
	localStorage.setItem("food1", proc4);
	localStorage.setItem("food2", proc5);
	localStorage.setItem("food3", proc6);
	localStorage.setItem("food4", proc7);
	localStorage.setItem("food5", proc8);
	localStorage.setItem("food6", proc9);
	localStorage.setItem("food7", proc10);
	localStorage.setItem("food8", proc11);
	localStorage.setItem("food9", proc12);
	localStorage.setItem("food10", proc13);
	localStorage.setItem("fat1", proc14);
	localStorage.setItem("fat2", proc15);
	localStorage.setItem("fat3", proc16);
	localStorage.setItem("fat4", proc17);
	localStorage.setItem("fat5", proc18);
	localStorage.setItem("fat6", proc19);
	localStorage.setItem("fat7", proc20);
	localStorage.setItem("fat8", proc21);
	localStorage.setItem("fat9", proc22);
	localStorage.setItem("fat10", proc23);
	localStorage.setItem("carb1", proc24);
	localStorage.setItem("carb2", proc25);
	localStorage.setItem("carb3", proc26);
	localStorage.setItem("carb4", proc27);
	localStorage.setItem("carb5", proc28);
	localStorage.setItem("carb6", proc29);
	localStorage.setItem("carb7", proc30);
	localStorage.setItem("carb8", proc31);
	localStorage.setItem("carb9", proc32);
	localStorage.setItem("carb10", proc33);
	localStorage.setItem("prot1", proc34);
	localStorage.setItem("prot2", proc35);
	localStorage.setItem("prot3", proc36);
	localStorage.setItem("prot4", proc37);
	localStorage.setItem("prot5", proc38);
	localStorage.setItem("prot6", proc39);
	localStorage.setItem("prot7", proc40);
	localStorage.setItem("prot8", proc41);
	localStorage.setItem("prot9", proc42);
	localStorage.setItem("prot10", proc43);
	localStorage.setItem("fatLim", proc44);
	localStorage.setItem("carbLim", proc45);
	localStorage.setItem("protLim", proc46);
	localStorage.setItem("fatSum", proc47);
	localStorage.setItem("carbSum", proc48);
	localStorage.setItem("protSum", proc49);
	localStorage.setItem("fatExc", proc50);
	localStorage.setItem("carbExc", proc51);
	localStorage.setItem("protExc", proc52);
	localStorage.setItem("waterRec", proc53);
	localStorage.setItem("waterGap", proc54);
	localStorage.setItem("waterJug", proc55);
	localStorage.setItem("waterDaily", proc56);
	localStorage.setItem("waterDailyDesc", proc57);
	localStorage.setItem("waterJug2", totWater);
	
	
};

function restoreFn() {
	
	//proc1 = localStorage.getItem('water_gap');
	proc1 = localStorage.getItem("age");
	proc2 = localStorage.getItem("height");
	proc3 = localStorage.getItem("weight");
	proc4 = localStorage.getItem("food1");
	proc5 = localStorage.getItem("food2");
	proc6 = localStorage.getItem("food3");
	proc7 = localStorage.getItem("food4");
	proc8 = localStorage.getItem("food5");
	proc9 = localStorage.getItem("food6");
	proc10 = localStorage.getItem("food7");
	proc11 = localStorage.getItem("food8");
	proc12 = localStorage.getItem("food9");
	proc13 = localStorage.getItem("food10");
	proc14 = localStorage.getItem("fat1");
	proc15 = localStorage.getItem("fat2");
	proc16 = localStorage.getItem("fat3");
	proc17 = localStorage.getItem("fat4");
	proc18 = localStorage.getItem("fat5");
	proc19 = localStorage.getItem("fat6");
	proc20 = localStorage.getItem("fat7");
	proc21 = localStorage.getItem("fat8");
	proc22 = localStorage.getItem("fat9");
	proc23 = localStorage.getItem("fat10");
	proc24 = localStorage.getItem("carb1");
	proc25 = localStorage.getItem("carb2");
	proc26 = localStorage.getItem("carb3");
	proc27 = localStorage.getItem("carb4");
	proc28 = localStorage.getItem("carb5");
	proc29 = localStorage.getItem("carb6");
	proc30 = localStorage.getItem("carb7");
	proc31 = localStorage.getItem("carb8");
	proc32 = localStorage.getItem("carb9");
	proc33 = localStorage.getItem("carb10");
	proc34 = localStorage.getItem("prot1");
	proc35 = localStorage.getItem("prot2");
	proc36 = localStorage.getItem("prot3");
	proc37 = localStorage.getItem("prot4");
	proc38 = localStorage.getItem("prot5");
	proc39 = localStorage.getItem("prot6");
	proc40 = localStorage.getItem("prot7");
	proc41 = localStorage.getItem("prot8");
	proc42 = localStorage.getItem("prot9");
	proc43 = localStorage.getItem("prot10");
	proc44 = localStorage.getItem("fatLim");
	proc45 = localStorage.getItem("carbLim");
	proc46 = localStorage.getItem("protLim");
	proc47 = localStorage.getItem("fatSum");
	proc48 = localStorage.getItem("carbSum");
	proc49 = localStorage.getItem("protSum");
	proc50 = localStorage.getItem("fatExc");
	proc51 = localStorage.getItem("carbExc");
	proc52 = localStorage.getItem("protExc");
	proc53 = localStorage.getItem("waterRec");
	proc54 = localStorage.getItem("waterGap");
	proc55 = localStorage.getItem("waterJug");
	proc56 = localStorage.getItem("waterDaily");
	proc57 = localStorage.getItem("waterDailyDesc");
	totWater = Number(localStorage.getItem("waterJug2"));
	
	
	
	//document.getElementById('waterGap').value = proc1;
	document.getElementsByName("age")[0].value = proc1;
	document.getElementsByName("height")[0].value = proc2;
	document.getElementsByName("weight")[0].value = proc3;
	document.getElementById("food1").value = proc4;
	document.getElementById("food2").value = proc5;
	document.getElementById("food3").value = proc6;
	document.getElementById("food4").value = proc7;
	document.getElementById("food5").value = proc8;
	document.getElementById("food6").value = proc9;
	document.getElementById("food7").value = proc10;
	document.getElementById("food8").value = proc11;
	document.getElementById("food9").value = proc12;
	document.getElementById("food10").value = proc13;
	document.getElementById("fat1").value = proc14;
	document.getElementById("fat2").value = proc15;
	document.getElementById("fat3").value = proc16;
	document.getElementById("fat4").value = proc17;
	document.getElementById("fat5").value = proc18;
	document.getElementById("fat6").value = proc19;
	document.getElementById("fat7").value = proc20;
	document.getElementById("fat8").value = proc21;
	document.getElementById("fat9").value = proc22;
	document.getElementById("fat10").value = proc23;
	document.getElementById("carb1").value = proc24;
	document.getElementById("carb2").value = proc25;
	document.getElementById("carb3").value = proc26;
	document.getElementById("carb4").value = proc27;
	document.getElementById("carb5").value = proc28;
	document.getElementById("carb6").value = proc29;
	document.getElementById("carb7").value = proc30;
	document.getElementById("carb8").value = proc31;
	document.getElementById("carb9").value = proc32;
	document.getElementById("carb10").value = proc33;
	document.getElementById("prot1").value = proc34;
	document.getElementById("prot2").value = proc35;
	document.getElementById("prot3").value = proc36;
	document.getElementById("prot4").value = proc37;
	document.getElementById("prot5").value = proc38;
	document.getElementById("prot6").value = proc39;
	document.getElementById("prot7").value = proc40;
	document.getElementById("prot8").value = proc41;
	document.getElementById("prot9").value = proc42;
	document.getElementById("prot10").value = proc43;
	document.getElementById("fatLim").value = proc44;
	document.getElementById("carbLim").value = proc45;
	document.getElementById("protLim").value = proc46;
	document.getElementById("fatSum").value = proc47;
	document.getElementById("carbSum").value = proc48;
	document.getElementById("protSum").value = proc49;
	document.getElementById("fatExc").value = proc50;
	document.getElementById("carbExc").value = proc51;
	document.getElementById("protExc").value = proc52;
	document.getElementById("waterRec").value = proc53;
	document.getElementById("waterGap").value = proc54;
	document.getElementById("waterJug").innerHTML = proc55;
	document.getElementById("waterDaily").style.display = proc56;
	document.getElementById("waterDailyDesc").style.color = proc57;
	
	
}
	
	
