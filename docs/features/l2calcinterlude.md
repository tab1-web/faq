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
<legend>Расчет PvP</legend>
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
		<tr><td align=right><input type="text" id="SSC1" size="1" value="0" onkeypress="calc()"></td><td><a id="SSC2">Adena per Soulshot</a></td></tr>
		<tr><td align=right><a id="SSC3">0</a></td><td><a id="SSC4">Adena Cost per Second</a></td></tr>

		<tr><td align=right><a id="SSC5">0</a></td><td><a id="SSC6">Soulshot Efficiency</a></td></tr>
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

<script>
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
	if (d.gI("COMBATC").checked==false)
		{d.gI("COMBAT").style.display='none'}
	else if (d.gI("COMBATC").checked==true)
		{d.gI("COMBAT").style.display='block'}
	if (d.gI("EDEBUFFSC").checked==false)
		{d.gI("EDEBUFFS").style.display='none'}
	else if (d.gI("EDEBUFFSC").checked==true)
		{d.gI("EDEBUFFS").style.display='block'}
	if (d.gI("ITEMSC").checked==false)
		{d.gI("ITEMS").style.display='none'}
	else if (d.gI("ITEMSC").checked==true)
		{d.gI("ITEMS").style.display='block'}
	if (d.gI("PASSIVESC").checked==false)
		{d.gI("PASSIVES").style.display='none'}
	else if (d.gI("PASSIVESC").checked==true)
		{d.gI("PASSIVES").style.display='block'}
	if (d.gI("BUFFSC").checked==false)
		{d.gI("BUFFS").style.display='none'}
	else if (d.gI("BUFFSC").checked==true)
		{d.gI("BUFFS").style.display='block'}
	if (d.gI("TOGGLESC").checked==false)
		{d.gI("TOGGLES").style.display='none'}
	else if (d.gI("TOGGLESC").checked==true)
		{d.gI("TOGGLES").style.display='block'}
	if (d.gI("DEBUFFSC").checked==false)
		{d.gI("DEBUFFS").style.display='none'}
	else if (d.gI("DEBUFFSC").checked==true)
		{d.gI("DEBUFFS").style.display='block'}
	if (d.gI("AUGSC").checked==false)
		{d.gI("AUGS1").style.display='none'
		d.gI("AUGS2").style.display='none'
		d.gI("AUGS3").style.display='none'
		d.gI("AUGS4").style.display='none'
		d.gI("AUGS5").style.display='none'}
	else if (d.gI("AUGSC").checked==true)
		{d.gI("AUGS1").style.display='block'
		d.gI("AUGS2").style.display='block'
		d.gI("AUGS3").style.display='block'
		d.gI("AUGS4").style.display='block'
		d.gI("AUGS5").style.display='block'}
	if (d.gI("SS").checked==false)
		{d.gI("SSC1").style.display='none'
		d.gI("SSC2").style.display='none'
		d.gI("SSC3").style.display='none'
		d.gI("SSC4").style.display='none'
		d.gI("SSC5").style.display='none'
		d.gI("SSC6").style.display='none'}
	if (d.gI("SS").checked==true)
		{d.gI("SSC1").style.display='block'
		d.gI("SSC2").style.display='block'
		d.gI("SSC3").style.display='block'
		d.gI("SSC4").style.display='block'
		d.gI("SSC5").style.display='block'
		d.gI("SSC6").style.display='block'}
}

function equipmentgrade(setbonus,setjewelry)
{
//Set Bonus Auto-Select
var fullset=d.gI("FULLSET").value
if (setbonus && fullset=="Draconic")
	{equipselect("HLMG=0;UPRG=0;GLVG=0;BOOG=0;HLMS=1;UPRS=1;BOOS=1;GLVS=1");}
else if (setbonus && fullset=="Imperial_Crusader")
	{equipselect("SHDG=0;HLMG=0;UPRG=0;LWRG=0;GLVG=0;BOOG=0;SHDS=1;HLMS=2;UPRS=2;LWRS=1;BOOS=2;GLVS=2");}
else if (setbonus && fullset=="Major_Arcana")
	{equipselect("HLMG=0;UPRG=0;GLVG=0;BOOG=0;HLMS=3;UPRS=3;BOOS=3;GLVS=3");}
else if (setbonus && fullset=="Apella_Heavy")
	{equipselect("HLMG=1;UPRG=1;GLVG=1;BOOG=1;HLMA=2;UPRA=3;BOOA=3;GLVA=1");}
else if (setbonus && fullset=="Apella_Light")
	{equipselect("HLMG=1;UPRG=1;GLVG=1;BOOG=1;HLMA=3;UPRA=1;BOOA=1;GLVA=2");}
else if (setbonus && fullset=="Apella_Robe")
	{equipselect("HLMG=1;UPRG=1;GLVG=1;BOOG=1;HLMA=1;UPRA=2;BOOA=2;GLVA=3");}
else if (setbonus && fullset=="Dark_Crystal_Heavy")
	{equipselect("SHDG=1;HLMG=1;UPRG=1;LWRG=1;GLVG=1;BOOG=1;SHDA=1;HLMA=4;UPRA=6;LWRA=1;BOOA=5;GLVA=4");}
else if (setbonus && fullset=="Dark_Crystal_Light")
	{equipselect("HLMG=1;UPRG=1;LWRG=1;GLVG=1;BOOG=1;HLMA=4;UPRA=5;LWRA=2;BOOA=5;GLVA=4");}
else if (setbonus && fullset=="Dark_Crystal_Robe")
	{equipselect("HLMG=1;UPRG=1;GLVG=1;BOOG=1;HLMA=4;UPRA=7;BOOA=5;GLVA=4");}
else if (setbonus && fullset=="Majestic_Heavy")
	{equipselect("HLMG=1;UPRG=1;GLVG=1;BOOG=1;HLMA=6;UPRA=9;BOOA=6;GLVA=6");}
else if (setbonus && fullset=="Majestic_Light")
	{equipselect("HLMG=1;UPRG=1;GLVG=1;BOOG=1;HLMA=6;UPRA=8;BOOA=6;GLVA=6");}
else if (setbonus && fullset=="Majestic_Robe")
	{equipselect("HLMG=1;UPRG=1;GLVG=1;BOOG=1;HLMA=6;UPRA=10;BOOA=6;GLVA=6");}
else if (setbonus && fullset=="Nightmare_Heavy")
	{equipselect("SHDG=1;HLMG=1;UPRG=1;GLVG=1;BOOG=1;SHDA=2;HLMA=5;UPRA=4;BOOA=4;GLVA=5");}
else if (setbonus && fullset=="Nightmare_Light")
	{equipselect("SHDG=1;HLMG=1;UPRG=1;GLVG=1;BOOG=1;SHDA=2;HLMA=5;UPRA=11;BOOA=4;GLVA=5");}
else if (setbonus && fullset=="Nightmare_Robe")
	{equipselect("SHDG=1;HLMG=1;UPRG=1;GLVG=1;BOOG=1;SHDA=2;HLMA=5;UPRA=12;BOOA=4;GLVA=5");}
else if (setbonus && fullset=="Tallum_Heavy")
	{equipselect("HLMG=1;UPRG=1;GLVG=1;BOOG=1;HLMA=7;UPRA=14;BOOA=7;GLVA=7");}
else if (setbonus && fullset=="Tallum_Light")
	{equipselect("HLMG=1;UPRG=1;GLVG=1;BOOG=1;HLMA=7;UPRA=13;BOOA=7;GLVA=7");}
else if (setbonus && fullset=="Tallum_Robe")
	{equipselect("HLMG=1;UPRG=1;LWRG=1;GLVG=1;BOOG=1;HLMA=7;UPRA=15;LWRA=3;BOOA=7;GLVA=7");}
else if (setbonus && fullset=="Avadon_Heavy")
	{equipselect("SHDG=2;HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;SHDB=1;HLMB=1;UPRB=1;LWRB=1;BOOB=1;GLVB=1");}
else if (setbonus && fullset=="Avadon_Light")
	{equipselect("HLMG=2;UPRG=2;GLVG=2;BOOG=2;HLMB=1;UPRB=2;BOOB=1;GLVB=1");}
else if (setbonus && fullset=="Avadon_Robe")
	{equipselect("HLMG=2;UPRG=2;GLVG=2;BOOG=2;HLMB=1;UPRB=3;BOOB=1;GLVB=1");}
else if (setbonus && fullset=="Blue_Wolf_Heavy")
	{equipselect("HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;HLMB=2;UPRB=4;LWRB=2;BOOB=2;GLVB=2");}
else if (setbonus && fullset=="Blue_Wolf_Light")
	{equipselect("HLMG=2;UPRG=2;GLVG=2;BOOG=2;HLMB=2;UPRB=5;BOOB=2;GLVB=2");}
else if (setbonus && fullset=="Blue_Wolf_Robe")
	{equipselect("HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;HLMB=2;UPRB=6;LWRB=3;BOOB=2;GLVB=2");}
else if (setbonus && fullset=="Doom_Heavy")
	{equipselect("SHDG=2;HLMG=2;UPRG=2;GLVG=2;BOOG=2;SHDB=2;HLMB=3;UPRB=7;BOOB=3;GLVB=3");}
else if (setbonus && fullset=="Doom_Light")
	{equipselect("HLMG=2;UPRG=2;GLVG=2;BOOG=2;HLMB=3;UPRB=8;BOOB=3;GLVB=3");}
else if (setbonus && fullset=="Doom_Robe")
	{equipselect("HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;HLMB=3;UPRB=9;LWRB=4;BOOB=3;GLVB=3");}
else if (setbonus && fullset=="Zubei_Heavy")
	{equipselect("SHDG=2;HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;SHDB=3;HLMB=4;UPRB=11;LWRB=6;BOOB=4;GLVB=4");}
else if (setbonus && fullset=="Zubei_Light")
	{equipselect("HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;HLMB=4;UPRB=12;LWRB=7;BOOB=4;GLVB=4");}
else if (setbonus && fullset=="Zubei_Robe")
	{equipselect("HLMG=2;UPRG=2;LWRG=2;GLVG=2;BOOG=2;HLMB=4;UPRB=10;LWRB=5;BOOB=4;GLVB=4");}
else if (setbonus && fullset=="Chain_Mail")
	{equipselect("SHDG=3;HLMG=3;UPRG=3;LWRG=3;SHDC=1;HLMC=1;UPRC=1;LWRC=1");}
else if (setbonus && fullset=="Composite")
	{equipselect("SHDG=3;HLMG=3;UPRG=3;SHDC=2;HLMC=2;UPRC=2");}
else if (setbonus && fullset=="Full_Plate")
	{equipselect("SHDG=3;HLMG=3;UPRG=3;SHDC=5;HLMC=3;UPRC=7");}
else if (setbonus && fullset=="Mithril_Light")
	{equipselect("UPRG=3;LWRG=3;BOOG=3;UPRC=9;LWRC=8;BOOC=11");}
else if (setbonus && fullset=="Plated_Leather")
	{equipselect("UPRG=3;LWRG=3;BOOG=3;UPRC=10;LWRC=6;BOOC=12");}
else if (setbonus && fullset=="Theca")
	{equipselect("UPRG=3;LWRG=3;BOOG=3;UPRC=13;LWRC=9;BOOC=14");}
else if (setbonus && fullset=="Drake")
	{equipselect("UPRG=3;BOOG=3;UPRC=5;BOOC=7");}
else if (setbonus && fullset=="Karmian")
	{equipselect("UPRG=3;LWRG=3;GLVG=3;UPRC=8;LWRC=5;GLVC=8");}
else if (setbonus && fullset=="Demon")
	{equipselect("UPRG=3;LWRG=3;GLVG=3;UPRC=3;LWRC=2;GLVC=2");}
else if (setbonus && fullset=="Divine")
	{equipselect("UPRG=3;LWRG=3;GLVG=3;UPRC=4;LWRC=3;GLVC=3");}
else if (setbonus && fullset=="CL_Oath_Heavy")
	{equipselect("HLMG=4;UPRG=4;BOOG=4;GLVG=4;HLMD=5;UPRD=5;BOOD=7;GLVD=2");}
else if (setbonus && fullset=="CL_Oath_Light")
	{equipselect("HLMG=4;UPRG=4;BOOG=4;GLVG=4;HLMD=6;UPRD=4;BOOD=6;GLVD=3");}
else if (setbonus && fullset=="CL_Oath_Robe")
	{equipselect("HLMG=4;UPRG=4;BOOG=4;GLVG=4;HLMD=4;UPRD=3;BOOD=8;GLVD=4");}
else if (setbonus && fullset=="Mithril_Heavy")
	{equipselect("SHDG=4;HLMG=4;UPRG=4;LWRG=4;SHDD=4;HLMD=7;UPRD=14;LWRD=11");}
else if (setbonus && fullset=="Brigandine")
	{equipselect("SHDG=4;HLMG=4;UPRG=4;LWRG=4;SHDD=2;HLMD=2;UPRD=2;LWRD=1");}
else if (setbonus && fullset=="Reinforced_Leather")
	{equipselect("UPRG=4;LWRG=4;BOOG=4;UPRD=18;LWRD=17;BOOD=14");}
else if (setbonus && fullset=="Manticore")
	{equipselect("UPRG=4;LWRG=4;BOOG=4;UPRD=12;LWRD=9;BOOD=12");}
else if (setbonus && fullset=="Knowledge")
	{equipselect("UPRG=4;LWRG=4;GLVG=4;UPRD=23;LWRD=19;GLVD=8");}
else if (setbonus && fullset=="Elven_Mithril")
	{equipselect("UPRG=4;LWRG=4;GLVG=4;UPRD=15;LWRD=13;GLVD=5");}
else if (setbonus && fullset=="Devotion")
	{equipselect("HLMG=5;UPRG=5;LWRG=5;HLMN=4;UPRN=14;LWRN=14");}
else if (setbonus && fullset=="Wooden")
	{equipselect("HLMG=5;UPRG=5;LWRG=5;HLMN=5;UPRN=16;LWRN=16");}
var fullmdef=d.gI("FULLMDEF").value
if (setjewelry && fullmdef=="Unsealed_Tateossian")
	{equipselect("NCKG=0;EAR1G=0;EAR2G=0;RNG1G=0;RNG2G=0;NCKS=3;EAR1S=3;EAR2S=3;RNG1S=3;RNG2S=3");}
else if (setjewelry && fullmdef=="Sealed_Tateossian")
	{equipselect("NCKG=0;EAR1G=0;EAR2G=0;RNG1G=0;RNG2G=0;NCKS=2;EAR1S=2;EAR2S=2;RNG1S=2;RNG2S=2");}
else if (setjewelry && fullmdef=="Unsealed_Majestic")
	{equipselect("NCKG=1;EAR1G=1;EAR2G=1;RNG1G=1;RNG2G=1;NCKA=2;EAR1A=2;EAR2A=2;RNG1A=1;RNG2A=1");}
else if (setjewelry && fullmdef=="Sealed_Majestic")
	{equipselect("NCKG=1;EAR1G=1;EAR2G=1;RNG1G=1;RNG2G=1;NCKA=4;EAR1A=4;EAR2A=4;RNG1A=4;RNG2A=4");}
else if (setjewelry && fullmdef=="Black_Ore")
	{equipselect("NCKG=2;EAR1G=2;EAR2G=2;RNG1G=2;RNG2G=2;NCKB=2;EAR1B=2;EAR2B=2;RNG1B=2;RNG2B=2");}
else if (setjewelry && fullmdef=="Top_C")
	{equipselect("NCKG=3;EAR1G=3;EAR2G=3;RNG1G=3;RNG2G=3;NCKC=2;EAR1C=4;EAR2C=4;RNG1C=3;RNG2C=3");}
else if (setjewelry && fullmdef=="Top_Lux")
	{equipselect("NCKG=3;EAR1G=3;EAR2G=3;RNG1G=3;RNG2G=3;NCKC=3;EAR1C=1;EAR2C=1;RNG1C=2;RNG2C=2");}
else if (setjewelry && fullmdef=="Top_D")
	{equipselect("NCKG=4;EAR1G=4;EAR2G=4;RNG1G=4;RNG2G=4;NCKD=4;EAR1D=3;EAR2D=3;RNG1D=4;RNG2D=4");}
else if (setjewelry && fullmdef=="Elven")
	{equipselect("NCKG=4;EAR1G=4;EAR2G=4;RNG1G=4;RNG2G=4;NCKD=1;EAR1D=1;EAR2D=1;RNG1D=2;RNG2D=2");}
else if (setjewelry && fullmdef=="Top_Non")
	{equipselect("NCKG=5;EAR1G=5;EAR2G=5;RNG1G=5;RNG2G=5;NCKN=1;EAR1N=3;EAR2N=3;RNG1N=1;RNG2N=1");}

//Weapon hide/unhide stuff
var weapongrade=d.gI("WPNG").value
weapongrade=GRADE[weapongrade]
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
var shieldgrade=d.gI("SHDG").value
shieldgrade=GRADE[shieldgrade]
if (shieldgrade=="S")
	{modifystyles("SHDS=block;SHDA=none;SHDB=none;SHDC=none;SHDD=none;SHDN=none")}
else if (shieldgrade=="A")
	{modifystyles("SHDS=none;SHDA=block;SHDB=none;SHDC=none;SHDD=none;SHDN=none")}
else if (shieldgrade=="B")
	{modifystyles("SHDS=none;SHDA=none;SHDB=block;SHDC=none;SHDD=none;SHDN=none")}
else if (shieldgrade=="C")
	{modifystyles("SHDS=none;SHDA=none;SHDB=none;SHDC=block;SHDD=none;SHDN=none")}
else if (shieldgrade=="D")
	{modifystyles("SHDS=none;SHDA=none;SHDB=none;SHDC=none;SHDD=block;SHDN=none")}
else if (shieldgrade=="N")
	{modifystyles("SHDS=none;SHDA=none;SHDB=none;SHDC=none;SHDD=none;SHDN=block")}

//Helmet hide/unhide stuff
var helmetgrade=d.gI("HLMG").value
helmetgrade=GRADE[helmetgrade]
if (helmetgrade=="S")
	{modifystyles("HLMS=block;HLMA=none;HLMB=none;HLMC=none;HLMD=none;HLMN=none")}
else if (helmetgrade=="A")
	{modifystyles("HLMS=none;HLMA=block;HLMB=none;HLMC=none;HLMD=none;HLMN=none")}
else if (helmetgrade=="B")
	{modifystyles("HLMS=none;HLMA=none;HLMB=block;HLMC=none;HLMD=none;HLMN=none")}
else if (helmetgrade=="C")
	{modifystyles("HLMS=none;HLMA=none;HLMB=none;HLMC=block;HLMD=none;HLMN=none")}
else if (helmetgrade=="D")
	{modifystyles("HLMS=none;HLMA=none;HLMB=none;HLMC=none;HLMD=block;HLMN=none")}
else if (helmetgrade=="N")
	{modifystyles("HLMS=none;HLMA=none;HLMB=none;HLMC=none;HLMD=none;HLMN=block")}

//Body (Lower) hide/unhide stuff
var lowergrade=d.gI("LWRG").value
lowergrade=GRADE[lowergrade]
if (lowergrade=="S")
	{modifystyles("LWRS=block;LWRA=none;LWRB=none;LWRC=none;LWRD=none;LWRN=none")}
else if (lowergrade=="A")
	{modifystyles("LWRS=none;LWRA=block;LWRB=none;LWRC=none;LWRD=none;LWRN=none")}
else if (lowergrade=="B")
	{modifystyles("LWRS=none;LWRA=none;LWRB=block;LWRC=none;LWRD=none;LWRN=none")}
else if (lowergrade=="C")
	{modifystyles("LWRS=none;LWRA=none;LWRB=none;LWRC=block;LWRD=none;LWRN=none")}
else if (lowergrade=="D")
	{modifystyles("LWRS=none;LWRA=none;LWRB=none;LWRC=none;LWRD=block;LWRN=none")}
else if (lowergrade=="N")
	{modifystyles("LWRS=none;LWRA=none;LWRB=none;LWRC=none;LWRD=none;LWRN=block")}

//Body (Upper) hide/unhide stuff
var uppergrade=d.gI("UPRG").value
uppergrade=GRADE[uppergrade]
if (uppergrade=="S")
	{modifystyles("UPRS=block;UPRA=none;UPRB=none;UPRC=none;UPRD=none;UPRN=none")}
else if (uppergrade=="A")
	{modifystyles("UPRS=none;UPRA=block;UPRB=none;UPRC=none;UPRD=none;UPRN=none")}
else if (uppergrade=="B")
	{modifystyles("UPRS=none;UPRA=none;UPRB=block;UPRC=none;UPRD=none;UPRN=none")}
else if (uppergrade=="C")
	{modifystyles("UPRS=none;UPRA=none;UPRB=none;UPRC=block;UPRD=none;UPRN=none")}
else if (uppergrade=="D")
	{modifystyles("UPRS=none;UPRA=none;UPRB=none;UPRC=none;UPRD=block;UPRN=none")}
else if (uppergrade=="N")
	{modifystyles("UPRS=none;UPRA=none;UPRB=none;UPRC=none;UPRD=none;UPRN=block")}

//Glove hide/unhide stuff
var glovegrade=d.gI("GLVG").value
glovegrade=GRADE[glovegrade]
if (glovegrade=="S")
	{modifystyles("GLVS=block;GLVA=none;GLVB=none;GLVC=none;GLVD=none;GLVN=none")}
else if (glovegrade=="A")
	{modifystyles("GLVS=none;GLVA=block;GLVB=none;GLVC=none;GLVD=none;GLVN=none")}
else if (glovegrade=="B")
	{modifystyles("GLVS=none;GLVA=none;GLVB=block;GLVC=none;GLVD=none;GLVN=none")}
else if (glovegrade=="C")
	{modifystyles("GLVS=none;GLVA=none;GLVB=none;GLVC=block;GLVD=none;GLVN=none")}
else if (glovegrade=="D")
	{modifystyles("GLVS=none;GLVA=none;GLVB=none;GLVC=none;GLVD=block;GLVN=none")}
else if (glovegrade=="N")
	{modifystyles("GLVS=none;GLVA=none;GLVB=none;GLVC=none;GLVD=none;GLVN=block")}

//Boot hide/unhide stuff
var bootgrade=d.gI("BOOG").value
bootgrade=GRADE[bootgrade]
if (bootgrade=="S")
	{modifystyles("BOOS=block;BOOA=none;BOOB=none;BOOC=none;BOOD=none;BOON=none")}
else if (bootgrade=="A")
	{modifystyles("BOOS=none;BOOA=block;BOOB=none;BOOC=none;BOOD=none;BOON=none")}
else if (bootgrade=="B")
	{modifystyles("BOOS=none;BOOA=none;BOOB=block;BOOC=none;BOOD=none;BOON=none")}
else if (bootgrade=="C")
	{modifystyles("BOOS=none;BOOA=none;BOOB=none;BOOC=block;BOOD=none;BOON=none")}
else if (bootgrade=="D")
	{modifystyles("BOOS=none;BOOA=none;BOOB=none;BOOC=none;BOOD=block;BOON=none")}
else if (bootgrade=="N")
	{modifystyles("BOOS=none;BOOA=none;BOOB=none;BOOC=none;BOOD=none;BOON=block")}

//Necklace hide/unhide stuff
var necklacegrade=d.gI("NCKG").value
necklacegrade=GRADE[necklacegrade]
if (necklacegrade=="S")
	{modifystyles("NCKS=block;NCKA=none;NCKB=none;NCKC=none;NCKD=none;NCKN=none")}
else if (necklacegrade=="A")
	{modifystyles("NCKS=none;NCKA=block;NCKB=none;NCKC=none;NCKD=none;NCKN=none")}
else if (necklacegrade=="B")
	{modifystyles("NCKS=none;NCKA=none;NCKB=block;NCKC=none;NCKD=none;NCKN=none")}
else if (necklacegrade=="C")
	{modifystyles("NCKS=none;NCKA=none;NCKB=none;NCKC=block;NCKD=none;NCKN=none")}
else if (necklacegrade=="D")
	{modifystyles("NCKS=none;NCKA=none;NCKB=none;NCKC=none;NCKD=block;NCKN=none")}
else if (necklacegrade=="N")
	{modifystyles("NCKS=none;NCKA=none;NCKB=none;NCKC=none;NCKD=none;NCKN=block")}

//Earring1 hide/unhide stuff
var earring1grade=d.gI("EAR1G").value
earring1grade=GRADE[earring1grade]
if (earring1grade=="S")
	{modifystyles("EAR1S=block;EAR1A=none;EAR1B=none;EAR1C=none;EAR1D=none;EAR1N=none")}
else if (earring1grade=="A")
	{modifystyles("EAR1S=none;EAR1A=block;EAR1B=none;EAR1C=none;EAR1D=none;EAR1N=none")}
else if (earring1grade=="B")
	{modifystyles("EAR1S=none;EAR1A=none;EAR1B=block;EAR1C=none;EAR1D=none;EAR1N=none")}
else if (earring1grade=="C")
	{modifystyles("EAR1S=none;EAR1A=none;EAR1B=none;EAR1C=block;EAR1D=none;EAR1N=none")}
else if (earring1grade=="D")
	{modifystyles("EAR1S=none;EAR1A=none;EAR1B=none;EAR1C=none;EAR1D=block;EAR1N=none")}
else if (earring1grade=="N")
	{modifystyles("EAR1S=none;EAR1A=none;EAR1B=none;EAR1C=none;EAR1D=none;EAR1N=block")}

//Earring2 hide/unhide stuff
var earring2grade=d.gI("EAR2G").value
earring2grade=GRADE[earring2grade]
if (earring2grade=="S")
	{modifystyles("EAR2S=block;EAR2A=none;EAR2B=none;EAR2C=none;EAR2D=none;EAR2N=none")}
else if (earring2grade=="A")
	{modifystyles("EAR2S=none;EAR2A=block;EAR2B=none;EAR2C=none;EAR2D=none;EAR2N=none")}
else if (earring2grade=="B")
	{modifystyles("EAR2S=none;EAR2A=none;EAR2B=block;EAR2C=none;EAR2D=none;EAR2N=none")}
else if (earring2grade=="C")
	{modifystyles("EAR2S=none;EAR2A=none;EAR2B=none;EAR2C=block;EAR2D=none;EAR2N=none")}
else if (earring2grade=="D")
	{modifystyles("EAR2S=none;EAR2A=none;EAR2B=none;EAR2C=none;EAR2D=block;EAR2N=none")}
else if (earring2grade=="N")
	{modifystyles("EAR2S=none;EAR2A=none;EAR2B=none;EAR2C=none;EAR2D=none;EAR2N=block")}

//Ring1 hide/unhide stuff
var ring1grade=d.gI("RNG1G").value
ring1grade=GRADE[ring1grade]
if (ring1grade=="S")
	{modifystyles("RNG1S=block;RNG1A=none;RNG1B=none;RNG1C=none;RNG1D=none;RNG1N=none")}
else if (ring1grade=="A")
	{modifystyles("RNG1S=none;RNG1A=block;RNG1B=none;RNG1C=none;RNG1D=none;RNG1N=none")}
else if (ring1grade=="B")
	{modifystyles("RNG1S=none;RNG1A=none;RNG1B=block;RNG1C=none;RNG1D=none;RNG1N=none")}
else if (ring1grade=="C")
	{modifystyles("RNG1S=none;RNG1A=none;RNG1B=none;RNG1C=block;RNG1D=none;RNG1N=none")}
else if (ring1grade=="D")
	{modifystyles("RNG1S=none;RNG1A=none;RNG1B=none;RNG1C=none;RNG1D=block;RNG1N=none")}
else if (ring1grade=="N")
	{modifystyles("RNG1S=none;RNG1A=none;RNG1B=none;RNG1C=none;RNG1D=none;RNG1N=block")}

//Ring2 hide/unhide stuff
var ring2grade=d.gI("RNG2G").value
ring2grade=GRADE[ring2grade]
if (ring2grade=="S")
	{modifystyles("RNG2S=block;RNG2A=none;RNG2B=none;RNG2C=none;RNG2D=none;RNG2N=none")}
else if (ring2grade=="A")
	{modifystyles("RNG2S=none;RNG2A=block;RNG2B=none;RNG2C=none;RNG2D=none;RNG2N=none")}
else if (ring2grade=="B")
	{modifystyles("RNG2S=none;RNG2A=none;RNG2B=block;RNG2C=none;RNG2D=none;RNG2N=none")}
else if (ring2grade=="C")
	{modifystyles("RNG2S=none;RNG2A=none;RNG2B=none;RNG2C=block;RNG2D=none;RNG2N=none")}
else if (ring2grade=="D")
	{modifystyles("RNG2S=none;RNG2A=none;RNG2B=none;RNG2C=none;RNG2D=block;RNG2N=none")}
else if (ring2grade=="N")
	{modifystyles("RNG2S=none;RNG2A=none;RNG2B=none;RNG2C=none;RNG2D=none;RNG2N=block")}
}

function classskills()
{
//Racial Stats
var JOB=d.gI("job").value
JOB=PROFESSIONS[JOB]
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
	d.gI("BTB2C").style.display = 'block'
	d.gI("BTB2").style.display = 'block'
	d.gI("BTB1C").checked=false
	d.gI("BTB1C").style.display = 'none'
	d.gI("BTB1").style.display = 'none'
	d.gI("BTB3C").checked=false
	d.gI("BTB3C").style.display = 'none'
	d.gI("BTB3").style.display = 'none'
	}
else if (JOB=="WD"||JOB=="DE")
	{
	d.gI("BTB3C").style.display = 'block'
	d.gI("BTB3").style.display = 'block'
	d.gI("BTB1C").checked=false
	d.gI("BTB1C").style.display = 'none'
	d.gI("BTB1").style.display = 'none'
	d.gI("BTB2C").checked=false
	d.gI("BTB2C").style.display = 'none'
	d.gI("BTB2").style.display = 'none'
	}
else
	{
	d.gI("BTB1C").style.display = 'block'
	d.gI("BTB1").style.display = 'block'
	d.gI("BTB2C").checked=false
	d.gI("BTB2C").style.display = 'none'
	d.gI("BTB2").style.display = 'none'
	d.gI("BTB3C").checked=false
	d.gI("BTB3C").style.display = 'none'
	d.gI("BTB3").style.display = 'none'
	}
if (JOB=="HE"||JOB=="SR"||JOB=="PR")
	{
	d.gI("SAGC").style.display = 'block'
	d.gI("SAG").style.display = 'block'
	d.gI("ARCC").style.display = 'block'
	d.gI("ARC").style.display = 'block'
	}
else
	{
	d.gI("SAGC").checked=false
	d.gI("SAGC").style.display = 'none'
	d.gI("SAG").style.display = 'none'
	d.gI("ARCC").checked=false
	d.gI("ARCC").style.display = 'none'
	d.gI("ARC").style.display = 'none'
	}
if (race=="DF"||race=="EF")
	{
	d.gI("MT1C").checked=false
	d.gI("MT1C").style.display = 'none'
	d.gI("MT1").style.display = 'none'
	d.gI("MT2C").style.display = 'block'
	d.gI("MT2").style.display = 'block'
	d.gI("SHD1C").checked=false
	d.gI("SHD1C").style.display = 'none'
	d.gI("SHD1").style.display = 'none'
	d.gI("SHD2C").style.display = 'block'
	d.gI("SHD2").style.display = 'block'
	}
else
	{
	d.gI("MT2C").checked=false
	d.gI("MT2C").style.display = 'none'
	d.gI("MT2").style.display = 'none'
	d.gI("MT1C").style.display = 'block'
	d.gI("MT1").style.display = 'block'
	d.gI("SHD2C").checked=false
	d.gI("SHD2C").style.display = 'none'
	d.gI("SHD2").style.display = 'none'
	d.gI("SHD1C").style.display = 'block'
	d.gI("SHD1").style.display = 'block'
	}
if (JOB=="TK"||JOB=="SW"||JOB=="SR"||JOB=="PW")
	{
	d.gI("MB1C").checked=false
	d.gI("MB1C").style.display = 'none'
	d.gI("MB1").style.display = 'none'
	d.gI("MB2C").style.display = 'block'
	d.gI("MB2").style.display = 'block'
	d.gI("MB3C").checked=false
	d.gI("MB3C").style.display = 'none'
	d.gI("MB3").style.display = 'none'
	}
else if (JOB=="DA"||JOB=="PA")
	{
	d.gI("MB1C").checked=false
	d.gI("MB1C").style.display = 'none'
	d.gI("MB1").style.display = 'none'
	d.gI("MB2C").checked=false
	d.gI("MB2C").style.display = 'none'
	d.gI("MB2").style.display = 'none'
	d.gI("MB3C").style.display = 'block'
	d.gI("MB3").style.display = 'block'
	}
else
	{
	d.gI("MB2C").checked=false
	d.gI("MB2C").style.display = 'none'
	d.gI("MB2").style.display = 'none'
	d.gI("MB1C").style.display = 'block'
	d.gI("MB1").style.display = 'block'
	d.gI("MB3C").checked=false
	d.gI("MB3C").style.display = 'none'
	d.gI("MB3").style.display = 'none'
	}
if (JOB=="OR")
	{
	d.gI("FZY1C").style.display = 'block'
	d.gI("FZY1").style.display = 'block'
	d.gI("FZY2C").checked=false
	d.gI("FZY2C").style.display = 'none'
	d.gI("FZY2").style.display = 'none'
	d.gI("RGE1C").style.display = 'block'
	d.gI("RGE1").style.display = 'block'
	d.gI("RGE2C").checked=false
	d.gI("RGE2C").style.display = 'none'
	d.gI("RGE2").style.display = 'none'
	d.gI("GTS1C").style.display = 'block'
	d.gI("GTS1").style.display = 'block'
	d.gI("GTS2C").checked=false
	d.gI("GTS2C").style.display = 'none'
	d.gI("GTS2").style.display = 'none'
	}
else if (JOB=="DE")
	{
	d.gI("FZY2C").style.display = 'block'
	d.gI("FZY2").style.display = 'block'
	d.gI("FZY1C").checked=false
	d.gI("FZY1C").style.display = 'none'
	d.gI("FZY1").style.display = 'none'
	d.gI("RGE2C").style.display = 'block'
	d.gI("RGE2").style.display = 'block'
	d.gI("RGE1C").checked=false
	d.gI("RGE1C").style.display = 'none'
	d.gI("RGE1").style.display = 'none'
	d.gI("GTS2C").style.display = 'block'
	d.gI("GTS2").style.display = 'block'
	d.gI("GTS1C").checked=false
	d.gI("GTS1C").style.display = 'none'
	d.gI("GTS1").style.display = 'none'
	}
else
	{
	d.gI("FZY1C").checked=false
	d.gI("FZY1C").style.display = 'none'
	d.gI("FZY1").style.display = 'none'
	d.gI("FZY2C").checked=false
	d.gI("FZY2C").style.display = 'none'
	d.gI("FZY2").style.display = 'none'
	d.gI("RGE1C").checked=false
	d.gI("RGE1C").style.display = 'none'
	d.gI("RGE1").style.display = 'none'
	d.gI("RGE2C").checked=false
	d.gI("RGE2C").style.display = 'none'
	d.gI("RGE2").style.display = 'none'
	d.gI("GTS1C").checked=false
	d.gI("GTS1C").style.display = 'none'
	d.gI("GTS1").style.display = 'none'
	d.gI("GTS2C").checked=false
	d.gI("GTS2C").style.display = 'none'
	d.gI("GTS2").style.display = 'none'
	}
if (JOB=="WA"||JOB=="WD")
	{
	d.gI("WCY1C").style.display = 'block'
	d.gI("WCY1").style.display = 'block'
	d.gI("WCY2C").checked=false
	d.gI("WCY2C").style.display = 'none'
	d.gI("WCY2").style.display = 'none'
	}
else if (JOB=="GL")
	{
	d.gI("WCY2C").style.display = 'block'
	d.gI("WCY2").style.display = 'block'
	d.gI("WCY1C").checked=false
	d.gI("WCY1C").style.display = 'none'
	d.gI("WCY1").style.display = 'none'
	}
else
	{
	d.gI("WCY1C").checked=false
	d.gI("WCY1C").style.display = 'none'
	d.gI("WCY1").style.display = 'none'
	d.gI("WCY2C").checked=false
	d.gI("WCY2C").style.display = 'none'
	d.gI("WCY2").style.display = 'none'
	}
if (JOB=="HK")
	{
	d.gI("MAJ1C").style.display = 'block'
	d.gI("MAJ1").style.display = 'block'
	d.gI("MAJ2C").checked=false
	d.gI("MAJ2C").style.display = 'none'
	d.gI("MAJ2").style.display = 'none'
	}
else if (JOB=="PA"||JOB=="DA")
	{
	d.gI("MAJ2C").style.display = 'block'
	d.gI("MAJ2").style.display = 'block'
	d.gI("MAJ1C").checked=false
	d.gI("MAJ1C").style.display = 'none'
	d.gI("MAJ1").style.display = 'none'
	}
else
	{
	d.gI("MAJ1C").checked=false
	d.gI("MAJ1C").style.display = 'none'
	d.gI("MAJ1").style.display = 'none'
	d.gI("MAJ2C").checked=false
	d.gI("MAJ2C").style.display = 'none'
	d.gI("MAJ2").style.display = 'none'
	}
if (JOB=="HE")
	{
	d.gI("HEC").style.display = 'block'
	d.gI("HE").style.display = 'block'
	}
else
	{
	d.gI("HEC").checked=false
	d.gI("HEC").style.display = 'none'
	d.gI("HE").style.display = 'none'
	}
if (JOB=="HE"||JOB=="TH"||JOB=="SR"||JOB=="PW"||JOB=="PR"||JOB=="AW")
	{
	d.gI("UEC").style.display = 'block'
	d.gI("UE").style.display = 'block'
	}
else
	{
	d.gI("UEC").checked=false
	d.gI("UEC").style.display = 'none'
	d.gI("UE").style.display = 'none'
	}
if (JOB=="HE"||JOB=="TH"||JOB=="SR"||JOB=="PW"||JOB=="PR"||JOB=="AW"||JOB=="GL"||JOB=="WD"||JOB=="DE")
	{
	d.gI("VSC").style.display = 'block'
	d.gI("VS").style.display = 'block'
	}
else
	{
	d.gI("VSC").checked=false
	d.gI("VSC").style.display = 'none'
	d.gI("VS").style.display = 'none'
	}
if (JOB=="SR"||JOB=="PR")
	{
	d.gI("EVSC").style.display = 'block'
	d.gI("EVS").style.display = 'block'
	}
else
	{
	d.gI("EVSC").checked=false
	d.gI("EVSC").style.display = 'none'
	d.gI("EVS").style.display = 'none'
	}
if (JOB=="HE"||JOB=="RO")
	{
	d.gI("DAS1C").style.display = 'block'
	d.gI("DAS1").style.display = 'block'
	d.gI("DAS2C").checked=false
	d.gI("DAS2C").style.display = 'none'
	d.gI("DAS2").style.display = 'none'
	}
else if (JOB=="TH")
	{
	d.gI("DAS2C").style.display = 'block'
	d.gI("DAS2").style.display = 'block'
	d.gI("DAS1C").checked=false
	d.gI("DAS1C").style.display = 'none'
	d.gI("DAS1").style.display = 'none'
	}
else
	{
	d.gI("DAS1C").checked=false
	d.gI("DAS1C").style.display = 'none'
	d.gI("DAS1").style.display = 'none'
	d.gI("DAS2C").checked=false
	d.gI("DAS2C").style.display = 'none'
	d.gI("DAS2").style.display = 'none'
	}
if (JOB=="PW"||JOB=="AW")
	{
	d.gI("BLDC").style.display = 'block'
	d.gI("BLD").style.display = 'block'
	}
else
	{
	d.gI("BLDC").checked=false
	d.gI("BLDC").style.display = 'none'
	d.gI("BLD").style.display = 'none'
	}
if (JOB=="TH"||JOB=="PW"||JOB=="AW")
	{
	d.gI("RPD1C").style.display = 'block'
	d.gI("RPD1").style.display = 'block'
	d.gI("RPD2C").checked=false
	d.gI("RPD2C").style.display = 'none'
	d.gI("RPD2").style.display = 'none'
	}
else if (JOB=="HE"||JOB=="SR"||JOB=="PR")
	{
	d.gI("RPD2C").style.display = 'block'
	d.gI("RPD2").style.display = 'block'
	d.gI("RPD1C").checked=false
	d.gI("RPD1C").style.display = 'none'
	d.gI("RPD1").style.display = 'none'
	}
else
	{
	d.gI("RPD1C").checked=false
	d.gI("RPD1C").style.display = 'none'
	d.gI("RPD1").style.display = 'none'
	d.gI("RPD2C").checked=false
	d.gI("RPD2C").style.display = 'none'
	d.gI("RPD2").style.display = 'none'
	}
if (JOB=="GL")
	{
	d.gI("DUELC").style.display = 'block'
	d.gI("DUEL").style.display = 'block'
	}
else
	{
	d.gI("DUELC").checked=false
	d.gI("DUELC").style.display = 'none'
	d.gI("DUEL").style.display = 'none'
	}
if (JOB=="WD")
	{
	d.gI("TFC").style.display = 'block'
	d.gI("TF").style.display = 'block'
	}
else
	{
	d.gI("TFC").checked=false
	d.gI("TFC").style.display = 'none'
	d.gI("TF").style.display = 'none'
	}
if (JOB=="HK"||JOB=="EK"||JOB=="SW"||JOB=="PK"||JOB=="BD")
	{
	d.gI("UD1C").style.display = 'block'
	d.gI("UD1").style.display = 'block'
	d.gI("UD2C").checked=false
	d.gI("UD2C").style.display = 'none'
	d.gI("UD2").style.display = 'none'
	d.gI("SFC").checked=false
	d.gI("SFC").style.display = 'none'
	d.gI("SF").style.display = 'none'
	}
else if (JOB=="PA"||JOB=="DA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("UD2C").style.display = 'block'
	d.gI("UD2").style.display = 'block'
	d.gI("UD1C").checked=false
	d.gI("UD1C").style.display = 'none'
	d.gI("UD1").style.display = 'none'
	d.gI("SFC").style.display = 'block'
	d.gI("SF").style.display = 'block'
	}
else
	{
	d.gI("UD1C").checked=false
	d.gI("UD1C").style.display = 'none'
	d.gI("UD1").style.display = 'none'
	d.gI("UD2C").checked=false
	d.gI("UD2C").style.display = 'none'
	d.gI("UD2").style.display = 'none'
	d.gI("SFC").checked=false
	d.gI("SFC").style.display = 'none'
	d.gI("SF").style.display = 'none'
	}
if (JOB=="HK"||JOB=="EK"||JOB=="PK")
	{
	d.gI("FCM1C").style.display = 'block'
	d.gI("FCM1").style.display = 'block'
	d.gI("FCM2C").checked=false
	d.gI("FCM2C").style.display = 'none'
	d.gI("FCM2").style.display = 'none'
	}
else if (JOB=="PA"||JOB=="DA"||JOB=="TK"||JOB=="SK"||JOB=="SW"||JOB=="BD")
	{
	d.gI("FCM2C").style.display = 'block'
	d.gI("FCM2").style.display = 'block'
	d.gI("FCM1C").checked=false
	d.gI("FCM1C").style.display = 'none'
	d.gI("FCM1").style.display = 'none'
	}
else
	{
	d.gI("FCM1C").checked=false
	d.gI("FCM1C").style.display = 'none'
	d.gI("FCM1").style.display = 'none'
	d.gI("FCM2C").checked=false
	d.gI("FCM2C").style.display = 'none'
	d.gI("FCM2").style.display = 'none'
	}
if (JOB=="PR")
	{
	d.gI("DEYC").style.display = 'block'
	d.gI("DEY").style.display = 'block'
	}
else
	{
	d.gI("DEYC").checked=false
	d.gI("DEYC").style.display = 'none'
	d.gI("DEY").style.display = 'none'
	}
if (JOB=="MO")
	{
	d.gI("TTM1C").style.display = 'block'
	d.gI("TTM1").style.display = 'block'
	d.gI("TTM2C").checked=false
	d.gI("TTM2C").style.display = 'none'
	d.gI("TTM2").style.display = 'none'
	}
else if (JOB=="TY")
	{
	d.gI("TTM2C").style.display = 'block'
	d.gI("TTM2").style.display = 'block'
	d.gI("TTM1C").checked=false
	d.gI("TTM1C").style.display = 'none'
	d.gI("TTM1").style.display = 'none'
	}
else
	{
	d.gI("TTM1C").checked=false
	d.gI("TTM1C").style.display = 'none'
	d.gI("TTM1").style.display = 'none'
	d.gI("TTM2C").checked=false
	d.gI("TTM2C").style.display = 'none'
	d.gI("TTM2").style.display = 'none'
	}
if (JOB=="HE")
	{
	d.gI("SNIC").style.display = 'block'
	d.gI("SNI").style.display = 'block'
	}
else
	{
	d.gI("SNIC").checked=false
	d.gI("SNIC").style.display = 'none'
	d.gI("SNI").style.display = 'none'
	}
if (JOB=="OL"||JOB=="SOR"||JOB=="SPS"||JOB=="NE"||JOB=="SPH")
	{
	d.gI("ARPC").style.display = 'block'
	d.gI("ARP").style.display = 'block'
	}
else
	{
	d.gI("ARPC").checked=false
	d.gI("ARPC").style.display = 'none'
	d.gI("ARP").style.display = 'none'
	}
if (JOB=="OM")
	{
	d.gI("SL1C").style.display = 'block'
	d.gI("SL1").style.display = 'block'
	d.gI("SL2C").checked=false
	d.gI("SL2C").style.display = 'none'
	d.gI("SL2").style.display = 'none'
	d.gI("SL3C").checked=false
	d.gI("SL3C").style.display = 'none'
	d.gI("SL3").style.display = 'none'
	}
else if (JOB=="OS")
	{
	d.gI("SL2C").style.display = 'block'
	d.gI("SL2").style.display = 'block'
	d.gI("SL1C").checked=false
	d.gI("SL1C").style.display = 'none'
	d.gI("SL1").style.display = 'none'
	d.gI("SL3C").checked=false
	d.gI("SL3C").style.display = 'none'
	d.gI("SL3").style.display = 'none'
	}
else if (JOB=="OL"||JOB=="WC")
	{
	d.gI("SL3C").style.display = 'block'
	d.gI("SL3").style.display = 'block'
	d.gI("SL1C").checked=false
	d.gI("SL1C").style.display = 'none'
	d.gI("SL1").style.display = 'none'
	d.gI("SL2C").checked=false
	d.gI("SL2C").style.display = 'none'
	d.gI("SL2").style.display = 'none'
	}
else
	{
	d.gI("SL1C").checked=false
	d.gI("SL1C").style.display = 'none'
	d.gI("SL1").style.display = 'none'
	d.gI("SL2C").checked=false
	d.gI("SL2C").style.display = 'none'
	d.gI("SL2").style.display = 'none'
	d.gI("SL3C").checked=false
	d.gI("SL3C").style.display = 'none'
	d.gI("SL3").style.display = 'none'
	}
if (JOB=="SK"||JOB=="TK")
	{
	d.gI("GSC").style.display = 'block'
	d.gI("GS").style.display = 'block'
	d.gI("AGSC").style.display = 'block'
	d.gI("AGS").style.display = 'block'
	}
else
	{
	d.gI("GSC").checked=false
	d.gI("GSC").style.display = 'none'
	d.gI("GS").style.display = 'none'
	d.gI("AGSC").checked=false
	d.gI("AGSC").style.display = 'none'
	d.gI("AGS").style.display = 'none'
	}
if (JOB=="OL")
	{
	d.gI("SGC").style.display = 'block'
	d.gI("SG").style.display = 'block'
	}
else
	{
	d.gI("SGC").checked=false
	d.gI("SGC").style.display = 'none'
	d.gI("SG").style.display = 'none'
	}
if (JOB=="DE"||JOB=="TY")
	{
	d.gI("ZLTC").style.display = 'block'
	d.gI("ZLT").style.display = 'block'
	}
else
	{
	d.gI("ZLTC").checked=false
	d.gI("ZLTC").style.display = 'none'
	d.gI("ZLT").style.display = 'none'
	}
if (JOB=="WA"||JOB=="GL"||JOB=="WD"||JOB=="RO"||JOB=="TH"||JOB=="HE"||JOB=="EFS"||JOB=="PW"||JOB=="SR"||JOB=="AS"||JOB=="PR"||JOB=="AW"||JOB=="OR"||JOB=="DE")
	{
	d.gI("ACCTC").style.display = 'block'
	d.gI("ACCT").style.display = 'block'
	}
else
	{
	d.gI("ACCTC").checked=false
	d.gI("ACCTC").style.display = 'none'
	d.gI("ACCT").style.display = 'none'
	}
if (JOB=="BH"||JOB=="WS"||JOB=="DE"||JOB=="WD")
	{
	d.gI("PACC").style.display = 'block'
	d.gI("PAC").style.display = 'block'
	}
else
	{
	d.gI("PACC").checked=false
	d.gI("PACC").style.display = 'none'
	d.gI("PAC").style.display = 'none'
	}
if (JOB=="WD")
	{
	d.gI("FAC").style.display = 'block'
	d.gI("FA").style.display = 'block'
	}
else
	{
	d.gI("FAC").checked=false
	d.gI("FAC").style.display = 'none'
	d.gI("FA").style.display = 'none'
	}
if (JOB=="PW"||JOB=="AW"||JOB=="TH")
	{
	d.gI("SMC").style.display = 'block'
	d.gI("SM").style.display = 'block'
	}
else
	{
	d.gI("SMC").checked=false
	d.gI("SMC").style.display = 'none'
	d.gI("SM").style.display = 'none'
	}
if (JOB=="TH")
	{
	d.gI("STLC").style.display = 'block'
	d.gI("STL").style.display = 'block'
	}
else
	{
	d.gI("STLC").checked=false
	d.gI("STLC").style.display = 'none'
	d.gI("STL").style.display = 'none'
	}
if (JOB=="TY")
	{
	d.gI("FFYC").style.display = 'block'
	d.gI("FFY").style.display = 'block'
	}
else
	{
	d.gI("FFYC").checked=false
	d.gI("FFYC").style.display = 'none'
	d.gI("FFY").style.display = 'none'
	}
if (JOB=="WL"||JOB=="ELS"||JOB=="PS")
	{
	d.gI("ARAC").style.display = 'block'
	d.gI("ARA").style.display = 'block'
	}
else
	{
	d.gI("ARAC").checked=false
	d.gI("ARAC").style.display = 'none'
	d.gI("ARA").style.display = 'none'
	}
if (JOB=="WC"||JOB=="SHE"||JOB=="BI"||JOB=="EE"||JOB=="PP")
	{
	d.gI("ARWC").style.display = 'block'
	d.gI("ARW").style.display = 'block'
	}
else
	{
	d.gI("ARWC").checked=false
	d.gI("ARWC").style.display = 'none'
	d.gI("ARW").style.display = 'none'
	}
if (JOB=="SR")
	{
	d.gI("RPFC").style.display = 'block'
	d.gI("RPF").style.display = 'block'
	}
else
	{
	d.gI("RPFC").checked=false
	d.gI("RPFC").style.display = 'none'
	d.gI("RPF").style.display = 'none'
	}
if (JOB=="WD"||JOB=="WS"||JOB=="BH"||JOB=="DE")
	{
	d.gI("PRYC").style.display = 'block'
	d.gI("PRY").style.display = 'block'
	}
else
	{
	d.gI("PRYC").checked=false
	d.gI("PRYC").style.display = 'none'
	d.gI("PRY").style.display = 'none'
	}
if (JOB=="TY"||JOB=="GL"||JOB=="WS"||JOB=="BH")
	{
	d.gI("RIPC").style.display = 'block'
	d.gI("RIP").style.display = 'block'
	}
else
	{
	d.gI("RIPC").checked=false
	d.gI("RIPC").style.display = 'none'
	d.gI("RIP").style.display = 'none'
	}
if (JOB=="PA")
	{
	d.gI("ASTC").style.display = 'block'
	d.gI("AST").style.display = 'block'
	d.gI("ANIC").style.display = 'block'
	d.gI("ANI").style.display = 'block'
	}
else
	{
	d.gI("ASTC").checked=false
	d.gI("ASTC").style.display = 'none'
	d.gI("AST").style.display = 'none'
	d.gI("ANIC").checked=false
	d.gI("ANIC").style.display = 'none'
	d.gI("ANI").style.display = 'none'
	}
if (JOB=="AW")
	{
	d.gI("FAWC").style.display = 'block'
	d.gI("FAW").style.display = 'block'
	d.gI("FPWC").checked=false
	d.gI("FPWC").style.display = 'none'
	d.gI("FPW").style.display = 'none'
	d.gI("FTHC").checked=false
	d.gI("FTHC").style.display = 'none'
	d.gI("FTH").style.display = 'none'
	}
else if (JOB=="PW")
	{
	d.gI("FAWC").checked=false
	d.gI("FAWC").style.display = 'none'
	d.gI("FAW").style.display = 'none'
	d.gI("FPWC").style.display = 'block'
	d.gI("FPW").style.display = 'block'
	d.gI("FTHC").checked=false
	d.gI("FTHC").style.display = 'none'
	d.gI("FTH").style.display = 'none'
	}
else if (JOB=="TH")
	{
	d.gI("FAWC").checked=false
	d.gI("FAWC").style.display = 'none'
	d.gI("FAW").style.display = 'none'
	d.gI("FPWC").checked=false
	d.gI("FPWC").style.display = 'none'
	d.gI("FPW").style.display = 'none'
	d.gI("FTHC").style.display = 'block'
	d.gI("FTH").style.display = 'block'
	}
else
	{
	d.gI("FAWC").checked=false
	d.gI("FAWC").style.display = 'none'
	d.gI("FAW").style.display = 'none'
	d.gI("FPWC").checked=false
	d.gI("FPWC").style.display = 'none'
	d.gI("FPW").style.display = 'none'
	d.gI("FTHC").checked=false
	d.gI("FTHC").style.display = 'none'
	d.gI("FTH").style.display = 'none'
	}

//Passive Hide/Unhide Stuff
if (race=="HF"||race=="EF"||race=="DF"||race=="OF"||race=="DW")
	{
	d.gI("WMFC").style.display = 'block'
	d.gI("WMF").style.display = 'block'
	d.gI("AMFC").style.display = 'block'
	d.gI("AMF").style.display = 'block'
	}
else
	{
	d.gI("WMFC").checked=false
	d.gI("WMFC").style.display = 'none'
	d.gI("WMF").style.display = 'none'
	d.gI("AMFC").checked=false
	d.gI("AMFC").style.display = 'none'
	d.gI("AMF").style.display = 'none'
	}
if (JOB=="HM"||JOB=="EM"||JOB=="DM"||JOB=="OM")
	{
	d.gI("WMM1C").style.display = 'block'
	d.gI("WMM1").style.display = 'block'
	d.gI("WMM2C").checked=false
	d.gI("WMM2C").style.display = 'none'
	d.gI("WMM2").style.display = 'none'
	d.gI("WMM3C").checked=false
	d.gI("WMM3C").style.display = 'none'
	d.gI("WMM3").style.display = 'none'
	d.gI("AM1C").style.display = 'block'
	d.gI("AM1").style.display = 'block'
	d.gI("AM2C").checked=false
	d.gI("AM2C").style.display = 'none'
	d.gI("AM2").style.display = 'none'
	d.gI("AM3C").checked=false
	d.gI("AM3C").style.display = 'none'
	d.gI("AM3").style.display = 'none'
	}
else if (JOB=="WI"||JOB=="CL"||JOB=="EW"||JOB=="EO"||JOB=="DW"||JOB=="SO"||JOB=="OS")
	{
	d.gI("WMM2C").style.display = 'block'
	d.gI("WMM2").style.display = 'block'
	d.gI("WMM1C").checked=false
	d.gI("WMM1C").style.display = 'none'
	d.gI("WMM1").style.display = 'none'
	d.gI("WMM3C").checked=false
	d.gI("WMM3C").style.display = 'none'
	d.gI("WMM3").style.display = 'none'
	d.gI("AM2C").style.display = 'block'
	d.gI("AM2").style.display = 'block'
	d.gI("AM1C").checked=false
	d.gI("AM1C").style.display = 'none'
	d.gI("AM1").style.display = 'none'
	d.gI("AM3C").checked=false
	d.gI("AM3C").style.display = 'none'
	d.gI("AM3").style.display = 'none'
	}
else if (JOB=="SOR"||JOB=="NE"||JOB=="WL"||JOB=="PP"||JOB=="BI"||JOB=="SPS"||JOB=="ELS"||JOB=="EE"||JOB=="SPH"||JOB=="PS"||JOB=="WC"||JOB=="SHE"||JOB=="OL")
	{
	d.gI("WMM3C").style.display = 'block'
	d.gI("WMM3").style.display = 'block'
	d.gI("WMM1C").checked=false
	d.gI("WMM1C").style.display = 'none'
	d.gI("WMM1").style.display = 'none'
	d.gI("WMM2C").checked=false
	d.gI("WMM2C").style.display = 'none'
	d.gI("WMM2").style.display = 'none'
	d.gI("AM3C").style.display = 'block'
	d.gI("AM3").style.display = 'block'
	d.gI("AM1C").checked=false
	d.gI("AM1C").style.display = 'none'
	d.gI("AM1").style.display = 'none'
	d.gI("AM2C").checked=false
	d.gI("AM2C").style.display = 'none'
	d.gI("AM2").style.display = 'none'
	}
else
	{
	d.gI("WMM1C").checked=false
	d.gI("WMM1C").style.display = 'none'
	d.gI("WMM1").style.display = 'none'
	d.gI("WMM2C").checked=false
	d.gI("WMM2C").style.display = 'none'
	d.gI("WMM2").style.display = 'none'
	d.gI("WMM3C").checked=false
	d.gI("WMM3C").style.display = 'none'
	d.gI("WMM3").style.display = 'none'
	d.gI("AM1C").checked=false
	d.gI("AM1C").style.display = 'none'
	d.gI("AM1").style.display = 'none'
	d.gI("AM2C").checked=false
	d.gI("AM2C").style.display = 'none'
	d.gI("AM2").style.display = 'none'
	d.gI("AM3C").checked=false
	d.gI("AM3C").style.display = 'none'
	d.gI("AM3").style.display = 'none'
	}
if (JOB=="WI"||JOB=="CL"||JOB=="EW"||JOB=="EO"||JOB=="DW"||JOB=="SO"||JOB=="OS")
	{
	d.gI("BMP1C").style.display = 'block'
	d.gI("BMP1").style.display = 'block'
	d.gI("BMP2C").checked=false
	d.gI("BMP2C").style.display = 'none'
	d.gI("BMP2").style.display = 'none'
	d.gI("FSC1C").style.display = 'block'
	d.gI("FSC1").style.display = 'block'
	d.gI("FSC2C").checked=false
	d.gI("FSC2C").style.display = 'none'
	d.gI("FSC2").style.display = 'none'
	d.gI("FHR3C").style.display = 'block'
	d.gI("FHR3").style.display = 'block'
	d.gI("FHR4C").checked=false
	d.gI("FHR4C").style.display = 'none'
	d.gI("FHR4").style.display = 'none'
	d.gI("FMR1C").style.display = 'block'
	d.gI("FMR1").style.display = 'block'
	d.gI("FMR2C").checked=false
	d.gI("FMR2C").style.display = 'none'
	d.gI("FMR2").style.display = 'none'
	}
else if (JOB=="SOR"||JOB=="NE"||JOB=="WL"||JOB=="PP"||JOB=="BI"||JOB=="SPS"||JOB=="ELS"||JOB=="EE"||JOB=="SPH"||JOB=="PS"||JOB=="WC"||JOB=="SHE"||JOB=="OL")
	{
	d.gI("BMP2C").style.display = 'block'
	d.gI("BMP2").style.display = 'block'
	d.gI("BMP1C").checked=false
	d.gI("BMP1C").style.display = 'none'
	d.gI("BMP1").style.display = 'none'
	d.gI("FSC2C").style.display = 'block'
	d.gI("FSC2").style.display = 'block'
	d.gI("FSC1C").checked=false
	d.gI("FSC1C").style.display = 'none'
	d.gI("FSC1").style.display = 'none'
	d.gI("FHR4C").style.display = 'block'
	d.gI("FHR4").style.display = 'block'
	d.gI("FHR3C").checked=false
	d.gI("FHR3C").style.display = 'none'
	d.gI("FHR3").style.display = 'none'
	d.gI("FMR2C").style.display = 'block'
	d.gI("FMR2").style.display = 'block'
	d.gI("FMR1C").checked=false
	d.gI("FMR1C").style.display = 'none'
	d.gI("FMR1").style.display = 'none'
	}
else
	{
	d.gI("BMP1C").checked=false
	d.gI("BMP1C").style.display = 'none'
	d.gI("BMP1").style.display = 'none'
	d.gI("BMP2C").checked=false
	d.gI("BMP2C").style.display = 'none'
	d.gI("BMP2").style.display = 'none'
	d.gI("FSC1C").checked=false
	d.gI("FSC1C").style.display = 'none'
	d.gI("FSC1").style.display = 'none'
	d.gI("FSC2C").checked=false
	d.gI("FSC2C").style.display = 'none'
	d.gI("FSC2").style.display = 'none'
	d.gI("FHR3C").checked=false
	d.gI("FHR3C").style.display = 'none'
	d.gI("FHR3").style.display = 'none'
	d.gI("FHR4C").checked=false
	d.gI("FHR4C").style.display = 'none'
	d.gI("FHR4").style.display = 'none'
	d.gI("FMR1C").checked=false
	d.gI("FMR1C").style.display = 'none'
	d.gI("FMR1").style.display = 'none'
	d.gI("FMR2C").checked=false
	d.gI("FMR2C").style.display = 'none'
	d.gI("FMR2").style.display = 'none'
	}
if (race=="HM"||race=="EM"||race=="DM")
	{
	d.gI("AMMC").style.display = 'block'
	d.gI("AMM").style.display = 'block'
	}
else
	{
	d.gI("AMMC").checked=false
	d.gI("AMMC").style.display = 'none'
	d.gI("AMM").style.display = 'none'
	}
if (JOB=="WA"||JOB=="OR"||JOB=="WD")
	{
	d.gI("WSBM1C").style.display = 'block'
	d.gI("WSBM1").style.display = 'block'
	d.gI("WSBM2C").checked=false
	d.gI("WSBM2C").style.display = 'none'
	d.gI("WSBM2").style.display = 'none'
	}
else if (JOB=="GL"||JOB=="DE")
	{
	d.gI("WSBM2C").style.display = 'block'
	d.gI("WSBM2").style.display = 'block'
	d.gI("WSBM1C").checked=false
	d.gI("WSBM1C").style.display = 'none'
	d.gI("WSBM1").style.display = 'none'
	}
else
	{
	d.gI("WSBM1C").checked=false
	d.gI("WSBM1C").style.display = 'none'
	d.gI("WSBM1").style.display = 'none'
	d.gI("WSBM2C").checked=false
	d.gI("WSBM2C").style.display = 'none'
	d.gI("WSBM2").style.display = 'none'
	}
if (JOB=="AR"||JOB=="SC")
	{
	d.gI("BLM1C").style.display = 'block'
	d.gI("BLM1").style.display = 'block'
	d.gI("BLM2C").checked=false
	d.gI("BLM2C").style.display = 'none'
	d.gI("BLM2").style.display = 'none'
	}
else if (JOB=="WS"||JOB=="BH")
	{
	d.gI("BLM2C").style.display = 'block'
	d.gI("BLM2").style.display = 'block'
	d.gI("BLM1C").checked=false
	d.gI("BLM1C").style.display = 'none'
	d.gI("BLM1").style.display = 'none'
	}
else
	{
	d.gI("BLM1C").checked=false
	d.gI("BLM1C").style.display = 'none'
	d.gI("BLM1").style.display = 'none'
	d.gI("BLM2C").checked=false
	d.gI("BLM2C").style.display = 'none'
	d.gI("BLM2").style.display = 'none'
	}
if (JOB=="DO")
	{
	d.gI("WTL1C").style.display = 'block'
	d.gI("WTL1").style.display = 'block'
	d.gI("WTL2C").checked=false
	d.gI("WTL2C").style.display = 'none'
	d.gI("WTL2").style.display = 'none'
	d.gI("WTL3C").checked=false
	d.gI("WTL3C").style.display = 'none'
	d.gI("WTL3").style.display = 'none'
	}
else if (JOB=="AR"||JOB=="SC")
	{
	d.gI("WTL2C").style.display = 'block'
	d.gI("WTL2").style.display = 'block'
	d.gI("WTL1C").checked=false
	d.gI("WTL1C").style.display = 'none'
	d.gI("WTL1").style.display = 'none'
	d.gI("WTL3C").checked=false
	d.gI("WTL3C").style.display = 'none'
	d.gI("WTL3").style.display = 'none'
	}
else if (JOB=="WS"||JOB=="BH")
	{
	d.gI("WTL3C").style.display = 'block'
	d.gI("WTL3").style.display = 'block'
	d.gI("WTL1C").checked=false
	d.gI("WTL1C").style.display = 'none'
	d.gI("WTL1").style.display = 'none'
	d.gI("WTL2C").checked=false
	d.gI("WTL2C").style.display = 'none'
	d.gI("WTL2").style.display = 'none'
	}
else
	{
	d.gI("WTL1C").checked=false
	d.gI("WTL1C").style.display = 'none'
	d.gI("WTL1").style.display = 'none'
	d.gI("WTL2C").checked=false
	d.gI("WTL2C").style.display = 'none'
	d.gI("WTL2").style.display = 'none'
	d.gI("WTL3C").checked=false
	d.gI("WTL3C").style.display = 'none'
	d.gI("WTL3").style.display = 'none'
	}
if (JOB=="AR"||JOB=="WA"||JOB=="GL"||JOB=="OR"||JOB=="SC")
	{
	d.gI("PLM1C").style.display = 'block'
	d.gI("PLM1").style.display = 'block'
	d.gI("PLM2C").checked=false
	d.gI("PLM2C").style.display = 'none'
	d.gI("PLM2").style.display = 'none'
	}
else if (JOB=="WS"||JOB=="BH"||JOB=="WD"||JOB=="DE")
	{
	d.gI("PLM2C").style.display = 'block'
	d.gI("PLM2").style.display = 'block'
	d.gI("PLM1C").checked=false
	d.gI("PLM1C").style.display = 'none'
	d.gI("PLM1").style.display = 'none'
	}
else
	{
	d.gI("PLM1C").checked=false
	d.gI("PLM1C").style.display = 'none'
	d.gI("PLM1").style.display = 'none'
	d.gI("PLM2C").checked=false
	d.gI("PLM2C").style.display = 'none'
	d.gI("PLM2").style.display = 'none'
	}
if (JOB=="MO")
	{
	d.gI("FIM1C").style.display = 'block'
	d.gI("FIM1").style.display = 'block'
	d.gI("FIM2C").checked=false
	d.gI("FIM2C").style.display = 'none'
	d.gI("FIM2").style.display = 'none'
	}
else if (JOB=="TY")
	{
	d.gI("FIM2C").style.display = 'block'
	d.gI("FIM2").style.display = 'block'
	d.gI("FIM1C").checked=false
	d.gI("FIM1C").style.display = 'none'
	d.gI("FIM1").style.display = 'none'
	}
else
	{
	d.gI("FIM1C").checked=false
	d.gI("FIM1C").style.display = 'none'
	d.gI("FIM1").style.display = 'none'
	d.gI("FIM2C").checked=false
	d.gI("FIM2C").style.display = 'none'
	d.gI("FIM2").style.display = 'none'
	}
if (JOB=="EK"||JOB=="HK"||JOB=="PK")
	{
	d.gI("MR1C").style.display = 'block'
	d.gI("MR1").style.display = 'block'
	d.gI("MR2C").checked=false
	d.gI("MR2C").style.display = 'none'
	d.gI("MR2").style.display = 'none'
	}
else if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SW"||JOB=="SK"||JOB=="BD")
	{
	d.gI("MR2C").style.display = 'block'
	d.gI("MR2").style.display = 'block'
	d.gI("MR1C").checked=false
	d.gI("MR1C").style.display = 'none'
	d.gI("MR1").style.display = 'none'
	}
else
	{
	d.gI("MR1C").checked=false
	d.gI("MR1C").style.display = 'none'
	d.gI("MR1").style.display = 'none'
	d.gI("MR2C").checked=false
	d.gI("MR2C").style.display = 'none'
	d.gI("MR2").style.display = 'none'
	}
if (JOB=="EK"||JOB=="HK"||JOB=="PK"||JOB=="BD"||JOB=="SW")
	{
	d.gI("HMK1C").style.display = 'block'
	d.gI("HMK1").style.display = 'block'
	d.gI("HMK2C").checked=false
	d.gI("HMK2C").style.display = 'none'
	d.gI("HMK2").style.display = 'none'
	d.gI("DEA1C").style.display = 'block'
	d.gI("DEA1").style.display = 'block'
	d.gI("DEA2C").checked=false
	d.gI("DEA2C").style.display = 'none'
	d.gI("DEA2").style.display = 'none'
	}
else if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("HMK2C").style.display = 'block'
	d.gI("HMK2").style.display = 'block'
	d.gI("HMK1C").checked=false
	d.gI("HMK1C").style.display = 'none'
	d.gI("HMK1").style.display = 'none'
	d.gI("DEA2C").style.display = 'block'
	d.gI("DEA2").style.display = 'block'
	d.gI("DEA1C").checked=false
	d.gI("DEA1C").style.display = 'none'
	d.gI("DEA1").style.display = 'none'
	}
else
	{
	d.gI("HMK1C").checked=false
	d.gI("HMK1C").style.display = 'none'
	d.gI("HMK1").style.display = 'none'
	d.gI("HMK2C").checked=false
	d.gI("HMK2C").style.display = 'none'
	d.gI("HMK2").style.display = 'none'
	d.gI("DEA1C").checked=false
	d.gI("DEA1C").style.display = 'none'
	d.gI("DEA1").style.display = 'none'
	d.gI("DEA2C").checked=false
	d.gI("DEA2C").style.display = 'none'
	d.gI("DEA2").style.display = 'none'
	}
if (JOB=="EK"||JOB=="HK"||JOB=="PK"||JOB=="BD")
	{
	d.gI("KSBM1C").style.display = 'block'
	d.gI("KSBM1").style.display = 'block'
	d.gI("KSBM2C").checked=false
	d.gI("KSBM2C").style.display = 'none'
	d.gI("KSBM2").style.display = 'none'
	}
else if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK"||JOB=="SW")
	{
	d.gI("KSBM2C").style.display = 'block'
	d.gI("KSBM2").style.display = 'block'
	d.gI("KSBM1C").checked=false
	d.gI("KSBM1C").style.display = 'none'
	d.gI("KSBM1").style.display = 'none'
	}
else
	{
	d.gI("KSBM1C").checked=false
	d.gI("KSBM1C").style.display = 'none'
	d.gI("KSBM1").style.display = 'none'
	d.gI("KSBM2C").checked=false
	d.gI("KSBM2C").style.display = 'none'
	d.gI("KSBM2").style.display = 'none'
	}
if (JOB=="EK"||JOB=="HK"||JOB=="PK"||JOB=="BD"||JOB=="SW")
	{
	d.gI("SDM1C").style.display = 'block'
	d.gI("SDM1").style.display = 'block'
	d.gI("SDM2C").checked=false
	d.gI("SDM2C").style.display = 'none'
	d.gI("SDM2").style.display = 'none'
	}
else if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("SDM2C").style.display = 'block'
	d.gI("SDM2").style.display = 'block'
	d.gI("SDM1C").checked=false
	d.gI("SDM1C").style.display = 'none'
	d.gI("SDM1").style.display = 'none'
	}
else
	{
	d.gI("SDM1C").checked=false
	d.gI("SDM1C").style.display = 'none'
	d.gI("SDM1").style.display = 'none'
	d.gI("SDM2C").checked=false
	d.gI("SDM2C").style.display = 'none'
	d.gI("SDM2").style.display = 'none'
	}
if (JOB=="EFS"||JOB=="SR"||JOB=="HE"||JOB=="RO"||JOB=="PR"||JOB=="AS")
	{
	d.gI("DGM1C").style.display = 'block'
	d.gI("DGM1").style.display = 'block'
	d.gI("DGM2C").checked=false
	d.gI("DGM2C").style.display = 'none'
	d.gI("DGM2").style.display = 'none'
	d.gI("BEV1C").style.display = 'block'
	d.gI("BEV1").style.display = 'block'
	d.gI("BEV2C").checked=false
	d.gI("BEV2C").style.display = 'none'
	d.gI("BEV2").style.display = 'none'
	}
else if (JOB=="PW"||JOB=="TH"||JOB=="AW")
	{
	d.gI("DGM2C").style.display = 'block'
	d.gI("DGM2").style.display = 'block'
	d.gI("DGM1C").checked=false
	d.gI("DGM1C").style.display = 'none'
	d.gI("DGM1").style.display = 'none'
	d.gI("BEV2C").style.display = 'block'
	d.gI("BEV2").style.display = 'block'
	d.gI("BEV1C").checked=false
	d.gI("BEV1C").style.display = 'none'
	d.gI("BEV1").style.display = 'none'
	}
else
	{
	d.gI("DGM1C").checked=false
	d.gI("DGM1C").style.display = 'none'
	d.gI("DGM1").style.display = 'none'
	d.gI("DGM2C").checked=false
	d.gI("DGM2C").style.display = 'none'
	d.gI("DGM2").style.display = 'none'
	d.gI("BEV1C").checked=false
	d.gI("BEV1C").style.display = 'none'
	d.gI("BEV1").style.display = 'none'
	d.gI("BEV2C").checked=false
	d.gI("BEV2C").style.display = 'none'
	d.gI("BEV2").style.display = 'none'
	}
if (JOB=="PW"||JOB=="EFS"||JOB=="TH"||JOB=="RO"||JOB=="AW"||JOB=="AS")
	{
	d.gI("BOWM1C").style.display = 'block'
	d.gI("BOWM1").style.display = 'block'
	d.gI("BOWM2C").checked=false
	d.gI("BOWM2C").style.display = 'none'
	d.gI("BOWM2").style.display = 'none'
	}
else if (JOB=="SR"||JOB=="HE"||JOB=="PR")
	{
	d.gI("BOWM2C").style.display = 'block'
	d.gI("BOWM2").style.display = 'block'
	d.gI("BOWM1C").checked=false
	d.gI("BOWM1C").style.display = 'none'
	d.gI("BOWM1").style.display = 'none'
	}
else
	{
	d.gI("BOWM1C").checked=false
	d.gI("BOWM1C").style.display = 'none'
	d.gI("BOWM1").style.display = 'none'
	d.gI("BOWM2C").checked=false
	d.gI("BOWM2C").style.display = 'none'
	d.gI("BOWM2").style.display = 'none'
	}
if (JOB=="EFS"||JOB=="RO"||JOB=="AS")
	{
	d.gI("QS1C").style.display = 'block'
	d.gI("QS1").style.display = 'block'
	d.gI("QS2C").checked=false
	d.gI("QS2C").style.display = 'none'
	d.gI("QS2").style.display = 'none'
	}
else if (JOB=="SR"||JOB=="HE"||JOB=="PR"||JOB=="PW"||JOB=="TH"||JOB=="AW")
	{
	d.gI("QS2C").style.display = 'block'
	d.gI("QS2").style.display = 'block'
	d.gI("QS1C").checked=false
	d.gI("QS1C").style.display = 'none'
	d.gI("QS1").style.display = 'none'
	}
else
	{
	d.gI("QS1C").checked=false
	d.gI("QS1C").style.display = 'none'
	d.gI("QS1").style.display = 'none'
	d.gI("QS2C").checked=false
	d.gI("QS2C").style.display = 'none'
	d.gI("QS2").style.display = 'none'
	}
if (JOB=="BD"||JOB=="GL")
	{
	d.gI("DUALMC").style.display = 'block'
	d.gI("DUALM").style.display = 'block'
	}
else
	{
	d.gI("DUALMC").checked=false
	d.gI("DUALMC").style.display = 'none'
	d.gI("DUALM").style.display = 'none'
	}
if (JOB=="OR")
	{
	d.gI("THM1C").style.display = 'block'
	d.gI("THM1").style.display = 'block'
	d.gI("THM2C").checked=false
	d.gI("THM2C").style.display = 'none'
	d.gI("THM2").style.display = 'none'
	}
else if (JOB=="DE")
	{
	d.gI("THM2C").style.display = 'block'
	d.gI("THM2").style.display = 'block'
	d.gI("THM1C").checked=false
	d.gI("THM1C").style.display = 'none'
	d.gI("THM1").style.display = 'none'
	}
else
	{
	d.gI("THM1C").checked=false
	d.gI("THM1C").style.display = 'none'
	d.gI("THM1").style.display = 'none'
	d.gI("THM2C").checked=false
	d.gI("THM2C").style.display = 'none'
	d.gI("THM2").style.display = 'none'
	}
if (JOB=="WA"||JOB=="GL"||JOB=="OR"||JOB=="AR"||JOB=="SC")
	{
	d.gI("BHP1C").style.display = 'block'
	d.gI("BHP1").style.display = 'block'
	d.gI("BHP2C").checked=false
	d.gI("BHP2C").style.display = 'none'
	d.gI("BHP2").style.display = 'none'
	d.gI("BHP3C").checked=false
	d.gI("BHP3C").style.display = 'none'
	d.gI("BHP3").style.display = 'none'
	}
else if (JOB=="PP"||JOB=="OL"||JOB=="WC")
	{
	d.gI("BHP2C").style.display = 'block'
	d.gI("BHP2").style.display = 'block'
	d.gI("BHP1C").checked=false
	d.gI("BHP1C").style.display = 'none'
	d.gI("BHP1").style.display = 'none'
	d.gI("BHP3C").checked=false
	d.gI("BHP3C").style.display = 'none'
	d.gI("BHP3").style.display = 'none'
	}
else if (JOB=="WD"||JOB=="DE"||JOB=="BH"||JOB=="WS")
	{
	d.gI("BHP3C").style.display = 'block'
	d.gI("BHP3").style.display = 'block'
	d.gI("BHP1C").checked=false
	d.gI("BHP1C").style.display = 'none'
	d.gI("BHP1").style.display = 'none'
	d.gI("BHP2C").checked=false
	d.gI("BHP2C").style.display = 'none'
	d.gI("BHP2").style.display = 'none'
	}
else
	{
	d.gI("BHP1C").checked=false
	d.gI("BHP1C").style.display = 'none'
	d.gI("BHP1").style.display = 'none'
	d.gI("BHP2C").checked=false
	d.gI("BHP2C").style.display = 'none'
	d.gI("BHP2").style.display = 'none'
	d.gI("BHP3C").checked=false
	d.gI("BHP3C").style.display = 'none'
	d.gI("BHP3").style.display = 'none'
	}
if (JOB=="WD"||JOB=="GL")
	{
	d.gI("FFRC").style.display = 'block'
	d.gI("FFR").style.display = 'block'
	}
else
	{
	d.gI("FFRC").checked=false
	d.gI("FFRC").style.display = 'none'
	d.gI("FFR").style.display = 'none'
	}
if (JOB=="DA"||JOB=="PA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("FFOC").style.display = 'block'
	d.gI("FFO").style.display = 'block'
	}
else
	{
	d.gI("FFOC").checked=false
	d.gI("FFOC").style.display = 'none'
	d.gI("FFO").style.display = 'none'
	}
if (race=="DF")
	{
	d.gI("SHSC").style.display = 'block'
	d.gI("SHS").style.display = 'block'
	}
else
	{
	d.gI("SHSC").checked=false
	d.gI("SHSC").style.display = 'none'
	d.gI("SHS").style.display = 'none'
	}
if (JOB=="MO")
	{
	d.gI("AGM1C").style.display = 'block'
	d.gI("AGM1").style.display = 'block'
	d.gI("AGM2C").checked=false
	d.gI("AGM2C").style.display = 'none'
	d.gI("AGM2").style.display = 'none'
	}
else if (JOB=="TY")
	{
	d.gI("AGM2C").style.display = 'block'
	d.gI("AGM2").style.display = 'block'
	d.gI("AGM1C").checked=false
	d.gI("AGM1C").style.display = 'none'
	d.gI("AGM1").style.display = 'none'
	}
else
	{
	d.gI("AGM1C").checked=false
	d.gI("AGM1C").style.display = 'none'
	d.gI("AGM1").style.display = 'none'
	d.gI("AGM2C").checked=false
	d.gI("AGM2C").style.display = 'none'
	d.gI("AGM2").style.display = 'none'
	}
if (JOB=="EFS"||JOB=="SR"||JOB=="HE"||JOB=="RO")
	{
	d.gI("CRC1C").style.display = 'block'
	d.gI("CRC1").style.display = 'block'
	d.gI("CRC2C").checked=false
	d.gI("CRC2C").style.display = 'none'
	d.gI("CRC2").style.display = 'none'
	}
else if (JOB=="PW"||JOB=="TH")
	{
	d.gI("CRC2C").style.display = 'block'
	d.gI("CRC2").style.display = 'block'
	d.gI("CRC1C").checked=false
	d.gI("CRC1C").style.display = 'none'
	d.gI("CRC1").style.display = 'none'
	}
else
	{
	d.gI("CRC1C").checked=false
	d.gI("CRC1C").style.display = 'none'
	d.gI("CRC1").style.display = 'none'
	d.gI("CRC2C").checked=false
	d.gI("CRC2C").style.display = 'none'
	d.gI("CRC2").style.display = 'none'
	}
if (JOB=="MO"||JOB=="HE"||JOB=="RO")
	{
	d.gI("BOA1C").style.display = 'block'
	d.gI("BOA1").style.display = 'block'
	d.gI("BOA2C").checked=false
	d.gI("BOA2C").style.display = 'none'
	d.gI("BOA2").style.display = 'none'
	}
else if (JOB=="TY"||JOB=="TH")
	{
	d.gI("BOA2C").style.display = 'block'
	d.gI("BOA2").style.display = 'block'
	d.gI("BOA1C").checked=false
	d.gI("BOA1C").style.display = 'none'
	d.gI("BOA1").style.display = 'none'
	}
else
	{
	d.gI("BOA1C").checked=false
	d.gI("BOA1C").style.display = 'none'
	d.gI("BOA1").style.display = 'none'
	d.gI("BOA2C").checked=false
	d.gI("BOA2C").style.display = 'none'
	d.gI("BOA2").style.display = 'none'
	}
if (JOB=="OM")
	{
	d.gI("HMO1C").style.display = 'block'
	d.gI("HMO1").style.display = 'block'
	d.gI("HMO2C").checked=false
	d.gI("HMO2C").style.display = 'none'
	d.gI("HMO2").style.display = 'none'
	d.gI("HMO3C").checked=false
	d.gI("HMO3C").style.display = 'none'
	d.gI("HMO3").style.display = 'none'
	d.gI("LMO1C").style.display = 'block'
	d.gI("LMO1").style.display = 'block'
	d.gI("LMO3C").checked=false
	d.gI("LMO3C").style.display = 'none'
	d.gI("LMO3").style.display = 'none'
	d.gI("LMO2C").checked=false
	d.gI("LMO2C").style.display = 'none'
	d.gI("LMO2").style.display = 'none'
	d.gI("RMO1C").style.display = 'block'
	d.gI("RMO1").style.display = 'block'
	d.gI("RMO2C").checked=false
	d.gI("RMO2C").style.display = 'none'
	d.gI("RMO2").style.display = 'none'
	d.gI("RMO3C").checked=false
	d.gI("RMO3C").style.display = 'none'
	d.gI("RMO3").style.display = 'none'
	}
else if (JOB=="OS")
	{
	d.gI("HMO2C").style.display = 'block'
	d.gI("HMO2").style.display = 'block'
	d.gI("HMO3C").checked=false
	d.gI("HMO3C").style.display = 'none'
	d.gI("HMO3").style.display = 'none'
	d.gI("HMO1C").checked=false
	d.gI("HMO1C").style.display = 'none'
	d.gI("HMO1").style.display = 'none'
	d.gI("LMO2C").style.display = 'block'
	d.gI("LMO2").style.display = 'block'
	d.gI("LMO1C").checked=false
	d.gI("LMO1C").style.display = 'none'
	d.gI("LMO1").style.display = 'none'
	d.gI("LMO3C").checked=false
	d.gI("LMO3C").style.display = 'none'
	d.gI("LMO3").style.display = 'none'
	d.gI("RMO2C").style.display = 'block'
	d.gI("RMO2").style.display = 'block'
	d.gI("RMO1C").checked=false
	d.gI("RMO1C").style.display = 'none'
	d.gI("RMO1").style.display = 'none'
	d.gI("RMO3C").checked=false
	d.gI("RMO3C").style.display = 'none'
	d.gI("RMO3").style.display = 'none'
	}
else if (JOB=="WC"||JOB=="OL")
	{
	d.gI("HMO3C").style.display = 'block'
	d.gI("HMO3").style.display = 'block'
	d.gI("HMO2C").checked=false
	d.gI("HMO2C").style.display = 'none'
	d.gI("HMO2").style.display = 'none'
	d.gI("HMO1C").checked=false
	d.gI("HMO1C").style.display = 'none'
	d.gI("HMO1").style.display = 'none'
	d.gI("LMO3C").style.display = 'block'
	d.gI("LMO3").style.display = 'block'
	d.gI("LMO1C").checked=false
	d.gI("LMO1C").style.display = 'none'
	d.gI("LMO1").style.display = 'none'
	d.gI("LMO2C").checked=false
	d.gI("LMO2C").style.display = 'none'
	d.gI("LMO2").style.display = 'none'
	d.gI("RMO3C").style.display = 'block'
	d.gI("RMO3").style.display = 'block'
	d.gI("RMO2C").checked=false
	d.gI("RMO2C").style.display = 'none'
	d.gI("RMO2").style.display = 'none'
	d.gI("RMO1C").checked=false
	d.gI("RMO1C").style.display = 'none'
	d.gI("RMO1").style.display = 'none'
	}
else
	{
	d.gI("HMO1C").checked=false
	d.gI("HMO1C").style.display = 'none'
	d.gI("HMO1").style.display = 'none'
	d.gI("HMO2C").checked=false
	d.gI("HMO2C").style.display = 'none'
	d.gI("HMO2").style.display = 'none'
	d.gI("HMO3C").checked=false
	d.gI("HMO3C").style.display = 'none'
	d.gI("HMO3").style.display = 'none'
	d.gI("LMO1C").checked=false
	d.gI("LMO1C").style.display = 'none'
	d.gI("LMO1").style.display = 'none'
	d.gI("LMO2C").checked=false
	d.gI("LMO2C").style.display = 'none'
	d.gI("LMO2").style.display = 'none'
	d.gI("LMO3C").checked=false
	d.gI("LMO3C").style.display = 'none'
	d.gI("LMO3").style.display = 'none'
	d.gI("RMO1C").checked=false
	d.gI("RMO1C").style.display = 'none'
	d.gI("RMO1").style.display = 'none'
	d.gI("RMO2C").checked=false
	d.gI("RMO2C").style.display = 'none'
	d.gI("RMO2").style.display = 'none'
	d.gI("RMO3C").checked=false
	d.gI("RMO3C").style.display = 'none'
	d.gI("RMO3").style.display = 'none'
	}
if (JOB=="PP")
	{
	d.gI("HMPC").style.display = 'block'
	d.gI("HMP").style.display = 'block'
	}
else
	{
	d.gI("HMPC").checked=false
	d.gI("HMPC").style.display = 'none'
	d.gI("HMP").style.display = 'none'
	}
if (JOB=="WA"||JOB=="OR"||JOB=="AR"||JOB=="SC")
	{
	d.gI("HMW1C").style.display = 'block'
	d.gI("HMW1").style.display = 'block'
	d.gI("HMW2C").checked=false
	d.gI("HMW2C").style.display = 'none'
	d.gI("HMW2").style.display = 'none'
	d.gI("LMW1C").style.display = 'block'
	d.gI("LMW1").style.display = 'block'
	d.gI("LMW2C").checked=false
	d.gI("LMW2C").style.display = 'none'
	d.gI("LMW2").style.display = 'none'
	d.gI("FHR1C").style.display = 'block'
	d.gI("FHR1").style.display = 'block'
	d.gI("FHR2C").checked=false
	d.gI("FHR2C").style.display = 'none'
	d.gI("FHR2").style.display = 'none'
	}
else if (JOB=="WD"||JOB=="GL"||JOB=="DE"||JOB=="WS"||JOB=="BH")
	{
	d.gI("HMW2C").style.display = 'block'
	d.gI("HMW2").style.display = 'block'
	d.gI("HMW1C").checked=false
	d.gI("HMW1C").style.display = 'none'
	d.gI("HMW1").style.display = 'none'
	d.gI("LMW2C").style.display = 'block'
	d.gI("LMW2").style.display = 'block'
	d.gI("LMW1C").checked=false
	d.gI("LMW1C").style.display = 'none'
	d.gI("LMW1").style.display = 'none'
	d.gI("FHR2C").style.display = 'block'
	d.gI("FHR2").style.display = 'block'
	d.gI("FHR1C").checked=false
	d.gI("FHR1C").style.display = 'none'
	d.gI("FHR1").style.display = 'none'
	}
else
	{
	d.gI("HMW1C").checked=false
	d.gI("HMW1C").style.display = 'none'
	d.gI("HMW1").style.display = 'none'
	d.gI("HMW2C").checked=false
	d.gI("HMW2C").style.display = 'none'
	d.gI("HMW2").style.display = 'none'
	d.gI("LMW1C").checked=false
	d.gI("LMW1C").style.display = 'none'
	d.gI("LMW1").style.display = 'none'
	d.gI("LMW2C").checked=false
	d.gI("LMW2C").style.display = 'none'
	d.gI("LMW2").style.display = 'none'
	d.gI("FHR1C").checked=false
	d.gI("FHR1C").style.display = 'none'
	d.gI("FHR1").style.display = 'none'
	d.gI("FHR2C").checked=false
	d.gI("FHR2C").style.display = 'none'
	d.gI("FHR2").style.display = 'none'
	}
if (JOB=="EFS"||JOB=="RO"||JOB=="AS"||JOB=="MO")
	{
	d.gI("LMR1C").style.display = 'block'
	d.gI("LMR1").style.display = 'block'
	d.gI("LMR2C").checked=false
	d.gI("LMR2C").style.display = 'none'
	d.gI("LMR2").style.display = 'none'
	}
else if (JOB=="PW"||JOB=="SR"||JOB=="TH"||JOB=="HE"||JOB=="AW"||JOB=="PR"||JOB=="TY")
	{
	d.gI("LMR2C").style.display = 'block'
	d.gI("LMR2").style.display = 'block'
	d.gI("LMR1C").checked=false
	d.gI("LMR1C").style.display = 'none'
	d.gI("LMR1").style.display = 'none'
	}
else
	{
	d.gI("LMR1C").checked=false
	d.gI("LMR1C").style.display = 'none'
	d.gI("LMR1").style.display = 'none'
	d.gI("LMR2C").checked=false
	d.gI("LMR2C").style.display = 'none'
	d.gI("LMR2").style.display = 'none'
	}
if (JOB=="EFS"||JOB=="RO"||JOB=="AS")
	{
	d.gI("ACRM1C").style.display = 'block'
	d.gI("ACRM1").style.display = 'block'
	d.gI("ACRM2C").checked=false
	d.gI("ACRM2C").style.display = 'none'
	d.gI("ACRM2").style.display = 'none'
	}
else if (JOB=="PW"||JOB=="SR"||JOB=="TH"||JOB=="HE"||JOB=="AW"||JOB=="PR")
	{
	d.gI("ACRM2C").style.display = 'block'
	d.gI("ACRM2").style.display = 'block'
	d.gI("ACRM1C").checked=false
	d.gI("ACRM1C").style.display = 'none'
	d.gI("ACRM1").style.display = 'none'
	}
else
	{
	d.gI("ACRM1C").checked=false
	d.gI("ACRM1C").style.display = 'none'
	d.gI("ACRM1").style.display = 'none'
	d.gI("ACRM2C").checked=false
	d.gI("ACRM2C").style.display = 'none'
	d.gI("ACRM2").style.display = 'none'
	}
if (JOB=="CL"||JOB=="EO"||JOB=="SO")
	{
	d.gI("LMH1C").style.display = 'block'
	d.gI("LMH1").style.display = 'block'
	d.gI("LMH2C").checked=false
	d.gI("LMH2C").style.display = 'none'
	d.gI("LMH2").style.display = 'none'
	d.gI("RMH1C").style.display = 'block'
	d.gI("RMH1").style.display = 'block'
	d.gI("RMH2C").checked=false
	d.gI("RMH2C").style.display = 'none'
	d.gI("RMH2").style.display = 'none'
	}
else if (JOB=="PP"||JOB=="BI"||JOB=="EE"||JOB=="SHE")
	{
	d.gI("LMH2C").style.display = 'block'
	d.gI("LMH2").style.display = 'block'
	d.gI("LMH1C").checked=false
	d.gI("LMH1C").style.display = 'none'
	d.gI("LMH1").style.display = 'none'
	d.gI("RMH2C").style.display = 'block'
	d.gI("RMH2").style.display = 'block'
	d.gI("RMH1C").checked=false
	d.gI("RMH1C").style.display = 'none'
	d.gI("RMH1").style.display = 'none'
	}
else
	{
	d.gI("LMH1C").checked=false
	d.gI("LMH1C").style.display = 'none'
	d.gI("LMH1").style.display = 'none'
	d.gI("LMH2C").checked=false
	d.gI("LMH2C").style.display = 'none'
	d.gI("LMH2").style.display = 'none'
	d.gI("RMH1C").checked=false
	d.gI("RMH1C").style.display = 'none'
	d.gI("RMH1").style.display = 'none'
	d.gI("RMH2C").checked=false
	d.gI("RMH2C").style.display = 'none'
	d.gI("RMH2").style.display = 'none'
	}
if (JOB=="ELS"||JOB=="PS"||JOB=="WL")
	{
	d.gI("LMSC").style.display = 'block'
	d.gI("LMS").style.display = 'block'
	}
else
	{
	d.gI("LMSC").checked=false
	d.gI("LMSC").style.display = 'none'
	d.gI("LMS").style.display = 'none'
	}
if (JOB=="WI"||JOB=="DW"||JOB=="EW")
	{
	d.gI("RMN1C").style.display = 'block'
	d.gI("RMN1").style.display = 'block'
	d.gI("RMN2C").checked=false
	d.gI("RMN2C").style.display = 'none'
	d.gI("RMN2").style.display = 'none'
	}
else if (JOB=="NE"||JOB=="WL"||JOB=="SOR"||JOB=="SPH"||JOB=="PS"||JOB=="SPS"||JOB=="ELS")
	{
	d.gI("RMN2C").style.display = 'block'
	d.gI("RMN2").style.display = 'block'
	d.gI("RMN1C").checked=false
	d.gI("RMN1C").style.display = 'none'
	d.gI("RMN1").style.display = 'none'
	}
else
	{
	d.gI("RMN1C").checked=false
	d.gI("RMN1C").style.display = 'none'
	d.gI("RMN1").style.display = 'none'
	d.gI("RMN2C").checked=false
	d.gI("RMN2C").style.display = 'none'
	d.gI("RMN2").style.display = 'none'
	}
if (JOB=="HE")
	{
	d.gI("QOHC").style.display = 'block'
	d.gI("QOH").style.display = 'block'
	}
else
	{
	d.gI("QOHC").checked=false
	d.gI("QOHC").style.display = 'none'
	d.gI("QOH").style.display = 'none'
	}
if (JOB=="SPS")
	{
	d.gI("MRGC").style.display = 'block'
	d.gI("MRG").style.display = 'block'
	}
else
	{
	d.gI("MRGC").checked=false
	d.gI("MRGC").style.display = 'none'
	d.gI("MRG").style.display = 'none'
	}
if (JOB=="SOR"||JOB=="SPH"||JOB=="SPS")
	{
	d.gI("CLMC").style.display = 'block'
	d.gI("CLM").style.display = 'block'
	}
else
	{
	d.gI("CLMC").checked=false
	d.gI("CLMC").style.display = 'none'
	d.gI("CLM").style.display = 'none'
	}
if (JOB=="PW"||JOB=="SR"||JOB=="TH"||JOB=="HE"||JOB=="AW"||JOB=="PR")
	{
	d.gI("ESP2C").style.display = 'block'
	d.gI("ESP2").style.display = 'block'
	d.gI("ESP1C").checked=false
	d.gI("ESP1C").style.display = 'none'
	d.gI("ESP1").style.display = 'none'
	}
else if (JOB=="EFS"||JOB=="AS"||JOB=="RO")
	{
	d.gI("ESP1C").style.display = 'block'
	d.gI("ESP1").style.display = 'block'
	d.gI("ESP2C").checked=false
	d.gI("ESP2C").style.display = 'none'
	d.gI("ESP2").style.display = 'none'
	}
else
	{
	d.gI("ESP2C").checked=false
	d.gI("ESP2C").style.display = 'none'
	d.gI("ESP2").style.display = 'none'
	d.gI("ESP1C").checked=false
	d.gI("ESP1C").style.display = 'none'
	d.gI("ESP1").style.display = 'none'
	}
if (JOB=="WA"||JOB=="RO"||JOB=="OR"||JOB=="SC"||JOB=="AR")
	{
	d.gI("VTF1C").style.display = 'block'
	d.gI("VTF1").style.display = 'block'
	d.gI("VTF2C").checked=false
	d.gI("VTF2C").style.display = 'none'
	d.gI("VTF2").style.display = 'none'
	}
else if (JOB=="GL"||JOB=="WD"||JOB=="TH"||JOB=="HE"||JOB=="DE"||JOB=="BH"||JOB=="WS")
	{
	d.gI("VTF2C").style.display = 'block'
	d.gI("VTF2").style.display = 'block'
	d.gI("VTF1C").checked=false
	d.gI("VTF1C").style.display = 'none'
	d.gI("VTF1").style.display = 'none'
	}
else
	{
	d.gI("VTF2C").checked=false
	d.gI("VTF2C").style.display = 'none'
	d.gI("VTF2").style.display = 'none'
	d.gI("VTF1C").checked=false
	d.gI("VTF1C").style.display = 'none'
	d.gI("VTF1").style.display = 'none'
	}
if (JOB=="PR"||JOB=="HE"||JOB=="RO"||JOB=="AS")
	{
	d.gI("CRP1C").style.display = 'block'
	d.gI("CRP1").style.display = 'block'
	d.gI("CRP2C").checked=false
	d.gI("CRP2C").style.display = 'none'
	d.gI("CRP2").style.display = 'none'
	}
else if (JOB=="TH"||JOB=="AW")
	{
	d.gI("CRP2C").style.display = 'block'
	d.gI("CRP2").style.display = 'block'
	d.gI("CRP1C").checked=false
	d.gI("CRP1C").style.display = 'none'
	d.gI("CRP1").style.display = 'none'
	}
else
	{
	d.gI("CRP1C").checked=false
	d.gI("CRP1C").style.display = 'none'
	d.gI("CRP1").style.display = 'none'
	d.gI("CRP2C").checked=false
	d.gI("CRP2C").style.display = 'none'
	d.gI("CRP2").style.display = 'none'
	}
if (JOB=="BI")
	{
	d.gI("RES1").style.display = 'block'
	d.gI("RES2").style.display = 'block'
	d.gI("RES3").style.display = 'none'
	d.gI("RES4").style.display = 'none'
	d.gI("RES9").style.display = 'block'
	d.gI("RES0").style.display = 'block'
	}
else if (JOB=="EE")
	{
	d.gI("RES1").style.display = 'block'
	d.gI("RES2").style.display = 'none'
	d.gI("RES3").style.display = 'block'
	d.gI("RES4").style.display = 'none'
	d.gI("RES9").style.display = 'block'
	d.gI("RES0").style.display = 'none'
	}
else if (JOB=="SHE"||JOB=="PP"||JOB=="SO"||JOB=="EO"||JOB=="CL")
	{
	d.gI("RES1").style.display = 'block'
	d.gI("RES2").style.display = 'none'
	d.gI("RES3").style.display = 'none'
	d.gI("RES4").style.display = 'block'
	d.gI("RES9").style.display = 'block'
	d.gI("RES0").style.display = 'none'
	}
else
	{
	d.gI("RES1").style.display = 'none'
	d.gI("RES2").style.display = 'none'
	d.gI("RES3").style.display = 'none'
	d.gI("RES4").style.display = 'none'
	d.gI("RES9").style.display = 'none'
	d.gI("RES0").style.display = 'none'
	}
if (JOB=="PA"||JOB=="DA"||JOB=="TK"||JOB=="SK")
	{
	d.gI("KNTC").style.display = 'block'
	d.gI("KNT").style.display = 'block'
	}
else
	{
	d.gI("KNTC").checked=false
	d.gI("KNTC").style.display = 'none'
	d.gI("KNT").style.display = 'none'
	}
if (JOB=="GL"||JOB=="WD"||JOB=="BH"||JOB=="WS"||JOB=="TY"||JOB=="DE")
	{
	d.gI("MOCC").style.display = 'block'
	d.gI("MOC").style.display = 'block'
	}
else
	{
	d.gI("MOCC").checked=false
	d.gI("MOCC").style.display = 'none'
	d.gI("MOC").style.display = 'none'
	}
if (JOB=="AW"||JOB=="TH"||JOB=="PW")
	{
	d.gI("ASSC").style.display = 'block'
	d.gI("ASS").style.display = 'block'
	}
else
	{
	d.gI("ASSC").checked=false
	d.gI("ASSC").style.display = 'none'
	d.gI("ASS").style.display = 'none'
	}
if (JOB=="NE")
	{
	d.gI("NECC").style.display = 'block'
	d.gI("NEC").style.display = 'block'
	}
else
	{
	d.gI("NECC").checked=false
	d.gI("NECC").style.display = 'none'
	d.gI("NEC").style.display = 'none'
	}
if (JOB=="SOR"||JOB=="SPH"||JOB=="SPS")
	{
	d.gI("ARLC").style.display = 'block'
	d.gI("ARL").style.display = 'block'
	}
else
	{
	d.gI("ARLC").checked=false
	d.gI("ARLC").style.display = 'none'
	d.gI("ARL").style.display = 'none'
	}
if (JOB=="PS"||JOB=="WL"||JOB=="ELS")
	{
	d.gI("SMLC").style.display = 'block'
	d.gI("SML").style.display = 'block'
	}
else
	{
	d.gI("SMLC").checked=false
	d.gI("SMLC").style.display = 'none'
	d.gI("SML").style.display = 'none'
	}
if (JOB=="BI"||JOB=="SHE"||JOB=="EE")
	{
	d.gI("INVC").style.display = 'block'
	d.gI("INV").style.display = 'block'
	}
else
	{
	d.gI("INVC").checked=false
	d.gI("INVC").style.display = 'none'
	d.gI("INV").style.display = 'none'
	}
}
</script>

<script>
onerror=handleErr
var txt=""

var d=new _pdocument();

function _pdocument()
{
	var _alldata=new Array();
	function _getElementById(id) {
		if (_alldata[id]) {			
			return _alldata[id];
		}
		else {
			var s=document.getElementById(id);
			_alldata[id]=s;
			return _alldata[id];
		}
	}
	this.gI=_getElementById;

}

function handleErr(msg,url,l)
{
txt="There was an error on this page.\n\n"
txt+="Error: " + msg + "\n"
txt+="URL: " + url + "\n"
txt+="Line: " + l + "\n\n"
txt+="Click OK to continue.\n\n"
alert(txt)
return true
}

function calc(classreset,sareset)
{
if (sareset) {
	d.gI("WPNSA").selectedIndex=0
}
//placeholders
var AddASPD=0
var AddCAST=0
var AddCOMBATCRIT=0
var AddCP=0
var AddCPR=0
var AddCRIT=0
var AddCRIT60=0
var AddCRIT30=0
var AddCRITDMG=0
var AddHPR=0
var AddMPR=0
var AddMPR2=0
var AddSHIELDPDEF=0
var AddSPEED=0
var AddSPEED60=0
var AddSPEED30=0
var AddHP=0
var AddMP=0
var AddMATK=0
var AddPATK=0
var AddPATK60=0
var AddPATK30=0
var AddMDEF=0
var AddMDEF60=0
var AddMDEF30=0
var AddPDEF=0
var AddPDEF60=0
var AddPDEF30=0
var AddSPEED=0
var AddWEIGHT=0
var ALType=0
var AType=0
var AUType=0
var BaseCON=0
var BaseSTR=0
var BaseDEX=0
var BaseINT=0
var BaseMEN=0
var BaseWIT=0
var BaseCP=0
var BaseHP=0
var BaseMP=0
var BaseRun=0
var block360=false
var Boot=0
var bowdelay=1500
var BuffACC=0
var BuffACC60=0
var BuffACC30=0
var BuffASPD=1
var BuffASPD60=1
var BuffASPD30=1
var BuffCAST=1
var BuffCOMBATCRIT=1
var BuffCP=1
var BuffCPR=1
var BuffCRITDMG=1
var BuffDAMAGE=1
var BuffEVA=0
var BuffEVA60=0
var BuffEVA30=0
var BuffHP=1
var BuffHPR=1
var BuffHPR2=1
var BuffMATK=1
var BuffMDEF=1
var BuffMDEF60=1
var BuffMDEF30=1
var BuffMP=1
var BuffMPR=1
var BuffMPR2=1
var BuffPATK=1
var BuffPATK60=1
var BuffPATK30=1
var BuffPDEF=1
var BuffPDEF60=1
var BuffPDEF30=1
var BuffRD=0
var BuffShieldBlockRate=1
var BuffSHIELDPDEF=1
var BuffSPEED=1
var BuffSPEED60=1
var BuffSPEED30=1
var BuffVR=0
var ClassType=0
var Cloak=0
var combatevasion=0
var CON=0
var CONMOD=0
var DEX=0
var DEXMOD=0
var Glove=0
var GPA="<font color=red><b>Grade Penalty applied</b></font>"
var Earring1=0
var Earring2=0
var EARRINGOFANTHARASVR=0
var EARRINGOFZAKENVR=0
var EBuffDAMAGE=1
var FRINTEZZARD=0
var fullbody=0
var Helmet=0
var INT=0
var INTMOD=0
var Lower=0
var MasteryMATK=0
var MasteryPATK=1
var MEN=0
var MENMOD=0
var Necklace=0
var NECKLACEHP=0
var NECKLACEMATK=1
var NECKLACEPATK=1
var overMATK=0
var overPATK=0
var pen=0
var position=d.gI("POS").value
var Ring1=0
var Ring2=0
var RINGOFBAIUMACC=0
var RINGOFBAIUMCRITDMG=1
var RINGOFCOREACC=0
var RINGOFQUEENACC=0
var RINGOFQUEENCRITDMG=1
var RINGOFBAIUMASPD=1
var RINGOFBAIUMCAST=1
var Shield=0
var BaseShieldBlockRate=0.2
var EBaseShieldBlockRate=0.2
var ShieldEvasion=0
var STR=0
var STRMOD=0
var subcritical=0
var underMATK=0
var underMDEF=0
var underPATK=0
var helmetoverPDEF=0
var upperoverPDEF=0
var loweroverPDEF=0
var bootoverPDEF=0
var gloveoverPDEF=0
var necklaceoverPDEF=0
var earring1overPDEF=0
var earring2overPDEF=0
var ring1overPDEF=0
var ring2overPDEF=0
var helmetunderPDEF=0
var upperunderPDEF=0
var lowerunderPDEF=0
var bootunderPDEF=0
var gloveunderPDEF=0
var necklaceunderPDEF=0
var earring1underPDEF=0
var earring2underPDEF=0
var ring1underPDEF=0
var ring2underPDEF=0
var shield=0
var Upper=0
var VALAKASRD=0
var weightlimit=69000
var weightpenalty=0
var WIT=0
var WITMOD=0
var WpnAcc=0
var WpnMATK=0
var WpnType="unequipped"

//Level Modifier
var LVL = + d.gI("LV").value
var LVLMOD=(LVL+89)/100

var JOB=d.gI("job").value
JOB=PROFESSIONS[JOB]
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

if (race=="HF")
{BaseSTR=40;BaseCON=43;BaseDEX=30;BaseINT=21;BaseWIT=11;BaseMEN=25;BaseRun=115;BaseWalk=80;}
else if (race=="HM")
{BaseSTR=22;BaseCON=27;BaseDEX=21;BaseINT=41;BaseWIT=20;BaseMEN=39;BaseRun=120;BaseWalk=78;}
else if (race=="EF")
{BaseSTR=36;BaseCON=36;BaseDEX=35;BaseINT=23;BaseWIT=14;BaseMEN=26;BaseRun=125;BaseWalk=90;}
else if (race=="EM")
{BaseSTR=21;BaseCON=25;BaseDEX=24;BaseINT=37;BaseWIT=23;BaseMEN=40;BaseRun=122;BaseWalk=85;}
else if (race=="DF")
{BaseSTR=41;BaseCON=32;BaseDEX=34;BaseINT=25;BaseWIT=12;BaseMEN=26;BaseRun=122;BaseWalk=85;}
else if (race=="DM")
{BaseSTR=23;BaseCON=24;BaseDEX=23;BaseINT=44;BaseWIT=19;BaseMEN=37;BaseRun=122;BaseWalk=85;}
else if (race=="OF")
{BaseSTR=40;BaseCON=47;BaseDEX=26;BaseINT=18;BaseWIT=12;BaseMEN=27;BaseRun=117;BaseWalk=70;}
else if (race=="OM")
{BaseSTR=27;BaseCON=31;BaseDEX=24;BaseINT=31;BaseWIT=15;BaseMEN=42;BaseRun=121;BaseWalk=70;}
else if (race=="DW")
{BaseSTR=39;BaseCON=45;BaseDEX=29;BaseINT=20;BaseWIT=10;BaseMEN=27;BaseRun=115;BaseWalk=80;}

//default selections when class is changed
if (classreset){
	d.gI("ts1f").selectedIndex=0
	d.gI("ts2f").selectedIndex=0
	d.gI("ts3f").selectedIndex=0
	d.gI("ts1n").selectedIndex=0
	d.gI("ts2n").selectedIndex=0
	d.gI("ts3n").selectedIndex=0
	d.gI("ts1h").selectedIndex=0
	d.gI("ts2h").selectedIndex=0
	d.gI("ts3h").selectedIndex=0
	}

//Tattoo Restrictions by class
if (JOB=="AW"||JOB=="AR"||JOB=="AS"||JOB=="BD"||JOB=="BH"||JOB=="DA"||JOB=="DE"||JOB=="EK"||JOB=="EFS"||JOB=="GL"||JOB=="HE"||JOB=="HK"||JOB=="MO"||JOB=="OR"||JOB=="PA"||JOB=="PK"||JOB=="PR"||JOB=="PW"||JOB=="RO"||JOB=="SC"||JOB=="SK"||JOB=="SR"||JOB=="SW"||JOB=="TK"||JOB=="TH"||JOB=="TY"||JOB=="WD"||JOB=="WA"||JOB=="WS"||JOB=="EF"||JOB=="DF"||JOB=="OR"||JOB=="DO"||JOB=="HF"||JOB=="OF")
{
d.gI("ts1f").style.display = 'block'
d.gI("ts2f").style.display = 'block'
d.gI("ts3f").style.display = 'block'
d.gI("ts1h").style.display = 'none'
d.gI("ts2h").style.display = 'none'
d.gI("ts3h").style.display = 'none'
d.gI("ts1n").style.display = 'none'
d.gI("ts2n").style.display = 'none'
d.gI("ts3n").style.display = 'none'
if (d.gI("TTT1C").checked==true)
	{var TAT1=d.gI("ts1f").value}
else {var TAT1=0}
if (d.gI("TTT2C").checked==true)
	{var TAT2=d.gI("ts2f").value}
else {var TAT2=0}
if (d.gI("TTT3C").checked==true)
	{var TAT3=d.gI("ts3f").value}
else {var TAT3=0}
}
else if (JOB=="EO"||JOB=="CL"||JOB=="PP"||JOB=="BI"||JOB=="EE"||JOB=="SO"||JOB=="SHE"||JOB=="OS"||JOB=="WC"||JOB=="OL"||JOB=="OM")
{
d.gI("ts1f").style.display = 'none'
d.gI("ts2f").style.display = 'none'
d.gI("ts3f").style.display = 'none'
d.gI("ts1h").style.display = 'block'
d.gI("ts2h").style.display = 'block'
d.gI("ts3h").style.display = 'block'
d.gI("ts1n").style.display = 'none'
d.gI("ts2n").style.display = 'none'
d.gI("ts3n").style.display = 'none'
if (d.gI("TTT1C").checked==true)
	{var TAT1=d.gI("ts1h").value}
else {var TAT1=0}
if (d.gI("TTT2C").checked==true)
	{var TAT2=d.gI("ts2h").value}
else {var TAT2=0}
if (d.gI("TTT3C").checked==true)
	{var TAT3=d.gI("ts3h").value}
else {var TAT3=0}
}
else if (JOB=="WI"||JOB=="SOR"||JOB=="NE"||JOB=="WL"||JOB=="EW"||JOB=="SPS"||JOB=="ELS"||JOB=="DW"||JOB=="PS"||JOB=="SPH"||JOB=="DM"||JOB=="EM"||JOB=="HM")
{
d.gI("ts1f").style.display = 'none'
d.gI("ts2f").style.display = 'none'
d.gI("ts3f").style.display = 'none'
d.gI("ts1h").style.display = 'none'
d.gI("ts2h").style.display = 'none'
d.gI("ts3h").style.display = 'none'
d.gI("ts1n").style.display = 'block'
d.gI("ts2n").style.display = 'block'
d.gI("ts3n").style.display = 'block'
if (d.gI("TTT1C").checked==true)
	{var TAT1=d.gI("ts1n").value}
else {var TAT1=0}
if (d.gI("TTT2C").checked==true)
	{var TAT2=d.gI("ts2n").value}
else {var TAT2=0}
if (d.gI("TTT3C").checked==true)
	{var TAT3=d.gI("ts3n").value}
else {var TAT3=0}
}

if (JOB=="EF"||JOB=="DF"||JOB=="OR"||JOB=="DO"||JOB=="HF"||JOB=="HM"||JOB=="EM"||JOB=="DM"||JOB=="OM"){
d.gI("TTT2C").disabled=true
d.gI("TTT3C").disabled=true
d.gI("ts2f").disabled=true
d.gI("ts3f").disabled=true
d.gI("ts2h").disabled=true
d.gI("ts3h").disabled=true
d.gI("ts2n").disabled=true
d.gI("ts3n").disabled=true
var TAT2=0
var TAT3=0
}
else if (JOB=="RO"||JOB=="WA"||JOB=="HK"||JOB=="WI"||JOB=="CL"||JOB=="EK"||JOB=="EFS"||JOB=="EO"||JOB=="EW"||JOB=="PK"||JOB=="AS"||JOB=="DW"||JOB=="SO"||JOB=="MO"||JOB=="OR"||JOB=="OS"||JOB=="SC"||JOB=="AR"){
d.gI("TTT2C").disabled=false
d.gI("TTT3C").disabled=true
d.gI("ts2f").disabled=false
d.gI("ts3f").disabled=true
d.gI("ts2h").disabled=false
d.gI("ts3h").disabled=true
d.gI("ts2n").disabled=false
d.gI("ts3n").disabled=true
var TAT3=0
}
else{
d.gI("TTT2C").disabled=false
d.gI("TTT3C").disabled=false
d.gI("ts2f").disabled=false
d.gI("ts3f").disabled=false
d.gI("ts2h").disabled=false
d.gI("ts3h").disabled=false
d.gI("ts2n").disabled=false
d.gI("ts3n").disabled=false
}

///////N
//Tattoos
var TATSTR=STRTAT[TAT1]+STRTAT[TAT2]+STRTAT[TAT3]
if (TATSTR>5)
{TATSTR=5}
var TATDEX=DEXTAT[TAT1]+DEXTAT[TAT2]+DEXTAT[TAT3]
if (TATDEX>5)
{TATDEX=5}
var TATCON=CONTAT[TAT1]+CONTAT[TAT2]+CONTAT[TAT3]
if (TATCON>5)
{TATCON=5}
var TATINT=INTTAT[TAT1]+INTTAT[TAT2]+INTTAT[TAT3]
if (TATINT>5)
{TATINT=5}
var TATWIT=WITTAT[TAT1]+WITTAT[TAT2]+WITTAT[TAT3]
if (TATWIT>5)
{TATWIT=5}
var TATMEN=MENTAT[TAT1]+MENTAT[TAT2]+MENTAT[TAT3]
if (TATMEN>5)
{TATMEN=5}

var STR=TATSTR+BaseSTR
var DEX=TATDEX+BaseDEX
var CON=TATCON+BaseCON
var INT=TATINT+BaseINT
var WIT=TATWIT+BaseWIT
var MEN=TATMEN+BaseMEN

//Base HP/CP Calculation
if (JOB=="HF") {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.4
	ClassType="F1"}
else if (JOB=="WA" && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.8
	ClassType="F1"}
else if (JOB=="WA" && LVL>20) {
	BaseHP=-270+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.8
	ClassType="F2"}
else if (JOB=="GL" && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.9
	ClassType="F1"}
else if (JOB=="GL" && LVL>20 && LVL<=40) {
	BaseHP=-270+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.9
	ClassType="F2"}
else if (JOB=="GL" && LVL>40) {
	BaseHP=-620.4+34.01*LVL+0.19*(LVL*LVL)
	CPMOD=0.9
	ClassType="F3"}
else if (JOB=="WD" && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.8
	ClassType="F1"}
else if (JOB=="WD" && LVL>20 && LVL<=40) {
	BaseHP=-270+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.8
	ClassType="F2"}
else if (JOB=="WD" && LVL>40) {
	BaseHP=-795.6+37.59*LVL+0.21*(LVL*LVL)
	CPMOD=0.8
	ClassType="F3"}
else if (JOB=="HK" && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.6
	ClassType="F1"}
else if (JOB=="HK" && LVL>20) {
	BaseHP=-210.3+24.165*LVL+0.135*(LVL*LVL)
	CPMOD=0.6
	ClassType="F2"}
else if ((JOB=="DA"||JOB=="PA") && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.6
	ClassType="F1"}
else if ((JOB=="DA"||JOB=="PA") && LVL>20 && LVL<=40) {
	BaseHP=-210.3+24.165*LVL+0.135*(LVL*LVL)
	CPMOD=0.6
	ClassType="F2"}
else if ((JOB=="DA"||JOB=="PA") && LVL>40) {
	BaseHP=-604.5+32.22*LVL+0.18*(LVL*LVL)
	CPMOD=0.6
	ClassType="F3"}
else if (JOB=="RO" && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.4
	ClassType="F1"}
else if (JOB=="RO" && LVL>20) {
	BaseHP=-170.5+22.375*LVL+0.125*(LVL*LVL)
	CPMOD=0.4
	ClassType="F2"}
else if (JOB=="TH" && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.4
	ClassType="F1"}
else if (JOB=="TH" && LVL>20 && LVL<=40) {
	BaseHP=-170.5+22.375*LVL+0.125*(LVL*LVL)
	CPMOD=0.4
	ClassType="F2"}
else if (JOB=="TH" && LVL>40) {
	BaseHP=-477.1+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.4
	ClassType="F3"}
else if (JOB=="HE" && LVL<=20) {
	BaseHP=68.3+11.635*LVL+0.065*(LVL*LVL)
	CPMOD=0.7
	ClassType="F1"}
else if (JOB=="HE" && LVL>20 && LVL<=40) {
	BaseHP=-170.5+22.375*LVL+0.125*(LVL*LVL)
	CPMOD=0.7
	ClassType="F2"}
else if (JOB=="HE" && LVL>40) {
	BaseHP=-564.7+30.43*LVL+0.17*(LVL*LVL)
	CPMOD=0.7
	ClassType="F3"}
else if (JOB=="HM") {
	BaseHP=85.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="WI" && LVL<=20) {
	BaseHP=85.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="WI" && LVL>20) {
	BaseHP=-73.5+22.375*LVL+0.125*(LVL*LVL)
	CPMOD=0.5
	ClassType="M2"}
else if ((JOB=="SOR"||JOB=="NE") && LVL<=20) {
	BaseHP=85.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if ((JOB=="SOR"||JOB=="NE") && LVL>20 && LVL<=40) {
	BaseHP=-73.5+22.375*LVL+0.125*(LVL*LVL)
	CPMOD=0.5
	ClassType="M2"}
else if ((JOB=="SOR"||JOB=="NE") && LVL>40) {
	BaseHP=-511.5+31.325*LVL+0.175*(LVL*LVL)
	CPMOD=0.5
	ClassType="M3"}
else if (JOB=="WL" && LVL<=20) {
	BaseHP=85.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.6
	ClassType="M1"}
else if (JOB=="WL" && LVL>20 && LVL<=40) {
	BaseHP=-73.5+22.375*LVL+0.125*(LVL*LVL)
	CPMOD=0.6
	ClassType="M2"}
else if (JOB=="WL" && LVL>40) {
	BaseHP=-642.9+34.01*LVL+0.19*(LVL*LVL)
	CPMOD=0.6
	ClassType="M3"}
else if (JOB=="CL" && LVL<=20) {
	BaseHP=85.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="CL" && LVL>20) {
	BaseHP=-192.9+27.745*LVL+0.155*(LVL*LVL)
	CPMOD=0.5
	ClassType="M2"}
else if (JOB=="BI" && LVL<=20) {
	BaseHP=85.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.7
	ClassType="M1"}
else if (JOB=="BI" && LVL>20 && LVL<=40) {
	BaseHP=-192.9+27.745*LVL+0.155*(LVL*LVL)
	CPMOD=0.7
	ClassType="M2"}
else if (JOB=="BI" && LVL>40) {
	BaseHP=-499.5+34.01*LVL+0.19*(LVL*LVL)
	CPMOD=0.7
	ClassType="M3"}
else if (JOB=="PP" && LVL<=20) {
	BaseHP=85.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="PP" && LVL>20 && LVL<=40) {
	BaseHP=-192.9+27.745*LVL+0.155*(LVL*LVL)
	CPMOD=0.5
	ClassType="M2"}
else if (JOB=="PP" && LVL>40) {
	BaseHP=-630.9+36.695*LVL+0.205*(LVL*LVL)
	CPMOD=0.5
	ClassType="M3"}
else if (JOB=="EF") {
	BaseHP=76.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.4
	ClassType="F1"}
else if (JOB=="EK" && LVL<=20) {
	BaseHP=76.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.5
	ClassType="F1"}
else if (JOB=="EK" && LVL>20) {
	BaseHP=-242+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.5
	ClassType="F2"}
else if (JOB=="TK" && LVL<=20) {
	BaseHP=76.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.6
	ClassType="F1"}
else if (JOB=="TK" && LVL>20 && LVL<=40) {
	BaseHP=-242+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.6
	ClassType="F2"}
else if (JOB=="TK" && LVL>40) {
	BaseHP=-680+35.8*LVL+0.2*(LVL*LVL)
	CPMOD=0.6
	ClassType="F3"}
else if (JOB=="SW" && LVL<=20) {
	BaseHP=76.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.5
	ClassType="F1"}
else if (JOB=="SW" && LVL>20 && LVL<=40) {
	BaseHP=-242+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.5
	ClassType="F2"}
else if (JOB=="SW" && LVL>40) {
	BaseHP=-767.6+37.59*LVL+0.21*(LVL*LVL)
	CPMOD=0.5
	ClassType="F3"}
else if (JOB=="EFS" && LVL<=20) {
	BaseHP=76.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.4
	ClassType="F1"}
else if (JOB=="EFS" && LVL>20) {
	BaseHP=-202.2+25.06*LVL+0.14*(LVL*LVL)
	CPMOD=0.4
	ClassType="F2"}
else if (JOB=="PW" && LVL<=20) {
	BaseHP=76.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.4
	ClassType="F1"}
else if (JOB=="PW" && LVL>20 && LVL<=40) {
	BaseHP=-202.2+25.06*LVL+0.14*(LVL*LVL)
	CPMOD=0.4
	ClassType="F2"}
else if (JOB=="PW" && LVL>40) {
	BaseHP=-552.6+32.22*LVL+0.18*(LVL*LVL)
	CPMOD=0.4
	ClassType="F3"}
else if (JOB=="SR" && LVL<=20) {
	BaseHP=76.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.5
	ClassType="F1"}
else if (JOB=="SR" && LVL>20 && LVL<=40) {
	BaseHP=-202.2+25.06*LVL+0.14*(LVL*LVL)
	CPMOD=0.5
	ClassType="F2"}
else if (JOB=="SR" && LVL>40) {
	BaseHP=-640.2+34.01*LVL+0.19*(LVL*LVL)
	CPMOD=0.5
	ClassType="F3"}
else if (JOB=="EM") {
	BaseHP=88.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="EW" && LVL<=20) {
	BaseHP=88.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="EW" && LVL>20) {
	BaseHP=-90.4+23.27*LVL+0.13*(LVL*LVL)
	CPMOD=0.5
	ClassType="M2"}
else if (JOB=="SPS" && LVL<=20) {
	BaseHP=88.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="SPS" && LVL>20 && LVL<=40) {
	BaseHP=-90.4+23.27*LVL+0.13*(LVL*LVL)
	CPMOD=0.5
	ClassType="M2"}
else if (JOB=="SPS" && LVL>40) {
	BaseHP=-572.2+33.115*LVL+0.185*(LVL*LVL)
	CPMOD=0.5
	ClassType="M3"}
else if (JOB=="ELS" && LVL<=20) {
	BaseHP=88.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.6
	ClassType="M1"}
else if (JOB=="ELS" && LVL>20 && LVL<=40) {
	BaseHP=-90.4+23.27*LVL+0.13*(LVL*LVL)
	CPMOD=0.6
	ClassType="M2"}
else if (JOB=="ELS" && LVL>40) {
	BaseHP=-659.8+34.905*LVL+0.195*(LVL*LVL)
	CPMOD=0.6
	ClassType="M3"}
else if (JOB=="EO" && LVL<=20) {
	BaseHP=88.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="EO" && LVL>20) {
	BaseHP=-209.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.5
	ClassType="M2"}
else if (JOB=="EE" && LVL<=20) {
	BaseHP=88.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="EE" && LVL>20 && LVL<=40) {
	BaseHP=-209.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.5
	ClassType="M2"}
else if (JOB=="EE" && LVL>40) {
	BaseHP=-647.8+37.59*LVL+0.21*(LVL*LVL)
	CPMOD=0.5
	ClassType="M3"}
else if (JOB=="DF") {
	BaseHP=80.5+13.425*LVL+0.075*(LVL*LVL)
	CPMOD=0.4
	ClassType="F1"}
else if (JOB=="PK" && LVL<=20) {
	BaseHP=80.5+13.425*LVL+0.075*(LVL*LVL)
	CPMOD=0.5
	ClassType="F1"}
else if (JOB=="PK" && LVL>20) {
	BaseHP=-257.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.5
	ClassType="F2"}
else if (JOB=="SK" && LVL<=20) {
	BaseHP=80.5+13.425*LVL+0.075*(LVL*LVL)
	CPMOD=0.6
	ClassType="F1"}
else if (JOB=="SK" && LVL>20 && LVL<=40) {
	BaseHP=-257.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.6
	ClassType="F2"}
else if (JOB=="SK" && LVL>40) {
	BaseHP=-695.8+37.59*LVL+0.21*(LVL*LVL)
	CPMOD=0.6
	ClassType="F3"}
else if (JOB=="BD" && LVL<=20) {
	BaseHP=80.5+13.425*LVL+0.075*(LVL*LVL)
	CPMOD=0.5
	ClassType="F1"}
else if (JOB=="BD" && LVL>20 && LVL<=40) {
	BaseHP=-257.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.5
	ClassType="F2"}
else if (JOB=="BD" && LVL>40) {
	BaseHP=-827.2+40.275*LVL+0.225*(LVL*LVL)
	CPMOD=0.5
	ClassType="F3"}
else if (JOB=="AS" && LVL<=20) {
	BaseHP=80.5+13.425*LVL+0.075*(LVL*LVL)
	CPMOD=0.4
	ClassType="F1"}
else if (JOB=="AS" && LVL>20) {
	BaseHP=-218+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.4
	ClassType="F2"}
else if (JOB=="AW" && LVL<=20) {
	BaseHP=80.5+13.425*LVL+0.075*(LVL*LVL)
	CPMOD=0.4
	ClassType="F1"}
else if (JOB=="AW" && LVL>20 && LVL<=40) {
	BaseHP=-218+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.4
	ClassType="F2"}
else if (JOB=="AW" && LVL>40) {
	BaseHP=-568.4+34.01*LVL+0.19*(LVL*LVL)
	CPMOD=0.4
	ClassType="F3"}
else if (JOB=="PR" && LVL<=20) {
	BaseHP=80.5+13.425*LVL+0.075*(LVL*LVL)
	CPMOD=0.5
	ClassType="F1"}
else if (JOB=="PR" && LVL>20 && LVL<=40) {
	BaseHP=-218+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.5
	ClassType="F2"}
else if (JOB=="PR" && LVL>40) {
	BaseHP=-656+35.8*LVL+0.2*(LVL*LVL)
	CPMOD=0.5
	ClassType="F3"}
else if (JOB=="DM") {
	BaseHP=90.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="DW" && LVL<=20) {
	BaseHP=90.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="DW" && LVL>20) {
	BaseHP=-108.3+24.165*LVL+0.135*(LVL*LVL)
	CPMOD=0.5
	ClassType="M2"}
else if (JOB=="SPH" && LVL<=20) {
	BaseHP=90.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="SPH" && LVL>20 && LVL<=40) {
	BaseHP=-108.3+24.165*LVL+0.135*(LVL*LVL)
	CPMOD=0.5
	ClassType="M2"}
else if (JOB=="SPH" && LVL>40) {
	BaseHP=-546.3+33.115*LVL+0.185*(LVL*LVL)
	CPMOD=0.5
	ClassType="M3"}
else if (JOB=="PS" && LVL<=20) {
	BaseHP=90.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.6
	ClassType="M1"}
else if (JOB=="PS" && LVL>20 && LVL<=40) {
	BaseHP=-108.3+24.165*LVL+0.135*(LVL*LVL)
	CPMOD=0.6
	ClassType="M2"}
else if (JOB=="PS" && LVL>40) {
	BaseHP=-656+35.8*LVL+0.2*(LVL*LVL)
	CPMOD=0.6
	ClassType="M3"}
else if (JOB=="SO" && LVL<=20) {
	BaseHP=90.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="SO" && LVL>20) {
	BaseHP=-227.7+29.535*LVL+0.165*(LVL*LVL)
	CPMOD=0.5
	ClassType="M2"}
else if (JOB=="SHE" && LVL<=20) {
	BaseHP=90.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="SHE" && LVL>20 && LVL<=40) {
	BaseHP=-227.7+29.535*LVL+0.165*(LVL*LVL)
	CPMOD=0.5
	ClassType="M2"}
else if (JOB=="SHE" && LVL>40) {
	BaseHP=-621.9+37.59*LVL+0.21*(LVL*LVL)
	CPMOD=0.5
	ClassType="M3"}
else if (JOB=="OF") {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.5
	ClassType="F1"}
else if (JOB=="MO" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.5
	ClassType="F1"}
else if (JOB=="MO" && LVL>20) {
	BaseHP=-251+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.5
	ClassType="F2"}
else if (JOB=="TY" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.5
	ClassType="F1"}
else if (JOB=="TY" && LVL>20 && LVL<=40) {
	BaseHP=-251+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.5
	ClassType="F2"}
else if (JOB=="TY" && LVL>40) {
	BaseHP=-776.6+37.59*LVL+0.21*(LVL*LVL)
	CPMOD=0.5
	ClassType="F3"}
else if (JOB=="OR" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.7
	ClassType="F1"}
else if (JOB=="OR" && LVL>20) {
	BaseHP=-290.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.7
	ClassType="F2"}
else if (JOB=="DE" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.7
	ClassType="F1"}
else if (JOB=="DE" && LVL>20 && LVL<=40) {
	BaseHP=-290.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.7
	ClassType="F2"}
else if (JOB=="DE" && LVL>40) {
	BaseHP=-816.4+39.38*LVL+0.22*(LVL*LVL)
	CPMOD=0.7
	ClassType="F3"}
else if (JOB=="OM") {
	BaseHP=79.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="OS" && LVL<=20) {
	BaseHP=79.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="OS" && LVL>20) {
	BaseHP=-218.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.5
	ClassType="M2"}
else if (JOB=="WC" && LVL<=20) {
	BaseHP=79.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.5
	ClassType="M1"}
else if (JOB=="WC" && LVL>20 && LVL<=40) {
	BaseHP=-218.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.5
	ClassType="M2"}
else if (JOB=="WC" && LVL>40) {
	BaseHP=-613+36.695*LVL+0.205*(LVL*LVL)
	CPMOD=0.5
	ClassType="M3"}
else if (JOB=="OL" && LVL<=20) {
	BaseHP=79.7+15.215*LVL+0.085*(LVL*LVL)
	CPMOD=0.8
	ClassType="M1"}
else if (JOB=="OL" && LVL>20 && LVL<=40) {
	BaseHP=-218.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.8
	ClassType="M2"}
else if (JOB=="OL" && LVL>40) {
	BaseHP=-613+36.695*LVL+0.205*(LVL*LVL)
	CPMOD=0.8
	ClassType="M3"}
else if (JOB=="DO") {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.7
	ClassType="F1"}
else if (JOB=="AR" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.8
	ClassType="F1"}
else if (JOB=="AR" && LVL>20) {
	BaseHP=-251+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.8
	ClassType="F2"}
else if (JOB=="WS" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.8
	ClassType="F1"}
else if (JOB=="WS" && LVL>20 && LVL<=40) {
	BaseHP=-251+26.85*LVL+0.15*(LVL*LVL)
	CPMOD=0.8
	ClassType="F2"}
else if (JOB=="WS" && LVL>40) {
	BaseHP=-776.6+37.59*LVL+0.21*(LVL*LVL)
	CPMOD=0.8
	ClassType="F3"}
else if (JOB=="SC" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.7
	ClassType="F1"}
else if (JOB=="SC" && LVL>20) {
	BaseHP=-290.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.7
	ClassType="F2"}
else if (JOB=="BH" && LVL<=20) {
	BaseHP=67.4+12.53*LVL+0.07*(LVL*LVL)
	CPMOD=0.7
	ClassType="F1"}
else if (JOB=="BH" && LVL>20 && LVL<=40) {
	BaseHP=-290.8+28.64*LVL+0.16*(LVL*LVL)
	CPMOD=0.7
	ClassType="F2"}
else if (JOB=="BH" && LVL>40) {
	BaseHP=-816.4+39.38*LVL+0.22*(LVL*LVL)
	CPMOD=0.7
	ClassType="F3"}
BaseCP=BaseHP*CPMOD

//Base MP
if (ClassType=="F1")
	{BaseMP=FIGHTER1MP[LVL]}
else if (ClassType=="F2")
	{BaseMP=FIGHTER2MP[LVL]}
else if (ClassType=="F3")
	{BaseMP=FIGHTER3MP[LVL]}
else if (ClassType=="M1")
	{BaseMP=MYSTIC1MP[LVL]}
else if (ClassType=="M2")
	{BaseMP=MYSTIC2MP[LVL]}
else if (ClassType=="M3")
	{BaseMP=MYSTIC3MP[LVL]}

//Move Mode
var movemode=d.gI("MVM").value
movemode=MOVEMODE[movemode]

//Shield Grade
var shieldgrade=d.gI("SHDG").value
shieldgrade=GRADE[shieldgrade]
if (shieldgrade=="S")
	{shield=d.gI("SHDS").value;}
else if (shieldgrade=="A")
	{shield=d.gI("SHDA").value;}
else if (shieldgrade=="B")
	{shield=d.gI("SHDB").value;}
else if (shieldgrade=="C")
	{shield=d.gI("SHDC").value;}
else if (shieldgrade=="D")
	{shield=d.gI("SHDD").value;}
else if (shieldgrade=="N")
	{shield=d.gI("SHDN").value;}

//Shields
Shield=SHIELDPDEF[shield]
if (shield=="0")
{ShieldEvasion=0}
else if (shield>0)
{ShieldEvasion=-8}

//Shield Enchant
var shieldenchant=d.gI("SHDE").value
if (shieldenchant <= 3)
	{shieldunderenchant=shieldenchant;shieldoverenchant=0;}
else
	{shieldunderenchant=3;shieldoverenchant=shieldenchant-3;}
if (shield=="0") {
	shieldunderPDEF=0
	shieldoverPDEF=0
	Shield=Shield
	BaseShieldBlockRate=0
	}
else if (shieldgrade=="N") {
	shieldunderPDEF=0
	shieldoverPDEF=0
	Shield=Shield
	}
else {
	shieldunderPDEF=1
	shieldoverPDEF=3
	Shield=Shield+(shieldunderenchant*shieldunderPDEF)+(shieldoverenchant*shieldoverPDEF)
	}

//Weapon Grade
var weapongrade=d.gI("WPNG").value
weapongrade=GRADE[weapongrade]
if (weapongrade=="S")
	{var weapon=d.gI("WPNS").value}
else if (weapongrade=="A")
	{var weapon=d.gI("WPNA").value}
else if (weapongrade=="B")
	{var weapon=d.gI("WPNB").value}
else if (weapongrade=="C")
	{var weapon=d.gI("WPNC").value}
else if (weapongrade=="D")
	{var weapon=d.gI("WPND").value}
else if (weapongrade=="N")
	{var weapon=d.gI("WPNN").value}
else if (weapongrade=="H")
	{var weapon=d.gI("WPNH").value}

//Weapon SAs
var weaponsa=document.forms['statcalculator'].WPNSA;
weaponsa.length=5
for (i=0;i<5;i++)
	{
	var p=i*2+4
	if (WEAPON[weapon][p]!="")
		{
		weaponsa.options[i] = new Option(WEAPON[weapon][p],WEAPON[weapon][p],false,weaponsa.options[i].selected);
		}
	if (WEAPON[weapon][p]==""||WEAPON[weapon][p]==null)
		{
		weaponsa.length=i
		break
		}
	}

//Weapon Enchant
var weaponenchant=d.gI("WPNE").value
if (weaponenchant <= 3)
	{weaponunderenchant=weaponenchant;weaponoverenchant=0;}
else
	{weaponunderenchant=3;weaponoverenchant=weaponenchant-3;}
if (weapongrade=="N"||weapon=="0") {
	d.gI("WPNE").disabled=true
	underMATK=0
	overMATK=0
	}
else if (weapongrade=="H") {
	d.gI("WPNE").disabled=true
	underMATK=0
	overMATK=0
	}
else if (weapongrade=="D") {
	d.gI("WPNE").disabled=false
	underMATK=2
	overMATK=4
	}
else if (weapongrade=="S") {
	d.gI("WPNE").disabled=false
	underMATK=4
	overMATK=8
	}
else {
	d.gI("WPNE").disabled=false
	underMATK=3
	overMATK=6
	}

///////Y
//Weapons
WpnPATK=WEAPON[weapon][0]
WpnMATK=WEAPON[weapon][1]
WpnType=WEAPON[weapon][2]
if (WpnType!="Duals")
	{
	var weapon_sa=d.gI("WPNSA").value
	var sasubvalue=d.gI("WPNSA").selectedIndex
	var samultiplier=sasubvalue*2+5
	}
else if (WpnType=="Duals")
	{
	var duals_sa=WEAPON[weapon][4]
	var duals_v=WEAPON[weapon][5]
	}

var CSA=0
if (weapongrade=="D" && LVL<20 && weapon!=0)
	{BuffACC=BuffACC-20;d.gI("weapon grade penalty").innerHTML=GPA}
else if (weapongrade=="C" && LVL<40 && weapon!=0)
	{CSA=1;BuffACC=BuffACC-20;d.gI("weapon grade penalty").innerHTML=GPA}
else if (weapongrade=="B" && LVL<52 && weapon!=0)
	{CSA=1;BuffACC=BuffACC-20;d.gI("weapon grade penalty").innerHTML=GPA}
else if (weapongrade=="A" && LVL<61 && weapon!=0)
	{CSA=1;BuffACC=BuffACC-20;d.gI("weapon grade penalty").innerHTML=GPA}
else if ((weapongrade=="S"||weapongrade=="H") && LVL<76 && weapon!=0)
	{CSA=1;BuffACC=BuffACC-20;d.gI("weapon grade penalty").innerHTML=GPA}
else
	{d.gI("weapon grade penalty").innerHTML=" "}

if ((race=="HM"||race=="EM"||race=="DM"||race=="OM") && weapon==0)
	{WpnPATK=3}
if (weapon_sa=="Haste" && CSA==0)
	{BuffASPD=BuffASPD*WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Acumen" && CSA==0)
	{BuffCAST=BuffCAST*1.15}
else if (weapon_sa=="Mana Up" && CSA==0)
	{BuffMP=BuffMP*1.3}
else if (weapon_sa=="Health" && CSA==0)
	{BuffHP=BuffHP*1.25}
else if (weapon_sa=="Focus" && CSA==0)
	{AddCRIT=AddCRIT+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Empower" && CSA==0)
	{AddMATK=AddMATK+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Evasion" && CSA==0)
	{BuffEVA=BuffEVA+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Guidance" && CSA==0)
	{BuffACC=BuffACC+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Anger" && CSA==0)
	{BuffHP=BuffHP*0.85;AddPATK=AddPATK+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Conversion" && CSA==0)
	{BuffMP=BuffMP*1.6;BuffHP=BuffHP*0.6}
else if (weapon_sa=="Rsk. Focus" && CSA==0)
	{AddCRIT60=AddCRIT60+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Rsk. Haste" && CSA==0)
	{BuffASPD60=BuffASPD60*WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Rsk. Evasion" && CSA==0)
	{BuffEVA60=BuffEVA60+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Magic Power" && CSA==0)
	{AddMATK=AddMATK+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Critical Anger" && CSA==0)
	{BuffHP=BuffHP*0.85;AddCRITDMG=AddCRITDMG+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Critical Damage" && CSA==0)
	{AddCRITDMG=AddCRITDMG+WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Quick Recovery" && CSA==0)
	{bowdelay=bowdelay*WEAPON[weapon][samultiplier]}
else if (weapon_sa=="Back Blow" && CSA==0 && (position==3||position==5))
	{AddCOMBATCRIT=AddCOMBATCRIT+(WEAPON[weapon][samultiplier]*1.4)}
else if (weapon_sa=="HP Regeneration" && CSA==0)
	{AddHPR=AddHPR+(WEAPON[weapon][samultiplier]*movemode)}
else if (weapon_sa=="MP Regeneration" && CSA==0)
	{AddMPR=AddMPR+(WEAPON[weapon][samultiplier]*movemode)}
else if (duals_sa=="HP/CP/MP" && weaponenchant >=4 && CSA==0)
	{BuffHP=BuffHP*1.15;BuffMP=BuffMP*1.2;BuffCP=BuffCP*1.3}
else if (duals_sa=="Guidance" && weaponenchant >=4 && CSA==0)
	{BuffACC=BuffACC+duals_v}
else if (duals_sa=="Health" && weaponenchant >=4 && CSA==0)
	{BuffHP=BuffHP*1.25}
else if (duals_sa=="Haste" && weaponenchant >=4 && CSA==0)
	{BuffASPD=BuffASPD*duals_v}
else if (duals_sa=="Focus" && weaponenchant >=4 && CSA==0)
	{AddCRIT=AddCRIT+duals_v}
else if (duals_sa=="Critical Damage" && weaponenchant >=4 && CSA==0)
	{AddCRITDMG=AddCRITDMG+duals_v}
else if (weapon=="330" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;BuffShieldBlockRate=BuffShieldBlockRate*1.39;BuffRD=BuffRD+0.09}
else if (weapon=="331" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;BuffRD=BuffRD+0.09;BuffSHIELDPDEF=BuffSHIELDPDEF*1.33}
else if (weapon=="332" && CSA==0)
	{BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;bowdelay=bowdelay*0.932}
else if (weapon=="333" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffCP=BuffCP*1.5;AddCRIT=AddCRIT+78.7;AddCRITDMG=AddCRITDMG+504}
else if (weapon=="334" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffCP=BuffCP*1.5;BuffASPD=BuffASPD*1.07}
else if (weapon=="335" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;BuffEVA=BuffEVA+3.15}
else if (weapon=="336" && CSA==0)
	{BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;BuffCAST=BuffCAST*1.15}
else if (weapon=="337" && CSA==0)
	{BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;AddMATK=AddMATK+29.67}
else if (weapon=="338" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffCP=BuffCP*1.5;BuffASPD=BuffASPD*1.07;BuffACC=BuffACC+4.89}
else if (weapon=="339" && CSA==0)
	{BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;BuffASPD*BuffASPD*1.03;BuffVR=BuffVR+0.02}
else if (weapon=="340" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;AddCRIT=AddCRIT+78.7}
if (weapon=="339" && CSA==0 && (position==3||position==5))
	{AddCOMBATCRIT=AddCOMBATCRIT+22}

//Weapon Types
var ShieldDisabled=false
if (WpnType=="unequipped")
	{WpnSpd=300;WpnAcc=0;WpnCrt=40;WpnMAS="Fist";ShieldDisabled=false;randdmg=1.1}
else if (WpnType=="2hs")
	{WpnSpd=325;WpnAcc=0;WpnCrt=80;WpnMAS="Sword";ShieldDisabled=true;randdmg=1.1}
else if (WpnType=="2hb")
	{WpnSpd=325;WpnAcc=4.75;WpnCrt=40;WpnMAS="Blunt";ShieldDisabled=true;randdmg=1.2}
else if (WpnType=="Sword")
	{WpnSpd=379;WpnAcc=0;WpnCrt=80;WpnMAS="Sword";ShieldDisabled=false;randdmg=1.1}
else if (WpnType=="Duals")
	{WpnSpd=325;WpnAcc=0;WpnCrt=80;WpnMAS="Duals";ShieldDisabled=true;randdmg=1.1}
else if (WpnType=="Blunt")
	{WpnSpd=379;WpnAcc=4.75;WpnCrt=40;WpnMAS="Blunt";ShieldDisabled=false;randdmg=1.2}
else if (WpnType=="Bow")
	{WpnSpd=293;WpnAcc=(-3.75);WpnCrt=120;WpnMAS="Bow";ShieldDisabled=true;randdmg=1.05}
else if (WpnType=="YumiBow")
	{WpnSpd=227;WpnAcc=(-3.75);WpnCrt=120;WpnMAS="Bow";ShieldDisabled=true;randdmg=1.05;bowdelay=bowdelay*0.5466}
else if (WpnType=="Dagger")
	{WpnSpd=433;WpnAcc=(-3.75);WpnCrt=120;WpnMAS="Dagger";ShieldDisabled=false;randdmg=1.05}
else if (WpnType=="Polearm")
	{WpnSpd=325;WpnAcc=(-3.75);WpnCrt=80;WpnMAS="Polearm";ShieldDisabled=true;randdmg=1.1}
else if (WpnType=="Fist")
	{WpnSpd=325;WpnAcc=4.75;WpnCrt=40;WpnMAS="Fist";ShieldDisabled=true;randdmg=1.05}
else if (WpnType=="Etc")
	{WpnSpd=379;WpnAcc=4.75;WpnCrt=40;WpnMAS="Etc";ShieldDisabled=false;randdmg=1.1}

if (ShieldDisabled==true) {
	d.gI("SHDS").disabled=true
	d.gI("SHDA").disabled=true
	d.gI("SHDB").disabled=true
	d.gI("SHDC").disabled=true
	d.gI("SHDD").disabled=true
	d.gI("SHDN").disabled=true
	shield="unequipped"
	Shield=0
	ShieldEvasion=0
	BaseShieldBlockRate=0
	}
else if (ShieldDisabled==false) {
	d.gI("SHDS").disabled=false
	d.gI("SHDA").disabled=false
	d.gI("SHDB").disabled=false
	d.gI("SHDC").disabled=false
	d.gI("SHDD").disabled=false
	d.gI("SHDN").disabled=false
}
if (shieldgrade=="N"||Shield=="0") {
	d.gI("SHDE").disabled=true
	}
else {
	d.gI("SHDE").disabled=false
	}

if (shieldgrade=="D" && LVL<20 && Shield!=0)
	{pen=pen+1;d.gI("SHD grade penalty").innerHTML=GPA}
else if (shieldgrade=="C" && LVL<40 && Shield!=0)
	{pen=pen+1;d.gI("SHD grade penalty").innerHTML=GPA}
else if (shieldgrade=="B" && LVL<52 && Shield!=0)
	{pen=pen+1;d.gI("SHD grade penalty").innerHTML=GPA}
else if (shieldgrade=="A" && LVL<61 && Shield!=0)
	{pen=pen+1;d.gI("SHD grade penalty").innerHTML=GPA}
else if (shieldgrade=="S" && LVL<76 && Shield!=0)
	{pen=pen+1;d.gI("SHD grade penalty").innerHTML=GPA}
else
	{d.gI("SHD grade penalty").innerHTML=" "}


if (WpnMAS=="Bow" && weapongrade=="S")
	{underPATK=10;overPATK=20}
else if (WpnMAS=="Bow" && weapongrade=="A")
	{underPATK=8;overPATK=16}
else if (WpnMAS=="Bow" && (weapongrade=="B" || weapongrade=="C"))
	{underPATK=6;overPATK=12}
else if (WpnMAS=="Bow" && weapongrade=="D")
	{underPATK=4;overPATK=8}
else if (WpnType=="Dagger" && weapongrade=="S")
	{underPATK=5;overPATK=10}
else if (WpnType=="Dagger" && weapongrade=="A")
	{underPATK=4;overPATK=8}
else if (WpnType=="Dagger" && (weapongrade=="B" || weapongrade=="C"))
	{underPATK=3;overPATK=6}
else if (WpnType=="Dagger" && weapongrade=="D")
	{underPATK=2;overPATK=4}
else if ((WpnType=="2hs"||WpnType=="2hb") && weapongrade=="S")
	{underPATK=6;overPATK=12}
else if ((WpnType=="2hs"||WpnType=="2hb") && weapongrade=="A")
	{underPATK=5;overPATK=10}
else if ((WpnType=="2hs"||WpnType=="2hb") && (weapongrade=="B" || weapongrade=="C"))
	{underPATK=4;overPATK=8}
else if ((WpnType=="2hs"||WpnType=="2hb") && weapongrade=="D")
	{underPATK=2;overPATK=4}
else if ((WpnType=="Duals"||WpnType=="Fist") && weapongrade=="S")
	{underPATK=6;overPATK=12}
else if ((WpnType=="Duals"||WpnType=="Fist") && weapongrade=="A")
	{underPATK=5;overPATK=10}
else if ((WpnType=="Duals"||WpnType=="Fist") && (weapongrade=="B" || weapongrade=="C"))
	{underPATK=4;overPATK=8}
else if ((WpnType=="Duals"||WpnType=="Fist") && weapongrade=="D")
	{underPATK=4;overPATK=8}
else if ((WpnType=="Sword"||WpnType=="Blunt") && weapongrade=="S")
	{underPATK=5;overPATK=10}
else if ((WpnType=="Sword"||WpnType=="Blunt") && weapongrade=="A")
	{underPATK=4;overPATK=8}
else if ((WpnType=="Sword"||WpnType=="Blunt") && (weapongrade=="B" || weapongrade=="C"))
	{underPATK=3;overPATK=6}
else if ((WpnType=="Sword"||WpnType=="Blunt") && weapongrade=="D")
	{underPATK=2;overPATK=4}
else if (WpnType=="Polearm" && weapongrade=="S")
	{underPATK=5;overPATK=10}
else if (WpnType=="Polearm" && weapongrade=="A")
	{underPATK=4;overPATK=8}
else if (WpnType=="Polearm" && (weapongrade=="B" || weapongrade=="C"))
	{underPATK=3;overPATK=6}
else if (WpnType=="Polearm" && weapongrade=="D")
	{underPATK=2;overPATK=4}

///////O
//Helmet Grade
var helmetgrade=d.gI("HLMG").value
helmetgrade=GRADE[helmetgrade]
if (helmetgrade=="S")
	{helmet=d.gI("HLMS").value}
else if (helmetgrade=="A")
	{helmet=d.gI("HLMA").value}
else if (helmetgrade=="B")
	{helmet=d.gI("HLMB").value}
else if (helmetgrade=="C")
	{helmet=d.gI("HLMC").value}
else if (helmetgrade=="D")
	{helmet=d.gI("HLMD").value}
else if (helmetgrade=="N")
	{helmet=d.gI("HLMN").value}

if (helmetgrade=="D" && LVL<20 && helmet!=0)
	{pen=pen+1;d.gI("HLM grade penalty").innerHTML=GPA}
else if (helmetgrade=="C" && LVL<40 && helmet!=0)
	{pen=pen+1;d.gI("HLM grade penalty").innerHTML=GPA}
else if (helmetgrade=="B" && LVL<52 && helmet!=0)
	{pen=pen+1;d.gI("HLM grade penalty").innerHTML=GPA}
else if (helmetgrade=="A" && LVL<61 && helmet!=0)
	{pen=pen+1;d.gI("HLM grade penalty").innerHTML=GPA}
else if (helmetgrade=="S" && LVL<76 && helmet!=0)
	{pen=pen+1;d.gI("HLM grade penalty").innerHTML=GPA}
else
	{d.gI("HLM grade penalty").innerHTML=" "}

//Helmets
Helmet=HELMETPDEF[helmet]
HelmetSet=HELMETSET[helmet]

//Helmet Enchant
var helmetenchant=d.gI("HLME").value
if (helmetenchant <= 3)
	{helmetunderenchant=helmetenchant;helmetoverenchant=0;}
else
	{helmetunderenchant=3;helmetoverenchant=helmetenchant-3;}
if (helmetgrade=="N"||helmet=="0") {
	d.gI("HLME").disabled=true
	helmetunderPDEF=0
	helmetoverPDEF=0
	Helmet=Helmet
	}
else {
	d.gI("HLME").disabled=false
	helmetunderPDEF=1
	helmetoverPDEF=3
	Helmet=Helmet+(helmetunderenchant*helmetunderPDEF)+(helmetoverenchant*helmetoverPDEF)
	}

//Body Grade
var lowergrade=d.gI("LWRG").value
lowergrade=GRADE[lowergrade]
if (lowergrade=="S")
	{lower=d.gI("LWRS").value}
else if (lowergrade=="A")
	{lower=d.gI("LWRA").value}
else if (lowergrade=="B")
	{lower=d.gI("LWRB").value}
else if (lowergrade=="C")
	{lower=d.gI("LWRC").value}
else if (lowergrade=="D")
	{lower=d.gI("LWRD").value}
else if (lowergrade=="N")
	{lower=d.gI("LWRN").value}

//Body (Lower)
Lower=LOWERPDEF[lower]
ALType=LOWERTYPE[lower]
LowerSet=LOWERSET[lower]
if ((race=="HM"||race=="EM"||race=="DM"||race=="OM") && lower==0)
{Lower=8}

//Body (Lower) Enchant
var lowerenchant=d.gI("LWRE").value
if (lowerenchant <= 3)
	{lowerunderenchant=lowerenchant;loweroverenchant=0;}
else
	{lowerunderenchant=3;loweroverenchant=lowerenchant-3;}
if (lowergrade=="N"||lower=="0") {
	d.gI("LWRE").disabled=true
	lowerunderPDEF=0
	loweroverPDEF=0
	Lower=Lower
	}
else {
	d.gI("LWRE").disabled=false
	lowerunderPDEF=1
	loweroverPDEF=3
	Lower=Lower+(lowerunderenchant*lowerunderPDEF)+(loweroverenchant*loweroverPDEF)
	}

//Body (Upper) Grade
var uppergrade=d.gI("UPRG").value
uppergrade=GRADE[uppergrade]
if (uppergrade=="S")
	{upper=d.gI("UPRS").value}
else if (uppergrade=="A")
	{upper=d.gI("UPRA").value}
else if (uppergrade=="B")
	{upper=d.gI("UPRB").value}
else if (uppergrade=="C")
	{upper=d.gI("UPRC").value}
else if (uppergrade=="D")
	{upper=d.gI("UPRD").value}
else if (uppergrade=="N")
	{upper=d.gI("UPRN").value}

if (uppergrade=="D" && LVL<20 && upper!=0)
	{pen=pen+1;d.gI("UPR grade penalty").innerHTML=GPA}
else if (uppergrade=="C" && LVL<40 && upper!=0)
	{pen=pen+1;d.gI("UPR grade penalty").innerHTML=GPA}
else if (uppergrade=="B" && LVL<52 && upper!=0)
	{pen=pen+1;d.gI("UPR grade penalty").innerHTML=GPA}
else if (uppergrade=="A" && LVL<61 && upper!=0)
	{pen=pen+1;d.gI("UPR grade penalty").innerHTML=GPA}
else if (uppergrade=="S" && LVL<76 && upper!=0)
	{pen=pen+1;d.gI("UPR grade penalty").innerHTML=GPA}
else
	{d.gI("UPR grade penalty").innerHTML=" "}

//Upper
Upper=UPPERPDEF[upper]
AddMP=AddMP+UPPERMP[upper]
AUType=UPPERTYPE[upper]
fullbody=FULLBODY[upper]
UpperSet=UPPERSET[upper]
if ((race=="HM"||race=="EM"||race=="DM"||race=="OM") && upper==0)
	{Upper=15}

//Body (Upper) Enchant
var upperenchant=d.gI("UPRE").value
if (upperenchant <= 3)
	{upperunderenchant=upperenchant;upperoverenchant=0;}
else
	{upperunderenchant=3;upperoverenchant=upperenchant-3;}
if (uppergrade=="N"||upper=="0") {
	d.gI("UPRE").disabled=true
	upperunderPDEF=0
	upperoverPDEF=0
	Upper=Upper
	}
else {
	d.gI("UPRE").disabled=false
	upperunderPDEF=1
	upperoverPDEF=3
	Upper=Upper+(upperunderenchant*upperunderPDEF)+(upperoverenchant*upperoverPDEF)
	}

//Disable Lower when Upper is a full body armor
if (fullbody==1)
	{
	d.gI("LWRS").disabled=true
	d.gI("LWRA").disabled=true
	d.gI("LWRB").disabled=true
	d.gI("LWRC").disabled=true
	d.gI("LWRD").disabled=true
	d.gI("LWRN").disabled=true
	d.gI("LWRE").disabled=true
	lower="unequipped"
	Lower=0
	}
else if (fullbody==0)
	{
	d.gI("LWRS").disabled=false
	d.gI("LWRA").disabled=false
	d.gI("LWRB").disabled=false
	d.gI("LWRC").disabled=false
	d.gI("LWRD").disabled=false
	d.gI("LWRN").disabled=false
	AddMP=AddMP+LOWERMP[lower]
	}

if (lowergrade=="D" && LVL<20 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("LWR grade penalty").innerHTML=GPA}
else if (lowergrade=="C" && LVL<40 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("LWR grade penalty").innerHTML=GPA}
else if (lowergrade=="B" && LVL<52 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("LWR grade penalty").innerHTML=GPA}
else if (lowergrade=="A" && LVL<61 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("LWR grade penalty").innerHTML=GPA}
else if (lowergrade=="S" && LVL<76 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("LWR grade penalty").innerHTML=GPA}
else
	{d.gI("LWR grade penalty").innerHTML=" "}

//Armor Types (Heavy/Light/Robe)
if (AUType=="H" && (ALType=="H"||fullbody==1))
	{AType="H"}
else if (AUType=="L" && (ALType=="L"||fullbody==1))
	{AType="L"}
else if (AUType=="R" && (ALType=="R"||fullbody==1))
	{AType="R"}

//Glove Grade
var glovegrade=d.gI("GLVG").value
glovegrade=GRADE[glovegrade]
if (glovegrade=="S")
	{glove=d.gI("GLVS").value}
else if (glovegrade=="A")
	{glove=d.gI("GLVA").value}
else if (glovegrade=="B")
	{glove=d.gI("GLVB").value}
else if (glovegrade=="C")
	{glove=d.gI("GLVC").value}
else if (glovegrade=="D")
	{glove=d.gI("GLVD").value}
else if (glovegrade=="N")
	{glove=d.gI("GLVN").value}

if (glovegrade=="D" && LVL<20 && glove!=0)
	{pen=pen+1;d.gI("GLV grade penalty").innerHTML=GPA}
else if (glovegrade=="C" && LVL<40 && glove!=0)
	{pen=pen+1;d.gI("GLV grade penalty").innerHTML=GPA}
else if (glovegrade=="B" && LVL<52 && glove!=0)
	{pen=pen+1;d.gI("GLV grade penalty").innerHTML=GPA}
else if (glovegrade=="A" && LVL<61 && glove!=0)
	{pen=pen+1;d.gI("GLV grade penalty").innerHTML=GPA}
else if (glovegrade=="S" && LVL<76 && glove!=0)
	{pen=pen+1;d.gI("GLV grade penalty").innerHTML=GPA}
else
	{d.gI("GLV grade penalty").innerHTML=" "}

//Glove
Glove=GLOVEPDEF[glove]
GloveSet=GLOVESET[glove]

//Glove Enchant
var gloveenchant=d.gI("GLVE").value
if (gloveenchant <= 3)
	{gloveunderenchant=gloveenchant;gloveoverenchant=0;}
else
	{gloveunderenchant=3;gloveoverenchant=gloveenchant-3;}
if (glovegrade=="N"||glove=="0") {
	d.gI("GLVE").disabled=true
	gloveunderPDEF=0
	gloveoverPDEF=0
	Glove=Glove
	}
else {
	d.gI("GLVE").disabled=false
	gloveunderPDEF=1
	gloveoverPDEF=3
	Glove=Glove+(gloveunderenchant*gloveunderPDEF)+(gloveoverenchant*gloveoverPDEF)
	}

//Boot Grade
var bootgrade=d.gI("BOOG").value
bootgrade=GRADE[bootgrade]
if (bootgrade=="S")
	{boot=d.gI("BOOS").value}
else if (bootgrade=="A")
	{boot=d.gI("BOOA").value}
else if (bootgrade=="B")
	{boot=d.gI("BOOB").value}
else if (bootgrade=="C")
	{boot=d.gI("BOOC").value}
else if (bootgrade=="D")
	{boot=d.gI("BOOD").value}
else if (bootgrade=="N")
	{boot=d.gI("BOON").value}

if (bootgrade=="D" && LVL<20 && boot!=0)
	{pen=pen+1;d.gI("BOO grade penalty").innerHTML=GPA}
else if (bootgrade=="C" && LVL<40 && boot!=0)
	{pen=pen+1;d.gI("BOO grade penalty").innerHTML=GPA}
else if (bootgrade=="B" && LVL<52 && boot!=0)
	{pen=pen+1;d.gI("BOO grade penalty").innerHTML=GPA}
else if (bootgrade=="A" && LVL<61 && boot!=0)
	{pen=pen+1;d.gI("BOO grade penalty").innerHTML=GPA}
else if (bootgrade=="S" && LVL<76 && boot!=0)
	{pen=pen+1;d.gI("BOO grade penalty").innerHTML=GPA}
else
	{d.gI("BOO grade penalty").innerHTML=" "}

//Boot
Boot=BOOTPDEF[boot]
BootSet=BOOTSET[boot]

//Boot Enchant
var bootenchant=d.gI("BOOE").value
if (bootenchant <= 3)
	{bootunderenchant=bootenchant;bootoverenchant=0;}
else
	{bootunderenchant=3;bootoverenchant=bootenchant-3;}
if (bootgrade=="N"||boot=="0") {
	d.gI("BOOE").disabled=true
	bootunderPDEF=0
	bootoverPDEF=0
	Boot=Boot
	}
else {
	d.gI("BOOE").disabled=false
	bootunderPDEF=1
	bootoverPDEF=3
	Boot=Boot+(bootunderenchant*bootunderPDEF)+(bootoverenchant*bootoverPDEF)
	}

//Necklace Grade
var necklacegrade=d.gI("NCKG").value
necklacegrade=GRADE[necklacegrade]
if (necklacegrade=="S")
	{necklace=d.gI("NCKS").value}
else if (necklacegrade=="A")
	{necklace=d.gI("NCKA").value}
else if (necklacegrade=="B")
	{necklace=d.gI("NCKB").value}
else if (necklacegrade=="C")
	{necklace=d.gI("NCKC").value}
else if (necklacegrade=="D")
	{necklace=d.gI("NCKD").value}
else if (necklacegrade=="N")
	{necklace=d.gI("NCKN").value}

if (necklacegrade=="D" && LVL<20 && necklace!=0)
	{pen=pen+1;d.gI("NCK grade penalty").innerHTML=GPA}
else if (necklacegrade=="C" && LVL<40 && necklace!=0)
	{pen=pen+1;d.gI("NCK grade penalty").innerHTML=GPA}
else if (necklacegrade=="B" && LVL<52 && necklace!=0)
	{pen=pen+1;d.gI("NCK grade penalty").innerHTML=GPA}
else if (necklacegrade=="A" && LVL<61 && necklace!=0)
	{pen=pen+1;d.gI("NCK grade penalty").innerHTML=GPA}
else if (necklacegrade=="S" && LVL<76 && necklace!=0)
	{pen=pen+1;d.gI("NCK grade penalty").innerHTML=GPA}
else
	{d.gI("NCK grade penalty").innerHTML=" "}

//Necklace
Necklace=NECKLACEMDEF[necklace]
if (necklace=="6")
	{AddMP=AddMP+33}
else if (necklace=="20")
	{NECKLACEHP=445;AddMP=AddMP+42;NECKLACEPATK=1.04;NECKLACEMATK=1.08;VALAKASRD=0.05}
else if (necklace=="23")
	{AddMP=AddMP+26}
else if (necklace=="27")
	{AddMP=AddMP+42}
else if (necklace=="28")
	{AddMP=AddMP+42;FRINTEZZARD=0.05}

//Necklace Enchant
var necklaceenchant=d.gI("NCKE").value
if (necklaceenchant <= 3)
	{necklaceunderenchant=necklaceenchant;necklaceoverenchant=0;}
else
	{necklaceunderenchant=3;necklaceoverenchant=necklaceenchant-3;}
if (necklacegrade=="N"||necklace=="0") {
	d.gI("NCKE").disabled=true
	necklaceunderPDEF=0
	necklaceoverPDEF=0
	Necklace=Necklace
	}
else {
	d.gI("NCKE").disabled=false
	necklaceunderPDEF=1
	necklaceoverPDEF=3
	Necklace=Necklace+(necklaceunderenchant*necklaceunderPDEF)+(necklaceoverenchant*necklaceoverPDEF)
	}

//Earring1 Grade
var earring1grade=d.gI("EAR1G").value
earring1grade=GRADE[earring1grade]
if (earring1grade=="S")
	{earring1=d.gI("EAR1S").value}
else if (earring1grade=="A")
	{earring1=d.gI("EAR1A").value}
else if (earring1grade=="B")
	{earring1=d.gI("EAR1B").value}
else if (earring1grade=="C")
	{earring1=d.gI("EAR1C").value}
else if (earring1grade=="D")
	{earring1=d.gI("EAR1D").value}
else if (earring1grade=="N")
	{earring1=d.gI("EAR1N").value}

if (earring1grade=="D" && LVL<20 && earring1!=0)
	{pen=pen+1;d.gI("EAR1 grade penalty").innerHTML=GPA}
else if (earring1grade=="C" && LVL<40 && earring1!=0)
	{pen=pen+1;d.gI("EAR1 grade penalty").innerHTML=GPA}
else if (earring1grade=="B" && LVL<52 && earring1!=0)
	{pen=pen+1;d.gI("EAR1 grade penalty").innerHTML=GPA}
else if (earring1grade=="A" && LVL<61 && earring1!=0)
	{pen=pen+1;d.gI("EAR1 grade penalty").innerHTML=GPA}
else if (earring1grade=="S" && LVL<76 && earring1!=0)
	{pen=pen+1;d.gI("EAR1 grade penalty").innerHTML=GPA}
else
	{d.gI("EAR1 grade penalty").innerHTML=" "}

//Earring1
Earring1=EARRINGMDEF[earring1]
if (earring1=="5")
	{AddMP=AddMP+31;EARRINGOFANTHARASVR=0.04}
else if (earring1=="9")
	{AddMP=AddMP+31}
else if (earring1=="15")
	{AddMP=AddMP+25}
else if (earring1=="21")
	{AddMP=AddMP+20}
else if (earring1=="25")
	{AddMP=AddMP+31}
else if (earring1=="27")
	{AddMP=AddMP+31;EARRINGOFZAKENVR=0.04}

//Earring1 Enchant
var earring1enchant=d.gI("EAR1E").value
if (earring1enchant <= 3)
	{earring1underenchant=earring1enchant;earring1overenchant=0;}
else
	{earring1underenchant=3;earring1overenchant=earring1enchant-3;}
if (earring1grade=="N"||earring1=="0") {
	d.gI("EAR1E").disabled=true
	earring1underPDEF=0
	earring1overPDEF=0
	Earring1=Earring1
	}
else {
	d.gI("EAR1E").disabled=false
	earring1underPDEF=1
	earring1overPDEF=3
	Earring1=Earring1+(earring1underenchant*earring1underPDEF)+(earring1overenchant*earring1overPDEF)
	}

//Earring2 Grade
var earring2grade=d.gI("EAR2G").value
earring2grade=GRADE[earring2grade]
if (earring2grade=="S")
	{earring2=d.gI("EAR2S").value}
else if (earring2grade=="A")
	{earring2=d.gI("EAR2A").value}
else if (earring2grade=="B")
	{earring2=d.gI("EAR2B").value}
else if (earring2grade=="C")
	{earring2=d.gI("EAR2C").value}
else if (earring2grade=="D")
	{earring2=d.gI("EAR2D").value}
else if (earring2grade=="N")
	{earring2=d.gI("EAR2N").value}

if (earring2grade=="D" && LVL<20 && earring2!=0)
	{pen=pen+1;d.gI("EAR2 grade penalty").innerHTML=GPA}
else if (earring2grade=="C" && LVL<40 && earring2!=0)
	{pen=pen+1;d.gI("EAR2 grade penalty").innerHTML=GPA}
else if (earring2grade=="B" && LVL<52 && earring2!=0)
	{pen=pen+1;d.gI("EAR2 grade penalty").innerHTML=GPA}
else if (earring2grade=="A" && LVL<61 && earring2!=0)
	{pen=pen+1;d.gI("EAR2 grade penalty").innerHTML=GPA}
else if (earring2grade=="S" && LVL<76 && earring2!=0)
	{pen=pen+1;d.gI("EAR2 grade penalty").innerHTML=GPA}
else
	{d.gI("EAR2 grade penalty").innerHTML=" "}

//Earring2
Earring2=EARRINGMDEF[earring2]
if (earring2=="5")
	{AddMP=AddMP+31;EARRINGOFANTHARASVR=0.04}
else if (earring2=="9")
	{AddMP=AddMP+31}
else if (earring2=="15")
	{AddMP=AddMP+25}
else if (earring2=="21")
	{AddMP=AddMP+20}
else if (earring2=="25")
	{AddMP=AddMP+31}
else if (earring2=="27")
	{AddMP=AddMP+31;EARRINGOFZAKENVR=0.04}

//Earring2 Enchant
var earring2enchant=d.gI("EAR2E").value
if (earring2enchant <= 3)
	{earring2underenchant=earring2enchant;earring2overenchant=0;}
else
	{earring2underenchant=3;earring2overenchant=earring2enchant-3;}
if (earring2grade=="N"||earring2=="0") {
	d.gI("EAR2E").disabled=true
	earring2underPDEF=0
	earring2overPDEF=0
	Earring2=Earring2
	}
else {
	d.gI("EAR2E").disabled=false
	earring2underPDEF=1
	earring2overPDEF=3
	Earring2=Earring2+(earring2underenchant*earring2underPDEF)+(earring2overenchant*earring2overPDEF)
	}

//Ring1 Grade
var ring1grade=d.gI("RNG1G").value
ring1grade=GRADE[ring1grade]
if (ring1grade=="S")
	{ring1=d.gI("RNG1S").value}
else if (ring1grade=="A")
	{ring1=d.gI("RNG1A").value}
else if (ring1grade=="B")
	{ring1=d.gI("RNG1B").value}
else if (ring1grade=="C")
	{ring1=d.gI("RNG1C").value}
else if (ring1grade=="D")
	{ring1=d.gI("RNG1D").value}
else if (ring1grade=="N")
	{ring1=d.gI("RNG1N").value}

if (ring1grade=="D" && LVL<20 && ring1!=0)
	{pen=pen+1;d.gI("RNG1 grade penalty").innerHTML=GPA}
else if (ring1grade=="C" && LVL<40 && ring1!=0)
	{pen=pen+1;d.gI("RNG1 grade penalty").innerHTML=GPA}
else if (ring1grade=="B" && LVL<52 && ring1!=0)
	{pen=pen+1;d.gI("RNG1 grade penalty").innerHTML=GPA}
else if (ring1grade=="A" && LVL<61 && ring1!=0)
	{pen=pen+1;d.gI("RNG1 grade penalty").innerHTML=GPA}
else if (ring1grade=="S" && LVL<76 && ring1!=0)
	{pen=pen+1;d.gI("RNG1 grade penalty").innerHTML=GPA}
else
	{d.gI("RNG1 grade penalty").innerHTML=" "}

//Ring1
Ring1=RINGMDEF[ring1]
if(ring1=="8")
	{AddMP=AddMP+17}
else if(ring1=="10")
	{AddMP=AddMP+13}
else if(ring1=="13")
	{AddMP=AddMP+21;RINGOFBAIUMACC=2;RINGOFBAIUMASPD=1.04;RINGOFBAIUMCAST=1.04;RINGOFBAIUMCRITDMG=1.15}
else if(ring1=="17")
	{AddMP=AddMP+21;RINGOFCOREACC=1}
else if(ring1=="22")
	{AddMP=AddMP+21;RINGOFQUEENACC=2;RINGOFQUEENCRITDMG=1.15}
else if(ring1=="28")
	{AddMP=AddMP+21;}

//Ring1 Enchant
var ring1enchant=d.gI("RNG1E").value
if (ring1enchant <= 3)
	{ring1underenchant=ring1enchant;ring1overenchant=0;}
else
	{ring1underenchant=3;ring1overenchant=ring1enchant-3;}
if (ring1grade=="N"||ring1=="0") {
	d.gI("RNG1E").disabled=true
	ring1underPDEF=0
	ring1overPDEF=0
	Ring1=Ring1
	}
else {
	d.gI("RNG1E").disabled=false
	ring1underPDEF=1
	ring1overPDEF=3
	Ring1=Ring1+(ring1underenchant*ring1underPDEF)+(ring1overenchant*ring1overPDEF)
	}

//Ring2 Grade
var ring2grade=d.gI("RNG2G").value
ring2grade=GRADE[ring2grade]
if (ring2grade=="S")
	{ring2=d.gI("RNG2S").value}
else if (ring2grade=="A")
	{ring2=d.gI("RNG2A").value}
else if (ring2grade=="B")
	{ring2=d.gI("RNG2B").value}
else if (ring2grade=="C")
	{ring2=d.gI("RNG2C").value}
else if (ring2grade=="D")
	{ring2=d.gI("RNG2D").value}
else if (ring2grade=="N")
	{ring2=d.gI("RNG2N").value}

var GPA="<font color=red><b>Grade Penalty applied</b></font>"

if (ring2grade=="D" && LVL<20 && ring2!=0)
	{pen=pen+1;d.gI("RNG2 grade penalty").innerHTML=GPA}
else if (ring2grade=="C" && LVL<40 && ring2!=0)
	{pen=pen+1;d.gI("RNG2 grade penalty").innerHTML=GPA}
else if (ring2grade=="B" && LVL<52 && ring2!=0)
	{pen=pen+1;d.gI("RNG2 grade penalty").innerHTML=GPA}
else if (ring2grade=="A" && LVL<61 && ring2!=0)
	{pen=pen+1;d.gI("RNG2 grade penalty").innerHTML=GPA}
else if (ring2grade=="S" && LVL<76 && ring2!=0)
	{pen=pen+1;d.gI("RNG2 grade penalty").innerHTML=GPA}
else
	{d.gI("RNG2 grade penalty").innerHTML=" "}

//Ring2
Ring2=RINGMDEF[ring2]
if (ring2=="8")
	{AddMP=AddMP+17}
else if(ring2=="10")
	{AddMP=AddMP+13}
else if(ring2=="13")
	{AddMP=AddMP+21;RINGOFBAIUMACC=2;RINGOFBAIUMASPD=1.04;RINGOFBAIUMCAST=1.04;RINGOFBAIUMCRITDMG=1.15}
else if(ring2=="17")
	{AddMP=AddMP+21;RINGOFCOREACC=1}
else if(ring2=="22")
	{AddMP=AddMP+21;RINGOFQUEENACC=2;RINGOFQUEENCRITDMG=1.15}
else if(ring2=="28")
	{AddMP=AddMP+21;}

//Ring2 Enchant
var ring2enchant=d.gI("RNG2E").value
if (ring2enchant <= 3)
	{ring2underenchant=ring2enchant;ring2overenchant=0;}
else
	{ring2underenchant=3;ring2overenchant=ring2enchant-3;}
if (ring2grade=="N"||ring2=="0") {
	d.gI("RNG2E").disabled=true
	ring2underPDEF=0
	ring2overPDEF=0
	Ring2=Ring2
	}
else {
	d.gI("RNG2E").disabled=false
	ring2underPDEF=1
	ring2overPDEF=3
	Ring2=Ring2+(ring2underenchant*ring2underPDEF)+(ring2overenchant*ring2overPDEF)
	}

//Armor Grade Penalties
if (pen==1)
	{BuffSPEED=BuffSPEED*0.8319;BuffASPD=BuffASPD*0.8319;BuffCAST=BuffCAST*0.8319}
else if (pen==2)
	{BuffSPEED=BuffSPEED*0.694;BuffASPD=BuffASPD*0.692;BuffCAST=BuffCAST*0.695}
else if (pen==3)
	{BuffSPEED=BuffSPEED*0.58;BuffASPD=BuffASPD*0.578;BuffCAST=BuffCAST*0.58}
else if (pen>=4)
	{BuffSPEED=BuffSPEED*0.5;BuffASPD=BuffASPD*0.499;BuffCAST=BuffCAST*0.5}

//Set Bonuses
//+6 stuff that goes before Set Bonuses
if (helmetenchant>=6 && UpperSet==HelmetSet)
	{helmetench=true}
else
	{helmetench=false}
if (upperenchant>=6)
	{upperench=true}
else
	{upperench=false}
if ((lowerenchant>=6 && UpperSet==LowerSet)||Lower=="0")
	{lowerench=true}
else
	{lowerench=false}
if (gloveenchant>=6 && UpperSet==GloveSet)
	{gloveench=true}
else
	{gloveench=false}
if (bootenchant>=6 && UpperSet==BootSet)
	{bootench=true}
else
	{bootench=false}
//Apella Heavy
	if (helmet=="5" && upper=="3" && glove=="1" && boot=="3")
		{AddCP=AddCP+232}
//Apella Light
	if (helmet=="6" && upper=="1" && glove=="2" && boot=="1")
		{AddCP=AddCP+195}
//Apella Robe
	if (helmet=="4" && upper=="2" && glove=="3" && boot=="2")
		{AddCP=AddCP+177}
//Avadon Heavy
	if (helmet=="11" && upper=="6" && lower=="2" && glove=="4" && boot=="6")
		{AddHP=AddHP+294.49}
	if (helmet=="11" && upper=="6" && lower=="2" && glove=="4" && boot=="6" && shield=="2")
		{BuffShieldBlockRate=BuffShieldBlockRate*1.24}
//Avadon Light
	if (helmet=="11" && upper=="7" && glove=="4" && boot=="6")
		{BuffMDEF=BuffMDEF*1.0525;weightpenalty=weightpenalty+5795}
//Avadon Robes
	if (helmet=="11" && upper=="8" && glove=="4" && boot=="6")
		{BuffPDEF=BuffPDEF*1.0526;BuffCAST=BuffCAST*1.15}
//Blue Wolf Heavy
	if (helmet=="12" && upper=="10" && lower=="3" && glove=="5" && boot=="8")
		{STR=STR+3;CON=CON-1;DEX=DEX-2;AddSPEED=AddSPEED+7;BuffHPR=BuffHPR*1.0524}
//Blue Wolf Light
	if (helmet=="12" && upper=="11" && glove=="5" && boot=="8")
		{INT=INT-2;MEN=MEN+3;WIT=WIT-1;BuffPDEF=BuffPDEF*1.0526;BuffCAST=BuffCAST*1.15}
//Blue Wolf Robes
	if (helmet=="12" && upper=="12" && lower=="4" && glove=="5" && boot=="8")
		{INT=INT-2;MEN=MEN-1;WIT=WIT+3;AddMP=AddMP+206;BuffMPR=BuffMPR*1.0524}
//Brigandine
	if (upper=="14" && lower=="6" && helmet=="21")
		{BuffPDEF=BuffPDEF*1.05;AddHP=AddHP+153;bootench=true;gloveench=true}
	if (upper=="14" && lower=="6" && helmet=="21" && shield=="4")
		{AddHP=AddHP+20;bootench=true;gloveench=true}
//Chain Mail
	if (upper=="16" && lower=="8" && helmet=="15")
		{gloveench=true;bootench=true}
	if (upper=="16" && lower=="8" && helmet=="15" && shield=="7")
		{AddHP=AddHP+198.21;gloveench=true;bootench=true}
//Clan Oath Heavy
	if (helmet=="24" && upper=="19" && glove=="9" && boot=="17")
		{BuffPDEF=BuffPDEF*1.05;AddHP=AddHP+85}
//Clan Oath Light
	if (helmet=="25" && upper=="18" && glove=="10" && boot=="16")
		{BuffPDEF=BuffPDEF*1.05;BuffEVA=BuffEVA+3}
//Clan Oath Robes
	if (helmet=="23" && upper=="17" && glove=="11" && boot=="18")
		{BuffPDEF=BuffPDEF*1.05;BuffCAST=BuffCAST*1.05}
//Composite
	if (upper=="20" && helmet=="16")
		{gloveench=true;bootench=true;weightpenalty=weightpenalty+5795}
	if (upper=="20" && helmet=="16" && shield=="28")
		{BuffMDEF=BuffMDEF*1.0526;gloveench=true;bootench=true}
//Dark Crystal Heavy
	if (helmet=="7" && upper=="26" && lower=="13" && glove=="12" && boot=="24")
		{STR=STR-2;CON=CON+2}
	if (helmet=="7" && upper=="26" && lower=="13" && glove=="12" && boot=="24" && shield=="8")
		{BuffShieldBlockRate=BuffShieldBlockRate*1.18}
//Dark Crystal Light
	if (helmet=="7" && upper=="25" && lower=="14" && glove=="12" && boot=="24")
		{STR=STR+1;CON=CON-1;BuffASPD=BuffASPD*1.04;BuffPATK=BuffPATK*1.04}
//Dark Crystal Robe
	if (helmet=="7" && upper=="27" && glove=="12" && boot=="24")
		{WIT=WIT+2;MEN=MEN-2;BuffPDEF=BuffPDEF*1.08;BuffCAST=BuffCAST*1.15;AddSPEED=AddSPEED+7}
//Demon
	if (upper=="28" && lower=="16" && glove=="13")
		{INT=INT+4;WIT=WIT-1;AddHP=AddHP-269.65;bootench=true;helmetench=true}
//Devotion
	if (upper=="75" && lower=="44" && helmet=="31")
		{BuffCAST=BuffCAST*1.15}
//Divine
	if (upper=="29" && lower=="17" && glove=="14")
		{INT=INT-1;WIT=WIT+1;BuffPDEF=BuffPDEF*1.0526;AddMP=AddMP+170.62;bootench=true;helmetench=true}
//Doom Heavy
	if (helmet=="13" && upper=="30" && glove=="15" && boot=="27")
		{STR=STR-3;CON=CON+3;AddHP=AddHP+320}
	if (helmet=="13" && upper=="30" && glove=="15" && boot=="27" && shield=="9")
		{BuffShieldBlockRate=BuffShieldBlockRate*1.24}
//Doom Light
	if (helmet=="13" && upper=="42" && glove=="15" && boot=="27")
		{STR=STR-1;CON=CON-2;DEX=DEX+3;BuffPATK=BuffPATK*1.027;BuffMPR=BuffMPR*1.025}
//Doom Robes
	if (helmet=="13" && upper=="76" && lower=="51" && glove=="15" && boot=="27")
		{INT=INT+2;MEN=MEN+1;WIT=WIT-3;AddSPEED=AddSPEED+7;BuffMPR=BuffMPR*1.0524}
//Draconic
	if (helmet=="1" && upper=="31" && glove=="16" && boot=="28")
		{BuffASPD=BuffASPD*1.04;BuffPATK=BuffPATK*1.04;AddMP=AddMP+289;STR=STR+1;DEX=DEX+1;CON=CON-2;weightpenalty=weightpenalty+5759}
//Drake
	if (upper=="32" && boot=="29")
		{BuffMDEF=BuffMDEF*1.0524;gloveench=true;helmetench=true}
//Elven Mithril
	if (upper=="54" && lower=="34" && glove=="19")
		{AddSPEED=AddSPEED+7;WIT=WIT+1;INT=INT-1;bootench=true;helmetench=true}
//Full Plate
	if (upper=="37" && helmet=="17")
		{AddHP=AddHP+269.65;gloveench=true;bootench=true}
	if (upper=="37" && helmet=="17" && shield=="12")
		{BuffShieldBlockRate=BuffShieldBlockRate*1.0526}
//Imperial Crusader
	if (helmet=="2" && upper=="40" && lower=="24" && glove=="27" && boot=="33")
		{AddHP=AddHP+445;BuffPDEF=BuffPDEF*1.08;DEX=DEX-2;STR=STR+2}
//Karmian
	if (upper=="41" && lower=="26" && glove=="28")
		{BuffCAST=BuffCAST*1.15;BuffPDEF=BuffPDEF*1.0526;bootench=true;helmetench=true}
//Knowledge
	if (upper=="77" && lower=="52" && glove=="24")
		{BuffMATK=BuffMATK*1.1025;BuffMPR=BuffMPR*0.95;bootench=true;helmetench=true}
//Majestic Heavy
	if (helmet=="9" && upper=="47" && glove=="31" && boot=="40")
		{STR=STR+2;CON=CON-2;BuffPATK=BuffPATK*1.04;BuffACC=BuffACC+3}
//Majestic Light
	if (helmet=="9" && upper=="46" && glove=="31" && boot=="40" && WpnMAS!="Bow")
		{DEX=DEX+1;CON=CON-1;AddMP=AddMP+240;weightpenalty=weightpenalty+5759}
	else if (helmet=="9" && upper=="46" && glove=="31" && boot=="40" && WpnMAS=="Bow")
		{DEX=DEX+1;CON=CON-1;AddMP=AddMP+240;BuffPATK=BuffPATK*1.08;weightpenalty=weightpenalty+5759}
//Majestic Robe
	if (helmet=="9" && upper=="48" && glove=="31" && boot=="40")
		{MEN=MEN+1;INT=INT-1;AddMP=AddMP+240;BuffCAST=BuffCAST*1.15;BuffMPR=BuffMPR*1.08}
//Major Arcana
	if (helmet=="3" && upper=="49" && boot=="41" && glove=="32")
		{BuffMATK=BuffMATK*1.17;AddSPEED=AddSPEED+7;WIT=WIT+1;INT=INT+1;MEN=MEN-2;weightpenalty=weightpenalty+5759}
//Manticore
	if (upper=="50" && lower=="30" && boot=="42")
		{AddMP=AddMP+91.81;gloveench=true;helmetench=true}
//Mithril Heavy
	if (upper=="52" && lower=="32" && helmet=="26")
		{bootench=true;gloveench=true}
	if (upper=="52" && lower=="32" && helmet=="26" && shield=="13")
		{AddHP=AddHP+126.13;bootench=true;gloveench=true}
//Mithril Light
	if (upper=="53" && lower=="47" && boot=="43")
		{BuffEVA=BuffEVA+4;gloveench=true;helmetench=true}
//Nightmare Heavy
	if (helmet=="8" && upper=="5" && glove=="25" && boot=="11")
		{CON=CON+2;DEX=DEX-2;BuffPATK=BuffPATK*1.04}
	if (helmet=="8" && upper=="5" && glove=="25" && boot=="11" && shield=="22")
		{BuffRD=BuffRD+0.05}
//Nightmare Light
	if (helmet=="8" && upper=="56" && glove=="25" && boot=="11")
		{DEX=DEX+1;CON=CON-1;BuffMDEF=BuffMDEF*1.04;BuffVR=BuffVR+0.03}
//Nightmare Robe
	if (helmet=="8" && upper=="63" && glove=="25" && boot=="11")
		{INT=INT+2;WIT=WIT-2;BuffMATK=BuffMATK*1.08;BuffMPR=BuffMPR*1.04}
//Plated Leather
	if (upper=="58" && lower=="39" && boot=="45")
		{STR=STR+4;CON=CON-1;gloveench=true;helmetench=true}
//Reinforced Leather
	if (upper=="60" && lower=="41" && boot=="46")
		{AddMP=AddMP+80;gloveench=true;helmetench=true}
//Tallum Heavy
	if (helmet=="10" && upper=="71" && glove=="45" && boot=="50")
		{STR=STR+2;CON=CON-2;BuffASPD=BuffASPD*1.08;weightpenalty=weightpenalty+5759}
//Tallum Light
	if (helmet=="10" && upper=="70" && glove=="45" && boot=="50")
		{MEN=MEN+2;WIT=WIT-2;AddMP=AddMP+222;BuffMPR=BuffMPR*1.08}
//Tallum Robe
	if (helmet=="10" && upper=="72" && lower=="46" && glove=="45" && boot=="50")
		{INT=INT-2;WIT=WIT+2;BuffCAST=BuffCAST*1.15;BuffMDEF=BuffMDEF*1.08}
//Theca
	if (upper=="73" && lower=="48" && boot=="51")
		{BuffPDEF=BuffPDEF*1.0526;gloveench=true;helmetench=true}
//Wooden
	if (upper=="81" && lower=="54" && helmet=="32")
		{BuffPDEF=BuffPDEF*1.02;AddHP=AddHP+41}
//Zubei Heavy
	if (helmet=="14" && upper=="82" && lower=="55" && glove=="47" && boot=="52")
		{BuffPDEF=BuffPDEF*1.0526;AddHP=AddHP+294.49}
//Zubei Light
	if (helmet=="14" && upper=="83" && lower=="56" && glove=="47" && boot=="52")
		{BuffEVA=BuffEVA+4}
//Zubei Robes
	if (helmet=="14" && upper=="79" && lower=="53" && glove=="47" && boot=="52")
		{BuffMATK=BuffMATK*1.1025;BuffMPR=BuffMPR*0.95}
//+6 Heavy Armor Bonuses
	if (uppergrade=="S" && AType=="H" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddPDEF=AddPDEF+56;AddMPR=AddMPR+(2*movemode)}
	if (uppergrade=="A" && AType=="H" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddPDEF=AddPDEF+50;AddMPR=AddMPR+(2*movemode)}
	if (uppergrade=="B" && AType=="H" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddPDEF=AddPDEF+44;AddMPR=AddMPR+(2*movemode)}
	if (uppergrade=="C" && AType=="H" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddPDEF=AddPDEF+38;AddMPR=AddMPR+(2*movemode)}
	if (uppergrade=="D" && AType=="H" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddPDEF=AddPDEF+25;AddMPR=AddMPR+(2*movemode)}
//+6 Light Armor Bonus
	if (uppergrade=="S" && AType=="L" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddMDEF=AddMDEF+32;BuffEVA=BuffEVA+2}
	if (uppergrade=="A" && AType=="L" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddMDEF=AddMDEF+28;BuffEVA=BuffEVA+2}
	if (uppergrade=="B" && AType=="L" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddMDEF=AddMDEF+24;BuffEVA=BuffEVA+2}
	if (uppergrade=="C" && AType=="L" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddMDEF=AddMDEF+20;BuffEVA=BuffEVA+2}
	if (uppergrade=="D" && AType=="L" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{AddMDEF=AddMDEF+12;BuffEVA=BuffEVA+2}
//+6 Robe Bonus
	if (uppergrade=="S" && AType=="R" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{weightlimit=weightlimit*1.3;AddPDEF=AddPDEF+36}
	if (uppergrade=="A" && AType=="R" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{weightlimit=weightlimit*1.3;AddPDEF=AddPDEF+32}
	if (uppergrade=="B" && AType=="R" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{weightlimit=weightlimit*1.3;AddPDEF=AddPDEF+28}
	if (uppergrade=="C" && AType=="R" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{weightlimit=weightlimit*1.3;AddPDEF=AddPDEF+24}
	if (uppergrade=="D" && AType=="R" && helmetench==true && upperench==true && lowerench==true && gloveench==true && bootench==true && UpperSet!=0)
		{weightlimit=weightlimit*1.3;AddPDEF=AddPDEF+16}

//Augmentations
var augment1 = + d.gI("WAU1").value
var augment12 = + d.gI("AUG1").value
	if (augment1==2)
		{BuffACC=BuffACC+augment12}
	if (augment1==3)
		{CON=CON+augment12}
	if (augment1==4)
		{AddCP=AddCP+augment12}
	if (augment1==5)
		{AddCPR=AddCPR+augment12}
	if (augment1==6)
		{AddCRIT=AddCRIT+augment12}
	if (augment1==7)
		{BuffEVA=BuffEVA+augment12}
	if (augment1==8)
		{AddHP=AddHP+augment12}
	if (augment1==9)
		{AddHPR=AddHPR+augment12}
	if (augment1==10)
		{INT=INT+augment12}
	if (augment1==11)
		{AddMATK=AddMATK+augment12}
	if (augment1==12)
		{AddMDEF=AddMDEF+augment12}
	if (augment1==13)
		{MEN=MEN+augment12}
	if (augment1==14)
		{AddMP=AddMP+augment12}
	if (augment1==15)
		{AddMPR=AddMPR+augment12}
	if (augment1==16)
		{AddPATK=AddPATK+augment12}
	if (augment1==17)
		{AddPDEF=AddPDEF+augment12}
	if (augment1==18)
		{STR=STR+augment12}
var augment2 = + d.gI("WAU2").value
var augment22 = + d.gI("AUG2").value
	if (augment2==2)
		{BuffACC=BuffACC+augment22}
	if (augment2==3)
		{CON=CON+augment22}
	if (augment2==4)
		{AddCP=AddCP+augment22}
	if (augment2==5)
		{AddCPR=AddCPR+augment22}
	if (augment2==6)
		{AddCRIT=AddCRIT+augment22}
	if (augment2==7)
		{BuffEVA=BuffEVA+augment22}
	if (augment2==8)
		{AddHP=AddHP+augment22}
	if (augment2==9)
		{AddHPR=AddHPR+augment22}
	if (augment2==10)
		{INT=INT+augment22}
	if (augment2==11)
		{AddMATK=AddMATK+augment22}
	if (augment2==12)
		{AddMDEF=AddMDEF+augment22}
	if (augment2==13)
		{MEN=MEN+augment22}
	if (augment2==14)
		{AddMP=AddMP+augment22}
	if (augment2==15)
		{AddMPR=AddMPR+augment22}
	if (augment2==16)
		{AddPATK=AddPATK+augment22}
	if (augment2==17)
		{AddPDEF=AddPDEF+augment22}
	if (augment2==18)
		{STR=STR+augment22}
var augment3 = + d.gI("WAU3").value
var augment32 = + d.gI("AUG3").value
	if (augment3==2)
		{BuffACC=BuffACC+augment32}
	if (augment3==3)
		{CON=CON+augment32}
	if (augment3==4)
		{AddCP=AddCP+augment32}
	if (augment3==5)
		{AddCPR=AddCPR+augment32}
	if (augment3==6)
		{AddCRIT=AddCRIT+augment32}
	if (augment3==7)
		{BuffEVA=BuffEVA+augment32}
	if (augment3==8)
		{AddHP=AddHP+augment32}
	if (augment3==9)
		{AddHPR=AddHPR+augment32}
	if (augment3==10)
		{INT=INT+augment32}
	if (augment3==11)
		{AddMATK=AddMATK+augment32}
	if (augment3==12)
		{AddMDEF=AddMDEF+augment32}
	if (augment3==13)
		{MEN=MEN+augment32}
	if (augment3==14)
		{AddMP=AddMP+augment32}
	if (augment3==15)
		{AddMPR=AddMPR+augment32}
	if (augment3==16)
		{AddPATK=AddPATK+augment32}
	if (augment3==17)
		{AddPDEF=AddPDEF+augment32}
	if (augment3==18)
		{STR=STR+augment32}
var augment4 = + d.gI("WAU4").value
var augment42 = + d.gI("AUG4").value
	if (augment4==2)
		{BuffACC=BuffACC+augment42}
	if (augment4==3)
		{CON=CON+augment42}
	if (augment4==4)
		{AddCP=AddCP+augment42}
	if (augment4==5)
		{AddCPR=AddCPR+augment42}
	if (augment4==6)
		{AddCRIT=AddCRIT+augment42}
	if (augment4==7)
		{BuffEVA=BuffEVA+augment42}
	if (augment4==8)
		{AddHP=AddHP+augment42}
	if (augment4==9)
		{AddHPR=AddHPR+augment42}
	if (augment4==10)
		{INT=INT+augment42}
	if (augment4==11)
		{AddMATK=AddMATK+augment42}
	if (augment4==12)
		{AddMDEF=AddMDEF+augment42}
	if (augment4==13)
		{MEN=MEN+augment42}
	if (augment4==14)
		{AddMP=AddMP+augment42}
	if (augment4==15)
		{AddMPR=AddMPR+augment42}
	if (augment4==16)
		{AddPATK=AddPATK+augment42}
	if (augment4==17)
		{AddPDEF=AddPDEF+augment42}
	if (augment4==18)
		{STR=STR+augment42}
var augment5 = + d.gI("WAU5").value
var augment52 = + d.gI("AUG5").value
	if (augment5==2)
		{BuffACC=BuffACC+augment52}
	if (augment5==3)
		{CON=CON+augment52}
	if (augment5==4)
		{AddCP=AddCP+augment52}
	if (augment5==5)
		{AddCPR=AddCPR+augment52}
	if (augment5==6)
		{AddCRIT=AddCRIT+augment52}
	if (augment5==7)
		{BuffEVA=BuffEVA+augment52}
	if (augment5==8)
		{AddHP=AddHP+augment52}
	if (augment5==9)
		{AddHPR=AddHPR+augment52}
	if (augment5==10)
		{INT=INT+augment52}
	if (augment5==11)
		{AddMATK=AddMATK+augment52}
	if (augment5==12)
		{AddMDEF=AddMDEF+augment52}
	if (augment5==13)
		{MEN=MEN+augment52}
	if (augment5==14)
		{AddMP=AddMP+augment52}
	if (augment5==15)
		{AddMPR=AddMPR+augment52}
	if (augment5==16)
		{AddPATK=AddPATK+augment52}
	if (augment5==17)
		{AddPDEF=AddPDEF+augment52}
	if (augment5==18)
		{STR=STR+augment52}

//////////////////Enemy Targets
var TARGET=new Array(
new Array("Generic Player",LVL,"player",30,1.1,1.2,1.1,"Sword",0,80,379,weapongrade,"bu",244,1.085,1,0,300,1,0,0,0,0,0,1,0,1,0,0,1,0,false,0,0,0),
new Array("Generic Monster",LVL,"monster",30,1.1,1.2,1.1,"Sword",0,80,379,weapongrade,"no SA",244,1,1,0,300,1,0,0,0,0,0,1,0,1,0,0,1,0,false,0,0,0),
new Array("lv40 Temple Knight",40,"player",35,1.15,1.04,1.1,"Sword",0,80,379,"C","bu",165,1.085,1,19.1,394,1,73.5,0,-8,73.3,0,1,0,1,0,206,1,0,false,1.94731,0,0),
new Array("lv40 Hawkeye",40,"player",34,1.14,1.65,1.05,"Bow",-3.75,120,293,"C","bu",341,1.085,1,182.8,301,1,31.8,0,12,0,0.2,1.05,0,1,56,0,1,0,false,0,0,1500),
new Array("lv40 Prophet",40,"player",21,1.01,0.63,1.2,"Blunt",4.75,40,379,"C","bu",165,1.45,1,18.1,245,1.0526,38,0,-8,0,0,1,0,1,0,206,1,0,false,1,0,0),
new Array("lv61 Temple Knight",61,"player",33,1.13,1.04,1.1,"Sword",0,80,379,"A","bu",244,1.085,1.04,50.4,483,1,346.4,0,-8,0,0,1,0,1,0,259,1,0,true,3,0.05,0),
new Array("lv61 Hawkeye",61,"player",35,1.15,1.43,1.05,"YumiBow",-3.75,120,227,"A","bu",552,1.085,1.08,497.1,410,1,57.5,0,12,0,0.2,1.05,0,1,56,0,1,0,false,0,0,696.915),
new Array("lv61 Prophet",61,"player",21,1.01,0.63,1.2,"Blunt",4.75,40,379,"A","bu",244,1.45,1,49.4,319,1.08,69.5,0,-8,0,0,1,0,1,0,259,1,0,false,1,0,0),
new Array("lv80 Temple Knight",80,"player",33,1.13,1.12,1.1,"Sword",0,80,379,"S","bu",296,1.085,1.04,80.4,545,1.08,556.3,4,-8,84.3,0,1.04,0,1.3225,0,293,1.1,599,true,3,0.05,0),
new Array("lv80 Hawkeye",80,"player",35,1.15,1.48,1.05,"Bow",-3.75,120,293,"S","bu",611,1.085,1.0816,998.6,461,1,79.6,4,12,88.1,0.2,1.13568,0,1.3225,56,0,1,0,false,0,0.05,1500),
new Array("lv80 Prophet",80,"player",21,1.01,0.63,1.2,"Blunt",4.75,40,379,"S","bu",296,1.45,1.04,79.4,319,1.08,96.6,4,-8,0,0,1.04,0,1.3225,0,293,1,0,false,1,0.05,0),
new Array("clone"),
0)

//Enemy Stats
var enemy = + d.gI("ENE").value
if (enemy!=11) {
//Enemy Base Stats
	d.gI("LVO").disabled=false
	var ELVLOFF=+ d.gI("LVO").value
	var ELVL=TARGET[enemy][1]+ELVLOFF
	var ELVLMOD=(ELVL+89)/100
	var targettype=TARGET[enemy][2]
	var EDEX=TARGET[enemy][3]
	var EDEXMOD=TARGET[enemy][4]
	var ESTRMOD=TARGET[enemy][5]
//Enemy Weapon
	var Eranddmg=TARGET[enemy][6]
	var EWpnType=TARGET[enemy][7]
	var EWpnAcc=TARGET[enemy][8]
	var EWpnCrt=TARGET[enemy][9]
	var EWpnSpd=TARGET[enemy][10]
	var Eweapongrade=TARGET[enemy][11]
	var Eweapon_sa=TARGET[enemy][12]
	var Ebowdelay=TARGET[enemy][34]
//Enemy P.Atk.
	var EWpnPATK=TARGET[enemy][13]
	var EMasteryPATK=TARGET[enemy][14]
	var EBuffPATK=TARGET[enemy][15]
	var EAddPATK=TARGET[enemy][16]
//Enemy P.Def.
	var Eapdef=TARGET[enemy][17]
	var EBuffPDEF=TARGET[enemy][18]
	var EAddPDEF=TARGET[enemy][19]
//Enemy Accuracy
	var EBuffACC=TARGET[enemy][20]
//Enemy Evasion
	var EBuffEVA=TARGET[enemy][21]
//Enemy Critical
	var Ebasecritical=EWpnCrt*EDEXMOD
	var EAddCRIT=TARGET[enemy][22]
	var Esubcritical=Ebasecritical*(TARGET[enemy][23])
//Enemy Atk. Spd.
	var EBuffASPD=TARGET[enemy][24]
	var EAddASPD=TARGET[enemy][25]
//Enemy Critical Damage
	var EBuffCRITDMG=TARGET[enemy][26]
	var EAddCRITDMG=TARGET[enemy][27]
//Enemy Reflect Damage
	var Ebuffrd=TARGET[enemy][33]
	if (WpnType=="Bow")
		{Ebuffrd=0}
	d.gI("EBUFFS").disabled=false
//Enemy Buffs
	var EBuffShieldBlockRate=1
	var EBuffSHIELDPDEF=TARGET[enemy][29]
	var ebuffs=d.gI("EBUFFS").value
	if (WpnMAS=="Bow" && enemy==2)
		{BuffDAMAGE=BuffDAMAGE*0.76}
	if (WpnMAS=="Bow" && (enemy==5||enemy==8))
		{BuffDAMAGE=BuffDAMAGE*0.6}
	if (ebuffs=="1" && enemy==2)
		{EBuffPATK=EBuffPATK*1.12;EBuffPDEF=EBuffPDEF*1.12;}
	if (ebuffs=="1" && (enemy==5||enemy==8))
		{EBuffPATK=EBuffPATK*1.12;EBuffPDEF=EBuffPDEF*1.12;}
	if (enemy==3)
		{EBuffASPD=EBuffASPD*1.08}
	if (enemy==6||enemy==9)
		{EBuffASPD=EBuffASPD*1.12}
	if (ebuffs=="1" && enemy==4)
		{EBuffPATK=EBuffPATK*1.15*1.05;EBuffPDEF=EBuffPDEF*1.0925;EBuffACC=EBuffACC+2;EBuffEVA=EBuffEVA-2;Esubcritical=Esubcritical+Ebasecritical*0.2;EBuffASPD=EBuffASPD*1.05;EBuffShieldBlockRate=EBuffShieldBlockRate*1.3;EBuffCRITDMG=EBuffCRITDMG*1.3}
	if (ebuffs=="1" && (enemy==7||enemy==10)||(ebuffs>=2 && ebuffs<=6 && enemy!=2 && enemy!=5 && enemy!=8))
		{EBuffPATK=EBuffPATK*1.242;EBuffPDEF=EBuffPDEF*1.058;EBuffACC=EBuffACC+4;EBuffEVA=EBuffEVA-4;Esubcritical=Esubcritical+Ebasecritical*0.3;EBuffASPD=EBuffASPD*1.4364;EBuffShieldBlockRate=EBuffShieldBlockRate*1.5;EBuffCRITDMG=EBuffCRITDMG*1.35}
	if ((ebuffs>=2 && ebuffs<=6 && (enemy==2||enemy==5||enemy==8)))
		{EBuffPATK=EBuffPATK*1.15;EBuffPDEF=EBuffPDEF*1.15;EBuffACC=EBuffACC+4;Esubcritical=Esubcritical+Ebasecritical*0.3;EBuffASPD=EBuffASPD*1.33;EBuffShieldBlockRate=EBuffShieldBlockRate*1.5;EBuffCRITDMG=EBuffCRITDMG*1.35}
	if (ebuffs=="3"||ebuffs=="5"||ebuffs=="6")
		{EBuffPATK=EBuffPATK*1.12;EBuffASPD=EBuffASPD*1.15;EBuffCRITDMG=EBuffCRITDMG*1.35}
	if (ebuffs=="4"||ebuffs=="5"||ebuffs=="6")
		{EBuffPDEF=EBuffPDEF*1.25;Esubcritical=Esubcritical+Ebasecritical}
	if (ebuffs=="6")
		{EBuffPATK=EBuffPATK*1.1*1.1;EBuffPDEF=EBuffPDEF*1.2;EBuffACC=EBuffACC+8;EBuffEVA=EBuffEVA+7;Esubcritical=Esubcritical+Ebasecritical*0.5;EBuffASPD=EBuffASPD*1.2;EBuffShieldBlockRate=EBuffShieldBlockRate/1.5*1.8;EBuffCRITDMG=EBuffCRITDMG*1.25*1.2;EBuffSHIELDPDEF=EBuffSHIELDPDEF*2;Ebuffrd=Ebuffrd+0.4}
//Enemy Debuffs
	if (d.gI("EDEPC").checked==true)
		{var depatk=d.gI("EDEP").value;EBuffPATK=EBuffPATK*WEAKNESS[depatk]}
	if (d.gI("EDEDC").checked==true)
		{var depdef=d.gI("EDED").value;EBuffPDEF=EBuffPDEF*HEX[depdef]}
	if (d.gI("EBLKSC").checked==true && ((ebuffs=="1" && enemy==2)||(ebuffs=="1" && (enemy==5||enemy==8))))
		{EBuffPDEF=(EBuffPDEF/1.12)*0.9}
	else if (d.gI("EBLKSC").checked==true && ((ebuffs=="1" && enemy==4)||(ebuffs=="1" && (enemy==7||enemy==10)||(ebuffs>=2 && ebuffs<=6 && enemy!=2 && enemy!=5 && enemy!=8))))
		{EBuffPDEF=0.90*EBuffPDEF}
	else if (d.gI("EBLKSC").checked==true)
		{EBuffPDEF=0.90*EBuffPDEF}
	if (d.gI("EDEAC").checked==true)
		{var bu=d.gI("EDEA").value;EBuffACC=EBuffACC-DEACC[bu]}
	if (d.gI("ESBBC").checked==true)
		{var sandbomb=d.gI("ESBB").value;EBuffACC=EBuffACC+SANDBOMB[sandbomb]}
	if (d.gI("ETRBC").checked==true)
		{var tribunal=d.gI("ETRB").value;Esubcritical=Esubcritical+(Ebasecritical*TRIBUNAL[tribunal])}
	if (d.gI("EDENC").checked==true)
		{var bu=d.gI("EDEN").value;EBuffASPD=EBuffASPD*DEASPD[bu]}
	if (d.gI("EJDGC").checked==true)
		{var iv=d.gI("EJDG").value;EBuffCRITDMG=EBuffCRITDMG*JUDGMENT[iv]}
	if (d.gI("EARCRC").checked==true)
		{EBuffPDEF=0.70*EBuffPDEF}
	if (d.gI("ECBYC").checked==true)
		{EBuffEVA=EBuffEVA-6}
	if (d.gI("ECDMC").checked==true)
		{EBuffPATK=0.83*EBuffPATK}
	if (d.gI("ECSHC").checked==true)
		{var bu=d.gI("ECSH").value;EBuffPDEF=CURSEOFSHADE[bu]*EBuffPDEF}
	if (d.gI("EDBDC").checked==true)
		{var bu=d.gI("EDBD").value;EBuffPATK=EBuffPATK*DEMONICBD[bu]}
	if (d.gI("EFVC").checked==true)
		{EBuffASPD=EBuffASPD*0.7}
	if (d.gI("EHEEC").checked==true) 
		{var bu=d.gI("HEE").value;EBuffPDEF=EBuffPDEF*0.5;EBuffEVA=EBuffEVA-16;EBuffShieldBlockRate=EBuffShieldBlockRate*0.5}
	if (d.gI("ECHOLC").checked==true)
		{var bu=d.gI("ECHOL").value;EBuffACC=EBuffACC+HSCHOLACC[bu];EBuffEVA=EBuffEVA+HSCHOLEVA[bu]}
	if (d.gI("EIVC").checked==true)
		{var iv=d.gI("EIV").value;EBuffASPD=EBuffASPD*0.9}
	if (d.gI("ELVORC").checked==true)
		{var bu=d.gI("ELVOR").value;EBuffACC=EBuffACC-6}
	if (d.gI("EPSYC").checked==true)
		{var psycho=d.gI("EPSY").value;EBuffASPD=EBuffASPD*PSYCHO[psycho]}
	if (d.gI("ESBC").checked==true)
		{var shockblast=d.gI("ESB").value;EBuffPDEF=0.70*EBuffPDEF}
	if (d.gI("EDERC").checked==true)
		{var despair=d.gI("EDER").value;EBuffACC=EBuffACC-6;Esubcritical=Esubcritical+(Ebasecritical*-0.3);EBuffASPD=EBuffASPD*0.8;EBuffCRITDMG=EBuffCRITDMG*0.7}
	if (d.gI("EWVC").checked==true)
		{var wv=d.gI("EWV").value;EBuffASPD=EBuffASPD*0.9}
//Enemy final stats
	var Ecombatpatk=EWpnPATK*ESTRMOD*ELVLMOD*EMasteryPATK*EBuffPATK+EAddPATK
	if (((Eweapongrade=="S"||Eweapongrade=="A") && Eweapon_sa!="no SA")||Eweapongrade=="H")
		{Ecombatpatk=Ecombatpatk*1.05}
	if (targettype=="player")
		{Ecombatpatk=Ecombatpatk*2}
	var Ecombatpdef=Eapdef*ELVLMOD*EBuffPDEF+EAddPDEF
	var EAccuracy=(Math.sqrt(EDEX)*6)+ELVL+EWpnAcc+EBuffACC
	var EEvasion=(Math.sqrt(EDEX)*6)+ELVL+EBuffEVA
	var Ecombatcritical=Ebasecritical+EAddCRIT+Esubcritical
	if (Ecombatcritical>500)
		{Ecombatcritical=500}
	var Ecombatatkspd=EWpnSpd*EDEXMOD*EBuffASPD+EAddASPD
//Enemy Shield stats
	var EShield=TARGET[enemy][28]
	var EAddSHIELDPDEF=TARGET[enemy][30]
	var Eshieldpdef=EShield*EBuffSHIELDPDEF+Ecombatpdef+EAddSHIELDPDEF
	var Eblock360=TARGET[enemy][31]
	var EBuffShieldBlockRate=EBuffShieldBlockRate*TARGET[enemy][32]
	var EShieldBlockRate=EBaseShieldBlockRate*EBuffShieldBlockRate*EDEXMOD
	if ((position==2||position==3) && block360==false)
		{EShieldBlockRate=0}
	if (WpnMAS=="Bow")
		{EShieldBlockRate=EShieldBlockRate*3}
	if (EShieldBlockRate>=1)
		{EShieldBlockRate=1}
	var Eavgshieldpdef=Eshieldpdef*EShieldBlockRate+Ecombatpdef*(1-EShieldBlockRate)}
if (enemy==11)
	{var EWpnType=WpnType}

//Stat Modifiers
STRMOD=STRMODIFIER[STR]
DEXMOD=DEXMODIFIER[DEX]
CONMOD=CONMODIFIER[CON]
INTMOD=INTMODIFIER[INT]
WITMOD=WITMODIFIER[WIT]
MENMOD=MENMODIFIER[MEN]

//Calculations that must take place before buffs
var basecritical=WpnCrt*DEXMOD

//Buffs
//Accuracy
	if (d.gI("ACCTC").checked==true)
		{BuffACC=BuffACC+3}
//Accuracy Debuffs
	if (d.gI("DEAC").checked==true)
		{var bu=d.gI("DEA").value;BuffACC=BuffACC-DEACC[bu]}
//Acumen
	if (d.gI("ACUC").checked==true)
		{var bu=d.gI("ACU").value;BuffCAST=BuffCAST*ACUMEN[bu]}
//Advanced Block
	if (d.gI("ADBC").checked==true)
		{var bu=d.gI("ADB").value;BuffSHIELDPDEF=BuffSHIELDPDEF*ADVANCEDBLOCK[bu]}
//Aegis Stance
	if (d.gI("ASTC").checked==true)
		{BuffSHIELDPDEF=BuffSHIELDPDEF*0.6;block360=true}
//Agility
	if (d.gI("AGIC").checked==true)
		{var bu=d.gI("AGI").value;BuffEVA=BuffEVA+AGILITY[bu]}
//Angelic Icon
	if (d.gI("ANIC").checked==true)
		{var bu=d.gI("ANI").value
		AddSPEED=AddSPEED+ANGELICSPEED[bu]}
	if (d.gI("ANIC").checked==true && (WpnType=="Fist"||WpnType=="2hb"||WpnType=="Blunt"))
		{var bu=d.gI("ANI").value
		BuffACC=BuffACC+6
		BuffPDEF=BuffPDEF*1.5
		BuffMDEF=BuffMDEF*1.5
		BuffASPD=BuffASPD*ANGELICASPD[bu]
		BuffCRITDMG=BuffCRITDMG*ANGELICCRITDMG[bu]}
	if (d.gI("ANIC").checked==true && (WpnType=="Polearm"||WpnType=="2hs"||WpnType=="Sword"))
		{var bu=d.gI("ANI").value
		AddCRIT=AddCRIT+ANGELICCRIT[bu]
		BuffACC=BuffACC+6
		BuffPDEF=BuffPDEF*1.5
		BuffMDEF=BuffMDEF*1.5
		BuffASPD=BuffASPD*ANGELICASPD[bu]}
//Arcane Agility
	if (d.gI("ARAC").checked==true)
		{BuffCAST=BuffCAST*1.2}
//Arcane Chaos
	if (d.gI("ARNC").checked==true)
		{AddMPR=AddMPR-24}
//Arcane Power
	if (d.gI("ARPC").checked==true)
		{BuffMATK=1.3*BuffMATK}
//Arcane Wisdom
	if (d.gI("ARWC").checked==true)
		{BuffCAST=BuffCAST*0.9}
//Armor Crush
	if (d.gI("ACC").checked==true)
		{BuffPDEF=0.70*BuffPDEF;BuffMDEF=0.70*BuffMDEF}
//Attack Speed Debuffs
	if (d.gI("DENC").checked==true)
		{var bu=d.gI("DEN").value;BuffASPD=BuffASPD*DEASPD[bu]}
//Berserker Spirit
	if (d.gI("ZERKC").checked==true)
		{var bu=d.gI("ZERK").value;BuffPATK=BuffPATK*ZERK[bu];BuffPDEF=BuffPDEF*ZERKPDEF[bu];BuffMATK=BuffMATK*ZERKMATK[bu];BuffMDEF=BuffMDEF*ZERKMDEF[bu];BuffEVA=BuffEVA+ZERKEVA[bu];AddSPEED=AddSPEED+ZERKSPEED[bu];BuffASPD=BuffASPD*ZERK[bu];BuffCAST=BuffCAST*ZERK[bu]}
//Bless Shield
	if (d.gI("BSDC").checked==true)
		{var bu=d.gI("BSD").value;BuffShieldBlockRate=BuffShieldBlockRate*BLESSSHIELD[bu]}
//Bless the Body
	if (d.gI("BTB1C").checked==true)
		{var bu=d.gI("BTB1").value
		BuffHP=BuffHP*BTB[bu]}
	if (d.gI("BTB2C").checked==true)
		{var bu=d.gI("BTB2").value
		BuffHP=BuffHP*BTB[bu]}
	if (d.gI("BTB3C").checked==true)
		{var bu=d.gI("BTB3").value
		BuffHP=BuffHP*BTB[bu]}
//Bless the Soul
	if (d.gI("BTSC").checked==true)
		{var bu=d.gI("BTS").value;BuffMP=BuffMP*BTS[bu]}
//Blessing of Prophecy
	if (d.gI("BOPC").checked==true && (ClassType=="F1"||ClassType=="F2"||ClassType=="F3")) 
		{weightlimit=weightlimit*1.25}
//Blessing of Seraphim
	if (d.gI("SERC").checked==true)
		{var bu=d.gI("SER").value;BuffMPR=BuffMPR*SERAPHIM[bu]}
//Blinding Blow
	if (d.gI("BLDC").checked==true)
		{BuffSPEED=BuffSPEED*1.4}
//Block Shield
	if (d.gI("BLKSC").checked==true)
		{BuffPDEF=0.90*BuffPDEF}
//Block Wind Walk
	if (d.gI("BWWC").checked==true)
		{BuffSPEED=BuffSPEED*0.9}
//Casting Spd. Debuffs
	if (d.gI("DECC").checked==true)
		{BuffCAST=BuffCAST*0.77}
//Curse Gloom
	if (d.gI("GLMC").checked==true)
		{BuffMDEF=0.77*BuffMDEF}
//Curse of Abyss
	if (d.gI("CBYC").checked==true)
		{BuffMATK=0.70*BuffMATK;BuffEVA=BuffEVA-6;BuffSPEED=BuffSPEED*0.9;BuffCAST=BuffCAST*0.8}
//Curse of Doom
	if (d.gI("CDMC").checked==true)
		{BuffPATK=0.83*BuffPATK}
//Curse of Shade
	if (d.gI("CSHC").checked==true)
		{var bu=d.gI("CSH").value;BuffPDEF=CURSEOFSHADE[bu]*BuffPDEF;BuffMDEF=CURSEOFSHADE[bu]*BuffMDEF}
//Dance of Concentration
	if (d.gI("DCONC").checked==true)
		{BuffCAST=BuffCAST*1.3}
//Dance of Fire
	if (d.gI("DOFC").checked==true)
		{BuffCRITDMG=BuffCRITDMG*1.35}
//Dance of Fury
	if (d.gI("DFUC").checked==true)
		{BuffASPD=BuffASPD*1.15}
//Dance of Inspiration
	if (d.gI("DOIC").checked==true)
		{BuffACC=BuffACC+4}
//Dance of Mystic
	if (d.gI("DOMYC").checked==true)
		{BuffMATK=1.2*BuffMATK}
//Dance of Shadow
	if (d.gI("DSHC").checked==true)
		{BuffSPEED=BuffSPEED*0.5}
//Dance of Vampire
	if (d.gI("DOVC").checked==true)
		{BuffVR=BuffVR+0.08}
//Dance of Warrior
	if (d.gI("DWAC").checked==true)
		{BuffPATK=1.12*BuffPATK}
//Dark Vortex
	if (d.gI("DVC").checked==true)
		{AddMPR2=AddMPR2-12}
//Dash
	if (d.gI("DAS1C").checked==true)
		{var bu=d.gI("DAS1").value;BuffSPEED=BuffSPEED*DASH[bu]}
	if (d.gI("DAS2C").checked==true)
		{var bu=d.gI("DAS2").value;BuffSPEED=BuffSPEED*DASH[bu]}
//Dead Eye
	if (d.gI("DEYC").checked==true && WpnMAS=="Bow")
		{var bu=d.gI("DEY").value;AddPATK=AddPATK+DEADEYEPATK[bu];BuffACC=BuffACC+DEADEYEACC[bu];BuffASPD=BuffASPD*0.8;BuffCRITDMG=BuffCRITDMG*1.2}
//Death Whisper
	if (d.gI("DEWC").checked==true)
		{var bu=d.gI("DEW").value;BuffCRITDMG=BuffCRITDMG*DEATHWHISPER[bu]}
//Decrease Weight
	if (d.gI("DCWC").checked==true)
		{var bu=d.gI("DCW").value;weightpenalty=weightpenalty+DECREASEWEIGHT[bu]}
//Deflect Arrow
	if (d.gI("DEA1C").checked==true && (EWpnType=="Bow"||EWpnType=="YumiBow"))
		{var defarrow=d.gI("DEA1").value;EBuffDAMAGE=EBuffDAMAGE*DEFLECTARROW[defarrow]}
	if (d.gI("DEA2C").checked==true && (EWpnType=="Bow"||EWpnType=="YumiBow"))
		{var dfarrow=d.gI("DEA2").value;EBuffDAMAGE=EBuffDAMAGE*DEFLECTARROW[dfarrow]}
//Demonic Blade Dance
	if (d.gI("DBDC").checked==true)
		{var bu=d.gI("DBD").value;BuffPATK=BuffPATK*DEMONICBD[bu];BuffMATK=BuffMATK*DEMONICBD[bu]}
//Duelist Spirit
	if (d.gI("DUELC").checked==true && WpnType=="Duals")
		{var bu=d.gI("DUEL").value;BuffASPD=BuffASPD*DUELIST[bu]}
//Empower
	if (d.gI("EMPC").checked==true)
		{var bu=d.gI("EMP").value;BuffMATK=BuffMATK*EMPOWER[bu]}
//Evade Shot
	if (d.gI("EVSC").checked==true)
		{BuffEVA=BuffEVA+6}
//Fire Vortex
	if (d.gI("FVC").checked==true)
		{BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.7;BuffCAST=BuffCAST*0.9;AddMPR2=AddMPR2-12}
//Fist Fury
	if (d.gI("FFYC").checked==true)
		{BuffASPD=BuffASPD*1.25}
//Focus
	if (d.gI("FCSC").checked==true)
		{var bu=d.gI("FCS").value;subcritical=subcritical+(basecritical*FOCUS[bu])}
//Focus Attack
	if (d.gI("FAC").checked==true && WpnType=="Polearm")
		{var bu=d.gI("FA").value;BuffACC=BuffACC+FOCUSATTACK[bu];BuffCRITDMG=BuffCRITDMG*1.1}
//Focus Dagger Skills
	if (d.gI("FAWC").checked==true && WpnMAS=="Dagger")
		{var bu=d.gI("FAW").value;
		if (bu==2)
			{if (position==1)
				{subcritical=subcritical+(basecritical*-0.3);BuffCRITDMG=BuffCRITDMG*0.7}
			if (position==2||position==4)
				{subcritical=subcritical+(basecritical*-0.3)}
			if (position==3||position==5)
				{subcritical=subcritical+(basecritical*-0.3);BuffCRITDMG=BuffCRITDMG*1.9}}
		if (bu==3)
			{if (position==1)
				{BuffCRITDMG=BuffCRITDMG*0.7}
			if (position==2||position==4)
				{BuffCRITDMG=BuffCRITDMG*1.3}
			if (position==3||position==5)
				{BuffCRITDMG=BuffCRITDMG*1.6}}}
	if (d.gI("FPWC").checked==true && WpnMAS=="Dagger")
		{var bu=d.gI("FPW").value;
		if (bu==1)
			{if (position==1)
				{BuffCOMBATCRIT=BuffCOMBATCRIT*0.7}
			if (position==2||position==4)
				{BuffCOMBATCRIT=BuffCOMBATCRIT*1.3}
			if (position==3||position==5)
				{BuffCOMBATCRIT=BuffCOMBATCRIT*1.6}}
		if (bu==2)
			{if (position==1)
				{subcritical=subcritical+(basecritical*-0.3);BuffCRITDMG=BuffCRITDMG*0.7}
			if (position==2||position==4)
				{subcritical=subcritical+(basecritical*-0.3)}
			if (position==3||position==5)
				{subcritical=subcritical+(basecritical*-0.3);BuffCRITDMG=BuffCRITDMG*1.9}}}
	if (d.gI("FTHC").checked==true && WpnMAS=="Dagger")
		{var bu=d.gI("FTH").value;
		if (bu==1)
			{if (position==1)
				{BuffCOMBATCRIT=BuffCOMBATCRIT*0.7}
			if (position==2||position==4)
				{BuffCOMBATCRIT=BuffCOMBATCRIT*1.3}
			if (position==3||position==5)
				{BuffCOMBATCRIT=BuffCOMBATCRIT*1.6}}
		if (bu==3)
			{if (position==1)
				{BuffCRITDMG=BuffCRITDMG*0.7}
			if (position==2||position==4)
				{BuffCRITDMG=BuffCRITDMG*1.3}
			if (position==3||position==5)
				{BuffCRITDMG=BuffCRITDMG*1.6}}}
//Frenzy
	if (d.gI("FZY1C").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var bu=d.gI("FZY1").value
		BuffPATK=BuffPATK*FRENZY2HS[bu]
		BuffACC=BuffACC+FRENZY2HSACC[bu]}
	else if (d.gI("FZY1C").checked==true && (WpnType=="Sword"||WpnType=="Blunt"||WpnType=="Polearm"))
		{var bu=d.gI("FZY1").value;BuffPATK=BuffPATK*FRENZY[bu]}
	else if (d.gI("FZY1C").checked==true)
		{var bu=d.gI("FZY1").value;BuffPATK=BuffPATK*FRENZYOTHER[bu]}
	if (d.gI("FZY2C").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var bu=d.gI("FZY2").value
		BuffPATK=BuffPATK*FRENZY2HS[bu]
		BuffACC=BuffACC+FRENZY2HSACC[bu]}
	else if (d.gI("FZY2C").checked==true && (WpnType=="Sword"||WpnType=="Blunt"||WpnType=="Polearm"))
		{var bu=d.gI("FZY2").value;BuffPATK=BuffPATK*FRENZY[bu]}
	else if (d.gI("FZY2C").checked==true)
		{var bu=d.gI("FZY2").value;BuffPATK=BuffPATK*FRENZYOTHER[bu]}
//Greater Might
	if (d.gI("GRMC").checked==true)
		{var bu=d.gI("GRM").value;BuffPATK=BuffPATK*GREATERMIGHT[bu]}
//Greater Shield
	if (d.gI("GRSC").checked==true)
		{var bu=d.gI("GRS").value;BuffPDEF=BuffPDEF*GREATERSHIELD[bu]}
//Guard Stance
	if (d.gI("GSC").checked==true)
		{var bu=d.gI("GS").value;AddPDEF=AddPDEF+GUARDSTANCE[bu];BuffShieldBlockRate=BuffShieldBlockRate*1.5}
//Guidance
	if (d.gI("GUIDC").checked==true)
		{var bu=d.gI("GUID").value;BuffACC=BuffACC+GUIDANCE[bu]}
//Guts
	if (d.gI("GTS1C").checked==true)
		{var bu=d.gI("GTS1").value;BuffPDEF=BuffPDEF*GUTS[bu]}
	if (d.gI("GTS2C").checked==true)
		{var bu=d.gI("GTS2").value;BuffPDEF=BuffPDEF*GUTS[bu]}
//Haste
	if (d.gI("HSTC").checked==true)
		{var bu=d.gI("HST").value;BuffASPD=BuffASPD*HASTE[bu]}
//Hawk Eye
	if (d.gI("HEC").checked==true)
		{var bu=d.gI("HE").value;BuffPDEF=0.90*BuffPDEF;BuffACC=BuffACC+HAWKEYE[bu]}
//Hero Debuffs
	if (d.gI("HEEC").checked==true) {
		var bu=d.gI("HEE").value;
		if (bu=="1")
			{BuffPDEF=BuffPDEF*0.5;AddMDEF=AddMDEF-50;BuffEVA=BuffEVA-16;BuffShieldBlockRate=BuffShieldBlockRate*0.5}
	}
	if (d.gI("HEDC").checked==true) {
		var bu=d.gI("HED").value;
		if (bu=="1")
			{BuffSPEED=BuffSPEED*1.52}
	}
//Hero Skills
	if (d.gI("HERC").checked==true) {
		var bu=d.gI("HER").value;
		if (bu=="1")
			{AddPATK=AddPATK+500;AddMATK=AddMATK+500;BuffPDEF=BuffPDEF*0.75;AddMDEF=AddMDEF-25;BuffACC=BuffACC+8;BuffEVA=BuffEVA-8;AddSPEED=AddSPEED+20;AddASPD=AddASPD+100;AddCAST=AddCAST+100}
		else if (bu=="2" && shield!=0)
			{AddPDEF=AddPDEF+5400;AddMDEF=AddMDEF+4050;AddSPEED=AddSPEED+5}
		else if (bu=="3")
			{AddPATK=AddPATK+250;AddPDEF=AddPDEF+500}
	}
//Hot Springs Cholera
	if (d.gI("CHOLC").checked==true)
		{var bu=d.gI("CHOL").value;BuffACC=BuffACC+HSCHOLACC[bu];BuffEVA=BuffEVA+HSCHOLEVA[bu]}
//Hot Springs Malaria
	if (d.gI("MALC").checked==true)
		{var bu=d.gI("MAL").value;BuffCAST=BuffCAST*HSMALARIA[bu]}
//Ice Vortex
	if (d.gI("IVC").checked==true)
		{var iv=d.gI("IV").value;BuffSPEED=BuffSPEED*0.7;BuffASPD=BuffASPD*0.9;BuffCAST=BuffCAST*0.9;AddMPR2=AddMPR2-12}
//Invocation
	if (d.gI("INVC").checked==true)
		{BuffPDEF=BuffPDEF*0.1}
//Judgment
	if (d.gI("JDGC").checked==true)
		{var iv=d.gI("JDG").value;BuffCRITDMG=BuffCRITDMG*JUDGMENT[iv]}
//Light Vortex
	if (d.gI("LVORC").checked==true)
		{var bu=d.gI("LVOR").value;BuffACC=BuffACC-6;AddMPR2=AddMPR2-12}
//Magic Barrier
	if (d.gI("MB1C").checked==true)
		{var mb1=d.gI("MB1").value;BuffMDEF=BuffMDEF*MAGICBARRIER[mb1]}
	if (d.gI("MB2C").checked==true)
		{var mb2=d.gI("MB2").value;BuffMDEF=BuffMDEF*MAGICBARRIER[mb2]}
	if (d.gI("MB3C").checked==true)
		{var mb3=d.gI("MB3").value;BuffMDEF=BuffMDEF*MAGICBARRIER[mb3]}
//Majesty
	if (d.gI("MAJ1C").checked==true)
		{var maj1=d.gI("MAJ1").value;BuffPDEF=BuffPDEF*MAJESTY[maj1];BuffEVA=BuffEVA+MAJESTYEVA[maj1]}
	if (d.gI("MAJ2C").checked==true)
		{var maj2=d.gI("MAJ2").value;BuffPDEF=BuffPDEF*MAJESTY[maj2];BuffEVA=BuffEVA+MAJESTYEVA[maj2]}
//Mana Regeneration
	if (d.gI("MRGC").checked==true)
		{var manaregen=d.gI("MRG").value;AddMPR=AddMPR+MANAREGEN[manaregen]}
//Might
	if (d.gI("MT1C").checked==true)
		{var bu=d.gI("MT1").value;BuffPATK=BuffPATK*MIGHT[bu]}
	if (d.gI("MT2C").checked==true)
		{var bu=d.gI("MT2").value;BuffPATK=BuffPATK*MIGHT[bu]}
//Pa'agrio's Fist
	if (d.gI("PAFC").checked==true)
		{AddCP=AddCP+800}
//Parry Stance
	if (d.gI("PRYC").checked==true)
		{var parry=d.gI("PRY").value;BuffPDEF=1.25*BuffPDEF;BuffMDEF=1.25*BuffMDEF;BuffACC=BuffACC-4;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.8}
//P.Atk. Debuffs
	if (d.gI("DEPC").checked==true)
		{var depatk=d.gI("DEP").value;BuffPATK=BuffPATK*WEAKNESS[depatk]}
//P.Def. Debuffs
	if (d.gI("DEDC").checked==true)
		{var depdef=d.gI("DED").value;BuffPDEF=BuffPDEF*HEX[depdef]}
//Polearm Accuracy
	if (d.gI("PACC").checked==true)
		{var poleacc=d.gI("PAC").value;BuffACC=BuffACC+POLEACC[poleacc]}
//Prophecies
	var proph=d.gI("PRP").value
	if (d.gI("PRPC").checked==true)
		{BuffHP=BuffHP*PROPHECYHP[proph];
		BuffMP=BuffMP*PROPHECYMP[proph];
		BuffPATK=BuffPATK*PROPHECYPATK[proph];
		BuffMATK=BuffMATK*PROPHECYMATK[proph];
		BuffPDEF=BuffPDEF*PROPHECYPDEF[proph];
		BuffMDEF=BuffMDEF*PROPHECYMDEF[proph];
		BuffACC=BuffACC+PROPHECYACC[proph];
		BuffEVA=BuffEVA+PROPHECYEVA[proph];
		subcritical=subcritical+(basecritical*PROPHECYCRIT[proph]);
		BuffSPEED=BuffSPEED*PROPHECYSPEED[proph];
		BuffASPD=BuffASPD*PROPHECYASPD[proph];
		BuffCAST=BuffCAST*PROPHECYCAST[proph];
		BuffHPR=BuffHPR*PROPHECYHPR[proph];
		BuffMPR=BuffMPR*PROPHECYMPR[proph];
		BuffCRITDMG=BuffCRITDMG*PROPHECYCRITDMG[proph]
		BuffVR=BuffVR+PROPHECYVR[proph]}
	if (d.gI("PRPC").checked==true && proph==4 && position==3)
		{BuffCRITDMG=BuffCRITDMG*1.2;BuffCOMBATCRIT=BuffCOMBATCRIT*1.2}
//Psycho Symphony
	if (d.gI("PSYC").checked==true)
		{var psycho=d.gI("PSY").value;
		BuffSPEED=BuffSPEED*PSYCHO[psycho];
		BuffASPD=BuffASPD*PSYCHO[psycho];
		BuffCAST=BuffCAST*PSYCHO[psycho];}
//Queen Buffs
	var queen=d.gI("QUEE").value
	if ((queen=="1"||queen=="2"||queen=="3") && d.gI("QUEEC").checked==true)
		{BuffPATK=CATBUFFS[queen]*BuffPATK;BuffACC=BuffACC+2}
	else if ((queen=="4"||queen=="5"||queen=="6") && d.gI("QUEEC").checked==true)
		{subcritical=subcritical+(basecritical*CATBUFFS[queen]);BuffCRITDMG=BuffCRITDMG*CATBUFFS2[queen]}
//Rage
	if (d.gI("RGE1C").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var rage1=d.gI("RGE1").value;BuffPATK=RAGE2HS[rage1]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3;BuffACC=BuffACC+RAGE2HSACC[rage1]}
	else if (d.gI("RGE1C").checked==true && (WpnType=="Sword"||WpnType=="Blunt"||WpnType=="Polearm"))
		{var rage1=d.gI("RGE1").value;BuffPATK=RAGE[rage1]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3}
	else if (d.gI("RGE1C").checked==true)
		{var rage1=d.gI("RGE1").value;BuffPATK=RAGEOTHER[rage1]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3}
	if (d.gI("RGE2C").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var rage2=d.gI("RGE2").value;BuffPATK=RAGE2HS[rage2]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3;BuffACC=BuffACC+RAGE2HSACC[rage2]}
	else if (d.gI("RGE2C").checked==true && (WpnType=="Sword"||WpnType=="Blunt"||WpnType=="Polearm"))
		{var rage2=d.gI("RGE2").value;BuffPATK=RAGE[rage2]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3}
	else if (d.gI("RGE2C").checked==true && (WpnType!="2hs" && WpnType!="2hb"))
		{var rage2=d.gI("RGE2").value;BuffPATK=RAGEOTHER[rage2]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3}
//Rapid Fire
	if (d.gI("RPFC").checked==true && WpnMAS=="Bow")
		{var rapidfire=d.gI("RPF").value
		AddPATK=AddPATK+RAPIDFIRE[rapidfire];
		BuffASPD=BuffASPD*1.2}
//Rapid Shot
	if (d.gI("RPD1C").checked==true && WpnMAS=="Bow")
		{var rapid1=d.gI("RPD1").value;BuffASPD=BuffASPD*RAPIDSHOT[rapid1]}
	if (d.gI("RPD2C").checked==true && WpnMAS=="Bow")
		{var rapid2=d.gI("RPD2").value;BuffASPD=BuffASPD*RAPIDSHOT[rapid2]}
//Regeneration
	if (d.gI("RGNC").checked==true)
		{var regeneration=d.gI("RGN").value;BuffHPR=BuffHPR*REGENERATION[regeneration]}
//Riposte Stance
	if (d.gI("RIPC").checked==true)
		{var riposte=d.gI("RIP").value;BuffACC=BuffACC-4;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.8;BuffRD=BuffRD+0.3}
//Sand Bomb
	if (d.gI("SBBC").checked==true)
		{var sandbomb=d.gI("SBB").value;BuffACC=BuffACC+SANDBOMB[sandbomb]}
//Seal of Despair
	if (d.gI("DERC").checked==true)
		{var despair=d.gI("DER").value;BuffMDEF=0.70*BuffMDEF;BuffACC=BuffACC-6;subcritical=subcritical+(basecritical*-0.3);BuffSPEED=BuffSPEED*0.8;BuffASPD=BuffASPD*0.8;BuffCRITDMG=BuffCRITDMG*0.7}
//Seal of Scourge
	if (d.gI("SCRC").checked==true)
		{BuffHPR2=BuffHPR2*0}
//Shield
	if (d.gI("SHD1C").checked==true)
		{var shield1=d.gI("SHD1").value;BuffPDEF=BuffPDEF*SHIELD[shield1]}
	if (d.gI("SHD2C").checked==true)
		{var shield2=d.gI("SHD2").value;BuffPDEF=BuffPDEF*SHIELD[shield2]}
//Shield Fortress
	if (d.gI("SFC").checked==true && shield!="0")
		{var shieldfortress=d.gI("SF").value;AddSHIELDPDEF=AddSHIELDPDEF+SHIELDFORTRESS[shieldfortress]}
//Shock Blast
	if (d.gI("SBC").checked==true)
		{var shockblast=d.gI("SB").value;BuffPDEF=0.70*BuffPDEF;BuffMDEF=0.70*BuffMDEF}
//Silent Move
	if (d.gI("SMC").checked==true)
		{var sm=d.gI("SM").value;BuffSPEED=BuffSPEED*0.6}
//Skin
	if (d.gI("SKNC").checked==true)
		{var bu=d.gI("SKN").value;BuffRD=BuffRD+SKIN[bu]}
//Slow
	if (d.gI("DESC").checked==true)
		{var bu=d.gI("DES").value;BuffSPEED=BuffSPEED*SLOW[bu]}
//Snipe
	if (d.gI("SNIC").checked==true && WpnMAS=="Bow")
		{var snipe=d.gI("SNI").value;AddPATK=AddPATK+SNIPE[snipe];BuffACC=BuffACC+SNIPEACC[snipe];subcritical=subcritical+(basecritical*0.2)}
//Song of Earth
	if (d.gI("SOEC").checked==true)
		{BuffPDEF=1.25*BuffPDEF}
//Song of Hunter
	if (d.gI("SOHC").checked==true)
		{subcritical=subcritical+(basecritical*1)}
//Song of Life
	if (d.gI("SOLC").checked==true)
		{BuffHPR=BuffHPR*1.2}
//Song of Meditation
	if (d.gI("SOMC").checked==true)
		{BuffMPR=BuffMPR*1.2}
//Song of Vengeance
	if (d.gI("SOVC").checked==true)
		{BuffRD=BuffRD+0.2}
//Song of Vitality
	if (d.gI("VITC").checked==true)
		{BuffHP=1.3*BuffHP}
//Song of Warding
	if (d.gI("WARDC").checked==true)
		{BuffMDEF=1.3*BuffMDEF}
//Song of Water
	if (d.gI("SWATC").checked==true)
		{BuffEVA=BuffEVA+3}
//Song of Wind
	if (d.gI("SWIC").checked==true)
		{AddSPEED=AddSPEED+20}
//Soul Cry
	if (d.gI("SL1C").checked==true)
		{var soul1=d.gI("SL1").value;AddPATK=AddPATK+SOULCRY[soul1]}
	if (d.gI("SL2C").checked==true)
		{var soul2=d.gI("SL2").value;AddPATK=AddPATK+SOULCRY[soul2]}
	if (d.gI("SL3C").checked==true)
		{var soul3=d.gI("SL3").value;AddPATK=AddPATK+SOULCRY[soul3]}
//Soul Guard
	if (d.gI("SGC").checked==true)
		{var sg=d.gI("SG").value;AddPDEF=AddPDEF+SOULGUARD[sg]}
//Soul of Sagitarrius
	if (d.gI("SAGC").checked==true)
		{var sag=d.gI("SAG").value;BuffMP=BuffMP*SOULOFSAG[sag]}
//Stealth
	if (d.gI("STLC").checked==true)
		{var stealth=d.gI("STL").value
		BuffPATK=BuffPATK*0.55;
		BuffPDEF=BuffPDEF*STEALTH[stealth];
		BuffMDEF=BuffMDEF*STEALTH[stealth];
		BuffACC=BuffACC-12;
		BuffEVA=BuffEVA+STEALTHEVA[stealth]}
//Thrill Fight
	if (d.gI("TFC").checked==true)
		{var tf=d.gI("TF").value;BuffSPEED=BuffSPEED*0.8;BuffASPD=BuffASPD*THRILLFIGHT[tf]}
//Totem
	var totem1=d.gI("TTM1").value
	if (totem1=="1" && d.gI("TTM1C").checked==true)
		{BuffSPEED=BuffSPEED*0.7}
	if (totem1=="1" && d.gI("TTM1C").checked==true && WpnMAS=="Fist")
		{BuffPATK=1.2*BuffPATK}
	else if (totem1=="2" && d.gI("TTM1C").checked==true)
		{BuffSPEED=BuffSPEED*1.2;BuffACC=BuffACC+3}
	var totem2=d.gI("TTM2").value
	if (totem2=="1" && d.gI("TTM2C").checked==true)
		{BuffSPEED=BuffSPEED*0.7}
	if (totem2=="1" && d.gI("TTM2C").checked==true && WpnMAS=="Fist")
		{BuffPATK=1.2*BuffPATK;BuffCRITDMG=BuffCRITDMG*1.2}
	else if (totem2=="3" && d.gI("TTM2C").checked==true)
		{BuffPATK60=1.43*BuffPATK60;AddCRIT60=AddCRIT60+100;AddCRIT30=AddCRIT30+300;BuffACC=BuffACC+6}
	else if (totem2=="4" && d.gI("TTM2C").checked==true && WpnMAS=="Fist")
		{AddCRIT=AddCRIT+100;BuffACC=BuffACC+6;BuffCRITDMG=BuffCRITDMG*1.3}
	else if (totem2=="5" && d.gI("TTM2C").checked==true)
		{BuffMDEF=1.3*BuffMDEF;BuffPDEF=1.3*BuffPDEF;BuffEVA=BuffEVA-9;BuffSPEED=BuffSPEED*0.7}
	else if (totem2=="6" && d.gI("TTM2C").checked==true && WpnMAS=="Fist")
		{BuffACC=BuffACC+6;BuffASPD=BuffASPD*1.2}
	else if (totem2=="7" && d.gI("TTM2C").checked==true)
		{BuffPATK=0.70*BuffPATK;BuffEVA=BuffEVA+12;BuffSPEED=BuffSPEED*1.3;BuffACC=BuffACC-9}
	else if (totem2=="2" && d.gI("TTM2C").checked==true)
		{BuffSPEED=BuffSPEED*1.2;BuffACC=BuffACC+3}
//Tribunal
	if (d.gI("TRBC").checked==true)
		{var tribunal=d.gI("TRB").value;subcritical=subcritical+(basecritical*TRIBUNAL[tribunal])}
//Ultimate Defense
	if (d.gI("UD1C").checked==true)
		{var ud1=d.gI("UD1").value
		AddPDEF=AddPDEF+UDPDEF[ud1]
		AddMDEF=AddMDEF+UDMDEF[ud1]}
	if (d.gI("UD2C").checked==true)
		{var ud2=d.gI("UD2").value
		AddPDEF=AddPDEF+UDPDEF[ud2]
		AddMDEF=AddMDEF+UDMDEF[ud2]}
//Ultimate Evasion
	if (d.gI("UEC").checked==true)
		{var ue=d.gI("UE").value;BuffEVA=BuffEVA+UE[ue]}
//Vampiric Rage
	if (d.gI("VRAC").checked==true)
		{var bu=d.gI("VRA").value;BuffVR=BuffVR+VAMPIRICRAGE[bu]}
//Vicious Stance
	if (d.gI("VSC").checked==true)
		{var ue=d.gI("VS").value;AddCRITDMG=AddCRITDMG+VICIOUSSTANCE[ue]}
//War Cry
	if (d.gI("WCY1C").checked==true)
		{var warcry1=d.gI("WCY1").value;BuffPATK=BuffPATK*WARCRY[warcry1]}
	if (d.gI("WCY2C").checked==true)
		{var warcry2=d.gI("WCY2").value;BuffPATK=BuffPATK*WARCRY[warcry2]}
//Wind Vortex
	if (d.gI("WVC").checked==true)
		{var wv=d.gI("WV").value;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.9;BuffCAST=BuffCAST*0.7;AddMPR2=AddMPR2-12}
//Wind Walk
	if (d.gI("WWC").checked==true)
		{var ww=d.gI("WW").value;AddSPEED=AddSPEED+WINDWALK[ww]}
//Zealot
	if (d.gI("ZLTC").checked==true)
		{var zealot=d.gI("ZLT").value
		AddSPEED=AddSPEED+ZEALOTSPEED[zealot]}
	if (d.gI("ZLTC").checked==true && (WpnType=="Fist"||WpnType=="2hb"||WpnType=="Blunt"))
		{var zealot=d.gI("ZLT").value
		BuffASPD=BuffASPD*ZEALOT[zealot]
		BuffACC=BuffACC+6
		BuffCRITDMG=BuffCRITDMG*ANGELICCRITDMG[zealot]}
	if (d.gI("ZLTC").checked==true && JOB=="DE" && (WpnType=="Polearm"||WpnType=="2hs"||WpnType=="Sword"))
		{var zealot=d.gI("ZLT").value
		AddCRIT=AddCRIT+ZEALOTCRIT[zealot]
		BuffASPD=BuffASPD*ZEALOT[zealot]
		BuffACC=BuffACC+6}

//Nuker Nerf
if (race=="HM"||race=="EM"||race=="OM"||race=="DM")
	{
	if (AType!="R")
	{BuffASPD=BuffASPD*0.8;BuffCAST=BuffCAST*0.5}
	else
	{BuffMPR=BuffMPR*1.2}
	if (WpnMAS=="Bow"||WpnType=="Polearm")
	{BuffACC=BuffACC-8;BuffCAST=BuffCAST*0.7}
	}
if (d.gI("HMO1C").checked==true && AType=="H"||d.gI("HMO2C").checked==true && AType=="H"||d.gI("HMO3C").checked==true && AType=="H")
	{BuffCAST=BuffCAST*1.71;BuffASPD=BuffASPD*1.25}
if (d.gI("LMO1C").checked==true && AType=="L"||d.gI("LMO2C").checked==true && AType=="L"||d.gI("LMO3C").checked==true && AType=="L")
	{BuffCAST=BuffCAST*1.9;BuffASPD=BuffASPD*1.25}
if (d.gI("LMSC").checked==true && AType=="L")
	{BuffCAST=BuffCAST*1.88;BuffASPD=BuffASPD*1.25}
if (d.gI("LMH1C").checked==true && AType=="L"||d.gI("LMH2C").checked==true && AType=="L")
	{BuffCAST=BuffCAST*1.91;BuffASPD=BuffASPD*1.25}
if (d.gI("HMPC").checked==true && AType=="H")
	{BuffCAST=BuffCAST*1.68;BuffASPD=BuffASPD*1.25}

//Passives
//Weapon Mastery for Fighter Classes
	if (d.gI("WMFC").checked==true)
		{var wmf=d.gI("WMF").value;AddPATK=AddPATK+WMF[wmf]}
//Weapon Mastery for Mystic Classes
	if (d.gI("WMM1C").checked==true)
		{var wmm1=d.gI("WMM1").value
		AddPATK=AddPATK+WMMPATK[wmm1];
		AddMATK=AddMATK+WMMMATK[wmm1]}
	if (d.gI("WMM2C").checked==true)
		{var wmm2=d.gI("WMM2").value
		AddPATK=AddPATK+WMMPATK[wmm2];
		AddMATK=AddMATK+WMMMATK[wmm2]}
	if (d.gI("WMM3C").checked==true)
		{var wmm3=d.gI("WMM3").value
		AddPATK=AddPATK+WMMPATK[wmm3];
		AddMATK=AddMATK+WMMMATK[wmm3]}
//Sword/Blunt Mastery (Warrior)
	if (d.gI("WSBM1C").checked==true && (WpnMAS=="Blunt"||WpnMAS=="Sword"))
		{var wsbm1=d.gI("WSBM1").value;AddPATK=AddPATK+MTYPE1[wsbm1]}
	if (d.gI("WSBM2C").checked==true && (WpnMAS=="Blunt"||WpnMAS=="Sword"))
		{var wsbm2=d.gI("WSBM2").value;AddPATK=AddPATK+MTYPE1[wsbm2]}
//Blunt Mastery
	if (d.gI("BLM1C").checked==true && WpnMAS=="Blunt")
		{var bluntm1=d.gI("BLM1").value
		AddPATK=AddPATK+MTYPE1[bluntm1];}
	if (d.gI("BLM2C").checked==true && WpnMAS=="Blunt")
		{var bluntm2=d.gI("BLM2").value
		AddPATK=AddPATK+MTYPE1[bluntm2];
		AddCRITDMG=AddCRITDMG+BLUNTMCRITDAMAGE[bluntm2]}
	if (d.gI("BLM2C").checked==true)
		{var bluntm2=d.gI("BLM2").value
		AddSPEED=AddSPEED+BLUNTMSPEED[bluntm2]}
//Polearm Mastery
	if (d.gI("PLM1C").checked==true && WpnMAS=="Polearm")
		{var polem1=d.gI("PLM1").value;AddPATK=AddPATK+MTYPE1[polem1]}
	if (d.gI("PLM2C").checked==true && WpnMAS=="Polearm")
		{var polem2=d.gI("PLM2").value;AddPATK=AddPATK+MTYPE1[polem2]}
//Fist Mastery
	if (d.gI("FIM1C").checked==true && WpnMAS=="Fist")
		{var fistm1=d.gI("FIM1").value;AddPATK=AddPATK+MTYPE1[fistm1]}
	if (d.gI("FIM2C").checked==true && WpnMAS=="Fist")
		{var fistm2=d.gI("FIM2").value;AddPATK=AddPATK+MTYPE1[fistm2]}
//Sword/Blunt Mastery (Knight)
	if  (d.gI("KSBM1C").checked==true && (WpnMAS=="Sword"||WpnMAS=="Blunt"))
		{var ksbm1=d.gI("KSBM1").value;AddPATK=AddPATK+KNIGHTMASTERY[ksbm1]}
	if  (d.gI("KSBM2C").checked==true && (WpnMAS=="Sword"||WpnMAS=="Blunt"))
		{var ksbm2=d.gI("KSBM2").value;AddPATK=AddPATK+KNIGHTMASTERY[ksbm2]}
//Dagger Mastery
	if (d.gI("DGM1C").checked==true && WpnMAS=="Dagger")
		{var daggerm1=d.gI("DGM1").value;AddPATK=AddPATK+DAGGERM[daggerm1]}
	if (d.gI("DGM2C").checked==true && WpnMAS=="Dagger")
		{var daggerm2=d.gI("DGM2").value;AddPATK=AddPATK+DAGGERM[daggerm2]}
//Bow Mastery
	if (d.gI("BOWM1C").checked==true && WpnMAS=="Bow")
		{var bowm1=d.gI("BOWM1").value;AddPATK=AddPATK+BOWM[bowm1]}
	if (d.gI("BOWM2C").checked==true && WpnMAS=="Bow")
		{var bowm2=d.gI("BOWM2").value;AddPATK=AddPATK+BOWM[bowm2]}
//Dual Weapon Mastery
	if (d.gI("DUALMC").checked==true && WpnMAS=="Duals")
		{var dualm=d.gI("DUALM").value;AddPATK=AddPATK+DUALM[dualm]}
//Two Handed Weapon Mastery
	if (d.gI("THM1C").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var thm1=d.gI("THM1").value
		AddPATK=AddPATK+THM[thm1];
		BuffACC=BuffACC+3}
	if (d.gI("THM2C").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var thm2=d.gI("THM2").value
		AddPATK=AddPATK+THM[thm2];
		BuffACC=BuffACC+3}
//Armor Mastery (Fighter)
	if (d.gI("AMFC").checked==true && AType=="L")
		{var amf=d.gI("AMF").value
		AddPDEF=AddPDEF+AMF[amf];
		BuffEVA=BuffEVA+AMFEVA[amf]}
	else if (d.gI("AMFC").checked==true && AType!="L")
		{var amf=d.gI("AMF").value
		AddPDEF=AddPDEF+AMF[amf];}
//Armor Mastery (Mystic)
	if (d.gI("AMMC").checked==true)
		{var amm=d.gI("AMM").value;AddPDEF=AddPDEF+AMM[amm]}
//Heavy Armor Mastery (Knight)
	if (d.gI("HMK1C").checked==true && AType=="H")
		{var hmk1=d.gI("HMK1").value;AddPDEF=AddPDEF+HMK[hmk1]}
	if (d.gI("HMK2C").checked==true && AType=="H")
		{var hmk2=d.gI("HMK2").value;AddPDEF=AddPDEF+HMK[hmk2]}
//Heavy Armor Mastery (Warrior)
	if (d.gI("HMW1C").checked==true && AType=="H")
		{var hmw1=d.gI("HMW1").valueAddPDEF=AddPDEF+HMW[hmw1]}
	if (d.gI("HMW2C").checked==true && AType=="H")
		{var hmw2=d.gI("HMW2").value;AddPDEF=AddPDEF+HMW[hmw2]}
//Heavy Armor Mastery (Orc Mystic)
	if (d.gI("HMO1C").checked==true && AType=="H")
		{var hmo1=d.gI("HMO1").value;AddPDEF=AddPDEF+HMO[hmo1]}
	if (d.gI("HMO2C").checked==true && AType=="H")
		{var hmo2=d.gI("HMO2").value;AddPDEF=AddPDEF+HMO[hmo2]}
	if (d.gI("HMO3C").checked==true && AType=="H")
		{var hmo3=d.gI("HMO3").value;AddPDEF=AddPDEF+HMO[hmo3]}
//Heavy Armor Mastery (Prophet)
	if (d.gI("HMPC").checked==true && AType=="H")
		{var hmp=d.gI("HMP").value;AddPDEF=AddPDEF+HMP[hmp]}
//Light Armor Mastery (Warrior)
	if (d.gI("LMW1C").checked==true && AType=="L")
		{var lmw1=d.gI("LMW1").value
		AddPDEF=AddPDEF+LMW[lmw1]
		BuffEVA=BuffEVA+LMWEVA[lmw1]}
	if (d.gI("LMW2C").checked==true && AType=="L")
		{var lmw2=d.gI("LMW2").value
		AddPDEF=AddPDEF+LMW[lmw2]
		BuffEVA=BuffEVA+LMWEVA[lmw2]}
//Light Armor Mastery (Rogue)
	if (d.gI("LMR1C").checked==true && AType=="L")
		{var lmr1=d.gI("LMR1").value
		AddPDEF=AddPDEF+LMR[lmr1]
		BuffEVA=BuffEVA+LMREVA[lmr1]}
	if (d.gI("LMR2C").checked==true && AType=="L")
		{var lmr2=d.gI("LMR2").value
		AddPDEF=AddPDEF+LMR[lmr2]
		BuffEVA=BuffEVA+LMREVA[lmr2]}
//Light Armor Mastery (Orc Mystic)
	if (d.gI("LMO1C").checked==true && AType=="L")
		{var lmo1=d.gI("LMO1").value;AddPDEF=AddPDEF+LMO[lmo1];BuffMPR=BuffMPR*1.2}
	if (d.gI("LMO2C").checked==true && AType=="L")
		{var lmo2=d.gI("LMO2").value;AddPDEF=AddPDEF+LMO[lmo2];BuffMPR=BuffMPR*1.2}
	if (d.gI("LMO3C").checked==true && AType=="L")
		{var lmo3=d.gI("LMO3").value;AddPDEF=AddPDEF+LMO[lmo3];BuffMPR=BuffMPR*1.2}
//Light Armor Mastery (Healer)
	if (d.gI("LMH1C").checked==true && AType=="L")
		{var lmh1=d.gI("LMH1").value;AddPDEF=AddPDEF+LMH[lmh1];BuffMPR=BuffMPR*1.2}
	if (d.gI("LMH2C").checked==true && AType=="L")
		{var lmh2=d.gI("LMH2").value;AddPDEF=AddPDEF+LMH[lmh2];BuffMPR=BuffMPR*1.2}
//Light Armor Mastery (Summoner)
	if (d.gI("LMSC").checked==true && AType=="L")
		{var lms=d.gI("LMS").value;AddPDEF=AddPDEF+LMS[lms];BuffMPR=BuffMPR*1.2}
//Robe Mastery (Nuker)
	if (d.gI("RMN1C").checked==true && AType=="R")
		{var rmn1=d.gI("RMN1").value;AddPDEF=AddPDEF+RMN[rmn1]}
	if (d.gI("RMN2C").checked==true && AType=="R")
		{var rmn2=d.gI("RMN2").value;AddPDEF=AddPDEF+RMN[rmn2]}
//Robe Mastery (Healer)
	if (d.gI("RMH1C").checked==true && AType=="R")
		{var rmh1=d.gI("RMH1").value;AddPDEF=AddPDEF+RMH[rmh1]}
	if (d.gI("RMH2C").checked==true && AType=="R")
		{var rmh2=d.gI("RMH2").value;AddPDEF=AddPDEF+RMH[rmh2]}
//Robe Mastery (Orc Mystic)
	if (d.gI("RMO1C").checked==true && AType=="R")
		{var rmo1=d.gI("RMO1").value;AddPDEF=AddPDEF+RMO[rmo1]}
	if (d.gI("RMO2C").checked==true && AType=="R")
		{var rmo2=d.gI("RMO2").value;AddPDEF=AddPDEF+RMO[rmo2]}
	if (d.gI("RMO3C").checked==true && AType=="R")
		{var rmo3=d.gI("RMO3").value;AddPDEF=AddPDEF+RMO[rmo3]}
//Magic Resistance
	if (d.gI("MR1C").checked==true)
		{var mr1=d.gI("MR1").value;AddMDEF=AddMDEF+MR[mr1]}
	if (d.gI("MR2C").checked==true)
		{var mr2=d.gI("MR2").value;AddMDEF=AddMDEF+MR[mr2]}
//Anti-Magic
	if (d.gI("AM1C").checked==true)
		{var am1=d.gI("AM1").value;AddMDEF=AddMDEF+AM[am1]}
	if (d.gI("AM2C").checked==true)
		{var am2=d.gI("AM2").value;AddMDEF=AddMDEF+AM[am2]}
	if (d.gI("AM3C").checked==true)
		{var am3=d.gI("AM3").value;AddMDEF=AddMDEF+AM[am3]}
//Acrobatic Move
	if (d.gI("ACRM1C").checked==true && movemode=="0.7")
		{var bu=d.gI("ACRM1").value;combatevasion=combatevasion+ACROBATICMOVE[bu]}
	if (d.gI("ACRM2C").checked==true && movemode=="0.7")
		{var bu=d.gI("ACRM2").value;combatevasion=combatevasion+ACROBATICMOVE[bu]}
//Aegis
	if (d.gI("AGSC").checked==true)
		{block360=true}
//Agile Movement
	if (d.gI("AGM1C").checked==true && AType=="L")
		{var agilemovement1=d.gI("AGM1").value
		BuffACC=BuffACC+AGILEMOVEMENT[agilemovement1]
		AddSPEED=AddSPEED+AGILEMOVEMENTSPEED[agilemovement1]}
	if (d.gI("AGM2C").checked==true && AType=="L")
		{var agilemovement2=d.gI("AGM2").value
		BuffACC=BuffACC+AGILEMOVEMENT[agilemovement2]
		AddSPEED=AddSPEED+AGILEMOVEMENTSPEED[agilemovement2]}
//Arcane Lore
	if (d.gI("ARLC").checked==true)
		{BuffMATK=BuffMATK*1.03}
//Archery
	if (d.gI("ARCC").checked==true && WpnMAS=="Bow")
		{AddPATK=AddPATK+200}
//Assassination
	if (d.gI("ASSC").checked==true && WpnType=="Dagger")
		{AddPATK=AddPATK+70}
//Boost Attack Speed
	if (d.gI("BOA1C").checked==true)
		{var boostaspd1=d.gI("BOA1").value;BuffASPD=BuffASPD*BOOSTASPD[boostaspd1]}
	if (d.gI("BOA2C").checked==true)
		{var boostaspd2=d.gI("BOA2").value;BuffASPD=BuffASPD*BOOSTASPD[boostaspd2]}
//Boost Evasion
	if (d.gI("BEV1C").checked==true)
		{var bu=d.gI("BEV1").value;BuffEVA=BuffEVA+BOOSTEVASION[bu]}
	if (d.gI("BEV2C").checked==true)
		{var bu=d.gI("BEV2").value;BuffEVA=BuffEVA+BOOSTEVASION[bu]}
//Boost HP
	if (d.gI("BHP1C").checked==true)
		{var boosthp1=d.gI("BHP1").value
		AddHP=AddHP+BOOSTHP[boosthp1]
		AddCP=AddCP+BOOSTHPCP[boosthp1]}
	if (d.gI("BHP2C").checked==true)
		{var boosthp2=d.gI("BHP2").value
		AddHP=AddHP+BOOSTHP[boosthp2]
		AddCP=AddCP+BOOSTHPCP[boosthp2]}
	if (d.gI("BHP3C").checked==true)
		{var boosthp3=d.gI("BHP3").value
		AddHP=AddHP+BOOSTHP[boosthp3]
		AddCP=AddCP+BOOSTHPCP[boosthp3]}
//Boost Mana
	if (d.gI("BMP1C").checked==true)
		{var boostmp1=d.gI("BMP1").value;AddMP=AddMP+BOOSTMP[boostmp1]}
	if (d.gI("BMP2C").checked==true)
		{var boostmp2=d.gI("BMP2").value;AddMP=AddMP+BOOSTMP[boostmp2]}
//Clan Aegis
	if (d.gI("CLPDC").checked==true)
		{var clanpdef=d.gI("CLPD").value;BuffPDEF=BuffPDEF*CLANMULTIPLY[clanpdef]}
//Clan Agility
	if (d.gI("CLAGC").checked==true)
		{var bu=d.gI("CLAG").value;BuffEVA=BuffEVA+CLANADDB[bu]}
//Clan Empowerment
	if (d.gI("CLEMC").checked==true)
		{var bu=d.gI("CLEM").value;BuffMATK=BuffMATK*1.06}
//Clan Guidance
	if (d.gI("CLGDC").checked==true)
		{var clanguidance=d.gI("CLGD").value;BuffACC=BuffACC+CLANADDB[clanguidance]}
//Clan Lifeblood
	if (d.gI("CLHRC").checked==true)
		{AddHPR=AddHPR+0.5*movemode}
//Clan Magic Protection
	if (d.gI("CLMDC").checked==true)
		{var clanmdef=d.gI("CLMD").value;BuffMDEF=BuffMDEF*CLANMULTIPLYB[clanmdef]}
//Clan March
	if (d.gI("CLSPC").checked==true)
		{var clanspeed=d.gI("CLSP").value;AddSPEED=AddSPEED+CLANADD[clanspeed]}
//Clan Might
	if (d.gI("CLPAC").checked==true)
		{var clanpatk=d.gI("CLPA").value;BuffPATK=BuffPATK*CLANMULTIPLY[clanpatk]}
//Clan Spirituality
	if (d.gI("CLCPC").checked==true)
		{var clancp=d.gI("CLCP").value;BuffCP=BuffCP*CLANMULTIPLYB[clancp]}
//Clan Vitality
	if (d.gI("CLHPC").checked==true)
		{var clanhp=d.gI("CLHP").value;BuffHP=BuffHP*CLANMULTIPLY[clanhp]}
//Clear Mind
	if (d.gI("CLMC").checked==true && movemode==1)
		{var clearmind=d.gI("CLM").value;AddMPR=AddMPR+CLEARMINDWALK[clearmind]}
	if (d.gI("CLMC").checked==true && movemode==1.1)
		{var clearmind=d.gI("CLM").value;AddMPR=AddMPR+CLEARMINDSTAND[clearmind]}
//Critical Chance
	if (d.gI("CRC1C").checked==true)
		{var criticalchance1=d.gI("CRC1").value;subcritical=subcritical+(basecritical*CRITICALCHANCE[criticalchance1])}
	if (d.gI("CRC2C").checked==true)
		{var criticalchance2=d.gI("CRC2").value;subcritical=subcritical+(basecritical*CRITICALCHANCE[criticalchance2])}
//Critical Power
	if (d.gI("CRP1C").checked==true)
		{var bu=d.gI("CRP1").value;AddCRITDMG=AddCRITDMG+CRITICALPOWER[bu]}
	if (d.gI("CRP2C").checked==true)
		{var bu=d.gI("CRP2").value;AddCRITDMG=AddCRITDMG+CRITICALPOWER[bu]}
//Esprit
	if (d.gI("ESP1C").checked==true && movemode==0.7)
		{var esprit=d.gI("ESP1").value;AddHPR=AddHPR+ESPRITHP[esprit];AddMPR=AddMPR+ESPRITMP[esprit]}
	if (d.gI("ESP2C").checked==true && movemode==0.7)
		{var esprit=d.gI("ESP2").value;AddHPR=AddHPR+ESPRITHP[esprit];AddMPR=AddMPR+ESPRITMP[esprit]}
//Fast HP Recovery
	if (d.gI("FHR1C").checked==true)
		{var fastcast1=d.gI("FHR1").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
	if (d.gI("FHR2C").checked==true)
		{var fastcast1=d.gI("FHR2").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
	if (d.gI("FHR3C").checked==true)
		{var fastcast1=d.gI("FHR3").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
	if (d.gI("FHR4C").checked==true)
		{var fastcast1=d.gI("FHR4").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
//Fast Mana Recovery
	if (d.gI("FMR1C").checked==true)
		{var fastcast1=d.gI("FMR1").value;AddMPR=AddMPR+(FASTMANARECOVERY[fastcast1]*movemode)}
	if (d.gI("FMR2C").checked==true)
		{var fastcast1=d.gI("FMR2").value;AddMPR=AddMPR+(FASTMANARECOVERY[fastcast1]*movemode)}
//Fast Spell Casting
	if (d.gI("FSC1C").checked==true)
		{var fastcast1=d.gI("FSC1").value;BuffCAST=BuffCAST*FASTCAST[fastcast1]}
	if (d.gI("FSC2C").checked==true)
		{var fastcast2=d.gI("FSC2").value;BuffCAST=BuffCAST*FASTCAST[fastcast2]}
//Final Fortress
	if (d.gI("FFOC").checked==true)
		{var finalfortress=d.gI("FFO").value;AddPDEF30=AddPDEF30+FINALFORTRESS[finalfortress]}
//Final Frenzy
	if (d.gI("FFRC").checked==true)
		{var finalfrenzy=d.gI("FFR").value;AddPATK30=AddPATK30+FINALFRENZY[finalfrenzy]}
//Focus Mind
	if (d.gI("FCM1C").checked==true)
		{var fastcast1=d.gI("FCM1").value;AddMPR=AddMPR+(FOCUSMIND[fastcast1]*movemode)}
	if (d.gI("FCM2C").checked==true)
		{var fastcast1=d.gI("FCM2").value;AddMPR=AddMPR+(FOCUSMIND[fastcast1]*movemode)}
//Knighthood
	if (d.gI("KNTC").checked==true)
		{AddPDEF=AddPDEF+86.9;BuffSHIELDPDEF=BuffSHIELDPDEF*1.1}
//Master of Combat
	if (d.gI("MOCC").checked==true && (WpnType=="Fist"||WpnMAS=="Sword"||WpnMAS=="Blunt"||WpnType=="Polearm"||WpnType=="Duals"))
		{AddPATK=AddPATK+80;BuffCP=BuffCP*1.05}
//Necromancy
	if (d.gI("NECC").checked==true)
		{BuffMATK=BuffMATK*1.03}
//Quick Step
	if (d.gI("QS1C").checked==true)
		{var quickstep1=d.gI("QS1").value;AddSPEED=AddSPEED+QUICKSTEP[quickstep1]}
	if (d.gI("QS2C").checked==true)
		{var quickstep2=d.gI("QS2").value;AddSPEED=AddSPEED+QUICKSTEP[quickstep2]}
//Quiver of Holding
	if (d.gI("QOHC").checked==true)
		{var quiverofholding=d.gI("QOH").value;weightlimit=weightlimit*QUIVEROFHOLDING[quiverofholding]}
//Seal of Strife
	if (d.gI("SOSC").checked==true)
		{var sealofstrife=d.gI("SOS").value;BuffCP=BuffCP*SEALOFSTRIFE[sealofstrife]}
//Shadow Sense
	if (d.gI("SHSC").checked==true)
		{BuffACC=BuffACC+3}
//Shield Mastery
	if (d.gI("SDM1C").checked==true)
		{var shieldmastery1=d.gI("SDM1").value;BuffShieldBlockRate=BuffShieldBlockRate*SHIELDMASTERY[shieldmastery1]}
	if (d.gI("SDM2C").checked==true)
		{var shieldmastery2=d.gI("SDM2").value;BuffShieldBlockRate=BuffShieldBlockRate*SHIELDMASTERY[shieldmastery2]}
//Summon Lore
	if (d.gI("SMLC").checked==true)
		{AddPDEF=AddPDEF+60;BuffCAST=BuffCAST*1.07}
//Vital Force
	if (d.gI("VTF1C").checked==true && movemode==1.5)
		{var fastcast1=d.gI("VTF1").value;AddHPR=AddHPR+VITALFORCEHP[fastcast1]*CONMOD;AddMPR=AddMPR+VITALFORCEMP[fastcast1]}
	if (d.gI("VTF2C").checked==true && movemode==1.5)
		{var fastcast1=d.gI("VTF2").value;AddHPR=AddHPR+VITALFORCEHP[fastcast1]*CONMOD;AddMPR=AddMPR+VITALFORCEMP[fastcast1]}
//Weight Limit
	if (d.gI("WTL1C").checked==true)
		{var weightlimit1=d.gI("WTL1").value;weightlimit=weightlimit*WEIGHTLIMIT[weightlimit1]}
	if (d.gI("WTL2C").checked==true)
		{var weightlimit2=d.gI("WTL2").value;weightlimit=weightlimit*WEIGHTLIMIT[weightlimit2]}
	if (d.gI("WTL3C").checked==true)
		{var weightlimit3=d.gI("WTL3").value;weightlimit=weightlimit*WEIGHTLIMIT[weightlimit3]}

//Base Stat Display
d.gI("STR").innerHTML=STR
d.gI("CON").innerHTML=CON
d.gI("DEX").innerHTML=DEX
d.gI("INT").innerHTML=INT
d.gI("WIT").innerHTML=WIT
d.gI("MEN").innerHTML=MEN

//HP calculation
var hp=BaseHP*CONMOD*BuffHP+NECKLACEHP+AddHP
if (hp<1)
	{hp=1}
var hp2=Math.floor(hp)
var hp60=hp*.6
if (hp60<1)
	{hp60=0}
var hp602=Math.floor(hp60)
var hp30=hp*.3
if (hp30<1)
	{hp30=0}
var hp302=Math.floor(hp30)
if (d.gI("HP1").checked==true)
{d.gI("HP").innerHTML=(hp2)}
else if (d.gI("HP6").checked==true && hp602<=0)
{d.gI("HP").innerHTML=(hp602+"/"+hp2);alert("You have died. In a stat calculator. You lose the Internets.")}
else if (d.gI("HP6").checked==true && hp602>=1)
{d.gI("HP").innerHTML=(hp602+"/"+hp2)}
else if (d.gI("HP3").checked==true && hp302<=0)
{d.gI("HP").innerHTML=(hp302+"/"+hp2);alert("You have died. In a stat calculator. You lose the Internets.")}
else if (d.gI("HP3").checked==true && hp302>=1)
{d.gI("HP").innerHTML=(hp302+"/"+hp2)}

//CP calculation
var cp=BaseCP*CONMOD*BuffCP+AddCP
var cp2=Math.floor(cp)
d.gI("CP").innerHTML=cp2

//MP calculation
var mp=BaseMP*MENMOD*BuffMP+AddMP
var mp2=Math.floor(mp)
d.gI("MP").innerHTML=mp2

//P.Atk. calculation
var WpnPATK=WpnPATK+(weaponunderenchant*underPATK)+(weaponoverenchant*overPATK)
if (d.gI("WMM1C").checked==true||d.gI("WMM2C").checked==true||d.gI("WMM3C").checked==true)
	{MasteryPATK=1.45}
else if (d.gI("WMFC").checked==true)
	{MasteryPATK=1.085}
var patk=WpnPATK*STRMOD*LVLMOD*NECKLACEPATK*MasteryPATK*BuffPATK+AddPATK
var patk2=Math.floor(patk)
var patk60=WpnPATK*STRMOD*LVLMOD*NECKLACEPATK*MasteryPATK*BuffPATK*BuffPATK60+AddPATK+AddPATK60
var patk602=Math.floor(patk60)
var patk30=WpnPATK*STRMOD*LVLMOD*NECKLACEPATK*MasteryPATK*BuffPATK*BuffPATK60*BuffPATK30+AddPATK+AddPATK60+AddPATK30
var patk302=Math.floor(patk30)
if (d.gI("HP1").checked==true)
{d.gI("PATK").innerHTML=patk2;combatpatk=patk}
else if (d.gI("HP6").checked==true)
{d.gI("PATK").innerHTML=patk602;combatpatk=patk60}
else if (d.gI("HP3").checked==true)
{d.gI("PATK").innerHTML=patk302;combatpatk=patk30}

//M.Atk. calculation
var WpnMATK=WpnMATK+(weaponunderenchant*underMATK)+(weaponoverenchant*overMATK)
if (d.gI("WMM1C").checked==true||d.gI("WMM2C").checked==true||d.gI("WMM3C").checked==true)
	{MasteryMATK=WpnMATK*(INTMOD*INTMOD)*(LVLMOD*LVLMOD)*0.17*BuffMATK}
var matk=WpnMATK*(INTMOD*INTMOD)*(LVLMOD*LVLMOD)*NECKLACEMATK*BuffMATK+AddMATK+MasteryMATK
var matk2=Math.floor(matk)
d.gI("MATK").innerHTML=matk2

//P.Def. calculation
var Cloak=4
apdef=Cloak+Helmet+Upper+Lower+Glove+Boot
pdef=apdef*LVLMOD*BuffPDEF+AddPDEF
pdef2=Math.floor(pdef)
pdef60=apdef*LVLMOD*BuffPDEF*BuffPDEF60+AddPDEF+AddPDEF60
pdef602=Math.floor(pdef60)
pdef30=apdef*LVLMOD*BuffPDEF*BuffPDEF60*BuffPDEF30+AddPDEF+AddPDEF60+AddPDEF30
pdef302=Math.floor(pdef30)
if (d.gI("HP1").checked==true)
{d.gI("PDEF").innerHTML=pdef2;shieldpdef=Shield*BuffSHIELDPDEF+pdef+AddSHIELDPDEF;combatpdef=pdef}
else if (d.gI("HP6").checked==true)
{d.gI("PDEF").innerHTML=pdef602;shieldpdef=Shield*BuffSHIELDPDEF+pdef60+AddSHIELDPDEF;combatpdef=pdef60}
else if (d.gI("HP3").checked==true)
{d.gI("PDEF").innerHTML=pdef302;shieldpdef=Shield*BuffSHIELDPDEF+pdef30+AddSHIELDPDEF;combatpdef=pdef30}

//Shield P.Def. calculation
shieldpdef2=Math.floor(shieldpdef)
d.gI("SHDPDEF").innerHTML=shieldpdef2

//M.Def. calculation
jmdef=Ring1+Ring2+Earring1+Earring2+Necklace
mdef=jmdef*LVLMOD*MENMOD*BuffMDEF+AddMDEF
mdef2=Math.floor(mdef)
d.gI("MDEF").innerHTML=mdef2
mdef60=jmdef*LVLMOD*MENMOD*BuffMDEF*BuffMDEF60+AddMDEF+AddMDEF60
mdef602=Math.floor(mdef60)
mdef30=jmdef*LVLMOD*MENMOD*BuffMDEF*BuffMDEF60*BuffMDEF30+AddMDEF+AddMDEF60+AddMDEF30
mdef302=Math.floor(mdef30)
if (d.gI("HP1").checked==true)
{d.gI("MDEF").innerHTML=mdef2;shieldmdef=Shield*BuffSHIELDPDEF+mdef+AddSHIELDPDEF;combatmdef=mdef}
else if (d.gI("HP6").checked==true)
{d.gI("MDEF").innerHTML=mdef602;shieldmdef=Shield*BuffSHIELDPDEF+mdef60+AddSHIELDPDEF;combatmdef=mdef60}
else if (d.gI("HP3").checked==true)
{d.gI("MDEF").innerHTML=mdef302;shieldmdef=Shield*BuffSHIELDPDEF+mdef30+AddSHIELDPDEF;combatmdef=mdef30}

//Shield M.Def. calculation
shieldmdef2=Math.floor(shieldmdef)
d.gI("SHDMDEF").innerHTML=shieldmdef2

//Accuracy Calculation
var Accuracy=(Math.sqrt(DEX)*6)+LVL+WpnAcc+RINGOFQUEENACC+RINGOFBAIUMACC+RINGOFCOREACC+BuffACC
var Accuracy2=Math.floor(Accuracy)
var Accuracy60=Accuracy2+BuffACC60
var Accuracy602=Math.floor(Accuracy60)
var Accuracy30=Accuracy2+BuffACC30+BuffACC60
var Accuracy302=Math.floor(Accuracy30)
if (d.gI("HP1").checked==true)
{d.gI("ACCURACY").innerHTML=Accuracy2;combataccuracy=Accuracy}
else if (d.gI("HP6").checked==true)
{d.gI("ACCURACY").innerHTML=Accuracy602;combataccuracy=Accuracy60}
else if (d.gI("HP3").checked==true)
{d.gI("ACCURACY").innerHTML=Accuracy302;combataccuracy=Accuracy30}

//Evasion Calculation
var Evasion=(Math.sqrt(DEX)*6)+LVL+ShieldEvasion+BuffEVA
var Evasion2=Math.floor(Evasion)
var Evasion60=Evasion2+BuffEVA60
var Evasion602=Math.floor(Evasion60)
var Evasion30=Evasion2+BuffEVA30+BuffEVA60
var Evasion302=Math.floor(Evasion30)
if (d.gI("HP1").checked==true)
{d.gI("EVASION").innerHTML=Evasion2;combatevasion=Evasion+combatevasion}
else if (d.gI("HP6").checked==true)
{d.gI("EVASION").innerHTML=Evasion602;combatevasion=Evasion60+combatevasion}
else if (d.gI("HP3").checked==true)
{d.gI("EVASION").innerHTML=Evasion302;combatevasion=Evasion30+combatevasion}

//Critical calculation
var finalcritical=basecritical+AddCRIT+subcritical
if (finalcritical > 500)
	{finalcritical=500}
var finalcritical2=Math.floor(finalcritical)
var finalcritical60=basecritical+AddCRIT+subcritical+AddCRIT60
if (finalcritical60 > 500)
	{finalcritical60=500}
var finalcritical602=Math.floor(finalcritical60)
var finalcritical30=basecritical+AddCRIT+subcritical+AddCRIT60+AddCRIT30
if (finalcritical30 > 500)
	{finalcritical30=500}
var finalcritical302=Math.floor(finalcritical30)
if (d.gI("HP1").checked==true)
{d.gI("CRITICAL").innerHTML=finalcritical2;combatcritical=finalcritical}
else if (d.gI("HP6").checked==true)
{d.gI("CRITICAL").innerHTML=finalcritical602;combatcritical=finalcritical60}
else if (d.gI("HP3").checked==true)
{d.gI("CRITICAL").innerHTML=finalcritical302;combatcritical=finalcritical30}

//Speed calculation
if (movemode==1)
{
var Speed=BaseWalk*DEXMOD*BuffSPEED+AddSPEED
var Speed2=Math.floor(Speed)
var Speed60=BaseWalk*DEXMOD*BuffSPEED*BuffSPEED60+AddSPEED+AddSPEED60
var Speed602=Math.floor(Speed60)
var Speed30=BaseWalk*DEXMOD*BuffSPEED*BuffSPEED60*BuffSPEED30+AddSPEED+AddSPEED60+AddSPEED30
var Speed302=Math.floor(Speed30)
}
else
{
var Speed=BaseRun*DEXMOD*BuffSPEED+AddSPEED
var Speed2=Math.floor(Speed)
var Speed60=BaseRun*DEXMOD*BuffSPEED*BuffSPEED60+AddSPEED+AddSPEED60
var Speed602=Math.floor(Speed60)
var Speed30=BaseRun*DEXMOD*BuffSPEED*BuffSPEED60*BuffSPEED30+AddSPEED+AddSPEED60+AddSPEED30
var Speed302=Math.floor(Speed30)
}
if (d.gI("HP1").checked==true)
	{d.gI("SPEED").innerHTML=Speed2;combatspeed=Speed}
else if (d.gI("HP6").checked==true)
	{d.gI("SPEED").innerHTML=Speed602;combatspeed=Speed60}
else if (d.gI("HP3").checked==true)
	{d.gI("SPEED").innerHTML=Speed302;combatspeed=Speed30}

//Atk. Spd. calculation
var atkspd=WpnSpd*DEXMOD*RINGOFBAIUMASPD*BuffASPD+AddASPD
var atkspd2=Math.floor(atkspd)
var atkspd60=WpnSpd*DEXMOD*RINGOFBAIUMASPD*BuffASPD*BuffASPD60+AddASPD
var atkspd602=Math.floor(atkspd60)
var atkspd30=WpnSpd*DEXMOD*RINGOFBAIUMASPD*BuffASPD*BuffASPD60*BuffASPD30+AddASPD
var atkspd302=Math.floor(atkspd30)
if (d.gI("HP1").checked==true)
	{d.gI("ATKSPD").innerHTML=atkspd2;combatatkspd=atkspd}
else if (d.gI("HP6").checked==true)
	{d.gI("ATKSPD").innerHTML=atkspd602;combatatkspd=atkspd60}
else if (d.gI("HP3").checked==true)
	{d.gI("ATKSPD").innerHTML=atkspd302;combatatkspd=atkspd30}

//Casting Spd. calculation
var castingspd=333*WITMOD*RINGOFBAIUMCAST*BuffCAST+AddCAST
var castingspd2=Math.floor(castingspd)
d.gI("CASTINGSPD").innerHTML=castingspd2

//Weight Limit
var weightlimit2=weightlimit*CONMOD
d.gI("WTL").innerHTML=Math.floor(weightlimit2)
var weight50=weightlimit2*0.5+weightpenalty
d.gI("WEIGHT50").innerHTML=Math.floor(weight50)

//HP Regen, CP Regen, MP Regen
var basehpregen
var basempregen
if (LVL>0 && LVL<11)
	{basehpregen=1.95+(LVL/20);basempregen=0.9;basecpregen=2}
if (LVL>10)
	{basehpregen=1.4+(LVL/10)}
if (LVL>10 && LVL<21)
	{basempregen=1.2;basecpregen=2.5}
if (LVL>20 && LVL<31)
	{basempregen=1.5;basecpregen=3.5}
if (LVL>30 && LVL<41)
	{basempregen=1.8;basecpregen=4.5}
if (LVL>40 && LVL<51)
	{basempregen=2.1;basecpregen=5.5}
if (LVL>50 && LVL<61)
	{basempregen=2.4;basecpregen=6.5}
if (LVL>60 && LVL<71)
	{basempregen=2.7;basecpregen=7.5}
if (LVL>70 && LVL<81)
	{basempregen=3;basecpregen=8.5}
var hpregen=(basehpregen*CONMOD*LVLMOD*BuffHPR*movemode+AddHPR)*BuffHPR2
var hpregen2=Math.floor(hpregen*10)/10
d.gI("HPREGEN").innerHTML=hpregen2
var cpregen=basecpregen*CONMOD*LVLMOD*BuffCPR*movemode+AddCPR
var cpregen2=Math.floor(cpregen*10)/10
d.gI("CPREGEN").innerHTML=cpregen2
var mpregen=(basempregen*MENMOD*LVLMOD*BuffMPR*movemode+AddMPR)*BuffMPR2+AddMPR2
var mpregen2=Math.floor(mpregen*10)/10
d.gI("MPREGEN").innerHTML=mpregen2

if (enemy==11)
	{d.gI("LVO").disabled=true
	var ELVL=LVL
	var ELVLMOD=LVLMOD
	var EDEXMOD=DEXMOD
	var targettype="player"
	var Eranddmg=randdmg
	var EWpnCrt=WpnCrt
	var Ebowdelay=bowdelay
	var Eweapongrade=weapongrade
	var Eweapon_sa=weapon_sa
	var EBuffCRITDMG=BuffCRITDMG*RINGOFBAIUMCRITDMG*RINGOFQUEENCRITDMG
	var EAddCRITDMG=AddCRITDMG
	var Ecombatpatk=combatpatk*2
	if (((Eweapongrade=="S"||Eweapongrade=="A") && Eweapon_sa!="no SA")||Eweapongrade=="H")
		{Ecombatpatk=Ecombatpatk*1.05}
	var Ecombatpdef=combatpdef
	var EAccuracy=Accuracy
	var EEvasion=Evasion
	var Ecombatcritical=combatcritical
	var Ecombatatkspd=combatatkspd
	var EWpnMAS=WpnMAS
	if (EWpnMAS=="Fist"||EWpnMAS=="Duals")
		{var Ecombatpatk=Ecombatpatk/2
		var Ecombatatkspd=Ecombatatkspd*2}
//Enemy Shield stats
	var EShield=Shield
	var EBuffSHIELDPDEF=BuffSHIELDPDEF
	var EAddSHIELDPDEF=AddSHIELDPDEF
	var Eshieldpdef=EShield*EBuffSHIELDPDEF+Ecombatpdef+EAddSHIELDPDEF
	var Eblock360=block360
	var EBuffShieldBlockRate=BuffShieldBlockRate
	var EShieldBlockRate=BaseShieldBlockRate*EBuffShieldBlockRate*EDEXMOD
	if ((position==2||position==3) && block360==false)
		{EShieldBlockRate=0}
	if (WpnMAS=="Bow")
		{EShieldBlockRate=EShieldBlockRate*3}
	if (EShieldBlockRate>=1)
		{EShieldBlockRate=1}
	var Eavgshieldpdef=Eshieldpdef*EShieldBlockRate+Ecombatpdef*(1-EShieldBlockRate)
//Enemy Reflect Damage
	var Ebuffrd=(BuffRD+FRINTEZZARD+VALAKASRD)
	if (WpnType=="Bow")
		{Ebuffrd=0}
	d.gI("EBUFFS").disabled=true}

////////////////////Damage Calculations
//Shield Block Rate
var ShieldBlockRate=BaseShieldBlockRate*DEXMOD*BuffShieldBlockRate
if (EWpnType=="Bow"||EWpnType=="YumiBow")
	{ShieldBlockRate=ShieldBlockRate*3}
if ((position==4||position==5) && block360==false)
	{ShieldBlockRate=0}
if (ShieldBlockRate>=1)
	{ShieldBlockRate=1}
var shieldblockrate=Math.floor(ShieldBlockRate*100)+"%"
d.gI("SHDBLOCKRATE").innerHTML=shieldblockrate
var avgshieldpdef=shieldpdef*ShieldBlockRate+combatpdef*(1-ShieldBlockRate)
var avgshieldpdef2=Math.floor(avgshieldpdef)
d.gI("AVGSHIELDPDEF").innerHTML=avgshieldpdef2

if (d.gI("SS").checked==true)
	{combatpatk=combatpatk*2
	var sscost = + d.gI("SSC1").value}

if ((position==2||position==3) && Eblock360==false)
	{EShieldBlockRate=0}

if (((weapongrade=="S"||weapongrade=="A") && weapon_sa!="no SA" && targettype=="player")||weapongrade=="H" && targettype=="player")
	{combatpatk=combatpatk*1.05}

//Base Damage
if (WpnType=="Fist"||WpnMAS=="Duals")
	{var combatpatk=combatpatk/2
	var combatatkspd=combatatkspd*2}
var basedmg=(combatpatk*70/Ecombatpdef)*BuffDAMAGE
var Ebasedmg=(Ecombatpatk*70/combatpdef)*EBuffDAMAGE

//Normal hit Min/Max Damage
if (position>=1 && position <=3)
	{var mindmg=(basedmg)/randdmg
	var mindmg2=Math.floor(mindmg)
	if (mindmg2==0) {mindmg2=1}
	var maxdmg=(basedmg)*randdmg
	var maxdmg2=Math.floor(maxdmg)
	if (maxdmg2==0) {maxdmg2=1}
	d.gI("DMGRNG").innerHTML=(mindmg2+"-"+maxdmg2)}
else
	{var mindmg2=0;var maxdmg2=0;var mindmg=0;var maxdmg=0
	d.gI("DMGRNG").innerHTML=("-")}


if (position==1||position==4||position==5)
	{var Emindmg=(Ebasedmg)/randdmg
	var Emindmg2=Math.floor(Emindmg)
	if (Emindmg2==0) {Emindmg2=1}
	var Emaxdmg=(Ebasedmg)*randdmg
	var Emaxdmg2=Math.floor(Emaxdmg)
	if (Emaxdmg2==0) {Emaxdmg2=1}
	d.gI("EDMGRNG").innerHTML=(Emindmg2+"-"+Emaxdmg2)}
else
	{var Emindmg2=0;var Emaxdmg2=0;var Emindmg=0;var Emaxdmg=0
	d.gI("EDMGRNG").innerHTML=("-")}

//Average Damage on Shield Blocks
if ((position==1 && EShieldBlockRate!=0)||((position==2||position==3) && Eblock360==true && EShieldBlockRate!=0))
	{var shieldblockdmg=(combatpatk*70/Eshieldpdef)*BuffDAMAGE
	var shieldblockdmg2=Math.floor(shieldblockdmg)
	if (shieldblockdmg2==0) {shieldblockdmg2=1}}
else
	{var shieldblockdmg2=0;var shieldblockdmg=0}
if ((position==1 && ShieldBlockRate!=0)||((position==4||position==5) && block360==true && ShieldBlockRate!=0))
	{var Eshieldblockdmg=(Ecombatpatk*70/shieldpdef)*EBuffDAMAGE
	var Eshieldblockdmg2=Math.floor(Eshieldblockdmg)
	if (Eshieldblockdmg2==0) {Eshieldblockdmg2=1}}
else
	{var Eshieldblockdmg2=0;var Eshieldblockdmg=0}

//Shield Block Min/Max Damage
if ((position==1 && EShieldBlockRate!=0)||((position==2||position==3) && Eblock360==true && EShieldBlockRate!=0))
	{var shieldmindmg=(shieldblockdmg)/randdmg
	var shieldmindmg2=Math.floor(shieldmindmg)
	if (shieldmindmg2==0) {shieldmindmg2=1}
	var shieldmaxdmg=(shieldblockdmg)*randdmg
	var shieldmaxdmg2=Math.floor(shieldmaxdmg)
	if (shieldmaxdmg2==0) {shieldmaxdmg2=1}
	d.gI("SHDDMGRNG").innerHTML=(shieldmindmg2+"-"+shieldmaxdmg2)}
else
	{var shieldmindmg2=0;var shieldmaxdmg2=0;var shieldmindmg=0;var shieldmaxdmg=0
	d.gI("SHDDMGRNG").innerHTML=("-")}


if ((position==1 && ShieldBlockRate!=0)||((position==4||position==5) && block360==true && ShieldBlockRate!=0))
	{var Eshieldmindmg=(Eshieldblockdmg)/randdmg
	var Eshieldmindmg2=Math.floor(Eshieldmindmg)
	if (Eshieldmindmg2==0) {Eshieldmindmg2=1}
	var Eshieldmaxdmg=(Eshieldblockdmg)*randdmg
	var Eshieldmaxdmg2=Math.floor(Eshieldmaxdmg)
	if (Eshieldmaxdmg2==0) {Eshieldmaxdmg2=1}
	d.gI("ESHIELDDMGRNG").innerHTML=(Eshieldmindmg2+"-"+Eshieldmaxdmg2)}
else
	{var Eshieldmindmg2=0;var Eshieldmaxdmg2=0;var Eshieldmindmg=0;var Eshieldmaxdmg=0
	d.gI("ESHIELDDMGRNG").innerHTML=("-")}

//Critical hits
if (position==1)
	{var critchance=(combatcritical/10)*BuffCOMBATCRIT+AddCOMBATCRIT
	if (critchance>=100)
		{critchance=100}
	var critchance2=Math.floor(critchance*10)/10}
else if (position==2)
	{var critchance=(combatcritical/10)*1.2*BuffCOMBATCRIT+AddCOMBATCRIT
	if (critchance>=100)
		{critchance=100}
	var critchance2=Math.floor(critchance*10)/10}
else if (position==3)
	{var critchance=(combatcritical/10)*1.4*BuffCOMBATCRIT+AddCOMBATCRIT
	if (critchance>=100)
		{critchance=100}
	var critchance2=Math.floor(critchance*10)/10}
else
	{var critchance2=0;var critchance=0}
	d.gI("CRITCHANCE").innerHTML=(critchance2+"%")
if (position==1)
	{var Ecritchance=Ecombatcritical/10
	if (Ecritchance>=100)
		{Ecritchance=100}
	var Ecritchance2=Math.floor(Ecritchance*10)/10}
else if (position==4)
	{var Ecritchance=(Ecombatcritical/10)*1.2
	if (Ecritchance>=100)
		{Ecritchance=100}
	var Ecritchance2=Math.floor(Ecritchance*10)/10}
else if (position==5)
	{var Ecritchance=(Ecombatcritical/10)*1.4
	if (Ecritchance>=100)
		{Ecritchance=100}
	var Ecritchance2=Math.floor(Ecritchance*10)/10}
else
	{var Ecritchance2=0;var Ecritchance=0}
	d.gI("ECRITCHANCE").innerHTML=(Ecritchance2+"%")

var critdmg=((basedmg/BuffDAMAGE)*2*BuffCRITDMG*RINGOFBAIUMCRITDMG*RINGOFQUEENCRITDMG+(AddCRITDMG*70/Ecombatpdef))*BuffDAMAGE
var sbcritdmg=((shieldblockdmg/BuffDAMAGE)*2*BuffCRITDMG*RINGOFBAIUMCRITDMG*RINGOFQUEENCRITDMG+(AddCRITDMG*70/Eshieldpdef))*BuffDAMAGE
if (position>=1 && position <=3)
	{var mincritdmg=critdmg/randdmg
	var mincritdmg2=Math.floor(mincritdmg)
	if (mincritdmg2==0) {mincritdmg2=1}
	var maxcritdmg=critdmg*randdmg
	var maxcritdmg2=Math.floor(maxcritdmg)
	if (maxcritdmg2==0) {maxcritdmg2=1}
	d.gI("CRITDMG").innerHTML=(mincritdmg2+"-"+maxcritdmg2)}
else
	{var mincritdmg=0;var mincritdmg2=0;var maxcritdmg=0;var maxcritdmg2=0;
	d.gI("CRITDMG").innerHTML=("-")}
if ((position==1 && EShieldBlockRate!=0)||((position==2||position==3) && Eblock360==true && EShieldBlockRate!=0))
	{var minsbcritdmg=sbcritdmg/randdmg
	var minsbcritdmg2=Math.floor(minsbcritdmg)
	if (minsbcritdmg2==0) {minsbcritdmg2=1}
	var maxsbcritdmg=sbcritdmg*randdmg
	var maxsbcritdmg2=Math.floor(maxsbcritdmg)
	if (maxsbcritdmg2==0) {maxsbcritdmg2=1}
	d.gI("SBCRITDMG").innerHTML=(minsbcritdmg2+"-"+maxsbcritdmg2)}
else
	{var minsbcritdmg=0;var minsbcritdmg2=0;var maxsbcritdmg=0;var maxsbcritdmg2=0
	d.gI("SBCRITDMG").innerHTML=("-")}
if (position==1||position==4||position==5)
	{var Ecritdmg=Ebasedmg*2*EBuffCRITDMG+(EAddCRITDMG*70/combatpdef)
	var Emincritdmg=Ecritdmg/randdmg
	var Emincritdmg2=Math.floor(Emincritdmg)
	if (Emincritdmg2==0) {Emincritdmg2=1}
	var Emaxcritdmg=Ecritdmg*randdmg
	var Emaxcritdmg2=Math.floor(Emaxcritdmg)
	if (Emaxcritdmg2==0) {Emaxcritdmg2=1}
	d.gI("ECRITDMG").innerHTML=(Emincritdmg2+"-"+Emaxcritdmg2)}
else
	{var Ecritdmg=0;var Emincritdmg=0;var Emincritdmg2=0;var Emaxcritdmg=0;var Emaxcritdmg2=0
	d.gI("ECRITDMG").innerHTML=("-")}
if ((position==1 && ShieldBlockRate!=0)||((position==4||position==5) && block360==true && ShieldBlockRate!=0))
	{var Esbcritdmg=Eshieldblockdmg*2*EBuffCRITDMG+(EAddCRITDMG*70/shieldpdef)
	var Eminsbcritdmg=Esbcritdmg/randdmg
	var Eminsbcritdmg2=Math.floor(Eminsbcritdmg)
	if (Eminsbcritdmg2==0) {Eminsbcritdmg2=1}
	var Emaxsbcritdmg=Esbcritdmg*randdmg
	var Emaxsbcritdmg2=Math.floor(Emaxsbcritdmg)
	if (Emaxsbcritdmg2==0) {Emaxsbcritdmg2=1}
	d.gI("ESBCRITDMG").innerHTML=(Eminsbcritdmg2+"-"+Emaxsbcritdmg2)}
else
	{var Esbcritdmg=0;var Eminsbcritdmg=0;var Eminsbcritdmg2=0;var Emaxsbcritdmg=0;var Emaxsbcritdmg2=0
	d.gI("ESBCRITDMG").innerHTML=("-")}

//Hits per second
if (position>=1 && position <=3)
	{var hitspersecond=combatatkspd/500
		if (WpnType=="Bow")
			{hitspersecond=(combatatkspd/1000)*(1500/bowdelay)}
		if (WpnType=="YumiBow")
			{hitspersecond=(combatatkspd/1000)*(1500/(bowdelay*1.4166))}
	var hitspersecond2=Math.floor(hitspersecond*100)/100
	d.gI("HITSPERSECOND").innerHTML=(hitspersecond2)}
else
	{var hitspersecond=0;var hitspersecond2=0;
	d.gI("HITSPERSECOND").innerHTML=("-")}
if ((position==1||position==4||position==5))
	{var Ehitspersecond=Ecombatatkspd/500
		if (EWpnType=="Bow")
			{Ehitspersecond=(Ecombatatkspd/1000)*(1500/Ebowdelay)}
		if (EWpnType=="YumiBow")
			{Ehitspersecond=(Ecombatatkspd/1000)*(1500/(Ebowdelay*1.4166))}
	var Ehitspersecond2=Math.floor(Ehitspersecond*100)/100
	d.gI("EHITSPERSECOND").innerHTML=(Ehitspersecond2)}
else
	{var Ehitspersecond=0;var Ehitspersecond2=0;
	d.gI("EHITSPERSECOND").innerHTML=("-")}

//Chance to hit
var hitratio=combataccuracy-EEvasion
if (hitratio<-24.5)
	{hitratio=0.275}
else if (hitratio<-20 && hitratio>=-24.5)
	{hitratio=0.25+((hitratio+25)*5/100)}
else if (hitratio<-15 && hitratio>=-20)
	{hitratio=0.50+((hitratio+20)*3/100)}
else if (hitratio<-10 && hitratio>=-15)
	{hitratio=0.65+((hitratio+15)*2/100)}
else if (hitratio<-0 && hitratio>=-10)
	{hitratio=0.75+((hitratio+10)*1.5/100)}
else if (hitratio<5 && hitratio>=0)
	{hitratio=0.905+(hitratio*1/100)}
else if (hitratio<10 && hitratio>=5)
	{hitratio=0.955+((hitratio-5)*0.5/100)}
else if (hitratio>10)
	{hitratio=0.98}
var Ehitratio=EAccuracy-combatevasion
if (Ehitratio<-24.5)
	{Ehitratio=0.275}
else if (Ehitratio<-20 && Ehitratio>=-24.5)
	{Ehitratio=0.25+((Ehitratio+25)*5/100)}
else if (Ehitratio<-15 && Ehitratio>=-20)
	{Ehitratio=0.50+((Ehitratio+20)*3/100)}
else if (Ehitratio<-10 && Ehitratio>=-15)
	{Ehitratio=0.65+((Ehitratio+15)*2/100)}
else if (Ehitratio<-0 && Ehitratio>=-10)
	{Ehitratio=0.75+((Ehitratio+10)*1.5/100)}
else if (Ehitratio<5 && Ehitratio>=0)
	{Ehitratio=0.905+(Ehitratio*1/100)}
else if (Ehitratio<10 && Ehitratio>=5)
	{Ehitratio=0.955+((Ehitratio-5)*0.5/100)}
else if (Ehitratio>10)
	{Ehitratio=0.98}
if (position==2)
	{hitratio=hitratio*1.1}
if (position==3)
	{hitratio=hitratio*1.2}
if (position==4)
	{Ehitratio=Ehitratio*1.1}
if (position==5)
	{Ehitratio=Ehitratio*1.2}
if (hitratio>0.98) {hitratio=0.98}
if (Ehitratio>0.98) {Ehitratio=0.98}

var hitratio2=Math.floor(hitratio*100)+"%"
if (position>=1 && position<=3)
	{d.gI("HITRATIO").innerHTML=(hitratio2)}
else
	{d.gI("HITRATIO").innerHTML=("-")}
var Ehitratio2=Math.floor(Ehitratio*100)+"%"
if (position==1||position==4||position==5)
	{d.gI("EHITRATIO").innerHTML=(Ehitratio2)}
else
	{d.gI("EHITRATIO").innerHTML=("-")}

//Damage Per Second
if (position>=1 && position<=3)
	{var avgdmg=(basedmg*(1-EShieldBlockRate)*(1-(critchance/100))+shieldblockdmg*EShieldBlockRate*(1-(critchance/100))+critdmg*(1-EShieldBlockRate)*(critchance/100)+sbcritdmg*EShieldBlockRate*(critchance/100))*hitspersecond*hitratio}
else
	{var avgdmg=0}
if ((position==1||position==4||position==5))
	{var Eavgdmg=(Ebasedmg*(1-ShieldBlockRate)*(1-(Ecritchance/100))+Eshieldblockdmg*ShieldBlockRate*(1-(Ecritchance/100))+Ecritdmg*(1-ShieldBlockRate)*(Ecritchance/100)+Esbcritdmg*ShieldBlockRate*(Ecritchance/100))*Ehitspersecond*Ehitratio}
else
	{var Eavgdmg=0}

//Soulshot Efficiency
var weaponss=WEAPON[weapon][3]
if (WpnType=="Fist"||WpnMAS=="Duals")
	{var sseff=sscost*weaponss*(hitspersecond/2)}
else
	{var sseff=sscost*weaponss*hitspersecond}
d.gI("SSC3").innerHTML=Math.floor(sseff)
if (WpnType=="Fist"||WpnMAS=="Duals")
	{var sseff2=avgdmg/hitratio/sseff;
	var ssmiss=(hitratio-hitratio*hitratio)/2+1;
	sseff2=(sseff2/ssmiss)}
else
	{var sseff2=avgdmg/hitratio/sseff}
if (sseff2>20000)
	{d.gI("SSC5").innerHTML="-"}
else
	{d.gI("SSC5").innerHTML=Math.floor(sseff2*100)}

//Vampiric Rage
if (WpnMAS!="Bow")
	{var vr=avgdmg*(BuffVR+EARRINGOFANTHARASVR+EARRINGOFZAKENVR)
	var vr2=Math.floor(vr*10)/10}
else
	{var vr2=0}
d.gI("VR").innerHTML=vr2

//Reflect Damage
var buffrd=(BuffRD+FRINTEZZARD+VALAKASRD)
if (EWpnType=="Bow"||EWpnType=="YumiBow")
	{buffrd=0}
var buffrd2=Math.floor(100*buffrd)
d.gI("RD").innerHTML=(buffrd2+"%")

var avgdmg2=(Eavgdmg*buffrd)+avgdmg
var avgdmg3=Math.floor(avgdmg2*10)/10
d.gI("AVGDMG").innerHTML=avgdmg3
var Eavgdmg2=(avgdmg*Ebuffrd)+Eavgdmg
var Eavgdmg3=Math.floor(Eavgdmg2*10)/10
d.gI("EAVGDMG").innerHTML=Eavgdmg3

//Resurrection
if (JOB=="BI")
	{var resur=d.gI("RES2").value}
else if (JOB=="EE")
	{var resur=d.gI("RES3").value}
else
	{var resur=d.gI("RES4").value}
var baseres=RESURRECTION[resur]
var rescap=RESURRECTION[resur]+0.2
var resu=baseres*WITMOD
if (resu>rescap) {resu=rescap}
d.gI("RES11").innerHTML=Math.round(resu*100)+"%"

var mresur=d.gI("RES7").value
var basemres=RESURRECTION[mresur]
var mrescap=RESURRECTION[mresur]+0.2
var mresu=basemres*WITMOD
if (mresu>mrescap) {mresu=mrescap}
d.gI("RES12").innerHTML=Math.round(mresu*100)+"%"

//d.gI("TEST").innerHTML=(resu)
//alert("ELVL="+TARGET[enemy][1]+";targettype="+TARGET[enemy][2]+";EDEX="+TARGET[enemy][3]+";EDEXMOD="+TARGET[enemy][4]+";ESTRMOD="+TARGET[enemy][5]+";Eranddmg="+TARGET[enemy][6]+";EWpnType="+TARGET[enemy][7]+";EWpnAcc="+TARGET[enemy][8]+";EWpnCrt="+TARGET[enemy][9]+";EWpnSpd="+TARGET[enemy][10]+";Eweapongrade="+TARGET[enemy][11]+";Eweapon_sa="+TARGET[enemy][12]+";EWpnPATK="+TARGET[enemy][13]+";EMasteryPATK="+TARGET[enemy][14]+";EBuffPATK="+TARGET[enemy][15]+";EAddPATK="+TARGET[enemy][16])
//alert(";Eapdef="+TARGET[enemy][17]+";EBuffPDEF="+TARGET[enemy][18]+";EAddPDEF="+TARGET[enemy][19]+";EBuffACC="+TARGET[enemy][20]+";EBuffEVA="+TARGET[enemy][21]+";EAddCRIT="+TARGET[enemy][22]+";Esubcritical="+TARGET[enemy][23]+";EBuffASPD="+TARGET[enemy][24]+";EAddASPD="+TARGET[enemy][25]+";EBuffCRITDMG="+TARGET[enemy][26]+";EAddCRITDMG="+TARGET[enemy][27]+";EShield="+TARGET[enemy][28]+";EBuffSHIELDPDEF="+TARGET[enemy][29]+";EAddSHIELDPDEF="+TARGET[enemy][30]+";Eblock360="+TARGET[enemy][31]+";EBuffShieldBlockRate="+TARGET[enemy][32]+";Ebuffrd="+TARGET[enemy][33])
}
</script>

<script>
function makeCookie() {
	var cookieInfo = '';
	for (i=0; len = cookie1.length, i<len; i++)
		{cookieInfo += concatCookie(cookie1[i],0);}
	for (i=0; len = cookie2.length, i<len; i++)
		{cookieInfo += concatCookie(cookie2[i],1);}
	return cookieInfo;
}
function saveCookie() {
	var cookieInfo = cookieName + makeCookie();
		var date = new Date();
		date.setTime(date.getTime() + 1000*60*60*24*30);
		document.cookie = cookieName + "_slot" + c_slot + "=" + escape(cookieInfo) + "; expires=" + date.toGMTString();
}
function concatCookie(param_field,param_type) {
	var eref = document.getElementById(param_field);
	if (!eref) {
		alert("Couldn't find element " + param_field + " of type " + param_type + ". Ignoring it.");
		return "";
	}
	switch (param_type) {
		case 0 :
			return "-" + eref.value + "_" + param_field;
		case 1 :
			return "-" + (eref.checked ? 1 : 0) + "_" + param_field;
		case 2 :
			return "-" + eref.selectedIndex + "_" + param_field
	}
}
function changeCookie(param_slot) { c_slot = param_slot; }
function clearCookie(cookiename) {
	if (!cookiename) cookiename = cookieName + "_slot" + c_slot;
	var expires = new Date(0);
	document.cookie = cookiename + "= ; expires=" + expires.toGMTString() + ";";
}
function loadCookie() {
	var loadedCookie = null;
	if (c_slot == "text") {
		loadedCookie = document.getElementById("cookie_text").value;
		if (loadedCookie.match(/[ ]/)) {
			loadedCookie = loadedCookie.replace(/ /g,'');
			document.getElementById("cookie_text").value = loadedCookie;
			alert("Cookie contained spaces, probably because of copy-pasting in a format with linebreaks.\nSpaces have been removed, you should keep the updated cookie text.");
		}
		if (loadedCookie.match(/[^a-zA-Z0-9_-]/)) {
			alert("Cookie contains illegal characters. It cannot be used.");
			return;
		}
	} else {
		if (!document.cookie) {
			alert("No cookies found.");
			return;
		}
		var loadedCookie = locateCookie(cookieName + "_slot" + c_slot);
		if (!loadedCookie) {
			alert("Empty character slot");
			return;
		}
	}
	loadedCookie = unescape(loadedCookie);
	var data = loadedCookie.split("-");
	var tmp = data[0];
	if (tmp != cookieName) {
		alert("Bad cookie format. Either the cookie has been tampered with, or it's not from this calculator.");
		return;
	}
	for (var i = 1, len = data.length, tmp2; i < len; i++) {
		tmp = data[i];
		tmp2 = tmp.split("_");
		tmp3 = tmp2[0]
		tmp4 = tmp2[1]
		if (document.getElementById(tmp4)) {
			setField(tmp4,tmp3);
			switch (tmp4) {
				default : break;
			}
		} else {
			alert("The field " + tmp4 + " does not exist.\nMost likely the cookie is a bit old, and could use a new saving.");
		}
	}
	classskills();
	equipmentgrade();
	buffs();
	passives();
	toggles();
	debuffs();
	calc();
	boxgoaway()
}
function locateCookie(key) {
	var loadedCookie = null;
	var wantedCookie = key + "=";
	var wantedLen = wantedCookie.length;
	var cookieList = document.cookie.split(/; */);
	for (var i = 0, checkCookie, len = cookieList.length ; i < len; i++) {
		checkCookie = cookieList[i];
		if (checkCookie.substring(0,wantedLen) == wantedCookie) {
			loadedCookie = checkCookie.substring(wantedLen);
		}
	}
	return loadedCookie;
}
function setField(param_field,param_value) {
	var pfield = document.getElementById(param_field);
	if (pfield.nodeName == "INPUT" && pfield.type == "checkbox") {
		pfield.checked = (param_value == "0") ? false : true;
	} else {
		pfield.value = param_value;
		if (!pfield.value && pfield.value !== 0) {
			pfield.value = 0;
			alert("The item " + param_value + " in field " + param_field + " does not exist.\nMost likely the cookie is a bit old, and could use a new saving.\nIf you tried a text cookie, it could be corrupted or tampered with.");
		}
	}
}
function verifyCookies(age) {
	var cookies = document.cookie;
	var ageCookie = locateCookie("generation");
	if (!cookies) {
		switch(el_counter) {
			case 0 : alert("No cookies found, attempting to set generation cookie.\nThis message will appear every visit if you do not have FULL cookies ENABLED."); break;
			case 1 : alert("Setting generation cookie failed, trying again."); break;
			default : alert("Looks like your browser isn't accepting cookies.\nIt could also be that you have too many old cookies stored.\nIf you think this is the case, remove the old cookie, or contact me."); return; break;
		}
		setGeneration(age.slice(2));
		el_counter++;
		verifyCookies(age);
	} else if (ageCookie == age.slice(2)) {
		setGeneration(age);
		alert("Generation cookie set successfully.\nIf you get this message more than once,\nyou probably only have session cookies enabled.\nThe calc needs full cookies.");
	} else if (ageCookie != age) {
		showcookie(cookies);
		cookies = cookies.split(";");
		for (var i = 0; i < cookies.length; i++) {
			clearCookie(cookies[i].split("=")[0]);
		}
		setGeneration(age);
		alert("Old cookies detected and cleared.\nIf you believe this to be an error, a copy can be found below the cookie control panel.");
	}
}
function setGeneration(age) {
		var date = new Date();
		date.setTime(date.getTime() + 1000*60*60*24*365);
		document.cookie = "generation=" + age + "; expires=" + date.toGMTString();
}
</script>

<script>
function passives(lvlreset) {
//Passive Auto-select
var LVL = + d.gI("LV").value
var AAUTO=new Array(0,"AGM1","WMF")
var AAGILEMOVEMENT1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
var AWMF=new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3)
var AWMM1=new Array(0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2)
var AWMM2=new Array(0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,5,5,5,5,5,7,7,7,7,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9)
var AWMM3=new Array(0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,5,5,5,5,5,7,7,7,7,7,9,9,9,9,9,12,12,12,12,15,15,15,15,18,18,18,18,21,21,21,21,24,24,26,26,28,28,30,30,32,32,34,34,36,36,38,38,40,40,42,42,42,42,42,42,42)
var AWSBM1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8)
var AWSBM2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4,6,6,6,6,8,8,8,8,11,11,11,14,14,14,17,17,17,20,20,20,23,23,23,26,26,26,29,29,31,31,33,33,35,35,37,37,39,39,41,41,43,43,45,45,45,45,45,45,45)
var ABOWM1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,6,6,6,6,9,9,9,9,12,12,12,12,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15)
var ABOWM2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,6,6,6,6,9,9,9,9,12,12,12,12,15,15,15,15,18,18,18,21,21,21,24,24,24,27,27,27,30,30,30,33,33,33,36,36,38,38,40,40,42,42,44,44,46,46,48,48,50,50,52,52,52,52,52,52,52)
var ADUALM=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,6,6,6,9,9,9,12,12,12,15,15,15,18,18,18,21,21,23,23,25,25,27,27,29,29,31,31,33,33,35,35,37,37,37,37,37,37,37)
var ATHM1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5)
var ATHM2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,20,20,20,20,20)
var AAMF=new Array(0,0,0,0,0,1,1,1,1,1,3,3,3,3,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5)
var AAMM=new Array(0,0,0,0,0,0,0,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3)
var AHMW1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,4,4,4,4,7,7,7,7,10,10,10,10,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13)
var AHMW2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,4,4,4,4,7,7,7,7,10,10,10,10,13,13,13,13,16,16,16,19,19,19,22,22,22,25,25,25,28,28,28,31,31,31,34,34,36,36,38,38,40,40,42,42,44,44,46,46,48,48,50,50,50,50,50,50,50)
var AHMO1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2)
var AHMO2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,4,4,4,4,4,6,6,6,6,6,8,8,8,8,8,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10)
var AHMO3=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,4,4,4,4,4,6,6,6,6,6,8,8,8,8,8,10,10,10,10,10,13,13,13,13,16,16,16,16,19,19,19,19,22,22,22,22,25,25,27,27,29,29,31,31,33,33,35,35,37,37,39,39,41,41,43,43,43,43,43,43,43)
var AHMP=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,6,6,6,6,9,9,9,9,12,12,12,12,15,15,17,17,19,19,21,21,23,23,25,25,27,27,29,29,31,31,33,33,33,33,33,33,33)
var ALMR1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,4,4,4,4,6,6,6,6,8,8,8,8,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10)
var ALMR2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,4,4,4,4,6,6,6,6,8,8,8,8,10,10,10,10,13,13,13,16,16,16,19,19,19,22,22,22,25,25,25,28,28,28,31,31,33,33,35,35,37,37,39,39,41,41,43,43,45,45,47,47,47,47,47,47,47)
var ALMO1=new Array(0,0,0,0,0,0,0,2,2,2,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4)
var ALMO2=new Array(0,0,0,0,0,0,0,2,2,2,2,2,2,2,4,4,4,4,4,4,6,6,6,6,6,8,8,8,8,8,10,10,10,10,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12)
var ALMO3=new Array(0,0,0,0,0,0,0,2,2,2,2,2,2,2,4,4,4,4,4,4,6,6,6,6,6,8,8,8,8,8,10,10,10,10,10,12,12,12,12,12,15,15,15,15,18,18,18,18,21,21,21,21,24,24,24,24,27,27,29,29,31,31,33,33,35,35,37,37,39,39,41,41,43,43,45,45,45,45,45,45,45)
var ALMH1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,4,4,4,4,4,6,6,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8)
var ALMH2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,4,4,4,4,4,6,6,6,6,6,8,8,8,8,8,11,11,11,11,14,14,14,14,17,17,17,17,20,20,20,20,23,23,25,25,27,27,29,29,31,31,33,33,35,35,37,37,39,39,41,41,41,41,41,41,41)
var AMR1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,5,5,5,5,8,8,8,8,11,11,11,11,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14)
var AMR2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,5,5,5,5,8,8,8,8,11,11,11,11,14,14,14,14,17,17,17,20,20,20,23,23,23,26,26,26,29,29,29,32,32,32,35,35,37,37,39,39,41,41,43,43,45,45,47,47,49,49,51,51,51,51,51,51,51)
var ABOOSTHP1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3)
var ABOOSTHP2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7)
var ABOOSTHP3=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10,10,10)
var AQUICKSTEP1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
var AQUICKSTEP2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2)
var AFINALFORTRESS=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,11,11,11,11,11)
var AFINALFRENZY=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,14,14,14,14,14)
var ABOOSTMP1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2)
var ABOOSTMP2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8)
var ABOOSTEVASION1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
var ABOOSTEVASION2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3)
var AAGILEMOVEMENT1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
var AAGILEMOVEMENT2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2)
var ACRITICALCHANCE1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
var ACRITICALCHANCE2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3)
var AFASTCAST1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
var AFASTCAST2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3)
var ABOOSTASPD1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
var ABOOSTASPD2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3)
var AQUIVEROFHOLDING=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3)
var AWEIGHTLIMIT1=new Array(0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
var AWEIGHTLIMIT2=new Array(0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2)
var AWEIGHTLIMIT3=new Array(0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3)
var ASHIELDMASTERY1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2)
var ASHIELDMASTERY2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4)
var ACLEARMIND=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6)
var AESPRIT1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
var AESPRIT2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,8,8)
var AFASTHPRECOVERY1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2)
var AFASTHPRECOVERY2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,8,8)
var AFASTHPRECOVERY3=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
var AFASTHPRECOVERY4=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6)
var AFASTMANARECOVERY1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2)
var AFASTMANARECOVERY2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7)
var AFOCUSMIND1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
var AFOCUSMIND2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6)
var AVITALFORCE1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2)
var AVITALFORCE2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8)
var ACRITICALPOWER1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2)
var ACRITICALPOWER2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6)
var AAEGIS=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
var AACROBATICMOVE1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
var AACROBATICMOVE2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3)
var AARCHERY=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1)
	if (lvlreset && d.gI("ATPC").checked==true) {
		var AGILE1=AAGILEMOVEMENT1[LVL]-1
		if (AGILE1<0)
			{d.gI("AGM1C").checked=false}
		else if (AGILE1>=0 && d.gI("AGM1C").style.display=='block')
			{d.gI("AGM1C").checked=true
			d.gI("AGM1").selectedIndex=(AGILE1)}
		var WMF=AWMF[LVL]-1
		if (WMF<0)
			{d.gI("WMFC").checked=false}
		else if (WMF>=0 && d.gI("WMFC").style.display=='block')
			{d.gI("WMFC").checked=true
			d.gI("WMF").selectedIndex=(WMF)}
		var WMM1=AWMM1[LVL]-1
		if (WMM1<0)
			{d.gI("WMM1C").checked=false}
		else if (WMM1>=0 && d.gI("WMM1C").style.display=='block')
			{d.gI("WMM1C").checked=true
			d.gI("WMM1").selectedIndex=(WMM1)}
		var WMM2=AWMM2[LVL]-1
		if (WMM2<0)
			{d.gI("WMM2C").checked=false}
		else if (WMM2>=0 && d.gI("WMM2C").style.display=='block')
			{d.gI("WMM2C").checked=true
			d.gI("WMM2").selectedIndex=(WMM2)}
		var WMM3=AWMM3[LVL]-1
		if (WMM3<0)
			{d.gI("WMM3C").checked=false}
		else if (WMM3>=0 && d.gI("WMM3C").style.display=='block')
			{d.gI("WMM3C").checked=true
			d.gI("WMM3").selectedIndex=(WMM3)}
		var WSBM1=AWSBM1[LVL]-1
		if (WSBM1<0)
			{d.gI("WSBM1C").checked=false}
		else if (WSBM1>=0 && d.gI("WSBM1C").style.display=='block')
			{d.gI("WSBM1C").checked=true
			d.gI("WSBM1").selectedIndex=(WSBM1)}
		var WSBM2=AWSBM2[LVL]-1
		if (WSBM2<0)
			{d.gI("WSBM2C").checked=false}
		else if (WSBM2>=0 && d.gI("WSBM2C").style.display=='block')
			{d.gI("WSBM2C").checked=true
			d.gI("WSBM2").selectedIndex=(WSBM2)}
		var BLUNTM1=AWSBM1[LVL]-1
		if (BLUNTM1<0)
			{d.gI("BLM1C").checked=false}
		else if (BLUNTM1>=0 && d.gI("BLM1C").style.display=='block')
			{d.gI("BLM1C").checked=true
			d.gI("BLM1").selectedIndex=(BLUNTM1)}
		var BLUNTM2=AWSBM2[LVL]-1
		if (BLUNTM2<0)
			{d.gI("BLM2C").checked=false}
		else if (BLUNTM2>=0 && d.gI("BLM2C").style.display=='block')
			{d.gI("BLM2C").checked=true
			d.gI("BLM2").selectedIndex=(BLUNTM2)}
		var FISTM1=AWSBM1[LVL]-1
		if (FISTM1<0)
			{d.gI("FIM1C").checked=false}
		else if (FISTM1>=0 && d.gI("FIM1C").style.display=='block')
			{d.gI("FIM1C").checked=true
			d.gI("FIM1").selectedIndex=(FISTM1)}
		var FISTM2=AWSBM2[LVL]-1
		if (FISTM2<0)
			{d.gI("FIM2C").checked=false}
		else if (FISTM2>=0 && d.gI("FIM2C").style.display=='block')
			{d.gI("FIM2C").checked=true
			d.gI("FIM2").selectedIndex=(FISTM2)}
		var KSBM1=AWSBM1[LVL]-1
		if (KSBM1<0)
			{d.gI("KSBM1C").checked=false}
		else if (KSBM1>=0 && d.gI("KSBM1C").style.display=='block')
			{d.gI("KSBM1C").checked=true
			d.gI("KSBM1").selectedIndex=(KSBM1)}
		var KSBM2=AWSBM2[LVL]-1
		if (KSBM2<0)
			{d.gI("KSBM2C").checked=false}
		else if (KSBM2>=0 && d.gI("KSBM2C").style.display=='block')
			{d.gI("KSBM2C").checked=true
			d.gI("KSBM2").selectedIndex=(KSBM2)}
		var DAGGERM1=AWSBM1[LVL]-1
		if (DAGGERM1<0)
			{d.gI("DGM1C").checked=false}
		else if (DAGGERM1>=0 && d.gI("DGM1C").style.display=='block')
			{d.gI("DGM1C").checked=true
			d.gI("DGM1").selectedIndex=(DAGGERM1)}
		var DAGGERM2=AWSBM2[LVL]-1
		if (DAGGERM2<0)
			{d.gI("DGM2C").checked=false}
		else if (DAGGERM2>=0 && d.gI("DGM2C").style.display=='block')
			{d.gI("DGM2C").checked=true
			d.gI("DGM2").selectedIndex=(DAGGERM2)}
		var POLEM1=AWSBM1[LVL]-1
		if (POLEM1<0)
			{d.gI("PLM1C").checked=false}
		else if (POLEM1>=0 && d.gI("PLM1C").style.display=='block')
			{d.gI("PLM1C").checked=true
			d.gI("PLM1").selectedIndex=(POLEM1)}
		var POLEM2=AWSBM2[LVL]-1
		if (POLEM2<0)
			{d.gI("PLM2C").checked=false}
		else if (POLEM2>=0 && d.gI("PLM2C").style.display=='block')
			{d.gI("PLM2C").checked=true
			d.gI("PLM2").selectedIndex=(POLEM2)}
		var BOWM1=ABOWM1[LVL]-1
		if (BOWM1<0)
			{d.gI("BOWM1C").checked=false}
		else if (BOWM1>=0 && d.gI("BOWM1C").style.display=='block')
			{d.gI("BOWM1C").checked=true
			d.gI("BOWM1").selectedIndex=(BOWM1)}
		var BOWM2=ABOWM2[LVL]-1
		if (BOWM2<0)
			{d.gI("BOWM2C").checked=false}
		else if (BOWM2>=0 && d.gI("BOWM2C").style.display=='block')
			{d.gI("BOWM2C").checked=true
			d.gI("BOWM2").selectedIndex=(BOWM2)}
		var DUALM=ADUALM[LVL]-1
		if (DUALM<0)
			{d.gI("DUALMC").checked=false}
		else if (DUALM>=0 && d.gI("DUALMC").style.display=='block')
			{d.gI("DUALMC").checked=true
			d.gI("DUALM").selectedIndex=(DUALM)}
		var THM1=ATHM1[LVL]-1
		if (THM1<0)
			{d.gI("THM1C").checked=false}
		else if (THM1>=0 && d.gI("THM1C").style.display=='block')
			{d.gI("THM1C").checked=true
			d.gI("THM1").selectedIndex=(THM1)}
		var THM2=ATHM2[LVL]-1
		if (THM2<0)
			{d.gI("THM2C").checked=false}
		else if (THM2>=0 && d.gI("THM2C").style.display=='block')
			{d.gI("THM2C").checked=true
			d.gI("THM2").selectedIndex=(THM2)}
		var AMF=AAMF[LVL]-1
		if (AMF<0)
			{d.gI("AMFC").checked=false}
		else if (AMF>=0 && d.gI("AMFC").style.display=='block')
			{d.gI("AMFC").checked=true
			d.gI("AMF").selectedIndex=(AMF)}
		var AMM=AAMM[LVL]-1
		if (AMM<0)
			{d.gI("AMMC").checked=false}
		else if (AMM>=0 && d.gI("AMMC").style.display=='block')
			{d.gI("AMMC").checked=true
			d.gI("AMM").selectedIndex=(AMM)}
		var HMK1=ABOWM1[LVL]-1
		if (HMK1<0)
			{d.gI("HMK1C").checked=false}
		else if (HMK1>=0 && d.gI("HMK1C").style.display=='block')
			{d.gI("HMK1C").checked=true
			d.gI("HMK1").selectedIndex=(HMK1)}
		var HMK2=ABOWM2[LVL]-1
		if (HMK2<0)
			{d.gI("HMK2C").checked=false}
		else if (HMK2>=0 && d.gI("HMK2C").style.display=='block')
			{d.gI("HMK2C").checked=true
			d.gI("HMK2").selectedIndex=(HMK2)}
		var HMW1=AHMW1[LVL]-1
		if (HMW1<0)
			{d.gI("HMW1C").checked=false}
		else if (HMW1>=0 && d.gI("HMW1C").style.display=='block')
			{d.gI("HMW1C").checked=true
			d.gI("HMW1").selectedIndex=(HMW1)}
		var HMW2=AHMW2[LVL]-1
		if (HMW2<0)
			{d.gI("HMW2C").checked=false}
		else if (HMW2>=0 && d.gI("HMW2C").style.display=='block')
			{d.gI("HMW2C").checked=true
			d.gI("HMW2").selectedIndex=(HMW2)}
		var HMO1=AHMO1[LVL]-1
		if (HMO1<0)
			{d.gI("HMO1C").checked=false}
		else if (HMO1>=0 && d.gI("HMO1C").style.display=='block')
			{d.gI("HMO1C").checked=true
			d.gI("HMO1").selectedIndex=(HMO1)}
		var HMO2=AHMO2[LVL]-1
		if (HMO2<0)
			{d.gI("HMO2C").checked=false}
		else if (HMO2>=0 && d.gI("HMO2C").style.display=='block')
			{d.gI("HMO2C").checked=true
			d.gI("HMO2").selectedIndex=(HMO2)}
		var HMO3=AHMO3[LVL]-1
		if (HMO3<0)
			{d.gI("HMO3C").checked=false}
		else if (HMO3>=0 && d.gI("HMO3C").style.display=='block')
			{d.gI("HMO3C").checked=true
			d.gI("HMO3").selectedIndex=(HMO3)}
		var HMP=AHMP[LVL]-1
		if (HMP<0)
			{d.gI("HMPC").checked=false}
		else if (HMP>=0 && d.gI("HMPC").style.display=='block')
			{d.gI("HMPC").checked=true
			d.gI("HMP").selectedIndex=(HMP)}
		var LMW1=AHMW1[LVL]-1
		if (LMW1<0)
			{d.gI("LMW1C").checked=false}
		else if (LMW1>=0 && d.gI("LMW1C").style.display=='block')
			{d.gI("LMW1C").checked=true
			d.gI("LMW1").selectedIndex=(LMW1)}
		var LMW2=AHMW2[LVL]-1
		if (LMW2<0)
			{d.gI("LMW2C").checked=false}
		else if (LMW2>=0 && d.gI("LMW2C").style.display=='block')
			{d.gI("LMW2C").checked=true
			d.gI("LMW2").selectedIndex=(LMW2)}
		var LMR1=ALMR1[LVL]-1
		if (LMR1<0)
			{d.gI("LMR1C").checked=false}
		else if (LMR1>=0 && d.gI("LMR1C").style.display=='block')
			{d.gI("LMR1C").checked=true
			d.gI("LMR1").selectedIndex=(LMR1)}
		var LMR2=ALMR2[LVL]-1
		if (LMR2<0)
			{d.gI("LMR2C").checked=false}
		else if (LMR2>=0 && d.gI("LMR2C").style.display=='block')
			{d.gI("LMR2C").checked=true
			d.gI("LMR2").selectedIndex=(LMR2)}
		var LMO1=ALMO1[LVL]-1
		if (LMO1<0)
			{d.gI("LMO1C").checked=false}
		else if (LMO1>=0 && d.gI("LMO1C").style.display=='block')
			{d.gI("LMO1C").checked=true
			d.gI("LMO1").selectedIndex=(LMO1)}
		var LMO2=ALMO2[LVL]-1
		if (LMO2<0)
			{d.gI("LMO2C").checked=false}
		else if (LMO2>=0 && d.gI("LMO2C").style.display=='block')
			{d.gI("LMO2C").checked=true
			d.gI("LMO2").selectedIndex=(LMO2)}
		var LMO3=ALMO3[LVL]-1
		if (LMO3<0)
			{d.gI("LMO3C").checked=false}
		else if (LMO3>=0 && d.gI("LMO3C").style.display=='block')
			{d.gI("LMO3C").checked=true
			d.gI("LMO3").selectedIndex=(LMO3)}
		var LMH1=ALMH1[LVL]-1
		if (LMH1<0)
			{d.gI("LMH1C").checked=false}
		else if (LMH1>=0 && d.gI("LMH1C").style.display=='block')
			{d.gI("LMH1C").checked=true
			d.gI("LMH1").selectedIndex=(LMH1)}
		var LMH2=ALMH2[LVL]-1
		if (LMH2<0)
			{d.gI("LMH2C").checked=false}
		else if (LMH2>=0 && d.gI("LMH2C").style.display=='block')
			{d.gI("LMH2C").checked=true
			d.gI("LMH2").selectedIndex=(LMH2)}
		var LMS=AHMP[LVL]-1
		if (LMS<0)
			{d.gI("LMSC").checked=false}
		else if (LMS>=0 && d.gI("LMSC").style.display=='block')
			{d.gI("LMSC").checked=true
			d.gI("LMS").selectedIndex=(LMS)}
		var RMN1=ALMH1[LVL]-1
		if (RMN1<0)
			{d.gI("RMN1C").checked=false}
		else if (RMN1>=0 && d.gI("RMN1C").style.display=='block')
			{d.gI("RMN1C").checked=true
			d.gI("RMN1").selectedIndex=(RMN1)}
		var RMN2=ALMH2[LVL]-1
		if (RMN2<0)
			{d.gI("RMN2C").checked=false}
		else if (RMN2>=0 && d.gI("RMN2C").style.display=='block')
			{d.gI("RMN2C").checked=true
			d.gI("RMN2").selectedIndex=(RMN2)}
		var RMH1=ALMH1[LVL]-1
		if (RMH1<0)
			{d.gI("RMH1C").checked=false}
		else if (RMH1>=0 && d.gI("RMH1C").style.display=='block')
			{d.gI("RMH1C").checked=true
			d.gI("RMH1").selectedIndex=(RMH1)}
		var RMH2=ALMH2[LVL]-1
		if (RMH2<0)
			{d.gI("RMH2C").checked=false}
		else if (RMH2>=0 && d.gI("RMH2C").style.display=='block')
			{d.gI("RMH2C").checked=true
			d.gI("RMH2").selectedIndex=(RMH2)}
		var RMO1=ALMO1[LVL]-1
		if (RMO1<0)
			{d.gI("RMO1C").checked=false}
		else if (RMO1>=0 && d.gI("RMO1C").style.display=='block')
			{d.gI("RMO1C").checked=true
			d.gI("RMO1").selectedIndex=(RMO1)}
		var RMO2=ALMO2[LVL]-1
		if (RMO2<0)
			{d.gI("RMO2C").checked=false}
		else if (RMO2>=0 && d.gI("RMO2C").style.display=='block')
			{d.gI("RMO2C").checked=true
			d.gI("RMO2").selectedIndex=(RMO2)}
		var RMO3=ALMO3[LVL]-1
		if (RMO3<0)
			{d.gI("RMO3C").checked=false}
		else if (RMO3>=0 && d.gI("RMO3C").style.display=='block')
			{d.gI("RMO3C").checked=true
			d.gI("RMO3").selectedIndex=(RMO3)}
		var AM1=ALMO1[LVL]-1
		if (AM1<0)
			{d.gI("AM1C").checked=false}
		else if (AM1>=0 && d.gI("AM1C").style.display=='block')
			{d.gI("AM1C").checked=true
			d.gI("AM1").selectedIndex=(AM1)}
		var AM2=ALMO2[LVL]-1
		if (AM2<0)
			{d.gI("AM2C").checked=false}
		else if (AM2>=0 && d.gI("AM2C").style.display=='block')
			{d.gI("AM2C").checked=true
			d.gI("AM2").selectedIndex=(AM2)}
		var AM3=ALMO3[LVL]-1
		if (AM3<0)
			{d.gI("AM3C").checked=false}
		else if (AM3>=0 && d.gI("AM3C").style.display=='block')
			{d.gI("AM3C").checked=true
			d.gI("AM3").selectedIndex=(AM3)}
		var MR1=AMR1[LVL]-1
		if (MR1<0)
			{d.gI("MR1C").checked=false}
		else if (MR1>=0 && d.gI("MR1C").style.display=='block')
			{d.gI("MR1C").checked=true
			d.gI("MR1").selectedIndex=(MR1)}
		var MR2=AMR2[LVL]-1
		if (MR2<0)
			{d.gI("MR2C").checked=false}
		else if (MR2>=0 && d.gI("MR2C").style.display=='block')
			{d.gI("MR2C").checked=true
			d.gI("MR2").selectedIndex=(MR2)}
		var BOOSTHP1=ABOOSTHP1[LVL]-1
		if (BOOSTHP1<0)
			{d.gI("BHP1C").checked=false}
		else if (BOOSTHP1>=0 && d.gI("BHP1C").style.display=='block')
			{d.gI("BHP1C").checked=true
			d.gI("BHP1").selectedIndex=(BOOSTHP1)}
		var BOOSTHP2=ABOOSTHP2[LVL]-1
		if (BOOSTHP2<0)
			{d.gI("BHP2C").checked=false}
		else if (BOOSTHP2>=0 && d.gI("BHP2C").style.display=='block')
			{d.gI("BHP2C").checked=true
			d.gI("BHP2").selectedIndex=(BOOSTHP2)}
		var BOOSTHP3=ABOOSTHP3[LVL]-1
		if (BOOSTHP3<0)
			{d.gI("BHP3C").checked=false}
		else if (BOOSTHP3>=0 && d.gI("BHP3C").style.display=='block')
			{d.gI("BHP3C").checked=true
			d.gI("BHP3").selectedIndex=(BOOSTHP3)}
		var QUICKSTEP1=AQUICKSTEP1[LVL]-1
		if (QUICKSTEP1<0)
			{d.gI("QS1C").checked=false}
		else if (QUICKSTEP1>=0 && d.gI("QS1C").style.display=='block')
			{d.gI("QS1C").checked=true
			d.gI("QS1").selectedIndex=(QUICKSTEP1)}
		var QUICKSTEP2=AQUICKSTEP2[LVL]-1
		if (QUICKSTEP2<0)
			{d.gI("QS2C").checked=false}
		else if (QUICKSTEP2>=0 && d.gI("QS2C").style.display=='block')
			{d.gI("QS2C").checked=true
			d.gI("QS2").selectedIndex=(QUICKSTEP2)}
		var FINALFORTRESS=AFINALFORTRESS[LVL]-1
		if (FINALFORTRESS<0)
			{d.gI("FFOC").checked=false}
		else if (FINALFORTRESS>=0 && d.gI("FFOC").style.display=='block')
			{d.gI("FFOC").checked=true
			d.gI("FFO").selectedIndex=(FINALFORTRESS)}
		var FINALFRENZY=AFINALFRENZY[LVL]-1
		if (FINALFRENZY<0)
			{d.gI("FFRC").checked=false}
		else if (FINALFRENZY>=0 && d.gI("FFRC").style.display=='block')
			{d.gI("FFRC").checked=true
			d.gI("FFR").selectedIndex=(FINALFRENZY)}
		var BOOSTMP1=ABOOSTMP1[LVL]-1
		if (BOOSTMP1<0)
			{d.gI("BMP1C").checked=false}
		else if (BOOSTMP1>=0 && d.gI("BMP1C").style.display=='block')
			{d.gI("BMP1C").checked=true
			d.gI("BMP1").selectedIndex=(BOOSTMP1)}
		var BOOSTMP2=ABOOSTMP2[LVL]-1
		if (BOOSTMP2<0)
			{d.gI("BMP2C").checked=false}
		else if (BOOSTMP2>=0 && d.gI("BMP2C").style.display=='block')
			{d.gI("BMP2C").checked=true
			d.gI("BMP2").selectedIndex=(BOOSTMP2)}
		var BOOSTEVASION1=ABOOSTEVASION1[LVL]-1
		if (BOOSTEVASION1<0)
			{d.gI("BEV1C").checked=false}
		else if (BOOSTEVASION1>=0 && d.gI("BEV1C").style.display=='block')
			{d.gI("BEV1C").checked=true
			d.gI("BEV1").selectedIndex=(BOOSTEVASION1)}
		var BOOSTEVASION2=ABOOSTEVASION2[LVL]-1
		if (BOOSTEVASION2<0)
			{d.gI("BEV2C").checked=false}
		else if (BOOSTEVASION2>=0 && d.gI("BEV2C").style.display=='block')
			{d.gI("BEV2C").checked=true
			d.gI("BEV2").selectedIndex=(BOOSTEVASION2)}
		var AGILEMOVEMENT1=AAGILEMOVEMENT1[LVL]-1
		if (AGILEMOVEMENT1<0)
			{d.gI("AGM1C").checked=false}
		else if (AGILEMOVEMENT1>=0 && d.gI("AGM1C").style.display=='block')
			{d.gI("AGM1C").checked=true
			d.gI("AGM1").selectedIndex=(AGILEMOVEMENT1)}
		var AGILEMOVEMENT2=AAGILEMOVEMENT2[LVL]-1
		if (AGILEMOVEMENT2<0)
			{d.gI("AGM2C").checked=false}
		else if (AGILEMOVEMENT2>=0 && d.gI("AGM2C").style.display=='block')
			{d.gI("AGM2C").checked=true
			d.gI("AGM2").selectedIndex=(AGILEMOVEMENT2)}
		var CRITICALCHANCE1=ACRITICALCHANCE1[LVL]-1
		if (CRITICALCHANCE1<0)
			{d.gI("CRC1C").checked=false}
		else if (CRITICALCHANCE1>=0 && d.gI("CRC1C").style.display=='block')
			{d.gI("CRC1C").checked=true
			d.gI("CRC1").selectedIndex=(CRITICALCHANCE1)}
		var CRITICALCHANCE2=ACRITICALCHANCE2[LVL]-1
		if (CRITICALCHANCE2<0)
			{d.gI("CRC2C").checked=false}
		else if (CRITICALCHANCE2>=0 && d.gI("CRC2C").style.display=='block')
			{d.gI("CRC2C").checked=true
			d.gI("CRC2").selectedIndex=(CRITICALCHANCE2)}
		var FASTCAST1=AFASTCAST1[LVL]-1
		if (FASTCAST1<0)
			{d.gI("FSC1C").checked=false}
		else if (FASTCAST1>=0 && d.gI("FSC1C").style.display=='block')
			{d.gI("FSC1C").checked=true
			d.gI("FSC1").selectedIndex=(FASTCAST1)}
		var FASTCAST2=AFASTCAST2[LVL]-1
		if (FASTCAST2<0)
			{d.gI("FSC2C").checked=false}
		else if (FASTCAST2>=0 && d.gI("FSC2C").style.display=='block')
			{d.gI("FSC2C").checked=true
			d.gI("FSC2").selectedIndex=(FASTCAST2)}
		var BOOSTASPD1=ABOOSTASPD1[LVL]-1
		if (BOOSTASPD1<0)
			{d.gI("BOA1C").checked=false}
		else if (BOOSTASPD1>=0 && d.gI("BOA1C").style.display=='block')
			{d.gI("BOA1C").checked=true
			d.gI("BOA1").selectedIndex=(BOOSTASPD1)}
		var BOOSTASPD2=ABOOSTASPD2[LVL]-1
		if (BOOSTASPD2<0)
			{d.gI("BOA2C").checked=false}
		else if (BOOSTASPD2>=0 && d.gI("BOA2C").style.display=='block')
			{d.gI("BOA2C").checked=true
			d.gI("BOA2").selectedIndex=(BOOSTASPD2)}
		var QUIVEROFHOLDING=AQUIVEROFHOLDING[LVL]-1
		if (QUIVEROFHOLDING<0)
			{d.gI("QOHC").checked=false}
		else if (QUIVEROFHOLDING>=0 && d.gI("QOHC").style.display=='block')
			{d.gI("QOHC").checked=true
			d.gI("QOH").selectedIndex=(QUIVEROFHOLDING)}
		var WEIGHTLIMIT1=AWEIGHTLIMIT1[LVL]-1
		if (WEIGHTLIMIT1<0)
			{d.gI("WTL1C").checked=false}
		else if (WEIGHTLIMIT1>=0 && d.gI("WTL1C").style.display=='block')
			{d.gI("WTL1C").checked=true
			d.gI("WTL1").selectedIndex=(WEIGHTLIMIT1)}
		var WEIGHTLIMIT2=AWEIGHTLIMIT2[LVL]-1
		if (WEIGHTLIMIT2<0)
			{d.gI("WTL2C").checked=false}
		else if (WEIGHTLIMIT2>=0 && d.gI("WTL2C").style.display=='block')
			{d.gI("WTL2C").checked=true
			d.gI("WTL2").selectedIndex=(WEIGHTLIMIT2)}
		var WEIGHTLIMIT3=AWEIGHTLIMIT3[LVL]-1
		if (WEIGHTLIMIT3<0)
			{d.gI("WTL3C").checked=false}
		else if (WEIGHTLIMIT3>=0 && d.gI("WTL3C").style.display=='block')
			{d.gI("WTL3C").checked=true
			d.gI("WTL3").selectedIndex=(WEIGHTLIMIT3)}
		var SHIELDMASTERY1=ASHIELDMASTERY1[LVL]-1
		if (SHIELDMASTERY1<0)
			{d.gI("SDM1C").checked=false}
		else if (SHIELDMASTERY1>=0 && d.gI("SDM1C").style.display=='block')
			{d.gI("SDM1C").checked=true
			d.gI("SDM1").selectedIndex=(SHIELDMASTERY1)}
		var SHIELDMASTERY2=ASHIELDMASTERY2[LVL]-1
		if (SHIELDMASTERY2<0)
			{d.gI("SDM2C").checked=false}
		else if (SHIELDMASTERY2>=0 && d.gI("SDM2C").style.display=='block')
			{d.gI("SDM2C").checked=true
			d.gI("SDM2").selectedIndex=(SHIELDMASTERY2)}
		var CLEARMIND=ACLEARMIND[LVL]-1
		if (CLEARMIND<0)
			{d.gI("CLMC").checked=false}
		else if (CLEARMIND>=0 && d.gI("CLMC").style.display=='block')
			{d.gI("CLMC").checked=true
			d.gI("CLM").selectedIndex=(CLEARMIND)}
		var ESPRIT1=AESPRIT1[LVL]-1
		if (ESPRIT1<0)
			{d.gI("ESP1C").checked=false}
		else if (ESPRIT1>=0 && d.gI("ESP1C").style.display=='block')
			{d.gI("ESP1C").checked=true
			d.gI("ESP1").selectedIndex=(ESPRIT1)}
		var ESPRIT2=AESPRIT2[LVL]-1
		if (ESPRIT2<0)
			{d.gI("ESP2C").checked=false}
		else if (ESPRIT2>=0 && d.gI("ESP2C").style.display=='block')
			{d.gI("ESP2C").checked=true
			d.gI("ESP2").selectedIndex=(ESPRIT2)}
		var FASTHPRECOVERY1=AFASTHPRECOVERY1[LVL]-1
		if (FASTHPRECOVERY1<0)
			{d.gI("FHR1C").checked=false}
		else if (FASTHPRECOVERY1>=0 && d.gI("FHR1C").style.display=='block')
			{d.gI("FHR1C").checked=true
			d.gI("FHR1").selectedIndex=(FASTHPRECOVERY1)}
		var FASTHPRECOVERY2=AFASTHPRECOVERY2[LVL]-1
		if (FASTHPRECOVERY2<0)
			{d.gI("FHR2C").checked=false}
		else if (FASTHPRECOVERY2>=0 && d.gI("FHR2C").style.display=='block')
			{d.gI("FHR2C").checked=true
			d.gI("FHR2").selectedIndex=(FASTHPRECOVERY2)}
		var FASTHPRECOVERY3=AFASTHPRECOVERY3[LVL]-1
		if (FASTHPRECOVERY3<0)
			{d.gI("FHR3C").checked=false}
		else if (FASTHPRECOVERY3>=0 && d.gI("FHR3C").style.display=='block')
			{d.gI("FHR3C").checked=true
			d.gI("FHR3").selectedIndex=(FASTHPRECOVERY3)}
		var FASTHPRECOVERY4=AFASTHPRECOVERY4[LVL]-1
		if (FASTHPRECOVERY4<0)
			{d.gI("FHR4C").checked=false}
		else if (FASTHPRECOVERY4>=0 && d.gI("FHR4C").style.display=='block')
			{d.gI("FHR4C").checked=true
			d.gI("FHR4").selectedIndex=(FASTHPRECOVERY4)}
		var FASTMANARECOVERY1=AFASTMANARECOVERY1[LVL]-1
		if (FASTMANARECOVERY1<0)
			{d.gI("FMR1C").checked=false}
		else if (FASTMANARECOVERY1>=0 && d.gI("FMR1C").style.display=='block')
			{d.gI("FMR1C").checked=true
			d.gI("FMR1").selectedIndex=(FASTMANARECOVERY1)}
		var FASTMANARECOVERY2=AFASTMANARECOVERY2[LVL]-1
		if (FASTMANARECOVERY2<0)
			{d.gI("FMR2C").checked=false}
		else if (FASTMANARECOVERY2>=0 && d.gI("FMR2C").style.display=='block')
			{d.gI("FMR2C").checked=true
			d.gI("FMR2").selectedIndex=(FASTMANARECOVERY2)}
		var FOCUSMIND1=AFOCUSMIND1[LVL]-1
		if (FOCUSMIND1<0)
			{d.gI("FCM1C").checked=false}
		else if (FOCUSMIND1>=0 && d.gI("FCM1C").style.display=='block')
			{d.gI("FCM1C").checked=true
			d.gI("FCM1").selectedIndex=(FOCUSMIND1)}
		var FOCUSMIND2=AFOCUSMIND2[LVL]-1
		if (FOCUSMIND2<0)
			{d.gI("FCM2C").checked=false}
		else if (FOCUSMIND2>=0 && d.gI("FCM2C").style.display=='block')
			{d.gI("FCM2C").checked=true
			d.gI("FCM2").selectedIndex=(FOCUSMIND2)}
		var VITALFORCE1=AVITALFORCE1[LVL]-1
		if (VITALFORCE1<0)
			{d.gI("VTF1C").checked=false}
		else if (VITALFORCE1>=0 && d.gI("VTF1C").style.display=='block')
			{d.gI("VTF1C").checked=true
			d.gI("VTF1").selectedIndex=(VITALFORCE1)}
		var VITALFORCE2=AVITALFORCE2[LVL]-1
		if (VITALFORCE2<0)
			{d.gI("VTF2C").checked=false}
		else if (VITALFORCE2>=0 && d.gI("VTF2C").style.display=='block')
			{d.gI("VTF2C").checked=true
			d.gI("VTF2").selectedIndex=(VITALFORCE2)}
		var CRITICALPOWER1=ACRITICALPOWER1[LVL]-1
		if (CRITICALPOWER1<0)
			{d.gI("CRP1C").checked=false}
		else if (CRITICALPOWER1>=0 && d.gI("CRP1C").style.display=='block')
			{d.gI("CRP1C").checked=true
			d.gI("CRP1").selectedIndex=(CRITICALPOWER1)}
		var CRITICALPOWER2=ACRITICALPOWER2[LVL]-1
		if (CRITICALPOWER2<0)
			{d.gI("CRP2C").checked=false}
		else if (CRITICALPOWER2>=0 && d.gI("CRP2C").style.display=='block')
			{d.gI("CRP2C").checked=true
			d.gI("CRP2").selectedIndex=(CRITICALPOWER2)}
		var AEGIS=AAEGIS[LVL]-1
		if (AEGIS<0)
			{d.gI("AGSC").checked=false}
		else if (AEGIS>=0 && d.gI("AGSC").style.display=='block')
			{d.gI("AGSC").checked=true}
		var ACROBATICMOVE1=AACROBATICMOVE1[LVL]-1
		if (ACROBATICMOVE1<0)
			{d.gI("ACRM1C").checked=false}
		else if (ACROBATICMOVE1>=0 && d.gI("ACRM1C").style.display=='block')
			{d.gI("ACRM1C").checked=true
			d.gI("ACRM1").selectedIndex=(ACROBATICMOVE1)}
		var ACROBATICMOVE2=AACROBATICMOVE2[LVL]-1
		if (ACROBATICMOVE2<0)
			{d.gI("ACRM2C").checked=false}
		else if (ACROBATICMOVE2>=0 && d.gI("ACRM2C").style.display=='block')
			{d.gI("ACRM2C").checked=true
			d.gI("ACRM2").selectedIndex=(ACROBATICMOVE2)}
		var ARCHERY=AARCHERY[LVL]-1
		if (ARCHERY<0)
			{d.gI("ARCC").checked=false}
		else if (ARCHERY>=0 && d.gI("ARCC").style.display=='block')
			{d.gI("ARCC").checked=true
			d.gI("ARC").selectedIndex=(ARCHERY)}
		var KNIGHTHOOD=AARCHERY[LVL]-1
		if (KNIGHTHOOD<0)
			{d.gI("KNTC").checked=false}
		else if (KNIGHTHOOD>=0 && d.gI("KNTC").style.display=='block')
			{d.gI("KNTC").checked=true
			d.gI("KNT").selectedIndex=(KNIGHTHOOD)}
		var MASTEROFCOMBAT=AARCHERY[LVL]-1
		if (MASTEROFCOMBAT<0)
			{d.gI("MOCC").checked=false}
		else if (MASTEROFCOMBAT>=0 && d.gI("MOCC").style.display=='block')
			{d.gI("MOCC").checked=true
			d.gI("MOC").selectedIndex=(MASTEROFCOMBAT)}
		var ASSASSINATION=AARCHERY[LVL]-1
		if (ASSASSINATION<0)
			{d.gI("ASSC").checked=false}
		else if (ASSASSINATION>=0 && d.gI("ASSC").style.display=='block')
			{d.gI("ASSC").checked=true
			d.gI("ASS").selectedIndex=(ASSASSINATION)}
		var NECROMANCY=AARCHERY[LVL]-1
		if (NECROMANCY<0)
			{d.gI("NECC").checked=false}
		else if (NECROMANCY>=0 && d.gI("NECC").style.display=='block')
			{d.gI("NECC").checked=true
			d.gI("NEC").selectedIndex=(NECROMANCY)}
		var ARCANELORE=AARCHERY[LVL]-1
		if (ARCANELORE<0)
			{d.gI("ARLC").checked=false}
		else if (ARCANELORE>=0 && d.gI("ARLC").style.display=='block')
			{d.gI("ARLC").checked=true
			d.gI("ARL").selectedIndex=(ARCANELORE)}
		var SUMMONLORE=AARCHERY[LVL]-1
		if (SUMMONLORE<0)
			{d.gI("SMLC").checked=false}
		else if (SUMMONLORE>=0 && d.gI("SMLC").style.display=='block')
			{d.gI("SMLC").checked=true
			d.gI("SML").selectedIndex=(SUMMONLORE)}
	}
	if (d.gI("ACRM1C").checked==false)
		{d.gI("ACRM1").disabled=true;}
	else
		{d.gI("ACRM1").disabled=false;}
	if (d.gI("ACRM2C").checked==false)
		{d.gI("ACRM2").disabled=true;}
	else
		{d.gI("ACRM2").disabled=false;}
	if (d.gI("AGSC").checked==false)
		{d.gI("AGS").disabled=true;}
	else
		{d.gI("AGS").disabled=false;}
	if (d.gI("AGM1C").checked==false)
		{d.gI("AGM1").disabled=true;}
	else
		{d.gI("AGM1").disabled=false;}
	if (d.gI("AGM2C").checked==false)
		{d.gI("AGM2").disabled=true;}
	else
		{d.gI("AGM2").disabled=false;}
	if (d.gI("AM1C").checked==false)
		{d.gI("AM1").disabled=true;}
	else
		{d.gI("AM1").disabled=false;}
	if (d.gI("AM2C").checked==false)
		{d.gI("AM2").disabled=true;}
	else
		{d.gI("AM2").disabled=false;}
	if (d.gI("AM3C").checked==false)
		{d.gI("AM3").disabled=true;}
	else
		{d.gI("AM3").disabled=false;}
	if (d.gI("AMFC").checked==false)
		{d.gI("AMF").disabled=true;}
	else if (d.gI("AMFC").checked==true)
		{d.gI("AMF").disabled=false;}
	if (d.gI("AMMC").checked==false)
		{d.gI("AMM").disabled=true;}
	else
		{d.gI("AMM").disabled=false;}
	if (d.gI("ARCC").checked==false)
		{d.gI("ARC").disabled=true;}
	else
		{d.gI("ARC").disabled=false;}
	if (d.gI("ARLC").checked==false)
		{d.gI("ARL").disabled=true;}
	else
		{d.gI("ARL").disabled=false;}
	if (d.gI("ASSC").checked==false)
		{d.gI("ASS").disabled=true;}
	else
		{d.gI("ASS").disabled=false;}
	if (d.gI("BLM1C").checked==false)
		{d.gI("BLM1").disabled=true;}
	else
		{d.gI("BLM1").disabled=false;}
	if (d.gI("BLM2C").checked==false)
		{d.gI("BLM2").disabled=true;}
	else
		{d.gI("BLM2").disabled=false;}
	if (d.gI("BOA1C").checked==false)
		{d.gI("BOA1").disabled=true;}
	else
		{d.gI("BOA1").disabled=false;}
	if (d.gI("BOA2C").checked==false)
		{d.gI("BOA2").disabled=true;}
	else
		{d.gI("BOA2").disabled=false;}
	if (d.gI("BEV1C").checked==false)
		{d.gI("BEV1").disabled=true;}
	else
		{d.gI("BEV1").disabled=false;}
	if (d.gI("BEV2C").checked==false)
		{d.gI("BEV2").disabled=true;}
	else
		{d.gI("BEV2").disabled=false;}
	if (d.gI("BHP1C").checked==false)
		{d.gI("BHP1").disabled=true;}
	else
		{d.gI("BHP1").disabled=false;}
	if (d.gI("BHP2C").checked==false)
		{d.gI("BHP2").disabled=true;}
	else
		{d.gI("BHP2").disabled=false;}
	if (d.gI("BHP3C").checked==false)
		{d.gI("BHP3").disabled=true;}
	else
		{d.gI("BHP3").disabled=false;}
	if (d.gI("BMP1C").checked==false)
		{d.gI("BMP1").disabled=true;}
	else
		{d.gI("BMP1").disabled=false;}
	if (d.gI("BMP2C").checked==false)
		{d.gI("BMP2").disabled=true;}
	else
		{d.gI("BMP2").disabled=false;}
	if (d.gI("BOWM1C").checked==false)
		{d.gI("BOWM1").disabled=true;}
	else
		{d.gI("BOWM1").disabled=false;}
	if (d.gI("BOWM2C").checked==false)
		{d.gI("BOWM2").disabled=true;}
	else
		{d.gI("BOWM2").disabled=false;}
	if (d.gI("CLAGC").checked==false)
		{d.gI("CLAG").disabled=true;}
	else
		{d.gI("CLAG").disabled=false;}
	if (d.gI("CLEMC").checked==false)
		{d.gI("CLEM").disabled=true;}
	else
		{d.gI("CLEM").disabled=false;}
	if (d.gI("CLGDC").checked==false)
		{d.gI("CLGD").disabled=true;}
	else
		{d.gI("CLGD").disabled=false;}
	if (d.gI("CLPDC").checked==false)
		{d.gI("CLPD").disabled=true;}
	else
		{d.gI("CLPD").disabled=false;}
	if (d.gI("CLMDC").checked==false)
		{d.gI("CLMD").disabled=true;}
	else
		{d.gI("CLMD").disabled=false;}
	if (d.gI("CLPAC").checked==false)
		{d.gI("CLPA").disabled=true;}
	else
		{d.gI("CLPA").disabled=false;}
	if (d.gI("CLCPC").checked==false)
		{d.gI("CLCP").disabled=true;}
	else
		{d.gI("CLCP").disabled=false;}
	if (d.gI("CLHPC").checked==false)
		{d.gI("CLHP").disabled=true;}
	else
		{d.gI("CLHP").disabled=false;}
	if (d.gI("CLHRC").checked==false)
		{d.gI("CLHR").disabled=true;}
	else
		{d.gI("CLHR").disabled=false;}
	if (d.gI("CLSPC").checked==false)
		{d.gI("CLSP").disabled=true;}
	else
		{d.gI("CLSP").disabled=false;}
	if (d.gI("CLMC").checked==false)
		{d.gI("CLM").disabled=true;}
	else
		{d.gI("CLM").disabled=false;}
	if (d.gI("CRC1C").checked==false)
		{d.gI("CRC1").disabled=true;}
	else
		{d.gI("CRC1").disabled=false;}
	if (d.gI("CRC2C").checked==false)
		{d.gI("CRC2").disabled=true;}
	else
		{d.gI("CRC2").disabled=false;}
	if (d.gI("CRP1C").checked==false)
		{d.gI("CRP1").disabled=true;}
	else
		{d.gI("CRP1").disabled=false;}
	if (d.gI("CRP2C").checked==false)
		{d.gI("CRP2").disabled=true;}
	else
		{d.gI("CRP2").disabled=false;}
	if (d.gI("DGM1C").checked==false)
		{d.gI("DGM1").disabled=true;}
	else
		{d.gI("DGM1").disabled=false;}
	if (d.gI("DGM2C").checked==false)
		{d.gI("DGM2").disabled=true;}
	else
		{d.gI("DGM2").disabled=false;}
	if (d.gI("DUALMC").checked==false)
		{d.gI("DUALM").disabled=true;}
	else
		{d.gI("DUALM").disabled=false;}
	if (d.gI("ESP1C").checked==false)
		{d.gI("ESP1").disabled=true;}
	else
		{d.gI("ESP1").disabled=false;}
	if (d.gI("ESP2C").checked==false)
		{d.gI("ESP2").disabled=true;}
	else
		{d.gI("ESP2").disabled=false;}
	if (d.gI("FSC1C").checked==false)
		{d.gI("FSC1").disabled=true;}
	else
		{d.gI("FSC1").disabled=false;}
	if (d.gI("FSC2C").checked==false)
		{d.gI("FSC2").disabled=true;}
	else
		{d.gI("FSC2").disabled=false;}
	if (d.gI("FHR1C").checked==false)
		{d.gI("FHR1").disabled=true;}
	else
		{d.gI("FHR1").disabled=false;}
	if (d.gI("FHR2C").checked==false)
		{d.gI("FHR2").disabled=true;}
	else
		{d.gI("FHR2").disabled=false;}
	if (d.gI("FHR3C").checked==false)
		{d.gI("FHR3").disabled=true;}
	else
		{d.gI("FHR3").disabled=false;}
	if (d.gI("FHR4C").checked==false)
		{d.gI("FHR4").disabled=true;}
	else
		{d.gI("FHR4").disabled=false;}
	if (d.gI("FMR1C").checked==false)
		{d.gI("FMR1").disabled=true;}
	else
		{d.gI("FMR1").disabled=false;}
	if (d.gI("FMR2C").checked==false)
		{d.gI("FMR2").disabled=true;}
	else
		{d.gI("FMR2").disabled=false;}
	if (d.gI("FFOC").checked==false)
		{d.gI("FFO").disabled=true;}
	else
		{d.gI("FFO").disabled=false;}
	if (d.gI("FFRC").checked==false)
		{d.gI("FFR").disabled=true;}
	else
		{d.gI("FFR").disabled=false;}
	if (d.gI("FIM1C").checked==false)
		{d.gI("FIM1").disabled=true;}
	else
		{d.gI("FIM1").disabled=false;}
	if (d.gI("FIM2C").checked==false)
		{d.gI("FIM2").disabled=true;}
	else
		{d.gI("FIM2").disabled=false;}
	if (d.gI("FCM1C").checked==false)
		{d.gI("FCM1").disabled=true;}
	else
		{d.gI("FCM1").disabled=false;}
	if (d.gI("FCM2C").checked==false)
		{d.gI("FCM2").disabled=true;}
	else
		{d.gI("FCM2").disabled=false;}
	if (d.gI("HMK1C").checked==false)
		{d.gI("HMK1").disabled=true;}
	else
		{d.gI("HMK1").disabled=false;}
	if (d.gI("HMK2C").checked==false)
		{d.gI("HMK2").disabled=true;}
	else
		{d.gI("HMK2").disabled=false;}
	if (d.gI("HMW1C").checked==false)
		{d.gI("HMW1").disabled=true;}
	else
		{d.gI("HMW1").disabled=false;}
	if (d.gI("HMW2C").checked==false)
		{d.gI("HMW2").disabled=true;}
	else
		{d.gI("HMW2").disabled=false;}
	if (d.gI("HMO1C").checked==false)
		{d.gI("HMO1").disabled=true;}
	else
		{d.gI("HMO1").disabled=false;}
	if (d.gI("HMO2C").checked==false)
		{d.gI("HMO2").disabled=true;}
	else
		{d.gI("HMO2").disabled=false;}
	if (d.gI("HMO3C").checked==false)
		{d.gI("HMO3").disabled=true;}
	else
		{d.gI("HMO3").disabled=false;}
	if (d.gI("HMPC").checked==false)
		{d.gI("HMP").disabled=true;}
	else
		{d.gI("HMP").disabled=false;}
	if (d.gI("KNTC").checked==false)
		{d.gI("KNT").disabled=true;}
	else
		{d.gI("KNT").disabled=false;}
	if (d.gI("LMW1C").checked==false)
		{d.gI("LMW1").disabled=true;}
	else
		{d.gI("LMW1").disabled=false;}
	if (d.gI("LMW2C").checked==false)
		{d.gI("LMW2").disabled=true;}
	else
		{d.gI("LMW2").disabled=false;}
	if (d.gI("LMR1C").checked==false)
		{d.gI("LMR1").disabled=true;}
	else
		{d.gI("LMR1").disabled=false;}
	if (d.gI("LMR2C").checked==false)
		{d.gI("LMR2").disabled=true;}
	else
		{d.gI("LMR2").disabled=false;}
	if (d.gI("LMO1C").checked==false)
		{d.gI("LMO1").disabled=true;}
	else
		{d.gI("LMO1").disabled=false;}
	if (d.gI("LMO2C").checked==false)
		{d.gI("LMO2").disabled=true;}
	else
		{d.gI("LMO2").disabled=false;}
	if (d.gI("LMO3C").checked==false)
		{d.gI("LMO3").disabled=true;}
	else
		{d.gI("LMO3").disabled=false;}
	if (d.gI("LMH1C").checked==false)
		{d.gI("LMH1").disabled=true;}
	else
		{d.gI("LMH1").disabled=false;}
	if (d.gI("LMH2C").checked==false)
		{d.gI("LMH2").disabled=true;}
	else
		{d.gI("LMH2").disabled=false;}
	if (d.gI("LMSC").checked==false)
		{d.gI("LMS").disabled=true;}
	else
		{d.gI("LMS").disabled=false;}
	if (d.gI("MR1C").checked==false)
		{d.gI("MR1").disabled=true;}
	else
		{d.gI("MR1").disabled=false;}
	if (d.gI("MR2C").checked==false)
		{d.gI("MR2").disabled=true;}
	else
		{d.gI("MR2").disabled=false;}
	if (d.gI("MOCC").checked==false)
		{d.gI("MOC").disabled=true;}
	else
		{d.gI("MOC").disabled=false;}
	if (d.gI("NECC").checked==false)
		{d.gI("NEC").disabled=true;}
	else
		{d.gI("NEC").disabled=false;}
	if (d.gI("PLM1C").checked==false)
		{d.gI("PLM1").disabled=true;}
	else
		{d.gI("PLM1").disabled=false;}
	if (d.gI("PLM2C").checked==false)
		{d.gI("PLM2").disabled=true;}
	else
		{d.gI("PLM2").disabled=false;}
	if (d.gI("QS1C").checked==false)
		{d.gI("QS1").disabled=true;}
	else
		{d.gI("QS1").disabled=false;}
	if (d.gI("QS2C").checked==false)
		{d.gI("QS2").disabled=true;}
	else
		{d.gI("QS2").disabled=false;}
	if (d.gI("QOHC").checked==false)
		{d.gI("QOH").disabled=true;}
	else
		{d.gI("QOH").disabled=false;}
	if (d.gI("RMN1C").checked==false)
		{d.gI("RMN1").disabled=true;}
	else
		{d.gI("RMN1").disabled=false;}
	if (d.gI("RMN2C").checked==false)
		{d.gI("RMN2").disabled=true;}
	else
		{d.gI("RMN2").disabled=false;}
	if (d.gI("RMH1C").checked==false)
		{d.gI("RMH1").disabled=true;}
	else
		{d.gI("RMH1").disabled=false;}
	if (d.gI("RMH2C").checked==false)
		{d.gI("RMH2").disabled=true;}
	else
		{d.gI("RMH2").disabled=false;}
	if (d.gI("RMO1C").checked==false)
		{d.gI("RMO1").disabled=true;}
	else
		{d.gI("RMO1").disabled=false;}
	if (d.gI("RMO2C").checked==false)
		{d.gI("RMO2").disabled=true;}
	else
		{d.gI("RMO2").disabled=false;}
	if (d.gI("RMO3C").checked==false)
		{d.gI("RMO3").disabled=true;}
	else
		{d.gI("RMO3").disabled=false;}
	if (d.gI("SOSC").checked==false)
		{d.gI("SOS").disabled=true;}
	else
		{d.gI("SOS").disabled=false;}
	if (d.gI("SHSC").checked==false)
		{d.gI("SHS").disabled=true;}
	else
		{d.gI("SHS").disabled=false;}
	if (d.gI("SDM1C").checked==false)
		{d.gI("SDM1").disabled=true;}
	else
		{d.gI("SDM1").disabled=false;}
	if (d.gI("SDM2C").checked==false)
		{d.gI("SDM2").disabled=true;}
	else
		{d.gI("SDM2").disabled=false;}
	if (d.gI("SMLC").checked==false)
		{d.gI("SML").disabled=true;}
	else
		{d.gI("SML").disabled=false;}
//Sword/Blunt Mastery for knights
	if (d.gI("KSBM1C").checked==false)
		{d.gI("KSBM1").disabled=true;}
	else
		{d.gI("KSBM1").disabled=false;}
	if (d.gI("KSBM2C").checked==false)
		{d.gI("KSBM2").disabled=true;}
	else
		{d.gI("KSBM2").disabled=false;}
//Sword/Blunt Mastery for other classes
	if (d.gI("WSBM1C").checked==false)
		{d.gI("WSBM1").disabled=true;}
	else if (d.gI("WSBM1C").checked==true)
		{d.gI("WSBM1").disabled=false;}
	if (d.gI("WSBM2C").checked==false)
		{d.gI("WSBM2").disabled=true;}
	else if (d.gI("WSBM2C").checked==true)
		{d.gI("WSBM2").disabled=false;}
	if (d.gI("THM1C").checked==false)
		{d.gI("THM1").disabled=true;}
	else
		{d.gI("THM1").disabled=false;}
	if (d.gI("THM2C").checked==false)
		{d.gI("THM2").disabled=true;}
	else
		{d.gI("THM2").disabled=false;}
	if (d.gI("VTF1C").checked==false)
		{d.gI("VTF1").disabled=true;}
	else
		{d.gI("VTF1").disabled=false;}
	if (d.gI("VTF2C").checked==false)
		{d.gI("VTF2").disabled=true;}
	else
		{d.gI("VTF2").disabled=false;}
	if (d.gI("WTL1C").checked==false)
		{d.gI("WTL1").disabled=true;}
	else
		{d.gI("WTL1").disabled=false;}
	if (d.gI("WTL2C").checked==false)
		{d.gI("WTL2").disabled=true;}
	else
		{d.gI("WTL2").disabled=false;}
	if (d.gI("WTL3C").checked==false)
		{d.gI("WTL3").disabled=true;}
	else
		{d.gI("WTL3").disabled=false;}
	if (d.gI("WMFC").checked==false)
		{d.gI("WMF").disabled=true;}
	else
		{d.gI("WMF").disabled=false;}
	if (d.gI("WMM1C").checked==false)
		{d.gI("WMM1").disabled=true;}
	else
		{d.gI("WMM1").disabled=false;}
	if (d.gI("WMM2C").checked==false)
		{d.gI("WMM2").disabled=true;}
	else
		{d.gI("WMM2").disabled=false;}
	if (d.gI("WMM3C").checked==false)
		{d.gI("WMM3").disabled=true;}
	else
		{d.gI("WMM3").disabled=false;}
}
function buffs(setbuff) {
//Buffs Autoselect
var setbuffs=d.gI("SETBUFFS").value
var APROPH=new Array("n",1,"n","n","n","n","n","n","n",3,"n","n","n","n","n","n","n",0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var ABTB1=new Array("n",5,5,4,3,2,1,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",5,"n","n")
var ABTB2=new Array("n",5,5,4,3,2,1,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",5,"n","n")
var ABTB3=new Array("n",5,5,4,3,2,1,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",5,"n","n")
var ABTS=new Array("n",5,5,4,3,2,1,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",5,"n","n")
var AFCS=new Array("n",2,2,2,2,2,1,1,0,2,2,2,2,2,1,1,0,5,5,5,4,4,3,3,3,3,"n","n","n","n","n","n","n","n","n","n",0,2,"n")
var AHASTE=new Array("n",1,1,1,1,1,0,0,"n","n","n","n","n","n","n","n","n",3,3,3,3,3,3,3,2,2,"n","n","n","n","n","n","n","n","n","n",0,1,1)
var AEMP=new Array("n","n","n","n","n","n","n","n","n",2,2,2,2,2,1,1,0,"n","n","n","n","n","n","n","n","n","n","n",4,"n","n","n","n","n","n","n",0,2,"n")
var AWW=new Array("n",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,"n","n","n","n","n","n","n","n","n","n","n",3,3,2,"n","n","n","n","n",1,1,1)
var AMB1=new Array("n",1,1,1,1,1,0,0,"n","n","n","n","n","n","n","n","n",4,4,4,4,4,4,4,4,3,3,3,7,7,7,7,6,6,5,5,1,"n","n")
var AMB2=new Array("n",1,1,1,1,1,0,0,"n","n","n","n","n","n","n","n","n",4,4,4,4,4,4,4,4,3,3,3,7,7,7,7,6,6,5,5,1,"n","n")
var AMB3=new Array("n",1,1,1,1,1,0,0,"n","n","n","n","n","n","n","n","n",4,4,4,4,4,4,4,4,3,3,3,7,7,7,7,6,6,5,5,1,"n","n")
var AAGI=new Array("n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",5,5,5,5,5,5,5,4,4,3,3,8,8,8,8,7,7,6,6,"n","n","n")
var AGUID=new Array("n",2,2,2,2,1,1,0,0,2,2,2,2,1,1,0,0,5,5,5,5,5,4,3,3,3,"n","n",8,8,8,8,7,6,6,6,2,2,"n")
var AACU=new Array("n",2,2,2,2,2,2,1,1,"n","n","n","n","n","n","n","n",5,5,5,5,5,5,5,4,4,4,3,8,8,8,8,7,7,7,6,0,2,"n")
var ASHIELD1=new Array("n",2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,8,8,8,8,8,8,8,8,8,8,5,5,5,5,5,4,4,3,2,"n","n")
var ASHIELD2=new Array("n",2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,8,8,8,8,8,8,8,8,8,8,5,5,5,5,5,4,4,3,2,"n","n")
var AMIGHT1=new Array("n",2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,6,6,6,6,6,6,6,6,6,6,5,9,9,9,9,9,9,8,8,2,2,"n")
var AMIGHT2=new Array("n",2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,8,8,8,8,8,8,8,8,8,7,11,11,11,11,11,11,10,10,2,2,"n")
var ABLESSSHIELD=new Array("n",2,2,2,2,1,1,0,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",8,8,8,8,7,7,6,6,5,"n")
var AREGENERATION=new Array("n",2,2,2,2,1,1,0,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var ADEATHWHISPER=new Array("n",2,2,2,2,1,1,0,0,2,2,2,2,1,1,0,0,5,5,5,5,5,5,5,4,3,3,"n",6,"n","n","n","n","n","n","n",0,2,"n")
var AVAMPIRICRAGE=new Array("n","n","n","n","n","n","n","n","n",3,3,2,1,1,1,1,0,7,7,6,6,5,5,4,4,4,4,"n","n","n","n","n","n","n","n","n",3,"n","n")
var ASKIN=new Array("n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",2,2,1,0,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
if (setbuff && setbuffs=="0"){
	d.gI("BTB1C").checked=false
	d.gI("BTB2C").checked=false
	d.gI("BTB3C").checked=false
	d.gI("VITC").checked=false
	d.gI("BTSC").checked=false
	d.gI("SAGC").checked=false
	d.gI("MT1C").checked=false
	d.gI("MT2C").checked=false
	d.gI("DWAC").checked=false
	d.gI("GRMC").checked=false
	d.gI("FZY1C").checked=false
	d.gI("FZY2C").checked=false
	d.gI("WCY1C").checked=false
	d.gI("WCY2C").checked=false
	d.gI("RGE1C").checked=false
	d.gI("RGE2C").checked=false
	d.gI("EMPC").checked=false
	d.gI("DOMYC").checked=false
	d.gI("SHD1C").checked=false
	d.gI("SHD2C").checked=false
	d.gI("SOEC").checked=false
	d.gI("GRSC").checked=false
	d.gI("GTS1C").checked=false
	d.gI("GTS2C").checked=false
	d.gI("MAJ1C").checked=false
	d.gI("MAJ2C").checked=false
	d.gI("MB1C").checked=false
	d.gI("MB2C").checked=false
	d.gI("MB3C").checked=false
	d.gI("WARDC").checked=false
	d.gI("GUIDC").checked=false
	d.gI("DOIC").checked=false
	d.gI("HEC").checked=false
	d.gI("AGIC").checked=false
	d.gI("SWATC").checked=false
	d.gI("UEC").checked=false
	d.gI("EVSC").checked=false
	d.gI("FCSC").checked=false
	d.gI("SOHC").checked=false
	d.gI("WWC").checked=false
	d.gI("SWIC").checked=false
	d.gI("DSHC").checked=false
	d.gI("DAS1C").checked=false
	d.gI("DAS2C").checked=false
	d.gI("BLDC").checked=false
	d.gI("HSTC").checked=false
	d.gI("DFUC").checked=false
	d.gI("RPD1C").checked=false
	d.gI("RPD2C").checked=false
	d.gI("DUELC").checked=false
	d.gI("TFC").checked=false
	d.gI("ACUC").checked=false
	d.gI("DCONC").checked=false
	d.gI("DEWC").checked=false
	d.gI("DOFC").checked=false
	d.gI("VRAC").checked=false
	d.gI("DOVC").checked=false
	d.gI("BSDC").checked=false
	d.gI("ADBC").checked=false
	d.gI("RGNC").checked=false
	d.gI("SOLC").checked=false
	d.gI("SOMC").checked=false
	d.gI("SERC").checked=false
	d.gI("MRGC").checked=false
	d.gI("SKNC").checked=false
	d.gI("SOVC").checked=false
	d.gI("ZERKC").checked=false
	d.gI("QUEEC").checked=false
	d.gI("PRPC").checked=false
	d.gI("DCWC").checked=false
	d.gI("UD1C").checked=false
	d.gI("UD2C").checked=false
	d.gI("INVC").checked=false
	d.gI("TTM1C").checked=false
	d.gI("TTM2C").checked=false
	d.gI("SNIC").checked=false
	d.gI("STLC").checked=false
	d.gI("FAC").checked=false
	d.gI("ZLTC").checked=false
	d.gI("DEA1C").checked=false
	d.gI("DEA2C").checked=false
	d.gI("ANIC").checked=false
	d.gI("RPFC").checked=false
	d.gI("DEYC").checked=false
	d.gI("BOPC").checked=false
	d.gI("HERC").checked=false
	}
else if (setbuff) {
	var PROPH=APROPH[setbuffs]
	if (PROPH>=0)
		{d.gI("PRPC").checked=true
		d.gI("PRP").selectedIndex=PROPH}
	var BTB1=ABTB1[setbuffs]
	if (BTB1>=0 && d.gI("BTB1C").style.display=='block')
		{d.gI("BTB1C").checked=true
		d.gI("BTB1").selectedIndex=BTB1}
	var BTB2=ABTB2[setbuffs]
	if (BTB2>=0 && d.gI("BTB2C").style.display=='block')
		{d.gI("BTB2C").checked=true
		d.gI("BTB2").selectedIndex=BTB2}
	var BTB3=ABTB3[setbuffs]
	if (BTB3>=0 && d.gI("BTB3C").style.display=='block')
		{d.gI("BTB3C").checked=true
		d.gI("BTB3").selectedIndex=BTB3}
	var BTS=ABTS[setbuffs]
	if (BTS>=0)
		{d.gI("BTSC").checked=true
		d.gI("BTS").selectedIndex=BTS}
	var FCS=AFCS[setbuffs]
	if (FCS>=0)
		{d.gI("FCSC").checked=true
		d.gI("FCS").selectedIndex=FCS}
	var HASTE=AHASTE[setbuffs]
	if (HASTE>=0)
		{d.gI("HSTC").checked=true
		d.gI("HST").selectedIndex=HASTE}
	var EMP=AEMP[setbuffs]
	if (EMP>=0)
		{d.gI("EMPC").checked=true
		d.gI("EMP").selectedIndex=EMP}
	var WW=AWW[setbuffs]
	if (WW>=0)
		{d.gI("WWC").checked=true
		d.gI("WW").selectedIndex=WW}
	var MB1=AMB1[setbuffs]
	if (MB1>=0 && d.gI("MB1C").style.display=='block')
		{d.gI("MB1C").checked=true
		d.gI("MB1").selectedIndex=MB1}
	var MB2=AMB2[setbuffs]
	if (MB2>=0 && d.gI("MB2C").style.display=='block')
		{d.gI("MB2C").checked=true
		d.gI("MB2").selectedIndex=MB2}
	var MB3=AMB3[setbuffs]
	if (MB3>=0 && d.gI("MB3C").style.display=='block')
		{d.gI("MB3C").checked=true
		d.gI("MB3").selectedIndex=MB3}
	var AGI=AAGI[setbuffs]
	if (AGI>=0)
		{d.gI("AGIC").checked=true
		d.gI("AGI").selectedIndex=AGI}
	var GUID=AGUID[setbuffs]
	if (GUID>=0)
		{d.gI("GUIDC").checked=true
		d.gI("GUID").selectedIndex=GUID}
	var ACU=AACU[setbuffs]
	if (ACU>=0)
		{d.gI("ACUC").checked=true
		d.gI("ACU").selectedIndex=ACU}
	var BLESSSHIELD=ABLESSSHIELD[setbuffs]
	if (BLESSSHIELD>=0)
		{d.gI("BSDC").checked=true
		d.gI("BSD").selectedIndex=BLESSSHIELD}
	var SHIELD1=ASHIELD1[setbuffs]
	if (SHIELD1>=0 && d.gI("SHD1C").style.display=='block')
		{d.gI("SHD1C").checked=true
		d.gI("SHD1").selectedIndex=SHIELD1}
	var SHIELD2=ASHIELD2[setbuffs]
	if (SHIELD2>=0 && d.gI("SHD2C").style.display=='block')
		{d.gI("SHD2C").checked=true
		d.gI("SHD2").selectedIndex=SHIELD2}
	var MIGHT1=AMIGHT1[setbuffs]
	if (MIGHT1>=0 && d.gI("MT1C").style.display=='block')
		{d.gI("MT1C").checked=true
		d.gI("MT1").selectedIndex=MIGHT1}
	var MIGHT2=AMIGHT2[setbuffs]
	if (MIGHT2>=0 && d.gI("MT2C").style.display=='block')
		{d.gI("MT2C").checked=true
		d.gI("MT2").selectedIndex=MIGHT2}
	var REGENERATION=AREGENERATION[setbuffs]
	if (REGENERATION>=0)
		{d.gI("RGNC").checked=true
		d.gI("RGN").selectedIndex=REGENERATION}
	var DEATHWHISPER=ADEATHWHISPER[setbuffs]
	if (DEATHWHISPER>=0)
		{d.gI("DEWC").checked=true
		d.gI("DEW").selectedIndex=DEATHWHISPER}
	var VAMPIRICRAGE=AVAMPIRICRAGE[setbuffs]
	if (VAMPIRICRAGE>=0)
		{d.gI("VRAC").checked=true
		d.gI("VRA").selectedIndex=VAMPIRICRAGE}
	var SKIN=ASKIN[setbuffs]
	if (SKIN>=0)
		{d.gI("SKNC").checked=true
		d.gI("SKN").selectedIndex=SKIN}
}
if (setbuff && setbuffs==37)
		{d.gI("ZERKC").checked=true
		d.gI("ZERK").selectedIndex=1}

	if (d.gI("ACUC").checked==false)
		{d.gI("ACU").disabled=true;}
	else
		{d.gI("ACU").disabled=false;}
	if (d.gI("ADBC").checked==false)
		{d.gI("ADB").disabled=true;}
	else
		{d.gI("ADB").disabled=false;}
	if (d.gI("AGIC").checked==false)
		{d.gI("AGI").disabled=true;}
	else
		{d.gI("AGI").disabled=false;}
	if (d.gI("ANIC").checked==false)
		{d.gI("ANI").disabled=true;}
	else
		{d.gI("ANI").disabled=false;}
	if (d.gI("ZERKC").checked==false)
		{d.gI("ZERK").disabled=true;}
	else
		{d.gI("ZERK").disabled=false;}
	if (d.gI("BSDC").checked==false)
		{d.gI("BSD").disabled=true;}
	else
		{d.gI("BSD").disabled=false;}
	if (d.gI("BTB1C").checked==false)
		{d.gI("BTB1").disabled=true;}
	else
		{d.gI("BTB1").disabled=false;}
	if (d.gI("BTB2C").checked==false)
		{d.gI("BTB2").disabled=true;}
	else
		{d.gI("BTB2").disabled=false;}
	if (d.gI("BTB3C").checked==false)
		{d.gI("BTB3").disabled=true;}
	else
		{d.gI("BTB3").disabled=false;}
	if (d.gI("BTSC").checked==false)
		{d.gI("BTS").disabled=true;}
	else
		{d.gI("BTS").disabled=false;}
	if (d.gI("BLDC").checked==false)
		{d.gI("BLD").disabled=true;}
	else
		{d.gI("BLD").disabled=false;}
	if (d.gI("DCONC").checked==false)
		{d.gI("DCON").disabled=true;}
	else
		{d.gI("DCON").disabled=false;}
	if (d.gI("DOFC").checked==false)
		{d.gI("DOF").disabled=true;}
	else
		{d.gI("DOF").disabled=false;}
	if (d.gI("DFUC").checked==false)
		{d.gI("DFU").disabled=true;}
	else
		{d.gI("DFU").disabled=false;}
	if (d.gI("DOIC").checked==false)
		{d.gI("DOI").disabled=true;}
	else
		{d.gI("DOI").disabled=false;}
	if (d.gI("DOMYC").checked==false)
		{d.gI("DOMY").disabled=true;}
	else
		{d.gI("DOMY").disabled=false;}
	if (d.gI("DSHC").checked==false)
		{d.gI("DSH").disabled=true;}
	else
		{d.gI("DSH").disabled=false;}
	if (d.gI("DWAC").checked==false)
		{d.gI("DWA").disabled=true;}
	else
		{d.gI("DWA").disabled=false;}
	if (d.gI("DOVC").checked==false)
		{d.gI("DOV").disabled=true;}
	else
		{d.gI("DOV").disabled=false;}
	if (d.gI("DAS1C").checked==false)
		{d.gI("DAS1").disabled=true;}
	else
		{d.gI("DAS1").disabled=false;}
	if (d.gI("DAS2C").checked==false)
		{d.gI("DAS2").disabled=true;}
	else
		{d.gI("DAS2").disabled=false;}
	if (d.gI("DEYC").checked==false)
		{d.gI("DEY").disabled=true;}
	else
		{d.gI("DEY").disabled=false;}
	if (d.gI("DEWC").checked==false)
		{d.gI("DEW").disabled=true;}
	else
		{d.gI("DEW").disabled=false;}
	if (d.gI("DCWC").checked==false)
		{d.gI("DCW").disabled=true;}
	else
		{d.gI("DCW").disabled=false;}
	if (d.gI("DEA1C").checked==false)
		{d.gI("DEA1").disabled=true;}
	else
		{d.gI("DEA1").disabled=false;}
	if (d.gI("DEA2C").checked==false)
		{d.gI("DEA2").disabled=true;}
	else
		{d.gI("DEA2").disabled=false;}
	if (d.gI("DUELC").checked==false)
		{d.gI("DUEL").disabled=true;}
	else
		{d.gI("DUEL").disabled=false;}
	if (d.gI("EMPC").checked==false)
		{d.gI("EMP").disabled=true;}
	else
		{d.gI("EMP").disabled=false;}
	if (d.gI("EVSC").checked==false)
		{d.gI("EVS").disabled=true;}
	else
		{d.gI("EVS").disabled=false;}
	if (d.gI("FCSC").checked==false)
		{d.gI("FCS").disabled=true;}
	else
		{d.gI("FCS").disabled=false;}
	if (d.gI("FAC").checked==false)
		{d.gI("FA").disabled=true;}
	else
		{d.gI("FA").disabled=false;}
	if (d.gI("FAWC").checked==false)
		{d.gI("FAW").disabled=true;}
	else
		{d.gI("FAW").disabled=false;}
	if (d.gI("FPWC").checked==false)
		{d.gI("FPW").disabled=true;}
	else
		{d.gI("FPW").disabled=false;}
	if (d.gI("FTHC").checked==false)
		{d.gI("FTH").disabled=true;}
	else
		{d.gI("FTH").disabled=false;}
	if (d.gI("FZY1C").checked==false)
		{d.gI("FZY1").disabled=true;
		d.gI("GTS1C").disabled=false}
	else
		{d.gI("FZY1").disabled=false;
		d.gI("GTS1C").disabled=true}
	if (d.gI("GTS1C").checked==false)
		{d.gI("GTS1").disabled=true;
		d.gI("FZY1C").disabled=false}
	else
		{d.gI("GTS1").disabled=false;
		d.gI("FZY1C").disabled=true}
	if (d.gI("FZY2C").checked==false)
		{d.gI("FZY2").disabled=true;
		d.gI("GTS2C").disabled=false}
	else
		{d.gI("FZY2").disabled=false;
		d.gI("GTS2C").disabled=true}
	if (d.gI("GTS2C").checked==false)
		{d.gI("GTS2").disabled=true;
		d.gI("FZY2C").disabled=false}
	else
		{d.gI("GTS2").disabled=false;
		d.gI("FZY2C").disabled=true}
	if (d.gI("GRMC").checked==true && d.gI("GRSC").checked==false)
		{d.gI("GRM").disabled=false;
		d.gI("GRSC").disabled=true;
		d.gI("GRSC").checked=false;
		d.gI("GRS").disabled=true;}
	else if (d.gI("GRSC").checked==true && d.gI("GRMC").checked==false)
		{d.gI("GRS").disabled=false;
		d.gI("GRMC").disabled=true;
		d.gI("GRMC").checked=false;
		d.gI("GRM").disabled=true;}
	else if (d.gI("GRSC").checked==true && d.gI("GRMC").checked==true)
		{d.gI("GRM").disabled=false;
		d.gI("GRSC").disabled=true;
		d.gI("GRSC").checked=false;
		d.gI("GRS").disabled=true;}
	else
		{d.gI("GRM").disabled=true;
		d.gI("GRS").disabled=true;
		d.gI("GRSC").disabled=false;
		d.gI("GRMC").disabled=false;}
	if (d.gI("GUIDC").checked==false)
		{d.gI("GUID").disabled=true;}
	else
		{d.gI("GUID").disabled=false;}
	if (d.gI("HSTC").checked==false)
		{d.gI("HST").disabled=true;}
	else
		{d.gI("HST").disabled=false;}
	if (d.gI("HEC").checked==false)
		{d.gI("HE").disabled=true;}
	else
		{d.gI("HE").disabled=false;}
	if (d.gI("BOPC").checked==false)
		{d.gI("BOP").disabled=true;}
	else
		{d.gI("BOP").disabled=false;}
	if (d.gI("HERC").checked==false)
		{d.gI("HER").disabled=true;}
	else
		{d.gI("HER").disabled=false;}
	if (d.gI("INVC").checked==false)
		{d.gI("INV").disabled=true;}
	else
		{d.gI("INV").disabled=false;}
	if (d.gI("MB1C").checked==false)
		{d.gI("MB1").disabled=true;}
	else
		{d.gI("MB1").disabled=false;}
	if (d.gI("MB2C").checked==false)
		{d.gI("MB2").disabled=true;}
	else
		{d.gI("MB2").disabled=false;}
	if (d.gI("MB3C").checked==false)
		{d.gI("MB3").disabled=true;}
	else
		{d.gI("MB3").disabled=false;}
	if (d.gI("MAJ1C").checked==false)
		{d.gI("MAJ1").disabled=true;}
	else
		{d.gI("MAJ1").disabled=false;}
	if (d.gI("MAJ2C").checked==false)
		{d.gI("MAJ2").disabled=true;}
	else
		{d.gI("MAJ2").disabled=false;}
	if (d.gI("MRGC").checked==false)
		{d.gI("MRG").disabled=true;}
	else
		{d.gI("MRG").disabled=false;}
	if (d.gI("MT1C").checked==false)
		{d.gI("MT1").disabled=true;}
	else
		{d.gI("MT1").disabled=false;}
	if (d.gI("MT2C").checked==false)
		{d.gI("MT2").disabled=true;}
	else
		{d.gI("MT2").disabled=false;}
	if (d.gI("PAFC").checked==false)
		{d.gI("PAF").disabled=true;}
	else
		{d.gI("PAF").disabled=false;}
	if (d.gI("PRPC").checked==false)
		{d.gI("PRP").disabled=true;}
	else
		{d.gI("PRP").disabled=false;}
	if (d.gI("QUEEC").checked==false)
		{d.gI("QUEE").disabled=true;}
	else
		{d.gI("QUEE").disabled=false;}
	if (d.gI("RGE1C").checked==false)
		{d.gI("RGE1").disabled=true;}
	else
		{d.gI("RGE1").disabled=false;}
	if (d.gI("RGE2C").checked==false)
		{d.gI("RGE2").disabled=true;}
	else
		{d.gI("RGE2").disabled=false;}
	if (d.gI("RPFC").checked==false)
		{d.gI("RPF").disabled=true;}
	else
		{d.gI("RPF").disabled=false}
	if (d.gI("RPD1C").checked==false)
		{d.gI("RPD1").disabled=true;}
	else
		{d.gI("RPD1").disabled=false;}
	if (d.gI("RPD2C").checked==false)
		{d.gI("RPD2").disabled=true;}
	else
		{d.gI("RPD2").disabled=false;}
	if (d.gI("RGNC").checked==false)
		{d.gI("RGN").disabled=true;}
	else
		{d.gI("RGN").disabled=false;}
	if (d.gI("SERC").checked==false)
		{d.gI("SER").disabled=true;}
	else
		{d.gI("SER").disabled=false;}
	if (d.gI("BLKSC").checked==false)
		{d.gI("BLKS").disabled=true;
		d.gI("SHD1C").disabled=false;
		d.gI("SHD2C").disabled=false;}
	else if (d.gI("BLKSC").checked==true)
		{d.gI("BLKS").disabled=false;
		d.gI("SHD1C").disabled=true;
		d.gI("SHD1C").checked=false;
		d.gI("SHD2C").disabled=true;
		d.gI("SHD2C").checked=false;}
	if (d.gI("SHD1C").checked==false)
		{d.gI("SHD1").disabled=true;}
	else
		{d.gI("SHD1").disabled=false;}
	if (d.gI("SHD2C").checked==false)
		{d.gI("SHD2").disabled=true;}
	else
		{d.gI("SHD2").disabled=false;}
	if (d.gI("SKNC").checked==false)
		{d.gI("SKN").disabled=true;}
	else
		{d.gI("SKN").disabled=false;}
	if (d.gI("SNIC").checked==false)
		{d.gI("SNI").disabled=true;}
	else
		{d.gI("SNI").disabled=false;}
	if (d.gI("SOEC").checked==false)
		{d.gI("SOEA").disabled=true;}
	else
		{d.gI("SOEA").disabled=false;}
	if (d.gI("SOHC").checked==false)
		{d.gI("SOH").disabled=true;}
	else
		{d.gI("SOH").disabled=false;}
	if (d.gI("SOLC").checked==false)
		{d.gI("SOL").disabled=true;}
	else
		{d.gI("SOL").disabled=false;}
	if (d.gI("SOMC").checked==false)
		{d.gI("SOM").disabled=true;}
	else
		{d.gI("SOM").disabled=false;}
	if (d.gI("SOVC").checked==false)
		{d.gI("SOV").disabled=true;}
	else
		{d.gI("SOV").disabled=false;}
	if (d.gI("VITC").checked==false)
		{d.gI("VIT").disabled=true;}
	else
		{d.gI("VIT").disabled=false;}
	if (d.gI("WARDC").checked==false)
		{d.gI("WARD").disabled=true;}
	else
		{d.gI("WARD").disabled=false;}
	if (d.gI("SWATC").checked==false)
		{d.gI("SWAT").disabled=true;}
	else
		{d.gI("SWAT").disabled=false;}
	if (d.gI("SWIC").checked==false)
		{d.gI("SWI").disabled=true;}
	else
		{d.gI("SWI").disabled=false;}
	if (d.gI("SAGC").checked==false)
		{d.gI("SAG").disabled=true;}
	else
		{d.gI("SAG").disabled=false;}
	if (d.gI("STLC").checked==false)
		{d.gI("STL").disabled=true;}
	else
		{d.gI("STL").disabled=false;}
	if (d.gI("TFC").checked==false)
		{d.gI("TF").disabled=true;}
	else
		{d.gI("TF").disabled=false;}
	if (d.gI("TTM1C").checked==false)
		{d.gI("TTM1").disabled=true;}
	else
		{d.gI("TTM1").disabled=false;}
	if (d.gI("TTM2C").checked==false)
		{d.gI("TTM2").disabled=true;}
	else
		{d.gI("TTM2").disabled=false;}
	if (d.gI("UD1C").checked==false)
		{d.gI("UD1").disabled=true;}
	else
		{d.gI("UD1").disabled=false;}
	if (d.gI("UD2C").checked==false)
		{d.gI("UD2").disabled=true;}
	else
		{d.gI("UD2").disabled=false;}
	if (d.gI("UEC").checked==false)
		{d.gI("UE").disabled=true;}
	else
		{d.gI("UE").disabled=false;}
	if (d.gI("VRAC").checked==false)
		{d.gI("VRA").disabled=true;}
	else
		{d.gI("VRA").disabled=false;}
	if (d.gI("WCY1C").checked==false)
		{d.gI("WCY1").disabled=true;}
	else
		{d.gI("WCY1").disabled=false;}
	if (d.gI("WCY2C").checked==false)
		{d.gI("WCY2").disabled=true;}
	else
		{d.gI("WCY2").disabled=false;}
	if (d.gI("BWWC").checked==false)
		{d.gI("BWW").disabled=true;
		d.gI("WWC").disabled=false;}
	else
		{d.gI("BWW").disabled=false;
		d.gI("WWC").disabled=true;
		d.gI("WWC").checked=false;}
	if (d.gI("WWC").checked==false)
		{d.gI("WW").disabled=true;}
	else
		{d.gI("WW").disabled=false;}
	if (d.gI("ZLTC").checked==false)
		{d.gI("ZLT").disabled=true;}
	else
		{d.gI("ZLT").disabled=false;}
}
function toggles() {
	if (d.gI("ACCTC").checked==false)
		{d.gI("ACCT").disabled=true;}
	else
		{d.gI("ACCT").disabled=false;}
	if (d.gI("ASTC").checked==false)
		{d.gI("AST").disabled=true;}
	else
		{d.gI("AST").disabled=false;}
	if (d.gI("ARAC").checked==false)
		{d.gI("ARA").disabled=true;}
	else
		{d.gI("ARA").disabled=false;}
	if (d.gI("ARPC").checked==false)
		{d.gI("ARP").disabled=true;}
	else
		{d.gI("ARP").disabled=false;}
	if (d.gI("ARWC").checked==false)
		{d.gI("ARW").disabled=true;}
	else
		{d.gI("ARW").disabled=false;}
	if (d.gI("FFYC").checked==false)
		{d.gI("FFY").disabled=true;}
	else
		{d.gI("FFY").disabled=false;}
	if (d.gI("GSC").checked==false)
		{d.gI("GS").disabled=true;}
	else
		{d.gI("GS").disabled=false;}
	if (d.gI("PRYC").checked==false)
		{d.gI("PRY").disabled=true;}
	else
		{d.gI("PRY").disabled=false;}
	if (d.gI("PACC").checked==false)
		{d.gI("PAC").disabled=true;}
	else
		{d.gI("PAC").disabled=false;}
	if (d.gI("RIPC").checked==false)
		{d.gI("RIP").disabled=true;}
	else
		{d.gI("RIP").disabled=false;}
	if (d.gI("SFC").checked==false)
		{d.gI("SF").disabled=true;}
	else
		{d.gI("SF").disabled=false;}
	if (d.gI("SMC").checked==false)
		{d.gI("SM").disabled=true;}
	else
		{d.gI("SM").disabled=false;}
	if (d.gI("SL1C").checked==false)
		{d.gI("SL1").disabled=true;}
	else
		{d.gI("SL1").disabled=false;}
	if (d.gI("SL2C").checked==false)
		{d.gI("SL2").disabled=true;}
	else
		{d.gI("SL2").disabled=false;}
	if (d.gI("SL3C").checked==false)
		{d.gI("SL3").disabled=true;}
	else
		{d.gI("SL3").disabled=false;}
	if (d.gI("SGC").checked==false)
		{d.gI("SG").disabled=true;}
	else
		{d.gI("SG").disabled=false;}
	if (d.gI("VSC").checked==false)
		{d.gI("VS").disabled=true;}
	else
		{d.gI("VS").disabled=false;}
}
function debuffs() {
	if (d.gI("DEAC").checked==false)
		{d.gI("DEA").disabled=true;}
	else
		{d.gI("DEA").disabled=false;}
	if (d.gI("ARNC").checked==false)
		{d.gI("ARN").disabled=true;}
	else
		{d.gI("ARN").disabled=false;}
	if (d.gI("ACC").checked==false)
		{d.gI("ARCR").disabled=true;}
	else
		{d.gI("ARCR").disabled=false;}
	if (d.gI("DENC").checked==false)
		{d.gI("DEN").disabled=true;}
	else
		{d.gI("DEN").disabled=false;}
	if (d.gI("DECC").checked==false)
		{d.gI("DEC").disabled=true;}
	else
		{d.gI("DEC").disabled=false;}
	if (d.gI("GLMC").checked==false)
		{d.gI("GLM").disabled=true;}
	else
		{d.gI("GLM").disabled=false;}
	if (d.gI("CBYC").checked==false)
		{d.gI("CBY").disabled=true;}
	else
		{d.gI("CBY").disabled=false;}
	if (d.gI("CDMC").checked==false)
		{d.gI("CDM").disabled=true;}
	else
		{d.gI("CDM").disabled=false;}
	if (d.gI("CSHC").checked==false)
		{d.gI("CSH").disabled=true;}
	else
		{d.gI("CSH").disabled=false;}
	if (d.gI("DVC").checked==false)
		{d.gI("DV").disabled=true;}
	else
		{d.gI("DV").disabled=false;}
	if (d.gI("DBDC").checked==false)
		{d.gI("DBD").disabled=true;}
	else
		{d.gI("DBD").disabled=false;}
	if (d.gI("PSYC").checked==false)
		{d.gI("PSY").disabled=true;}
	else
		{d.gI("PSY").disabled=false;}
	if (d.gI("TRBC").checked==false)
		{d.gI("TRB").disabled=true;}
	else
		{d.gI("TRB").disabled=false;}
	if (d.gI("FVC").checked==false)
		{d.gI("FV").disabled=true;}
	else
		{d.gI("FV").disabled=false;}
	if (d.gI("HEEC").checked==false)
		{d.gI("HEE").disabled=true;}
	else
		{d.gI("HEE").disabled=false;}
	if (d.gI("HEDC").checked==false)
		{d.gI("HED").disabled=true;}
	else
		{d.gI("HED").disabled=false;}
	if (d.gI("CHOLC").checked==false)
		{d.gI("CHOL").disabled=true;}
	else
		{d.gI("CHOL").disabled=false;}
	if (d.gI("MALC").checked==false)
		{d.gI("MAL").disabled=true;}
	else
		{d.gI("MAL").disabled=false;}
	if (d.gI("IVC").checked==false)
		{d.gI("IV").disabled=true;}
	else
		{d.gI("IV").disabled=false;}
	if (d.gI("LVORC").checked==false)
		{d.gI("LVOR").disabled=true;}
	else
		{d.gI("LVOR").disabled=false;}
	if (d.gI("DEPC").checked==false)
		{d.gI("DEP").disabled=true;}
	else
		{d.gI("DEP").disabled=false;}
	if (d.gI("DEDC").checked==false)
		{d.gI("DED").disabled=true;}
	else
		{d.gI("DED").disabled=false;}
	if (d.gI("SBBC").checked==false)
		{d.gI("SBB").disabled=true;}
	else
		{d.gI("SBB").disabled=false;}
	if (d.gI("DERC").checked==false)
		{d.gI("DER").disabled=true;}
	else
		{d.gI("DER").disabled=false;}
	if (d.gI("SCRC").checked==false)
		{d.gI("SCR").disabled=true;}
	else
		{d.gI("SCR").disabled=false;}
	if (d.gI("SBC").checked==false)
		{d.gI("SB").disabled=true;}
	else
		{d.gI("SB").disabled=false;}
	if (d.gI("DESC").checked==false)
		{d.gI("DES").disabled=true;}
	else
		{d.gI("DES").disabled=false;}
	if (d.gI("WVC").checked==false)
		{d.gI("WV").disabled=true;}
	else
		{d.gI("WV").disabled=false;}
	if (d.gI("JDGC").checked==false)
		{d.gI("JDG").disabled=true;}
	else
		{d.gI("JDG").disabled=false;}
}
function edebuffs() {
	if (d.gI("EDEPC").checked==false)
		{d.gI("EDEP").disabled=true;}
	else
		{d.gI("EDEP").disabled=false;}
	if (d.gI("EDEDC").checked==false)
		{d.gI("EDED").disabled=true;}
	else
		{d.gI("EDED").disabled=false;}
	if (d.gI("EBLKSC").checked==false)
		{d.gI("EBLKS").disabled=true;}
	else
		{d.gI("EBLKS").disabled=false;}
	if (d.gI("EDEAC").checked==false)
		{d.gI("EDEA").disabled=true;}
	else
		{d.gI("EDEA").disabled=false;}
	if (d.gI("ESBBC").checked==false)
		{d.gI("ESBB").disabled=true;}
	else
		{d.gI("ESBB").disabled=false;}
	if (d.gI("ETRBC").checked==false)
		{d.gI("ETRB").disabled=true;}
	else
		{d.gI("ETRB").disabled=false;}
	if (d.gI("EDENC").checked==false)
		{d.gI("EDEN").disabled=true;}
	else
		{d.gI("EDEN").disabled=false;}
	if (d.gI("EJDGC").checked==false)
		{d.gI("EJDG").disabled=true;}
	else
		{d.gI("EJDG").disabled=false;}
	if (d.gI("EARCRC").checked==false)
		{d.gI("EARCR").disabled=true;}
	else
		{d.gI("EARCR").disabled=false;}
	if (d.gI("ECBYC").checked==false)
		{d.gI("ECBY").disabled=true;}
	else
		{d.gI("ECBY").disabled=false;}
	if (d.gI("ECDMC").checked==false)
		{d.gI("ECDM").disabled=true;}
	else
		{d.gI("ECDM").disabled=false;}
	if (d.gI("ECSHC").checked==false)
		{d.gI("ECSH").disabled=true;}
	else
		{d.gI("ECSH").disabled=false;}
	if (d.gI("EDBDC").checked==false)
		{d.gI("EDBD").disabled=true;}
	else
		{d.gI("EDBD").disabled=false;}
	if (d.gI("EFVC").checked==false)
		{d.gI("EFV").disabled=true;}
	else
		{d.gI("EFV").disabled=false;}
	if (d.gI("EHEEC").checked==false)
		{d.gI("EHEE").disabled=true;}
	else
		{d.gI("EHEE").disabled=false;}
	if (d.gI("ECHOLC").checked==false)
		{d.gI("ECHOL").disabled=true;}
	else
		{d.gI("ECHOL").disabled=false;}
	if (d.gI("EIVC").checked==false)
		{d.gI("EIV").disabled=true;}
	else
		{d.gI("EIV").disabled=false;}
	if (d.gI("ELVORC").checked==false)
		{d.gI("ELVOR").disabled=true;}
	else
		{d.gI("ELVOR").disabled=false;}
	if (d.gI("EPSYC").checked==false)
		{d.gI("EPSY").disabled=true;}
	else
		{d.gI("EPSY").disabled=false;}
	if (d.gI("ESBC").checked==false)
		{d.gI("ESB").disabled=true;}
	else
		{d.gI("ESB").disabled=false;}
	if (d.gI("EDERC").checked==false)
		{d.gI("EDER").disabled=true;}
	else
		{d.gI("EDER").disabled=false;}
	if (d.gI("EWVC").checked==false)
		{d.gI("EWV").disabled=true;}
	else
		{d.gI("EWV").disabled=false;}
}
</script>

<script>
var c_slot = 1;
var c_slot2 = 1;
var cookieName = 'calc';
var cookieName2 = 'buffs';
var cookie1=new Array("LV","job","ts1n","ts1f","ts1h","ts2n","ts2f","ts2h","ts3n","ts3f","ts3h","MVM","WPNE","WPNG","WPNS","WPNA","WPNB","WPNC","WPND","WPNN","WPNH","SHDE","SHDG","SHDS","SHDA","SHDB","SHDC","SHDD","SHDN","HLME","HLMG","HLMS","HLMA","HLMB","HLMC","HLMD","HLMN","UPRE","UPRG","UPRS","UPRA","UPRB","UPRC","UPRD","UPRN","LWRE","LWRG","LWRS","LWRA","LWRB","LWRC","LWRD","LWRN","GLVE","GLVG","GLVS","GLVA","GLVB","GLVC","GLVD","GLVN","BOOE","BOOG","BOOS","BOOA","BOOB","BOOC","BOOD","BOON","NCKE","NCKG","NCKS","NCKA","NCKB","NCKC","NCKD","NCKN","EAR1E","EAR1G","EAR1S","EAR1A","EAR1B","EAR1C","EAR1D","EAR1N","EAR2E","EAR2G","EAR2S","EAR2A","EAR2B","EAR2C","EAR2D","EAR2N","RNG1E","RNG1G","RNG1S","RNG1A","RNG1B","RNG1C","RNG1D","RNG1N","RNG2E","RNG2G","RNG2S","RNG2A","RNG2B","RNG2C","RNG2D","RNG2N","WMF","WMM1","WMM2","WMM3","WSBM1","WSBM2","BLM1","BLM2","FIM1","FIM2","KSBM1","KSBM2","DGM1","DGM2","PLM1","PLM2","BOWM1","BOWM2","DUALM","THM1","THM2","AMM","AMF","HMK1","HMK2","HMW1","HMW2","HMO1","HMO2","HMO3","HMP","LMW1","LMW2","LMR1","LMR2","LMO1","LMO2","LMO3","LMH1","LMH2","LMS","RMN1","RMN2","RMH1","RMH2","RMO1","RMO2","RMO3","MR1","MR2","AM1","AM2","AM3","BHP1","BHP2","BHP3","QS2","FFO","CLM","BMP1","BMP2","BEV2","FFR","SDM1","SDM2","WTL2","WTL3","AGM2","CRC2","FSC2","FHR1","FHR2","FCM2","BOA2","FHR4","ESP2","FMR1","FMR2","VTF1","VTF2","CRP1","CRP2","ACRM2","QOH","CLHP","CLCP","CLPA","CLPD","CLMD","CLGD","CLSP","SOS","BTB1","BTB2","BTB3","BTS","SAG","MT1","MT2","GRM","FZY2","WCY2","RGE2","EMP","SHD1","SHD2","GRS","GTS2","MAJ2","MB1","MB2","MB3","GUID","HE","AGI","UE","FCS","WW","DAS2","HST","RPD2","DUEL","TF","ACU","DEW","VRA","BSD","ADB","RGN","SER","SKN","MRG","ZERK","QUEE","PRP","DCW","UD2","TTM1","TTM2","SNI","FA","STL","ZLT","DEA1","DEA2","RPF","DEY","FAW","FPW","FTH","HER","ANI","SL1","SL2","SL3","GS","SG","PAC","SF","VS","DEN","DED","BLKS","DEA","SBB","TRB","DES","BWW","DEP","JDG","CSH","DBD","CHOL","MAL","PSY","WAU1","WAU2","WAU3","WAU4","WAU5","AUG1","AUG2","AUG3","AUG4","AUG5","RES2","RES3","RES4","RES7")
var cookie2=new Array("TTT2C","TTT3C","SS","TTT1C","ATPC","WMFC","WMM1C","WMM2C","WMM3C","WSBM1C","WSBM2C","BLM1C","BLM2C","FIM1C","FIM2C","KSBM1C","KSBM2C","DGM1C","DGM2C","PLM1C","PLM2C","BOWM1C","BOWM2C","DUALMC","THM1C","THM2C","AMMC","AMFC","HMK1C","HMK2C","HMW1C","HMW2C","HMO1C","HMO2C","HMO3C","HMPC","LMW1C","LMW2C","LMR1C","LMR2C","LMO1C","LMO2C","LMO3C","LMH1C","LMH2C","LMSC","RMN1C","RMN2C","RMH1C","RMH2C","RMO1C","RMO2C","RMO3C","MR1C","MR2C","AM1C","AM2C","AM3C","BHP1C","BHP2C","BHP3C","QS1C","QS2C","FFOC","CLMC","BMP1C","BMP2C","BEV1C","BEV2C","FFRC","SDM1C","SDM2C","WTL1C","WTL2C","WTL3C","AGM1C","AGM2C","CRC1C","CRC2C","FSC1C","FSC2C","FCM1C","FCM2C","FHR1C","FHR2C","SHSC","BOA1C","BOA2C","FHR3C","FHR4C","ESP1C","ESP2C","FMR1C","FMR2C","AGSC","VTF1C","VTF2C","CRP1C","CRP2C","ACRM1C","ACRM2C","QOHC","CLHPC","CLCPC","CLPAC","CLPDC","CLMDC","CLGDC","CLSPC","SOSC","BTB1C","BTB2C","BTB3C","VITC","BTSC","SAGC","MT1C","MT2C","DWAC","GRMC","FZY1C","FZY2C","WCY1C","WCY2C","RGE1C","RGE2C","EMPC","DOMYC","SHD1C","SHD2C","SOEC","GRSC","GTS1C","GTS2C","MAJ1C","MAJ2C","MB1C","MB2C","MB3C","WARDC","GUIDC","DOIC","HEC","AGIC","SWATC","UEC","EVSC","FCSC","SOHC","WWC","SWIC","DSHC","DAS1C","DAS2C","BLDC","HSTC","DFUC","RPD1C","RPD2C","DUELC","TFC","ACUC","DCONC","DEWC","DOFC","VRAC","DOVC","BSDC","ADBC","RGNC","SOLC","SOMC","SERC","SKNC","SOVC","MRGC","ZERKC","QUEEC","PRPC","DCWC","UD1C","UD2C","TTM1C","TTM2C","SNIC","FAC","STLC","ZLTC","DEA1C","DEA2C","RPFC","DEYC","FAWC","FPWC","FTHC","BOPC","HERC","ANIC","SL1C","SL2C","SL3C","ARPC","ASTC","GSC","SGC","ACCTC","SMC","FFYC","ARAC","ARWC","PRYC","RIPC","PACC","SFC","VSC","DENC","DEDC","BLKSC","GLMC","DEAC","SBBC","TRBC","DESC","BWWC","DEPC","DECC","JDGC","SCRC","ARNC","ACC","CBYC","CDMC","CSHC","DBDC","DVC","FVC","HEDC","HEEC","CHOLC","MALC","IVC","LVORC","PSYC","SBC","DERC","WVC","ARCC","KNTC","MOCC","ASSC","CLAGC","CLEMC","ARLC","NECC","PAFC","CLHRC","SMLC","INVC")

var PROFESSIONS=new Array(0,"AW","AR","AS","BI","BD","BH","CL","DA","DF","DM","DW","DE","DO","ELS","EE","EF","EK","EM","EO","EFS","EW","GL","HE","HF","HK","HM","MO","NE","OF","OM","OR","OS","OL","PA","PK","PR","PS","PW","PP","RO","SC","SHE","SK","SO","SR","SOR","SPH","SPS","SW","TK","TH","TY","WC","WL","WD","WA","WS","WI")
var MOVEMODE=new Array(0,1.1,1.5,0.7,1)
var GRADE=new Array(0,"S","A","B","C","D","N","H")

//Base MP
var FIGHTER1MP=new Array(0,30,35.46,40.98,46.56,52.2,57.9,63.66,69.48,75.36,81.3,87.3,93.36,99.48,105.66,111.9,118.2,124.56,130.98,137.46,144,150.6,157.26,163.98,170.76,177.6,184.5,191.46,198.48,205.56,212.7,219.9,227.16,234.48,241.86,249.3,256.8,264.36,271.98,279.66,287.4,295.2,303.06,310.98,318.96,327,335.1,343.26,351.48,359.76,368.1,376.5,384.96,393.48,402.06,410.7,419.4,428.16,436.98,445.86,454.8,463.8,472.86,481.98,491.16,500.4,509.7,519.06,528.48,537.96,547.5,557.1,566.76,576.48,586.26,596.1,606,615.96,625.98,636.06,646.2)
var FIGHTER2MP=new Array(0,30,35.46,40.98,46.56,52.2,57.9,63.66,69.48,75.36,81.3,87.3,93.36,99.48,105.66,111.9,118.2,124.56,130.98,137.46,144,153.9,163.89,173.97,184.14,194.4,204.75,215.19,225.72,236.34,247.05,257.85,268.74,279.72,290.79,301.95,313.20,324.54,335.97,347.49,359.1,370.8,382.59,394.47,406.44,418.5,430.65,442.89,455.22,467.64,480.15,492.75,505.44,518.22,531.09,544.05,557.1,570.24,583.47,596.79,610.2,623.7,637.29,650.97,664.74,678.6,692.55,706.59,720.72,734.94,749.25,763.65,778.14,792.72,807.39,822.15,837,851.94,866.97,882.09,897.3)
var FIGHTER3MP=new Array(0,30,35.46,40.98,46.56,52.2,57.9,63.66,69.48,75.36,81.3,87.3,93.36,99.48,105.66,111.9,118.2,124.56,130.98,137.46,144,153.9,163.89,173.97,184.14,194.4,204.75,215.19,225.72,236.34,247.05,257.85,268.74,279.72,290.79,301.95,313.20,324.54,335.97,347.49,359.1,378.6,398.25,418.05,438,458.1,478.35,498.75,519.3,540,560.85,581.85,603,624,645.75,667.35,689.1,711,733.05,755.25,777.6,800.1,822.75,845.55,868.5,891.6,914.85,938.25,961.8,985.5,1009.35,1033.35,1057.5,1081.8,1106.25,1130.85,1155.6,1180.5,1205.55,1230.75,1256.1)
var MYSTIC1MP=new Array(0,40,47.28,54.64,62.08,69.6,77.2,84.88,92.64,100.48,108.4,116.4,124.48,132.64,140.88,149.2,157.6,166.08,174.64,183.28,192,200.8,209.68,218.64,227.68,236.8,246,255.28,264.64,274.08,283.6,293.2,302.88,312.64,322.48,332.4,342.4,352.48,362.64,372.88,383.2,393.6,404.08,414.64,425.28,436,446.8,457.68,468.64,479.68,490.8,502,513.28,524.64,536.08,547.6,559.2,570.88,582.64,594.48,606.4,618.4,630.48,642.64,654.88,667.2,679.6,692.08,704.64,717.28,730,742.8,755.68,768.64,781.68,794.8,808,821.28,834.64,848.08,861.6)
var MYSTIC2MP=new Array(0,40,47.28,54.64,62.08,69.6,77.2,84.88,92.64,100.48,108.4,116.4,124.48,132.64,140.88,149.2,157.6,166.08,174.64,183.28,192,205.2,218.52,231.96,245.52,259.2,273,286.92,300.96,315.12,329.4,343.8,358.32,372.96,387.72,402.6,417.6,432.72,447.96,463.32,478.8,494.4,510.12,525.96,541.92,558,574.2,590.52,606.96,623.52,640.2,657,673.92,690.96,708.12,725.4,742.8,760.32,777.96,795.72,813.6,831.6,849.72,867.96,886.32,904.8,923.4,942.12,960.96,979.92,999,1018.2,1037.52,1056.96,1076.52,1096.2,1116,1135.92,1155.96,1176.12,1196.4)
var MYSTIC3MP=new Array(0,40,47.28,54.64,62.08,69.6,77.2,84.88,92.64,100.48,108.4,116.4,124.48,132.64,140.88,149.2,157.6,166.08,174.64,183.28,192,205.2,218.52,231.96,245.52,259.2,273,286.92,300.96,315.12,329.4,343.8,358.32,372.96,387.72,402.6,417.6,432.72,447.96,463.32,478.8,504.8,531,557.4,584,610.8,637.8,665,692.4,720,747.8,775.8,804,832.4,861,889.8,918.8,948,977.4,1007,1036.8,1066.8,1097,1127.4,1158,1188.8,1219.8,1251,1282.4,1314,1345.8,1377.8,1410,1442.4,1475,1507.8,1540.8,1574,1607.4,1641,1674.8)

//Tattoos (STR,DEX,CON,INT,WIT,MEN)
var STRTAT=new Array(0,0,0,0,-1,-2,-3,0,0,0,-2,-3,-4,0,0,0,-3,-4,-5,0,0,0,-4,-5,-6,0,0,0,-1,-2,-3,0,0,0,-2,-3,-4,0,0,0,-3,-4,-5,0,0,0,-4,-5,-6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
var DEXTAT=new Array(0,-1,-2,-3,0,0,0,-2,-3,-4,0,0,0,-3,-4,-5,0,0,0,-4,-5,-6,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-2,-3,0,0,0,-2,-3,-4,0,0,0,-3,-4,-5,0,0,0,-4,-5,-6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
var CONTAT=new Array(0,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,-1,-2,-3,0,0,0,-2,-3,-4,0,0,0,-3,-4,-5,0,0,0,-4,-5,-6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-2,-3,0,0,0,-2,-3,-4,0,0,0,-3,-4,-5,0,0,0,-4,-5,-6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
var INTTAT=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,-1,-2,-3,0,0,0,-2,-3,-4,0,0,0,-3,-4,-5,0,0,0,-4,-5,-6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-2,-3,0,0,0,-2,-3,-4,0,0,0,-3,-4,-5,0,0,0,-4,-5,-6,0,0,0)
var WITTAT=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-2,-3,0,0,0,-2,-3,-4,0,0,0,-3,-4,-5,0,0,0,-4,-5,-6,0,0,0,-1,-2,-3,0,0,0,-2,-3,-4,0,0,0,-3,-4,-5,0,0,0,-4,-5,-6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4)
var MENTAT=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-2,-3,0,0,0,-2,-3,-4,0,0,0,-3,-4,-5,0,0,0,-4,-5,-6,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,-2,-3,0,0,0,-2,-3,-4,0,0,0,-3,-4,-5,0,0,0,-4,-5,-6)

//Stat Modifiers
var CONMODIFIER=new Array(0,0.46,0.47,0.48,0.50,0.51,0.53,0.54,0.56,0.58,0.59,0.61,0.63,0.65,0.67,0.69,0.71,0.73,0.75,0.77,0.80,0.82,0.85,0.87,0.90,0.93,0.95,0.98,1.01,1.04,1.07,1.10,1.14,1.17,1.21,1.24,1.28,1.32,1.36,1.40,1.44,1.48,1.53,1.58,1.62,1.67,1.72,1.77,1.83,1.88,1.94,2.00,2.06,2.12,2.18,2.25,2.31,2.38,2.45,2.53,2.60)
var DEXMODIFIER=new Array(0,0.85,0.86,0.86,0.87,0.88,0.89,0.90,0.90,0.91,0.92,0.93,0.94,0.94,0.95,0.96,0.97,0.98,0.99,1.00,1.01,1.01,1.02,1.03,1.04,1.05,1.06,1.07,1.08,1.09,1.10,1.11,1.12,1.13,1.14,1.15,1.16,1.17,1.18,1.19,1.20,1.21,1.22,1.24,1.25,1.26,1.27,1.28,1.29,1.30,1.32)
var INTMODIFIER=new Array(0,0.55,0.56,0.57,0.58,0.59,0.61,0.62,0.63,0.64,0.65,0.67,0.68,0.69,0.71,0.72,0.74,0.75,0.77,0.78,0.80,0.81,0.83,0.85,0.86,0.88,0.90,0.92,0.94,0.95,0.97,0.99,1.01,1.03,1.05,1.07,1.10,1.12,1.14,1.16,1.19,1.21,1.23,1.26,1.28,1.31,1.34,1.36,1.39,1.42,1.45,1.47,1.50,1.53,1.57,1.60,1.63,1.66,1.69,1.73,1.76)
var MENMODIFIER=new Array(0,1.01,1.02,1.03,1.04,1.05,1.06,1.07,1.08,1.09,1.11,1.12,1.13,1.14,1.15,1.16,1.17,1.19,1.20,1.21,1.22,1.23,1.25,1.26,1.27,1.28,1.30,1.31,1.32,1.34,1.35,1.36,1.38,1.39,1.40,1.42,1.43,1.45,1.46,1.48,1.49,1.50,1.52,1.53,1.55,1.57,1.58,1.60,1.61,1.63,1.65)
var STRMODIFIER=new Array(0,0.30,0.31,0.32,0.34,0.35,0.36,0.37,0.39,0.40,0.42,0.43,0.45,0.46,0.48,0.50,0.51,0.53,0.55,0.57,0.59,0.61,0.63,0.66,0.68,0.71,0.73,0.76,0.78,0.81,0.84,0.87,0.90,0.94,0.97,1.01,1.04,1.08,1.12,1.16,1.20,1.24,1.29,1.33,1.38,1.43,1.48,1.54,1.59,1.65,1.71,1.77,1.83,1.90,1.97,2.04,2.11,2.19,2.27,2.35,2.43)
var WITMODIFIER=new Array(0,0.40,0.42,0.44,0.46,0.48,0.51,0.53,0.56,0.58,0.61,0.64,0.68,0.72,0.75,0.78,0.82,0.86,0.91,0.95,1.00,1.05,1.10,1.16,1.22,1.28,1.34,1.41,1.48,1.55,1.63,1.71)

//Weapon Mastery
var WMF=new Array(0,2,3,4)
var WMMPATK=new Array(0,1.5,2.8,4.5,5.7,6.7,8.3,9.5,11.6,13.3,16,17,18.1,20.4,21.6,22.8,25.5,26.9,28.3,31.4,33,34.6,38,39.8,41.7,43.5,45.4,47.4,49.4,51.4,53.5,55.6,57.7,59.8,62,64.1,66.3,68.5,70.7,72.9,75.1,77.2,79.4)
var WMMMATK=new Array(0,1.9,3.5,5.7,7.2,8.3,10.3,11.9,14.6,16.6,20,21.3,22.6,25.4,26.9,28.5,31.8,33.8,35.4,39.2,41.2,43.2,47.5,49.8,52.1,54.4,56.8,59.2,61.7,64.3,66.8,69.4,72.1,74.8,77.4,80.2,82.9,85.6,88.4,91.1,93.8,96.5,99.3)
var MTYPE1=new Array(0,4.5,7.3,8.9,10.7,12.8,15.1,17.7,20.5,23.7,25.4,27.1,29,30.9,32.9,35,37.1,39.4,41.7,44.1,46.6,49.2,51.9,54.6,57.5,60.4,63.3,66.4,69.5,72.7,76,79.3,82.7,86.1,89.6,93.1,96.6,100.2,103.8,107.5,111.1,114.8,118.4,122.1,125.7,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3,129.3)
var KNIGHTMASTERY=new Array(0,1.5,3.1,4.1,5.2,6.5,7.9,9.4,11.1,13,14,15.1,16.2,17.3,18.5,19.8,21.1,22.4,23.8,25.3,26.8,28.3,29.9,31.6,33.3,35,36.8,38.6,40.5,42.4,44.4,46.4,48.4,50.4,52.5,54.6,56.8,58.9,61.1,63.3,65.5,67.6,69.8,72,74.2,76.4)
var BLUNTMSPEED=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,12,12,13,14,14,15,16,16,17,18,18,19,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
var BLUNTMCRITDAMAGE=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,113,127,141,155,169,183,196,210,224,238,252,266,279,293,307,321,335,349,362,376,390,404,418,432,445,459,473,487,501,515)
var BOWM=new Array(0,10.3,11.4,27.6,32.8,35.6,38.6,45.2,48.9,52.7,51.1,65.6,70.4,80.9,56.5,92.4,105.1,111.9,178.8,189.9,201.4,213.5,226,239.1,252.7,266.7,281.3,296.4,311.9,328,344.5,361.6,379.1,397,415.4,434.3,453.5,473.2,493.1,513.5,534.2,555.1,576.3,597.8,619.4,641.2,663.1,685,707.1,729.1,751,772.9,794.6)
var DAGGERM=new Array(0,3.6,6,7.4,9,10.8,12.8,15.1,17.6,20.3,21.8,23.4,25,26.6,28.4,30.2,32.1,34.1,36.1,38.2,40.4,42.7,45.0,47.4,49.9,52.4,55,57.7,60.4,63.2,66.1,69,71.9,74.9,78,81.1,84.2,87.3,90.5,93.7,96.8,100,103.2,106.4,109.6,112.8)
var DUALM=new Array(0,23.7,25.4,27.1,29,30.9,32.9,35,37.1,39.4,41.7,44.1,46.6,49.2,51.9,54.6,57.5,60.4,63.3,66.4,69.5,72.7,76,79.3,82.7,86.1,89.6,93.1,96.6,100.2,103.8,107.5,111.1,114.8,118.4,122.1,125.7,129.3)
var THM=new Array(0,4.5,7.3,10.7,15.1,20.5,27.1,32.9,39.4,46.6,54.6,63.3,72.7,79.3,86.1,93.1,100.2,107.5,114.8,122.1,129.3)

//Armor Mastery
var AMF=new Array(0,9,11,12,13,14)
var AMFEVA=new Array(0,0,0,0,3,3)
var AMM=new Array(0,6.7,8,9.2)
var HMK=new Array(0,17.7,19.1,20.5,23.5,25,26.7,30,31.8,33.6,37.4,39.3,41.3,45.6,47.7,50,54.6,57.1,59.5,62.1,64.6,67.3,70,72.7,75.5,78.4,81.3,84.3,87.3,90.4,93.5,96.7,99.9,103.2,106.5,109.9,113.3,116.8,120.3,123.8,127.4,131,134.7,138.4,142.1,145.8,149.6,153.4,157.2,161,164.9,168.7,172.6)
var HMW=new Array(0,1.9,3.3,4.8,6.4,8.1,8.9,9.8,11.7,12.7,13.7,15.8,16.9,18,20.4,21.6,22.8,24.1,25.4,26.7,28,29.4,30.8,32.2,33.7,35.2,36.7,38.2,39.8,41.4,43,44.6,46.3,48,49.7,51.4,53.2,55,56.7,58.6,60.4,62.2,64.1,66,67.8,69.7,71.6,73.6,75.5,77.4,79.3)
var HMO=new Array(0,11.6,13.3,15.2,17.2,19.5,21.1,23.7,25.6,28.7,30.8,34.3,35.5,36.7,39.3,40.6,41.9,44.7,46.1,47.6,50.6,52.1,53.7,56.9,58.6,60.2,61.9,63.6,65.3,67.1,68.9,70.7,72.5,74.3,76.1,78,79.9,81.7,83.6,85.5,87.5,89.4,91.3,93.3)
var HMP=new Array(0,14.8,15.6,16.5,18.3,19.2,20.2,22.1,23.1,24.1,26.2,27.3,28.4,30.6,31.8,33,34.1,35.3,36.5,37.8,39,40.3,41.5,42.8,44.1,45.4,46.7,48,49.4,50.7,52,53.4,54.7,56.1)
var LMW=new Array(0,4.2,5.3,6.5,7.7,9,9.9,10.8,12.7,13.7,14.8,16.9,18,19.1,21.5,22.7,24,25.3,26.6,27.9,29.3,30.7,32.1,33.6,35,36.5,38.1,39.6,41.2,42.8,44.5,46.1,47.8,49.5,51.3,53,54.8,56.6,58.4,60.2,62.1,64,65.8,67.7,69.7,71.6,73.5,75.5,77.4,79.4,81.3)
var LMWEVA=new Array(0,3,3,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6)
var LMR=new Array(0,1.3,2.2,3.2,4.2,5.3,6.8,8.4,10.1,11.9,13.7,15.7,16.7,17.8,18.8,19.9,21.1,22.2,23.4,24.5,25.8,27,28.2,29.5,30.8,32.1,33.5,34.8,36.2,37.6,39.1,40.5,42,43.5,44.9,46.5,48,49.5,51.1,52.7,54.2,55.8,57.4,59.1,60.7,62.3,63.9,65.6)
var LMREVA=new Array(0,4,4,5,5,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7)
var LMO=new Array(0,12.6,14.5,17.5,19.3,21.2,23.2,25.5,27,30.1,32.5,36.3,39.1,43.5,45,46.6,49.8,51.5,53.2,56.7,58.5,60.4,64.2,66.1,68.1,72.2,74.2,76.3,78.5,80.6,82.8,85.1,87.3,89.6,91.9,94.2,96.5,98.9,101.2,103.6,106,108.5,110.9,113.3,115.8,118.2)
var LMH=new Array(0,5.4,6.3,7.8,8.8,10.9,12.5,15,16.9,19.8,20.8,21.8,24,25.1,26.3,28.6,29.8,31,33.6,34.9,36.2,38.9,40.3,41.7,43.1,44.6,46,47.5,49,50.5,52.1,53.6,55.2,56.7,58.3,59.9,61.5,63.1,64.7,66.4,68,69.6)
var LMS=new Array(0,11.1,11.8,12.5,14,14.8,15.6,17.3,18.1,19,20.8,21.7,22.6,24.5,25.5,26.4,27.4,28.4,29.5,30.5,31.6,32.6,33.7,34.8,35.9,37,38.1,39.2,40.3,41.4,42.6,43.7,44.8,46)
var RMN=new Array(0,1.7,2.7,4.3,5.4,7.2,8.5,10.6,12.1,14.5,15.3,16.2,17.9,18.8,19.8,21.7,22.7,23.7,25.8,26.8,27.9,30.1,31.2,32.4,33.5,34.7,35.9,37.1,38.4,39.6,40.8,42.1,43.4,44.7,45.9,47.3,48.6,49.9,51.2,52.5,53.9,55.2)
var RMH=new Array(0,7.2,8.6,11,12.7,15.4,17.4,20.5,22.7,26.3,27.6,28.8,31.5,32.9,34.2,37.1,38.6,40.1,43.2,44.8,46.4,49.8,51.5,53.2,54.9,56.7,58.5,60.3,62.1,64,65.9,67.7,69.7,71.6,73.5,75.5,77.4,79.4,81.4,83.4,85.4,87.4)
var RMO=new Array(0,11.6,13.4,16.1,18.4,20.9,23.8,26.9,29.1,32.8,35.4,39.6,42.6,47.3,49,50.7,54.2,56.1,57.9,61.8,63.7,65.7,69.9,72,74.2,78.6,80.9,83.2,85.5,87.8,90.2,92.6,95.1,97.6,100.1,102.6,105.1,107.7,110.3,112.9,115.5,118.1,120.8,123.4,126.1,128.8)

//M.Def. Mastery
var MR=new Array(0,19,20,22,23,24,26,27,28,30,31,32,35,36,37,40,42,43,44,46,47,49,51,52,54,56,57,59,61,63,64,66,68,70,72,74,76,78,80,82,84,86,88,91,93,95,97,99,102,104,106,108)
var AM=new Array(0,10,12,14,16,18,20,23,25,28,30,34,36,40,42,43,46,47,49,52,54,56,59,61,63,66,68,70,72,74,76,78,80,82,84,86,88,91,93,95,97,99,102,104,106,108)

//Other Passives
var ACROBATICMOVE=new Array(0,4,5,6)
var AGILEMOVEMENT=new Array(0,2,3)
var AGILEMOVEMENTSPEED=new Array(0,5,10)
var BOOSTASPD=new Array(0,1.05,1.07,1.1)
var BOOSTEVASION=new Array(0,2,3,4)
var BOOSTHP=new Array(0,60,100,150,200,250,300,350,400,440,480,483,486,490,493,496,500,503,506,510,513,516,520,523,526,530,533,536,540,543,546,550,553,556,560,563,566,570,573,576,580,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480)
var BOOSTHPCP=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300)
var BOOSTMP=new Array(0,30,50,70,100,140,152,180,200)
var CRITICALCHANCE=new Array(0,0.2,0.3,0.4)
var FASTCAST=new Array(0,1.05,1.07,1.1)
var FINALFORTRESS=new Array(0,116.875,129,141.625,150.375,159.25,168.375,177.625,187,196.5,206.125,215.75)
var FINALFRENZY=new Array(0,32.9,39.4,46.6,54.6,63.3,72.7,79.3,86.1,93.1,100.2,107.5,114.8,122.1,129.3)
var QUICKSTEP=new Array(0,7,11)
var SEALOFSTRIFE=new Array(0,1.1,0.9)
var SHIELDMASTERY=new Array(0,1.5,1.7,1.85,2)

//Buffs
var ACUMEN=new Array(0,1.15,1.23,1.3,1.15,1.23,1.3,1.15,1.23,1.3,1.15,1.23,1.3,1.15,1.23,1.3)
var ADVANCEDBLOCK=new Array(0,1.6,1.8,2)
var AGILITY=new Array(0,2,3,4,2,3,4,2,3,4)
var ANGELICASPD=new Array(0,1.1,1.2,1.3)
var ANGELICCRIT=new Array(0,33,66,100)
var ANGELICCRITDMG=new Array(0,1.33,1.66,2)
var ANGELICSPEED=new Array(0,10,20,30)
var BLESSSHIELD=new Array(0,1.3,1.4,1.5,1.6,1.7,1.8,1.3,1.4,1.5,1.6,1.7,1.8)
var BTB=new Array(0,1.1,1.15,1.2,1.25,1.3,1.35,1.1,1.15,1.2,1.25,1.3,1.35,1.1,1.15,1.2,1.25,1.3,1.35)
var BTS=new Array(0,1.1,1.15,1.2,1.25,1.3,1.35)
var CATBUFFS=new Array(0,1.06,1.08,1.1,0.25,0.27,0.3)
var CATBUFFS2=new Array(0,0,0,0,1.2,1.22,1.25)
var CLANMULTIPLY=new Array(0,1.03,1.05,1.06)
var CLANMULTIPLYB=new Array(0,1.06,1.1,1.12)
var CLANADD=new Array(0,3,5,6)
var CLANADDB=new Array(0,1)
var CLEARMINDSTAND=new Array(0,2.6,3.2,3.5,4.1,4.7,4.9)
var CLEARMINDWALK=new Array(0,3.2,4,4.3,5.1,5.8,6.2)
var CRITICALPOWER=new Array(0,32,56,93,177,295,384)
var CURSEOFSHADE=new Array(0,0.94,0.92,0.9)
var DASH=new Array(0,1.4,1.66)
var DEACC=new Array(0,12,13)
var DEADEYEACC=new Array(0,1,1,2,2,2,3,3,3)
var DEADEYEPATK=new Array(0,124,134,145,155,166,177,188,199)
var DEASPD=new Array(0,0.83,0.8,0.77)
var DEATHWHISPER=new Array(0,1.3,1.325,1.35,1.3,1.325,1.35,1.3,1.325,1.35)
var DECREASEWEIGHT=new Array(0,3000,6000,9000)
var DEFLECTARROW=new Array(0,0.84,0.76,0.68,0.6)
var DEMONICBD=new Array(0,0.9,0.85,0.8,0.75,0.7)
var DUELIST=new Array(0,1.08,1.12)
var EMPOWER=new Array(0,1.55,1.65,1.75,1.75,1.75)
var ESPRITHP=new Array(0,2.5,3,3.5,4,4.5,5,5.5,6)
var ESPRITMP=new Array(0,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5)
var FASTHPRECOVERY=new Array(0,1.1,1.6,1.7,2.1,2.6,2.7,3.4,4)
var FASTMANARECOVERY=new Array(0,1.1,1.5,1.9,2.3,2.7,3.1,3.4)
var FOCUS=new Array(0,0.2,0.25,0.3,0.2,0.25,0.3,0.2,0.25,0.3)
var FOCUSATTACK=new Array(0,3,3,4,5)
var FOCUSMIND=new Array(0,1.1,1.5,1.9,2.3,2.7,3.1)
var FRENZY=new Array(0,2,2.4976,3.4638)
var FRENZY2HS=new Array(0,2.5026,2.9955,4.0195)
var FRENZY2HSACC=new Array(0,4,4,6)
var FRENZYOTHER=new Array(0,1.3,1.3,1.5)
var GREATERMIGHT=new Array(0,1.04,1.07,1.10,1.04,1.07,1.10)
var GREATERSHIELD=new Array(0,1.05,1.10,1.15,1.05,1.10,1.15)
var GUARDSTANCE=new Array(0,121.8,161.1,212.1,256.5,259.4,262.3,265.2,268.1,271,274,276.9,279.8,282.7,285.6,288.5,291.5,294.4,297.3,300.2,303.1,306,309,311.9,314.8,317.7,320.6,323.5,326.5,329.4,332.3,335.2,338.1,341,344)
var GUIDANCE=new Array(0,2,3,4,2,3,4,2,3,4)
var GUTS=new Array(0,2,2.5,3)
var HASTE=new Array(0,1.15,1.33,1.15,1.33,1.15,1.33,1.15,1.33)
var HAWKEYE=new Array(0,6,8,10)
var HEX=new Array(0,0.77)
var HSCHOLACC=new Array(0,3,6,8,10,6,0,0,0,0,0)
var HSCHOLEVA=new Array(0,0,-3,-3,-3,-5,-5,-5,-8,-9,-10)
var HSMALARIA=new Array(0,1.04,1.08,1.12,1.16,1.08,1,1,1,1,1)
var JUDGMENT=new Array(0,0.75,0.7,0.65)
var MAGICBARRIER=new Array(0,1.15,1.23,1.3,1.15,1.23,1.3,1.15,1.23,1.3,1.15,1.23,1.3,1.15,1.23,1.3)
var MAJESTY=new Array(0,1.07,1.11,1.15)
var MAJESTYEVA=new Array(0,-2,-4,-6)
var MANAREGEN=new Array(0,1.72,2.16,2.74,3.09)
var MIGHT=new Array(0,1.08,1.12,1.15,1.08,1.12,1.15,1.08,1.12,1.15,1.08,1.12,1.15)
var POLEACC=new Array(0,2,3,4)
var PROPHECYHP=new Array(0,1.2,1.2,1,1,1,1.2)
var PROPHECYMP=new Array(0,1,1,1,1,1.15,1)
var PROPHECYPATK=new Array(0,1.1,1.1,1,1,1,1)
var PROPHECYMATK=new Array(0,1.2,1,1.2,1,1.3,1.2)
var PROPHECYPDEF=new Array(0,1.2,1.2,1,1,1,1.2)
var PROPHECYMDEF=new Array(0,1.2,1,1.2,1,1.3,1.2)
var PROPHECYACC=new Array(0,4,4,0,4,0,4)
var PROPHECYEVA=new Array(0,0,0,0,4,0,0)
var PROPHECYSPEED=new Array(0,0.8,0.9,0.8,1,1,0.8)
var PROPHECYCRIT=new Array(0,0.2,0,0,0,0,0.2)
var PROPHECYCRITDMG=new Array(0,1.2,1,1,1,1,1.2)
var PROPHECYASPD=new Array(0,1.2,1.2,1,1.2,1,1.2)
var PROPHECYCAST=new Array(0,1.2,1,1.2,1,1.2,1.2)
var PROPHECYHPR=new Array(0,1,1.2,1,1,1,1)
var PROPHECYMPR=new Array(0,1,1,1.2,1,1.2,1)
var PROPHECYVR=new Array(0,0,0,0,0.05,0,0)
var PSYCHO=new Array(0,0.9,0.85,0.8,0.75,0.7)
var QUIVEROFHOLDING=new Array(0,1.3,1.4,1.5)
var RAGE=new Array(0,1.4522,1.5486)
var RAGE2HS=new Array(0,1.5536,1.64085)
var RAGE2HSACC=new Array(0,2,4)
var RAGEOTHER=new Array(0,1.2,1.2)
var RAPIDFIRE=new Array(0,62,67,73,78,83,89,94,100)
var RAPIDSHOT=new Array(0,1.08,1.12)
var REGENERATION=new Array(0,1.1,1.15,1.2)
var SANDBOMB=new Array(0,-6,-9,-12)
var SERAPHIM=new Array(0,1.3,1.32,1.35)
var SHIELD=new Array(0,1.08,1.12,1.15,1.08,1.12,1.15,1.08,1.12,1.15,1.08,1.12,1.15,1.08,1.12,1.15)
var SHIELDFORTRESS=new Array(0,446,469,491,514,537,560,565,569,573,577,582,586,590,594,599,603,607,611,616,620,624,628,632,637,641,645,649,654,658,662,666,671,675,679,683,688)
var SKIN=new Array(0,0.1,0.15,0.2,0.1,0.15,0.2,0.1,0.15,0.2,0.1,0.15,0.2)
var SLOW=new Array(0,0.7,0.55)
var SNIPE=new Array(0,124,134,145,0,166,177,188,199)
var SNIPEACC=new Array(0,1,3,4,0,5,5,6,6)
var SOULCRY=new Array(0,4.5,14,33.5,66.5,90.5,141.5,208.5,247,310,375.5)
var SOULGUARD=new Array(0,293.3,333.2,375.9,421.4,445.2,469.7,494.9,520.1,546,571.9,598.5,625.8,653.1)
var SOULOFSAG=new Array(0,1.1,1.15,1.2,1.25)
var STEALTH=new Array(0,0.55,0.7,0.85)
var STEALTHEVA=new Array(0,-12,-8,-4)
var THRILLFIGHT=new Array(0,1.05,1.1)
var TRIBUNAL=new Array (0,-0.3,-0.4,-0.5)
var UDPDEF=new Array(0,1800,3600,5400,3636,3672,3708,3744,3780,3816,3852,3888,3924,3960,3996,4032,4068,4104,4140,4176,4212,4248,4284,4320,4356,4392,4428,4464,4500,4536,4572,4608,4644,4680)
var UDMDEF=new Array(0,1350,2700,4050,2727,2754,2781,2808,2835,2862,2889,2916,2943,2970,2997,3024,3051,3078,3105,3132,3159,3186,3213,3240,3267,3294,3321,3348,3375,3402,3429,3456,3483,3510)
var UE=new Array(0,20,25)
var VAMPIRICRAGE=new Array(0,0.06,0.07,0.08,0.09,0.06,0.07,0.08,0.09)
var VICIOUSSTANCE=new Array(0,35,48,64,84,109,139,166,196,229,266,306,349,379,410,443,475,509,542,576,609,615,620,626,631,637,642,648,653,659,664,670,675,681,686,692,697,702,708,713,719,724,730,735,741,746,752,757,763,768,774)
var VITALFORCEHP=new Array(0,1.9,2.7,2.9,3.6,4.5,4.7,5.6,6.7)
var VITALFORCEMP=new Array(0,0.9,1.1,1.2,1.5,1.7,1.8,2.1,2.5)
var WARCRY=new Array(0,1.2,1.25)
var WEAKNESS=new Array(0,0.83,0.8,0.77)
var WEIGHTLIMIT=new Array(0,2,3,4)
var WINDWALK=new Array(0,20,33,20,33,20,33,20,33,20,33)
var ZEALOT=new Array(0,1.1,1.2,1.3)
var ZEALOTCRIT=new Array(0,33,66,100)
var ZEALOTSPEED=new Array(0,10,20,30)
var ZERK=new Array(0,1.05,1.08,1.05,1.08)
var ZERKMATK=new Array(0,1.1,1.16,1.1,1.16)
var ZERKMDEF=new Array(0,0.9,0.84,0.9,0.84)
var ZERKPDEF=new Array(0,0.95,0.92,0.95,0.92)
var ZERKSPEED=new Array(0,5,8,5,8)
var ZERKEVA=new Array(0,-2,-4,-2,-4)

//Weapon
var WEAPON=new Array()
WEAPON[0]=new Array(4,6,"unequipped",0,"no SA",0,"",0,"",0,"",0,"",0,"",0,"",0,"",0,"",0,"",0)
WEAPON[1]=new Array(246,132,"Dagger",1,"no SA",0,"Critical Damage",265,"Haste",1.07,"HP Drain",0,"",0,"",0)
WEAPON[2]=new Array(225,175,"Blunt",1,"no SA",0,"Acumen",1.15,"Mana Up",1.3,"MP Regeneration",0.54,"",0)
WEAPON[3]=new Array(281,132,"Blunt",1,"no SA",0,"Health",0,"HP Drain",0,"HP Regeneration",2.04,"",0)
WEAPON[4]=new Array(342,132,"Fist",1,"no SA",0,"Crt. Stun",0,"Focus",80.6,"Health",0,"",0)
WEAPON[5]=new Array(581,132,"Bow",1,"no SA",0,"Cheap Shot",0,"Critical Slow",0,"Focus",88.1,"",0)
WEAPON[6]=new Array(342,132,"2hb",1,"no SA",0,"Health",0,"HP Drain",0,"HP Regeneration",2.04,"",0)
WEAPON[7]=new Array(281,132,"Sword",1,"no SA",0,"Focus",84.3,"Haste",1.07,"Health",0,"",0)
WEAPON[8]=new Array(342,132,"2hs",1,"no SA",0,"Focus",84.3,"Haste",1.07,"Health",0,"",0)
WEAPON[9]=new Array(274,175,"2hb",1,"no SA",0,"Empower",60.09,"Magic Hold",0,"MP Regeneration",0.54,"",0)
WEAPON[10]=new Array(281,132,"Polearm",1,"no SA",0,"Guidance",5.27,"Haste",1.07,"Health",0,"",0)
WEAPON[11]=new Array(342,132,"Duals",1,"HP/CP/MP",0)
WEAPON[12]=new Array(259,107,"Fist",1,"no SA",0,"Anger",38,"Focus",61.6,"Haste",1.06,"",0)
WEAPON[13]=new Array(186,107,"Dagger",1,"no SA",0,"Back Blow",37,"Critical Bleed",0,"Focus",67.3,"",0)
WEAPON[14]=new Array(226,152,"2hb",1,"no SA",0,"Acumen",0,"Conversion",0,"Magic Damage",0,"",0)
WEAPON[15]=new Array(440,107,"Bow",2,"no SA",0,"Critical Bleed",0,"Light",0,"Mana Up",0,"",0)
WEAPON[16]=new Array(282,114,"Duals",1,"Guidance",6.5)
WEAPON[17]=new Array(232,114,"Sword",1,"no SA",0,"Critical Damage",326.28,"Health",0,"Rsk. Focus",130.9,"",0)
WEAPON[18]=new Array(207,143,"2hb",1,"no SA",0,"Acumen",0,"Conversion",0,"Mana Up",0,"",0)
WEAPON[19]=new Array(259,107,"2hb",1,"no SA",0,"Critical Drain",0,"Haste",1.06,"Health",0,"",0)
WEAPON[20]=new Array(282,114,"2hb",1,"no SA",0,"Anger",32,"Health",0,"Rsk. Haste",1.11,"",0)
WEAPON[21]=new Array(282,114,"Fist",1,"no SA",0,"Guidance",5.41,"Health",0,"Rsk. Evasion",6.8,"",0)
WEAPON[22]=new Array(282,114,"2hs",1,"no SA",0,"Critical Bleed",0,"Critical Drain",0,"Health",0,"",0)
WEAPON[23]=new Array(170,143,"Sword",1,"no SA",0,"Empower",30.76,"Magic Paralyze",0,"Magic Power",153.28,"",0)
WEAPON[24]=new Array(232,114,"Blunt",1,"no SA",0,"Anger",32.05,"Critical Drain",0,"Health",0,"",0)
WEAPON[25]=new Array(186,152,"Blunt",1,"no SA",0,"Acumen",0,"Magic Power",167,"Magic Silence",0,"",0)
WEAPON[26]=new Array(213,107,"Polearm",1,"no SA",0,"Critical Stun",0,"Haste",1.06,"Wide Blow",0,"",0)
WEAPON[27]=new Array(259,107,"2hs",1,"no SA",0,"Critical Damage",297,"Focus",61.6,"Haste",1.06,"",0)
WEAPON[28]=new Array(275,112,"Duals",1,"Health",0)
WEAPON[29]=new Array(259,107,"Duals",1,"Haste",1.08)
WEAPON[30]=new Array(213,107,"Blunt",1,"no SA",0,"Critical Bleed",0,"Focus",61.6,"Rsk. Haste",1.11,"",0)
WEAPON[31]=new Array(528,125,"YumiBow",2,"no SA",0,"Cheap Shot",0,"Critical Poison",0,"Quick Recovery",0.85,"",0)
WEAPON[32]=new Array(203,114,"Dagger",1,"no SA",0,"Critical Damage",200.79,"Guidance",3.95,"Rsk. Haste",1.11,"",0)
WEAPON[33]=new Array(170,143,"Blunt",1,"no SA",0,"Acumen",0,"Magic Poison",0,"Mana Up",0,"",0)
WEAPON[34]=new Array(186,152,"Sword",1,"no SA",0,"Acumen",0,"Magic Power",167.02,"Magic Silence",0,"",0)
WEAPON[35]=new Array(213,107,"Sword",1,"no SA",0,"Anger",31.3,"Critical Poison",0,"Haste",1.06,"",0)
WEAPON[36]=new Array(232,114,"Polearm",1,"no SA",0,"Guidance",3.95,"Health",0,"Wide Blow",0,"",0)
WEAPON[37]=new Array(194,99,"Blunt",1,"no SA",0,"Haste",1.06,"Health",0,"Rsk. Focus",99.9,"",0)
WEAPON[38]=new Array(213,91,"Fist",1,"no SA",0,"Critical Poison",0,"Rsk. Evasion",6.24,"Rsk. Haste",1.1,"",0)
WEAPON[39]=new Array(236,99,"Fist",1,"no SA",0,"Critical Drain",0,"Critical Poison",0,"Rsk. Haste",1.09,"",0)
WEAPON[40]=new Array(400,99,"Bow",3,"no SA",0,"Cheap Shot",0,"Guidance",3.95,"Quick Recovery",0.8733,"",0)
WEAPON[41]=new Array(397,99,"YumiBow",3,"no SA",0,"Critical Bleed",0,"Evasion",2.41,"Miser",0,"",0)
WEAPON[42]=new Array(194,99,"Blunt",1,"no SA",0,"Anger",30.12,"Haste",1.06,"Health",0,"",0)
WEAPON[43]=new Array(170,99,"Dagger",1,"no SA",0,"Critical Bleed",0,"Critical Damage",159.93,"Critical Poison",0,"Might Mortal",0)
WEAPON[44]=new Array(175,91,"Polearm",1,"no SA",0,"Anger",28.59,"Critical Stun",0,"Light",0,"",0)
WEAPON[45]=new Array(213,91,"2hs",1,"no SA",0,"Critical Damage",247.98,"Focus",68.9,"Health",0,"",0)
WEAPON[46]=new Array(236,99,"2hs",1,"no SA",0,"Critical Bleed",0,"Critical Drain",0,"Health",0,"",0)
WEAPON[47]=new Array(175,91,"Blunt",1,"no SA",0,"Anger",28.59,"Health",0,"Rsk. Focus",107.7,"",0)
WEAPON[48]=new Array(155,132,"Blunt",1,"no SA",0,"Conversion",0,"Mana Up",0,"Magic Silence",0,"",0)
WEAPON[49]=new Array(122,122,"Dagger",1,"no SA",0,"Magic Regeneration",0,"Magic Weakness",0,"Mental Shield",0,"",0)
WEAPON[50]=new Array(213,91,"2hb",1,"no SA",0,"Anger",28,"Critical Bleed",0,"Focus",68,"",0)
WEAPON[51]=new Array(175,91,"Sword",1,"no SA",0,"Back Blow",5.6,"Focus",68.9,"Guidance",5.02,"",0)
WEAPON[52]=new Array(153,91,"Dagger",1,"no SA",0,"Back Blow",8.6,"Evasion",2.41,"Focus",71.9,"",0)
WEAPON[53]=new Array(194,99,"Polearm",1,"no SA",0,"Anger",24.77,"Critical Stun",0,"Long Blow",0,"",0)
WEAPON[54]=new Array(140,122,"Blunt",1,"no SA",0,"Acumen",0,"Magic Hold",0,"Magic Mental Shield",0,"",0)
WEAPON[55]=new Array(170,122,"2hb",1,"no SA",0,"Magic Hold",0,"Magic Regeneration",0,"Mental Shield",0,"",0)
WEAPON[56]=new Array(189,132,"2hb",1,"no SA",0,"Bodily Blessing",0,"Magic Focus",0,"Magic Poison",0,"",0)
WEAPON[57]=new Array(236,99,"2hb",1,"no SA",0,"Haste",1.06,"Health",0,"Rsk. Focus",99,"",0)
WEAPON[58]=new Array(194,99,"Sword",1,"no SA",0,"Critical Damage",262.57,"Focus",64.5,"Haste",1.06,"",0)
WEAPON[59]=new Array(140,122,"Sword",1,"no SA",0,"Acumen",0,"Magic Regeneration",0,"Magic Weakness",0,"",0)
WEAPON[60]=new Array(155,132,"Sword",1,"no SA",0,"Acumen",0,"Conversion",0,"Magic Power",139,"",0)
WEAPON[61]=new Array(236,99,"Duals",1,"Haste",1.04)
WEAPON[62]=new Array(228,97,"Duals",1,"Haste",1.05)
WEAPON[63]=new Array(228,97,"Duals",1,"Critical Damage",133.97)
WEAPON[64]=new Array(228,97,"Duals",1,"Guidance",3.8)
WEAPON[65]=new Array(228,97,"Duals",1,"Health",0)
WEAPON[66]=new Array(228,97,"Duals",1,"Focus",52.6)
WEAPON[67]=new Array(220,94,"Duals",1,"Critical Damage",107.01)
WEAPON[68]=new Array(220,94,"Duals",1,"Focus",43.7)
WEAPON[69]=new Array(220,94,"Duals",1,"Guidance",3.2)
WEAPON[70]=new Array(220,94,"Duals",1,"Health",0)
WEAPON[71]=new Array(213,91,"Duals",1,"Critical Damage",127.00)
WEAPON[72]=new Array(213,91,"Duals",1,"Focus",54)
WEAPON[73]=new Array(213,91,"Duals",1,"Health",1.25)
WEAPON[74]=new Array(213,91,"Duals",1,"Haste",1.05)
WEAPON[75]=new Array(213,91,"Duals",1,"Guidance",3.9)
WEAPON[76]=new Array(213,91,"Duals",1,"Guidance",3.9)
WEAPON[77]=new Array(213,91,"Duals",1,"Guidance",3.9)
WEAPON[78]=new Array(213,91,"Duals",1,"Critical Damage",127.00)
WEAPON[79]=new Array(213,91,"Duals",1,"Health",0)
WEAPON[80]=new Array(213,91,"Duals",1,"Health",0)
WEAPON[81]=new Array(213,91,"Duals",1,"Critical Damage",127.00)
WEAPON[82]=new Array(213,91,"Duals",1,"Focus",54)
WEAPON[83]=new Array(213,91,"Duals",1,"Haste",1.05)
WEAPON[84]=new Array(213,91,"Duals",1,"Focus",54)
WEAPON[85]=new Array(213,91,"Duals",1,"Health",0)
WEAPON[86]=new Array(213,91,"Duals",1,"Focus",54)
WEAPON[87]=new Array(204,89,"Duals",1,"Guidance",4.8)
WEAPON[88]=new Array(204,89,"Duals",1,"Health",0)
WEAPON[89]=new Array(204,89,"Duals",1,"Critical Damage",146.88)
WEAPON[90]=new Array(204,89,"Duals",1,"Focus",65)
WEAPON[91]=new Array(204,89,"Duals",1,"Haste",1.06)
WEAPON[92]=new Array(204,89,"Duals",1,"Guidance",4.8)
WEAPON[93]=new Array(204,89,"Duals",1,"Health",0)
WEAPON[94]=new Array(204,89,"Duals",1,"Critical Damage",146.88)
WEAPON[95]=new Array(204,89,"Duals",1,"Focus",65)
WEAPON[96]=new Array(204,89,"Duals",1,"Haste",1.06)
WEAPON[97]=new Array(204,89,"Duals",1,"Guidance",4.8)
WEAPON[98]=new Array(204,89,"Duals",1,"Health",0)
WEAPON[99]=new Array(204,89,"Duals",1,"Critical Damage",146.88)
WEAPON[100]=new Array(204,89,"Duals",1,"Focus",65)
WEAPON[101]=new Array(204,89,"Duals",1,"Haste",1.06)
WEAPON[102]=new Array(204,89,"Duals",1,"Guidance",4.8)
WEAPON[103]=new Array(204,89,"Duals",1,"Health",0)
WEAPON[104]=new Array(204,89,"Duals",1,"Critical Damage",146.88)
WEAPON[105]=new Array(204,89,"Duals",1,"Focus",65)
WEAPON[106]=new Array(204,89,"Duals",1,"Haste",1.06)
WEAPON[107]=new Array(197,86,"Duals",1,"Guidance",5.7)
WEAPON[108]=new Array(197,86,"Duals",1,"Health",0)
WEAPON[109]=new Array(197,86,"Duals",1,"Critical Damage",166.26)
WEAPON[110]=new Array(197,86,"Duals",1,"Focus",76.6)
WEAPON[111]=new Array(197,86,"Duals",1,"Haste",1.07)
WEAPON[112]=new Array(156,83,"Blunt",3,"no SA",0,"Anger",26.78,"Health",0,"Rsk. Focus",115.4,"",0)
WEAPON[113]=new Array(139,76,"Blunt",3,"no SA",0,"Anger",24.77,"Haste",1.07,"Health",0,"",0)
WEAPON[114]=new Array(122,68,"Blunt",2,"no SA",0,"Anger",22.64,"Haste",1.07,"Health",0,"",0)
WEAPON[115]=new Array(107,61,"Blunt",2,"no SA",0,"Anger",20.44,"Haste",1.08,"Rsk. Focus",138.7,"",0)
WEAPON[116]=new Array(107,61,"Blunt",2,"no SA",0,"Haste",1.08,"Health",0,"Rsk. Focus",138.7,"",0)
WEAPON[117]=new Array(107,61,"Blunt",2,"no SA",0,"Anger",20.44,"Haste",1.08,"Rsk. Focus",138.7,"",0)
WEAPON[118]=new Array(107,61,"Blunt",2,"no SA",0,"Anger",20.44,"Health",0,"Rsk. Focus",138.7,"",0)
WEAPON[119]=new Array(323,83,"Bow",10,"no SA",0,"Cheap Shot",0,"Guidance",4.53,"Miser",0,"",0)
WEAPON[120]=new Array(316,84,"YumiBow",9,"no SA",0,"Evasion",2.68,"Guidance",4.82,"Miser",0,"",0)
WEAPON[121]=new Array(277,75,"YumiBow",8,"no SA",0,"Guidance",5.12,"Miser",0,"Quick Recovery",0.7792,"",0)
WEAPON[122]=new Array(252,68,"Bow",8,"no SA",0,"Cheap Shot",0,"Evasion",2.82,"Miser",0,"",0)
WEAPON[123]=new Array(220,61,"Bow",8,"no SA",0,"Evasion",2.95,"Guidance",5.42,"Quick Recovery",0.832,"",0)
WEAPON[124]=new Array(136,83,"Dagger",3,"no SA",0,"Critical Bleed",0,"Critical Damage",140.87,"Critical Poison",0,"Might Mortal",0)
WEAPON[125]=new Array(122,76,"Dagger",3,"no SA",0,"Critical Bleed",0,"Evasion",2.68,"Focus",81.2,"",0)
WEAPON[126]=new Array(122,76,"Dagger",3,"no SA",0,"Back Blow",9.6,"Evasion",2.68,"Focus",81.2,"",0)
WEAPON[127]=new Array(107,68,"Dagger",2,"no SA",0,"Critical Bleed",0,"Critical Poison",0,"Rsk. Haste",1.12,"Might Mortal",0)
WEAPON[128]=new Array(94,61,"Dagger",2,"no SA",0,"Critical Bleed",0,"Critical Poison",0,"Rsk. Haste",1.13,"",0)
WEAPON[129]=new Array(94,61,"Dagger",2,"no SA",0,"Back Blow",10.2,"Focus",90.5,"Rsk. Haste",1.13,"Might Mortal",0)
WEAPON[130]=new Array(190,83,"Fist",3,"no SA",0,"Critical Drain",0,"Critical Poison",0,"Rsk. Haste",1.11,"",0)
WEAPON[131]=new Array(169,76,"Fist",3,"no SA",0,"Haste",1.07,"Rsk. Evasion",6.95,"Rsk. Haste",1.12,"",0)
WEAPON[132]=new Array(148,68,"Fist",2,"no SA",0,"Haste",1.07,"Rsk. Evasion",7.29,"Rsk. Haste",1.12,"",0)
WEAPON[133]=new Array(130,61,"Fist",2,"no SA",0,"Critical Drain",0,"Critical Poison",0,"Rsk. Haste",1.13,"",0)
WEAPON[134]=new Array(125,111,"Blunt",3,"no SA",0,"Conversion",0,"Magic Hold",0,"Magic Power",112,"",0)
WEAPON[135]=new Array(125,111,"Sword",3,"no SA",0,"Empower",26,"Magic Power",112,"Magic Silence",0,"",0)
WEAPON[136]=new Array(111,101,"Blunt",3,"no SA",0,"Acumen",0,"Magic Hold",0,"Magic Mental Shield",0,"",0)
WEAPON[137]=new Array(111,101,"Blunt",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[138]=new Array(111,101,"Sword",3,"no SA",0,"Acumen",0,"Conversion",0,"Magic Paralyze",0,"",0)
WEAPON[139]=new Array(111,101,"Blunt",3,"no SA",0,"Conversion",0,"Magic Silence",0,"Mana Up",0,"",0)
WEAPON[140]=new Array(111,101,"Blunt",3,"no SA",0,"Magic Poison",0,"Magic Power",99.39,"Magic Weakness",0,"",0)
WEAPON[141]=new Array(111,101,"Blunt",3,"no SA",0,"Bless the Body",0,"Empower",24.59,"Rsk. Evasion",6.95,"",0)
WEAPON[142]=new Array(111,101,"Sword",3,"no SA",0,"Empower",24.59,"Magic Power",99.39,"Magic Silence",0,"",0)
WEAPON[143]=new Array(98,91,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[144]=new Array(86,91,"Dagger",2,"no SA",0,"Magic Hold",0,"Magic Silence",0,"Mana Up",0,"",0)
WEAPON[145]=new Array(85,81,"Sword",2,"no SA",0,"Acumen",0,"Magic Power",78,"Magic Weakness",0,"",0)
WEAPON[146]=new Array(85,81,"Blunt",2,"no SA",0,"Magic Hold",0,"Magic Shield",0,"Mana Up",0,"",0)
WEAPON[147]=new Array(151,111,"2hb",3,"no SA",0,"Magic Hold",0,"Magic Regeneration",0,"Mental Shield",0,"",0)
WEAPON[148]=new Array(151,111,"2hb",3,"no SA",0,"Magic Chaos",0,"Magic Poison",0,"Magic Weakness",0,"",0)
WEAPON[149]=new Array(151,111,"2hb",3,"no SA",0,"Bodily Blessing",0,"Mana Up",0,"Rsk. Evasion",6.6,"",0)
WEAPON[150]=new Array(141,104,"2hb",3,"no SA",0,"Mana Up",0,"Magic Weakness",0,"Magic Chaos",0,"",0)
WEAPON[151]=new Array(135,101,"2hb",3,"no SA",0,"Magic Poison",0,"Magic Weakness",0,"Rsk. Evasion",6.95,"",0)
WEAPON[152]=new Array(135,101,"2hb",3,"no SA",0,"Magic Hold",0,"Magic Regeneration",0,"Mental Shield",0,"",0)
WEAPON[153]=new Array(135,101,"2hb",3,"no SA",0,"Magic Hold",0,"Magic Poison",0,"Magic Weakness",0,"",0)
WEAPON[154]=new Array(119,91,"2hb",2,"no SA",0,"Magic Hold",0,"Magic Poison",0,"Magic Weakness",0,"",0)
WEAPON[155]=new Array(103,81,"2hb",2,"no SA",0,"Bodily Blessing",0,"Mana Up",0,"Rsk. Evasion",7.63,"",0)
WEAPON[156]=new Array(103,81,"2hb",2,"no SA",0,"Magic Chaos",0,"Magic Poison",0,"Magic Weakness",0,"",0)
WEAPON[157]=new Array(103,81,"2hb",2,"no SA",0,"Magic Hold",0,"Magic Regeneration",0,"Mental Shield",0,"",0)
WEAPON[158]=new Array(156,83,"Polearm",3,"no SA",0,"Critical Stun",0,"Long Blow",0,"Wide Blow",0,"",0)
WEAPON[159]=new Array(144,78,"Polearm",3,"no SA",0,"Anger",24.77,"Critical Stun",0,"Long Blow",0,"",0)
WEAPON[160]=new Array(144,78,"Polearm",3,"no SA",0,"Critical Stun",0,"Long Blow",0,"Wide Blow",0,"",0)
WEAPON[161]=new Array(122,68,"Polearm",2,"no SA",0,"Critical Stun",0,"Light",0,"Long Blow",0,"",0)
WEAPON[162]=new Array(107,61,"Polearm",2,"no SA",0,"Critical Stun",0,"Long Blow",0,"Wide Blow",0,"",0)
WEAPON[163]=new Array(107,61,"Polearm",2,"no SA",0,"Anger",20.44,"Critical Stun",0,"Long Blow",0,"",0)
WEAPON[164]=new Array(107,61,"Polearm",2,"no SA",0,"Anger",24.77,"Critical Stun",0,"Light",0,"",0)
WEAPON[165]=new Array(156,83,"Sword",3,"no SA",0,"Critical Damage",231.29,"Focus",73.3,"Haste",1.07,"",0)
WEAPON[166]=new Array(139,76,"Sword",3,"no SA",0,"Critical Damage",213.12,"Focus",77.8,"Guidance",5.72,"",0)
WEAPON[167]=new Array(139,76,"Sword",3,"no SA",0,"Focus",77.8,"Health",0,"Rsk. Haste",1.12,"",0)
WEAPON[168]=new Array(139,76,"Sword",3,"no SA",0,"Critical Drain",0,"Guidance",5.72,"Health",0,"",0)
WEAPON[169]=new Array(139,76,"Sword",3,"no SA",0,"Focus",77.8,"Health",0,"Light",0,"",0)
WEAPON[170]=new Array(139,76,"Sword",3,"no SA",0,"Critical Damage",213.12,"Focus",77.8,"Haste",1.07,"",0)
WEAPON[171]=new Array(122,68,"Sword",2,"no SA",0,"Critical Damage",194.10,"Focus",82.2,"Haste",1.07,"",0)
WEAPON[172]=new Array(122,68,"Sword",2,"no SA",0,"Critical Damage",194.10,"Critical Poison",0,"Focus",68.9,"",0)
WEAPON[173]=new Array(122,68,"Sword",2,"no SA",0,"Back Blow",6.7,"Guidance",6.07,"Rsk. Evasion",7.29,"",0)
WEAPON[174]=new Array(122,68,"Sword",2,"no SA",0,"Critical Damage",194.10,"Critical Poison",0,"Haste",1.07,"",0)
WEAPON[175]=new Array(107,61,"Sword",2,"no SA",0,"Critical Anger",248.56,"Focus",86.7,"Light",0,"",0)
WEAPON[176]=new Array(190,83,"2hb",3,"no SA",0,"Anger",26,"Critical Bleed",0,"Health",0,"",0)
WEAPON[177]=new Array(169,76,"2hb",3,"no SA",0,"Critical Drain",0,"Focus",77,"Haste",1.07,"",0)
WEAPON[178]=new Array(190,83,"2hs",3,"no SA",0,"Critical Damage",269.91,"Focus",73.3,"Haste",1.07,"",0)
WEAPON[179]=new Array(169,76,"2hs",3,"no SA",0,"Critical Drain",0,"Focus",77,"Health",0,"",0)
WEAPON[180]=new Array(130,61,"2hs",2,"no SA",0,"Critical Damage",174.78,"Focus",86.7,"Light",0,"",0)
WEAPON[181]=new Array(190,83,"Duals",3,"Haste",1.04)
WEAPON[182]=new Array(190,83,"Duals",3,"Critical Damage",84.11)
WEAPON[183]=new Array(190,83,"Duals",3,"Guidance",2.9)
WEAPON[184]=new Array(190,83,"Duals",3,"Haste",1.04)
WEAPON[185]=new Array(190,83,"Duals",3,"Critical Damage",84.11)
WEAPON[186]=new Array(190,83,"Duals",3,"Focus",40.4)
WEAPON[187]=new Array(190,83,"Duals",3,"Guidance",2.9)
WEAPON[188]=new Array(190,83,"Duals",3,"Critical Damage",84.11)
WEAPON[189]=new Array(190,83,"Duals",3,"Focus",40.4)
WEAPON[190]=new Array(190,83,"Duals",3,"Health",0)
WEAPON[191]=new Array(183,81,"Duals",3,"Health",0)
WEAPON[192]=new Array(183,81,"Duals",3,"Haste",1.02)
WEAPON[193]=new Array(183,81,"Duals",3,"Critical Damage",49.42)
WEAPON[194]=new Array(183,81,"Duals",3,"Focus",24.8)
WEAPON[195]=new Array(175,78,"Duals",3,"Guidance",2.2)
WEAPON[196]=new Array(162,73,"Duals",3,"Haste",1.04)
WEAPON[197]=new Array(155,70,"Duals",3,"Focus",50.4)
WEAPON[198]=new Array(148,68,"Duals",2,"Guidance",2.8)
WEAPON[199]=new Array(148,68,"Duals",2,"Critical Damage",61.40)
WEAPON[200]=new Array(148,68,"Duals",2,"Health",0)
WEAPON[201]=new Array(136,63,"Duals",2,"no SA",0,"",0,"",0,"",0)
WEAPON[202]=new Array(130,61,"Duals",2,"no SA",0,"",0,"",0,"",0)
WEAPON[203]=new Array(124,58,"Duals",2,"no SA",0,"",0,"",0,"",0)
WEAPON[204]=new Array(118,56,"Duals",2,"no SA",0,"",0,"",0,"",0)
WEAPON[205]=new Array(92,54,"Blunt",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[206]=new Array(79,47,"Blunt",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[207]=new Array(64,39,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[208]=new Array(51,32,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[209]=new Array(40,26,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[210]=new Array(191,54,"Bow",10,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[211]=new Array(179,51,"YumiBow",10,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[212]=new Array(132,39,"Bow",8,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[213]=new Array(114,35,"YumiBow",6,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[214]=new Array(105,32,"Bow",6,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[215]=new Array(82,26,"YumiBow",6,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[216]=new Array(80,54,"Dagger",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[217]=new Array(69,47,"Dagger",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[218]=new Array(62,42,"Dagger",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[219]=new Array(56,39,"Dagger",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[220]=new Array(45,32,"Dagger",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[221]=new Array(35,26,"Dagger",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[222]=new Array(112,54,"Fist",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[223]=new Array(96,47,"Fist",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[224]=new Array(78,39,"Fist",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[225]=new Array(62,32,"Fist",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[226]=new Array(49,26,"Fist",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[227]=new Array(74,72,"Blunt",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[228]=new Array(67,66,"Blunt",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[229]=new Array(63,63,"Blunt",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[230]=new Array(63,63,"Blunt",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[231]=new Array(51,52,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[232]=new Array(45,52,"Dagger",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[233]=new Array(51,52,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[234]=new Array(43,45,"Sword",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[235]=new Array(41,43,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[236]=new Array(41,43,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[237]=new Array(41,43,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[238]=new Array(32,35,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[239]=new Array(32,35,"Sword",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[240]=new Array(32,35,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[241]=new Array(90,72,"2hb",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[242]=new Array(77,63,"2hb",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[243]=new Array(62,52,"2hb",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[244]=new Array(50,43,"2hb",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[245]=new Array(39,35,"2hb",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[246]=new Array(92,54,"Polearm",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[247]=new Array(79,47,"Polearm",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[248]=new Array(64,39,"Polearm",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[249]=new Array(51,32,"Polearm",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[250]=new Array(40,26,"Polearm",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[251]=new Array(92,54,"Sword",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[252]=new Array(79,47,"Sword",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[253]=new Array(64,39,"Sword",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[254]=new Array(51,32,"Sword",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[255]=new Array(40,26,"Sword",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[256]=new Array(96,47,"2hb",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[257]=new Array(112,54,"2hs",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[258]=new Array(96,47,"2hs",3,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[259]=new Array(78,39,"2hs",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[260]=new Array(49,26,"2hs",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[261]=new Array(107,51,"Duals",3,"no SA",0,"",0,"",0,"",0)
WEAPON[262]=new Array(96,47,"Duals",3,"no SA",0,"",0,"",0,"",0)
WEAPON[263]=new Array(83,41,"Duals",3,"no SA",0,"",0,"",0,"",0)
WEAPON[264]=new Array(73,37,"Duals",2,"no SA",0,"",0,"",0,"",0)
WEAPON[265]=new Array(31,21,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[266]=new Array(24,17,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[267]=new Array(17,12,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[268]=new Array(13,10,"Blunt",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[269]=new Array(12,9,"Blunt",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[270]=new Array(10,9,"Blunt",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[271]=new Array(10,8,"Blunt",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[272]=new Array(6,6,"Blunt",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[273]=new Array(6,5,"Blunt",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[274]=new Array(64,21,"Bow",7,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[275]=new Array(49,17,"Bow",7,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[276]=new Array(45,16,"Bow",7,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[277]=new Array(34,12,"Bow",6,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[278]=new Array(23,9,"Bow",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[279]=new Array(16,6,"Bow",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[280]=new Array(27,21,"Dagger",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[281]=new Array(21,17,"Dagger",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[282]=new Array(19,16,"Dagger",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[283]=new Array(15,12,"Dagger",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[284]=new Array(11,10,"Dagger",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[285]=new Array(10,9,"Dagger",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[286]=new Array(7,6,"Dagger",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[287]=new Array(5,5,"Dagger",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[288]=new Array(38,21,"Fist",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[289]=new Array(29,17,"Fist",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[290]=new Array(21,12,"Fist",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[291]=new Array(16,10,"Fist",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[292]=new Array(13,9,"Fist",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[293]=new Array(10,6,"Fist",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[294]=new Array(7,5,"Fist",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[295]=new Array(1,1,"Fist",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[296]=new Array(25,28,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[297]=new Array(19,22,"Blunt",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[298]=new Array(11,13,"Blunt",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[299]=new Array(9,12,"Blunt",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[300]=new Array(6,8,"Blunt",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[301]=new Array(5,7,"Blunt",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[302]=new Array(30,28,"2hb",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[303]=new Array(23,22,"2hb",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[304]=new Array(16,16,"2hb",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[305]=new Array(13,14,"2hb",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[306]=new Array(13,13,"2hb",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[307]=new Array(11,12,"2hb",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[308]=new Array(10,10,"2hb",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[309]=new Array(1,1,"2hb",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[310]=new Array(31,21,"Polearm",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[311]=new Array(24,17,"Polearm",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[312]=new Array(24,17,"Polearm",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[313]=new Array(1,1,"Polearm",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[314]=new Array(31,21,"Sword",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[315]=new Array(24,17,"Sword",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[316]=new Array(18,21,"Sword",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[317]=new Array(17,12,"Sword",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[318]=new Array(14,11,"Sword",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[319]=new Array(13,10,"Sword",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[320]=new Array(12,9,"Sword",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[321]=new Array(11,9,"Sword",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[322]=new Array(8,6,"Sword",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[323]=new Array(6,5,"Sword",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[324]=new Array(1,1,"Sword",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[325]=new Array(38,21,"2hs",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[326]=new Array(29,17,"2hs",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[327]=new Array(21,12,"2hs",2,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[328]=new Array(16,10,"2hs",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[329]=new Array(1,1,"Duals",1,"no SA",0,"",0,"",0,"",0)
WEAPON[330]=new Array(297,137,"Blunt",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[331]=new Array(297,137,"Sword",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[332]=new Array(614,137,"Bow",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[333]=new Array(361,137,"2hs",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[334]=new Array(361,137,"2hb",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[335]=new Array(361,137,"Fist",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[336]=new Array(238,182,"Blunt",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[337]=new Array(290,182,"2hb",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[338]=new Array(297,137,"Polearm",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[339]=new Array(260,137,"Dagger",1,"no SA",0,"",0,"",0,"",0,"",0)
WEAPON[340]=new Array(361,137,"Duals",1,"no SA",0,"",0,"",0,"",0)
WEAPON[341]=new Array(139,76,"Polearm",3,"no SA",0,"Critical Stun",0,"Long Blow",0,"Wide Blow",0,"",0)
WEAPON[342]=new Array(251,121,"Sword",1,"no SA",0,"Critical Poison",0,"Haste",1.06,"Health",0,"",0)
WEAPON[343]=new Array(305,121,"2hs",1,"no SA",0,"Focus",61,"Haste",1.06,"Health",0,"",0)
WEAPON[344]=new Array(251,121,"Blunt",1,"no SA",0,"Focus",61,"Haste",1.06,"Health",0,"",0)
WEAPON[345]=new Array(305,121,"2hb",1,"no SA",0,"Anger",32,"Focus",61,"Health",0,"",0)
WEAPON[346]=new Array(220,121,"Dagger",1,"no SA",0,"Back Blow",370,"Critical Damage",200,"Focus",67,"",0)
WEAPON[347]=new Array(251,121,"Polearm",1,"no SA",0,"Critical Stun",0,"Towering Blow",0,"Wide Blow",0,"",0)
WEAPON[348]=new Array(570,133,"YumiBow",2,"no SA",0,"Cheap Shot",0,"Focus",61,"Quick Recovery",0.83,"",0)
WEAPON[349]=new Array(305,121,"Fist",1,"no SA",0,"Critical Drain",0,"Haste",1.06,"Rsk. Haste",1.11,"",0)
WEAPON[350]=new Array(202,161,"Sword",1,"no SA",0,"Mana Up",0,"Magic Focus",0,"Magic Mental Shield",0,"",0)
WEAPON[351]=new Array(202,161,"Blunt",1,"no SA",0,"Conversion",0,"Magic Silence",0,"Mana Up",0,"",0)
WEAPON[352]=new Array(245,161,"2hb",1,"no SA",0,"Acumen",0,"Magic Mental Shield",0,"Mana Up",0,"",0)
WEAPON[353]=new Array(305,121,"Duals",1,"Haste",1.08,"",0,"",0,"",0)

//Armor
var SHIELDPDEF=new Array(0,114,216,90,142,101,67,166,243,230,174,166,203,128,290,142,178,47,154,90,79,90,256,69,56,154,190,216,190)
var HELMETPDEF=new Array(12,83,83,83,69,69,69,69,73,73,69,62,66,66,62,47,54,58,51,54,29,41,33,37,37,37,37,44,13,26,16,23,19)
var HELMETSET=new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,0,0,0,26,0,0,0,0,25,0,0,0,0,0,0)
var LOWERPDEF=new Array(18,10,98,104,52,32,64,43,75,61,32,13,24,107,80,27,43,46,80,61,27,13,33,29,128,48,37,27,16,41,48,46,61,64,32,27,22,39,70,59,36,46,60,20,19,21,53,56,66,54,11,52,30,49,29,98,73)
var LOWERMP=new Array(0,10,0,0,236,0,0,0,0,0,0,23,66,0,0,79,177,196,0,0,79,23,0,0,0,0,141,0,33,0,0,0,0,0,105,79,0,0,0,0,0,0,0,0,42,54,256,0,0,0,15,236,92,216,0,0,0)
var LOWERTYPE=new Array(0,"R","H","H","R","L","H","H","H","H","L","R","R","H","L","R","R","R","H","H","R","R","L","L","H","H","R","L","R","L","L","L","H","H","R","R","L","H","H","L","L","L","L","L","R","R","R","L","L","H","R","R","R","R","L","H","L")
var LOWERSET=new Array(0,0,11,12,12,0,26,0,15,0,0,0,0,7,7,0,23,24,0,0,0,0,0,0,2,0,22,0,0,0,28,0,25,0,30,0,0,0,0,19,0,27,0,0,0,0,10,18,20,0,0,13,29,14,0,14,14)
var UPPERPDEF=new Array(31,209,139,278,17,293,157,191,127,97,166,202,83,50,103,68,120,79,119,158,224,95,50,21,39,128,171,139,69,74,270,249,179,129,95,43,21,239,111,53,205,60,202,43,25,65,220,293,147,166,77,73,95,90,52,43,220,62,94,58,73,97,77,147,105,90,136,87,36,33,209,278,86,106,18,30,83,49,34,78,43,47,157,117)
var FULLBODY=new Array(0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0)
var UPPERMP=new Array(0,0,665,0,19,0,0,0,561,0,0,0,377,0,0,0,0,239,0,0,0,0,0,38,106,0,0,665,284,314,0,0,0,0,0,126,38,0,0,0,0,225,0,0,52,0,0,0,718,866,0,0,0,0,169,126,0,0,0,0,0,0,0,718,413,320,0,0,0,0,0,0,409,0,24,67,377,147,86,345,126,0,0,0)
var UPPERTYPE=new Array(0,"L","R","H","R","H","H","L","R","H","H","L","R","L","H","H","H","R","L","H","H","H","L","R","R","L","H","R","R","R","H","L","L","H","H","R","R","H","H","L","H","R","L","L","R","L","L","H","R","R","L","L","H","L","R","R","L","H","L","L","L","L","H","R","R","R","L","H","L","L","L","H","R","L","R","R","R","R","R","R","R","L","H","L")
var UPPERSET=new Array(0,6,4,5,0,8,11,11,11,0,12,12,12,0,26,0,15,0,0,0,16,0,0,0,0,7,7,7,23,24,13,1,21,0,0,0,0,17,0,0,2,22,13,0,0,0,9,9,9,3,28,0,25,18,30,0,8,0,19,0,27,0,0,8,0,0,0,0,0,0,10,10,10,20,0,0,13,29,0,14,0,0,14,14)
var GLOVEPDEF=new Array(8,46,46,46,41,44,17,27,32,24,24,24,46,36,39,44,55,39,34,27,19,39,24,13,24,49,34,55,32,24,15,49,55,27,36,29,29,33,24,32,34,27,29,9,11,46,37,41)
var GLOVESET=new Array(0,5,6,4,11,12,0,0,0,0,0,0,7,23,24,13,1,0,0,30,0,0,0,0,29,8,0,2,22,0,0,9,3,0,0,0,0,0,0,0,0,0,0,0,0,10,0,14)
var BOOTPDEF=new Array(7,46,46,46,8,29,41,22,44,17,24,49,27,32,27,32,24,24,24,9,36,11,34,11,46,36,39,44,55,39,32,27,39,55,24,32,19,9,13,15,49,55,27,32,29,32,24,34,29,0,46,37,41)
var BOOTSET=new Array(0,6,4,5,0,0,11,0,12,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,13,1,21,0,0,0,2,0,0,0,0,0,0,9,3,28,18,0,19,27,0,0,0,10,20,14)
var NECKLACEMDEF=new Array(13,68,52,28,45,36,85,40,21,64,72,68,15,48,32,68,15,60,18,56,95,21,25,80,80,76,91,95,95)
var EARRINGMDEF=new Array(9,51,11,19,21,71,45,54,51,71,42,16,16,34,27,63,39,13,48,36,24,60,60,57,68,71,30,71)
var RINGMDEF=new Array(5,34,26,20,14,22,18,7,42,24,40,30,11,48,32,36,34,48,16,11,9,28,48,11,12,40,38,46,48)

//Skills
var RESURRECTION=new Array(0,0,0.2,0.3,0.4,0.5,0.55,0.6,0.65,0.7)
</script>

<script>

if (!sessionStorage.getItem('L2CalcPageLoaded')) {
    sessionStorage.setItem('L2CalcPageLoaded', 'true');
    setTimeout(() => {
        window.location.reload();
    }, 100);
} else {
    sessionStorage.removeItem('L2CalcPageLoaded');
}

window.onload=function() {
	classskills();
	equipmentgrade();
	buffs();
	passives();
	toggles();
	debuffs();
	edebuffs();
	calc();
	boxgoaway();
}
</script>