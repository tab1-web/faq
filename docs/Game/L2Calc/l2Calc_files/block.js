var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function equipselect(stringtoparse)
/*
string format
elementid1=value1;elementid2=value2;...elementidx=valuex;
*/
{
	var todo =stringtoparse.split(";");
	for (var a=0;a<todo.length;a++) {
		try {
			var idvalue=todo[a].split("=");
			d.gI(idvalue[0]).selectedIndex=idvalue[1];}
		catch(E) {}
	}
}

function modifystyles(stringtoparse)
/*
string format
elementid1=value1;elementid2=value2;...elementidx=valuex;
*/
{
	var todo =stringtoparse.split(";");
	for (var a=0;a<todo.length;a++) {
		try {
			var idvalue=todo[a].split("=");
			d.gI(idvalue[0]).style.display=idvalue[1];}
		catch(E) {}
	}
}

function boxgoaway() {
//toggle display for fieldsets
	if (d.gI("COMBATCHECK").checked==false)
		{d.gI("COMBAT").style.display='none'}
	else if (d.gI("COMBATCHECK").checked==true)
		{d.gI("COMBAT").style.display='block'}
	if (d.gI("ITEMSCHECK").checked==false)
		{d.gI("ITEMS").style.display='none'}
	else if (d.gI("ITEMSCHECK").checked==true)
		{d.gI("ITEMS").style.display='block'}
	if (d.gI("PASSIVESCHECK").checked==false)
		{d.gI("PASSIVES").style.display='none'}
	else if (d.gI("PASSIVESCHECK").checked==true)
		{d.gI("PASSIVES").style.display='block'}
	if (d.gI("BUFFSCHECK").checked==false)
		{d.gI("BUFFS").style.display='none'}
	else if (d.gI("BUFFSCHECK").checked==true)
		{d.gI("BUFFS").style.display='block'}
	if (d.gI("TOGGLESCHECK").checked==false)
		{d.gI("TOGGLES").style.display='none'}
	else if (d.gI("TOGGLESCHECK").checked==true)
		{d.gI("TOGGLES").style.display='block'}
	if (d.gI("DEBUFFSCHECK").checked==false)
		{d.gI("DEBUFFS").style.display='none'}
	else if (d.gI("DEBUFFSCHECK").checked==true)
		{d.gI("DEBUFFS").style.display='block'}
}

function equipmentgrade(setbonus,setjewelry)
{
//Set Bonus Auto-Select
var fullset=d.gI("FULLSET").value
if (setbonus && fullset=="Draconic")
	{equipselect("HELMETGRADE=0;UPPERGRADE=0;GLOVEGRADE=0;BOOTGRADE=0;HELMETS=1;UPPERS=1;BOOTS=1;GLOVES=1");}
else if (setbonus && fullset=="Imperial_Crusader")
	{equipselect("SHIELDGRADE=0;HELMETGRADE=0;UPPERGRADE=0;LOWERGRADE=0;GLOVEGRADE=0;BOOTGRADE=0;SHIELDS=1;HELMETS=2;UPPERS=2;LOWERS=1;BOOTS=2;GLOVES=2");}
else if (setbonus && fullset=="Major_Arcana")
	{equipselect("HELMETGRADE=0;UPPERGRADE=0;GLOVEGRADE=0;BOOTGRADE=0;HELMETS=3;UPPERS=3;BOOTS=3;GLOVES=3");}
else if (setbonus && fullset=="Apella_Heavy")
	{equipselect("HELMETGRADE=1;UPPERGRADE=1;GLOVEGRADE=1;BOOTGRADE=1;HELMETA=2;UPPERA=3;BOOTA=3;GLOVEA=1");}
else if (setbonus && fullset=="Apella_Light")
	{equipselect("HELMETGRADE=1;UPPERGRADE=1;GLOVEGRADE=1;BOOTGRADE=1;HELMETA=3;UPPERA=1;BOOTA=1;GLOVEA=2");}
else if (setbonus && fullset=="Apella_Robe")
	{equipselect("HELMETGRADE=1;UPPERGRADE=1;GLOVEGRADE=1;BOOTGRADE=1;HELMETA=1;UPPERA=2;BOOTA=2;GLOVEA=3");}
else if (setbonus && fullset=="Dark_Crystal_Heavy")
	{equipselect("SHIELDGRADE=1;HELMETGRADE=1;UPPERGRADE=1;LOWERGRADE=1;GLOVEGRADE=1;BOOTGRADE=1;SHIELDA=1;HELMETA=4;UPPERA=6;LOWERA=1;BOOTA=5;GLOVEA=4");}
else if (setbonus && fullset=="Dark_Crystal_Light")
	{equipselect("HELMETGRADE=1;UPPERGRADE=1;LOWERGRADE=1;GLOVEGRADE=1;BOOTGRADE=1;HELMETA=4;UPPERA=5;LOWERA=2;BOOTA=5;GLOVEA=4");}
else if (setbonus && fullset=="Dark_Crystal_Robe")
	{equipselect("HELMETGRADE=1;UPPERGRADE=1;GLOVEGRADE=1;BOOTGRADE=1;HELMETA=4;UPPERA=7;BOOTA=5;GLOVEA=4");}
else if (setbonus && fullset=="Majestic_Heavy")
	{equipselect("HELMETGRADE=1;UPPERGRADE=1;GLOVEGRADE=1;BOOTGRADE=1;HELMETA=6;UPPERA=9;BOOTA=6;GLOVEA=6");}
else if (setbonus && fullset=="Majestic_Light")
	{equipselect("HELMETGRADE=1;UPPERGRADE=1;GLOVEGRADE=1;BOOTGRADE=1;HELMETA=6;UPPERA=8;BOOTA=6;GLOVEA=6");}
else if (setbonus && fullset=="Majestic_Robe")
	{equipselect("HELMETGRADE=1;UPPERGRADE=1;GLOVEGRADE=1;BOOTGRADE=1;HELMETA=6;UPPERA=10;BOOTA=6;GLOVEA=6");}
else if (setbonus && fullset=="Nightmare_Heavy")
	{equipselect("SHIELDGRADE=1;HELMETGRADE=1;UPPERGRADE=1;GLOVEGRADE=1;BOOTGRADE=1;SHIELDA=2;HELMETA=5;UPPERA=4;BOOTA=4;GLOVEA=5");}
else if (setbonus && fullset=="Nightmare_Light")
	{equipselect("SHIELDGRADE=1;HELMETGRADE=1;UPPERGRADE=1;GLOVEGRADE=1;BOOTGRADE=1;SHIELDA=2;HELMETA=5;UPPERA=11;BOOTA=4;GLOVEA=5");}
else if (setbonus && fullset=="Nightmare_Robe")
	{equipselect("SHIELDGRADE=1;HELMETGRADE=1;UPPERGRADE=1;GLOVEGRADE=1;BOOTGRADE=1;SHIELDA=2;HELMETA=5;UPPERA=12;BOOTA=4;GLOVEA=5");}
else if (setbonus && fullset=="Tallum_Heavy")
	{equipselect("HELMETGRADE=1;UPPERGRADE=1;GLOVEGRADE=1;BOOTGRADE=1;HELMETA=7;UPPERA=14;BOOTA=7;GLOVEA=7");}
else if (setbonus && fullset=="Tallum_Light")
	{equipselect("HELMETGRADE=1;UPPERGRADE=1;GLOVEGRADE=1;BOOTGRADE=1;HELMETA=7;UPPERA=13;BOOTA=7;GLOVEA=7");}
else if (setbonus && fullset=="Tallum_Robe")
	{equipselect("HELMETGRADE=1;UPPERGRADE=1;LOWERGRADE=1;GLOVEGRADE=1;BOOTGRADE=1;HELMETA=7;UPPERA=15;LOWERA=3;BOOTA=7;GLOVEA=7");}
else if (setbonus && fullset=="Avadon_Heavy")
	{equipselect("SHIELDGRADE=2;HELMETGRADE=2;UPPERGRADE=2;LOWERGRADE=2;GLOVEGRADE=2;BOOTGRADE=2;SHIELDB=1;HELMETB=1;UPPERB=1;LOWERB=1;BOOTB=1;GLOVEB=1");}
else if (setbonus && fullset=="Avadon_Light")
	{equipselect("HELMETGRADE=2;UPPERGRADE=2;GLOVEGRADE=2;BOOTGRADE=2;HELMETB=1;UPPERB=2;BOOTB=1;GLOVEB=1");}
else if (setbonus && fullset=="Avadon_Robe")
	{equipselect("HELMETGRADE=2;UPPERGRADE=2;GLOVEGRADE=2;BOOTGRADE=2;HELMETB=1;UPPERB=3;BOOTB=1;GLOVEB=1");}
else if (setbonus && fullset=="Blue_Wolf_Heavy")
	{equipselect("HELMETGRADE=2;UPPERGRADE=2;LOWERGRADE=2;GLOVEGRADE=2;BOOTGRADE=2;HELMETB=2;UPPERB=4;LOWERB=2;BOOTB=2;GLOVEB=2");}
else if (setbonus && fullset=="Blue_Wolf_Light")
	{equipselect("HELMETGRADE=2;UPPERGRADE=2;GLOVEGRADE=2;BOOTGRADE=2;HELMETB=2;UPPERB=5;BOOTB=2;GLOVEB=2");}
else if (setbonus && fullset=="Blue_Wolf_Robe")
	{equipselect("HELMETGRADE=2;UPPERGRADE=2;LOWERGRADE=2;GLOVEGRADE=2;BOOTGRADE=2;HELMETB=2;UPPERB=6;LOWERB=3;BOOTB=2;GLOVEB=2");}
else if (setbonus && fullset=="Doom_Heavy")
	{equipselect("SHIELDGRADE=2;HELMETGRADE=2;UPPERGRADE=2;GLOVEGRADE=2;BOOTGRADE=2;SHIELDB=2;HELMETB=3;UPPERB=7;BOOTB=3;GLOVEB=3");}
else if (setbonus && fullset=="Doom_Light")
	{equipselect("HELMETGRADE=2;UPPERGRADE=2;GLOVEGRADE=2;BOOTGRADE=2;HELMETB=3;UPPERB=8;BOOTB=3;GLOVEB=3");}
else if (setbonus && fullset=="Doom_Robe")
	{equipselect("HELMETGRADE=2;UPPERGRADE=2;LOWERGRADE=2;GLOVEGRADE=2;BOOTGRADE=2;HELMETB=3;UPPERB=9;LOWERB=4;BOOTB=3;GLOVEB=3");}
else if (setbonus && fullset=="Zubei_Heavy")
	{equipselect("SHIELDGRADE=2;HELMETGRADE=2;UPPERGRADE=2;LOWERGRADE=2;GLOVEGRADE=2;BOOTGRADE=2;SHIELDB=3;HELMETB=4;UPPERB=11;LOWERB=6;BOOTB=4;GLOVEB=4");}
else if (setbonus && fullset=="Zubei_Light")
	{equipselect("HELMETGRADE=2;UPPERGRADE=2;LOWERGRADE=2;GLOVEGRADE=2;BOOTGRADE=2;HELMETB=4;UPPERB=12;LOWERB=7;BOOTB=4;GLOVEB=4");}
else if (setbonus && fullset=="Zubei_Robe")
	{equipselect("HELMETGRADE=2;UPPERGRADE=2;LOWERGRADE=2;GLOVEGRADE=2;BOOTGRADE=2;HELMETB=4;UPPERB=10;LOWERB=5;BOOTB=4;GLOVEB=4");}
else if (setbonus && fullset=="Chain_Mail")
	{equipselect("SHIELDGRADE=3;HELMETGRADE=3;UPPERGRADE=3;LOWERGRADE=3;SHIELDC=1;HELMETC=1;UPPERC=1;LOWERC=1");}
else if (setbonus && fullset=="Composite")
	{equipselect("SHIELDGRADE=3;HELMETGRADE=3;UPPERGRADE=3;SHIELDC=2;HELMETC=2;UPPERC=2");}
else if (setbonus && fullset=="Full_Plate")
	{equipselect("SHIELDGRADE=3;HELMETGRADE=3;UPPERGRADE=3;SHIELDC=5;HELMETC=3;UPPERC=7");}
else if (setbonus && fullset=="Mithril_Light")
	{equipselect("UPPERGRADE=3;LOWERGRADE=3;BOOTGRADE=3;UPPERC=9;LOWERC=8;BOOTC=11");}
else if (setbonus && fullset=="Plated_Leather")
	{equipselect("UPPERGRADE=3;LOWERGRADE=3;BOOTGRADE=3;UPPERC=10;LOWERC=6;BOOTC=12");}
else if (setbonus && fullset=="Theca")
	{equipselect("UPPERGRADE=3;LOWERGRADE=3;BOOTGRADE=3;UPPERC=13;LOWERC=9;BOOTC=14");}
else if (setbonus && fullset=="Drake")
	{equipselect("UPPERGRADE=3;BOOTGRADE=3;UPPERC=5;BOOTC=7");}
else if (setbonus && fullset=="Karmian")
	{equipselect("UPPERGRADE=3;LOWERGRADE=3;GLOVEGRADE=3;UPPERC=8;LOWERC=5;GLOVEC=8");}
else if (setbonus && fullset=="Demon")
	{equipselect("UPPERGRADE=3;LOWERGRADE=3;GLOVEGRADE=3;UPPERC=3;LOWERC=2;GLOVEC=2");}
else if (setbonus && fullset=="Divine")
	{equipselect("UPPERGRADE=3;LOWERGRADE=3;GLOVEGRADE=3;UPPERC=4;LOWERC=3;GLOVEC=3");}
else if (setbonus && fullset=="Clan_Oath_Heavy")
	{equipselect("HELMETGRADE=4;UPPERGRADE=4;BOOTGRADE=4;GLOVEGRADE=4;HELMETD=5;UPPERD=5;BOOTD=7;GLOVED=2");}
else if (setbonus && fullset=="Clan_Oath_Light")
	{equipselect("HELMETGRADE=4;UPPERGRADE=4;BOOTGRADE=4;GLOVEGRADE=4;HELMETD=6;UPPERD=4;BOOTD=6;GLOVED=3");}
else if (setbonus && fullset=="Clan_Oath_Robe")
	{equipselect("HELMETGRADE=4;UPPERGRADE=4;BOOTGRADE=4;GLOVEGRADE=4;HELMETD=4;UPPERD=3;BOOTD=8;GLOVED=4");}
else if (setbonus && fullset=="Mithril_Heavy")
	{equipselect("SHIELDGRADE=4;HELMETGRADE=4;UPPERGRADE=4;LOWERGRADE=4;SHIELDD=4;HELMETD=7;UPPERD=14;LOWERD=11");}
else if (setbonus && fullset=="Brigandine")
	{equipselect("SHIELDGRADE=4;HELMETGRADE=4;UPPERGRADE=4;LOWERGRADE=4;SHIELDD=2;HELMETD=2;UPPERD=2;LOWERD=1");}
else if (setbonus && fullset=="Reinforced_Leather")
	{equipselect("UPPERGRADE=4;LOWERGRADE=4;BOOTGRADE=4;UPPERD=18;LOWERD=17;BOOTD=14");}
else if (setbonus && fullset=="Manticore")
	{equipselect("UPPERGRADE=4;LOWERGRADE=4;BOOTGRADE=4;UPPERD=12;LOWERD=9;BOOTD=12");}
else if (setbonus && fullset=="Knowledge")
	{equipselect("UPPERGRADE=4;LOWERGRADE=4;GLOVEGRADE=4;UPPERD=23;LOWERD=19;GLOVED=8");}
else if (setbonus && fullset=="Elven_Mithril")
	{equipselect("UPPERGRADE=4;LOWERGRADE=4;GLOVEGRADE=4;UPPERD=15;LOWERD=13;GLOVED=5");}
else if (setbonus && fullset=="Devotion")
	{equipselect("HELMETGRADE=5;UPPERGRADE=5;LOWERGRADE=5;HELMETN=4;UPPERN=14;LOWERN=14");}
else if (setbonus && fullset=="Wooden")
	{equipselect("HELMETGRADE=5;UPPERGRADE=5;LOWERGRADE=5;HELMETN=5;UPPERN=16;LOWERN=16");}
var fullmdef=d.gI("FULLMDEF").value
if (setjewelry && fullmdef=="Unsealed_Tateossian")
	{equipselect("NECKLACEGRADE=0;EARRING1GRADE=0;EARRING2GRADE=0;RING1GRADE=0;RING2GRADE=0;NECKLACES=3;EARRING1S=3;EARRING2S=3;RING1S=3;RING2S=3");}
else if (setjewelry && fullmdef=="Sealed_Tateossian")
	{equipselect("NECKLACEGRADE=0;EARRING1GRADE=0;EARRING2GRADE=0;RING1GRADE=0;RING2GRADE=0;NECKLACES=2;EARRING1S=2;EARRING2S=2;RING1S=2;RING2S=2");}
else if (setjewelry && fullmdef=="Unsealed_Majestic")
	{equipselect("NECKLACEGRADE=1;EARRING1GRADE=1;EARRING2GRADE=1;RING1GRADE=1;RING2GRADE=1;NECKLACEA=2;EARRING1A=2;EARRING2A=2;RING1A=1;RING2A=1");}
else if (setjewelry && fullmdef=="Sealed_Majestic")
	{equipselect("NECKLACEGRADE=1;EARRING1GRADE=1;EARRING2GRADE=1;RING1GRADE=1;RING2GRADE=1;NECKLACEA=4;EARRING1A=4;EARRING2A=4;RING1A=4;RING2A=4");}
else if (setjewelry && fullmdef=="Black_Ore")
	{equipselect("NECKLACEGRADE=2;EARRING1GRADE=2;EARRING2GRADE=2;RING1GRADE=2;RING2GRADE=2;NECKLACEB=2;EARRING1B=2;EARRING2B=2;RING1B=2;RING2B=2");}
else if (setjewelry && fullmdef=="Top_C")
	{equipselect("NECKLACEGRADE=3;EARRING1GRADE=3;EARRING2GRADE=3;RING1GRADE=3;RING2GRADE=3;NECKLACEC=2;EARRING1C=4;EARRING2C=4;RING1C=3;RING2C=3");}
else if (setjewelry && fullmdef=="Top_Lux")
	{equipselect("NECKLACEGRADE=3;EARRING1GRADE=3;EARRING2GRADE=3;RING1GRADE=3;RING2GRADE=3;NECKLACEC=3;EARRING1C=1;EARRING2C=1;RING1C=2;RING2C=2");}
else if (setjewelry && fullmdef=="Top_D")
	{equipselect("NECKLACEGRADE=4;EARRING1GRADE=4;EARRING2GRADE=4;RING1GRADE=4;RING2GRADE=4;NECKLACED=4;EARRING1D=3;EARRING2D=3;RING1D=4;RING2D=4");}
else if (setjewelry && fullmdef=="Elven")
	{equipselect("NECKLACEGRADE=4;EARRING1GRADE=4;EARRING2GRADE=4;RING1GRADE=4;RING2GRADE=4;NECKLACED=1;EARRING1D=1;EARRING2D=1;RING1D=2;RING2D=2");}
else if (setjewelry && fullmdef=="Top_Non")
	{equipselect("NECKLACEGRADE=5;EARRING1GRADE=5;EARRING2GRADE=5;RING1GRADE=5;RING2GRADE=5;NECKLACEN=1;EARRING1N=3;EARRING2N=3;RING1N=1;RING2N=1");}

//Weapon hide/unhide stuff
var weapongrade=d.gI("WEAPONGRADE").value
if (weapongrade=="S")
	{modifystyles("WPNS=block;WPNA=none;WPNB=none;WPNC=none;WPNH=none;WPND=none;WPNN=none")}
else if (weapongrade=="A")
	{modifystyles("WPNS=none;WPNA=block;WPNB=none;WPNC=none;WPNH=none;WPND=none;WPNN=none")}
else if (weapongrade=="B")
	{modifystyles("WPNS=none;WPNA=none;WPNB=block;WPNC=none;WPNH=none;WPND=none;WPNN=none")}
else if (weapongrade=="C")
	{modifystyles("WPNS=none;WPNA=none;WPNB=none;WPNC=block;WPNH=none;WPND=none;WPNN=none")}
else if (weapongrade=="D")
	{modifystyles("WPNS=none;WPNA=none;WPNB=none;WPNC=none;WPNH=none;WPND=block;WPNN=none")}
else if (weapongrade=="N")
	{modifystyles("WPNS=none;WPNA=none;WPNB=none;WPNC=none;WPNH=none;WPND=none;WPNN=block")}
else if (weapongrade=="H")
	{modifystyles("WPNS=none;WPNA=none;WPNB=none;WPNC=none;WPNH=block;WPND=none;WPNN=none")}

//Shield hide/unhide stuff
var shieldgrade=d.gI("SHIELDGRADE").value
if (shieldgrade=="S")
	{modifystyles("SHIELDS=block;SHIELDA=none;SHIELDB=none;SHIELDC=none;SHIELDD=none;SHIELDN=none")}
else if (shieldgrade=="A")
	{modifystyles("SHIELDS=none;SHIELDA=block;SHIELDB=none;SHIELDC=none;SHIELDD=none;SHIELDN=none")}
else if (shieldgrade=="B")
	{modifystyles("SHIELDS=none;SHIELDA=none;SHIELDB=block;SHIELDC=none;SHIELDD=none;SHIELDN=none")}
else if (shieldgrade=="C")
	{modifystyles("SHIELDS=none;SHIELDA=none;SHIELDB=none;SHIELDC=block;SHIELDD=none;SHIELDN=none")}
else if (shieldgrade=="D")
	{modifystyles("SHIELDS=none;SHIELDA=none;SHIELDB=none;SHIELDC=none;SHIELDD=block;SHIELDN=none")}
else if (shieldgrade=="N")
	{modifystyles("SHIELDS=none;SHIELDA=none;SHIELDB=none;SHIELDC=none;SHIELDD=none;SHIELDN=block")}

//Helmet hide/unhide stuff
var helmetgrade=d.gI("HELMETGRADE").value
if (helmetgrade=="S")
	{modifystyles("HELMETS=block;HELMETA=none;HELMETB=none;HELMETC=none;HELMETD=none;HELMETN=none")}
else if (helmetgrade=="A")
	{modifystyles("HELMETS=none;HELMETA=block;HELMETB=none;HELMETC=none;HELMETD=none;HELMETN=none")}
else if (helmetgrade=="B")
	{modifystyles("HELMETS=none;HELMETA=none;HELMETB=block;HELMETC=none;HELMETD=none;HELMETN=none")}
else if (helmetgrade=="C")
	{modifystyles("HELMETS=none;HELMETA=none;HELMETB=none;HELMETC=block;HELMETD=none;HELMETN=none")}
else if (helmetgrade=="D")
	{modifystyles("HELMETS=none;HELMETA=none;HELMETB=none;HELMETC=none;HELMETD=block;HELMETN=none")}
else if (helmetgrade=="N")
	{modifystyles("HELMETS=none;HELMETA=none;HELMETB=none;HELMETC=none;HELMETD=none;HELMETN=block")}

//Body (Lower) hide/unhide stuff
var lowergrade=d.gI("LOWERGRADE").value
if (lowergrade=="S")
	{modifystyles("LOWERS=block;LOWERA=none;LOWERB=none;LOWERC=none;LOWERD=none;LOWERN=none")}
else if (lowergrade=="A")
	{modifystyles("LOWERS=none;LOWERA=block;LOWERB=none;LOWERC=none;LOWERD=none;LOWERN=none")}
else if (lowergrade=="B")
	{modifystyles("LOWERS=none;LOWERA=none;LOWERB=block;LOWERC=none;LOWERD=none;LOWERN=none")}
else if (lowergrade=="C")
	{modifystyles("LOWERS=none;LOWERA=none;LOWERB=none;LOWERC=block;LOWERD=none;LOWERN=none")}
else if (lowergrade=="D")
	{modifystyles("LOWERS=none;LOWERA=none;LOWERB=none;LOWERC=none;LOWERD=block;LOWERN=none")}
else if (lowergrade=="N")
	{modifystyles("LOWERS=none;LOWERA=none;LOWERB=none;LOWERC=none;LOWERD=none;LOWERN=block")}

//Body (Upper) hide/unhide stuff
var uppergrade=d.gI("UPPERGRADE").value
if (uppergrade=="S")
	{modifystyles("UPPERS=block;UPPERA=none;UPPERB=none;UPPERC=none;UPPERD=none;UPPERN=none")}
else if (uppergrade=="A")
	{modifystyles("UPPERS=none;UPPERA=block;UPPERB=none;UPPERC=none;UPPERD=none;UPPERN=none")}
else if (uppergrade=="B")
	{modifystyles("UPPERS=none;UPPERA=none;UPPERB=block;UPPERC=none;UPPERD=none;UPPERN=none")}
else if (uppergrade=="C")
	{modifystyles("UPPERS=none;UPPERA=none;UPPERB=none;UPPERC=block;UPPERD=none;UPPERN=none")}
else if (uppergrade=="D")
	{modifystyles("UPPERS=none;UPPERA=none;UPPERB=none;UPPERC=none;UPPERD=block;UPPERN=none")}
else if (uppergrade=="N")
	{modifystyles("UPPERS=none;UPPERA=none;UPPERB=none;UPPERC=none;UPPERD=none;UPPERN=block")}

//Glove hide/unhide stuff
var glovegrade=d.gI("GLOVEGRADE").value
if (glovegrade=="S")
	{modifystyles("GLOVES=block;GLOVEA=none;GLOVEB=none;GLOVEC=none;GLOVED=none;GLOVEN=none")}
else if (glovegrade=="A")
	{modifystyles("GLOVES=none;GLOVEA=block;GLOVEB=none;GLOVEC=none;GLOVED=none;GLOVEN=none")}
else if (glovegrade=="B")
	{modifystyles("GLOVES=none;GLOVEA=none;GLOVEB=block;GLOVEC=none;GLOVED=none;GLOVEN=none")}
else if (glovegrade=="C")
	{modifystyles("GLOVES=none;GLOVEA=none;GLOVEB=none;GLOVEC=block;GLOVED=none;GLOVEN=none")}
else if (glovegrade=="D")
	{modifystyles("GLOVES=none;GLOVEA=none;GLOVEB=none;GLOVEC=none;GLOVED=block;GLOVEN=none")}
else if (glovegrade=="N")
	{modifystyles("GLOVES=none;GLOVEA=none;GLOVEB=none;GLOVEC=none;GLOVED=none;GLOVEN=block")}

//Boot hide/unhide stuff
var bootgrade=d.gI("BOOTGRADE").value
if (bootgrade=="S")
	{modifystyles("BOOTS=block;BOOTA=none;BOOTB=none;BOOTC=none;BOOTD=none;BOOTN=none")}
else if (bootgrade=="A")
	{modifystyles("BOOTS=none;BOOTA=block;BOOTB=none;BOOTC=none;BOOTD=none;BOOTN=none")}
else if (bootgrade=="B")
	{modifystyles("BOOTS=none;BOOTA=none;BOOTB=block;BOOTC=none;BOOTD=none;BOOTN=none")}
else if (bootgrade=="C")
	{modifystyles("BOOTS=none;BOOTA=none;BOOTB=none;BOOTC=block;BOOTD=none;BOOTN=none")}
else if (bootgrade=="D")
	{modifystyles("BOOTS=none;BOOTA=none;BOOTB=none;BOOTC=none;BOOTD=block;BOOTN=none")}
else if (bootgrade=="N")
	{modifystyles("BOOTS=none;BOOTA=none;BOOTB=none;BOOTC=none;BOOTD=none;BOOTN=block")}

//Necklace hide/unhide stuff
var necklacegrade=d.gI("NECKLACEGRADE").value
if (necklacegrade=="S")
	{modifystyles("NECKLACES=block;NECKLACEA=none;NECKLACEB=none;NECKLACEC=none;NECKLACED=none;NECKLACEN=none")}
else if (necklacegrade=="A")
	{modifystyles("NECKLACES=none;NECKLACEA=block;NECKLACEB=none;NECKLACEC=none;NECKLACED=none;NECKLACEN=none")}
else if (necklacegrade=="B")
	{modifystyles("NECKLACES=none;NECKLACEA=none;NECKLACEB=block;NECKLACEC=none;NECKLACED=none;NECKLACEN=none")}
else if (necklacegrade=="C")
	{modifystyles("NECKLACES=none;NECKLACEA=none;NECKLACEB=none;NECKLACEC=block;NECKLACED=none;NECKLACEN=none")}
else if (necklacegrade=="D")
	{modifystyles("NECKLACES=none;NECKLACEA=none;NECKLACEB=none;NECKLACEC=none;NECKLACED=block;NECKLACEN=none")}
else if (necklacegrade=="N")
	{modifystyles("NECKLACES=none;NECKLACEA=none;NECKLACEB=none;NECKLACEC=none;NECKLACED=none;NECKLACEN=block")}

//Earring1 hide/unhide stuff
var earring1grade=d.gI("EARRING1GRADE").value
if (earring1grade=="S")
	{modifystyles("EARRING1S=block;EARRING1A=none;EARRING1B=none;EARRING1C=none;EARRING1D=none;EARRING1N=none")}
else if (earring1grade=="A")
	{modifystyles("EARRING1S=none;EARRING1A=block;EARRING1B=none;EARRING1C=none;EARRING1D=none;EARRING1N=none")}
else if (earring1grade=="B")
	{modifystyles("EARRING1S=none;EARRING1A=none;EARRING1B=block;EARRING1C=none;EARRING1D=none;EARRING1N=none")}
else if (earring1grade=="C")
	{modifystyles("EARRING1S=none;EARRING1A=none;EARRING1B=none;EARRING1C=block;EARRING1D=none;EARRING1N=none")}
else if (earring1grade=="D")
	{modifystyles("EARRING1S=none;EARRING1A=none;EARRING1B=none;EARRING1C=none;EARRING1D=block;EARRING1N=none")}
else if (earring1grade=="N")
	{modifystyles("EARRING1S=none;EARRING1A=none;EARRING1B=none;EARRING1C=none;EARRING1D=none;EARRING1N=block")}

//Earring2 hide/unhide stuff
var earring2grade=d.gI("EARRING2GRADE").value
if (earring2grade=="S")
	{modifystyles("EARRING2S=block;EARRING2A=none;EARRING2B=none;EARRING2C=none;EARRING2D=none;EARRING2N=none")}
else if (earring2grade=="A")
	{modifystyles("EARRING2S=none;EARRING2A=block;EARRING2B=none;EARRING2C=none;EARRING2D=none;EARRING2N=none")}
else if (earring2grade=="B")
	{modifystyles("EARRING2S=none;EARRING2A=none;EARRING2B=block;EARRING2C=none;EARRING2D=none;EARRING2N=none")}
else if (earring2grade=="C")
	{modifystyles("EARRING2S=none;EARRING2A=none;EARRING2B=none;EARRING2C=block;EARRING2D=none;EARRING2N=none")}
else if (earring2grade=="D")
	{modifystyles("EARRING2S=none;EARRING2A=none;EARRING2B=none;EARRING2C=none;EARRING2D=block;EARRING2N=none")}
else if (earring2grade=="N")
	{modifystyles("EARRING2S=none;EARRING2A=none;EARRING2B=none;EARRING2C=none;EARRING2D=none;EARRING2N=block")}

//Ring1 hide/unhide stuff
var ring1grade=d.gI("RING1GRADE").value
if (ring1grade=="S")
	{modifystyles("RING1S=block;RING1A=none;RING1B=none;RING1C=none;RING1D=none;RING1N=none")}
else if (ring1grade=="A")
	{modifystyles("RING1S=none;RING1A=block;RING1B=none;RING1C=none;RING1D=none;RING1N=none")}
else if (ring1grade=="B")
	{modifystyles("RING1S=none;RING1A=none;RING1B=block;RING1C=none;RING1D=none;RING1N=none")}
else if (ring1grade=="C")
	{modifystyles("RING1S=none;RING1A=none;RING1B=none;RING1C=block;RING1D=none;RING1N=none")}
else if (ring1grade=="D")
	{modifystyles("RING1S=none;RING1A=none;RING1B=none;RING1C=none;RING1D=block;RING1N=none")}
else if (ring1grade=="N")
	{modifystyles("RING1S=none;RING1A=none;RING1B=none;RING1C=none;RING1D=none;RING1N=block")}

//Ring2 hide/unhide stuff
var ring2grade=d.gI("RING2GRADE").value
if (ring2grade=="S")
	{modifystyles("RING2S=block;RING2A=none;RING2B=none;RING2C=none;RING2D=none;RING2N=none")}
else if (ring2grade=="A")
	{modifystyles("RING2S=none;RING2A=block;RING2B=none;RING2C=none;RING2D=none;RING2N=none")}
else if (ring2grade=="B")
	{modifystyles("RING2S=none;RING2A=none;RING2B=block;RING2C=none;RING2D=none;RING2N=none")}
else if (ring2grade=="C")
	{modifystyles("RING2S=none;RING2A=none;RING2B=none;RING2C=block;RING2D=none;RING2N=none")}
else if (ring2grade=="D")
	{modifystyles("RING2S=none;RING2A=none;RING2B=none;RING2C=none;RING2D=block;RING2N=none")}
else if (ring2grade=="N")
	{modifystyles("RING2S=none;RING2A=none;RING2B=none;RING2C=none;RING2D=none;RING2N=block")}
}

function classskills()
{
//Racial Stats
var JOB=d.gI("class").value
if (JOB=="DA"||JOB=="GL"||JOB=="HE"||JOB=="HF"||JOB=="HK"||JOB=="PA"||JOB=="RO"||JOB=="TH"||JOB=="WD"||JOB=="WA")
	{race="HF"}
else if (JOB=="BI"||JOB=="CL"||JOB=="HM"||JOB=="NE"||JOB=="PP"||JOB=="SOR"||JOB=="WL"||JOB=="WI")
	{race="HM"}
else if (JOB=="EF"||JOB=="EK"||JOB=="EFS"||JOB=="PW"||JOB=="SW"||JOB=="TK"||JOB=="SR")
	{race="EF"}
else if (JOB=="ELS"||JOB=="EE"||JOB=="EM"||JOB=="EO"||JOB=="EW"||JOB=="SPS")
	{race="EM"}
else if (JOB=="AW"||JOB=="AS"||JOB=="BD"||JOB=="DF"||JOB=="PK"||JOB=="PR"||JOB=="SK")
	{race="DF"}
else if (JOB=="DM"||JOB=="DW"|JOB=="PS"||JOB=="SHE"|JOB=="SO"||JOB=="SPH")
	{race="DM"}
else if (JOB=="DE"||JOB=="MO"||JOB=="OF"||JOB=="OR"|JOB=="TY")
	{race="OF"}
else if (JOB=="OM"||JOB=="OS"||JOB=="OL"||JOB=="WC")
	{race="OM"}
else if (JOB=="AR"||JOB=="BH"||JOB=="DO"||JOB=="SC"||JOB=="WS")
	{race="DW"}

//Buff Hide/Unhide stuff
if (JOB=="GL"||JOB=="OR"||JOB=="WA")
	{
	d.gI("BTB2CHECK").style.display = 'block'
	d.gI("BTB2").style.display = 'block'
	d.gI("BTB1CHECK").checked=false
	d.gI("BTB1CHECK").style.display = 'none'
	d.gI("BTB1").style.display = 'none'
	d.gI("BTB3CHECK").checked=false
	d.gI("BTB3CHECK").style.display = 'none'
	d.gI("BTB3").style.display = 'none'
	}
else if (JOB=="WD"||JOB=="DE")
	{
	d.gI("BTB3CHECK").style.display = 'block'
	d.gI("BTB3").style.display = 'block'
	d.gI("BTB1CHECK").checked=false
	d.gI("BTB1CHECK").style.display = 'none'
	d.gI("BTB1").style.display = 'none'
	d.gI("BTB2CHECK").checked=false
	d.gI("BTB2CHECK").style.display = 'none'
	d.gI("BTB2").style.display = 'none'
	}
else
	{
	d.gI("BTB1CHECK").style.display = 'block'
	d.gI("BTB1").style.display = 'block'
	d.gI("BTB2CHECK").checked=false
	d.gI("BTB2CHECK").style.display = 'none'
	d.gI("BTB2").style.display = 'none'
	d.gI("BTB3CHECK").checked=false
	d.gI("BTB3CHECK").style.display = 'none'
	d.gI("BTB3").style.display = 'none'
	}
if (JOB=="HE"||JOB=="SR"||JOB=="PR")
	{
	d.gI("SAGCHECK").style.display = 'block'
	d.gI("SAG").style.display = 'block'
	}
else
	{
	d.gI("SAGCHECK").checked=false
	d.gI("SAGCHECK").style.display = 'none'
	d.gI("SAG").style.display = 'none'
	}
if (race=="DF"||race=="EF")
	{
	d.gI("MIGHT1CHECK").checked=false
	d.gI("MIGHT1CHECK").style.display = 'none'
	d.gI("MIGHT1").style.display = 'none'
	d.gI("MIGHT2CHECK").style.display = 'block'
	d.gI("MIGHT2").style.display = 'block'
	d.gI("SHIELD1CHECK").checked=false
	d.gI("SHIELD1CHECK").style.display = 'none'
	d.gI("SHIELD1").style.display = 'none'
	d.gI("SHIELD2CHECK").style.display = 'block'
	d.gI("SHIELD2").style.display = 'block'
	}
else
	{
	d.gI("MIGHT2CHECK").checked=false
	d.gI("MIGHT2CHECK").style.display = 'none'
	d.gI("MIGHT2").style.display = 'none'
	d.gI("MIGHT1CHECK").style.display = 'block'
	d.gI("MIGHT1").style.display = 'block'
	d.gI("SHIELD2CHECK").checked=false
	d.gI("SHIELD2CHECK").style.display = 'none'
	d.gI("SHIELD2").style.display = 'none'
	d.gI("SHIELD1CHECK").style.display = 'block'
	d.gI("SHIELD1").style.display = 'block'
	}
if (JOB=="TK"||JOB=="SW"||JOB=="SR"||JOB=="PW")
	{
	d.gI("MB1CHECK").checked=false
	d.gI("MB1CHECK").style.display = 'none'
	d.gI("MB1").style.display = 'none'
	d.gI("MB2CHECK").style.display = 'block'
	d.gI("MB2").style.display = 'block'
	d.gI("MB3CHECK").checked=false
	d.gI("MB3CHECK").style.display = 'none'
	d.gI("MB3").style.display = 'none'
	}
else if (JOB=="DA"||JOB=="PA")
	{
	d.gI("MB1CHECK").checked=false
	d.gI("MB1CHECK").style.display = 'none'
	d.gI("MB1").style.display = 'none'
	d.gI("MB2CHECK").checked=false
	d.gI("MB2CHECK").style.display = 'none'
	d.gI("MB2").style.display = 'none'
	d.gI("MB3CHECK").style.display = 'block'
	d.gI("MB3").style.display = 'block'
	}
else
	{
	d.gI("MB2CHECK").checked=false
	d.gI("MB2CHECK").style.display = 'none'
	d.gI("MB2").style.display = 'none'
	d.gI("MB1CHECK").style.display = 'block'
	d.gI("MB1").style.display = 'block'
	d.gI("MB3CHECK").checked=false
	d.gI("MB3CHECK").style.display = 'none'
	d.gI("MB3").style.display = 'none'
	}
if (JOB=="OR")
	{
	d.gI("FRENZY1CHECK").style.display = 'block'
	d.gI("FRENZY1").style.display = 'block'
	d.gI("FRENZY2CHECK").checked=false
	d.gI("FRENZY2CHECK").style.display = 'none'
	d.gI("FRENZY2").style.display = 'none'
	d.gI("RAGE1CHECK").style.display = 'block'
	d.gI("RAGE1").style.display = 'block'
	d.gI("RAGE2CHECK").checked=false
	d.gI("RAGE2CHECK").style.display = 'none'
	d.gI("RAGE2").style.display = 'none'
	d.gI("GUTS1CHECK").style.display = 'block'
	d.gI("GUTS1").style.display = 'block'
	d.gI("GUTS2CHECK").checked=false
	d.gI("GUTS2CHECK").style.display = 'none'
	d.gI("GUTS2").style.display = 'none'
	}
else if (JOB=="DE")
	{
	d.gI("FRENZY2CHECK").style.display = 'block'
	d.gI("FRENZY2").style.display = 'block'
	d.gI("FRENZY1CHECK").checked=false
	d.gI("FRENZY1CHECK").style.display = 'none'
	d.gI("FRENZY1").style.display = 'none'
	d.gI("RAGE2CHECK").style.display = 'block'
	d.gI("RAGE2").style.display = 'block'
	d.gI("RAGE1CHECK").checked=false
	d.gI("RAGE1CHECK").style.display = 'none'
	d.gI("RAGE1").style.display = 'none'
	d.gI("GUTS2CHECK").style.display = 'block'
	d.gI("GUTS2").style.display = 'block'
	d.gI("GUTS1CHECK").checked=false
	d.gI("GUTS1CHECK").style.display = 'none'
	d.gI("GUTS1").style.display = 'none'
	}
else
	{
	d.gI("FRENZY1CHECK").checked=false
	d.gI("FRENZY1CHECK").style.display = 'none'
	d.gI("FRENZY1").style.display = 'none'
	d.gI("FRENZY2CHECK").checked=false
	d.gI("FRENZY2CHECK").style.display = 'none'
	d.gI("FRENZY2").style.display = 'none'
	d.gI("RAGE1CHECK").checked=false
	d.gI("RAGE1CHECK").style.display = 'none'
	d.gI("RAGE1").style.display = 'none'
	d.gI("RAGE2CHECK").checked=false
	d.gI("RAGE2CHECK").style.display = 'none'
	d.gI("RAGE2").style.display = 'none'
	d.gI("GUTS1CHECK").checked=false
	d.gI("GUTS1CHECK").style.display = 'none'
	d.gI("GUTS1").style.display = 'none'
	d.gI("GUTS2CHECK").checked=false
	d.gI("GUTS2CHECK").style.display = 'none'
	d.gI("GUTS2").style.display = 'none'
	}
if (JOB=="WA"||JOB=="WD")
	{
	d.gI("WARCRY1CHECK").style.display = 'block'
	d.gI("WARCRY1").style.display = 'block'
	d.gI("WARCRY2CHECK").checked=false
	d.gI("WARCRY2CHECK").style.display = 'none'
	d.gI("WARCRY2").style.display = 'none'
	}
else if (JOB=="GL")
	{
	d.gI("WARCRY2CHECK").style.display = 'block'
	d.gI("WARCRY2").style.display = 'block'
	d.gI("WARCRY1CHECK").checked=false
	d.gI("WARCRY1CHECK").style.display = 'none'
	d.gI("WARCRY1").style.display = 'none'
	}
else
	{
	d.gI("WARCRY1CHECK").checked=false
	d.gI("WARCRY1CHECK").style.display = 'none'
	d.gI("WARCRY1").style.display = 'none'
	d.gI("WARCRY2CHECK").checked=false
	d.gI("WARCRY2CHECK").style.display = 'none'
	d.gI("WARCRY2").style.display = 'none'
	}
if (JOB=="HK")
	{
	d.gI("MAJ1CHECK").style.display = 'block'
	d.gI("MAJ1").style.display = 'block'
	d.gI("MAJ2CHECK").checked=false
	d.gI("MAJ2CHECK").style.display = 'none'
	d.gI("MAJ2").style.display = 'none'
	}
else if (JOB=="PA"||JOB=="DA")
	{
	d.gI("MAJ2CHECK").style.display = 'block'
	d.gI("MAJ2").style.display = 'block'
	d.gI("MAJ1CHECK").checked=false
	d.gI("MAJ1CHECK").style.display = 'none'
	d.gI("MAJ1").style.display = 'none'
	}
else
	{
	d.gI("MAJ1CHECK").checked=false
	d.gI("MAJ1CHECK").style.display = 'none'
	d.gI("MAJ1").style.display = 'none'
	d.gI("MAJ2CHECK").checked=false
	d.gI("MAJ2CHECK").style.display = 'none'
	d.gI("MAJ2").style.display = 'none'
	}
if (JOB=="HE")
	{
	d.gI("HECHECK").style.display = 'block'
	d.gI("HE").style.display = 'block'
	}
else
	{
	d.gI("HECHECK").checked=false
	d.gI("HECHECK").style.display = 'none'
	d.gI("HE").style.display = 'none'
	}
if (JOB=="HE"||JOB=="TH"||JOB=="SR"||JOB=="PW"||JOB=="PR"||JOB=="AW")
	{
	d.gI("UECHECK").style.display = 'block'
	d.gI("UE").style.display = 'block'
	}
else
	{
	d.gI("UECHECK").checked=false
	d.gI("UECHECK").style.display = 'none'
	d.gI("UE").style.display = 'none'
	}
if (JOB=="HE"||JOB=="TH"||JOB=="SR"||JOB=="PW"||JOB=="PR"||JOB=="AW"||JOB=="GL"||JOB=="WD")
	{
	d.gI("VICIOUSSTANCECHECK").style.display = 'block'
	d.gI("VICIOUSSTANCE").style.display = 'block'
	}
else
	{
	d.gI("VICIOUSSTANCECHECK").checked=false
	d.gI("VICIOUSSTANCECHECK").style.display = 'none'
	d.gI("VICIOUSSTANCE").style.display = 'none'
	}
if (JOB=="SR"||JOB=="PR")
	{
	d.gI("EVSHTCHECK").style.display = 'block'
	d.gI("EVSHT").style.display = 'block'
	}
else
	{
	d.gI("EVSHTCHECK").checked=false
	d.gI("EVSHTCHECK").style.display = 'none'
	d.gI("EVSHT").style.display = 'none'
	}
if (JOB=="HE"||JOB=="RO")
	{
	d.gI("DASH1CHECK").style.display = 'block'
	d.gI("DASH1").style.display = 'block'
	d.gI("DASH2CHECK").checked=false
	d.gI("DASH2CHECK").style.display = 'none'
	d.gI("DASH2").style.display = 'none'
	}
else if (JOB=="TH")
	{
	d.gI("DASH2CHECK").style.display = 'block'
	d.gI("DASH2").style.display = 'block'
	d.gI("DASH1CHECK").checked=false
	d.gI("DASH1CHECK").style.display = 'none'
	d.gI("DASH1").style.display = 'none'
	}
else
	{
	d.gI("DASH1CHECK").checked=false
	d.gI("DASH1CHECK").style.display = 'none'
	d.gI("DASH1").style.display = 'none'
	d.gI("DASH2CHECK").checked=false
	d.gI("DASH2CHECK").style.display = 'none'
	d.gI("DASH2").style.display = 'none'
	}
if (JOB=="PW"||JOB=="AW")
	{
	d.gI("BLINDINGCHECK").style.display = 'block'
	d.gI("BLINDING").style.display = 'block'
	}
else
	{
	d.gI("BLINDINGCHECK").checked=false
	d.gI("BLINDINGCHECK").style.display = 'none'
	d.gI("BLINDING").style.display = 'none'
	}
if (JOB=="TH"||JOB=="PW"||JOB=="AW")
	{
	d.gI("RAPID1CHECK").style.display = 'block'
	d.gI("RAPID1").style.display = 'block'
	d.gI("RAPID2CHECK").checked=false
	d.gI("RAPID2CHECK").style.display = 'none'
	d.gI("RAPID2").style.display = 'none'
	}
else if (JOB=="HE"||JOB=="SR"||JOB=="PR")
	{
	d.gI("RAPID2CHECK").style.display = 'block'
	d.gI("RAPID2").style.display = 'block'
	d.gI("RAPID1CHECK").checked=false
	d.gI("RAPID1CHECK").style.display = 'none'
	d.gI("RAPID1").style.display = 'none'
	}
else
	{
	d.gI("RAPID1CHECK").checked=false
	d.gI("RAPID1CHECK").style.display = 'none'
	d.gI("RAPID1").style.display = 'none'
	d.gI("RAPID2CHECK").checked=false
	d.gI("RAPID2CHECK").style.display = 'none'
	d.gI("RAPID2").style.display = 'none'
	}
if (JOB=="GL")
	{
	d.gI("DUELCHECK").style.display = 'block'
	d.gI("DUEL").style.display = 'block'
	}
else
	{
	d.gI("DUELCHECK").checked=false
	d.gI("DUELCHECK").style.display = 'none'
	d.gI("DUEL").style.display = 'none'
	}
if (JOB=="WD")
	{
	d.gI("TFCHECK").style.display = 'block'
	d.gI("TF").style.display = 'block'
	}
else
	{
	d.gI("TFCHECK").checked=false
	d.gI("TFCHECK").style.display = 'none'
	d.gI("TF").style.display = 'none'
	}
if (JOB=="HK"||JOB=="EK"||JOB=="SW"||JOB=="PK"||JOB=="BD")
	{
	d.gI("UD1CHECK").style.display = 'block'
	d.gI("UD1").style.display = 'block'
	d.gI("UD2CHECK").checked=false
	d.gI("UD2CHECK").style.display = 'none'
	d.gI("UD2").style.display = 'none'
	d.gI("SHIELDFORTRESSCHECK").checked=false
	d.gI("SHIELDFORTRESSCHECK").style.display = 'none'
	d.gI("SHIELDFORTRESS").style.display = 'none'
	}
else if (JOB=="PA"||JOB=="DA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("UD2CHECK").style.display = 'block'
	d.gI("UD2").style.display = 'block'
	d.gI("UD1CHECK").checked=false
	d.gI("UD1CHECK").style.display = 'none'
	d.gI("UD1").style.display = 'none'
	d.gI("SHIELDFORTRESSCHECK").style.display = 'block'
	d.gI("SHIELDFORTRESS").style.display = 'block'
	}
else
	{
	d.gI("UD1CHECK").checked=false
	d.gI("UD1CHECK").style.display = 'none'
	d.gI("UD1").style.display = 'none'
	d.gI("UD2CHECK").checked=false
	d.gI("UD2CHECK").style.display = 'none'
	d.gI("UD2").style.display = 'none'
	d.gI("SHIELDFORTRESSCHECK").checked=false
	d.gI("SHIELDFORTRESSCHECK").style.display = 'none'
	d.gI("SHIELDFORTRESS").style.display = 'none'
	}
if (JOB=="HK"||JOB=="EK"||JOB=="PK")
	{
	d.gI("UD1CHECK").style.display = 'block'
	d.gI("UD1").style.display = 'block'
	d.gI("UD2CHECK").checked=false
	d.gI("UD2CHECK").style.display = 'none'
	d.gI("UD2").style.display = 'none'
	d.gI("SHIELDFORTRESSCHECK").checked=false
	d.gI("SHIELDFORTRESSCHECK").style.display = 'none'
	d.gI("SHIELDFORTRESS").style.display = 'none'
	d.gI("FOCUSMIND1CHECK").style.display = 'block'
	d.gI("FOCUSMIND1").style.display = 'block'
	d.gI("FOCUSMIND2CHECK").checked=false
	d.gI("FOCUSMIND2CHECK").style.display = 'none'
	d.gI("FOCUSMIND2").style.display = 'none'
	}
else if (JOB=="PA"||JOB=="DA"||JOB=="TK"||JOB=="SK"||JOB=="SW"||JOB=="BD")
	{
	d.gI("UD2CHECK").style.display = 'block'
	d.gI("UD2").style.display = 'block'
	d.gI("UD1CHECK").checked=false
	d.gI("UD1CHECK").style.display = 'none'
	d.gI("UD1").style.display = 'none'
	d.gI("SHIELDFORTRESSCHECK").style.display = 'block'
	d.gI("SHIELDFORTRESS").style.display = 'block'
	d.gI("FOCUSMIND2CHECK").style.display = 'block'
	d.gI("FOCUSMIND2").style.display = 'block'
	d.gI("FOCUSMIND1CHECK").checked=false
	d.gI("FOCUSMIND1CHECK").style.display = 'none'
	d.gI("FOCUSMIND1").style.display = 'none'
	}
else
	{
	d.gI("UD1CHECK").checked=false
	d.gI("UD1CHECK").style.display = 'none'
	d.gI("UD1").style.display = 'none'
	d.gI("UD2CHECK").checked=false
	d.gI("UD2CHECK").style.display = 'none'
	d.gI("UD2").style.display = 'none'
	d.gI("SHIELDFORTRESSCHECK").checked=false
	d.gI("SHIELDFORTRESSCHECK").style.display = 'none'
	d.gI("SHIELDFORTRESS").style.display = 'none'
	d.gI("FOCUSMIND1CHECK").checked=false
	d.gI("FOCUSMIND1CHECK").style.display = 'none'
	d.gI("FOCUSMIND1").style.display = 'none'
	d.gI("FOCUSMIND2CHECK").checked=false
	d.gI("FOCUSMIND2CHECK").style.display = 'none'
	d.gI("FOCUSMIND2").style.display = 'none'
	}
if (JOB=="PR")
	{
	d.gI("DEADEYECHECK").style.display = 'block'
	d.gI("DEADEYE").style.display = 'block'
	}
else
	{
	d.gI("DEADEYECHECK").checked=false
	d.gI("DEADEYECHECK").style.display = 'none'
	d.gI("DEADEYE").style.display = 'none'
	}
if (JOB=="MO")
	{
	d.gI("TOTEM1CHECK").style.display = 'block'
	d.gI("TOTEM1").style.display = 'block'
	d.gI("TOTEM2CHECK").checked=false
	d.gI("TOTEM2CHECK").style.display = 'none'
	d.gI("TOTEM2").style.display = 'none'
	}
else if (JOB=="TY")
	{
	d.gI("TOTEM2CHECK").style.display = 'block'
	d.gI("TOTEM2").style.display = 'block'
	d.gI("TOTEM1CHECK").checked=false
	d.gI("TOTEM1CHECK").style.display = 'none'
	d.gI("TOTEM1").style.display = 'none'
	}
else
	{
	d.gI("TOTEM1CHECK").checked=false
	d.gI("TOTEM1CHECK").style.display = 'none'
	d.gI("TOTEM1").style.display = 'none'
	d.gI("TOTEM2CHECK").checked=false
	d.gI("TOTEM2CHECK").style.display = 'none'
	d.gI("TOTEM2").style.display = 'none'
	}
if (JOB=="HE")
	{
	d.gI("SNIPECHECK").style.display = 'block'
	d.gI("SNIPE").style.display = 'block'
	}
else
	{
	d.gI("SNIPECHECK").checked=false
	d.gI("SNIPECHECK").style.display = 'none'
	d.gI("SNIPE").style.display = 'none'
	}
if (JOB=="OL"||JOB=="SOR"||JOB=="SPS"||JOB=="NE"||JOB=="SPH")
	{
	d.gI("ARPCHECK").style.display = 'block'
	d.gI("ARP").style.display = 'block'
	}
else
	{
	d.gI("ARPCHECK").checked=false
	d.gI("ARPCHECK").style.display = 'none'
	d.gI("ARP").style.display = 'none'
	}
if (JOB=="OM")
	{
	d.gI("SOUL1CHECK").style.display = 'block'
	d.gI("SOUL1").style.display = 'block'
	d.gI("SOUL2CHECK").checked=false
	d.gI("SOUL2CHECK").style.display = 'none'
	d.gI("SOUL2").style.display = 'none'
	d.gI("SOUL3CHECK").checked=false
	d.gI("SOUL3CHECK").style.display = 'none'
	d.gI("SOUL3").style.display = 'none'
	}
else if (JOB=="OS")
	{
	d.gI("SOUL2CHECK").style.display = 'block'
	d.gI("SOUL2").style.display = 'block'
	d.gI("SOUL1CHECK").checked=false
	d.gI("SOUL1CHECK").style.display = 'none'
	d.gI("SOUL1").style.display = 'none'
	d.gI("SOUL3CHECK").checked=false
	d.gI("SOUL3CHECK").style.display = 'none'
	d.gI("SOUL3").style.display = 'none'
	}
else if (JOB=="OL"||JOB=="WC")
	{
	d.gI("SOUL3CHECK").style.display = 'block'
	d.gI("SOUL3").style.display = 'block'
	d.gI("SOUL1CHECK").checked=false
	d.gI("SOUL1CHECK").style.display = 'none'
	d.gI("SOUL1").style.display = 'none'
	d.gI("SOUL2CHECK").checked=false
	d.gI("SOUL2CHECK").style.display = 'none'
	d.gI("SOUL2").style.display = 'none'
	}
else
	{
	d.gI("SOUL1CHECK").checked=false
	d.gI("SOUL1CHECK").style.display = 'none'
	d.gI("SOUL1").style.display = 'none'
	d.gI("SOUL2CHECK").checked=false
	d.gI("SOUL2CHECK").style.display = 'none'
	d.gI("SOUL2").style.display = 'none'
	d.gI("SOUL3CHECK").checked=false
	d.gI("SOUL3CHECK").style.display = 'none'
	d.gI("SOUL3").style.display = 'none'
	}
if (JOB=="SK"||JOB=="TK")
	{
	d.gI("GSCHECK").style.display = 'block'
	d.gI("GS").style.display = 'block'
	d.gI("AEGISCHECK").style.display = 'block'
	d.gI("AEGIS").style.display = 'block'
	}
else
	{
	d.gI("GSCHECK").checked=false
	d.gI("GSCHECK").style.display = 'none'
	d.gI("GS").style.display = 'none'
	d.gI("AEGISCHECK").checked=false
	d.gI("AEGISCHECK").style.display = 'none'
	d.gI("AEGIS").style.display = 'none'
	}
if (JOB=="OL")
	{
	d.gI("SGCHECK").style.display = 'block'
	d.gI("SG").style.display = 'block'
	}
else
	{
	d.gI("SGCHECK").checked=false
	d.gI("SGCHECK").style.display = 'none'
	d.gI("SG").style.display = 'none'
	}
if (JOB=="DE"||JOB=="TY")
	{
	d.gI("ZEALOTCHECK").style.display = 'block'
	d.gI("ZEALOT").style.display = 'block'
	}
else
	{
	d.gI("ZEALOTCHECK").checked=false
	d.gI("ZEALOTCHECK").style.display = 'none'
	d.gI("ZEALOT").style.display = 'none'
	}
if (JOB=="WA"||JOB=="GL"||JOB=="WD"||JOB=="RO"||JOB=="TH"||JOB=="HE"||JOB=="EFS"||JOB=="PW"||JOB=="SR"||JOB=="AS"||JOB=="PR"||JOB=="AW"||JOB=="OR"||JOB=="DE")
	{
	d.gI("ACCTCHECK").style.display = 'block'
	d.gI("ACCT").style.display = 'block'
	}
else
	{
	d.gI("ACCTCHECK").checked=false
	d.gI("ACCTCHECK").style.display = 'none'
	d.gI("ACCT").style.display = 'none'
	}
if (JOB=="BH"||JOB=="WS"||JOB=="DE"||JOB=="WD")
	{
	d.gI("POLEACCCHECK").style.display = 'block'
	d.gI("POLEACC").style.display = 'block'
	}
else
	{
	d.gI("POLEACCCHECK").checked=false
	d.gI("POLEACCCHECK").style.display = 'none'
	d.gI("POLEACC").style.display = 'none'
	}
if (JOB=="WD")
	{
	d.gI("FACHECK").style.display = 'block'
	d.gI("FA").style.display = 'block'
	}
else
	{
	d.gI("FACHECK").checked=false
	d.gI("FACHECK").style.display = 'none'
	d.gI("FA").style.display = 'none'
	}
if (JOB=="PW"||JOB=="AW")
	{
	d.gI("FOCDCHECK").style.display = 'block'
	d.gI("FOCD").style.display = 'block'
	}
else
	{
	d.gI("FOCDCHECK").checked=false
	d.gI("FOCDCHECK").style.display = 'none'
	d.gI("FOCD").style.display = 'none'
	}
if (JOB=="PW"||JOB=="AW"||JOB=="TH")
	{
	d.gI("SMCHECK").style.display = 'block'
	d.gI("SM").style.display = 'block'
	}
else
	{
	d.gI("SMCHECK").checked=false
	d.gI("SMCHECK").style.display = 'none'
	d.gI("SM").style.display = 'none'
	}
if (JOB=="TH")
	{
	d.gI("STEALTHCHECK").style.display = 'block'
	d.gI("STEALTH").style.display = 'block'
	}
else
	{
	d.gI("STEALTHCHECK").checked=false
	d.gI("STEALTHCHECK").style.display = 'none'
	d.gI("STEALTH").style.display = 'none'
	}
if (JOB=="TY")
	{
	d.gI("FFURYCHECK").style.display = 'block'
	d.gI("FFURY").style.display = 'block'
	}
else
	{
	d.gI("FFURYCHECK").checked=false
	d.gI("FFURYCHECK").style.display = 'none'
	d.gI("FFURY").style.display = 'none'
	}
if (JOB=="WL"||JOB=="ELS"||JOB=="PS")
	{
	d.gI("ARAGICHECK").style.display = 'block'
	d.gI("ARAGI").style.display = 'block'
	}
else
	{
	d.gI("ARAGICHECK").checked=false
	d.gI("ARAGICHECK").style.display = 'none'
	d.gI("ARAGI").style.display = 'none'
	}
if (JOB=="WC"||JOB=="SHE"||JOB=="BI"||JOB=="EE"||JOB=="PP")
	{
	d.gI("ARWISCHECK").style.display = 'block'
	d.gI("ARWIS").style.display = 'block'
	}
else
	{
	d.gI("ARWISCHECK").checked=false
	d.gI("ARWISCHECK").style.display = 'none'
	d.gI("ARWIS").style.display = 'none'
	}
if (JOB=="SR")
	{
	d.gI("RAPIDFIRECHECK").style.display = 'block'
	d.gI("RAPIDFIRE").style.display = 'block'
	}
else
	{
	d.gI("RAPIDFIRECHECK").checked=false
	d.gI("RAPIDFIRECHECK").style.display = 'none'
	d.gI("RAPIDFIRE").style.display = 'none'
	}
if (JOB=="WD"||JOB=="WS"||JOB=="BH")
	{
	d.gI("PARRYCHECK").style.display = 'block'
	d.gI("PARRY").style.display = 'block'
	}
else
	{
	d.gI("PARRYCHECK").checked=false
	d.gI("PARRYCHECK").style.display = 'none'
	d.gI("PARRY").style.display = 'none'
	}
if (JOB=="TY"||JOB=="GL"||JOB=="WS"||JOB=="BH")
	{
	d.gI("RIPOSTECHECK").style.display = 'block'
	d.gI("RIPOSTE").style.display = 'block'
	}
else
	{
	d.gI("RIPOSTECHECK").checked=false
	d.gI("RIPOSTECHECK").style.display = 'none'
	d.gI("RIPOSTE").style.display = 'none'
	}
if (JOB=="PA")
	{
	d.gI("AEGISSTANCECHECK").style.display = 'block'
	d.gI("AEGISSTANCE").style.display = 'block'
	d.gI("ANGELICICONCHECK").style.display = 'block'
	d.gI("ANGELICICON").style.display = 'block'
	}
else
	{
	d.gI("AEGISSTANCECHECK").checked=false
	d.gI("AEGISSTANCECHECK").style.display = 'none'
	d.gI("AEGISSTANCE").style.display = 'none'
	d.gI("ANGELICICONCHECK").checked=false
	d.gI("ANGELICICONCHECK").style.display = 'none'
	d.gI("ANGELICICON").style.display = 'none'
	}

//Passive Hide/Unhide Stuff
if (race=="HF"||race=="EF"||race=="DF"||race=="OF"||race=="DW")
	{
	d.gI("WMFCHECK").style.display = 'block'
	d.gI("WMF").style.display = 'block'
	d.gI("AMFCHECK").style.display = 'block'
	d.gI("AMF").style.display = 'block'
	}
else
	{
	d.gI("WMFCHECK").checked=false
	d.gI("WMFCHECK").style.display = 'none'
	d.gI("WMF").style.display = 'none'
	d.gI("AMFCHECK").checked=false
	d.gI("AMFCHECK").style.display = 'none'
	d.gI("AMF").style.display = 'none'
	}
if (JOB=="HM"||JOB=="EM"||JOB=="DM"||JOB=="OM")
	{
	d.gI("WMM1CHECK").style.display = 'block'
	d.gI("WMM1").style.display = 'block'
	d.gI("WMM2CHECK").checked=false
	d.gI("WMM2CHECK").style.display = 'none'
	d.gI("WMM2").style.display = 'none'
	d.gI("WMM3CHECK").checked=false
	d.gI("WMM3CHECK").style.display = 'none'
	d.gI("WMM3").style.display = 'none'
	d.gI("AM1CHECK").style.display = 'block'
	d.gI("AM1").style.display = 'block'
	d.gI("AM2CHECK").checked=false
	d.gI("AM2CHECK").style.display = 'none'
	d.gI("AM2").style.display = 'none'
	d.gI("AM3CHECK").checked=false
	d.gI("AM3CHECK").style.display = 'none'
	d.gI("AM3").style.display = 'none'
	}
else if (JOB=="WI"||JOB=="CL"||JOB=="EW"||JOB=="EO"||JOB=="DW"||JOB=="SO"||JOB=="OS")
	{
	d.gI("WMM2CHECK").style.display = 'block'
	d.gI("WMM2").style.display = 'block'
	d.gI("WMM1CHECK").checked=false
	d.gI("WMM1CHECK").style.display = 'none'
	d.gI("WMM1").style.display = 'none'
	d.gI("WMM3CHECK").checked=false
	d.gI("WMM3CHECK").style.display = 'none'
	d.gI("WMM3").style.display = 'none'
	d.gI("AM2CHECK").style.display = 'block'
	d.gI("AM2").style.display = 'block'
	d.gI("AM1CHECK").checked=false
	d.gI("AM1CHECK").style.display = 'none'
	d.gI("AM1").style.display = 'none'
	d.gI("AM3CHECK").checked=false
	d.gI("AM3CHECK").style.display = 'none'
	d.gI("AM3").style.display = 'none'
	}
else if (JOB=="SOR"||JOB=="NE"||JOB=="WL"||JOB=="PP"||JOB=="BI"||JOB=="SPS"||JOB=="ELS"||JOB=="EE"||JOB=="SPH"||JOB=="PS"||JOB=="WC"||JOB=="SHE"||JOB=="OL")
	{
	d.gI("WMM3CHECK").style.display = 'block'
	d.gI("WMM3").style.display = 'block'
	d.gI("WMM1CHECK").checked=false
	d.gI("WMM1CHECK").style.display = 'none'
	d.gI("WMM1").style.display = 'none'
	d.gI("WMM2CHECK").checked=false
	d.gI("WMM2CHECK").style.display = 'none'
	d.gI("WMM2").style.display = 'none'
	d.gI("AM3CHECK").style.display = 'block'
	d.gI("AM3").style.display = 'block'
	d.gI("AM1CHECK").checked=false
	d.gI("AM1CHECK").style.display = 'none'
	d.gI("AM1").style.display = 'none'
	d.gI("AM2CHECK").checked=false
	d.gI("AM2CHECK").style.display = 'none'
	d.gI("AM2").style.display = 'none'
	}
else
	{
	d.gI("WMM1CHECK").checked=false
	d.gI("WMM1CHECK").style.display = 'none'
	d.gI("WMM1").style.display = 'none'
	d.gI("WMM2CHECK").checked=false
	d.gI("WMM2CHECK").style.display = 'none'
	d.gI("WMM2").style.display = 'none'
	d.gI("WMM3CHECK").checked=false
	d.gI("WMM3CHECK").style.display = 'none'
	d.gI("WMM3").style.display = 'none'
	d.gI("AM1CHECK").checked=false
	d.gI("AM1CHECK").style.display = 'none'
	d.gI("AM1").style.display = 'none'
	d.gI("AM2CHECK").checked=false
	d.gI("AM2CHECK").style.display = 'none'
	d.gI("AM2").style.display = 'none'
	d.gI("AM3CHECK").checked=false
	d.gI("AM3CHECK").style.display = 'none'
	d.gI("AM3").style.display = 'none'
	}
if (JOB=="WI"||JOB=="CL"||JOB=="EW"||JOB=="EO"||JOB=="DW"||JOB=="SO"||JOB=="OS")
	{
	d.gI("BOOSTMP1CHECK").style.display = 'block'
	d.gI("BOOSTMP1").style.display = 'block'
	d.gI("BOOSTMP2CHECK").checked=false
	d.gI("BOOSTMP2CHECK").style.display = 'none'
	d.gI("BOOSTMP2").style.display = 'none'
	d.gI("FASTCAST1CHECK").style.display = 'block'
	d.gI("FASTCAST1").style.display = 'block'
	d.gI("FASTCAST2CHECK").checked=false
	d.gI("FASTCAST2CHECK").style.display = 'none'
	d.gI("FASTCAST2").style.display = 'none'
	d.gI("FASTHPRECOVERY3CHECK").style.display = 'block'
	d.gI("FASTHPRECOVERY3").style.display = 'block'
	d.gI("FASTHPRECOVERY4CHECK").checked=false
	d.gI("FASTHPRECOVERY4CHECK").style.display = 'none'
	d.gI("FASTHPRECOVERY4").style.display = 'none'
	d.gI("FASTMANARECOVERY1CHECK").style.display = 'block'
	d.gI("FASTMANARECOVERY1").style.display = 'block'
	d.gI("FASTMANARECOVERY2CHECK").checked=false
	d.gI("FASTMANARECOVERY2CHECK").style.display = 'none'
	d.gI("FASTMANARECOVERY2").style.display = 'none'
	}
else if (JOB=="SOR"||JOB=="NE"||JOB=="WL"||JOB=="PP"||JOB=="BI"||JOB=="SPS"||JOB=="ELS"||JOB=="EE"||JOB=="SPH"||JOB=="PS"||JOB=="WC"||JOB=="SHE"||JOB=="OL")
	{
	d.gI("BOOSTMP2CHECK").style.display = 'block'
	d.gI("BOOSTMP2").style.display = 'block'
	d.gI("BOOSTMP1CHECK").checked=false
	d.gI("BOOSTMP1CHECK").style.display = 'none'
	d.gI("BOOSTMP1").style.display = 'none'
	d.gI("FASTCAST2CHECK").style.display = 'block'
	d.gI("FASTCAST2").style.display = 'block'
	d.gI("FASTCAST1CHECK").checked=false
	d.gI("FASTCAST1CHECK").style.display = 'none'
	d.gI("FASTCAST1").style.display = 'none'
	d.gI("FASTHPRECOVERY4CHECK").style.display = 'block'
	d.gI("FASTHPRECOVERY4").style.display = 'block'
	d.gI("FASTHPRECOVERY3CHECK").checked=false
	d.gI("FASTHPRECOVERY3CHECK").style.display = 'none'
	d.gI("FASTHPRECOVERY3").style.display = 'none'
	d.gI("FASTMANARECOVERY2CHECK").style.display = 'block'
	d.gI("FASTMANARECOVERY2").style.display = 'block'
	d.gI("FASTMANARECOVERY1CHECK").checked=false
	d.gI("FASTMANARECOVERY1CHECK").style.display = 'none'
	d.gI("FASTMANARECOVERY1").style.display = 'none'
	}
else
	{
	d.gI("BOOSTMP1CHECK").checked=false
	d.gI("BOOSTMP1CHECK").style.display = 'none'
	d.gI("BOOSTMP1").style.display = 'none'
	d.gI("BOOSTMP2CHECK").checked=false
	d.gI("BOOSTMP2CHECK").style.display = 'none'
	d.gI("BOOSTMP2").style.display = 'none'
	d.gI("FASTCAST1CHECK").checked=false
	d.gI("FASTCAST1CHECK").style.display = 'none'
	d.gI("FASTCAST1").style.display = 'none'
	d.gI("FASTCAST2CHECK").checked=false
	d.gI("FASTCAST2CHECK").style.display = 'none'
	d.gI("FASTCAST2").style.display = 'none'
	d.gI("FASTHPRECOVERY3CHECK").checked=false
	d.gI("FASTHPRECOVERY3CHECK").style.display = 'none'
	d.gI("FASTHPRECOVERY3").style.display = 'none'
	d.gI("FASTHPRECOVERY4CHECK").checked=false
	d.gI("FASTHPRECOVERY4CHECK").style.display = 'none'
	d.gI("FASTHPRECOVERY4").style.display = 'none'
	d.gI("FASTMANARECOVERY1CHECK").checked=false
	d.gI("FASTMANARECOVERY1CHECK").style.display = 'none'
	d.gI("FASTMANARECOVERY1").style.display = 'none'
	d.gI("FASTMANARECOVERY2CHECK").checked=false
	d.gI("FASTMANARECOVERY2CHECK").style.display = 'none'
	d.gI("FASTMANARECOVERY2").style.display = 'none'
	}
if (race=="HM"||race=="EM"||race=="DM")
	{
	d.gI("AMMCHECK").style.display = 'block'
	d.gI("AMM").style.display = 'block'
	}
else
	{
	d.gI("AMMCHECK").checked=false
	d.gI("AMMCHECK").style.display = 'none'
	d.gI("AMM").style.display = 'none'
	}
if (JOB=="WA"||JOB=="OR"||JOB=="WD")
	{
	d.gI("WSBM1CHECK").style.display = 'block'
	d.gI("WSBM1").style.display = 'block'
	d.gI("WSBM2CHECK").checked=false
	d.gI("WSBM2CHECK").style.display = 'none'
	d.gI("WSBM2").style.display = 'none'
	}
else if (JOB=="GL"||JOB=="DE")
	{
	d.gI("WSBM2CHECK").style.display = 'block'
	d.gI("WSBM2").style.display = 'block'
	d.gI("WSBM1CHECK").checked=false
	d.gI("WSBM1CHECK").style.display = 'none'
	d.gI("WSBM1").style.display = 'none'
	}
else
	{
	d.gI("WSBM1CHECK").checked=false
	d.gI("WSBM1CHECK").style.display = 'none'
	d.gI("WSBM1").style.display = 'none'
	d.gI("WSBM2CHECK").checked=false
	d.gI("WSBM2CHECK").style.display = 'none'
	d.gI("WSBM2").style.display = 'none'
	}
if (JOB=="AR"||JOB=="SC")
	{
	d.gI("BLUNTM1CHECK").style.display = 'block'
	d.gI("BLUNTM1").style.display = 'block'
	d.gI("BLUNTM2CHECK").checked=false
	d.gI("BLUNTM2CHECK").style.display = 'none'
	d.gI("BLUNTM2").style.display = 'none'
	}
else if (JOB=="WS"||JOB=="BH")
	{
	d.gI("BLUNTM2CHECK").style.display = 'block'
	d.gI("BLUNTM2").style.display = 'block'
	d.gI("BLUNTM1CHECK").checked=false
	d.gI("BLUNTM1CHECK").style.display = 'none'
	d.gI("BLUNTM1").style.display = 'none'
	}
else
	{
	d.gI("BLUNTM1CHECK").checked=false
	d.gI("BLUNTM1CHECK").style.display = 'none'
	d.gI("BLUNTM1").style.display = 'none'
	d.gI("BLUNTM2CHECK").checked=false
	d.gI("BLUNTM2CHECK").style.display = 'none'
	d.gI("BLUNTM2").style.display = 'none'
	}
if (JOB=="DO")
	{
	d.gI("WEIGHTLIMIT1CHECK").style.display = 'block'
	d.gI("WEIGHTLIMIT1").style.display = 'block'
	d.gI("WEIGHTLIMIT2CHECK").checked=false
	d.gI("WEIGHTLIMIT2CHECK").style.display = 'none'
	d.gI("WEIGHTLIMIT2").style.display = 'none'
	d.gI("WEIGHTLIMIT3CHECK").checked=false
	d.gI("WEIGHTLIMIT3CHECK").style.display = 'none'
	d.gI("WEIGHTLIMIT3").style.display = 'none'
	}
else if (JOB=="AR"||JOB=="SC")
	{
	d.gI("WEIGHTLIMIT2CHECK").style.display = 'block'
	d.gI("WEIGHTLIMIT2").style.display = 'block'
	d.gI("WEIGHTLIMIT1CHECK").checked=false
	d.gI("WEIGHTLIMIT1CHECK").style.display = 'none'
	d.gI("WEIGHTLIMIT1").style.display = 'none'
	d.gI("WEIGHTLIMIT3CHECK").checked=false
	d.gI("WEIGHTLIMIT3CHECK").style.display = 'none'
	d.gI("WEIGHTLIMIT3").style.display = 'none'
	}
else if (JOB=="WS"||JOB=="BH")
	{
	d.gI("WEIGHTLIMIT3CHECK").style.display = 'block'
	d.gI("WEIGHTLIMIT3").style.display = 'block'
	d.gI("WEIGHTLIMIT1CHECK").checked=false
	d.gI("WEIGHTLIMIT1CHECK").style.display = 'none'
	d.gI("WEIGHTLIMIT1").style.display = 'none'
	d.gI("WEIGHTLIMIT2CHECK").checked=false
	d.gI("WEIGHTLIMIT2CHECK").style.display = 'none'
	d.gI("WEIGHTLIMIT2").style.display = 'none'
	}
else
	{
	d.gI("WEIGHTLIMIT1CHECK").checked=false
	d.gI("WEIGHTLIMIT1CHECK").style.display = 'none'
	d.gI("WEIGHTLIMIT1").style.display = 'none'
	d.gI("WEIGHTLIMIT2CHECK").checked=false
	d.gI("WEIGHTLIMIT2CHECK").style.display = 'none'
	d.gI("WEIGHTLIMIT2").style.display = 'none'
	d.gI("WEIGHTLIMIT3CHECK").checked=false
	d.gI("WEIGHTLIMIT3CHECK").style.display = 'none'
	d.gI("WEIGHTLIMIT3").style.display = 'none'
	}
if (JOB=="AR"||JOB=="WA"||JOB=="GL"||JOB=="OR"||JOB=="SC")
	{
	d.gI("POLEM1CHECK").style.display = 'block'
	d.gI("POLEM1").style.display = 'block'
	d.gI("POLEM2CHECK").checked=false
	d.gI("POLEM2CHECK").style.display = 'none'
	d.gI("POLEM2").style.display = 'none'
	}
else if (JOB=="WS"||JOB=="BH"||JOB=="WD"||JOB=="DE")
	{
	d.gI("POLEM2CHECK").style.display = 'block'
	d.gI("POLEM2").style.display = 'block'
	d.gI("POLEM1CHECK").checked=false
	d.gI("POLEM1CHECK").style.display = 'none'
	d.gI("POLEM1").style.display = 'none'
	}
else
	{
	d.gI("POLEM1CHECK").checked=false
	d.gI("POLEM1CHECK").style.display = 'none'
	d.gI("POLEM1").style.display = 'none'
	d.gI("POLEM2CHECK").checked=false
	d.gI("POLEM2CHECK").style.display = 'none'
	d.gI("POLEM2").style.display = 'none'
	}
if (JOB=="MO")
	{
	d.gI("FISTM1CHECK").style.display = 'block'
	d.gI("FISTM1").style.display = 'block'
	d.gI("FISTM2CHECK").checked=false
	d.gI("FISTM2CHECK").style.display = 'none'
	d.gI("FISTM2").style.display = 'none'
	}
else if (JOB=="TY")
	{
	d.gI("FISTM2CHECK").style.display = 'block'
	d.gI("FISTM2").style.display = 'block'
	d.gI("FISTM1CHECK").checked=false
	d.gI("FISTM1CHECK").style.display = 'none'
	d.gI("FISTM1").style.display = 'none'
	}
else
	{
	d.gI("FISTM1CHECK").checked=false
	d.gI("FISTM1CHECK").style.display = 'none'
	d.gI("FISTM1").style.display = 'none'
	d.gI("FISTM2CHECK").checked=false
	d.gI("FISTM2CHECK").style.display = 'none'
	d.gI("FISTM2").style.display = 'none'
	}
if (JOB=="EK"||JOB=="HK"||JOB=="PK")
	{
	d.gI("MR1CHECK").style.display = 'block'
	d.gI("MR1").style.display = 'block'
	d.gI("MR2CHECK").checked=false
	d.gI("MR2CHECK").style.display = 'none'
	d.gI("MR2").style.display = 'none'
	}
else if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SW"||JOB=="SK"||JOB=="BD")
	{
	d.gI("MR2CHECK").style.display = 'block'
	d.gI("MR2").style.display = 'block'
	d.gI("MR1CHECK").checked=false
	d.gI("MR1CHECK").style.display = 'none'
	d.gI("MR1").style.display = 'none'
	}
else
	{
	d.gI("MR1CHECK").checked=false
	d.gI("MR1CHECK").style.display = 'none'
	d.gI("MR1").style.display = 'none'
	d.gI("MR2CHECK").checked=false
	d.gI("MR2CHECK").style.display = 'none'
	d.gI("MR2").style.display = 'none'
	}
if (JOB=="EK"||JOB=="HK"||JOB=="PK"||JOB=="BD"||JOB=="SW")
	{
	d.gI("HMK1CHECK").style.display = 'block'
	d.gI("HMK1").style.display = 'block'
	d.gI("HMK2CHECK").checked=false
	d.gI("HMK2CHECK").style.display = 'none'
	d.gI("HMK2").style.display = 'none'
	}
else if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("HMK2CHECK").style.display = 'block'
	d.gI("HMK2").style.display = 'block'
	d.gI("HMK1CHECK").checked=false
	d.gI("HMK1CHECK").style.display = 'none'
	d.gI("HMK1").style.display = 'none'
	}
else
	{
	d.gI("HMK1CHECK").checked=false
	d.gI("HMK1CHECK").style.display = 'none'
	d.gI("HMK1").style.display = 'none'
	d.gI("HMK2CHECK").checked=false
	d.gI("HMK2CHECK").style.display = 'none'
	d.gI("HMK2").style.display = 'none'
	}
if (JOB=="EK"||JOB=="HK"||JOB=="PK"||JOB=="BD")
	{
	d.gI("KSBM1CHECK").style.display = 'block'
	d.gI("KSBM1").style.display = 'block'
	d.gI("KSBM2CHECK").checked=false
	d.gI("KSBM2CHECK").style.display = 'none'
	d.gI("KSBM2").style.display = 'none'
	}
else if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK"||JOB=="SW")
	{
	d.gI("KSBM2CHECK").style.display = 'block'
	d.gI("KSBM2").style.display = 'block'
	d.gI("KSBM1CHECK").checked=false
	d.gI("KSBM1CHECK").style.display = 'none'
	d.gI("KSBM1").style.display = 'none'
	}
else
	{
	d.gI("KSBM1CHECK").checked=false
	d.gI("KSBM1CHECK").style.display = 'none'
	d.gI("KSBM1").style.display = 'none'
	d.gI("KSBM2CHECK").checked=false
	d.gI("KSBM2CHECK").style.display = 'none'
	d.gI("KSBM2").style.display = 'none'
	}
if (JOB=="EK"||JOB=="HK"||JOB=="PK"||JOB=="BD"||JOB=="SW")
	{
	d.gI("SHIELDMASTERY1CHECK").style.display = 'block'
	d.gI("SHIELDMASTERY1").style.display = 'block'
	d.gI("SHIELDMASTERY2CHECK").checked=false
	d.gI("SHIELDMASTERY2CHECK").style.display = 'none'
	d.gI("SHIELDMASTERY2").style.display = 'none'
	}
else if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("SHIELDMASTERY2CHECK").style.display = 'block'
	d.gI("SHIELDMASTERY2").style.display = 'block'
	d.gI("SHIELDMASTERY1CHECK").checked=false
	d.gI("SHIELDMASTERY1CHECK").style.display = 'none'
	d.gI("SHIELDMASTERY1").style.display = 'none'
	}
else
	{
	d.gI("SHIELDMASTERY1CHECK").checked=false
	d.gI("SHIELDMASTERY1CHECK").style.display = 'none'
	d.gI("SHIELDMASTERY1").style.display = 'none'
	d.gI("SHIELDMASTERY2CHECK").checked=false
	d.gI("SHIELDMASTERY2CHECK").style.display = 'none'
	d.gI("SHIELDMASTERY2").style.display = 'none'
	}
if (JOB=="EFS"||JOB=="SR"||JOB=="HE"||JOB=="RO"||JOB=="PR"||JOB=="AS")
	{
	d.gI("DAGGERM1CHECK").style.display = 'block'
	d.gI("DAGGERM1").style.display = 'block'
	d.gI("DAGGERM2CHECK").checked=false
	d.gI("DAGGERM2CHECK").style.display = 'none'
	d.gI("DAGGERM2").style.display = 'none'
	d.gI("BOOSTEVASION1CHECK").style.display = 'block'
	d.gI("BOOSTEVASION1").style.display = 'block'
	d.gI("BOOSTEVASION2CHECK").checked=false
	d.gI("BOOSTEVASION2CHECK").style.display = 'none'
	d.gI("BOOSTEVASION2").style.display = 'none'
	}
else if (JOB=="PW"||JOB=="TH"||JOB=="AW")
	{
	d.gI("DAGGERM2CHECK").style.display = 'block'
	d.gI("DAGGERM2").style.display = 'block'
	d.gI("DAGGERM1CHECK").checked=false
	d.gI("DAGGERM1CHECK").style.display = 'none'
	d.gI("DAGGERM1").style.display = 'none'
	d.gI("BOOSTEVASION2CHECK").style.display = 'block'
	d.gI("BOOSTEVASION2").style.display = 'block'
	d.gI("BOOSTEVASION1CHECK").checked=false
	d.gI("BOOSTEVASION1CHECK").style.display = 'none'
	d.gI("BOOSTEVASION1").style.display = 'none'
	}
else
	{
	d.gI("DAGGERM1CHECK").checked=false
	d.gI("DAGGERM1CHECK").style.display = 'none'
	d.gI("DAGGERM1").style.display = 'none'
	d.gI("DAGGERM2CHECK").checked=false
	d.gI("DAGGERM2CHECK").style.display = 'none'
	d.gI("DAGGERM2").style.display = 'none'
	d.gI("BOOSTEVASION1CHECK").checked=false
	d.gI("BOOSTEVASION1CHECK").style.display = 'none'
	d.gI("BOOSTEVASION1").style.display = 'none'
	d.gI("BOOSTEVASION2CHECK").checked=false
	d.gI("BOOSTEVASION2CHECK").style.display = 'none'
	d.gI("BOOSTEVASION2").style.display = 'none'
	}
if (JOB=="PW"||JOB=="EFS"||JOB=="TH"||JOB=="RO"||JOB=="AW"||JOB=="AS")
	{
	d.gI("BOWM1CHECK").style.display = 'block'
	d.gI("BOWM1").style.display = 'block'
	d.gI("BOWM2CHECK").checked=false
	d.gI("BOWM2CHECK").style.display = 'none'
	d.gI("BOWM2").style.display = 'none'
	}
else if (JOB=="SR"||JOB=="HE"||JOB=="PR")
	{
	d.gI("BOWM2CHECK").style.display = 'block'
	d.gI("BOWM2").style.display = 'block'
	d.gI("BOWM1CHECK").checked=false
	d.gI("BOWM1CHECK").style.display = 'none'
	d.gI("BOWM1").style.display = 'none'
	}
else
	{
	d.gI("BOWM1CHECK").checked=false
	d.gI("BOWM1CHECK").style.display = 'none'
	d.gI("BOWM1").style.display = 'none'
	d.gI("BOWM2CHECK").checked=false
	d.gI("BOWM2CHECK").style.display = 'none'
	d.gI("BOWM2").style.display = 'none'
	}
if (JOB=="EFS"||JOB=="RO"||JOB=="AS")
	{
	d.gI("QUICKSTEP1CHECK").style.display = 'block'
	d.gI("QUICKSTEP1").style.display = 'block'
	d.gI("QUICKSTEP2CHECK").checked=false
	d.gI("QUICKSTEP2CHECK").style.display = 'none'
	d.gI("QUICKSTEP2").style.display = 'none'
	}
else if (JOB=="SR"||JOB=="HE"||JOB=="PR"||JOB=="PW"||JOB=="TH"||JOB=="AW")
	{
	d.gI("QUICKSTEP2CHECK").style.display = 'block'
	d.gI("QUICKSTEP2").style.display = 'block'
	d.gI("QUICKSTEP1CHECK").checked=false
	d.gI("QUICKSTEP1CHECK").style.display = 'none'
	d.gI("QUICKSTEP1").style.display = 'none'
	}
else
	{
	d.gI("QUICKSTEP1CHECK").checked=false
	d.gI("QUICKSTEP1CHECK").style.display = 'none'
	d.gI("QUICKSTEP1").style.display = 'none'
	d.gI("QUICKSTEP2CHECK").checked=false
	d.gI("QUICKSTEP2CHECK").style.display = 'none'
	d.gI("QUICKSTEP2").style.display = 'none'
	}
if (JOB=="BD"||JOB=="GL")
	{
	d.gI("DUALMCHECK").style.display = 'block'
	d.gI("DUALM").style.display = 'block'
	}
else
	{
	d.gI("DUALMCHECK").checked=false
	d.gI("DUALMCHECK").style.display = 'none'
	d.gI("DUALM").style.display = 'none'
	}
if (JOB=="OR")
	{
	d.gI("THM1CHECK").style.display = 'block'
	d.gI("THM1").style.display = 'block'
	d.gI("THM2CHECK").checked=false
	d.gI("THM2CHECK").style.display = 'none'
	d.gI("THM2").style.display = 'none'
	}
else if (JOB=="DE")
	{
	d.gI("THM2CHECK").style.display = 'block'
	d.gI("THM2").style.display = 'block'
	d.gI("THM1CHECK").checked=false
	d.gI("THM1CHECK").style.display = 'none'
	d.gI("THM1").style.display = 'none'
	}
else
	{
	d.gI("THM1CHECK").checked=false
	d.gI("THM1CHECK").style.display = 'none'
	d.gI("THM1").style.display = 'none'
	d.gI("THM2CHECK").checked=false
	d.gI("THM2CHECK").style.display = 'none'
	d.gI("THM2").style.display = 'none'
	}
if (JOB=="WA"||JOB=="GL"||JOB=="OR"||JOB=="AR"||JOB=="SC")
	{
	d.gI("BOOSTHP1CHECK").style.display = 'block'
	d.gI("BOOSTHP1").style.display = 'block'
	d.gI("BOOSTHP2CHECK").checked=false
	d.gI("BOOSTHP2CHECK").style.display = 'none'
	d.gI("BOOSTHP2").style.display = 'none'
	d.gI("BOOSTHP3CHECK").checked=false
	d.gI("BOOSTHP3CHECK").style.display = 'none'
	d.gI("BOOSTHP3").style.display = 'none'
	}
else if (JOB=="PP"||JOB=="OL"||JOB=="WC")
	{
	d.gI("BOOSTHP2CHECK").style.display = 'block'
	d.gI("BOOSTHP2").style.display = 'block'
	d.gI("BOOSTHP1CHECK").checked=false
	d.gI("BOOSTHP1CHECK").style.display = 'none'
	d.gI("BOOSTHP1").style.display = 'none'
	d.gI("BOOSTHP3CHECK").checked=false
	d.gI("BOOSTHP3CHECK").style.display = 'none'
	d.gI("BOOSTHP3").style.display = 'none'
	}
else if (JOB=="WD"||JOB=="DE"||JOB=="BH"||JOB=="WS")
	{
	d.gI("BOOSTHP3CHECK").style.display = 'block'
	d.gI("BOOSTHP3").style.display = 'block'
	d.gI("BOOSTHP1CHECK").checked=false
	d.gI("BOOSTHP1CHECK").style.display = 'none'
	d.gI("BOOSTHP1").style.display = 'none'
	d.gI("BOOSTHP2CHECK").checked=false
	d.gI("BOOSTHP2CHECK").style.display = 'none'
	d.gI("BOOSTHP2").style.display = 'none'
	}
else
	{
	d.gI("BOOSTHP1CHECK").checked=false
	d.gI("BOOSTHP1CHECK").style.display = 'none'
	d.gI("BOOSTHP1").style.display = 'none'
	d.gI("BOOSTHP2CHECK").checked=false
	d.gI("BOOSTHP2CHECK").style.display = 'none'
	d.gI("BOOSTHP2").style.display = 'none'
	d.gI("BOOSTHP3CHECK").checked=false
	d.gI("BOOSTHP3CHECK").style.display = 'none'
	d.gI("BOOSTHP3").style.display = 'none'
	}
if (JOB=="WD"||JOB=="GL")
	{
	d.gI("FINALFRENZYCHECK").style.display = 'block'
	d.gI("FINALFRENZY").style.display = 'block'
	}
else
	{
	d.gI("FINALFRENZYCHECK").checked=false
	d.gI("FINALFRENZYCHECK").style.display = 'none'
	d.gI("FINALFRENZY").style.display = 'none'
	}
if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("FINALFORTRESSCHECK").style.display = 'block'
	d.gI("FINALFORTRESS").style.display = 'block'
	}
else
	{
	d.gI("FINALFORTRESSCHECK").checked=false
	d.gI("FINALFORTRESSCHECK").style.display = 'none'
	d.gI("FINALFORTRESS").style.display = 'none'
	}
if (race=="DF")
	{
	d.gI("SHADOWSENSECHECK").style.display = 'block'
	d.gI("SHADOWSENSE").style.display = 'block'
	}
else
	{
	d.gI("SHADOWSENSECHECK").checked=false
	d.gI("SHADOWSENSECHECK").style.display = 'none'
	d.gI("SHADOWSENSE").style.display = 'none'
	}
if (JOB=="MO")
	{
	d.gI("AGILEMOVEMENT1CHECK").style.display = 'block'
	d.gI("AGILEMOVEMENT1").style.display = 'block'
	d.gI("AGILEMOVEMENT2CHECK").checked=false
	d.gI("AGILEMOVEMENT2CHECK").style.display = 'none'
	d.gI("AGILEMOVEMENT2").style.display = 'none'
	}
else if (JOB=="TY")
	{
	d.gI("AGILEMOVEMENT2CHECK").style.display = 'block'
	d.gI("AGILEMOVEMENT2").style.display = 'block'
	d.gI("AGILEMOVEMENT1CHECK").checked=false
	d.gI("AGILEMOVEMENT1CHECK").style.display = 'none'
	d.gI("AGILEMOVEMENT1").style.display = 'none'
	}
else
	{
	d.gI("AGILEMOVEMENT1CHECK").checked=false
	d.gI("AGILEMOVEMENT1CHECK").style.display = 'none'
	d.gI("AGILEMOVEMENT1").style.display = 'none'
	d.gI("AGILEMOVEMENT2CHECK").checked=false
	d.gI("AGILEMOVEMENT2CHECK").style.display = 'none'
	d.gI("AGILEMOVEMENT2").style.display = 'none'
	}
if (JOB=="EFS"||JOB=="SR"||JOB=="HE"||JOB=="RO")
	{
	d.gI("CRITICALCHANCE1CHECK").style.display = 'block'
	d.gI("CRITICALCHANCE1").style.display = 'block'
	d.gI("CRITICALCHANCE2CHECK").checked=false
	d.gI("CRITICALCHANCE2CHECK").style.display = 'none'
	d.gI("CRITICALCHANCE2").style.display = 'none'
	}
else if (JOB=="PW"||JOB=="TH")
	{
	d.gI("CRITICALCHANCE2CHECK").style.display = 'block'
	d.gI("CRITICALCHANCE2").style.display = 'block'
	d.gI("CRITICALCHANCE1CHECK").checked=false
	d.gI("CRITICALCHANCE1CHECK").style.display = 'none'
	d.gI("CRITICALCHANCE1").style.display = 'none'
	}
else
	{
	d.gI("CRITICALCHANCE1CHECK").checked=false
	d.gI("CRITICALCHANCE1CHECK").style.display = 'none'
	d.gI("CRITICALCHANCE1").style.display = 'none'
	d.gI("CRITICALCHANCE2CHECK").checked=false
	d.gI("CRITICALCHANCE2CHECK").style.display = 'none'
	d.gI("CRITICALCHANCE2").style.display = 'none'
	}
if (JOB=="MO"||JOB=="HE"||JOB=="RO")
	{
	d.gI("BOOSTASPD1CHECK").style.display = 'block'
	d.gI("BOOSTASPD1").style.display = 'block'
	d.gI("BOOSTASPD2CHECK").checked=false
	d.gI("BOOSTASPD2CHECK").style.display = 'none'
	d.gI("BOOSTASPD2").style.display = 'none'
	}
else if (JOB=="TY"||JOB=="TH")
	{
	d.gI("BOOSTASPD2CHECK").style.display = 'block'
	d.gI("BOOSTASPD2").style.display = 'block'
	d.gI("BOOSTASPD1CHECK").checked=false
	d.gI("BOOSTASPD1CHECK").style.display = 'none'
	d.gI("BOOSTASPD1").style.display = 'none'
	}
else
	{
	d.gI("BOOSTASPD1CHECK").checked=false
	d.gI("BOOSTASPD1CHECK").style.display = 'none'
	d.gI("BOOSTASPD1").style.display = 'none'
	d.gI("BOOSTASPD2CHECK").checked=false
	d.gI("BOOSTASPD2CHECK").style.display = 'none'
	d.gI("BOOSTASPD2").style.display = 'none'
	}
if (JOB=="OM")
	{
	d.gI("HMO1CHECK").style.display = 'block'
	d.gI("HMO1").style.display = 'block'
	d.gI("HMO2CHECK").checked=false
	d.gI("HMO2CHECK").style.display = 'none'
	d.gI("HMO2").style.display = 'none'
	d.gI("HMO3CHECK").checked=false
	d.gI("HMO3CHECK").style.display = 'none'
	d.gI("HMO3").style.display = 'none'
	d.gI("LMO1CHECK").style.display = 'block'
	d.gI("LMO1").style.display = 'block'
	d.gI("LMO3CHECK").checked=false
	d.gI("LMO3CHECK").style.display = 'none'
	d.gI("LMO3").style.display = 'none'
	d.gI("LMO2CHECK").checked=false
	d.gI("LMO2CHECK").style.display = 'none'
	d.gI("LMO2").style.display = 'none'
	d.gI("RMO1CHECK").style.display = 'block'
	d.gI("RMO1").style.display = 'block'
	d.gI("RMO2CHECK").checked=false
	d.gI("RMO2CHECK").style.display = 'none'
	d.gI("RMO2").style.display = 'none'
	d.gI("RMO3CHECK").checked=false
	d.gI("RMO3CHECK").style.display = 'none'
	d.gI("RMO3").style.display = 'none'
	}
else if (JOB=="OS")
	{
	d.gI("HMO2CHECK").style.display = 'block'
	d.gI("HMO2").style.display = 'block'
	d.gI("HMO3CHECK").checked=false
	d.gI("HMO3CHECK").style.display = 'none'
	d.gI("HMO3").style.display = 'none'
	d.gI("HMO1CHECK").checked=false
	d.gI("HMO1CHECK").style.display = 'none'
	d.gI("HMO1").style.display = 'none'
	d.gI("LMO2CHECK").style.display = 'block'
	d.gI("LMO2").style.display = 'block'
	d.gI("LMO1CHECK").checked=false
	d.gI("LMO1CHECK").style.display = 'none'
	d.gI("LMO1").style.display = 'none'
	d.gI("LMO3CHECK").checked=false
	d.gI("LMO3CHECK").style.display = 'none'
	d.gI("LMO3").style.display = 'none'
	d.gI("RMO2CHECK").style.display = 'block'
	d.gI("RMO2").style.display = 'block'
	d.gI("RMO1CHECK").checked=false
	d.gI("RMO1CHECK").style.display = 'none'
	d.gI("RMO1").style.display = 'none'
	d.gI("RMO3CHECK").checked=false
	d.gI("RMO3CHECK").style.display = 'none'
	d.gI("RMO3").style.display = 'none'
	}
else if (JOB=="WC"||JOB=="OL")
	{
	d.gI("HMO3CHECK").style.display = 'block'
	d.gI("HMO3").style.display = 'block'
	d.gI("HMO2CHECK").checked=false
	d.gI("HMO2CHECK").style.display = 'none'
	d.gI("HMO2").style.display = 'none'
	d.gI("HMO1CHECK").checked=false
	d.gI("HMO1CHECK").style.display = 'none'
	d.gI("HMO1").style.display = 'none'
	d.gI("LMO3CHECK").style.display = 'block'
	d.gI("LMO3").style.display = 'block'
	d.gI("LMO1CHECK").checked=false
	d.gI("LMO1CHECK").style.display = 'none'
	d.gI("LMO1").style.display = 'none'
	d.gI("LMO2CHECK").checked=false
	d.gI("LMO2CHECK").style.display = 'none'
	d.gI("LMO2").style.display = 'none'
	d.gI("RMO3CHECK").style.display = 'block'
	d.gI("RMO3").style.display = 'block'
	d.gI("RMO2CHECK").checked=false
	d.gI("RMO2CHECK").style.display = 'none'
	d.gI("RMO2").style.display = 'none'
	d.gI("RMO1CHECK").checked=false
	d.gI("RMO1CHECK").style.display = 'none'
	d.gI("RMO1").style.display = 'none'
	}
else
	{
	d.gI("HMO1CHECK").checked=false
	d.gI("HMO1CHECK").style.display = 'none'
	d.gI("HMO1").style.display = 'none'
	d.gI("HMO2CHECK").checked=false
	d.gI("HMO2CHECK").style.display = 'none'
	d.gI("HMO2").style.display = 'none'
	d.gI("HMO3CHECK").checked=false
	d.gI("HMO3CHECK").style.display = 'none'
	d.gI("HMO3").style.display = 'none'
	d.gI("LMO1CHECK").checked=false
	d.gI("LMO1CHECK").style.display = 'none'
	d.gI("LMO1").style.display = 'none'
	d.gI("LMO2CHECK").checked=false
	d.gI("LMO2CHECK").style.display = 'none'
	d.gI("LMO2").style.display = 'none'
	d.gI("LMO3CHECK").checked=false
	d.gI("LMO3CHECK").style.display = 'none'
	d.gI("LMO3").style.display = 'none'
	d.gI("RMO1CHECK").checked=false
	d.gI("RMO1CHECK").style.display = 'none'
	d.gI("RMO1").style.display = 'none'
	d.gI("RMO2CHECK").checked=false
	d.gI("RMO2CHECK").style.display = 'none'
	d.gI("RMO2").style.display = 'none'
	d.gI("RMO3CHECK").checked=false
	d.gI("RMO3CHECK").style.display = 'none'
	d.gI("RMO3").style.display = 'none'
	}
if (JOB=="PP")
	{
	d.gI("HMPCHECK").style.display = 'block'
	d.gI("HMP").style.display = 'block'
	}
else
	{
	d.gI("HMPCHECK").checked=false
	d.gI("HMPCHECK").style.display = 'none'
	d.gI("HMP").style.display = 'none'
	}
if (JOB=="WA"||JOB=="OR"||JOB=="AR"||JOB=="SC")
	{
	d.gI("HMW1CHECK").style.display = 'block'
	d.gI("HMW1").style.display = 'block'
	d.gI("HMW2CHECK").checked=false
	d.gI("HMW2CHECK").style.display = 'none'
	d.gI("HMW2").style.display = 'none'
	d.gI("LMW1CHECK").style.display = 'block'
	d.gI("LMW1").style.display = 'block'
	d.gI("LMW2CHECK").checked=false
	d.gI("LMW2CHECK").style.display = 'none'
	d.gI("LMW2").style.display = 'none'
	d.gI("FASTHPRECOVERY1CHECK").style.display = 'block'
	d.gI("FASTHPRECOVERY1").style.display = 'block'
	d.gI("FASTHPRECOVERY2CHECK").checked=false
	d.gI("FASTHPRECOVERY2CHECK").style.display = 'none'
	d.gI("FASTHPRECOVERY2").style.display = 'none'
	}
else if (JOB=="WD"||JOB=="GL"||JOB=="DE"||JOB=="WS"||JOB=="BH")
	{
	d.gI("HMW2CHECK").style.display = 'block'
	d.gI("HMW2").style.display = 'block'
	d.gI("HMW1CHECK").checked=false
	d.gI("HMW1CHECK").style.display = 'none'
	d.gI("HMW1").style.display = 'none'
	d.gI("LMW2CHECK").style.display = 'block'
	d.gI("LMW2").style.display = 'block'
	d.gI("LMW1CHECK").checked=false
	d.gI("LMW1CHECK").style.display = 'none'
	d.gI("LMW1").style.display = 'none'
	d.gI("FASTHPRECOVERY2CHECK").style.display = 'block'
	d.gI("FASTHPRECOVERY2").style.display = 'block'
	d.gI("FASTHPRECOVERY1CHECK").checked=false
	d.gI("FASTHPRECOVERY1CHECK").style.display = 'none'
	d.gI("FASTHPRECOVERY1").style.display = 'none'
	}
else
	{
	d.gI("HMW1CHECK").checked=false
	d.gI("HMW1CHECK").style.display = 'none'
	d.gI("HMW1").style.display = 'none'
	d.gI("HMW2CHECK").checked=false
	d.gI("HMW2CHECK").style.display = 'none'
	d.gI("HMW2").style.display = 'none'
	d.gI("LMW1CHECK").checked=false
	d.gI("LMW1CHECK").style.display = 'none'
	d.gI("LMW1").style.display = 'none'
	d.gI("LMW2CHECK").checked=false
	d.gI("LMW2CHECK").style.display = 'none'
	d.gI("LMW2").style.display = 'none'
	d.gI("FASTHPRECOVERY1CHECK").checked=false
	d.gI("FASTHPRECOVERY1CHECK").style.display = 'none'
	d.gI("FASTHPRECOVERY1").style.display = 'none'
	d.gI("FASTHPRECOVERY2CHECK").checked=false
	d.gI("FASTHPRECOVERY2CHECK").style.display = 'none'
	d.gI("FASTHPRECOVERY2").style.display = 'none'
	}
if (JOB=="EFS"||JOB=="RO"||JOB=="AS"||JOB=="MO")
	{
	d.gI("LMR1CHECK").style.display = 'block'
	d.gI("LMR1").style.display = 'block'
	d.gI("LMR2CHECK").checked=false
	d.gI("LMR2CHECK").style.display = 'none'
	d.gI("LMR2").style.display = 'none'
	}
else if (JOB=="PW"||JOB=="SR"||JOB=="TH"||JOB=="HE"||JOB=="AW"||JOB=="PR"||JOB=="TY")
	{
	d.gI("LMR2CHECK").style.display = 'block'
	d.gI("LMR2").style.display = 'block'
	d.gI("LMR1CHECK").checked=false
	d.gI("LMR1CHECK").style.display = 'none'
	d.gI("LMR1").style.display = 'none'
	}
else
	{
	d.gI("LMR1CHECK").checked=false
	d.gI("LMR1CHECK").style.display = 'none'
	d.gI("LMR1").style.display = 'none'
	d.gI("LMR2CHECK").checked=false
	d.gI("LMR2CHECK").style.display = 'none'
	d.gI("LMR2").style.display = 'none'
	}
if (JOB=="CL"||JOB=="EO"||JOB=="SO")
	{
	d.gI("LMH1CHECK").style.display = 'block'
	d.gI("LMH1").style.display = 'block'
	d.gI("LMH2CHECK").checked=false
	d.gI("LMH2CHECK").style.display = 'none'
	d.gI("LMH2").style.display = 'none'
	d.gI("RMH1CHECK").style.display = 'block'
	d.gI("RMH1").style.display = 'block'
	d.gI("RMH2CHECK").checked=false
	d.gI("RMH2CHECK").style.display = 'none'
	d.gI("RMH2").style.display = 'none'
	}
else if (JOB=="PP"||JOB=="BI"||JOB=="EE"||JOB=="SHE")
	{
	d.gI("LMH2CHECK").style.display = 'block'
	d.gI("LMH2").style.display = 'block'
	d.gI("LMH1CHECK").checked=false
	d.gI("LMH1CHECK").style.display = 'none'
	d.gI("LMH1").style.display = 'none'
	d.gI("RMH2CHECK").style.display = 'block'
	d.gI("RMH2").style.display = 'block'
	d.gI("RMH1CHECK").checked=false
	d.gI("RMH1CHECK").style.display = 'none'
	d.gI("RMH1").style.display = 'none'
	}
else
	{
	d.gI("LMH1CHECK").checked=false
	d.gI("LMH1CHECK").style.display = 'none'
	d.gI("LMH1").style.display = 'none'
	d.gI("LMH2CHECK").checked=false
	d.gI("LMH2CHECK").style.display = 'none'
	d.gI("LMH2").style.display = 'none'
	d.gI("RMH1CHECK").checked=false
	d.gI("RMH1CHECK").style.display = 'none'
	d.gI("RMH1").style.display = 'none'
	d.gI("RMH2CHECK").checked=false
	d.gI("RMH2CHECK").style.display = 'none'
	d.gI("RMH2").style.display = 'none'
	}
if (JOB=="ELS"||JOB=="PS"||JOB=="WL")
	{
	d.gI("LMSCHECK").style.display = 'block'
	d.gI("LMS").style.display = 'block'
	}
else
	{
	d.gI("LMSCHECK").checked=false
	d.gI("LMSCHECK").style.display = 'none'
	d.gI("LMS").style.display = 'none'
	}
if (JOB=="WI"||JOB=="DW"||JOB=="EW")
	{
	d.gI("RMN1CHECK").style.display = 'block'
	d.gI("RMN1").style.display = 'block'
	d.gI("RMN2CHECK").checked=false
	d.gI("RMN2CHECK").style.display = 'none'
	d.gI("RMN2").style.display = 'none'
	}
else if (JOB=="NE"||JOB=="WL"||JOB=="SOR"||JOB=="SPH"||JOB=="PS"||JOB=="SPS"||JOB=="ELS")
	{
	d.gI("RMN2CHECK").style.display = 'block'
	d.gI("RMN2").style.display = 'block'
	d.gI("RMN1CHECK").checked=false
	d.gI("RMN1CHECK").style.display = 'none'
	d.gI("RMN1").style.display = 'none'
	}
else
	{
	d.gI("RMN1CHECK").checked=false
	d.gI("RMN1CHECK").style.display = 'none'
	d.gI("RMN1").style.display = 'none'
	d.gI("RMN2CHECK").checked=false
	d.gI("RMN2CHECK").style.display = 'none'
	d.gI("RMN2").style.display = 'none'
	}
if (JOB=="HE")
	{
	d.gI("QUIVEROFHOLDINGCHECK").style.display = 'block'
	d.gI("QUIVEROFHOLDING").style.display = 'block'
	}
else
	{
	d.gI("QUIVEROFHOLDINGCHECK").checked=false
	d.gI("QUIVEROFHOLDINGCHECK").style.display = 'none'
	d.gI("QUIVEROFHOLDING").style.display = 'none'
	}
if (JOB=="SPS")
	{
	d.gI("MANAREGENCHECK").style.display = 'block'
	d.gI("MANAREGEN").style.display = 'block'
	}
else
	{
	d.gI("MANAREGENCHECK").checked=false
	d.gI("MANAREGENCHECK").style.display = 'none'
	d.gI("MANAREGEN").style.display = 'none'
	}
if (JOB=="SOR"||JOB=="SPH"||JOB=="SPS")
	{
	d.gI("CLEARMINDCHECK").style.display = 'block'
	d.gI("CLEARMIND").style.display = 'block'
	}
else
	{
	d.gI("CLEARMINDCHECK").checked=false
	d.gI("CLEARMINDCHECK").style.display = 'none'
	d.gI("CLEARMIND").style.display = 'none'
	}
if (JOB=="PW"||JOB=="SR"||JOB=="TH"||JOB=="HE"||JOB=="AW"||JOB=="PR")
	{
	d.gI("ESPRIT2CHECK").style.display = 'block'
	d.gI("ESPRIT2").style.display = 'block'
	d.gI("ESPRIT1CHECK").checked=false
	d.gI("ESPRIT1CHECK").style.display = 'none'
	d.gI("ESPRIT1").style.display = 'none'
	}
else if (JOB=="EFS"||JOB=="AS"||JOB=="RO")
	{
	d.gI("ESPRIT1CHECK").style.display = 'block'
	d.gI("ESPRIT1").style.display = 'block'
	d.gI("ESPRIT2CHECK").checked=false
	d.gI("ESPRIT2CHECK").style.display = 'none'
	d.gI("ESPRIT2").style.display = 'none'
	}
else
	{
	d.gI("ESPRIT2CHECK").checked=false
	d.gI("ESPRIT2CHECK").style.display = 'none'
	d.gI("ESPRIT2").style.display = 'none'
	d.gI("ESPRIT1CHECK").checked=false
	d.gI("ESPRIT1CHECK").style.display = 'none'
	d.gI("ESPRIT1").style.display = 'none'
	}
if (JOB=="WA"||JOB=="RO"||JOB=="OR"||JOB=="SC"||JOB=="AR")
	{
	d.gI("VITALFORCE1CHECK").style.display = 'block'
	d.gI("VITALFORCE1").style.display = 'block'
	d.gI("VITALFORCE2CHECK").checked=false
	d.gI("VITALFORCE2CHECK").style.display = 'none'
	d.gI("VITALFORCE2").style.display = 'none'
	}
else if (JOB=="GL"||JOB=="WD"||JOB=="TH"||JOB=="HE"||JOB=="DE"||JOB=="BH"||JOB=="WS")
	{
	d.gI("VITALFORCE2CHECK").style.display = 'block'
	d.gI("VITALFORCE2").style.display = 'block'
	d.gI("VITALFORCE1CHECK").checked=false
	d.gI("VITALFORCE1CHECK").style.display = 'none'
	d.gI("VITALFORCE1").style.display = 'none'
	}
else
	{
	d.gI("VITALFORCE2CHECK").checked=false
	d.gI("VITALFORCE2CHECK").style.display = 'none'
	d.gI("VITALFORCE2").style.display = 'none'
	d.gI("VITALFORCE1CHECK").checked=false
	d.gI("VITALFORCE1CHECK").style.display = 'none'
	d.gI("VITALFORCE1").style.display = 'none'
	}
if (JOB=="TH"||JOB=="PW")
	{
	d.gI("FOCUSCHANCECHECK").style.display = 'block'
	d.gI("FOCUSCHANCE").style.display = 'block'
	}
else
	{
	d.gI("FOCUSCHANCECHECK").checked=false
	d.gI("FOCUSCHANCECHECK").style.display = 'none'
	d.gI("FOCUSCHANCE").style.display = 'none'
	}
if (JOB=="TH"||JOB=="AW")
	{
	d.gI("FOCUSPOWERCHECK").style.display = 'block'
	d.gI("FOCUSPOWER").style.display = 'block'
	}
else
	{
	d.gI("FOCUSPOWERCHECK").checked=false
	d.gI("FOCUSPOWERCHECK").style.display = 'none'
	d.gI("FOCUSPOWER").style.display = 'none'
	}
if (JOB=="PR"||JOB=="HE"||JOB=="RO"||JOB=="AS")
	{
	d.gI("CRITICALPOWER1CHECK").style.display = 'block'
	d.gI("CRITICALPOWER1").style.display = 'block'
	d.gI("CRITICALPOWER2CHECK").checked=false
	d.gI("CRITICALPOWER2CHECK").style.display = 'none'
	d.gI("CRITICALPOWER2").style.display = 'none'
	}
else if (JOB=="TH"||JOB=="AW")
	{
	d.gI("CRITICALPOWER2CHECK").style.display = 'block'
	d.gI("CRITICALPOWER2").style.display = 'block'
	d.gI("CRITICALPOWER1CHECK").checked=false
	d.gI("CRITICALPOWER1CHECK").style.display = 'none'
	d.gI("CRITICALPOWER1").style.display = 'none'
	}
else
	{
	d.gI("CRITICALPOWER1CHECK").checked=false
	d.gI("CRITICALPOWER1CHECK").style.display = 'none'
	d.gI("CRITICALPOWER1").style.display = 'none'
	d.gI("CRITICALPOWER2CHECK").checked=false
	d.gI("CRITICALPOWER2CHECK").style.display = 'none'
	d.gI("CRITICALPOWER2").style.display = 'none'
	}
}

}
