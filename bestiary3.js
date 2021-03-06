//Name|Class|CR|Type|Terrain|Book/Page|isUnique
// 0 	== 1/2 CR
// -1 	== 1/3 CR
// -2	== 1/4 CR
// -3	== 1/6 CR
// -4	== 1/8 CR

var bestiary3 = [
['Adaro','','3','monstrous humanoid','oceans','Bestiary 3',false],
['Adherer','','3','monstrous humanoid','underground','Bestiary 3',false],
['Adlet','','10','humanoid','cold,plains,hills,mountains','Bestiary 3',false],
['Ahuizotl','','6','magical beast','lakes,rivers,swamps','Bestiary 3',false],
['Akhlut','','13','magical beast','cold,lakes,plains,oceans','Bestiary 3',false],
['Allip','','3','undead','any','Bestiary 3',false],
['Alraune','','13','plant','forests','Bestiary 3',false],
['Cat Lord','ranger 10','11','outsider','jungles,jungles','Bestiary 3',false],
['Giant Ant Lion','','5','vermin','deserts','Bestiary 3',false],
['Giant Adult Ant Lion','','6','vermin','deserts','Bestiary 3',false],
['Harbinger Archon','','2','outsider','Heaven','Bestiary 3',false],
['Legion Archon','','7','outsider','Heaven','Bestiary 3',false],
['Ascomoid','','5','plant','underground','Bestiary 3',false],
['Adhukait','','7','outsider','Hell','Bestiary 3',false],
['Aghasura','','11','outsider','Hell','Bestiary 3',false],
['Asurendra','','20','outsider','Hell','Bestiary 3',false],
['Tripurasura','','2','outsider','Hell','Bestiary 3',false],
['Upasunda','','9','outsider','Hell','Bestiary 3',false],
['Atomie','','1','fey','any','Bestiary 3',false],
['Axe Beak','','2','animal','plains','Bestiary 3',false],
['Azruverda','','13','aberration','underground','Bestiary 3',false],
['Baku','','8','magical beast','any','Bestiary 3',false],
['Bandersnatch','','17','magical beast','cold,forests','Bestiary 3',false],
['Baregara','','12','outsider','Abyss','Bestiary 3',false],
['Baykok','','9','undead','any','Bestiary 3',false],
['Tempest Behemoth','','22','magical beast','air','Bestiary 3',false],
['Thalassic Behemoth','','20','magical beast','oceans,lakes,rivers','Bestiary 3',false],
['Thunder Behemoth','','18','magical beast','lands','Bestiary 3',false],
['Berbalang','','6','undead','lands','Bestiary 3',false],
['Bhuta','','6','undead','lands,underground','Bestiary 3',false],
['Bogeyman','','6','undead','any','Bestiary 3',false],
['Brain Ooze','','7','ooze','ruins,underground','Bestiary 3',false],
['Carbuncle','','0','aberration','cold,forests','Bestiary 3',false],
['Carnivorous Crystal','','11','ooze','underground,Plane of Earth','Bestiary 3',false],
['Caryatid Column','','3','construct','any','Bestiary 3',false],
['Catfolk','ranger 1','0','humanoid','forests,plains,urban','Bestiary 3',false],
['Caulborn','','7','outsider','any','Bestiary 3',false],
['Cecaelia','','5','monstrous humanoid','coastlines,oceans','Bestiary 3',false],
['Ceratioidi','','3','monstrous humanoid','oceans','Bestiary 3',false],
['Cerberi','','6','outsider','Hell','Bestiary 3',false],
['Cerebric Fungus','','3','plant','any','Bestiary 3',false],
['Clockwork Goliath','','19','construct','any','Bestiary 3',false],
['Clockwork Leviathan','','12','construct','any','Bestiary 3',false],
['Clockwork Servant','','2','construct','any','Bestiary 3',false],
['Clockwork Soldier','','6','construct','any','Bestiary 3',false],
['Clockwork Spy','','0','construct','any','Bestiary 3',false],
['Cold Rider','','8','fey','cold,any','Bestiary 3',false],
['Shark-Eating Crab','','7','vermin','oceans,coastlines','Bestiary 3',false],
['Shipwrecker Crab','','13','vermin','oceans,coastlines','Bestiary 3',false],
['Great Cyclops','','12','humanoid','jungles','Bestiary 3',false],
['Crucidaemon','','15','outsider','Abaddon','Bestiary 3',false],
['Vulnudaemon','','4','outsider','Abaddon','Bestiary 3',false],
['Deathweb','','6','undead','any','Bestiary 3',false],
['Demilich','','14','undead','any','Bestiary 3',false],
['Shaggy Demodand','','15','outsider','Abyss','Bestiary 3',false],
['Slimy Demodand','','16','outsider','Abyss','Bestiary 3',false],
['Tarry Demodand','','13','outsider','Abyss','Bestiary 3',false],
['Coloxus','','12','outsider','Abyss','Bestiary 3',false],
['Incubus','','6','outsider','Abyss','Bestiary 3',false],
['Schir','','4','outsider','Abyss','Bestiary 3',false],
['Derhii','','5','monstrous humanoid','forests,mountains','Bestiary 3',false],
['Contract Devil','','10','outsider','Hell','Bestiary 3',false],
['Dimetrodon','','3','animal','forests','Bestiary 3',false],
['Iguanodon','','6','animal','forests,swamps','Bestiary 3',false],
['Pachycephalosaurus','','4','animal','plains','Bestiary 3',false],
['Spinosaurus','','11','animal','forests,swamps','Bestiary 3',false],
['Dire Corby','','1','monstrous humanoid','underground','Bestiary 3',false],
['Disenchanter','','3','magical beast','any','Bestiary 3',false],
['Aghash','','4','outsider','Abaddon','Bestiary 3',false],
['Akvan','','20','outsider','Abaddon','Bestiary 3',false],
['Doru','','2','outsider','Abaddon','Bestiary 3',false],
['Ghawwas','','10','outsider','Abaddon','Bestiary 3',false],
['Pairaka','','7','outsider','Abaddon','Bestiary 3',false],
['Sepid','','14','outsider','Abaddon','Bestiary 3',false],
['Shira','','12','outsider','Abaddon','Bestiary 3',false],
['Faerie Dragon','','2','dragon','forests','Bestiary 3',false],
['Adult forests Dragon','','14','dragon','forests','Bestiary 3',false],
['Ancient forests Dragon','','19','dragon','forests','Bestiary 3',false],
['Young forests Dragon','','10','dragon','forests','Bestiary 3',false],
['Adult Sea Dragon','','12','dragon','oceans,coastlines','Bestiary 3',false],
['Ancient Sea Dragon','','17','dragon','oceans,coastlines','Bestiary 3',false],
['Young Sea Dragon','','8','dragon','oceans,coastlines','Bestiary 3',false],
['Adult Sky Dragon','','13','dragon','mountains','Bestiary 3',false],
['Ancient Sky Dragon','','18','dragon','mountains','Bestiary 3',false],
['Young Sovereign Dragon','','11','dragon','mountains','Bestiary 3',false],
['Adult Sovereign Dragon','','15','dragon','mountains','Bestiary 3',false],
['Ancient Sovereign Dragon','','20','dragon','mountains','Bestiary 3',false],
['Young Sky Dragon','','9','dragon','mountains','Bestiary 3',false],
['Adult Underworld Dragon','','11','dragon','underground','Bestiary 3',false],
['Ancient Underworld Dragon','','16','dragon','underground','Bestiary 3',false],
['Young Underworld Dragon','','7','dragon','underground','Bestiary 3',false],
['Dragonne','','7','magical beast','deserts','Bestiary 3',false],
['Desert Drake','','8','dragon','deserts','Bestiary 3',false],
['Rift Drake','','9','dragon','hills,mountains','Bestiary 3',false],
['River Drake','','3','dragon','rivers,lakes','Bestiary 3',false],
['Dybbuk','','15','undead','any','Bestiary 3',false],
['Ecorche','','16','undead','lands','Bestiary 3',false],
['Unfettered Eidolon','','8','outsider','any','Bestiary 3',false],
['Faun','','1','fey','forests','Bestiary 3',false],
['Festrog','','1','undead','lands','Bestiary 3',false],
['Fey Giant Toad','','3','fey','forests,plains,swamps','Bestiary 3',false],
['Flail Snail','','3','magical beast','underground','Bestiary 3',false],
['Giant Flea','','0','vermin','plains,forests,underground','Bestiary 3',false],
['Flumph','','1','aberration','lands,underground','Bestiary 3',false],
['Flying Squirrel','','91','animal','forests','Bestiary 3',false],
['Foo Dog','','2','outsider','Nirvana','Bestiary 3',false],
['Foo Lion','','4','outsider','Nirvana','Bestiary 3',false],
['Fox','','-2','animal','any','Bestiary 3',false],
['Garuda','','9','outsider','jungles,hills,mountains','Bestiary 3',false],
['Ghorazagh','','13','aberration','underground','Bestiary 3',false],
['Ghul','','5','undead','deserts','Bestiary 3',false],
['Ash Giant','','11','humanoid','hills,deserts,plains','Bestiary 3',false],
['Cave Giant','','6','humanoid','underground','Bestiary 3',false],
['Desert Giant','','9','humanoid','deserts','Bestiary 3',false],
['Jungle Giant','','10','humanoid','forests','Bestiary 3',false],
['Girtablilu','','8','monstrous humanoid','deserts','Bestiary 3',false],
['Globster','','5','ooze','coastlines','Bestiary 3',false],
['Goat','','91','animal','any','Bestiary 3',false],
['Goblin Snake','','1','aberration','underground,swamps','Bestiary 3',false],
['Bone Golem','','8','construct','any','Bestiary 3',false],
['Brass Golem','','14','construct','any','Bestiary 3',false],
['Cannon Golem','','15','construct','lands','Bestiary 3',false],
['Fossil Golem','','12','construct','any','Bestiary 3',false],
['Gorynych','','15','dragon','forests','Bestiary 3',false],
['Graveknight','fighter 10','11','undead','lands','Bestiary 3',false],
['Graven Guardian','','5','construct','lands','Bestiary 3',false],
['Fuath','','1','fey','oceans,coastlines','Bestiary 3',false],
['Grodair','','5','magical beast','coastlines','Bestiary 3',false],
['Grootslang','','16','magical beast','lakes,rivers','Bestiary 3',false],
['Guecubu','','8','undead','any','Bestiary 3',false],
['Annis Hag','','6','monstrous humanoid','cold,marshes','Bestiary 3',false],
['Hellwasp Swarm','','8','vermin','Hell','Bestiary 3',false],
['Antelope','','0','animal','plains','Bestiary 3',false],
['Elk','','1','animal','plains,cold','Bestiary 3',false],
['Hodag','','6','magical beast','forests,marshes','Bestiary 3',false],
['Hollow Serpent','','16','undead','underground','Bestiary 3',false],
['Huecuva','','2','undead','any','Bestiary 3',false],
['Humbaba','','19','monstrous humanoid','forests','Bestiary 3',false],
['Hungry Fog','','6','ooze','any','Bestiary 3',false],
['Iku-turso','','8','aberration','cold,oceans,coastlines,underground','Bestiary 3',false],
['Jackalwere','','2','magical beast','deserts','Bestiary 3',false],
['Deaths Head Jellyfish','','1','vermin','oceans','Bestiary 3',false],
['Sapphire Jellyfish','','11','vermin','oceans','Bestiary 3',false],
['Jorogumo','','12','monstrous humanoid','mountains,hills','Bestiary 3',false],
['Kamadan','','4','magical beast','plains','Bestiary 3',false],
['Jinushigami','','20','outsider','any','Bestiary 3',false],
['Kodama','','5','outsider','forests','Bestiary 3',false],
['Shikigami','','2','outsider','any','Bestiary 3',false],
['Toshigami','','15','outsider','lands','Bestiary 3',false],
['Zuishin','','10','outsider','any','Bestiary 3',false],
['Kappa','','2','monstrous humanoid','lakes,rivers','Bestiary 3',false],
['Kech','','3','monstrous humanoid','forests','Bestiary 3',false],
['Kirin','','7','magical beast','any','Bestiary 3',false],
['Kongamato','','15','dragon','jungles,forests','Bestiary 3',false],
['Augur','','2','outsider','Plane of Shadow','Bestiary 3',false],
['Eremite','','20','outsider','Plane of Shadow','Bestiary 3',false],
['Interlocutor','','12','outsider','Plane of Shadow','Bestiary 3',false],
['Lammasu','','8','magical beast','deserts','Bestiary 3',false],
['Fungus Leshy','','2','plant','swamps,underground','Bestiary 3',false],
['Gourd Leshy','','1','plant','hills,plains','Bestiary 3',false],
['Leaf Leshy','','0','plant','forests,hills','Bestiary 3',false],
['Seaweed Leshy','','3','plant','oceans,coastlines','Bestiary 3',false],
['Cairn Linnorm','','18','dragon','cold,hills','Bestiary 3',false],
['Fjord Linnorm','','16','dragon','cold,coastlines','Bestiary 3',false],
['Taiga Linnorm','','19','dragon','cold,forests','Bestiary 3',false],
['Tor Linnorm','','21','dragon','cold,mountains','Bestiary 3',false],
['Giant Chameleon','','3','animal','forests','Bestiary 3',false],
['Giant Gecko','','1','animal','forests,mountains','Bestiary 3',false],
['Lukwata','','11','magical beast','rivers,lakes,swamps','Bestiary 3',false],
['Maftet','','6','monstrous humanoid','deserts,mountains','Bestiary 3',false],
['Magmin','','3','outsider','lands,Plane of Fire','Bestiary 3',false],
['Manananggal','','7','undead','lands','Bestiary 3',false],
['Kangaroo','','0','animal','hills,plains','Bestiary 3',false],
['Thylacine','','0','animal','hills','Bestiary 3',false],
['Archelon','','5','animal','coastlines','Bestiary 3',false],
['Basilosaurus','','12','animal','oceans','Bestiary 3',false],
['Megalania','','7','animal','forests,plains','Bestiary 3',false],
['Mobogo','','10','magical beast','swamps','Bestiary 3',false],
['Moon-beast','','11','aberration','lands','Bestiary 3',false],
['Myceloid','','4','plant','underground','Bestiary 3',false],
['Lunar Naga','','6','aberration','lands','Bestiary 3',false],
['Royal Naga','','11','aberration','lands','Bestiary 3',false],
['Water Naga','','7','aberration','rivers,lakes,coastlines','Bestiary 3',false],
['Nephilim','','8','outsider','hills','Bestiary 3',false],
['Nixie','','1','fey','rivers,lakes,swamps','Bestiary 3',false],
['Norn','','18','fey','cold,mountains','Bestiary 3',false],
['Nuckelavee','','9','fey','cold,swamps,coastlines','Bestiary 3',false],
['Nue','','10','magical beast','forests,mountains','Bestiary 3',false],
['Fire Yai','','15','outsider','hills,mountains','Bestiary 3',false],
['Ice Yai','','14','outsider','cold,mountains','Bestiary 3',false],
['Kuwa','','4','outsider','any','Bestiary 3',false],
['Spirit Oni','','2','outsider','any','Bestiary 3',false],
['Void Yai','','20','outsider','cold,mountains','Bestiary 3',false],
['Water Yai','','18','outsider','rivers,lakes,coastlines','Bestiary 3',false],
['Deathtrap Ooze','','8','ooze','underground','Bestiary 3',false],
['Garden Ooze','','2','ooze','forests,marshes,urban','Bestiary 3',false],
['Plasma Ooze','','16','ooze','any','Bestiary 3',false],
['Otter','','-2','animal','lakes,rivers','Bestiary 3',false],
['Giant Owl','','5','magical beast','forests','Bestiary 3',false],
['Great Horned Owl','','0','animal','forests','Bestiary 3',false],
['Pale Stranger','','10','undead','any','Bestiary 3',false],
['Giant Rot Grub','','3','vermin','any','Bestiary 3',false],
['Rot Grub Swarm','','7','vermin','any','Bestiary 3',false],
['Penanggalen','witch 5','5','undead','any','Bestiary 3',false],
['Peri','','14','outsider','Extraplanar','Bestiary 3',false],
['Phantom Fungus','','3','plant','underground','Bestiary 3',false],
['Pig','','91','animal','any','Bestiary 3',false],
['Popobala','','15','monstrous humanoid','coastlines,forests','Bestiary 3',false],
['Porcupine','','-2','animal','forests,plains','Bestiary 3',false],
['Giant Porcupine','','2','animal','forests,plains','Bestiary 3',false],
['Pukwudgie','','7','monstrous humanoid','forests,hills,mountains','Bestiary 3',false],
['Raccoon','','-3','animal','forests','Bestiary 3',false],
['Dandasuka','','5','outsider','any','Bestiary 3',false],
['Maharaja','','20','outsider','any','Bestiary 3',false],
['Marai','','8','outsider','any','Bestiary 3',false],
['Raktavarna','','2','outsider','any','Bestiary 3',false],
['Tataka','','15','outsider','any','Bestiary 3',false],
['Ratfolk','expert 1','91','humanoid','deserts,urban','Bestiary 3',false],
['Rusalka','','12','fey','rivers,lakes','Bestiary 3',false],
['Sabosan','','5','monstrous humanoid','forests,underground','Bestiary 3',false],
['Sagari','','0','aberration','forests','Bestiary 3',false],
['Sargassum Fiend','','9','plant','oceans','Bestiary 3',false],
['Sasquatch','','2','humanoid','forests','Bestiary 3',false],
['Deadfall Scorpion','','8','vermin','forests','Bestiary 3',false],
['Ghost Scorpion','','0','vermin','deserts,underground','Bestiary 3',false],
['Giant Sea Anemone','','2','vermin','oceans,coastlines','Bestiary 3',false],
['Sea Bonze','','15','undead','oceans','Bestiary 3',false],
['Deep Sea Serpent','','19','magical beast','oceans','Bestiary 3',false],
['Shadow Mastiff','','5','outsider','any','Bestiary 3',false],
['Shae','','4','outsider','Plane of Shadow','Bestiary 3',false],
['Shedu','','7','magical beast','lands','Bestiary 3',false],
['Shinigami','','17','outsider','any','Bestiary 3',false],
['Simurgh','','18','magical beast','deserts,mountains','Bestiary 3',false],
['Siyokoy','','10','aberration','oceans','Bestiary 3',false],
['Skunk','','-4','animal','forests,hills','Bestiary 3',false],
['Giant Skunk','','3','animal','forests','Bestiary 3',false],
['Sleipnir','','11','magical beast','cold,mountains','Bestiary 3',false],
['Snake Swarm','','2','animal','any','Bestiary 3',false],
['Venomous Snake Swarm','','4','animal','any','Bestiary 3',false],
['Androsphinx','','9','magical beast','deserts,hills','Bestiary 3',false],
['Criosphinx','','7','magical beast','deserts,hills','Bestiary 3',false],
['Hieracosphinx','','5','magical beast','hills','Bestiary 3',false],
['Spider Eater','','5','magical beast','forests','Bestiary 3',false],
['Giant Crab Spider','','0','vermin','forests','Bestiary 3',false],
['Ogre Spider','','5','vermin','hills,underground','Bestiary 3',false],
['Sprite','','91','fey','forests','Bestiary 3',false],
['Stymphalidies','','8','magical beast','plains,coastlines','Bestiary 3',false],
['Suli','ranger 1','0','outsider','any','Bestiary 3',false],
['Jubjub Bird','','15','magical beast','forests','Bestiary 3',false],
['Tanuki','','4','monstrous humanoid','forests,urban','Bestiary 3',false],
['Taotieh','','11','construct','any','Bestiary 3',false],
['Tatzlwyrm','','2','dragon','forests','Bestiary 3',false],
['Terra-Cotta Soldier','','6','construct','any','Bestiary 3',false],
['Hekatonkheires','','24','outsider','any','Bestiary 3',false],
['Tojanida','','5','outsider','oceans,coastlines,Plane of Water','Bestiary 3',false],
['Tophet','','10','construct','any','Bestiary 3',false],
['Jotund Troll','','15','humanoid','cold,hills,mountains','Bestiary 3',false],
['Moss Troll','','3','humanoid','forests','Bestiary 3',false],
['Trollhound','','3','magical beast','cold,mountains','Bestiary 3',false],
['Tupilaq','','7','construct','any','Bestiary 3',false],
['Tzitzimitl','','19','undead','any','Bestiary 3',false],
['Valkyrie','','12','outsider','any','Bestiary 3',false],
['Jiang-shi','monk 5','6','undead','any','Bestiary 3',false],
['Vanara','monk 1','0','humanoid','forests','Bestiary 3',false],
['Vishkanya','ninja 1','0','humanoid','any','Bestiary 3',false],
['Vodyanoi','','5','monstrous humanoid','rivers,marshes','Bestiary 3',false],
['Voonith','','4','magical beast','rivers,marshes','Bestiary 3',false],
['Vulture','','0','animal','plains,hills','Bestiary 3',false],
['Giant Vulture','','4','animal','plains,hills','Bestiary 3',false],
['Wolf-in-sheep\'s-clothing','','8','aberration','forests','Bestiary 3',false],
['Yithian','','9','aberration','any','Bestiary 3',false],
['Yuki-onna','','8','undead','cold,any,ruins','Bestiary 3',false],
['Zoog','','1','magical beast','forests','Bestiary 3',false],
['Zuvembie','','4','undead','lands','Bestiary 3',false]
];