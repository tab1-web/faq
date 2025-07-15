---
icon: material/dog
search:
  exclude: true
hide:
  - toc
---

<script>
if (!sessionStorage.getItem('hasReloaded')) {
    sessionStorage.setItem('hasReloaded', 'true');
    setTimeout(function() {
        window.location.reload();
    }, 300);
}
</script>

<style>
fieldset {
	border-color: grey;
}
h1,h2,h3,h4 {
	text-align: center;
}
td.left {
	padding: 10px;
	border-width: 0px;
	text-align: left;
}
td.main {
	padding: 10px;
	border-width: 0px;
	text-align: left;
}
td.statcalc {
	text-align: right;
	color: white;
}
table {
	font: 8pt verdana;
	color: white;
	padding: 5;
	text-align: center;
}

table select {
	font-size: 8pt;
}
table.statcalc {
	text-align: left;
	border: 0;
	cellpadding: 5;
}

legend {
	color-adjust: exact;
  	font-size: .8rem;
	color: var(--md-typeset-color);
	font-family: var(--md-text-font-family);
}
</style>
# L2Calc for Summons (Interlude)
<table class="statcalc">
<form id="statcalculator">
<tr>
<td><fieldset>
<legend>Status Window</legend>
<table class="statcalc" width=275>
<tr><td colspan=4>
Servitor
<select style="width: 150px;" id="class" onchange="calc()">
<option value=BB>Big Boom
<option value=CO>Corrupted Man
<option value=CU>Cursed Man
<option value=DP>Dark Panther
<option value=FK>Feline King
<option value=KAI>Kai the Cat
<option value=KAT>Kat the Cat
<option value=MU>Magnus the Unicorn
<option value=MG>Mechanic Golem
<option value=MEW>Mew the Cat
<option value=NS>Nightshade
<option value=QC>Queen of Cat
<option value=RM>Reanimated Man
<option value=SH>Shadow
<option value=SG>Siege Golem
<option value=SI>Silhouette
<option value=SL>Soulless
<option value=SP>Spectral Lord
<option value=SW>Swoop Cannon
<option value=BOX>Unicorn Boxer
<option value=MER>Unicorn Merrow
<option value=MIR>Unicorn Mirage
<option value=SER>Unicorn Seraphim
<option value=WHC>Wild Hog Cannon
</select></td></tr>
<tr><td colspan=4>
Summoner Lv
<select style="width: 150px;" id="LV" onchange="calc()">
</select>
</td></tr>
<tr><td>Lv</td><td id="LVL" align=right>N/A</td></tr>
<tr><td width=95>HP</td><td id="HP" width=35 align=right>N/A</td><td width=15></td><td width=95>MP</td><td id="MP" width=35 align=right>N/A</td></tr>
<tr><td>P.Atk.</td><td id="PATK" align=right>N/A</td><td></td><td>M.Atk.</td><td id="MATK" align=right>N/A</td></tr>
<tr><td>P.Def.</td><td id="PDEF" align=right>N/A</td><td></td><td>M.Def.</td><td id="MDEF" align=right>N/A</td></tr>
<tr><td>Accuracy</td><td id="ACCURACY" align=right>N/A</td><td></td><td>Evasion</td><td id="EVASION" align=right>N/A</td></tr>
<tr><td>Critical</td><td id="CRITICAL" align=right>N/A</td><td></td><td>Speed</td><td id="SPEED" align=right>N/A</td></tr>
<tr><Td>Atk. Spd.</td><td id="ATKSPD" align=right>N/A</td><td></td><td>Casting Spd.</td><td id="CASTINGSPD" align=right>N/A</td></tr>
</table>
</fieldset></td>
<td valign=bottom>
<fieldset>
<legend>Base Stats</legend>
<table class="statcalc" cellpadding="5">
<tr><td>STR</td><td>40</td><td>DEX</td><td>30</td><td>CON</td><td>43</td></tr>
<tr><td>INT</td><td>21</td><td>WIT</td><td>20</td><td>MEN</td><td>25</td></tr>
</table>
</fieldset>
<fieldset>
<table class="statcalc" width=200>
<tr><td>HP Regen</td><td id="HPREGEN" align=right>N/A</td><td></td><td></td><td align=right></td></tr>
<tr><td>MP Regen</td><td id="MPREGEN" align=right>N/A</td><td></td><td></td><td align=right></td></tr>
</table>
</fieldset>
</td>
</tr>
</table>
<fieldset>
<table class="statcalc"
<tr>			<td colspan=8>Turn the form display on or off with these:</td></tr>
<tr>			<td width=5><input type=checkbox id="COMBATC" onclick="boxgoaway()"></td>
<td>Combat Calculations</td>
<td width=5><input type=checkbox id="EDEBUFFSC" onclick="boxgoaway()"></td>
<td>Enemy Debuffs</td>
<td width=5><input type=checkbox id="BUFFSCHECK" onclick="boxgoaway()" checked></td>
<td>Buffs</td>
<td width=5><input type=checkbox id="DEBUFFSCHECK" onclick="boxgoaway()" checked></td>
<td>Debuffs</td>
</tr>
</table>
</fieldset>
<fieldset id="COMBAT">
<legend>Combat Calculations</legend>
<table class="statcalc">
<tr><td>Enemy Target:</td>
<td><select style="width: 150px;" id="ENE" onchange="calc()">
<option value=0>Test Target
<option value=11>Clone
<option value=1>Test Monster
<option value=2>lv40 Temple Knight
<option value=3>lv40 Hawkeye
<option value=4>lv40 Prophet
<option value=5>lv61 Temple Knight
<option value=6>lv61 Hawkeye
<option value=7>lv61 Prophet
<option value=8>lv80 Temple Knight
<option value=9>lv80 Hawkeye
<option value=10>lv80 Prophet
</select></td>
</tr>
<tr><td>Position</td>
<td><select style="width: 150px;" id="POS" onchange="calc()">
<option value="1">Both facing each other
<option value="2">Attacking enemy target from the side
<option value="3">Attacking enemy target from behind
<option value="4">Enemy target attacking you from the side
<option value="5">Enemy target attacking you from behind
</select></td></tr>
<tr><td>Enemy's Buffs</td>
<td><select style="width: 150px;" id="EBUFFS" onchange="calc()">
<option value="1">Self-Buffed
<option value="2">Level 56 Prophet buffs
<option value="3">Level 56 Prophet buffs and Dances
<option value="4">Level 56 Prophet buffs and Songs
<option value="5">Level 56 Prophet buffs, Dances and Songs
<option value="6">We're all gonna die!
</select></td></tr>
<tr><td align=right><input type="checkbox" id="SS" onclick="calc()" checked></td><td>Use Soulshots</td>
</tr></table>
<table class="damage">
<tr>
<td align=left width=100></td>
<td width=100></td>
<td width=100></td>
<td width=100></td>
<td width=100></td>
<td width=100></td>
<td width=100>Avg. HP Gained<br>Per Second</td>
<td width=100></td>
<td width=100></td>
</tr>
<tr>
<td align=left></td>
<td id="SHDBLOCKRATE"></td>
<td id="SHDPDEF"></td>
<td id="AVGSHIELDPDEF"></td>
<td id="SHDMDEF"></td>
<td>Vampiric Rage:</td>
<td id="VR">N/A</td>
<td>Reflect Damage:</td>
<td id="RD">N/A</td>
</tr>
<tr><td colspan=20><hr></td></tr>
<tr>
<td align=left></td>
<td>Damage per<br>Second</td>
<td>Chance<br>to Hit</td>
<td>Hits per<br>Second</td>
<td>Normal Hit</td>
<td>Shield Block</td>
<td>Critical Chance</td>
<td>Critical Hit<br>(Normal)</td>
<td>Critical Hit<br>(Shield Block)</td>
</tr>
<tr>
<td align=left>Damage Dealt<br>to Enemy</td>
<td id="AVGDMG">N/A</td>
<td id="HITRATIO">N/A</td>
<td id="HITSPERSECOND">N/A</td>
<td id="DMGRNG">N/A</td>
<td id="SHDDMGRNG">N/A</td>
<td id="CRITCHANCE">N/A</td>
<td id="CRITDMG">N/A</td>
<td id="SBCRITDMG">N/A</td>
</tr>
<tr><td colspan=20>&nbsp</td></tr>
<tr>
<td align=left>Enemy's Damage<br>to You</td>
<td id="EAVGDMG">N/A</td>
<td id="EHITRATIO">N/A</td>
<td id="EHITSPERSECOND">N/A</td>
<td id="EDMGRNG">N/A</td>
<td id="ESHIELDDMGRNG">N/A</td>
<td id="ECRITCHANCE">N/A</td>
<td id="ECRITDMG">N/A</td>
<td id="ESBCRITDMG">N/A</td>
</tr>
</table>
</fieldset>
<fieldset id="EDEBUFFS">
<legend>Enemy Target Debuffs</legend>
<table class="statcalc">
<tr>	<td>P.Atk.</td>
<td><input type=checkbox id="EDEPC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="EDEP" onchange="calc()">
<option value="1">Curse: Weakness 1
<option value="2">Curse: Weakness 2-5
<option value="3">Curse: Weakness 6+
<option value="3">Howl
<option value="3">Poltergeist Cubic 1+
<option value="2">Power Break 1-2
<option value="3">Power Break 3+
</select></td></tr>
<tr>
<td>P.Def.</td>
<td><input type=checkbox id="EDEDC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="EDED" onchange="calc()">
<option value="1">Hex
<option value="1">Poltergeist Cubic
</select></td>
<td><input type=checkbox id="EBLKSC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="EBLKS" onchange="calc()">
<option value="1">Block Shield
<option value="2">Mass Shield Block
</select></td></tr>
<tr>	<td>Accuracy
<td><input type=checkbox id="EDEAC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="EDEA" onchange="calc()">
<option value="1">Curse Chaos 1
<option value="2">Curse Chaos 2+
<option value="1">Seal of Chaos 1-2
<option value="2">Seal of Chaos 3+
</select></td>
<td><input type=checkbox id="ESBBC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="ESBB" onchange="calc()">
<option value="1">Sand Bomb 1-5
<option value="2">Sand Bomb 6-9
<option value="3">Sand Bomb 10
</select></td></tr>
<tr>	<td>Critical
<td><input type=checkbox id="ETRBC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="ETRB" onchange="calc()">
<option value="1">Tribunal 1-6
<option value="2">Tribunal 7-9
<option value="3">Tribunal 10
</select></td></tr>
<tr>	<td>Atk. Spd.
<td><input type=checkbox id="EDENC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="EDEN" onchange="calc()">
<option value="1">Wind Shackle 1
<option value="2">Wind Shackle 2-5
<option value="3">Wind Shackle 6+
<option value="3">Poltergeist Cubic
<option value="3">Seal of Winter
<option value="3">Spoil (Atk. Spd.)
<option value="3">Spoil Festival (Atk. Spd.)
</select></td></tr>
<tr>	<td>Crit. Dmg.
<td><input type=checkbox id="EJDGC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="EJDG" onchange="calc()">
<option value="1">Judgment 1-5
<option value="2">Judgment 6-9
<option value="3">Judgment 10
</select></td></tr>
<tr>	<td>Misc.</td>
<td><input type=checkbox id="EARCRC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="EARCR" onchange="calc()">
<option value="1">Armor Crush
</select></td>
<td><input type=checkbox id="ECBYC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="ECBY" onchange="calc()">
<option value="1">Curse of Abyss
</select></td>
<td><input type=checkbox id="ECDMC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="ECDM" onchange="calc()">
<option value="1">Curse of Doom
</select></td>
<td><input type=checkbox id="ECSHC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="ECSH" onchange="calc()">
<option value="1">Curse of Shade 1
<option value="2">Curse of Shade 2
<option value="3">Curse of Shade 3
<option value="1">Mass Curse of Shade 1
<option value="2">Mass Curse of Shade 2
<option value="3">Mass Curse of Shade 3
</select></td></tr>
<tr>	<td></td>
<td><input type=checkbox id="EDBDC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="EDBD" onchange="calc()">
<option value="1">Demonic Blade Dance 1-3
<option value="2">Demonic Blade Dance 4-5
<option value="3">Demonic Blade Dance 6-7
<option value="4">Demonic Blade Dance 8-9
<option value="5">Demonic Blade Dance 10
</select></td>
<td><input type=checkbox id="EFVC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="EFV" onchange="calc()">
<option value="1">Fire Vortex
</select></td>
<td><input type=checkbox id="EHEEC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="EHEE" onchange="calc()">
<option value="1">Heroic Grandeur
</select></td>
<td><input type=checkbox id="ECHOLC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="ECHOL" onchange="calc()">
<option value="1">Hot Springs Cholera 1
<option value="2">Hot Springs Cholera 2
<option value="3">Hot Springs Cholera 3
<option value="4">Hot Springs Cholera 4
<option value="5">Hot Springs Cholera 5
<option value="6">Hot Springs Cholera 6
<option value="7">Hot Springs Cholera 7
<option value="8">Hot Springs Cholera 8
<option value="9">Hot Springs Cholera 9
<option value="10">Hot Springs Cholera 10
</select></td></tr>
<tr>	<td></td>
<td><input type=checkbox id="EIVC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="EIV" onchange="calc()">
<option value="1">Ice Vortex
</select></td>
<td><input type=checkbox id="ELVORC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="ELVOR" onchange="calc()">
<option value="1">Light Vortex
</select></td>
<td><input type=checkbox id="EPSYC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="EPSY" onchange="calc()">
<option value="1">Psycho Symphony 1-3
<option value="2">Psycho Symphony 4-5
<option value="3">Psycho Symphony 6-7
<option value="4">Psycho Symphony 8-9
<option value="5">Psycho Symphony 10
</select></td>
<td><input type=checkbox id="ESBC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="ESB" onchange="calc()">
<option value="1">Shock Blast
</select></td></tr>
<tr>	<td></td>
<td><input type=checkbox id="EDERC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="EDER" onchange="calc()">
<option value="1">Seal of Despair
</select></td>
<td><input type=checkbox id="EWVC" onclick="edebuffs();calc()"></td>
<td><select style="width: 110px;" id="EWV" onchange="calc()">
<option value="1">Wind Vortex
</select></td></tr>
</table>
</fieldset>
<fieldset id="BUFFS">
<legend>Buffs</legend>
<table class="statcalc">
<tr>			<td colspan=2 align=right>Buffs Quickselect:</td>
<td colspan=5><select style="width: 150px;" id="SETBUFFS" onchange="buffs(true);calc()">
<option>==============
<option value="0">clear all buffs
<option value="38">Lvl 78 Elemental Summoner
<option value="39">Lvl 77 Elemental Summoner
<option value="40">Lvl 56 Elemental Summoner
<option value="41">Lvl 52 Elemental Summoner
<option value="42">Lvl 48 Elemental Summoner
<option value="43">Lvl 44 Elemental Summoner
<option value="44">Lvl 40 Elemental Summoner
<option value="0">clear all buffs
<option value="45">Lvl 78 Phantom Summoner
<option value="46">Lvl 77 Phantom Summoner
<option value="47">Lvl 56 Phantom Summoner
<option value="48">Lvl 52 Phantom Summoner
<option value="49">Lvl 48 Phantom Summoner
<option value="50">Lvl 44 Phantom Summoner
<option value="51">Lvl 40 Phantom Summoner
<option value="0">clear all buffs
<option value="52">Lvl 78 Warlock
<option value="53">Lvl 77 Warlock
<option value="54">Lvl 56 Warlock
<option value="55">Lvl 52 Warlock
<option value="56">Lvl 48 Warlock
<option value="57">Lvl 44 Warlock
<option value="58">Lvl 40 Warlock
<option value="0">clear all buffs
<option value="1">Lvl 78 Hierophant
<option value="2">Lvl 72 Prophet
<option value="3">Lvl 66 Prophet
<option value="4">Lvl 56 Prophet
<option value="5">Lvl 52 Prophet
<option value="6">Lvl 48 Prophet
<option value="7">Lvl 44 Prophet
<option value="8">Lvl 40 Prophet
<option value="0">clear all buffs
<option value="9">Lvl 78 Shillien's Saint
<option value="10">Lvl 72 Shillien Elder
<option value="11">Lvl 58 Shillien Elder
<option value="12">Lvl 56 Shillien Elder
<option value="13">Lvl 52 Shillien Elder
<option value="14">Lvl 48 Shillien Elder
<option value="15">Lvl 44 Shillien Elder
<option value="16">Lvl 40 Shillien Elder
<option value="0">clear all buffs
<option value="17">Lvl 78 Doomcryer
<option value="18">Lvl 74 Warcryer
<option value="19">Lvl 68 Warcryer
<option value="20">Lvl 66 Warcryer
<option value="21">Lvl 64 Warcryer
<option value="22">Lvl 58 Warcryer
<option value="23">Lvl 56 Warcryer
<option value="24">Lvl 52 Warcryer
<option value="25">Lvl 48 Warcryer
<option value="26">Lvl 44 Warcryer
<option value="27">Lvl 40 Warcryer
<option value="0">clear all buffs
<option value="28">Lvl 77 Dominator
<option value="29">Lvl 64 Overlord
<option value="30">Lvl 58 Overlord
<option value="31">Lvl 56 Overlord
<option value="32">Lvl 52 Overlord
<option value="33">Lvl 48 Overlord
<option value="34">Lvl 44 Overlord
<option value="35">Lvl 40 Overlord
<option value="0">clear all buffs
</select></td></tr>
<tr>	<td>HP</td>
<td><input type=checkbox id="BTBCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="BTB" onchange="calc()">
<option value="1">Bless the Body 1
<option value="2">Bless the Body 2
<option value="3">Bless the Body 3
<option value="4">Bless the Body 4
<option value="5">Bless the Body 5
<option value="6" selected>Bless the Body 6
<option value="1">Body of Avatar 1
<option value="2">Body of Avatar 2
<option value="3">Body of Avatar 3
<option value="4">Body of Avatar 4
<option value="5">Body of Avatar 5
<option value="6">Body of Avatar 6
</select></td>
<td><input type=checkbox id="VITCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="VIT" onchange="calc()">
<option value="SOV">Song of Vitality
</select></td></tr>
<tr>
<td>MP</td>
<td><input type=checkbox id="BTSCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="BTS" onchange="calc()">
<option value="1">Bless the Soul 1
<option value="2">Bless the Soul 2
<option value="3">Bless the Soul 3
<option value="4">Bless the Soul 4
<option value="5">Bless the Soul 5
<option value="6" selected>Bless the Soul 6
</select></td></tr>
<tr>
<td>P.Atk.</td>
<td><input type=checkbox id="MIGHTCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="MIGHT" onchange="calc()">
<option value="1">Might 1
<option value="2">Might 2
<option value="3">Might 3
<option value="3">Herb of Strength
<option value="1">Chant of Battle 1
<option value="2">Chant of Battle 2
<option value="3">Chant of Battle 3
<option value="1">Pa'agrian Gift 1
<option value="2">Pa'agrian Gift 2
<option value="3">Pa'agrian Gift 3
<option value="1">Mighty Servitor 1
<option value="2">Mighty Servitor 2
<option value="3" selected>Mighty Servitor 3
</select>
<td><input type=checkbox id="DOWACHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="DOWA" onchange="calc()">
<option value="1">Dance of Warrior
</select></td>
<td>
<table class="no-md-styling"><tr>
<td><input type=checkbox id="GREATERMIGHTCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="GREATERMIGHT" onchange="calc()">
<option value="1">Greater Might 1
<option value="2">Greater Might 2
<option value="3" selected>Greater Might 3
<option value="1">War Chant 1
<option value="2">War Chant 2
<option value="3">War Chant 3
</select></td>
</tr></table>
</td>
</tr>
<tr>
<td>M.Atk.</td>
<td><input type=checkbox id="EMPCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="EMP" onchange="calc()">
<option value="1">Empower 1
<option value="2">Empower 2
<option value="3">Greater Empower 3
<option value="3">Herb of Magic
<option value="3">Soul of Pa'agrio
<option value="1">Bright Servitor 1
<option value="2">Bright Servitor 2
<option value="3" selected>Bright Servitor 3
</select></td>
<td><input type=checkbox id="DOMYCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="DOMY" onchange="calc()">
<option value="1">Dance of Mystic
</select></td></tr>
<tr>
<td>P.Def.</td>
<td><input type=checkbox id="SHIELDCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="SHIELD" onchange="calc()">
<option value="1">Shield 1
<option value="2">Shield 2
<option value="3">Shield 3
<option value="1">Blessings of Pa'agrio 1
<option value="2">Blessings of Pa'agrio 2
<option value="3">Blessings of Pa'agrio 3
<option value="1">Chant of Shielding 1
<option value="2">Chant of Shielding 2
<option value="3">Chant of Shielding 3
<option value="1">Soul Shield 1
<option value="2">Soul Shield 2
<option value="3">Soul Shield 3
<option value="1">Servitor Physical Shield 1
<option value="2">Servitor Physical Shield 2
<option value="3" selected>Servitor Physical Shield 3
</select></td>
<td><input type=checkbox id="SOECHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="SOEA" onchange="calc()">
<option value="SOE">Song of Earth
</select></td>
<td>
<table class="no-md-styling"><tr>
<td><input type=checkbox id="GREATERSHIELDCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="GREATERSHIELD" onchange="calc()">
<option value="1">Greater Shield 1
<option value="2">Greater Shield 2
<option value="3" selected>Greater Shield 3
<option value="1">Earth Chant 1
<option value="2">Earth Chant 2
<option value="3">Earth Chant 3
</select></td>
</tr></table>
</td>
</tr>
<tr>
<td>M.Def.</td>
<td><input type=checkbox id="MBCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="MB" onchange="calc()">
<option value="2">Magic Barrier 1
<option value="3" selected>Magic Barrier 2
<option value="1">Chant of Fire 1
<option value="2">Chant of Fire 2
<option value="3">Chant of Fire 3
<option value="1">Glory of Pa'agrio 1
<option value="2">Glory of Pa'agrio 2
<option value="3">Glory of Pa'agrio 3
<option value="2">Servitor Magic Shield 1
<option value="3">Servitor Magic Shield 2
</select>
<td><input type=checkbox id="WARDCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="WARD" onchange="calc()">
<option value="SOW">Song of Warding
</select></td></tr>
<tr>
<td>Accuracy</td>
<td><input type=checkbox id="GUIDCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="GUID" onchange="calc()">
<option value="1">Guidance 1
<option value="2">Guidance 2
<option value="3" selected>Guidance 3
<option value="1">Chant of Eagle 1
<option value="2">Chant of Eagle 2
<option value="3">Chant of Eagle 3
<option value="1">Vision of Pa'agrio 1
<option value="2">Vision of Pa'agrio 2
<option value="3">Vision of Pa'agrio 3
</select></td>
<td><input type=checkbox id="DOICHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="DOI" onchange="calc()">
<option value="DOI">Dance of Inspiration
</select></td>
</tr>
<tr>
<td>Evasion</td>
<td><input type=checkbox id="AGICHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="AGI" onchange="calc()">
<option value="1">Agility 1
<option value="2">Agility 2
<option value="3" selected>Agility 3
<option value="1">Chant of Evasion 1
<option value="2">Chant of Evasion 2
<option value="3">Chant of Evasion 3
<option value="1">Tact of Pa'agrio 1
<option value="2">Tact of Pa'agrio 2
<option value="3">Tact of Pa'agrio 3
</select></td>
<td><input type=checkbox id="SWATCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="SWAT" onchange="calc()">
<option value="SOW">Song of Water
</select></td>
</tr>
<tr>
<td>Critical</td>
<td><input type=checkbox id="FCSCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="FCS" onchange="calc()">
<option value="1">Focus 1
<option value="2">Focus 2
<option value="3" selected>Focus 3
<option value="1">Chant of Predator 1
<option value="2">Chant of Predator 2
<option value="3">Chant of Predator 3
<option value="3">Herb of Critical Attack
</select></td>
<td><input type=checkbox id="SOHCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="SOH" onchange="calc()">
<option value="SOH">Song of Hunter
</select></td></tr>
<tr>
<td>Speed</td>
<td><input type=checkbox id="WWCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="WW" onchange="calc()">
<option value="1">Wind Walk 1
<option value="2">Wind Walk 2
<option value="1">Pa'agrian Haste 1
<option value="2">Pa'agrian Haste 2
<option value="1" id="Sprint1">Sprint 1
<option value="2" id="Sprint2">Sprint 2
<option value="1">Haste Potion
<option value="2">Greater Quick Step Potion
<option value="2">Herb of Speed
<option value="1">Servitor Wind Walk 1
<option value="2" selected>Servitor Wind Walk 2
</select></td>
<td><input type=checkbox id="SWINDCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="SWIND" onchange="calc()">
<option value="SOW">Song of Wind
</select></td>
<td>
<table class="no-md-styling"><tr>
<td><input type=checkbox id="DSHCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="DSH" onchange="calc()">
<option value="DOS">Dance of Shadow
</select></td>
</tr></table>
</td>
</tr>
<tr>
<td>Atk. Spd.</td>
<td><input type=checkbox id="HASTECHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="HASTE" onchange="calc()">
<option value="1">Haste 1
<option value="2">Haste 2
<option value="1">Chant of Fury 1
<option value="2">Chant of Fury 2
<option value="1">Potion of Alacrity
<option value="2">Greater Swift Attack Potion
<option value="2">Herb of Atk. Speed
<option value="1">Servitor Haste 1
<option value="2" selected>Servitor Haste 2
</select></td>
<td><input type=checkbox id="DFURYCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="DFURY" onchange="calc()">
<option value="DOF">Dance of Fury
</select></td>
</tr>
<tr>
<td>Casting Spd.</td>
<td><input type=checkbox id="ACUCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="ACU" onchange="calc()">
<option value="1">Acumen 1
<option value="2">Acumen 2
<option value="3" selected>Acumen 3
<option value="1">Chant of Flame 1
<option value="2">Chant of Flame 2
<option value="3">Chant of Flame 3
<option value="1">Wisdom of Pa'agrio 1
<option value="2">Wisdom of Pa'agrio 2
<option value="3">Wisdom of Pa'agrio 3
<option value="2">Magic Haste Potion
<option value="3">Greater Magic Haste Potion
<option value="3">Herb of Casting Spd.
</select></td>
<td><input type=checkbox id="DCONCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="DCON" onchange="calc()">
<option value="DOC">Dance of Concentration
</select></td></tr>
<td>Crit. Dmg.</td>
<td><input type=checkbox id="DEWC" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="DEW" onchange="calc()">
<option value="1">Death Whisper 1
<option value="2">Death Whisper 2
<option value="3">Death Whisper 3
<option value="4">Chant of Rage 1
<option value="5">Chant of Rage 2
<option value="6">Chant of Rage 3
<option value="9">The Eye of Pa'agrio
</select></td>
<td><input type=checkbox id="DOFC" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="DOF" onchange="calc()">
<option value="1">Dance of Fire
</select></td></tr>
<tr>
<td>Vampiric Rage</td>
<td><input type=checkbox id="VRAC" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="VRA" onchange="calc()">
<option value="1">Vampiric Rage 1
<option value="2">Vampiric Rage 2
<option value="3">Vampiric Rage 3
<option value="4">Vampiric Rage 4
<option value="5">Chant of Vampire 1
<option value="6">Chant of Vampire 2
<option value="7">Chant of Vampire 3
<option value="8">Chant of Vampire 4
</select></td>
<td><input type=checkbox id="DOVC" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="DOV" onchange="calc()">
<option value="1">Dance of Vampire
</select></td></tr>
<tr>
<td>Regen</td>
<td><input type=checkbox id="RGNC" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="RGN" onchange="calc()">
<option value="1">Regeneration 1
<option value="2">Regeneration 2
<option value="3">Regeneration 3
</select></td>
<td><input type=checkbox id="SOLC" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="SOL" onchange="calc()">
<option value="1">Song of Life
</select></td>
<td>
<table class="no-md-styling"><tr>
<td><input type=checkbox id="SOMC" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="SOM" onchange="calc()">
<option value="1">Song of Meditation
</select></td>
</tr><tr>
<td><input type=checkbox id="SERC" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="SER" onchange="calc()">
<option value="1">Blessing of Seraphim 1
<option value="2">Blessing of Seraphim 2
<option value="3">Blessing of Seraphim 3
</select></td>
</tr></table>
</td></tr>
<tr>
<td>Reflect Damage</td>
<td><input type=checkbox id="SKNC" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="SKN" onchange="calc()">
<option value="1">Chant of Revenge 1
<option value="2">Chant of Revenge 2
<option value="3">Chant of Revenge 3
<option value="4">Blazing Skin 1
<option value="5">Blazing Skin 2
<option value="6">Blazing Skin 3
<option value="7">Freezing Skin 1
<option value="8">Freezing Skin 2
<option value="9">Freezing Skin 3
<option value="10">Reflect Damage 1
<option value="11">Reflect Damage 2
<option value="12">Reflect Damage 3
</select>
<td><input type=checkbox id="SOVC" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="SOV" onchange="calc()">
<option value="1">Song of Vengeance 1
</select></tr>
<tr>
<td>Misc.</td>
<td><input type=checkbox id="ZERKCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="ZERK" onchange="calc()">
<option value="1">Berserker Spirit 1
<option value="2" selected>Berserker Spirit 2
<option value="1">Rage of Pa'agrio 1
<option value="2">Rage of Pa'agrio 2
</select></td>
<td><input type=checkbox id="QUEENCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="QUEEN" onchange="calc()">
<option value="4">Blessing of Queen 1
<option value="5">Blessing of Queen 2
<option value="6" selected>Blessing of Queen 3
<option value="1">Gift of Queen 1
<option value="2">Gift of Queen 2
<option value="3">Gift of Queen 3
</select></td>
<td>
<table class="no-md-styling"><tr>
<td><input type=checkbox id="PROPHCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="PROPH" onchange="calc()">
<option value="1">Chant of Victory
<option value="2">Prophecy of Fire
<option value="3">Prophecy of Water
<option value="4">Prophecy of Wind
<option value="1" selected>Final Servitor
<option value="2">Warrior Servitor
<option value="3">Wizard Servitor
<option value="4">Assassin Servitor
<option value="5">Magnus' Chant
</select></td>
</tr><tr>
<td><input type=checkbox id="UDCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="UD" onchange="calc()">
<option value="1">Servitor Empowerment 1
<option value="2" selected>Servitor Empowerment 2
</select></td>
</tr></table>
</td>
</tr></table>
</fieldset>
<fieldset id="DEBUFFS">
<legend>Debuffs</legend>
<table class="statcalc">
<tr>	<td>P.Atk.</td>
<td><input type=checkbox id="DEPATKCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="DEPATK" onchange="calc()">
<option value="1">Curse: Weakness 1
<option value="2">Curse: Weakness 2-5
<option value="3">Curse: Weakness 6+
<option value="3">Howl
<option value="3">Poltergeist Cubic 1+
<option value="2">Power Break 1-2
<option value="3">Power Break 3+
</select></td></tr>
<tr>
<td>P.Def.</td>
<td><input type=checkbox id="DEPDEFCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="DEPDEF" onchange="calc()">
<option value="1">Hex
<option value="1">Poltergeist Cubic
</select></td>
<td><input type=checkbox id="BLKSCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="BLKS" onchange="calc()">
<option value="BLKS">Block Shield
<option value="MBLKS">Mass Shield Block
</select></td></tr>
<tr>	<td>M.Def.</td>
<td><input type=checkbox id="GLOOMCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="GLOOM" onchange="calc()">
<option value="CG1">Curse Gloom
</select></td></tr>
<tr>	<td>Accuracy
<td><input type=checkbox id="DEACCCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="DEACC" onchange="calc()">
<option value="1">Curse Chaos 1
<option value="2">Curse Chaos 2+
<option value="1">Seal of Chaos 1-2
<option value="2">Seal of Chaos 3+
</select></td>
<td><input type=checkbox id="SANDBOMBCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="SANDBOMB" onchange="calc()">
<option value="1">Sand Bomb 1-5
<option value="3">Sand Bomb 10
</select></td></tr>
<tr>	<td>Critical
<td><input type=checkbox id="TRIBUNALCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="TRIBUNAL" onchange="calc()">
<option value="1">Tribunal 1-6
<option value="2">Tribunal 7-9
<option value="3">Tribunal 10
</select></td></tr>
<tr>	<td>Speed</td>
<td><input type=checkbox id="DESPEEDCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="DESPEED" onchange="calc()">
<option value="1">Slow 1
<option value="2">Slow 2+
<option value="2">Blizzard
<option value="1">Cripple 1-5
<option value="2">Cripple 6+
<option value="1">Entangle 1
<option value="2">Entangle 2+
<option value="1">Freezing Strike
<option value="1">Frost Bolt
<option value="2">Hamstring
<option value="2">Hamstring Shot
<option value="1">Ice Bolt
<option value="2">Mass Slow
<option value="1">Seal of Slow 1
<option value="2">Seal of Slow 2
</select></td>
<td><input type=checkbox id="BWWCHECK" onclick="buffs();calc()"></td>
<td><select style="width: 150px;" id="BWW" onchange="calc()">
<option value="BWW">Block Wind Walk
<option value="MBWW">Mass Block Wind Walk
</select></td></tr>
<tr>	<td>Atk. Spd.
<td><input type=checkbox id="DEASPDCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="DEASPD" onchange="calc()">
<option value="1">Wind Shackle 1
<option value="2">Wind Shackle 2-5
<option value="3">Wind Shackle 6+
<option value="3">Poltergeist Cubic
<option value="3">Seal of Winter
<option value="3">Spoil (Atk. Spd.)
<option value="3">Spoil Festival (Atk. Spd.)
</select></td></tr>
<tr>	<td>Misc.</td>
<td><input type=checkbox id="ACCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="ARCR" onchange="calc()">
<option value="ARC1">Armor Crush
</select></td>
<td><input type=checkbox id="COABYSSCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="COABYSS" onchange="calc()">
<option value="COA1">Curse of Abyss
</select></td>
<td>
<table class="no-md-styling"><tr>
<td><input type=checkbox id="CODOOMCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="CODOOM" onchange="calc()">
<option value="COD1">Curse of Doom
</select></td>
</tr><tr>
<td><input type=checkbox id="COSHADECHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="COSHADE" onchange="calc()">
<option value="1">Curse of Shade 1
<option value="2">Curse of Shade 2
<option value="3">Curse of Shade 3
<option value="1">Mass Curse of Shade 1
<option value="2">Mass Curse of Shade 2
<option value="3">Mass Curse of Shade 3
</select></td>
</tr></table>
</td>
</tr>
<tr>	<td></td>
<td><input type=checkbox id="DEMONICBDCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="DEMONICBD" onchange="calc()">
<option value="2">Demonic Blade Dance 4-5
<option value="5">Demonic Blade Dance 10
</select></td>
<td><input type=checkbox id="DVCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="DV" onchange="calc()">
<option value="DV">Dark Vortex
</select></td>
<td>
<table class="no-md-styling"></tr>
<td><input type=checkbox id="FVCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="FV" onchange="calc()">
<option value="FV">Fire Vortex
</select></td>
</tr><tr>
<td><input type=checkbox id="CHOLCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="CHOL" onchange="calc()">
<option value="1">Hot Springs Cholera 1
<option value="2">Hot Springs Cholera 2
<option value="3">Hot Springs Cholera 3
<option value="4">Hot Springs Cholera 4
<option value="5">Hot Springs Cholera 5
<option value="6">Hot Springs Cholera 6
<option value="7">Hot Springs Cholera 7
<option value="8">Hot Springs Cholera 8
<option value="9">Hot Springs Cholera 9
<option value="10">Hot Springs Cholera 10
</select></td>
</tr></table>
</td>
</tr>
<tr>	<td></td>
<td><input type=checkbox id="MALCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="MAL" onchange="calc()">
<option value="1">Hot Springs Malaria 1
<option value="2">Hot Springs Malaria 2
<option value="3">Hot Springs Malaria 3
<option value="4">Hot Springs Malaria 4
<option value="5">Hot Springs Malaria 5
<option value="6">Hot Springs Malaria 6
<option value="7">Hot Springs Malaria 7
<option value="8">Hot Springs Malaria 8
<option value="9">Hot Springs Malaria 9
<option value="10">Hot Springs Malaria 10
</select></td>
<td><input type=checkbox id="IVCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="IV" onchange="calc()">
<option value="IV">Ice Vortex
</select></td>
<td>
<table class="no-md-styling"><tr>
<td><input type=checkbox id="LVORCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="LVOR" onchange="calc()">
<option value="LV">Light Vortex
</select></td>
</tr><tr>
<td><input type=checkbox id="PSYCHOCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="PSYCHO" onchange="calc()">
<option value="1">Psycho Symphony 1-3
</select></td>
</tr></table>
</tr>
<tr>	<td></td>
<td><input type=checkbox id="SBCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="SB" onchange="calc()">
<option value="SB">Shock Blast
</select></td>
<td><input type=checkbox id="DESPAIRCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="DESPAIR" onchange="calc()">
<option value="SOD1">Seal of Despair
</select></td>
<td>
<table class="no-md-styling"><tr>
<td><input type=checkbox id="WVCHECK" onclick="debuffs();calc()"></td>
<td><select style="width: 150px;" id="WV" onchange="calc()">
<option value="WV">Wind Vortex
</select></td>
</tr></table>
</tr>
</table>
</form>


<script src="/faq/features/js/pet_calc/rawdata.js"></script>
<script src="/faq/features/js/pet_calc/summoncalc.js"></script>

<script>
window.addEventListener('load', function() {
    buffs();
    debuffs();
    edebuffs();
    calc();
    boxgoaway();

    setTimeout(initializeWeaponSAs, 100);
});
</script>
