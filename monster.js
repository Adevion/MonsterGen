/**
 * Returns a monster from the Bestiaries Arrays
 */
function get_monster(knownMonster, numMonster, preSwitch) {
	var cbBestiary1 = document.getElementById("b1_box").checked;
	var cbBestiary2 = document.getElementById("b2_box").checked;
	var cbBestiary3 = document.getElementById("b3_box").checked;
	var cbBestiary4 = document.getElementById("b4_box").checked;
	var cbBestiary5 = document.getElementById("b5_box").checked;
	var cbBestiary6 = document.getElementById("b6_box").checked;
	var cbBonus = document.getElementById("bonus").checked;
	var cbGameMasterGuide = document.getElementById("dmg_box").checked;
	var cbBotD = document.getElementById("botd_box").checked;
	var cbPlanar = document.getElementById("planar_box").checked;
	var cbHorror = document.getElementById("horror_box").checked;
	var cbTrap = document.getElementById("trap_box").checked;
	var cbHaunt = document.getElementById("haunt_box").checked;
	var cbHazard = document.getElementById("hazard_box").checked;
	var cbGods = document.getElementById("gods_box").checked;
	var cbMonster = document.getElementById("mon_codex_box").checked;
	var cbNPC = document.getElementById("npc_codex_box").checked;
	var cbVillain = document.getElementById("vil_codex_box").checked;
	
	var grantBestiary = [];

	if (cbBestiary1) { grantBestiary = grantBestiary.concat(bestiary1); }; 
	if (cbBestiary2) { grantBestiary = grantBestiary.concat(bestiary2); };
	if (cbBestiary3) { grantBestiary = grantBestiary.concat(bestiary3); };
	if (cbBestiary4) { grantBestiary = grantBestiary.concat(bestiary4); };
	if (cbBestiary5) { grantBestiary = grantBestiary.concat(bestiary5); };
	if (cbBestiary6) { grantBestiary = grantBestiary.concat(bestiary6); };
	if (cbBonus) { grantBestiary = grantBestiary.concat(bonus); };
	if (cbGameMasterGuide) { grantBestiary = grantBestiary.concat(dmgnpc); };
	if (cbNPC) { grantBestiary = grantBestiary.concat(npccodex); };
	if (cbBotD) { grantBestiary = grantBestiary.concat(botd); };
	if (cbPlanar) { grantBestiary = grantBestiary.concat(planar); };
	if (cbHorror) { grantBestiary = grantBestiary.concat(horror); };
	if (cbTrap) { grantBestiary = grantBestiary.concat(trap); };
	if (cbHaunt) { grantBestiary = grantBestiary.concat(haunt); };
	if (cbHazard) { grantBestiary = grantBestiary.concat(hazard); };
	if (cbGods) { grantBestiary = grantBestiary.concat(gods); };
	if (cbMonster) { grantBestiary = grantBestiary.concat(monstercodex); };
	if (cbVillain) { grantBestiary = grantBestiary.concat(villaincodex); };

	var useCR = document.getElementById("useCR").checked;
	var useType = document.getElementById("useType").checked;
	var useTerrain = document.getElementById("useTerrain").checked;
	var CR = parseInt(document.getElementById("cr_mon").value);
	var Type = document.getElementById("type_mon").value;
	var Terrain = document.getElementById("terrain_mon").value;
	
 	/**
	* Use CR as search attribute
	*/
	if (useCR && !useType && !useTerrain) {
		var selection = [];
		selection = getGrantSelection(grantBestiary,2,CR,numMonster);
		grantBestiary = [];
		return getChosenOne(selection,knownMonster,preSwitch);
	}
	/**
	* Use monster type as search attribute
	*/
	if (!useCR && useType && !useTerrain) {
		var selection = [];
		selection = getGrantSelection(grantBestiary,3,Type,numMonster);
		grantBestiary = [];
		return getChosenOne(selection,knownMonster,preSwitch);
	}
	/**
	* Use monster terrain as search attribute
	*/
	if (!useCR && !useType && useTerrain) {
		var selection = [];
		selection = getGrantSelection(grantBestiary,4,Terrain,numMonster);
		grantBestiary = [];
		return getChosenOne(selection,knownMonster,preSwitch);
	}
	/**
	* Use monster type and CR as search attribute
	*/
	if (useCR && useType && !useTerrain) {
		var selection = [];
		selection = getGrantSelection(grantBestiary,2,CR,numMonster);
		selection = getGrantSelection(selection,3,Type,numMonster);
		grantBestiary = [];
		return getChosenOne(selection,knownMonster,preSwitch);
	}
	/**
	* Use monster terrain and CR as search attribute
	*/
	if (useCR && !useType && useTerrain) {
		var selection = [];
		selection = getGrantSelection(grantBestiary,2,CR,numMonster);
		selection = getGrantSelection(selection,4,Terrain,numMonster);
		grantBestiary = [];
		return getChosenOne(selection,knownMonster,preSwitch);
	}
	/**
	* Use monster terrain and type as search attribute
	*/
	if (!useCR && useType && useTerrain) {
		var selection = [];
		selection = getGrantSelection(grantBestiary,3,Type,numMonster);
		selection = getGrantSelection(selection,4,Terrain,numMonster);
		grantBestiary = [];
		return getChosenOne(selection,knownMonster,preSwitch);
	}
	/**
	* Use monster type, terrain and CR as search attribute
	*/
	if (useCR && useType && useTerrain) {
		var selection = [];
		selection = getGrantSelection(grantBestiary,2,CR,numMonster);
		selection = getGrantSelection(selection,3,Type,numMonster);
		selection = getGrantSelection(selection,4,Terrain,numMonster);
		grantBestiary = [];
		return getChosenOne(selection,knownMonster,preSwitch);
	}    
	/**
	* Just give me random monsters
	*/
	if (!useCR || !useType || !UseTerrain) {
		var chosenOne = grantBestiary[0,Math.floor(Math.random() * grantBestiary.length)];
		
		while (knownMonster.match(chosenOne[0]) != null) {
			chosenOne = grantBestiary[0,Math.floor(Math.random() * grantBestiary.length)];
		};
		
		if (preSwitch == true) {
			return grantBestiary.length;
		};
		
		grantBestiary = [];
		return chosenOne;
	};
};

/**
 * Generate a encouter table with a limited set of monsters
 */
function enc_table() {
	var dicebag = [22,24];
	var rand = dicebag[Math.floor(Math.random() * dicebag.length)];
	var APL = parseInt(document.getElementById("cr_mon").value);
	var variation = parseInt(document.getElementById("var_mon").value);
	var useCR = document.getElementById("useCR").checked;
	var useVar = document.getElementById("useVar").checked;
	var numberOfMonsters = preCheck();
	var monsterList = "Known:";
	var outputTab = "";
	var dice = "";
	var subText = "";
	
	if (numberOfMonsters < 6) {
		return false;
	} else if (numberOfMonsters < 8) {
		dice = "(d6)";
		d100 = (function(a,b){while(a--)b[a]=a+1;return b})(6,[]);
		rand = 6;
	} else if (numberOfMonsters < 10) {
		dice = "(d8)";
		d100 = (function(a,b){while(a--)b[a]=a+1;return b})(8,[]);
		rand = 8;
	} else if (numberOfMonsters < 12) {
		dice = "(d10)";
		d100 = (function(a,b){while(a--)b[a]=a+1;return b})(10,[]);
		rand = 10;
	} else if (numberOfMonsters < 20) {
		dice = "(d12)";
		d100 = (function(a,b){while(a--)b[a]=a+1;return b})(12,[]);
		rand = 12;
	} else if (numberOfMonsters < 24) {
		dice = "(d20)";
		d100 = (function(a,b){while(a--)b[a]=a+1;return b})(20,[]);
		rand = 20;
	} else {
		switch (rand) {
			case 22:
				dice = "(d100)";
				var d100 = ["1-8","9-12","13-18","19-25","26-30","31-35","36-38","39-42","43-47","48-51","52-56","57-60","61-66","67-70","71-77","78-83","84-88","89-91","92-94","95-97","98-99","100"];
				break;
			case 24:
				dice = "(d100)";
				var d100 = ["1-6","7-12","13-20","21-24","25-26","27-32","33-34","35-36","37-44","45-48","49-54","55-56","57-60","61-64","65-68","69-70","71-76","77-82","83-86","87-90","91-92","93-94","95-96","97-100"];
				break;
			default:
				dice = "(d100)";
				var d100 = ["1-6","7-12","13-20","21-24","25-26","27-32","33-34","35-36","37-44","45-48","49-54","55-56","57-60","61-64","65-68","69-70","71-76","77-82","83-86","87-90","91-92","93-94","95-96","97-100"];
				rand = 24;
		}
	}; 

	outputTab += "<table summary=\"Encounter Table\" border=\"0\" cellpadding=\"5\" id=\"encounterTable\">";
	outputTab += "<caption><span id=\"dice\"></span> Encounter Table </caption>";
	outputTab += "<tr><th>d%</th><th>Result</th><th>Avg. CR</th><th>Source</th></tr>";
	for (var i = 0; i < rand; i++) {
		if ((!useCR && !useVar) || (!useCR && useVar)) {
			APL = Math.floor(Math.random() * Math.floor(20));
			variation = Math.floor(Math.random() * Math.floor(4));
		};
		if (useCR && !useVar) {
			variation = 0;
		};
		do {
			var subText = "";
			var monster = get_monster(monsterList, rand, false);
			
			if (monster[1]) {
				subText = "&nbsp;" + monster[1] + "";
			}
			
			var groupMakeUp = getGroupMakeUp();
			
			if (monster[6] == false) {
				var randGroupMakeUp = groupMakeUp[Math.floor(Math.random() * groupMakeUp.length)];
				switch (randGroupMakeUp) {
					case "1d4":
						var adjustedCR = +monster[2] + 2;
						break;
					case "1d6":
						var adjustedCR = +monster[2] + 3;
						break;
					case "1d8":
						var adjustedCR = +monster[2] + 4;
						break;
					default:
						var adjustedCR = +monster[2];
						break;
				}
			} else {
				randGroupMakeUp = '';
				var adjustedCR = +monster[2];
				subText += '<br/>&nbsp;&nbsp;&nbsp;<small>[Unique Monster]</small>';
			};
		} while (+adjustedCR > (APL + variation));
	
		outputTab += "<tr>";
		outputTab += "<td class=\"cellSmall\"> " + d100[i] + " &nbsp; </td>";
		outputTab += "<td class=\"cellLarge\"> " + randGroupMakeUp + " " + monster[0];
		if (subText) {
			outputTab += " <br/> <pre>&nbsp;&nbsp;" + capitalizeFirstLetter(subText) + "</pre> </td>";
		} else {
			outputTab += "&nbsp; </td>";
		};
		outputTab += "<td class=\"cellSmall\"> &nbsp; <b> CR " + detectCR(adjustedCR) + "</b> &nbsp; </td>";
		outputTab += "<td class=\"cellMedium\"> &nbsp; " + monster[5] + " </td>";
		outputTab += "</tr>"
		monsterList += monster[0] + " , ";
		subText = "";
	};
	outputTab += "</table>"

	document.getElementById('monster').innerHTML = "";
	document.getElementById('table').innerHTML = outputTab;
	document.getElementById('dice').innerHTML = dice;
	return false;
};

/**
 * Generate a number of Monsters specified by the user
 */
function generate() {
	var monsterList = "Known:";
	var outputMon = "";
	var useVar = document.getElementById("useVar").checked;
	var numberOfMonsters = document.getElementById("num_mon").value;
	var APL = parseInt(document.getElementById("cr_mon").value);
	var variation = parseInt(document.getElementById("var_mon").value);	
	var useCR = document.getElementById("useCR").checked;
	var useVar = document.getElementById("useVar").checked;
	
	outputMon += "<table summary=\"Monster Table\" border=\"0\" cellpadding=\"5\" id=\"encounterTable\">";
	outputMon += "<caption> Encounter(s) </caption>";
	outputMon += "<tr><th>Result</th><th>Avg. CR</th><th>Source</th></tr>";
	
	for (var i = 0; i < numberOfMonsters; i++) {
		if (!useCR && !useVar) {
			APL = Math.floor(Math.random() * Math.floor(20));
			variation = Math.floor(Math.random() * Math.floor(4));
		};
		if (useCR && !useVar) {
			variation = 0;
		};
		if (!useCR && useVar) {
			APL = Math.floor(Math.random() * Math.floor(20));
		};
		do {
			var subText = "";
			var monster = get_monster(monsterList, numberOfMonsters, false);
			
			if (monster == false) { 
				return false;
			};				
			if (monster[1]) {
				subText = "&nbsp;" + monster[1] + "";
			};
			
			var groupMakeUp = getGroupMakeUp();
			
			if (monster[6] == false) {
				var randGroupMakeUp = groupMakeUp[Math.floor(Math.random() * groupMakeUp.length)];
				switch (randGroupMakeUp) {
					case "1d4":
						var adjustedCR = +monster[2] + 2;
						break;
					case "1d6":
						var adjustedCR = +monster[2] + 3;
						break;
					case "1d8":
						var adjustedCR = +monster[2] + 4;
						break;
					default:
						var adjustedCR = +monster[2];
						break;
				}
			} else {
				randGroupMakeUp = '';
				var adjustedCR = +monster[2];
				subText += '<br/>&nbsp;&nbsp;&nbsp;<small>[Unique Monster]</small>';
			};
		} while (+adjustedCR > (APL + variation));

		outputMon += "<tr>";
		outputMon += "<td class=\"cellLarge\"> " + randGroupMakeUp + " " + monster[0];
		if (subText) {
			outputMon += " <br> <pre>&nbsp;&nbsp;" + capitalizeFirstLetter(subText) + "</pre> </td>";
		} else {
			outputMon += "&nbsp; </td>";
		}
		outputMon += "<td class=\"cellSmall\"> &nbsp; <b>" + detectCR(adjustedCR) + "</b> &nbsp; </td>";
		outputMon += "<td class=\"cellMedium\"> &nbsp; " + monster[5] + " </td>";
		outputMon += "</tr>"
		monsterList += monster[0] + " , ";
		subText = "";
	};
	outputMon += "</table>"
 
	document.getElementById('table').innerHTML = ""; 
	document.getElementById('monster').innerHTML = outputMon;
	return false;
};

/**
 * calculate the number of results
 */
function preCheck() {
	EnableSubmit();
	var arrayLength = get_monster(".",1,true);

	document.getElementById('preCheck').innerHTML = "Available Monsters: " + arrayLength;
	if (arrayLength < 25) {
		document.getElementById("num_mon").max = arrayLength;
	} else {
		document.getElementById("num_mon").max = 25;
	}
	return arrayLength;
};

/**
 * check all sources
 */
function checkAll() {
	document.getElementById("b1_box").click();
	document.getElementById("b2_box").click();
	document.getElementById("b3_box").click();
	document.getElementById("b4_box").click();
	document.getElementById("b5_box").click();
	document.getElementById("b6_box").click();
	document.getElementById("bonus").click();
	document.getElementById("botd_box").click();
	document.getElementById("planar_box").click();
	document.getElementById("horror_box").click();
	document.getElementById("innersea_box").click();
	document.getElementById("gods_box").click();
	checkNPC();
	checkTraps();
};

/**
 * check all npc sources
 */
function checkNPC() {
	document.getElementById("dmg_box").click();
	document.getElementById("mon_codex_box").click();
	document.getElementById("npc_codex_box").click();
	document.getElementById("vil_codex_box").click();
};

/**
 * check all traps
 */
function checkTraps() {
	document.getElementById("trap_box").click();
	document.getElementById("haunt_box").click();
	document.getElementById("hazard_box").click();
};

/**
 * get group variation table
 */
function getGroupMakeUp() {
	var useVar = document.getElementById("useVar").checked;
	var variation = parseInt(document.getElementById("var_mon").value);
	var numberOfMonsters = document.getElementById("num_mon").value;
	
	if (useVar) {
		switch (variation) {
			case 1:
				var groupMakeUp = ['1','1','1d4'];
				break;
			case 2:
				var groupMakeUp = ['1','1','1d4','1d4'];
				break;
			case 3:
				var groupMakeUp = ['1','1','1','1d4','1d4','1d6'];
				break;
			case 4:
				var groupMakeUp = ['1','1','1','1','1','1d4','1d4','1d6','1d6','1d8'];
				break;
		};
	} else {
		var groupMakeUp = ['1','1','1','1','1d4','1d6','1d8'];
	};
	return groupMakeUp;
};

/**
 * disable submit button is nothing is selected
 */
function EnableSubmit() {
	if (
		document.getElementById("b1_box").checked ||
		document.getElementById("b2_box").checked ||
		document.getElementById("b3_box").checked ||
		document.getElementById("b4_box").checked ||
		document.getElementById("b5_box").checked ||
		document.getElementById("b6_box").checked ||
		document.getElementById("bonus").checked ||
		document.getElementById("botd_box").checked ||
		document.getElementById("planar_box").checked ||
		document.getElementById("horror_box").checked ||
		document.getElementById("innersea_box").checked ||
		document.getElementById("gods_box").checked ||
		document.getElementById("dmg_box").checked ||
		document.getElementById("mon_codex_box").checked ||
		document.getElementById("npc_codex_box").checked ||
		document.getElementById("vil_codex_box").checked ||
		document.getElementById("trap_box").checked ||
		document.getElementById("haunt_box").checked ||
		document.getElementById("hazard_box").checked
		) {
		document.getElementById("btn_mon").disabled = false;
		document.getElementById("btn_enc").disabled = false;
	} else {
		document.getElementById("btn_mon").disabled = true;
		document.getElementById("btn_enc").disabled = true;
	};
};