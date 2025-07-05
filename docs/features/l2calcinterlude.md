---
icon: material/calculator
search:
  exclude: true

---

# L2Calc Interlude

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

<table width=100% cellspacing=0 cellpadding=3 class=""> 
<tr> <td valign=top>
  <table width="100%"  border="0" cellspacing="0" cellpadding="0" class="">

    <tr>
<table class="statcalc">
<form id="statcalculator">
<tr id="stickytr">
<td><fieldset>
<legend>Status Window</legend>
<div style="margin-bottom: 10px; padding: 5px; border-radius: 4px;">
    <strong>Profile:</strong>
    <select onchange="changeCookie(this.value);"><option value="1" selected="selected">1</option></select>
    <input type="button" id="save" value="Save" onclick="saveCookie()">
    <input type="button" id="clear" value="Remove" onclick="clearCookie();">
    <input type="button" id="load" value="Loading" onclick="loadCookie()">
</div>
	Lv 
		<select id="LV" onchange="passives(true);calc()"><option value="1">1<option value="2">2<option value="3">3<option value="4">4<option value="5">5<option value="6">6<option value="7">7<option value="8">8<option value="9">9<option value="10">10<option value="11">11<option value="12">12<option value="13">13<option value="14">14<option value="15">15<option value="16">16<option value="17">17<option value="18">18<option value="19">19<option value="20">20<option value="21">21<option value="22">22<option value="23">23<option value="24">24<option value="25">25<option value="26">26<option value="27">27<option value="28">28<option value="29">29<option value="30">30<option value="31">31<option value="32">32<option value="33">33<option value="34">34<option value="35">35<option value="36">36<option value="37">37<option value="38">38<option value="39">39<option value="40">40<option value="41">41<option value="42">42<option value="43">43<option value="44">44<option value="45">45<option value="46">46<option value="47">47<option value="48">48<option value="49">49<option value="50">50<option value="51">51<option value="52">52<option value="53">53<option value="54">54<option value="55">55<option value="56">56<option value="57">57<option value="58">58<option value="59">59<option value="60">60<option value="61">61<option value="62">62<option value="63">63<option value="64">64<option value="65">65<option value="66">66<option value="67">67<option value="68">68<option value="69">69<option value="70">70<option value="71">71<option value="72">72<option value="73">73<option value="74">74<option value="75">75<option value="76">76<option value="77">77<option value="78">78<option value="79">79<option value="80">80</select>

	Class 
		<select id="job" onchange="buffs();toggles();classskills();passives(true);calc(true,false)">
			<option value=1>Abyss Walker
			<option value=2>Artisan
			<option value=3>Assassin
			<option value=4>Bishop
			<option value=5>Bladedancer
			<option value=6>Bounty Hunter
			<option value=7>Cleric
			<option value=8>Dark Avenger
			<option value=9>Dark Fighter
			<option value=10>Dark Mystic
			<option value=11>Dark Wizard
			<option value=12>Destroyer
			<option value=13>Dwarven Fighter
			<option value=14>Elemental Summoner
			<option value=15>Elven Elder
			<option value=16>Elven Fighter
			<option value=17>Elven Knight
			<option value=18>Elven Mystic
			<option value=19>Elven Oracle
			<option value=20>Elven Scout
			<option value=21>Elven Wizard
			<option value=22>Gladiator
			<option value=23>Hawkeye
			<option value=24>Human Fighter
			<option value=25>Human Knight
			<option value=26>Human Mystic
			<option value=27>Monk
			<option value=28>Necromancer
			<option value=29>Orc Fighter
			<option value=30>Orc Mystic
			<option value=31>Orc Raider
			<option value=32>Orc Shaman
			<option value=33>Overlord
			<option value=34>Paladin
			<option value=35>Palus Knight
			<option value=36>Phantom Ranger
			<option value=37>Phantom Summoner
			<option value=38>Plainswalker
			<option value=39>Prophet
			<option value=40>Rogue
			<option value=41>Scavenger
			<option value=42>Shillien Elder
			<option value=43>Shillien Knight
			<option value=44>Shillien Oracle
			<option value=45>Silver Ranger
			<option value=46>Sorcerer
			<option value=47>Spellhowler
			<option value=48>Spellsinger
			<option value=49>Swordsinger
			<option value=50>Temple Knight
			<option value=51>Treasure Hunter
			<option value=52>Tyrant
			<option value=53>Warcryer
			<option value=54>Warlock
			<option value=55>Warlord
			<option value=56>Warrior
			<option value=57>Warsmith
			<option value=58>Wizard
		</select>

<table class="statcalc" width=275>
	<tr><td width=95>HP</td><td id="HP" align=right>N/A</td><td width=15></td><td width=95>CP</td><td id="CP" width=35 align=right>N/A</td></tr>
	<tr><td>MP</td><td id="MP" align=right>N/A</td><td></td><td></td><td id="TEST" align=right></td></tr>
	<tr><td>P.Atk.</td><td id="PATK" align=right>N/A</td><td></td><td>M.Atk.</td><td id="MATK" align=right>N/A</td></tr>

	<tr><td>P.Def.</td><td id="PDEF" align=right>N/A</td><td></td><td>M.Def.</td><td id="MDEF" align=right>N/A</td></tr>
	<tr><td>Accuracy</td><td id="ACCURACY" align=right>N/A</td><td></td><td>Evasion</td><td id="EVASION" align=right>N/A</td></tr>
	<tr><td>Critical</td><td id="CRITICAL" align=right>N/A</td><td></td><td>Speed</td><td id="SPEED" align=right>N/A</td></tr>

	<tr><td>Atk. Spd.</td><td id="ATKSPD" align=right>N/A</td><td></td><td>Casting Spd.</td><td id="CASTINGSPD" align=right>N/A</td></tr>
</table>
</fieldset></td>
<td valign=bottom>
<fieldset>
<legend>Base Stats</legend>
<table class="statcalc" cellpadding="5">
	<tr><td>STR</td><td id="STR">N/A</td><td>DEX</td><td id="DEX">N/A</td><td>CON</td><td id="CON">N/A</td></tr>

	<tr><td>INT</td><td id="INT">N/A</td><td>WIT</td><td id="WIT">N/A</td><td>MEN</td><td id="MEN">N/A</td></tr>
</table>
<table class="statcalc">
<tr><td colspan=4>Tattoos</td></tr>
<tr>			<td><input type=checkbox id="TTT1C" onclick="calc()" checked></td><td>1</td>
<td colspan=3>			<select id="ts1n" onchange="calc()"><option value="0">No Tattoo<option value="1">CON+1 DEX-1<option value="2">CON+1 DEX-2<option value="3">CON+1 DEX-3<option value="4">CON+1 STR-1<option value="5">CON+1 STR-2<option value="6">CON+1 STR-3<option value="7">CON+2 DEX-2<option value="8">CON+2 DEX-3<option value="9">CON+2 DEX-4<option value="10">CON+2 STR-2<option value="11">CON+2 STR-3<option value="12">CON+2 STR-4<option value="13">CON+3 DEX-3<option value="14">CON+3 DEX-4<option value="15">CON+3 DEX-5<option value="16">CON+3 STR-3<option value="17">CON+3 STR-4<option value="18">CON+3 STR-5<option value="19">CON+4 DEX-4<option value="20">CON+4 DEX-5<option value="21">CON+4 DEX-6<option value="22">CON+4 STR-4<option value="23">CON+4 STR-5<option value="24">CON+4 STR-6<option value="25">DEX+1 CON-1<option value="26">DEX+1 CON-2<option value="27">DEX+1 CON-3<option value="28">DEX+1 STR-1<option value="29">DEX+1 STR-2<option value="30">DEX+1 STR-3<option value="31">DEX+2 CON-2<option value="32">DEX+2 CON-3<option value="33">DEX+2 CON-4<option value="34">DEX+2 STR-2<option value="35">DEX+2 STR-3<option value="36">DEX+2 STR-4<option value="37">DEX+3 CON-3<option value="38">DEX+3 CON-4<option value="39">DEX+3 CON-5<option value="40">DEX+3 STR-3<option value="41">DEX+3 STR-4<option value="42">DEX+3 STR-5<option value="43">DEX+4 CON-4<option value="44">DEX+4 CON-5<option value="45">DEX+4 CON-6<option value="46">DEX+4 STR-4<option value="47">DEX+4 STR-5<option value="48">DEX+4 STR-6<option value="49">INT+1 MEN-1<option value="50">INT+1 MEN-2<option value="51">INT+1 MEN-3<option value="52">INT+1 WIT-1<option value="53">INT+1 WIT-2<option value="54">INT+1 WIT-3<option value="55">INT+2 MEN-2<option value="56">INT+2 MEN-3<option value="57">INT+2 MEN-4<option value="58">INT+2 WIT-2<option value="59">INT+2 WIT-3<option value="60">INT+2 WIT-4<option value="61">INT+3 MEN-3<option value="62">INT+3 MEN-4<option value="63">INT+3 MEN-5<option value="64">INT+3 WIT-3<option value="65">INT+3 WIT-4<option value="66">INT+3 WIT-5<option value="67">INT+4 MEN-4<option value="68">INT+4 MEN-5<option value="69">INT+4 MEN-6<option value="70">INT+4 WIT-4<option value="71">INT+4 WIT-5<option value="72">INT+4 WIT-6<option value="73">MEN+1 INT-1<option value="74">MEN+1 INT-2<option value="75">MEN+1 INT-3<option value="76">MEN+1 WIT-1<option value="77">MEN+1 WIT-2<option value="78">MEN+1 WIT-3<option value="79">MEN+2 INT-2<option value="80">MEN+2 INT-3<option value="81">MEN+2 INT-4<option value="82">MEN+2 WIT-2<option value="83">MEN+2 WIT-3<option value="84">MEN+2 WIT-4<option value="85">MEN+3 INT-3<option value="86">MEN+3 INT-4<option value="87">MEN+3 INT-5<option value="88">MEN+3 WIT-3<option value="89">MEN+3 WIT-4<option value="90">MEN+3 WIT-5<option value="91">MEN+4 INT-4<option value="92">MEN+4 INT-5<option value="93">MEN+4 INT-6<option value="94">MEN+4 WIT-4<option value="95">MEN+4 WIT-5<option value="96">MEN+4 WIT-6<option value="97">STR+1 CON-1<option value="98">STR+1 CON-2<option value="99">STR+1 CON-3<option value="100">STR+1 DEX-1<option value="101">STR+1 DEX-2<option value="102">STR+1 DEX-3<option value="103">STR+2 CON-2<option value="104">STR+2 CON-3<option value="105">STR+2 CON-4<option value="106">STR+2 DEX-2<option value="107">STR+2 DEX-3<option value="108">STR+2 DEX-4<option value="109">STR+3 CON-3<option value="110">STR+3 CON-4<option value="111">STR+3 CON-5<option value="112">STR+3 DEX-3<option value="113">STR+3 DEX-4<option value="114">STR+3 DEX-5<option value="115">STR+4 CON-4<option value="116">STR+4 CON-5<option value="117">STR+4 CON-6<option value="118">STR+4 DEX-4<option value="119">STR+4 DEX-5<option value="120">STR+4 DEX-6<option value="121">WIT+1 INT-1<option value="122">WIT+1 INT-2<option value="123">WIT+1 INT-3<option value="124">WIT+1 MEN-1<option value="125">WIT+1 MEN-2<option value="126">WIT+1 MEN-3<option value="127">WIT+2 INT-2<option value="128">WIT+2 INT-3<option value="129">WIT+2 INT-4<option value="130">WIT+2 MEN-2<option value="131">WIT+2 MEN-3<option value="132">WIT+2 MEN-4<option value="133">WIT+3 INT-3<option value="134">WIT+3 INT-4<option value="135">WIT+3 INT-5<option value="136">WIT+3 MEN-3<option value="137">WIT+3 MEN-4<option value="138">WIT+3 MEN-5<option value="139">WIT+4 INT-4<option value="140">WIT+4 INT-5<option value="141">WIT+4 INT-6<option value="142">WIT+4 MEN-4<option value="143">WIT+4 MEN-5<option value="144">WIT+4 MEN-6</select>

				<select id="ts1f" onchange="calc()"><option value="0">No Tattoo<option value="1">CON+1 DEX-1<option value="2">CON+1 DEX-2<option value="3">CON+1 DEX-3<option value="4">CON+1 STR-1<option value="5">CON+1 STR-2<option value="6">CON+1 STR-3<option value="7">CON+2 DEX-2<option value="8">CON+2 DEX-3<option value="9">CON+2 DEX-4<option value="10">CON+2 STR-2<option value="11">CON+2 STR-3<option value="12">CON+2 STR-4<option value="13">CON+3 DEX-3<option value="14">CON+3 DEX-4<option value="15">CON+3 DEX-5<option value="16">CON+3 STR-3<option value="17">CON+3 STR-4<option value="18">CON+3 STR-5<option value="19">CON+4 DEX-4<option value="20">CON+4 DEX-5<option value="21">CON+4 DEX-6<option value="22">CON+4 STR-4<option value="23">CON+4 STR-5<option value="24">CON+4 STR-6<option value="25">DEX+1 CON-1<option value="26">DEX+1 CON-2<option value="27">DEX+1 CON-3<option value="28">DEX+1 STR-1<option value="29">DEX+1 STR-2<option value="30">DEX+1 STR-3<option value="31">DEX+2 CON-2<option value="32">DEX+2 CON-3<option value="33">DEX+2 CON-4<option value="34">DEX+2 STR-2<option value="35">DEX+2 STR-3<option value="36">DEX+2 STR-4<option value="37">DEX+3 CON-3<option value="38">DEX+3 CON-4<option value="39">DEX+3 CON-5<option value="40">DEX+3 STR-3<option value="41">DEX+3 STR-4<option value="42">DEX+3 STR-5<option value="43">DEX+4 CON-4<option value="44">DEX+4 CON-5<option value="45">DEX+4 CON-6<option value="46">DEX+4 STR-4<option value="47">DEX+4 STR-5<option value="48">DEX+4 STR-6<option value="52">INT+1 WIT-1<option value="53">INT+1 WIT-2<option value="54">INT+1 WIT-3<option value="58">INT+2 WIT-2<option value="59">INT+2 WIT-3<option value="60">INT+2 WIT-4<option value="64">INT+3 WIT-3<option value="65">INT+3 WIT-4<option value="66">INT+3 WIT-5<option value="70">INT+4 WIT-4<option value="71">INT+4 WIT-5<option value="72">INT+4 WIT-6<option value="97">STR+1 CON-1<option value="98">STR+1 CON-2<option value="99">STR+1 CON-3<option value="100">STR+1 DEX-1<option value="101">STR+1 DEX-2<option value="102">STR+1 DEX-3<option value="103">STR+2 CON-2<option value="104">STR+2 CON-3<option value="105">STR+2 CON-4<option value="106">STR+2 DEX-2<option value="107">STR+2 DEX-3<option value="108">STR+2 DEX-4<option value="109">STR+3 CON-3<option value="110">STR+3 CON-4<option value="111">STR+3 CON-5<option value="112">STR+3 DEX-3<option value="113">STR+3 DEX-4<option value="114">STR+3 DEX-5<option value="115">STR+4 CON-4<option value="116">STR+4 CON-5<option value="117">STR+4 CON-6<option value="118">STR+4 DEX-4<option value="119">STR+4 DEX-5<option value="120">STR+4 DEX-6<option value="121">WIT+1 INT-1<option value="122">WIT+1 INT-2<option value="123">WIT+1 INT-3<option value="127">WIT+2 INT-2<option value="128">WIT+2 INT-3<option value="129">WIT+2 INT-4<option value="133">WIT+3 INT-3<option value="134">WIT+3 INT-4<option value="135">WIT+3 INT-5<option value="139">WIT+4 INT-4<option value="140">WIT+4 INT-5<option value="141">WIT+4 INT-6</select>

				<select id="ts1h" onchange="calc()"><option value="0">No Tattoo<option value="1">CON+1 DEX-1<option value="2">CON+1 DEX-2<option value="3">CON+1 DEX-3<option value="4">CON+1 STR-1<option value="5">CON+1 STR-2<option value="6">CON+1 STR-3<option value="7">CON+2 DEX-2<option value="8">CON+2 DEX-3<option value="9">CON+2 DEX-4<option value="10">CON+2 STR-2<option value="11">CON+2 STR-3<option value="12">CON+2 STR-4<option value="13">CON+3 DEX-3<option value="14">CON+3 DEX-4<option value="15">CON+3 DEX-5<option value="16">CON+3 STR-3<option value="17">CON+3 STR-4<option value="18">CON+3 STR-5<option value="19">CON+4 DEX-4<option value="20">CON+4 DEX-5<option value="21">CON+4 DEX-6<option value="22">CON+4 STR-4<option value="23">CON+4 STR-5<option value="24">CON+4 STR-6<option value="25">DEX+1 CON-1<option value="26">DEX+1 CON-2<option value="27">DEX+1 CON-3<option value="28">DEX+1 STR-1<option value="29">DEX+1 STR-2<option value="30">DEX+1 STR-3<option value="31">DEX+2 CON-2<option value="32">DEX+2 CON-3<option value="33">DEX+2 CON-4<option value="34">DEX+2 STR-2<option value="35">DEX+2 STR-3<option value="36">DEX+2 STR-4<option value="37">DEX+3 CON-3<option value="38">DEX+3 CON-4<option value="39">DEX+3 CON-5<option value="40">DEX+3 STR-3<option value="41">DEX+3 STR-4<option value="42">DEX+3 STR-5<option value="43">DEX+4 CON-4<option value="44">DEX+4 CON-5<option value="45">DEX+4 CON-6<option value="46">DEX+4 STR-4<option value="47">DEX+4 STR-5<option value="48">DEX+4 STR-6<option value="76">MEN+1 WIT-1<option value="77">MEN+1 WIT-2<option value="78">MEN+1 WIT-3<option value="82">MEN+2 WIT-2<option value="83">MEN+2 WIT-3<option value="84">MEN+2 WIT-4<option value="88">MEN+3 WIT-3<option value="89">MEN+3 WIT-4<option value="90">MEN+3 WIT-5<option value="94">MEN+4 WIT-4<option value="95">MEN+4 WIT-5<option value="96">MEN+4 WIT-6<option value="97">STR+1 CON-1<option value="98">STR+1 CON-2<option value="99">STR+1 CON-3<option value="100">STR+1 DEX-1<option value="101">STR+1 DEX-2<option value="102">STR+1 DEX-3<option value="103">STR+2 CON-2<option value="104">STR+2 CON-3<option value="105">STR+2 CON-4<option value="106">STR+2 DEX-2<option value="107">STR+2 DEX-3<option value="108">STR+2 DEX-4<option value="109">STR+3 CON-3<option value="110">STR+3 CON-4<option value="111">STR+3 CON-5<option value="112">STR+3 DEX-3<option value="113">STR+3 DEX-4<option value="114">STR+3 DEX-5<option value="115">STR+4 CON-4<option value="116">STR+4 CON-5<option value="117">STR+4 CON-6<option value="118">STR+4 DEX-4<option value="119">STR+4 DEX-5<option value="120">STR+4 DEX-6<option value="124">WIT+1 MEN-1<option value="125">WIT+1 MEN-2<option value="126">WIT+1 MEN-3<option value="130">WIT+2 MEN-2<option value="131">WIT+2 MEN-3<option value="132">WIT+2 MEN-4<option value="136">WIT+3 MEN-3<option value="137">WIT+3 MEN-4<option value="138">WIT+3 MEN-5<option value="142">WIT+4 MEN-4<option value="143">WIT+4 MEN-5<option value="144">WIT+4 MEN-6</select>

</td></tr><tr>
			<td><input type=checkbox id="TTT2C" onclick="calc()" checked></td><td>2</td>
<td colspan=3>			<select id="ts2n" onchange="calc()"><option value="0">No Tattoo<option value="1">CON+1 DEX-1<option value="2">CON+1 DEX-2<option value="3">CON+1 DEX-3<option value="4">CON+1 STR-1<option value="5">CON+1 STR-2<option value="6">CON+1 STR-3<option value="7">CON+2 DEX-2<option value="8">CON+2 DEX-3<option value="9">CON+2 DEX-4<option value="10">CON+2 STR-2<option value="11">CON+2 STR-3<option value="12">CON+2 STR-4<option value="13">CON+3 DEX-3<option value="14">CON+3 DEX-4<option value="15">CON+3 DEX-5<option value="16">CON+3 STR-3<option value="17">CON+3 STR-4<option value="18">CON+3 STR-5<option value="19">CON+4 DEX-4<option value="20">CON+4 DEX-5<option value="21">CON+4 DEX-6<option value="22">CON+4 STR-4<option value="23">CON+4 STR-5<option value="24">CON+4 STR-6<option value="25">DEX+1 CON-1<option value="26">DEX+1 CON-2<option value="27">DEX+1 CON-3<option value="28">DEX+1 STR-1<option value="29">DEX+1 STR-2<option value="30">DEX+1 STR-3<option value="31">DEX+2 CON-2<option value="32">DEX+2 CON-3<option value="33">DEX+2 CON-4<option value="34">DEX+2 STR-2<option value="35">DEX+2 STR-3<option value="36">DEX+2 STR-4<option value="37">DEX+3 CON-3<option value="38">DEX+3 CON-4<option value="39">DEX+3 CON-5<option value="40">DEX+3 STR-3<option value="41">DEX+3 STR-4<option value="42">DEX+3 STR-5<option value="43">DEX+4 CON-4<option value="44">DEX+4 CON-5<option value="45">DEX+4 CON-6<option value="46">DEX+4 STR-4<option value="47">DEX+4 STR-5<option value="48">DEX+4 STR-6<option value="49">INT+1 MEN-1<option value="50">INT+1 MEN-2<option value="51">INT+1 MEN-3<option value="52">INT+1 WIT-1<option value="53">INT+1 WIT-2<option value="54">INT+1 WIT-3<option value="55">INT+2 MEN-2<option value="56">INT+2 MEN-3<option value="57">INT+2 MEN-4<option value="58">INT+2 WIT-2<option value="59">INT+2 WIT-3<option value="60">INT+2 WIT-4<option value="61">INT+3 MEN-3<option value="62">INT+3 MEN-4<option value="63">INT+3 MEN-5<option value="64">INT+3 WIT-3<option value="65">INT+3 WIT-4<option value="66">INT+3 WIT-5<option value="67">INT+4 MEN-4<option value="68">INT+4 MEN-5<option value="69">INT+4 MEN-6<option value="70">INT+4 WIT-4<option value="71">INT+4 WIT-5<option value="72">INT+4 WIT-6<option value="73">MEN+1 INT-1<option value="74">MEN+1 INT-2<option value="75">MEN+1 INT-3<option value="76">MEN+1 WIT-1<option value="77">MEN+1 WIT-2<option value="78">MEN+1 WIT-3<option value="79">MEN+2 INT-2<option value="80">MEN+2 INT-3<option value="81">MEN+2 INT-4<option value="82">MEN+2 WIT-2<option value="83">MEN+2 WIT-3<option value="84">MEN+2 WIT-4<option value="85">MEN+3 INT-3<option value="86">MEN+3 INT-4<option value="87">MEN+3 INT-5<option value="88">MEN+3 WIT-3<option value="89">MEN+3 WIT-4<option value="90">MEN+3 WIT-5<option value="91">MEN+4 INT-4<option value="92">MEN+4 INT-5<option value="93">MEN+4 INT-6<option value="94">MEN+4 WIT-4<option value="95">MEN+4 WIT-5<option value="96">MEN+4 WIT-6<option value="97">STR+1 CON-1<option value="98">STR+1 CON-2<option value="99">STR+1 CON-3<option value="100">STR+1 DEX-1<option value="101">STR+1 DEX-2<option value="102">STR+1 DEX-3<option value="103">STR+2 CON-2<option value="104">STR+2 CON-3<option value="105">STR+2 CON-4<option value="106">STR+2 DEX-2<option value="107">STR+2 DEX-3<option value="108">STR+2 DEX-4<option value="109">STR+3 CON-3<option value="110">STR+3 CON-4<option value="111">STR+3 CON-5<option value="112">STR+3 DEX-3<option value="113">STR+3 DEX-4<option value="114">STR+3 DEX-5<option value="115">STR+4 CON-4<option value="116">STR+4 CON-5<option value="117">STR+4 CON-6<option value="118">STR+4 DEX-4<option value="119">STR+4 DEX-5<option value="120">STR+4 DEX-6<option value="121">WIT+1 INT-1<option value="122">WIT+1 INT-2<option value="123">WIT+1 INT-3<option value="124">WIT+1 MEN-1<option value="125">WIT+1 MEN-2<option value="126">WIT+1 MEN-3<option value="127">WIT+2 INT-2<option value="128">WIT+2 INT-3<option value="129">WIT+2 INT-4<option value="130">WIT+2 MEN-2<option value="131">WIT+2 MEN-3<option value="132">WIT+2 MEN-4<option value="133">WIT+3 INT-3<option value="134">WIT+3 INT-4<option value="135">WIT+3 INT-5<option value="136">WIT+3 MEN-3<option value="137">WIT+3 MEN-4<option value="138">WIT+3 MEN-5<option value="139">WIT+4 INT-4<option value="140">WIT+4 INT-5<option value="141">WIT+4 INT-6<option value="142">WIT+4 MEN-4<option value="143">WIT+4 MEN-5<option value="144">WIT+4 MEN-6</select>

				<select id="ts2f" onchange="calc()"><option value="0">No Tattoo<option value="1">CON+1 DEX-1<option value="2">CON+1 DEX-2<option value="3">CON+1 DEX-3<option value="4">CON+1 STR-1<option value="5">CON+1 STR-2<option value="6">CON+1 STR-3<option value="7">CON+2 DEX-2<option value="8">CON+2 DEX-3<option value="9">CON+2 DEX-4<option value="10">CON+2 STR-2<option value="11">CON+2 STR-3<option value="12">CON+2 STR-4<option value="13">CON+3 DEX-3<option value="14">CON+3 DEX-4<option value="15">CON+3 DEX-5<option value="16">CON+3 STR-3<option value="17">CON+3 STR-4<option value="18">CON+3 STR-5<option value="19">CON+4 DEX-4<option value="20">CON+4 DEX-5<option value="21">CON+4 DEX-6<option value="22">CON+4 STR-4<option value="23">CON+4 STR-5<option value="24">CON+4 STR-6<option value="25">DEX+1 CON-1<option value="26">DEX+1 CON-2<option value="27">DEX+1 CON-3<option value="28">DEX+1 STR-1<option value="29">DEX+1 STR-2<option value="30">DEX+1 STR-3<option value="31">DEX+2 CON-2<option value="32">DEX+2 CON-3<option value="33">DEX+2 CON-4<option value="34">DEX+2 STR-2<option value="35">DEX+2 STR-3<option value="36">DEX+2 STR-4<option value="37">DEX+3 CON-3<option value="38">DEX+3 CON-4<option value="39">DEX+3 CON-5<option value="40">DEX+3 STR-3<option value="41">DEX+3 STR-4<option value="42">DEX+3 STR-5<option value="43">DEX+4 CON-4<option value="44">DEX+4 CON-5<option value="45">DEX+4 CON-6<option value="46">DEX+4 STR-4<option value="47">DEX+4 STR-5<option value="48">DEX+4 STR-6<option value="52">INT+1 WIT-1<option value="53">INT+1 WIT-2<option value="54">INT+1 WIT-3<option value="58">INT+2 WIT-2<option value="59">INT+2 WIT-3<option value="60">INT+2 WIT-4<option value="64">INT+3 WIT-3<option value="65">INT+3 WIT-4<option value="66">INT+3 WIT-5<option value="70">INT+4 WIT-4<option value="71">INT+4 WIT-5<option value="72">INT+4 WIT-6<option value="97">STR+1 CON-1<option value="98">STR+1 CON-2<option value="99">STR+1 CON-3<option value="100">STR+1 DEX-1<option value="101">STR+1 DEX-2<option value="102">STR+1 DEX-3<option value="103">STR+2 CON-2<option value="104">STR+2 CON-3<option value="105">STR+2 CON-4<option value="106">STR+2 DEX-2<option value="107">STR+2 DEX-3<option value="108">STR+2 DEX-4<option value="109">STR+3 CON-3<option value="110">STR+3 CON-4<option value="111">STR+3 CON-5<option value="112">STR+3 DEX-3<option value="113">STR+3 DEX-4<option value="114">STR+3 DEX-5<option value="115">STR+4 CON-4<option value="116">STR+4 CON-5<option value="117">STR+4 CON-6<option value="118">STR+4 DEX-4<option value="119">STR+4 DEX-5<option value="120">STR+4 DEX-6<option value="121">WIT+1 INT-1<option value="122">WIT+1 INT-2<option value="123">WIT+1 INT-3<option value="127">WIT+2 INT-2<option value="128">WIT+2 INT-3<option value="129">WIT+2 INT-4<option value="133">WIT+3 INT-3<option value="134">WIT+3 INT-4<option value="135">WIT+3 INT-5<option value="139">WIT+4 INT-4<option value="140">WIT+4 INT-5<option value="141">WIT+4 INT-6</select>

				<select id="ts2h" onchange="calc()"><option value="0">No Tattoo<option value="1">CON+1 DEX-1<option value="2">CON+1 DEX-2<option value="3">CON+1 DEX-3<option value="4">CON+1 STR-1<option value="5">CON+1 STR-2<option value="6">CON+1 STR-3<option value="7">CON+2 DEX-2<option value="8">CON+2 DEX-3<option value="9">CON+2 DEX-4<option value="10">CON+2 STR-2<option value="11">CON+2 STR-3<option value="12">CON+2 STR-4<option value="13">CON+3 DEX-3<option value="14">CON+3 DEX-4<option value="15">CON+3 DEX-5<option value="16">CON+3 STR-3<option value="17">CON+3 STR-4<option value="18">CON+3 STR-5<option value="19">CON+4 DEX-4<option value="20">CON+4 DEX-5<option value="21">CON+4 DEX-6<option value="22">CON+4 STR-4<option value="23">CON+4 STR-5<option value="24">CON+4 STR-6<option value="25">DEX+1 CON-1<option value="26">DEX+1 CON-2<option value="27">DEX+1 CON-3<option value="28">DEX+1 STR-1<option value="29">DEX+1 STR-2<option value="30">DEX+1 STR-3<option value="31">DEX+2 CON-2<option value="32">DEX+2 CON-3<option value="33">DEX+2 CON-4<option value="34">DEX+2 STR-2<option value="35">DEX+2 STR-3<option value="36">DEX+2 STR-4<option value="37">DEX+3 CON-3<option value="38">DEX+3 CON-4<option value="39">DEX+3 CON-5<option value="40">DEX+3 STR-3<option value="41">DEX+3 STR-4<option value="42">DEX+3 STR-5<option value="43">DEX+4 CON-4<option value="44">DEX+4 CON-5<option value="45">DEX+4 CON-6<option value="46">DEX+4 STR-4<option value="47">DEX+4 STR-5<option value="48">DEX+4 STR-6<option value="76">MEN+1 WIT-1<option value="77">MEN+1 WIT-2<option value="78">MEN+1 WIT-3<option value="82">MEN+2 WIT-2<option value="83">MEN+2 WIT-3<option value="84">MEN+2 WIT-4<option value="88">MEN+3 WIT-3<option value="89">MEN+3 WIT-4<option value="90">MEN+3 WIT-5<option value="94">MEN+4 WIT-4<option value="95">MEN+4 WIT-5<option value="96">MEN+4 WIT-6<option value="97">STR+1 CON-1<option value="98">STR+1 CON-2<option value="99">STR+1 CON-3<option value="100">STR+1 DEX-1<option value="101">STR+1 DEX-2<option value="102">STR+1 DEX-3<option value="103">STR+2 CON-2<option value="104">STR+2 CON-3<option value="105">STR+2 CON-4<option value="106">STR+2 DEX-2<option value="107">STR+2 DEX-3<option value="108">STR+2 DEX-4<option value="109">STR+3 CON-3<option value="110">STR+3 CON-4<option value="111">STR+3 CON-5<option value="112">STR+3 DEX-3<option value="113">STR+3 DEX-4<option value="114">STR+3 DEX-5<option value="115">STR+4 CON-4<option value="116">STR+4 CON-5<option value="117">STR+4 CON-6<option value="118">STR+4 DEX-4<option value="119">STR+4 DEX-5<option value="120">STR+4 DEX-6<option value="124">WIT+1 MEN-1<option value="125">WIT+1 MEN-2<option value="126">WIT+1 MEN-3<option value="130">WIT+2 MEN-2<option value="131">WIT+2 MEN-3<option value="132">WIT+2 MEN-4<option value="136">WIT+3 MEN-3<option value="137">WIT+3 MEN-4<option value="138">WIT+3 MEN-5<option value="142">WIT+4 MEN-4<option value="143">WIT+4 MEN-5<option value="144">WIT+4 MEN-6</select>

</td></tr><tr>
			<td><input type=checkbox id="TTT3C" onclick="calc()" checked></td><td>3</td>
<td colspan=3>			<select id="ts3n" onchange="calc()"><option value="0">No Tattoo<option value="1">CON+1 DEX-1<option value="2">CON+1 DEX-2<option value="3">CON+1 DEX-3<option value="4">CON+1 STR-1<option value="5">CON+1 STR-2<option value="6">CON+1 STR-3<option value="7">CON+2 DEX-2<option value="8">CON+2 DEX-3<option value="9">CON+2 DEX-4<option value="10">CON+2 STR-2<option value="11">CON+2 STR-3<option value="12">CON+2 STR-4<option value="13">CON+3 DEX-3<option value="14">CON+3 DEX-4<option value="15">CON+3 DEX-5<option value="16">CON+3 STR-3<option value="17">CON+3 STR-4<option value="18">CON+3 STR-5<option value="19">CON+4 DEX-4<option value="20">CON+4 DEX-5<option value="21">CON+4 DEX-6<option value="22">CON+4 STR-4<option value="23">CON+4 STR-5<option value="24">CON+4 STR-6<option value="25">DEX+1 CON-1<option value="26">DEX+1 CON-2<option value="27">DEX+1 CON-3<option value="28">DEX+1 STR-1<option value="29">DEX+1 STR-2<option value="30">DEX+1 STR-3<option value="31">DEX+2 CON-2<option value="32">DEX+2 CON-3<option value="33">DEX+2 CON-4<option value="34">DEX+2 STR-2<option value="35">DEX+2 STR-3<option value="36">DEX+2 STR-4<option value="37">DEX+3 CON-3<option value="38">DEX+3 CON-4<option value="39">DEX+3 CON-5<option value="40">DEX+3 STR-3<option value="41">DEX+3 STR-4<option value="42">DEX+3 STR-5<option value="43">DEX+4 CON-4<option value="44">DEX+4 CON-5<option value="45">DEX+4 CON-6<option value="46">DEX+4 STR-4<option value="47">DEX+4 STR-5<option value="48">DEX+4 STR-6<option value="49">INT+1 MEN-1<option value="50">INT+1 MEN-2<option value="51">INT+1 MEN-3<option value="52">INT+1 WIT-1<option value="53">INT+1 WIT-2<option value="54">INT+1 WIT-3<option value="55">INT+2 MEN-2<option value="56">INT+2 MEN-3<option value="57">INT+2 MEN-4<option value="58">INT+2 WIT-2<option value="59">INT+2 WIT-3<option value="60">INT+2 WIT-4<option value="61">INT+3 MEN-3<option value="62">INT+3 MEN-4<option value="63">INT+3 MEN-5<option value="64">INT+3 WIT-3<option value="65">INT+3 WIT-4<option value="66">INT+3 WIT-5<option value="67">INT+4 MEN-4<option value="68">INT+4 MEN-5<option value="69">INT+4 MEN-6<option value="70">INT+4 WIT-4<option value="71">INT+4 WIT-5<option value="72">INT+4 WIT-6<option value="73">MEN+1 INT-1<option value="74">MEN+1 INT-2<option value="75">MEN+1 INT-3<option value="76">MEN+1 WIT-1<option value="77">MEN+1 WIT-2<option value="78">MEN+1 WIT-3<option value="79">MEN+2 INT-2<option value="80">MEN+2 INT-3<option value="81">MEN+2 INT-4<option value="82">MEN+2 WIT-2<option value="83">MEN+2 WIT-3<option value="84">MEN+2 WIT-4<option value="85">MEN+3 INT-3<option value="86">MEN+3 INT-4<option value="87">MEN+3 INT-5<option value="88">MEN+3 WIT-3<option value="89">MEN+3 WIT-4<option value="90">MEN+3 WIT-5<option value="91">MEN+4 INT-4<option value="92">MEN+4 INT-5<option value="93">MEN+4 INT-6<option value="94">MEN+4 WIT-4<option value="95">MEN+4 WIT-5<option value="96">MEN+4 WIT-6<option value="97">STR+1 CON-1<option value="98">STR+1 CON-2<option value="99">STR+1 CON-3<option value="100">STR+1 DEX-1<option value="101">STR+1 DEX-2<option value="102">STR+1 DEX-3<option value="103">STR+2 CON-2<option value="104">STR+2 CON-3<option value="105">STR+2 CON-4<option value="106">STR+2 DEX-2<option value="107">STR+2 DEX-3<option value="108">STR+2 DEX-4<option value="109">STR+3 CON-3<option value="110">STR+3 CON-4<option value="111">STR+3 CON-5<option value="112">STR+3 DEX-3<option value="113">STR+3 DEX-4<option value="114">STR+3 DEX-5<option value="115">STR+4 CON-4<option value="116">STR+4 CON-5<option value="117">STR+4 CON-6<option value="118">STR+4 DEX-4<option value="119">STR+4 DEX-5<option value="120">STR+4 DEX-6<option value="121">WIT+1 INT-1<option value="122">WIT+1 INT-2<option value="123">WIT+1 INT-3<option value="124">WIT+1 MEN-1<option value="125">WIT+1 MEN-2<option value="126">WIT+1 MEN-3<option value="127">WIT+2 INT-2<option value="128">WIT+2 INT-3<option value="129">WIT+2 INT-4<option value="130">WIT+2 MEN-2<option value="131">WIT+2 MEN-3<option value="132">WIT+2 MEN-4<option value="133">WIT+3 INT-3<option value="134">WIT+3 INT-4<option value="135">WIT+3 INT-5<option value="136">WIT+3 MEN-3<option value="137">WIT+3 MEN-4<option value="138">WIT+3 MEN-5<option value="139">WIT+4 INT-4<option value="140">WIT+4 INT-5<option value="141">WIT+4 INT-6<option value="142">WIT+4 MEN-4<option value="143">WIT+4 MEN-5<option value="144">WIT+4 MEN-6</select>

				<select id="ts3f" onchange="calc()"><option value="0">No Tattoo<option value="1">CON+1 DEX-1<option value="2">CON+1 DEX-2<option value="3">CON+1 DEX-3<option value="4">CON+1 STR-1<option value="5">CON+1 STR-2<option value="6">CON+1 STR-3<option value="7">CON+2 DEX-2<option value="8">CON+2 DEX-3<option value="9">CON+2 DEX-4<option value="10">CON+2 STR-2<option value="11">CON+2 STR-3<option value="12">CON+2 STR-4<option value="13">CON+3 DEX-3<option value="14">CON+3 DEX-4<option value="15">CON+3 DEX-5<option value="16">CON+3 STR-3<option value="17">CON+3 STR-4<option value="18">CON+3 STR-5<option value="19">CON+4 DEX-4<option value="20">CON+4 DEX-5<option value="21">CON+4 DEX-6<option value="22">CON+4 STR-4<option value="23">CON+4 STR-5<option value="24">CON+4 STR-6<option value="25">DEX+1 CON-1<option value="26">DEX+1 CON-2<option value="27">DEX+1 CON-3<option value="28">DEX+1 STR-1<option value="29">DEX+1 STR-2<option value="30">DEX+1 STR-3<option value="31">DEX+2 CON-2<option value="32">DEX+2 CON-3<option value="33">DEX+2 CON-4<option value="34">DEX+2 STR-2<option value="35">DEX+2 STR-3<option value="36">DEX+2 STR-4<option value="37">DEX+3 CON-3<option value="38">DEX+3 CON-4<option value="39">DEX+3 CON-5<option value="40">DEX+3 STR-3<option value="41">DEX+3 STR-4<option value="42">DEX+3 STR-5<option value="43">DEX+4 CON-4<option value="44">DEX+4 CON-5<option value="45">DEX+4 CON-6<option value="46">DEX+4 STR-4<option value="47">DEX+4 STR-5<option value="48">DEX+4 STR-6<option value="52">INT+1 WIT-1<option value="53">INT+1 WIT-2<option value="54">INT+1 WIT-3<option value="58">INT+2 WIT-2<option value="59">INT+2 WIT-3<option value="60">INT+2 WIT-4<option value="64">INT+3 WIT-3<option value="65">INT+3 WIT-4<option value="66">INT+3 WIT-5<option value="70">INT+4 WIT-4<option value="71">INT+4 WIT-5<option value="72">INT+4 WIT-6<option value="97">STR+1 CON-1<option value="98">STR+1 CON-2<option value="99">STR+1 CON-3<option value="100">STR+1 DEX-1<option value="101">STR+1 DEX-2<option value="102">STR+1 DEX-3<option value="103">STR+2 CON-2<option value="104">STR+2 CON-3<option value="105">STR+2 CON-4<option value="106">STR+2 DEX-2<option value="107">STR+2 DEX-3<option value="108">STR+2 DEX-4<option value="109">STR+3 CON-3<option value="110">STR+3 CON-4<option value="111">STR+3 CON-5<option value="112">STR+3 DEX-3<option value="113">STR+3 DEX-4<option value="114">STR+3 DEX-5<option value="115">STR+4 CON-4<option value="116">STR+4 CON-5<option value="117">STR+4 CON-6<option value="118">STR+4 DEX-4<option value="119">STR+4 DEX-5<option value="120">STR+4 DEX-6<option value="121">WIT+1 INT-1<option value="122">WIT+1 INT-2<option value="123">WIT+1 INT-3<option value="127">WIT+2 INT-2<option value="128">WIT+2 INT-3<option value="129">WIT+2 INT-4<option value="133">WIT+3 INT-3<option value="134">WIT+3 INT-4<option value="135">WIT+3 INT-5<option value="139">WIT+4 INT-4<option value="140">WIT+4 INT-5<option value="141">WIT+4 INT-6</select>

				<select id="ts3h" onchange="calc()"><option value="0">No Tattoo<option value="1">CON+1 DEX-1<option value="2">CON+1 DEX-2<option value="3">CON+1 DEX-3<option value="4">CON+1 STR-1<option value="5">CON+1 STR-2<option value="6">CON+1 STR-3<option value="7">CON+2 DEX-2<option value="8">CON+2 DEX-3<option value="9">CON+2 DEX-4<option value="10">CON+2 STR-2<option value="11">CON+2 STR-3<option value="12">CON+2 STR-4<option value="13">CON+3 DEX-3<option value="14">CON+3 DEX-4<option value="15">CON+3 DEX-5<option value="16">CON+3 STR-3<option value="17">CON+3 STR-4<option value="18">CON+3 STR-5<option value="19">CON+4 DEX-4<option value="20">CON+4 DEX-5<option value="21">CON+4 DEX-6<option value="22">CON+4 STR-4<option value="23">CON+4 STR-5<option value="24">CON+4 STR-6<option value="25">DEX+1 CON-1<option value="26">DEX+1 CON-2<option value="27">DEX+1 CON-3<option value="28">DEX+1 STR-1<option value="29">DEX+1 STR-2<option value="30">DEX+1 STR-3<option value="31">DEX+2 CON-2<option value="32">DEX+2 CON-3<option value="33">DEX+2 CON-4<option value="34">DEX+2 STR-2<option value="35">DEX+2 STR-3<option value="36">DEX+2 STR-4<option value="37">DEX+3 CON-3<option value="38">DEX+3 CON-4<option value="39">DEX+3 CON-5<option value="40">DEX+3 STR-3<option value="41">DEX+3 STR-4<option value="42">DEX+3 STR-5<option value="43">DEX+4 CON-4<option value="44">DEX+4 CON-5<option value="45">DEX+4 CON-6<option value="46">DEX+4 STR-4<option value="47">DEX+4 STR-5<option value="48">DEX+4 STR-6<option value="76">MEN+1 WIT-1<option value="77">MEN+1 WIT-2<option value="78">MEN+1 WIT-3<option value="82">MEN+2 WIT-2<option value="83">MEN+2 WIT-3<option value="84">MEN+2 WIT-4<option value="88">MEN+3 WIT-3<option value="89">MEN+3 WIT-4<option value="90">MEN+3 WIT-5<option value="94">MEN+4 WIT-4<option value="95">MEN+4 WIT-5<option value="96">MEN+4 WIT-6<option value="97">STR+1 CON-1<option value="98">STR+1 CON-2<option value="99">STR+1 CON-3<option value="100">STR+1 DEX-1<option value="101">STR+1 DEX-2<option value="102">STR+1 DEX-3<option value="103">STR+2 CON-2<option value="104">STR+2 CON-3<option value="105">STR+2 CON-4<option value="106">STR+2 DEX-2<option value="107">STR+2 DEX-3<option value="108">STR+2 DEX-4<option value="109">STR+3 CON-3<option value="110">STR+3 CON-4<option value="111">STR+3 CON-5<option value="112">STR+3 DEX-3<option value="113">STR+3 DEX-4<option value="114">STR+3 DEX-5<option value="115">STR+4 CON-4<option value="116">STR+4 CON-5<option value="117">STR+4 CON-6<option value="118">STR+4 DEX-4<option value="119">STR+4 DEX-5<option value="120">STR+4 DEX-6<option value="124">WIT+1 MEN-1<option value="125">WIT+1 MEN-2<option value="126">WIT+1 MEN-3<option value="130">WIT+2 MEN-2<option value="131">WIT+2 MEN-3<option value="132">WIT+2 MEN-4<option value="136">WIT+3 MEN-3<option value="137">WIT+3 MEN-4<option value="138">WIT+3 MEN-5<option value="142">WIT+4 MEN-4<option value="143">WIT+4 MEN-5<option value="144">WIT+4 MEN-6</select>

	</td></tr></table>
</fieldset>
</td>
<td>
<fieldset>
<legend>Movement</legend>

Type:<br>
<select id="MVM" onchange="calc()"><option value="1">Standing<option value="2">Sitting<option value="3">Running<option value="4">Walking</select><br>
HP:<br>
<input type="radio" name="HPMODIFIER" id="HP1" onclick="calc()" checked>100%<br>

<input type="radio" name="HPMODIFIER" id="HP6" onclick="calc()">60%<br>
<input type="radio" name="HPMODIFIER" id="HP3" onclick="calc()">30%<br>
</fieldset>
</td>

<td>
<fieldset>
<legend>Weight</legend>

<table class="statcalc" width=200>
	<tr><td>50% Weight Penalty</td><td id="WEIGHT50" align=right>N/A</td></tr>
	<tr><td>Weight Limit</td><td id="WTL" align=right>N/A</td></tr>

	<tr><td>HP Regen</td><td id="HPREGEN" align=right>N/A</td><td></td><td></td><td align=right></td></tr>
	<tr><td>CP Regen</td><td id="CPREGEN" align=right>N/A</td><td></td><td></td><td align=right></td></tr>
	<tr><td>MP Regen</td><td id="MPREGEN" align=right>N/A</td><td></td><td></td><td align=right></td></tr>
</table>
</fieldset>
</td>
</tr>

</table>

<fieldset id="pushabove">
	<table class="statcalc"
<tr>			<td colspan=8>Turn the form display on or off with these:<br></td></tr>
<tr>			<td width=5><input type=checkbox id="COMBATC" onclick="boxgoaway()"></td>
			<td>Combat Calculations</td>
			<td width=5><input type=checkbox id="EDEBUFFSC" onclick="boxgoaway()"></td>
			<td>Debuffs on Enemy</td>
			<td width=5><input type=checkbox id="ITEMSC" onclick="boxgoaway()" checked></td>

			<td>Equipment</td>
			<td width=5><input type=checkbox id="PASSIVESC" onclick="boxgoaway()" checked></td>		

			<td>Clan Buffs</td>
			<td width=5><input type=checkbox id="BUFFSC" onclick="boxgoaway()" checked></td>

			<td>Buffs</td>
			<td width=5><input type=checkbox id="TOGGLESC" onclick="boxgoaway()" checked></td>

			<td>Toggles</td>
			<td width=5><input type=checkbox id="DEBUFFSC" onclick="boxgoaway()" checked></td>
			<td>Debuffs</td>
</tr>
</table>
</fieldset>

<fieldset id="COMBAT">
<legend>PvP Calculation</legend>
	<table class="statcalc" id="RES1">
		<tr><td>Resurrection lvl&nbsp </td>

			<td><select id="RES2" onchange="calc()">
			<option value=1>1 (20)<option value=2>2 (30)<option value=3>3 (40)<option value=4>4 (48)<option value=5>5 (56)<option value=6>6 (60)<option value=7>7 (64)<option value=8>8 (70)<option value=9>9 (74)
			</select>
			<select id="RES3" onchange="calc()">
			<option value=1>1 (20)<option value=2>2 (30)<option value=3>3 (40)<option value=4>4 (48)<option value=5>5 (56)<option value=6>6 (64)<option value=7>7 (74)
			</select>

			<select id="RES4" onchange="calc()">
			<option value=1>1 (20)<option value=2>2 (30)
			</select></td>
			<td>&nbsp Your Resurrection value is</td><td id="RES11">0%</td></tr></table>
	<table class="statcalc" id=RES0>
		<tr><td>Mass Resurrection lvl&nbsp </td>

			<td><select id="RES7" onchange="calc()">
			<option value=1>1 (40)<option value=2>2 (44)<option value=3>3 (52)<option value=4>4 (56)<option value=5>5 (58)<option value=6>6 (68)
			</select></td>
			<td>&nbsp Your Mass Resurrection value is</td><td id="RES12">0%</td></tr></table>
<hr id="RES9">
	<table class="statcalc">

		<tr><td>Enemy Target:</td>
			<td><select id="ENE" onchange="calc()">
			<option value=0>Test Target (PVP)
			<option value=11>Clone
			<option value=1 selected>Test Monster
			<option value=2>lv40 Temple Knight
			<option value=3>lv40 Hawkeye
			<option value=4>lv40 Prophet
			<option value=5>lv61 Temple Knight
			<option value=6>lv61 Hawkeye
			<option value=7>lv61 Prophet
			<option value=8>lv80 Temple Knight
			<option value=9>lv80 Hawkeye
			<option value=10>lv80 Prophet
			</select>

		Level Offset:
			<select id="LVO" onchange="calc()">
			<option value=0>none
			<option value=-1>-1
			<option value=-2>-2
			<option value=-3>-3
			<option value=-4>-4
			<option value=-5>-5
			<option value=-6>-6
			<option value=-7>-7
			<option value=-8>-8
			<option value=-9>-9
			<option value=-10>-10
			<option value=1>+1
			<option value=2>+2
			<option value=3>+3
			<option value=4>+4
			<option value=5>+5
			<option value=6>+6
			<option value=7>+7
			<option value=8>+8
			<option value=9>+9
			<option value=10>+10
			</select></td>			
		</tr>

		<tr><td>Position</td>
			<td><select id="POS" onchange="calc()">
			<option value="1">Both facing each other
			<option value="2">Attacking enemy target from the side
			<option value="3">Attacking enemy target from behind
			<option value="4">Enemy target attacking you from the side
			<option value="5">Enemy target attacking you from behind
			</select></td></tr>
		<tr><td>Enemy's Buffs</td>
			<td><select id="EBUFFS" onchange="calc()">

			<option value="1">Self-Buffed
			<option value="2">Level 56 Prophet buffs
			<option value="3">Level 56 Prophet buffs and Dances
			<option value="4">Level 56 Prophet buffs and Songs
			<option value="5">Level 56 Prophet buffs, Dances and Songs
			<option value="6">We're all gonna die!
			</select></td></tr>
		<tr><td align=right><input type="checkbox" id="SS" onclick="boxgoaway();calc()" checked></td><td>Use Soulshots</td</tr>
		<tr><td align=right><input type="text" id="SSC1" size="1" value="0" onkeypress="calc()"></td><td><p id="SSC2">Adena per Soulshot</p></td></tr>
		<tr><td align=right><p id="SSC3">0</p></td><td><p id="SSC4">Adena Cost per Second</p></td></tr>

		<tr><td align=right><p id="SSC5">0</p></td><td><p id="SSC6">Soulshot Efficiency</p></td></tr>
	</table>
	<table class="damage">
<tr><td colspan=20><hr></td></tr>
		<tr>
	<td align=left width=100></td>
		<td width=100>Block Rate</td>
		<td width=100>Total P.Def.</td>

		<td width=100>Average P.Def.<br>w/Shield</td>
		<td width=100>M.Def. on<br>Shield Block</td>
		<td width=100></td>
		<td width=100>Avg. HP Gained<br>Per Second</td>
		<td width=100></td>
		<td width=100></td>

		</tr>
		<tr>
	<td align=left>Shield Stats</td>
		<td id="SHDBLOCKRATE">N/A</td>
		<td id="SHDPDEF">N/A</td>
		<td id="AVGSHIELDPDEF">N/A</td>
		<td id="SHDMDEF">N/A</td>

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
<legend>Debuffs on Enemy</legend>
	<table class="statcalc">

<tr>	<td>P.Atk.</td>
		<td><input type=checkbox id="EDEPC" onclick="edebuffs();calc()"></td>
		<td><select id="EDEP" onchange="calc()">
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
		<td><select id="EDED" onchange="calc()">
			<option value="1">Hex
			<option value="1">Poltergeist Cubic
		</select></td>
		<td><input type=checkbox id="EBLKSC" onclick="edebuffs();calc()"></td>
		<td><select id="EBLKS" onchange="calc()">
			<option value="1">Block Shield
			<option value="2">Mass Shield Block
		</select></td></tr>

<tr>	<td>Accuracy
		<td><input type=checkbox id="EDEAC" onclick="edebuffs();calc()"></td>
		<td><select id="EDEA" onchange="calc()">
			<option value="1">Curse Chaos 1
			<option value="2">Curse Chaos 2+
			<option value="1">Seal of Chaos 1-2
			<option value="2">Seal of Chaos 3+
		</select></td>
		<td><input type=checkbox id="ESBBC" onclick="edebuffs();calc()"></td>
		<td><select id="ESBB" onchange="calc()">
			<option value="1">Sand Bomb 1-5
			<option value="2">Sand Bomb 6-9
			<option value="3">Sand Bomb 10
		</select></td></tr>

<tr>	<td>Critical
		<td><input type=checkbox id="ETRBC" onclick="edebuffs();calc()"></td>
		<td><select id="ETRB" onchange="calc()">
			<option value="1">Tribunal 1-6
			<option value="2">Tribunal 7-9
			<option value="3">Tribunal 10
		</select></td></tr>
<tr>	<td>Atk. Spd.
		<td><input type=checkbox id="EDENC" onclick="edebuffs();calc()"></td>
		<td><select id="EDEN" onchange="calc()">
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
		<td><select id="EJDG" onchange="calc()">
			<option value="1">Judgment 1-5
			<option value="2">Judgment 6-9
			<option value="3">Judgment 10
		</select></td></tr>
<tr>	<td>Misc.</td>
		<td><input type=checkbox id="EARCRC" onclick="edebuffs();calc()"></td>
		<td><select id="EARCR" onchange="calc()">

			<option value="1">Armor Crush
		</select></td>
		<td><input type=checkbox id="ECBYC" onclick="edebuffs();calc()"></td>
		<td><select id="ECBY" onchange="calc()">
			<option value="1">Curse of Abyss
		</select></td>
		<td><input type=checkbox id="ECDMC" onclick="edebuffs();calc()"></td>
		<td><select id="ECDM" onchange="calc()">
			<option value="1">Curse of Doom
		</select></td>

		<td><input type=checkbox id="ECSHC" onclick="edebuffs();calc()"></td>
		<td><select id="ECSH" onchange="calc()">
			<option value="1">Curse of Shade 1
			<option value="2">Curse of Shade 2
			<option value="3">Curse of Shade 3
			<option value="1">Mass Curse of Shade 1
			<option value="2">Mass Curse of Shade 2
			<option value="3">Mass Curse of Shade 3
		</select></td></tr>
<tr>	<td></td>
		<td><input type=checkbox id="EDBDC" onclick="edebuffs();calc()"></td>
		<td><select id="EDBD" onchange="calc()">

			<option value="1">Demonic Blade Dance 1-3
			<option value="2">Demonic Blade Dance 4-5
			<option value="3">Demonic Blade Dance 6-7
			<option value="4">Demonic Blade Dance 8-9
			<option value="5">Demonic Blade Dance 10
		</select></td>
		<td><input type=checkbox id="EFVC" onclick="edebuffs();calc()"></td>
		<td><select id="EFV" onchange="calc()">
			<option value="1">Fire Vortex
		</select></td>
		<td><input type=checkbox id="EHEEC" onclick="edebuffs();calc()"></td>
		<td><select id="EHEE" onchange="calc()">

			<option value="1">Heroic Grandeur
		</select></td>
		<td><input type=checkbox id="ECHOLC" onclick="edebuffs();calc()"></td>
		<td><select id="ECHOL" onchange="calc()">
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
		<td><select id="EIV" onchange="calc()">
			<option value="1">Ice Vortex
		</select></td>
		<td><input type=checkbox id="ELVORC" onclick="edebuffs();calc()"></td>
		<td><select id="ELVOR" onchange="calc()">
			<option value="1">Light Vortex
		</select></td>
		<td><input type=checkbox id="EPSYC" onclick="edebuffs();calc()"></td>

		<td><select id="EPSY" onchange="calc()">
			<option value="1">Psycho Symphony 1-3
			<option value="2">Psycho Symphony 4-5
			<option value="3">Psycho Symphony 6-7
			<option value="4">Psycho Symphony 8-9
			<option value="5">Psycho Symphony 10
		</select></td>
		<td><input type=checkbox id="ESBC" onclick="edebuffs();calc()"></td>
		<td><select id="ESB" onchange="calc()">
			<option value="1">Shock Blast
		</select></td></tr>
<tr>	<td></td>

		<td><input type=checkbox id="EDERC" onclick="edebuffs();calc()"></td>
		<td><select id="EDER" onchange="calc()">
			<option value="1">Seal of Despair
		</select></td>
		<td><input type=checkbox id="EWVC" onclick="edebuffs();calc()"></td>
		<td><select id="EWV" onchange="calc()">
			<option value="1">Wind Vortex
		</select></td></tr>
</table>
</fieldset>

<fieldset id="ITEMS">
<legend>Equipment</legend>
	<table class="statcalc">
<tr>
			<td>Weapon</td>
				<td><select id="WPNE" onchange="calc()">
					<option value="0">+0<option value="1">+1<option value="2">+2<option value="3">+3<option value="4">+4<option value="5">+5<option value="6">+6<option value="7">+7<option value="8">+8<option value="9">+9<option value="10">+10<option value="11">+11<option value="12">+12<option value="13">+13<option value="14">+14<option value="15">+15<option value="16">+16<option value="17">+17<option value="18">+18<option value="19">+19<option value="20">+20
				</select></td>

				<td><select id="WPNG" onchange="equipmentgrade();calc()">
					<option value="1">S Grade
					<option value="2">A Grade
					<option value="3">B Grade
					<option value="4">C Grade
					<option value="5">D Grade
					<option value="6">Non Grade
					<option value="7">Hero
				</select></td>
				<td>
				<select id="WPNS" onchange="calc(false,true)">
					<option value="0">Unequipped
					<option value="1">Angel Slayer
					<option value="2">Arcana Mace
					<option value="3">Basalt Battlehammer
					<option value="4">Demon Splinter
					<option value="5">Draconic Bow
					<option value="6">Dragon Hunter Axe
					<option value="7">Forgotten Blade
					<option value="8">Heavens Divider
					<option value="9">Imperial Staff
					<option value="10">Saint Spear
					<option value="11">Tallum Blade*Dark Legion's Edge
				</select>

				<select id="WPNA" onchange="calc(false,true)">
					<option value="0">Unequipped
					<option value="344">Barakiel's Axe
					<option value="345">Behemoth's Tuning Fork
					<option value="12">Blood Tornado
					<option value="13">Bloody Orchid
					<option value="14">Branch of the Mother Tree
					<option value="351">Cabrio's Hand
					<option value="15">Carnage Bow
					<option value="352">Daimon Crystal
					<option value="16">Damascus*Damascus
					<option value="353">Damascus*Tallum Blade
					<option value="17">Dark Legion's Edge
					<option value="18">Dasparion's Staff
					<option value="19">Destroyer Hammer
					<option value="20">Doom Crusher
					<option value="21">Dragon Grinder
					<option value="22">Dragon Slayer
					<option value="23">Elemental Sword
					<option value="24">Elysian Axe
					<option value="25">Flaming Dragon Skull
					<option value="26">Halberd
					<option value="27">Infernal Master
					<option value="28">Keshanberk*Damascus
					<option value="29">Keshanberk*Keshanberk
					<option value="30">Meteor Shower
					<option value="346">Naga Storm
					<option value="348">Shyeed's Bow
					<option value="342">Sirra's Blade
					<option value="349">Sobekk's Hurricane
					<option value="31">Soul Bow
					<option value="32">Soul Seperator
					<option value="33">Spiritual Eye
					<option value="343">Sword of Ipos
					<option value="34">Sword of Miracles
					<option value="35">Tallum Blade
					<option value="36">Tallum Glaive
					<option value="350">Themis' Tongue
					<option value="347">Tiphon's Spear
				</select>

				<select id="WPNB" onchange="calc(false,true)">
					<option value="0">Unequipped
					<option value="37">Art of Battle Axe
					<option value="38">Arthro Nail
					<option value="39">Bellion Cestus
					<option value="40">Bow of Peril
					<option value="41">Dark Elven Long Bow
					<option value="42">Deadman's Glory
					<option value="43">Demon's Sword
					<option value="44">Great Axe
					<option value="45">Great Sword
					<option value="46">Guardian Sword
					<option value="47">Heavy War Axe
					<option value="48">Kaim Vanul's Bones
					<option value="49">Hell Knife
					<option value="50">Ice Storm Hammer
					<option value="51">Keshanberk
					<option value="52">Kris
					<option value="53">Lance
					<option value="54">Spell Breaker
					<option value="55">Sprite's Staff
					<option value="56">Staff of Evil Spirit
					<option value="57">Star Buster
					<option value="58">Sword of Damascus
					<option value="59">Sword of Valhalla
					<option value="60">Wizard's Tear
					<option value="61">236/99 Samurai Long Sword*Samurai Long Sword
					<option value="62">228/97 Caliburs*Samurai Long Sword
					<option value="63">228/97 Sword of Delusion*Samurai Long Sword
					<option value="64">228/97 Sword of Limit*Samurai Long Sword
					<option value="65">228/97 Sword of Nightmare*Samurai Long Sword
					<option value="66">228/97 Tsurugi*Samurai Long Sword
					<option value="67">220/94 Katana*Samurai Long Sword
					<option value="68">220/94 Raid Sword*Samurai Long Sword
					<option value="69">220/94 Shamshir*Samurai Long Sword
					<option value="70">220/94 Spirit Sword*Samurai Long Sword
					<option value="71">213/91 Caliburs*Caliburs
					<option value="72">213/91 Caliburs*Sword of Delusion
					<option value="73">213/91 Caliburs*Sword of Limit
					<option value="74">213/91 Caliburs*Sword of Nightmare
					<option value="75">213/91 Caliburs*Tsurugi
					<option value="76">213/91 Stormbringer*Samurai Long Sword
					<option value="77">213/91 Sword of Delusion*Sword of Delusion
					<option value="78">213/91 Sword of Delusion*Sword of Nightmare
					<option value="79">213/91 Sword of Delusion*Tsurugi
					<option value="80">213/91 Sword of Limit*Sword of Delusion
					<option value="81">213/91 Sword of Limit*Sword of Limit
					<option value="82">213/91 Sword of Limit*Sword of Nightmare
					<option value="83">213/91 Sword of Limit*Tsurugi
					<option value="84">213/91 Sword of Nightmare*Sword of Nightmare
					<option value="85">213/91 Sword of Nightmare*Tsurugi
					<option value="86">213/91 Tsurugi*Tsurugi
					<option value="87">204/89 Katana*Caliburs
					<option value="88">204/89 Katana*Sword of Delusion
					<option value="89">204/89 Katana*Sword of Limit
					<option value="90">204/89 Katana*Sword of Nightmare
					<option value="91">204/89 Katana*Tsurugi
					<option value="92">204/89 Raid Sword*Caliburs
					<option value="93">204/89 Raid Sword*Sword of Delusion
					<option value="94">204/89 Raid Sword*Sword of Limit
					<option value="95">204/89 Raid Sword*Sword of Nightmare
					<option value="96">204/89 Raid Sword*Tsurugi
					<option value="97">204/89 Shamshir*Caliburs
					<option value="98">204/89 Shamshir*Sword of Delusion
					<option value="99">204/89 Shamshir*Sword of Limit
					<option value="100">204/89 Shamshir*Sword of Nightmare
					<option value="101">204/89 Shamshir*Tsurugi
					<option value="102">204/89 Spirit Sword*Caliburs
					<option value="103">204/89 Spirit Sword*Sword of Delusion
					<option value="104">204/89 Spirit Sword*Sword of Limit
					<option value="105">204/89 Spirit Sword*Sword of Nightmare
					<option value="106">204/89 Spirit Sword*Tsurugi
					<option value="107">197/86 Stormbringer*Caliburs
					<option value="108">197/86 Stormbringer*Sword of Delusion
					<option value="109">197/86 Stormbringer*Sword of Limit
					<option value="110">197/86 Stormbringer*Sword of Nightmare
					<option value="111">197/86 Stormbringer*Tsurugi
				</select>

				<select id="WPNC" onchange="calc(false,true)">
					<option value="0">Unequipped
					<option value="0">====Blunt====
					<option value="112">156/83 Yaksa Mace
					<option value="113">139/76 War Axe
					<option value="114">122/68 Dwarven War Hammer
					<option value="115">107/61 Battle Axe
					<option value="116">107/61 Big Hammer
					<option value="117">107/61 Silver Axe
					<option value="118">107/61 Skull Graver
					<option value="0">====Bow====
					<option value="119">323/83 Eminence Bow
					<option value="120">316/84 Akat Long Bow
					<option value="121">277/75 Elemental Bow
					<option value="122">252/68 Noble Elven Bow
					<option value="123">220/61 Crystallized Ice Bow
					<option value="0">====Dagger====
					<option value="124">136/83 Crystal Dagger
					<option value="125">122/76 Dark Screamer
					<option value="126">122/76 Grace Dagger
					<option value="127">107/68 Stiletto
					<option value="128">94/61 Cursed Dagger
					<option value="129">94/61 Dark Elven Dagger
					<option value="0">====Fist====
					<option value="130">190/83 Great Pata
					<option value="131">169/76 Fist Blade
					<option value="132">148/68 Knuckle Duster
					<option value="133">130/61 Chakram
					<option value="0">====Mystic Weapon (1H)====
					<option value="134">125/111 Ecliptic Axe
					<option value="135">125/111 Ecliptic Sword
					<option value="136">111/101 Club of Nature
					<option value="137">111/101 Heathen's Book
					<option value="138">111/101 Homunkulus's Sword
					<option value="139">111/101 Mace of the Underworld
					<option value="140">111/101 Nirvana Axe
					<option value="141">111/101 Stick of Eternity
					<option value="142">111/101 Sword of Whispering Death
					<option value="143">98/91 Horn of Glory
					<option value="144">86/91 Soulfire Dirk
					<option value="145">85/81 Mysterious Sword
					<option value="146">85/81 Stick of Faith
					<option value="0">====Mystic Weapon (2h)====
					<option value="147">151/111 Deadman's Staff
					<option value="148">151/111 Demon's Staff
					<option value="149">152/111 Ghoul's Staff
					<option value="150">141/104 Pa'agrio Axe
					<option value="151">135/101 Pa'agrio Hammer
					<option value="152">135/101 Paradia Staff
					<option value="153">135/101 Sage's Staff
					<option value="154">119/91 Cursed Staff
					<option value="155">103/81 Crystal Staff
					<option value="156">103/81 Heavy Doom Axe
					<option value="157">103/81 Heavy Doom Hammer
					<option value="0">====Polearm====
					<option value="158">156/83 Orcish Poleaxe
					<option value="159">144/78 Scorpion
					<option value="160">144/78 Widow Maker
					<option value="341">139/76 Poleaxe
					<option value="161">122/68 Bec de Corbin
					<option value="162">107/61 Body Slasher
					<option value="163">107/61 Orcish Glaive
					<option value="164">107/61 Scythe
					<option value="0">====Sword====
					<option value="165">156/83 Samurai Longsword
					<option value="166">139/76 Caliburs
					<option value="167">139/76 Sword of Delusion
					<option value="168">139/76 Sword of Limit
					<option value="169">139/76 Sword of Nightmare
					<option value="170">139/76 Tsurugi
					<option value="171">122/68 Katana
					<option value="172">122/68 Raid Sword
					<option value="173">122/68 Shamshir
					<option value="174">122/68 Spirit Sword
					<option value="175">107/61 Stormbringer
					<option value="0">====Two-Handed Blunt====
					<option value="176">190/83 Dwarven Hammer
					<option value="177">169/76 Karik Horn
					<option value="0">====Two-Handed Sword====
					<option value="178">190/83 Berserker Blade
					<option value="179">169/76 Pa'agrian Sword
					<option value="180">130/61 Flamberge
					<option value="0">====Dual Sword====
					<option value="181">190/83 Katana*Katana
					<option value="182">190/83 Katana*Raid Sword
					<option value="183">190/83 Katana*Spirit Sword
					<option value="184">190/83 Raid Sword*Raid Sword
					<option value="185">190/83 Shamshir*Katana
					<option value="186">190/83 Shamshir*Raid Sword
					<option value="187">190/83 Shamshir*Shamshir
					<option value="188">190/83 Shamshir*Spirit Sword
					<option value="189">190/83 Spirit Sword*Raid Sword
					<option value="190">190/83 Spirit Sword*Spirit Sword
					<option value="191">183/81 Stormbringer*Katana
					<option value="192">183/81 Stormbringer*Raid Sword
					<option value="193">183/81 Stormbringer*Shamshir
					<option value="194">183/81 Stormbringer*Spirit Sword
					<option value="195">175/78 Stormbringer*Stormbringer
					<option value="196">162/73 Elven Long Sword*Elven Long Sword
					<option value="197">155/70 Sword of Revolution*Elven Long Sword
					<option value="198">148/68 Crimson Sword*Elven Long Sword
					<option value="199">148/68 Elven Sword*Elven Long Sword
					<option value="200">148/68 Sword of Revolution*Sword of Revolution
					<option value="201">136/63 Artisan's Sword*Elven Long Sword
					<option value="201">136/63 Bastard Sword*Elven Long Sword
					<option value="201">136/63 Crimson Sword*Sword of Revolution
					<option value="201">136/63 Elven Sword*Sword of Revolution
					<option value="201">136/63 Knight's Sword*Elven Long Sword
					<option value="201">136/63 Spinebone Sword*Elven Long Sword
					<option value="202">130/61 Saber*Elven Long Sword
					<option value="203">124/58 Artisan's Sword*Sword of Revolution
					<option value="203">124/58 Bastard Sword*Sword of Revolution
					<option value="203">124/58 Knight's Sword*Elven Long Sword
					<option value="203">124/58 Spinebone Sword*Sword of Revolution
					<option value="204">118/56 Crimson Sword*Crimson Sword
					<option value="204">118/56 Crimson Sword*Elven Sword
					<option value="204">118/56 Elven Sword*Elven Sword
					<option value="204">118/56 Saber*Sword of Revolution
				</select>

				<select id="WPND" onchange="calc(false,true)">
					<option value="0">Unequipped
					<option value="0">====Blunt====
					<option value="205">92/54 Bonebreaker
					<option value="206">79/47 Heavy Bone Club
					<option value="206">79/47 Morning Star
					<option value="206">79/47 Skull Breaker
					<option value="206">79/47 Tarbar
					<option value="207">64/39 Spiked Club
					<option value="208">51/32 Tomahawk
					<option value="208">51/32 Traveler's Tomahawk
					<option value="209">40/26 Hand Axe
					<option value="209">40/26 Heavy Mace
					<option value="209">40/26 Scalpel
					<option value="209">40/26 Work Hammer
					<option value="0">====Bow====
					<option value="210">191/54 Light Crossbow
					<option value="211">179/51 Strengthened Long Bow
					<option value="212">132/39 Gastraphetes
					<option value="213">114/35 Long Bow
					<option value="213">114/35 Traveler's Long Bow
					<option value="214">105/32 Dark Elven Bow
					<option value="214">105/32 Elven Bow
					<option value="214">105/32 Traveler's Dark Elven Bow
					<option value="215">82/26 Strengthened Bow
					<option value="0">====Dagger====
					<option value="216">80/54 Mithril Dagger
					<option value="217">69/47 Maingauche
					<option value="218">62/42 Cursed Maingauche
					<option value="219">56/39 Kukuri
					<option value="220">45/32 Poniard Dagger
					<option value="220">45/32 Traveler's Poniard Dagger
					<option value="221">35/26 Assassin Knife
					<option value="221">35/26 Crafted Dagger
					<option value="0">====Fist====
					<option value="222">112/54 Scallop Jamadhar
					<option value="223">96/47 Bich'Hwa
					<option value="224">78/39 Triple-Edged_Jamadhar
					<option value="225">62/32 Single-Edged Jamadhar
					<option value="225">62/32 Traveler's Jamadhar
					<option value="226">49/26 Bagh-Nakh
					<option value="0">====Mystic Weapon (1h)====
					<option value="227">74/72 Staff of Life
					<option value="228">67/66 Demon Fangs
					<option value="229">63/63 Crucifix of Blood
					<option value="230">63/63 Priest Mace
					<option value="231">51/52 Blood of Saints
					<option value="232">45/52 Conjurer's Knife
					<option value="232">45/52 Dagger of Mana
					<option value="232">45/52 Mystic Knife
					<option value="232">45/52 Shillien Knife
					<option value="233">51/52 Tome of Blood
					<option value="234">43/45 Sword of Magic
					<option value="234">43/45 Sword of Mystic
					<option value="234">43/45 Sword of Occult
					<option value="235">41/43 Divine Tome
					<option value="236">41/43 Doom Hammer
					<option value="236">41/43 Mace of Judgment
					<option value="236">41/43 Mace of Miracle
					<option value="236">41/43 Mace of Prayer
					<option value="236">41/43 Traveler's Mace
					<option value="237">41/43 Traveler's Spellbook
					<option value="238">32/35 Branch of Life
					<option value="239">32/35 Priest Sword
					<option value="240">32/35 Proof of Revenge
					<option value="240">32/35 Scroll of Wisdom
					<option value="240">32/35 Tempation of Abyss
					<option value="0">====Mystic Weapon (2h)====
					<option value="241">90/72 Atuba Hammer
					<option value="241">90/72 Atuba Mace
					<option value="241">90/72 Ghost Staff
					<option value="242">77/63 Goat Head Staff
					<option value="243">62/52 Staff of Magic
					<option value="244">50/43 Conjurors_Staff
					<option value="244">50/43 Mystic Staff
					<option value="244">50/43 Staff of Mana
					<option value="244">50/43 Traveler's Staff
					<option value="245">39/35 Bone Staff
					<option value="0">====Polearm====
					<option value="246">92/54 Glaive
					<option value="247">79/47 War Pick
					<option value="247">79/47 Winged Spear
					<option value="248">64/39 Dwarven Pike
					<option value="248">64/39 War Hammer
					<option value="249">51/32 Dwarven Trident
					<option value="249">51/32 Pike
					<option value="249">51/32 Traveler's Pike
					<option value="250">40/26 Trident
					<option value="0">====Sword====
					<option value="251">92/54 Elven Long Sword
					<option value="252">79/47 Sword of Revolution
					<option value="253">64/39 Crimson Sword
					<option value="253">64/39 Elven Sword
					<option value="254">51/32 Artisan's Sword
					<option value="254">51/32 Bastard Sword
					<option value="254">51/32 Knight's Sword
					<option value="254">51/32 Spinebone Sword
					<option value="254">51/32 Traveler's Bastard Sword
					<option value="255">40/26 Saber
					<option value="0">====Two-Handed Blunt====
					<option value="256">96/47 Titan Hammer
					<option value="0">====Two-Handed Sword====
					<option value="257">112/54 Claymore
					<option value="258">96/47 Titan Sword
					<option value="259">78/39 Two-Handed Sword
					<option value="260">49/26 Heavy Sword
					<option value="0">====Dual Sword====
					<option value="261">107/51 Artisan's Sword*Crimson Sword
					<option value="261">107/51 Artisan's Sword*Elven Sword
					<option value="261">107/51 Bastard Sword*Crimson Sword
					<option value="261">107/51 Bastard Sword*Elven Sword
					<option value="261">107/51 Knight's Sword*Crimson Sword
					<option value="261">107/51 Knight's Sword*Elven Sword
					<option value="261">107/51 Spinebone Sword*Crimson Sword
					<option value="261">107/51 Spinebone Sword*Elven Sword
					<option value="262">96/47 Artisan's Sword*Artisan's Sword
					<option value="262">96/47 Artisan's Sword*Knight's Sword
					<option value="262">96/47 Bastard Sword*Artisan's Sword
					<option value="262">96/47 Bastard Sword*Bastard Sword
					<option value="262">96/47 Bastard Sword*Knight's Sword
					<option value="262">96/47 Bastard Sword*Spinebone Sword
					<option value="262">96/47 Knight's Sword*Knight's Sword
					<option value="262">96/47 Saber*Crimson Sword
					<option value="262">96/47 Saber*Elven Sword
					<option value="262">96/47 Spinebone Sword*Artisan's Sword
					<option value="262">96/47 Spinebone Sword*Knight's Sword
					<option value="262">96/47 Spinebone Sword*Spinebone Sword
					<option value="263">83/41 Saber*Artisan's Sword
					<option value="263">83/41 Saber*Bastard Sword
					<option value="263">83/41 Saber*Knight's Sword
					<option value="263">83/41 Saber*Spinebone Sword
					<option value="264">73/37 Saber*Saber
				</select>

				<select id="WPNN" onchange="calc(false,true)">
					<option value="0">Unequipped
					<option value="0">====Blunt====
					<option value="265">31/21 Buzdygan
					<option value="265">31/21 Iron Hammer
					<option value="266">24/17 Apprentice Adventurer's Bone Club
					<option value="266">24/17 Bone Club
					<option value="267">17/12 Dwarven Mace
					<option value="268">13/10 Silversmith Hammer
					<option value="269">12/9 Sickle
					<option value="270">10/9 Mace
					<option value="271">10/8 Heavy Chisel
					<option value="272">6/6 Club
					<option value="273">6/5 Guild Member's Club
					<option value="0">====Bow====
					<option value="274">64/21 Composition Bow
					<option value="275">49/17 Apprentice Adventurer's Bow
					<option value="275">49/17 Forest Bow
					<option value="276">45/16 Neti's Bow
					<option value="277">34/12 Crescent Moon Bow
					<option value="277">34/12 Hunting Bow
					<option value="278">23/9 Bow
					<option value="279">16/6 Short Bow
					<option value="0">====Dagger====
					<option value="280">27/21 Sword Breaker
					<option value="281">21/17 Apprentice Adventurer's Knife
					<option value="281">21/17 Shining Knife
					<option value="281">21/17 Throwing Knife
					<option value="282">19/16 Neti's Dagger
					<option value="283">15/12 Dirk
					<option value="284">11/10 Eldritch Dagger
					<option value="285">10/9 Cybellin's Dagger
					<option value="285">10/9 Doom Dagger
					<option value="285">10/9 Knife
					<option value="285">10/9 Pipette Knife
					<option value="286">7/6 Bone Dagger
					<option value="287">5/5 Dagger
					<option value="0">====Fist====
					<option value="288">38/21 Viper's Fang
					<option value="289">29/17 Apprentice Adventurer's Cestus
					<option value="289">29/17 Cestus
					<option value="290">21/12 Fox Claw Gloves
					<option value="291">16/10 Fist of Butcher
					<option value="292">13/9 Iron Gloves
					<option value="293">10/6 Spiked Gloves
					<option value="294">7/5 Training Gloves
					<option value="295">1/1 Chrono Unitus
					<option value="0">====Mystic Weapon (1h)====
					<option value="296">25/28 Crucifix of Blessing
					<option value="296">25/28 Voodoo Doll
					<option value="297">19/22 Relic of the Saints
					<option value="297">19/22 Tears of Eva
					<option value="298">11/13 Wand of Adept
					<option value="299">9/12 Apprentice's Spellbook
					<option value="300">6/8 Apprentice's Rod
					<option value="300">6/8 Buffalo's Horn
					<option value="301">5/7 Apprentice's Wand
					<option value="0">====Mystic Weapon (2h)====
					<option value="302">30/28 Mage Staff
					<option value="303">23/22 Apprentice Adventurer's Staff
					<option value="303">23/22 Journeyman's Staff
					<option value="304">16/16 Cedar Staff
					<option value="305">13/14 Staff of Sentinel
					<option value="306">13/13 Red Sunset Staff
					<option value="307">11/12 Willow Staff
					<option value="308">10/10 Gallint's Oak Wand
					<option value="309">1/1 Chrono Darbuka
					<option value="0">====Polearm====
					<option value="310">31/21 Long Spear
					<option value="311">24/17 Talins Spear
					<option value="312">24/17 Short Spear
					<option value="313">1/1 Chrono Campana
					<option value="0">====Sword====
					<option value="314">31/21 Falchion
					<option value="315">24/17 Apprentice Adventurer's Long Sword
					<option value="315">24/17 Long Sword
					<option value="315">24/17 Sword of Reflection
					<option value="315">24/17 Sword of Watershadow
					<option value="316">18/21 Rusted Bronze Sword
					<option value="317">17/12 Gladius
					<option value="317">17/12 Handmade Sword
					<option value="317">17/12 Orcish Sword
					<option value="317">17/12 Sword of Binding
					<option value="318">14/11 Blood Saber
					<option value="318">14/11 Sword of Sentinel
					<option value="319">13/10 Butcher's Sword
					<option value="320">12/9 Sword of Solidarity
					<option value="321">11/9 Broadsword
					<option value="322">8/6 Short Sword
					<option value="323">6/5 Squire's Sword
					<option value="324">1/1 Chrono Cithara
					<option value="0">====Two-Handed Sword====
					<option value="325">38/21 Zweihander
					<option value="326">29/17 Old Knight's Sword
					<option value="327">21/12 Brandish
					<option value="328">16/10 Red Sunset Sword
					<option value="0">====Duals====
					<option value="329">Chrono Maracas
				</select>

				<select id="WPNH" onchange="calc(false,true)">
					<option value="0">Unequipped
					<option value="330">Infinity Axe
					<option value="331">Infinity Blade
					<option value="332">Infinity Bow
					<option value="333">Infinity Cleaver
					<option value="334">Infinity Crusher
					<option value="335">Infinity Fang
					<option value="336">Infinity Rod
					<option value="337">Infinity Scepter
					<option value="338">Infinity Spear
					<option value="339">Infinity Stinger
					<option value="340">Infinity Wing
				</select>
				</td>

				<td>
				<select id="WPNSA" onchange="calc()">
				</select>
				</td>
				<td id="weapon grade penalty"></td>
				<td align=right><input type=checkbox id="AUGSC" onclick="boxgoaway()"></td>
				<td>Show Augmentations</td></tr>
<tr>			<td colspan=3 align=right>Quickselect an armor set:</td>

				<td><select id="FULLSET" onchange="equipmentgrade(true,false);calc()">
					<option>====S Grade====
					<option value="Draconic">Draconic
					<option value="Imperial_Crusader">Imperial Crusader
					<option value="Major_Arcana">Major Arcana
					<option>====A Grade====
					<option value="Apella_Heavy">(Hvy) Apella
					<option value="Dark_Crystal_Heavy">(Hvy) Dark Crystal
					<option value="Majestic_Heavy">(Hvy) Majestic
					<option value="Nightmare_Heavy">(Hvy) Nightmare
					<option value="Tallum_Heavy">(Hvy) Tallum
					<option value="Apella_Light">(Lgt) Apella
					<option value="Dark_Crystal_Light">(Lgt) Dark Crystal
					<option value="Majestic_Light">(Lgt) Majestic
					<option value="Nightmare_Light">(Lgt) Nightmare
					<option value="Tallum_Light">(Lgt) Tallum
					<option value="Apella_Robe">(Rb) Apella
					<option value="Dark_Crystal_Robe">(Rb) Dark Crystal
					<option value="Majestic_Robe">(Rb) Majestic
					<option value="Nightmare_Robe">(Rb) Nightmare
					<option value="Tallum_Robe">(Rb) Tallum
					<option>====B Grade====
					<option value="Avadon_Heavy">(Hvy) Avadon
					<option value="Blue_Wolf_Heavy">(Hvy) Blue Wolf
					<option value="Doom_Heavy">(Hvy) Doom
					<option value="Zubei_Heavy">(Hvy) Zubei
					<option value="Avadon_Light">(Lgt) Avadon
					<option value="Blue_Wolf_Light">(Lgt) Blue Wolf
					<option value="Doom_Light">(Lgt) Doom
					<option value="Zubei_Light">(Lgt) Zubei
					<option value="Avadon_Robe">(Rb) Avadon
					<option value="Blue_Wolf_Robe">(Rb) Blue Wolf
					<option value="Doom_Robe">(Rb) Doom
					<option value="Zubei_Robe">(Rb) Zubei
					<option>====C Grade====
					<option value="Chain_Mail">Chain Mail
					<option value="Composite">Composite
					<option value="Demon">Demon
					<option value="Divine">Divine
					<option value="Drake">Drake
					<option value="Full_Plate">Full Plate
					<option value="Karmian">Karmian
					<option value="Mithril_Light">Mithril (Light)
					<option value="Plated_Leather">Plated Leather
					<option value="Theca">Theca
					<option>====D Grade====
					<option value="Brigandine">Brigandine
					<option value="CL_Oath_Heavy">Clan Oath (Heavy)
					<option value="CL_Oath_Light">Clan Oath (Light)
					<option value="CL_Oath_Robe">Clan Oath (Robe)
					<option value="Elven_Mithril">Elven Mithril
					<option value="Knowledge">Knowledge
					<option value="Manticore">Manticore
					<option value="Mithril_Heavy">Mithril (Heavy)
					<option value="Reinforced_Leather">Reinforced Leather
					<option>====No Grade====
					<option value="Devotion">Devotion
					<option value="Wooden">Wooden
				</select></td>

				<td></td>
				<td></td>
				<td></td>
				<td><a id="AUGS1"><select id="WAU1" onchange="calc(false,true)">
					<option value="1">-
					<option value="2">Accuracy
					<option value="3">CON
					<option value="4">CP
					<option value="5">CP Recovery
					<option value="6">Critical
					<option value="7">Evasion
					<option value="8">HP
					<option value="9">HP Recovery
					<option value="10">INT
					<option value="11">M.Atk.
					<option value="12">M.Def.
					<option value="13">MEN
					<option value="14">MP
					<option value="15">MP Recovery
					<option value="16">P.Atk.
					<option value="17">P.Def.
					<option value="18">STR
				</select>

				+<input type="text" id="AUG1" size="1" value="0" onkeypress="calc()"></a></td>
</tr>
<tr id="SHDstuff">
			<td>Shield</td>
				<td><select id="SHDE" onchange="calc()">
					<option value="0">+0<option value="1">+1<option value="2">+2<option value="3">+3<option value="4">+4<option value="5">+5<option value="6">+6<option value="7">+7<option value="8">+8<option value="9">+9<option value="10">+10<option value="11">+11<option value="12">+12<option value="13">+13<option value="14">+14<option value="15">+15<option value="16">+16<option value="17">+17<option value="18">+18<option value="19">+19<option value="20">+20
				</select></td>

				<td><select id="SHDG" onchange="equipmentgrade();calc()">
					<option value="1">S Grade
					<option value="2">A Grade
					<option value="3">B Grade
					<option value="4">C Grade
					<option value="5">D Grade
					<option value="6">Non Grade
				</select></td>
				<td><select id="SHDS" onchange="calc()">
					<option value="0">Unequipped
					<option value="14">Imperial Crusader Shield
				</select>
				<select id="SHDA" onchange="calc()">

					<option value="0">Unequipped
					<option value="8">Dark Crystal Shield
					<option value="22">Shield of Nightmare
				</select>
				<select id="SHDB" onchange="calc()">
					<option value="0">Unequipped
					<option value="2">Avadon Shield
					<option value="9">Doom Shield
					<option value="27">Zubei's Shield
				</select>
				<select id="SHDC" onchange="calc()">
					<option value="0">Unequipped
					<option value="7">Chain Shield
					<option value="28">Composite Shield
					<option value="10">Dwarven Chain Shield
					<option value="11">Eldarake
					<option value="12">Full Plate Shield
					<option value="16">Knight Shield
					<option value="26">Tower Shield
				</select>

				<select id="SHDD" onchange="calc()">
					<option value="0">Unequipped
					<option value="1">Aspis
					<option value="4">Brigandine Shield
					<option value="5">Bronze Shield
					<option value="13">Hoplon
					<option value="15">Kite Shield
					<option value="18">Plate Shield
					<option value="25">Square Shield
				</select>
				<select id="SHDN" onchange="calc()">
					<option value="0">Unequipped
					<option value="3">Bone Shield
					<option value="6">Buckler
					<option value="17">Leather Shield
					<option value="19">Pledge Shield
					<option value="20">Round Shield
					<option value="21">Shield of Castle Pledge
					<option value="23">Skeleton Buckler
					<option value="24">Small Shield
				</select>

				</td>
				<td></td>
				<td id="SHD grade penalty"></td>
				<td></td>
				<td><a id="AUGS2"><select id="WAU2" onchange="calc(false,true)">
					<option value="1">-
					<option value="2">Accuracy
					<option value="3">CON
					<option value="4">CP
					<option value="5">CP Recovery
					<option value="6">Critical
					<option value="7">Evasion
					<option value="8">HP
					<option value="9">HP Recovery
					<option value="10">INT
					<option value="11">M.Atk.
					<option value="12">M.Def.
					<option value="13">MEN
					<option value="14">MP
					<option value="15">MP Recovery
					<option value="16">P.Atk.
					<option value="17">P.Def.
					<option value="18">STR
				</select>

				+<input type="text" id="AUG2" size="1" value="0" onkeypress="calc()"></a></td></tr>
<tr>
			<td>Helmet</td>
				<td><select id="HLME" onchange="calc()">
					<option value="0">+0<option value="1">+1<option value="2">+2<option value="3">+3<option value="4">+4<option value="5">+5<option value="6">+6<option value="7">+7<option value="8">+8<option value="9">+9<option value="10">+10<option value="11">+11<option value="12">+12<option value="13">+13<option value="14">+14<option value="15">+15<option value="16">+16<option value="17">+17<option value="18">+18<option value="19">+19<option value="20">+20
				</select></td>

				<td><select id="HLMG" onchange="equipmentgrade();calc()">
					<option value="1">S Grade
					<option value="2">A Grade
					<option value="3">B Grade
					<option value="4">C Grade
					<option value="5">D Grade
					<option value="6">Non Grade
				</select></td>
				<td><select id="HLMS" onchange="calc()">
					<option value="0">Unequipped
					<option value="1">Draconic Leather Helmet
					<option value="2">Imperial Crusader Helmet
					<option value="3">Major Arcana Circlet
				</select>

				<select id="HLMA" onchange="calc()">
					<option value="0">Unequipped
					<option value="4">Apella Cap (R)
					<option value="5">Apella Great Helm (H)
					<option value="6">Apella Helm (L)
					<option value="7">Dark Crystal Helmet
					<option value="8">Helm of Nightmare
					<option value="9">Majestic Circlet
					<option value="10">Tallum Helm
				</select>
				<select id="HLMB" onchange="calc()">
					<option value="0">Unequipped
					<option value="11">Avadon Circlet
					<option value="12">Blue Wolf Helmet
					<option value="13">Doom Helmet
					<option value="14">Zubei's Helmet
				</select>

				<select id="HLMC" onchange="calc()">
					<option value="0">Unequipped
					<option value="15">Chain Hood
					<option value="16">Composite Helmet
					<option value="17">Full Plate Helmet
					<option value="18">Great Helmet
					<option value="19">Shining Circlet
				</select>
				<select id="HLMD" onchange="calc()">
					<option value="0">Unequipped
					<option value="20">Bone Helmet
					<option value="21">Brigandine Helmet
					<option value="22">Bronze Helmet
					<option value="23">Clan Oath Cap (R)
					<option value="24">Clan Oath Great Helm (H)
					<option value="25">Clan Oath Helm (L)
					<option value="26">Helmet
					<option value="27">Plate Helmet
				</select>

				<select id="HLMN" onchange="calc()">
					<option value="0">Unequipped
					<option value="28">Cloth Cap
					<option value="29">Hard Leather Helmet
					<option value="30">Leather Cap
					<option value="31">Leather Helmet
					<option value="32">Wooden Helmet
				</select>
				</td>
				<td></td>
				<td id="HLM grade penalty"></td>
				<td></td>

				<td><a id="AUGS3"><select id="WAU3" onchange="calc(false,true)">
					<option value="1">-
					<option value="2">Accuracy
					<option value="3">CON
					<option value="4">CP
					<option value="5">CP Recovery
					<option value="6">Critical
					<option value="7">Evasion
					<option value="8">HP
					<option value="9">HP Recovery
					<option value="10">INT
					<option value="11">M.Atk.
					<option value="12">M.Def.
					<option value="13">MEN
					<option value="14">MP
					<option value="15">MP Recovery
					<option value="16">P.Atk.
					<option value="17">P.Def.
					<option value="18">STR
				</select>

				+<input type="text" id="AUG3" size="1" value="0" onkeypress="calc()"></a></td></tr>
<tr>
			<td>Body - Upper</td>
				<td><select id="UPRE" onchange="calc()">
					<option value="0">+0<option value="1">+1<option value="2">+2<option value="3">+3<option value="4">+4<option value="5">+5<option value="6">+6<option value="7">+7<option value="8">+8<option value="9">+9<option value="10">+10<option value="11">+11<option value="12">+12<option value="13">+13<option value="14">+14<option value="15">+15<option value="16">+16<option value="17">+17<option value="18">+18<option value="19">+19<option value="20">+20
				</select></td>

				<td><select id="UPRG" onchange="equipmentgrade();calc()">
					<option value="1">S Grade
					<option value="2">A Grade
					<option value="3">B Grade
					<option value="4">C Grade
					<option value="5">D Grade
					<option value="6">Non Grade
				</select></td>
				<td><select id="UPRS" onchange="calc()">
					<option value="0">Unequipped
					<option value="31">Draconic Leather Armor
					<option value="40">Imperial Crusader Breastplate
					<option value="49">Major Arcana Robe
				</select>

				<select id="UPRA" onchange="calc()">
					<option value="0">Unequipped
					<option value="1">Apella Brigandine
					<option value="2">Apella Doublet
					<option value="3">Apella Plate Armor
					<option value="5">Armor of Nightmare
					<option value="25">Dark Crystal Leather Armor
					<option value="26">Dark Crystal Breastplate
					<option value="27">Dark Crystal Robe
					<option value="46">Majestic Leather Armor
					<option value="47">Majestic Plate Armor
					<option value="48">Majestic Robe
					<option value="56">Nightmarish Leather Armor
					<option value="63">Robe of Nightmare
					<option value="70">Tallum Leather Armor
					<option value="71">Tallum Plate Armor
					<option value="72">Tallum Tunic
				</select>

				<select id="UPRB" onchange="calc()">
					<option value="0">Unequipped
					<option value="6">Avadon Breastplate
					<option value="7">Avadon Leather Armor
					<option value="8">Avadon Robe
					<option value="10">Blue Wolf Breastplate
					<option value="11">Blue Wolf Leather Armor
					<option value="12">Blue Wolf Tunic
					<option value="30">Doom Plate Armor
					<option value="42">Leather Armor of Doom
					<option value="76">Tunic of Doom
					<option value="79">Tunic of Zubei
					<option value="82">Zubei's Breastplate
					<option value="83">Zubei's Leather Shirt
				</select>

				<select id="UPRC" onchange="calc()">
					<option value="0">Unequipped
					<option value="16">Chain Mail Shirt
					<option value="20">Composite Armor
					<option value="28">Demon's Tunic
					<option value="29">Divine Tunic
					<option value="32">Drake Leather Armor
					<option value="33">Dwarven Chain Mail Shirt
					<option value="37">Full Plate Armor
					<option value="41">Karmian Tunic
					<option value="53">Mithril Shirt
					<option value="58">Plated Leather
					<option value="64">Robe of Seal
					<option value="61">Rind Leather Armor
					<option value="73">Theca Leather Armor
				</select>

				<select id="UPRD" onchange="calc()">
					<option value="0">Unequipped
					<option value="9">Blast Plate
					<option value="14">Brigandine Tunic
					<option value="17">Clan Oath Aketon
					<option value="18">Clan Oath Brigandine
					<option value="19">Clan Oath Plate Armor
					<option value="21">Compound Scale Mail
					<option value="24">Cursed Tunic
					<option value="34">Dwarven Scale Mail
					<option value="35">Elven Tunic
					<option value="38">Half Plate Armor
					<option value="45">Lion Skin Shirt
					<option value="50">Manticore Skin Shirt
					<option value="51">Mithril Banded Mail
					<option value="52">Mithril Breastplate
					<option value="54">Mithril Tunic
					<option value="55">Mystic's Tunic
					<option value="59">Puma Skin Shirt
					<option value="60">Reinforced Leather Shirt
					<option value="62">Ring Mail Breastplate
					<option value="65">Sage's Rag
					<option value="66">Salamander Skin Mail
					<option value="67">Scale Mail
					<option value="77">Tunic of Knowledge
					<option value="80">White Tunic
				</select>

				<select id="UPRN" onchange="calc()">
					<option value="0">Unequipped
					<option value="4">Apprentice's Tunic
					<option value="13">Bone Breastplate
					<option value="15">Bronze Breastplate
					<option value="22">Cotton Shirt
					<option value="23">Cotton Tunic
					<option value="36">Feriotic Tunic
					<option value="39">Hard Leather Shirt
					<option value="43">Leather Shirt
					<option value="44">Leather Tunic
					<option value="57">Piece Bone Breastplate
					<option value="68">Shirt
					<option value="69">Squire's Shirt
					<option value="74">Tunic
					<option value="75">Tunic of Devotion
					<option value="78">Tunic of Magic
					<option value="81">Wooden Breastplate
				</select>

				</td>
				<td></td>
				<td id="UPR grade penalty"></td>
				<td></td>
				<td><a id="AUGS4"><select id="WAU4" onchange="calc(false,true)">
					<option value="1">-
					<option value="2">Accuracy
					<option value="3">CON
					<option value="4">CP
					<option value="5">CP Recovery
					<option value="6">Critical
					<option value="7">Evasion
					<option value="8">HP
					<option value="9">HP Recovery
					<option value="10">INT
					<option value="11">M.Atk.
					<option value="12">M.Def.
					<option value="13">MEN
					<option value="14">MP
					<option value="15">MP Recovery
					<option value="16">P.Atk.
					<option value="17">P.Def.
					<option value="18">STR
				</select>

				+<input type="text" id="AUG4" size="1" value="0" onkeypress="calc()"></a></td></tr>
<tr>
			<td>Body - Lower</td>
				<td><select id="LWRE" onchange="calc()">
					<option value="0">+0<option value="1">+1<option value="2">+2<option value="3">+3<option value="4">+4<option value="5">+5<option value="6">+6<option value="7">+7<option value="8">+8<option value="9">+9<option value="10">+10<option value="11">+11<option value="12">+12<option value="13">+13<option value="14">+14<option value="15">+15<option value="16">+16<option value="17">+17<option value="18">+18<option value="19">+19<option value="20">+20
				</select></td>

				<td><select id="LWRG" onchange="equipmentgrade();calc()">
					<option value="1">S Grade
					<option value="2">A Grade
					<option value="3">B Grade
					<option value="4">C Grade
					<option value="5">D Grade
					<option value="6">Non Grade
				</select></td>
				<td><select id="LWRS" onchange="calc()">
					<option value="0">Unequipped
					<option value="24">Imperial Crusader Gaiters
				</select>
				<select id="LWRA" onchange="calc()">

					<option value="0">Unequipped
					<option value="13">Dark Crystal Gaiters
					<option value="14">Dark Crystalline Leggings
					<option value="46">Tallum Stockings
				</select>
				<select id="LWRB" onchange="calc()">
					<option value="0">Unequipped
					<option value="2">Avadon Gaiters
					<option value="3">Blue Wolf Gaiters
					<option value="4">Blue Wolf Stockings
					<option value="51">Stockings of Doom
					<option value="53">Stockings of Zubei
					<option value="55">Zubei's Gaiters
					<option value="56">Zubei's Leather Gaiters
				</select>

				<select id="LWRC" onchange="calc()">
					<option value="0">Unequipped
					<option value="8">Chain Gaiters
					<option value="16">Demon's Stockings
					<option value="17">Divine Stockings
					<option value="18">Dwarven Chain Gaiters
					<option value="26">Karmian Stockings
					<option value="39">Plated Leather Gaiters
					<option value="42">Rind Leather Gaiters
					<option value="47">Tempered Mithril Gaiters
					<option value="48">Theca Leather Gaiters
				</select>
				<select id="LWRD" onchange="calc()">
					<option value="0">Unequipped
					<option value="6">Brigandine Gaiters
					<option value="9">Compound Scale Gaiters
					<option value="12">Cursed Stockings
					<option value="15">Dark Stockings
					<option value="19">Dwarven Scale Gaiters
					<option value="20">Elven Stockings
					<option value="25">Iron Plate Gaiters
					<option value="29">Lion Skin Gaiters
					<option value="30">Manticore Skin Gaiters
					<option value="31">Mithril Banded Gaiters
					<option value="32">Mithril Gaiters
					<option value="33">Mithril Scale Gaiters
					<option value="34">Mithril Stockings
					<option value="35">Mystic's Stockings
					<option value="38">Plate Gaiters
					<option value="40">Puma Skin Gaiters
					<option value="41">Reinforced Leather Gaiters
					<option value="49">Scale Gaiters
					<option value="52">Stockings of Knowledge
				</select>

				<select id="LWRN" onchange="calc()">
					<option value="0">Unequipped
					<option value="1">Apprentice's Stockings
					<option value="5">Bone Gaiters
					<option value="7">Bronze Gaiters
					<option value="10">Cotton Pants
					<option value="11">Cotton Stockings
					<option value="21">Feriotic Stockings
					<option value="22">Hard Leather Gaiters
					<option value="23">Hard Leather Pants
					<option value="27">Leather Pants
					<option value="28>Leather Stockings
					<option value="36">Pants
					<option value="37">Piece Bone Gaiters
					<option value="43">Squire's Pants
					<option value="50">Stockings
					<option value="44">Stockings of Devotion
					<option value="45">Stockings of Magic
					<option value="54">Wooden Gaiters
				</select>

				</td>
				<td></td>
				<td id="LWR grade penalty"></td>
				<td></td>
				<td><a id="AUGS5"><select id="WAU5" onchange="calc(false,true)">
					<option value="1">-
					<option value="2">Accuracy
					<option value="3">CON
					<option value="4">CP
					<option value="5">CP Recovery
					<option value="6">Critical
					<option value="7">Evasion
					<option value="8">HP
					<option value="9">HP Recovery
					<option value="10">INT
					<option value="11">M.Atk.
					<option value="12">M.Def.
					<option value="13">MEN
					<option value="14">MP
					<option value="15">MP Recovery
					<option value="16">P.Atk.
					<option value="17">P.Def.
					<option value="18">STR
				</select>

				+<input type="text" id="AUG5" size="1" value="0" onkeypress="calc()"></a></td></tr>
<tr>
			<td>Gloves</td>
				<td><select id="GLVE" onchange="calc()">
					<option value="0">+0<option value="1">+1<option value="2">+2<option value="3">+3<option value="4">+4<option value="5">+5<option value="6">+6<option value="7">+7<option value="8">+8<option value="9">+9<option value="10">+10<option value="11">+11<option value="12">+12<option value="13">+13<option value="14">+14<option value="15">+15<option value="16">+16<option value="17">+17<option value="18">+18<option value="19">+19<option value="20">+20
				</select></td>

				<td><select id="GLVG" onchange="equipmentgrade();calc()">
					<option value="1">S Grade
					<option value="2">A Grade
					<option value="3">B Grade
					<option value="4">C Grade
					<option value="5">D Grade
					<option value="6">Non Grade
				</select></td>
				<td><select id="GLVS" onchange="calc()">
					<option value="0">Unequipped
					<option value="16">Draconic Leather Gloves
					<option value="27">Imperial Crusader Gauntlets
					<option value="32">Major Arcana Gloves
				</select>

				<select id="GLVA" onchange="calc()">
					<option value="0">Unequipped
					<option value="1">Apella Gauntlet (H)
					<option value="2">Apella Leather Gloves (L)
					<option value="3">Apella Silk Gloves (R)
					<option value="12">Dark Crystal Gloves
					<option value="25">Gloves of Nightmare
					<option value="31">Majestic Gloves
					<option value="45">Tallum Gloves
				</select>
				<select id="GLVB" onchange="calc()">
					<option value="0">Unequipped
					<option value="4">Avadon Gloves
					<option value="5">Blue Wolf Gloves
					<option value="15">Doom Gloves
					<option value="47">Zubei's Gauntlets
				</select>

				<select id="GLVC" onchange="calc()">
					<option value="0">Unequipped
					<option value="8">Chain Gloves
					<option value="13">Demon's Gloves
					<option value="14">Divine Gloves
					<option value="17">Drake Leather Gloves
					<option value="18">Dwarven Chain Gloves
					<option value="21">Full Plate Gauntlets
					<option value="26">Gloves of Seal
					<option value="28">Karmian Gloves
					<option value="34">Mithril Gauntlets
					<option value="37">Plated Leather Gloves
					<option value="39">Reinforced Mithril Gloves
					<option value="40">Rind Leather Gloves
					<option value="46">Theca Leather Gloves
				</select>

				<select id="GLVD" onchange="calc()">
					<option value="0">Unequipped
					<option value="7">Brigandine Gauntlets
					<option value="9">Clan Oath Gauntlets (H)
					<option value="10">Clan Oath Leather Gloves (L)
					<option value="11">Clan Oath Padded Gloves (R)
					<option value="19">Elven Mithril Gloves
					<option value="20">Excellent Leather Gloves
					<option value="22">Gauntlets
					<option value="24">Gloves of Knowledge
					<option value="29">Leather Gauntlets
					<option value="33">Manticore Skin Gloves
					<option value="35">Mithril Gloves
					<option value="36">Ogre Power Gauntlets
					<option value="38">Reinforced Leather Gloves
					<option value="41">Rip Gauntlets
					<option value="42">Sage's Worn Gloves
				</select>

				<select id="GLVN" onchange="calc()">
					<option value="0">Unequipped
					<option value="6">Bracer
					<option value="23">Gloves
					<option value="30">Leather Gloves
					<option value="43">Short Gloves
					<option value="44">Short Leather Gloves
				</select>
				</td>
				<td></td>
				<td id="GLV grade penalty"></td></tr>
<tr>

			<td>Boots</td>
				<td><select id="BOOE" onchange="calc()">
					<option value="0">+0<option value="1">+1<option value="2">+2<option value="3">+3<option value="4">+4<option value="5">+5<option value="6">+6<option value="7">+7<option value="8">+8<option value="9">+9<option value="10">+10<option value="11">+11<option value="12">+12<option value="13">+13<option value="14">+14<option value="15">+15<option value="16">+16<option value="17">+17<option value="18">+18<option value="19">+19<option value="20">+20
				</select></td>

				<td><select id="BOOG" onchange="equipmentgrade();calc()">
					<option value="1">S Grade
					<option value="2">A Grade
					<option value="3">B Grade
					<option value="4">C Grade
					<option value="5">D Grade
					<option value="6">Non Grade
				</select></td>
				<td><select id="BOOS" onchange="calc()">
					<option value="0">Unequipped
					<option value="28">Draconic Leather Boots
					<option value="33">Imperial Crusader Boots
					<option value="41">Major Arcana Boots
				</select>

				<select id="BOOA" onchange="calc()">
					<option value="0">Unequipped
					<option value="1">Apella Boots (L)
					<option value="2">Apella Sandals (R)
					<option value="3">Apella Solleret (H)
					<option value="11">Boots of Nightmare
					<option value="24">Dark Crystal Boots
					<option value="40">Majestic Boots
					<option value="50">Tallum Boots
				</select>
				<select id="BOOB" onchange="calc()">
					<option value="0">Unequipped
					<option value="6">Avadon Boots
					<option value="8">Blue Wolf Boots
					<option value="27">Doom Boots
					<option value="52">Zubei's Boots
				</select>

				<select id="BOOC" onchange="calc()">
					<option value="0">Unequipped
					<option value="13">Boots of Seal
					<option value="15">Chain Boots
					<option value="20">Composite Boots
					<option value="22">Crimson Boots
					<option value="25">Demon's Boots
					<option value="26">Divine Boots
					<option value="29">Drake Leather Boots
					<option value="30">Dwarven Chain Boots
					<option value="32">Full Plate Boots
					<option value="35">Karmian Boots
					<option value="43">Mithril Boots
					<option value="45">Plated Leather Boots
					<option value="47">Rind Leather Boots
					<option value="51">Theca Leather Boots
				</select>

				<select id="BOOD" onchange="calc()">
					<option value="0">Unequipped
					<option value="5">Assault Boots
					<option value="7">Blue Buckskin Boots
					<option value="10">Boots of Knowledge
					<option value="12">Boots of Power
					<option value="14">Brigandine Boots
					<option value="16">Clan Oath Boots (L)
					<option value="17">Clan Oath Sabaton (H)
					<option value="18">Clan Oath Sandals (R)
					<option value="31">Elven Mithril Boots
					<option value="34">Iron Boots
					<option value="36">Leather Boots
					<option value="42">Manticore Boots
					<option value="44">Plate Boots
					<option value="46">Reinforced Leather Boots
					<option value="48">Salamander Skin Boots
				</select>

				<select id="BOON" onchange="calc()">
					<option value="0">Unequipped
					<option value="4">Apprentice's Shoes
					<option value="9">Boots
					<option value="19">Cloth Shoes
					<option value="21">Cotton Shoes
					<option value="23">Crude Leather Shoes
					<option value="37">Leather Sandals
					<option value="38">Leather Shoes
					<option value="39">Low Boots
					<option value="49">Squeaking Shoes
				</select>
				</td>
				<td></td>

				<td id="BOO grade penalty"></td></tr>
<tr>			<td colspan=3 align=right>Quickselect a jewelry set:</td>
				<td><select id="FULLMDEF" onchange="equipmentgrade(false,true);calc()">
					<option>=================
					<option value="Unsealed_Tateossian">Unsealed Tateossian
					<option value="Sealed_Tateossian">Sealed Tateossian
					<option value="Unsealed_Majestic">Unsealed Majestic
					<option value="Sealed_Majestic">Sealed Majestic
					<option value="Black_Ore">Black Ore
					<option value="Top_C">Top C
					<option value="Top_Lux">Top Luxury Shop
					<option value="Top_D">Top D
					<option value="Elven">Elven
					<option value="Top_Non">Top Non Grade
				</select></td></tr>

<tr>			<td>Necklace</td>
				<td><select id="NCKE" onchange="calc()">
					<option value="0">+0<option value="1">+1<option value="2">+2<option value="3">+3<option value="4">+4<option value="5">+5<option value="6">+6<option value="7">+7<option value="8">+8<option value="9">+9<option value="10">+10<option value="11">+11<option value="12">+12<option value="13">+13<option value="14">+14<option value="15">+15<option value="16">+16<option value="17">+17<option value="18">+18<option value="19">+19<option value="20">+20
				</select></td>

				<td><select id="NCKG" onchange="equipmentgrade();calc()">
					<option value="1">S Grade
					<option value="2">A Grade
					<option value="3">B Grade
					<option value="4">C Grade
					<option value="5">D Grade
					<option value="6">Non Grade
				</select></td>
				<td><select id="NCKS" onchange="calc()">
					<option value="0">Unequipped
					<option value="20">Necklace of Valakas
					<option value="26">Sealed Tateossian Necklace
					<option value="27">Tateossian Necklace
				</select>

				<select id="NCKA" onchange="calc()">
					<option value="0">Unequipped
					<option value="28">Frintezza's Necklace
					<option value="6">Majestic Necklace
					<option value="23">Phoenix Necklace
					<option value="24">Sealed Majestic Necklace
					<option value="25">Sealed Phoenix Necklace
				</select>
				<select id="NCKB" onchange="calc()">
					<option value="0">Unequipped
					<option value="1">Adamantite Necklace
					<option value="10">Necklace of Black Ore
					<option value="11">Necklace of Blessing
					<option value="15">Necklace of Grace
				</select>

				<select id="NCKC" onchange="calc()">
					<option value="0">Unequipped
					<option value="2">Aquastone Necklace
					<option value="9">Necklace of Binding
					<option value="17">Necklace of Mermaid
					<option value="19">Necklace of Protection
				</select>
				<select id="NCKD" onchange="calc()">
					<option value="0">Unequipped
					<option value="4">Elven Necklace
					<option value="5">Enchanted Necklace
					<option value="7">Near Forest Necklace
					<option value="13">Necklace of Darkness
					<option value="14">Necklace of Devotion
				</select>

				<select id="NCKN" onchange="calc()">
					<option value="0">Unequipped
					<option value="3">Blue Diamond Necklace
					<option value="8">Necklace of Anguish
					<option value="12">Necklace of Courage
					<option value="16">Necklace of Magic
					<option value="18">Necklace of Knowledge
					<option value="21">Necklace of Valor
					<option value="22">Necklace of Wisdom
				</select>
				</td>
				<td></td>
				<td id="NCK grade penalty"></td></tr>

<tr>			<td>Earring</td>
				<td><select id="EAR1E" onchange="calc()">
					<option value="0">+0<option value="1">+1<option value="2">+2<option value="3">+3<option value="4">+4<option value="5">+5<option value="6">+6<option value="7">+7<option value="8">+8<option value="9">+9<option value="10">+10<option value="11">+11<option value="12">+12<option value="13">+13<option value="14">+14<option value="15">+15<option value="16">+16<option value="17">+17<option value="18">+18<option value="19">+19<option value="20">+20
				</select></td>

				<td><select id="EAR1G" onchange="equipmentgrade();calc()">
					<option value="1">S Grade
					<option value="2">A Grade
					<option value="3">B Grade
					<option value="4">C Grade
					<option value="5">D Grade
					<option value="6">Non Grade
				</select></td>
				<td><select id="EAR1S" onchange="calc()">
					<option value="0">Unequipped
					<option value="5">Earring of Antharas
					<option value="24">Sealed Tateossian Earring
					<option value="25">Tateossian Earring
					<option value="27">Zaken's Earring
				</select>

				<select id="EAR1A" onchange="calc()">
					<option value="0">Unequipped
					<option value="9">Earring of Orfen
					<option value="15">Majestic Earring
					<option value="21">Phoenix Earring
					<option value="22">Sealed Majestic Earring
					<option value="23">Sealed Phoenix Earring
				</select>
				<select id="EAR1B" onchange="calc()">
					<option value="0">Unequipped
					<option value="1">Adamantite Earring
					<option value="7">Earring of Black Ore
					<option value="8">Earring of Blessing
				</select>

				<select id="EAR1C" onchange="calc()">
					<option value="0">Unequipped
					<option value="6">Earring of Binding
					<option value="10">Earring of Protection
					<option value="16">Moonstone Earring
					<option value="18">Nassen's Earring
				</select>
				<select id="EAR1D" onchange="calc()">
					<option value="0">Unequipped
					<option value="13">Elven Earring
					<option value="14">Enchanted Earring
					<option value="19">Omen Beast's Eye Earring
					<option value="20">Red Crescent Earring
					<option value="26">Tiger's Eye Earring
				</select>

				<select id="EAR1N" onchange="calc()">
					<option value="0">Unequipped
					<option value="2">Apprentice's Earring
					<option value="3">Cat's Eye Earring
					<option value="4">Coral Earring
					<option value="11">Earring of Strength
					<option value="12">Earring of Wisdom
					<option value="17">Mystic's Earring
				</select>
				</td>
				<td></td>
				<td id="EAR1 grade penalty"></td></tr>

<tr>			<td>Earring</td>
				<td><select id="EAR2E" onchange="calc()">
					<option value="0">+0<option value="1">+1<option value="2">+2<option value="3">+3<option value="4">+4<option value="5">+5<option value="6">+6<option value="7">+7<option value="8">+8<option value="9">+9<option value="10">+10<option value="11">+11<option value="12">+12<option value="13">+13<option value="14">+14<option value="15">+15<option value="16">+16<option value="17">+17<option value="18">+18<option value="19">+19<option value="20">+20
				</select></td>

				<td><select id="EAR2G" onchange="equipmentgrade();calc()">
					<option value="1">S Grade
					<option value="2">A Grade
					<option value="3">B Grade
					<option value="4">C Grade
					<option value="5">D Grade
					<option value="6">Non Grade
				</select></td>
				<td><select id="EAR2S" onchange="calc()">
					<option value="0">Unequipped
					<option value="5">Earring of Antharas
					<option value="24">Sealed Tateossian Earring
					<option value="25">Tateossian Earring
					<option value="27">Zaken's Earring
				</select>

				<select id="EAR2A" onchange="calc()">
					<option value="0">Unequipped
					<option value="9">Earring of Orfen
					<option value="15">Majestic Earring
					<option value="21">Phoenix Earring
					<option value="22">Sealed Majestic Earring
					<option value="23">Sealed Phoenix Earring
				</select>
				<select id="EAR2B" onchange="calc()">
					<option value="0">Unequipped
					<option value="1">Adamantite Earring
					<option value="7">Earring of Black Ore
					<option value="8">Earring of Blessing
				</select>

				<select id="EAR2C" onchange="calc()">
					<option value="0">Unequipped
					<option value="6">Earring of Binding
					<option value="10">Earring of Protection
					<option value="16">Moonstone Earring
					<option value="18">Nassen's Earring
				</select>
				<select id="EAR2D" onchange="calc()">
					<option value="0">Unequipped
					<option value="13">Elven Earring
					<option value="14">Enchanted Earring
					<option value="19">Omen Beast's Eye Earring
					<option value="20">Red Crescent Earring
					<option value="26">Tiger's Eye Earring
				</select>

				<select id="EAR2N" onchange="calc()">
					<option value="0">Unequipped
					<option value="2">Apprentice's Earring
					<option value="3">Cat's Eye Earring
					<option value="4">Coral Earring
					<option value="11">Earring of Strength
					<option value="12">Earring of Wisdom
					<option value="17">Mystic's Earring
				</select>
				</td>
				<td></td>
				<td id="EAR2 grade penalty"></td></tr>

<tr>			<td>Ring</td>
				<td><select id="RNG1E" onchange="calc()">
					<option value="0">+0<option value="1">+1<option value="2">+2<option value="3">+3<option value="4">+4<option value="5">+5<option value="6">+6<option value="7">+7<option value="8">+8<option value="9">+9<option value="10">+10<option value="11">+11<option value="12">+12<option value="13">+13<option value="14">+14<option value="15">+15<option value="16">+16<option value="17">+17<option value="18">+18<option value="19">+19<option value="20">+20
				</select></td>

				<td><select id="RNG1G" onchange="equipmentgrade();calc()">
					<option value="1">S Grade
					<option value="2">A Grade
					<option value="3">B Grade
					<option value="4">C Grade
					<option value="5">D Grade
					<option value="6">Non Grade
				</select></td>
				<td><select id="RNG1S" onchange="calc()">
					<option value="0">Unequipped
					<option value="13">Ring of Baium
					<option value="27">Sealed Tateossian Ring
					<option value="28">Tateossian Ring
				</select>

				<select id="RNG1A" onchange="calc()">
					<option value="0">Unequipped
					<option value="8">Majestic Ring
					<option value="10">Phoenix Ring
					<option value="17">Ring of Core
					<option value="25">Sealed Majestic Ring
					<option value="26">Sealed Phoenix Ring
				</select>
				<select id="RNG1B" onchange="calc()">
					<option value="0">Unequipped
					<option value="1">Adamantite Ring
					<option value="15">Ring of Black Ore
					<option value="16">Ring of Blessing
					<option value="22">Ring of Queen Ant
				</select>

				<select id="RNG1C" onchange="calc()">
					<option value="0">Unequipped
					<option value="2">Aquastone Ring
					<option value="11">Ring of Ages
					<option value="14">Ring of Binding
					<option value="21">Ring of Protection
				</select>
				<select id="RNG1D" onchange="calc()">
					<option value="0">Unequipped
					<option value="3">Black Pearl Ring
					<option value="5">Elven Ring
					<option value="6">Enchanted Ring
					<option value="9">Mithril Ring
					<option value="18">Ring of Devotion
				</select>

				<select id="RNG1N" onchange="calc()">
					<option value="0">Unequipped
					<option value="4">Blue Coral Ring
					<option value="7">Magic Ring
					<option value="12">Ring of Anguish
					<option value="19">Ring of Firefly
					<option value="20">Ring of Knowledge
					<option value="23">Ring of Raccoon
					<option value="24">Ring of Wisdom
				</select>
				</td>
				<td></td>
				<td id="RNG1 grade penalty"></td></tr>

<tr>			<td>Ring</td>
				<td><select id="RNG2E" onchange="calc()">
					<option value="0">+0<option value="1">+1<option value="2">+2<option value="3">+3<option value="4">+4<option value="5">+5<option value="6">+6<option value="7">+7<option value="8">+8<option value="9">+9<option value="10">+10<option value="11">+11<option value="12">+12<option value="13">+13<option value="14">+14<option value="15">+15<option value="16">+16<option value="17">+17<option value="18">+18<option value="19">+19<option value="20">+20
				</select></td>

				<td><select id="RNG2G" onchange="equipmentgrade();calc()">
					<option value="1">S Grade
					<option value="2">A Grade
					<option value="3">B Grade
					<option value="4">C Grade
					<option value="5">D Grade
					<option value="6">Non Grade
				</select></td>
				<td><select id="RNG2S" onchange="calc()">
					<option value="0">Unequipped
					<option value="13">Ring of Baium
					<option value="27">Sealed Tateossian Ring
					<option value="28">Tateossian Ring
				</select>

				<select id="RNG2A" onchange="calc()">
					<option value="0">Unequipped
					<option value="8">Majestic Ring
					<option value="10">Phoenix Ring
					<option value="17">Ring of Core
					<option value="25">Sealed Majestic Ring
					<option value="26">Sealed Phoenix Ring
				</select>
				<select id="RNG2B" onchange="calc()">
					<option value="0">Unequipped
					<option value="1">Adamantite Ring
					<option value="15">Ring of Black Ore
					<option value="16">Ring of Blessing
					<option value="22">Ring of Queen Ant
				</select>

				<select id="RNG2C" onchange="calc()">
					<option value="0">Unequipped
					<option value="2">Aquastone Ring
					<option value="11">Ring of Ages
					<option value="14">Ring of Binding
					<option value="21">Ring of Protection
				</select>
				<select id="RNG2D" onchange="calc()">
					<option value="0">Unequipped
					<option value="3">Black Pearl Ring
					<option value="5">Elven Ring
					<option value="6">Enchanted Ring
					<option value="9">Mithril Ring
					<option value="18">Ring of Devotion
				</select>

				<select id="RNG2N" onchange="calc()">
					<option value="0">Unequipped
					<option value="4">Blue Coral Ring
					<option value="7">Magic Ring
					<option value="12">Ring of Anguish
					<option value="19">Ring of Firefly
					<option value="20">Ring of Knowledge
					<option value="23">Ring of Raccoon
					<option value="24">Ring of Wisdom
				</select>
				</td>
				<td></td>
				<td id="RNG2 grade penalty"></td></tr>

	</table>
</fieldset>

<fieldset id="PASSIVES">
<legend>Clan Buffs</legend>
<table class="statcalc">
<tr>	<td></td>
		<td><input type=checkbox id="ATPC" onclick="passives(true);calc()" checked></td>
			<td colspan=3>Auto-select my passives for me</td></tr>
<tr>		<td>Weapon Mastery</td>

			<td><input type=checkbox id="WMFC" onclick="passives();calc()">
			<input type=checkbox id="WMM1C" onclick="passives();calc()">
			<input type=checkbox id="WMM2C" onclick="passives();calc()">
			<input type=checkbox id="WMM3C" onclick="passives();calc()"></td>
			<td>
			<select id="WMF" onchange="calc()"><option value="1">Weapon Mastery 1 (5)<option value="2">Weapon Mastery 2 (10)<option value="3">Weapon Mastery 3 (15)</select>
			<select id="WMM1" onchange="calc()"><option value="1">Weapon Mastery 1 (7)<option value="2">Weapon Mastery 2 (14)</select>

			<select id="WMM2" onchange="calc()"><option value="1">Weapon Mastery 1 (7)<option value="2">Weapon Mastery 2 (14)<option value="3">Weapon Mastery 3 (20)<option value="4">Weapon Mastery 4 (25)<option value="5">Weapon Mastery 5 (25)<option value="6">Weapon Mastery 6 (30)<option value="7">Weapon Mastery 7 (30)<option value="8">Weapon Mastery 8 (35)<option value="9">Weapon Mastery 9 (35)</select>
			<select id="WMM3" onchange="calc()"><option value="1">Weapon Mastery 1 (7)<option value="2">Weapon Mastery 2 (14)<option value="3">Weapon Mastery 3 (20)<option value="4">Weapon Mastery 4 (25)<option value="5">Weapon Mastery 5 (25)<option value="6">Weapon Mastery 6 (30)<option value="7">Weapon Mastery 7 (30)<option value="8">Weapon Mastery 8 (35)<option value="9">Weapon Mastery 9 (35)<option value="10">Weapon Mastery 10 (40)<option value="11">Weapon Mastery 11 (40)<option value="12">Weapon Mastery 12 (40)<option value="13">Weapon Mastery 13 (44)<option value="14">Weapon Mastery 14 (44)<option value="15">Weapon Mastery 15 (44)<option value="16">Weapon Mastery 16 (48)<option value="17">Weapon Mastery 17 (48)<option value="18">Weapon Mastery 18 (48)<option value="19">Weapon Mastery 19 (52)<option value="20">Weapon Mastery 20 (52)<option value="21">Weapon Mastery 21 (52)<option value="22">Weapon Mastery 22 (56)<option value="23">Weapon Mastery 23 (56)<option value="24">Weapon Mastery 24 (56)<option value="25">Weapon Mastery 25 (58)<option value="26">Weapon Mastery 26 (58)<option value="27">Weapon Mastery 27 (60)<option value="28">Weapon Mastery 28 (60)<option value="29">Weapon Mastery 29 (62)<option value="30">Weapon Mastery 30 (62)<option value="31">Weapon Mastery 31 (64)<option value="32">Weapon Mastery 32 (64)<option value="33">Weapon Mastery 33 (66)<option value="34">Weapon Mastery 34 (66)<option value="35">Weapon Mastery 35 (68)<option value="36">Weapon Mastery 36 (68)<option value="37">Weapon Mastery 37 (70)<option value="38">Weapon Mastery 38 (70)<option value="39">Weapon Mastery 39 (72)<option value="40">Weapon Mastery 40 (72)<option value="41">Weapon Mastery 41 (74)<option value="42">Weapon Mastery 42 (74)</select>

			</td>
			<td>
			<input type=checkbox id="WSBM1C" onclick="passives();calc()">
			<input type=checkbox id="WSBM2C" onclick="passives();calc()">
			<input type=checkbox id="BLM1C" onclick="passives();calc()">
			<input type=checkbox id="BLM2C" onclick="passives();;calc()">
			<input type=checkbox id="FIM1C" onclick="passives();calc()">
			<input type=checkbox id="FIM2C" onclick="passives();calc()">
			<input type=checkbox id="KSBM1C" onclick="passives();calc()">

			<input type=checkbox id="KSBM2C" onclick="passives();calc()">
			<input type=checkbox id="DGM1C" onclick="passives();calc()">
			<input type=checkbox id="DGM2C" onclick="passives();calc()"></td>
			<td>
			<select id="WSBM1" onchange="calc()"><option value="1" id="WSwordBlunt1">Sword/Blunt Mastery 1 (20)<option value="2" id="WSwordBlunt2">Sword/Blunt Mastery 2 (24)<option value="3" id="WSwordBlunt3">Sword/Blunt Mastery 3 (28)<option value="4" id="WSwordBlunt4">Sword/Blunt Mastery 4 (28)<option value="5" id="WSwordBlunt5">Sword/Blunt Mastery 5 (32)<option value="6" id="WSwordBlunt6">Sword/Blunt Mastery 6 (32)<option value="7" id="WSwordBlunt7">Sword/Blunt Mastery 7 (36)<option value="8" id="WSwordBlunt8">Sword/Blunt Mastery 8 (36)</select>

			<select id="WSBM2" onchange="calc()"><option value="1" id="WSwordBlunt1">Sword/Blunt Mastery 1 (20)<option value="2" id="WSwordBlunt2">Sword/Blunt Mastery 2 (24)<option value="3" id="WSwordBlunt3">Sword/Blunt Mastery 3 (28)<option value="4" id="WSwordBlunt4">Sword/Blunt Mastery 4 (28)<option value="5" id="WSwordBlunt5">Sword/Blunt Mastery 5 (32)<option value="6" id="WSwordBlunt6">Sword/Blunt Mastery 6 (32)<option value="7" id="WSwordBlunt7">Sword/Blunt Mastery 7 (36)<option value="8" id="WSwordBlunt8">Sword/Blunt Mastery 8 (36)<option value="9" id="WSwordBlunt9">Sword/Blunt Mastery 9 (40)<option value="10" id="WSwordBlunt10">Sword/Blunt Mastery 10 (40)<option value="11" id="WSwordBlunt11">Sword/Blunt Mastery 11 (40)<option value="12" id="WSwordBlunt12">Sword/Blunt Mastery 12 (43)<option value="13" id="WSwordBlunt13">Sword/Blunt Mastery 13 (43)<option value="14" id="WSwordBlunt14">Sword/Blunt Mastery 14 (43)<option value="15" id="WSwordBlunt15">Sword/Blunt Mastery 15 (46)<option value="16" id="WSwordBlunt16">Sword/Blunt Mastery 16 (46)<option value="17" id="WSwordBlunt17">Sword/Blunt Mastery 17 (46)<option value="18" id="WSwordBlunt18">Sword/Blunt Mastery 18 (49)<option value="19" id="WSwordBlunt19">Sword/Blunt Mastery 19 (49)<option value="20" id="WSwordBlunt20">Sword/Blunt Mastery 20 (49)<option value="21" id="WSwordBlunt21">Sword/Blunt Mastery 21 (52)<option value="22" id="WSwordBlunt22">Sword/Blunt Mastery 22 (52)<option value="23" id="WSwordBlunt23">Sword/Blunt Mastery 23 (52)<option value="24" id="WSwordBlunt24">Sword/Blunt Mastery 24 (55)<option value="25" id="WSwordBlunt25">Sword/Blunt Mastery 25 (55)<option value="26" id="WSwordBlunt26">Sword/Blunt Mastery 26 (55)<option value="27" id="WSwordBlunt27">Sword/Blunt Mastery 27 (58)<option value="28" id="WSwordBlunt28">Sword/Blunt Mastery 28 (58)<option value="29" id="WSwordBlunt29">Sword/Blunt Mastery 29 (58)<option value="30" id="WSwordBlunt30">Sword/Blunt Mastery 30 (60)<option value="31" id="WSwordBlunt31">Sword/Blunt Mastery 31 (60)<option value="32" id="WSwordBlunt32">Sword/Blunt Mastery 32 (62)<option value="33" id="WSwordBlunt33">Sword/Blunt Mastery 33 (62)<option value="34" id="WSwordBlunt34">Sword/Blunt Mastery 34 (64)<option value="35" id="WSwordBlunt35">Sword/Blunt Mastery 35 (64)<option value="36" id="WSwordBlunt36">Sword/Blunt Mastery 36 (66)<option value="37" id="WSwordBlunt37">Sword/Blunt Mastery 37 (66)<option value="38" id="WSwordBlunt38">Sword/Blunt Mastery 38 (68)<option value="39" id="WSwordBlunt39">Sword/Blunt Mastery 39 (68)<option value="40" id="WSwordBlunt40">Sword/Blunt Mastery 40 (70)<option value="41" id="WSwordBlunt41">Sword/Blunt Mastery 41 (70)<option value="42" id="WSwordBlunt42">Sword/Blunt Mastery 42 (72)<option value="43" id="WSwordBlunt43">Sword/Blunt Mastery 43 (72)<option value="44" id="WSwordBlunt44">Sword/Blunt Mastery 44 (74)<option value="45" id="WSwordBlunt45">Sword/Blunt Mastery 45 (74)</select>

			<select id="BLM1" onchange="calc()"><option value="1">Blunt Mastery 1 (20)<option value="2">Blunt Mastery 2 (24)<option value="3">Blunt Mastery 3 (28)<option value="4">Blunt Mastery 4 (28)<option value="5">Blunt Mastery 5 (32)<option value="6">Blunt Mastery 6 (32)<option value="7">Blunt Mastery 7 (36)<option value="8">Blunt Mastery 8 (36)</select>
			<select id="BLM2" onchange="calc()"><option value="1">Blunt Mastery 1 (20)<option value="2">Blunt Mastery 2 (24)<option value="3">Blunt Mastery 3 (28)<option value="4">Blunt Mastery 4 (28)<option value="5">Blunt Mastery 5 (32)<option value="6">Blunt Mastery 6 (32)<option value="7">Blunt Mastery 7 (36)<option value="8">Blunt Mastery 8 (36)<option value="9">Blunt Mastery 9 (40)<option value="10">Blunt Mastery 10 (40)<option value="11">Blunt Mastery 11 (40)<option value="12">Blunt Mastery 12 (43)<option value="13">Blunt Mastery 13 (43)<option value="14">Blunt Mastery 14 (43)<option value="15">Blunt Mastery 15 (46)<option value="16">Blunt Mastery 16 (46)<option value="17">Blunt Mastery 17 (46)<option value="18">Blunt Mastery 18 (49)<option value="19">Blunt Mastery 19 (49)<option value="20">Blunt Mastery 20 (49)<option value="21">Blunt Mastery 21 (52)<option value="22">Blunt Mastery 22 (52)<option value="23">Blunt Mastery 23 (52)<option value="24">Blunt Mastery 24 (55)<option value="25">Blunt Mastery 25 (55)<option value="26">Blunt Mastery 26 (55)<option value="27">Blunt Mastery 27 (58)<option value="28">Blunt Mastery 28 (58)<option value="29">Blunt Mastery 29 (58)<option value="30">Blunt Mastery 30 (60)<option value="31">Blunt Mastery 31 (60)<option value="32">Blunt Mastery 32 (62)<option value="33">Blunt Mastery 33 (62)<option value="34">Blunt Mastery 34 (64)<option value="35">Blunt Mastery 35 (64)<option value="36">Blunt Mastery 36 (66)<option value="37">Blunt Mastery 37 (66)<option value="38">Blunt Mastery 38 (68)<option value="39">Blunt Mastery 39 (68)<option value="40">Blunt Mastery 40 (70)<option value="41">Blunt Mastery 41 (70)<option value="42">Blunt Mastery 42 (72)<option value="43">Blunt Mastery 43 (72)<option value="44">Blunt Mastery 44 (74)<option value="45">Blunt Mastery 45 (74)<option value="76">Blunt Mastery 45 +1 (Power)<option value="77">Blunt Mastery 45 +2 (Power)<option value="78">Blunt Mastery 45 +3 (Power)<option value="79">Blunt Mastery 45 +4 (Power)<option value="80">Blunt Mastery 45 +5 (Power)<option value="81">Blunt Mastery 45 +6 (Power)<option value="82">Blunt Mastery 45 +7 (Power)<option value="83">Blunt Mastery 45 +8 (Power)<option value="84">Blunt Mastery 45 +9 (Power)<option value="85">Blunt Mastery 45 +10 (Power)<option value="86">Blunt Mastery 45 +11 (Power)<option value="87">Blunt Mastery 45 +12 (Power)<option value="88">Blunt Mastery 45 +13 (Power)<option value="89">Blunt Mastery 45 +14 (Power)<option value="90">Blunt Mastery 45 +15 (Power)<option value="91">Blunt Mastery 45 +16 (Power)<option value="92">Blunt Mastery 45 +17 (Power)<option value="93">Blunt Mastery 45 +18 (Power)<option value="94">Blunt Mastery 45 +19 (Power)<option value="95">Blunt Mastery 45 +20 (Power)<option value="96">Blunt Mastery 45 +21 (Power)<option value="97">Blunt Mastery 45 +22 (Power)<option value="98">Blunt Mastery 45 +23 (Power)<option value="99">Blunt Mastery 45 +24 (Power)<option value="100">Blunt Mastery 45 +25 (Power)<option value="101">Blunt Mastery 45 +26 (Power)<option value="102">Blunt Mastery 45 +27 (Power)<option value="103">Blunt Mastery 45 +28 (Power)<option value="104">Blunt Mastery 45 +29 (Power)<option value="105">Blunt Mastery 45 +30 (Power)<option value="106">Blunt Mastery 45 +1 (Crt. Damage)<option value="107">Blunt Mastery 45 +2 (Crt. Damage)<option value="108">Blunt Mastery 45 +3 (Crt. Damage)<option value="109">Blunt Mastery 45 +4 (Crt. Damage)<option value="110">Blunt Mastery 45 +5 (Crt. Damage)<option value="111">Blunt Mastery 45 +6 (Crt. Damage)<option value="112">Blunt Mastery 45 +7 (Crt. Damage)<option value="113">Blunt Mastery 45 +8 (Crt. Damage)<option value="114">Blunt Mastery 45 +9 (Crt. Damage)<option value="115">Blunt Mastery 45 +10 (Crt. Damage)<option value="116">Blunt Mastery 45 +11 (Crt. Damage)<option value="117">Blunt Mastery 45 +12 (Crt. Damage)<option value="118">Blunt Mastery 45 +13 (Crt. Damage)<option value="119">Blunt Mastery 45 +14 (Crt. Damage)<option value="120">Blunt Mastery 45 +15 (Crt. Damage)<option value="121">Blunt Mastery 45 +16 (Crt. Damage)<option value="122">Blunt Mastery 45 +17 (Crt. Damage)<option value="123">Blunt Mastery 45 +18 (Crt. Damage)<option value="124">Blunt Mastery 45 +19 (Crt. Damage)<option value="125">Blunt Mastery 45 +20 (Crt. Damage)<option value="126">Blunt Mastery 45 +21 (Crt. Damage)<option value="127">Blunt Mastery 45 +22 (Crt. Damage)<option value="128">Blunt Mastery 45 +23 (Crt. Damage)<option value="129">Blunt Mastery 45 +24 (Crt. Damage)<option value="130">Blunt Mastery 45 +25 (Crt. Damage)<option value="131">Blunt Mastery 45 +26 (Crt. Damage)<option value="132">Blunt Mastery 45 +27 (Crt. Damage)<option value="133">Blunt Mastery 45 +28 (Crt. Damage)<option value="134">Blunt Mastery 45 +29 (Crt. Damage)<option value="135">Blunt Mastery 45 +30 (Crt. Damage)

</select>
			<select id="FIM1" onchange="calc()"><option value="1">Fist Mastery 1 (20)<option value="2">Fist Mastery 2 (24)<option value="3">Fist Mastery 3 (28)<option value="4">Fist Mastery 4 (28)<option value="5">Fist Mastery 5 (32)<option value="6">Fist Mastery 6 (32)<option value="7">Fist Mastery 7 (36)<option value="8">Fist Mastery 8 (36)</select>
			<select id="FIM2" onchange="calc()"><option value="1">Fist Mastery 1 (20)<option value="2">Fist Mastery 2 (24)<option value="3">Fist Mastery 3 (28)<option value="4">Fist Mastery 4 (28)<option value="5">Fist Mastery 5 (32)<option value="6">Fist Mastery 6 (32)<option value="7">Fist Mastery 7 (36)<option value="8">Fist Mastery 8 (36)<option value="9">Fist Mastery 9 (40)<option value="10">Fist Mastery 10 (40)<option value="11">Fist Mastery 11 (40)<option value="12">Fist Mastery 12 (43)<option value="13">Fist Mastery 13 (43)<option value="14">Fist Mastery 14 (43)<option value="15">Fist Mastery 15 (46)<option value="16">Fist Mastery 16 (46)<option value="17">Fist Mastery 17 (46)<option value="18">Fist Mastery 18 (49)<option value="19">Fist Mastery 19 (49)<option value="20">Fist Mastery 20 (49)<option value="21">Fist Mastery 21 (52)<option value="22">Fist Mastery 22 (52)<option value="23">Fist Mastery 23 (52)<option value="24">Fist Mastery 24 (55)<option value="25">Fist Mastery 25 (55)<option value="26">Fist Mastery 26 (55)<option value="27">Fist Mastery 27 (58)<option value="28">Fist Mastery 28 (58)<option value="29">Fist Mastery 29 (58)<option value="30">Fist Mastery 30 (60)<option value="31">Fist Mastery 31 (60)<option value="32">Fist Mastery 32 (62)<option value="33">Fist Mastery 33 (62)<option value="34">Fist Mastery 34 (64)<option value="35">Fist Mastery 35 (64)<option value="36">Fist Mastery 36 (66)<option value="37">Fist Mastery 37 (66)<option value="38">Fist Mastery 38 (68)<option value="39">Fist Mastery 39 (68)<option value="40">Fist Mastery 40 (70)<option value="41">Fist Mastery 41 (70)<option value="42">Fist Mastery 42 (72)<option value="43">Fist Mastery 43 (72)<option value="44">Fist Mastery 44 (74)<option value="45">Fist Mastery 45 (74)</select>

			<select id="KSBM1" onchange="calc()"><option value="1">Sword/Blunt Mastery 1 (20)<option value="2">Sword/Blunt Mastery 2 (24)<option value="3">Sword/Blunt Mastery 3 (28)<option value="4">Sword/Blunt Mastery 4 (28)<option value="5">Sword/Blunt Mastery 5 (32)<option value="6">Sword/Blunt Mastery 6 (32)<option value="7">Sword/Blunt Mastery 7 (36)<option value="8">Sword/Blunt Mastery 8 (36)</select>
			<select id="KSBM2" onchange="calc()"><option value="1">Sword/Blunt Mastery 1 (20)<option value="2">Sword/Blunt Mastery 2 (24)<option value="3">Sword/Blunt Mastery 3 (28)<option value="4">Sword/Blunt Mastery 4 (28)<option value="5">Sword/Blunt Mastery 5 (32)<option value="6">Sword/Blunt Mastery 6 (32)<option value="7">Sword/Blunt Mastery 7 (36)<option value="8">Sword/Blunt Mastery 8 (36)<option value="9">Sword/Blunt Mastery 9 (40)<option value="10">Sword/Blunt Mastery 10 (40)<option value="11">Sword/Blunt Mastery 11 (40)<option value="12">Sword/Blunt Mastery 12 (43)<option value="13">Sword/Blunt Mastery 13 (43)<option value="14">Sword/Blunt Mastery 14 (43)<option value="15">Sword/Blunt Mastery 15 (46)<option value="16">Sword/Blunt Mastery 16 (46)<option value="17">Sword/Blunt Mastery 17 (46)<option value="18">Sword/Blunt Mastery 18 (49)<option value="19">Sword/Blunt Mastery 19 (49)<option value="20">Sword/Blunt Mastery 20 (49)<option value="21">Sword/Blunt Mastery 21 (52)<option value="22">Sword/Blunt Mastery 22 (52)<option value="23">Sword/Blunt Mastery 23 (52)<option value="24">Sword/Blunt Mastery 24 (55)<option value="25">Sword/Blunt Mastery 25 (55)<option value="26">Sword/Blunt Mastery 26 (55)<option value="27">Sword/Blunt Mastery 27 (58)<option value="28">Sword/Blunt Mastery 28 (58)<option value="29">Sword/Blunt Mastery 29 (58)<option value="30">Sword/Blunt Mastery 30 (60)<option value="31">Sword/Blunt Mastery 31 (60)<option value="32">Sword/Blunt Mastery 32 (62)<option value="33">Sword/Blunt Mastery 33 (62)<option value="34">Sword/Blunt Mastery 34 (64)<option value="35">Sword/Blunt Mastery 35 (64)<option value="36">Sword/Blunt Mastery 36 (66)<option value="37">Sword/Blunt Mastery 37 (66)<option value="38">Sword/Blunt Mastery 38 (68)<option value="39">Sword/Blunt Mastery 39 (68)<option value="40">Sword/Blunt Mastery 40 (70)<option value="41">Sword/Blunt Mastery 41 (70)<option value="42">Sword/Blunt Mastery 42 (72)<option value="43">Sword/Blunt Mastery 43 (72)<option value="44">Sword/Blunt Mastery 44 (74)<option value="45">Sword/Blunt Mastery 45 (74)</select>

			<select id="DGM1" onchange="calc()"><option value="1">Dagger Mastery 1 (20)<option value="2">Dagger Mastery 2 (24)<option value="3">Dagger Mastery 3 (28)<option value="4">Dagger Mastery 4 (28)<option value="5">Dagger Mastery 5 (32)<option value="6">Dagger Mastery 6 (32)<option value="7">Dagger Mastery 7 (36)<option value="8">Dagger Mastery 8 (36)</select>
			<select id="DGM2" onchange="calc()"><option value="1">Dagger Mastery 1 (20)<option value="2">Dagger Mastery 2 (24)<option value="3">Dagger Mastery 3 (28)<option value="4">Dagger Mastery 4 (28)<option value="5">Dagger Mastery 5 (32)<option value="6">Dagger Mastery 6 (32)<option value="7">Dagger Mastery 7 (36)<option value="8">Dagger Mastery 8 (36)<option value="9">Dagger Mastery 9 (40)<option value="10">Dagger Mastery 10 (40)<option value="11">Dagger Mastery 11 (40)<option value="12">Dagger Mastery 12 (43)<option value="13">Dagger Mastery 13 (43)<option value="14">Dagger Mastery 14 (43)<option value="15">Dagger Mastery 15 (46)<option value="16">Dagger Mastery 16 (46)<option value="17">Dagger Mastery 17 (46)<option value="18">Dagger Mastery 18 (49)<option value="19">Dagger Mastery 19 (49)<option value="20">Dagger Mastery 20 (49)<option value="21">Dagger Mastery 21 (52)<option value="22">Dagger Mastery 22 (52)<option value="23">Dagger Mastery 23 (52)<option value="24">Dagger Mastery 24 (55)<option value="25">Dagger Mastery 25 (55)<option value="26">Dagger Mastery 26 (55)<option value="27">Dagger Mastery 27 (58)<option value="28">Dagger Mastery 28 (58)<option value="29">Dagger Mastery 29 (58)<option value="30">Dagger Mastery 30 (60)<option value="31">Dagger Mastery 31 (60)<option value="32">Dagger Mastery 32 (62)<option value="33">Dagger Mastery 33 (62)<option value="34">Dagger Mastery 34 (64)<option value="35">Dagger Mastery 35 (64)<option value="36">Dagger Mastery 36 (66)<option value="37">Dagger Mastery 37 (66)<option value="38">Dagger Mastery 38 (68)<option value="39">Dagger Mastery 39 (68)<option value="40">Dagger Mastery 40 (70)<option value="41">Dagger Mastery 41 (70)<option value="42">Dagger Mastery 42 (72)<option value="43">Dagger Mastery 43 (72)<option value="44">Dagger Mastery 44 (74)<option value="45">Dagger Mastery 45 (74)</select>

			</td>
			<td><input type=checkbox id="PLM1C" onclick="passives();calc()">
			<input type=checkbox id="PLM2C" onclick="passives();calc()">
			<input type=checkbox id="BOWM1C" onclick="passives();calc()">
			<input type=checkbox id="BOWM2C" onclick="passives();calc()"></td>
			<td><select id="PLM1" onchange="calc()"><option value="1">Polearm Mastery 1 (20)<option value="2">Polearm Mastery 2 (24)<option value="3">Polearm Mastery 3 (28)<option value="4">Polearm Mastery 4 (28)<option value="5">Polearm Mastery 5 (32)<option value="6">Polearm Mastery 6 (32)<option value="7">Polearm Mastery 7 (36)<option value="8">Polearm Mastery 8 (36)</select>

			<select id="PLM2" onchange="calc()"><option value="1">Polearm Mastery 1 (20)<option value="2">Polearm Mastery 2 (24)<option value="3">Polearm Mastery 3 (28)<option value="4">Polearm Mastery 4 (28)<option value="5">Polearm Mastery 5 (32)<option value="6">Polearm Mastery 6 (32)<option value="7">Polearm Mastery 7 (36)<option value="8">Polearm Mastery 8 (36)<option value="9">Polearm Mastery 9 (40)<option value="10">Polearm Mastery 10 (40)<option value="11">Polearm Mastery 11 (40)<option value="12">Polearm Mastery 12 (43)<option value="13">Polearm Mastery 13 (43)<option value="14">Polearm Mastery 14 (43)<option value="15">Polearm Mastery 15 (46)<option value="16">Polearm Mastery 16 (46)<option value="17">Polearm Mastery 17 (46)<option value="18">Polearm Mastery 18 (49)<option value="19">Polearm Mastery 19 (49)<option value="20">Polearm Mastery 20 (49)<option value="21">Polearm Mastery 21 (52)<option value="22">Polearm Mastery 22 (52)<option value="23">Polearm Mastery 23 (52)<option value="24">Polearm Mastery 24 (55)<option value="25">Polearm Mastery 25 (55)<option value="26">Polearm Mastery 26 (55)<option value="27">Polearm Mastery 27 (58)<option value="28">Polearm Mastery 28 (58)<option value="29">Polearm Mastery 29 (58)<option value="30">Polearm Mastery 30 (60)<option value="31">Polearm Mastery 31 (60)<option value="32">Polearm Mastery 32 (62)<option value="33">Polearm Mastery 33 (62)<option value="34">Polearm Mastery 34 (64)<option value="35">Polearm Mastery 35 (64)<option value="36">Polearm Mastery 36 (66)<option value="37">Polearm Mastery 37 (66)<option value="38">Polearm Mastery 38 (68)<option value="39">Polearm Mastery 39 (68)<option value="40">Polearm Mastery 40 (70)<option value="41">Polearm Mastery 41 (70)<option value="42">Polearm Mastery 42 (72)<option value="43">Polearm Mastery 43 (72)<option value="44">Polearm Mastery 44 (74)<option value="45">Polearm Mastery 45 (74)</select>

			<select id="BOWM1" onchange="calc()"><option value="1">Bow Mastery 1 (20)<option value="2">Bow Mastery 2 (20)<option value="3">Bow Mastery 3 (20)<option value="4">Bow Mastery 4 (24)<option value="5">Bow Mastery 5 (24)<option value="6">Bow Mastery 6 (24)<option value="7">Bow Mastery 7 (28)<option value="8">Bow Mastery 8 (28)<option value="9">Bow Mastery 9 (28)<option value="10">Bow Mastery 10 (32)<option value="11">Bow Mastery 11 (32)<option value="12">Bow Mastery 12 (32)<option value="13">Bow Mastery 13 (36)<option value="14">Bow Mastery 14 (36)<option value="15">Bow Mastery 15 (36)</select>

			<select id="BOWM2" onchange="calc()"><option value="1">Bow Mastery 1 (20)<option value="2">Bow Mastery 2 (20)<option value="3">Bow Mastery 3 (20)<option value="4">Bow Mastery 4 (24)<option value="5">Bow Mastery 5 (24)<option value="6">Bow Mastery 6 (24)<option value="7">Bow Mastery 7 (28)<option value="8">Bow Mastery 8 (28)<option value="9">Bow Mastery 9 (28)<option value="10">Bow Mastery 10 (32)<option value="11">Bow Mastery 11 (32)<option value="12">Bow Mastery 12 (32)<option value="13">Bow Mastery 13 (36)<option value="14">Bow Mastery 14 (36)<option value="15">Bow Mastery 15 (36)<option value="16">Bow Mastery 16 (40)<option value="17">Bow Mastery 17 (40)<option value="18">Bow Mastery 18 (40)<option value="19">Bow Mastery 19 (43)<option value="20">Bow Mastery 20 (43)<option value="21">Bow Mastery 21 (43)<option value="22">Bow Mastery 22 (46)<option value="23">Bow Mastery 23 (46)<option value="24">Bow Mastery 24 (46)<option value="25">Bow Mastery 25 (49)<option value="26">Bow Mastery 26 (49)<option value="27">Bow Mastery 27 (49)<option value="28">Bow Mastery 28 (52)<option value="29">Bow Mastery 29 (52)<option value="30">Bow Mastery 30 (52)<option value="31">Bow Mastery 31 (55)<option value="32">Bow Mastery 32 (55)<option value="33">Bow Mastery 33 (55)<option value="34">Bow Mastery 34 (58)<option value="35">Bow Mastery 35 (58)<option value="36">Bow Mastery 36 (58)<option value="37">Bow Mastery 37 (60)<option value="38">Bow Mastery 38 (60)<option value="39">Bow Mastery 39 (62)<option value="40">Bow Mastery 40 (62)<option value="41">Bow Mastery 41 (64)<option value="42">Bow Mastery 42 (64)<option value="43">Bow Mastery 43 (66)<option value="44">Bow Mastery 44 (66)<option value="45">Bow Mastery 45 (68)<option value="46">Bow Mastery 46 (68)<option value="47">Bow Mastery 47 (70)<option value="48">Bow Mastery 48 (70)<option value="49">Bow Mastery 49 (72)<option value="50">Bow Mastery 50 (72)<option value="51">Bow Mastery 51 (74)<option value="52">Bow Mastery 52 (74)</select>

			</td>

			<td><input type=checkbox id="DUALMC" onclick="passives();calc()">
			<input type=checkbox id="THM1C" onclick="passives();calc()">
			<input type=checkbox id="THM2C" onclick="passives();calc()"></td>
			<td><select id="DUALM" onchange="calc()"><option value="1">Dual Weapon Mastery 1 (40)<option value="2">Dual Weapon Mastery 2 (40)<option value="3">Dual Weapon Mastery 3 (40)<option value="4">Dual Weapon Mastery 4 (43)<option value="5">Dual Weapon Mastery 5 (43)<option value="6">Dual Weapon Mastery 6 (43)<option value="7">Dual Weapon Mastery 7 (46)<option value="8">Dual Weapon Mastery 8 (46)<option value="9">Dual Weapon Mastery 9 (46)<option value="10">Dual Weapon Mastery 10 (49)<option value="11">Dual Weapon Mastery 11 (49)<option value="12">Dual Weapon Mastery 12 (49)<option value="13">Dual Weapon Mastery 13 (52)<option value="14">Dual Weapon Mastery 14 (52)<option value="15">Dual Weapon Mastery 15 (52)<option value="16">Dual Weapon Mastery 16 (55)<option value="17">Dual Weapon Mastery 17 (55)<option value="18">Dual Weapon Mastery 18 (55)<option value="19">Dual Weapon Mastery 19 (58)<option value="20">Dual Weapon Mastery 20 (58)<option value="21">Dual Weapon Mastery 21 (58)<option value="22">Dual Weapon Mastery 22 (60)<option value="23">Dual Weapon Mastery 23 (60)<option value="24">Dual Weapon Mastery 24 (62)<option value="25">Dual Weapon Mastery 25 (62)<option value="26">Dual Weapon Mastery 26 (64)<option value="27">Dual Weapon Mastery 27 (64)<option value="28">Dual Weapon Mastery 28 (66)<option value="29">Dual Weapon Mastery 29 (66)<option value="30">Dual Weapon Mastery 30 (68)<option value="31">Dual Weapon Mastery 31 (68)<option value="32">Dual Weapon Mastery 32 (70)<option value="33">Dual Weapon Mastery 33 (70)<option value="34">Dual Weapon Mastery 34 (72)<option value="35">Dual Weapon Mastery 35 (72)<option value="36">Dual Weapon Mastery 36 (74)<option value="37">Dual Weapon Mastery 37 (74)</select>

			<select id="THM1" onchange="calc()"><option value="1">2H Weapon Mastery 1 (20)<option value="2">2H Weapon Mastery 2 (24)<option value="3">2H Weapon Mastery 3 (28)<option value="4">2H Weapon Mastery 4 (32)<option value="5">2H Weapon Mastery 5 (36)</select>
			<select id="THM2" onchange="calc()"><option value="1">2H Weapon Mastery 1 (20)<option value="2">2H Weapon Mastery 2 (24)<option value="3">2H Weapon Mastery 3 (28)<option value="4">2H Weapon Mastery 4 (32)<option value="5">2H Weapon Mastery 5 (36)<option value="6">2H Weapon Mastery 6 (40)<option value="7">2H Weapon Mastery 7 (43)<option value="8">2H Weapon Mastery 8 (46)<option value="9">2H Weapon Mastery 9 (49)<option value="10">2H Weapon Mastery 10 (52)<option value="11">2H Weapon Mastery 11 (55)<option value="12">2H Weapon Mastery 12 (58)<option value="13">2H Weapon Mastery 13 (60)<option value="14">2H Weapon Mastery 14 (62)<option value="15">2H Weapon Mastery 15 (64)<option value="16">2H Weapon Mastery 16 (66)<option value="17">2H Weapon Mastery 17 (68)<option value="18">2H Weapon Mastery 18 (70)<option value="19">2H Weapon Mastery 19 (72)<option value="20">2H Weapon Mastery 20 (74)</select>

			</td></tr>

<tr>		<td>Armor Mastery</td>
			<td><input type=checkbox id="AMFC" onclick="passives();calc()">
			<input type=checkbox id="AMMC" onclick="passives();calc()"></td>
			<td><select id="AMF" onchange="calc()"><option value="1">Armor Mastery 1 (5)<option value="2">Armor Mastery 2 (10)<option value="3">Armor Mastery 3 (10)<option value="4">Armor Mastery 4 (15)<option value="5">Armor Mastery 5 (15)</select>

			<select id="AMM" onchange="calc()"><option value="1">Armor Mastery 1 (7)<option value="2">Armor Mastery 2 (14)<option value="3">Armor Mastery 3 (14)</select>
			</td>
			<td><input type=checkbox id="HMK1C" onclick="passives();calc()">
			<input type=checkbox id="HMK2C" onclick="passives();calc()">
			<input type=checkbox id="HMW1C" onclick="passives();calc()">
			<input type=checkbox id="HMW2C" onclick="passives();calc()">
			<input type=checkbox id="HMO1C" onclick="passives();calc()">

			<input type=checkbox id="HMO2C" onclick="passives();calc()">
			<input type=checkbox id="HMO3C" onclick="passives();calc()">
			<input type=checkbox id="HMPC" onclick="passives();calc()"></td>
			<td><select id="HMK1" onchange="calc()"><option value="1">Heavy Armor Mastery 1 (20)<option value="2">Heavy Armor Mastery 2 (20)<option value="3">Heavy Armor Mastery 3 (20)<option value="4">Heavy Armor Mastery 4 (24)<option value="5">Heavy Armor Mastery 5 (24)<option value="6">Heavy Armor Mastery 6 (24)<option value="7">Heavy Armor Mastery 7 (28)<option value="8">Heavy Armor Mastery 8 (28)<option value="9">Heavy Armor Mastery 9 (28)<option value="10">Heavy Armor Mastery 10 (32)<option value="11">Heavy Armor Mastery 11 (32)<option value="12">Heavy Armor Mastery 12 (32)<option value="13">Heavy Armor Mastery 13 (36)<option value="14">Heavy Armor Mastery 14 (36)<option value="15">Heavy Armor Mastery 15 (36)</select>

			<select id="HMK2" onchange="calc()"><option value="1">Heavy Armor Mastery 1 (20)<option value="2">Heavy Armor Mastery 2 (20)<option value="3">Heavy Armor Mastery 3 (20)<option value="4">Heavy Armor Mastery 4 (24)<option value="5">Heavy Armor Mastery 5 (24)<option value="6">Heavy Armor Mastery 6 (24)<option value="7">Heavy Armor Mastery 7 (28)<option value="8">Heavy Armor Mastery 8 (28)<option value="9">Heavy Armor Mastery 9 (28)<option value="10">Heavy Armor Mastery 10 (32)<option value="11">Heavy Armor Mastery 11 (32)<option value="12">Heavy Armor Mastery 12 (32)<option value="13">Heavy Armor Mastery 13 (36)<option value="14">Heavy Armor Mastery 14 (36)<option value="15">Heavy Armor Mastery 15 (36)<option value="16">Heavy Armor Mastery 16 (40)<option value="17">Heavy Armor Mastery 17 (40)<option value="18">Heavy Armor Mastery 18 (40)<option value="19">Heavy Armor Mastery 19 (43)<option value="20">Heavy Armor Mastery 20 (43)<option value="21">Heavy Armor Mastery 21 (43)<option value="22">Heavy Armor Mastery 22 (46)<option value="23">Heavy Armor Mastery 23 (46)<option value="24">Heavy Armor Mastery 24 (46)<option value="25">Heavy Armor Mastery 25 (49)<option value="26">Heavy Armor Mastery 26 (49)<option value="27">Heavy Armor Mastery 27 (49)<option value="28">Heavy Armor Mastery 28 (52)<option value="29">Heavy Armor Mastery 29 (52)<option value="30">Heavy Armor Mastery 30 (52)<option value="31">Heavy Armor Mastery 31 (55)<option value="32">Heavy Armor Mastery 32 (55)<option value="33">Heavy Armor Mastery 33 (55)<option value="34">Heavy Armor Mastery 34 (58)<option value="35">Heavy Armor Mastery 35 (58)<option value="36">Heavy Armor Mastery 36 (58)<option value="37">Heavy Armor Mastery 37 (60)<option value="38">Heavy Armor Mastery 38 (60)<option value="39">Heavy Armor Mastery 39 (62)<option value="40">Heavy Armor Mastery 40 (62)<option value="41">Heavy Armor Mastery 41 (64)<option value="42">Heavy Armor Mastery 42 (64)<option value="43">Heavy Armor Mastery 43 (66)<option value="44">Heavy Armor Mastery 44 (66)<option value="45">Heavy Armor Mastery 45 (68)<option value="46">Heavy Armor Mastery 46 (68)<option value="47">Heavy Armor Mastery 47 (70)<option value="48">Heavy Armor Mastery 48 (70)<option value="49">Heavy Armor Mastery 49 (72)<option value="50">Heavy Armor Mastery 50 (72)<option value="51">Heavy Armor Mastery 51 (74)<option value="52">Heavy Armor Mastery 52 (74)</select>

			<select id="HMW1" onchange="calc()"><option value="1">Heavy Armor Mastery 1 (20)<option value="2">Heavy Armor Mastery 2 (20)<option value="3">Heavy Armor Mastery 3 (24)<option value="4">Heavy Armor Mastery 4 (24)<option value="5">Heavy Armor Mastery 5 (28)<option value="6">Heavy Armor Mastery 6 (28)<option value="7">Heavy Armor Mastery 7 (28)<option value="8">Heavy Armor Mastery 8 (32)<option value="9">Heavy Armor Mastery 9 (32)<option value="10">Heavy Armor Mastery 10 (32)<option value="11">Heavy Armor Mastery 11 (36)<option value="12">Heavy Armor Mastery 12 (36)<option value="13">Heavy Armor Mastery 13 (36)</select>
			<select id="HMW2" onchange="calc()"><option value="1">Heavy Armor Mastery 1 (20)<option value="2">Heavy Armor Mastery 2 (20)<option value="3">Heavy Armor Mastery 3 (24)<option value="4">Heavy Armor Mastery 4 (24)<option value="5">Heavy Armor Mastery 5 (28)<option value="6">Heavy Armor Mastery 6 (28)<option value="7">Heavy Armor Mastery 7 (28)<option value="8">Heavy Armor Mastery 8 (32)<option value="9">Heavy Armor Mastery 9 (32)<option value="10">Heavy Armor Mastery 10 (32)<option value="11">Heavy Armor Mastery 11 (36)<option value="12">Heavy Armor Mastery 12 (36)<option value="13">Heavy Armor Mastery 13 (36)<option value="14">Heavy Armor Mastery 14 (40)<option value="15">Heavy Armor Mastery 15 (40)<option value="16">Heavy Armor Mastery 16 (40)<option value="17">Heavy Armor Mastery 17 (43)<option value="18">Heavy Armor Mastery 18 (43)<option value="19">Heavy Armor Mastery 19 (43)<option value="20">Heavy Armor Mastery 20 (46)<option value="21">Heavy Armor Mastery 21 (46)<option value="22">Heavy Armor Mastery 22 (46)<option value="23">Heavy Armor Mastery 23 (49)<option value="24">Heavy Armor Mastery 24 (49)<option value="25">Heavy Armor Mastery 25 (49)<option value="26">Heavy Armor Mastery 26 (52)<option value="27">Heavy Armor Mastery 27 (52)<option value="28">Heavy Armor Mastery 28 (52)<option value="29">Heavy Armor Mastery 29 (55)<option value="30">Heavy Armor Mastery 30 (55)<option value="31">Heavy Armor Mastery 31 (55)<option value="32">Heavy Armor Mastery 32 (58)<option value="33">Heavy Armor Mastery 33 (58)<option value="34">Heavy Armor Mastery 34 (58)<option value="35">Heavy Armor Mastery 35 (60)<option value="36">Heavy Armor Mastery 36 (60)<option value="37">Heavy Armor Mastery 37 (62)<option value="38">Heavy Armor Mastery 38 (62)<option value="39">Heavy Armor Mastery 39 (64)<option value="40">Heavy Armor Mastery 40 (64)<option value="41">Heavy Armor Mastery 41 (66)<option value="42">Heavy Armor Mastery 42 (66)<option value="43">Heavy Armor Mastery 43 (68)<option value="44">Heavy Armor Mastery 44 (68)<option value="45">Heavy Armor Mastery 45 (70)<option value="46">Heavy Armor Mastery 46 (70)<option value="47">Heavy Armor Mastery 47 (72)<option value="48">Heavy Armor Mastery 48 (72)<option value="49">Heavy Armor Mastery 49 (74)<option value="50">Heavy Armor Mastery 50 (74)</select>

			<select id="HMO1" onchange="calc()"><option value="1">Heavy Armor Mastery 1 (14)<option value="2">Heavy Armor Mastery 2 (14)</select>
			<select id="HMO2" onchange="calc()"><option value="1">Heavy Armor Mastery 1 (14)<option value="2">Heavy Armor Mastery 2 (14)<option value="3">Heavy Armor Mastery 3 (20)<option value="4">Heavy Armor Mastery 4 (20)<option value="5">Heavy Armor Mastery 5 (25)<option value="6">Heavy Armor Mastery 6 (25)<option value="7">Heavy Armor Mastery 7 (30)<option value="8">Heavy Armor Mastery 8 (30)<option value="9">Heavy Armor Mastery 9 (35)<option value="10">Heavy Armor Mastery 10 (35)</select>
			<select id="HMO3" onchange="calc()"><option value="1">Heavy Armor Mastery 1 (14)<option value="2">Heavy Armor Mastery 2 (14)<option value="3">Heavy Armor Mastery 3 (20)<option value="4">Heavy Armor Mastery 4 (20)<option value="5">Heavy Armor Mastery 5 (25)<option value="6">Heavy Armor Mastery 6 (25)<option value="7">Heavy Armor Mastery 7 (30)<option value="8">Heavy Armor Mastery 8 (30)<option value="9">Heavy Armor Mastery 9 (35)<option value="10">Heavy Armor Mastery 10 (35)<option value="11">Heavy Armor Mastery 11 (40)<option value="12">Heavy Armor Mastery 12 (40)<option value="13">Heavy Armor Mastery 13 (40)<option value="14">Heavy Armor Mastery 14 (44)<option value="15">Heavy Armor Mastery 15 (44)<option value="16">Heavy Armor Mastery 16 (44)<option value="17">Heavy Armor Mastery 17 (48)<option value="18">Heavy Armor Mastery 18 (48)<option value="19">Heavy Armor Mastery 19 (48)<option value="20">Heavy Armor Mastery 20 (52)<option value="21">Heavy Armor Mastery 21 (52)<option value="22">Heavy Armor Mastery 22 (52)<option value="23">Heavy Armor Mastery 23 (56)<option value="24">Heavy Armor Mastery 24 (56)<option value="25">Heavy Armor Mastery 25 (56)<option value="26">Heavy Armor Mastery 26 (58)<option value="27">Heavy Armor Mastery 27 (58)<option value="28">Heavy Armor Mastery 28 (60)<option value="29">Heavy Armor Mastery 29 (60)<option value="30">Heavy Armor Mastery 30 (62)<option value="31">Heavy Armor Mastery 31 (62)<option value="32">Heavy Armor Mastery 32 (64)<option value="33">Heavy Armor Mastery 33 (64)<option value="34">Heavy Armor Mastery 34 (66)<option value="35">Heavy Armor Mastery 35 (66)<option value="36">Heavy Armor Mastery 36 (68)<option value="37">Heavy Armor Mastery 37 (68)<option value="38">Heavy Armor Mastery 38 (70)<option value="39">Heavy Armor Mastery 39 (70)<option value="40">Heavy Armor Mastery 40 (72)<option value="41">Heavy Armor Mastery 41 (72)<option value="42">Heavy Armor Mastery 42 (74)<option value="43">Heavy Armor Mastery 43 (74)</select>

			<select id="HMP" onchange="calc()"><option value="1">Heavy Armor Mastery 1 (40)<option value="2">Heavy Armor Mastery 2 (40)<option value="3">Heavy Armor Mastery 3 (40)<option value="4">Heavy Armor Mastery 4 (44)<option value="5">Heavy Armor Mastery 5 (44)<option value="6">Heavy Armor Mastery 6 (44)<option value="7">Heavy Armor Mastery 7 (48)<option value="8">Heavy Armor Mastery 8 (48)<option value="9">Heavy Armor Mastery 9 (48)<option value="10">Heavy Armor Mastery 10 (52)<option value="11">Heavy Armor Mastery 11 (52)<option value="12">Heavy Armor Mastery 12 (52)<option value="13">Heavy Armor Mastery 13 (56)<option value="14">Heavy Armor Mastery 14 (56)<option value="15">Heavy Armor Mastery 15 (56)<option value="16">Heavy Armor Mastery 16 (58)<option value="17">Heavy Armor Mastery 17 (58)<option value="18">Heavy Armor Mastery 18 (60)<option value="19">Heavy Armor Mastery 19 (60)<option value="20">Heavy Armor Mastery 20 (62)<option value="21">Heavy Armor Mastery 21 (62)<option value="22">Heavy Armor Mastery 22 (64)<option value="23">Heavy Armor Mastery 23 (64)<option value="24">Heavy Armor Mastery 24 (66)<option value="25">Heavy Armor Mastery 25 (66)<option value="26">Heavy Armor Mastery 26 (68)<option value="27">Heavy Armor Mastery 27 (68)<option value="28">Heavy Armor Mastery 28 (70)<option value="29">Heavy Armor Mastery 29 (70)<option value="30">Heavy Armor Mastery 30 (72)<option value="31">Heavy Armor Mastery 31 (72)<option value="32">Heavy Armor Mastery 32 (74)<option value="33">Heavy Armor Mastery 33 (74)</select>

			</td>
			<td><input type=checkbox id="LMW1C" onclick="passives();calc()">
			<input type=checkbox id="LMW2C" onclick="passives();calc()">
			<input type=checkbox id="LMR1C" onclick="passives();calc()">
			<input type=checkbox id="LMR2C" onclick="passives();calc()">
			<input type=checkbox id="LMO1C" onclick="passives();calc()">
			<input type=checkbox id="LMO2C" onclick="passives();calc()">
			<input type=checkbox id="LMO3C" onclick="passives();calc()">
			<input type=checkbox id="LMH1C" onclick="passives();calc()">

			<input type=checkbox id="LMH2C" onclick="passives();calc()">
			<input type=checkbox id="LMSC" onclick="passives();calc()"></td>
			<td><select id="LMW1" onchange="calc()"><option value="1">Light Armor Mastery 1 (20)<option value="2">Light Armor Mastery 2 (20)<option value="3">Light Armor Mastery 3 (24)<option value="4">Light Armor Mastery 4 (24)<option value="5">Light Armor Mastery 5 (28)<option value="6">Light Armor Mastery 6 (28)<option value="7">Light Armor Mastery 7 (28)<option value="8">Light Armor Mastery 8 (32)<option value="9">Light Armor Mastery 9 (32)<option value="10">Light Armor Mastery 10 (32)<option value="11">Light Armor Mastery 11 (36)<option value="12">Light Armor Mastery 12 (36)<option value="13">Light Armor Mastery 13 (36)</select>

			<select id="LMW2" onchange="calc()"><option value="1">Light Armor Mastery 1 (20)<option value="2">Light Armor Mastery 2 (20)<option value="3">Light Armor Mastery 3 (24)<option value="4">Light Armor Mastery 4 (24)<option value="5">Light Armor Mastery 5 (28)<option value="6">Light Armor Mastery 6 (28)<option value="7">Light Armor Mastery 7 (28)<option value="8">Light Armor Mastery 8 (32)<option value="9">Light Armor Mastery 9 (32)<option value="10">Light Armor Mastery 10 (32)<option value="11">Light Armor Mastery 11 (36)<option value="12">Light Armor Mastery 12 (36)<option value="13">Light Armor Mastery 13 (36)<option value="14">Light Armor Mastery 14 (40)<option value="15">Light Armor Mastery 15 (40)<option value="16">Light Armor Mastery 16 (40)<option value="17">Light Armor Mastery 17 (43)<option value="18">Light Armor Mastery 18 (43)<option value="19">Light Armor Mastery 19 (43)<option value="20">Light Armor Mastery 20 (46)<option value="21">Light Armor Mastery 21 (46)<option value="22">Light Armor Mastery 22 (46)<option value="23">Light Armor Mastery 23 (49)<option value="24">Light Armor Mastery 24 (49)<option value="25">Light Armor Mastery 25 (49)<option value="26">Light Armor Mastery 26 (52)<option value="27">Light Armor Mastery 27 (52)<option value="28">Light Armor Mastery 28 (52)<option value="29">Light Armor Mastery 29 (55)<option value="30">Light Armor Mastery 30 (55)<option value="31">Light Armor Mastery 31 (55)<option value="32">Light Armor Mastery 32 (58)<option value="33">Light Armor Mastery 33 (58)<option value="34">Light Armor Mastery 34 (58)<option value="35">Light Armor Mastery 35 (60)<option value="36">Light Armor Mastery 36 (60)<option value="37">Light Armor Mastery 37 (62)<option value="38">Light Armor Mastery 38 (62)<option value="39">Light Armor Mastery 39 (64)<option value="40">Light Armor Mastery 40 (64)<option value="41">Light Armor Mastery 41 (66)<option value="42">Light Armor Mastery 42 (66)<option value="43">Light Armor Mastery 43 (68)<option value="44">Light Armor Mastery 44 (68)<option value="45">Light Armor Mastery 45 (70)<option value="46">Light Armor Mastery 46 (70)<option value="47">Light Armor Mastery 47 (72)<option value="48">Light Armor Mastery 48 (72)<option value="49">Light Armor Mastery 49 (74)<option value="50">Light Armor Mastery 50 (74)</select>

			<select id="LMR1" onchange="calc()"><option value="1">Light Armor Mastery 1 (20)<option value="2">Light Armor Mastery 2 (20)<option value="3">Light Armor Mastery 3 (24)<option value="4">Light Armor Mastery 4 (24)<option value="5">Light Armor Mastery 5 (28)<option value="6">Light Armor Mastery 6 (28)<option value="7">Light Armor Mastery 7 (32)<option value="8">Light Armor Mastery 8 (32)<option value="9">Light Armor Mastery 9 (36)<option value="10">Light Armor Mastery 10 (36)</select>
			<select id="LMR2" onchange="calc()"><option value="1">Light Armor Mastery 1 (20)<option value="2">Light Armor Mastery 2 (20)<option value="3">Light Armor Mastery 3 (24)<option value="4">Light Armor Mastery 4 (24)<option value="5">Light Armor Mastery 5 (28)<option value="6">Light Armor Mastery 6 (28)<option value="7">Light Armor Mastery 7 (32)<option value="8">Light Armor Mastery 8 (32)<option value="9">Light Armor Mastery 9 (36)<option value="10">Light Armor Mastery 10 (36)<option value="11">Light Armor Mastery 11 (40)<option value="12">Light Armor Mastery 12 (40)<option value="13">Light Armor Mastery 13 (40)<option value="14">Light Armor Mastery 14 (43)<option value="15">Light Armor Mastery 15 (43)<option value="16">Light Armor Mastery 16 (43)<option value="17">Light Armor Mastery 17 (46)<option value="18">Light Armor Mastery 18 (46)<option value="19">Light Armor Mastery 19 (46)<option value="20">Light Armor Mastery 20 (49)<option value="21">Light Armor Mastery 21 (49)<option value="22">Light Armor Mastery 22 (49)<option value="23">Light Armor Mastery 23 (52)<option value="24">Light Armor Mastery 24 (52)<option value="25">Light Armor Mastery 25 (52)<option value="26">Light Armor Mastery 26 (55)<option value="27">Light Armor Mastery 27 (55)<option value="28">Light Armor Mastery 28 (55)<option value="29">Light Armor Mastery 29 (58)<option value="30">Light Armor Mastery 30 (58)<option value="31">Light Armor Mastery 31 (58)<option value="32">Light Armor Mastery 32 (60)<option value="33">Light Armor Mastery 33 (60)<option value="34">Light Armor Mastery 34 (62)<option value="35">Light Armor Mastery 35 (62)<option value="36">Light Armor Mastery 36 (64)<option value="37">Light Armor Mastery 37 (64)<option value="38">Light Armor Mastery 38 (66)<option value="39">Light Armor Mastery 39 (66)<option value="40">Light Armor Mastery 40 (68)<option value="41">Light Armor Mastery 41 (68)<option value="42">Light Armor Mastery 42 (70)<option value="43">Light Armor Mastery 43 (70)<option value="44">Light Armor Mastery 44 (72)<option value="45">Light Armor Mastery 45 (72)<option value="46">Light Armor Mastery 46 (74)<option value="47">Light Armor Mastery 47 (74)</select>

			<select id="LMO1" onchange="calc()"><option value="1">Light Armor Mastery 1 (7)<option value="2">Light Armor Mastery 2 (7)<option value="3">Light Armor Mastery 3 (14)<option value="4">Light Armor Mastery 4 (14)</select>
			<select id="LMO2" onchange="calc()"><option value="1">Light Armor Mastery 1 (7)<option value="2">Light Armor Mastery 2 (7)<option value="3">Light Armor Mastery 3 (14)<option value="4">Light Armor Mastery 4 (14)<option value="5">Light Armor Mastery 5 (20)<option value="6">Light Armor Mastery 6 (20)<option value="7">Light Armor Mastery 7 (25)<option value="8">Light Armor Mastery 8 (25)<option value="9">Light Armor Mastery 9 (30)<option value="10">Light Armor Mastery 10 (30)<option value="11">Light Armor Mastery 11 (35)<option value="12">Light Armor Mastery 12 (35)</select>

			<select id="LMO3" onchange="calc()"><option value="1">Light Armor Mastery 1 (7)<option value="2">Light Armor Mastery 2 (7)<option value="3">Light Armor Mastery 3 (14)<option value="4">Light Armor Mastery 4 (14)<option value="5">Light Armor Mastery 5 (20)<option value="6">Light Armor Mastery 6 (20)<option value="7">Light Armor Mastery 7 (25)<option value="8">Light Armor Mastery 8 (25)<option value="9">Light Armor Mastery 9 (30)<option value="10">Light Armor Mastery 10 (30)<option value="11">Light Armor Mastery 11 (35)<option value="12">Light Armor Mastery 12 (35)<option value="13">Light Armor Mastery 13 (40)<option value="14">Light Armor Mastery 14 (40)<option value="15">Light Armor Mastery 15 (40)<option value="16">Light Armor Mastery 16 (44)<option value="17">Light Armor Mastery 17 (44)<option value="18">Light Armor Mastery 18 (44)<option value="19">Light Armor Mastery 19 (48)<option value="20">Light Armor Mastery 20 (48)<option value="21">Light Armor Mastery 21 (48)<option value="22">Light Armor Mastery 22 (52)<option value="23">Light Armor Mastery 23 (52)<option value="24">Light Armor Mastery 24 (52)<option value="25">Light Armor Mastery 25 (56)<option value="26">Light Armor Mastery 26 (56)<option value="27">Light Armor Mastery 27 (56)<option value="28">Light Armor Mastery 28 (58)<option value="29">Light Armor Mastery 29 (58)<option value="30">Light Armor Mastery 30 (60)<option value="31">Light Armor Mastery 31 (60)<option value="32">Light Armor Mastery 32 (62)<option value="33">Light Armor Mastery 33 (62)<option value="34">Light Armor Mastery 34 (64)<option value="35">Light Armor Mastery 35 (64)<option value="36">Light Armor Mastery 36 (66)<option value="37">Light Armor Mastery 37 (66)<option value="38">Light Armor Mastery 38 (68)<option value="39">Light Armor Mastery 39 (68)<option value="40">Light Armor Mastery 40 (70)<option value="41">Light Armor Mastery 41 (70)<option value="42">Light Armor Mastery 42 (72)<option value="43">Light Armor Mastery 43 (72)<option value="44">Light Armor Mastery 44 (74)<option value="45">Light Armor Mastery 45 (74)</select>

			<select id="LMH1" onchange="calc()"><option value="1">Light Armor Mastery 1 (20)<option value="2">Light Armor Mastery 2 (20)<option value="3">Light Armor Mastery 3 (25)<option value="4">Light Armor Mastery 4 (25)<option value="5">Light Armor Mastery 5 (30)<option value="6">Light Armor Mastery 6 (30)<option value="7">Light Armor Mastery 7 (35)<option value="8">Light Armor Mastery 8 (35)</select>
			<select id="LMH2" onchange="calc()"><option value="1">Light Armor Mastery 1 (20)<option value="2">Light Armor Mastery 2 (20)<option value="3">Light Armor Mastery 3 (25)<option value="4">Light Armor Mastery 4 (25)<option value="5">Light Armor Mastery 5 (30)<option value="6">Light Armor Mastery 6 (30)<option value="7">Light Armor Mastery 7 (35)<option value="8">Light Armor Mastery 8 (35)<option value="9">Light Armor Mastery 9 (40)<option value="10">Light Armor Mastery 10 (40)<option value="11">Light Armor Mastery 11 (40)<option value="12">Light Armor Mastery 12 (44)<option value="13">Light Armor Mastery 13 (44)<option value="14">Light Armor Mastery 14 (44)<option value="15">Light Armor Mastery 15 (48)<option value="16">Light Armor Mastery 16 (48)<option value="17">Light Armor Mastery 17 (48)<option value="18">Light Armor Mastery 18 (52)<option value="19">Light Armor Mastery 19 (52)<option value="20">Light Armor Mastery 20 (52)<option value="21">Light Armor Mastery 21 (56)<option value="22">Light Armor Mastery 22 (56)<option value="23">Light Armor Mastery 23 (56)<option value="24">Light Armor Mastery 24 (58)<option value="25">Light Armor Mastery 25 (58)<option value="26">Light Armor Mastery 26 (60)<option value="27">Light Armor Mastery 27 (60)<option value="28">Light Armor Mastery 28 (62)<option value="29">Light Armor Mastery 29 (62)<option value="30">Light Armor Mastery 30 (64)<option value="31">Light Armor Mastery 31 (64)<option value="32">Light Armor Mastery 32 (66)<option value="33">Light Armor Mastery 33 (66)<option value="34">Light Armor Mastery 34 (68)<option value="35">Light Armor Mastery 35 (68)<option value="36">Light Armor Mastery 36 (70)<option value="37">Light Armor Mastery 37 (70)<option value="38">Light Armor Mastery 38 (72)<option value="39">Light Armor Mastery 39 (72)<option value="40">Light Armor Mastery 40 (74)<option value="41">Light Armor Mastery 41 (74)</select>

			<select id="LMS" onchange="calc()"><option value="1">Light Armor Mastery 1 (40)<option value="2">Light Armor Mastery 2 (40)<option value="3">Light Armor Mastery 3 (40)<option value="4">Light Armor Mastery 4 (44)<option value="5">Light Armor Mastery 5 (44)<option value="6">Light Armor Mastery 6 (44)<option value="7">Light Armor Mastery 7 (48)<option value="8">Light Armor Mastery 8 (48)<option value="9">Light Armor Mastery 9 (48)<option value="10">Light Armor Mastery 10 (52)<option value="11">Light Armor Mastery 11 (52)<option value="12">Light Armor Mastery 12 (52)<option value="13">Light Armor Mastery 13 (56)<option value="14">Light Armor Mastery 14 (56)<option value="15">Light Armor Mastery 15 (56)<option value="16">Light Armor Mastery 16 (58)<option value="17">Light Armor Mastery 17 (58)<option value="18">Light Armor Mastery 18 (60)<option value="19">Light Armor Mastery 19 (60)<option value="20">Light Armor Mastery 20 (62)<option value="21">Light Armor Mastery 21 (62)<option value="22">Light Armor Mastery 22 (64)<option value="23">Light Armor Mastery 23 (64)<option value="24">Light Armor Mastery 24 (66)<option value="25">Light Armor Mastery 25 (66)<option value="26">Light Armor Mastery 26 (68)<option value="27">Light Armor Mastery 27 (68)<option value="28">Light Armor Mastery 28 (70)<option value="29">Light Armor Mastery 29 (70)<option value="30">Light Armor Mastery 30 (72)<option value="31">Light Armor Mastery 31 (72)<option value="32">Light Armor Mastery 32 (74)<option value="33">Light Armor Mastery 33 (74)</select>

			</td>
			<td><input type=checkbox id="RMN1C" onclick="robemastery();calc()">
			<input type=checkbox id="RMN2C" onclick="passives();calc()">
			<input type=checkbox id="RMH1C" onclick="passives();calc()">
			<input type=checkbox id="RMH2C" onclick="passives();calc()">
			<input type=checkbox id="RMO1C" onclick="passives();calc()">
			<input type=checkbox id="RMO2C" onclick="passives();calc()">
			<input type=checkbox id="RMO3C" onclick="passives();calc()"></td>
			<td><select id="RMN1" onchange="calc()"><option value="1">Robe Mastery 1 (20)<option value="2">Robe Mastery 2 (20)<option value="3">Robe Mastery 3 (25)<option value="4">Robe Mastery 4 (25)<option value="5">Robe Mastery 5 (30)<option value="6">Robe Mastery 6 (30)<option value="7">Robe Mastery 7 (35)<option value="8">Robe Mastery 8 (35)</select>

			<select id="RMN2" onchange="calc()"><option value="1">Robe Mastery 1 (20)<option value="2">Robe Mastery 2 (20)<option value="3">Robe Mastery 3 (25)<option value="4">Robe Mastery 4 (25)<option value="5">Robe Mastery 5 (30)<option value="6">Robe Mastery 6 (30)<option value="7">Robe Mastery 7 (35)<option value="8">Robe Mastery 8 (35)<option value="9">Robe Mastery 9 (40)<option value="10">Robe Mastery 10 (40)<option value="11">Robe Mastery 11 (40)<option value="12">Robe Mastery 12 (44)<option value="13">Robe Mastery 13 (44)<option value="14">Robe Mastery 14 (44)<option value="15">Robe Mastery 15 (48)<option value="16">Robe Mastery 16 (48)<option value="17">Robe Mastery 17 (48)<option value="18">Robe Mastery 18 (52)<option value="19">Robe Mastery 19 (52)<option value="20">Robe Mastery 20 (52)<option value="21">Robe Mastery 21 (56)<option value="22">Robe Mastery 22 (56)<option value="23">Robe Mastery 23 (56)<option value="24">Robe Mastery 24 (58)<option value="25">Robe Mastery 25 (58)<option value="26">Robe Mastery 26 (60)<option value="27">Robe Mastery 27 (60)<option value="28">Robe Mastery 28 (62)<option value="29">Robe Mastery 29 (62)<option value="30">Robe Mastery 30 (64)<option value="31">Robe Mastery 31 (64)<option value="32">Robe Mastery 32 (66)<option value="33">Robe Mastery 33 (66)<option value="34">Robe Mastery 34 (68)<option value="35">Robe Mastery 35 (68)<option value="36">Robe Mastery 36 (70)<option value="37">Robe Mastery 37 (70)<option value="38">Robe Mastery 38 (72)<option value="39">Robe Mastery 39 (72)<option value="40">Robe Mastery 40 (74)<option value="41">Robe Mastery 41 (74)</select>

			<select id="RMH1" onchange="calc()"><option value="1">Robe Mastery 1 (20)<option value="2">Robe Mastery 2 (20)<option value="3">Robe Mastery 3 (25)<option value="4">Robe Mastery 4 (25)<option value="5">Robe Mastery 5 (30)<option value="6">Robe Mastery 6 (30)<option value="7">Robe Mastery 7 (35)<option value="8">Robe Mastery 8 (35)</select>
			<select id="RMH2" onchange="calc()"><option value="1">Robe Mastery 1 (20)<option value="2">Robe Mastery 2 (20)<option value="3">Robe Mastery 3 (25)<option value="4">Robe Mastery 4 (25)<option value="5">Robe Mastery 5 (30)<option value="6">Robe Mastery 6 (30)<option value="7">Robe Mastery 7 (35)<option value="8">Robe Mastery 8 (35)<option value="9">Robe Mastery 9 (40)<option value="10">Robe Mastery 10 (40)<option value="11">Robe Mastery 11 (40)<option value="12">Robe Mastery 12 (44)<option value="13">Robe Mastery 13 (44)<option value="14">Robe Mastery 14 (44)<option value="15">Robe Mastery 15 (48)<option value="16">Robe Mastery 16 (48)<option value="17">Robe Mastery 17 (48)<option value="18">Robe Mastery 18 (52)<option value="19">Robe Mastery 19 (52)<option value="20">Robe Mastery 20 (52)<option value="21">Robe Mastery 21 (56)<option value="22">Robe Mastery 22 (56)<option value="23">Robe Mastery 23 (56)<option value="24">Robe Mastery 24 (58)<option value="25">Robe Mastery 25 (58)<option value="26">Robe Mastery 26 (60)<option value="27">Robe Mastery 27 (60)<option value="28">Robe Mastery 28 (62)<option value="29">Robe Mastery 29 (62)<option value="30">Robe Mastery 30 (64)<option value="31">Robe Mastery 31 (64)<option value="32">Robe Mastery 32 (66)<option value="33">Robe Mastery 33 (66)<option value="34">Robe Mastery 34 (68)<option value="35">Robe Mastery 35 (68)<option value="36">Robe Mastery 36 (70)<option value="37">Robe Mastery 37 (70)<option value="38">Robe Mastery 38 (72)<option value="39">Robe Mastery 39 (72)<option value="40">Robe Mastery 40 (74)<option value="41">Robe Mastery 41 (74)</select>

			<select id="RMO1" onchange="calc()"><option value="1">Robe Mastery 1 (7)<option value="2">Robe Mastery 2 (7)<option value="3">Robe Mastery 3 (14)<option value="4">Robe Mastery 4 (14)</select>
			<select id="RMO2" onchange="calc()"><option value="1">Robe Mastery 1 (7)<option value="2">Robe Mastery 2 (7)<option value="3">Robe Mastery 3 (14)<option value="4">Robe Mastery 4 (14)<option value="5">Robe Mastery 5 (20)<option value="6">Robe Mastery 6 (20)<option value="7">Robe Mastery 7 (25)<option value="8">Robe Mastery 8 (25)<option value="9">Robe Mastery 9 (30)<option value="10">Robe Mastery 10 (30)<option value="11">Robe Mastery 11 (35)<option value="12">Robe Mastery 12 (35)</select>

			<select id="RMO3" onchange="calc()"><option value="1">Robe Mastery 1 (7)<option value="2">Robe Mastery 2 (7)<option value="3">Robe Mastery 3 (14)<option value="4">Robe Mastery 4 (14)<option value="5">Robe Mastery 5 (20)<option value="6">Robe Mastery 6 (20)<option value="7">Robe Mastery 7 (25)<option value="8">Robe Mastery 8 (25)<option value="9">Robe Mastery 9 (30)<option value="10">Robe Mastery 10 (30)<option value="11">Robe Mastery 11 (35)<option value="12">Robe Mastery 12 (35)<option value="13">Robe Mastery 13 (40)<option value="14">Robe Mastery 14 (40)<option value="15">Robe Mastery 15 (40)<option value="16">Robe Mastery 16 (44)<option value="17">Robe Mastery 17 (44)<option value="18">Robe Mastery 18 (44)<option value="19">Robe Mastery 19 (48)<option value="20">Robe Mastery 20 (48)<option value="21">Robe Mastery 21 (48)<option value="22">Robe Mastery 22 (52)<option value="23">Robe Mastery 23 (52)<option value="24">Robe Mastery 24 (52)<option value="25">Robe Mastery 25 (56)<option value="26">Robe Mastery 26 (56)<option value="27">Robe Mastery 27 (56)<option value="28">Robe Mastery 28 (58)<option value="29">Robe Mastery 29 (58)<option value="30">Robe Mastery 30 (60)<option value="31">Robe Mastery 31 (60)<option value="32">Robe Mastery 32 (62)<option value="33">Robe Mastery 33 (62)<option value="34">Robe Mastery 34 (64)<option value="35">Robe Mastery 35 (64)<option value="36">Robe Mastery 36 (66)<option value="37">Robe Mastery 37 (66)<option value="38">Robe Mastery 38 (68)<option value="39">Robe Mastery 39 (68)<option value="40">Robe Mastery 40 (70)<option value="41">Robe Mastery 41 (70)<option value="42">Robe Mastery 42 (72)<option value="43">Robe Mastery 43 (72)<option value="44">Robe Mastery 44 (74)<option value="45">Robe Mastery 45 (74)</select>

			</td></tr>
<tr>			<td>M.Def.</td>
			<td><input type=checkbox id="MR1C" onclick="passives();calc()">
			<input type=checkbox id="MR2C" onclick="passives();calc()">
			<input type=checkbox id="AM1C" onclick="passives();calc()">
			<input type=checkbox id="AM2C" onclick="passives();calc()">
			<input type=checkbox id="AM3C" onclick="passives();calc()"></td>
			<td><select id="MR1" onchange="calc()"><option value="1">Magic Resistance 1 (20)<option value="2">Magic Resistance 2 (20)<option value="3">Magic Resistance 3 (24)<option value="4">Magic Resistance 4 (24)<option value="5">Magic Resistance 5 (24)<option value="6">Magic Resistance 6 (28)<option value="7">Magic Resistance 7 (28)<option value="8">Magic Resistance 8 (28)<option value="9">Magic Resistance 9 (32)<option value="10">Magic Resistance 10 (32)<option value="11">Magic Resistance 11 (32)<option value="12">Magic Resistance 12 (36)<option value="13">Magic Resistance 13 (36)<option value="14">Magic Resistance 14 (36)</select>

			<select id="MR2" onchange="calc()"><option value="1">Magic Resistance 1 (20)<option value="2">Magic Resistance 2 (20)<option value="3">Magic Resistance 3 (24)<option value="4">Magic Resistance 4 (24)<option value="5">Magic Resistance 5 (24)<option value="6">Magic Resistance 6 (28)<option value="7">Magic Resistance 7 (28)<option value="8">Magic Resistance 8 (28)<option value="9">Magic Resistance 9 (32)<option value="10">Magic Resistance 10 (32)<option value="11">Magic Resistance 11 (32)<option value="12">Magic Resistance 12 (36)<option value="13">Magic Resistance 13 (36)<option value="14">Magic Resistance 14 (36)<option value="15">Magic Resistance 15 (40)<option value="16">Magic Resistance 16 (40)<option value="17">Magic Resistance 17 (40)<option value="18">Magic Resistance 18 (43)<option value="19">Magic Resistance 19 (43)<option value="20">Magic Resistance 20 (43)<option value="21">Magic Resistance 21 (46)<option value="22">Magic Resistance 22 (46)<option value="23">Magic Resistance 23 (46)<option value="24">Magic Resistance 24 (49)<option value="25">Magic Resistance 25 (49)<option value="26">Magic Resistance 26 (49)<option value="27">Magic Resistance 27 (52)<option value="28">Magic Resistance 28 (52)<option value="29">Magic Resistance 29 (52)<option value="30">Magic Resistance 30 (55)<option value="31">Magic Resistance 31 (55)<option value="32">Magic Resistance 32 (55)<option value="33">Magic Resistance 33 (58)<option value="34">Magic Resistance 34 (58)<option value="35">Magic Resistance 35 (58)<option value="36">Magic Resistance 36 (60)<option value="37">Magic Resistance 37 (60)<option value="38">Magic Resistance 38 (62)<option value="39">Magic Resistance 39 (62)<option value="40">Magic Resistance 40 (64)<option value="41">Magic Resistance 41 (64)<option value="42">Magic Resistance 42 (66)<option value="43">Magic Resistance 43 (66)<option value="44">Magic Resistance 44 (68)<option value="45">Magic Resistance 45 (68)<option value="46">Magic Resistance 46 (70)<option value="47">Magic Resistance 47 (70)<option value="48">Magic Resistance 48 (72)<option value="49">Magic Resistance 49 (72)<option value="50">Magic Resistance 50 (74)<option value="51">Magic Resistance 51 (74)</select>

			<select id="AM1" onchange="calc()"><option value="1">Anti-Magic 1 (7)<option value="2">Anti-Magic 2 (7)<option value="3">Anti-Magic 3 (14)<option value="4">Anti-Magic 4 (14)</select>
			<select id="AM2" onchange="calc()"><option value="1">Anti-Magic 1 (7)<option value="2">Anti-Magic 2 (7)<option value="3">Anti-Magic 3 (14)<option value="4">Anti-Magic 4 (14)<option value="5">Anti-Magic 5 (20)<option value="6">Anti-Magic 6 (20)<option value="7">Anti-Magic 7 (25)<option value="8">Anti-Magic 8 (25)<option value="9">Anti-Magic 9 (30)<option value="10">Anti-Magic 10 (30)<option value="11">Anti-Magic 11 (35)<option value="12">Anti-Magic 12 (35)</select>

			<select id="AM3" onchange="calc()"><option value="1">Anti-Magic 1 (7)<option value="2">Anti-Magic 2 (7)<option value="3">Anti-Magic 3 (14)<option value="4">Anti-Magic 4 (14)<option value="5">Anti-Magic 5 (20)<option value="6">Anti-Magic 6 (20)<option value="7">Anti-Magic 7 (25)<option value="8">Anti-Magic 8 (25)<option value="9">Anti-Magic 9 (30)<option value="10">Anti-Magic 10 (30)<option value="11">Anti-Magic 11 (35)<option value="12">Anti-Magic 12 (35)<option value="13">Anti-Magic 13 (40)<option value="14">Anti-Magic 14 (40)<option value="15">Anti-Magic 15 (40)<option value="16">Anti-Magic 16 (44)<option value="17">Anti-Magic 17 (44)<option value="18">Anti-Magic 18 (44)<option value="19">Anti-Magic 19 (48)<option value="20">Anti-Magic 20 (48)<option value="21">Anti-Magic 21 (48)<option value="22">Anti-Magic 22 (52)<option value="23">Anti-Magic 23 (52)<option value="24">Anti-Magic 24 (52)<option value="25">Anti-Magic 25 (56)<option value="26">Anti-Magic 26 (56)<option value="27">Anti-Magic 27 (56)<option value="28">Anti-Magic 28 (58)<option value="29">Anti-Magic 29 (58)<option value="30">Anti-Magic 30 (60)<option value="31">Anti-Magic 31 (60)<option value="32">Anti-Magic 32 (62)<option value="33">Anti-Magic 33 (62)<option value="34">Anti-Magic 34 (64)<option value="35">Anti-Magic 35 (64)<option value="36">Anti-Magic 36 (66)<option value="37">Anti-Magic 37 (66)<option value="38">Anti-Magic 38 (68)<option value="39">Anti-Magic 39 (68)<option value="40">Anti-Magic 40 (70)<option value="41">Anti-Magic 41 (70)<option value="42">Anti-Magic 42 (72)<option value="43">Anti-Magic 43 (72)<option value="44">Anti-Magic 44 (74)<option value="45">Anti-Magic 45 (74)</select>

			</td></tr>
<tr>		<td>Misc.</td>
			<td><input type=checkbox id="BHP1C" onclick="passives();calc()">
			<input type=checkbox id="BHP2C" onclick="passives();calc()">
			<input type=checkbox id="BHP3C" onclick="passives();calc()">
			<input type=checkbox id="QS1C" onclick="passives();calc()">
			<input type=checkbox id="QS2C" onclick="passives();calc()">
			<input type=checkbox id="FFOC" onclick="passives();calc()">

			<input type=checkbox id="CLMC" onclick="passives();calc()">
			<input type=checkbox id="SMLC" onclick="passives();calc()"></td>

			<td><select id="BHP1" onchange="calc()"><option value="1">Boost HP 1 (20)<option value="2">Boost HP 2 (28)<option value="3">Boost HP 3 (36)</select>
			<select id="BHP2" onchange="calc()"><option value="1">Boost HP 1 (40)<option value="2">Boost HP 2 (44)<option value="3">Boost HP 3 (48)<option value="4">Boost HP 4 (52)<option value="5">Boost HP 5 (56)<option value="6">Boost HP 6 (62)<option value="7">Boost HP 7 (70)</select>

			<select id="BHP3" onchange="calc()"><option value="1">Boost HP 1 (20)<option value="2">Boost HP 2 (28)<option value="3">Boost HP 3 (36)<option value="4">Boost HP 4 (43)<option value="5">Boost HP 5 (49)<option value="6">Boost HP 6 (55)<option value="7">Boost HP 7 (62)<option value="8">Boost HP 8 (66)<option value="9">Boost HP 9 (70)<option value="10">Boost HP 10 (74)<option value="11">Boost HP 10 +1 (HP)<option value="41">Boost HP 10 +1 (CP)<option value="12">Boost HP 10 +2 (HP)<option value="42">Boost HP 10 +2 (CP)<option value="13">Boost HP 10 +3 (HP)<option value="43">Boost HP 10 +3 (CP)<option value="14">Boost HP 10 +4 (HP)<option value="44">Boost HP 10 +4 (CP)<option value="15">Boost HP 10 +5 (HP)<option value="45">Boost HP 10 +5 (CP)<option value="16">Boost HP 10 +6 (HP)<option value="46">Boost HP 10 +6 (CP)<option value="17">Boost HP 10 +7 (HP)<option value="47">Boost HP 10 +7 (CP)<option value="18">Boost HP 10 +8 (HP)<option value="48">Boost HP 10 +8 (CP)<option value="19">Boost HP 10 +9 (HP)<option value="49">Boost HP 10 +9 (CP)<option value="20">Boost HP 10 +10 (HP)<option value="50">Boost HP 10 +10 (CP)<option value="21">Boost HP 10 +11 (HP)<option value="51">Boost HP 10 +11 (CP)<option value="22">Boost HP 10 +12 (HP)<option value="52">Boost HP 10 +12 (CP)<option value="23">Boost HP 10 +13 (HP)<option value="53">Boost HP 10 +13 (CP)<option value="24">Boost HP 10 +14 (HP)<option value="54">Boost HP 10 +14 (CP)<option value="25">Boost HP 10 +15 (HP)<option value="55">Boost HP 10 +15 (CP)<option value="26">Boost HP 10 +16 (HP)<option value="56">Boost HP 10 +16 (CP)<option value="27">Boost HP 10 +17 (HP)<option value="57">Boost HP 10 +17 (CP)<option value="28">Boost HP 10 +18 (HP)<option value="58">Boost HP 10 +18 (CP)<option value="29">Boost HP 10 +19 (HP)<option value="59">Boost HP 10 +19 (CP)<option value="30">Boost HP 10 +20 (HP)<option value="60">Boost HP 10 +20 (CP)<option value="31">Boost HP 10 +21 (HP)<option value="61">Boost HP 10 +21 (CP)<option value="32">Boost HP 10 +22 (HP)<option value="62">Boost HP 10 +22 (CP)<option value="33">Boost HP 10 +23 (HP)<option value="63">Boost HP 10 +23 (CP)<option value="34">Boost HP 10 +24 (HP)<option value="64">Boost HP 10 +24 (CP)<option value="35">Boost HP 10 +25 (HP)<option value="65">Boost HP 10 +25 (CP)<option value="36">Boost HP 10 +26 (HP)<option value="66">Boost HP 10 +26 (CP)<option value="37">Boost HP 10 +27 (HP)<option value="67">Boost HP 10 +27 (CP)<option value="38">Boost HP 10 +28 (HP)<option value="68">Boost HP 10 +28 (CP)<option value="39">Boost HP 10 +29 (HP)<option value="69">Boost HP 10 +29 (CP)<option value="40">Boost HP 10 +30 (HP)<option value="70">Boost HP 10 +30 (CP)</select>

			<select id="QS1" onchange="calc()"><option value="1">Quick Step 1 (28)</select>
			<select id="QS2" onchange="calc()"><option value="1">Quick Step 1 (28)<option value="2">Quick Step 2 (43)</select>
			<select id="FFO" onchange="calc()"><option value="1">Final Fortress 1 (52)<option value="2">Final Fortress 2 (55)<option value="3">Final Fortress 3 (58)<option value="4">Final Fortress 4 (60)<option value="5">Final Fortress 5 (62)<option value="6">Final Fortress 6 (64)<option value="7">Final Fortress 7 (66)<option value="8">Final Fortress 8 (68)<option value="9">Final Fortress 9 (70)<option value="10">Final Fortress 10 (72)<option value="11">Final Fortress 11 (74)</select>

			<select id="CLM" onchange="calc()"><option value="1">Clear Mind 1 (40)<option value="2">Clear Mind 2 (48)<option value="3">Clear Mind 3 (56)<option value="4">Clear Mind 4 (62)<option value="5">Clear Mind 5 (68)<option value="6">Clear Mind 6 (74)</select>
			<select id="SML" onchange="calc()"><option value="1">Summon Lore (78)</select>
			</td>
			<td><input type=checkbox id="BMP1C" onclick="passives();calc()">
			<input type=checkbox id="BMP2C" onclick="passives();calc()">

			<input type=checkbox id="BEV1C" onclick="passives();calc()">
			<input type=checkbox id="BEV2C" onclick="passives();calc()">
			<input type=checkbox id="FFRC" onclick="passives();calc()">
			<input type=checkbox id="SDM1C" onclick="passives();calc()">
			<input type=checkbox id="SDM2C" onclick="passives();calc()">
			<input type=checkbox id="WTL1C" onclick="passives();calc()">
			<input type=checkbox id="WTL2C" onclick="passives();calc()">
			<input type=checkbox id="WTL3C" onclick="passives();calc()"></td>

			<td><select id="BMP1" onchange="calc()"><option value="1">Boost Mana 1 (20)<option value="2">Boost Mana 2 (30)</select>
			<select id="BMP2" onchange="calc()"><option value="1">Boost Mana 1 (20)<option value="2">Boost Mana 2 (30)<option value="3">Boost Mana 3 (40)<option value="4">Boost Mana 4 (48)<option value="5">Boost Mana 5 (56)<option value="6">Boost Mana 6 (60)<option value="7">Boost Mana 7 (66)<option value="8">Boost Mana 8 (72)</select>
			<select id="BEV1" onchange="calc()"><option value="1">Boost Evasion 1 (24)</select>

			<select id="BEV2" onchange="calc()"><option value="1">Boost Evasion 1 (24)<option value="2">Boost Evasion 2 (46)<option value="3">Boost Evasion 3 (58)</select>
			<select id="FFR" onchange="calc()"><option value="1">Final Frenzy 1 (43)<option value="2">Final Frenzy 2 (46)<option value="3">Final Frenzy 3 (49)<option value="4">Final Frenzy 4 (52)<option value="5">Final Frenzy 5 (55)<option value="6">Final Frenzy 6 (58)<option value="7">Final Frenzy 7 (60)<option value="8">Final Frenzy 8 (62)<option value="9">Final Frenzy 9 (64)<option value="10">Final Frenzy 10 (66)<option value="11">Final Frenzy 11 (68)<option value="12">Final Frenzy 12 (70)<option value="13">Final Frenzy 13 (72)<option value="14">Final Frenzy 14 (74)</select>

			<select id="SDM1" onchange="calc()"><option value="1">Shield Mastery 1 (20)<option value="2">Shield Mastery 2 (28)</select>
			<select id="SDM2" onchange="calc()"><option value="1">Shield Mastery 1 (20)<option value="2">Shield Mastery 2 (28)<option value="3">Shield Mastery 3 (40)<option value="4">Shield Mastery 4 (52)</select>
			<select id="WTL1" onchange="calc()"><option value="1">Weight Limit 1 (10)</select>
			<select id="WTL2" onchange="calc()"><option value="1">Weight Limit 1 (10)<option value="2">Weight Limit 2 (28)</select>

			<select id="WTL3" onchange="calc()"><option value="1">Weight Limit 1 (10)<option value="2">Weight Limit 2 (28)<option value="3">Weight Limit 3 (46)</select>
			</td>
			<td><input type=checkbox id="AGM1C" onclick="passives();calc()">
			<input type=checkbox id="AGM2C" onclick="passives();calc()">
			<input type=checkbox id="CRC1C" onclick="passives();calc()">
			<input type=checkbox id="CRC2C" onclick="passives();calc()">
			<input type=checkbox id="FSC1C" onclick="passives();calc()">

			<input type=checkbox id="FSC2C" onclick="passives();calc()">
			<input type=checkbox id="FHR1C" onclick="passives();calc()">
			<input type=checkbox id="FHR2C" onclick="passives();calc()">
			<input type=checkbox id="FCM1C" onclick="passives();calc()">
			<input type=checkbox id="FCM2C" onclick="passives();calc()">
			</td>
			<td><select id="AGM1" onchange="calc()"><option value="1">Agile Movement 1 (20)</select>
			<select id="AGM2" onchange="calc()"><option value="1">Agile Movement 1 (20)<option value="2">Agile Movement 2 (40)</select>

			<select id="CRC1" onchange="calc()"><option value="1">Critical Chance 1 (28)</select>
			<select id="CRC2" onchange="calc()"><option value="1">Critical Chance 1 (28)<option value="2">Critical Chance 2 (40)<option value="3">Critical Chance 3 (49)</select>
			<select id="FSC1" onchange="calc()"><option value="1">Fast Spell Casting 1 (25)</select>
			<select id="FSC2" onchange="calc()"><option value="1">Fast Spell Casting 1 (25)<option value="2">Fast Spell Casting 2 (40)<option value="3">Fast Spell Casting 3 (56)</select>
			<select id="FHR1" onchange="calc()"><option value="1">Fast HP Recovery 1 (24)<option value="2">Fast HP Recovery 2 (32)</select>

			<select id="FHR2" onchange="calc()"><option value="1">Fast HP Recovery 1 (24)<option value="2">Fast HP Recovery 2 (32)<option value="3">Fast HP Recovery 3 (40)<option value="4">Fast HP Recovery 4 (43)<option value="5">Fast HP Recovery 5 (52)<option value="6">Fast HP Recovery 6 (58)<option value="7">Fast HP Recovery 7 (68)<option value="8">Fast HP Recovery 8 (74)</select>
			<select id="FCM1" onchange="calc()"><option value="1">Focus Mind 1 (36)</select>
			<select id="FCM2" onchange="calc()"><option value="1">Focus Mind 1 (36)<option value="2">Focus Mind 2 (43)<option value="3">Focus Mind 3 (49)<option value="4">Focus Mind 4 (55)<option value="5">Focus Mind 5 (64)<option value="6">Focus Mind 6 (72)</select>

			</td>
			<td><input type=checkbox id="SHSC" onclick="passives();calc()">
			<input type=checkbox id="BOA1C" onclick="passives();calc()">
			<input type=checkbox id="BOA2C" onclick="passives();calc()">
			<input type=checkbox id="FHR3C" onclick="passives();calc()">
			<input type=checkbox id="FHR4C" onclick="passives();calc()"></td>
			<td><select id="SHS" onchange="calc()"><option value="1">Shadow Sense</select>
			<select id="BOA1" onchange="calc()"><option value="1">Boost Attack Speed 1 (36)</select>

			<select id="BOA2" onchange="calc()"><option value="1">Boost Attack Speed 1 (36)<option value="2">Boost Attack Speed 2 (46)<option value="3">Boost Attack Speed 3 (58)</select>
			<select id="FHR3" onchange="calc()"><option value="1">Fast HP Recovery 1 (35)</select>
			<select id="FHR4" onchange="calc()"><option value="1">Fast HP Recovery 1 (35)<option value="2">Fast HP Recovery 2 (44)<option value="3">Fast HP Recovery 3 (52)<option value="4">Fast HP Recovery 4 (58)<option value="5">Fast HP Recovery 5 (64)<option value="6">Fast HP Recovery 6 (74)</select>
			</td></tr>

<tr>		<td></td>
			<td><input type=checkbox id="ESP1C" onclick="passives();calc()">
			<input type=checkbox id="ESP2C" onclick="passives();calc()">
			<input type=checkbox id="FMR1C" onclick="passives();calc()">
			<input type=checkbox id="FMR2C" onclick="passives();calc()">
			<input type=checkbox id="AGSC" onclick="passives();calc()">
			<input type=checkbox id="MOCC" onclick="passives();calc()">
			</td>
			<td><select id="ESP1" onchange="calc()"><option value="1">Esprit 1 (36)</select>

			<select id="ESP2" onchange="calc()"><option value="1">Esprit 1 (36)<option value="2">Esprit 2 (43)<option value="3">Esprit 3 (46)<option value="4">Esprit 4 (49)<option value="5">Esprit 5 (52)<option value="6">Esprit 6 (62)<option value="7">Esprit 7 (68)<option value="8">Esprit 8 (74)</select>
			<select id="FMR1" onchange="calc()"><option value="1">Fast Mana Recovery 1 (25)<option value="2">Fast Mana Recovery 2 (35)</select>
			<select id="FMR2" onchange="calc()"><option value="1">Fast Mana Recovery 1 (25)<option value="2">Fast Mana Recovery 2 (35)<option value="3">Fast Mana Recovery 3 (44)<option value="4">Fast Mana Recovery 4 (52)<option value="5">Fast Mana Recovery 5 (60)<option value="6">Fast Mana Recovery 6 (68)<option value="7">Fast Mana Recovery 7 (74)</select>

			<select id="AGS" onchange="calc()"><option value="1">Aegis (60)</select>
			<select id="MOC" onchange="calc()"><option value="1">Master of Combat (78)</select>
			</td>
			<td><input type=checkbox id="VTF1C" onclick="passives();calc()">
			<input type=checkbox id="VTF2C" onclick="passives();calc()">
			<input type=checkbox id="KNTC" onclick="passives();calc()">
			<input type=checkbox id="NECC" onclick="passives();calc()">
			<input type=checkbox id="ARLC" onclick="passives();calc()">

			</td>
			<td><select id="VTF1" onchange="calc()"><option value="1">Vital Force 1 (24)<option value="2">Vital Force 2 (32)</select>
			<select id="VTF2" onchange="calc()"><option value="1">Vital Force 1 (24)<option value="2">Vital Force 2 (32)<option value="3">Vital Force 3 (40)<option value="4">Vital Force 4 (46)<option value="5">Vital Force 5 (52)<option value="6">Vital Force 6 (58)<option value="7">Vital Force 7 (64)<option value="8">Vital Force 8 (72)</select>
			<select id="KNT" onchange="calc()"><option value="1">Knighthood (78)</select>

			<select id="NEC" onchange="calc()"><option value="1">Necromancy (78)</select>
			<select id="ARL" onchange="calc()"><option value="1">Arcane Lore (78)</select>
			</td>
			<td><input type=checkbox id="CRP1C" onclick="passives();calc()">
			<input type=checkbox id="CRP2C" onclick="passives();calc()">
			</td>
			<td><select id="CRP1" onchange="calc()"><option value="1">Critical Power 1 (24)<option value="2">Critical Power 2 (32)</select>

			<select id="CRP2" onchange="calc()"><option value="1">Critical Power 1 (24)<option value="2">Critical Power 2 (32)<option value="3">Critical Power 3 (40)<option value="4">Critical Power 4 (52)<option value="5">Critical Power 5 (64)<option value="6">Critical Power 6 (72)</select>
			</td>
			<td><input type=checkbox id="ACRM1C" onclick="passives();calc()">
			<input type=checkbox id="ACRM2C" onclick="passives();calc()">
			</td>
			<td><select id="ACRM1" onchange="calc()"><option value="1">Acrobatic Move 1 (28)</select>

			<select id="ACRM2" onchange="calc()"><option value="1">Acrobatic Move 1 (28)<option value="2">Acrobatic Move 2 (43)<option value="3">Acrobatic Move 3 (55)</select>
			</td>
<tr>		<td></td>
			<td><input type=checkbox id="ARCC" onclick="passives();calc()">
			<input type=checkbox id="ASSC" onclick="passives();calc()">
			</td>
			<td><select id="ARC" onchange="calc()"><option value="1">Archery 1 (78)</select>

			<select id="ASS" onchange="calc()"><option value="1">Assassination 1 (78)</select>
			</td>
			<td><input type=checkbox id="QOHC" onclick="passives();calc()">
			</td>
			<td><select id="QOH" onchange="calc()"><option value="1">Quiver of Holding 1 (58)<option value="2">Quiver of Holding 2 (66)<option value="3">Quiver of Holding 3 (74)</select>
			</td></tr>
<tr>		<td>Clan Skills</td>

			<td><input type=checkbox id="CLHPC" onclick="passives();calc()"></td>
			<td><select id="CLHP" onchange="calc()"><option value="1">Clan Vitality 1 (HP)<option value="2">Clan Vitality 2 (HP)<option value="3">Clan Vitality 3 (HP)</select></td>
			<td><input type=checkbox id="CLCPC" onclick="passives();calc()"></td>
			<td><select id="CLCP" onchange="calc()"><option value="1">Clan Spirituality 1 (CP)<option value="2">Clan Spirituality 2 (CP)<option value="3">Clan Spirituality 3 (CP)</select>
			<td><input type=checkbox id="CLHRC" onclick="passives();calc()"></td>
			<td><select id="CLHR" onchange="calc()"><option value="1">Clan Lifeblood 1 (HP Regen)</select>

			</td></tr>
<tr>		<td></td>
			<td><input type=checkbox id="CLPAC" onclick="passives();calc()"></td>
			<td><select id="CLPA" onchange="calc()"><option value="1">Clan Might 1 (PATK)<option value="2">Clan Might 2 (PATK)<option value="3">Clan Might 3 (PATK)</select></td>
			<td><input type=checkbox id="CLEMC" onclick="passives();calc()"></td>
			<td><select id="CLEM" onchange="calc()"><option value="1">Clan Empowerment 1 (MATK)</td>
			<td><input type=checkbox id="CLPDC" onclick="passives();calc()"></td>

			<td><select id="CLPD" onchange="calc()"><option value="1">Clan Aegis 1 (PDEF)<option value="2">Clan Aegis 2 (PDEF)<option value="3">Clan Aegis 3 (PDEF)</select></td>
			<td><input type=checkbox id="CLMDC" onclick="passives();calc()"></td>
			<td><select id="CLMD" onchange="calc()"><option value="1">Clan Mag. Prot. 1 (MDEF)<option value="2">Clan Mag. Prot. 2 (MDEF)</select>
			</td></tr>
<tr>		<td></td>
			<td><input type=checkbox id="CLGDC" onclick="passives();calc()"></td>

			<td><select id="CLGD" onchange="calc()"><option value="1">Clan Guidance 1 (Accuracy)</select></td>
			<td><input type=checkbox id="CLAGC" onclick="passives();calc()"></td>
			<td><select id="CLAG" onchange="calc()"><option value="1">Clan Agility 1 (Evasion)</select></td>
			<td><input type=checkbox id="CLSPC" onclick="passives();calc()"></td>
			<td><select id="CLSP" onchange="calc()"><option value="1">Clan March 1 (Speed)<option value="2">Clan March 2 (Speed)<option value="3">Clan March 3 (Speed)</select></td>
			<td><input type=checkbox id="SOSC" onclick="passives();calc()"></td>

			<td><select id="SOS" onchange="calc()"><option value="1">Seal of Strife (Winner)<option value="2">Seal of Strife (Loser)</select></td>
</table>
</fieldset>

<fieldset id="BUFFS">
<legend>Buffs</legend>
<table class="statcalc">
<tr>			<td colspan=2 align=right>Buffs Quickselect:</td>
				<td colspan=5><select id="SETBUFFS" onchange="buffs(true);calc()">
					<option>==============
					<option value="0">clear all buffs
					<option value="36">Clan Hall
					<option value="37">Olympiad (CS)
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

<tr>	<td>HP/CP</td>
		<td><input type=checkbox id="BTB1C" onclick="buffs();calc()">
		<input type=checkbox id="BTB2C" onclick="buffs();calc()">
		<input type=checkbox id="BTB3C" onclick="buffs();calc()"></td>
		<td><select id="BTB1" onchange="calc()">
			<option value="1">Bless the Body 1
			<option value="2">Bless the Body 2
			<option value="3">Bless the Body 3
			<option value="4">Bless the Body 4
			<option value="5">Bless the Body 5
			<option value="6">Bless the Body 6
			<option value="7">Body of Avatar 1
			<option value="8">Body of Avatar 2
			<option value="9">Body of Avatar 3
			<option value="10">Body of Avatar 4
			<option value="11">Body of Avatar 5
			<option value="12">Body of Avatar 6
		</select>

		<select id="BTB2" onchange="calc()">
			<option value="1">Bless the Body 1
			<option value="2">Bless the Body 2
			<option value="3">Bless the Body 3
			<option value="4">Bless the Body 4
			<option value="5">Bless the Body 5
			<option value="6">Bless the Body 6
			<option value="1">Battle Roar 1
			<option value="13">Body of Avatar 1
			<option value="8">Body of Avatar 2
			<option value="9">Body of Avatar 3
			<option value="10">Body of Avatar 4
			<option value="11">Body of Avatar 5
			<option value="12">Body of Avatar 6
		</select>

		<select id="BTB3" onchange="calc()">
			<option value="1">Bless the Body 1
			<option value="2">Bless the Body 2
			<option value="3">Bless the Body 3
			<option value="4">Bless the Body 4
			<option value="5">Bless the Body 5
			<option value="6">Bless the Body 6
			<option value="13">Battle Roar 1
			<option value="14">Battle Roar 2
			<option value="15">Battle Roar 3
			<option value="16">Battle Roar 4
			<option value="17">Battle Roar 5
			<option value="18">Battle Roar 6
			<option value="7">Body of Avatar 1
			<option value="8">Body of Avatar 2
			<option value="9">Body of Avatar 3
			<option value="10">Body of Avatar 4
			<option value="11">Body of Avatar 5
			<option value="12">Body of Avatar 6
		</select></td>

		<td><input type=checkbox id="VITC" onclick="buffs();calc()"></td>
		<td><select id="VIT" onchange="calc()">
			<option value="1">Song of Vitality
		</select></td>
		<td><input type=checkbox id="PAFC" onclick="buffs();calc()"></td>
		<td><select id="PAF" onchange="calc()">
			<option value="1">Pa'agrio's Fist
		</select></td>
</tr>
<tr>
	<td>MP</td>

		<td><input type=checkbox id="BTSC" onclick="buffs();calc()"></td>
		<td><select id="BTS" onchange="calc()">
			<option value="1">Bless the Soul 1
			<option value="2">Bless the Soul 2
			<option value="3">Bless the Soul 3
			<option value="4">Bless the Soul 4
			<option value="5">Bless the Soul 5
			<option value="6">Bless the Soul 6
		</select></td>
		<td><input type=checkbox id="SAGC" onclick="buffs();calc()"></td>
		<td><select id="SAG" onchange="calc()">
			<option value="1">Soul of Sagitarrius 1
			<option value="2">Soul of Sagitarrius 2
			<option value="3">Soul of Sagitarrius 3
			<option value="4">Soul of Sagitarrius 4
		</select></td></tr>

<tr>
	<td>P.Atk.</td>
		<td><input type=checkbox id="MT1C" onclick="buffs();calc()">
		<input type=checkbox id="MT2C" onclick="buffs();calc()"></td>
		<td><select id="MT1" onchange="calc()">
			<option value="1">Might 1
			<option value="2">Might 2
			<option value="3">Might 3
			<option value="12">Herb of Strength
			<option value="4">Chant of Battle 1
			<option value="5">Chant of Battle 2
			<option value="6">Chant of Battle 3
			<option value="7">Pa'agrian Gift 1
			<option value="8">Pa'agrian Gift 2
			<option value="9">Pa'agrian Gift 3
		</select>

		<select id="MT2" onchange="calc()">
			<option value="1">Might 1
			<option value="2">Might 2
			<option value="3">Might 3
			<option value="12">Herb of Strength
			<option value="10">Attack Aura 1
			<option value="11">Attack Aura 2
			<option value="4">Chant of Battle 1
			<option value="5">Chant of Battle 2
			<option value="6">Chant of Battle 3
			<option value="7">Pa'agrian Gift 1
			<option value="8">Pa'agrian Gift 2
			<option value="9">Pa'agrian Gift 3
		</select></td>
		<td><input type=checkbox id="DWAC" onclick="buffs();calc()"></td>

		<td><select id="DWA" onchange="calc()">
			<option value="1">Dance of Warrior
		</select></td>
		<td><input type=checkbox id="GRMC" onclick="buffs();calc()"></td>
		<td><select id="GRM" onchange="calc()">
			<option value="1">Greater Might 1
			<option value="2">Greater Might 2
			<option value="3">Greater Might 3
			<option value="4">War Chant 1
			<option value="5">War Chant 2
			<option value="6">War Chant 3
		</select></td>

		<td><input type=checkbox id="FZY1C" onclick="buffs();calc()">
		<input type=checkbox id="FZY2C" onclick="buffs();calc()">
		<input type=checkbox id="WCY1C" onclick="buffs();calc()">
		<input type=checkbox id="WCY2C" onclick="buffs();calc()"></td>
		<td><select id="FZY1" onchange="calc()">
			<option value="1">Frenzy 1
		</select>
		<select id="FZY2" onchange="calc()">
			<option value="1">Frenzy 1
			<option value="2">Frenzy 2
			<option value="3">Frenzy 3
		</select>

		<select id="WCY1" onchange="calc()">
			<option value="1">War Cry 1
		</select>
		<select id="WCY2" onchange="calc()">
			<option value="1">War Cry 1
			<option value="2">War Cry 2
		</select></td>
</tr>
<tr>	<td></td>
		<td><input type=checkbox id="RGE1C" onclick="buffs();calc()">
	<input type=checkbox id="RGE2C" onclick="buffs();calc()"></td>

		<td><select id="RGE1" onchange="calc()">
			<option value="1">Rage 1
		</select>
		<select id="RGE2" onchange="calc()">
			<option value="1">Rage 1
			<option value="2">Rage 2
		</select></td></tr>
<tr>
	<td>M.Atk.</td>
		<td><input type=checkbox id="EMPC" onclick="buffs();calc()"></td>

		<td><select id="EMP" onchange="calc()">
			<option value="1">Empower 1
			<option value="2">Empower 2
			<option value="3">Greater Empower 3
			<option value="4">Herb of Magic
			<option value="5">Soul of Pa'agrio
		</select></td>
		<td><input type=checkbox id="DOMYC" onclick="buffs();calc()"></td>
		<td><select id="DOMY" onchange="calc()">
			<option value="1">Dance of Mystic
		</select></td></tr>
<tr>

	<td>P.Def.</td>
		<td><input type=checkbox id="SHD1C" onclick="buffs();calc()">
		<input type=checkbox id="SHD2C" onclick="buffs();calc()"></td>
		<td><select id="SHD1" onchange="calc()">
			<option value="1">Shield 1
			<option value="2">Shield 2
			<option value="3">Shield 3
			<option value="4">Blessings of Pa'agrio 1
			<option value="5">Blessings of Pa'agrio 2
			<option value="6">Blessings of Pa'agrio 3
			<option value="7">Chant of Shielding 1
			<option value="8">Chant of Shielding 2
			<option value="9">Chant of Shielding 3
			<option value="10">Soul Shield 1
			<option value="11">Soul Shield 2
			<option value="12">Soul Shield 3
		</select>

		<select id="SHD2" onchange="calc()">
			<option value="1">Shield 1
			<option value="2">Shield 2
			<option value="3">Shield 3
			<option value="4">Blessings of Pa'agrio 1
			<option value="5">Blessings of Pa'agrio 2
			<option value="6">Blessings of Pa'agrio 3
			<option value="7">Chant of Shielding 1
			<option value="8">Chant of Shielding 2
			<option value="9">Chant of Shielding 3
			<option value="13">Defense Aura 1
			<option value="14">Defense Aura 2
			<option value="10">Soul Shield 1
			<option value="11">Soul Shield 2
			<option value="12">Soul Shield 3
		</select></td>

		<td><input type=checkbox id="SOEC" onclick="buffs();calc()"></td>
		<td><select id="SOEA" onchange="calc()">
			<option value="1">Song of Earth
		</select></td>
		<td><input type=checkbox id="GRSC" onclick="buffs();calc()"></td>
		<td><select id="GRS" onchange="calc()">
			<option value="1">Greater Shield 1
			<option value="2">Greater Shield 2
			<option value="3">Greater Shield 3
			<option value="4">Earth Chant 1
			<option value="5">Earth Chant 2
			<option value="6">Earth Chant 3
		</select></td>

		<td><input type=checkbox id="GTS1C" onclick="buffs();calc()">
		<input type=checkbox id="GTS2C" onclick="buffs();calc()">
		<input type=checkbox id="MAJ1C" onclick="buffs();calc()">
		<input type=checkbox id="MAJ2C" onclick="buffs();calc()"></td>
		<td><select id="GTS1" onchange="calc()">
			<option value="1">Guts 1
		</select>
		<select id="GTS2" onchange="calc()">
			<option value="1">Guts 1
			<option value="2">Guts 2
			<option value="3">Guts 3
		</select>

		<select id="MAJ1" onchange="calc()">
			<option value="1">Majesty 1
		</select>
		<select id="MAJ2" onchange="calc()">
			<option value="1">Majesty 1
			<option value="2">Majesty 2
			<option value="3">Majesty 3
		</select></td></tr>
<tr>
	<td>M.Def.</td>
		<td><input type=checkbox id="MB1C" onclick="buffs();calc()">

		<input type=checkbox id="MB2C" onclick="buffs();calc()">
		<input type=checkbox id="MB3C" onclick="buffs();calc()"></td>
		<td><select id="MB1" onchange="calc()">
			<option value="8">Magic Barrier 1
			<option value="9">Magic Barrier 2
			<option value="1">Chant of Fire 1
			<option value="2">Chant of Fire 2
			<option value="3">Chant of Fire 3
			<option value="4">Glory of Pa'agrio 1
			<option value="5">Glory of Pa'agrio 2
			<option value="6">Glory of Pa'agrio 3
		</select>
		<select id="MB2" onchange="calc()">

			<option value="8">Magic Barrier 1
			<option value="9">Magic Barrier 2
			<option value="1">Chant of Fire 1
			<option value="2">Chant of Fire 2
			<option value="3">Chant of Fire 3
			<option value="4">Glory of Pa'agrio 1
			<option value="5">Glory of Pa'agrio 2
			<option value="6">Glory of Pa'agrio 3
			<option value="10">Spirit Barrier 1
			<option value="11">Spirit Barrier 2
			<option value="12">Spirit Barrier 3
		</select>
		<select id="MB3" onchange="calc()">
			<option value="8">Magic Barrier 1
			<option value="9">Magic Barrier 2
			<option value="1">Chant of Fire 1
			<option value="2">Chant of Fire 2
			<option value="3">Chant of Fire 3
			<option value="4">Glory of Pa'agrio 1
			<option value="5">Glory of Pa'agrio 2
			<option value="6">Glory of Pa'agrio 3
			<option value="13">Iron Will 1
			<option value="14">Iron Will 2
			<option value="15">Iron Will 3
		</select></td>

		<td><input type=checkbox id="WARDC" onclick="buffs();calc()"></td>
		<td><select id="WARD" onchange="calc()">
			<option value="1">Song of Warding
		</select></td></tr>
<tr>
	<td>Accuracy</td>
		<td><input type=checkbox id="GUIDC" onclick="buffs();calc()"></td>
		<td><select id="GUID" onchange="calc()">
			<option value="1">Guidance 1
			<option value="2">Guidance 2
			<option value="3">Guidance 3
			<option value="4">Chant of Eagle 1
			<option value="5">Chant of Eagle 2
			<option value="6">Chant of Eagle 3
			<option value="7">Vision of Pa'agrio 1
			<option value="8">Vision of Pa'agrio 2
			<option value="9">Vision of Pa'agrio 3
		</select></td>

		<td><input type=checkbox id="DOIC" onclick="buffs();calc()"></td>
		<td><select id="DOI" onchange="calc()">
			<option value="1">Dance of Inspiration
		</select></td>
		<td><input type=checkbox id="HEC" onclick="buffs();calc()"></td>
		<td><select id="HE" onchange="calc()">
			<option value="1">Hawk Eye 1
			<option value="2">Hawk Eye 2
			<option value="3">Hawk Eye 3
		</select></td></tr>
<tr>

	<td>Evasion</td>
		<td><input type=checkbox id="AGIC" onclick="buffs();calc()"></td>
		<td><select id="AGI" onchange="calc()">
			<option value="1">Agility 1
			<option value="2">Agility 2
			<option value="3">Agility 3
			<option value="4">Chant of Evasion 1
			<option value="5">Chant of Evasion 2
			<option value="6">Chant of Evasion 3
			<option value="7">Tact of Pa'agrio 1
			<option value="8">Tact of Pa'agrio 2
			<option value="9">Tact of Pa'agrio 3
		</select></td>

		<td><input type=checkbox id="SWATC" onclick="buffs();calc()"></td>
		<td><select id="SWAT" onchange="calc()">
			<option value="1">Song of Water
		</select></td>
		<td><input type=checkbox id="UEC" onclick="buffs();calc()"></td>
		<td><select id="UE" onchange="calc()">
			<option value="1">Ultimate Evasion 1
			<option value="2" id="Ultimate_Evasion2">Ultimate Evasion 2
		</select></td>
		<td><input type=checkbox id="EVSC" onclick="buffs();calc()"></td>

		<td><select id="EVS" onchange="calc()">
			<option value="1">Evasion Shot
		</select></td></tr>
<tr>
	<td>Critical</td>
		<td><input type=checkbox id="FCSC" onclick="buffs();calc()"></td>
		<td><select id="FCS" onchange="calc()">
			<option value="1">Focus 1
			<option value="2">Focus 2
			<option value="3">Focus 3
			<option value="4">Chant of Predator 1
			<option value="5">Chant of Predator 2
			<option value="6">Chant of Predator 3
			<option value="9">Herb of Critical Attack
		</select></td>

		<td><input type=checkbox id="SOHC" onclick="buffs();calc()"></td>
		<td><select id="SOH" onchange="calc()">
			<option value="1">Song of Hunter
		</select></td></tr>
<tr>
	<td>Speed</td>
		<td><input type=checkbox id="WWC" onclick="buffs();calc()"></td>
		<td><select id="WW" onchange="calc()">
			<option value="1">Wind Walk 1
			<option value="2">Wind Walk 2
			<option value="3">Pa'agrian Haste 1
			<option value="4">Pa'agrian Haste 2
			<option value="5" id="Sprint1">Sprint 1
			<option value="6" id="Sprint2">Sprint 2
			<option value="7">Haste Potion
			<option value="8">Greater Quick Step Potion
			<option value="10">Herb of Speed
		</select></td>

		<td><input type=checkbox id="SWIC" onclick="buffs();calc()"></td>
		<td><select id="SWI" onchange="calc()">
			<option value="1">Song of Wind
		</select></td>
		<td><input type=checkbox id="DSHC" onclick="buffs();calc()"></td>
		<td><select id="DSH" onchange="calc()">
			<option value="1">Dance of Shadow
		</select></td>
		<td><input type=checkbox id="DAS1C" onclick="buffs();calc()">
		<input type=checkbox id="DAS2C" onclick="buffs();calc()">

		<input type=checkbox id="BLDC" onclick="buffs();calc()"></td>
		<td><select id="DAS1" onchange="calc()">
			<option value="1">Dash 1
		</select>
		<select id="DAS2" onchange="calc()">
			<option value="1">Dash 1
			<option value="2">Dash 2
		</select>
		<select id="BLD" onchange="calc()">
			<option value="1">Blinding Blow
		</select></td></tr>

<tr>
	<td>Atk. Spd.</td>
		<td><input type=checkbox id="HSTC" onclick="buffs();calc()"></td>
		<td><select id="HST" onchange="calc()">
			<option value="1">Haste 1
			<option value="2">Haste 2
			<option value="3">Chant of Fury 1
			<option value="4">Chant of Fury 2
			<option value="5">Potion of Alacrity
			<option value="6">Greater Swift Attack Potion
			<option value="8">Herb of Atk. Speed
		</select></td>

		<td><input type=checkbox id="DFUC" onclick="buffs();calc()"></td>
		<td><select id="DFU" onchange="calc()">
			<option value="1">Dance of Fury
		</select></td>
		<td><input type=checkbox id="RPD1C" onclick="buffs();calc()">
		<input type=checkbox id="RPD2C" onclick="buffs();calc()">
		<input type=checkbox id="DUELC" onclick="buffs();calc()">
		<input type=checkbox id="TFC" onclick="buffs();calc()"></td>
		<td><select id="RPD1" onchange="calc()">

			<option value="1">Rapid Shot 1
		</select>
		<select id="RPD2" onchange="calc()">
			<option value="1">Rapid Shot 1
			<option value="2">Rapid Shot 2
		</select>
		<select id="DUEL" onchange="calc()">
			<option value="1">Duelist Spirit 1
			<option value="2">Duelist Spirit 2
		</select>
		<select id="TF" onchange="calc()">

			<option value="1">Thrill Fight 1
			<option value="2">Thrill Fight 2
		</select></td></tr>
<tr>
	<td>Casting Spd.</td>
		<td><input type=checkbox id="ACUC" onclick="buffs();calc()"></td>
		<td><select id="ACU" onchange="calc()">
			<option value="1">Acumen 1
			<option value="2">Acumen 2
			<option value="3">Acumen 3
			<option value="4">Chant of Flame 1
			<option value="5">Chant of Flame 2
			<option value="6">Chant of Flame 3
			<option value="7">Wisdom of Pa'agrio 1
			<option value="8">Wisdom of Pa'agrio 2
			<option value="9">Wisdom of Pa'agrio 3
			<option value="11">Magic Haste Potion
			<option value="12">Greater Magic Haste Potion
			<option value="15">Herb of Casting Spd.
		</select></td>

		<td><input type=checkbox id="DCONC" onclick="buffs();calc()"></td>
		<td><select id="DCON" onchange="calc()">
			<option value="1">Dance of Concentration
		</select></td></tr>
<tr>
	<td>Crit. Dmg.</td>
		<td><input type=checkbox id="DEWC" onclick="buffs();calc()"></td>
		<td><select id="DEW" onchange="calc()">
			<option value="1">Death Whisper 1
			<option value="2">Death Whisper 2
			<option value="3">Death Whisper 3
			<option value="4">Chant of Rage 1
			<option value="5">Chant of Rage 2
			<option value="6">Chant of Rage 3
			<option value="9">The Eye of Pa'agrio
		</select></td>

		<td><input type=checkbox id="DOFC" onclick="buffs();calc()"></td>
		<td><select id="DOF" onchange="calc()">
			<option value="1">Dance of Fire
		</select></td></tr>
<tr>
	<td>Vampiric Rage</td>
		<td><input type=checkbox id="VRAC" onclick="buffs();calc()"></td>
		<td><select id="VRA" onchange="calc()">
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
		<td><select id="DOV" onchange="calc()">
			<option value="1">Dance of Vampire
		</select></td></tr>
<tr>
	<td>Shield</td>
		<td><input type=checkbox id="BSDC" onclick="buffs();calc()"></td>
		<td><select id="BSD" onchange="calc()">
			<option value="1">Bless Shield 1
			<option value="2">Bless Shield 2
			<option value="3">Bless Shield 3
			<option value="4">Bless Shield 4
			<option value="5">Bless Shield 5
			<option value="6">Bless Shield 6
			<option value="7">Under the Protection of Pa'agrio 1
			<option value="8">Under the Protection of Pa'agrio 2
			<option value="9">Under the Protection of Pa'agrio 3
		</select></td>

		<td><input type=checkbox id="ADBC" onclick="buffs();calc()"></td>
		<td><select id="ADB" onchange="calc()">
			<option value="1">Advanced Block 1
			<option value="2">Advanced Block 2
			<option value="3">Advanced Block 3
		</select></td></tr>
<tr>
	<td>Regen</td>
		<td><input type=checkbox id="RGNC" onclick="buffs();calc()"></td>
		<td><select id="RGN" onchange="calc()">

			<option value="1">Regeneration 1
			<option value="2">Regeneration 2
			<option value="3">Regeneration 3
		</select></td>
		<td><input type=checkbox id="SOLC" onclick="buffs();calc()"></td>
		<td><select id="SOL" onchange="calc()">
			<option value="1">Song of Life
		</select></td>
		<td><input type=checkbox id="SOMC" onclick="buffs();calc()"></td>
		<td><select id="SOM" onchange="calc()">
			<option value="1">Song of Meditation
		</select></td>

		<td><input type=checkbox id="SERC" onclick="buffs();calc()"></td>
		<td><select id="SER" onchange="calc()">
			<option value="1">Blessing of Seraphim 1
			<option value="2">Blessing of Seraphim 2
			<option value="3">Blessing of Seraphim 3
		</select></td></tr>
<tr>
	<td>Reflect Damage</td>
		<td><input type=checkbox id="SKNC" onclick="buffs();calc()"></td>
		<td><select id="SKN" onchange="calc()">

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
		<td><select id="SOV" onchange="calc()">

			<option value="1">Song of Vengeance 1
		</select></tr>
<tr>
		<td></td>
		<td><input type=checkbox id="MRGC" onclick="buffs();calc()"></td>
		<td><select id="MRG" onchange="calc()">
			<option value="1">Mana Regeneration 1
			<option value="2">Mana Regeneration 2
			<option value="3">Mana Regeneration 3
			<option value="4">Mana Regeneration 4
		</select></td></tr>
<tr>

	<td>Misc.</td>
		<td><input type=checkbox id="ZERKC" onclick="buffs();calc()"></td>
		<td><select id="ZERK" onchange="calc()">
			<option value="1">Berserker Spirit 1
			<option value="2">Berserker Spirit 2
			<option value="3">Rage of Pa'agrio 1
			<option value="4">Rage of Pa'agrio 2
		</select></td>
		<td><input type=checkbox id="QUEEC" onclick="buffs();calc()"></td>
		<td><select id="QUEE" onchange="calc()">

			<option value="4">Blessing of Queen 1
			<option value="5">Blessing of Queen 2
			<option value="6">Blessing of Queen 3
			<option value="1">Gift of Queen 1
			<option value="2">Gift of Queen 2
			<option value="3">Gift of Queen 3
		</select></td>
		<td><input type=checkbox id="PRPC" onclick="buffs();calc()"></td>
		<td><select id="PRP" onchange="calc()">
			<option value="1">Chant of Victory
			<option value="2">Prophecy of Fire
			<option value="3">Prophecy of Water
			<option value="4">Prophecy of Wind
			<option value="5">Magnus' Chant
			<option value="6">Victories of Pa'agrio
		</select></td>

		<td><input type=checkbox id="DCWC" onclick="buffs();calc()"></td>
		<td><select id="DCW" onchange="calc()">
			<option value="1">Decrease Weight 1
			<option value="2">Decrease Weight 2
			<option value="3">Decrease Weight 3
		</select></td></tr>
<tr>		<td></td>
		<td><input type=checkbox id="UD1C" onclick="buffs();calc()">
		<input type=checkbox id="UD2C" onclick="buffs();calc()">
		<input type=checkbox id="INVC" onclick="buffs();calc()">

		<input type=checkbox id="TTM1C" onclick="buffs();calc()">
		<input type=checkbox id="TTM2C" onclick="buffs();calc()">
		<input type=checkbox id="SNIC" onclick="buffs();calc()">
		<input type=checkbox id="FAC" onclick="buffs();calc()">
		<input type=checkbox id="STLC" onclick="buffs();calc()"></td>
		<td><select id="UD1" onchange="calc()">
			<option value="1">Ultimate Defense 1
		</select>
		<select id="UD2" onchange="calc()">

			<option value="1">Ultimate Defense 1
			<option value="2">Ultimate Defense 2
			<option value="3">Vengeance
			<option value="4">Ultimate Defense 2 +1
			<option value="5">Ultimate Defense 2 +2
			<option value="6">Ultimate Defense 2 +3
			<option value="7">Ultimate Defense 2 +4
			<option value="8">Ultimate Defense 2 +5
			<option value="9">Ultimate Defense 2 +6
			<option value="10">Ultimate Defense 2 +7
			<option value="11">Ultimate Defense 2 +8
			<option value="12">Ultimate Defense 2 +9
			<option value="13">Ultimate Defense 2 +10
			<option value="14">Ultimate Defense 2 +11
			<option value="15">Ultimate Defense 2 +12
			<option value="16">Ultimate Defense 2 +13
			<option value="17">Ultimate Defense 2 +14
			<option value="18">Ultimate Defense 2 +15
			<option value="19">Ultimate Defense 2 +16
			<option value="20">Ultimate Defense 2 +17
			<option value="21">Ultimate Defense 2 +18
			<option value="22">Ultimate Defense 2 +19
			<option value="23">Ultimate Defense 2 +20
			<option value="24">Ultimate Defense 2 +21
			<option value="25">Ultimate Defense 2 +22
			<option value="26">Ultimate Defense 2 +23
			<option value="27">Ultimate Defense 2 +24
			<option value="28">Ultimate Defense 2 +25
			<option value="29">Ultimate Defense 2 +26
			<option value="30">Ultimate Defense 2 +27
			<option value="31">Ultimate Defense 2 +28
			<option value="32">Ultimate Defense 2 +29
			<option value="33">Ultimate Defense 2 +30
		</select>

		<select id="INV" onchange="calc()">
			<option value="5">Invocation
		</select>
		<select id="TTM1" onchange="calc()">
			<option value="1">Bear Spirit Totem
			<option value="2">Wolf Spirit Totem
		</select>
		<select id="TTM2" onchange="calc()">
			<option value="1">Bear Spirit Totem
			<option value="3">Bison Spirit Totem
			<option value="4">Hawk Spirit Totem
			<option value="5">Ogre Spirit Totem
			<option value="6">Puma Spirit Totem
			<option value="7">Rabbit Spirit Totem
			<option value="2">Wolf Spirit Totem
		</select>

		<select id="SNI" onchange="calc()">
			<option value="1">Snipe 1
			<option value="2">Snipe 2
			<option value="3">Snipe 3
			<option value="5">Snipe 5
			<option value="6">Snipe 6
			<option value="7">Snipe 7
			<option value="8">Snipe 8
		</select>
		<select id="FA" onchange="calc()">
			<option value="1">Focus Attack 1
			<option value="2">Focus Attack 2
			<option value="3">Focus Attack 3
			<option value="4">Focus Attack 4</select>

		<select id="STL" onchange="calc()">
			<option value="1">Stealth 1
			<option value="2">Stealth 2
			<option value="3">Stealth 3</select></td>
		<td><input type=checkbox id="ZLTC" onclick="buffs();calc()">
		<input type=checkbox id="DEA1C" onclick="buffs();calc()">
		<input type=checkbox id="DEA2C" onclick="buffs();calc()">
		<input type=checkbox id="RPFC" onclick="buffs();calc()">
		<input type=checkbox id="DEYC" onclick="buffs();calc()">

		<input type=checkbox id="FAWC" onclick="buffs();calc()">
		<input type=checkbox id="FPWC" onclick="buffs();calc()">
		<input type=checkbox id="FTHC" onclick="buffs();calc()"></td>
		<td><select id="ZLT" onchange="calc()">
			<option value="1">Zealot 1
			<option value="2">Zealot 2
			<option value="3">Zealot 3
		</select>
		<select id="DEA1" onchange="calc()">
			<option value="1">Deflect Arrow 1
			<option value="2">Deflect Arrow 2
		</select>

		<select id="DEA2" onchange="calc()">
			<option value="1">Deflect Arrow 1
			<option value="2">Deflect Arrow 2
			<option value="3">Deflect Arrow 3
			<option value="4">Deflect Arrow 4
		</select>
		<select id="RPF" onchange="calc()">
			<option value="1">Rapid Fire 1
			<option value="2">Rapid Fire 2
			<option value="3">Rapid Fire 3
			<option value="4">Rapid Fire 4
			<option value="5">Rapid Fire 5
			<option value="6">Rapid Fire 6
			<option value="7">Rapid Fire 7
			<option value="8">Rapid Fire 8
		</select>

		<select id="DEY" onchange="calc()">
			<option value="1">Dead Eye 1
			<option value="2">Dead Eye 2
			<option value="3">Dead Eye 3
			<option value="4">Dead Eye 4
			<option value="5">Dead Eye 5
			<option value="6">Dead Eye 6
			<option value="7">Dead Eye 7
			<option value="8">Dead Eye 8
		</select>
		<select id="FAW" onchange="calc()">
			<option value="2">Focus Death
			<option value="3">Focus Power
		</select>

		<select id="FPW" onchange="calc()">
			<option value="1">Focus Chance
			<option value="2">Focus Death
		</select>
		<select id="FTH" onchange="calc()">
			<option value="1">Focus Chance
			<option value="3">Focus Power
		</select></td>
		<td><input type=checkbox id="BOPC" onclick="buffs();calc()"></td>
		<td><select id="BOP" onchange="calc()">
			<option value="1">Blessing of Prophecy
		</select></td>

		<td><input type=checkbox id="HERC" onclick="buffs();calc()"></td>
		<td><select id="HER" onchange="calc()">
			<option value="1">Heroic Berserker
			<option value="2">Heroic Miracle
			<option value="3">Heroic Valor
		</select></td>
		</tr>
<tr>
	<td></td>
		<td><input type=checkbox id="ANIC" onclick="buffs();calc()"></td>
		<td><select id="ANI" onchange="calc()">

			<option value="1">Angelic Icon 1
			<option value="2">Angelic Icon 2
			<option value="3">Angelic Icon 3
		</select></td>
</table>
</fieldset>

<fieldset id="TOGGLES">
<legend>Toggles</legend>
	<table class="statcalc">
<tr>
		<td><input type=checkbox id="SL1C" onclick="toggles();calc()">
		<input type=checkbox id="SL2C" onclick="toggles();calc()">

		<input type=checkbox id="SL3C" onclick="toggles();calc()">
		<input type=checkbox id="ARPC" onclick="toggles();calc()">
		<input type=checkbox id="ASTC" onclick="toggles();calc()">
		<input type=checkbox id="GSC" onclick="toggles();calc()">
		<input type=checkbox id="SGC" onclick="toggles();calc()">
		<input type=checkbox id="ACCTC" onclick="toggles();calc()">
		<input type=checkbox id="SMC" onclick="toggles();calc()">
		<input type=checkbox id="FFYC" onclick="toggles();calc()">
		<input type=checkbox id="ARAC" onclick="toggles();calc()">

		<input type=checkbox id="ARWC" onclick="toggles();calc()">
		<input type=checkbox id="PRYC" onclick="toggles();calc()">
		<input type=checkbox id="RIPC" onclick="toggles();calc()">
		<input type=checkbox id="PACC" onclick="toggles();calc()">
		<input type=checkbox id="SFC" onclick="toggles();calc()">
		<input type=checkbox id="VSC" onclick="toggles();calc()"></td>
		<td><select id="SL1" onchange="calc()">
			<option value="1">Soul Cry 1
			<option value="2">Soul Cry 2
		</select>

		<select id="SL2" onchange="calc()">
			<option value="1">Soul Cry 1
			<option value="2">Soul Cry 2
			<option value="3">Soul Cry 3
			<option value="4">Soul Cry 4
		</select>
		<select id="SL3" onchange="calc()">
			<option value="1">Soul Cry 1
			<option value="2">Soul Cry 2
			<option value="3">Soul Cry 3
			<option value="4">Soul Cry 4
			<option value="5">Soul Cry 5
			<option value="6">Soul Cry 6
			<option value="7">Soul Cry 7
			<option value="8">Soul Cry 8
			<option value="9">Soul Cry 9
			<option value="10">Soul Cry 10
		</select>

		<select id="ARP" onchange="calc()">
			<option value="1">Arcane Power
		</select>
		<select id="AST" onchange="calc()">
			<option value="1">Aegis Stance
		</select>
		<select id="GS" onchange="calc()">
			<option value="1">Guard Stance 1
			<option value="2">Guard Stance 2
			<option value="3">Guard Stance 3
			<option value="4">Guard Stance 4
			<option value="5">Guard Stance 4 +1 (Power)
			<option value="6">Guard Stance 4 +2 (Power)
			<option value="7">Guard Stance 4 +3 (Power)
			<option value="8">Guard Stance 4 +4 (Power)
			<option value="9">Guard Stance 4 +5 (Power)
			<option value="10">Guard Stance 4 +6 (Power)
			<option value="11">Guard Stance 4 +7 (Power)
			<option value="12">Guard Stance 4 +8 (Power)
			<option value="13">Guard Stance 4 +9 (Power)
			<option value="14">Guard Stance 4 +10 (Power)
			<option value="15">Guard Stance 4 +11 (Power)
			<option value="16">Guard Stance 4 +12 (Power)
			<option value="17">Guard Stance 4 +13 (Power)
			<option value="18">Guard Stance 4 +14 (Power)
			<option value="19">Guard Stance 4 +15 (Power)
			<option value="20">Guard Stance 4 +16 (Power)
			<option value="21">Guard Stance 4 +17 (Power)
			<option value="22">Guard Stance 4 +18 (Power)
			<option value="23">Guard Stance 4 +19 (Power)
			<option value="24">Guard Stance 4 +20 (Power)
			<option value="25">Guard Stance 4 +21 (Power)
			<option value="26">Guard Stance 4 +22 (Power)
			<option value="27">Guard Stance 4 +23 (Power)
			<option value="28">Guard Stance 4 +24 (Power)
			<option value="29">Guard Stance 4 +25 (Power)
			<option value="30">Guard Stance 4 +26 (Power)
			<option value="31">Guard Stance 4 +27 (Power)
			<option value="32">Guard Stance 4 +28 (Power)
			<option value="33">Guard Stance 4 +29 (Power)
			<option value="34">Guard Stance 4 +30 (Power)
		</select>

		<select id="SG" onchange="calc()">
			<option value="1">Soul Guard 1
			<option value="2">Soul Guard 2
			<option value="3">Soul Guard 3
			<option value="4">Soul Guard 4
			<option value="5">Soul Guard 5
			<option value="6">Soul Guard 6
			<option value="7">Soul Guard 7
			<option value="8">Soul Guard 8
			<option value="9">Soul Guard 9
			<option value="10">Soul Guard 10
			<option value="11">Soul Guard 11
			<option value="12">Soul Guard 12
			<option value="13">Soul Guard 13
		</select>

		<select id="ACCT" onchange="calc()">
			<option value="1">Accuracy
		</select>
		<select id="SM" onchange="calc()">
			<option value="1">Silent Move
		</select>
		<select id="FFY" onchange="calc()">
			<option value="1">Fist Fury
		</select>
		<select id="ARA" onchange="calc()">

			<option value="1">Arcane Agility
		</select>
		<select id="ARW" onchange="calc()">
			<option value="1">Arcane Wisdom
		</select>
		<select id="PRY" onchange="calc()">
			<option value="1">Parry Stance
		</select>
		<select id="RIP" onchange="calc()">
			<option value="1">Riposte Stance
		</select>

		<select id="PAC" onchange="calc()">
			<option value="1">Polearm Accuracy 1
			<option value="2">Polearm Accuracy 2
			<option value="3">Polearm Accuracy 3
		</select>
		<select id="SF" onchange="calc()"><option value="1">Shield Fortress 1<option value="2">Shield Fortress 2<option value="3">Shield Fortress 3<option value="4">Shield Fortress 4<option value="5">Shield Fortress 5<option value="6">Shield Fortress 6<option value="7">Shield Fortress 6 +1 (Power)<option value="8">Shield Fortress 6 +2 (Power)<option value="9">Shield Fortress 6 +3 (Power)<option value="10">Shield Fortress 6 +4 (Power)<option value="11">Shield Fortress 6 +5 (Power)<option value="12">Shield Fortress 6 +6 (Power)<option value="13">Shield Fortress 6 +7 (Power)<option value="14">Shield Fortress 6 +8 (Power)<option value="15">Shield Fortress 6 +9 (Power)<option value="16">Shield Fortress 6 +10 (Power)<option value="17">Shield Fortress 6 +11 (Power)<option value="18">Shield Fortress 6 +12 (Power)<option value="19">Shield Fortress 6 +13 (Power)<option value="20">Shield Fortress 6 +14 (Power)<option value="21">Shield Fortress 6 +15 (Power)<option value="22">Shield Fortress 6 +16 (Power)<option value="23">Shield Fortress 6 +17 (Power)<option value="24">Shield Fortress 6 +18 (Power)<option value="25">Shield Fortress 6 +19 (Power)<option value="26">Shield Fortress 6 +20 (Power)<option value="27">Shield Fortress 6 +21 (Power)<option value="28">Shield Fortress 6 +22 (Power)<option value="29">Shield Fortress 6 +23 (Power)<option value="30">Shield Fortress 6 +24 (Power)<option value="31">Shield Fortress 6 +25 (Power)<option value="32">Shield Fortress 6 +26 (Power)<option value="33">Shield Fortress 6 +27 (Power)<option value="34">Shield Fortress 6 +28 (Power)<option value="35">Shield Fortress 6 +29 (Power)<option value="36">Shield Fortress 6 +30 (Power)</select>

		<select id="VS" onchange="calc()">
			<option value="1">Vicious Stance 1
			<option value="2">Vicious Stance 2
			<option value="3">Vicious Stance 3
			<option value="4">Vicious Stance 4
			<option value="5">Vicious Stance 5
			<option value="6">Vicious Stance 6
			<option value="7">Vicious Stance 7
			<option value="8">Vicious Stance 8
			<option value="9">Vicious Stance 9
			<option value="10">Vicious Stance 10
			<option value="11">Vicious Stance 11
			<option value="12">Vicious Stance 12
			<option value="13">Vicious Stance 13
			<option value="14">Vicious Stance 14
			<option value="15">Vicious Stance 15
			<option value="16">Vicious Stance 16
			<option value="17">Vicious Stance 17
			<option value="18">Vicious Stance 18
			<option value="19">Vicious Stance 19
			<option value="20">Vicious Stance 20
			<option value="21">Vicious Stance 20 +1 (Power)
			<option value="22">Vicious Stance 20 +2 (Power)
			<option value="23">Vicious Stance 20 +3 (Power)
			<option value="24">Vicious Stance 20 +4 (Power)
			<option value="25">Vicious Stance 20 +5 (Power)
			<option value="26">Vicious Stance 20 +6 (Power)
			<option value="27">Vicious Stance 20 +7 (Power)
			<option value="28">Vicious Stance 20 +8 (Power)
			<option value="29">Vicious Stance 20 +9 (Power)
			<option value="30">Vicious Stance 20 +10 (Power)
			<option value="31">Vicious Stance 20 +11 (Power)
			<option value="32">Vicious Stance 20 +12 (Power)
			<option value="33">Vicious Stance 20 +13 (Power)
			<option value="34">Vicious Stance 20 +14 (Power)
			<option value="35">Vicious Stance 20 +15 (Power)
			<option value="36">Vicious Stance 20 +16 (Power)
			<option value="37">Vicious Stance 20 +17 (Power)
			<option value="38">Vicious Stance 20 +18 (Power)
			<option value="39">Vicious Stance 20 +19 (Power)
			<option value="40">Vicious Stance 20 +20 (Power)
			<option value="41">Vicious Stance 20 +21 (Power)
			<option value="42">Vicious Stance 20 +22 (Power)
			<option value="43">Vicious Stance 20 +23 (Power)
			<option value="44">Vicious Stance 20 +24 (Power)
			<option value="45">Vicious Stance 20 +25 (Power)
			<option value="46">Vicious Stance 20 +26 (Power)
			<option value="47">Vicious Stance 20 +27 (Power)
			<option value="48">Vicious Stance 20 +28 (Power)
			<option value="49">Vicious Stance 20 +29 (Power)
			<option value="50">Vicious Stance 20 +30 (Power)
		</select>

		</td></tr>
	</table>
</fieldset>
<fieldset id="DEBUFFS">
<legend>Debuffs</legend>
	<table class="statcalc">
<tr>	<td>P.Atk.</td>
		<td><input type=checkbox id="DEPC" onclick="debuffs();calc()"></td>
		<td><select id="DEP" onchange="calc()">

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
		<td><input type=checkbox id="DEDC" onclick="debuffs();calc()"></td>
		<td><select id="DED" onchange="calc()">

			<option value="1">Hex
			<option value="1">Poltergeist Cubic
		</select></td>
		<td><input type=checkbox id="BLKSC" onclick="buffs();calc()"></td>
		<td><select id="BLKS" onchange="calc()">
			<option value="1">Block Shield
			<option value="2">Mass Shield Block
		</select></td></tr>
<tr>	<td>M.Def.</td>
		<td><input type=checkbox id="GLMC" onclick="debuffs();calc()"></td>

		<td><select id="GLM" onchange="calc()">
			<option value="1">Curse Gloom
		</select></td></tr>
<tr>	<td>Accuracy
		<td><input type=checkbox id="DEAC" onclick="debuffs();calc()"></td>
		<td><select id="DEA" onchange="calc()">
			<option value="1">Curse Chaos 1
			<option value="2">Curse Chaos 2+
			<option value="1">Seal of Chaos 1-2
			<option value="2">Seal of Chaos 3+
		</select></td>
		<td><input type=checkbox id="SBBC" onclick="debuffs();calc()"></td>

		<td><select id="SBB" onchange="calc()">
			<option value="1">Sand Bomb 1-5
			<option value="2">Sand Bomb 6-9
			<option value="3">Sand Bomb 10
		</select></td></tr>
<tr>	<td>Critical
		<td><input type=checkbox id="TRBC" onclick="debuffs();calc()"></td>
		<td><select id="TRB" onchange="calc()">
			<option value="1">Tribunal 1-6
			<option value="2">Tribunal 7-9
			<option value="3">Tribunal 10
		</select></td></tr>

<tr>	<td>Speed</td>
		<td><input type=checkbox id="DESC" onclick="debuffs();calc()"></td>
		<td><select id="DES" onchange="calc()">
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

		<td><input type=checkbox id="BWWC" onclick="buffs();calc()"></td>
		<td><select id="BWW" onchange="calc()">
			<option value="1">Block Wind Walk
			<option value="2">Mass Block Wind Walk
		</select></td></tr>
<tr>	<td>Atk. Spd.
		<td><input type=checkbox id="DENC" onclick="debuffs();calc()"></td>
		<td><select id="DEN" onchange="calc()">
			<option value="1">Wind Shackle 1
			<option value="2">Wind Shackle 2-5
			<option value="3">Wind Shackle 6+
			<option value="3">Poltergeist Cubic
			<option value="3">Seal of Winter
			<option value="3">Spoil (Atk. Spd.)
			<option value="3">Spoil Festival (Atk. Spd.)
		</select></td></tr>

<tr>	<td>Casting Spd.
		<td><input type=checkbox id="DECC" onclick="debuffs();calc()"></td>
		<td><select id="DEC" onchange="calc()">
			<option value="1">Arcane Disruption 1-10
		</select></td></tr>
<tr>	<td>Crit. Dmg.
		<td><input type=checkbox id="JDGC" onclick="debuffs();calc()"></td>
		<td><select id="JDG" onchange="calc()">
			<option value="1">Judgment 1-5
			<option value="2">Judgment 6-9
			<option value="3">Judgment 10
		</select></td></tr>

<tr>	<td>Regen
		<td><input type=checkbox id="SCRC" onclick="debuffs();calc()"></td>
		<td><select id="SCR" onchange="calc()">
			<option value="1">Seal of Scourge
		</select></td></tr>
<tr>	<td>Misc.</td>
		<td><input type=checkbox id="ARNC" onclick="debuffs();calc()"></td>
		<td><select id="ARN" onchange="calc()">
			<option value="1">Arcane Chaos
		</select></td>

		<td><input type=checkbox id="ACC" onclick="debuffs();calc()"></td>
		<td><select id="ARCR" onchange="calc()">
			<option value="1">Armor Crush
		</select></td>
		<td><input type=checkbox id="CBYC" onclick="debuffs();calc()"></td>
		<td><select id="CBY" onchange="calc()">
			<option value="1">Curse of Abyss
		</select></td>
		<td><input type=checkbox id="CDMC" onclick="debuffs();calc()"></td>
		<td><select id="CDM" onchange="calc()">

			<option value="1">Curse of Doom
		</select></td></tr>
<tr>	<td></td>
		<td><input type=checkbox id="CSHC" onclick="debuffs();calc()"></td>
		<td><select id="CSH" onchange="calc()">
			<option value="1">Curse of Shade 1
			<option value="2">Curse of Shade 2
			<option value="3">Curse of Shade 3
			<option value="1">Mass Curse of Shade 1
			<option value="2">Mass Curse of Shade 2
			<option value="3">Mass Curse of Shade 3
		</select></td>

		<td><input type=checkbox id="DVC" onclick="debuffs();calc()"></td>
		<td><select id="DV" onchange="calc()">
			<option value="1">Dark Vortex
		</select></td>
		<td><input type=checkbox id="DBDC" onclick="debuffs();calc()"></td>
		<td><select id="DBD" onchange="calc()">
			<option value="1">Demonic Blade Dance 1-3
			<option value="2">Demonic Blade Dance 4-5
			<option value="3">Demonic Blade Dance 6-7
			<option value="4">Demonic Blade Dance 8-9
			<option value="5">Demonic Blade Dance 10
		</select></td>

		<td><input type=checkbox id="FVC" onclick="debuffs();calc()"></td>
		<td><select id="FV" onchange="calc()">
			<option value="1">Fire Vortex
		</select></td></tr>
<tr>	<td></td>
		<td><input type=checkbox id="HEDC" onclick="debuffs();calc()"></td>
		<td><select id="HED" onchange="calc()">
			<option value="1">Heroic Dread
		</select></td>
		<td><input type=checkbox id="HEEC" onclick="debuffs();calc()"></td>

		<td><select id="HEE" onchange="calc()">
			<option value="1">Heroic Grandeur
		</select></td>
		<td><input type=checkbox id="CHOLC" onclick="debuffs();calc()"></td>
		<td><select id="CHOL" onchange="calc()">
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

		<td><input type=checkbox id="MALC" onclick="debuffs();calc()"></td>
		<td><select id="MAL" onchange="calc()">
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
		</select></td></tr>
<tr>	<td></td>

		<td><input type=checkbox id="IVC" onclick="debuffs();calc()"></td>
		<td><select id="IV" onchange="calc()">
			<option value="1">Ice Vortex
		</select></td>
		<td><input type=checkbox id="LVORC" onclick="debuffs();calc()"></td>
		<td><select id="LVOR" onchange="calc()">
			<option value="1">Light Vortex
		</select></td>
		<td><input type=checkbox id="PSYC" onclick="debuffs();calc()"></td>
		<td><select id="PSY" onchange="calc()">

			<option value="1">Psycho Symphony 1-3
			<option value="2">Psycho Symphony 4-5
			<option value="3">Psycho Symphony 6-7
			<option value="4">Psycho Symphony 8-9
			<option value="5">Psycho Symphony 10
		</select></td>
		<td><input type=checkbox id="SBC" onclick="debuffs();calc()"></td>
		<td><select id="SB" onchange="calc()">
			<option value="1">Shock Blast
		</select></td></tr>
<tr>	<td></td>
		<td><input type=checkbox id="DERC" onclick="debuffs();calc()"></td>

		<td><select id="DER" onchange="calc()">
			<option value="1">Seal of Despair
		</select></td>
		<td><input type=checkbox id="WVC" onclick="debuffs();calc()"></td>
		<td><select id="WV" onchange="calc()">
			<option value="1">Wind Vortex
		</select></td>
</table>
</fieldset>
</form>
		</div>

<!--END--></td>  </tr>
</table></table>  </td>
 </tr>
 <tr>
 </tr>
</table>

</td></tr>

</table>

<script src='../js/rawdata.js'></script>
<script src='../js/block.js'></script>
<script src='../js/disable.js'></script>
<script src='../js/calculator.js'></script>
<script src='../js/cookie.js'></script>
<script src='../js/start.js'></script>
