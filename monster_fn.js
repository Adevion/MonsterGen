/**
 * Returns a number of option boxes for use within a select
 */
function optionboxes(limit, start) {
	for (var i = start; i <= limit; i++) {
		if (i == 0) {
			document.write('<option value="' + i + '" selected>' + i + '</option>');
		} else {
			document.write('<option value="' + i + '">' + i + '</option>');
		}
	}
};

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * return true  false if x is between min and max
 */
function between(x, min, max) {
	return x >= min && x <= max;
};

/**
 * capitalize the first character of a string.
 */
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * limit the string to 2 words.
 */
function getWords(str) {
    return str.split(/\s+/).slice(0,2).join(" ");
};

/**
 * Put logical CR values into orgininal CR values on display
 */
function detectCR(intCR){
	switch (intCR) {
		case -4 : return "1/8"; break;
		case -3 : return "1/6"; break;
		case -2 : return "1/4"; break;
		case -1 : return "1/3"; break;
		case 0 : return "1/2"; break;
		default : return intCR;
	}
};

/**
 * disable pull down until checkbox is checked
 */
function toggleDisabled(_checked, formElement) {
	document.getElementById(formElement).disabled = _checked ? false : true;
};

/**
 * filter unique value from array
 */
function onlyUnique(value, index, self) { 
	return self.indexOf(value) === index;
};

/**
 * get all available terrain from sources
 */
function terrainboxes() {
	var grantBestiary = [];
	var temp = [];
	var grantTerrain = [];
	var anyTerrain = [];

	grantBestiary = grantBestiary.concat(bestiary1);
	grantBestiary = grantBestiary.concat(bestiary2);
	grantBestiary = grantBestiary.concat(bestiary3);
	grantBestiary = grantBestiary.concat(bestiary4);
	grantBestiary = grantBestiary.concat(bestiary5);
	grantBestiary = grantBestiary.concat(bestiary6);
	grantBestiary = grantBestiary.concat(bonus);
	grantBestiary = grantBestiary.concat(dmgnpc);
	grantBestiary = grantBestiary.concat(botd);
	grantBestiary = grantBestiary.concat(planar);
	grantBestiary = grantBestiary.concat(horror);
	grantBestiary = grantBestiary.concat(gods);
	grantBestiary = grantBestiary.concat(trap);
	grantBestiary = grantBestiary.concat(hazard);
	grantBestiary = grantBestiary.concat(haunt);
	grantBestiary = grantBestiary.concat(monstercodex);
	grantBestiary = grantBestiary.concat(npccodex);
	grantBestiary = grantBestiary.concat(villaincodex);
		
	for (var i = 0; i < grantBestiary.length; i++) {
		anyTerrain = grantBestiary[i][4].toLowerCase().split(',');
		for (var j = 0; j < anyTerrain.length; j++) {
			temp.push(anyTerrain[j].trim());
		};
	};
	grantTerrain = temp.filter(onlyUnique).sort();
	for (var l = 0; l < grantTerrain.length; l++) {
		if (grantTerrain[l] == ' ' || grantTerrain[l] == '') {
			continue;
		};
		document.write('<option value="' + grantTerrain[l] + '">' + capitalizeFirstLetter(grantTerrain[l]) + '</option>');
	};
	grantBestiary = [];
};

/**
 * get all available monster types from sources
 */
function typeboxes() {
	var grandTypes = ['aberration','animal','construct','dragon','fey','hazard','haunt','humanoid','magical beast','monstrous humanoid','ooze','outsider','plant','trap','vermin','undead'];
	var temp = [];
	var grantType = [];
	
	for (var i = 0; i < grandTypes.length; i++) {
		temp.push(grandTypes[i]);
	};
	grantType = temp.filter(onlyUnique).sort();
	for (var i = 0; i < grantType.length; i++) {
		document.write('<option value="' + grantType[i] + '">' + capitalizeFirstLetter(grantType[i]) + '</option>');
	};
	grandTypes = [];
};

/**
 * get all available monster from selected sources
 */
function getGrantSelection(grantBestiary,typeCheck,checkFor,numMonster) {
	var grantSelection = [];
	var useVar = document.getElementById("useVar").checked;
	var variation = parseInt(document.getElementById("var_mon").value);

	switch (typeCheck) {
	case 2:
		var checkForMin = parseInt(checkFor)-parseInt(variation);
		var checkForMax = parseInt(checkFor)+parseInt(variation);
	 
		for (var i = 0; i < grantBestiary.length; i++) {
			if (useVar) {
				//if (between(grantBestiary[i][typeCheck].toLowerCase(),detectCR(checkForMin),detectCR(checkForMax))) {
				if (between(grantBestiary[i][typeCheck].toLowerCase(),checkForMin,checkForMax)) {
					grantSelection.push(grantBestiary[i]);
				};
			} else {
				if (grantBestiary[i][typeCheck].toLowerCase() == checkFor) {
					grantSelection.push(grantBestiary[i]);
				};
			};
		};
	break;
	case 3: 
		for (var i = 0; i < grantBestiary.length; i++) {
			if (grantBestiary[i][typeCheck].toLowerCase() == checkFor.toLowerCase()) {
				grantSelection.push(grantBestiary[i]);
			};
		};
	break;
	case 4: 
		for (var i = 0; i < grantBestiary.length; i++) {
			if (checkFor.toLowerCase() == "any") {
				grantSelection.push(grantBestiary[i]);
			} else if (grantBestiary[i][typeCheck].toLowerCase().indexOf(checkFor) != -1) {
				grantSelection.push(grantBestiary[i]);
			}
		}
	break;
	};
	if (grantSelection.length < numMonster) {
	document.getElementById('NumberError').innerHTML = "Current selection has a maxium of "+ grantSelection.length +" monsters, please change your selection.";
	return false;
	} else {
	document.getElementById('NumberError').innerHTML = "";	
	};
	return grantSelection;
};

/**
 * get one monster from selected list
 */
function getChosenOne(grantSelection,knownMonster,availableMonters) {
	/**
	 * there can only be one
	 */
	var chosenOne = "";
	if (grantSelection == false) {
		return false;
	};
	if (availableMonters == true) {
		return grantSelection.length;
	};
	chosenOne = grantSelection[0,Math.floor(Math.random() * grantSelection.length)];
	
	while (knownMonster.match(chosenOne[0]) != null) {
		chosenOne = grantSelection[0,Math.floor(Math.random() * grantSelection.length)];
	};
	return chosenOne;
};