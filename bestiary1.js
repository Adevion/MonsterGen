//Name|Class|CR|Type|Terrain|Book/Page|isUnique
// 0 	== 1/2 CR
// -1 	== 1/3 CR
// -2	== 1/4 CR
// -3	== 1/6 CR
// -4	== 1/8 CR

var bestiary1 = [
['Aasimar','cleric 1','0','outsider','lands','Bestiary 1',false],
['Aboleth','','7','aberration','lakes,coastlines,oceans','Bestiary 1',false],
['Astral Deva','','14','outsider','Extraplanar','Bestiary 1',false],
['Planetar','','16','outsider','Extraplanar','Bestiary 1',false],
['Solar','','23','outsider','Extraplanar','Bestiary 1',false],
['Animated Object','','3','construct','any','Bestiary 1',false],
['Ankheg','','3','magical beast','plains','Bestiary 1',false],
['Giant Ant','','2','vermin','any','Bestiary 1',false],
['Dire Ape','','3','animal','forests','Bestiary 1',false],
['Gorilla','','2','animal','forests','Bestiary 1',false],
['Hound Archon','','4','outsider','Heaven','Bestiary 1',false],
['Lantern Archon','','2','outsider','Heaven','Bestiary 1',false],
['Trumpet Archon','','14','outsider','Heaven','Bestiary 1',false],
['Army Ant Swarm','','5','vermin','any,jungles','Bestiary 1',false],
['Assassin Vine','','3','plant','forests','Bestiary 1',false],
['Bralani','','6','outsider','Elysium','Bestiary 1',false],
['Ghaele','','13','outsider','Elysium','Bestiary 1',false],
['Lillend','','7','outsider','Elysium','Bestiary 1',false],
['Barghest','','4','outsider','any','Bestiary 1',false],
['Greater Barghest','','7','outsider','any','Bestiary 1',false],
['Basidirond','','4','plant','underground','Bestiary 1',false],
['Basilisk','','5','magical beast','any','Bestiary 1',false],
['Bat Swarm','','2','animal','any,jungles','Bestiary 1',false],
['Dire Bat','','2','animal','any,jungles','Bestiary 1',false],
['Dire Bear','','7','animal','cold,forests','Bestiary 1',false],
['Grizzly Bear','','4','animal','cold,forests','Bestiary 1',false],
['Polar Bear','','5','animal','coastlines','Bestiary 1',false],
['Bebilith','','10','outsider','Abyss','Bestiary 1',false],
['Fire Beetle','','-1','vermin','any','Bestiary 1',false],
['Giant Stag Beetle','','4','vermin','forests','Bestiary 1',false],
['Behir','','8','magical beast','hills','Bestiary 1',false],
['Black Pudding','','7','ooze','underground','Bestiary 1',false],
['Boar','','2','animal','jungles,forests','Bestiary 1',false],
['Dire Boar','','4','animal','jungles,jungles','Bestiary 1',false],
['Boggard','','2','humanoid','marshes','Bestiary 1',false],
['Bugbear','','2','humanoid','mountains','Bestiary 1',false],
['Bulette','','7','magical beast','hills','Bestiary 1',false],
['Cheetah','','2','animal','plains','Bestiary 1',false],
['Leopard','','2','animal','forests','Bestiary 1',false],
['Cave Fisher','','2','vermin','underground','Bestiary 1',false],
['Centaur','','3','monstrous humanoid','forests,plains','Bestiary 1',false],
['Centipede Swarm','','4','vermin','forests,underground','Bestiary 1',false],
['Giant Centipede','','0','vermin','forests,underground','Bestiary 1',false],
['Chimera','','7','magical beast','hills','Bestiary 1',false],
['Choker','','2','aberration','underground','Bestiary 1',false],
['Chuul','','7','aberration','swamps','Bestiary 1',false],
['Cloaker','','5','aberration','underground','Bestiary 1',false],
['Cockatrice','','3','magical beast','plains','Bestiary 1',false],
['Couatl','','10','outsider','forests','Bestiary 1',false],
['Crab Swarm','','4','vermin','lakes,rivers,coastlines,oceans','Bestiary 1',false],
['Giant Crab','','2','vermin','coastlines,oceans','Bestiary 1',false],
['King Crab','','-2','vermin','coastlines,oceans','Bestiary 1',false],
['Shark-Eating Crab','','7','vermin','coastlines,oceans','Bestiary 1',false],
['Shipwrecker Crab','','13','vermin','coastlines,oceans','Bestiary 1',false],
['Crocodile','','2','animal','rivers,marshes','Bestiary 1',false],
['Dire Crocodile','','9','animal','rivers,marshes','Bestiary 1',false],
['Cyclops','','5','humanoid','any,jungles','Bestiary 1',false],
['Dark Creeper','','2','humanoid','underground','Bestiary 1',false],
['Dark Stalker','','4','humanoid','underground','Bestiary 1',false],
['Darkmantle','','1','magical beast','underground','Bestiary 1',false],
['Babau','','6','outsider','Abyss','Bestiary 1',false],
['Balor','','20','outsider','Abyss','Bestiary 1',false],
['Balor Lord','barbarian 5','25','outsider','Abyss','Bestiary 1',false],
['Dretch','','2','outsider','Abyss','Bestiary 1',false],
['Glabrezu','','13','outsider','Abyss','Bestiary 1',false],
['Hezrou','','11','outsider','Abyss,swamps','Bestiary 1',false],
['Marilith','','17','outsider','Abyss','Bestiary 1',false],
['Nabasu','','8','outsider','Abyss','Bestiary 1',false],
['Nalfeshnee','','14','outsider','Abyss','Bestiary 1',false],
['Quasit','','2','outsider','Abyss','Bestiary 1',false],
['Shadow Demon','','7','outsider','Abyss','Bestiary 1',false],
['Succubus','','7','outsider','Abyss','Bestiary 1',false],
['Vrock','','9','outsider','Abyss','Bestiary 1',false],
['Derro','','3','humanoid','underground','Bestiary 1',false],
['Barbed Devil','','11','outsider','Hell','Bestiary 1',false],
['Bearded Devil','','5','outsider','Hell','Bestiary 1',false],
['Bone Devil','','9','outsider','Hell','Bestiary 1',false],
['Erinyes Devil','','8','outsider','Hell','Bestiary 1',false],
['Horned Devil','','16','outsider','Hell','Bestiary 1',false],
['Ice Devil','','13','outsider','Hell','Bestiary 1',false],
['Imp','','2','outsider','Hell','Bestiary 1',false],
['Lemure','','1','outsider','Hell','Bestiary 1',false],
['Pit Fiend','','20','outsider','Hell','Bestiary 1',false],
['Devourer','','11','undead','any','Bestiary 1',false],
['Ankylosaurus','','6','animal','forests,plains','Bestiary 1',false],
['Brachiosaurus','','10','animal','forests,plains','Bestiary 1',false],
['Deinonychus','','3','animal','forests','Bestiary 1',false],
['Elasmosaurus','','7','animal','water','Bestiary 1',false],
['Pteranodon','','3','animal','coastlines','Bestiary 1',false],
['Stegosaurus','','7','animal','plains','Bestiary 1',false],
['Triceratops','','8','animal','plains','Bestiary 1',false],
['Tyrannosaurus','','9','animal','forests,plains','Bestiary 1',false],
['Velociraptor','','2','animal','forests,plains','Bestiary 1',false],
['Dog','','-1','animal','any','Bestiary 1',false],
['Riding Dog','','1','animal','any','Bestiary 1',false],
['Dolphin','','0','animal','oceans','Bestiary 1',false],
['Orca','','5','animal','oceans','Bestiary 1',false],
['Doppelganger','','3','monstrous humanoid','any','Bestiary 1',false],
['Dracolisk','','7','dragon','swamps,underground','Bestiary 1',false],
['Adult Black Dragon','','11','dragon','marshes','Bestiary 1',false],
['Ancient Black Dragon','','16','dragon','marshes','Bestiary 1',false],
['Great Wyrm Black Dragon','','19','dragon','marshes','Bestiary 1',false],
['Juvenile Black Dragon','','8','dragon','marshes','Bestiary 1',false],
['Mature Adult Black Dragon','','12','dragon','marshes','Bestiary 1',false],
['Old Black Dragon','','14','dragon','marshes','Bestiary 1',false],
['Very Old Black Dragon','','15','dragon','marshes','Bestiary 1',false],
['Very Young Black Dragon','','5','dragon','marshes','Bestiary 1',false],
['Wyrm Black Dragon','','17','dragon','marshes','Bestiary 1',false],
['Wyrmling Black Dragon','','3','dragon','marshes','Bestiary 1',false],
['Young Adult Black Dragon','','10','dragon','marshes','Bestiary 1',false],
['Young Black Dragon','','7','dragon','marshes','Bestiary 1',false],
['Adult Blue Dragon','','13','dragon','deserts','Bestiary 1',false],
['Ancient Blue Dragon','','18','dragon','deserts','Bestiary 1',false],
['Great Wyrm Blue Dragon','','21','dragon','deserts','Bestiary 1',false],
['Juvenile Blue Dragon','','10','dragon','deserts','Bestiary 1',false],
['Mature Adult Blue Dragon','','14','dragon','deserts','Bestiary 1',false],
['Old Blue Dragon','','16','dragon','deserts','Bestiary 1',false],
['Very Old Blue Dragon','','17','dragon','deserts','Bestiary 1',false],
['Very Young Blue Dragon','','7','dragon','deserts','Bestiary 1',false],
['Wyrm Blue Dragon','','19','dragon','deserts','Bestiary 1',false],
['Wyrmling Blue Dragon','','5','dragon','deserts','Bestiary 1',false],
['Young Adult Blue Dragon','','12','dragon','deserts','Bestiary 1',false],
['Young Blue Dragon','','9','dragon','deserts','Bestiary 1',false],
['Adult Brass Dragon','','11','dragon','deserts','Bestiary 1',false],
['Ancient Brass Dragon','','16','dragon','deserts','Bestiary 1',false],
['Great Wyrm Brass Dragon','','19','dragon','deserts','Bestiary 1',false],
['Juvenile Brass Dragon','','8','dragon','deserts','Bestiary 1',false],
['Mature Adult Brass Dragon','','12','dragon','deserts','Bestiary 1',false],
['Old Brass Dragon','','14','dragon','deserts','Bestiary 1',false],
['Very Old Brass Dragon','','15','dragon','deserts','Bestiary 1',false],
['Very Young Brass Dragon','','5','dragon','deserts','Bestiary 1',false],
['Wyrm Brass Dragon','','17','dragon','deserts','Bestiary 1',false],
['Wyrmling Brass Dragon','','3','dragon','deserts','Bestiary 1',false],
['Young Adult Brass Dragon','','10','dragon','deserts','Bestiary 1',false],
['Young Brass Dragon','','7','dragon','deserts','Bestiary 1',false],
['Adult Bronze Dragon','','13','dragon','coastlines','Bestiary 1',false],
['Ancient Bronze Dragon','','18','dragon','coastlines','Bestiary 1',false],
['Great Wyrm Bronze Dragon','','21','dragon','coastlines','Bestiary 1',false],
['Juvenile Bronze Dragon','','10','dragon','coastlines','Bestiary 1',false],
['Mature Adult Bronze Dragon','','14','dragon','coastlines','Bestiary 1',false],
['Old Bronze Dragon','','16','dragon','coastlines','Bestiary 1',false],
['Very Old Bronze Dragon','','17','dragon','coastlines','Bestiary 1',false],
['Very Young Bronze Dragon','','7','dragon','coastlines','Bestiary 1',false],
['Wyrm Bronze Dragon','','19','dragon','coastlines','Bestiary 1',false],
['Wyrmling Bronze Dragon','','5','dragon','coastlines','Bestiary 1',false],
['Young Adult Bronze Dragon','','12','dragon','coastlines','Bestiary 1',false],
['Young Bronze Dragon','','9','dragon','coastlines','Bestiary 1',false],
['Adult Copper Dragon','','12','dragon','hills','Bestiary 1',false],
['Ancient Copper Dragon','','17','dragon','hills','Bestiary 1',false],
['Great Wyrm Copper Dragon','','20','dragon','hills','Bestiary 1',false],
['Juvenile Copper Dragon','','9','dragon','hills','Bestiary 1',false],
['Mature Adult Copper Dragon','','13','dragon','hills','Bestiary 1',false],
['Old Copper Dragon','','15','dragon','hills','Bestiary 1',false],
['Very Old Copper Dragon','','16','dragon','hills','Bestiary 1',false],
['Very Young Copper Dragon','','6','dragon','hills','Bestiary 1',false],
['Wyrm Copper Dragon','','18','dragon','hills','Bestiary 1',false],
['Wyrmling Copper Dragon','','4','dragon','hills','Bestiary 1',false],
['Young Adult Copper Dragon','','11','dragon','hills','Bestiary 1',false],
['Young Copper Dragon','','8','dragon','hills','Bestiary 1',false],
['Adult Gold Dragon','','15','dragon','plains','Bestiary 1',false],
['Ancient Gold Dragon','','20','dragon','plains','Bestiary 1',false],
['Great Wyrm Gold Dragon','','23','dragon','plains','Bestiary 1',false],
['Juvenile Gold Dragon','','12','dragon','plains','Bestiary 1',false],
['Mature Adult Gold Dragon','','16','dragon','plains','Bestiary 1',false],
['Old Gold Dragon','','18','dragon','plains','Bestiary 1',false],
['Very Young Gold Dragon','','9','dragon','plains','Bestiary 1',false],
['Wyrmling Gold Dragon','','7','dragon','plains','Bestiary 1',false],
['Young Adult Gold Dragon','','14','dragon','plains','Bestiary 1',false],
['Young Gold Dragon','','11','dragon','plains','Bestiary 1',false],
['Adult Green Dragon','','12','dragon','forests','Bestiary 1',false],
['Ancient Green Dragon','','17','dragon','forests','Bestiary 1',false],
['Great Wyrm Green Dragon','','20','dragon','forests','Bestiary 1',false],
['Juvenile Green Dragon','','9','dragon','forests','Bestiary 1',false],
['Mature Adult Green Dragon','','13','dragon','forests','Bestiary 1',false],
['Old Green Dragon','','15','dragon','forests','Bestiary 1',false],
['Very Old Green Dragon','','16','dragon','forests','Bestiary 1',false],
['Very Young Green Dragon','','6','dragon','forests','Bestiary 1',false],
['Wyrm Green Dragon','','18','dragon','forests','Bestiary 1',false],
['Wyrmling Green Dragon','','4','dragon','forests','Bestiary 1',false],
['Young Adult Green Dragon','','11','dragon','forests','Bestiary 1',false],
['Young Green Dragon','','8','dragon','forests','Bestiary 1',false],
['Adult Red Dragon','','14','dragon','mountains','Bestiary 1',false],
['Ancient Red Dragon','','19','dragon','mountains','Bestiary 1',false],
['Great Wyrm Red Dragon','','22','dragon','mountains','Bestiary 1',false],
['Juvenile Red Dragon','','11','dragon','mountains','Bestiary 1',false],
['Mature Adult Red Dragon','','15','dragon','mountains','Bestiary 1',false],
['Old Red Dragon','','17','dragon','mountains','Bestiary 1',false],
['Very Old Red Dragon','','18','dragon','mountains','Bestiary 1',false],
['Very Young Red Dragon','','8','dragon','mountains','Bestiary 1',false],
['Wyrm Red Dragon','','20','dragon','mountains','Bestiary 1',false],
['Wyrmling Red Dragon','','6','dragon','mountains','Bestiary 1',false],
['Young Adult Red Dragon','','13','dragon','mountains','Bestiary 1',false],
['Young Red Dragon','','10','dragon','mountains','Bestiary 1',false],
['Adult Silver Dragon','','14','dragon','mountains','Bestiary 1',false],
['Ancient Silver Dragon','','19','dragon','mountains','Bestiary 1',false],
['Young Silver Dragon','','10','dragon','mountains','Bestiary 1',false],
['Adult White Dragon','','10','dragon','cold,mountains','Bestiary 1',false],
['Ancient White Dragon','','15','dragon','cold,mountains','Bestiary 1',false],
['Great Wyrm White Dragon','','18','dragon','cold,mountains','Bestiary 1',false],
['Juvenile White Dragon','','7','dragon','cold,mountains','Bestiary 1',false],
['Mature Adult White Dragon','','11','dragon','cold,mountains','Bestiary 1',false],
['Old White Dragon','','13','dragon','cold,mountains','Bestiary 1',false],
['Very Old White Dragon','','14','dragon','cold,mountains','Bestiary 1',false],
['Very Young White Dragon','','4','dragon','cold,mountains','Bestiary 1',false],
['Wyrm White Dragon','','16','dragon','cold,mountains','Bestiary 1',false],
['Wyrmling White Dragon','','2','dragon','cold,mountains','Bestiary 1',false],
['Young Adult White Dragon','','9','dragon','cold,mountains','Bestiary 1',false],
['Young White Dragon','','6','dragon','cold,mountains','Bestiary 1',false],
['Dragon Turtle','','9','dragon','oceans,coastlines,rivers','Bestiary 1',false],
['Drider','','7','aberration','underground','Bestiary 1',false],
['Drow Noble','cleric 3','3','humanoid','underground','Bestiary 1',false],
['Drow','warrior 1','-1','humanoid','underground','Bestiary 1',false],
['Dryad','','3','fey','forests','Bestiary 1',false],
['Duergar','warrior 1','-1','humanoid','underground','Bestiary 1',false],
['Eagle','','0','animal','mountains','Bestiary 1',false],
['Giant Eagle','','3','magical beast','mountains','Bestiary 1',false],
['Electric Eel','','2','animal','rivers,lakes','Bestiary 1',false],
['Giant Moray Eel','','5','animal','oceans','Bestiary 1',false],
['Elder Air Elemental','','11','outsider','Plane of Air','Bestiary 1',false],
['Greater Air Elemental','','9','outsider','Plane of Air','Bestiary 1',false],
['Huge Air Elemental','','7','outsider','Plane of Air','Bestiary 1',false],
['Large Air Elemental','','5','outsider','Plane of Air','Bestiary 1',false],
['Medium Air Elemental','','3','outsider','Plane of Air','Bestiary 1',false],
['Small Air Elemental','','1','outsider','Plane of Air','Bestiary 1',false],
['Elder Earth Elemental','','11','outsider','Plane of Earth','Bestiary 1',false],
['Greater Earth Elemental','','9','outsider','Plane of Earth','Bestiary 1',false],
['Huge Earth Elemental','','7','outsider','Plane of Earth','Bestiary 1',false],
['Large Earth Elemental','','5','outsider','Plane of Earth','Bestiary 1',false],
['Medium Earth Elemental','','3','outsider','Plane of Earth','Bestiary 1',false],
['Small Earth Elemental','','1','outsider','Plane of Earth','Bestiary 1',false],
['Elder Fire Elemental','','11','outsider','Plane of Fire','Bestiary 1',false],
['Greater Fire Elemental','','9','outsider','Plane of Fire','Bestiary 1',false],
['Huge Fire Elemental','','7','outsider','Plane of Fire','Bestiary 1',false],
['Large Fire Elemental','','5','outsider','Plane of Fire','Bestiary 1',false],
['Medium Fire Elemental','','3','outsider','Plane of Fire','Bestiary 1',false],
['Small Fire Elemental','','1','outsider','Plane of Fire','Bestiary 1',false],
['Elder Water Elemental','','11','outsider','Plane of Water','Bestiary 1',false],
['Greater Water Elemental','','9','outsider','Plane of Water','Bestiary 1',false],
['Huge Water Elemental','','7','outsider','Plane of Water','Bestiary 1',false],
['Large Water Elemental','','5','outsider','Plane of Water','Bestiary 1',false],
['Medium Water Elemental','','3','outsider','Plane of Water','Bestiary 1',false],
['Small Water Elemental','','1','outsider','Plane of Water','Bestiary 1',false],
['Elephant','','7','animal','plains','Bestiary 1',false],
['Mastodon','','13','animal','cold,forests','Bestiary 1',false],
['Ettercap','','3','aberration','forests','Bestiary 1',false],
['Ettin','','6','humanoid','cold,hills','Bestiary 1',false],
['Bat','','-4','animal','forests,deserts','Bestiary 1',false],
['Cat','','-2','animal','plains,urban','Bestiary 1',false],
['Hawk','','-1','animal','forests','Bestiary 1',false],
['Lizard','','-3','animal','forests,jungles','Bestiary 1',false],
['Monkey','','-2','animal','forests','Bestiary 1',false],
['Owl','','-1','animal','forests','Bestiary 1',false],
['Rat','','-2','animal','any','Bestiary 1',false],
['Raven','','-3','animal','any','Bestiary 1',false],
['Toad','','-4','animal','forests','Bestiary 1',false],
['Viper','','0','animal','any','Bestiary 1',false],
['Weasel','','0','animal','hills','Bestiary 1',false],
['Giant Flytrap','','10','plant','swamps','Bestiary 1',false],
['Giant Frog','','1','animal','marshes,rivers,lakes','Bestiary 1',false],
['Poison Frog','','0','animal','marshes,rivers,lakes','Bestiary 1',false],
['Froghemoth','','13','aberration','marshes','Bestiary 1',false],
['Gargoyle','','4','monstrous humanoid','any','Bestiary 1',false],
['Gelatinous Cube','','3','ooze','underground','Bestiary 1',false],
['Djinni','','5','outsider','Plane of Air','Bestiary 1',false],
['Efreeti','','8','outsider','Plane of Fire','Bestiary 1',false],
['Janni','','4','outsider','deserts','Bestiary 1',false],
['Marid','','9','outsider','Plane of Water','Bestiary 1',false],
['Shaitan','','7','outsider','Plane of Earth','Bestiary 1',false],
['Ghost','aristocrat 7','7','undead','any','Bestiary 1',false],
['Ghoul','','1','undead','lands','Bestiary 1',false],
['Ghast','','2','undead','lands','Bestiary 1',false],
['Lacedon','','1','undead','oceans','Bestiary 1',false],
['Cloud Giant','','11','humanoid','mountains','Bestiary 1',false],
['Fire Giant','','10','humanoid','mountains','Bestiary 1',false],
['Frost Giant','','9','humanoid','cold,mountains','Bestiary 1',false],
['Hill Giant','','7','humanoid','hills','Bestiary 1',false],
['Stone Giant','','8','humanoid','mountains','Bestiary 1',false],
['Storm Giant','','13','humanoid','any','Bestiary 1',false],
['Gibbering Mouther','','5','aberration','underground','Bestiary 1',false],
['Girallon','','6','magical beast','forests','Bestiary 1',false],
['Gnoll','','1','humanoid','plains,deserts','Bestiary 1',false],
['Goblin Dog','','1','animal','forests,swamps,underground','Bestiary 1',false],
['Goblin','warrior 1','-1','humanoid','forests,plains','Bestiary 1',false],
['Clay Golem','','10','construct','any','Bestiary 1',false],
['Flesh Golem','','7','construct','any','Bestiary 1',false],
['Ice Golem','','5','construct','any','Bestiary 1',false],
['Iron Golem','','13','construct','any','Bestiary 1',false],
['Stone Golem','','11','construct','any','Bestiary 1',false],
['Wood Golem','','6','construct','any','Bestiary 1',false],
['Gorgon','','8','magical beast','plains,hills,underground','Bestiary 1',false],
['Gray Ooze','','4','ooze','cold,marshes,underground','Bestiary 1',false],
['Crystal Ooze','','4','ooze','lakes,oceans','Bestiary 1',false],
['Griffon','','4','magical beast','hills','Bestiary 1',false],
['Green Hag','','5','monstrous humanoid','marshes','Bestiary 1',false],
['Night Hag','','9','outsider','Hell,Abyss,Abaddon,Extraplanar','Bestiary 1',false],
['Sea Hag','','4','monstrous humanoid','coastlines,rivers,lakes,oceans','Bestiary 1',false],
['Half-Celestial Unicorn','','4','outsider','forests','Bestiary 1',false],
['Half-Fiend Minotaur','','6','outsider','ruins,underground','Bestiary 1',false],
['Harpy','','4','monstrous humanoid','marshes','Bestiary 1',false],
['Hell Hound','','3','outsider','Hell','Bestiary 1',false],
['Aurochs','','2','animal','plains','Bestiary 1',false],
['Bison','','4','animal','cold,plains','Bestiary 1',false],
['Hobgoblin','fighter 1','0','humanoid','hills','Bestiary 1',false],
['Homunculus','','1','construct','any','Bestiary 1',false],
['Horse','','1','animal','plains','Bestiary 1',false],
['Pony','','0','animal','plains','Bestiary 1',false],
['Hydra','','4','magical beast','marshes','Bestiary 1',false],
['Hyena','','1','animal','plains','Bestiary 1',false],
['Dire Hyena','','3','animal','plains','Bestiary 1',false],
['Intellect Devourer','','8','aberration','underground','Bestiary 1',false],
['Invisible Stalker','','7','outsider','Plane of Air','Bestiary 1',false],
['Iron Cobra','','2','construct','any','Bestiary 1',false],
['Kobold','warrior 1','-2','humanoid','underground,forests','Bestiary 1',false],
['Kraken','','18','magical beast','oceans','Bestiary 1',false],
['Kyton','','6','outsider','any,Hell,Plane of Shadow','Bestiary 1',false],
['Lamia','','6','monstrous humanoid','deserts','Bestiary 1',false],
['Leech Swarm','','4','vermin','marshes','Bestiary 1',false],
['Giant Leech','','2','vermin','marshes','Bestiary 1',false],
['Lich','necromancer 11','12','undead','any','Bestiary 1',false],
['Crag Linnorm','','14','dragon','cold,hills','Bestiary 1',false],
['Ice Linnorm','','17','dragon','cold,hills,mountains','Bestiary 1',false],
['Tarn Linnorm','','20','dragon','cold,lakes,swamps','Bestiary 1',false],
['Lion','','3','animal','plains','Bestiary 1',false],
['Dire Lion','','5','animal','plains,hills','Bestiary 1',false],
['Giant Frilled Lizard','','5','animal','forests,plains,hills','Bestiary 1',false],
['Monitor Lizard','','2','animal','forests,plains','Bestiary 1',false],
['Lizardfolk','','1','humanoid','swamps','Bestiary 1',false],
['Wererat','rogue 2','2','humanoid','urban','Bestiary 1',false],
['Werewolf','fighter 2','2','humanoid','lands','Bestiary 1',false],
['Manticore','','5','magical beast','hills,marshes','Bestiary 1',false],
['Chimera','','7','magical beast','hills','Bestiary 1',false],
['Deadly Mantis','','11','vermin','jungles','Bestiary 1',false],
['Giant Mantis','','3','vermin','forests','Bestiary 1',false],
['Medusa','','7','monstrous humanoid','marshes,underground','Bestiary 1',false],
['Air Mephit','','3','outsider','Plane of Air','Bestiary 1',false],
['Dust Mephit','','3','outsider','Plane of Air','Bestiary 1',false],
['Earth Mephit','','3','outsider','Plane of Earth','Bestiary 1',false],
['Fire Mephit','','3','outsider','Plane of Fire','Bestiary 1',false],
['Ice Mephit','','3','outsider','Plane of Air','Bestiary 1',false],
['Magma Mephit','','3','outsider','Plane of Fire','Bestiary 1',false],
['Ooze Mephit','','3','outsider','Plane of Water','Bestiary 1',false],
['Salt Mephit','','3','outsider','Plane of Earth','Bestiary 1',false],
['Steam Mephit','','3','outsider','Plane of Fire','Bestiary 1',false],
['Water Mephit','','3','outsider','Plane of Water','Bestiary 1',false],
['Merfolk','warrior 1','-1','humanoid','oceans','Bestiary 1',false],
['Mimic','','4','aberration','any','Bestiary 1',false],
['Minotaur','','4','monstrous humanoid','ruins,underground','Bestiary 1',false],
['Mite','','-2','fey','underground','Bestiary 1',false],
['Mohrg','','8','undead','any','Bestiary 1',false],
['Morlock','','2','monstrous humanoid','underground','Bestiary 1',false],
['Mummy','','5','undead','any','Bestiary 1',false],
['Dark Naga','','8','aberration','underground','Bestiary 1',false],
['Guardian Naga','','10','aberration','plains','Bestiary 1',false],
['Spirit Naga','','9','aberration','marshes','Bestiary 1',false],
['Neothelid','','15','aberration','underground','Bestiary 1',false],
['Nightmare','','5','outsider','Abaddon','Bestiary 1',false],
['Cauchemar','','11','outsider','Abaddon','Bestiary 1',false],
['Nymph','','7','fey','forests','Bestiary 1',false],
['Ochre Jelly','','5','ooze','underground,marshes','Bestiary 1',false],
['Octopus','','1','animal','cold,oceans','Bestiary 1',false],
['Giant Octopus','','8','animal','oceans','Bestiary 1',false],
['Ogre','','3','humanoid','cold,hills','Bestiary 1',false],
['Ogre Mage','','8','outsider','cold,hills','Bestiary 1',false],
['Orc','warrior 1','-1','humanoid','hills,mountains,underground','Bestiary 1',false],
['Otyugh','','4','aberration','underground','Bestiary 1',false],
['Owlbear','','4','magical beast','forests','Bestiary 1',false],
['Pegasus','','3','magical beast','plains','Bestiary 1',false],
['Phase Spider','','5','magical beast','hills','Bestiary 1',false],
['Phoenix','','15','magical beast','deserts,hills','Bestiary 1',false],
['Pixie','','4','fey','forests','Bestiary 1',false],
['Pseudodragon','','1','dragon','forests','Bestiary 1',false],
['Purple Worm','','12','magical beast','underground','Bestiary 1',false],
['Rakshasa','','10','outsider','any','Bestiary 1',false],
['Rat Swarm','','2','animal','any','Bestiary 1',false],
['Dire Rat','','-1','animal','urban','Bestiary 1',false],
['Remorhaz','','7','magical beast','cold,deserts','Bestiary 1',false],
['Retriever','','11','construct','Abyss','Bestiary 1',false],
['Rhinoceros','','4','animal','plains','Bestiary 1',false],
['Woolly Rhinoceros','','6','animal','cold,plains','Bestiary 1',false],
['Roc','','9','animal','mountains','Bestiary 1',false],
['Roper','','12','aberration','underground','Bestiary 1',false],
['Rust Monster','','3','aberration','underground','Bestiary 1',false],
['Sahuagin','','2','monstrous humanoid','oceans','Bestiary 1',false],
['Salamander','','6','outsider','Plane of Fire','Bestiary 1',false],
['Satyr','','4','fey','forests','Bestiary 1',false],
['Giant Scorpion','','3','vermin','deserts,forests,plains,underground','Bestiary 1',false],
['Sea Serpent','','12','magical beast','oceans','Bestiary 1',false],
['Shadow','','3','undead','any','Bestiary 1',false],
['Greater Shadow','','8','undead','any','Bestiary 1',false],
['Shambling Mound','','6','plant','forests,marshes','Bestiary 1',false],
['Shark','','2','animal','oceans','Bestiary 1',false],
['Dire Shark Megalodon','','9','animal','oceans','Bestiary 1',false],
['Great White Shark','','4','animal','oceans','Bestiary 1',false],
['Hammerhead Shark','','3','animal','oceans','Bestiary 1',false],
['Shocker Lizard','','2','magical beast','marshes','Bestiary 1',false],
['Shoggoth','','19','ooze','lakes,oceans,cold,underground','Bestiary 1',false],
['Skeletal Champion','warrior 1','2','undead','any','Bestiary 1',false],
['Human Skeleton','','-1','undead','any','Bestiary 1',false],
['Skum','','2','monstrous humanoid','cold,rivers,lakes,oceans,coastlines,underground','Bestiary 1',false],
['Giant Slug','','8','vermin','marshes,underground','Bestiary 1',false],
['Constrictor Snake','','2','animal','forests,swamps,rivers,lakes','Bestiary 1',false],
['Venomous Snake','','1','animal','any','Bestiary 1',false],
['Spectre','','7','undead','any','Bestiary 1',false],
['Gynosphinx','','8','magical beast','deserts,hills','Bestiary 1',false],
['Giant Spider','','1','vermin','any','Bestiary 1',false],
['Spider Swarm','','1','vermin','any','Bestiary 1',false],
['Squid','','1','animal','oceans','Bestiary 1',false],
['Giant Squid','','9','animal','oceans','Bestiary 1',false],
['Stirge','','0','magical beast','swamps','Bestiary 1',false],
['Svirfneblin','ranger 1','1','humanoid','underground','Bestiary 1',false],
['Tarrasque','','25','magical beast','any','Bestiary 1',true],
['Tengu','rogue 1','0','humanoid','mountains,urban','Bestiary 1',false],
['Tiefling','rogue 1','0','outsider','lands','Bestiary 1',false],
['Tiger','','4','animal','forests','Bestiary 1',false],
['Dire Tiger','','8','animal','forests,plains,swamps','Bestiary 1',false],
['Treant','','8','plant','forests','Bestiary 1',false],
['Troglodyte','','1','humanoid','underground','Bestiary 1',false],
['Troll','','5','humanoid','cold,mountains','Bestiary 1',false],
['Unicorn','','3','magical beast','forests','Bestiary 1',false],
['Vampire Spawn','','4','undead','any','Bestiary 1',false],
['Vampire','sorcerer 8','9','undead','any','Bestiary 1',false],
['Vargouille','','2','outsider','any','Bestiary 1',false],
['Vegepygmy','','0','plant','underground','Bestiary 1',false],
['Violet Fungus','','3','plant','underground','Bestiary 1',false],
['Wasp Swarm','','3','vermin','forests','Bestiary 1',false],
['Giant Wasp','','3','vermin','forests','Bestiary 1',false],
['Wight','','3','undead','any','Bestiary 1',false],
['Will-o-Wisp','','6','aberration','swamps','Bestiary 1',false],
['Wolf','','1','animal','cold,forests','Bestiary 1',false],
['Dire Wolf','','3','animal','cold,forests','Bestiary 1',false],
['Wolverine','','2','animal','cold,forests','Bestiary 1',false],
['Dire Wolverine','','4','animal','cold,forests','Bestiary 1',false],
['Worg','','2','magical beast','forests,plains','Bestiary 1',false],
['Winter Wolf','','5','magical beast','cold,forests,plains','Bestiary 1',false],
['Wraith','','5','undead','any','Bestiary 1',false],
['Wyvern','','6','dragon','hills','Bestiary 1',false],
['Xill','','6','outsider','Ethereal Plane','Bestiary 1',false],
['Xorn','','6','outsider','Plane of Earth','Bestiary 1',false],
['Yellow Musk Creeper','','2','plant','forests,underground','Bestiary 1',false],
['Yeth Hound','','3','outsider','any','Bestiary 1',false],
['Yeti','','4','monstrous humanoid','cold,mountains','Bestiary 1',false],
['Human Zombie','','0','undead','any','Bestiary 1',false],
['Fast Zombie','','0','undead','any','Bestiary 1',false],
['Plague Zombie','','0','undead','any','Bestiary 1',false]
];