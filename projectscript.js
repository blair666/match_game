/*  CS81
	
	
*/

var blnMoving=false;
var startLoc = 0;
var winHeight = window.innerHeight;	
var intervalVal="";
var currentStateNameNum="";
var second_answer="";
var third_snswer="";
var correctAnswer = 0;
var wrongAnswer = 0;

var states = ["AFGHAAFGHANISTAN",
"ALBANIA",
"ALGERIA",
"ANDORRA",
"ANGOLA",
"ANTIGUA & BARBUDA",
"ARGENTINA",
"ARMENIA",
"AUSTRALIA",
"AUSTRIA",
"AZERBAIJAN",
"BAHAMAS, THE",
"BAHRAIN",
"BANGLADESH",
"BARBADOS",
"BELARUS",
"BELGIUM",
"BELIZE",
"BENIN",
"BHUTAN",
"BOLIVIA",
"BOSNIA & HERZEGOVINA",
"BOTSWANA",
"BRAZIL",
"BRUNEI",
"BULGARIA",
"BURKINA FASO",
"BURUNDI",
"CABO VERDE",
"CAMBODIA",
"CAMEROON",
"CANADA",
"CENTRAL AFRICAN REPUBLIC",
"CHAD",
"CHILE",
"CHINA",
"COLOMBIA",
"COMOROS",
"CONGO, DEMOCRATIC REPUBLIC OF THE",
"COSTA RICA",
"CÔTE D'IVOIRE",
"CROATIA",
"CUBA",
"CYPRUS",
"CZECH REPUBLIC",
"DENMARK",
"DJIBOUTI",
"DOMINICA",
"DOMINICAN REPUBLIC",
"ECUADOR",
"EGYPT",
"EL SALVADOR",
"EQUATORIAL GUINEA",
"ERITREA",
"ESTONIA",
"ETHIOPIA",
"FEDERATED STATES OF MICRONESIA",
"FIJI",
"FINLAND",
"FRANCE",
"GABON",
"GAMBIA, THE",
"GEORGIA",
"GERMANY",
"GHANA",
"GREECE",
"GRENADA",
"GUATEMALA",
"GUINEA",
"GUINEA-BISSAU",
"GUYANA",
"HAITI",
"HONDURAS",
"HUNGARY",
"ICELAND",
"INDIA",
"INDONESIA",
"IRAN",
"IRAQ",
"IRELAND",
"ISRAEL",
"ITALY",
"JAMAICA",
"JAPAN",
"JORDAN",
"KAZAKHSTAN",
"KENYA",
"KIRIBATI",
"KOSOVO",
"KUWAIT",
"KYRGYZSTAN",
"LAOS",
"LATVIA",
"LEBANON",
"LESOTHO",
"LIBERIA",
"LIBYA",
"LIECHTENSTEIN",
"LITHUANIA",
"LUXEMBOURG",
"MACEDONIA",
"MADAGASCAR",
"MALAWI",
"MALAYSIA",
"MALDIVES",
"MALI",
"MALTA",
"MARSHALL ISLANDS",
"MAURITANIA",
"MAURITIUS",
"MEXICO",
"MOLDOVA",
"MONACO",
"MONGOLIA",
"MONTENEGRO",
"MOROCCO",
"MOZAMBIQUE",
"MYANMAR",
"NAMIBIA",
"NAURU",
"NEPAL",
"NETHERLANDS",
"NEW ZEALAND",
"NICARAGUA",
"NIGER",
"NIGERIA",
"NORTH KOREA",
"NORWAY",
"OMAN",
"PAKISTAN",
"PALAU",
"PALESTINE",
"PANAMA",
"PAPUA NEW GUINEA",
"PARAGUAY",
"PERU",
"PHILIPPINES",
"POLAND",
"PORTUGAL",
"QATAR",
"REPUBLIC OF THE CONGO",
"ROMANIA",
"RUSSIA",
"RWANDA",
"SAINT KITTS & NEVIS",
"SAINT LUCIA",
"SAINT VINCENT & THE GRENADINES",
"SAMOA",
"SAN MARINO",
"SÃO TOMÉ & PRÍNCIPE",
"SAUDI ARABIA",
"SENEGAL",
"SERBIA",
"SEYCHELLES",
"SIERRA LEONE",
"SINGAPORE",
"SLOVAKIA",
"SLOVENIA",
"SOLOMON ISLANDS",
"SOMALIA",
"SOUTH AFRICA",
"SOUTH KOREA",
"SOUTH SUDAN",
"SPAIN",
"SRI LANKA",
"SUDAN",
"SURINAME",
"SWAZILAND",
"SWEDEN",
"SWITZERLAND",
"SYRIA",
"TAJIKISTAN",
"TANZANIA",
"THAILAND",
"TIMOR-LESTE",
"TOGO",
"TONGA",
"TRINIDAD & TOBAGO",
"TUNISIA",
"TURKEY",
"TURKMENISTAN",
"TUVALU",
"UGANDA",
"UKRAINE",
"UNITED ARAB EMIRATES",
"UNITED KINGDOM",
"UNITED STATES",
"URUGUAY",
"UZBEKISTAN",
"VANUATU",
"VATICAN CITY",
"VENEZUELA",
"VIETNAM",
"YEMEN",
"ZAMBIA",
"ZIMBABWE"];


var capitals = ["KABUL",
"TIRANA",
"ALGIERS",
"ANDORRA LA VELLA",
"LUANDA",
"SAINT JOHN'S",
"BUENOS AIRES",
"YEREVAN",
"CANBERRA",
"VIENNA",
"BAKU",
"NASSAU",
"MANAMA",
"DHAKA",
"BRIDGETOWN",
"MINSK",
"BRUSSELS",
"BELMOPAN",
"PORTO-NOVO",
"THIMPHU",
"SUCRE",
"SARAJEVO",
"GABORONE",
"BRASILIA",
"BANDAR SERI BEGAWAN",
"SOFIA",
"OUAGADOUGOU",
"BUJUMBURA",
"PRAIA",
"PHNOM PENH",
"YAOUNDE",
"OTTAWA",
"BANGUI",
"N'DJAMENA",
"SANTIAGO",
"BEIJING",
"BOGOTÁ",
"MORONI",
"KINSHASA",
"SAN JOSE",
"YAMOUSSOUKRO",
"ZAGREB",
"HAVANA",
"NICOSIA",
"PRAGUE",
"COPENHAGEN",
"DJIBOUTI (CITY)",
"ROSEAU",
"SANTO DOMINGO",
"QUITO",
"CAIRO",
"SAN SALVADOR",
"MALABO",
"ASMARA",
"TALLINN",
"ADDIS ABABA",
"PALIKIR",
"SUVA",
"HELSINKI",
"PARIS",
"LIBREVILLE",
"BANJUL",
"TBILISI",
"BERLIN",
"ACCRA",
"ATHENS",
"SAINT GEORGE'S",
"GUATEMALA CITY",
"CONAKRY",
"BISSAU",
"GEORGETOWN",
"PORT-AU-PRINCE",
"TEGUCIGALPA",
"BUDAPEST",
"REYKJAVIK",
"NEW DELHI",
"JAKARTA",
"TEHRAN",
"BAGHDAD",
"DUBLIN",
"JERUSALEM, TEL AVIV",
"ROME",
"KINGSTON",
"TOKYO",
"AMMAN",
"ASTANA",
"NAIROBI",
"SOUTH TARAWA",
"PRISTINA",
"KUWAIT CITY",
"BISHKEK",
"VIENTIANE",
"RIGA",
"BEIRUT",
"MASERU",
"MONROVIA",
"TRIPOLI",
"VADUZ",
"VILNIUS",
"LUXEMBOURG",
"SKOPJE",
"ANTANANARIVO",
"LILONGWE",
"KUALA LUMPUR",
"MALE",
"BAMAKO",
"VALLETTA",
"MAJURO",
"NOUAKCHOTT",
"PORT LOUIS",
"MEXICO CITY",
"CHISINAU",
"MONACO",
"ULAANBAATAR",
"PODGORICA",
"RABAT",
"MAPUTO",
"NAY PYI TAW",
"WINDHOEK",
"YAREN DISTRICT",
"KATHMANDU",
"AMSTERDAM",
"WELLINGTON",
"MANAGUA",
"NIAMEY",
"ABUJA",
"PYONGYANG",
"OSLO",
"MUSCAT",
"ISLAMABAD",
"NGERULMUD",
"JERUSALEM, RAMALLAH",
"PANAMA CITY",
"PORT MORESBY",
"ASUNCIÓN",
"LIMA",
"MANILA",
"WARSAW",
"LISBON",
"DOHA",
"BRAZZAVILLE",
"BUCHAREST",
"MOSCOW",
"KIGALI",
"BASSETERRE",
"CASTRIES",
"KINGSTOWN",
"APIA",
"SAN MARINO",
"SÃO TOMÉ",
"RIYADH",
"DAKAR",
"BELGRADE",
"VICTORIA",
"FREETOWN",
"SINGAPORE",
"BRATISLAVA",
"LJUBLJANA",
"HONIARA",
"MOGADISHU",
"BLOEMFONTEIN, CAPE TOWN, PRETORIA",
"SEOUL",
"JUBA",
"MADRID",
"COLOMBO, SRI JAYAWARDENEPURA KOTTE",
"KHARTOUM",
"PARAMARIBO",
"MBABANE",
"STOCKHOLM",
"BERN",
"DAMASCUS",
"DUSHANBE",
"DODOMA",
"BANGKOK",
"DILI",
"LOMÉ",
"NUKUʻALOFA",
"PORT OF SPAIN",
"TUNIS",
"ANKARA",
"ASHGABAT",
"FUNAFUTI",
"KAMPALA",
"KIEV",
"ABU DHABI",
"LONDON",
"WASHINGTON, D.C.",
"MONTEVIDEO",
"TASHKENT",
"PORT VILA",
"VATICAN CITY",
"CARACAS",
"HANOI",
"SANA'A",
"LUSAKA",
"HARARE"];

function init(){
	//To set initial values of the image name and position.
   //imgObj = document.getElementById('imgid');
   imgObj1 = document.getElementById('divImgID1');
   imgObj2 = document.getElementById('divImgID2');
   imgObj3 = document.getElementById('divImgID3');
   imgObj1.style.position= 'absolute'; 
   imgObj1.style.left = '400px';
   imgObj1.style.top = '0px';
   imgObj2.style.position= 'absolute'; 
   imgObj2.style.left = '650px';
   imgObj2.style.top = '0px';
   imgObj3.style.position= 'absolute'; 
   imgObj3.style.left = '900px';
   imgObj3.style.top = '0px';
   } 

var btnClicked = function(node) {

	 //checkAnswer(elem);

	var valButton = document.getElementById("btnStartStop").value;
		
	if (valButton ==="Start The Game") {
		 genAnswers()
		 document.getElementById("btnStartStop").value = "Pause The Game";
		 blnMoving=true;
		 intervalVal = setInterval(function(){ moveImgFunc() }, 30); // Calling the moveImgFunc
	
	}else if(valButton ==="Pause The Game") {
		 document.getElementById("btnStartStop").value= "Start The Game";
		 clearInterval(intervalVal); // stopping the movement
		 //blnMoving=false;	
		 //document.getElementById("moving").innerHTML ="Moving: "+blnMoving +"<br />" + "Position: "+ topPos;
	}
}


var btnClickedAnswer = function(node) {
	
	 var elem = node.id;
	//alert(blnMoving);
	
	if (blnMoving){
		checkAnswer(elem);
    }
	 
}


var stopDivImg = function(){
		
	}

var genAnswers = function() {
	//This function generate random question and answers from the database (two arrays for now)
	currentStateNameNum=randomGen(49); //get a random number
	var currentStateNameCapital=capitals[currentStateNameNum] // Get the right answer 
	second_answer=randomGen(49); // Get second answer for the multiple choice
	while (second_answer===currentStateNameNum) {
		// Making sure it is unique
		second_answer=randomGen(49);
	}
	third_snswer=randomGen(49); // Get third answer for the multiple choice
	while (third_snswer===currentStateNameNum) {
		// Making sure it is unique
		third_snswer=randomGen(49);
	}
	// Write the question
	document.getElementById("question").innerHTML ="What is the capital of "+ "<br> "+ states[currentStateNameNum]+"?";
	
	var rnum=randomGen(3); //For placement on the screen for multiple choice
	
	if (rnum===1){  // to randomize placement of correct answer.
	 
	 document.getElementById("bird1").innerHTML =capitals[currentStateNameNum];
	 document.getElementById("bird2").innerHTML =capitals[second_answer];
	 document.getElementById("bird3").innerHTML =capitals[third_snswer];
	} else 	if (rnum===2) {
	 document.getElementById("bird2").innerHTML =capitals[currentStateNameNum];
	 document.getElementById("bird3").innerHTML =capitals[second_answer];
	 document.getElementById("bird1").innerHTML =capitals[third_snswer];
	} else{
	 document.getElementById("bird3").innerHTML =capitals[currentStateNameNum];
	 document.getElementById("bird1").innerHTML =capitals[second_answer];
	 document.getElementById("bird2").innerHTML =capitals[third_snswer];
	}
}

	
function moveImgFunc(){
	// This function moves the image acroos the window (left to right) and will start over _
	//when it reaches the far right side
	
	topPos = parseInt(imgObj1.style.top, 10);
    //document.getElementById("moving").innerHTML ="Moving: "+blnMoving+"<br />" + "Position: "+ topPos;
	if (winHeight >= topPos) {
        imgObj1.style.top = (topPos + 1) + 'px';
		imgObj2.style.top = (topPos + 1) + 'px';
		imgObj3.style.top = (topPos + 1) + 'px';
       } else {
		wrongAnswer =+1;
		genAnswers();
		
        topPos=-20;
		 imgObj1.style.top = (topPos + 1) + 'px';
		 imgObj2.style.top = (topPos + 1) + 'px';
		 imgObj3.style.top = (topPos + 1) + 'px';
    }
    
}
var randomGen = function(maxnum){
	return (Math.floor((Math.random() * maxnum) + 1));
}
var checkAnswer =function(elem) {
	
	
	var buttonAnswer=""
	if (elem==="divImgID1"){
		buttonAnswer=(document.getElementById("bird1").innerHTML);
	}else if (elem==="divImgID2"){
		
		buttonAnswer=(document.getElementById("bird2").innerHTML);
	}else if (elem==="divImgID3") {
		buttonAnswer=(document.getElementById("bird3").innerHTML);
		
	}
		
		 if (buttonAnswer===capitals[currentStateNameNum]){
			 //alert("buttonAnswer="+buttonAnswer+"   "+"capitals[currentStateNameNum]"+capitals[currentStateNameNum]);
			 correctAnswer +=1;
			 (document.getElementById("correctans").innerHTML)= "Correct answers: "+correctAnswer;
			 topPos=-25;
			 imgObj1.style.top = (topPos + 1) + 'px';
			 
			 genAnswers(); 	
		 }else if ((buttonAnswer!=capitals[currentStateNameNum])){
			 //alert("buttonAnswer="+buttonAnswer+"   "+"capitals[currentStateNameNum]"+capitals[currentStateNameNum]);
			 wrongAnswer +=1;
			 (document.getElementById("incorrectans").innerHTML)= "Wrong answers: "+wrongAnswer;
		 }
		 
		
		
}

window.onload = function() {init();};