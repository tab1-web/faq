---
icon: material/calculator
---
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
	font: 10pt verdana;
	color: white;
	padding: 5;
	text-align: center;
}
table.statcalc {
text-align: left;
border: 0;
cellpadding: 5;
}
</style>
# L2Calc
Not Implemented:

- Chance to hit (Accuracy vs Evasion)
- Skill damage
- Vampiric Rage
- Reflect Damage
- Various enchanted skills
- Toggle MP Costs
- Excellent Shield Defense
- Enemy targets
- Anything related to Interlude

and more.. 
<hr>

<table class="statcalc">
<form id="statcalculator"></form>
<tbody><tr>
<td><fieldset>
<legend class="style2">Status Window</legend>
	Lv 
		<select id="LV" onchange="passives(true);calc()"><option value="1" selected="selected">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option></select>

	Class 
		<select id="class" onchange="buffs();toggles();classskills();passives(true);calc(true,false)">
			<option value="AW" selected="selected">Abyss Walker
			</option><option value="AR">Artisan
			</option><option value="AS">Assassin
			</option><option value="BI">Bishop
			</option><option value="BD">Bladedancer
			</option><option value="BH">Bounty Hunter
			</option><option value="CL">Cleric
			</option><option value="DA">Dark Avenger
			</option><option value="DF">Dark Fighter
			</option><option value="DM">Dark Mystic
			</option><option value="DW">Dark Wizard
			</option><option value="DE">Destroyer
			</option><option value="DO">Dwarven Fighter
			</option><option value="ELS">Elemental Summoner
			</option><option value="EE">Elven Elder
			</option><option value="EF">Elven Fighter
			</option><option value="EK">Elven Knight
			</option><option value="EM">Elven Mystic
			</option><option value="EO">Elven Oracle
			</option><option value="EFS">Elven Scout
			</option><option value="EW">Elven Wizard
			</option><option value="GL">Gladiator
			</option><option value="HE">Hawkeye
			</option><option value="HF">Human Fighter
			</option><option value="HK">Human Knight
			</option><option value="HM">Human Mystic
			</option><option value="MO">Monk
			</option><option value="NE">Necromancer
			</option><option value="OF">Orc Fighter
			</option><option value="OM">Orc Mystic
			</option><option value="OR">Orc Raider
			</option><option value="OS">Orc Shaman
			</option><option value="OL">Overlord
			</option><option value="PA">Paladin
			</option><option value="PK">Palus Knight
			</option><option value="PR">Phantom Ranger
			</option><option value="PS">Phantom Summoner
			</option><option value="PW">Plainswalker
			</option><option value="PP">Prophet
			</option><option value="RO">Rogue
			</option><option value="SC">Scavenger
			</option><option value="SHE">Shillien Elder
			</option><option value="SK">Shillien Knight
			</option><option value="SO">Shillien Oracle
			</option><option value="SR">Silver Ranger
			</option><option value="SOR">Sorcerer
			</option><option value="SPH">Spellhowler
			</option><option value="SPS">Spellsinger
			</option><option value="SW">Swordsinger
			</option><option value="TK">Temple Knight
			</option><option value="TH">Treasure Hunter
			</option><option value="TY">Tyrant
			</option><option value="WC">Warcryer
			</option><option value="WL">Warlock
			</option><option value="WD">Warlord
			</option><option value="WA">Warrior
			</option><option value="WS">Warsmith
			</option><option value="WI">Wizard
		</option></select>
<table class="statcalc" width="275">
	<tbody><tr><td width="95">HP</td><td id="HP" align="right">107</td><td width="15"></td><td width="95">CP</td><td id="CP" width="35" align="right">42</td></tr>
	<tr><td>MP</td><td id="MP" align="right">39</td><td></td><td></td><td id="TEST" align="right"></td></tr>
	<tr><td>P.Atk.</td><td id="PATK" align="right">4</td><td></td><td>M.Atk.</td><td id="MATK" align="right">3</td></tr>
	<tr><td>P.Def.</td><td id="PDEF" align="right">72</td><td></td><td>M.Def.</td><td id="MDEF" align="right">47</td></tr>
	<tr><td>Accuracy</td><td id="ACCURACY" align="right">35</td><td></td><td>Evasion</td><td id="EVASION" align="right">35</td></tr>
	<tr><td>Critical</td><td id="CRITICAL" align="right">45</td><td></td><td>Speed</td><td id="SPEED" align="right">139</td></tr>
	<tr><td>Atk. Spd.</td><td id="ATKSPD" align="right">341</td><td></td><td>Casting Spd.</td><td id="CASTINGSPD" align="right">226</td></tr>
</tbody></table>
</fieldset></td>
<td valign="bottom">
<fieldset>
<legend class="style2">Base Stats</legend>
<table class="statcalc" cellpadding="5">
	<tbody><tr><td>STR</td><td id="STR">41</td><td>DEX</td><td id="DEX">34</td><td>CON</td><td id="CON">32</td></tr>
	<tr><td>INT</td><td id="INT">25</td><td>WIT</td><td id="WIT">12</td><td>MEN</td><td id="MEN">26</td></tr>
</tbody></table>
<table class="statcalc">
<tbody><tr><td colspan="4" class="style2">Tattoos</td>
</tr>
<tr>			<td>1</td>
<td colspan="3">			<select id="tattooslot1nuker" onchange="calc()" style="display: none;"><option value="0" selected="selected">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="49">INT+1 MEN-1</option><option value="50">INT+1 MEN-2</option><option value="51">INT+1 MEN-3</option><option value="52">INT+1 WIT-1</option><option value="53">INT+1 WIT-2</option><option value="54">INT+1 WIT-3</option><option value="55">INT+2 MEN-2</option><option value="56">INT+2 MEN-3</option><option value="57">INT+2 MEN-4</option><option value="58">INT+2 WIT-2</option><option value="59">INT+2 WIT-3</option><option value="60">INT+2 WIT-4</option><option value="61">INT+3 MEN-3</option><option value="62">INT+3 MEN-4</option><option value="63">INT+3 MEN-5</option><option value="64">INT+3 WIT-3</option><option value="65">INT+3 WIT-4</option><option value="66">INT+3 WIT-5</option><option value="67">INT+4 MEN-4</option><option value="68">INT+4 MEN-5</option><option value="69">INT+4 MEN-6</option><option value="70">INT+4 WIT-4</option><option value="71">INT+4 WIT-5</option><option value="72">INT+4 WIT-6</option><option value="73">MEN+1 INT-1</option><option value="74">MEN+1 INT-2</option><option value="75">MEN+1 INT-3</option><option value="76">MEN+1 WIT-1</option><option value="77">MEN+1 WIT-2</option><option value="78">MEN+1 WIT-3</option><option value="79">MEN+2 INT-2</option><option value="80">MEN+2 INT-3</option><option value="81">MEN+2 INT-4</option><option value="82">MEN+2 WIT-2</option><option value="83">MEN+2 WIT-3</option><option value="84">MEN+2 WIT-4</option><option value="85">MEN+3 INT-3</option><option value="86">MEN+3 INT-4</option><option value="87">MEN+3 INT-5</option><option value="88">MEN+3 WIT-3</option><option value="89">MEN+3 WIT-4</option><option value="90">MEN+3 WIT-5</option><option value="91">MEN+4 INT-4</option><option value="92">MEN+4 INT-5</option><option value="93">MEN+4 INT-6</option><option value="94">MEN+4 WIT-4</option><option value="95">MEN+4 WIT-5</option><option value="96">MEN+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="121">WIT+1 INT-1</option><option value="122">WIT+1 INT-2</option><option value="123">WIT+1 INT-3</option><option value="124">WIT+1 MEN-1</option><option value="125">WIT+1 MEN-2</option><option value="126">WIT+1 MEN-3</option><option value="127">WIT+2 INT-2</option><option value="128">WIT+2 INT-3</option><option value="129">WIT+2 INT-4</option><option value="130">WIT+2 MEN-2</option><option value="131">WIT+2 MEN-3</option><option value="132">WIT+2 MEN-4</option><option value="133">WIT+3 INT-3</option><option value="134">WIT+3 INT-4</option><option value="135">WIT+3 INT-5</option><option value="136">WIT+3 MEN-3</option><option value="137">WIT+3 MEN-4</option><option value="138">WIT+3 MEN-5</option><option value="139">WIT+4 INT-4</option><option value="140">WIT+4 INT-5</option><option value="141">WIT+4 INT-6</option><option value="142">WIT+4 MEN-4</option><option value="143">WIT+4 MEN-5</option><option value="144">WIT+4 MEN-6</option></select>
				<select id="tattooslot1fighter" onchange="calc()" style="display: block;"><option value="0" selected="selected">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="52">INT+1 WIT-1</option><option value="53">INT+1 WIT-2</option><option value="54">INT+1 WIT-3</option><option value="58">INT+2 WIT-2</option><option value="59">INT+2 WIT-3</option><option value="60">INT+2 WIT-4</option><option value="64">INT+3 WIT-3</option><option value="65">INT+3 WIT-4</option><option value="66">INT+3 WIT-5</option><option value="70">INT+4 WIT-4</option><option value="71">INT+4 WIT-5</option><option value="72">INT+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="121">WIT+1 INT-1</option><option value="122">WIT+1 INT-2</option><option value="123">WIT+1 INT-3</option><option value="127">WIT+2 INT-2</option><option value="128">WIT+2 INT-3</option><option value="129">WIT+2 INT-4</option><option value="133">WIT+3 INT-3</option><option value="134">WIT+3 INT-4</option><option value="135">WIT+3 INT-5</option><option value="139">WIT+4 INT-4</option><option value="140">WIT+4 INT-5</option><option value="141">WIT+4 INT-6</option></select>
				<select id="tattooslot1healer" onchange="calc()" style="display: none;"><option value="0" selected="selected">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="76">MEN+1 WIT-1</option><option value="77">MEN+1 WIT-2</option><option value="78">MEN+1 WIT-3</option><option value="82">MEN+2 WIT-2</option><option value="83">MEN+2 WIT-3</option><option value="84">MEN+2 WIT-4</option><option value="88">MEN+3 WIT-3</option><option value="89">MEN+3 WIT-4</option><option value="90">MEN+3 WIT-5</option><option value="94">MEN+4 WIT-4</option><option value="95">MEN+4 WIT-5</option><option value="96">MEN+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="124">WIT+1 MEN-1</option><option value="125">WIT+1 MEN-2</option><option value="126">WIT+1 MEN-3</option><option value="130">WIT+2 MEN-2</option><option value="131">WIT+2 MEN-3</option><option value="132">WIT+2 MEN-4</option><option value="136">WIT+3 MEN-3</option><option value="137">WIT+3 MEN-4</option><option value="138">WIT+3 MEN-5</option><option value="142">WIT+4 MEN-4</option><option value="143">WIT+4 MEN-5</option><option value="144">WIT+4 MEN-6</option></select>
</td></tr><tr>
			<td>2</td>
<td colspan="3">			<select id="tattooslot2nuker" onchange="calc()" style="display: none;"><option value="0" selected="selected">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="49">INT+1 MEN-1</option><option value="50">INT+1 MEN-2</option><option value="51">INT+1 MEN-3</option><option value="52">INT+1 WIT-1</option><option value="53">INT+1 WIT-2</option><option value="54">INT+1 WIT-3</option><option value="55">INT+2 MEN-2</option><option value="56">INT+2 MEN-3</option><option value="57">INT+2 MEN-4</option><option value="58">INT+2 WIT-2</option><option value="59">INT+2 WIT-3</option><option value="60">INT+2 WIT-4</option><option value="61">INT+3 MEN-3</option><option value="62">INT+3 MEN-4</option><option value="63">INT+3 MEN-5</option><option value="64">INT+3 WIT-3</option><option value="65">INT+3 WIT-4</option><option value="66">INT+3 WIT-5</option><option value="67">INT+4 MEN-4</option><option value="68">INT+4 MEN-5</option><option value="69">INT+4 MEN-6</option><option value="70">INT+4 WIT-4</option><option value="71">INT+4 WIT-5</option><option value="72">INT+4 WIT-6</option><option value="73">MEN+1 INT-1</option><option value="74">MEN+1 INT-2</option><option value="75">MEN+1 INT-3</option><option value="76">MEN+1 WIT-1</option><option value="77">MEN+1 WIT-2</option><option value="78">MEN+1 WIT-3</option><option value="79">MEN+2 INT-2</option><option value="80">MEN+2 INT-3</option><option value="81">MEN+2 INT-4</option><option value="82">MEN+2 WIT-2</option><option value="83">MEN+2 WIT-3</option><option value="84">MEN+2 WIT-4</option><option value="85">MEN+3 INT-3</option><option value="86">MEN+3 INT-4</option><option value="87">MEN+3 INT-5</option><option value="88">MEN+3 WIT-3</option><option value="89">MEN+3 WIT-4</option><option value="90">MEN+3 WIT-5</option><option value="91">MEN+4 INT-4</option><option value="92">MEN+4 INT-5</option><option value="93">MEN+4 INT-6</option><option value="94">MEN+4 WIT-4</option><option value="95">MEN+4 WIT-5</option><option value="96">MEN+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="121">WIT+1 INT-1</option><option value="122">WIT+1 INT-2</option><option value="123">WIT+1 INT-3</option><option value="124">WIT+1 MEN-1</option><option value="125">WIT+1 MEN-2</option><option value="126">WIT+1 MEN-3</option><option value="127">WIT+2 INT-2</option><option value="128">WIT+2 INT-3</option><option value="129">WIT+2 INT-4</option><option value="130">WIT+2 MEN-2</option><option value="131">WIT+2 MEN-3</option><option value="132">WIT+2 MEN-4</option><option value="133">WIT+3 INT-3</option><option value="134">WIT+3 INT-4</option><option value="135">WIT+3 INT-5</option><option value="136">WIT+3 MEN-3</option><option value="137">WIT+3 MEN-4</option><option value="138">WIT+3 MEN-5</option><option value="139">WIT+4 INT-4</option><option value="140">WIT+4 INT-5</option><option value="141">WIT+4 INT-6</option><option value="142">WIT+4 MEN-4</option><option value="143">WIT+4 MEN-5</option><option value="144">WIT+4 MEN-6</option></select>
				<select id="tattooslot2fighter" onchange="calc()" style="display: block;"><option value="0" selected="selected">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="52">INT+1 WIT-1</option><option value="53">INT+1 WIT-2</option><option value="54">INT+1 WIT-3</option><option value="58">INT+2 WIT-2</option><option value="59">INT+2 WIT-3</option><option value="60">INT+2 WIT-4</option><option value="64">INT+3 WIT-3</option><option value="65">INT+3 WIT-4</option><option value="66">INT+3 WIT-5</option><option value="70">INT+4 WIT-4</option><option value="71">INT+4 WIT-5</option><option value="72">INT+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="121">WIT+1 INT-1</option><option value="122">WIT+1 INT-2</option><option value="123">WIT+1 INT-3</option><option value="127">WIT+2 INT-2</option><option value="128">WIT+2 INT-3</option><option value="129">WIT+2 INT-4</option><option value="133">WIT+3 INT-3</option><option value="134">WIT+3 INT-4</option><option value="135">WIT+3 INT-5</option><option value="139">WIT+4 INT-4</option><option value="140">WIT+4 INT-5</option><option value="141">WIT+4 INT-6</option></select>
				<select id="tattooslot2healer" onchange="calc()" style="display: none;"><option value="0" selected="selected">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="76">MEN+1 WIT-1</option><option value="77">MEN+1 WIT-2</option><option value="78">MEN+1 WIT-3</option><option value="82">MEN+2 WIT-2</option><option value="83">MEN+2 WIT-3</option><option value="84">MEN+2 WIT-4</option><option value="88">MEN+3 WIT-3</option><option value="89">MEN+3 WIT-4</option><option value="90">MEN+3 WIT-5</option><option value="94">MEN+4 WIT-4</option><option value="95">MEN+4 WIT-5</option><option value="96">MEN+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="124">WIT+1 MEN-1</option><option value="125">WIT+1 MEN-2</option><option value="126">WIT+1 MEN-3</option><option value="130">WIT+2 MEN-2</option><option value="131">WIT+2 MEN-3</option><option value="132">WIT+2 MEN-4</option><option value="136">WIT+3 MEN-3</option><option value="137">WIT+3 MEN-4</option><option value="138">WIT+3 MEN-5</option><option value="142">WIT+4 MEN-4</option><option value="143">WIT+4 MEN-5</option><option value="144">WIT+4 MEN-6</option></select>
</td></tr><tr>
			<td>3</td>
<td colspan="3">			<select id="tattooslot3nuker" onchange="calc()" style="display: none;"><option value="0" selected="selected">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="49">INT+1 MEN-1</option><option value="50">INT+1 MEN-2</option><option value="51">INT+1 MEN-3</option><option value="52">INT+1 WIT-1</option><option value="53">INT+1 WIT-2</option><option value="54">INT+1 WIT-3</option><option value="55">INT+2 MEN-2</option><option value="56">INT+2 MEN-3</option><option value="57">INT+2 MEN-4</option><option value="58">INT+2 WIT-2</option><option value="59">INT+2 WIT-3</option><option value="60">INT+2 WIT-4</option><option value="61">INT+3 MEN-3</option><option value="62">INT+3 MEN-4</option><option value="63">INT+3 MEN-5</option><option value="64">INT+3 WIT-3</option><option value="65">INT+3 WIT-4</option><option value="66">INT+3 WIT-5</option><option value="67">INT+4 MEN-4</option><option value="68">INT+4 MEN-5</option><option value="69">INT+4 MEN-6</option><option value="70">INT+4 WIT-4</option><option value="71">INT+4 WIT-5</option><option value="72">INT+4 WIT-6</option><option value="73">MEN+1 INT-1</option><option value="74">MEN+1 INT-2</option><option value="75">MEN+1 INT-3</option><option value="76">MEN+1 WIT-1</option><option value="77">MEN+1 WIT-2</option><option value="78">MEN+1 WIT-3</option><option value="79">MEN+2 INT-2</option><option value="80">MEN+2 INT-3</option><option value="81">MEN+2 INT-4</option><option value="82">MEN+2 WIT-2</option><option value="83">MEN+2 WIT-3</option><option value="84">MEN+2 WIT-4</option><option value="85">MEN+3 INT-3</option><option value="86">MEN+3 INT-4</option><option value="87">MEN+3 INT-5</option><option value="88">MEN+3 WIT-3</option><option value="89">MEN+3 WIT-4</option><option value="90">MEN+3 WIT-5</option><option value="91">MEN+4 INT-4</option><option value="92">MEN+4 INT-5</option><option value="93">MEN+4 INT-6</option><option value="94">MEN+4 WIT-4</option><option value="95">MEN+4 WIT-5</option><option value="96">MEN+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="121">WIT+1 INT-1</option><option value="122">WIT+1 INT-2</option><option value="123">WIT+1 INT-3</option><option value="124">WIT+1 MEN-1</option><option value="125">WIT+1 MEN-2</option><option value="126">WIT+1 MEN-3</option><option value="127">WIT+2 INT-2</option><option value="128">WIT+2 INT-3</option><option value="129">WIT+2 INT-4</option><option value="130">WIT+2 MEN-2</option><option value="131">WIT+2 MEN-3</option><option value="132">WIT+2 MEN-4</option><option value="133">WIT+3 INT-3</option><option value="134">WIT+3 INT-4</option><option value="135">WIT+3 INT-5</option><option value="136">WIT+3 MEN-3</option><option value="137">WIT+3 MEN-4</option><option value="138">WIT+3 MEN-5</option><option value="139">WIT+4 INT-4</option><option value="140">WIT+4 INT-5</option><option value="141">WIT+4 INT-6</option><option value="142">WIT+4 MEN-4</option><option value="143">WIT+4 MEN-5</option><option value="144">WIT+4 MEN-6</option></select>
				<select id="tattooslot3fighter" onchange="calc()" style="display: block;"><option value="0" selected="selected">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="52">INT+1 WIT-1</option><option value="53">INT+1 WIT-2</option><option value="54">INT+1 WIT-3</option><option value="58">INT+2 WIT-2</option><option value="59">INT+2 WIT-3</option><option value="60">INT+2 WIT-4</option><option value="64">INT+3 WIT-3</option><option value="65">INT+3 WIT-4</option><option value="66">INT+3 WIT-5</option><option value="70">INT+4 WIT-4</option><option value="71">INT+4 WIT-5</option><option value="72">INT+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="121">WIT+1 INT-1</option><option value="122">WIT+1 INT-2</option><option value="123">WIT+1 INT-3</option><option value="127">WIT+2 INT-2</option><option value="128">WIT+2 INT-3</option><option value="129">WIT+2 INT-4</option><option value="133">WIT+3 INT-3</option><option value="134">WIT+3 INT-4</option><option value="135">WIT+3 INT-5</option><option value="139">WIT+4 INT-4</option><option value="140">WIT+4 INT-5</option><option value="141">WIT+4 INT-6</option></select>
				<select id="tattooslot3healer" onchange="calc()" style="display: none;"><option value="0" selected="selected">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="76">MEN+1 WIT-1</option><option value="77">MEN+1 WIT-2</option><option value="78">MEN+1 WIT-3</option><option value="82">MEN+2 WIT-2</option><option value="83">MEN+2 WIT-3</option><option value="84">MEN+2 WIT-4</option><option value="88">MEN+3 WIT-3</option><option value="89">MEN+3 WIT-4</option><option value="90">MEN+3 WIT-5</option><option value="94">MEN+4 WIT-4</option><option value="95">MEN+4 WIT-5</option><option value="96">MEN+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="124">WIT+1 MEN-1</option><option value="125">WIT+1 MEN-2</option><option value="126">WIT+1 MEN-3</option><option value="130">WIT+2 MEN-2</option><option value="131">WIT+2 MEN-3</option><option value="132">WIT+2 MEN-4</option><option value="136">WIT+3 MEN-3</option><option value="137">WIT+3 MEN-4</option><option value="138">WIT+3 MEN-5</option><option value="142">WIT+4 MEN-4</option><option value="143">WIT+4 MEN-5</option><option value="144">WIT+4 MEN-6</option></select>
	</td></tr></tbody></table>
</fieldset>
</td>
<td>
<fieldset>
Movement:<br>
<select id="MOVEMODE" onchange="calc()"><option value="1.1" selected="selected">Standing</option><option value="1.5">Sitting</option><option value="0.7">Running</option><option value="1">Walking</option></select><br>
HP:<br>
<input type="radio" name="HPMODIFIER" id="HP1" onclick="calc()" checked="checked">100%<br>
<input type="radio" name="HPMODIFIER" id="HP6" onclick="calc()">60%<br>
<input type="radio" name="HPMODIFIER" id="HP3" onclick="calc()">30%<br>
</fieldset>
</td>

<td>
<fieldset>
<table class="statcalc" width="200">
	<tbody><tr><td>50% Weight Penalty</td><td id="WEIGHT50" align="right">39330</td></tr>
	<tr><td>Weight Limit</td><td id="WEIGHTLIMIT" align="right">78660</td></tr>
	<tr><td>HP Regen</td><td id="HPREGEN" align="right">2.2</td><td></td><td></td><td align="right"></td></tr>
	<tr><td>CP Regen</td><td id="CPREGEN" align="right">2.2</td><td></td><td></td><td align="right"></td></tr>
	<tr><td>MP Regen</td><td id="MPREGEN" align="right">1.1</td><td></td><td></td><td align="right"></td></tr>
</tbody></table>
</fieldset>
</td>
</tr>
</tbody></table>

<fieldset>
	<table class="statcalc" <tr="">			<tbody><tr><td colspan="8">Turn the form display on or off with these:</td></tr>
<tr>			<td width="5"><input type="checkbox" id="COMBATCHECK" onclick="boxgoaway()"></td>
			<td>Combat Calculations</td>
			<td width="5"><input type="checkbox" id="ITEMSCHECK" onclick="boxgoaway()" checked="checked"></td>
			<td>Equipment</td>
			<td width="5"><input type="checkbox" id="PASSIVESCHECK" onclick="boxgoaway()" checked="checked"></td>		
			<td>Passives</td>
			<td width="5"><input type="checkbox" id="BUFFSCHECK" onclick="boxgoaway()" checked="checked"></td>
			<td>Buffs</td>
			<td width="5"><input type="checkbox" id="TOGGLESCHECK" onclick="boxgoaway()" checked="checked"></td>
			<td>Toggles</td>
			<td width="5"><input type="checkbox" id="DEBUFFSCHECK" onclick="boxgoaway()" checked="checked"></td>
			<td>Debuffs</td>
</tr>
</tbody></table>
</fieldset>

<fieldset id="COMBAT" style="display: none;">
<legend><span class="style2">Combat Calculations</span></legend>
	<table class="statcalc">
		<tbody><tr><td>Enemy Target:</td>
			<td><select id="ENEMY" onchange="calc()">
			<option value="TEST" selected="selected">Test Target
			</option></select></td></tr>
		<tr><td>Position</td>
			<td><select id="POSITION" onchange="calc()">
			<option value="1" selected="selected">Both facing each other
			</option><option value="2">Attacking enemy target from the side
			</option><option value="3">Attacking enemy target from behind
			</option><option value="4">Enemy target attacking you from the side
			</option><option value="5">Enemy target attacking you from behind
			</option></select></td></tr>
		<tr><td align="right"><input type="checkbox" id="SOULSHOTS" onclick="calc()" checked="checked"></td><td>Use Soulshots</td>
	</tr>
	</tbody></table>
	<table class="damage">
		<tbody><tr>
	<td align="left" width="100"></td>
		<td width="100">Block Rate</td>
		<td width="100">Total P.Def.</td>
		<td width="100">Average P.Def.<br>w/Shield</td>
		<td width="100"></td>
		<td width="100"></td>
		<td width="100"></td>
		<td width="100"></td>
		</tr>
		<tr>
	<td align="left">Shield Stats</td>
		<td id="SHIELDBLOCKRATE">0%</td>
		<td id="SHIELDPDEF">72</td>
		<td id="AVGSHIELDPDEF">72</td>
		</tr>
		<tr>
	<td align="left"></td>
		<td>Damage per<br>Second</td>
		<td>Hits per<br>Second</td>
		<td>Normal Hit</td>
		<td>Shield Block</td>
		<td>Critical Chance</td>
		<td>Critical Hit<br>(Normal)</td>
		<td>Critical Hit<br>(Shield Block)</td>
		</tr>
		<tr>
	<td align="left">Damage Dealt</td>
		<td id="AVGDMG">0.1</td>
		<td id="HITSPERSECOND">0.68</td>
		<td id="DMGRNG">1-1</td>
		<td id="SHIELDDMGRNG">1-1</td>
		<td id="CRITCHANCE">4.5%</td>
		<td id="CRITDMG">1-1</td>
		<td id="SBCRITDMG">1-1</td>
		</tr>
		<tr>
	<td align="left"></td>
		<td>Damage per<br>Second</td>
		<td>Hits per<br>Second</td>
		<td>Normal Hit</td>
		<td>Shield Block</td>
		<td>Critical Chance</td>
		<td>Critical Hit<br>(Normal)</td>
		<td>Critical Hit<br>(Shield Block)</td>
		</tr>
		<tr>
	<td align="left">Enemy's Damage</td>
		<td id="EAVGDMG">1186.1</td>
		<td id="EHITSPERSECOND">1</td>
		<td id="EDMGRNG">883-1069</td>
		<td id="ESHIELDDMGRNG">-</td>
		<td id="ECRITCHANCE">22%</td>
		<td id="ECRITDMG">1767-2138</td>
		<td id="ESBCRITDMG">-</td>
		</tr>
	</tbody></table>
</fieldset>

<fieldset id="ITEMS" style="display: block;">
<legend><span class="style2">Equipment</span></legend>
	<table class="statcalc">
<tbody><tr>
			<td>Weapon</td>
				<td><select id="WEAPONENCHANT" onchange="calc()" disabled="disabled">
					<option value="0" selected="selected">+0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option><option value="6">+6</option><option value="7">+7</option><option value="8">+8</option><option value="9">+9</option><option value="10">+10</option><option value="11">+11</option><option value="12">+12</option><option value="13">+13</option><option value="14">+14</option><option value="15">+15</option><option value="16">+16</option><option value="17">+17</option><option value="18">+18</option><option value="19">+19</option><option value="20">+20
				</option></select></td>
				<td><select id="WEAPONGRADE" onchange="equipmentgrade();calc()">
					<option value="S" selected="selected">S Grade
					</option><option value="A">A Grade
					</option><option value="B">B Grade
					</option><option value="C">C Grade
					</option><option value="D">D Grade
					</option><option value="N">Non Grade
					</option><option value="H">Hero
				</option></select></td>
				<td>
				<select id="WPNS" onchange="calc(false,true)" style="display: block;">
					<option value="0" selected="selected">Unequipped
					</option><option value="1">Angel Slayer
					</option><option value="2">Arcana Mace
					</option><option value="3">Basalt Battlehammer
					</option><option value="4">Demon Splinter
					</option><option value="5">Draconic Bow
					</option><option value="6">Dragon Hunter Axe
					</option><option value="7">Forgotten Blade
					</option><option value="8">Heavens Divider
					</option><option value="9">Imperial Staff
					</option><option value="10">Saint Spear
					</option><option value="11">Tallum Blade*Dark Legion's Edge
				</option></select>
				<select id="WPNA" onchange="calc(false,true)" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="12">Blood Tornado
					</option><option value="13">Bloody Orchid
					</option><option value="14">Branch of the Mother Tree
					</option><option value="15">Carnage Bow
					</option><option value="16">Damascus*Damascus
					</option><option value="17">Dark Legion's Edge
					</option><option value="18">Dasparion's Staff
					</option><option value="19">Destroyer Hammer
					</option><option value="20">Doom Crusher
					</option><option value="21">Dragon Grinder
					</option><option value="22">Dragon Slayer
					</option><option value="23">Elemental Sword
					</option><option value="24">Elysian Axe
					</option><option value="25">Flaming Dragon Skull
					</option><option value="26">Halberd
					</option><option value="27">Infernal Master
					</option><option value="28">Keshanberk*Damascus
					</option><option value="29">Keshanberk*Keshanberk
					</option><option value="30">Meteor Shower
					</option><option value="31">Soul Bow
					</option><option value="32">Soul Seperator
					</option><option value="33">Spiritual Eye
					</option><option value="34">Sword of Miracles
					</option><option value="35">Tallum Blade
					</option><option value="36">Tallum Glaive
				</option></select>
				<select id="WPNB" onchange="calc(false,true)" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="37">Art of Battle Axe
					</option><option value="38">Arthro Nail
					</option><option value="39">Bellion Cestus
					</option><option value="40">Bow of Peril
					</option><option value="41">Dark Elven Long Bow
					</option><option value="42">Deadman's Glory
					</option><option value="43">Demon's Sword
					</option><option value="44">Great Axe
					</option><option value="45">Great Sword
					</option><option value="46">Guardian Sword
					</option><option value="47">Heavy War Axe
					</option><option value="48">Kaim Vanul's Bones
					</option><option value="49">Hell Knife
					</option><option value="50">Ice Storm Hammer
					</option><option value="51">Keshanberk
					</option><option value="52">Kris
					</option><option value="53">Lance
					</option><option value="54">Spell Breaker
					</option><option value="55">Sprite's Staff
					</option><option value="56">Staff of Evil Spirit
					</option><option value="57">Star Buster
					</option><option value="58">Sword of Damascus
					</option><option value="59">Sword of Valhalla
					</option><option value="60">Wizard's Tear
					</option><option value="61">236/99 Samurai Long Sword*Samurai Long Sword
					</option><option value="62">228/97 Caliburs*Samurai Long Sword
					</option><option value="63">228/97 Sword of Delusion*Samurai Long Sword
					</option><option value="64">228/97 Sword of Limit*Samurai Long Sword
					</option><option value="65">228/97 Sword of Nightmare*Samurai Long Sword
					</option><option value="66">228/97 Tsurugi*Samurai Long Sword
					</option><option value="67">220/94 Katana*Samurai Long Sword
					</option><option value="68">220/94 Raid Sword*Samurai Long Sword
					</option><option value="69">220/94 Shamshir*Samurai Long Sword
					</option><option value="70">220/94 Spirit Sword*Samurai Long Sword
					</option><option value="71">213/91 Caliburs*Caliburs
					</option><option value="72">213/91 Caliburs*Sword of Delusion
					</option><option value="73">213/91 Caliburs*Sword of Limit
					</option><option value="74">213/91 Caliburs*Sword of Nightmare
					</option><option value="75">213/91 Caliburs*Tsurugi
					</option><option value="76">213/91 Stormbringer*Samurai Long Sword
					</option><option value="77">213/91 Sword of Delusion*Sword of Delusion
					</option><option value="78">213/91 Sword of Delusion*Sword of Nightmare
					</option><option value="79">213/91 Sword of Delusion*Tsurugi
					</option><option value="80">213/91 Sword of Limit*Sword of Delusion
					</option><option value="81">213/91 Sword of Limit*Sword of Limit
					</option><option value="82">213/91 Sword of Limit*Sword of Nightmare
					</option><option value="83">213/91 Sword of Limit*Tsurugi
					</option><option value="84">213/91 Sword of Nightmare*Sword of Nightmare
					</option><option value="85">213/91 Sword of Nightmare*Tsurugi
					</option><option value="86">213/91 Tsurugi*Tsurugi
					</option><option value="87">204/89 Katana*Caliburs
					</option><option value="88">204/89 Katana*Sword of Delusion
					</option><option value="89">204/89 Katana*Sword of Limit
					</option><option value="90">204/89 Katana*Sword of Nightmare
					</option><option value="91">204/89 Katana*Tsurugi
					</option><option value="92">204/89 Raid Sword*Caliburs
					</option><option value="93">204/89 Raid Sword*Sword of Delusion
					</option><option value="94">204/89 Raid Sword*Sword of Limit
					</option><option value="95">204/89 Raid Sword*Sword of Nightmare
					</option><option value="96">204/89 Raid Sword*Tsurugi
					</option><option value="97">204/89 Shamshir*Caliburs
					</option><option value="98">204/89 Shamshir*Sword of Delusion
					</option><option value="99">204/89 Shamshir*Sword of Limit
					</option><option value="100">204/89 Shamshir*Sword of Nightmare
					</option><option value="101">204/89 Shamshir*Tsurugi
					</option><option value="102">204/89 Spirit Sword*Caliburs
					</option><option value="103">204/89 Spirit Sword*Sword of Delusion
					</option><option value="104">204/89 Spirit Sword*Sword of Limit
					</option><option value="105">204/89 Spirit Sword*Sword of Nightmare
					</option><option value="106">204/89 Spirit Sword*Tsurugi
					</option><option value="107">197/86 Stormbringer*Caliburs
					</option><option value="108">197/86 Stormbringer*Sword of Delusion
					</option><option value="109">197/86 Stormbringer*Sword of Limit
					</option><option value="110">197/86 Stormbringer*Sword of Nightmare
					</option><option value="111">197/86 Stormbringer*Tsurugi
				</option></select>
				<select id="WPNC" onchange="calc(false,true)" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="0">====Blunt====
					</option><option value="112">156/83 Yaksa Mace
					</option><option value="113">139/76 War Axe
					</option><option value="114">122/68 Dwarven War Hammer
					</option><option value="115">107/61 Battle Axe
					</option><option value="116">107/61 Big Hammer
					</option><option value="117">107/61 Silver Axe
					</option><option value="118">107/61 Skull Graver
					</option><option value="0">====Bow====
					</option><option value="119">323/83 Eminence Bow
					</option><option value="120">316/84 Akat Long Bow
					</option><option value="121">277/75 Elemental Bow
					</option><option value="122">252/68 Noble Elven Bow
					</option><option value="123">220/61 Crystallized Ice Bow
					</option><option value="0">====Dagger====
					</option><option value="124">136/83 Crystal Dagger
					</option><option value="125">122/76 Dark Screamer
					</option><option value="126">122/76 Grace Dagger
					</option><option value="127">107/68 Stiletto
					</option><option value="128">94/61 Cursed Dagger
					</option><option value="129">94/61 Dark Elven Dagger
					</option><option value="0">====Fist====
					</option><option value="130">190/83 Great Pata
					</option><option value="131">169/76 Fist Blade
					</option><option value="132">148/68 Knuckle Duster
					</option><option value="133">130/61 Chakram
					</option><option value="0">====Mystic Weapon (1H)====
					</option><option value="134">125/111 Ecliptic Axe
					</option><option value="135">125/111 Ecliptic Sword
					</option><option value="136">111/101 Club of Nature
					</option><option value="137">111/101 Heathen's Book
					</option><option value="138">111/101 Homunkulus's Sword
					</option><option value="139">111/101 Mace of the Underworld
					</option><option value="140">111/101 Nirvana Axe
					</option><option value="141">111/101 Stick of Eternity
					</option><option value="142">111/101 Sword of Whispering Death
					</option><option value="143">98/91 Horn of Glory
					</option><option value="144">86/91 Soulfire Dirk
					</option><option value="145">85/81 Mysterious Sword
					</option><option value="146">85/81 Stick of Faith
					</option><option value="0">====Mystic Weapon (2h)====
					</option><option value="147">151/111 Deadman's Staff
					</option><option value="148">151/111 Demon's Staff
					</option><option value="149">152/111 Ghoul's Staff
					</option><option value="150">141/104 Pa'agrio Axe
					</option><option value="151">135/101 Pa'agrio Hammer
					</option><option value="152">135/101 Paradia Staff
					</option><option value="153">135/101 Sage's Staff
					</option><option value="154">119/91 Cursed Staff
					</option><option value="155">103/81 Crystal Staff
					</option><option value="156">103/81 Heavy Doom Axe
					</option><option value="157">103/81 Heavy Doom Hammer
					</option><option value="0">====Polearm====
					</option><option value="158">156/83 Orcish Poleaxe
					</option><option value="159">144/78 Scorpion
					</option><option value="160">144/78 Widow Maker
					</option><option value="341">139/76 Poleaxe
					</option><option value="161">122/68 Bec de Corbin
					</option><option value="162">107/61 Body Slasher
					</option><option value="163">107/61 Orcish Glaive
					</option><option value="164">107/61 Scythe
					</option><option value="0">====Sword====
					</option><option value="165">156/83 Samurai Longsword
					</option><option value="166">139/76 Caliburs
					</option><option value="167">139/76 Sword of Delusion
					</option><option value="168">139/76 Sword of Limit
					</option><option value="169">139/76 Sword of Nightmare
					</option><option value="170">139/76 Tsurugi
					</option><option value="171">122/68 Katana
					</option><option value="172">122/68 Raid Sword
					</option><option value="173">122/68 Shamshir
					</option><option value="174">122/68 Spirit Sword
					</option><option value="175">107/61 Stormbringer
					</option><option value="0">====Two-Handed Blunt====
					</option><option value="176">190/83 Dwarven Hammer
					</option><option value="177">169/76 Karik Horn
					</option><option value="0">====Two-Handed Sword====
					</option><option value="178">190/83 Berserker Blade
					</option><option value="179">169/76 Pa'agrian Sword
					</option><option value="180">130/61 Flamberge
					</option><option value="0">====Dual Sword====
					</option><option value="181">190/83 Katana*Katana
					</option><option value="182">190/83 Katana*Raid Sword
					</option><option value="183">190/83 Katana*Spirit Sword
					</option><option value="184">190/83 Raid Sword*Raid Sword
					</option><option value="185">190/83 Shamshir*Katana
					</option><option value="186">190/83 Shamshir*Raid Sword
					</option><option value="187">190/83 Shamshir*Shamshir
					</option><option value="188">190/83 Shamshir*Spirit Sword
					</option><option value="189">190/83 Spirit Sword*Raid Sword
					</option><option value="190">190/83 Spirit Sword*Spirit Sword
					</option><option value="191">183/81 Stormbringer*Katana
					</option><option value="192">183/81 Stormbringer*Raid Sword
					</option><option value="193">183/81 Stormbringer*Shamshir
					</option><option value="194">183/81 Stormbringer*Spirit Sword
					</option><option value="195">175/78 Stormbringer*Stormbringer
					</option><option value="196">162/73 Elven Long Sword*Elven Long Sword
					</option><option value="197">155/70 Sword of Revolution*Elven Long Sword
					</option><option value="198">148/68 Crimson Sword*Elven Long Sword
					</option><option value="199">148/68 Elven Sword*Elven Long Sword
					</option><option value="200">148/68 Sword of Revolution*Sword of Revolution
					</option><option value="201">136/63 Artisan's Sword*Elven Long Sword
					</option><option value="201">136/63 Bastard Sword*Elven Long Sword
					</option><option value="201">136/63 Crimson Sword*Sword of Revolution
					</option><option value="201">136/63 Elven Sword*Sword of Revolution
					</option><option value="201">136/63 Knight's Sword*Elven Long Sword
					</option><option value="201">136/63 Spinebone Sword*Elven Long Sword
					</option><option value="202">130/61 Saber*Elven Long Sword
					</option><option value="203">124/58 Artisan's Sword*Sword of Revolution
					</option><option value="203">124/58 Bastard Sword*Sword of Revolution
					</option><option value="203">124/58 Knight's Sword*Elven Long Sword
					</option><option value="203">124/58 Spinebone Sword*Sword of Revolution
					</option><option value="204">118/56 Crimson Sword*Crimson Sword
					</option><option value="204">118/56 Crimson Sword*Elven Sword
					</option><option value="204">118/56 Elven Sword*Elven Sword
					</option><option value="204">118/56 Saber*Sword of Revolution
				</option></select>
				<select id="WPND" onchange="calc(false,true)" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="0">====Blunt====
					</option><option value="205">92/54 Bonebreaker
					</option><option value="206">79/47 Heavy Bone Club
					</option><option value="206">79/47 Morning Star
					</option><option value="206">79/47 Skull Breaker
					</option><option value="206">79/47 Tarbar
					</option><option value="207">64/39 Spiked Club
					</option><option value="208">51/32 Tomahawk
					</option><option value="208">51/32 Traveler's Tomahawk
					</option><option value="209">40/26 Hand Axe
					</option><option value="209">40/26 Heavy Mace
					</option><option value="209">40/26 Scalpel
					</option><option value="209">40/26 Work Hammer
					</option><option value="0">====Bow====
					</option><option value="210">191/54 Light Crossbow
					</option><option value="211">179/51 Strengthened Long Bow
					</option><option value="212">132/39 Gastraphetes
					</option><option value="213">114/35 Long Bow
					</option><option value="213">114/35 Traveler's Long Bow
					</option><option value="214">105/32 Dark Elven Bow
					</option><option value="214">105/32 Elven Bow
					</option><option value="214">105/32 Traveler's Dark Elven Bow
					</option><option value="215">82/26 Strengthened Bow
					</option><option value="0">====Dagger====
					</option><option value="216">80/54 Mithril Dagger
					</option><option value="217">69/47 Maingauche
					</option><option value="218">62/42 Cursed Maingauche
					</option><option value="219">56/39 Kukuri
					</option><option value="220">45/32 Poniard Dagger
					</option><option value="220">45/32 Traveler's Poniard Dagger
					</option><option value="221">35/26 Assassin Knife
					</option><option value="221">35/26 Crafted Dagger
					</option><option value="0">====Fist====
					</option><option value="222">112/54 Scallop Jamadhar
					</option><option value="223">96/47 Bich'Hwa
					</option><option value="224">78/39 Triple-Edged_Jamadhar
					</option><option value="225">62/32 Single-Edged Jamadhar
					</option><option value="225">62/32 Traveler's Jamadhar
					</option><option value="226">49/26 Bagh-Nakh
					</option><option value="0">====Mystic Weapon (1h)====
					</option><option value="227">74/72 Staff of Life
					</option><option value="228">67/66 Demon Fangs
					</option><option value="229">63/63 Crucifix of Blood
					</option><option value="230">63/63 Priest Mace
					</option><option value="231">51/52 Blood of Saints
					</option><option value="232">45/52 Conjurer's Knife
					</option><option value="232">45/52 Dagger of Mana
					</option><option value="232">45/52 Mystic Knife
					</option><option value="232">45/52 Shillien Knife
					</option><option value="233">51/52 Tome of Blood
					</option><option value="234">43/45 Sword of Magic
					</option><option value="234">43/45 Sword of Mystic
					</option><option value="234">43/45 Sword of Occult
					</option><option value="235">41/43 Divine Tome
					</option><option value="236">41/43 Doom Hammer
					</option><option value="236">41/43 Mace of Judgment
					</option><option value="236">41/43 Mace of Miracle
					</option><option value="236">41/43 Mace of Prayer
					</option><option value="236">41/43 Traveler's Mace
					</option><option value="237">41/43 Traveler's Spellbook
					</option><option value="238">32/35 Branch of Life
					</option><option value="239">32/35 Priest Sword
					</option><option value="240">32/35 Proof of Revenge
					</option><option value="240">32/35 Scroll of Wisdom
					</option><option value="240">32/35 Tempation of Abyss
					</option><option value="0">====Mystic Weapon (2h)====
					</option><option value="241">90/72 Atuba Hammer
					</option><option value="241">90/72 Atuba Mace
					</option><option value="241">90/72 Ghost Staff
					</option><option value="242">77/63 Goat Head Staff
					</option><option value="243">62/52 Staff of Magic
					</option><option value="244">50/43 Conjurors_Staff
					</option><option value="244">50/43 Mystic Staff
					</option><option value="244">50/43 Staff of Mana
					</option><option value="244">50/43 Traveler's Staff
					</option><option value="245">39/35 Bone Staff
					</option><option value="0">====Polearm====
					</option><option value="246">92/54 Glaive
					</option><option value="247">79/47 War Pick
					</option><option value="247">79/47 Winged Spear
					</option><option value="248">64/39 Dwarven Pike
					</option><option value="248">64/39 War Hammer
					</option><option value="249">51/32 Dwarven Trident
					</option><option value="249">51/32 Pike
					</option><option value="249">51/32 Traveler's Pike
					</option><option value="250">40/26 Trident
					</option><option value="0">====Sword====
					</option><option value="251">92/54 Elven Long Sword
					</option><option value="252">79/47 Sword of Revolution
					</option><option value="253">64/39 Crimson Sword
					</option><option value="253">64/39 Elven Sword
					</option><option value="254">51/32 Artisan's Sword
					</option><option value="254">51/32 Bastard Sword
					</option><option value="254">51/32 Knight's Sword
					</option><option value="254">51/32 Spinebone Sword
					</option><option value="254">51/32 Traveler's Bastard Sword
					</option><option value="255">40/26 Saber
					</option><option value="0">====Two-Handed Blunt====
					</option><option value="256">96/47 Titan Hammer
					</option><option value="0">====Two-Handed Sword====
					</option><option value="257">112/54 Claymore
					</option><option value="258">96/47 Titan Sword
					</option><option value="259">78/39 Two-Handed Sword
					</option><option value="260">49/26 Heavy Sword
					</option><option value="0">====Dual Sword====
					</option><option value="261">107/51 Artisan's Sword*Crimson Sword
					</option><option value="261">107/51 Artisan's Sword*Elven Sword
					</option><option value="261">107/51 Bastard Sword*Crimson Sword
					</option><option value="261">107/51 Bastard Sword*Elven Sword
					</option><option value="261">107/51 Knight's Sword*Crimson Sword
					</option><option value="261">107/51 Knight's Sword*Elven Sword
					</option><option value="261">107/51 Spinebone Sword*Crimson Sword
					</option><option value="261">107/51 Spinebone Sword*Elven Sword
					</option><option value="262">96/47 Artisan's Sword*Artisan's Sword
					</option><option value="262">96/47 Artisan's Sword*Knight's Sword
					</option><option value="262">96/47 Bastard Sword*Artisan's Sword
					</option><option value="262">96/47 Bastard Sword*Bastard Sword
					</option><option value="262">96/47 Bastard Sword*Knight's Sword
					</option><option value="262">96/47 Bastard Sword*Spinebone Sword
					</option><option value="262">96/47 Knight's Sword*Knight's Sword
					</option><option value="262">96/47 Saber*Crimson Sword
					</option><option value="262">96/47 Saber*Elven Sword
					</option><option value="262">96/47 Spinebone Sword*Artisan's Sword
					</option><option value="262">96/47 Spinebone Sword*Knight's Sword
					</option><option value="262">96/47 Spinebone Sword*Spinebone Sword
					</option><option value="263">83/41 Saber*Artisan's Sword
					</option><option value="263">83/41 Saber*Bastard Sword
					</option><option value="263">83/41 Saber*Knight's Sword
					</option><option value="263">83/41 Saber*Spinebone Sword
					</option><option value="264">73/37 Saber*Saber
				</option></select>
				<select id="WPNN" onchange="calc(false,true)" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="0">====Blunt====
					</option><option value="265">31/21 Buzdygan
					</option><option value="265">31/21 Iron Hammer
					</option><option value="266">24/17 Apprentice Adventurer's Bone Club
					</option><option value="266">24/17 Bone Club
					</option><option value="267">17/12 Dwarven Mace
					</option><option value="268">13/10 Silversmith Hammer
					</option><option value="269">12/9 Sickle
					</option><option value="270">10/9 Mace
					</option><option value="271">10/8 Heavy Chisel
					</option><option value="272">6/6 Club
					</option><option value="273">6/5 Guild Member's Club
					</option><option value="0">====Bow====
					</option><option value="274">64/21 Composition Bow
					</option><option value="275">49/17 Apprentice Adventurer's Bow
					</option><option value="275">49/17 Forest Bow
					</option><option value="276">45/16 Neti's Bow
					</option><option value="277">34/12 Crescent Moon Bow
					</option><option value="277">34/12 Hunting Bow
					</option><option value="278">23/9 Bow
					</option><option value="279">16/6 Short Bow
					</option><option value="0">====Dagger====
					</option><option value="280">27/21 Sword Breaker
					</option><option value="281">21/17 Apprentice Adventurer's Knife
					</option><option value="281">21/17 Shining Knife
					</option><option value="281">21/17 Throwing Knife
					</option><option value="282">19/16 Neti's Dagger
					</option><option value="283">15/12 Dirk
					</option><option value="284">11/10 Eldritch Dagger
					</option><option value="285">10/9 Cybellin's Dagger
					</option><option value="285">10/9 Doom Dagger
					</option><option value="285">10/9 Knife
					</option><option value="285">10/9 Pipette Knife
					</option><option value="286">7/6 Bone Dagger
					</option><option value="287">5/5 Dagger
					</option><option value="0">====Fist====
					</option><option value="288">38/21 Viper's Fang
					</option><option value="289">29/17 Apprentice Adventurer's Cestus
					</option><option value="289">29/17 Cestus
					</option><option value="290">21/12 Fox Claw Gloves
					</option><option value="291">16/10 Fist of Butcher
					</option><option value="292">13/9 Iron Gloves
					</option><option value="293">10/6 Spiked Gloves
					</option><option value="294">7/5 Training Gloves
					</option><option value="295">1/1 Chrono Unitus
					</option><option value="0">====Mystic Weapon (1h)====
					</option><option value="296">25/28 Crucifix of Blessing
					</option><option value="296">25/28 Voodoo Doll
					</option><option value="297">19/22 Relic of the Saints
					</option><option value="297">19/22 Tears of Eva
					</option><option value="298">11/13 Wand of Adept
					</option><option value="299">9/12 Apprentice's Spellbook
					</option><option value="300">6/8 Apprentice's Rod
					</option><option value="300">6/8 Buffalo's Horn
					</option><option value="301">5/7 Apprentice's Wand
					</option><option value="0">====Mystic Weapon (2h)====
					</option><option value="302">30/28 Mage Staff
					</option><option value="303">23/22 Apprentice Adventurer's Staff
					</option><option value="303">23/22 Journeyman's Staff
					</option><option value="304">16/16 Cedar Staff
					</option><option value="305">13/14 Staff of Sentinel
					</option><option value="306">13/13 Red Sunset Staff
					</option><option value="307">11/12 Willow Staff
					</option><option value="308">10/10 Gallint's Oak Wand
					</option><option value="309">1/1 Chrono Darbuka
					</option><option value="0">====Polearm====
					</option><option value="310">31/21 Long Spear
					</option><option value="311">24/17 Talins Spear
					</option><option value="312">24/17 Short Spear
					</option><option value="313">1/1 Chrono Campana
					</option><option value="0">====Sword====
					</option><option value="314">31/21 Falchion
					</option><option value="315">24/17 Apprentice Adventurer's Long Sword
					</option><option value="315">24/17 Long Sword
					</option><option value="315">24/17 Sword of Reflection
					</option><option value="315">24/17 Sword of Watershadow
					</option><option value="316">18/21 Rusted Bronze Sword
					</option><option value="317">17/12 Gladius
					</option><option value="317">17/12 Handmade Sword
					</option><option value="317">17/12 Orcish Sword
					</option><option value="317">17/12 Sword of Binding
					</option><option value="318">14/11 Blood Saber
					</option><option value="318">14/11 Sword of Sentinel
					</option><option value="319">13/10 Butcher's Sword
					</option><option value="320">12/9 Sword of Solidarity
					</option><option value="321">11/9 Broadsword
					</option><option value="322">8/6 Short Sword
					</option><option value="323">6/5 Squire's Sword
					</option><option value="324">1/1 Chrono Cithara
					</option><option value="0">====Two-Handed Sword====
					</option><option value="325">38/21 Zweihander
					</option><option value="326">29/17 Old Knight's Sword
					</option><option value="327">21/12 Brandish
					</option><option value="328">16/10 Red Sunset Sword
					</option><option value="0">====Duals====
					</option><option value="329">Chrono Maracas
				</option></select>
				<select id="WPNH" onchange="calc(false,true)" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="330">Infinity Axe
					</option><option value="331">Infinity Blade
					</option><option value="332">Infinity Bow
					</option><option value="333">Infinity Cleaver
					</option><option value="334">Infinity Crusher
					</option><option value="335">Infinity Fang
					</option><option value="336">Infinity Rod
					</option><option value="337">Infinity Scepter
					</option><option value="338">Infinity Spear
					</option><option value="339">Infinity Stinger
					</option><option value="340">Infinity Wing
				</option></select>
				</td>
				<td>
				<select id="WEAPONSA" onchange="calc()">
				<option value="no SA" selected="selected">no SA</option></select>
				</td>
				<td id="weapon grade penalty"> </td></tr>
<tr>			<td colspan="3" align="right">Quickselect an armor set:</td>
				<td><select id="FULLSET" onchange="equipmentgrade(true,false);calc()">
					<option selected="selected">====S Grade====
					</option><option value="Draconic">Draconic
					</option><option value="Imperial_Crusader">Imperial Crusader
					</option><option value="Major_Arcana">Major Arcana
					</option><option>====A Grade====
					</option><option value="Apella_Heavy">(Hvy) Apella
					</option><option value="Dark_Crystal_Heavy">(Hvy) Dark Crystal
					</option><option value="Majestic_Heavy">(Hvy) Majestic
					</option><option value="Nightmare_Heavy">(Hvy) Nightmare
					</option><option value="Tallum_Heavy">(Hvy) Tallum
					</option><option value="Apella_Light">(Lgt) Apella
					</option><option value="Dark_Crystal_Light">(Lgt) Dark Crystal
					</option><option value="Majestic_Light">(Lgt) Majestic
					</option><option value="Nightmare_Light">(Lgt) Nightmare
					</option><option value="Tallum_Light">(Lgt) Tallum
					</option><option value="Apella_Robe">(Rb) Apella
					</option><option value="Dark_Crystal_Robe">(Rb) Dark Crystal
					</option><option value="Majestic_Robe">(Rb) Majestic
					</option><option value="Nightmare_Robe">(Rb) Nightmare
					</option><option value="Tallum_Robe">(Rb) Tallum
					</option><option>====B Grade====
					</option><option value="Avadon_Heavy">(Hvy) Avadon
					</option><option value="Blue_Wolf_Heavy">(Hvy) Blue Wolf
					</option><option value="Doom_Heavy">(Hvy) Doom
					</option><option value="Zubei_Heavy">(Hvy) Zubei
					</option><option value="Avadon_Light">(Lgt) Avadon
					</option><option value="Blue_Wolf_Light">(Lgt) Blue Wolf
					</option><option value="Doom_Light">(Lgt) Doom
					</option><option value="Zubei_Light">(Lgt) Zubei
					</option><option value="Avadon_Robe">(Rb) Avadon
					</option><option value="Blue_Wolf_Robe">(Rb) Blue Wolf
					</option><option value="Doom_Robe">(Rb) Doom
					</option><option value="Zubei_Robe">(Rb) Zubei
					</option><option>====C Grade====
					</option><option value="Chain_Mail">Chain Mail
					</option><option value="Composite">Composite
					</option><option value="Demon">Demon
					</option><option value="Divine">Divine
					</option><option value="Drake">Drake
					</option><option value="Full_Plate">Full Plate
					</option><option value="Karmian">Karmian
					</option><option value="Mithril_Light">Mithril (Light)
					</option><option value="Plated_Leather">Plated Leather
					</option><option value="Theca">Theca
					</option><option>====D Grade====
					</option><option value="Brigandine">Brigandine
					</option><option value="Clan_Oath_Heavy">Clan Oath (Heavy)
					</option><option value="Clan_Oath_Light">Clan Oath (Light)
					</option><option value="Clan_Oath_Robe">Clan Oath (Robe)
					</option><option value="Elven_Mithril">Elven Mithril
					</option><option value="Knowledge">Knowledge
					</option><option value="Manticore">Manticore
					</option><option value="Mithril_Heavy">Mithril (Heavy)
					</option><option value="Reinforced_Leather">Reinforced Leather
					</option><option>====No Grade====
					</option><option value="Devotion">Devotion
					</option><option value="Wooden">Wooden
				</option></select></td>
</tr>
<tr id="shieldstuff">
			<td>Shield</td>
				<td><select id="SHIELDENCHANT" onchange="calc()" disabled="disabled">
					<option value="0" selected="selected">+0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option><option value="6">+6</option><option value="7">+7</option><option value="8">+8</option><option value="9">+9</option><option value="10">+10</option><option value="11">+11</option><option value="12">+12</option><option value="13">+13</option><option value="14">+14</option><option value="15">+15</option><option value="16">+16</option><option value="17">+17</option><option value="18">+18</option><option value="19">+19</option><option value="20">+20
				</option></select></td>
				<td><select id="SHIELDGRADE" onchange="equipmentgrade();calc()">
					<option value="S" selected="selected">S Grade
					</option><option value="A">A Grade
					</option><option value="B">B Grade
					</option><option value="C">C Grade
					</option><option value="D">D Grade
					</option><option value="N">Non Grade
				</option></select></td>
				<td><select id="SHIELDS" onchange="calc()" style="display: block;">
					<option value="0" selected="selected">Unequipped
					</option><option value="14">Imperial Crusader Shield
				</option></select>
				<select id="SHIELDA" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="8">Dark Crystal Shield
					</option><option value="22">Shield of Nightmare
				</option></select>
				<select id="SHIELDB" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="2">Avadon Shield
					</option><option value="9">Doom Shield
					</option><option value="27">Zubei's Shield
				</option></select>
				<select id="SHIELDC" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="7">Chain Shield
					</option><option value="28">Composite Shield
					</option><option value="10">Dwarven Chain Shield
					</option><option value="11">Eldarake
					</option><option value="12">Full Plate Shield
					</option><option value="16">Knight Shield
					</option><option value="26">Tower Shield
				</option></select>
				<select id="SHIELDD" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="1">Aspis
					</option><option value="4">Brigandine Shield
					</option><option value="5">Bronze Shield
					</option><option value="13">Hoplon
					</option><option value="15">Kite Shield
					</option><option value="18">Plate Shield
					</option><option value="25">Square Shield
				</option></select>
				<select id="SHIELDN" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="3">Bone Shield
					</option><option value="6">Buckler
					</option><option value="17">Leather Shield
					</option><option value="19">Pledge Shield
					</option><option value="20">Round Shield
					</option><option value="21">Shield of Castle Pledge
					</option><option value="23">Skeleton Buckler
					</option><option value="24">Small Shield
				</option></select>
				</td>
				<td></td>
				<td id="shield grade penalty"> </td></tr>
<tr>
			<td>Helmet</td>
				<td><select id="HELMETENCHANT" onchange="calc()" disabled="disabled">
					<option value="0" selected="selected">+0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option><option value="6">+6</option><option value="7">+7</option><option value="8">+8</option><option value="9">+9</option><option value="10">+10</option><option value="11">+11</option><option value="12">+12</option><option value="13">+13</option><option value="14">+14</option><option value="15">+15</option><option value="16">+16</option><option value="17">+17</option><option value="18">+18</option><option value="19">+19</option><option value="20">+20
				</option></select></td>
				<td><select id="HELMETGRADE" onchange="equipmentgrade();calc()">
					<option value="S" selected="selected">S Grade
					</option><option value="A">A Grade
					</option><option value="B">B Grade
					</option><option value="C">C Grade
					</option><option value="D">D Grade
					</option><option value="N">Non Grade
				</option></select></td>
				<td><select id="HELMETS" onchange="calc()" style="display: block;">
					<option value="0" selected="selected">Unequipped
					</option><option value="1">Draconic Leather Helmet
					</option><option value="2">Imperial Crusader Helmet
					</option><option value="3">Major Arcana Circlet
				</option></select>
				<select id="HELMETA" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="4">Apella Cap (R)
					</option><option value="5">Apella Great Helm (H)
					</option><option value="6">Apella Helm (L)
					</option><option value="7">Dark Crystal Helmet
					</option><option value="8">Helm of Nightmare
					</option><option value="9">Majestic Circlet
					</option><option value="10">Tallum Helm
				</option></select>
				<select id="HELMETB" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="11">Avadon Circlet
					</option><option value="12">Blue Wolf Helmet
					</option><option value="13">Doom Helmet
					</option><option value="14">Zubei's Helmet
				</option></select>
				<select id="HELMETC" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="15">Chain Hood
					</option><option value="16">Composite Helmet
					</option><option value="17">Full Plate Helmet
					</option><option value="18">Great Helmet
					</option><option value="19">Shining Circlet
				</option></select>
				<select id="HELMETD" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="20">Bone Helmet
					</option><option value="21">Brigandine Helmet
					</option><option value="22">Bronze Helmet
					</option><option value="23">Clan Oath Cap (R)
					</option><option value="24">Clan Oath Great Helm (H)
					</option><option value="25">Clan Oath Helm (L)
					</option><option value="26">Helmet
					</option><option value="27">Plate Helmet
				</option></select>
				<select id="HELMETN" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="28">Cloth Cap
					</option><option value="29">Hard Leather Helmet
					</option><option value="30">Leather Cap
					</option><option value="31">Leather Helmet
					</option><option value="32">Wooden Helmet
				</option></select>
				</td>
				<td></td>
				<td id="helmet grade penalty"> </td></tr>
<tr>
			<td>Body - Upper</td>
				<td><select id="UPPERENCHANT" onchange="calc()" disabled="disabled">
					<option value="0" selected="selected">+0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option><option value="6">+6</option><option value="7">+7</option><option value="8">+8</option><option value="9">+9</option><option value="10">+10</option><option value="11">+11</option><option value="12">+12</option><option value="13">+13</option><option value="14">+14</option><option value="15">+15</option><option value="16">+16</option><option value="17">+17</option><option value="18">+18</option><option value="19">+19</option><option value="20">+20
				</option></select></td>
				<td><select id="UPPERGRADE" onchange="equipmentgrade();calc()">
					<option value="S" selected="selected">S Grade
					</option><option value="A">A Grade
					</option><option value="B">B Grade
					</option><option value="C">C Grade
					</option><option value="D">D Grade
					</option><option value="N">Non Grade
				</option></select></td>
				<td><select id="UPPERS" onchange="calc()" style="display: block;">
					<option value="0" selected="selected">Unequipped
					</option><option value="31">Draconic Leather Armor
					</option><option value="40">Imperial Crusader Breastplate
					</option><option value="49">Major Arcana Robe
				</option></select>
				<select id="UPPERA" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="1">Apella Brigandine
					</option><option value="2">Apella Doublet
					</option><option value="3">Apella Plate Armor
					</option><option value="5">Armor of Nightmare
					</option><option value="25">Dark Crystal Leather Armor
					</option><option value="26">Dark Crystal Breastplate
					</option><option value="27">Dark Crystal Robe
					</option><option value="46">Majestic Leather Armor
					</option><option value="47">Majestic Plate Armor
					</option><option value="48">Majestic Robe
					</option><option value="56">Nightmarish Leather Armor
					</option><option value="63">Robe of Nightmare
					</option><option value="70">Tallum Leather Armor
					</option><option value="71">Tallum Plate Armor
					</option><option value="72">Tallum Tunic
				</option></select>
				<select id="UPPERB" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="6">Avadon Breastplate
					</option><option value="7">Avadon Leather Armor
					</option><option value="8">Avadon Robe
					</option><option value="10">Blue Wolf Breastplate
					</option><option value="11">Blue Wolf Leather Armor
					</option><option value="12">Blue Wolf Tunic
					</option><option value="30">Doom Plate Armor
					</option><option value="42">Leather Armor of Doom
					</option><option value="76">Tunic of Doom
					</option><option value="79">Tunic of Zubei
					</option><option value="82">Zubei's Breastplate
					</option><option value="83">Zubei's Leather Shirt
				</option></select>
				<select id="UPPERC" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="16">Chain Mail Shirt
					</option><option value="20">Composite Armor
					</option><option value="28">Demon's Tunic
					</option><option value="29">Divine Tunic
					</option><option value="32">Drake Leather Armor
					</option><option value="33">Dwarven Chain Mail Shirt
					</option><option value="37">Full Plate Armor
					</option><option value="41">Karmian Tunic
					</option><option value="53">Mithril Shirt
					</option><option value="58">Plated Leather
					</option><option value="64">Robe of Seal
					</option><option value="61">Rind Leather Armor
					</option><option value="73">Theca Leather Armor
				</option></select>
				<select id="UPPERD" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="9">Blast Plate
					</option><option value="14">Brigandine Tunic
					</option><option value="17">Clan Oath Aketon
					</option><option value="18">Clan Oath Brigandine
					</option><option value="19">Clan Oath Plate Armor
					</option><option value="21">Compound Scale Mail
					</option><option value="24">Cursed Tunic
					</option><option value="34">Dwarven Scale Mail
					</option><option value="35">Elven Tunic
					</option><option value="38">Half Plate Armor
					</option><option value="45">Lion Skin Shirt
					</option><option value="50">Manticore Skin Shirt
					</option><option value="51">Mithril Banded Mail
					</option><option value="52">Mithril Breastplate
					</option><option value="54">Mithril Tunic
					</option><option value="55">Mystic's Tunic
					</option><option value="59">Puma Skin Shirt
					</option><option value="60">Reinforced Leather Shirt
					</option><option value="62">Ring Mail Breastplate
					</option><option value="65">Sage's Rag
					</option><option value="66">Salamander Skin Mail
					</option><option value="67">Scale Mail
					</option><option value="77">Tunic of Knowledge
					</option><option value="80">White Tunic
				</option></select>
				<select id="UPPERN" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="4">Apprentice's Tunic
					</option><option value="13">Bone Breastplate
					</option><option value="15">Bronze Breastplate
					</option><option value="22">Cotton Shirt
					</option><option value="23">Cotton Tunic
					</option><option value="36">Feriotic Tunic
					</option><option value="39">Hard Leather Shirt
					</option><option value="43">Leather Shirt
					</option><option value="44">Leather Tunic
					</option><option value="57">Piece Bone Breastplate
					</option><option value="68">Shirt
					</option><option value="69">Squire's Shirt
					</option><option value="74">Tunic
					</option><option value="75">Tunic of Devotion
					</option><option value="78">Tunic of Magic
					</option><option value="81">Wooden Breastplate
				</option></select>
				</td>
				<td></td>
				<td id="upper grade penalty"> </td></tr>
<tr>
			<td>Body - Lower</td>
				<td><select id="LOWERENCHANT" onchange="calc()" disabled="disabled">
					<option value="0" selected="selected">+0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option><option value="6">+6</option><option value="7">+7</option><option value="8">+8</option><option value="9">+9</option><option value="10">+10</option><option value="11">+11</option><option value="12">+12</option><option value="13">+13</option><option value="14">+14</option><option value="15">+15</option><option value="16">+16</option><option value="17">+17</option><option value="18">+18</option><option value="19">+19</option><option value="20">+20
				</option></select></td>
				<td><select id="LOWERGRADE" onchange="equipmentgrade();calc()">
					<option value="S" selected="selected">S Grade
					</option><option value="A">A Grade
					</option><option value="B">B Grade
					</option><option value="C">C Grade
					</option><option value="D">D Grade
					</option><option value="N">Non Grade
				</option></select></td>
				<td><select id="LOWERS" onchange="calc()" style="display: block;">
					<option value="0" selected="selected">Unequipped
					</option><option value="24">Imperial Crusader Gaiters
				</option></select>
				<select id="LOWERA" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="13">Dark Crystal Gaiters
					</option><option value="14">Dark Crystalline Leggings
					</option><option value="46">Tallum Stockings
				</option></select>
				<select id="LOWERB" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="2">Avadon Gaiters
					</option><option value="3">Blue Wolf Gaiters
					</option><option value="4">Blue Wolf Stockings
					</option><option value="51">Stockings of Doom
					</option><option value="53">Stockings of Zubei
					</option><option value="55">Zubei's Gaiters
					</option><option value="56">Zubei's Leather Gaiters
				</option></select>
				<select id="LOWERC" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="8">Chain Gaiters
					</option><option value="16">Demon's Stockings
					</option><option value="17">Divine Stockings
					</option><option value="18">Dwarven Chain Gaiters
					</option><option value="26">Karmian Stockings
					</option><option value="39">Plated Leather Gaiters
					</option><option value="42">Rind Leather Gaiters
					</option><option value="47">Tempered Mithril Gaiters
					</option><option value="48">Theca Leather Gaiters
				</option></select>
				<select id="LOWERD" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="6">Brigandine Gaiters
					</option><option value="9">Compound Scale Gaiters
					</option><option value="12">Cursed Stockings
					</option><option value="15">Dark Stockings
					</option><option value="19">Dwarven Scale Gaiters
					</option><option value="20">Elven Stockings
					</option><option value="25">Iron Plate Gaiters
					</option><option value="29">Lion Skin Gaiters
					</option><option value="30">Manticore Skin Gaiters
					</option><option value="31">Mithril Banded Gaiters
					</option><option value="32">Mithril Gaiters
					</option><option value="33">Mithril Scale Gaiters
					</option><option value="34">Mithril Stockings
					</option><option value="35">Mystic's Stockings
					</option><option value="38">Plate Gaiters
					</option><option value="40">Puma Skin Gaiters
					</option><option value="41">Reinforced Leather Gaiters
					</option><option value="49">Scale Gaiters
					</option><option value="52">Stockings of Knowledge
				</option></select>
				<select id="LOWERN" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="1">Apprentice's Stockings
					</option><option value="5">Bone Gaiters
					</option><option value="7">Bronze Gaiters
					</option><option value="10">Cotton Pants
					</option><option value="11">Cotton Stockings
					</option><option value="21">Feriotic Stockings
					</option><option value="22">Hard Leather Gaiters
					</option><option value="23">Hard Leather Pants
					</option><option value="27">Leather Pants
					</option><option value="28&gt;Leather Stockings
					&lt;option value=" 36"="">Pants
					</option><option value="37">Piece Bone Gaiters
					</option><option value="43">Squire's Pants
					</option><option value="50">Stockings
					</option><option value="44">Stockings of Devotion
					</option><option value="45">Stockings of Magic
					</option><option value="54">Wooden Gaiters
				</option></select>
				</td>
				<td></td>
				<td id="lower grade penalty"> </td></tr>
<tr>
			<td>Gloves</td>
				<td><select id="GLOVEENCHANT" onchange="calc()" disabled="disabled">
					<option value="0" selected="selected">+0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option><option value="6">+6</option><option value="7">+7</option><option value="8">+8</option><option value="9">+9</option><option value="10">+10</option><option value="11">+11</option><option value="12">+12</option><option value="13">+13</option><option value="14">+14</option><option value="15">+15</option><option value="16">+16</option><option value="17">+17</option><option value="18">+18</option><option value="19">+19</option><option value="20">+20
				</option></select></td>
				<td><select id="GLOVEGRADE" onchange="equipmentgrade();calc()">
					<option value="S" selected="selected">S Grade
					</option><option value="A">A Grade
					</option><option value="B">B Grade
					</option><option value="C">C Grade
					</option><option value="D">D Grade
					</option><option value="N">Non Grade
				</option></select></td>
				<td><select id="GLOVES" onchange="calc()" style="display: block;">
					<option value="0" selected="selected">Unequipped
					</option><option value="16">Draconic Leather Gloves
					</option><option value="27">Imperial Crusader Gauntlets
					</option><option value="32">Major Arcana Gloves
				</option></select>
				<select id="GLOVEA" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="1">Apella Gauntlet (H)
					</option><option value="2">Apella Leather Gloves (L)
					</option><option value="3">Apella Silk Gloves (R)
					</option><option value="12">Dark Crystal Gloves
					</option><option value="25">Gloves of Nightmare
					</option><option value="31">Majestic Gloves
					</option><option value="45">Tallum Gloves
				</option></select>
				<select id="GLOVEB" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="4">Avadon Gloves
					</option><option value="5">Blue Wolf Gloves
					</option><option value="15">Doom Gloves
					</option><option value="47">Zubei's Gauntlets
				</option></select>
				<select id="GLOVEC" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="8">Chain Gloves
					</option><option value="13">Demon's Gloves
					</option><option value="14">Divine Gloves
					</option><option value="17">Drake Leather Gloves
					</option><option value="18">Dwarven Chain Gloves
					</option><option value="21">Full Plate Gauntlets
					</option><option value="26">Gloves of Seal
					</option><option value="28">Karmian Gloves
					</option><option value="34">Mithril Gauntlets
					</option><option value="37">Plated Leather Gloves
					</option><option value="39">Reinforced Mithril Gloves
					</option><option value="40">Rind Leather Gloves
					</option><option value="46">Theca Leather Gloves
				</option></select>
				<select id="GLOVED" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="7">Brigandine Gauntlets
					</option><option value="9">Clan Oath Gauntlets (H)
					</option><option value="10">Clan Oath Leather Gloves (L)
					</option><option value="11">Clan Oath Padded Gloves (R)
					</option><option value="19">Elven Mithril Gloves
					</option><option value="20">Excellent Leather Gloves
					</option><option value="22">Gauntlets
					</option><option value="24">Gloves of Knowledge
					</option><option value="29">Leather Gauntlets
					</option><option value="33">Manticore Skin Gloves
					</option><option value="35">Mithril Gloves
					</option><option value="36">Ogre Power Gauntlets
					</option><option value="38">Reinforced Leather Gloves
					</option><option value="41">Rip Gauntlets
					</option><option value="42">Sage's Worn Gloves
				</option></select>
				<select id="GLOVEN" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="6">Bracer
					</option><option value="23">Gloves
					</option><option value="30">Leather Gloves
					</option><option value="43">Short Gloves
					</option><option value="44">Short Leather Gloves
				</option></select>
				</td>
				<td></td>
				<td id="glove grade penalty"> </td></tr>
<tr>
			<td>Boots</td>
				<td><select id="BOOTENCHANT" onchange="calc()" disabled="disabled">
					<option value="0" selected="selected">+0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option><option value="6">+6</option><option value="7">+7</option><option value="8">+8</option><option value="9">+9</option><option value="10">+10</option><option value="11">+11</option><option value="12">+12</option><option value="13">+13</option><option value="14">+14</option><option value="15">+15</option><option value="16">+16</option><option value="17">+17</option><option value="18">+18</option><option value="19">+19</option><option value="20">+20
				</option></select></td>
				<td><select id="BOOTGRADE" onchange="equipmentgrade();calc()">
					<option value="S" selected="selected">S Grade
					</option><option value="A">A Grade
					</option><option value="B">B Grade
					</option><option value="C">C Grade
					</option><option value="D">D Grade
					</option><option value="N">Non Grade
				</option></select></td>
				<td><select id="BOOTS" onchange="calc()" style="display: block;">
					<option value="0" selected="selected">Unequipped
					</option><option value="28">Draconic Leather Boots
					</option><option value="33">Imperial Crusader Boots
					</option><option value="41">Major Arcana Boots
				</option></select>
				<select id="BOOTA" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="1">Apella Boots (L)
					</option><option value="2">Apella Sandals (R)
					</option><option value="3">Apella Solleret (H)
					</option><option value="11">Boots of Nightmare
					</option><option value="24">Dark Crystal Boots
					</option><option value="40">Majestic Boots
					</option><option value="50">Tallum Boots
				</option></select>
				<select id="BOOTB" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="6">Avadon Boots
					</option><option value="8">Blue Wolf Boots
					</option><option value="27">Doom Boots
					</option><option value="52">Zubei's Boots
				</option></select>
				<select id="BOOTC" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="13">Boots of Seal
					</option><option value="15">Chain Boots
					</option><option value="20">Composite Boots
					</option><option value="22">Crimson Boots
					</option><option value="25">Demon's Boots
					</option><option value="26">Divine Boots
					</option><option value="29">Drake Leather Boots
					</option><option value="30">Dwarven Chain Boots
					</option><option value="32">Full Plate Boots
					</option><option value="35">Karmian Boots
					</option><option value="43">Mithril Boots
					</option><option value="45">Plated Leather Boots
					</option><option value="47">Rind Leather Boots
					</option><option value="51">Theca Leather Boots
				</option></select>
				<select id="BOOTD" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="5">Assault Boots
					</option><option value="7">Blue Buckskin Boots
					</option><option value="10">Boots of Knowledge
					</option><option value="12">Boots of Power
					</option><option value="14">Brigandine Boots
					</option><option value="16">Clan Oath Boots (L)
					</option><option value="17">Clan Oath Sabaton (H)
					</option><option value="18">Clan Oath Sandals (R)
					</option><option value="31">Elven Mithril Boots
					</option><option value="34">Iron Boots
					</option><option value="36">Leather Boots
					</option><option value="42">Manticore Boots
					</option><option value="44">Plate Boots
					</option><option value="46">Reinforced Leather Boots
					</option><option value="48">Salamander Skin Boots
				</option></select>
				<select id="BOOTN" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="4">Apprentice's Shoes
					</option><option value="9">Boots
					</option><option value="19">Cloth Shoes
					</option><option value="21">Cotton Shoes
					</option><option value="23">Crude Leather Shoes
					</option><option value="37">Leather Sandals
					</option><option value="38">Leather Shoes
					</option><option value="39">Low Boots
					</option><option value="49">Squeaking Shoes
				</option></select>
				</td>
				<td></td>
				<td id="boot grade penalty"> </td></tr>
<tr>			<td colspan="3" align="right">Quickselect a jewelry set:</td>
				<td><select id="FULLMDEF" onchange="equipmentgrade(false,true);calc()">
					<option selected="selected">=================
					</option><option value="Unsealed_Tateossian">Unsealed Tateossian
					</option><option value="Sealed_Tateossian">Sealed Tateossian
					</option><option value="Unsealed_Majestic">Unsealed Majestic
					</option><option value="Sealed_Majestic">Sealed Majestic
					</option><option value="Black_Ore">Black Ore
					</option><option value="Top_C">Top C
					</option><option value="Top_Lux">Top Luxury Shop
					</option><option value="Top_D">Top D
					</option><option value="Elven">Elven
					</option><option value="Top_Non">Top Non Grade
				</option></select></td></tr>
<tr>			<td>Necklace</td>
				<td><select id="NECKLACEENCHANT" onchange="calc()" disabled="disabled">
					<option value="0" selected="selected">+0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option><option value="6">+6</option><option value="7">+7</option><option value="8">+8</option><option value="9">+9</option><option value="10">+10</option><option value="11">+11</option><option value="12">+12</option><option value="13">+13</option><option value="14">+14</option><option value="15">+15</option><option value="16">+16</option><option value="17">+17</option><option value="18">+18</option><option value="19">+19</option><option value="20">+20
				</option></select></td>
				<td><select id="NECKLACEGRADE" onchange="equipmentgrade();calc()">
					<option value="S" selected="selected">S Grade
					</option><option value="A">A Grade
					</option><option value="B">B Grade
					</option><option value="C">C Grade
					</option><option value="D">D Grade
					</option><option value="N">Non Grade
				</option></select></td>
				<td><select id="NECKLACES" onchange="calc()" style="display: block;">
					<option value="0" selected="selected">Unequipped
					</option><option value="20">Necklace of Valakas
					</option><option value="26">Sealed Tateossian Necklace
					</option><option value="27">Tateossian Necklace
				</option></select>
				<select id="NECKLACEA" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="28">Frintezza's Necklace
					</option><option value="6">Majestic Necklace
					</option><option value="23">Phoenix Necklace
					</option><option value="24">Sealed Majestic Necklace
					</option><option value="25">Sealed Phoenix Necklace
				</option></select>
				<select id="NECKLACEB" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="1">Adamantite Necklace
					</option><option value="10">Necklace of Black Ore
					</option><option value="11">Necklace of Blessing
					</option><option value="15">Necklace of Grace
				</option></select>
				<select id="NECKLACEC" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="2">Aquastone Necklace
					</option><option value="9">Necklace of Binding
					</option><option value="17">Necklace of Mermaid
					</option><option value="19">Necklace of Protection
				</option></select>
				<select id="NECKLACED" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="4">Elven Necklace
					</option><option value="5">Enchanted Necklace
					</option><option value="7">Near Forest Necklace
					</option><option value="13">Necklace of Darkness
					</option><option value="14">Necklace of Devotion
				</option></select>
				<select id="NECKLACEN" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="3">Blue Diamond Necklace
					</option><option value="8">Necklace of Anguish
					</option><option value="12">Necklace of Courage
					</option><option value="16">Necklace of Magic
					</option><option value="18">Necklace of Knowledge
					</option><option value="21">Necklace of Valor
					</option><option value="22">Necklace of Wisdom
				</option></select>
				</td>
				<td></td>
				<td id="necklace grade penalty"> </td></tr>
<tr>			<td>Earring</td>
				<td><select id="EARRING1ENCHANT" onchange="calc()" disabled="disabled">
					<option value="0" selected="selected">+0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option><option value="6">+6</option><option value="7">+7</option><option value="8">+8</option><option value="9">+9</option><option value="10">+10</option><option value="11">+11</option><option value="12">+12</option><option value="13">+13</option><option value="14">+14</option><option value="15">+15</option><option value="16">+16</option><option value="17">+17</option><option value="18">+18</option><option value="19">+19</option><option value="20">+20
				</option></select></td>
				<td><select id="EARRING1GRADE" onchange="equipmentgrade();calc()">
					<option value="S" selected="selected">S Grade
					</option><option value="A">A Grade
					</option><option value="B">B Grade
					</option><option value="C">C Grade
					</option><option value="D">D Grade
					</option><option value="N">Non Grade
				</option></select></td>
				<td><select id="EARRING1S" onchange="calc()" style="display: block;">
					<option value="0" selected="selected">Unequipped
					</option><option value="5">Earring of Antharas
					</option><option value="24">Sealed Tateossian Earring
					</option><option value="25">Tateossian Earring
					</option><option value="27">Zaken's Earring
				</option></select>
				<select id="EARRING1A" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="9">Earring of Orfen
					</option><option value="15">Majestic Earring
					</option><option value="21">Phoenix Earring
					</option><option value="22">Sealed Majestic Earring
					</option><option value="23">Sealed Phoenix Earring
				</option></select>
				<select id="EARRING1B" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="1">Adamantite Earring
					</option><option value="7">Earring of Black Ore
					</option><option value="8">Earring of Blessing
				</option></select>
				<select id="EARRING1C" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="6">Earring of Binding
					</option><option value="10">Earring of Protection
					</option><option value="16">Moonstone Earring
					</option><option value="18">Nassen's Earring
				</option></select>
				<select id="EARRING1D" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="13">Elven Earring
					</option><option value="14">Enchanted Earring
					</option><option value="19">Omen Beast's Eye Earring
					</option><option value="20">Red Crescent Earring
					</option><option value="26">Tiger's Eye Earring
				</option></select>
				<select id="EARRING1N" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="2">Apprentice's Earring
					</option><option value="3">Cat's Eye Earring
					</option><option value="4">Coral Earring
					</option><option value="11">Earring of Strength
					</option><option value="12">Earring of Wisdom
					</option><option value="17">Mystic's Earring
				</option></select>
				</td>
				<td></td>
				<td id="earring1 grade penalty"> </td></tr>
<tr>			<td>Earring</td>
				<td><select id="EARRING2ENCHANT" onchange="calc()" disabled="disabled">
					<option value="0" selected="selected">+0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option><option value="6">+6</option><option value="7">+7</option><option value="8">+8</option><option value="9">+9</option><option value="10">+10</option><option value="11">+11</option><option value="12">+12</option><option value="13">+13</option><option value="14">+14</option><option value="15">+15</option><option value="16">+16</option><option value="17">+17</option><option value="18">+18</option><option value="19">+19</option><option value="20">+20
				</option></select></td>
				<td><select id="EARRING2GRADE" onchange="equipmentgrade();calc()">
					<option value="S" selected="selected">S Grade
					</option><option value="A">A Grade
					</option><option value="B">B Grade
					</option><option value="C">C Grade
					</option><option value="D">D Grade
					</option><option value="N">Non Grade
				</option></select></td>
				<td><select id="EARRING2S" onchange="calc()" style="display: block;">
					<option value="0" selected="selected">Unequipped
					</option><option value="5">Earring of Antharas
					</option><option value="24">Sealed Tateossian Earring
					</option><option value="25">Tateossian Earring
					</option><option value="27">Zaken's Earring
				</option></select>
				<select id="EARRING2A" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="9">Earring of Orfen
					</option><option value="15">Majestic Earring
					</option><option value="21">Phoenix Earring
					</option><option value="22">Sealed Majestic Earring
					</option><option value="23">Sealed Phoenix Earring
				</option></select>
				<select id="EARRING2B" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="1">Adamantite Earring
					</option><option value="7">Earring of Black Ore
					</option><option value="8">Earring of Blessing
				</option></select>
				<select id="EARRING2C" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="6">Earring of Binding
					</option><option value="10">Earring of Protection
					</option><option value="16">Moonstone Earring
					</option><option value="18">Nassen's Earring
				</option></select>
				<select id="EARRING2D" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="13">Elven Earring
					</option><option value="14">Enchanted Earring
					</option><option value="19">Omen Beast's Eye Earring
					</option><option value="20">Red Crescent Earring
					</option><option value="26">Tiger's Eye Earring
				</option></select>
				<select id="EARRING2N" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="2">Apprentice's Earring
					</option><option value="3">Cat's Eye Earring
					</option><option value="4">Coral Earring
					</option><option value="11">Earring of Strength
					</option><option value="12">Earring of Wisdom
					</option><option value="17">Mystic's Earring
				</option></select>
				</td>
				<td></td>
				<td id="earring2 grade penalty"> </td></tr>
<tr>			<td>Ring</td>
				<td><select id="RING1ENCHANT" onchange="calc()" disabled="disabled">
					<option value="0" selected="selected">+0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option><option value="6">+6</option><option value="7">+7</option><option value="8">+8</option><option value="9">+9</option><option value="10">+10</option><option value="11">+11</option><option value="12">+12</option><option value="13">+13</option><option value="14">+14</option><option value="15">+15</option><option value="16">+16</option><option value="17">+17</option><option value="18">+18</option><option value="19">+19</option><option value="20">+20
				</option></select></td>
				<td><select id="RING1GRADE" onchange="equipmentgrade();calc()">
					<option value="S" selected="selected">S Grade
					</option><option value="A">A Grade
					</option><option value="B">B Grade
					</option><option value="C">C Grade
					</option><option value="D">D Grade
					</option><option value="N">Non Grade
				</option></select></td>
				<td><select id="RING1S" onchange="calc()" style="display: block;">
					<option value="0" selected="selected">Unequipped
					</option><option value="13">Ring of Baium
					</option><option value="27">Sealed Tateossian Ring
					</option><option value="28">Tateossian Ring
				</option></select>
				<select id="RING1A" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="8">Majestic Ring
					</option><option value="10">Phoenix Ring
					</option><option value="17">Ring of Core
					</option><option value="25">Sealed Majestic Ring
					</option><option value="26">Sealed Phoenix Ring
				</option></select>
				<select id="RING1B" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="1">Adamantite Ring
					</option><option value="15">Ring of Black Ore
					</option><option value="16">Ring of Blessing
					</option><option value="22">Ring of Queen Ant
				</option></select>
				<select id="RING1C" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="2">Aquastone Ring
					</option><option value="11">Ring of Ages
					</option><option value="14">Ring of Binding
					</option><option value="21">Ring of Protection
				</option></select>
				<select id="RING1D" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="3">Black Pearl Ring
					</option><option value="5">Elven Ring
					</option><option value="6">Enchanted Ring
					</option><option value="9">Mithril Ring
					</option><option value="18">Ring of Devotion
				</option></select>
				<select id="RING1N" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="4">Blue Coral Ring
					</option><option value="7">Magic Ring
					</option><option value="12">Ring of Anguish
					</option><option value="19">Ring of Firefly
					</option><option value="20">Ring of Knowledge
					</option><option value="23">Ring of Raccoon
					</option><option value="24">Ring of Wisdom
				</option></select>
				</td>
				<td></td>
				<td id="ring1 grade penalty"> </td></tr>
<tr>			<td>Ring</td>
				<td><select id="RING2ENCHANT" onchange="calc()" disabled="disabled">
					<option value="0" selected="selected">+0</option><option value="1">+1</option><option value="2">+2</option><option value="3">+3</option><option value="4">+4</option><option value="5">+5</option><option value="6">+6</option><option value="7">+7</option><option value="8">+8</option><option value="9">+9</option><option value="10">+10</option><option value="11">+11</option><option value="12">+12</option><option value="13">+13</option><option value="14">+14</option><option value="15">+15</option><option value="16">+16</option><option value="17">+17</option><option value="18">+18</option><option value="19">+19</option><option value="20">+20
				</option></select></td>
				<td><select id="RING2GRADE" onchange="equipmentgrade();calc()">
					<option value="S" selected="selected">S Grade
					</option><option value="A">A Grade
					</option><option value="B">B Grade
					</option><option value="C">C Grade
					</option><option value="D">D Grade
					</option><option value="N">Non Grade
				</option></select></td>
				<td><select id="RING2S" onchange="calc()" style="display: block;">
					<option value="0" selected="selected">Unequipped
					</option><option value="13">Ring of Baium
					</option><option value="27">Sealed Tateossian Ring
					</option><option value="28">Tateossian Ring
				</option></select>
				<select id="RING2A" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="8">Majestic Ring
					</option><option value="10">Phoenix Ring
					</option><option value="17">Ring of Core
					</option><option value="25">Sealed Majestic Ring
					</option><option value="26">Sealed Phoenix Ring
				</option></select>
				<select id="RING2B" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="1">Adamantite Ring
					</option><option value="15">Ring of Black Ore
					</option><option value="16">Ring of Blessing
					</option><option value="22">Ring of Queen Ant
				</option></select>
				<select id="RING2C" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="2">Aquastone Ring
					</option><option value="11">Ring of Ages
					</option><option value="14">Ring of Binding
					</option><option value="21">Ring of Protection
				</option></select>
				<select id="RING2D" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="3">Black Pearl Ring
					</option><option value="5">Elven Ring
					</option><option value="6">Enchanted Ring
					</option><option value="9">Mithril Ring
					</option><option value="18">Ring of Devotion
				</option></select>
				<select id="RING2N" onchange="calc()" style="display: none;">
					<option value="0" selected="selected">Unequipped
					</option><option value="4">Blue Coral Ring
					</option><option value="7">Magic Ring
					</option><option value="12">Ring of Anguish
					</option><option value="19">Ring of Firefly
					</option><option value="20">Ring of Knowledge
					</option><option value="23">Ring of Raccoon
					</option><option value="24">Ring of Wisdom
				</option></select>
				</td>
				<td></td>
				<td id="ring2 grade penalty"> </td></tr>
	</tbody></table>
</fieldset>

<fieldset id="PASSIVES" style="display: block;">
<legend><span class="style2">Passives</span></legend>
<table class="statcalc">
<tbody><tr>	<td></td>
		<td><input type="checkbox" id="AUTOPASSIVECHECK" onclick="passives(true);calc()" checked="checked"></td>
			<td colspan="3">Auto-select my passives for me</td></tr>
<tr>		<td>Weapon Mastery</td>
			<td><input type="checkbox" id="WMFCHECK" onclick="passives();calc()" style="display: block;">
			<input type="checkbox" id="WMM1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="WMM2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="WMM3CHECK" onclick="passives();calc()" style="display: none;"></td>
			<td>
			<select id="WMF" onchange="calc()" style="display: block;" disabled="disabled"><option value="1" selected="selected">Weapon Mastery 1 (5)</option><option value="2">Weapon Mastery 2 (10)</option><option value="3">Weapon Mastery 3 (15)</option></select>
			<select id="WMM1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Weapon Mastery 1 (7)</option><option value="2">Weapon Mastery 2 (14)</option></select>
			<select id="WMM2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Weapon Mastery 1 (7)</option><option value="2">Weapon Mastery 2 (14)</option><option value="3">Weapon Mastery 3 (20)</option><option value="4">Weapon Mastery 4 (25)</option><option value="5">Weapon Mastery 5 (25)</option><option value="6">Weapon Mastery 6 (30)</option><option value="7">Weapon Mastery 7 (30)</option><option value="8">Weapon Mastery 8 (35)</option><option value="9">Weapon Mastery 9 (35)</option></select>
			<select id="WMM3" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Weapon Mastery 1 (7)</option><option value="2">Weapon Mastery 2 (14)</option><option value="3">Weapon Mastery 3 (20)</option><option value="4">Weapon Mastery 4 (25)</option><option value="5">Weapon Mastery 5 (25)</option><option value="6">Weapon Mastery 6 (30)</option><option value="7">Weapon Mastery 7 (30)</option><option value="8">Weapon Mastery 8 (35)</option><option value="9">Weapon Mastery 9 (35)</option><option value="10">Weapon Mastery 10 (40)</option><option value="11">Weapon Mastery 11 (40)</option><option value="12">Weapon Mastery 12 (40)</option><option value="13">Weapon Mastery 13 (44)</option><option value="14">Weapon Mastery 14 (44)</option><option value="15">Weapon Mastery 15 (44)</option><option value="16">Weapon Mastery 16 (48)</option><option value="17">Weapon Mastery 17 (48)</option><option value="18">Weapon Mastery 18 (48)</option><option value="19">Weapon Mastery 19 (52)</option><option value="20">Weapon Mastery 20 (52)</option><option value="21">Weapon Mastery 21 (52)</option><option value="22">Weapon Mastery 22 (56)</option><option value="23">Weapon Mastery 23 (56)</option><option value="24">Weapon Mastery 24 (56)</option><option value="25">Weapon Mastery 25 (58)</option><option value="26">Weapon Mastery 26 (58)</option><option value="27">Weapon Mastery 27 (60)</option><option value="28">Weapon Mastery 28 (60)</option><option value="29">Weapon Mastery 29 (62)</option><option value="30">Weapon Mastery 30 (62)</option><option value="31">Weapon Mastery 31 (64)</option><option value="32">Weapon Mastery 32 (64)</option><option value="33">Weapon Mastery 33 (66)</option><option value="34">Weapon Mastery 34 (66)</option><option value="35">Weapon Mastery 35 (68)</option><option value="36">Weapon Mastery 36 (68)</option><option value="37">Weapon Mastery 37 (70)</option><option value="38">Weapon Mastery 38 (70)</option><option value="39">Weapon Mastery 39 (72)</option><option value="40">Weapon Mastery 40 (72)</option><option value="41">Weapon Mastery 41 (74)</option><option value="42">Weapon Mastery 42 (74)</option></select>
			</td>
			<td>
			<input type="checkbox" id="WSBM1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="WSBM2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="BLUNTM1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="BLUNTM2CHECK" onclick="passives();;calc()" style="display: none;">
			<input type="checkbox" id="FISTM1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="FISTM2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="KSBM1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="KSBM2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="DAGGERM1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="DAGGERM2CHECK" onclick="passives();calc()" style="display: block;"></td>
			<td>
			<select id="WSBM1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" id="WSwordBlunt1" selected="selected">Sword/Blunt Mastery 1 (20)</option><option value="2" id="WSwordBlunt2">Sword/Blunt Mastery 2 (24)</option><option value="3" id="WSwordBlunt3">Sword/Blunt Mastery 3 (28)</option><option value="4" id="WSwordBlunt4">Sword/Blunt Mastery 4 (28)</option><option value="5" id="WSwordBlunt5">Sword/Blunt Mastery 5 (32)</option><option value="6" id="WSwordBlunt6">Sword/Blunt Mastery 6 (32)</option><option value="7" id="WSwordBlunt7">Sword/Blunt Mastery 7 (36)</option><option value="8" id="WSwordBlunt8">Sword/Blunt Mastery 8 (36)</option></select>
			<select id="WSBM2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" id="WSwordBlunt1" selected="selected">Sword/Blunt Mastery 1 (20)</option><option value="2" id="WSwordBlunt2">Sword/Blunt Mastery 2 (24)</option><option value="3" id="WSwordBlunt3">Sword/Blunt Mastery 3 (28)</option><option value="4" id="WSwordBlunt4">Sword/Blunt Mastery 4 (28)</option><option value="5" id="WSwordBlunt5">Sword/Blunt Mastery 5 (32)</option><option value="6" id="WSwordBlunt6">Sword/Blunt Mastery 6 (32)</option><option value="7" id="WSwordBlunt7">Sword/Blunt Mastery 7 (36)</option><option value="8" id="WSwordBlunt8">Sword/Blunt Mastery 8 (36)</option><option value="9" id="WSwordBlunt9">Sword/Blunt Mastery 9 (40)</option><option value="10" id="WSwordBlunt10">Sword/Blunt Mastery 10 (40)</option><option value="11" id="WSwordBlunt11">Sword/Blunt Mastery 11 (40)</option><option value="12" id="WSwordBlunt12">Sword/Blunt Mastery 12 (43)</option><option value="13" id="WSwordBlunt13">Sword/Blunt Mastery 13 (43)</option><option value="14" id="WSwordBlunt14">Sword/Blunt Mastery 14 (43)</option><option value="15" id="WSwordBlunt15">Sword/Blunt Mastery 15 (46)</option><option value="16" id="WSwordBlunt16">Sword/Blunt Mastery 16 (46)</option><option value="17" id="WSwordBlunt17">Sword/Blunt Mastery 17 (46)</option><option value="18" id="WSwordBlunt18">Sword/Blunt Mastery 18 (49)</option><option value="19" id="WSwordBlunt19">Sword/Blunt Mastery 19 (49)</option><option value="20" id="WSwordBlunt20">Sword/Blunt Mastery 20 (49)</option><option value="21" id="WSwordBlunt21">Sword/Blunt Mastery 21 (52)</option><option value="22" id="WSwordBlunt22">Sword/Blunt Mastery 22 (52)</option><option value="23" id="WSwordBlunt23">Sword/Blunt Mastery 23 (52)</option><option value="24" id="WSwordBlunt24">Sword/Blunt Mastery 24 (55)</option><option value="25" id="WSwordBlunt25">Sword/Blunt Mastery 25 (55)</option><option value="26" id="WSwordBlunt26">Sword/Blunt Mastery 26 (55)</option><option value="27" id="WSwordBlunt27">Sword/Blunt Mastery 27 (58)</option><option value="28" id="WSwordBlunt28">Sword/Blunt Mastery 28 (58)</option><option value="29" id="WSwordBlunt29">Sword/Blunt Mastery 29 (58)</option><option value="30" id="WSwordBlunt30">Sword/Blunt Mastery 30 (60)</option><option value="31" id="WSwordBlunt31">Sword/Blunt Mastery 31 (60)</option><option value="32" id="WSwordBlunt32">Sword/Blunt Mastery 32 (62)</option><option value="33" id="WSwordBlunt33">Sword/Blunt Mastery 33 (62)</option><option value="34" id="WSwordBlunt34">Sword/Blunt Mastery 34 (64)</option><option value="35" id="WSwordBlunt35">Sword/Blunt Mastery 35 (64)</option><option value="36" id="WSwordBlunt36">Sword/Blunt Mastery 36 (66)</option><option value="37" id="WSwordBlunt37">Sword/Blunt Mastery 37 (66)</option><option value="38" id="WSwordBlunt38">Sword/Blunt Mastery 38 (68)</option><option value="39" id="WSwordBlunt39">Sword/Blunt Mastery 39 (68)</option><option value="40" id="WSwordBlunt40">Sword/Blunt Mastery 40 (70)</option><option value="41" id="WSwordBlunt41">Sword/Blunt Mastery 41 (70)</option><option value="42" id="WSwordBlunt42">Sword/Blunt Mastery 42 (72)</option><option value="43" id="WSwordBlunt43">Sword/Blunt Mastery 43 (72)</option><option value="44" id="WSwordBlunt44">Sword/Blunt Mastery 44 (74)</option><option value="45" id="WSwordBlunt45">Sword/Blunt Mastery 45 (74)</option></select>
			<select id="BLUNTM1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Blunt Mastery 1 (20)</option><option value="2">Blunt Mastery 2 (24)</option><option value="3">Blunt Mastery 3 (28)</option><option value="4">Blunt Mastery 4 (28)</option><option value="5">Blunt Mastery 5 (32)</option><option value="6">Blunt Mastery 6 (32)</option><option value="7">Blunt Mastery 7 (36)</option><option value="8">Blunt Mastery 8 (36)</option></select>
			<select id="BLUNTM2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Blunt Mastery 1 (20)</option><option value="2">Blunt Mastery 2 (24)</option><option value="3">Blunt Mastery 3 (28)</option><option value="4">Blunt Mastery 4 (28)</option><option value="5">Blunt Mastery 5 (32)</option><option value="6">Blunt Mastery 6 (32)</option><option value="7">Blunt Mastery 7 (36)</option><option value="8">Blunt Mastery 8 (36)</option><option value="9">Blunt Mastery 9 (40)</option><option value="10">Blunt Mastery 10 (40)</option><option value="11">Blunt Mastery 11 (40)</option><option value="12">Blunt Mastery 12 (43)</option><option value="13">Blunt Mastery 13 (43)</option><option value="14">Blunt Mastery 14 (43)</option><option value="15">Blunt Mastery 15 (46)</option><option value="16">Blunt Mastery 16 (46)</option><option value="17">Blunt Mastery 17 (46)</option><option value="18">Blunt Mastery 18 (49)</option><option value="19">Blunt Mastery 19 (49)</option><option value="20">Blunt Mastery 20 (49)</option><option value="21">Blunt Mastery 21 (52)</option><option value="22">Blunt Mastery 22 (52)</option><option value="23">Blunt Mastery 23 (52)</option><option value="24">Blunt Mastery 24 (55)</option><option value="25">Blunt Mastery 25 (55)</option><option value="26">Blunt Mastery 26 (55)</option><option value="27">Blunt Mastery 27 (58)</option><option value="28">Blunt Mastery 28 (58)</option><option value="29">Blunt Mastery 29 (58)</option><option value="30">Blunt Mastery 30 (60)</option><option value="31">Blunt Mastery 31 (60)</option><option value="32">Blunt Mastery 32 (62)</option><option value="33">Blunt Mastery 33 (62)</option><option value="34">Blunt Mastery 34 (64)</option><option value="35">Blunt Mastery 35 (64)</option><option value="36">Blunt Mastery 36 (66)</option><option value="37">Blunt Mastery 37 (66)</option><option value="38">Blunt Mastery 38 (68)</option><option value="39">Blunt Mastery 39 (68)</option><option value="40">Blunt Mastery 40 (70)</option><option value="41">Blunt Mastery 41 (70)</option><option value="42">Blunt Mastery 42 (72)</option><option value="43">Blunt Mastery 43 (72)</option><option value="44">Blunt Mastery 44 (74)</option><option value="45">Blunt Mastery 45 (74)</option><option value="76">Blunt Mastery 45 +1 (Power)</option><option value="77">Blunt Mastery 45 +2 (Power)</option><option value="78">Blunt Mastery 45 +3 (Power)</option><option value="79">Blunt Mastery 45 +4 (Power)</option><option value="80">Blunt Mastery 45 +5 (Power)</option><option value="81">Blunt Mastery 45 +6 (Power)</option><option value="82">Blunt Mastery 45 +7 (Power)</option><option value="83">Blunt Mastery 45 +8 (Power)</option><option value="84">Blunt Mastery 45 +9 (Power)</option><option value="85">Blunt Mastery 45 +10 (Power)</option><option value="86">Blunt Mastery 45 +11 (Power)</option><option value="87">Blunt Mastery 45 +12 (Power)</option><option value="88">Blunt Mastery 45 +13 (Power)</option><option value="89">Blunt Mastery 45 +14 (Power)</option><option value="90">Blunt Mastery 45 +15 (Power)</option><option value="91">Blunt Mastery 45 +16 (Power)</option><option value="92">Blunt Mastery 45 +17 (Power)</option><option value="93">Blunt Mastery 45 +18 (Power)</option><option value="94">Blunt Mastery 45 +19 (Power)</option><option value="95">Blunt Mastery 45 +20 (Power)</option><option value="96">Blunt Mastery 45 +21 (Power)</option><option value="97">Blunt Mastery 45 +22 (Power)</option><option value="98">Blunt Mastery 45 +23 (Power)</option><option value="99">Blunt Mastery 45 +24 (Power)</option><option value="100">Blunt Mastery 45 +25 (Power)</option><option value="101">Blunt Mastery 45 +26 (Power)</option><option value="102">Blunt Mastery 45 +27 (Power)</option><option value="103">Blunt Mastery 45 +28 (Power)</option><option value="104">Blunt Mastery 45 +29 (Power)
</option><option value="105">Blunt Mastery 45 +30 (Power)
</option><option value="106">Blunt Mastery 45 +1 (Crt. Damage)
</option><option value="107">Blunt Mastery 45 +2 (Crt. Damage)
</option><option value="108">Blunt Mastery 45 +3 (Crt. Damage)
</option><option value="109">Blunt Mastery 45 +4 (Crt. Damage)
</option><option value="110">Blunt Mastery 45 +5 (Crt. Damage)
</option><option value="111">Blunt Mastery 45 +6 (Crt. Damage)
</option><option value="112">Blunt Mastery 45 +7 (Crt. Damage)
</option><option value="113">Blunt Mastery 45 +8 (Crt. Damage)
</option><option value="114">Blunt Mastery 45 +9 (Crt. Damage)
</option><option value="115">Blunt Mastery 45 +10 (Crt. Damage)
</option><option value="116">Blunt Mastery 45 +11 (Crt. Damage)
</option><option value="117">Blunt Mastery 45 +12 (Crt. Damage)
</option><option value="118">Blunt Mastery 45 +13 (Crt. Damage)
</option><option value="119">Blunt Mastery 45 +14 (Crt. Damage)
</option><option value="120">Blunt Mastery 45 +15 (Crt. Damage)
</option><option value="121">Blunt Mastery 45 +16 (Crt. Damage)
</option><option value="122">Blunt Mastery 45 +17 (Crt. Damage)
</option><option value="123">Blunt Mastery 45 +18 (Crt. Damage)
</option><option value="124">Blunt Mastery 45 +19 (Crt. Damage)
</option><option value="125">Blunt Mastery 45 +20 (Crt. Damage)
</option><option value="126">Blunt Mastery 45 +21 (Crt. Damage)
</option><option value="127">Blunt Mastery 45 +22 (Crt. Damage)
</option><option value="128">Blunt Mastery 45 +23 (Crt. Damage)
</option><option value="129">Blunt Mastery 45 +24 (Crt. Damage)
</option><option value="130">Blunt Mastery 45 +25 (Crt. Damage)
</option><option value="131">Blunt Mastery 45 +26 (Crt. Damage)
</option><option value="132">Blunt Mastery 45 +27 (Crt. Damage)
</option><option value="133">Blunt Mastery 45 +28 (Crt. Damage)
</option><option value="134">Blunt Mastery 45 +29 (Crt. Damage)
</option><option value="135">Blunt Mastery 45 +30 (Crt. Damage)
</option></select>
			<select id="FISTM1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Fist Mastery 1 (20)</option><option value="2">Fist Mastery 2 (24)</option><option value="3">Fist Mastery 3 (28)</option><option value="4">Fist Mastery 4 (28)</option><option value="5">Fist Mastery 5 (32)</option><option value="6">Fist Mastery 6 (32)</option><option value="7">Fist Mastery 7 (36)</option><option value="8">Fist Mastery 8 (36)</option></select>
			<select id="FISTM2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Fist Mastery 1 (20)</option><option value="2">Fist Mastery 2 (24)</option><option value="3">Fist Mastery 3 (28)</option><option value="4">Fist Mastery 4 (28)</option><option value="5">Fist Mastery 5 (32)</option><option value="6">Fist Mastery 6 (32)</option><option value="7">Fist Mastery 7 (36)</option><option value="8">Fist Mastery 8 (36)</option><option value="9">Fist Mastery 9 (40)</option><option value="10">Fist Mastery 10 (40)</option><option value="11">Fist Mastery 11 (40)</option><option value="12">Fist Mastery 12 (43)</option><option value="13">Fist Mastery 13 (43)</option><option value="14">Fist Mastery 14 (43)</option><option value="15">Fist Mastery 15 (46)</option><option value="16">Fist Mastery 16 (46)</option><option value="17">Fist Mastery 17 (46)</option><option value="18">Fist Mastery 18 (49)</option><option value="19">Fist Mastery 19 (49)</option><option value="20">Fist Mastery 20 (49)</option><option value="21">Fist Mastery 21 (52)</option><option value="22">Fist Mastery 22 (52)</option><option value="23">Fist Mastery 23 (52)</option><option value="24">Fist Mastery 24 (55)</option><option value="25">Fist Mastery 25 (55)</option><option value="26">Fist Mastery 26 (55)</option><option value="27">Fist Mastery 27 (58)</option><option value="28">Fist Mastery 28 (58)</option><option value="29">Fist Mastery 29 (58)</option><option value="30">Fist Mastery 30 (60)</option><option value="31">Fist Mastery 31 (60)</option><option value="32">Fist Mastery 32 (62)</option><option value="33">Fist Mastery 33 (62)</option><option value="34">Fist Mastery 34 (64)</option><option value="35">Fist Mastery 35 (64)</option><option value="36">Fist Mastery 36 (66)</option><option value="37">Fist Mastery 37 (66)</option><option value="38">Fist Mastery 38 (68)</option><option value="39">Fist Mastery 39 (68)</option><option value="40">Fist Mastery 40 (70)</option><option value="41">Fist Mastery 41 (70)</option><option value="42">Fist Mastery 42 (72)</option><option value="43">Fist Mastery 43 (72)</option><option value="44">Fist Mastery 44 (74)</option><option value="45">Fist Mastery 45 (74)</option></select>
			<select id="KSBM1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Sword/Blunt Mastery 1 (20)</option><option value="2">Sword/Blunt Mastery 2 (24)</option><option value="3">Sword/Blunt Mastery 3 (28)</option><option value="4">Sword/Blunt Mastery 4 (28)</option><option value="5">Sword/Blunt Mastery 5 (32)</option><option value="6">Sword/Blunt Mastery 6 (32)</option><option value="7">Sword/Blunt Mastery 7 (36)</option><option value="8">Sword/Blunt Mastery 8 (36)</option></select>
			<select id="KSBM2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Sword/Blunt Mastery 1 (20)</option><option value="2">Sword/Blunt Mastery 2 (24)</option><option value="3">Sword/Blunt Mastery 3 (28)</option><option value="4">Sword/Blunt Mastery 4 (28)</option><option value="5">Sword/Blunt Mastery 5 (32)</option><option value="6">Sword/Blunt Mastery 6 (32)</option><option value="7">Sword/Blunt Mastery 7 (36)</option><option value="8">Sword/Blunt Mastery 8 (36)</option><option value="9">Sword/Blunt Mastery 9 (40)</option><option value="10">Sword/Blunt Mastery 10 (40)</option><option value="11">Sword/Blunt Mastery 11 (40)</option><option value="12">Sword/Blunt Mastery 12 (43)</option><option value="13">Sword/Blunt Mastery 13 (43)</option><option value="14">Sword/Blunt Mastery 14 (43)</option><option value="15">Sword/Blunt Mastery 15 (46)</option><option value="16">Sword/Blunt Mastery 16 (46)</option><option value="17">Sword/Blunt Mastery 17 (46)</option><option value="18">Sword/Blunt Mastery 18 (49)</option><option value="19">Sword/Blunt Mastery 19 (49)</option><option value="20">Sword/Blunt Mastery 20 (49)</option><option value="21">Sword/Blunt Mastery 21 (52)</option><option value="22">Sword/Blunt Mastery 22 (52)</option><option value="23">Sword/Blunt Mastery 23 (52)</option><option value="24">Sword/Blunt Mastery 24 (55)</option><option value="25">Sword/Blunt Mastery 25 (55)</option><option value="26">Sword/Blunt Mastery 26 (55)</option><option value="27">Sword/Blunt Mastery 27 (58)</option><option value="28">Sword/Blunt Mastery 28 (58)</option><option value="29">Sword/Blunt Mastery 29 (58)</option><option value="30">Sword/Blunt Mastery 30 (60)</option><option value="31">Sword/Blunt Mastery 31 (60)</option><option value="32">Sword/Blunt Mastery 32 (62)</option><option value="33">Sword/Blunt Mastery 33 (62)</option><option value="34">Sword/Blunt Mastery 34 (64)</option><option value="35">Sword/Blunt Mastery 35 (64)</option><option value="36">Sword/Blunt Mastery 36 (66)</option><option value="37">Sword/Blunt Mastery 37 (66)</option><option value="38">Sword/Blunt Mastery 38 (68)</option><option value="39">Sword/Blunt Mastery 39 (68)</option><option value="40">Sword/Blunt Mastery 40 (70)</option><option value="41">Sword/Blunt Mastery 41 (70)</option><option value="42">Sword/Blunt Mastery 42 (72)</option><option value="43">Sword/Blunt Mastery 43 (72)</option><option value="44">Sword/Blunt Mastery 44 (74)</option><option value="45">Sword/Blunt Mastery 45 (74)</option></select>
			<select id="DAGGERM1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Dagger Mastery 1 (20)</option><option value="2">Dagger Mastery 2 (24)</option><option value="3">Dagger Mastery 3 (28)</option><option value="4">Dagger Mastery 4 (28)</option><option value="5">Dagger Mastery 5 (32)</option><option value="6">Dagger Mastery 6 (32)</option><option value="7">Dagger Mastery 7 (36)</option><option value="8">Dagger Mastery 8 (36)</option></select>
			<select id="DAGGERM2" onchange="calc()" style="display: block;" disabled="disabled"><option value="1" selected="selected">Dagger Mastery 1 (20)</option><option value="2">Dagger Mastery 2 (24)</option><option value="3">Dagger Mastery 3 (28)</option><option value="4">Dagger Mastery 4 (28)</option><option value="5">Dagger Mastery 5 (32)</option><option value="6">Dagger Mastery 6 (32)</option><option value="7">Dagger Mastery 7 (36)</option><option value="8">Dagger Mastery 8 (36)</option><option value="9">Dagger Mastery 9 (40)</option><option value="10">Dagger Mastery 10 (40)</option><option value="11">Dagger Mastery 11 (40)</option><option value="12">Dagger Mastery 12 (43)</option><option value="13">Dagger Mastery 13 (43)</option><option value="14">Dagger Mastery 14 (43)</option><option value="15">Dagger Mastery 15 (46)</option><option value="16">Dagger Mastery 16 (46)</option><option value="17">Dagger Mastery 17 (46)</option><option value="18">Dagger Mastery 18 (49)</option><option value="19">Dagger Mastery 19 (49)</option><option value="20">Dagger Mastery 20 (49)</option><option value="21">Dagger Mastery 21 (52)</option><option value="22">Dagger Mastery 22 (52)</option><option value="23">Dagger Mastery 23 (52)</option><option value="24">Dagger Mastery 24 (55)</option><option value="25">Dagger Mastery 25 (55)</option><option value="26">Dagger Mastery 26 (55)</option><option value="27">Dagger Mastery 27 (58)</option><option value="28">Dagger Mastery 28 (58)</option><option value="29">Dagger Mastery 29 (58)</option><option value="30">Dagger Mastery 30 (60)</option><option value="31">Dagger Mastery 31 (60)</option><option value="32">Dagger Mastery 32 (62)</option><option value="33">Dagger Mastery 33 (62)</option><option value="34">Dagger Mastery 34 (64)</option><option value="35">Dagger Mastery 35 (64)</option><option value="36">Dagger Mastery 36 (66)</option><option value="37">Dagger Mastery 37 (66)</option><option value="38">Dagger Mastery 38 (68)</option><option value="39">Dagger Mastery 39 (68)</option><option value="40">Dagger Mastery 40 (70)</option><option value="41">Dagger Mastery 41 (70)</option><option value="42">Dagger Mastery 42 (72)</option><option value="43">Dagger Mastery 43 (72)</option><option value="44">Dagger Mastery 44 (74)</option><option value="45">Dagger Mastery 45 (74)</option></select>
			</td>
			<td><input type="checkbox" id="POLEM1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="POLEM2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="BOWM1CHECK" onclick="passives();calc()" style="display: block;">
			<input type="checkbox" id="BOWM2CHECK" onclick="passives();calc()" style="display: none;"></td>
			<td><select id="POLEM1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Polearm Mastery 1 (20)</option><option value="2">Polearm Mastery 2 (24)</option><option value="3">Polearm Mastery 3 (28)</option><option value="4">Polearm Mastery 4 (28)</option><option value="5">Polearm Mastery 5 (32)</option><option value="6">Polearm Mastery 6 (32)</option><option value="7">Polearm Mastery 7 (36)</option><option value="8">Polearm Mastery 8 (36)</option></select>
			<select id="POLEM2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Polearm Mastery 1 (20)</option><option value="2">Polearm Mastery 2 (24)</option><option value="3">Polearm Mastery 3 (28)</option><option value="4">Polearm Mastery 4 (28)</option><option value="5">Polearm Mastery 5 (32)</option><option value="6">Polearm Mastery 6 (32)</option><option value="7">Polearm Mastery 7 (36)</option><option value="8">Polearm Mastery 8 (36)</option><option value="9">Polearm Mastery 9 (40)</option><option value="10">Polearm Mastery 10 (40)</option><option value="11">Polearm Mastery 11 (40)</option><option value="12">Polearm Mastery 12 (43)</option><option value="13">Polearm Mastery 13 (43)</option><option value="14">Polearm Mastery 14 (43)</option><option value="15">Polearm Mastery 15 (46)</option><option value="16">Polearm Mastery 16 (46)</option><option value="17">Polearm Mastery 17 (46)</option><option value="18">Polearm Mastery 18 (49)</option><option value="19">Polearm Mastery 19 (49)</option><option value="20">Polearm Mastery 20 (49)</option><option value="21">Polearm Mastery 21 (52)</option><option value="22">Polearm Mastery 22 (52)</option><option value="23">Polearm Mastery 23 (52)</option><option value="24">Polearm Mastery 24 (55)</option><option value="25">Polearm Mastery 25 (55)</option><option value="26">Polearm Mastery 26 (55)</option><option value="27">Polearm Mastery 27 (58)</option><option value="28">Polearm Mastery 28 (58)</option><option value="29">Polearm Mastery 29 (58)</option><option value="30">Polearm Mastery 30 (60)</option><option value="31">Polearm Mastery 31 (60)</option><option value="32">Polearm Mastery 32 (62)</option><option value="33">Polearm Mastery 33 (62)</option><option value="34">Polearm Mastery 34 (64)</option><option value="35">Polearm Mastery 35 (64)</option><option value="36">Polearm Mastery 36 (66)</option><option value="37">Polearm Mastery 37 (66)</option><option value="38">Polearm Mastery 38 (68)</option><option value="39">Polearm Mastery 39 (68)</option><option value="40">Polearm Mastery 40 (70)</option><option value="41">Polearm Mastery 41 (70)</option><option value="42">Polearm Mastery 42 (72)</option><option value="43">Polearm Mastery 43 (72)</option><option value="44">Polearm Mastery 44 (74)</option><option value="45">Polearm Mastery 45 (74)</option></select>
			<select id="BOWM1" onchange="calc()" style="display: block;" disabled="disabled"><option value="1" selected="selected">Bow Mastery 1 (20)</option><option value="2">Bow Mastery 2 (20)</option><option value="3">Bow Mastery 3 (20)</option><option value="4">Bow Mastery 4 (24)</option><option value="5">Bow Mastery 5 (24)</option><option value="6">Bow Mastery 6 (24)</option><option value="7">Bow Mastery 7 (28)</option><option value="8">Bow Mastery 8 (28)</option><option value="9">Bow Mastery 9 (28)</option><option value="10">Bow Mastery 10 (32)</option><option value="11">Bow Mastery 11 (32)</option><option value="12">Bow Mastery 12 (32)</option><option value="13">Bow Mastery 13 (36)</option><option value="14">Bow Mastery 14 (36)</option><option value="15">Bow Mastery 15 (36)</option></select>
			<select id="BOWM2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Bow Mastery 1 (20)</option><option value="2">Bow Mastery 2 (20)</option><option value="3">Bow Mastery 3 (20)</option><option value="4">Bow Mastery 4 (24)</option><option value="5">Bow Mastery 5 (24)</option><option value="6">Bow Mastery 6 (24)</option><option value="7">Bow Mastery 7 (28)</option><option value="8">Bow Mastery 8 (28)</option><option value="9">Bow Mastery 9 (28)</option><option value="10">Bow Mastery 10 (32)</option><option value="11">Bow Mastery 11 (32)</option><option value="12">Bow Mastery 12 (32)</option><option value="13">Bow Mastery 13 (36)</option><option value="14">Bow Mastery 14 (36)</option><option value="15">Bow Mastery 15 (36)</option><option value="16">Bow Mastery 16 (40)</option><option value="17">Bow Mastery 17 (40)</option><option value="18">Bow Mastery 18 (40)</option><option value="19">Bow Mastery 19 (43)</option><option value="20">Bow Mastery 20 (43)</option><option value="21">Bow Mastery 21 (43)</option><option value="22">Bow Mastery 22 (46)</option><option value="23">Bow Mastery 23 (46)</option><option value="24">Bow Mastery 24 (46)</option><option value="25">Bow Mastery 25 (49)</option><option value="26">Bow Mastery 26 (49)</option><option value="27">Bow Mastery 27 (49)</option><option value="28">Bow Mastery 28 (52)</option><option value="29">Bow Mastery 29 (52)</option><option value="30">Bow Mastery 30 (52)</option><option value="31">Bow Mastery 31 (55)</option><option value="32">Bow Mastery 32 (55)</option><option value="33">Bow Mastery 33 (55)</option><option value="34">Bow Mastery 34 (58)</option><option value="35">Bow Mastery 35 (58)</option><option value="36">Bow Mastery 36 (58)</option><option value="37">Bow Mastery 37 (60)</option><option value="38">Bow Mastery 38 (60)</option><option value="39">Bow Mastery 39 (62)</option><option value="40">Bow Mastery 40 (62)</option><option value="41">Bow Mastery 41 (64)</option><option value="42">Bow Mastery 42 (64)</option><option value="43">Bow Mastery 43 (66)</option><option value="44">Bow Mastery 44 (66)</option><option value="45">Bow Mastery 45 (68)</option><option value="46">Bow Mastery 46 (68)</option><option value="47">Bow Mastery 47 (70)</option><option value="48">Bow Mastery 48 (70)</option><option value="49">Bow Mastery 49 (72)</option><option value="50">Bow Mastery 50 (72)</option><option value="51">Bow Mastery 51 (74)</option><option value="52">Bow Mastery 52 (74)</option></select>
			</td>

			<td><input type="checkbox" id="DUALMCHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="THM1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="THM2CHECK" onclick="passives();calc()" style="display: none;"></td>
			<td><select id="DUALM" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Dual Weapon Mastery 1 (40)</option><option value="2">Dual Weapon Mastery 2 (40)</option><option value="3">Dual Weapon Mastery 3 (40)</option><option value="4">Dual Weapon Mastery 4 (43)</option><option value="5">Dual Weapon Mastery 5 (43)</option><option value="6">Dual Weapon Mastery 6 (43)</option><option value="7">Dual Weapon Mastery 7 (46)</option><option value="8">Dual Weapon Mastery 8 (46)</option><option value="9">Dual Weapon Mastery 9 (46)</option><option value="10">Dual Weapon Mastery 10 (49)</option><option value="11">Dual Weapon Mastery 11 (49)</option><option value="12">Dual Weapon Mastery 12 (49)</option><option value="13">Dual Weapon Mastery 13 (52)</option><option value="14">Dual Weapon Mastery 14 (52)</option><option value="15">Dual Weapon Mastery 15 (52)</option><option value="16">Dual Weapon Mastery 16 (55)</option><option value="17">Dual Weapon Mastery 17 (55)</option><option value="18">Dual Weapon Mastery 18 (55)</option><option value="19">Dual Weapon Mastery 19 (58)</option><option value="20">Dual Weapon Mastery 20 (58)</option><option value="21">Dual Weapon Mastery 21 (58)</option><option value="22">Dual Weapon Mastery 22 (60)</option><option value="23">Dual Weapon Mastery 23 (60)</option><option value="24">Dual Weapon Mastery 24 (62)</option><option value="25">Dual Weapon Mastery 25 (62)</option><option value="26">Dual Weapon Mastery 26 (64)</option><option value="27">Dual Weapon Mastery 27 (64)</option><option value="28">Dual Weapon Mastery 28 (66)</option><option value="29">Dual Weapon Mastery 29 (66)</option><option value="30">Dual Weapon Mastery 30 (68)</option><option value="31">Dual Weapon Mastery 31 (68)</option><option value="32">Dual Weapon Mastery 32 (70)</option><option value="33">Dual Weapon Mastery 33 (70)</option><option value="34">Dual Weapon Mastery 34 (72)</option><option value="35">Dual Weapon Mastery 35 (72)</option><option value="36">Dual Weapon Mastery 36 (74)</option><option value="37">Dual Weapon Mastery 37 (74)</option></select>
			<select id="THM1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">2H Weapon Mastery 1 (20)</option><option value="2">2H Weapon Mastery 2 (24)</option><option value="3">2H Weapon Mastery 3 (28)</option><option value="4">2H Weapon Mastery 4 (32)</option><option value="5">2H Weapon Mastery 5 (36)</option></select>
			<select id="THM2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">2H Weapon Mastery 1 (20)</option><option value="2">2H Weapon Mastery 2 (24)</option><option value="3">2H Weapon Mastery 3 (28)</option><option value="4">2H Weapon Mastery 4 (32)</option><option value="5">2H Weapon Mastery 5 (36)</option><option value="6">2H Weapon Mastery 6 (40)</option><option value="7">2H Weapon Mastery 7 (43)</option><option value="8">2H Weapon Mastery 8 (46)</option><option value="9">2H Weapon Mastery 9 (49)</option><option value="10">2H Weapon Mastery 10 (52)</option><option value="11">2H Weapon Mastery 11 (55)</option><option value="12">2H Weapon Mastery 12 (58)</option><option value="13">2H Weapon Mastery 13 (60)</option><option value="14">2H Weapon Mastery 14 (62)</option><option value="15">2H Weapon Mastery 15 (64)</option><option value="16">2H Weapon Mastery 16 (66)</option><option value="17">2H Weapon Mastery 17 (68)</option><option value="18">2H Weapon Mastery 18 (70)</option><option value="19">2H Weapon Mastery 19 (72)</option><option value="20">2H Weapon Mastery 20 (74)</option></select>
			</td></tr>

<tr>		<td>Armor Mastery</td>
			<td><input type="checkbox" id="AMFCHECK" onclick="passives();calc()" style="display: block;">
			<input type="checkbox" id="AMMCHECK" onclick="passives();calc()" style="display: none;"></td>
			<td><select id="AMF" onchange="calc()" style="display: block;" disabled="disabled"><option value="1" selected="selected">Armor Mastery 1 (5)</option><option value="2">Armor Mastery 2 (10)</option><option value="3">Armor Mastery 3 (10)</option><option value="4">Armor Mastery 4 (15)</option><option value="5">Armor Mastery 5 (15)</option></select>
			<select id="AMM" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Armor Mastery 1 (7)</option><option value="2">Armor Mastery 2 (14)</option><option value="3">Armor Mastery 3 (14)</option></select>
			</td>
			<td><input type="checkbox" id="HMK1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="HMK2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="HMW1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="HMW2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="HMO1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="HMO2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="HMO3CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="HMPCHECK" onclick="passives();calc()" style="display: none;"></td>
			<td><select id="HMK1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Heavy Armor Mastery 1 (20)</option><option value="2">Heavy Armor Mastery 2 (20)</option><option value="3">Heavy Armor Mastery 3 (20)</option><option value="4">Heavy Armor Mastery 4 (24)</option><option value="5">Heavy Armor Mastery 5 (24)</option><option value="6">Heavy Armor Mastery 6 (24)</option><option value="7">Heavy Armor Mastery 7 (28)</option><option value="8">Heavy Armor Mastery 8 (28)</option><option value="9">Heavy Armor Mastery 9 (28)</option><option value="10">Heavy Armor Mastery 10 (32)</option><option value="11">Heavy Armor Mastery 11 (32)</option><option value="12">Heavy Armor Mastery 12 (32)</option><option value="13">Heavy Armor Mastery 13 (36)</option><option value="14">Heavy Armor Mastery 14 (36)</option><option value="15">Heavy Armor Mastery 15 (36)</option></select>
			<select id="HMK2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Heavy Armor Mastery 1 (20)</option><option value="2">Heavy Armor Mastery 2 (20)</option><option value="3">Heavy Armor Mastery 3 (20)</option><option value="4">Heavy Armor Mastery 4 (24)</option><option value="5">Heavy Armor Mastery 5 (24)</option><option value="6">Heavy Armor Mastery 6 (24)</option><option value="7">Heavy Armor Mastery 7 (28)</option><option value="8">Heavy Armor Mastery 8 (28)</option><option value="9">Heavy Armor Mastery 9 (28)</option><option value="10">Heavy Armor Mastery 10 (32)</option><option value="11">Heavy Armor Mastery 11 (32)</option><option value="12">Heavy Armor Mastery 12 (32)</option><option value="13">Heavy Armor Mastery 13 (36)</option><option value="14">Heavy Armor Mastery 14 (36)</option><option value="15">Heavy Armor Mastery 15 (36)</option><option value="16">Heavy Armor Mastery 16 (40)</option><option value="17">Heavy Armor Mastery 17 (40)</option><option value="18">Heavy Armor Mastery 18 (40)</option><option value="19">Heavy Armor Mastery 19 (43)</option><option value="20">Heavy Armor Mastery 20 (43)</option><option value="21">Heavy Armor Mastery 21 (43)</option><option value="22">Heavy Armor Mastery 22 (46)</option><option value="23">Heavy Armor Mastery 23 (46)</option><option value="24">Heavy Armor Mastery 24 (46)</option><option value="25">Heavy Armor Mastery 25 (49)</option><option value="26">Heavy Armor Mastery 26 (49)</option><option value="27">Heavy Armor Mastery 27 (49)</option><option value="28">Heavy Armor Mastery 28 (52)</option><option value="29">Heavy Armor Mastery 29 (52)</option><option value="30">Heavy Armor Mastery 30 (52)</option><option value="31">Heavy Armor Mastery 31 (55)</option><option value="32">Heavy Armor Mastery 32 (55)</option><option value="33">Heavy Armor Mastery 33 (55)</option><option value="34">Heavy Armor Mastery 34 (58)</option><option value="35">Heavy Armor Mastery 35 (58)</option><option value="36">Heavy Armor Mastery 36 (58)</option><option value="37">Heavy Armor Mastery 37 (60)</option><option value="38">Heavy Armor Mastery 38 (60)</option><option value="39">Heavy Armor Mastery 39 (62)</option><option value="40">Heavy Armor Mastery 40 (62)</option><option value="41">Heavy Armor Mastery 41 (64)</option><option value="42">Heavy Armor Mastery 42 (64)</option><option value="43">Heavy Armor Mastery 43 (66)</option><option value="44">Heavy Armor Mastery 44 (66)</option><option value="45">Heavy Armor Mastery 45 (68)</option><option value="46">Heavy Armor Mastery 46 (68)</option><option value="47">Heavy Armor Mastery 47 (70)</option><option value="48">Heavy Armor Mastery 48 (70)</option><option value="49">Heavy Armor Mastery 49 (72)</option><option value="50">Heavy Armor Mastery 50 (72)</option><option value="51">Heavy Armor Mastery 51 (74)</option><option value="52">Heavy Armor Mastery 52 (74)</option></select>
			<select id="HMW1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Heavy Armor Mastery 1 (20)</option><option value="2">Heavy Armor Mastery 2 (20)</option><option value="3">Heavy Armor Mastery 3 (24)</option><option value="4">Heavy Armor Mastery 4 (24)</option><option value="5">Heavy Armor Mastery 5 (28)</option><option value="6">Heavy Armor Mastery 6 (28)</option><option value="7">Heavy Armor Mastery 7 (28)</option><option value="8">Heavy Armor Mastery 8 (32)</option><option value="9">Heavy Armor Mastery 9 (32)</option><option value="10">Heavy Armor Mastery 10 (32)</option><option value="11">Heavy Armor Mastery 11 (36)</option><option value="12">Heavy Armor Mastery 12 (36)</option><option value="13">Heavy Armor Mastery 13 (36)</option></select>
			<select id="HMW2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Heavy Armor Mastery 1 (20)</option><option value="2">Heavy Armor Mastery 2 (20)</option><option value="3">Heavy Armor Mastery 3 (24)</option><option value="4">Heavy Armor Mastery 4 (24)</option><option value="5">Heavy Armor Mastery 5 (28)</option><option value="6">Heavy Armor Mastery 6 (28)</option><option value="7">Heavy Armor Mastery 7 (28)</option><option value="8">Heavy Armor Mastery 8 (32)</option><option value="9">Heavy Armor Mastery 9 (32)</option><option value="10">Heavy Armor Mastery 10 (32)</option><option value="11">Heavy Armor Mastery 11 (36)</option><option value="12">Heavy Armor Mastery 12 (36)</option><option value="13">Heavy Armor Mastery 13 (36)</option><option value="14">Heavy Armor Mastery 14 (40)</option><option value="15">Heavy Armor Mastery 15 (40)</option><option value="16">Heavy Armor Mastery 16 (40)</option><option value="17">Heavy Armor Mastery 17 (43)</option><option value="18">Heavy Armor Mastery 18 (43)</option><option value="19">Heavy Armor Mastery 19 (43)</option><option value="20">Heavy Armor Mastery 20 (46)</option><option value="21">Heavy Armor Mastery 21 (46)</option><option value="22">Heavy Armor Mastery 22 (46)</option><option value="23">Heavy Armor Mastery 23 (49)</option><option value="24">Heavy Armor Mastery 24 (49)</option><option value="25">Heavy Armor Mastery 25 (49)</option><option value="26">Heavy Armor Mastery 26 (52)</option><option value="27">Heavy Armor Mastery 27 (52)</option><option value="28">Heavy Armor Mastery 28 (52)</option><option value="29">Heavy Armor Mastery 29 (55)</option><option value="30">Heavy Armor Mastery 30 (55)</option><option value="31">Heavy Armor Mastery 31 (55)</option><option value="32">Heavy Armor Mastery 32 (58)</option><option value="33">Heavy Armor Mastery 33 (58)</option><option value="34">Heavy Armor Mastery 34 (58)</option><option value="35">Heavy Armor Mastery 35 (60)</option><option value="36">Heavy Armor Mastery 36 (60)</option><option value="37">Heavy Armor Mastery 37 (62)</option><option value="38">Heavy Armor Mastery 38 (62)</option><option value="39">Heavy Armor Mastery 39 (64)</option><option value="40">Heavy Armor Mastery 40 (64)</option><option value="41">Heavy Armor Mastery 41 (66)</option><option value="42">Heavy Armor Mastery 42 (66)</option><option value="43">Heavy Armor Mastery 43 (68)</option><option value="44">Heavy Armor Mastery 44 (68)</option><option value="45">Heavy Armor Mastery 45 (70)</option><option value="46">Heavy Armor Mastery 46 (70)</option><option value="47">Heavy Armor Mastery 47 (72)</option><option value="48">Heavy Armor Mastery 48 (72)</option><option value="49">Heavy Armor Mastery 49 (74)</option><option value="50">Heavy Armor Mastery 50 (74)</option></select>
			<select id="HMO1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Heavy Armor Mastery 1 (14)</option><option value="2">Heavy Armor Mastery 2 (14)</option></select>
			<select id="HMO2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Heavy Armor Mastery 1 (14)</option><option value="2">Heavy Armor Mastery 2 (14)</option><option value="3">Heavy Armor Mastery 3 (20)</option><option value="4">Heavy Armor Mastery 4 (20)</option><option value="5">Heavy Armor Mastery 5 (25)</option><option value="6">Heavy Armor Mastery 6 (25)</option><option value="7">Heavy Armor Mastery 7 (30)</option><option value="8">Heavy Armor Mastery 8 (30)</option><option value="9">Heavy Armor Mastery 9 (35)</option><option value="10">Heavy Armor Mastery 10 (35)</option></select>
			<select id="HMO3" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Heavy Armor Mastery 1 (14)</option><option value="2">Heavy Armor Mastery 2 (14)</option><option value="3">Heavy Armor Mastery 3 (20)</option><option value="4">Heavy Armor Mastery 4 (20)</option><option value="5">Heavy Armor Mastery 5 (25)</option><option value="6">Heavy Armor Mastery 6 (25)</option><option value="7">Heavy Armor Mastery 7 (30)</option><option value="8">Heavy Armor Mastery 8 (30)</option><option value="9">Heavy Armor Mastery 9 (35)</option><option value="10">Heavy Armor Mastery 10 (35)</option><option value="11">Heavy Armor Mastery 11 (40)</option><option value="12">Heavy Armor Mastery 12 (40)</option><option value="13">Heavy Armor Mastery 13 (40)</option><option value="14">Heavy Armor Mastery 14 (44)</option><option value="15">Heavy Armor Mastery 15 (44)</option><option value="16">Heavy Armor Mastery 16 (44)</option><option value="17">Heavy Armor Mastery 17 (48)</option><option value="18">Heavy Armor Mastery 18 (48)</option><option value="19">Heavy Armor Mastery 19 (48)</option><option value="20">Heavy Armor Mastery 20 (52)</option><option value="21">Heavy Armor Mastery 21 (52)</option><option value="22">Heavy Armor Mastery 22 (52)</option><option value="23">Heavy Armor Mastery 23 (56)</option><option value="24">Heavy Armor Mastery 24 (56)</option><option value="25">Heavy Armor Mastery 25 (56)</option><option value="26">Heavy Armor Mastery 26 (58)</option><option value="27">Heavy Armor Mastery 27 (58)</option><option value="28">Heavy Armor Mastery 28 (60)</option><option value="29">Heavy Armor Mastery 29 (60)</option><option value="30">Heavy Armor Mastery 30 (62)</option><option value="31">Heavy Armor Mastery 31 (62)</option><option value="32">Heavy Armor Mastery 32 (64)</option><option value="33">Heavy Armor Mastery 33 (64)</option><option value="34">Heavy Armor Mastery 34 (66)</option><option value="35">Heavy Armor Mastery 35 (66)</option><option value="36">Heavy Armor Mastery 36 (68)</option><option value="37">Heavy Armor Mastery 37 (68)</option><option value="38">Heavy Armor Mastery 38 (70)</option><option value="39">Heavy Armor Mastery 39 (70)</option><option value="40">Heavy Armor Mastery 40 (72)</option><option value="41">Heavy Armor Mastery 41 (72)</option><option value="42">Heavy Armor Mastery 42 (74)</option><option value="43">Heavy Armor Mastery 43 (74)</option></select>
			<select id="HMP" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Heavy Armor Mastery 1 (40)</option><option value="2">Heavy Armor Mastery 2 (40)</option><option value="3">Heavy Armor Mastery 3 (40)</option><option value="4">Heavy Armor Mastery 4 (44)</option><option value="5">Heavy Armor Mastery 5 (44)</option><option value="6">Heavy Armor Mastery 6 (44)</option><option value="7">Heavy Armor Mastery 7 (48)</option><option value="8">Heavy Armor Mastery 8 (48)</option><option value="9">Heavy Armor Mastery 9 (48)</option><option value="10">Heavy Armor Mastery 10 (52)</option><option value="11">Heavy Armor Mastery 11 (52)</option><option value="12">Heavy Armor Mastery 12 (52)</option><option value="13">Heavy Armor Mastery 13 (56)</option><option value="14">Heavy Armor Mastery 14 (56)</option><option value="15">Heavy Armor Mastery 15 (56)</option><option value="16">Heavy Armor Mastery 16 (58)</option><option value="17">Heavy Armor Mastery 17 (58)</option><option value="18">Heavy Armor Mastery 18 (60)</option><option value="19">Heavy Armor Mastery 19 (60)</option><option value="20">Heavy Armor Mastery 20 (62)</option><option value="21">Heavy Armor Mastery 21 (62)</option><option value="22">Heavy Armor Mastery 22 (64)</option><option value="23">Heavy Armor Mastery 23 (64)</option><option value="24">Heavy Armor Mastery 24 (66)</option><option value="25">Heavy Armor Mastery 25 (66)</option><option value="26">Heavy Armor Mastery 26 (68)</option><option value="27">Heavy Armor Mastery 27 (68)</option><option value="28">Heavy Armor Mastery 28 (70)</option><option value="29">Heavy Armor Mastery 29 (70)</option><option value="30">Heavy Armor Mastery 30 (72)</option><option value="31">Heavy Armor Mastery 31 (72)</option><option value="32">Heavy Armor Mastery 32 (74)</option><option value="33">Heavy Armor Mastery 33 (74)</option></select>
			</td>
			<td><input type="checkbox" id="LMW1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="LMW2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="LMR1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="LMR2CHECK" onclick="passives();calc()" style="display: block;">
			<input type="checkbox" id="LMO1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="LMO2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="LMO3CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="LMH1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="LMH2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="LMSCHECK" onclick="passives();calc()" style="display: none;"></td>
			<td><select id="LMW1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Light Armor Mastery 1 (20)</option><option value="2">Light Armor Mastery 2 (20)</option><option value="3">Light Armor Mastery 3 (24)</option><option value="4">Light Armor Mastery 4 (24)</option><option value="5">Light Armor Mastery 5 (28)</option><option value="6">Light Armor Mastery 6 (28)</option><option value="7">Light Armor Mastery 7 (28)</option><option value="8">Light Armor Mastery 8 (32)</option><option value="9">Light Armor Mastery 9 (32)</option><option value="10">Light Armor Mastery 10 (32)</option><option value="11">Light Armor Mastery 11 (36)</option><option value="12">Light Armor Mastery 12 (36)</option><option value="13">Light Armor Mastery 13 (36)</option></select>
			<select id="LMW2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Light Armor Mastery 1 (20)</option><option value="2">Light Armor Mastery 2 (20)</option><option value="3">Light Armor Mastery 3 (24)</option><option value="4">Light Armor Mastery 4 (24)</option><option value="5">Light Armor Mastery 5 (28)</option><option value="6">Light Armor Mastery 6 (28)</option><option value="7">Light Armor Mastery 7 (28)</option><option value="8">Light Armor Mastery 8 (32)</option><option value="9">Light Armor Mastery 9 (32)</option><option value="10">Light Armor Mastery 10 (32)</option><option value="11">Light Armor Mastery 11 (36)</option><option value="12">Light Armor Mastery 12 (36)</option><option value="13">Light Armor Mastery 13 (36)</option><option value="14">Light Armor Mastery 14 (40)</option><option value="15">Light Armor Mastery 15 (40)</option><option value="16">Light Armor Mastery 16 (40)</option><option value="17">Light Armor Mastery 17 (43)</option><option value="18">Light Armor Mastery 18 (43)</option><option value="19">Light Armor Mastery 19 (43)</option><option value="20">Light Armor Mastery 20 (46)</option><option value="21">Light Armor Mastery 21 (46)</option><option value="22">Light Armor Mastery 22 (46)</option><option value="23">Light Armor Mastery 23 (49)</option><option value="24">Light Armor Mastery 24 (49)</option><option value="25">Light Armor Mastery 25 (49)</option><option value="26">Light Armor Mastery 26 (52)</option><option value="27">Light Armor Mastery 27 (52)</option><option value="28">Light Armor Mastery 28 (52)</option><option value="29">Light Armor Mastery 29 (55)</option><option value="30">Light Armor Mastery 30 (55)</option><option value="31">Light Armor Mastery 31 (55)</option><option value="32">Light Armor Mastery 32 (58)</option><option value="33">Light Armor Mastery 33 (58)</option><option value="34">Light Armor Mastery 34 (58)</option><option value="35">Light Armor Mastery 35 (60)</option><option value="36">Light Armor Mastery 36 (60)</option><option value="37">Light Armor Mastery 37 (62)</option><option value="38">Light Armor Mastery 38 (62)</option><option value="39">Light Armor Mastery 39 (64)</option><option value="40">Light Armor Mastery 40 (64)</option><option value="41">Light Armor Mastery 41 (66)</option><option value="42">Light Armor Mastery 42 (66)</option><option value="43">Light Armor Mastery 43 (68)</option><option value="44">Light Armor Mastery 44 (68)</option><option value="45">Light Armor Mastery 45 (70)</option><option value="46">Light Armor Mastery 46 (70)</option><option value="47">Light Armor Mastery 47 (72)</option><option value="48">Light Armor Mastery 48 (72)</option><option value="49">Light Armor Mastery 49 (74)</option><option value="50">Light Armor Mastery 50 (74)</option></select>
			<select id="LMR1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Light Armor Mastery 1 (20)</option><option value="2">Light Armor Mastery 2 (20)</option><option value="3">Light Armor Mastery 3 (24)</option><option value="4">Light Armor Mastery 4 (24)</option><option value="5">Light Armor Mastery 5 (28)</option><option value="6">Light Armor Mastery 6 (28)</option><option value="7">Light Armor Mastery 7 (32)</option><option value="8">Light Armor Mastery 8 (32)</option><option value="9">Light Armor Mastery 9 (36)</option><option value="10">Light Armor Mastery 10 (36)</option></select>
			<select id="LMR2" onchange="calc()" style="display: block;" disabled="disabled"><option value="1" selected="selected">Light Armor Mastery 1 (20)</option><option value="2">Light Armor Mastery 2 (20)</option><option value="3">Light Armor Mastery 3 (24)</option><option value="4">Light Armor Mastery 4 (24)</option><option value="5">Light Armor Mastery 5 (28)</option><option value="6">Light Armor Mastery 6 (28)</option><option value="7">Light Armor Mastery 7 (32)</option><option value="8">Light Armor Mastery 8 (32)</option><option value="9">Light Armor Mastery 9 (36)</option><option value="10">Light Armor Mastery 10 (36)</option><option value="11">Light Armor Mastery 11 (40)</option><option value="12">Light Armor Mastery 12 (40)</option><option value="13">Light Armor Mastery 13 (40)</option><option value="14">Light Armor Mastery 14 (43)</option><option value="15">Light Armor Mastery 15 (43)</option><option value="16">Light Armor Mastery 16 (43)</option><option value="17">Light Armor Mastery 17 (46)</option><option value="18">Light Armor Mastery 18 (46)</option><option value="19">Light Armor Mastery 19 (46)</option><option value="20">Light Armor Mastery 20 (49)</option><option value="21">Light Armor Mastery 21 (49)</option><option value="22">Light Armor Mastery 22 (49)</option><option value="23">Light Armor Mastery 23 (52)</option><option value="24">Light Armor Mastery 24 (52)</option><option value="25">Light Armor Mastery 25 (52)</option><option value="26">Light Armor Mastery 26 (55)</option><option value="27">Light Armor Mastery 27 (55)</option><option value="28">Light Armor Mastery 28 (55)</option><option value="29">Light Armor Mastery 29 (58)</option><option value="30">Light Armor Mastery 30 (58)</option><option value="31">Light Armor Mastery 31 (58)</option><option value="32">Light Armor Mastery 32 (60)</option><option value="33">Light Armor Mastery 33 (60)</option><option value="34">Light Armor Mastery 34 (62)</option><option value="35">Light Armor Mastery 35 (62)</option><option value="36">Light Armor Mastery 36 (64)</option><option value="37">Light Armor Mastery 37 (64)</option><option value="38">Light Armor Mastery 38 (66)</option><option value="39">Light Armor Mastery 39 (66)</option><option value="40">Light Armor Mastery 40 (68)</option><option value="41">Light Armor Mastery 41 (68)</option><option value="42">Light Armor Mastery 42 (70)</option><option value="43">Light Armor Mastery 43 (70)</option><option value="44">Light Armor Mastery 44 (72)</option><option value="45">Light Armor Mastery 45 (72)</option><option value="46">Light Armor Mastery 46 (74)</option><option value="47">Light Armor Mastery 47 (74)</option></select>
			<select id="LMO1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Light Armor Mastery 1 (7)</option><option value="2">Light Armor Mastery 2 (7)</option><option value="3">Light Armor Mastery 3 (14)</option><option value="4">Light Armor Mastery 4 (14)</option></select>
			<select id="LMO2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Light Armor Mastery 1 (7)</option><option value="2">Light Armor Mastery 2 (7)</option><option value="3">Light Armor Mastery 3 (14)</option><option value="4">Light Armor Mastery 4 (14)</option><option value="5">Light Armor Mastery 5 (20)</option><option value="6">Light Armor Mastery 6 (20)</option><option value="7">Light Armor Mastery 7 (25)</option><option value="8">Light Armor Mastery 8 (25)</option><option value="9">Light Armor Mastery 9 (30)</option><option value="10">Light Armor Mastery 10 (30)</option><option value="11">Light Armor Mastery 11 (35)</option><option value="12">Light Armor Mastery 12 (35)</option></select>
			<select id="LMO3" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Light Armor Mastery 1 (7)</option><option value="2">Light Armor Mastery 2 (7)</option><option value="3">Light Armor Mastery 3 (14)</option><option value="4">Light Armor Mastery 4 (14)</option><option value="5">Light Armor Mastery 5 (20)</option><option value="6">Light Armor Mastery 6 (20)</option><option value="7">Light Armor Mastery 7 (25)</option><option value="8">Light Armor Mastery 8 (25)</option><option value="9">Light Armor Mastery 9 (30)</option><option value="10">Light Armor Mastery 10 (30)</option><option value="11">Light Armor Mastery 11 (35)</option><option value="12">Light Armor Mastery 12 (35)</option><option value="13">Light Armor Mastery 13 (40)</option><option value="14">Light Armor Mastery 14 (40)</option><option value="15">Light Armor Mastery 15 (40)</option><option value="16">Light Armor Mastery 16 (44)</option><option value="17">Light Armor Mastery 17 (44)</option><option value="18">Light Armor Mastery 18 (44)</option><option value="19">Light Armor Mastery 19 (48)</option><option value="20">Light Armor Mastery 20 (48)</option><option value="21">Light Armor Mastery 21 (48)</option><option value="22">Light Armor Mastery 22 (52)</option><option value="23">Light Armor Mastery 23 (52)</option><option value="24">Light Armor Mastery 24 (52)</option><option value="25">Light Armor Mastery 25 (56)</option><option value="26">Light Armor Mastery 26 (56)</option><option value="27">Light Armor Mastery 27 (56)</option><option value="28">Light Armor Mastery 28 (58)</option><option value="29">Light Armor Mastery 29 (58)</option><option value="30">Light Armor Mastery 30 (60)</option><option value="31">Light Armor Mastery 31 (60)</option><option value="32">Light Armor Mastery 32 (62)</option><option value="33">Light Armor Mastery 33 (62)</option><option value="34">Light Armor Mastery 34 (64)</option><option value="35">Light Armor Mastery 35 (64)</option><option value="36">Light Armor Mastery 36 (66)</option><option value="37">Light Armor Mastery 37 (66)</option><option value="38">Light Armor Mastery 38 (68)</option><option value="39">Light Armor Mastery 39 (68)</option><option value="40">Light Armor Mastery 40 (70)</option><option value="41">Light Armor Mastery 41 (70)</option><option value="42">Light Armor Mastery 42 (72)</option><option value="43">Light Armor Mastery 43 (72)</option><option value="44">Light Armor Mastery 44 (74)</option><option value="45">Light Armor Mastery 45 (74)</option></select>
			<select id="LMH1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Light Armor Mastery 1 (20)</option><option value="2">Light Armor Mastery 2 (20)</option><option value="3">Light Armor Mastery 3 (25)</option><option value="4">Light Armor Mastery 4 (25)</option><option value="5">Light Armor Mastery 5 (30)</option><option value="6">Light Armor Mastery 6 (30)</option><option value="7">Light Armor Mastery 7 (35)</option><option value="8">Light Armor Mastery 8 (35)</option></select>
			<select id="LMH2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Light Armor Mastery 1 (20)</option><option value="2">Light Armor Mastery 2 (20)</option><option value="3">Light Armor Mastery 3 (25)</option><option value="4">Light Armor Mastery 4 (25)</option><option value="5">Light Armor Mastery 5 (30)</option><option value="6">Light Armor Mastery 6 (30)</option><option value="7">Light Armor Mastery 7 (35)</option><option value="8">Light Armor Mastery 8 (35)</option><option value="9">Light Armor Mastery 9 (40)</option><option value="10">Light Armor Mastery 10 (40)</option><option value="11">Light Armor Mastery 11 (40)</option><option value="12">Light Armor Mastery 12 (44)</option><option value="13">Light Armor Mastery 13 (44)</option><option value="14">Light Armor Mastery 14 (44)</option><option value="15">Light Armor Mastery 15 (48)</option><option value="16">Light Armor Mastery 16 (48)</option><option value="17">Light Armor Mastery 17 (48)</option><option value="18">Light Armor Mastery 18 (52)</option><option value="19">Light Armor Mastery 19 (52)</option><option value="20">Light Armor Mastery 20 (52)</option><option value="21">Light Armor Mastery 21 (56)</option><option value="22">Light Armor Mastery 22 (56)</option><option value="23">Light Armor Mastery 23 (56)</option><option value="24">Light Armor Mastery 24 (58)</option><option value="25">Light Armor Mastery 25 (58)</option><option value="26">Light Armor Mastery 26 (60)</option><option value="27">Light Armor Mastery 27 (60)</option><option value="28">Light Armor Mastery 28 (62)</option><option value="29">Light Armor Mastery 29 (62)</option><option value="30">Light Armor Mastery 30 (64)</option><option value="31">Light Armor Mastery 31 (64)</option><option value="32">Light Armor Mastery 32 (66)</option><option value="33">Light Armor Mastery 33 (66)</option><option value="34">Light Armor Mastery 34 (68)</option><option value="35">Light Armor Mastery 35 (68)</option><option value="36">Light Armor Mastery 36 (70)</option><option value="37">Light Armor Mastery 37 (70)</option><option value="38">Light Armor Mastery 38 (72)</option><option value="39">Light Armor Mastery 39 (72)</option><option value="40">Light Armor Mastery 40 (74)</option><option value="41">Light Armor Mastery 41 (74)</option></select>
			<select id="LMS" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Light Armor Mastery 1 (40)</option><option value="2">Light Armor Mastery 2 (40)</option><option value="3">Light Armor Mastery 3 (40)</option><option value="4">Light Armor Mastery 4 (44)</option><option value="5">Light Armor Mastery 5 (44)</option><option value="6">Light Armor Mastery 6 (44)</option><option value="7">Light Armor Mastery 7 (48)</option><option value="8">Light Armor Mastery 8 (48)</option><option value="9">Light Armor Mastery 9 (48)</option><option value="10">Light Armor Mastery 10 (52)</option><option value="11">Light Armor Mastery 11 (52)</option><option value="12">Light Armor Mastery 12 (52)</option><option value="13">Light Armor Mastery 13 (56)</option><option value="14">Light Armor Mastery 14 (56)</option><option value="15">Light Armor Mastery 15 (56)</option><option value="16">Light Armor Mastery 16 (58)</option><option value="17">Light Armor Mastery 17 (58)</option><option value="18">Light Armor Mastery 18 (60)</option><option value="19">Light Armor Mastery 19 (60)</option><option value="20">Light Armor Mastery 20 (62)</option><option value="21">Light Armor Mastery 21 (62)</option><option value="22">Light Armor Mastery 22 (64)</option><option value="23">Light Armor Mastery 23 (64)</option><option value="24">Light Armor Mastery 24 (66)</option><option value="25">Light Armor Mastery 25 (66)</option><option value="26">Light Armor Mastery 26 (68)</option><option value="27">Light Armor Mastery 27 (68)</option><option value="28">Light Armor Mastery 28 (70)</option><option value="29">Light Armor Mastery 29 (70)</option><option value="30">Light Armor Mastery 30 (72)</option><option value="31">Light Armor Mastery 31 (72)</option><option value="32">Light Armor Mastery 32 (74)</option><option value="33">Light Armor Mastery 33 (74)</option></select>
			</td>
			<td><input type="checkbox" id="RMN1CHECK" onclick="robemastery();calc()" style="display: none;">
			<input type="checkbox" id="RMN2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="RMH1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="RMH2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="RMO1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="RMO2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="RMO3CHECK" onclick="passives();calc()" style="display: none;"></td>
			<td><select id="RMN1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Robe Mastery 1 (20)</option><option value="2">Robe Mastery 2 (20)</option><option value="3">Robe Mastery 3 (25)</option><option value="4">Robe Mastery 4 (25)</option><option value="5">Robe Mastery 5 (30)</option><option value="6">Robe Mastery 6 (30)</option><option value="7">Robe Mastery 7 (35)</option><option value="8">Robe Mastery 8 (35)</option></select>
			<select id="RMN2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Robe Mastery 1 (20)</option><option value="2">Robe Mastery 2 (20)</option><option value="3">Robe Mastery 3 (25)</option><option value="4">Robe Mastery 4 (25)</option><option value="5">Robe Mastery 5 (30)</option><option value="6">Robe Mastery 6 (30)</option><option value="7">Robe Mastery 7 (35)</option><option value="8">Robe Mastery 8 (35)</option><option value="9">Robe Mastery 9 (40)</option><option value="10">Robe Mastery 10 (40)</option><option value="11">Robe Mastery 11 (40)</option><option value="12">Robe Mastery 12 (44)</option><option value="13">Robe Mastery 13 (44)</option><option value="14">Robe Mastery 14 (44)</option><option value="15">Robe Mastery 15 (48)</option><option value="16">Robe Mastery 16 (48)</option><option value="17">Robe Mastery 17 (48)</option><option value="18">Robe Mastery 18 (52)</option><option value="19">Robe Mastery 19 (52)</option><option value="20">Robe Mastery 20 (52)</option><option value="21">Robe Mastery 21 (56)</option><option value="22">Robe Mastery 22 (56)</option><option value="23">Robe Mastery 23 (56)</option><option value="24">Robe Mastery 24 (58)</option><option value="25">Robe Mastery 25 (58)</option><option value="26">Robe Mastery 26 (60)</option><option value="27">Robe Mastery 27 (60)</option><option value="28">Robe Mastery 28 (62)</option><option value="29">Robe Mastery 29 (62)</option><option value="30">Robe Mastery 30 (64)</option><option value="31">Robe Mastery 31 (64)</option><option value="32">Robe Mastery 32 (66)</option><option value="33">Robe Mastery 33 (66)</option><option value="34">Robe Mastery 34 (68)</option><option value="35">Robe Mastery 35 (68)</option><option value="36">Robe Mastery 36 (70)</option><option value="37">Robe Mastery 37 (70)</option><option value="38">Robe Mastery 38 (72)</option><option value="39">Robe Mastery 39 (72)</option><option value="40">Robe Mastery 40 (74)</option><option value="41">Robe Mastery 41 (74)</option></select>
			<select id="RMH1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Robe Mastery 1 (20)</option><option value="2">Robe Mastery 2 (20)</option><option value="3">Robe Mastery 3 (25)</option><option value="4">Robe Mastery 4 (25)</option><option value="5">Robe Mastery 5 (30)</option><option value="6">Robe Mastery 6 (30)</option><option value="7">Robe Mastery 7 (35)</option><option value="8">Robe Mastery 8 (35)</option></select>
			<select id="RMH2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Robe Mastery 1 (20)</option><option value="2">Robe Mastery 2 (20)</option><option value="3">Robe Mastery 3 (25)</option><option value="4">Robe Mastery 4 (25)</option><option value="5">Robe Mastery 5 (30)</option><option value="6">Robe Mastery 6 (30)</option><option value="7">Robe Mastery 7 (35)</option><option value="8">Robe Mastery 8 (35)</option><option value="9">Robe Mastery 9 (40)</option><option value="10">Robe Mastery 10 (40)</option><option value="11">Robe Mastery 11 (40)</option><option value="12">Robe Mastery 12 (44)</option><option value="13">Robe Mastery 13 (44)</option><option value="14">Robe Mastery 14 (44)</option><option value="15">Robe Mastery 15 (48)</option><option value="16">Robe Mastery 16 (48)</option><option value="17">Robe Mastery 17 (48)</option><option value="18">Robe Mastery 18 (52)</option><option value="19">Robe Mastery 19 (52)</option><option value="20">Robe Mastery 20 (52)</option><option value="21">Robe Mastery 21 (56)</option><option value="22">Robe Mastery 22 (56)</option><option value="23">Robe Mastery 23 (56)</option><option value="24">Robe Mastery 24 (58)</option><option value="25">Robe Mastery 25 (58)</option><option value="26">Robe Mastery 26 (60)</option><option value="27">Robe Mastery 27 (60)</option><option value="28">Robe Mastery 28 (62)</option><option value="29">Robe Mastery 29 (62)</option><option value="30">Robe Mastery 30 (64)</option><option value="31">Robe Mastery 31 (64)</option><option value="32">Robe Mastery 32 (66)</option><option value="33">Robe Mastery 33 (66)</option><option value="34">Robe Mastery 34 (68)</option><option value="35">Robe Mastery 35 (68)</option><option value="36">Robe Mastery 36 (70)</option><option value="37">Robe Mastery 37 (70)</option><option value="38">Robe Mastery 38 (72)</option><option value="39">Robe Mastery 39 (72)</option><option value="40">Robe Mastery 40 (74)</option><option value="41">Robe Mastery 41 (74)</option></select>
			<select id="RMO1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Robe Mastery 1 (7)</option><option value="2">Robe Mastery 2 (7)</option><option value="3">Robe Mastery 3 (14)</option><option value="4">Robe Mastery 4 (14)</option></select>
			<select id="RMO2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Robe Mastery 1 (7)</option><option value="2">Robe Mastery 2 (7)</option><option value="3">Robe Mastery 3 (14)</option><option value="4">Robe Mastery 4 (14)</option><option value="5">Robe Mastery 5 (20)</option><option value="6">Robe Mastery 6 (20)</option><option value="7">Robe Mastery 7 (25)</option><option value="8">Robe Mastery 8 (25)</option><option value="9">Robe Mastery 9 (30)</option><option value="10">Robe Mastery 10 (30)</option><option value="11">Robe Mastery 11 (35)</option><option value="12">Robe Mastery 12 (35)</option></select>
			<select id="RMO3" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Robe Mastery 1 (7)</option><option value="2">Robe Mastery 2 (7)</option><option value="3">Robe Mastery 3 (14)</option><option value="4">Robe Mastery 4 (14)</option><option value="5">Robe Mastery 5 (20)</option><option value="6">Robe Mastery 6 (20)</option><option value="7">Robe Mastery 7 (25)</option><option value="8">Robe Mastery 8 (25)</option><option value="9">Robe Mastery 9 (30)</option><option value="10">Robe Mastery 10 (30)</option><option value="11">Robe Mastery 11 (35)</option><option value="12">Robe Mastery 12 (35)</option><option value="13">Robe Mastery 13 (40)</option><option value="14">Robe Mastery 14 (40)</option><option value="15">Robe Mastery 15 (40)</option><option value="16">Robe Mastery 16 (44)</option><option value="17">Robe Mastery 17 (44)</option><option value="18">Robe Mastery 18 (44)</option><option value="19">Robe Mastery 19 (48)</option><option value="20">Robe Mastery 20 (48)</option><option value="21">Robe Mastery 21 (48)</option><option value="22">Robe Mastery 22 (52)</option><option value="23">Robe Mastery 23 (52)</option><option value="24">Robe Mastery 24 (52)</option><option value="25">Robe Mastery 25 (56)</option><option value="26">Robe Mastery 26 (56)</option><option value="27">Robe Mastery 27 (56)</option><option value="28">Robe Mastery 28 (58)</option><option value="29">Robe Mastery 29 (58)</option><option value="30">Robe Mastery 30 (60)</option><option value="31">Robe Mastery 31 (60)</option><option value="32">Robe Mastery 32 (62)</option><option value="33">Robe Mastery 33 (62)</option><option value="34">Robe Mastery 34 (64)</option><option value="35">Robe Mastery 35 (64)</option><option value="36">Robe Mastery 36 (66)</option><option value="37">Robe Mastery 37 (66)</option><option value="38">Robe Mastery 38 (68)</option><option value="39">Robe Mastery 39 (68)</option><option value="40">Robe Mastery 40 (70)</option><option value="41">Robe Mastery 41 (70)</option><option value="42">Robe Mastery 42 (72)</option><option value="43">Robe Mastery 43 (72)</option><option value="44">Robe Mastery 44 (74)</option><option value="45">Robe Mastery 45 (74)</option></select>
			</td></tr>
<tr>			<td>M.Def.</td>
			<td><input type="checkbox" id="MR1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="MR2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="AM1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="AM2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="AM3CHECK" onclick="passives();calc()" style="display: none;"></td>
			<td><select id="MR1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Magic Resistance 1 (20)</option><option value="2">Magic Resistance 2 (20)</option><option value="3">Magic Resistance 3 (24)</option><option value="4">Magic Resistance 4 (24)</option><option value="5">Magic Resistance 5 (24)</option><option value="6">Magic Resistance 6 (28)</option><option value="7">Magic Resistance 7 (28)</option><option value="8">Magic Resistance 8 (28)</option><option value="9">Magic Resistance 9 (32)</option><option value="10">Magic Resistance 10 (32)</option><option value="11">Magic Resistance 11 (32)</option><option value="12">Magic Resistance 12 (36)</option><option value="13">Magic Resistance 13 (36)</option><option value="14">Magic Resistance 14 (36)</option></select>
			<select id="MR2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Magic Resistance 1 (20)</option><option value="2">Magic Resistance 2 (20)</option><option value="3">Magic Resistance 3 (24)</option><option value="4">Magic Resistance 4 (24)</option><option value="5">Magic Resistance 5 (24)</option><option value="6">Magic Resistance 6 (28)</option><option value="7">Magic Resistance 7 (28)</option><option value="8">Magic Resistance 8 (28)</option><option value="9">Magic Resistance 9 (32)</option><option value="10">Magic Resistance 10 (32)</option><option value="11">Magic Resistance 11 (32)</option><option value="12">Magic Resistance 12 (36)</option><option value="13">Magic Resistance 13 (36)</option><option value="14">Magic Resistance 14 (36)</option><option value="15">Magic Resistance 15 (40)</option><option value="16">Magic Resistance 16 (40)</option><option value="17">Magic Resistance 17 (40)</option><option value="18">Magic Resistance 18 (43)</option><option value="19">Magic Resistance 19 (43)</option><option value="20">Magic Resistance 20 (43)</option><option value="21">Magic Resistance 21 (46)</option><option value="22">Magic Resistance 22 (46)</option><option value="23">Magic Resistance 23 (46)</option><option value="24">Magic Resistance 24 (49)</option><option value="25">Magic Resistance 25 (49)</option><option value="26">Magic Resistance 26 (49)</option><option value="27">Magic Resistance 27 (52)</option><option value="28">Magic Resistance 28 (52)</option><option value="29">Magic Resistance 29 (52)</option><option value="30">Magic Resistance 30 (55)</option><option value="31">Magic Resistance 31 (55)</option><option value="32">Magic Resistance 32 (55)</option><option value="33">Magic Resistance 33 (58)</option><option value="34">Magic Resistance 34 (58)</option><option value="35">Magic Resistance 35 (58)</option><option value="36">Magic Resistance 36 (60)</option><option value="37">Magic Resistance 37 (60)</option><option value="38">Magic Resistance 38 (62)</option><option value="39">Magic Resistance 39 (62)</option><option value="40">Magic Resistance 40 (64)</option><option value="41">Magic Resistance 41 (64)</option><option value="42">Magic Resistance 42 (66)</option><option value="43">Magic Resistance 43 (66)</option><option value="44">Magic Resistance 44 (68)</option><option value="45">Magic Resistance 45 (68)</option><option value="46">Magic Resistance 46 (70)</option><option value="47">Magic Resistance 47 (70)</option><option value="48">Magic Resistance 48 (72)</option><option value="49">Magic Resistance 49 (72)</option><option value="50">Magic Resistance 50 (74)</option><option value="51">Magic Resistance 51 (74)</option></select>
			<select id="AM1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Anti-Magic 1 (7)</option><option value="2">Anti-Magic 2 (7)</option><option value="3">Anti-Magic 3 (14)</option><option value="4">Anti-Magic 4 (14)</option></select>
			<select id="AM2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Anti-Magic 1 (7)</option><option value="2">Anti-Magic 2 (7)</option><option value="3">Anti-Magic 3 (14)</option><option value="4">Anti-Magic 4 (14)</option><option value="5">Anti-Magic 5 (20)</option><option value="6">Anti-Magic 6 (20)</option><option value="7">Anti-Magic 7 (25)</option><option value="8">Anti-Magic 8 (25)</option><option value="9">Anti-Magic 9 (30)</option><option value="10">Anti-Magic 10 (30)</option><option value="11">Anti-Magic 11 (35)</option><option value="12">Anti-Magic 12 (35)</option></select>
			<select id="AM3" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Anti-Magic 1 (7)</option><option value="2">Anti-Magic 2 (7)</option><option value="3">Anti-Magic 3 (14)</option><option value="4">Anti-Magic 4 (14)</option><option value="5">Anti-Magic 5 (20)</option><option value="6">Anti-Magic 6 (20)</option><option value="7">Anti-Magic 7 (25)</option><option value="8">Anti-Magic 8 (25)</option><option value="9">Anti-Magic 9 (30)</option><option value="10">Anti-Magic 10 (30)</option><option value="11">Anti-Magic 11 (35)</option><option value="12">Anti-Magic 12 (35)</option><option value="13">Anti-Magic 13 (40)</option><option value="14">Anti-Magic 14 (40)</option><option value="15">Anti-Magic 15 (40)</option><option value="16">Anti-Magic 16 (44)</option><option value="17">Anti-Magic 17 (44)</option><option value="18">Anti-Magic 18 (44)</option><option value="19">Anti-Magic 19 (48)</option><option value="20">Anti-Magic 20 (48)</option><option value="21">Anti-Magic 21 (48)</option><option value="22">Anti-Magic 22 (52)</option><option value="23">Anti-Magic 23 (52)</option><option value="24">Anti-Magic 24 (52)</option><option value="25">Anti-Magic 25 (56)</option><option value="26">Anti-Magic 26 (56)</option><option value="27">Anti-Magic 27 (56)</option><option value="28">Anti-Magic 28 (58)</option><option value="29">Anti-Magic 29 (58)</option><option value="30">Anti-Magic 30 (60)</option><option value="31">Anti-Magic 31 (60)</option><option value="32">Anti-Magic 32 (62)</option><option value="33">Anti-Magic 33 (62)</option><option value="34">Anti-Magic 34 (64)</option><option value="35">Anti-Magic 35 (64)</option><option value="36">Anti-Magic 36 (66)</option><option value="37">Anti-Magic 37 (66)</option><option value="38">Anti-Magic 38 (68)</option><option value="39">Anti-Magic 39 (68)</option><option value="40">Anti-Magic 40 (70)</option><option value="41">Anti-Magic 41 (70)</option><option value="42">Anti-Magic 42 (72)</option><option value="43">Anti-Magic 43 (72)</option><option value="44">Anti-Magic 44 (74)</option><option value="45">Anti-Magic 45 (74)</option></select>
			</td></tr>
<tr>		<td>Misc.</td>
			<td><input type="checkbox" id="BOOSTHP1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="BOOSTHP2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="BOOSTHP3CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="QUICKSTEP1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="QUICKSTEP2CHECK" onclick="passives();calc()" style="display: block;">
			<input type="checkbox" id="FINALFORTRESSCHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="CLEARMINDCHECK" onclick="passives();calc()" style="display: none;"></td>

			<td><select id="BOOSTHP1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Boost HP 1 (20)</option><option value="2">Boost HP 2 (28)</option><option value="3">Boost HP 3 (36)</option></select>
			<select id="BOOSTHP2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Boost HP 1 (40)</option><option value="2">Boost HP 2 (44)</option><option value="3">Boost HP 3 (48)</option><option value="4">Boost HP 4 (52)</option><option value="5">Boost HP 5 (56)</option><option value="6">Boost HP 6 (62)</option><option value="7">Boost HP 7 (70)</option></select>
			<select id="BOOSTHP3" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Boost HP 1 (20)</option><option value="2">Boost HP 2 (28)</option><option value="3">Boost HP 3 (36)</option><option value="4">Boost HP 4 (43)</option><option value="5">Boost HP 5 (49)</option><option value="6">Boost HP 6 (55)</option><option value="7">Boost HP 7 (62)</option><option value="8">Boost HP 8 (66)</option><option value="9">Boost HP 9 (70)</option><option value="10">Boost HP 10 (74)</option><option value="11">Boost HP 10 +1 (HP)</option><option value="41">Boost HP 10 +1 (CP)</option><option value="12">Boost HP 10 +2 (HP)</option><option value="42">Boost HP 10 +2 (CP)</option><option value="13">Boost HP 10 +3 (HP)</option><option value="43">Boost HP 10 +3 (CP)</option><option value="14">Boost HP 10 +4 (HP)</option><option value="44">Boost HP 10 +4 (CP)</option><option value="15">Boost HP 10 +5 (HP)</option><option value="45">Boost HP 10 +5 (CP)</option><option value="16">Boost HP 10 +6 (HP)</option><option value="46">Boost HP 10 +6 (CP)</option><option value="17">Boost HP 10 +7 (HP)</option><option value="47">Boost HP 10 +7 (CP)</option><option value="18">Boost HP 10 +8 (HP)</option><option value="48">Boost HP 10 +8 (CP)</option><option value="19">Boost HP 10 +9 (HP)</option><option value="49">Boost HP 10 +9 (CP)</option><option value="20">Boost HP 10 +10 (HP)</option><option value="50">Boost HP 10 +10 (CP)</option><option value="21">Boost HP 10 +11 (HP)</option><option value="51">Boost HP 10 +11 (CP)</option><option value="22">Boost HP 10 +12 (HP)</option><option value="52">Boost HP 10 +12 (CP)</option><option value="23">Boost HP 10 +13 (HP)</option><option value="53">Boost HP 10 +13 (CP)</option><option value="24">Boost HP 10 +14 (HP)</option><option value="54">Boost HP 10 +14 (CP)</option><option value="25">Boost HP 10 +15 (HP)</option><option value="55">Boost HP 10 +15 (CP)</option><option value="26">Boost HP 10 +16 (HP)</option><option value="56">Boost HP 10 +16 (CP)</option><option value="27">Boost HP 10 +17 (HP)</option><option value="57">Boost HP 10 +17 (CP)</option><option value="28">Boost HP 10 +18 (HP)</option><option value="58">Boost HP 10 +18 (CP)</option><option value="29">Boost HP 10 +19 (HP)</option><option value="59">Boost HP 10 +19 (CP)</option><option value="30">Boost HP 10 +20 (HP)</option><option value="60">Boost HP 10 +20 (CP)</option><option value="31">Boost HP 10 +21 (HP)</option><option value="61">Boost HP 10 +21 (CP)</option><option value="32">Boost HP 10 +22 (HP)</option><option value="62">Boost HP 10 +22 (CP)</option><option value="33">Boost HP 10 +23 (HP)</option><option value="63">Boost HP 10 +23 (CP)</option><option value="34">Boost HP 10 +24 (HP)</option><option value="64">Boost HP 10 +24 (CP)</option><option value="35">Boost HP 10 +25 (HP)</option><option value="65">Boost HP 10 +25 (CP)</option><option value="36">Boost HP 10 +26 (HP)</option><option value="66">Boost HP 10 +26 (CP)</option><option value="37">Boost HP 10 +27 (HP)</option><option value="67">Boost HP 10 +27 (CP)</option><option value="38">Boost HP 10 +28 (HP)</option><option value="68">Boost HP 10 +28 (CP)</option><option value="39">Boost HP 10 +29 (HP)</option><option value="69">Boost HP 10 +29 (CP)</option><option value="40">Boost HP 10 +30 (HP)</option><option value="70">Boost HP 10 +30 (CP)</option></select>
			<select id="QUICKSTEP1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Quick Step 1 (28)</option></select>
			<select id="QUICKSTEP2" onchange="calc()" style="display: block;" disabled="disabled"><option value="1" selected="selected">Quick Step 1 (28)</option><option value="2">Quick Step 2 (43)</option></select>
			<select id="FINALFORTRESS" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Final Fortress 1 (52)</option><option value="2">Final Fortress 2 (55)</option><option value="3">Final Fortress 3 (58)</option><option value="4">Final Fortress 4 (60)</option><option value="5">Final Fortress 5 (62)</option><option value="6">Final Fortress 6 (64)</option><option value="7">Final Fortress 7 (66)</option><option value="8">Final Fortress 8 (68)</option><option value="9">Final Fortress 9 (70)</option><option value="10">Final Fortress 10 (72)</option><option value="11">Final Fortress 11 (74)</option></select>
			<select id="CLEARMIND" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Clear Mind 1 (40)</option><option value="2">Clear Mind 2 (48)</option><option value="3">Clear Mind 3 (56)</option><option value="4">Clear Mind 4 (62)</option><option value="5">Clear Mind 5 (68)</option><option value="6">Clear Mind 6 (74)
			</option></select></td>
			<td><input type="checkbox" id="BOOSTMP1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="BOOSTMP2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="BOOSTEVASION1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="BOOSTEVASION2CHECK" onclick="passives();calc()" style="display: block;">
			<input type="checkbox" id="FINALFRENZYCHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="SHIELDMASTERY1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="SHIELDMASTERY2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="WEIGHTLIMIT1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="WEIGHTLIMIT2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="WEIGHTLIMIT3CHECK" onclick="passives();calc()" style="display: none;"></td>

			<td><select id="BOOSTMP1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Boost Mana 1 (20)</option><option value="2">Boost Mana 2 (30)</option></select>
			<select id="BOOSTMP2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Boost Mana 1 (20)</option><option value="2">Boost Mana 2 (30)</option><option value="3">Boost Mana 3 (40)</option><option value="4">Boost Mana 4 (48)</option><option value="5">Boost Mana 5 (56)</option><option value="6">Boost Mana 6 (60)</option><option value="7">Boost Mana 7 (66)</option><option value="8">Boost Mana 8 (72)</option></select>
			<select id="BOOSTEVASION1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Boost Evasion 1 (24)</option></select>
			<select id="BOOSTEVASION2" onchange="calc()" style="display: block;" disabled="disabled"><option value="1" selected="selected">Boost Evasion 1 (24)</option><option value="2">Boost Evasion 2 (46)</option><option value="3">Boost Evasion 3 (58)</option></select>
			<select id="FINALFRENZY" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Final Frenzy 1 (43)</option><option value="2">Final Frenzy 2 (46)</option><option value="3">Final Frenzy 3 (49)</option><option value="4">Final Frenzy 4 (52)</option><option value="5">Final Frenzy 5 (55)</option><option value="6">Final Frenzy 6 (58)</option><option value="7">Final Frenzy 7 (60)</option><option value="8">Final Frenzy 8 (62)</option><option value="9">Final Frenzy 9 (64)</option><option value="10">Final Frenzy 10 (66)</option><option value="11">Final Frenzy 11 (68)</option><option value="12">Final Frenzy 12 (70)</option><option value="13">Final Frenzy 13 (72)</option><option value="14">Final Frenzy 14 (74)</option></select>
			<select id="SHIELDMASTERY1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Shield Mastery 1 (20)</option><option value="2">Shield Mastery 2 (28)</option></select>
			<select id="SHIELDMASTERY2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Shield Mastery 1 (20)</option><option value="2">Shield Mastery 2 (28)</option><option value="3">Shield Mastery 3 (40)</option><option value="4">Shield Mastery 4 (52)</option></select>
			<select id="WEIGHTLIMIT1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Weight Limit 1 (10)</option></select>
			<select id="WEIGHTLIMIT2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Weight Limit 1 (10)</option><option value="2">Weight Limit 2 (28)</option></select>
			<select id="WEIGHTLIMIT3" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Weight Limit 1 (10)</option><option value="2">Weight Limit 2 (28)</option><option value="3">Weight Limit 3 (46)</option></select>
			</td>
			<td><input type="checkbox" id="AGILEMOVEMENT1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="AGILEMOVEMENT2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="CRITICALCHANCE1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="CRITICALCHANCE2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="FASTCAST1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="FASTCAST2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="FASTHPRECOVERY1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="FASTHPRECOVERY2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="FOCUSMIND1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="FOCUSMIND2CHECK" onclick="passives();calc()" style="display: none;">
			</td>
			<td><select id="AGILEMOVEMENT1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Agile Movement 1 (20)</option></select>
			<select id="AGILEMOVEMENT2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Agile Movement 1 (20)</option><option value="2">Agile Movement 2 (40)</option></select>
			<select id="CRITICALCHANCE1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Critical Chance 1 (28)</option></select>
			<select id="CRITICALCHANCE2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Critical Chance 1 (28)</option><option value="2">Critical Chance 2 (40)</option><option value="3">Critical Chance 3 (49)</option></select>
			<select id="FASTCAST1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Fast Spell Casting 1 (25)</option></select>
			<select id="FASTCAST2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Fast Spell Casting 1 (25)</option><option value="2">Fast Spell Casting 2 (40)</option><option value="3">Fast Spell Casting 3 (56)</option></select>
			<select id="FASTHPRECOVERY1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Fast HP Recovery 1 (24)</option><option value="2">Fast HP Recovery 2 (32)</option></select>
			<select id="FASTHPRECOVERY2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Fast HP Recovery 1 (24)</option><option value="2">Fast HP Recovery 2 (32)</option><option value="3">Fast HP Recovery 3 (40)</option><option value="4">Fast HP Recovery 4 (43)</option><option value="5">Fast HP Recovery 5 (52)</option><option value="6">Fast HP Recovery 6 (58)</option><option value="7">Fast HP Recovery 7 (68)</option><option value="8">Fast HP Recovery 8 (74)</option></select>
			<select id="FOCUSMIND1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Focus Mind 1 (36)</option></select>
			<select id="FOCUSMIND2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Focus Mind 1 (36)</option><option value="2">Focus Mind 2 (43)</option><option value="3">Focus Mind 3 (49)</option><option value="4">Focus Mind 4 (55)</option><option value="5">Focus Mind 5 (64)</option><option value="6">Focus Mind 6 (72)</option></select>
			</td>
			<td><input type="checkbox" id="SHADOWSENSECHECK" onclick="passives();calc()" style="display: block;">
			<input type="checkbox" id="BOOSTASPD1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="BOOSTASPD2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="FASTHPRECOVERY3CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="FASTHPRECOVERY4CHECK" onclick="passives();calc()" style="display: none;"></td>
			<td><select id="SHADOWSENSE" onchange="calc()" style="display: block;" disabled="disabled"><option value="1" selected="selected">Shadow Sense</option></select>
			<select id="BOOSTASPD1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Boost Attack Speed 1 (36)</option></select>
			<select id="BOOSTASPD2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Boost Attack Speed 1 (36)</option><option value="2">Boost Attack Speed 2 (46)</option><option value="3">Boost Attack Speed 3 (58)</option></select>
			<select id="FASTHPRECOVERY3" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Fast HP Recovery 1 (35)</option></select>
			<select id="FASTHPRECOVERY4" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Fast HP Recovery 1 (35)</option><option value="2">Fast HP Recovery 2 (44)</option><option value="3">Fast HP Recovery 3 (52)</option><option value="4">Fast HP Recovery 4 (58)</option><option value="5">Fast HP Recovery 5 (64)</option><option value="6">Fast HP Recovery 6 (74)</option></select>
			</td></tr>
<tr>		<td></td>
			<td><input type="checkbox" id="ESPRIT1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="ESPRIT2CHECK" onclick="passives();calc()" style="display: block;">
			<input type="checkbox" id="FASTMANARECOVERY1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="FASTMANARECOVERY2CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="AEGISCHECK" onclick="passives();calc()" style="display: none;">
			</td>
			<td><select id="ESPRIT1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Esprit 1 (36)</option></select>
			<select id="ESPRIT2" onchange="calc()" style="display: block;" disabled="disabled"><option value="1" selected="selected">Esprit 1 (36)</option><option value="2">Esprit 2 (43)</option><option value="3">Esprit 3 (46)</option><option value="4">Esprit 4 (49)</option><option value="5">Esprit 5 (52)</option><option value="6">Esprit 6 (62)</option><option value="7">Esprit 7 (68)</option><option value="8">Esprit 8 (74)</option></select>
			<select id="FASTMANARECOVERY1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Fast Mana Recovery 1 (25)</option><option value="2">Fast Mana Recovery 2 (35)</option></select>
			<select id="FASTMANARECOVERY2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Fast Mana Recovery 1 (25)</option><option value="2">Fast Mana Recovery 2 (35)</option><option value="3">Fast Mana Recovery 3 (44)</option><option value="4">Fast Mana Recovery 4 (52)</option><option value="5">Fast Mana Recovery 5 (60)</option><option value="6">Fast Mana Recovery 6 (68)</option><option value="7">Fast Mana Recovery 7 (74)</option></select>
			<select id="AEGIS" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Aegis (60)</option></select>
			</td>
			<td><input type="checkbox" id="VITALFORCE1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="VITALFORCE2CHECK" onclick="passives();calc()" style="display: none;">
			</td>
			<td><select id="VITALFORCE1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Vital Force 1 (24)</option><option value="2">Vital Force 2 (32)</option></select>
			<select id="VITALFORCE2" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Vital Force 1 (24)</option><option value="2">Vital Force 2 (32)</option><option value="3">Vital Force 3 (40)</option><option value="4">Vital Force 4 (46)</option><option value="5">Vital Force 5 (52)</option><option value="6">Vital Force 6 (58)</option><option value="7">Vital Force 7 (64)</option><option value="8">Vital Force 8 (72)</option></select>
			</td>
			<td><input type="checkbox" id="CRITICALPOWER1CHECK" onclick="passives();calc()" style="display: none;">
			<input type="checkbox" id="CRITICALPOWER2CHECK" onclick="passives();calc()" style="display: block;">
			</td>
			<td><select id="CRITICALPOWER1" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Critical Power 1 (24)</option><option value="2">Critical Power 2 (32)</option></select>
			<select id="CRITICALPOWER2" onchange="calc()" style="display: block;" disabled="disabled"><option value="1" selected="selected">Critical Power 1 (24)</option><option value="2">Critical Power 2 (32)</option><option value="3">Critical Power 3 (40)</option><option value="4">Critical Power 4 (52)</option><option value="5">Critical Power 5 (64)</option><option value="6">Critical Power 6 (72)</option></select>
			</td>
			<td><input type="checkbox" id="QUIVEROFHOLDINGCHECK" onclick="passives();calc()" style="display: none;">
			</td>
			<td><select id="QUIVEROFHOLDING" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Quiver of Holding 1 (58)</option><option value="2">Quiver of Holding 2 (66)</option><option value="3">Quiver of Holding 3 (74)</option></select>
			</td></tr>
<tr>		<td>Clan Skills</td>
			<td><input type="checkbox" id="CLANHPCHECK" onclick="passives();calc()"></td>
			<td><select id="CLANHP" onchange="calc()" disabled="disabled"><option value="1" selected="selected">Clan Vitality 1 (HP)</option><option value="2">Clan Vitality 2 (HP)</option><option value="3">Clan Vitality 3 (HP)</option></select></td>
			<td><input type="checkbox" id="CLANCPCHECK" onclick="passives();calc()"></td>
			<td><select id="CLANCP" onchange="calc()" disabled="disabled"><option value="1" selected="selected">Clan Spirituality 1 (CP)</option><option value="2">Clan Spirituality 2 (CP)</option><option value="3">Clan Spirituality 3 (CP)</option></select>
			</td></tr>
<tr>		<td></td>
			<td><input type="checkbox" id="CLANPATKCHECK" onclick="passives();calc()"></td>
			<td><select id="CLANPATK" onchange="calc()" disabled="disabled"><option value="1" selected="selected">Clan Might 1 (PATK)</option><option value="2">Clan Might 2 (PATK)</option><option value="3">Clan Might 3 (PATK)</option></select></td>
			<td><input type="checkbox" id="CLANPDEFCHECK" onclick="passives();calc()"></td>
			<td><select id="CLANPDEF" onchange="calc()" disabled="disabled"><option value="1" selected="selected">Clan Aegis 1 (PDEF)</option><option value="2">Clan Aegis 2 (PDEF)</option><option value="3">Clan Aegis 3 (PDEF)</option></select></td>
			<td><input type="checkbox" id="CLANMDEFCHECK" onclick="passives();calc()"></td>
			<td><select id="CLANMDEF" onchange="calc()" disabled="disabled"><option value="1" selected="selected">Clan Mag. Prot. 1 (MDEF)</option><option value="2">Clan Mag. Prot. 2 (MDEF)</option><option value="3">Clan Mag. Prot. 3 (MDEF)</option></select>
			</td></tr>
<tr>		<td></td>
			<td><input type="checkbox" id="CLANGUIDANCECHECK" onclick="passives();calc()"></td>
			<td><select id="CLANGUIDANCE" onchange="calc()" disabled="disabled"><option value="1" selected="selected">Clan Guidance 1 (Accuracy)</option></select></td>
			<td><input type="checkbox" id="CLANSPEEDCHECK" onclick="passives();calc()"></td>
			<td><select id="CLANSPEED" onchange="calc()" disabled="disabled"><option value="1" selected="selected">Clan March 1 (Speed)</option><option value="2">Clan March 2 (Speed)</option><option value="3">Clan March 3 (Speed)</option></select></td>
			<td><input type="checkbox" id="SEALOFSTRIFECHECK" onclick="passives();calc()"></td>
			<td><select id="SEALOFSTRIFE" onchange="calc()" disabled="disabled"><option value="1" selected="selected">Seal of Strife (Winner)</option><option value="2">Seal of Strife (Loser)</option></select></td>
</tr></tbody></table>
</fieldset>

<fieldset id="BUFFS" style="display: block;">
<legend><span class="style2">Buffs</span></legend>
<table class="statcalc">
<tbody><tr>			<td colspan="2" align="right">Buffs Quickselect:</td>
				<td colspan="5"><select id="SETBUFFS" onchange="buffs(true);calc()">
					<option selected="selected">==============
					</option><option value="0">clear all buffs
					</option><option value="1">Lvl 78 Hierophant
					</option><option value="2">Lvl 72 Prophet
					</option><option value="3">Lvl 66 Prophet
					</option><option value="4">Lvl 56 Prophet
					</option><option value="5">Lvl 52 Prophet
					</option><option value="6">Lvl 48 Prophet
					</option><option value="7">Lvl 44 Prophet
					</option><option value="8">Lvl 40 Prophet
					</option><option value="0">clear all buffs
					</option><option value="9">Lvl 78 Shillien's Saint
					</option><option value="10">Lvl 56 Shillien Elder
					</option><option value="11">Lvl 52 Shillien Elder
					</option><option value="12">Lvl 48 Shillien Elder
					</option><option value="13">Lvl 44 Shillien Elder
					</option><option value="14">Lvl 40 Shillien Elder
					</option><option value="0">clear all buffs
					</option><option value="15">Lvl 78 Doomcryer
					</option><option value="16">Lvl 68 Warcryer
					</option><option value="17">Lvl 66 Warcryer
					</option><option value="18">Lvl 64 Warcryer
					</option><option value="19">Lvl 58 Warcryer
					</option><option value="20">Lvl 56 Warcryer
					</option><option value="21">Lvl 52 Warcryer
					</option><option value="22">Lvl 48 Warcryer
					</option><option value="23">Lvl 44 Warcryer
					</option><option value="24">Lvl 40 Warcryer
					</option><option value="0">clear all buffs
					</option><option value="25">Lvl 77 Dominator
					</option><option value="26">Lvl 64 Overlord
					</option><option value="27">Lvl 58 Overlord
					</option><option value="28">Lvl 56 Overlord
					</option><option value="29">Lvl 52 Overlord
					</option><option value="30">Lvl 48 Overlord
					</option><option value="31">Lvl 44 Overlord
					</option><option value="32">Lvl 40 Overlord
					</option><option value="0">clear all buffs
				</option></select></td></tr>
<tr>	<td>HP</td>
		<td><input type="checkbox" id="BTB1CHECK" onclick="buffs();calc()" style="display: block;">
		<input type="checkbox" id="BTB2CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="BTB3CHECK" onclick="buffs();calc()" style="display: none;"></td>
		<td><select id="BTB1" onchange="calc()" style="display: block;" disabled="disabled">
			<option value="1" selected="selected">Bless the Body 1
			</option><option value="2">Bless the Body 2
			</option><option value="3">Bless the Body 3
			</option><option value="4">Bless the Body 4
			</option><option value="5">Bless the Body 5
			</option><option value="6">Bless the Body 6
			</option><option value="1">Body of Avatar 1
			</option><option value="2">Body of Avatar 2
			</option><option value="3">Body of Avatar 3
			</option><option value="4">Body of Avatar 4
			</option><option value="5">Body of Avatar 5
			</option><option value="6">Body of Avatar 6
		</option></select>
		<select id="BTB2" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Bless the Body 1
			</option><option value="2">Bless the Body 2
			</option><option value="3">Bless the Body 3
			</option><option value="4">Bless the Body 4
			</option><option value="5">Bless the Body 5
			</option><option value="6">Bless the Body 6
			</option><option value="1">Battle Roar 1
			</option><option value="1">Body of Avatar 1
			</option><option value="2">Body of Avatar 2
			</option><option value="3">Body of Avatar 3
			</option><option value="4">Body of Avatar 4
			</option><option value="5">Body of Avatar 5
			</option><option value="6">Body of Avatar 6
		</option></select>
		<select id="BTB3" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Bless the Body 1
			</option><option value="2">Bless the Body 2
			</option><option value="3">Bless the Body 3
			</option><option value="4">Bless the Body 4
			</option><option value="5">Bless the Body 5
			</option><option value="6">Bless the Body 6
			</option><option value="1">Battle Roar 1
			</option><option value="2">Battle Roar 2
			</option><option value="3">Battle Roar 3
			</option><option value="4">Battle Roar 4
			</option><option value="5">Battle Roar 5
			</option><option value="6">Battle Roar 6
			</option><option value="1">Body of Avatar 1
			</option><option value="2">Body of Avatar 2
			</option><option value="3">Body of Avatar 3
			</option><option value="4">Body of Avatar 4
			</option><option value="5">Body of Avatar 5
			</option><option value="6">Body of Avatar 6
		</option></select></td>
		<td><input type="checkbox" id="VITCHECK" onclick="buffs();calc()"></td>
		<td><select id="VIT" onchange="calc()" disabled="disabled">
			<option value="SOV" selected="selected">Song of Vitality
		</option></select></td></tr>
<tr>
	<td>MP</td>
		<td><input type="checkbox" id="BTSCHECK" onclick="buffs();calc()"></td>
		<td><select id="BTS" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Bless the Soul 1
			</option><option value="2">Bless the Soul 2
			</option><option value="3">Bless the Soul 3
			</option><option value="4">Bless the Soul 4
			</option><option value="5">Bless the Soul 5
			</option><option value="6">Bless the Soul 6
		</option></select></td>
		<td><input type="checkbox" id="SAGCHECK" onclick="buffs();calc()" style="display: none;"></td>
		<td><select id="SAG" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Soul of Sagitarrius 1
			</option><option value="2">Soul of Sagitarrius 2
			</option><option value="3">Soul of Sagitarrius 3
			</option><option value="4">Soul of Sagitarrius 4
		</option></select></td></tr>
<tr>
	<td>P.Atk.</td>
		<td><input type="checkbox" id="MIGHT1CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="MIGHT2CHECK" onclick="buffs();calc()" style="display: block;"></td>
		<td><select id="MIGHT1" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Might 1
			</option><option value="2">Might 2
			</option><option value="3">Might 3
			</option><option value="3">Herb of Strength
			</option><option value="1">Chant of Battle 1
			</option><option value="2">Chant of Battle 2
			</option><option value="3">Chant of Battle 3
			</option><option value="1">Pa'agrian Gift 1
			</option><option value="2">Pa'agrian Gift 2
			</option><option value="3">Pa'agrian Gift 3
		</option></select>
		<select id="MIGHT2" onchange="calc()" style="display: block;" disabled="disabled">
			<option value="1" selected="selected">Might 1
			</option><option value="2">Might 2
			</option><option value="3">Might 3
			</option><option value="3">Herb of Strength
			</option><option value="1">Attack Aura 1
			</option><option value="2">Attack Aura 2
			</option><option value="1">Chant of Battle 1
			</option><option value="2">Chant of Battle 2
			</option><option value="3">Chant of Battle 3
			</option><option value="1">Pa'agrian Gift 1
			</option><option value="2">Pa'agrian Gift 2
			</option><option value="3">Pa'agrian Gift 3
		</option></select></td>
		<td><input type="checkbox" id="DOWACHECK" onclick="buffs();calc()"></td>
		<td><select id="DOWA" onchange="calc()" disabled="disabled">
			<option value="DOW" selected="selected">Dance of Warrior
		</option></select></td>
		<td><input type="checkbox" id="GREATERMIGHTCHECK" onclick="buffs();calc()"></td>
		<td><select id="GREATERMIGHT" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Greater Might 1
			</option><option value="2">Greater Might 2
			</option><option value="3">Greater Might 3
			</option><option value="1">War Chant 1
			</option><option value="2">War Chant 2
			</option><option value="3">War Chant 3
		</option></select></td>
		<td><input type="checkbox" id="FRENZY1CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="FRENZY2CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="WARCRY1CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="WARCRY2CHECK" onclick="buffs();calc()" style="display: none;"></td>
		<td><select id="FRENZY1" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Frenzy 1
		</option></select>
		<select id="FRENZY2" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Frenzy 1
			</option><option value="2">Frenzy 2
			</option><option value="3">Frenzy 3
		</option></select>
		<select id="WARCRY1" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">War Cry 1
		</option></select>
		<select id="WARCRY2" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">War Cry 1
			</option><option value="2">War Cry 2
		</option></select></td>
</tr>
<tr>	<td></td>
		<td><input type="checkbox" id="RAGE1CHECK" onclick="buffs();calc()" style="display: none;">
	<input type="checkbox" id="RAGE2CHECK" onclick="buffs();calc()" style="display: none;"></td>
		<td><select id="RAGE1" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Rage 1
		</option></select>
		<select id="RAGE2" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Rage 1
			</option><option value="2">Rage 2
		</option></select></td></tr>
<tr>
	<td>M.Atk.</td>
		<td><input type="checkbox" id="EMPCHECK" onclick="buffs();calc()"></td>
		<td><select id="EMP" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Empower 1
			</option><option value="2">Empower 2
			</option><option value="3">Greater Empower 3
			</option><option value="3">Herb of Magic
			</option><option value="3">Soul of Pa'agrio
		</option></select></td>
		<td><input type="checkbox" id="DOMYCHECK" onclick="buffs();calc()"></td>
		<td><select id="DOMY" onchange="calc()" disabled="disabled">
			<option value="DOM" selected="selected">Dance of Mystic
		</option></select></td></tr>
<tr>
	<td>P.Def.</td>
		<td><input type="checkbox" id="SHIELD1CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="SHIELD2CHECK" onclick="buffs();calc()" style="display: block;"></td>
		<td><select id="SHIELD1" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Shield 1
			</option><option value="2">Shield 2
			</option><option value="3">Shield 3
			</option><option value="1">Blessings of Pa'agrio 1
			</option><option value="2">Blessings of Pa'agrio 2
			</option><option value="3">Blessings of Pa'agrio 3
			</option><option value="1">Chant of Shielding 1
			</option><option value="2">Chant of Shielding 2
			</option><option value="3">Chant of Shielding 3
			</option><option value="1">Soul Shield 1
			</option><option value="2">Soul Shield 2
			</option><option value="3">Soul Shield 3
		</option></select>
		<select id="SHIELD2" onchange="calc()" style="display: block;" disabled="disabled">
			<option value="1" selected="selected">Shield 1
			</option><option value="2">Shield 2
			</option><option value="3">Shield 3
			</option><option value="1">Blessings of Pa'agrio 1
			</option><option value="2">Blessings of Pa'agrio 2
			</option><option value="3">Blessings of Pa'agrio 3
			</option><option value="1">Chant of Shielding 1
			</option><option value="2">Chant of Shielding 2
			</option><option value="3">Chant of Shielding 3
			</option><option value="1">Defense Aura 1
			</option><option value="2">Defense Aura 2
			</option><option value="1">Soul Shield 1
			</option><option value="2">Soul Shield 2
			</option><option value="3">Soul Shield 3
		</option></select></td>
		<td><input type="checkbox" id="SOECHECK" onclick="buffs();calc()"></td>
		<td><select id="SOEA" onchange="calc()" disabled="disabled">
			<option value="SOE" selected="selected">Song of Earth
		</option></select></td>
		<td><input type="checkbox" id="GREATERSHIELDCHECK" onclick="buffs();calc()"></td>
		<td><select id="GREATERSHIELD" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Greater Shield 1
			</option><option value="2">Greater Shield 2
			</option><option value="3">Greater Shield 3
			</option><option value="1">Earth Chant 1
			</option><option value="2">Earth Chant 2
			</option><option value="3">Earth Chant 3
		</option></select></td>
		<td><input type="checkbox" id="GUTS1CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="GUTS2CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="MAJ1CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="MAJ2CHECK" onclick="buffs();calc()" style="display: none;"></td>
		<td><select id="GUTS1" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Guts 1
		</option></select>
		<select id="GUTS2" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Guts 1
			</option><option value="2">Guts 2
			</option><option value="3">Guts 3
		</option></select>
		<select id="MAJ1" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Majesty 1
		</option></select>
		<select id="MAJ2" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Majesty 1
			</option><option value="2">Majesty 2
			</option><option value="3">Majesty 3
		</option></select></td></tr>
<tr>
	<td>M.Def.</td>
		<td><input type="checkbox" id="MB1CHECK" onclick="buffs();calc()" style="display: block;">
		<input type="checkbox" id="MB2CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="MB3CHECK" onclick="buffs();calc()" style="display: none;"></td>
		<td><select id="MB1" onchange="calc()" style="display: block;" disabled="disabled">
			<option value="2" selected="selected">Magic Barrier 1
			</option><option value="3">Magic Barrier 2
			</option><option value="1">Chant of Fire 1
			</option><option value="2">Chant of Fire 2
			</option><option value="3">Chant of Fire 3
			</option><option value="1">Glory of Pa'agrio 1
			</option><option value="2">Glory of Pa'agrio 2
			</option><option value="3">Glory of Pa'agrio 3
		</option></select>
		<select id="MB2" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="2" selected="selected">Magic Barrier 1
			</option><option value="3">Magic Barrier 2
			</option><option value="1">Chant of Fire 1
			</option><option value="2">Chant of Fire 2
			</option><option value="3">Chant of Fire 3
			</option><option value="1">Glory of Pa'agrio 1
			</option><option value="2">Glory of Pa'agrio 2
			</option><option value="3">Glory of Pa'agrio 3
			</option><option value="1">Spirit Barrier 1
			</option><option value="2">Spirit Barrier 2
			</option><option value="3">Spirit Barrier 3
		</option></select>
		<select id="MB3" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="2" selected="selected">Magic Barrier 1
			</option><option value="3">Magic Barrier 2
			</option><option value="1">Chant of Fire 1
			</option><option value="2">Chant of Fire 2
			</option><option value="3">Chant of Fire 3
			</option><option value="1">Glory of Pa'agrio 1
			</option><option value="2">Glory of Pa'agrio 2
			</option><option value="3">Glory of Pa'agrio 3
			</option><option value="1">Iron Will 1
			</option><option value="2">Iron Will 2
			</option><option value="3">Iron Will 3
		</option></select></td>
		<td><input type="checkbox" id="WARDCHECK" onclick="buffs();calc()"></td>
		<td><select id="WARD" onchange="calc()" disabled="disabled">
			<option value="SOW" selected="selected">Song of Warding
		</option></select></td></tr>
<tr>
	<td>Accuracy</td>
		<td><input type="checkbox" id="GUIDCHECK" onclick="buffs();calc()"></td>
		<td><select id="GUID" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Guidance 1
			</option><option value="2">Guidance 2
			</option><option value="3">Guidance 3
			</option><option value="1">Chant of Eagle 1
			</option><option value="2">Chant of Eagle 2
			</option><option value="3">Chant of Eagle 3
			</option><option value="1">Vision of Pa'agrio 1
			</option><option value="2">Vision of Pa'agrio 2
			</option><option value="3">Vision of Pa'agrio 3
		</option></select></td>
		<td><input type="checkbox" id="DOICHECK" onclick="buffs();calc()"></td>
		<td><select id="DOI" onchange="calc()" disabled="disabled">
			<option value="DOI" selected="selected">Dance of Inspiration
		</option></select></td>
		<td><input type="checkbox" id="HECHECK" onclick="buffs();calc()" style="display: none;"></td>
		<td><select id="HE" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Hawk Eye 1
			</option><option value="2">Hawk Eye 2
			</option><option value="3">Hawk Eye 3
		</option></select></td></tr>
<tr>
	<td>Evasion</td>
		<td><input type="checkbox" id="AGICHECK" onclick="buffs();calc()"></td>
		<td><select id="AGI" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Agility 1
			</option><option value="2">Agility 2
			</option><option value="3">Agility 3
			</option><option value="1">Chant of Evasion 1
			</option><option value="2">Chant of Evasion 2
			</option><option value="3">Chant of Evasion 3
			</option><option value="1">Tact of Pa'agrio 1
			</option><option value="2">Tact of Pa'agrio 2
			</option><option value="3">Tact of Pa'agrio 3
		</option></select></td>
		<td><input type="checkbox" id="SWATCHECK" onclick="buffs();calc()"></td>
		<td><select id="SWAT" onchange="calc()" disabled="disabled">
			<option value="SOW" selected="selected">Song of Water
		</option></select></td>
		<td><input type="checkbox" id="UECHECK" onclick="buffs();calc()" style="display: block;"></td>
		<td><select id="UE" onchange="calc()" style="display: block;" disabled="disabled">
			<option value="1" selected="selected">Ultimate Evasion 1
			</option><option value="2" id="Ultimate_Evasion2">Ultimate Evasion 2
		</option></select></td>
		<td><input type="checkbox" id="EVSHTCHECK" onclick="buffs();calc()" style="display: none;"></td>
		<td><select id="EVSHT" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="ES" selected="selected">Evasion Shot
		</option></select></td></tr>
<tr>
	<td>Critical</td>
		<td><input type="checkbox" id="FCSCHECK" onclick="buffs();calc()"></td>
		<td><select id="FCS" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Focus 1
			</option><option value="2">Focus 2
			</option><option value="3">Focus 3
			</option><option value="1">Chant of Predator 1
			</option><option value="2">Chant of Predator 2
			</option><option value="3">Chant of Predator 3
			</option><option value="3">Herb of Critical Attack
		</option></select></td>
		<td><input type="checkbox" id="SOHCHECK" onclick="buffs();calc()"></td>
		<td><select id="SOH" onchange="calc()" disabled="disabled">
			<option value="SOH" selected="selected">Song of Hunter
		</option></select></td></tr>
<tr>
	<td>Speed</td>
		<td><input type="checkbox" id="WWCHECK" onclick="buffs();calc()"></td>
		<td><select id="WW" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Wind Walk 1
			</option><option value="2">Wind Walk 2
			</option><option value="1">Pa'agrian Haste 1
			</option><option value="2">Pa'agrian Haste 2
			</option><option value="1" id="Sprint1">Sprint 1
			</option><option value="2" id="Sprint2">Sprint 2
			</option><option value="1">Haste Potion
			</option><option value="2">Greater Quick Step Potion
			</option><option value="2">Herb of Speed
		</option></select></td>
		<td><input type="checkbox" id="SWINDCHECK" onclick="buffs();calc()"></td>
		<td><select id="SWIND" onchange="calc()" disabled="disabled">
			<option value="SOW" selected="selected">Song of Wind
		</option></select></td>
		<td><input type="checkbox" id="DSHCHECK" onclick="buffs();calc()"></td>
		<td><select id="DSH" onchange="calc()" disabled="disabled">
			<option value="DOS" selected="selected">Dance of Shadow
		</option></select></td>
		<td><input type="checkbox" id="DASH1CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="DASH2CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="BLINDINGCHECK" onclick="buffs();calc()" style="display: block;"></td>
		<td><select id="DASH1" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Dash 1
		</option></select>
		<select id="DASH2" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Dash 1
			</option><option value="2">Dash 2
		</option></select>
		<select id="BLINDING" onchange="calc()" style="display: block;" disabled="disabled">
			<option value="BB" selected="selected">Blinding Blow
		</option></select></td></tr>
<tr>
	<td>Atk. Spd.</td>
		<td><input type="checkbox" id="HASTECHECK" onclick="buffs();calc()"></td>
		<td><select id="HASTE" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Haste 1
			</option><option value="2">Haste 2
			</option><option value="1">Chant of Fury 1
			</option><option value="2">Chant of Fury 2
			</option><option value="1">Potion of Alacrity
			</option><option value="2">Greater Swift Attack Potion
			</option><option value="2">Herb of Atk. Speed
		</option></select></td>
		<td><input type="checkbox" id="DFURYCHECK" onclick="buffs();calc()"></td>
		<td><select id="DFURY" onchange="calc()" disabled="disabled">
			<option value="DOF" selected="selected">Dance of Fury
		</option></select></td>
		<td><input type="checkbox" id="RAPID1CHECK" onclick="buffs();calc()" style="display: block;">
		<input type="checkbox" id="RAPID2CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="DUELCHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="TFCHECK" onclick="buffs();calc()" style="display: none;"></td>
		<td><select id="RAPID1" onchange="calc()" style="display: block;" disabled="disabled">
			<option value="1" selected="selected">Rapid Shot 1
		</option></select>
		<select id="RAPID2" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Rapid Shot 1
			</option><option value="2">Rapid Shot 2
		</option></select>
		<select id="DUEL" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Duelist Spirit 1
			</option><option value="2">Duelist Spirit 2
		</option></select>
		<select id="TF" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Thrill Fight 1
			</option><option value="2">Thrill Fight 2
		</option></select></td></tr>
<tr>
	<td>Casting Spd.</td>
		<td><input type="checkbox" id="ACUCHECK" onclick="buffs();calc()"></td>
		<td><select id="ACU" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Acumen 1
			</option><option value="2">Acumen 2
			</option><option value="3">Acumen 3
			</option><option value="1">Chant of Flame 1
			</option><option value="2">Chant of Flame 2
			</option><option value="3">Chant of Flame 3
			</option><option value="1">Wisdom of Pa'agrio 1
			</option><option value="2">Wisdom of Pa'agrio 2
			</option><option value="3">Wisdom of Pa'agrio 3
			</option><option value="2">Magic Haste Potion
			</option><option value="3">Greater Magic Haste Potion
			</option><option value="3">Herb of Casting Spd.
		</option></select></td>
		<td><input type="checkbox" id="DCONCHECK" onclick="buffs();calc()"></td>
		<td><select id="DCON" onchange="calc()" disabled="disabled">
			<option value="DOC" selected="selected">Dance of Concentration
		</option></select></td></tr>
<tr>
	<td>Crit. Dmg.</td>
		<td><input type="checkbox" id="DEATHWHISPERCHECK" onclick="buffs();calc()"></td>
		<td><select id="DEATHWHISPER" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Death Whisper 1
			</option><option value="2">Death Whisper 2
			</option><option value="3">Death Whisper 3
			</option><option value="1">Chant of Rage 1
			</option><option value="2">Chant of Rage 2
			</option><option value="3">Chant of Rage 3
			</option><option value="3">The Eye of Pa'agrio
		</option></select></td>
		<td><input type="checkbox" id="DANCEOFFIRECHECK" onclick="buffs();calc()"></td>
		<td><select id="DANCEOFFIRE" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Dance of Fire
		</option></select></td></tr>
<tr>
	<td>Shield</td>
		<td><input type="checkbox" id="BLESSSHIELDCHECK" onclick="buffs();calc()"></td>
		<td><select id="BLESSSHIELD" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Bless Shield 1
			</option><option value="2">Bless Shield 2
			</option><option value="3">Bless Shield 3
			</option><option value="4">Bless Shield 4
			</option><option value="5">Bless Shield 5
			</option><option value="6">Bless Shield 6
			</option><option value="1">Under the Protection of Pa'agrio 1
			</option><option value="2">Under the Protection of Pa'agrio 2
			</option><option value="3">Under the Protection of Pa'agrio 3
		</option></select></td>
		<td><input type="checkbox" id="ADVANCEDBLOCKCHECK" onclick="buffs();calc()"></td>
		<td><select id="ADVANCEDBLOCK" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Advanced Block 1
			</option><option value="2">Advanced Block 2
			</option><option value="3">Advanced Block 3
		</option></select></td></tr>
<tr>
	<td>Regen</td>
		<td><input type="checkbox" id="REGENERATIONCHECK" onclick="buffs();calc()"></td>
		<td><select id="REGENERATION" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Regeneration 1
			</option><option value="2">Regeneration 2
			</option><option value="3">Regeneration 3
		</option></select></td>
		<td><input type="checkbox" id="SONGOFLIFECHECK" onclick="buffs();calc()"></td>
		<td><select id="SONGOFLIFE" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Song of Life
		</option></select></td>
		<td><input type="checkbox" id="SONGOFMEDCHECK" onclick="buffs();calc()"></td>
		<td><select id="SONGOFMED" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Song of Meditation
		</option></select></td>
		<td><input type="checkbox" id="SERAPHIMCHECK" onclick="buffs();calc()"></td>
		<td><select id="SERAPHIM" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Blessing of Seraphim 1
			</option><option value="2">Blessing of Seraphim 2
			</option><option value="3">Blessing of Seraphim 3
		</option></select></td></tr>
<tr>
		<td></td>
		<td><input type="checkbox" id="MANAREGENCHECK" onclick="buffs();calc()" style="display: none;"></td>
		<td><select id="MANAREGEN" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Mana Regeneration 1
			</option><option value="2">Mana Regeneration 2
			</option><option value="3">Mana Regeneration 3
			</option><option value="4">Mana Regeneration 4
		</option></select></td></tr>
<tr>
	<td>Misc.</td>
		<td><input type="checkbox" id="ZERKCHECK" onclick="buffs();calc()"></td>
		<td><select id="ZERK" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Berserker Spirit 1
			</option><option value="2">Berserker Spirit 2
			</option><option value="1">Rage of Pa'agrio 1
			</option><option value="2">Rage of Pa'agrio 2
		</option></select></td>
		<td><input type="checkbox" id="QUEENCHECK" onclick="buffs();calc()"></td>
		<td><select id="QUEEN" onchange="calc()" disabled="disabled">
			<option value="4" selected="selected">Blessing of Queen 1
			</option><option value="5">Blessing of Queen 2
			</option><option value="6">Blessing of Queen 3
			</option><option value="1">Gift of Queen 1
			</option><option value="2">Gift of Queen 2
			</option><option value="3">Gift of Queen 3
		</option></select></td>
		<td><input type="checkbox" id="PROPHCHECK" onclick="buffs();calc()"></td>
		<td><select id="PROPH" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Chant of Victory
			</option><option value="2">Prophecy of Fire
			</option><option value="3">Prophecy of Water
			</option><option value="4">Prophecy of Wind
		</option></select></td>
		<td><input type="checkbox" id="DECREASEWEIGHTCHECK" onclick="buffs();calc()"></td>
		<td><select id="DECREASEWEIGHT" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Decrease Weight 1
			</option><option value="2">Decrease Weight 2
			</option><option value="3">Decrease Weight 3
		</option></select></td></tr>
<tr>		<td></td>
		<td><input type="checkbox" id="UD1CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="UD2CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="TOTEM1CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="TOTEM2CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="SNIPECHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="FACHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="STEALTHCHECK" onclick="buffs();calc()" style="display: none;"></td>
		<td><select id="UD1" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Ultimate Defense 1
		</option></select>
		<select id="UD2" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Ultimate Defense 1
			</option><option value="2">Ultimate Defense 2
			</option><option value="3">Vengeance
			</option><option value="4">Ultimate Defense 2 +1
			</option><option value="5">Ultimate Defense 2 +2
			</option><option value="6">Ultimate Defense 2 +3
			</option><option value="7">Ultimate Defense 2 +4
			</option><option value="8">Ultimate Defense 2 +5
			</option><option value="9">Ultimate Defense 2 +6
			</option><option value="10">Ultimate Defense 2 +7
			</option><option value="11">Ultimate Defense 2 +8
			</option><option value="12">Ultimate Defense 2 +9
			</option><option value="13">Ultimate Defense 2 +10
			</option><option value="14">Ultimate Defense 2 +11
			</option><option value="15">Ultimate Defense 2 +12
			</option><option value="16">Ultimate Defense 2 +13
			</option><option value="17">Ultimate Defense 2 +14
			</option><option value="18">Ultimate Defense 2 +15
			</option><option value="19">Ultimate Defense 2 +16
			</option><option value="20">Ultimate Defense 2 +17
			</option><option value="21">Ultimate Defense 2 +18
			</option><option value="22">Ultimate Defense 2 +19
			</option><option value="23">Ultimate Defense 2 +20
			</option><option value="24">Ultimate Defense 2 +21
			</option><option value="25">Ultimate Defense 2 +22
			</option><option value="26">Ultimate Defense 2 +23
			</option><option value="27">Ultimate Defense 2 +24
			</option><option value="28">Ultimate Defense 2 +25
			</option><option value="29">Ultimate Defense 2 +26
			</option><option value="30">Ultimate Defense 2 +27
			</option><option value="31">Ultimate Defense 2 +28
			</option><option value="32">Ultimate Defense 2 +29
			</option><option value="33">Ultimate Defense 2 +30
		</option></select>
		<select id="TOTEM1" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="BEAR" selected="selected">Bear Spirit Totem
			</option><option value="WOLF">Wolf Spirit Totem
		</option></select>
		<select id="TOTEM2" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="BEAR" selected="selected">Bear Spirit Totem
			</option><option value="BISON">Bison Spirit Totem
			</option><option value="HAWK">Hawk Spirit Totem
			</option><option value="OGRE">Ogre Spirit Totem
			</option><option value="PUMA">Puma Spirit Totem
			</option><option value="RABBIT">Rabbit Spirit Totem
			</option><option value="WOLF">Wolf Spirit Totem
		</option></select>
		<select id="SNIPE" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Snipe 1
			</option><option value="2">Snipe 2
			</option><option value="3">Snipe 3
			</option><option value="5">Snipe 5
			</option><option value="6">Snipe 6
			</option><option value="7">Snipe 7
			</option><option value="8">Snipe 8
		</option></select>
		<select id="FA" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Focus Attack 1
			</option><option value="2">Focus Attack 2
			</option><option value="3">Focus Attack 3
			</option><option value="4">Focus Attack 4</option></select>
		<select id="STEALTH" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Stealth 1
			</option><option value="2">Stealth 2
			</option><option value="3">Stealth 3</option></select></td>
		<td><input type="checkbox" id="ZEALOTCHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="RAPIDFIRECHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="DEADEYECHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="ANGELICICONCHECK" onclick="buffs();calc()" style="display: none;"></td>
		<td><select id="ZEALOT" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Zealot 1
			</option><option value="2">Zealot 2
			</option><option value="3">Zealot 3
		</option></select>
		<select id="RAPIDFIRE" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Rapid Fire 1
			</option><option value="2">Rapid Fire 2
			</option><option value="3">Rapid Fire 3
			</option><option value="4">Rapid Fire 4
			</option><option value="5">Rapid Fire 5
			</option><option value="6">Rapid Fire 6
			</option><option value="7">Rapid Fire 7
			</option><option value="8">Rapid Fire 8
		</option></select>
		<select id="DEADEYE" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Dead Eye 1
			</option><option value="2">Dead Eye 2
			</option><option value="3">Dead Eye 3
			</option><option value="4">Dead Eye 4
			</option><option value="5">Dead Eye 5
			</option><option value="6">Dead Eye 6
			</option><option value="7">Dead Eye 7
		</option></select>
		<select id="ANGELICICON" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Angelic Icon 1
			</option><option value="2">Angelic Icon 2
			</option><option value="3">Angelic Icon 3
		</option></select></td>
		<td><input type="checkbox" id="BLESSINGOFPROPHECYCHECK" onclick="buffs();calc()"></td>
		<td><select id="BLESSINGOFPROPHECY" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Blessing of Prophecy
		</option></select></td>
		<td><input type="checkbox" id="HEROICCHECK" onclick="buffs();calc()"></td>
		<td><select id="HEROIC" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Heroic Berserker
			</option><option value="2">Heroic Miracle
			</option><option value="3">Heroic Valor
		</option></select></td>
  </tr></tbody></table>
</fieldset>
<fieldset id="TOGGLES" style="display: block;">
<legend><span class="style2">Toggles</span></legend>
	<table class="statcalc">
<tbody><tr>
		<td><input type="checkbox" id="SOUL1CHECK" onclick="toggles();calc()" style="display: none;">
		<input type="checkbox" id="SOUL2CHECK" onclick="toggles();calc()" style="display: none;">
		<input type="checkbox" id="SOUL3CHECK" onclick="toggles();calc()" style="display: none;">
		<input type="checkbox" id="ARPCHECK" onclick="toggles();calc()" style="display: none;">
		<input type="checkbox" id="AEGISSTANCECHECK" onclick="toggles();calc()" style="display: none;">
		<input type="checkbox" id="GSCHECK" onclick="toggles();calc()" style="display: none;">
		<input type="checkbox" id="SGCHECK" onclick="toggles();calc()" style="display: none;">
		<input type="checkbox" id="ACCTCHECK" onclick="toggles();calc()" style="display: block;">
		<input type="checkbox" id="FOCDCHECK" onclick="toggles();calc()" style="display: block;">
		<input type="checkbox" id="SMCHECK" onclick="toggles();calc()" style="display: block;">
		<input type="checkbox" id="FFURYCHECK" onclick="toggles();calc()" style="display: none;">
		<input type="checkbox" id="ARAGICHECK" onclick="toggles();calc()" style="display: none;">
		<input type="checkbox" id="ARWISCHECK" onclick="toggles();calc()" style="display: none;">
		<input type="checkbox" id="PARRYCHECK" onclick="toggles();calc()" style="display: none;">
		<input type="checkbox" id="RIPOSTECHECK" onclick="toggles();calc()" style="display: none;">
		<input type="checkbox" id="POLEACCCHECK" onclick="toggles();calc()" style="display: none;">
		<input type="checkbox" id="SHIELDFORTRESSCHECK" onclick="toggles();calc()" style="display: none;">
		<input type="checkbox" id="FOCUSCHANCECHECK" onclick="toggles();calc()" style="display: none;">
		<input type="checkbox" id="FOCUSPOWERCHECK" onclick="toggles();calc()" style="display: block;">
		<input type="checkbox" id="VICIOUSSTANCECHECK" onclick="toggles();calc()" style="display: block;"></td>
		<td><select id="SOUL1" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Soul Cry 1
			</option><option value="2">Soul Cry 2
		</option></select>
		<select id="SOUL2" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Soul Cry 1
			</option><option value="2">Soul Cry 2
			</option><option value="3">Soul Cry 3
			</option><option value="4">Soul Cry 4
		</option></select>
		<select id="SOUL3" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Soul Cry 1
			</option><option value="2">Soul Cry 2
			</option><option value="3">Soul Cry 3
			</option><option value="4">Soul Cry 4
			</option><option value="5">Soul Cry 5
			</option><option value="6">Soul Cry 6
			</option><option value="7">Soul Cry 7
			</option><option value="8">Soul Cry 8
			</option><option value="9">Soul Cry 9
			</option><option value="10">Soul Cry 10
		</option></select>
		<select id="ARP" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="AP" selected="selected">Arcane Power
		</option></select>
		<select id="AEGISSTANCE" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Aegis Stance
		</option></select>
		<select id="GS" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Guard Stance 1
			</option><option value="2">Guard Stance 2
			</option><option value="3">Guard Stance 3
			</option><option value="4">Guard Stance 4
			</option><option value="5">Guard Stance 4 +1 (Power)
			</option><option value="6">Guard Stance 4 +2 (Power)
			</option><option value="7">Guard Stance 4 +3 (Power)
			</option><option value="8">Guard Stance 4 +4 (Power)
			</option><option value="9">Guard Stance 4 +5 (Power)
			</option><option value="10">Guard Stance 4 +6 (Power)
			</option><option value="11">Guard Stance 4 +7 (Power)
			</option><option value="12">Guard Stance 4 +8 (Power)
			</option><option value="13">Guard Stance 4 +9 (Power)
			</option><option value="14">Guard Stance 4 +10 (Power)
			</option><option value="15">Guard Stance 4 +11 (Power)
			</option><option value="16">Guard Stance 4 +12 (Power)
			</option><option value="17">Guard Stance 4 +13 (Power)
			</option><option value="18">Guard Stance 4 +14 (Power)
			</option><option value="19">Guard Stance 4 +15 (Power)
			</option><option value="20">Guard Stance 4 +16 (Power)
			</option><option value="21">Guard Stance 4 +17 (Power)
			</option><option value="22">Guard Stance 4 +18 (Power)
			</option><option value="23">Guard Stance 4 +19 (Power)
			</option><option value="24">Guard Stance 4 +20 (Power)
			</option><option value="25">Guard Stance 4 +21 (Power)
			</option><option value="26">Guard Stance 4 +22 (Power)
			</option><option value="27">Guard Stance 4 +23 (Power)
			</option><option value="28">Guard Stance 4 +24 (Power)
			</option><option value="29">Guard Stance 4 +25 (Power)
			</option><option value="30">Guard Stance 4 +26 (Power)
			</option><option value="31">Guard Stance 4 +27 (Power)
			</option><option value="32">Guard Stance 4 +28 (Power)
			</option><option value="33">Guard Stance 4 +29 (Power)
			</option><option value="34">Guard Stance 4 +30 (Power)
		</option></select>
		<select id="SG" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Soul Guard 1
			</option><option value="2">Soul Guard 2
			</option><option value="3">Soul Guard 3
			</option><option value="4">Soul Guard 4
			</option><option value="5">Soul Guard 5
			</option><option value="6">Soul Guard 6
			</option><option value="7">Soul Guard 7
			</option><option value="8">Soul Guard 8
			</option><option value="9">Soul Guard 9
			</option><option value="10">Soul Guard 10
			</option><option value="11">Soul Guard 11
			</option><option value="12">Soul Guard 12
			</option><option value="13">Soul Guard 13
		</option></select>
		<select id="ACCT" onchange="calc()" style="display: block;" disabled="disabled">
			<option value="ACC" selected="selected">Accuracy
		</option></select>
		<select id="FOCD" onchange="calc()" style="display: block;" disabled="disabled">
			<option value="FD" selected="selected">Focus Death
		</option></select>
		<select id="SM" onchange="calc()" style="display: block;" disabled="disabled">
			<option value="SM" selected="selected">Silent Move
		</option></select>
		<select id="FFURY" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="FF" selected="selected">Fist Fury
		</option></select>
		<select id="ARAGI" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="AA" selected="selected">Arcane Agility
		</option></select>
		<select id="ARWIS" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="AW" selected="selected">Arcane Wisdom
		</option></select>
		<select id="PARRY" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="PS" selected="selected">Parry Stance
		</option></select>
		<select id="RIPOSTE" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="RP" selected="selected">Riposte Stance
		</option></select>
		<select id="POLEACC" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Polearm Accuracy 1
			</option><option value="2">Polearm Accuracy 2
			</option><option value="3">Polearm Accuracy 3
		</option></select>
		<select id="SHIELDFORTRESS" onchange="calc()" style="display: none;" disabled="disabled"><option value="1" selected="selected">Shield Fortress 1</option><option value="2">Shield Fortress 2</option><option value="3">Shield Fortress 3</option><option value="4">Shield Fortress 4</option><option value="5">Shield Fortress 5</option><option value="6">Shield Fortress 6</option><option value="7">Shield Fortress 6 +1 (Power)</option><option value="8">Shield Fortress 6 +2 (Power)</option><option value="9">Shield Fortress 6 +3 (Power)</option><option value="10">Shield Fortress 6 +4 (Power)</option><option value="11">Shield Fortress 6 +5 (Power)</option><option value="12">Shield Fortress 6 +6 (Power)</option><option value="13">Shield Fortress 6 +7 (Power)</option><option value="14">Shield Fortress 6 +8 (Power)</option><option value="15">Shield Fortress 6 +9 (Power)</option><option value="16">Shield Fortress 6 +10 (Power)</option><option value="17">Shield Fortress 6 +11 (Power)</option><option value="18">Shield Fortress 6 +12 (Power)</option><option value="19">Shield Fortress 6 +13 (Power)</option><option value="20">Shield Fortress 6 +14 (Power)</option><option value="21">Shield Fortress 6 +15 (Power)</option><option value="22">Shield Fortress 6 +16 (Power)</option><option value="23">Shield Fortress 6 +17 (Power)</option><option value="24">Shield Fortress 6 +18 (Power)</option><option value="25">Shield Fortress 6 +19 (Power)</option><option value="26">Shield Fortress 6 +20 (Power)</option><option value="27">Shield Fortress 6 +21 (Power)</option><option value="28">Shield Fortress 6 +22 (Power)</option><option value="29">Shield Fortress 6 +23 (Power)</option><option value="30">Shield Fortress 6 +24 (Power)</option><option value="31">Shield Fortress 6 +25 (Power)</option><option value="32">Shield Fortress 6 +26 (Power)</option><option value="33">Shield Fortress 6 +27 (Power)</option><option value="34">Shield Fortress 6 +28 (Power)</option><option value="35">Shield Fortress 6 +29 (Power)</option><option value="36">Shield Fortress 6 +30 (Power)</option></select>
		<select id="FOCUSCHANCE" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1" selected="selected">Focus Chance
		</option></select>
		<select id="FOCUSPOWER" onchange="calc()" style="display: block;" disabled="disabled">
			<option value="1" selected="selected">Focus Power
		</option></select>
		<select id="VICIOUSSTANCE" onchange="calc()" style="display: block;" disabled="disabled">
			<option value="1" selected="selected">Vicious Stance 1
			</option><option value="2">Vicious Stance 2
			</option><option value="3">Vicious Stance 3
			</option><option value="4">Vicious Stance 4
			</option><option value="5">Vicious Stance 5
			</option><option value="6">Vicious Stance 6
			</option><option value="7">Vicious Stance 7
			</option><option value="8">Vicious Stance 8
			</option><option value="9">Vicious Stance 9
			</option><option value="10">Vicious Stance 10
			</option><option value="11">Vicious Stance 11
			</option><option value="12">Vicious Stance 12
			</option><option value="13">Vicious Stance 13
			</option><option value="14">Vicious Stance 14
			</option><option value="15">Vicious Stance 15
			</option><option value="16">Vicious Stance 16
			</option><option value="17">Vicious Stance 17
			</option><option value="18">Vicious Stance 18
			</option><option value="19">Vicious Stance 19
			</option><option value="20">Vicious Stance 20
		</option></select>
		</td></tr>
	</tbody></table>
</fieldset>
<fieldset id="DEBUFFS" style="display: block;">
<legend><span class="style2">Debuffs</span></legend>
	<table class="statcalc">
<tbody><tr>	<td>P.Atk.</td>
		<td><input type="checkbox" id="DEPATKCHECK" onclick="debuffs();calc()"></td>
		<td><select id="DEPATK" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Curse: Weakness 1
			</option><option value="2">Curse: Weakness 2-5
			</option><option value="3">Curse: Weakness 6+
			</option><option value="3">Howl
			</option><option value="3">Poltergeist Cubic 1+
			</option><option value="2">Power Break 1-2
			</option><option value="3">Power Break 3+
		</option></select></td></tr>
<tr>
	<td>P.Def.</td>
		<td><input type="checkbox" id="DEPDEFCHECK" onclick="debuffs();calc()"></td>
		<td><select id="DEPDEF" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Hex
			</option><option value="1">Poltergeist Cubic
		</option></select></td>
		<td><input type="checkbox" id="BLKSCHECK" onclick="buffs();calc()"></td>
		<td><select id="BLKS" onchange="calc()" disabled="disabled">
			<option value="BLKS" selected="selected">Block Shield
			</option><option value="MBLKS">Mass Shield Block
		</option></select></td></tr>
<tr>	<td>M.Def.</td>
		<td><input type="checkbox" id="GLOOMCHECK" onclick="debuffs();calc()"></td>
		<td><select id="GLOOM" onchange="calc()" disabled="disabled">
			<option value="CG1" selected="selected">Curse Gloom
		</option></select></td></tr>
<tr>	<td>Accuracy
		</td><td><input type="checkbox" id="DEACCCHECK" onclick="debuffs();calc()"></td>
		<td><select id="DEACC" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Curse Chaos 1
			</option><option value="2">Curse Chaos 2+
			</option><option value="1">Seal of Chaos 1-2
			</option><option value="2">Seal of Chaos 3+
		</option></select></td>
		<td><input type="checkbox" id="SANDBOMBCHECK" onclick="debuffs();calc()"></td>
		<td><select id="SANDBOMB" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Sand Bomb 1-5
			</option><option value="2">Sand Bomb 6-9
			</option><option value="3">Sand Bomb 10
		</option></select></td></tr>
<tr>	<td>Critical
		</td><td><input type="checkbox" id="TRIBUNALCHECK" onclick="debuffs();calc()"></td>
		<td><select id="TRIBUNAL" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Tribunal 1-6
			</option><option value="2">Tribunal 7-9
			</option><option value="3">Tribunal 10
		</option></select></td></tr>
<tr>	<td>Speed</td>
		<td><input type="checkbox" id="DESPEEDCHECK" onclick="debuffs();calc()"></td>
		<td><select id="DESPEED" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Slow 1
			</option><option value="2">Slow 2+
			</option><option value="2">Blizzard
			</option><option value="1">Cripple 1-5
			</option><option value="2">Cripple 6+
			</option><option value="1">Entangle 1
			</option><option value="2">Entangle 2+
			</option><option value="1">Freezing Strike
			</option><option value="1">Frost Bolt
			</option><option value="2">Hamstring
			</option><option value="2">Hamstring Shot
			</option><option value="1">Ice Bolt
			</option><option value="2">Mass Slow
			</option><option value="1">Seal of Slow 1
			</option><option value="2">Seal of Slow 2
		</option></select></td>
		<td><input type="checkbox" id="BWWCHECK" onclick="buffs();calc()"></td>
		<td><select id="BWW" onchange="calc()" disabled="disabled">
			<option value="BWW" selected="selected">Block Wind Walk
			</option><option value="MBWW">Mass Block Wind Walk
		</option></select></td></tr>
<tr>	<td>Atk. Spd.
		</td><td><input type="checkbox" id="DEASPDCHECK" onclick="debuffs();calc()"></td>
		<td><select id="DEASPD" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Wind Shackle 1
			</option><option value="2">Wind Shackle 2-5
			</option><option value="3">Wind Shackle 6+
			</option><option value="3">Poltergeist Cubic
			</option><option value="3">Seal of Winter
			</option><option value="3">Spoil (Atk. Spd.)
			</option><option value="3">Spoil Festival (Atk. Spd.)
		</option></select></td></tr>
<tr>	<td>Casting Spd.
		</td><td><input type="checkbox" id="DECASTCHECK" onclick="debuffs();calc()"></td>
		<td><select id="DECAST" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Arcane Disruption 1-10
		</option></select></td></tr>
<tr>	<td>Crit. Dmg.
		</td><td><input type="checkbox" id="JUDGMENTCHECK" onclick="debuffs();calc()"></td>
		<td><select id="JUDGMENT" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Judgment 1-5
			</option><option value="2">Judgment 6-9
			</option><option value="3">Judgment 10
		</option></select></td></tr>
<tr>	<td>Regen
		</td><td><input type="checkbox" id="SCOURGECHECK" onclick="debuffs();calc()"></td>
		<td><select id="SCOURGE" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Seal of Scourge
		</option></select></td></tr>
<tr>	<td>Misc.</td>
		<td><input type="checkbox" id="ARCANECHAOSCHECK" onclick="debuffs();calc()"></td>
		<td><select id="ARCANECHAOS" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Arcane Chaos
		</option></select></td>
		<td><input type="checkbox" id="ACCHECK" onclick="debuffs();calc()"></td>
		<td><select id="ARCR" onchange="calc()" disabled="disabled">
			<option value="ARC1" selected="selected">Armor Crush
		</option></select></td>
		<td><input type="checkbox" id="COABYSSCHECK" onclick="debuffs();calc()"></td>
		<td><select id="COABYSS" onchange="calc()" disabled="disabled">
			<option value="COA1" selected="selected">Curse of Abyss
		</option></select></td>
		<td><input type="checkbox" id="CODOOMCHECK" onclick="debuffs();calc()"></td>
		<td><select id="CODOOM" onchange="calc()" disabled="disabled">
			<option value="COD1" selected="selected">Curse of Doom
		</option></select></td></tr>
<tr>	<td></td>
		<td><input type="checkbox" id="COSHADECHECK" onclick="debuffs();calc()"></td>
		<td><select id="COSHADE" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Curse of Shade 1
			</option><option value="2">Curse of Shade 2
			</option><option value="3">Curse of Shade 3
			</option><option value="1">Mass Curse of Shade 1
			</option><option value="2">Mass Curse of Shade 2
			</option><option value="3">Mass Curse of Shade 3
		</option></select></td>
		<td><input type="checkbox" id="DEMONICBDCHECK" onclick="debuffs();calc()"></td>
		<td><select id="DEMONICBD" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Demonic Blade Dance 1-3
			</option><option value="2">Demonic Blade Dance 4-5
			</option><option value="3">Demonic Blade Dance 6-7
			</option><option value="4">Demonic Blade Dance 8-9
			</option><option value="5">Demonic Blade Dance 10
		</option></select></td>
		<td><input type="checkbox" id="DVCHECK" onclick="debuffs();calc()"></td>
		<td><select id="DV" onchange="calc()" disabled="disabled">
			<option value="DV" selected="selected">Dark Vortex
		</option></select></td>
		<td><input type="checkbox" id="FVCHECK" onclick="debuffs();calc()"></td>
		<td><select id="FV" onchange="calc()" disabled="disabled">
			<option value="FV" selected="selected">Fire Vortex
		</option></select></td></tr>
<tr>	<td></td>
		<td><input type="checkbox" id="HEROICDREADCHECK" onclick="debuffs();calc()"></td>
		<td><select id="HEROICDREAD" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Heroic Dread
		</option></select></td>
		<td><input type="checkbox" id="HEROICDECHECK" onclick="debuffs();calc()"></td>
		<td><select id="HEROICDE" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Heroic Grandeur
		</option></select></td>
		<td><input type="checkbox" id="CHOLCHECK" onclick="debuffs();calc()"></td>
		<td><select id="CHOL" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Hot Springs Cholera 1
			</option><option value="2">Hot Springs Cholera 2
			</option><option value="3">Hot Springs Cholera 3
			</option><option value="4">Hot Springs Cholera 4
			</option><option value="5">Hot Springs Cholera 5
			</option><option value="6">Hot Springs Cholera 6
			</option><option value="7">Hot Springs Cholera 7
			</option><option value="8">Hot Springs Cholera 8
			</option><option value="9">Hot Springs Cholera 9
			</option><option value="10">Hot Springs Cholera 10
		</option></select></td>
		<td><input type="checkbox" id="MALCHECK" onclick="debuffs();calc()"></td>
		<td><select id="MAL" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Hot Springs Malaria 1
			</option><option value="2">Hot Springs Malaria 2
			</option><option value="3">Hot Springs Malaria 3
			</option><option value="4">Hot Springs Malaria 4
			</option><option value="5">Hot Springs Malaria 5
			</option><option value="6">Hot Springs Malaria 6
			</option><option value="7">Hot Springs Malaria 7
			</option><option value="8">Hot Springs Malaria 8
			</option><option value="9">Hot Springs Malaria 9
			</option><option value="10">Hot Springs Malaria 10
		</option></select></td></tr>
<tr>	<td></td>
		<td><input type="checkbox" id="IVCHECK" onclick="debuffs();calc()"></td>
		<td><select id="IV" onchange="calc()" disabled="disabled">
			<option value="IV" selected="selected">Ice Vortex
		</option></select></td>
		<td><input type="checkbox" id="LVORCHECK" onclick="debuffs();calc()"></td>
		<td><select id="LVOR" onchange="calc()" disabled="disabled">
			<option value="LV" selected="selected">Light Vortex
		</option></select></td>
		<td><input type="checkbox" id="PSYCHOCHECK" onclick="debuffs();calc()"></td>
		<td><select id="PSYCHO" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Psycho Symphony 1-3
			</option><option value="2">Psycho Symphony 4-5
			</option><option value="3">Psycho Symphony 6-7
			</option><option value="4">Psycho Symphony 8-9
			</option><option value="5">Psycho Symphony 10
		</option></select></td>
		<td><input type="checkbox" id="SBCHECK" onclick="debuffs();calc()"></td>
		<td><select id="SB" onchange="calc()" disabled="disabled">
			<option value="SB" selected="selected">Shock Blast
		</option></select></td></tr>
<tr>	<td></td>
		<td><input type="checkbox" id="DESPAIRCHECK" onclick="debuffs();calc()"></td>
		<td><select id="DESPAIR" onchange="calc()" disabled="disabled">
			<option value="SOD1" selected="selected">Seal of Despair
		</option></select></td>
		<td><input type="checkbox" id="WVCHECK" onclick="debuffs();calc()"></td>
		<td><select id="WV" onchange="calc()" disabled="disabled">
			<option value="WV" selected="selected">Wind Vortex
		</option></select></td>
</tr></tbody></table>


<!----right column---->


</fieldset></td></tr></tbody></table>

<!-- calculator -->
<script>
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
	d.gI("WEAPONSA").selectedIndex=0
}
//placeholders
var AddASPD=0
var AddCAST=0
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
var backcritical=0
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
var BuffEVA=0
var BuffEVA60=0
var BuffEVA30=0
var BuffHP=1
var BuffHPR=1
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
var BuffSHIELDPDEF=1
var BuffSPEED=1
var BuffSPEED60=1
var BuffSPEED30=1
var ClassType=0
var Cloak=0
var CON=0
var CONMOD=0
var DEX=0
var DEXMOD=0
var Glove=0
var GPA="<font color=red><b>Grade Penalty applied</b></font>"
var Earring1=0
var Earring2=0
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
var position=d.gI("POSITION").value
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
var ShieldBlockRate=0.2
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
	d.gI("tattooslot1fighter").selectedIndex=0
	d.gI("tattooslot2fighter").selectedIndex=0
	d.gI("tattooslot3fighter").selectedIndex=0
	d.gI("tattooslot1nuker").selectedIndex=0
	d.gI("tattooslot2nuker").selectedIndex=0
	d.gI("tattooslot3nuker").selectedIndex=0
	d.gI("tattooslot1healer").selectedIndex=0
	d.gI("tattooslot2healer").selectedIndex=0
	d.gI("tattooslot3healer").selectedIndex=0
	}

//Tattoo Restrictions by class
if (JOB=="AW"||JOB=="AR"||JOB=="AS"||JOB=="BD"||JOB=="BH"||JOB=="DA"||JOB=="DE"||JOB=="EK"||JOB=="EFS"||JOB=="GL"||JOB=="HE"||JOB=="HK"||JOB=="MO"||JOB=="OR"||JOB=="PA"||JOB=="PK"||JOB=="PR"||JOB=="PW"||JOB=="RO"||JOB=="SC"||JOB=="SK"||JOB=="SR"||JOB=="SW"||JOB=="TK"||JOB=="TH"||JOB=="TY"||JOB=="WD"||JOB=="WA"||JOB=="WS"||JOB=="EF"||JOB=="DF"||JOB=="OR"||JOB=="DO"||JOB=="HF"||JOB=="OF")
{
d.gI("tattooslot1fighter").style.display = 'block'
d.gI("tattooslot2fighter").style.display = 'block'
d.gI("tattooslot3fighter").style.display = 'block'
d.gI("tattooslot1healer").style.display = 'none'
d.gI("tattooslot2healer").style.display = 'none'
d.gI("tattooslot3healer").style.display = 'none'
d.gI("tattooslot1nuker").style.display = 'none'
d.gI("tattooslot2nuker").style.display = 'none'
d.gI("tattooslot3nuker").style.display = 'none'
var TAT1=d.gI("tattooslot1fighter").value
var TAT2=d.gI("tattooslot2fighter").value
var TAT3=d.gI("tattooslot3fighter").value
}
else if (JOB=="EO"||JOB=="CL"||JOB=="PP"||JOB=="BI"||JOB=="EE"||JOB=="SO"||JOB=="SHE"||JOB=="OS"||JOB=="WC"||JOB=="OL"||JOB=="OM")
{
d.gI("tattooslot1fighter").style.display = 'none'
d.gI("tattooslot2fighter").style.display = 'none'
d.gI("tattooslot3fighter").style.display = 'none'
d.gI("tattooslot1healer").style.display = 'block'
d.gI("tattooslot2healer").style.display = 'block'
d.gI("tattooslot3healer").style.display = 'block'
d.gI("tattooslot1nuker").style.display = 'none'
d.gI("tattooslot2nuker").style.display = 'none'
d.gI("tattooslot3nuker").style.display = 'none'
var TAT1=d.gI("tattooslot1healer").value
var TAT2=d.gI("tattooslot2healer").value
var TAT3=d.gI("tattooslot3healer").value
}
else if (JOB=="WI"||JOB=="SOR"||JOB=="NE"||JOB=="WL"||JOB=="EW"||JOB=="SPS"||JOB=="ELS"||JOB=="DW"||JOB=="PS"||JOB=="SPH"||JOB=="DM"||JOB=="EM"||JOB=="HM")
{
d.gI("tattooslot1fighter").style.display = 'none'
d.gI("tattooslot2fighter").style.display = 'none'
d.gI("tattooslot3fighter").style.display = 'none'
d.gI("tattooslot1healer").style.display = 'none'
d.gI("tattooslot2healer").style.display = 'none'
d.gI("tattooslot3healer").style.display = 'none'
d.gI("tattooslot1nuker").style.display = 'block'
d.gI("tattooslot2nuker").style.display = 'block'
d.gI("tattooslot3nuker").style.display = 'block'
var TAT1=d.gI("tattooslot1nuker").value
var TAT2=d.gI("tattooslot2nuker").value
var TAT3=d.gI("tattooslot3nuker").value
}

if (JOB=="EF"||JOB=="DF"||JOB=="OR"||JOB=="DO"||JOB=="HF"||JOB=="HM"||JOB=="EM"||JOB=="DM"||JOB=="OM"){
d.gI("tattooslot2fighter").disabled=true
d.gI("tattooslot3fighter").disabled=true
d.gI("tattooslot2healer").disabled=true
d.gI("tattooslot3healer").disabled=true
d.gI("tattooslot2nuker").disabled=true
d.gI("tattooslot3nuker").disabled=true
var TAT2=0
var TAT3=0
}
else if (JOB=="RO"||JOB=="WA"||JOB=="HK"||JOB=="WI"||JOB=="CL"||JOB=="EK"||JOB=="EFS"||JOB=="EO"||JOB=="EW"||JOB=="PK"||JOB=="AS"||JOB=="DW"||JOB=="SO"||JOB=="MO"||JOB=="OR"||JOB=="OS"||JOB=="SC"||JOB=="AR"){
d.gI("tattooslot2fighter").disabled=false
d.gI("tattooslot3fighter").disabled=true
d.gI("tattooslot2healer").disabled=false
d.gI("tattooslot3healer").disabled=true
d.gI("tattooslot2nuker").disabled=false
d.gI("tattooslot3nuker").disabled=true
var TAT3=0
}
else{
d.gI("tattooslot2fighter").disabled=false
d.gI("tattooslot3fighter").disabled=false
d.gI("tattooslot2healer").disabled=false
d.gI("tattooslot3healer").disabled=false
d.gI("tattooslot2nuker").disabled=false
d.gI("tattooslot3nuker").disabled=false
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
var movemode=d.gI("MOVEMODE").value

//Shield Grade
var shieldgrade=d.gI("SHIELDGRADE").value
if (shieldgrade=="S")
	{shield=d.gI("SHIELDS").value;}
else if (shieldgrade=="A")
	{shield=d.gI("SHIELDA").value;}
else if (shieldgrade=="B")
	{shield=d.gI("SHIELDB").value;}
else if (shieldgrade=="C")
	{shield=d.gI("SHIELDC").value;}
else if (shieldgrade=="D")
	{shield=d.gI("SHIELDD").value;}
else if (shieldgrade=="N")
	{shield=d.gI("SHIELDN").value;}

//Shields
Shield=SHIELDPDEF[shield]
if (shield=="0")
{ShieldEvasion=0}
else if (shield>0)
{ShieldEvasion=-8}

//Shield Enchant
var shieldenchant=d.gI("SHIELDENCHANT").value
if (shieldenchant <= 3)
	{shieldunderenchant=shieldenchant;shieldoverenchant=0;}
else
	{shieldunderenchant=3;shieldoverenchant=shieldenchant-3;}
if (shield=="0") {
	shieldunderPDEF=0
	shieldoverPDEF=0
	Shield=Shield
	ShieldBlockRate=0
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
var weapongrade=d.gI("WEAPONGRADE").value
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

document.addEventListener('DOMContentLoaded', function() {
    var weaponsa=document.forms['statcalculator'].WEAPONSA;
    weaponsa.length=5;

for (i=0;i<5;i++)
	{
	var p=i*2+3
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
});
//Weapon Enchant
var weaponenchant=d.gI("WEAPONENCHANT").value
if (weaponenchant <= 3)
	{weaponunderenchant=weaponenchant;weaponoverenchant=0;}
else
	{weaponunderenchant=3;weaponoverenchant=weaponenchant-3;}
if (weapongrade=="N"||weapon=="0") {
	d.gI("WEAPONENCHANT").disabled=true
	underMATK=0
	overMATK=0
	}
else if (weapongrade=="H") {
	d.gI("WEAPONENCHANT").disabled=true
	underMATK=0
	overMATK=0
	}
else if (weapongrade=="D") {
	d.gI("WEAPONENCHANT").disabled=false
	underMATK=2
	overMATK=4
	}
else if (weapongrade=="S") {
	d.gI("WEAPONENCHANT").disabled=false
	underMATK=4
	overMATK=8
	}
else {
	d.gI("WEAPONENCHANT").disabled=false
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
	var weapon_sa=d.gI("WEAPONSA").value
	var sasubvalue=d.gI("WEAPONSA").selectedIndex
	var samultiplier=sasubvalue*2+4
	}
else if (WpnType=="Duals")
	{
	var duals_sa=WEAPON[weapon][3]
	var duals_v=WEAPON[weapon][4]
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
else if (weapon_sa=="Back Blow" && CSA==0 && position==3)
	{backcritical=backcritical+WEAPON[weapon][samultiplier]}
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
	{BuffHP=BuffHP*1.25;BuffMP=BuffMP*1.3;ShieldBlockRate=ShieldBlockRate*1.39}
else if (weapon=="331" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5}
else if (weapon=="332" && CSA==0)
	{BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5}
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
	{BuffASPD=BuffASPD*1.07;BuffACC=BuffACC+4.89}
else if (weapon=="339" && CSA==0)
	{BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;BuffASPD*BuffASPD*1.03;backcritical=backcritical+220}
else if (weapon=="340" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;AddCRIT=AddCRIT+78.7}

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
	{WpnSpd=379;WpnAcc=4.75;WpnCrt=40;WpnMAS="Blunt";ShieldDisabled=false;randdmg=1.1}

if (ShieldDisabled==true) {
	d.gI("SHIELDS").disabled=true
	d.gI("SHIELDA").disabled=true
	d.gI("SHIELDB").disabled=true
	d.gI("SHIELDC").disabled=true
	d.gI("SHIELDD").disabled=true
	d.gI("SHIELDN").disabled=true
	shield="unequipped"
	Shield=0
	ShieldEvasion=0
	ShieldBlockRate=0
	}
else if (ShieldDisabled==false) {
	d.gI("SHIELDS").disabled=false
	d.gI("SHIELDA").disabled=false
	d.gI("SHIELDB").disabled=false
	d.gI("SHIELDC").disabled=false
	d.gI("SHIELDD").disabled=false
	d.gI("SHIELDN").disabled=false
}
if (shieldgrade=="N"||Shield=="0") {
	d.gI("SHIELDENCHANT").disabled=true
	}
else {
	d.gI("SHIELDENCHANT").disabled=false
	}

if (shieldgrade=="D" && LVL<20 && Shield!=0)
	{pen=pen+1;d.gI("shield grade penalty").innerHTML=GPA}
else if (shieldgrade=="C" && LVL<40 && Shield!=0)
	{pen=pen+1;d.gI("shield grade penalty").innerHTML=GPA}
else if (shieldgrade=="B" && LVL<52 && Shield!=0)
	{pen=pen+1;d.gI("shield grade penalty").innerHTML=GPA}
else if (shieldgrade=="A" && LVL<61 && Shield!=0)
	{pen=pen+1;d.gI("shield grade penalty").innerHTML=GPA}
else if (shieldgrade=="S" && LVL<76 && Shield!=0)
	{pen=pen+1;d.gI("shield grade penalty").innerHTML=GPA}
else
	{d.gI("shield grade penalty").innerHTML=" "}


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
var helmetgrade=d.gI("HELMETGRADE").value
if (helmetgrade=="S")
	{helmet=d.gI("HELMETS").value}
else if (helmetgrade=="A")
	{helmet=d.gI("HELMETA").value}
else if (helmetgrade=="B")
	{helmet=d.gI("HELMETB").value}
else if (helmetgrade=="C")
	{helmet=d.gI("HELMETC").value}
else if (helmetgrade=="D")
	{helmet=d.gI("HELMETD").value}
else if (helmetgrade=="N")
	{helmet=d.gI("HELMETN").value}

if (helmetgrade=="D" && LVL<20 && helmet!=0)
	{pen=pen+1;d.gI("helmet grade penalty").innerHTML=GPA}
else if (helmetgrade=="C" && LVL<40 && helmet!=0)
	{pen=pen+1;d.gI("helmet grade penalty").innerHTML=GPA}
else if (helmetgrade=="B" && LVL<52 && helmet!=0)
	{pen=pen+1;d.gI("helmet grade penalty").innerHTML=GPA}
else if (helmetgrade=="A" && LVL<61 && helmet!=0)
	{pen=pen+1;d.gI("helmet grade penalty").innerHTML=GPA}
else if (helmetgrade=="S" && LVL<76 && helmet!=0)
	{pen=pen+1;d.gI("helmet grade penalty").innerHTML=GPA}
else
	{d.gI("helmet grade penalty").innerHTML=" "}

//Helmets
Helmet=HELMETPDEF[helmet]
HelmetSet=HELMETSET[helmet]

//Helmet Enchant
var helmetenchant=d.gI("HELMETENCHANT").value
if (helmetenchant <= 3)
	{helmetunderenchant=helmetenchant;helmetoverenchant=0;}
else
	{helmetunderenchant=3;helmetoverenchant=helmetenchant-3;}
if (helmetgrade=="N"||helmet=="0") {
	d.gI("HELMETENCHANT").disabled=true
	helmetunderPDEF=0
	helmetoverPDEF=0
	Helmet=Helmet
	}
else {
	d.gI("HELMETENCHANT").disabled=false
	helmetunderPDEF=1
	helmetoverPDEF=3
	Helmet=Helmet+(helmetunderenchant*helmetunderPDEF)+(helmetoverenchant*helmetoverPDEF)
	}

//Body Grade
var lowergrade=d.gI("LOWERGRADE").value
if (lowergrade=="S")
	{lower=d.gI("LOWERS").value}
else if (lowergrade=="A")
	{lower=d.gI("LOWERA").value}
else if (lowergrade=="B")
	{lower=d.gI("LOWERB").value}
else if (lowergrade=="C")
	{lower=d.gI("LOWERC").value}
else if (lowergrade=="D")
	{lower=d.gI("LOWERD").value}
else if (lowergrade=="N")
	{lower=d.gI("LOWERN").value}

//Body (Lower)
Lower=LOWERPDEF[lower]
ALType=LOWERTYPE[lower]
LowerSet=LOWERSET[lower]
if ((race=="HM"||race=="EM"||race=="DM"||race=="OM") && lower==0)
{Lower=8}

//Body (Lower) Enchant
var lowerenchant=d.gI("LOWERENCHANT").value
if (lowerenchant <= 3)
	{lowerunderenchant=lowerenchant;loweroverenchant=0;}
else
	{lowerunderenchant=3;loweroverenchant=lowerenchant-3;}
if (lowergrade=="N"||lower=="0") {
	d.gI("LOWERENCHANT").disabled=true
	lowerunderPDEF=0
	loweroverPDEF=0
	Lower=Lower
	}
else {
	d.gI("LOWERENCHANT").disabled=false
	lowerunderPDEF=1
	loweroverPDEF=3
	Lower=Lower+(lowerunderenchant*lowerunderPDEF)+(loweroverenchant*loweroverPDEF)
	}

//Body (Upper) Grade
var uppergrade=d.gI("UPPERGRADE").value
if (uppergrade=="S")
	{upper=d.gI("UPPERS").value}
else if (uppergrade=="A")
	{upper=d.gI("UPPERA").value}
else if (uppergrade=="B")
	{upper=d.gI("UPPERB").value}
else if (uppergrade=="C")
	{upper=d.gI("UPPERC").value}
else if (uppergrade=="D")
	{upper=d.gI("UPPERD").value}
else if (uppergrade=="N")
	{upper=d.gI("UPPERN").value}

if (uppergrade=="D" && LVL<20 && upper!=0)
	{pen=pen+1;d.gI("upper grade penalty").innerHTML=GPA}
else if (uppergrade=="C" && LVL<40 && upper!=0)
	{pen=pen+1;d.gI("upper grade penalty").innerHTML=GPA}
else if (uppergrade=="B" && LVL<52 && upper!=0)
	{pen=pen+1;d.gI("upper grade penalty").innerHTML=GPA}
else if (uppergrade=="A" && LVL<61 && upper!=0)
	{pen=pen+1;d.gI("upper grade penalty").innerHTML=GPA}
else if (uppergrade=="S" && LVL<76 && upper!=0)
	{pen=pen+1;d.gI("upper grade penalty").innerHTML=GPA}
else
	{d.gI("upper grade penalty").innerHTML=" "}

//Upper
Upper=UPPERPDEF[upper]
AddMP=AddMP+UPPERMP[upper]
AUType=UPPERTYPE[upper]
fullbody=FULLBODY[upper]
UpperSet=UPPERSET[upper]
if ((race=="HM"||race=="EM"||race=="DM"||race=="OM") && upper==0)
	{Upper=15}

//Body (Upper) Enchant
var upperenchant=d.gI("UPPERENCHANT").value
if (upperenchant <= 3)
	{upperunderenchant=upperenchant;upperoverenchant=0;}
else
	{upperunderenchant=3;upperoverenchant=upperenchant-3;}
if (uppergrade=="N"||upper=="0") {
	d.gI("UPPERENCHANT").disabled=true
	upperunderPDEF=0
	upperoverPDEF=0
	Upper=Upper
	}
else {
	d.gI("UPPERENCHANT").disabled=false
	upperunderPDEF=1
	upperoverPDEF=3
	Upper=Upper+(upperunderenchant*upperunderPDEF)+(upperoverenchant*upperoverPDEF)
	}

//Disable Lower when Upper is a full body armor
if (fullbody==1)
	{
	d.gI("LOWERS").disabled=true
	d.gI("LOWERA").disabled=true
	d.gI("LOWERB").disabled=true
	d.gI("LOWERC").disabled=true
	d.gI("LOWERD").disabled=true
	d.gI("LOWERN").disabled=true
	d.gI("LOWERENCHANT").disabled=true
	lower="unequipped"
	Lower=0
	}
else if (fullbody==0)
	{
	d.gI("LOWERS").disabled=false
	d.gI("LOWERA").disabled=false
	d.gI("LOWERB").disabled=false
	d.gI("LOWERC").disabled=false
	d.gI("LOWERD").disabled=false
	d.gI("LOWERN").disabled=false
	AddMP=AddMP+LOWERMP[lower]
	}

if (lowergrade=="D" && LVL<20 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("lower grade penalty").innerHTML=GPA}
else if (lowergrade=="C" && LVL<40 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("lower grade penalty").innerHTML=GPA}
else if (lowergrade=="B" && LVL<52 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("lower grade penalty").innerHTML=GPA}
else if (lowergrade=="A" && LVL<61 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("lower grade penalty").innerHTML=GPA}
else if (lowergrade=="S" && LVL<76 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("lower grade penalty").innerHTML=GPA}
else
	{d.gI("lower grade penalty").innerHTML=" "}

//Armor Types (Heavy/Light/Robe)
if (AUType=="H" && (ALType=="H"||fullbody==1))
	{AType="H"}
else if (AUType=="L" && (ALType=="L"||fullbody==1))
	{AType="L"}
else if (AUType=="R" && (ALType=="R"||fullbody==1))
	{AType="R"}

//Glove Grade
var glovegrade=d.gI("GLOVEGRADE").value
if (glovegrade=="S")
	{glove=d.gI("GLOVES").value}
else if (glovegrade=="A")
	{glove=d.gI("GLOVEA").value}
else if (glovegrade=="B")
	{glove=d.gI("GLOVEB").value}
else if (glovegrade=="C")
	{glove=d.gI("GLOVEC").value}
else if (glovegrade=="D")
	{glove=d.gI("GLOVED").value}
else if (glovegrade=="N")
	{glove=d.gI("GLOVEN").value}

if (glovegrade=="D" && LVL<20 && glove!=0)
	{pen=pen+1;d.gI("glove grade penalty").innerHTML=GPA}
else if (glovegrade=="C" && LVL<40 && glove!=0)
	{pen=pen+1;d.gI("glove grade penalty").innerHTML=GPA}
else if (glovegrade=="B" && LVL<52 && glove!=0)
	{pen=pen+1;d.gI("glove grade penalty").innerHTML=GPA}
else if (glovegrade=="A" && LVL<61 && glove!=0)
	{pen=pen+1;d.gI("glove grade penalty").innerHTML=GPA}
else if (glovegrade=="S" && LVL<76 && glove!=0)
	{pen=pen+1;d.gI("glove grade penalty").innerHTML=GPA}
else
	{d.gI("glove grade penalty").innerHTML=" "}

//Glove
Glove=GLOVEPDEF[glove]
GloveSet=GLOVESET[glove]

//Glove Enchant
var gloveenchant=d.gI("GLOVEENCHANT").value
if (gloveenchant <= 3)
	{gloveunderenchant=gloveenchant;gloveoverenchant=0;}
else
	{gloveunderenchant=3;gloveoverenchant=gloveenchant-3;}
if (glovegrade=="N"||glove=="0") {
	d.gI("GLOVEENCHANT").disabled=true
	gloveunderPDEF=0
	gloveoverPDEF=0
	Glove=Glove
	}
else {
	d.gI("GLOVEENCHANT").disabled=false
	gloveunderPDEF=1
	gloveoverPDEF=3
	Glove=Glove+(gloveunderenchant*gloveunderPDEF)+(gloveoverenchant*gloveoverPDEF)
	}

//Boot Grade
var bootgrade=d.gI("BOOTGRADE").value
if (bootgrade=="S")
	{boot=d.gI("BOOTS").value}
else if (bootgrade=="A")
	{boot=d.gI("BOOTA").value}
else if (bootgrade=="B")
	{boot=d.gI("BOOTB").value}
else if (bootgrade=="C")
	{boot=d.gI("BOOTC").value}
else if (bootgrade=="D")
	{boot=d.gI("BOOTD").value}
else if (bootgrade=="N")
	{boot=d.gI("BOOTN").value}

if (bootgrade=="D" && LVL<20 && boot!=0)
	{pen=pen+1;d.gI("boot grade penalty").innerHTML=GPA}
else if (bootgrade=="C" && LVL<40 && boot!=0)
	{pen=pen+1;d.gI("boot grade penalty").innerHTML=GPA}
else if (bootgrade=="B" && LVL<52 && boot!=0)
	{pen=pen+1;d.gI("boot grade penalty").innerHTML=GPA}
else if (bootgrade=="A" && LVL<61 && boot!=0)
	{pen=pen+1;d.gI("boot grade penalty").innerHTML=GPA}
else if (bootgrade=="S" && LVL<76 && boot!=0)
	{pen=pen+1;d.gI("boot grade penalty").innerHTML=GPA}
else
	{d.gI("boot grade penalty").innerHTML=" "}

//Boot
Boot=BOOTPDEF[boot]
BootSet=BOOTSET[boot]

//Boot Enchant
var bootenchant=d.gI("BOOTENCHANT").value
if (bootenchant <= 3)
	{bootunderenchant=bootenchant;bootoverenchant=0;}
else
	{bootunderenchant=3;bootoverenchant=bootenchant-3;}
if (bootgrade=="N"||boot=="0") {
	d.gI("BOOTENCHANT").disabled=true
	bootunderPDEF=0
	bootoverPDEF=0
	Boot=Boot
	}
else {
	d.gI("BOOTENCHANT").disabled=false
	bootunderPDEF=1
	bootoverPDEF=3
	Boot=Boot+(bootunderenchant*bootunderPDEF)+(bootoverenchant*bootoverPDEF)
	}

//Necklace Grade
var necklacegrade=d.gI("NECKLACEGRADE").value
if (necklacegrade=="S")
	{necklace=d.gI("NECKLACES").value}
else if (necklacegrade=="A")
	{necklace=d.gI("NECKLACEA").value}
else if (necklacegrade=="B")
	{necklace=d.gI("NECKLACEB").value}
else if (necklacegrade=="C")
	{necklace=d.gI("NECKLACEC").value}
else if (necklacegrade=="D")
	{necklace=d.gI("NECKLACED").value}
else if (necklacegrade=="N")
	{necklace=d.gI("NECKLACEN").value}

if (necklacegrade=="D" && LVL<20 && necklace!=0)
	{pen=pen+1;d.gI("necklace grade penalty").innerHTML=GPA}
else if (necklacegrade=="C" && LVL<40 && necklace!=0)
	{pen=pen+1;d.gI("necklace grade penalty").innerHTML=GPA}
else if (necklacegrade=="B" && LVL<52 && necklace!=0)
	{pen=pen+1;d.gI("necklace grade penalty").innerHTML=GPA}
else if (necklacegrade=="A" && LVL<61 && necklace!=0)
	{pen=pen+1;d.gI("necklace grade penalty").innerHTML=GPA}
else if (necklacegrade=="S" && LVL<76 && necklace!=0)
	{pen=pen+1;d.gI("necklace grade penalty").innerHTML=GPA}
else
	{d.gI("necklace grade penalty").innerHTML=" "}

//Necklace
Necklace=NECKLACEMDEF[necklace]
if (necklace=="6")
	{AddMP=AddMP+33}
else if (necklace=="20")
	{NECKLACEHP=445;AddMP=AddMP+42;NECKLACEPATK=1.04;NECKLACEMATK=1.08}
else if (necklace=="23")
	{AddMP=AddMP+26}
else if (necklace=="27")
	{AddMP=AddMP+42}
else if (necklace=="28")
	{AddMP=AddMP+42}

//Necklace Enchant
var necklaceenchant=d.gI("NECKLACEENCHANT").value
if (necklaceenchant <= 3)
	{necklaceunderenchant=necklaceenchant;necklaceoverenchant=0;}
else
	{necklaceunderenchant=3;necklaceoverenchant=necklaceenchant-3;}
if (necklacegrade=="N"||necklace=="0") {
	d.gI("NECKLACEENCHANT").disabled=true
	necklaceunderPDEF=0
	necklaceoverPDEF=0
	Necklace=Necklace
	}
else {
	d.gI("NECKLACEENCHANT").disabled=false
	necklaceunderPDEF=1
	necklaceoverPDEF=3
	Necklace=Necklace+(necklaceunderenchant*necklaceunderPDEF)+(necklaceoverenchant*necklaceoverPDEF)
	}

//Earring1 Grade
var earring1grade=d.gI("EARRING1GRADE").value
if (earring1grade=="S")
	{earring1=d.gI("EARRING1S").value}
else if (earring1grade=="A")
	{earring1=d.gI("EARRING1A").value}
else if (earring1grade=="B")
	{earring1=d.gI("EARRING1B").value}
else if (earring1grade=="C")
	{earring1=d.gI("EARRING1C").value}
else if (earring1grade=="D")
	{earring1=d.gI("EARRING1D").value}
else if (earring1grade=="N")
	{earring1=d.gI("EARRING1N").value}

if (earring1grade=="D" && LVL<20 && earring1!=0)
	{pen=pen+1;d.gI("earring1 grade penalty").innerHTML=GPA}
else if (earring1grade=="C" && LVL<40 && earring1!=0)
	{pen=pen+1;d.gI("earring1 grade penalty").innerHTML=GPA}
else if (earring1grade=="B" && LVL<52 && earring1!=0)
	{pen=pen+1;d.gI("earring1 grade penalty").innerHTML=GPA}
else if (earring1grade=="A" && LVL<61 && earring1!=0)
	{pen=pen+1;d.gI("earring1 grade penalty").innerHTML=GPA}
else if (earring1grade=="S" && LVL<76 && earring1!=0)
	{pen=pen+1;d.gI("earring1 grade penalty").innerHTML=GPA}
else
	{d.gI("earring1 grade penalty").innerHTML=" "}

//Earring1
Earring1=EARRINGMDEF[earring1]
if (earring1=="5")
	{AddMP=AddMP+31}
else if (earring1=="9")
	{AddMP=AddMP+31}
else if (earring1=="15")
	{AddMP=AddMP+25}
else if (earring1=="21")
	{AddMP=AddMP+20}
else if (earring1=="25")
	{AddMP=AddMP+31}
else if (earring1=="27")
	{AddMP=AddMP+31}

//Earring1 Enchant
var earring1enchant=d.gI("EARRING1ENCHANT").value
if (earring1enchant <= 3)
	{earring1underenchant=earring1enchant;earring1overenchant=0;}
else
	{earring1underenchant=3;earring1overenchant=earring1enchant-3;}
if (earring1grade=="N"||earring1=="0") {
	d.gI("EARRING1ENCHANT").disabled=true
	earring1underPDEF=0
	earring1overPDEF=0
	Earring1=Earring1
	}
else {
	d.gI("EARRING1ENCHANT").disabled=false
	earring1underPDEF=1
	earring1overPDEF=3
	Earring1=Earring1+(earring1underenchant*earring1underPDEF)+(earring1overenchant*earring1overPDEF)
	}

//Earring2 Grade
var earring2grade=d.gI("EARRING2GRADE").value
if (earring2grade=="S")
	{earring2=d.gI("EARRING2S").value}
else if (earring2grade=="A")
	{earring2=d.gI("EARRING2A").value}
else if (earring2grade=="B")
	{earring2=d.gI("EARRING2B").value}
else if (earring2grade=="C")
	{earring2=d.gI("EARRING2C").value}
else if (earring2grade=="D")
	{earring2=d.gI("EARRING2D").value}
else if (earring2grade=="N")
	{earring2=d.gI("EARRING2N").value}

if (earring2grade=="D" && LVL<20 && earring2!=0)
	{pen=pen+1;d.gI("earring2 grade penalty").innerHTML=GPA}
else if (earring2grade=="C" && LVL<40 && earring2!=0)
	{pen=pen+1;d.gI("earring2 grade penalty").innerHTML=GPA}
else if (earring2grade=="B" && LVL<52 && earring2!=0)
	{pen=pen+1;d.gI("earring2 grade penalty").innerHTML=GPA}
else if (earring2grade=="A" && LVL<61 && earring2!=0)
	{pen=pen+1;d.gI("earring2 grade penalty").innerHTML=GPA}
else if (earring2grade=="S" && LVL<76 && earring2!=0)
	{pen=pen+1;d.gI("earring2 grade penalty").innerHTML=GPA}
else
	{d.gI("earring2 grade penalty").innerHTML=" "}

//Earring2
Earring2=EARRINGMDEF[earring2]
if (earring2=="5")
	{AddMP=AddMP+31}
else if (earring2=="9")
	{AddMP=AddMP+31}
else if (earring2=="15")
	{AddMP=AddMP+25}
else if (earring2=="21")
	{AddMP=AddMP+20}
else if (earring2=="25")
	{AddMP=AddMP+31}
else if (earring2=="27")
	{AddMP=AddMP+31}

//Earring2 Enchant
var earring2enchant=d.gI("EARRING2ENCHANT").value
if (earring2enchant <= 3)
	{earring2underenchant=earring2enchant;earring2overenchant=0;}
else
	{earring2underenchant=3;earring2overenchant=earring2enchant-3;}
if (earring2grade=="N"||earring2=="0") {
	d.gI("EARRING2ENCHANT").disabled=true
	earring2underPDEF=0
	earring2overPDEF=0
	Earring2=Earring2
	}
else {
	d.gI("EARRING2ENCHANT").disabled=false
	earring2underPDEF=1
	earring2overPDEF=3
	Earring2=Earring2+(earring2underenchant*earring2underPDEF)+(earring2overenchant*earring2overPDEF)
	}

//Ring1 Grade
var ring1grade=d.gI("RING1GRADE").value
if (ring1grade=="S")
	{ring1=d.gI("RING1S").value}
else if (ring1grade=="A")
	{ring1=d.gI("RING1A").value}
else if (ring1grade=="B")
	{ring1=d.gI("RING1B").value}
else if (ring1grade=="C")
	{ring1=d.gI("RING1C").value}
else if (ring1grade=="D")
	{ring1=d.gI("RING1D").value}
else if (ring1grade=="N")
	{ring1=d.gI("RING1N").value}

if (ring1grade=="D" && LVL<20 && ring1!=0)
	{pen=pen+1;d.gI("ring1 grade penalty").innerHTML=GPA}
else if (ring1grade=="C" && LVL<40 && ring1!=0)
	{pen=pen+1;d.gI("ring1 grade penalty").innerHTML=GPA}
else if (ring1grade=="B" && LVL<52 && ring1!=0)
	{pen=pen+1;d.gI("ring1 grade penalty").innerHTML=GPA}
else if (ring1grade=="A" && LVL<61 && ring1!=0)
	{pen=pen+1;d.gI("ring1 grade penalty").innerHTML=GPA}
else if (ring1grade=="S" && LVL<76 && ring1!=0)
	{pen=pen+1;d.gI("ring1 grade penalty").innerHTML=GPA}
else
	{d.gI("ring1 grade penalty").innerHTML=" "}

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
var ring1enchant=d.gI("RING1ENCHANT").value
if (ring1enchant <= 3)
	{ring1underenchant=ring1enchant;ring1overenchant=0;}
else
	{ring1underenchant=3;ring1overenchant=ring1enchant-3;}
if (ring1grade=="N"||ring1=="0") {
	d.gI("RING1ENCHANT").disabled=true
	ring1underPDEF=0
	ring1overPDEF=0
	Ring1=Ring1
	}
else {
	d.gI("RING1ENCHANT").disabled=false
	ring1underPDEF=1
	ring1overPDEF=3
	Ring1=Ring1+(ring1underenchant*ring1underPDEF)+(ring1overenchant*ring1overPDEF)
	}

//Ring2 Grade
var ring2grade=d.gI("RING2GRADE").value
if (ring2grade=="S")
	{ring2=d.gI("RING2S").value}
else if (ring2grade=="A")
	{ring2=d.gI("RING2A").value}
else if (ring2grade=="B")
	{ring2=d.gI("RING2B").value}
else if (ring2grade=="C")
	{ring2=d.gI("RING2C").value}
else if (ring2grade=="D")
	{ring2=d.gI("RING2D").value}
else if (ring2grade=="N")
	{ring2=d.gI("RING2N").value}

var GPA="<font color=red><b>Grade Penalty applied</b></font>"

if (ring2grade=="D" && LVL<20 && ring2!=0)
	{pen=pen+1;d.gI("ring2 grade penalty").innerHTML=GPA}
else if (ring2grade=="C" && LVL<40 && ring2!=0)
	{pen=pen+1;d.gI("ring2 grade penalty").innerHTML=GPA}
else if (ring2grade=="B" && LVL<52 && ring2!=0)
	{pen=pen+1;d.gI("ring2 grade penalty").innerHTML=GPA}
else if (ring2grade=="A" && LVL<61 && ring2!=0)
	{pen=pen+1;d.gI("ring2 grade penalty").innerHTML=GPA}
else if (ring2grade=="S" && LVL<76 && ring2!=0)
	{pen=pen+1;d.gI("ring2 grade penalty").innerHTML=GPA}
else
	{d.gI("ring2 grade penalty").innerHTML=" "}

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
var ring2enchant=d.gI("RING2ENCHANT").value
if (ring2enchant <= 3)
	{ring2underenchant=ring2enchant;ring2overenchant=0;}
else
	{ring2underenchant=3;ring2overenchant=ring2enchant-3;}
if (ring2grade=="N"||ring2=="0") {
	d.gI("RING2ENCHANT").disabled=true
	ring2underPDEF=0
	ring2overPDEF=0
	Ring2=Ring2
	}
else {
	d.gI("RING2ENCHANT").disabled=false
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
		{ShieldBlockRate=ShieldBlockRate*1.24}
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
		{ShieldBlockRate=ShieldBlockRate*1.18}
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
		{ShieldBlockRate=ShieldBlockRate*1.24}
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
		{ShieldBlockRate=ShieldBlockRate*1.0526}
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
//Nightmare Light
	if (helmet=="8" && upper=="56" && glove=="25" && boot=="11")
		{DEX=DEX+1;CON=CON-1;BuffMDEF=BuffMDEF*1.04}
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
	if (d.gI("ACCTCHECK").checked==true)
		{BuffACC=BuffACC+3}
//Accuracy Debuffs
	if (d.gI("DEACCCHECK").checked==true)
		{var deacc=d.gI("DEACC").value;BuffACC=BuffACC-DEACC[deacc]}
//Acumen
	if (d.gI("ACUCHECK").checked==true)
		{var acu=d.gI("ACU").value;BuffCAST=BuffCAST*ACUMEN[acu]}
//Advanced Block
	if (d.gI("ADVANCEDBLOCKCHECK").checked==true)
		{var advancedblock=d.gI("ADVANCEDBLOCK").value;BuffSHIELDPDEF=BuffSHIELDPDEF*ADVANCEDBLOCK[advancedblock]}
//Aegis Stance
	if (d.gI("AEGISSTANCECHECK").checked==true)
		{var aegisstance=d.gI("AEGISSTANCE").value;BuffSHIELDPDEF=BuffSHIELDPDEF*0.6;block360=true}
//Agility
	if (d.gI("AGICHECK").checked==true)
		{var agi=d.gI("AGI").value;BuffEVA=BuffEVA+AGILITY[agi]}
//Angelic Icon
	if (d.gI("ANGELICICONCHECK").checked==true)
		{var angelic=d.gI("ANGELICICON").value
		AddSPEED=AddSPEED+ANGELICSPEED[angelic]}
	if (d.gI("ANGELICICONCHECK").checked==true && (WpnType=="Fist"||WpnType=="2hb"||WpnType=="Blunt"))
		{var angelic=d.gI("ANGELICICON").value
		BuffACC=BuffACC+6
		BuffPDEF=BuffPDEF*1.5
		BuffMDEF=BuffMDEF*1.5
		BuffASPD=BuffASPD*ANGELICASPD[angelic]
		BuffCRITDMG=BuffCRITDMG*ANGELICCRITDMG[angelic]}
	if (d.gI("ANGELICICONCHECK").checked==true && (WpnType=="Polearm"||WpnType=="2hs"||WpnType=="Sword"))
		{var angelic=d.gI("ANGELICICON").value
		AddCRIT=AddCRIT+ANGELICCRIT[angelic]
		BuffACC=BuffACC+6
		BuffPDEF=BuffPDEF*1.5
		BuffMDEF=BuffMDEF*1.5
		BuffASPD=BuffASPD*ANGELICASPD[angelic]}
//Arcane Agility
	if (d.gI("ARAGICHECK").checked==true)
		{var aragi=d.gI("ARAGI").value;BuffCAST=BuffCAST*1.2}
//Arcane Chaos
	if (d.gI("ARCANECHAOSCHECK").checked==true)
		{var arcanechaos=d.gI("ARCANECHAOS").value;AddMPR=AddMPR-24}
//Arcane Power
	if (d.gI("ARPCHECK").checked==true)
		{var arcanepower=d.gI("ARP").value;BuffMATK=1.3*BuffMATK}
//Arcane Wisdom
	if (d.gI("ARWISCHECK").checked==true)
		{var arwis=d.gI("ARWIS").value;BuffCAST=BuffCAST*0.9}
//Armor Crush
	if (d.gI("ACCHECK").checked==true)
		{var armorcrush=d.gI("ARCR").value;BuffPDEF=0.70*BuffPDEF;BuffMDEF=0.70*BuffMDEF}
//Attack Speed Debuffs
	if (d.gI("DEASPDCHECK").checked==true)
		{var deaspd=d.gI("DEASPD").value;BuffASPD=BuffASPD*DEASPD[deaspd]}
//Berserker Spirit
	if (d.gI("ZERKCHECK").checked==true)
		{var zerk=d.gI("ZERK").value;BuffPATK=BuffPATK*ZERK[zerk];BuffPDEF=BuffPDEF*ZERKPDEF[zerk];BuffMATK=BuffMATK*ZERKMATK[zerk];BuffMDEF=BuffMDEF*ZERKMDEF[zerk];BuffEVA=BuffEVA+ZERKEVA[zerk];AddSPEED=AddSPEED+ZERKSPEED[zerk];BuffASPD=BuffASPD*ZERK[zerk];BuffCAST=BuffCAST*ZERK[zerk]}
//Bless Shield
	if (d.gI("BLESSSHIELDCHECK").checked==true)
		{var blessshield=d.gI("BLESSSHIELD").value;ShieldBlockRate=ShieldBlockRate*BLESSSHIELD[blessshield]}
//Bless the Body
	if (d.gI("BTB1CHECK").checked==true)
		{var btb1=d.gI("BTB1").value
		BuffHP=BuffHP*BTB[btb1]}
	if (d.gI("BTB2CHECK").checked==true)
		{var btb2=d.gI("BTB2").value
		BuffHP=BuffHP*BTB[btb2]}
	if (d.gI("BTB3CHECK").checked==true)
		{var btb3=d.gI("BTB3").value
		BuffHP=BuffHP*BTB[btb3]}
//Bless the Soul
	if (d.gI("BTSCHECK").checked==true)
		{var bts=d.gI("BTS").value;BuffMP=BuffMP*BTS[bts]}
//Blessing of Prophecy
	if (d.gI("BLESSINGOFPROPHECYCHECK").checked==true && (ClassType=="F1"||ClassType=="F2"||ClassType=="F3")) {
		var blessingofprophecy=d.gI("BLESSINGOFPROPHECY").value;
		weightlimit=weightlimit*1.25}
//Blessing of Seraphim
	if (d.gI("SERAPHIMCHECK").checked==true)
		{var seraphim=d.gI("SERAPHIM").value;BuffMPR=BuffMPR*SERAPHIM[seraphim]}
//Blinding Blow
	if (d.gI("BLINDINGCHECK").checked==true)
		{var blinding=d.gI("BLINDING").value;BuffSPEED=BuffSPEED*1.4}
//Block Shield
	if (d.gI("BLKSCHECK").checked==true)
		{var blockshield=d.gI("BLKS").value;BuffPDEF=0.90*BuffPDEF}
//Block Wind Walk
	if (d.gI("BWWCHECK").checked==true)
		{var bww=d.gI("BWW").value;BuffSPEED=BuffSPEED*0.9}
//Casting Spd. Debuffs
	if (d.gI("DECASTCHECK").checked==true)
		{BuffCAST=BuffCAST*0.77}
//Curse Gloom
	if (d.gI("GLOOMCHECK").checked==true)
		{var gloom=d.gI("GLOOM").value;BuffMDEF=0.77*BuffMDEF}
//Curse of Abyss
	if (d.gI("COABYSSCHECK").checked==true)
		{var coabyss=d.gI("COABYSS").value;BuffMATK=0.70*BuffMATK;BuffEVA=BuffEVA-6;BuffSPEED=BuffSPEED*0.9;BuffCAST=BuffCAST*0.8}
//Curse of Doom
	if (d.gI("CODOOMCHECK").checked==true)
		{var codoom=d.gI("CODOOM").value;BuffPATK=0.83*BuffPATK}
//Curse of Shade
	if (d.gI("COSHADECHECK").checked==true)
		{var coshade=d.gI("COSHADE").value;BuffPDEF=CURSEOFSHADE[coshade]*BuffPDEF;BuffMDEF=CURSEOFSHADE[coshade]*BuffMDEF}
//Dance of Concentration
	if (d.gI("DCONCHECK").checked==true)
		{var dcon=d.gI("DCON").value;BuffCAST=BuffCAST*1.3}
//Dance of Fire
	if (d.gI("DANCEOFFIRECHECK").checked==true)
		{var dcon=d.gI("DANCEOFFIRE").value;BuffCRITDMG=BuffCRITDMG*1.5}
//Dance of Fury
	if (d.gI("DFURYCHECK").checked==true)
		{var dfury=d.gI("DFURY").value;BuffASPD=BuffASPD*1.15}
//Dance of Inspiration
	if (d.gI("DOICHECK").checked==true)
		{var doi=d.gI("DOI").value;BuffACC=BuffACC+4}
//Dance of Mystic
	if (d.gI("DOMYCHECK").checked==true)
		{var domy=d.gI("DOMY").value;BuffMATK=1.2*BuffMATK}
//Dance of Shadow
	if (d.gI("DSHCHECK").checked==true)
		{var dsh=d.gI("DSH").value;BuffSPEED=BuffSPEED*0.5}
//Dance of Warrior
	if (d.gI("DOWACHECK").checked==true)
		{var dowa=d.gI("DOWA").value;BuffPATK=1.12*BuffPATK}
//Dark Vortex
	if (d.gI("DVCHECK").checked==true)
		{var fv=d.gI("DV").value;AddMPR2=AddMPR2-12}
//Dash
	if (d.gI("DASH1CHECK").checked==true)
		{var dash1=d.gI("DASH1").value;BuffSPEED=BuffSPEED*DASH[dash1]}
	if (d.gI("DASH2CHECK").checked==true)
		{var dash2=d.gI("DASH2").value;BuffSPEED=BuffSPEED*DASH[dash2]}
//Dead Eye
	if (d.gI("DEADEYECHECK").checked==true && WpnMAS=="Bow")
		{var deadeye=d.gI("DEADEYE").value;AddPATK=AddPATK+DEADEYEPATK[deadeye];BuffACC=BuffACC+DEADEYEACC[deadeye];BuffASPD=BuffASPD*0.8;BuffCRITDMG=BuffCRITDMG*1.2}
//Death Whisper
	if (d.gI("DEATHWHISPERCHECK").checked==true)
		{var deadeye=d.gI("DEATHWHISPER").value;BuffCRITDMG=BuffCRITDMG*DEATHWHISPER[deadeye]}
//Decrease Weight
	if (d.gI("DECREASEWEIGHTCHECK").checked==true)
		{var bu=d.gI("DECREASEWEIGHT").value;weightpenalty=weightpenalty+DECREASEWEIGHT[bu]}
//Demonic Blade Dance
	if (d.gI("DEMONICBDCHECK").checked==true)
		{var demonicbd=d.gI("DEMONICBD").value;BuffPATK=BuffPATK*DEMONICBD[demonicbd];BuffMATK=BuffMATK*DEMONICBD[demonicbd]}
//Duelist Spirit
	if (d.gI("DUELCHECK").checked==true && WpnType=="Duals")
		{var duel=d.gI("DUEL").value;BuffASPD=BuffASPD*DUELIST[duel]}
//Empower
	if (d.gI("EMPCHECK").checked==true)
		{var emp=d.gI("EMP").value;BuffMATK=BuffMATK*EMPOWER[emp]}
//Evade Shot
	if (d.gI("EVSHTCHECK").checked==true)
		{var evsht=d.gI("EVSHT").value;BuffEVA=BuffEVA+6}
//Fire Vortex
	if (d.gI("FVCHECK").checked==true)
		{var fv=d.gI("FV").value;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.7;BuffCAST=BuffCAST*0.9;AddMPR2=AddMPR2-12}
//Fist Fury
	if (d.gI("FFURYCHECK").checked==true)
		{var ffury=d.gI("FFURY").value;BuffASPD=BuffASPD*1.25}
//Focus
	if (d.gI("FCSCHECK").checked==true)
		{var fcs=d.gI("FCS").value;subcritical=subcritical+(basecritical*FOCUS[fcs])}
//Focus Attack
	if (d.gI("FACHECK").checked==true && WpnType=="Polearm")
		{var focusattack=d.gI("FA").value;BuffACC=BuffACC+FOCUSATTACK[focusattack];BuffCRITDMG=BuffCRITDMG*1.1}
//Focus Chance
	if (d.gI("FOCUSCHANCECHECK").checked==true && position==1 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCUSCHANCE").value;BuffCOMBATCRIT=BuffCOMBATCRIT*0.7}
	if (d.gI("FOCUSCHANCECHECK").checked==true && position==2 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCUSCHANCE").value;BuffCOMBATCRIT=BuffCOMBATCRIT*1.3}
	if (d.gI("FOCUSCHANCECHECK").checked==true && position==3 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCUSCHANCE").value;BuffCOMBATCRIT=BuffCOMBATCRIT*1.6}
//Focus Death
	if (d.gI("FOCDCHECK").checked==true && position==1 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCD").value;subcritical=subcritical+(basecritical*-0.3);BuffCRITDMG=BuffCRITDMG*0.7}
	if (d.gI("FOCDCHECK").checked==true && position==2 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCD").value;subcritical=subcritical+(basecritical*-0.3)}
	if (d.gI("FOCDCHECK").checked==true && position==3 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCD").value;subcritical=subcritical+(basecritical*-0.3);BuffCRITDMG=BuffCRITDMG*1.9}
//Focus Power
	if (d.gI("FOCUSPOWERCHECK").checked==true && position==1 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCUSPOWER").value;BuffCRITDMG=BuffCRITDMG*0.7}
	if (d.gI("FOCUSPOWERCHECK").checked==true && position==2 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCUSPOWER").value;BuffCRITDMG=BuffCRITDMG*1.3}
	if (d.gI("FOCUSPOWERCHECK").checked==true && position==3 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCUSPOWER").value;BuffCRITDMG=BuffCRITDMG*1.6}
//Frenzy
	if (d.gI("FRENZY1CHECK").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var frenzy1=d.gI("FRENZY1").value
		BuffPATK=BuffPATK*FRENZY2HS[frenzy1]
		BuffACC=BuffACC+FRENZY2HSACC[frenzy1]}
	else if (d.gI("FRENZY1CHECK").checked==true && (WpnType=="Sword"||WpnType=="Blunt"))
		{var frenzy1=d.gI("FRENZY1").value;BuffPATK=BuffPATK*FRENZY[frenzy1]}
	else if (d.gI("FRENZY1CHECK").checked==true && WpnType=="Polearm")
		{var frenzy1=d.gI("FRENZY1").value;BuffPATK=BuffPATK*FRENZYPOLE[frenzy1]}
	else if (d.gI("FRENZY1CHECK").checked==true)
		{var frenzy1=d.gI("FRENZY1").value;BuffPATK=BuffPATK*FRENZYOTHER[frenzy1]}
	if (d.gI("FRENZY2CHECK").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var frenzy2=d.gI("FRENZY2").value
		BuffPATK=BuffPATK*FRENZY2HS[frenzy2]
		BuffACC=BuffACC+FRENZY2HSACC[frenzy2]}
	else if (d.gI("FRENZY2CHECK").checked==true && (WpnType=="Sword"||WpnType=="Blunt"))
		{var frenzy2=d.gI("FRENZY2").value;BuffPATK=BuffPATK*FRENZY[frenzy2]}
	else if (d.gI("FRENZY2CHECK").checked==true && WpnType=="Polearm")
		{var frenzy2=d.gI("FRENZY2").value;BuffPATK=BuffPATK*FRENZYPOLE[frenzy2]}
	else if (d.gI("FRENZY2CHECK").checked==true)
		{var frenzy2=d.gI("FRENZY2").value;BuffPATK=BuffPATK*FRENZYOTHER[frenzy2]}
//Greater Might
	if (d.gI("GREATERMIGHTCHECK").checked==true)
		{var greatermight=d.gI("GREATERMIGHT").value;BuffPATK=BuffPATK*GREATERMIGHT[greatermight]}
//Greater Shield
	if (d.gI("GREATERSHIELDCHECK").checked==true)
		{var greatershield=d.gI("GREATERSHIELD").value;BuffPDEF=BuffPDEF*GREATERSHIELD[greatershield]}
//Guard Stance
	if (d.gI("GSCHECK").checked==true)
		{var gs=d.gI("GS").value;AddPDEF=AddPDEF+GUARDSTANCE[gs];ShieldBlockRate=ShieldBlockRate*1.5}
//Guidance
	if (d.gI("GUIDCHECK").checked==true)
		{var guid=d.gI("GUID").value;BuffACC=BuffACC+GUIDANCE[guid]}
//Guts
	if (d.gI("GUTS1CHECK").checked==true)
		{var guts1=d.gI("GUTS1").value;BuffPDEF=BuffPDEF*GUTS[guts1]}
	if (d.gI("GUTS2CHECK").checked==true)
		{var guts2=d.gI("GUTS2").value;BuffPDEF=BuffPDEF*GUTS[guts2]}
//Haste
	if (d.gI("HASTECHECK").checked==true)
		{var haste=d.gI("HASTE").value;BuffASPD=BuffASPD*HASTE[haste]}
//Hawk Eye
	if (d.gI("HECHECK").checked==true)
		{var hawkeye=d.gI("HE").value;BuffPDEF=0.90*BuffPDEF;BuffACC=BuffACC+HAWKEYE[hawkeye]}
//Hero Debuffs
	if (d.gI("HEROICDECHECK").checked==true) {
		var heroicde=d.gI("HEROICDE").value;
		if (heroicde=="1")
			{BuffPDEF=BuffPDEF*0.5;AddMDEF=AddMDEF-50;BuffEVA=BuffEVA-16;ShieldBlockRate=ShieldBlockRate*0.5}
	}
	if (d.gI("HEROICDREADCHECK").checked==true) {
		var heroicdread=d.gI("HEROICDREAD").value;
		if (heroicdread=="1")
			{BuffSPEED=BuffSPEED*1.54}
	}
//Hero Skills
	if (d.gI("HEROICCHECK").checked==true) {
		var heroic=d.gI("HEROIC").value;
		if (heroic=="1")
			{AddPATK=AddPATK+500;AddMATK=AddMATK+500;BuffPDEF=BuffPDEF*0.75;AddMDEF=AddMDEF-25;BuffACC=BuffACC+8;BuffEVA=BuffEVA-8;AddSPEED=AddSPEED+20;AddASPD=AddASPD+100;AddCAST=AddCAST+100}
		else if (heroic=="2" && shield!=0)
			{AddPDEF=AddPDEF+5400;AddMDEF=AddMDEF+4050;AddSPEED=AddSPEED+5}
		else if (heroic=="3")
			{AddPATK=AddPATK+250;AddPDEF=AddPDEF+500}
	}
//Hot Springs Cholera
	if (d.gI("CHOLCHECK").checked==true)
		{var chol=d.gI("CHOL").value;BuffACC=BuffACC+HSCHOLACC[chol];BuffEVA=BuffEVA+HSCHOLEVA[chol]}
//Hot Springs Malaria
	if (d.gI("MALCHECK").checked==true)
		{var mal=d.gI("MAL").value;BuffCAST=BuffCAST*HSMALARIA[mal]}
//Ice Vortex
	if (d.gI("IVCHECK").checked==true)
		{var iv=d.gI("IV").value;BuffSPEED=BuffSPEED*0.7;BuffASPD=BuffASPD*0.9;BuffCAST=BuffCAST*0.9;AddMPR2=AddMPR2-12}
//Judgment
	if (d.gI("JUDGMENTCHECK").checked==true)
		{var iv=d.gI("JUDGMENT").value;BuffCRITDMG=BuffCRITDMG*JUDGMENT[iv]}
//Light Vortex
	if (d.gI("LVORCHECK").checked==true)
		{var lvor=d.gI("LVOR").value;BuffACC=BuffACC-6;AddMPR2=AddMPR2-12}
//Magic Barrier
	if (d.gI("MB1CHECK").checked==true)
		{var mb1=d.gI("MB1").value;BuffMDEF=BuffMDEF*MAGICBARRIER[mb1]}
	if (d.gI("MB2CHECK").checked==true)
		{var mb2=d.gI("MB2").value;BuffMDEF=BuffMDEF*MAGICBARRIER[mb2]}
	if (d.gI("MB3CHECK").checked==true)
		{var mb3=d.gI("MB3").value;BuffMDEF=BuffMDEF*MAGICBARRIER[mb3]}
//Majesty
	if (d.gI("MAJ1CHECK").checked==true)
		{var maj1=d.gI("MAJ1").value;BuffPDEF=BuffPDEF*MAJESTY[maj1];BuffEVA=BuffEVA+MAJESTYEVA[maj1]}
	if (d.gI("MAJ2CHECK").checked==true)
		{var maj2=d.gI("MAJ2").value;BuffPDEF=BuffPDEF*MAJESTY[maj2];BuffEVA=BuffEVA+MAJESTYEVA[maj2]}
//Mana Regeneration
	if (d.gI("MANAREGENCHECK").checked==true)
		{var manaregen=d.gI("MANAREGEN").value;AddMPR=AddMPR+MANAREGEN[manaregen]}
	if (d.gI("MIGHT2CHECK").checked==true)
		{var might2=d.gI("MIGHT2").value;BuffPATK=BuffPATK*MIGHT[might2]}
//Might
	if (d.gI("MIGHT1CHECK").checked==true)
		{var might1=d.gI("MIGHT1").value;BuffPATK=BuffPATK*MIGHT[might1]}
	if (d.gI("MIGHT2CHECK").checked==true)
		{var might2=d.gI("MIGHT2").value;BuffPATK=BuffPATK*MIGHT[might2]}
//Parry Stance
	if (d.gI("PARRYCHECK").checked==true)
		{var parry=d.gI("PARRY").value;BuffPDEF=1.25*BuffPDEF;BuffMDEF=1.25*BuffMDEF;BuffACC=BuffACC-4;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.8}
//P.Atk. Debuffs
	if (d.gI("DEPATKCHECK").checked==true)
		{var depatk=d.gI("DEPATK").value;BuffPATK=BuffPATK*WEAKNESS[depatk]}
//P.Def. Debuffs
	if (d.gI("DEPDEFCHECK").checked==true)
		{var depdef=d.gI("DEPDEF").value;BuffPDEF=BuffPDEF*HEX[depdef]}
//Polearm Accuracy
	if (d.gI("POLEACCCHECK").checked==true)
		{var poleacc=d.gI("POLEACC").value;BuffACC=BuffACC+POLEACC[poleacc]}
//Prophecies
	var proph=d.gI("PROPH").value
	if (d.gI("PROPHCHECK").checked==true)
		{BuffHP=BuffHP*PROPHECYHP[proph];
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
		BuffCRITDMG=BuffCRITDMG*PROPHECYCRITDMG[proph]}
	if (d.gI("PROPHCHECK").checked==true && proph==4 && position==3)
		{BuffCRITDMG=BuffCRITDMG*1.2;backcritical=backcritical+200}
//Psycho Symphony
	if (d.gI("PSYCHOCHECK").checked==true)
		{var psycho=d.gI("PSYCHO").value;
		BuffSPEED=BuffSPEED*PSYCHO[psycho];
		BuffASPD=BuffASPD*PSYCHO[psycho];
		BuffCAST=BuffCAST*PSYCHO[psycho];}
//Queen Buffs
	var queen=d.gI("QUEEN").value
	if ((queen=="1"||queen=="2"||queen=="3") && d.gI("QUEENCHECK").checked==true)
		{BuffPATK=CATBUFFS[queen]*BuffPATK;BuffACC=BuffACC+2}
	else if ((queen=="4"||queen=="5"||queen=="6") && d.gI("QUEENCHECK").checked==true)
		{subcritical=subcritical+(basecritical*CATBUFFS[queen]);BuffCRITDMG=BuffCRITDMG*CATBUFFS2[queen]}
//Rage
	if (d.gI("RAGE1CHECK").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var rage1=d.gI("RAGE1").value;BuffPATK=RAGE2HS[rage1]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3;BuffACC=BuffACC+RAGE2HSACC[rage1]}
	else if (d.gI("RAGE1CHECK").checked==true && (WpnType=="Sword"||WpnType=="Blunt"||WpnType=="Polearm"))
		{var rage1=d.gI("RAGE1").value;BuffPATK=RAGE[rage1]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3}
	else if (d.gI("RAGE1CHECK").checked==true)
		{var rage1=d.gI("RAGE1").value;BuffPATK=RAGEOTHER[rage1]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3}
	if (d.gI("RAGE2CHECK").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var rage2=d.gI("RAGE2").value;BuffPATK=RAGE2HS[rage2]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3;BuffACC=BuffACC+RAGE2HSACC[rage2]}
	else if (d.gI("RAGE2CHECK").checked==true && (WpnType=="Sword"||WpnType=="Blunt"||WpnType=="Polearm"))
		{var rage2=d.gI("RAGE2").value;BuffPATK=RAGE[rage2]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3}
	else if (d.gI("RAGE2CHECK").checked==true && (WpnType!="2hs" && WpnType!="2hb"))
		{var rage2=d.gI("RAGE2").value;BuffPATK=RAGEOTHER[rage2]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3}
//Rapid Fire
	if (d.gI("RAPIDFIRECHECK").checked==true && WpnMAS=="Bow")
		{var rapidfire=d.gI("RAPIDFIRE").value
		AddPATK=AddPATK+RAPIDFIRE[rapidfire];
		BuffASPD=BuffASPD*1.2}
//Rapid Shot
	if (d.gI("RAPID1CHECK").checked==true && WpnMAS=="Bow")
		{var rapid1=d.gI("RAPID1").value;BuffASPD=BuffASPD*RAPIDSHOT[rapid1]}
	if (d.gI("RAPID2CHECK").checked==true && WpnMAS=="Bow")
		{var rapid2=d.gI("RAPID2").value;BuffASPD=BuffASPD*RAPIDSHOT[rapid2]}
//Regeneration
	if (d.gI("REGENERATIONCHECK").checked==true)
		{var regeneration=d.gI("REGENERATION").value;BuffHPR=BuffHPR*REGENERATION[regeneration]}
//Riposte Stance
	if (d.gI("RIPOSTECHECK").checked==true)
		{var riposte=d.gI("RIPOSTE").value;BuffACC=BuffACC-4;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.8}
//Sand Bomb
	if (d.gI("SANDBOMBCHECK").checked==true)
		{var sandbomb=d.gI("SANDBOMB").value;BuffACC=BuffACC+SANDBOMB[sandbomb]}
//Seal of Despair
	if (d.gI("DESPAIRCHECK").checked==true)
		{var despair=d.gI("DESPAIR").value;BuffMDEF=0.70*BuffMDEF;BuffACC=BuffACC-6;subcritical=subcritical+(basecritical*-0.3);BuffSPEED=BuffSPEED*0.8;BuffASPD=BuffASPD*0.8;BuffCRITDMG=BuffCRITDMG*0.7}
//Seal of Scourge
	if (d.gI("SCOURGECHECK").checked==true)
		{BuffMPR2=BuffMPR2*0}
//Shield
	if (d.gI("SHIELD1CHECK").checked==true)
		{var shield1=d.gI("SHIELD1").value;BuffPDEF=BuffPDEF*SHIELD[shield1]}
	if (d.gI("SHIELD2CHECK").checked==true)
		{var shield2=d.gI("SHIELD2").value;BuffPDEF=BuffPDEF*SHIELD[shield2]}
//Shield Fortress
	if (d.gI("SHIELDFORTRESSCHECK").checked==true)
		{var shieldfortress=d.gI("SHIELDFORTRESS").value;AddSHIELDPDEF=AddSHIELDPDEF+SHIELDFORTRESS[shieldfortress]}
//Shock Blast
	if (d.gI("SBCHECK").checked==true)
		{var shockblast=d.gI("SB").value;BuffPDEF=0.70*BuffPDEF;BuffMDEF=0.70*BuffMDEF}
//Silent Move
	if (d.gI("SMCHECK").checked==true)
		{var sm=d.gI("SM").value;BuffSPEED=BuffSPEED*0.6}
//Slow
	if (d.gI("DESPEEDCHECK").checked==true)
		{var despeed=d.gI("DESPEED").value;BuffSPEED=BuffSPEED*SLOW[despeed]}
//Snipe
	if (d.gI("SNIPECHECK").checked==true && WpnMAS=="Bow")
		{var snipe=d.gI("SNIPE").value;AddPATK=AddPATK+SNIPE[snipe];BuffACC=BuffACC+SNIPEACC[snipe];subcritical=subcritical+(basecritical*0.2)}
//Song of Earth
	if (d.gI("SOECHECK").checked==true)
		{BuffPDEF=1.25*BuffPDEF}
//Song of Hunter
	if (d.gI("SOHCHECK").checked==true)
		{subcritical=subcritical+(basecritical*1)}
//Song of Life
	if (d.gI("SONGOFLIFECHECK").checked==true)
		{BuffHPR=BuffHPR*1.2}
//Song of Meditation
	if (d.gI("SONGOFMEDCHECK").checked==true)
		{BuffMPR=BuffMPR*1.2}
//Song of Vitality
	if (d.gI("VITCHECK").checked==true)
		{BuffHP=1.3*BuffHP}
//Song of Warding
	if (d.gI("WARDCHECK").checked==true)
		{BuffMDEF=1.3*BuffMDEF}
//Song of Water
	if (d.gI("SWATCHECK").checked==true)
		{BuffEVA=BuffEVA+3}
//Song of Wind
	if (d.gI("SWINDCHECK").checked==true)
		{AddSPEED=AddSPEED+20}
//Soul Cry
	if (d.gI("SOUL1CHECK").checked==true)
		{var soul1=d.gI("SOUL1").value;AddPATK=AddPATK+SOULCRY[soul1]}
	if (d.gI("SOUL2CHECK").checked==true)
		{var soul2=d.gI("SOUL2").value;AddPATK=AddPATK+SOULCRY[soul2]}
	if (d.gI("SOUL3CHECK").checked==true)
		{var soul3=d.gI("SOUL3").value;AddPATK=AddPATK+SOULCRY[soul3]}
//Soul Guard
	if (d.gI("SGCHECK").checked==true)
		{var sg=d.gI("SG").value;AddPDEF=AddPDEF+SOULGUARD[sg]}
//Soul of Sagitarrius
	if (d.gI("SAGCHECK").checked==true)
		{var sag=d.gI("SAG").value;BuffMP=BuffMP*SOULOFSAG[sag]}
//Stealth
	if (d.gI("STEALTHCHECK").checked==true)
		{var stealth=d.gI("STEALTH").value
		BuffPATK=BuffPATK*0.55;
		BuffPDEF=BuffPDEF*STEALTH[stealth];
		BuffMDEF=BuffMDEF*STEALTH[stealth];
		BuffACC=BuffACC-12;
		BuffEVA=BuffEVA+STEALTHEVA[stealth]}
//Thrill Fight
	if (d.gI("TFCHECK").checked==true)
		{var tf=d.gI("TF").value;BuffSPEED=BuffSPEED*0.8;BuffASPD=BuffASPD*THRILLFIGHT[tf]}
//Totem
	var totem1=d.gI("TOTEM1").value
	if (totem1=="BEAR" && d.gI("TOTEM1CHECK").checked==true)
		{BuffSPEED=BuffSPEED*0.7}
	if (totem1=="BEAR" && d.gI("TOTEM1CHECK").checked==true && WpnMAS=="Fist")
		{BuffPATK=1.2*BuffPATK}
	else if (totem1=="WOLF" && d.gI("TOTEM1CHECK").checked==true)
		{BuffSPEED=BuffSPEED*1.2;BuffACC=BuffACC+3}
	var totem2=d.gI("TOTEM2").value
	if (totem2=="BEAR" && d.gI("TOTEM2CHECK").checked==true)
		{BuffSPEED=BuffSPEED*0.7}
	if (totem2=="BEAR" && d.gI("TOTEM2CHECK").checked==true && WpnMAS=="Fist")
		{BuffPATK=1.2*BuffPATK;BuffCRITDMG=BuffCRITDMG*1.2}
	else if (totem2=="BISON" && d.gI("TOTEM2CHECK").checked==true)
		{BuffPATK60=1.43*BuffPATK60;AddCRIT60=AddCRIT60+100;AddCRIT30=AddCRIT30+300;BuffACC=BuffACC+6}
	else if (totem2=="HAWK" && d.gI("TOTEM2CHECK").checked==true && WpnMAS=="Fist")
		{AddCRIT=AddCRIT+100;BuffACC=BuffACC+6;BuffCRITDMG=BuffCRITDMG*1.3}
	else if (totem2=="OGRE" && d.gI("TOTEM2CHECK").checked==true)
		{BuffMDEF=1.3*BuffMDEF;BuffPDEF=1.3*BuffPDEF;BuffEVA=BuffEVA-9;BuffSPEED=BuffSPEED*0.7}
	else if (totem2=="PUMA" && d.gI("TOTEM2CHECK").checked==true && WpnMAS=="Fist")
		{BuffACC=BuffACC+6;BuffASPD=BuffASPD*1.2}
	else if (totem2=="RABBIT" && d.gI("TOTEM2CHECK").checked==true)
		{BuffPATK=0.70*BuffPATK;BuffEVA=BuffEVA+12;BuffSPEED=BuffSPEED*1.3;BuffACC=BuffACC-9}
	else if (totem2=="WOLF" && d.gI("TOTEM2CHECK").checked==true)
		{BuffSPEED=BuffSPEED*1.2;BuffACC=BuffACC+3}
//Tribunal
	var tribunal=d.gI("TRIBUNAL").value
	if (d.gI("TRIBUNALCHECK").checked==true)
		{var tribunal=d.gI("TRIBUNAL").value;
		subcritical=subcritical+(basecritical*TRIBUNAL[tribunal])}
//Ultimate Defense
	if (d.gI("UD1CHECK").checked==true)
		{var ud1=d.gI("UD1").value
		AddPDEF=AddPDEF+UDPDEF[ud1]
		AddMDEF=AddMDEF+UDMDEF[ud1]}
	if (d.gI("UD2CHECK").checked==true)
		{var ud2=d.gI("UD2").value
		AddPDEF=AddPDEF+UDPDEF[ud2]
		AddMDEF=AddMDEF+UDMDEF[ud2]}
//Ultimate Evasion
	if (d.gI("UECHECK").checked==true)
		{var ue=d.gI("UE").value;BuffEVA=BuffEVA+UE[ue]}
//Vicious Stance
	if (d.gI("VICIOUSSTANCECHECK").checked==true)
		{var ue=d.gI("VICIOUSSTANCE").value;AddCRITDMG=AddCRITDMG+VICIOUSSTANCE[ue]}
//War Cry
	if (d.gI("WARCRY1CHECK").checked==true)
		{var warcry1=d.gI("WARCRY1").value;BuffPATK=BuffPATK*WARCRY[warcry1]}
	if (d.gI("WARCRY2CHECK").checked==true)
		{var warcry2=d.gI("WARCRY2").value;BuffPATK=BuffPATK*WARCRY[warcry2]}
//Wind Vortex
	if (d.gI("WVCHECK").checked==true)
		{var wv=d.gI("WV").value;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.9;BuffCAST=BuffCAST*0.7;AddMPR2=AddMPR2-12}
//Wind Walk
	if (d.gI("WWCHECK").checked==true)
		{var ww=d.gI("WW").value;AddSPEED=AddSPEED+WINDWALK[ww]}
//Zealot
	if (d.gI("ZEALOTCHECK").checked==true)
		{var zealot=d.gI("ZEALOT").value
		AddSPEED=AddSPEED+ZEALOTSPEED[zealot]}
	if (d.gI("ZEALOTCHECK").checked==true && (WpnType=="Fist"||WpnType=="2hb"||WpnType=="Blunt"))
		{var zealot=d.gI("ZEALOT").value
		BuffASPD=BuffASPD*ZEALOT[zealot]
		BuffACC=BuffACC+6
		BuffCRITDMG=BuffCRITDMG*ANGELICCRITDMG[zealot]}
	if (d.gI("ZEALOTCHECK").checked==true && JOB=="DE" && (WpnType=="Polearm"||WpnType=="2hs"||WpnType=="Sword"))
		{var zealot=d.gI("ZEALOT").value
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
if (d.gI("HMO1CHECK").checked==true && AType=="H"||d.gI("HMO2CHECK").checked==true && AType=="H"||d.gI("HMO3CHECK").checked==true && AType=="H")
	{BuffCAST=BuffCAST*1.71;BuffASPD=BuffASPD*1.25}
if (d.gI("LMO1CHECK").checked==true && AType=="L"||d.gI("LMO2CHECK").checked==true && AType=="L"||d.gI("LMO3CHECK").checked==true && AType=="L")
	{BuffCAST=BuffCAST*1.9;BuffASPD=BuffASPD*1.25}
if (d.gI("LMSCHECK").checked==true && AType=="L")
	{BuffCAST=BuffCAST*1.88;BuffASPD=BuffASPD*1.25}
if (d.gI("LMH1CHECK").checked==true && AType=="L"||d.gI("LMH2CHECK").checked==true && AType=="L")
	{BuffCAST=BuffCAST*1.91;BuffASPD=BuffASPD*1.25}
if (d.gI("HMPCHECK").checked==true && AType=="H")
	{BuffCAST=BuffCAST*1.68;BuffASPD=BuffASPD*1.25}

//Passives
//Weapon Mastery for Fighter Classes
	if (d.gI("WMFCHECK").checked==true)
		{var wmf=d.gI("WMF").value;AddPATK=AddPATK+WMF[wmf]}
//Weapon Mastery for Mystic Classes
	if (d.gI("WMM1CHECK").checked==true)
		{var wmm1=d.gI("WMM1").value
		AddPATK=AddPATK+WMMPATK[wmm1];
		AddMATK=AddMATK+WMMMATK[wmm1]}
	if (d.gI("WMM2CHECK").checked==true)
		{var wmm2=d.gI("WMM2").value
		AddPATK=AddPATK+WMMPATK[wmm2];
		AddMATK=AddMATK+WMMMATK[wmm2]}
	if (d.gI("WMM3CHECK").checked==true)
		{var wmm3=d.gI("WMM3").value
		AddPATK=AddPATK+WMMPATK[wmm3];
		AddMATK=AddMATK+WMMMATK[wmm3]}
//Sword/Blunt Mastery (Warrior)
	if (d.gI("WSBM1CHECK").checked==true && (WpnMAS=="Blunt"||WpnMAS=="Sword"))
		{var wsbm1=d.gI("WSBM1").value;AddPATK=AddPATK+MTYPE1[wsbm1]}
	if (d.gI("WSBM2CHECK").checked==true && (WpnMAS=="Blunt"||WpnMAS=="Sword"))
		{var wsbm2=d.gI("WSBM2").value;AddPATK=AddPATK+MTYPE1[wsbm2]}
//Blunt Mastery
	if (d.gI("BLUNTM1CHECK").checked==true && WpnMAS=="Blunt")
		{var bluntm1=d.gI("BLUNTM1").value
		AddPATK=AddPATK+MTYPE1[bluntm1];}
	if (d.gI("BLUNTM2CHECK").checked==true && WpnMAS=="Blunt")
		{var bluntm2=d.gI("BLUNTM2").value
		AddPATK=AddPATK+MTYPE1[bluntm2];}
	if (d.gI("BLUNTM2CHECK").checked==true)
		{var bluntm2=d.gI("BLUNTM2").value
		AddSPEED=AddSPEED+BLUNTMSPEED[bluntm2]
		AddCRITDMG=AddCRITDMG+BLUNTMCRITDAMAGE[bluntm2]}
//Polearm Mastery
	if (d.gI("POLEM1CHECK").checked==true && WpnMAS=="Polearm")
		{var polem1=d.gI("POLEM1").value;AddPATK=AddPATK+MTYPE1[polem1]}
	if (d.gI("POLEM2CHECK").checked==true && WpnMAS=="Polearm")
		{var polem2=d.gI("POLEM2").value;AddPATK=AddPATK+MTYPE1[polem2]}
//Fist Mastery
	if (d.gI("FISTM1CHECK").checked==true && WpnMAS=="Fist")
		{var fistm1=d.gI("FISTM1").value;AddPATK=AddPATK+MTYPE1[fistm1]}
	if (d.gI("FISTM2CHECK").checked==true && WpnMAS=="Fist")
		{var fistm2=d.gI("FISTM2").value;AddPATK=AddPATK+MTYPE1[fistm2]}
//Sword/Blunt Mastery (Knight)
	if  (d.gI("KSBM1CHECK").checked==true && (WpnMAS=="Sword"||WpnMAS=="Blunt"))
		{var ksbm1=d.gI("KSBM1").value;AddPATK=AddPATK+KNIGHTMASTERY[ksbm1]}
	if  (d.gI("KSBM2CHECK").checked==true && (WpnMAS=="Sword"||WpnMAS=="Blunt"))
		{var ksbm2=d.gI("KSBM2").value;AddPATK=AddPATK+KNIGHTMASTERY[ksbm2]}
//Dagger Mastery
	if (d.gI("DAGGERM1CHECK").checked==true && WpnMAS=="Dagger")
		{var daggerm1=d.gI("DAGGERM1").value;AddPATK=AddPATK+DAGGERM[daggerm1]}
	if (d.gI("DAGGERM2CHECK").checked==true && WpnMAS=="Dagger")
		{var daggerm2=d.gI("DAGGERM2").value;AddPATK=AddPATK+DAGGERM[daggerm2]}
//Bow Mastery
	if (d.gI("BOWM1CHECK").checked==true && WpnMAS=="Bow")
		{var bowm1=d.gI("BOWM1").value;AddPATK=AddPATK+BOWM[bowm1]}
	if (d.gI("BOWM2CHECK").checked==true && WpnMAS=="Bow")
		{var bowm2=d.gI("BOWM2").value;AddPATK=AddPATK+BOWM[bowm2]}
//Dual Weapon Mastery
	if (d.gI("DUALMCHECK").checked==true && WpnMAS=="Duals")
		{var dualm=d.gI("DUALM").value;AddPATK=AddPATK+DUALM[dualm]}
//Two Handed Weapon Mastery
	if (d.gI("THM1CHECK").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var thm1=d.gI("THM1").value
		AddPATK=AddPATK+THM[thm1];
		BuffACC=BuffACC+3}
	if (d.gI("THM2CHECK").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var thm2=d.gI("THM2").value
		AddPATK=AddPATK+THM[thm2];
		BuffACC=BuffACC+3}
//Armor Mastery (Fighter)
	if (d.gI("AMFCHECK").checked==true && AType=="L")
		{var amf=d.gI("AMF").value
		AddPDEF=AddPDEF+AMF[amf];
		BuffEVA=BuffEVA+AMFEVA[amf]}
	else if (d.gI("AMFCHECK").checked==true && AType!="L")
		{var amf=d.gI("AMF").value
		AddPDEF=AddPDEF+AMF[amf];}
//Armor Mastery (Mystic)
	if (d.gI("AMMCHECK").checked==true)
		{var amm=d.gI("AMM").value;AddPDEF=AddPDEF+AMM[amm]}
//Heavy Armor Mastery (Knight)
	if (d.gI("HMK1CHECK").checked==true && AType=="H")
		{var hmk1=d.gI("HMK1").value;AddPDEF=AddPDEF+HMK[hmk1]}
	if (d.gI("HMK2CHECK").checked==true && AType=="H")
		{var hmk2=d.gI("HMK2").value;AddPDEF=AddPDEF+HMK[hmk2]}
//Heavy Armor Mastery (Warrior)
	if (d.gI("HMW1CHECK").checked==true && AType=="H")
		{var hmw1=d.gI("HMW1").valueAddPDEF=AddPDEF+HMW[hmw1]}
	if (d.gI("HMW2CHECK").checked==true && AType=="H")
		{var hmw2=d.gI("HMW2").value;AddPDEF=AddPDEF+HMW[hmw2]}
//Heavy Armor Mastery (Orc Mystic)
	if (d.gI("HMO1CHECK").checked==true && AType=="H")
		{var hmo1=d.gI("HMO1").value;AddPDEF=AddPDEF+HMO[hmo1]}
	if (d.gI("HMO2CHECK").checked==true && AType=="H")
		{var hmo2=d.gI("HMO2").value;AddPDEF=AddPDEF+HMO[hmo2]}
	if (d.gI("HMO3CHECK").checked==true && AType=="H")
		{var hmo3=d.gI("HMO3").value;AddPDEF=AddPDEF+HMO[hmo3]}
//Heavy Armor Mastery (Prophet)
	if (d.gI("HMPCHECK").checked==true && AType=="H")
		{var hmp=d.gI("HMP").value;AddPDEF=AddPDEF+HMP[hmp]}
//Light Armor Mastery (Warrior)
	if (d.gI("LMW1CHECK").checked==true && AType=="L")
		{var lmw1=d.gI("LMW1").value
		AddPDEF=AddPDEF+LMW[lmw1]
		BuffEVA=BuffEVA+LMWEVA[lmw1]}
	if (d.gI("LMW2CHECK").checked==true && AType=="L")
		{var lmw2=d.gI("LMW2").value
		AddPDEF=AddPDEF+LMW[lmw2]
		BuffEVA=BuffEVA+LMWEVA[lmw2]}
//Light Armor Mastery (Rogue)
	if (d.gI("LMR1CHECK").checked==true && AType=="L")
		{var lmr1=d.gI("LMR1").value
		AddPDEF=AddPDEF+LMR[lmr1]
		BuffEVA=BuffEVA+LMREVA[lmr1]}
	if (d.gI("LMR2CHECK").checked==true && AType=="L")
		{var lmr2=d.gI("LMR2").value
		AddPDEF=AddPDEF+LMR[lmr2]
		BuffEVA=BuffEVA+LMREVA[lmr2]}
//Light Armor Mastery (Orc Mystic)
	if (d.gI("LMO1CHECK").checked==true && AType=="L")
		{var lmo1=d.gI("LMO1").value;AddPDEF=AddPDEF+LMO[lmo1];BuffMPR=BuffMPR*1.2}
	if (d.gI("LMO2CHECK").checked==true && AType=="L")
		{var lmo2=d.gI("LMO2").value;AddPDEF=AddPDEF+LMO[lmo2];BuffMPR=BuffMPR*1.2}
	if (d.gI("LMO3CHECK").checked==true && AType=="L")
		{var lmo3=d.gI("LMO3").value;AddPDEF=AddPDEF+LMO[lmo3];BuffMPR=BuffMPR*1.2}
//Light Armor Mastery (Healer)
	if (d.gI("LMH1CHECK").checked==true && AType=="L")
		{var lmh1=d.gI("LMH1").value;AddPDEF=AddPDEF+LMH[lmh1];BuffMPR=BuffMPR*1.2}
	if (d.gI("LMH2CHECK").checked==true && AType=="L")
		{var lmh2=d.gI("LMH2").value;AddPDEF=AddPDEF+LMH[lmh2];BuffMPR=BuffMPR*1.2}
//Light Armor Mastery (Summoner)
	if (d.gI("LMSCHECK").checked==true && AType=="L")
		{var lms=d.gI("LMS").value;AddPDEF=AddPDEF+LMS[lms];BuffMPR=BuffMPR*1.2}
//Robe Mastery (Nuker)
	if (d.gI("RMN1CHECK").checked==true && AType=="R")
		{var rmn1=d.gI("RMN1").value;AddPDEF=AddPDEF+RMN[rmn1]}
	if (d.gI("RMN2CHECK").checked==true && AType=="R")
		{var rmn2=d.gI("RMN2").value;AddPDEF=AddPDEF+RMN[rmn2]}
//Robe Mastery (Healer)
	if (d.gI("RMH1CHECK").checked==true && AType=="R")
		{var rmh1=d.gI("RMH1").value;AddPDEF=AddPDEF+RMH[rmh1]}
	if (d.gI("RMH2CHECK").checked==true && AType=="R")
		{var rmh2=d.gI("RMH2").value;AddPDEF=AddPDEF+RMH[rmh2]}
//Robe Mastery (Orc Mystic)
	if (d.gI("RMO1CHECK").checked==true && AType=="R")
		{var rmo1=d.gI("RMO1").value;AddPDEF=AddPDEF+RMO[rmo1]}
	if (d.gI("RMO2CHECK").checked==true && AType=="R")
		{var rmo2=d.gI("RMO2").value;AddPDEF=AddPDEF+RMO[rmo2]}
	if (d.gI("RMO3CHECK").checked==true && AType=="R")
		{var rmo3=d.gI("RMO3").value;AddPDEF=AddPDEF+RMO[rmo3]}
//Magic Resistance
	if (d.gI("MR1CHECK").checked==true)
		{var mr1=d.gI("MR1").value;AddMDEF=AddMDEF+MR[mr1]}
	if (d.gI("MR2CHECK").checked==true)
		{var mr2=d.gI("MR2").value;AddMDEF=AddMDEF+MR[mr2]}
//Anti-Magic
	if (d.gI("AM1CHECK").checked==true)
		{var am1=d.gI("AM1").value;AddMDEF=AddMDEF+AM[am1]}
	if (d.gI("AM2CHECK").checked==true)
		{var am2=d.gI("AM2").value;AddMDEF=AddMDEF+AM[am2]}
	if (d.gI("AM3CHECK").checked==true)
		{var am3=d.gI("AM3").value;AddMDEF=AddMDEF+AM[am3]}
//Aegis
	if (d.gI("AEGISCHECK").checked==true)
		{block360=true}
//Agile Movement
	if (d.gI("AGILEMOVEMENT1CHECK").checked==true && AType=="L")
		{var agilemovement1=d.gI("AGILEMOVEMENT1").value
		BuffACC=BuffACC+AGILEMOVEMENT[agilemovement1]
		AddSPEED=AddSPEED+AGILEMOVEMENTSPEED[agilemovement1]}
	if (d.gI("AGILEMOVEMENT2CHECK").checked==true && AType=="L")
		{var agilemovement2=d.gI("AGILEMOVEMENT2").value
		BuffACC=BuffACC+AGILEMOVEMENT[agilemovement2]
		AddSPEED=AddSPEED+AGILEMOVEMENTSPEED[agilemovement2]}
//Boost Attack Speed
	if (d.gI("BOOSTASPD1CHECK").checked==true)
		{var boostaspd1=d.gI("BOOSTASPD1").value;BuffASPD=BuffASPD*BOOSTASPD[boostaspd1]}
	if (d.gI("BOOSTASPD2CHECK").checked==true)
		{var boostaspd2=d.gI("BOOSTASPD2").value;BuffASPD=BuffASPD*BOOSTASPD[boostaspd2]}
//Boost Evasion
	if (d.gI("BOOSTEVASION1CHECK").checked==true)
		{var boostevasion1=d.gI("BOOSTEVASION1").value;BuffEVA=BuffEVA+BOOSTEVASION[boostevasion1]}
	if (d.gI("BOOSTEVASION2CHECK").checked==true)
		{var boostevasion2=d.gI("BOOSTEVASION2").value;BuffEVA=BuffEVA+BOOSTEVASION[boostevasion2]}
//Boost HP
	if (d.gI("BOOSTHP1CHECK").checked==true)
		{var boosthp1=d.gI("BOOSTHP1").value
		AddHP=AddHP+BOOSTHP[boosthp1]
		AddCP=AddCP+BOOSTHPCP[boosthp1]}
	if (d.gI("BOOSTHP2CHECK").checked==true)
		{var boosthp2=d.gI("BOOSTHP2").value
		AddHP=AddHP+BOOSTHP[boosthp2]
		AddCP=AddCP+BOOSTHPCP[boosthp2]}
	if (d.gI("BOOSTHP3CHECK").checked==true)
		{var boosthp3=d.gI("BOOSTHP3").value
		AddHP=AddHP+BOOSTHP[boosthp3]
		AddCP=AddCP+BOOSTHPCP[boosthp3]}
//Boost Mana
	if (d.gI("BOOSTMP1CHECK").checked==true)
		{var boostmp1=d.gI("BOOSTMP1").value;AddMP=AddMP+BOOSTMP[boostmp1]}
	if (d.gI("BOOSTMP2CHECK").checked==true)
		{var boostmp2=d.gI("BOOSTMP2").value;AddMP=AddMP+BOOSTMP[boostmp2]}
//Clan Aegis
	if (d.gI("CLANPDEFCHECK").checked==true)
		{var clanpdef=d.gI("CLANPDEF").value;BuffPDEF=BuffPDEF*CLANMULTIPLY[clanpdef]}
//Clan Guidance
	if (d.gI("CLANGUIDANCECHECK").checked==true)
		{var clanguidance=d.gI("CLANGUIDANCE").value;BuffACC=BuffACC+CLANADDB[clanguidance]}
//Clan Magic Protection
	if (d.gI("CLANMDEFCHECK").checked==true)
		{var clanmdef=d.gI("CLANMDEF").value;BuffMDEF=BuffMDEF*CLANMULTIPLYB[clanmdef]}
//Clan March
	if (d.gI("CLANSPEEDCHECK").checked==true)
		{var clanspeed=d.gI("CLANSPEED").value;AddSPEED=AddSPEED+CLANADD[clanspeed]}
//Clan Might
	if (d.gI("CLANPATKCHECK").checked==true)
		{var clanpatk=d.gI("CLANPATK").value;BuffPATK=BuffPATK*CLANMULTIPLY[clanpatk]}
//Clan Spirituality
	if (d.gI("CLANCPCHECK").checked==true)
		{var clancp=d.gI("CLANCP").value;BuffCP=BuffCP*CLANMULTIPLYB[clancp]}
//Clan Vitality
	if (d.gI("CLANHPCHECK").checked==true)
		{var clanhp=d.gI("CLANHP").value;BuffHP=BuffHP*CLANMULTIPLY[clanhp]}
//Clear Mind
	if (d.gI("CLEARMINDCHECK").checked==true && movemode==1)
		{var clearmind=d.gI("CLEARMIND").value;AddMPR=AddMPR+CLEARMINDWALK[clearmind]}
	if (d.gI("CLEARMINDCHECK").checked==true && movemode==1.1)
		{var clearmind=d.gI("CLEARMIND").value;AddMPR=AddMPR+CLEARMINDSTAND[clearmind]}
//Critical Chance
	if (d.gI("CRITICALCHANCE1CHECK").checked==true)
		{var criticalchance1=d.gI("CRITICALCHANCE1").value;subcritical=subcritical+(basecritical*CRITICALCHANCE[criticalchance1])}
	if (d.gI("CRITICALCHANCE2CHECK").checked==true)
		{var criticalchance2=d.gI("CRITICALCHANCE2").value;subcritical=subcritical+(basecritical*CRITICALCHANCE[criticalchance2])}
//Critical Power
	if (d.gI("CRITICALPOWER1CHECK").checked==true)
		{var bu=d.gI("CRITICALPOWER1").value;AddCRITDMG=AddCRITDMG+CRITICALPOWER[bu]}
	if (d.gI("CRITICALPOWER2CHECK").checked==true)
		{var bu=d.gI("CRITICALPOWER2").value;AddCRITDMG=AddCRITDMG+CRITICALPOWER[bu]}
//Esprit
	if (d.gI("ESPRIT1CHECK").checked==true && movemode==0.7)
		{var esprit=d.gI("ESPRIT1").value;AddHPR=AddHPR+ESPRITHP[esprit];AddMPR=AddMPR+ESPRITMP[esprit]}
	if (d.gI("ESPRIT2CHECK").checked==true && movemode==0.7)
		{var esprit=d.gI("ESPRIT2").value;AddHPR=AddHPR+ESPRITHP[esprit];AddMPR=AddMPR+ESPRITMP[esprit]}
//Fast HP Recovery
	if (d.gI("FASTHPRECOVERY1CHECK").checked==true)
		{var fastcast1=d.gI("FASTHPRECOVERY1").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
	if (d.gI("FASTHPRECOVERY2CHECK").checked==true)
		{var fastcast1=d.gI("FASTHPRECOVERY2").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
	if (d.gI("FASTHPRECOVERY3CHECK").checked==true)
		{var fastcast1=d.gI("FASTHPRECOVERY3").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
	if (d.gI("FASTHPRECOVERY4CHECK").checked==true)
		{var fastcast1=d.gI("FASTHPRECOVERY4").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
//Fast Mana Recovery
	if (d.gI("FASTMANARECOVERY1CHECK").checked==true)
		{var fastcast1=d.gI("FASTMANARECOVERY1").value;AddMPR=AddMPR+(FASTMANARECOVERY[fastcast1]*movemode)}
	if (d.gI("FASTMANARECOVERY2CHECK").checked==true)
		{var fastcast1=d.gI("FASTMANARECOVERY2").value;AddMPR=AddMPR+(FASTMANARECOVERY[fastcast1]*movemode)}
//Fast Spell Casting
	if (d.gI("FASTCAST1CHECK").checked==true)
		{var fastcast1=d.gI("FASTCAST1").value;BuffCAST=BuffCAST*FASTCAST[fastcast1]}
	if (d.gI("FASTCAST2CHECK").checked==true)
		{var fastcast2=d.gI("FASTCAST2").value;BuffCAST=BuffCAST*FASTCAST[fastcast2]}
//Final Fortress
	if (d.gI("FINALFORTRESSCHECK").checked==true)
		{var finalfortress=d.gI("FINALFORTRESS").value;AddPDEF30=AddPDEF30+FINALFORTRESS[finalfortress]}
//Final Frenzy
	if (d.gI("FINALFRENZYCHECK").checked==true)
		{var finalfrenzy=d.gI("FINALFRENZY").value;AddPATK30=AddPATK30+FINALFRENZY[finalfrenzy]}
//Focus Mind
	if (d.gI("FOCUSMIND1CHECK").checked==true)
		{var fastcast1=d.gI("FOCUSMIND1").value;AddMPR=AddMPR+(FOCUSMIND[fastcast1]*movemode)}
	if (d.gI("FOCUSMIND2CHECK").checked==true)
		{var fastcast1=d.gI("FOCUSMIND2").value;AddMPR=AddMPR+(FOCUSMIND[fastcast1]*movemode)}
//Quick Step
	if (d.gI("QUICKSTEP1CHECK").checked==true)
		{var quickstep1=d.gI("QUICKSTEP1").value;AddSPEED=AddSPEED+QUICKSTEP[quickstep1]}
	if (d.gI("QUICKSTEP2CHECK").checked==true)
		{var quickstep2=d.gI("QUICKSTEP2").value;AddSPEED=AddSPEED+QUICKSTEP[quickstep2]}
//Quiver of Holding
	if (d.gI("QUIVEROFHOLDINGCHECK").checked==true)
		{var quiverofholding=d.gI("QUIVEROFHOLDING").value;weightlimit=weightlimit*QUIVEROFHOLDING[quiverofholding]}
//Seal of Strife
	if (d.gI("SEALOFSTRIFECHECK").checked==true)
		{var sealofstrife=d.gI("SEALOFSTRIFE").value;BuffCP=BuffCP*SEALOFSTRIFE[sealofstrife]}
//Shadow Sense
	if (d.gI("SHADOWSENSECHECK").checked==true)
		{BuffACC=BuffACC+3}
//Shield Mastery
	if (d.gI("SHIELDMASTERY1CHECK").checked==true)
		{var shieldmastery1=d.gI("SHIELDMASTERY1").value;ShieldBlockRate=ShieldBlockRate*SHIELDMASTERY[shieldmastery1]}
	if (d.gI("SHIELDMASTERY2CHECK").checked==true)
		{var shieldmastery2=d.gI("SHIELDMASTERY2").value;ShieldBlockRate=ShieldBlockRate*SHIELDMASTERY[shieldmastery2]}
//Vital Force
	if (d.gI("VITALFORCE1CHECK").checked==true && movemode==1.5)
		{var fastcast1=d.gI("VITALFORCE1").value;AddHPR=AddHPR+VITALFORCEHP[fastcast1]*CONMOD;AddMPR=AddMPR+VITALFORCEMP[fastcast1]}
	if (d.gI("VITALFORCE2CHECK").checked==true && movemode==1.5)
		{var fastcast1=d.gI("VITALFORCE2").value;AddHPR=AddHPR+VITALFORCEHP[fastcast1]*CONMOD;AddMPR=AddMPR+VITALFORCEMP[fastcast1]}
//Weight Limit
	if (d.gI("WEIGHTLIMIT1CHECK").checked==true)
		{var weightlimit1=d.gI("WEIGHTLIMIT1").value;weightlimit=weightlimit*WEIGHTLIMIT[weightlimit1]}
	if (d.gI("WEIGHTLIMIT2CHECK").checked==true)
		{var weightlimit2=d.gI("WEIGHTLIMIT2").value;weightlimit=weightlimit*WEIGHTLIMIT[weightlimit2]}
	if (d.gI("WEIGHTLIMIT3CHECK").checked==true)
		{var weightlimit3=d.gI("WEIGHTLIMIT3").value;weightlimit=weightlimit*WEIGHTLIMIT[weightlimit3]}

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
if (d.gI("WMM1CHECK").checked==true||d.gI("WMM2CHECK").checked==true||d.gI("WMM3CHECK").checked==true)
	{MasteryPATK=1.45}
else if (d.gI("WMFCHECK").checked==true)
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
if (d.gI("WMM1CHECK").checked==true||d.gI("WMM2CHECK").checked==true||d.gI("WMM3CHECK").checked==true)
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
d.gI("SHIELDPDEF").innerHTML=shieldpdef2

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
{d.gI("MDEF").innerHTML=mdef2;combatmdef=mdef}
else if (d.gI("HP6").checked==true)
{d.gI("MDEF").innerHTML=mdef602;combatmdef=mdef60}
else if (d.gI("HP3").checked==true)
{d.gI("MDEF").innerHTML=mdef302;combatmdef=mdef30}

//Accuracy Calculation
var Accuracy=(Math.sqrt(DEX)*6)+LVL+WpnAcc+RINGOFQUEENACC+RINGOFBAIUMACC+RINGOFCOREACC+BuffACC
var Accuracy2=Math.floor(Accuracy)
var Accuracy60=Accuracy2+BuffACC60
var Accuracy602=Math.floor(Accuracy60)
var Accuracy30=Accuracy2+BuffACC30+BuffACC60
var Accuracy302=Math.floor(Accuracy30)
d.gI("ACCURACY").innerHTML=Accuracy2
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
{d.gI("EVASION").innerHTML=Evasion2;combatevasion=Evasion}
else if (d.gI("HP6").checked==true)
{d.gI("EVASION").innerHTML=Evasion602;combatevasion=Evasion60}
else if (d.gI("HP3").checked==true)
{d.gI("EVASION").innerHTML=Evasion302;combatevasion=Evasion30}

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

//Shield Block Rate
ShieldBlockRate=ShieldBlockRate*DEXMOD
if ((position==4||position==5) && block360==false)
	{ShieldBlockRate=0}
if (ShieldBlockRate>=1)
	{ShieldBlockRate=1}
var shieldblockrate=Math.floor(ShieldBlockRate*100)+"%"
d.gI("SHIELDBLOCKRATE").innerHTML=shieldblockrate
var avgshieldpdef=shieldpdef*ShieldBlockRate+pdef*(1-ShieldBlockRate)
var avgshieldpdef2=Math.floor(avgshieldpdef)
d.gI("AVGSHIELDPDEF").innerHTML=avgshieldpdef2

//Weight Limit
var weightlimit2=weightlimit*CONMOD
d.gI("WEIGHTLIMIT").innerHTML=Math.floor(weightlimit2)
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
var hpregen=basehpregen*CONMOD*LVLMOD*BuffHPR*movemode+AddHPR
var hpregen2=Math.floor(hpregen*10)/10
d.gI("HPREGEN").innerHTML=hpregen2
var cpregen=basecpregen*CONMOD*LVLMOD*BuffCPR*movemode+AddCPR
var cpregen2=Math.floor(cpregen*10)/10
d.gI("CPREGEN").innerHTML=cpregen2
var mpregen=(basempregen*MENMOD*LVLMOD*BuffMPR*movemode+AddMPR)*BuffMPR2+AddMPR2
var mpregen2=Math.floor(mpregen*10)/10
d.gI("MPREGEN").innerHTML=mpregen2

////////////////////Damage Calculations
//Enemy Stats
var targettype="player"
var Ecombatpatk=500*2
var Ecombatpdef=1000
var Eshieldpdef=1500
var EShieldBlockRate=0.40
var Eavgshieldpdef=1200
var Eblock360=false
var Ecombatcritical=220
var Ecombatatkspd=500
var Eranddmg=1.1

if (d.gI("SOULSHOTS").checked==true)
	{combatpatk=combatpatk*2}

if ((position==2||position==3) && Eblock360==false)
	{var EShieldBlockRate=0}

if (((weapongrade=="S"||weapongrade=="A") && weapon_sa!="no SA" && targettype=="player")||weapongrade=="H" && targettype=="player")
	{combatpatk=combatpatk*1.05}

if (WpnMAS=="Bow")
	{EShieldBlockRate=EShieldBlockRate*3
	if (EShieldBlockRate>=1)
		{EShieldBlockRate=1}
	}

//Base Damage
if (WpnMAS=="Fist"||WpnMAS=="Duals")
	{var combatpatk=combatpatk/2}
var basedmg=combatpatk*70/Ecombatpdef
var Ebasedmg=Ecombatpatk*70/combatpdef

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
if ((position==1 && EShieldBlockRate!=0)||((position==2||position==3) && block360==true && EShieldBlockRate!=0))
	{var shieldblockdmg=combatpatk*70/Eshieldpdef
	var shieldblockdmg2=Math.floor(shieldblockdmg)
	if (shieldblockdmg2==0) {shieldblockdmg2=1}}
else
	{var shieldblockdmg2=0;var shieldblockdmg=0}
if ((position==1 && ShieldBlockRate!=0)||((position==4||position==5) && block360==true && ShieldBlockRate!=0))
	{var Eshieldblockdmg=Ecombatpatk*70/shieldpdef
	var Eshieldblockdmg2=Math.floor(Eshieldblockdmg)
	if (Eshieldblockdmg2==0) {Eshieldblockdmg2=1}}
else
	{var Eshieldblockdmg2=0;var Eshieldblockdmg=0}

//Shield Block Min/Max Damage
if ((position==1 && EShieldBlockRate!=0)||((position==2||position==3) && Eblock360==true && EShieldBlockRate!=0))
	{var shieldmindmg=(combatpatk*70/Eshieldpdef)/randdmg
	var shieldmindmg2=Math.floor(shieldmindmg)
	if (shieldmindmg2==0) {shieldmindmg2=1}
	var shieldmaxdmg=(combatpatk*70/Eshieldpdef)*randdmg
	var shieldmaxdmg2=Math.floor(shieldmaxdmg)
	if (shieldmaxdmg2==0) {shieldmaxdmg2=1}
	d.gI("SHIELDDMGRNG").innerHTML=(shieldmindmg2+"-"+shieldmaxdmg2)}
else
	{var shieldmindmg2=0;var shieldmaxdmg2=0;var shieldmindmg=0;var shieldmaxdmg=0
	d.gI("SHIELDDMGRNG").innerHTML=("-")}


if ((position==1 && ShieldBlockRate!=0)||((position==4||position==5) && block360==true && ShieldBlockRate!=0))
	{var Eshieldmindmg=(Ecombatpatk*70/shieldpdef)/randdmg
	var Eshieldmindmg2=Math.floor(Eshieldmindmg)
	if (Eshieldmindmg2==0) {Eshieldmindmg2=1}
	var Eshieldmaxdmg=(Ecombatpatk*70/shieldpdef)*randdmg
	var Eshieldmaxdmg2=Math.floor(Eshieldmaxdmg)
	if (Eshieldmaxdmg2==0) {Eshieldmaxdmg2=1}
	d.gI("ESHIELDDMGRNG").innerHTML=(Eshieldmindmg2+"-"+Eshieldmaxdmg2)}
else
	{var Eshieldmindmg2=0;var Eshieldmaxdmg2=0;var Eshieldmindmg=0;var Eshieldmaxdmg=0
	d.gI("ESHIELDDMGRNG").innerHTML=("-")}

//Critical hits
if (position==1)
	{var critchance=(combatcritical/10)*BuffCOMBATCRIT
	if (critchance>=100)
		{critchance=100}
	var critchance2=Math.floor(critchance*10)/10}
else if (position==2)
	{var critchance=(combatcritical/10)*1.2*BuffCOMBATCRIT
	if (critchance>=100)
		{critchance=100}
	var critchance2=Math.floor(critchance*10)/10}
else if (position==3)
	{var critchance=(combatcritical/10)*1.4*BuffCOMBATCRIT+(backcritical/10)
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

var critdmg=basedmg*2*BuffCRITDMG*RINGOFBAIUMCRITDMG*RINGOFQUEENCRITDMG+(AddCRITDMG*70/Ecombatpdef)
var sbcritdmg=shieldblockdmg*2*BuffCRITDMG*RINGOFBAIUMCRITDMG*RINGOFQUEENCRITDMG+(AddCRITDMG*70/Eshieldpdef)
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
	{var Ecritdmg=Ebasedmg*2
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
	{var Esbcritdmg=Eshieldblockdmg*2
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
	var Ehitspersecond2=Math.floor(Ehitspersecond*100)/100
	d.gI("EHITSPERSECOND").innerHTML=(Ehitspersecond2)}
else
	{var Ehitspersecond=0;var Ehitspersecond2=0;
	d.gI("EHITSPERSECOND").innerHTML=("-")}

//Damage Per Second
if (position>=1 && position<=3)
	{var avgdmg=(basedmg*(1-EShieldBlockRate)*(1-(critchance/100))+shieldblockdmg*EShieldBlockRate*(1-(critchance/100))+critdmg*(1-EShieldBlockRate)*(critchance/100)+sbcritdmg*EShieldBlockRate*(critchance/100))*hitspersecond
	var avgdmg2=Math.floor(avgdmg*10)/10
	if (avgdmg2==0) {avgdmg2=1}}
else {var avgdmg2=0}
d.gI("AVGDMG").innerHTML=avgdmg2
if (position==1||position==4||position==5)
	{var Eavgdmg=(Ebasedmg*(1-ShieldBlockRate)*(1-(Ecritchance/100))+Eshieldblockdmg*ShieldBlockRate*(1-(Ecritchance/100))+Ecritdmg*(1-ShieldBlockRate)*(Ecritchance/100)+Esbcritdmg*ShieldBlockRate*(Ecritchance/100))*Ehitspersecond
	var Eavgdmg2=Math.floor(Eavgdmg*10)/10
	if (Eavgdmg2==0) {Eavgdmg2=1}}
else
	{var Eavgdmg2=0}
d.gI("EAVGDMG").innerHTML=Eavgdmg2

//d.gI("TEST").innerHTML=shieldblockdmg
}

}
</script>

<!-- -->
<script>
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
var ACUMEN=new Array(0,1.15,1.23,1.3)
var ADVANCEDBLOCK=new Array(0,1.6,1.8,2)
var AGILITY=new Array(0,2,3,4)
var ANGELICASPD=new Array(0,1.1,1.2,1.3)
var ANGELICCRIT=new Array(0,33,66,100)
var ANGELICCRITDMG=new Array(0,1.33,1.66,2)
var ANGELICSPEED=new Array(0,10,20,30)
var BLESSSHIELD=new Array(0,1.3,1.4,1.5,1.6,1.7,1.8)
var BTB=new Array(0,1.1,1.15,1.2,1.25,1.3,1.35)
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
var DEADEYEACC=new Array(0,1,1,2,2,2,3,3)
var DEADEYEPATK=new Array(0,124,134,145,155,166,177,188)
var DEASPD=new Array(0,0.83,0.8,0.77)
var DEATHWHISPER=new Array(0,1.3,1.4,1.5)
var DECREASEWEIGHT=new Array(0,3000,6000,9000)
var DEMONICBD=new Array(0,0.9,0.85,0.8,0.75,0.7)
var DUELIST=new Array(0,1.08,1.12)
var EMPOWER=new Array(0,1.55,1.65,1.75,1.44)
var ESPRITHP=new Array(0,2.5,3,3.5,4,4.5,5,5.5,6)
var ESPRITMP=new Array(0,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5)
var FASTHPRECOVERY=new Array(0,1.1,1.6,1.7,2.1,2.6,2.7,3.4,4)
var FASTMANARECOVERY=new Array(0,1.1,1.5,1.9,2.3,2.7,3.1,3.4)
var FOCUS=new Array(0,0.2,0.25,0.3)
var FOCUSATTACK=new Array(0,3,3,4,5)
var FOCUSMIND=new Array(0,1.1,1.5,1.9,2.3,2.7,3.1)
var FRENZY=new Array(0,2,2.5,3)
var FRENZY2HS=new Array(0,2.502,2.994,4.0195)
var FRENZY2HSACC=new Array(0,4,4,6)
var FRENZYPOLE=new Array(0,2,1,3.46)
var FRENZYOTHER=new Array(0,1,1,1.50)
var GREATERMIGHT=new Array(0,1.04,1.07,1.10)
var GREATERSHIELD=new Array(0,1.05,1.10,1.15)
var GUARDSTANCE=new Array(0,121.8,161.1,212.1,256.5,259.4,262.3,265.2,268.1,271,274,276.9,279.8,282.7,285.6,288.5,291.5,294.4,297.3,300.2,303.1,306,309,311.9,314.8,317.7,320.6,323.5,326.5,329.4,332.3,335.2,338.1,341,344)
var GUIDANCE=new Array(0,2,3,4)
var GUTS=new Array(0,2,2.5,3)
var HASTE=new Array(0,1.15,1.33)
var HAWKEYE=new Array(0,6,8,10)
var HEX=new Array(0,0.77)
var HSCHOLACC=new Array(0,3,6,8,10,6,0,0,0,0,0)
var HSCHOLEVA=new Array(0,0,-3,-3,-3,-5,-5,-5,-8,-9,-10)
var HSMALARIA=new Array(0,1.04,1.08,1.12,1.16,1.08,1,1,1,1,1)
var JUDGMENT=new Array(0,0.75,0.7,0.65)
var MAGICBARRIER=new Array(0,1.15,1.23,1.3)
var MAJESTY=new Array(0,1.07,1.11,1.15)
var MAJESTYEVA=new Array(0,-2,-4,-6)
var MANAREGEN=new Array(0,1.72,2.16,2.74,3.09)
var MIGHT=new Array(0,1.08,1.12,1.15,1.25)
var POLEACC=new Array(0,2,3,4)
var PROPHECYHP=new Array(0,1.2,1.2,1,1)
var PROPHECYPATK=new Array(0,1.1,1.1,1,1)
var PROPHECYMATK=new Array(0,1.2,1,1.2,1)
var PROPHECYPDEF=new Array(0,1.2,1.2,1,1)
var PROPHECYMDEF=new Array(0,1.2,1,1.2,1)
var PROPHECYACC=new Array(0,4,4,0,4)
var PROPHECYEVA=new Array(0,0,0,0,4)
var PROPHECYSPEED=new Array(0,0.8,0.9,0.8,1)
var PROPHECYCRIT=new Array(0,0.2,0,0,0)
var PROPHECYCRITDMG=new Array(0,1.2,1,1,1)
var PROPHECYASPD=new Array(0,1.2,1.2,1,1.2)
var PROPHECYCAST=new Array(0,1.2,1,1.2,1)
var PROPHECYHPR=new Array(0,1,1.2,1,1)
var PROPHECYMPR=new Array(0,1,1,1.2,1)
var PSYCHO=new Array(0,0.9,0.85,0.8,0.75,0.7)
var QUIVEROFHOLDING=new Array(0,1.3,1.4,1.5)
var RAGE=new Array(0,1.452,1.55)
var RAGE2HS=new Array(0,1.554,1.64085)
var RAGE2HSACC=new Array(0,2,4)
var RAGEOTHER=new Array(0,1,1.2)
var RAPIDFIRE=new Array(0,62,67,73,78,83,89,94,100)
var RAPIDSHOT=new Array(0,1.08,1.12)
var REGENERATION=new Array(0,1.1,1.15,1.2)
var SANDBOMB=new Array(0,-6,-9,-12)
var SERAPHIM=new Array(0,1.3,1.32,1.35)
var SHIELD=new Array(0,1.08,1.12,1.15)
var SHIELDFORTRESS=new Array(0,446,469,491,514,537,560,565,569,573,577,582,586,590,594,599,603,607,611,616,620,624,628,632,637,641,645,649,654,658,662,666,671,675,679,683,688)
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
var VICIOUSSTANCE=new Array(0,35,48,64,84,109,139,166,196,229,266,306,349,379,410,443,475,509,542,576,609)
var VITALFORCEHP=new Array(0,1.9,2.7,2.9,3.6,4.5,4.7,5.6,6.7)
var VITALFORCEMP=new Array(0,0.9,1.1,1.2,1.5,1.7,1.8,2.1,2.5)
var WARCRY=new Array(0,1.2,1.25)
var WEAKNESS=new Array(0,0.83,0.8,0.77)
var WEIGHTLIMIT=new Array(0,2,3,4)
var WINDWALK=new Array(0,20,33)
var ZEALOT=new Array(0,1.1,1.2,1.3)
var ZEALOTCRIT=new Array(0,33,66,100)
var ZEALOTSPEED=new Array(0,10,20,30)
var ZERK=new Array(0,1.05,1.08)
var ZERKMATK=new Array(0,1.1,1.16)
var ZERKMDEF=new Array(0,0.9,0.84)
var ZERKPDEF=new Array(0,0.95,0.92)
var ZERKSPEED=new Array(0,5,8)
var ZERKEVA=new Array(0,-2,-4)

//Weapon
var WEAPON=new Array()
WEAPON[0]=new Array(4,6,"unequipped","no SA",0,"",0,"",0,"",0,"",0,"",0,"",0,"",0,"",0,"",0)
WEAPON[1]=new Array(246,132,"Dagger","no SA",0,"Critical Damage",265,"Haste",1.07,"HP Drain",0,"",0,"",0)
WEAPON[2]=new Array(225,175,"Blunt","no SA",0,"Acumen",1.15,"Mana Up",1.3,"MP Regeneration",0,"",0)
WEAPON[3]=new Array(281,132,"Blunt","no SA",0,"Health",0,"HP Drain",0,"HP Regeneration",0,"",0)
WEAPON[4]=new Array(342,132,"Fist","no SA",0,"Crt. Stun",0,"Focus",80.6,"Health",0,"",0)
WEAPON[5]=new Array(581,132,"Bow","no SA",0,"Cheap Shot",0,"Critical Slow",0,"Focus",88.1,"",0)
WEAPON[6]=new Array(342,132,"2hb","no SA",0,"Health",0,"HP Drain",0,"HP Regeneration",0,"",0)
WEAPON[7]=new Array(281,132,"Sword","no SA",0,"Focus",84.3,"Haste",1.07,"Health",0,"",0)
WEAPON[8]=new Array(342,132,"2hs","no SA",0,"Focus",84.3,"Haste",1.07,"Health",0,"",0)
WEAPON[9]=new Array(274,175,"2hb","no SA",0,"Empower",60.09,"Magic Hold",0,"MP Regeneration",0,"",0)
WEAPON[10]=new Array(281,132,"Polearm","no SA",0,"Guidance",5.27,"Haste",1.07,"Health",0,"",0)
WEAPON[11]=new Array(342,132,"Duals","HP/CP/MP",0)
WEAPON[12]=new Array(259,107,"Fist","no SA",0,"Anger",38,"Focus",61.6,"Haste",1.06,"",0)
WEAPON[13]=new Array(186,107,"Dagger","no SA",0,"Back Blow",370,"Critical Bleed",0,"Focus",67.3,"",0)
WEAPON[14]=new Array(226,152,"2hb","no SA",0,"Acumen",0,"Conversion",0,"Magic Damage",0,"",0)
WEAPON[15]=new Array(440,107,"Bow","no SA",0,"Critical Bleed",0,"Light",0,"Mana Up",0,"",0)
WEAPON[16]=new Array(282,114,"Duals","Guidance",6.5)
WEAPON[17]=new Array(232,114,"Sword","no SA",0,"Critical Damage",326.28,"Health",0,"Rsk. Focus",130.9,"",0)
WEAPON[18]=new Array(207,143,"2hb","no SA",0,"Acumen",0,"Conversion",0,"Mana Up",0,"",0)
WEAPON[19]=new Array(259,107,"2hb","no SA",0,"Critical Drain",0,"Haste",1.06,"Health",0,"",0)
WEAPON[20]=new Array(282,114,"2hb","no SA",0,"Anger",32,"Health",0,"Rsk. Haste",1.11,"",0)
WEAPON[21]=new Array(282,114,"Fist","no SA",0,"Guidance",5.41,"Health",0,"Rsk. Evasion",6.8,"",0)
WEAPON[22]=new Array(282,114,"2hs","no SA",0,"Critical Bleed",0,"Critical Drain",0,"Health",0,"",0)
WEAPON[23]=new Array(170,143,"Sword","no SA",0,"Empower",30.76,"Magic Paralyze",0,"Magic Power",153.28,"",0)
WEAPON[24]=new Array(232,114,"Blunt","no SA",0,"Anger",32.05,"Critical Drain",0,"Health",0,"",0)
WEAPON[25]=new Array(186,152,"Blunt","no SA",0,"Acumen",0,"Magic Power",167,"Magic Silence",0,"",0)
WEAPON[26]=new Array(213,107,"Polearm","no SA",0,"Critical Stun",0,"Haste",1.06,"Wide Blow",0,"",0)
WEAPON[27]=new Array(259,107,"2hs","no SA",0,"Critical Damage",297,"Focus",61.6,"Haste",1.06,"",0)
WEAPON[28]=new Array(275,112,"Duals","Health",0)
WEAPON[29]=new Array(259,107,"Duals","Haste",1.08)
WEAPON[30]=new Array(213,107,"Blunt","no SA",0,"Critical Bleed",0,"Focus",61.6,"Rsk. Haste",1.11,"",0)
WEAPON[31]=new Array(528,125,"YumiBow","no SA",0,"Cheap Shot",0,"Critical Poison",0,"Quick Recovery",0.85,"",0)
WEAPON[32]=new Array(203,114,"Dagger","no SA",0,"Critical Damage",200.79,"Guidance",3.95,"Rsk. Haste",1.11,"",0)
WEAPON[33]=new Array(170,143,"Blunt","no SA",0,"Acumen",0,"Magic Poison",0,"Mana Up",0,"",0)
WEAPON[34]=new Array(186,152,"Sword","no SA",0,"Acumen",0,"Magic Power",167.02,"Magic Silence",0,"",0)
WEAPON[35]=new Array(213,107,"Sword","no SA",0,"Anger",31.3,"Critical Poison",0,"Haste",1.06,"",0)
WEAPON[36]=new Array(232,114,"Polearm","no SA",0,"Guidance",3.95,"Health",0,"Wide Blow",0,"",0)
WEAPON[37]=new Array(194,99,"Blunt","no SA",0,"Haste",1.06,"Health",0,"Rsk. Focus",99.9,"",0)
WEAPON[38]=new Array(213,91,"Fist","no SA",0,"Critical Poison",0,"Rsk. Evasion",6.24,"Rsk. Haste",1.1,"",0)
WEAPON[39]=new Array(236,99,"Fist","no SA",0,"Critical Drain",0,"Critical Poison",0,"Rsk. Haste",1.09,"",0)
WEAPON[40]=new Array(400,99,"Bow","no SA",0,"Cheap Shot",0,"Guidance",3.95,"Quick Recovery",0.8733,"",0)
WEAPON[41]=new Array(397,99,"YumiBow","no SA",0,"Critical Bleed",0,"Evasion",2.41,"Miser",0,"",0)
WEAPON[42]=new Array(194,99,"Blunt","no SA",0,"Anger",30.12,"Haste",1.06,"Health",0,"",0)
WEAPON[43]=new Array(170,99,"Dagger","no SA",0,"Critical Bleed",0,"Critical Damage",159.93,"Critical Poison",0,"Might Mortal",0)
WEAPON[44]=new Array(175,91,"Polearm","no SA",0,"Anger",28.59,"Critical Stun",0,"Light",0,"",0)
WEAPON[45]=new Array(213,91,"2hs","no SA",0,"Critical Damage",247.98,"Focus",68.9,"Health",0,"",0)
WEAPON[46]=new Array(236,99,"2hs","no SA",0,"Critical Bleed",0,"Critical Drain",0,"Health",0,"",0)
WEAPON[47]=new Array(175,91,"Blunt","no SA",0,"Anger",28.59,"Health",0,"Rsk. Focus",107.7,"",0)
WEAPON[48]=new Array(155,132,"Blunt","no SA",0,"Conversion",0,"Mana Up",0,"Magic Silence",0,"",0)
WEAPON[49]=new Array(122,122,"Dagger","no SA",0,"Magic Regeneration",0,"Magic Weakness",0,"Mental Shield",0,"",0)
WEAPON[50]=new Array(213,91,"2hb","no SA",0,"Anger",28,"Critical Bleed",0,"Focus",68,"",0)
WEAPON[51]=new Array(175,91,"Sword","no SA",0,"Back Blow",370,"Focus",68.9,"Guidance",5.02,"",0)
WEAPON[52]=new Array(153,91,"Dagger","no SA",0,"Back Blow",400,"Evasion",2.41,"Focus",71.9,"",0)
WEAPON[53]=new Array(194,99,"Polearm","no SA",0,"Anger",24.77,"Critical Stun",0,"Long Blow",0,"",0)
WEAPON[54]=new Array(140,122,"Blunt","no SA",0,"Acumen",0,"Magic Hold",0,"Magic Mental Shield",0,"",0)
WEAPON[55]=new Array(170,122,"2hb","no SA",0,"Magic Hold",0,"Magic Regeneration",0,"Mental Shield",0,"",0)
WEAPON[56]=new Array(189,132,"2hb","no SA",0,"Bodily Blessing",0,"Magic Focus",0,"Magic Poison",0,"",0)
WEAPON[57]=new Array(236,99,"2hb","no SA",0,"Haste",1.06,"Health",0,"Rsk. Focus",99,"",0)
WEAPON[58]=new Array(194,99,"Sword","no SA",0,"Critical Damage",262.57,"Focus",64.5,"Haste",1.06,"",0)
WEAPON[59]=new Array(140,122,"Sword","no SA",0,"Acumen",0,"Magic Regeneration",0,"Magic Weakness",0,"",0)
WEAPON[60]=new Array(155,132,"Sword","no SA",0,"Acumen",0,"Conversion",0,"Magic Power",139,"",0)
WEAPON[61]=new Array(236,99,"Duals","Haste",1.04)
WEAPON[62]=new Array(228,97,"Duals","Haste",1.05)
WEAPON[63]=new Array(228,97,"Duals","Critical Damage",133.97)
WEAPON[64]=new Array(228,97,"Duals","Guidance",3.8)
WEAPON[65]=new Array(228,97,"Duals","Health",0)
WEAPON[66]=new Array(228,97,"Duals","Focus",52.6)
WEAPON[67]=new Array(220,94,"Duals","Critical Damage",107.01)
WEAPON[68]=new Array(220,94,"Duals","Focus",43.7)
WEAPON[69]=new Array(220,94,"Duals","Guidance",3.2)
WEAPON[70]=new Array(220,94,"Duals","Health",0)
WEAPON[71]=new Array(213,91,"Duals","Critical Damage",127.00)
WEAPON[72]=new Array(213,91,"Duals","Focus",54)
WEAPON[73]=new Array(213,91,"Duals","Health",1.25)
WEAPON[74]=new Array(213,91,"Duals","Haste",1.05)
WEAPON[75]=new Array(213,91,"Duals","Guidance",3.9)
WEAPON[76]=new Array(213,91,"Duals","Guidance",3.9)
WEAPON[77]=new Array(213,91,"Duals","Guidance",3.9)
WEAPON[78]=new Array(213,91,"Duals","Critical Damage",127.00)
WEAPON[79]=new Array(213,91,"Duals","Health",0)
WEAPON[80]=new Array(213,91,"Duals","Health",0)
WEAPON[81]=new Array(213,91,"Duals","Critical Damage",127.00)
WEAPON[82]=new Array(213,91,"Duals","Focus",54)
WEAPON[83]=new Array(213,91,"Duals","Haste",1.05)
WEAPON[84]=new Array(213,91,"Duals","Focus",54)
WEAPON[85]=new Array(213,91,"Duals","Health",0)
WEAPON[86]=new Array(213,91,"Duals","Focus",0)
WEAPON[87]=new Array(204,89,"Duals","Guidance",4.8)
WEAPON[88]=new Array(204,89,"Duals","Health",0)
WEAPON[89]=new Array(204,89,"Duals","Critical Damage",146.88)
WEAPON[90]=new Array(204,89,"Duals","Focus",65)
WEAPON[91]=new Array(204,89,"Duals","Haste",1.06)
WEAPON[92]=new Array(204,89,"Duals","Guidance",4.8)
WEAPON[93]=new Array(204,89,"Duals","Health",0)
WEAPON[94]=new Array(204,89,"Duals","Critical Damage",146.88)
WEAPON[95]=new Array(204,89,"Duals","Focus",65)
WEAPON[96]=new Array(204,89,"Duals","Haste",1.06)
WEAPON[97]=new Array(204,89,"Duals","Guidance",4.8)
WEAPON[98]=new Array(204,89,"Duals","Health",0)
WEAPON[99]=new Array(204,89,"Duals","Critical Damage",146.88)
WEAPON[100]=new Array(204,89,"Duals","Focus",65)
WEAPON[101]=new Array(204,89,"Duals","Haste",1.06)
WEAPON[102]=new Array(204,89,"Duals","Guidance",4.8)
WEAPON[103]=new Array(204,89,"Duals","Health",0)
WEAPON[104]=new Array(204,89,"Duals","Critical Damage",146.88)
WEAPON[105]=new Array(204,89,"Duals","Focus",65)
WEAPON[106]=new Array(204,89,"Duals","Haste",1.06)
WEAPON[107]=new Array(197,86,"Duals","Guidance",5.7)
WEAPON[108]=new Array(197,86,"Duals","Health",0)
WEAPON[109]=new Array(197,86,"Duals","Critical Damage",166.26)
WEAPON[110]=new Array(197,86,"Duals","Focus",76.6)
WEAPON[111]=new Array(197,86,"Duals","Haste",1.07)
WEAPON[112]=new Array(156,83,"Blunt","no SA",0,"Anger",26.78,"Health",0,"Rsk. Focus",115.4,"",0)
WEAPON[113]=new Array(139,76,"Blunt","no SA",0,"Anger",24.77,"Haste",1.07,"Health",0,"",0)
WEAPON[114]=new Array(122,68,"Blunt","no SA",0,"Anger",22.64,"Haste",1.07,"Health",0,"",0)
WEAPON[115]=new Array(107,61,"Blunt","no SA",0,"Anger",20.44,"Haste",1.08,"Rsk. Focus",138.7,"",0)
WEAPON[116]=new Array(107,61,"Blunt","no SA",0,"Haste",1.08,"Health",0,"Rsk. Focus",138.7,"",0)
WEAPON[117]=new Array(107,61,"Blunt","no SA",0,"Anger",20.44,"Haste",1.08,"Rsk. Focus",138.7,"",0)
WEAPON[118]=new Array(107,61,"Blunt","no SA",0,"Anger",20.44,"Health",0,"Rsk. Focus",138.7,"",0)
WEAPON[119]=new Array(323,83,"Bow","no SA",0,"Cheap Shot",0,"Guidance",4.53,"Miser",0,"",0)
WEAPON[120]=new Array(316,84,"YumiBow","no SA",0,"Evasion",2.68,"Guidance",4.82,"Miser",0,"",0)
WEAPON[121]=new Array(277,75,"YumiBow","no SA",0,"Guidance",5.12,"Miser",0,"Quick Recovery",0.7792,"",0)
WEAPON[122]=new Array(252,68,"Bow","no SA",0,"Cheap Shot",0,"Evasion",2.82,"Miser",0,"",0)
WEAPON[123]=new Array(220,61,"Bow","no SA",0,"Evasion",2.95,"Guidance",5.42,"Quick Recovery",0.832,"",0)
WEAPON[124]=new Array(136,83,"Dagger","no SA",0,"Critical Bleed",0,"Critical Damage",140.87,"Critical Poison",0,"Might Mortal",0)
WEAPON[125]=new Array(122,76,"Dagger","no SA",0,"Critical Bleed",0,"Evasion",2.68,"Focus",81.2,"",0)
WEAPON[126]=new Array(122,76,"Dagger","no SA",0,"Back Blow",450,"Evasion",2.68,"Focus",81.2,"",0)
WEAPON[127]=new Array(107,68,"Dagger","no SA",0,"Critical Bleed",0,"Critical Poison",0,"Rsk. Haste",1.12,"Might Mortal",0)
WEAPON[128]=new Array(94,61,"Dagger","no SA",0,"Critical Bleed",0,"Critical Poison",0,"Rsk. Haste",1.13,"",0)
WEAPON[129]=new Array(94,61,"Dagger","no SA",0,"Back Blow",500,"Focus",90.5,"Rsk. Haste",1.13,"Might Mortal",0)
WEAPON[130]=new Array(190,83,"Fist","no SA",0,"Critical Drain",0,"Critical Poison",0,"Rsk. Haste",1.11,"",0)
WEAPON[131]=new Array(169,76,"Fist","no SA",0,"Haste",1.07,"Rsk. Evasion",6.95,"Rsk. Haste",1.12,"",0)
WEAPON[132]=new Array(148,68,"Fist","no SA",0,"Haste",1.07,"Rsk. Evasion",7.29,"Rsk. Haste",1.12,"",0)
WEAPON[133]=new Array(130,61,"Fist","no SA",0,"Critical Drain",0,"Critical Poison",0,"Rsk. Haste",1.13,"",0)
WEAPON[134]=new Array(125,111,"Blunt","no SA",0,"Conversion",0,"Magic Hold",0,"Magic Power",112,"",0)
WEAPON[135]=new Array(125,111,"Sword","no SA",0,"Empower",26,"Magic Power",112,"Magic Silence",0,"",0)
WEAPON[136]=new Array(111,101,"Blunt","no SA",0,"Acumen",0,"Magic Hold",0,"Magic Mental Shield",0,"",0)
WEAPON[137]=new Array(111,101,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[138]=new Array(111,101,"Sword","no SA",0,"Acumen",0,"Conversion",0,"Magic Paralyze",0,"",0)
WEAPON[139]=new Array(111,101,"Blunt","no SA",0,"Conversion",0,"Magic Silence",0,"Mana Up",0,"",0)
WEAPON[140]=new Array(111,101,"Blunt","no SA",0,"Magic Poison",0,"Magic Power",99.39,"Magic Weakness",0,"",0)
WEAPON[141]=new Array(111,101,"Blunt","no SA",0,"Bless the Body",0,"Empower",24.59,"Rsk. Evasion",6.95,"",0)
WEAPON[142]=new Array(111,101,"Sword","no SA",0,"Empower",24.59,"Magic Power",99.39,"Magic Silence",0,"",0)
WEAPON[143]=new Array(98,91,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[144]=new Array(86,91,"Dagger","no SA",0,"Magic Hold",0,"Magic Silence",0,"Mana Up",0,"",0)
WEAPON[145]=new Array(85,81,"Sword","no SA",0,"Acumen",0,"Magic Power",78,"Magic Weakness",0,"",0)
WEAPON[146]=new Array(85,81,"Blunt","no SA",0,"Magic Hold",0,"Magic Shield",0,"Mana Up",0,"",0)
WEAPON[147]=new Array(151,111,"2hb","no SA",0,"Magic Hold",0,"Magic Regeneration",0,"Mental Shield",0,"",0)
WEAPON[148]=new Array(151,111,"2hb","no SA",0,"Magic Chaos",0,"Magic Poison",0,"Magic Weakness",0,"",0)
WEAPON[149]=new Array(151,111,"2hb","no SA",0,"Bodily Blessing",0,"Mana Up",0,"Rsk. Evasion",6.6,"",0)
WEAPON[150]=new Array(141,104,"2hb","no SA",0,"Mana Up",0,"Magic Weakness",0,"Magic Chaos",0,"",0)
WEAPON[151]=new Array(135,101,"2hb","no SA",0,"Magic Poison",0,"Magic Weakness",0,"Rsk. Evasion",6.95,"",0)
WEAPON[152]=new Array(135,101,"2hb","no SA",0,"Magic Hold",0,"Magic Regeneration",0,"Mental Shield",0,"",0)
WEAPON[153]=new Array(135,101,"2hb","no SA",0,"Magic Hold",0,"Magic Poison",0,"Magic Weakness",0,"",0)
WEAPON[154]=new Array(119,91,"2hb","no SA",0,"Magic Hold",0,"Magic Poison",0,"Magic Weakness",0,"",0)
WEAPON[155]=new Array(103,81,"2hb","no SA",0,"Bodily Blessing",0,"Mana Up",0,"Rsk. Evasion",7.63,"",0)
WEAPON[156]=new Array(103,81,"2hb","no SA",0,"Magic Chaos",0,"Magic Poison",0,"Magic Weakness",0,"",0)
WEAPON[157]=new Array(103,81,"2hb","no SA",0,"Magic Hold",0,"Magic Regeneration",0,"Mental Shield",0,"",0)
WEAPON[158]=new Array(156,83,"Polearm","no SA",0,"Critical Stun",0,"Long Blow",0,"Wide Blow",0,"",0)
WEAPON[159]=new Array(144,78,"Polearm","no SA",0,"Anger",24.77,"Critical Stun",0,"Long Blow",0,"",0)
WEAPON[160]=new Array(144,78,"Polearm","no SA",0,"Critical Stun",0,"Long Blow",0,"Wide Blow",0,"",0)
WEAPON[161]=new Array(122,68,"Polearm","no SA",0,"Critical Stun",0,"Light",0,"Long Blow",0,"",0)
WEAPON[162]=new Array(107,61,"Polearm","no SA",0,"Critical Stun",0,"Long Blow",0,"Wide Blow",0,"",0)
WEAPON[163]=new Array(107,61,"Polearm","no SA",0,"Anger",20.44,"Critical Stun",0,"Long Blow",0,"",0)
WEAPON[164]=new Array(107,61,"Polearm","no SA",0,"Anger",24.77,"Critical Stun",0,"Light",0,"",0)
WEAPON[165]=new Array(156,83,"Sword","no SA",0,"Critical Damage",231.29,"Focus",73.3,"Haste",1.07,"",0)
WEAPON[166]=new Array(139,76,"Sword","no SA",0,"Critical Damage",213.12,"Focus",77.8,"Guidance",5.72,"",0)
WEAPON[167]=new Array(139,76,"Sword","no SA",0,"Focus",77.8,"Health",0,"Rsk. Haste",1.12,"",0)
WEAPON[168]=new Array(139,76,"Sword","no SA",0,"Critical Drain",0,"Guidance",5.72,"Health",0,"",0)
WEAPON[169]=new Array(139,76,"Sword","no SA",0,"Focus",77.8,"Health",0,"Light",0,"",0)
WEAPON[170]=new Array(139,76,"Sword","no SA",0,"Critical Damage",213.12,"Focus",77.8,"Haste",1.07,"",0)
WEAPON[171]=new Array(122,68,"Sword","no SA",0,"Critical Damage",194.10,"Focus",82.2,"Haste",1.07,"",0)
WEAPON[172]=new Array(122,68,"Sword","no SA",0,"Critical Damage",194.10,"Critical Poison",0,"Focus",68.9,"",0)
WEAPON[173]=new Array(122,68,"Sword","no SA",0,"Back Blow",670,"Guidance",6.07,"Rsk. Evasion",7.29,"",0)
WEAPON[174]=new Array(122,68,"Sword","no SA",0,"Critical Damage",194.10,"Critical Poison",0,"Haste",1.07,"",0)
WEAPON[175]=new Array(107,61,"Sword","no SA",0,"Critical Anger",248.56,"Focus",86.7,"Light",0,"",0)
WEAPON[176]=new Array(190,83,"2hb","no SA",0,"Anger",26,"Critical Bleed",0,"Health",0,"",0)
WEAPON[177]=new Array(169,76,"2hb","no SA",0,"Critical Drain",0,"Focus",77,"Haste",1.07,"",0)
WEAPON[178]=new Array(190,83,"2hs","no SA",0,"Critical Damage",269.91,"Focus",73.3,"Haste",1.07,"",0)
WEAPON[179]=new Array(169,76,"2hs","no SA",0,"Critical Drain",0,"Focus",77,"Health",0,"",0)
WEAPON[180]=new Array(130,61,"2hs","no SA",0,"Critical Damage",174.78,"Focus",86.7,"Light",0,"",0)
WEAPON[181]=new Array(190,83,"Duals","Haste",1.04)
WEAPON[182]=new Array(190,83,"Duals","Critical Damage",84.11)
WEAPON[183]=new Array(190,83,"Duals","Guidance",2.9)
WEAPON[184]=new Array(190,83,"Duals","Haste",1.04)
WEAPON[185]=new Array(190,83,"Duals","Critical Damage",84.11)
WEAPON[186]=new Array(190,83,"Duals","Focus",40.4)
WEAPON[187]=new Array(190,83,"Duals","Guidance",2.9)
WEAPON[188]=new Array(190,83,"Duals","Critical Damage",84.11)
WEAPON[189]=new Array(190,83,"Duals","Focus",40.4)
WEAPON[190]=new Array(190,83,"Duals","Health",0)
WEAPON[191]=new Array(183,81,"Duals","Health",0)
WEAPON[192]=new Array(183,81,"Duals","Haste",1.02)
WEAPON[193]=new Array(183,81,"Duals","Critical Damage",49.42)
WEAPON[194]=new Array(183,81,"Duals","Focus",24.8)
WEAPON[195]=new Array(175,78,"Duals","Guidance",2.2)
WEAPON[196]=new Array(162,73,"Duals","Haste",1.04)
WEAPON[197]=new Array(155,70,"Duals","Focus",50.4)
WEAPON[198]=new Array(148,68,"Duals","Guidance",2.8)
WEAPON[199]=new Array(148,68,"Duals","Critical Damage",61.40)
WEAPON[200]=new Array(148,68,"Duals","Health",0)
WEAPON[201]=new Array(136,63,"Duals","no SA",0,"",0,"",0,"",0)
WEAPON[202]=new Array(130,61,"Duals","no SA",0,"",0,"",0,"",0)
WEAPON[203]=new Array(124,58,"Duals","no SA",0,"",0,"",0,"",0)
WEAPON[204]=new Array(118,56,"Duals","no SA",0,"",0,"",0,"",0)
WEAPON[205]=new Array(92,54,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[206]=new Array(79,47,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[207]=new Array(64,39,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[208]=new Array(51,32,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[209]=new Array(40,26,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[210]=new Array(191,54,"Bow","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[211]=new Array(179,51,"YumiBow","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[212]=new Array(132,39,"Bow","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[213]=new Array(114,35,"YumiBow","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[214]=new Array(105,32,"Bow","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[215]=new Array(82,26,"YumiBow","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[216]=new Array(80,54,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[217]=new Array(69,47,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[218]=new Array(62,42,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[219]=new Array(56,39,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[220]=new Array(45.32,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[221]=new Array(35,26,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[222]=new Array(112,54,"Fist","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[223]=new Array(96,47,"Fist","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[224]=new Array(78,39,"Fist","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[225]=new Array(62,32,"Fist","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[226]=new Array(49,26,"Fist","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[227]=new Array(74,72,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[228]=new Array(67,66,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[229]=new Array(63,63,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[230]=new Array(63,63,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[231]=new Array(51,52,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[232]=new Array(45,52,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[233]=new Array(51,52,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[234]=new Array(43,45,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[235]=new Array(41,43,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[236]=new Array(41,43,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[237]=new Array(41,43,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[238]=new Array(32,35,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[239]=new Array(32,35,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[240]=new Array(32,35,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[241]=new Array(90,72,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[242]=new Array(77,63,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[243]=new Array(62,52,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[244]=new Array(50,43,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[245]=new Array(39,35,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[246]=new Array(92,54,"Polearm","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[247]=new Array(79,47,"Polearm","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[248]=new Array(64,39,"Polearm","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[249]=new Array(51,32,"Polearm","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[250]=new Array(40,26,"Polearm","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[251]=new Array(92,54,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[252]=new Array(79,47,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[253]=new Array(64,39,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[254]=new Array(51,32,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[255]=new Array(40,26,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[256]=new Array(96,47,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[257]=new Array(112,54,"2hs","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[258]=new Array(96,47,"2hs","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[259]=new Array(78,39,"2hs","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[260]=new Array(49,26,"2hs","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[261]=new Array(107,51,"Duals","no SA",0,"",0,"",0,"",0)
WEAPON[262]=new Array(96,47,"Duals","no SA",0,"",0,"",0,"",0)
WEAPON[263]=new Array(83,41,"Duals","no SA",0,"",0,"",0,"",0)
WEAPON[264]=new Array(73,37,"Duals","no SA",0,"",0,"",0,"",0)
WEAPON[265]=new Array(31,21,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[266]=new Array(24,17,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[267]=new Array(17,12,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[268]=new Array(13,10,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[269]=new Array(12,9,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[270]=new Array(10,9,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[271]=new Array(10,8,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[272]=new Array(6,6,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[273]=new Array(6,5,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[274]=new Array(64,21,"Bow","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[275]=new Array(49,17,"Bow","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[276]=new Array(45,16,"Bow","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[277]=new Array(34,12,"Bow","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[278]=new Array(23,9,"Bow","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[279]=new Array(16,6,"Bow","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[280]=new Array(27,21,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[281]=new Array(21,17,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[282]=new Array(19,16,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[283]=new Array(15,12,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[284]=new Array(11,10,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[285]=new Array(10,9,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[286]=new Array(7,6,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[287]=new Array(5,5,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[288]=new Array(38,21,"Fist","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[289]=new Array(29,17,"Fist","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[290]=new Array(21,12,"Fist","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[291]=new Array(16,10,"Fist","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[292]=new Array(13,9,"Fist","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[293]=new Array(10,6,"Fist","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[294]=new Array(7,5,"Fist","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[295]=new Array(1,1,"Fist","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[296]=new Array(25,28,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[297]=new Array(19,22,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[298]=new Array(11,13,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[299]=new Array(9,12,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[300]=new Array(6,8,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[301]=new Array(5,7,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[302]=new Array(30,28,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[303]=new Array(23,22,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[304]=new Array(16,16,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[305]=new Array(13,14,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[306]=new Array(13,13,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[307]=new Array(11,12,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[308]=new Array(10,10,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[309]=new Array(1,1,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[310]=new Array(31,21,"Polearm","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[311]=new Array(24,17,"Polearm","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[312]=new Array(24,17,"Polearm","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[313]=new Array(1,1,"Polearm","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[314]=new Array(31,21,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[315]=new Array(24,17,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[316]=new Array(18,21,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[317]=new Array(17,12,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[318]=new Array(14,11,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[319]=new Array(13,10,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[320]=new Array(12,9,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[321]=new Array(11,9,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[322]=new Array(8,6,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[323]=new Array(6,5,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[324]=new Array(1,1,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[325]=new Array(38,21,"2hs","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[326]=new Array(29,17,"2hs","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[327]=new Array(21,12,"2hs","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[328]=new Array(16,10,"2hs","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[329]=new Array(1,1,"Duals","no SA",0,"",0,"",0,"",0)
WEAPON[330]=new Array(297,137,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[331]=new Array(297,137,"Sword","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[332]=new Array(614,137,"Bow","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[333]=new Array(361,137,"2hs","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[334]=new Array(361,137,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[335]=new Array(361,137,"Fist","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[336]=new Array(238,182,"Blunt","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[337]=new Array(290,182,"2hb","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[338]=new Array(297,137,"Polearm","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[339]=new Array(260,137,"Dagger","no SA",0,"",0,"",0,"",0,"",0)
WEAPON[340]=new Array(361,137,"Duals","no SA",0,"",0,"",0,"",0)
WEAPON[341]=new Array(139,76,"Polearm","no SA",0,"Critical Stun",0,"Long Blow",0,"Wide Blow",0,"",0)

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

}

</script>
<!-- block -->
<script>
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

</script>

<!-- Disable -->
<script>
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

function passives(lvlreset) {
//Passive Auto-select
var LVL = + d.gI("LV").value
var AAUTO=new Array(0,"AGILEMOVEMENT1","WMF")
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
var AVITALFORCE1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3)
var AVITALFORCE2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8)
var ACRITICALPOWER1=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2)
var ACRITICALPOWER2=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6)
var AAEGIS=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
	if (lvlreset && d.gI("AUTOPASSIVECHECK").checked==true) {
		var AGILE1=AAGILEMOVEMENT1[LVL]-1
		if (AGILE1<0)
			{d.gI("AGILEMOVEMENT1CHECK").checked=false}
		else if (AGILE1>=0 && d.gI("AGILEMOVEMENT1CHECK").style.display=='block')
			{d.gI("AGILEMOVEMENT1CHECK").checked=true
			d.gI("AGILEMOVEMENT1").selectedIndex=(AGILE1)}
		var WMF=AWMF[LVL]-1
		if (WMF<0)
			{d.gI("WMFCHECK").checked=false}
		else if (WMF>=0 && d.gI("WMFCHECK").style.display=='block')
			{d.gI("WMFCHECK").checked=true
			d.gI("WMF").selectedIndex=(WMF)}
		var WMM1=AWMM1[LVL]-1
		if (WMM1<0)
			{d.gI("WMM1CHECK").checked=false}
		else if (WMM1>=0 && d.gI("WMM1CHECK").style.display=='block')
			{d.gI("WMM1CHECK").checked=true
			d.gI("WMM1").selectedIndex=(WMM1)}
		var WMM2=AWMM2[LVL]-1
		if (WMM2<0)
			{d.gI("WMM2CHECK").checked=false}
		else if (WMM2>=0 && d.gI("WMM2CHECK").style.display=='block')
			{d.gI("WMM2CHECK").checked=true
			d.gI("WMM2").selectedIndex=(WMM2)}
		var WMM3=AWMM3[LVL]-1
		if (WMM3<0)
			{d.gI("WMM3CHECK").checked=false}
		else if (WMM3>=0 && d.gI("WMM3CHECK").style.display=='block')
			{d.gI("WMM3CHECK").checked=true
			d.gI("WMM3").selectedIndex=(WMM3)}
		var WSBM1=AWSBM1[LVL]-1
		if (WSBM1<0)
			{d.gI("WSBM1CHECK").checked=false}
		else if (WSBM1>=0 && d.gI("WSBM1CHECK").style.display=='block')
			{d.gI("WSBM1CHECK").checked=true
			d.gI("WSBM1").selectedIndex=(WSBM1)}
		var WSBM2=AWSBM2[LVL]-1
		if (WSBM2<0)
			{d.gI("WSBM2CHECK").checked=false}
		else if (WSBM2>=0 && d.gI("WSBM2CHECK").style.display=='block')
			{d.gI("WSBM2CHECK").checked=true
			d.gI("WSBM2").selectedIndex=(WSBM2)}
		var BLUNTM1=AWSBM1[LVL]-1
		if (BLUNTM1<0)
			{d.gI("BLUNTM1CHECK").checked=false}
		else if (BLUNTM1>=0 && d.gI("BLUNTM1CHECK").style.display=='block')
			{d.gI("BLUNTM1CHECK").checked=true
			d.gI("BLUNTM1").selectedIndex=(BLUNTM1)}
		var BLUNTM2=AWSBM2[LVL]-1
		if (BLUNTM2<0)
			{d.gI("BLUNTM2CHECK").checked=false}
		else if (BLUNTM2>=0 && d.gI("BLUNTM2CHECK").style.display=='block')
			{d.gI("BLUNTM2CHECK").checked=true
			d.gI("BLUNTM2").selectedIndex=(BLUNTM2)}
		var FISTM1=AWSBM1[LVL]-1
		if (FISTM1<0)
			{d.gI("FISTM1CHECK").checked=false}
		else if (FISTM1>=0 && d.gI("FISTM1CHECK").style.display=='block')
			{d.gI("FISTM1CHECK").checked=true
			d.gI("FISTM1").selectedIndex=(FISTM1)}
		var FISTM2=AWSBM2[LVL]-1
		if (FISTM2<0)
			{d.gI("FISTM2CHECK").checked=false}
		else if (FISTM2>=0 && d.gI("FISTM2CHECK").style.display=='block')
			{d.gI("FISTM2CHECK").checked=true
			d.gI("FISTM2").selectedIndex=(FISTM2)}
		var KSBM1=AWSBM1[LVL]-1
		if (KSBM1<0)
			{d.gI("KSBM1CHECK").checked=false}
		else if (KSBM1>=0 && d.gI("KSBM1CHECK").style.display=='block')
			{d.gI("KSBM1CHECK").checked=true
			d.gI("KSBM1").selectedIndex=(KSBM1)}
		var KSBM2=AWSBM2[LVL]-1
		if (KSBM2<0)
			{d.gI("KSBM2CHECK").checked=false}
		else if (KSBM2>=0 && d.gI("KSBM2CHECK").style.display=='block')
			{d.gI("KSBM2CHECK").checked=true
			d.gI("KSBM2").selectedIndex=(KSBM2)}
		var DAGGERM1=AWSBM1[LVL]-1
		if (DAGGERM1<0)
			{d.gI("DAGGERM1CHECK").checked=false}
		else if (DAGGERM1>=0 && d.gI("DAGGERM1CHECK").style.display=='block')
			{d.gI("DAGGERM1CHECK").checked=true
			d.gI("DAGGERM1").selectedIndex=(DAGGERM1)}
		var DAGGERM2=AWSBM2[LVL]-1
		if (DAGGERM2<0)
			{d.gI("DAGGERM2CHECK").checked=false}
		else if (DAGGERM2>=0 && d.gI("DAGGERM2CHECK").style.display=='block')
			{d.gI("DAGGERM2CHECK").checked=true
			d.gI("DAGGERM2").selectedIndex=(DAGGERM2)}
		var POLEM1=AWSBM1[LVL]-1
		if (POLEM1<0)
			{d.gI("POLEM1CHECK").checked=false}
		else if (POLEM1>=0 && d.gI("POLEM1CHECK").style.display=='block')
			{d.gI("POLEM1CHECK").checked=true
			d.gI("POLEM1").selectedIndex=(POLEM1)}
		var POLEM2=AWSBM2[LVL]-1
		if (POLEM2<0)
			{d.gI("POLEM2CHECK").checked=false}
		else if (POLEM2>=0 && d.gI("POLEM2CHECK").style.display=='block')
			{d.gI("POLEM2CHECK").checked=true
			d.gI("POLEM2").selectedIndex=(POLEM2)}
		var BOWM1=ABOWM1[LVL]-1
		if (BOWM1<0)
			{d.gI("BOWM1CHECK").checked=false}
		else if (BOWM1>=0 && d.gI("BOWM1CHECK").style.display=='block')
			{d.gI("BOWM1CHECK").checked=true
			d.gI("BOWM1").selectedIndex=(BOWM1)}
		var BOWM2=ABOWM2[LVL]-1
		if (BOWM2<0)
			{d.gI("BOWM2CHECK").checked=false}
		else if (BOWM2>=0 && d.gI("BOWM2CHECK").style.display=='block')
			{d.gI("BOWM2CHECK").checked=true
			d.gI("BOWM2").selectedIndex=(BOWM2)}
		var DUALM=ADUALM[LVL]-1
		if (DUALM<0)
			{d.gI("DUALMCHECK").checked=false}
		else if (DUALM>=0 && d.gI("DUALMCHECK").style.display=='block')
			{d.gI("DUALMCHECK").checked=true
			d.gI("DUALM").selectedIndex=(DUALM)}
		var THM1=ATHM1[LVL]-1
		if (THM1<0)
			{d.gI("THM1CHECK").checked=false}
		else if (THM1>=0 && d.gI("THM1CHECK").style.display=='block')
			{d.gI("THM1CHECK").checked=true
			d.gI("THM1").selectedIndex=(THM1)}
		var THM2=ATHM2[LVL]-1
		if (THM2<0)
			{d.gI("THM2CHECK").checked=false}
		else if (THM2>=0 && d.gI("THM2CHECK").style.display=='block')
			{d.gI("THM2CHECK").checked=true
			d.gI("THM2").selectedIndex=(THM2)}
		var AMF=AAMF[LVL]-1
		if (AMF<0)
			{d.gI("AMFCHECK").checked=false}
		else if (AMF>=0 && d.gI("AMFCHECK").style.display=='block')
			{d.gI("AMFCHECK").checked=true
			d.gI("AMF").selectedIndex=(AMF)}
		var AMM=AAMM[LVL]-1
		if (AMM<0)
			{d.gI("AMMCHECK").checked=false}
		else if (AMM>=0 && d.gI("AMMCHECK").style.display=='block')
			{d.gI("AMMCHECK").checked=true
			d.gI("AMM").selectedIndex=(AMM)}
		var HMK1=ABOWM1[LVL]-1
		if (HMK1<0)
			{d.gI("HMK1CHECK").checked=false}
		else if (HMK1>=0 && d.gI("HMK1CHECK").style.display=='block')
			{d.gI("HMK1CHECK").checked=true
			d.gI("HMK1").selectedIndex=(HMK1)}
		var HMK2=ABOWM2[LVL]-1
		if (HMK2<0)
			{d.gI("HMK2CHECK").checked=false}
		else if (HMK2>=0 && d.gI("HMK2CHECK").style.display=='block')
			{d.gI("HMK2CHECK").checked=true
			d.gI("HMK2").selectedIndex=(HMK2)}
		var HMW1=AHMW1[LVL]-1
		if (HMW1<0)
			{d.gI("HMW1CHECK").checked=false}
		else if (HMW1>=0 && d.gI("HMW1CHECK").style.display=='block')
			{d.gI("HMW1CHECK").checked=true
			d.gI("HMW1").selectedIndex=(HMW1)}
		var HMW2=AHMW2[LVL]-1
		if (HMW2<0)
			{d.gI("HMW2CHECK").checked=false}
		else if (HMW2>=0 && d.gI("HMW2CHECK").style.display=='block')
			{d.gI("HMW2CHECK").checked=true
			d.gI("HMW2").selectedIndex=(HMW2)}
		var HMO1=AHMO1[LVL]-1
		if (HMO1<0)
			{d.gI("HMO1CHECK").checked=false}
		else if (HMO1>=0 && d.gI("HMO1CHECK").style.display=='block')
			{d.gI("HMO1CHECK").checked=true
			d.gI("HMO1").selectedIndex=(HMO1)}
		var HMO2=AHMO2[LVL]-1
		if (HMO2<0)
			{d.gI("HMO2CHECK").checked=false}
		else if (HMO2>=0 && d.gI("HMO2CHECK").style.display=='block')
			{d.gI("HMO2CHECK").checked=true
			d.gI("HMO2").selectedIndex=(HMO2)}
		var HMO3=AHMO3[LVL]-1
		if (HMO3<0)
			{d.gI("HMO3CHECK").checked=false}
		else if (HMO3>=0 && d.gI("HMO3CHECK").style.display=='block')
			{d.gI("HMO3CHECK").checked=true
			d.gI("HMO3").selectedIndex=(HMO3)}
		var HMP=AHMP[LVL]-1
		if (HMP<0)
			{d.gI("HMPCHECK").checked=false}
		else if (HMP>=0 && d.gI("HMPCHECK").style.display=='block')
			{d.gI("HMPCHECK").checked=true
			d.gI("HMP").selectedIndex=(HMP)}
		var LMW1=AHMW1[LVL]-1
		if (LMW1<0)
			{d.gI("LMW1CHECK").checked=false}
		else if (LMW1>=0 && d.gI("LMW1CHECK").style.display=='block')
			{d.gI("LMW1CHECK").checked=true
			d.gI("LMW1").selectedIndex=(LMW1)}
		var LMW2=AHMW2[LVL]-1
		if (LMW2<0)
			{d.gI("LMW2CHECK").checked=false}
		else if (LMW2>=0 && d.gI("LMW2CHECK").style.display=='block')
			{d.gI("LMW2CHECK").checked=true
			d.gI("LMW2").selectedIndex=(LMW2)}
		var LMR1=ALMR1[LVL]-1
		if (LMR1<0)
			{d.gI("LMR1CHECK").checked=false}
		else if (LMR1>=0 && d.gI("LMR1CHECK").style.display=='block')
			{d.gI("LMR1CHECK").checked=true
			d.gI("LMR1").selectedIndex=(LMR1)}
		var LMR2=ALMR2[LVL]-1
		if (LMR2<0)
			{d.gI("LMR2CHECK").checked=false}
		else if (LMR2>=0 && d.gI("LMR2CHECK").style.display=='block')
			{d.gI("LMR2CHECK").checked=true
			d.gI("LMR2").selectedIndex=(LMR2)}
		var LMO1=ALMO1[LVL]-1
		if (LMO1<0)
			{d.gI("LMO1CHECK").checked=false}
		else if (LMO1>=0 && d.gI("LMO1CHECK").style.display=='block')
			{d.gI("LMO1CHECK").checked=true
			d.gI("LMO1").selectedIndex=(LMO1)}
		var LMO2=ALMO2[LVL]-1
		if (LMO2<0)
			{d.gI("LMO2CHECK").checked=false}
		else if (LMO2>=0 && d.gI("LMO2CHECK").style.display=='block')
			{d.gI("LMO2CHECK").checked=true
			d.gI("LMO2").selectedIndex=(LMO2)}
		var LMO3=ALMO3[LVL]-1
		if (LMO3<0)
			{d.gI("LMO3CHECK").checked=false}
		else if (LMO3>=0 && d.gI("LMO3CHECK").style.display=='block')
			{d.gI("LMO3CHECK").checked=true
			d.gI("LMO3").selectedIndex=(LMO3)}
		var LMH1=ALMH1[LVL]-1
		if (LMH1<0)
			{d.gI("LMH1CHECK").checked=false}
		else if (LMH1>=0 && d.gI("LMH1CHECK").style.display=='block')
			{d.gI("LMH1CHECK").checked=true
			d.gI("LMH1").selectedIndex=(LMH1)}
		var LMH2=ALMH2[LVL]-1
		if (LMH2<0)
			{d.gI("LMH2CHECK").checked=false}
		else if (LMH2>=0 && d.gI("LMH2CHECK").style.display=='block')
			{d.gI("LMH2CHECK").checked=true
			d.gI("LMH2").selectedIndex=(LMH2)}
		var LMS=AHMP[LVL]-1
		if (LMS<0)
			{d.gI("LMSCHECK").checked=false}
		else if (LMS>=0 && d.gI("LMSCHECK").style.display=='block')
			{d.gI("LMSCHECK").checked=true
			d.gI("LMS").selectedIndex=(LMS)}
		var RMN1=ALMH1[LVL]-1
		if (RMN1<0)
			{d.gI("RMN1CHECK").checked=false}
		else if (RMN1>=0 && d.gI("RMN1CHECK").style.display=='block')
			{d.gI("RMN1CHECK").checked=true
			d.gI("RMN1").selectedIndex=(RMN1)}
		var RMN2=ALMH2[LVL]-1
		if (RMN2<0)
			{d.gI("RMN2CHECK").checked=false}
		else if (RMN2>=0 && d.gI("RMN2CHECK").style.display=='block')
			{d.gI("RMN2CHECK").checked=true
			d.gI("RMN2").selectedIndex=(RMN2)}
		var RMH1=ALMH1[LVL]-1
		if (RMH1<0)
			{d.gI("RMH1CHECK").checked=false}
		else if (RMH1>=0 && d.gI("RMH1CHECK").style.display=='block')
			{d.gI("RMH1CHECK").checked=true
			d.gI("RMH1").selectedIndex=(RMH1)}
		var RMH2=ALMH2[LVL]-1
		if (RMH2<0)
			{d.gI("RMH2CHECK").checked=false}
		else if (RMH2>=0 && d.gI("RMH2CHECK").style.display=='block')
			{d.gI("RMH2CHECK").checked=true
			d.gI("RMH2").selectedIndex=(RMH2)}
		var RMO1=ALMO1[LVL]-1
		if (RMO1<0)
			{d.gI("RMO1CHECK").checked=false}
		else if (RMO1>=0 && d.gI("RMO1CHECK").style.display=='block')
			{d.gI("RMO1CHECK").checked=true
			d.gI("RMO1").selectedIndex=(RMO1)}
		var RMO2=ALMO2[LVL]-1
		if (RMO2<0)
			{d.gI("RMO2CHECK").checked=false}
		else if (RMO2>=0 && d.gI("RMO2CHECK").style.display=='block')
			{d.gI("RMO2CHECK").checked=true
			d.gI("RMO2").selectedIndex=(RMO2)}
		var RMO3=ALMO3[LVL]-1
		if (RMO3<0)
			{d.gI("RMO3CHECK").checked=false}
		else if (RMO3>=0 && d.gI("RMO3CHECK").style.display=='block')
			{d.gI("RMO3CHECK").checked=true
			d.gI("RMO3").selectedIndex=(RMO3)}
		var AM1=ALMO1[LVL]-1
		if (AM1<0)
			{d.gI("AM1CHECK").checked=false}
		else if (AM1>=0 && d.gI("AM1CHECK").style.display=='block')
			{d.gI("AM1CHECK").checked=true
			d.gI("AM1").selectedIndex=(AM1)}
		var AM2=ALMO2[LVL]-1
		if (AM2<0)
			{d.gI("AM2CHECK").checked=false}
		else if (AM2>=0 && d.gI("AM2CHECK").style.display=='block')
			{d.gI("AM2CHECK").checked=true
			d.gI("AM2").selectedIndex=(AM2)}
		var AM3=ALMO3[LVL]-1
		if (AM3<0)
			{d.gI("AM3CHECK").checked=false}
		else if (AM3>=0 && d.gI("AM3CHECK").style.display=='block')
			{d.gI("AM3CHECK").checked=true
			d.gI("AM3").selectedIndex=(AM3)}
		var MR1=AMR1[LVL]-1
		if (MR1<0)
			{d.gI("MR1CHECK").checked=false}
		else if (MR1>=0 && d.gI("MR1CHECK").style.display=='block')
			{d.gI("MR1CHECK").checked=true
			d.gI("MR1").selectedIndex=(MR1)}
		var MR2=AMR2[LVL]-1
		if (MR2<0)
			{d.gI("MR2CHECK").checked=false}
		else if (MR2>=0 && d.gI("MR2CHECK").style.display=='block')
			{d.gI("MR2CHECK").checked=true
			d.gI("MR2").selectedIndex=(MR2)}
		var BOOSTHP1=ABOOSTHP1[LVL]-1
		if (BOOSTHP1<0)
			{d.gI("BOOSTHP1CHECK").checked=false}
		else if (BOOSTHP1>=0 && d.gI("BOOSTHP1CHECK").style.display=='block')
			{d.gI("BOOSTHP1CHECK").checked=true
			d.gI("BOOSTHP1").selectedIndex=(BOOSTHP1)}
		var BOOSTHP2=ABOOSTHP2[LVL]-1
		if (BOOSTHP2<0)
			{d.gI("BOOSTHP2CHECK").checked=false}
		else if (BOOSTHP2>=0 && d.gI("BOOSTHP2CHECK").style.display=='block')
			{d.gI("BOOSTHP2CHECK").checked=true
			d.gI("BOOSTHP2").selectedIndex=(BOOSTHP2)}
		var BOOSTHP3=ABOOSTHP3[LVL]-1
		if (BOOSTHP3<0)
			{d.gI("BOOSTHP3CHECK").checked=false}
		else if (BOOSTHP3>=0 && d.gI("BOOSTHP3CHECK").style.display=='block')
			{d.gI("BOOSTHP3CHECK").checked=true
			d.gI("BOOSTHP3").selectedIndex=(BOOSTHP3)}
		var QUICKSTEP1=AQUICKSTEP1[LVL]-1
		if (QUICKSTEP1<0)
			{d.gI("QUICKSTEP1CHECK").checked=false}
		else if (QUICKSTEP1>=0 && d.gI("QUICKSTEP1CHECK").style.display=='block')
			{d.gI("QUICKSTEP1CHECK").checked=true
			d.gI("QUICKSTEP1").selectedIndex=(QUICKSTEP1)}
		var QUICKSTEP2=AQUICKSTEP2[LVL]-1
		if (QUICKSTEP2<0)
			{d.gI("QUICKSTEP2CHECK").checked=false}
		else if (QUICKSTEP2>=0 && d.gI("QUICKSTEP2CHECK").style.display=='block')
			{d.gI("QUICKSTEP2CHECK").checked=true
			d.gI("QUICKSTEP2").selectedIndex=(QUICKSTEP2)}
		var FINALFORTRESS=AFINALFORTRESS[LVL]-1
		if (FINALFORTRESS<0)
			{d.gI("FINALFORTRESSCHECK").checked=false}
		else if (FINALFORTRESS>=0 && d.gI("FINALFORTRESSCHECK").style.display=='block')
			{d.gI("FINALFORTRESSCHECK").checked=true
			d.gI("FINALFORTRESS").selectedIndex=(FINALFORTRESS)}
		var FINALFRENZY=AFINALFRENZY[LVL]-1
		if (FINALFRENZY<0)
			{d.gI("FINALFRENZYCHECK").checked=false}
		else if (FINALFRENZY>=0 && d.gI("FINALFRENZYCHECK").style.display=='block')
			{d.gI("FINALFRENZYCHECK").checked=true
			d.gI("FINALFRENZY").selectedIndex=(FINALFRENZY)}
		var BOOSTMP1=ABOOSTMP1[LVL]-1
		if (BOOSTMP1<0)
			{d.gI("BOOSTMP1CHECK").checked=false}
		else if (BOOSTMP1>=0 && d.gI("BOOSTMP1CHECK").style.display=='block')
			{d.gI("BOOSTMP1CHECK").checked=true
			d.gI("BOOSTMP1").selectedIndex=(BOOSTMP1)}
		var BOOSTMP2=ABOOSTMP2[LVL]-1
		if (BOOSTMP2<0)
			{d.gI("BOOSTMP2CHECK").checked=false}
		else if (BOOSTMP2>=0 && d.gI("BOOSTMP2CHECK").style.display=='block')
			{d.gI("BOOSTMP2CHECK").checked=true
			d.gI("BOOSTMP2").selectedIndex=(BOOSTMP2)}
		var BOOSTEVASION1=ABOOSTEVASION1[LVL]-1
		if (BOOSTEVASION1<0)
			{d.gI("BOOSTEVASION1CHECK").checked=false}
		else if (BOOSTEVASION1>=0 && d.gI("BOOSTEVASION1CHECK").style.display=='block')
			{d.gI("BOOSTEVASION1CHECK").checked=true
			d.gI("BOOSTEVASION1").selectedIndex=(BOOSTEVASION1)}
		var BOOSTEVASION2=ABOOSTEVASION2[LVL]-1
		if (BOOSTEVASION2<0)
			{d.gI("BOOSTEVASION2CHECK").checked=false}
		else if (BOOSTEVASION2>=0 && d.gI("BOOSTEVASION2CHECK").style.display=='block')
			{d.gI("BOOSTEVASION2CHECK").checked=true
			d.gI("BOOSTEVASION2").selectedIndex=(BOOSTEVASION2)}
		var AGILEMOVEMENT1=AAGILEMOVEMENT1[LVL]-1
		if (AGILEMOVEMENT1<0)
			{d.gI("AGILEMOVEMENT1CHECK").checked=false}
		else if (AGILEMOVEMENT1>=0 && d.gI("AGILEMOVEMENT1CHECK").style.display=='block')
			{d.gI("AGILEMOVEMENT1CHECK").checked=true
			d.gI("AGILEMOVEMENT1").selectedIndex=(AGILEMOVEMENT1)}
		var AGILEMOVEMENT2=AAGILEMOVEMENT2[LVL]-1
		if (AGILEMOVEMENT2<0)
			{d.gI("AGILEMOVEMENT2CHECK").checked=false}
		else if (AGILEMOVEMENT2>=0 && d.gI("AGILEMOVEMENT2CHECK").style.display=='block')
			{d.gI("AGILEMOVEMENT2CHECK").checked=true
			d.gI("AGILEMOVEMENT2").selectedIndex=(AGILEMOVEMENT2)}
		var CRITICALCHANCE1=ACRITICALCHANCE1[LVL]-1
		if (CRITICALCHANCE1<0)
			{d.gI("CRITICALCHANCE1CHECK").checked=false}
		else if (CRITICALCHANCE1>=0 && d.gI("CRITICALCHANCE1CHECK").style.display=='block')
			{d.gI("CRITICALCHANCE1CHECK").checked=true
			d.gI("CRITICALCHANCE1").selectedIndex=(CRITICALCHANCE1)}
		var CRITICALCHANCE2=ACRITICALCHANCE2[LVL]-1
		if (CRITICALCHANCE2<0)
			{d.gI("CRITICALCHANCE2CHECK").checked=false}
		else if (CRITICALCHANCE2>=0 && d.gI("CRITICALCHANCE2CHECK").style.display=='block')
			{d.gI("CRITICALCHANCE2CHECK").checked=true
			d.gI("CRITICALCHANCE2").selectedIndex=(CRITICALCHANCE2)}
		var FASTCAST1=AFASTCAST1[LVL]-1
		if (FASTCAST1<0)
			{d.gI("FASTCAST1CHECK").checked=false}
		else if (FASTCAST1>=0 && d.gI("FASTCAST1CHECK").style.display=='block')
			{d.gI("FASTCAST1CHECK").checked=true
			d.gI("FASTCAST1").selectedIndex=(FASTCAST1)}
		var FASTCAST2=AFASTCAST2[LVL]-1
		if (FASTCAST2<0)
			{d.gI("FASTCAST2CHECK").checked=false}
		else if (FASTCAST2>=0 && d.gI("FASTCAST2CHECK").style.display=='block')
			{d.gI("FASTCAST2CHECK").checked=true
			d.gI("FASTCAST2").selectedIndex=(FASTCAST2)}
		var BOOSTASPD1=ABOOSTASPD1[LVL]-1
		if (BOOSTASPD1<0)
			{d.gI("BOOSTASPD1CHECK").checked=false}
		else if (BOOSTASPD1>=0 && d.gI("BOOSTASPD1CHECK").style.display=='block')
			{d.gI("BOOSTASPD1CHECK").checked=true
			d.gI("BOOSTASPD1").selectedIndex=(BOOSTASPD1)}
		var BOOSTASPD2=ABOOSTASPD2[LVL]-1
		if (BOOSTASPD2<0)
			{d.gI("BOOSTASPD2CHECK").checked=false}
		else if (BOOSTASPD2>=0 && d.gI("BOOSTASPD2CHECK").style.display=='block')
			{d.gI("BOOSTASPD2CHECK").checked=true
			d.gI("BOOSTASPD2").selectedIndex=(BOOSTASPD2)}
		var QUIVEROFHOLDING=AQUIVEROFHOLDING[LVL]-1
		if (QUIVEROFHOLDING<0)
			{d.gI("QUIVEROFHOLDINGCHECK").checked=false}
		else if (QUIVEROFHOLDING>=0 && d.gI("QUIVEROFHOLDINGCHECK").style.display=='block')
			{d.gI("QUIVEROFHOLDINGCHECK").checked=true
			d.gI("QUIVEROFHOLDING").selectedIndex=(QUIVEROFHOLDING)}
		var WEIGHTLIMIT1=AWEIGHTLIMIT1[LVL]-1
		if (WEIGHTLIMIT1<0)
			{d.gI("WEIGHTLIMIT1CHECK").checked=false}
		else if (WEIGHTLIMIT1>=0 && d.gI("WEIGHTLIMIT1CHECK").style.display=='block')
			{d.gI("WEIGHTLIMIT1CHECK").checked=true
			d.gI("WEIGHTLIMIT1").selectedIndex=(WEIGHTLIMIT1)}
		var WEIGHTLIMIT2=AWEIGHTLIMIT2[LVL]-1
		if (WEIGHTLIMIT2<0)
			{d.gI("WEIGHTLIMIT2CHECK").checked=false}
		else if (WEIGHTLIMIT2>=0 && d.gI("WEIGHTLIMIT2CHECK").style.display=='block')
			{d.gI("WEIGHTLIMIT2CHECK").checked=true
			d.gI("WEIGHTLIMIT2").selectedIndex=(WEIGHTLIMIT2)}
		var WEIGHTLIMIT3=AWEIGHTLIMIT3[LVL]-1
		if (WEIGHTLIMIT3<0)
			{d.gI("WEIGHTLIMIT3CHECK").checked=false}
		else if (WEIGHTLIMIT3>=0 && d.gI("WEIGHTLIMIT3CHECK").style.display=='block')
			{d.gI("WEIGHTLIMIT3CHECK").checked=true
			d.gI("WEIGHTLIMIT3").selectedIndex=(WEIGHTLIMIT3)}
		var SHIELDMASTERY1=ASHIELDMASTERY1[LVL]-1
		if (SHIELDMASTERY1<0)
			{d.gI("SHIELDMASTERY1CHECK").checked=false}
		else if (SHIELDMASTERY1>=0 && d.gI("SHIELDMASTERY1CHECK").style.display=='block')
			{d.gI("SHIELDMASTERY1CHECK").checked=true
			d.gI("SHIELDMASTERY1").selectedIndex=(SHIELDMASTERY1)}
		var SHIELDMASTERY2=ASHIELDMASTERY2[LVL]-1
		if (SHIELDMASTERY2<0)
			{d.gI("SHIELDMASTERY2CHECK").checked=false}
		else if (SHIELDMASTERY2>=0 && d.gI("SHIELDMASTERY2CHECK").style.display=='block')
			{d.gI("SHIELDMASTERY2CHECK").checked=true
			d.gI("SHIELDMASTERY2").selectedIndex=(SHIELDMASTERY2)}
		var CLEARMIND=ACLEARMIND[LVL]-1
		if (CLEARMIND<0)
			{d.gI("CLEARMINDCHECK").checked=false}
		else if (CLEARMIND>=0 && d.gI("CLEARMINDCHECK").style.display=='block')
			{d.gI("CLEARMINDCHECK").checked=true
			d.gI("CLEARMIND").selectedIndex=(CLEARMIND)}
		var ESPRIT1=AESPRIT1[LVL]-1
		if (ESPRIT1<0)
			{d.gI("ESPRIT1CHECK").checked=false}
		else if (ESPRIT1>=0 && d.gI("ESPRIT1CHECK").style.display=='block')
			{d.gI("ESPRIT1CHECK").checked=true
			d.gI("ESPRIT1").selectedIndex=(ESPRIT1)}
		var ESPRIT2=AESPRIT2[LVL]-1
		if (ESPRIT2<0)
			{d.gI("ESPRIT2CHECK").checked=false}
		else if (ESPRIT2>=0 && d.gI("ESPRIT2CHECK").style.display=='block')
			{d.gI("ESPRIT2CHECK").checked=true
			d.gI("ESPRIT2").selectedIndex=(ESPRIT2)}
		var FASTHPRECOVERY1=AFASTHPRECOVERY1[LVL]-1
		if (FASTHPRECOVERY1<0)
			{d.gI("FASTHPRECOVERY1CHECK").checked=false}
		else if (FASTHPRECOVERY1>=0 && d.gI("FASTHPRECOVERY1CHECK").style.display=='block')
			{d.gI("FASTHPRECOVERY1CHECK").checked=true
			d.gI("FASTHPRECOVERY1").selectedIndex=(FASTHPRECOVERY1)}
		var FASTHPRECOVERY2=AFASTHPRECOVERY2[LVL]-1
		if (FASTHPRECOVERY2<0)
			{d.gI("FASTHPRECOVERY2CHECK").checked=false}
		else if (FASTHPRECOVERY2>=0 && d.gI("FASTHPRECOVERY2CHECK").style.display=='block')
			{d.gI("FASTHPRECOVERY2CHECK").checked=true
			d.gI("FASTHPRECOVERY2").selectedIndex=(FASTHPRECOVERY2)}
		var FASTHPRECOVERY3=AFASTHPRECOVERY3[LVL]-1
		if (FASTHPRECOVERY3<0)
			{d.gI("FASTHPRECOVERY3CHECK").checked=false}
		else if (FASTHPRECOVERY3>=0 && d.gI("FASTHPRECOVERY3CHECK").style.display=='block')
			{d.gI("FASTHPRECOVERY3CHECK").checked=true
			d.gI("FASTHPRECOVERY3").selectedIndex=(FASTHPRECOVERY3)}
		var FASTHPRECOVERY4=AFASTHPRECOVERY4[LVL]-1
		if (FASTHPRECOVERY4<0)
			{d.gI("FASTHPRECOVERY4CHECK").checked=false}
		else if (FASTHPRECOVERY4>=0 && d.gI("FASTHPRECOVERY4CHECK").style.display=='block')
			{d.gI("FASTHPRECOVERY4CHECK").checked=true
			d.gI("FASTHPRECOVERY4").selectedIndex=(FASTHPRECOVERY4)}
		var FASTMANARECOVERY1=AFASTMANARECOVERY1[LVL]-1
		if (FASTMANARECOVERY1<0)
			{d.gI("FASTMANARECOVERY1CHECK").checked=false}
		else if (FASTMANARECOVERY1>=0 && d.gI("FASTMANARECOVERY1CHECK").style.display=='block')
			{d.gI("FASTMANARECOVERY1CHECK").checked=true
			d.gI("FASTMANARECOVERY1").selectedIndex=(FASTMANARECOVERY1)}
		var FASTMANARECOVERY2=AFASTMANARECOVERY2[LVL]-1
		if (FASTMANARECOVERY2<0)
			{d.gI("FASTMANARECOVERY2CHECK").checked=false}
		else if (FASTMANARECOVERY2>=0 && d.gI("FASTMANARECOVERY2CHECK").style.display=='block')
			{d.gI("FASTMANARECOVERY2CHECK").checked=true
			d.gI("FASTMANARECOVERY2").selectedIndex=(FASTMANARECOVERY2)}
		var FOCUSMIND1=AFOCUSMIND1[LVL]-1
		if (FOCUSMIND1<0)
			{d.gI("FOCUSMIND1CHECK").checked=false}
		else if (FOCUSMIND1>=0 && d.gI("FOCUSMIND1CHECK").style.display=='block')
			{d.gI("FOCUSMIND1CHECK").checked=true
			d.gI("FOCUSMIND1").selectedIndex=(FOCUSMIND1)}
		var FOCUSMIND2=AFOCUSMIND2[LVL]-1
		if (FOCUSMIND2<0)
			{d.gI("FOCUSMIND2CHECK").checked=false}
		else if (FOCUSMIND2>=0 && d.gI("FOCUSMIND2CHECK").style.display=='block')
			{d.gI("FOCUSMIND2CHECK").checked=true
			d.gI("FOCUSMIND2").selectedIndex=(FOCUSMIND2)}
		var VITALFORCE1=AVITALFORCE1[LVL]-1
		if (VITALFORCE1<0)
			{d.gI("VITALFORCE1CHECK").checked=false}
		else if (VITALFORCE1>=0 && d.gI("VITALFORCE1CHECK").style.display=='block')
			{d.gI("VITALFORCE1CHECK").checked=true
			d.gI("VITALFORCE1").selectedIndex=(VITALFORCE1)}
		var VITALFORCE2=AVITALFORCE2[LVL]-1
		if (VITALFORCE2<0)
			{d.gI("VITALFORCE2CHECK").checked=false}
		else if (VITALFORCE2>=0 && d.gI("VITALFORCE2CHECK").style.display=='block')
			{d.gI("VITALFORCE2CHECK").checked=true
			d.gI("VITALFORCE2").selectedIndex=(VITALFORCE2)}
		var CRITICALPOWER1=ACRITICALPOWER1[LVL]-1
		if (CRITICALPOWER1<0)
			{d.gI("CRITICALPOWER1CHECK").checked=false}
		else if (CRITICALPOWER1>=0 && d.gI("CRITICALPOWER1CHECK").style.display=='block')
			{d.gI("CRITICALPOWER1CHECK").checked=true
			d.gI("CRITICALPOWER1").selectedIndex=(CRITICALPOWER1)}
		var CRITICALPOWER2=ACRITICALPOWER2[LVL]-1
		if (CRITICALPOWER2<0)
			{d.gI("CRITICALPOWER2CHECK").checked=false}
		else if (CRITICALPOWER2>=0 && d.gI("CRITICALPOWER2CHECK").style.display=='block')
			{d.gI("CRITICALPOWER2CHECK").checked=true
			d.gI("CRITICALPOWER2").selectedIndex=(CRITICALPOWER2)}
		var AEGIS=AAEGIS[LVL]-1
		if (AEGIS<0)
			{d.gI("AEGISCHECK").checked=false}
		else if (AEGIS>=0 && d.gI("AEGISCHECK").style.display=='block')
			{d.gI("AEGISCHECK").checked=true}
	}
	if (d.gI("AEGISCHECK").checked==false)
		{d.gI("AEGIS").disabled=true;}
	else
		{d.gI("AEGIS").disabled=false;}
	if (d.gI("AGILEMOVEMENT1CHECK").checked==false)
		{d.gI("AGILEMOVEMENT1").disabled=true;}
	else
		{d.gI("AGILEMOVEMENT1").disabled=false;}
	if (d.gI("AGILEMOVEMENT2CHECK").checked==false)
		{d.gI("AGILEMOVEMENT2").disabled=true;}
	else
		{d.gI("AGILEMOVEMENT2").disabled=false;}
	if (d.gI("AM1CHECK").checked==false)
		{d.gI("AM1").disabled=true;}
	else
		{d.gI("AM1").disabled=false;}
	if (d.gI("AM2CHECK").checked==false)
		{d.gI("AM2").disabled=true;}
	else
		{d.gI("AM2").disabled=false;}
	if (d.gI("AM3CHECK").checked==false)
		{d.gI("AM3").disabled=true;}
	else
		{d.gI("AM3").disabled=false;}
	if (d.gI("AMFCHECK").checked==false)
		{d.gI("AMF").disabled=true;}
	else if (d.gI("AMFCHECK").checked==true)
		{d.gI("AMF").disabled=false;}
	if (d.gI("AMMCHECK").checked==false)
		{d.gI("AMM").disabled=true;}
	else
		{d.gI("AMM").disabled=false;}
	if (d.gI("BLUNTM1CHECK").checked==false)
		{d.gI("BLUNTM1").disabled=true;}
	else
		{d.gI("BLUNTM1").disabled=false;}
	if (d.gI("BLUNTM2CHECK").checked==false)
		{d.gI("BLUNTM2").disabled=true;}
	else
		{d.gI("BLUNTM2").disabled=false;}
	if (d.gI("BOOSTASPD1CHECK").checked==false)
		{d.gI("BOOSTASPD1").disabled=true;}
	else
		{d.gI("BOOSTASPD1").disabled=false;}
	if (d.gI("BOOSTASPD2CHECK").checked==false)
		{d.gI("BOOSTASPD2").disabled=true;}
	else
		{d.gI("BOOSTASPD2").disabled=false;}
	if (d.gI("BOOSTEVASION1CHECK").checked==false)
		{d.gI("BOOSTEVASION1").disabled=true;}
	else
		{d.gI("BOOSTEVASION1").disabled=false;}
	if (d.gI("BOOSTEVASION2CHECK").checked==false)
		{d.gI("BOOSTEVASION2").disabled=true;}
	else
		{d.gI("BOOSTEVASION2").disabled=false;}
	if (d.gI("BOOSTHP1CHECK").checked==false)
		{d.gI("BOOSTHP1").disabled=true;}
	else
		{d.gI("BOOSTHP1").disabled=false;}
	if (d.gI("BOOSTHP2CHECK").checked==false)
		{d.gI("BOOSTHP2").disabled=true;}
	else
		{d.gI("BOOSTHP2").disabled=false;}
	if (d.gI("BOOSTHP3CHECK").checked==false)
		{d.gI("BOOSTHP3").disabled=true;}
	else
		{d.gI("BOOSTHP3").disabled=false;}
	if (d.gI("BOOSTMP1CHECK").checked==false)
		{d.gI("BOOSTMP1").disabled=true;}
	else
		{d.gI("BOOSTMP1").disabled=false;}
	if (d.gI("BOOSTMP2CHECK").checked==false)
		{d.gI("BOOSTMP2").disabled=true;}
	else
		{d.gI("BOOSTMP2").disabled=false;}
	if (d.gI("BOWM1CHECK").checked==false)
		{d.gI("BOWM1").disabled=true;}
	else
		{d.gI("BOWM1").disabled=false;}
	if (d.gI("BOWM2CHECK").checked==false)
		{d.gI("BOWM2").disabled=true;}
	else
		{d.gI("BOWM2").disabled=false;}
	if (d.gI("CLANGUIDANCECHECK").checked==false)
		{d.gI("CLANGUIDANCE").disabled=true;}
	else
		{d.gI("CLANGUIDANCE").disabled=false;}
	if (d.gI("CLANPDEFCHECK").checked==false)
		{d.gI("CLANPDEF").disabled=true;}
	else
		{d.gI("CLANPDEF").disabled=false;}
	if (d.gI("CLANMDEFCHECK").checked==false)
		{d.gI("CLANMDEF").disabled=true;}
	else
		{d.gI("CLANMDEF").disabled=false;}
	if (d.gI("CLANPATKCHECK").checked==false)
		{d.gI("CLANPATK").disabled=true;}
	else
		{d.gI("CLANPATK").disabled=false;}
	if (d.gI("CLANCPCHECK").checked==false)
		{d.gI("CLANCP").disabled=true;}
	else
		{d.gI("CLANCP").disabled=false;}
	if (d.gI("CLANHPCHECK").checked==false)
		{d.gI("CLANHP").disabled=true;}
	else
		{d.gI("CLANHP").disabled=false;}
	if (d.gI("CLANSPEEDCHECK").checked==false)
		{d.gI("CLANSPEED").disabled=true;}
	else
		{d.gI("CLANSPEED").disabled=false;}
	if (d.gI("CLEARMINDCHECK").checked==false)
		{d.gI("CLEARMIND").disabled=true;}
	else
		{d.gI("CLEARMIND").disabled=false;}
	if (d.gI("CRITICALCHANCE1CHECK").checked==false)
		{d.gI("CRITICALCHANCE1").disabled=true;}
	else
		{d.gI("CRITICALCHANCE1").disabled=false;}
	if (d.gI("CRITICALCHANCE2CHECK").checked==false)
		{d.gI("CRITICALCHANCE2").disabled=true;}
	else
		{d.gI("CRITICALCHANCE2").disabled=false;}
	if (d.gI("CRITICALPOWER1CHECK").checked==false)
		{d.gI("CRITICALPOWER1").disabled=true;}
	else
		{d.gI("CRITICALPOWER1").disabled=false;}
	if (d.gI("CRITICALPOWER2CHECK").checked==false)
		{d.gI("CRITICALPOWER2").disabled=true;}
	else
		{d.gI("CRITICALPOWER2").disabled=false;}
	if (d.gI("DAGGERM1CHECK").checked==false)
		{d.gI("DAGGERM1").disabled=true;}
	else
		{d.gI("DAGGERM1").disabled=false;}
	if (d.gI("DAGGERM2CHECK").checked==false)
		{d.gI("DAGGERM2").disabled=true;}
	else
		{d.gI("DAGGERM2").disabled=false;}
	if (d.gI("DUALMCHECK").checked==false)
		{d.gI("DUALM").disabled=true;}
	else
		{d.gI("DUALM").disabled=false;}
	if (d.gI("ESPRIT1CHECK").checked==false)
		{d.gI("ESPRIT1").disabled=true;}
	else
		{d.gI("ESPRIT1").disabled=false;}
	if (d.gI("ESPRIT2CHECK").checked==false)
		{d.gI("ESPRIT2").disabled=true;}
	else
		{d.gI("ESPRIT2").disabled=false;}
	if (d.gI("FASTCAST1CHECK").checked==false)
		{d.gI("FASTCAST1").disabled=true;}
	else
		{d.gI("FASTCAST1").disabled=false;}
	if (d.gI("FASTCAST2CHECK").checked==false)
		{d.gI("FASTCAST2").disabled=true;}
	else
		{d.gI("FASTCAST2").disabled=false;}
	if (d.gI("FASTHPRECOVERY1CHECK").checked==false)
		{d.gI("FASTHPRECOVERY1").disabled=true;}
	else
		{d.gI("FASTHPRECOVERY1").disabled=false;}
	if (d.gI("FASTHPRECOVERY2CHECK").checked==false)
		{d.gI("FASTHPRECOVERY2").disabled=true;}
	else
		{d.gI("FASTHPRECOVERY2").disabled=false;}
	if (d.gI("FASTHPRECOVERY3CHECK").checked==false)
		{d.gI("FASTHPRECOVERY3").disabled=true;}
	else
		{d.gI("FASTHPRECOVERY3").disabled=false;}
	if (d.gI("FASTHPRECOVERY4CHECK").checked==false)
		{d.gI("FASTHPRECOVERY4").disabled=true;}
	else
		{d.gI("FASTHPRECOVERY4").disabled=false;}
	if (d.gI("FASTMANARECOVERY1CHECK").checked==false)
		{d.gI("FASTMANARECOVERY1").disabled=true;}
	else
		{d.gI("FASTMANARECOVERY1").disabled=false;}
	if (d.gI("FASTMANARECOVERY2CHECK").checked==false)
		{d.gI("FASTMANARECOVERY2").disabled=true;}
	else
		{d.gI("FASTMANARECOVERY2").disabled=false;}
	if (d.gI("FINALFORTRESSCHECK").checked==false)
		{d.gI("FINALFORTRESS").disabled=true;}
	else
		{d.gI("FINALFORTRESS").disabled=false;}
	if (d.gI("FINALFRENZYCHECK").checked==false)
		{d.gI("FINALFRENZY").disabled=true;}
	else
		{d.gI("FINALFRENZY").disabled=false;}
	if (d.gI("FISTM1CHECK").checked==false)
		{d.gI("FISTM1").disabled=true;}
	else
		{d.gI("FISTM1").disabled=false;}
	if (d.gI("FISTM2CHECK").checked==false)
		{d.gI("FISTM2").disabled=true;}
	else
		{d.gI("FISTM2").disabled=false;}
	if (d.gI("FOCUSMIND1CHECK").checked==false)
		{d.gI("FOCUSMIND1").disabled=true;}
	else
		{d.gI("FOCUSMIND1").disabled=false;}
	if (d.gI("FOCUSMIND2CHECK").checked==false)
		{d.gI("FOCUSMIND2").disabled=true;}
	else
		{d.gI("FOCUSMIND2").disabled=false;}
	if (d.gI("HMK1CHECK").checked==false)
		{d.gI("HMK1").disabled=true;}
	else
		{d.gI("HMK1").disabled=false;}
	if (d.gI("HMK2CHECK").checked==false)
		{d.gI("HMK2").disabled=true;}
	else
		{d.gI("HMK2").disabled=false;}
	if (d.gI("HMW1CHECK").checked==false)
		{d.gI("HMW1").disabled=true;}
	else
		{d.gI("HMW1").disabled=false;}
	if (d.gI("HMW2CHECK").checked==false)
		{d.gI("HMW2").disabled=true;}
	else
		{d.gI("HMW2").disabled=false;}
	if (d.gI("HMO1CHECK").checked==false)
		{d.gI("HMO1").disabled=true;}
	else
		{d.gI("HMO1").disabled=false;}
	if (d.gI("HMO2CHECK").checked==false)
		{d.gI("HMO2").disabled=true;}
	else
		{d.gI("HMO2").disabled=false;}
	if (d.gI("HMO3CHECK").checked==false)
		{d.gI("HMO3").disabled=true;}
	else
		{d.gI("HMO3").disabled=false;}
	if (d.gI("HMPCHECK").checked==false)
		{d.gI("HMP").disabled=true;}
	else
		{d.gI("HMP").disabled=false;}
	if (d.gI("LMW1CHECK").checked==false)
		{d.gI("LMW1").disabled=true;}
	else
		{d.gI("LMW1").disabled=false;}
	if (d.gI("LMW2CHECK").checked==false)
		{d.gI("LMW2").disabled=true;}
	else
		{d.gI("LMW2").disabled=false;}
	if (d.gI("LMR1CHECK").checked==false)
		{d.gI("LMR1").disabled=true;}
	else
		{d.gI("LMR1").disabled=false;}
	if (d.gI("LMR2CHECK").checked==false)
		{d.gI("LMR2").disabled=true;}
	else
		{d.gI("LMR2").disabled=false;}
	if (d.gI("LMO1CHECK").checked==false)
		{d.gI("LMO1").disabled=true;}
	else
		{d.gI("LMO1").disabled=false;}
	if (d.gI("LMO2CHECK").checked==false)
		{d.gI("LMO2").disabled=true;}
	else
		{d.gI("LMO2").disabled=false;}
	if (d.gI("LMO3CHECK").checked==false)
		{d.gI("LMO3").disabled=true;}
	else
		{d.gI("LMO3").disabled=false;}
	if (d.gI("LMH1CHECK").checked==false)
		{d.gI("LMH1").disabled=true;}
	else
		{d.gI("LMH1").disabled=false;}
	if (d.gI("LMH2CHECK").checked==false)
		{d.gI("LMH2").disabled=true;}
	else
		{d.gI("LMH2").disabled=false;}
	if (d.gI("LMSCHECK").checked==false)
		{d.gI("LMS").disabled=true;}
	else
		{d.gI("LMS").disabled=false;}
	if (d.gI("MR1CHECK").checked==false)
		{d.gI("MR1").disabled=true;}
	else
		{d.gI("MR1").disabled=false;}
	if (d.gI("MR2CHECK").checked==false)
		{d.gI("MR2").disabled=true;}
	else
		{d.gI("MR2").disabled=false;}
	if (d.gI("POLEM1CHECK").checked==false)
		{d.gI("POLEM1").disabled=true;}
	else
		{d.gI("POLEM1").disabled=false;}
	if (d.gI("POLEM2CHECK").checked==false)
		{d.gI("POLEM2").disabled=true;}
	else
		{d.gI("POLEM2").disabled=false;}
	if (d.gI("QUICKSTEP1CHECK").checked==false)
		{d.gI("QUICKSTEP1").disabled=true;}
	else
		{d.gI("QUICKSTEP1").disabled=false;}
	if (d.gI("QUICKSTEP2CHECK").checked==false)
		{d.gI("QUICKSTEP2").disabled=true;}
	else
		{d.gI("QUICKSTEP2").disabled=false;}
	if (d.gI("QUIVEROFHOLDINGCHECK").checked==false)
		{d.gI("QUIVEROFHOLDING").disabled=true;}
	else
		{d.gI("QUIVEROFHOLDING").disabled=false;}
	if (d.gI("RMN1CHECK").checked==false)
		{d.gI("RMN1").disabled=true;}
	else
		{d.gI("RMN1").disabled=false;}
	if (d.gI("RMN2CHECK").checked==false)
		{d.gI("RMN2").disabled=true;}
	else
		{d.gI("RMN2").disabled=false;}
	if (d.gI("RMH1CHECK").checked==false)
		{d.gI("RMH1").disabled=true;}
	else
		{d.gI("RMH1").disabled=false;}
	if (d.gI("RMH2CHECK").checked==false)
		{d.gI("RMH2").disabled=true;}
	else
		{d.gI("RMH2").disabled=false;}
	if (d.gI("RMO1CHECK").checked==false)
		{d.gI("RMO1").disabled=true;}
	else
		{d.gI("RMO1").disabled=false;}
	if (d.gI("RMO2CHECK").checked==false)
		{d.gI("RMO2").disabled=true;}
	else
		{d.gI("RMO2").disabled=false;}
	if (d.gI("RMO3CHECK").checked==false)
		{d.gI("RMO3").disabled=true;}
	else
		{d.gI("RMO3").disabled=false;}
	if (d.gI("SEALOFSTRIFECHECK").checked==false)
		{d.gI("SEALOFSTRIFE").disabled=true;}
	else
		{d.gI("SEALOFSTRIFE").disabled=false;}
	if (d.gI("SHADOWSENSECHECK").checked==false)
		{d.gI("SHADOWSENSE").disabled=true;}
	else
		{d.gI("SHADOWSENSE").disabled=false;}
	if (d.gI("SHIELDMASTERY1CHECK").checked==false)
		{d.gI("SHIELDMASTERY1").disabled=true;}
	else
		{d.gI("SHIELDMASTERY1").disabled=false;}
	if (d.gI("SHIELDMASTERY2CHECK").checked==false)
		{d.gI("SHIELDMASTERY2").disabled=true;}
	else
		{d.gI("SHIELDMASTERY2").disabled=false;}
//Sword/Blunt Mastery for knights
	if (d.gI("KSBM1CHECK").checked==false)
		{d.gI("KSBM1").disabled=true;}
	else
		{d.gI("KSBM1").disabled=false;}
	if (d.gI("KSBM2CHECK").checked==false)
		{d.gI("KSBM2").disabled=true;}
	else
		{d.gI("KSBM2").disabled=false;}
//Sword/Blunt Mastery for other classes
	if (d.gI("WSBM1CHECK").checked==false)
		{d.gI("WSBM1").disabled=true;}
	else if (d.gI("WSBM1CHECK").checked==true)
		{d.gI("WSBM1").disabled=false;}
	if (d.gI("WSBM2CHECK").checked==false)
		{d.gI("WSBM2").disabled=true;}
	else if (d.gI("WSBM2CHECK").checked==true)
		{d.gI("WSBM2").disabled=false;}
	if (d.gI("THM1CHECK").checked==false)
		{d.gI("THM1").disabled=true;}
	else
		{d.gI("THM1").disabled=false;}
	if (d.gI("THM2CHECK").checked==false)
		{d.gI("THM2").disabled=true;}
	else
		{d.gI("THM2").disabled=false;}
	if (d.gI("VITALFORCE1CHECK").checked==false)
		{d.gI("VITALFORCE1").disabled=true;}
	else
		{d.gI("VITALFORCE1").disabled=false;}
	if (d.gI("VITALFORCE2CHECK").checked==false)
		{d.gI("VITALFORCE2").disabled=true;}
	else
		{d.gI("VITALFORCE2").disabled=false;}
	if (d.gI("WEIGHTLIMIT1CHECK").checked==false)
		{d.gI("WEIGHTLIMIT1").disabled=true;}
	else
		{d.gI("WEIGHTLIMIT1").disabled=false;}
	if (d.gI("WEIGHTLIMIT2CHECK").checked==false)
		{d.gI("WEIGHTLIMIT2").disabled=true;}
	else
		{d.gI("WEIGHTLIMIT2").disabled=false;}
	if (d.gI("WEIGHTLIMIT3CHECK").checked==false)
		{d.gI("WEIGHTLIMIT3").disabled=true;}
	else
		{d.gI("WEIGHTLIMIT3").disabled=false;}
	if (d.gI("WMFCHECK").checked==false)
		{d.gI("WMF").disabled=true;}
	else
		{d.gI("WMF").disabled=false;}
	if (d.gI("WMM1CHECK").checked==false)
		{d.gI("WMM1").disabled=true;}
	else
		{d.gI("WMM1").disabled=false;}
	if (d.gI("WMM2CHECK").checked==false)
		{d.gI("WMM2").disabled=true;}
	else
		{d.gI("WMM2").disabled=false;}
	if (d.gI("WMM3CHECK").checked==false)
		{d.gI("WMM3").disabled=true;}
	else
		{d.gI("WMM3").disabled=false;}
}
function buffs(setbuff) {
//Buffs Autoselect
var setbuffs=d.gI("SETBUFFS").value
var APROPH=new Array("n",1,"n","n","n","n","n","n","n",3,"n","n","n","n","n",0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var ABTB1=new Array("n",5,5,4,3,2,1,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var ABTB2=new Array("n",5,5,4,3,2,1,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var ABTB3=new Array("n",5,5,4,3,2,1,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var ABTS=new Array("n",5,5,4,3,2,1,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var AFCS=new Array("n",2,2,2,2,2,1,1,0,2,2,2,1,1,0,5,5,4,4,3,3,3,3,"n","n","n","n","n","n","n","n","n","n")
var AHASTE=new Array("n",1,1,1,1,1,0,0,"n","n","n","n","n","n","n",3,3,3,3,3,3,2,2,"n","n","n","n","n","n","n","n","n","n")
var AEMP=new Array("n","n","n","n","n","n","n","n","n",2,2,2,1,1,0,"n","n","n","n","n","n","n","n","n","n",4,"n","n","n","n","n","n","n")
var AWW=new Array("n",1,1,1,1,1,1,1,1,1,1,1,1,1,1,"n","n","n","n","n","n","n","n","n","n",3,3,2,"n","n","n","n","n")
var AMB1=new Array("n",1,1,1,1,1,0,0,"n","n","n","n","n","n","n",4,4,4,4,4,4,4,3,3,3,7,7,7,7,6,6,5,5)
var AMB2=new Array("n",1,1,1,1,1,0,0,"n","n","n","n","n","n","n",4,4,4,4,4,4,4,3,3,3,7,7,7,7,6,6,5,5)
var AMB3=new Array("n",1,1,1,1,1,0,0,"n","n","n","n","n","n","n",4,4,4,4,4,4,4,3,3,3,7,7,7,7,6,6,5,5)
var AAGI=new Array("n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",5,5,5,5,5,5,4,4,3,3,8,8,8,8,7,7,6,6)
var AGUID=new Array("n",2,2,2,2,1,1,0,0,2,2,1,1,0,0,5,5,5,5,4,3,3,3,"n","n",8,8,8,8,7,6,6,6)
var AACU=new Array("n",2,2,2,2,2,2,1,1,"n","n","n","n","n","n",5,5,5,5,5,5,4,4,4,3,8,8,8,8,7,7,7,6)
var ASHIELD1=new Array("n",2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,8,8,8,8,8,8,8,8,8,5,5,5,5,5,4,4,3)
var ASHIELD2=new Array("n",2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,8,8,8,8,8,8,8,8,8,5,5,5,5,5,4,4,3)
var AMIGHT1=new Array("n",2,2,2,2,2,2,2,2,2,2,2,2,2,2,6,6,6,6,6,6,6,6,6,5,9,9,9,9,9,9,8,8)
var AMIGHT2=new Array("n",2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,8,8,8,8,8,8,8,8,7,11,11,11,11,11,11,10,10)
var ABLESSSHIELD=new Array("n",2,2,2,2,1,1,0,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n",8,8,8,8,7,7,6,6,"n","n","n","n")
var AREGENERATION=new Array("n",2,2,2,2,1,1,0,0,"n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n")
var ADEATHWHISPER=new Array("n",2,2,2,2,1,1,0,0,2,2,1,1,0,0,5,5,5,5,5,5,4,3,3,"n",6,"n","n","n","n","n","n")
if (setbuff && setbuffs=="0"){
	d.gI("BTB1CHECK").checked=false
	d.gI("BTB2CHECK").checked=false
	d.gI("BTB3CHECK").checked=false
	d.gI("VITCHECK").checked=false
	d.gI("BTSCHECK").checked=false
	d.gI("SAGCHECK").checked=false
	d.gI("MIGHT1CHECK").checked=false
	d.gI("MIGHT2CHECK").checked=false
	d.gI("DOWACHECK").checked=false
	d.gI("GREATERMIGHTCHECK").checked=false
	d.gI("FRENZY1CHECK").checked=false
	d.gI("FRENZY2CHECK").checked=false
	d.gI("WARCRY1CHECK").checked=false
	d.gI("WARCRY2CHECK").checked=false
	d.gI("RAGE1CHECK").checked=false
	d.gI("RAGE2CHECK").checked=false
	d.gI("EMPCHECK").checked=false
	d.gI("DOMYCHECK").checked=false
	d.gI("SHIELD1CHECK").checked=false
	d.gI("SHIELD2CHECK").checked=false
	d.gI("SOECHECK").checked=false
	d.gI("GREATERSHIELDCHECK").checked=false
	d.gI("GUTS1CHECK").checked=false
	d.gI("GUTS2CHECK").checked=false
	d.gI("MAJ1CHECK").checked=false
	d.gI("MAJ2CHECK").checked=false
	d.gI("MB1CHECK").checked=false
	d.gI("MB2CHECK").checked=false
	d.gI("MB3CHECK").checked=false
	d.gI("WARDCHECK").checked=false
	d.gI("GUIDCHECK").checked=false
	d.gI("DOICHECK").checked=false
	d.gI("HECHECK").checked=false
	d.gI("AGICHECK").checked=false
	d.gI("SWATCHECK").checked=false
	d.gI("UECHECK").checked=false
	d.gI("EVSHTCHECK").checked=false
	d.gI("FCSCHECK").checked=false
	d.gI("SOHCHECK").checked=false
	d.gI("WWCHECK").checked=false
	d.gI("SWINDCHECK").checked=false
	d.gI("DSHCHECK").checked=false
	d.gI("DASH1CHECK").checked=false
	d.gI("DASH2CHECK").checked=false
	d.gI("BLINDINGCHECK").checked=false
	d.gI("HASTECHECK").checked=false
	d.gI("DFURYCHECK").checked=false
	d.gI("RAPID1CHECK").checked=false
	d.gI("RAPID2CHECK").checked=false
	d.gI("DUELCHECK").checked=false
	d.gI("TFCHECK").checked=false
	d.gI("ACUCHECK").checked=false
	d.gI("DCONCHECK").checked=false
	d.gI("DEATHWHISPERCHECK").checked=false
	d.gI("DANCEOFFIRECHECK").checked=false
	d.gI("BLESSSHIELDCHECK").checked=false
	d.gI("ADVANCEDBLOCKCHECK").checked=false
	d.gI("REGENERATIONCHECK").checked=false
	d.gI("SONGOFLIFECHECK").checked=false
	d.gI("SONGOFMEDCHECK").checked=false
	d.gI("SERAPHIMCHECK").checked=false
	d.gI("MANAREGENCHECK").checked=false
	d.gI("ZERKCHECK").checked=false
	d.gI("QUEENCHECK").checked=false
	d.gI("PROPHCHECK").checked=false
	d.gI("DECREASEWEIGHTCHECK").checked=false
	d.gI("UD1CHECK").checked=false
	d.gI("UD2CHECK").checked=false
	d.gI("TOTEM1CHECK").checked=false
	d.gI("TOTEM2CHECK").checked=false
	d.gI("SNIPECHECK").checked=false
	d.gI("STEALTHCHECK").checked=false
	d.gI("FACHECK").checked=false
	d.gI("ZEALOTCHECK").checked=false
	d.gI("ANGELICICONCHECK").checked=false
	d.gI("RAPIDFIRECHECK").checked=false
	d.gI("DEADEYECHECK").checked=false
	d.gI("BLESSINGOFPROPHECYCHECK").checked=false
	d.gI("HEROICCHECK").checked=false
	}
else if (setbuff) {
	var PROPH=APROPH[setbuffs]
	if (PROPH>=0)
		{d.gI("PROPHCHECK").checked=true
		d.gI("PROPH").selectedIndex=PROPH}
	var BTB1=ABTB1[setbuffs]
	if (BTB1>=0 && d.gI("BTB1CHECK").style.display=='block')
		{d.gI("BTB1CHECK").checked=true
		d.gI("BTB1").selectedIndex=BTB1}
	var BTB2=ABTB2[setbuffs]
	if (BTB2>=0 && d.gI("BTB2CHECK").style.display=='block')
		{d.gI("BTB2CHECK").checked=true
		d.gI("BTB2").selectedIndex=BTB2}
	var BTB3=ABTB3[setbuffs]
	if (BTB3>=0 && d.gI("BTB3CHECK").style.display=='block')
		{d.gI("BTB3CHECK").checked=true
		d.gI("BTB3").selectedIndex=BTB3}
	var BTS=ABTS[setbuffs]
	if (BTS>=0)
		{d.gI("BTSCHECK").checked=true
		d.gI("BTS").selectedIndex=BTS}
	var FCS=AFCS[setbuffs]
	if (FCS>=0)
		{d.gI("FCSCHECK").checked=true
		d.gI("FCS").selectedIndex=FCS}
	var HASTE=AHASTE[setbuffs]
	if (HASTE>=0)
		{d.gI("HASTECHECK").checked=true
		d.gI("HASTE").selectedIndex=HASTE}
	var EMP=AEMP[setbuffs]
	if (EMP>=0)
		{d.gI("EMPCHECK").checked=true
		d.gI("EMP").selectedIndex=EMP}
	var WW=AWW[setbuffs]
	if (WW>=0)
		{d.gI("WWCHECK").checked=true
		d.gI("WW").selectedIndex=WW}
	var MB1=AMB1[setbuffs]
	if (MB1>=0 && d.gI("MB1CHECK").style.display=='block')
		{d.gI("MB1CHECK").checked=true
		d.gI("MB1").selectedIndex=MB1}
	var MB2=AMB2[setbuffs]
	if (MB2>=0 && d.gI("MB2CHECK").style.display=='block')
		{d.gI("MB2CHECK").checked=true
		d.gI("MB2").selectedIndex=MB2}
	var MB3=AMB3[setbuffs]
	if (MB3>=0 && d.gI("MB3CHECK").style.display=='block')
		{d.gI("MB3CHECK").checked=true
		d.gI("MB3").selectedIndex=MB3}
	var AGI=AAGI[setbuffs]
	if (AGI>=0)
		{d.gI("AGICHECK").checked=true
		d.gI("AGI").selectedIndex=AGI}
	var GUID=AGUID[setbuffs]
	if (GUID>=0)
		{d.gI("GUIDCHECK").checked=true
		d.gI("GUID").selectedIndex=GUID}
	var ACU=AACU[setbuffs]
	if (ACU>=0)
		{d.gI("ACUCHECK").checked=true
		d.gI("ACU").selectedIndex=ACU}
	var BLESSSHIELD=ABLESSSHIELD[setbuffs]
	if (BLESSSHIELD>=0)
		{d.gI("BLESSSHIELDCHECK").checked=true
		d.gI("BLESSSHIELD").selectedIndex=BLESSSHIELD}
	var SHIELD1=ASHIELD1[setbuffs]
	if (SHIELD1>=0 && d.gI("SHIELD1CHECK").style.display=='block')
		{d.gI("SHIELD1CHECK").checked=true
		d.gI("SHIELD1").selectedIndex=SHIELD1}
	var SHIELD2=ASHIELD2[setbuffs]
	if (SHIELD2>=0 && d.gI("SHIELD2CHECK").style.display=='block')
		{d.gI("SHIELD2CHECK").checked=true
		d.gI("SHIELD2").selectedIndex=SHIELD2}
	var MIGHT1=AMIGHT1[setbuffs]
	if (MIGHT1>=0 && d.gI("MIGHT1CHECK").style.display=='block')
		{d.gI("MIGHT1CHECK").checked=true
		d.gI("MIGHT1").selectedIndex=MIGHT1}
	var MIGHT2=AMIGHT2[setbuffs]
	if (MIGHT2>=0 && d.gI("MIGHT2CHECK").style.display=='block')
		{d.gI("MIGHT2CHECK").checked=true
		d.gI("MIGHT2").selectedIndex=MIGHT2}
	var REGENERATION=AREGENERATION[setbuffs]
	if (REGENERATION>=0)
		{d.gI("REGENERATIONCHECK").checked=true
		d.gI("REGENERATION").selectedIndex=REGENERATION}
	var DEATHWHISPER=ADEATHWHISPER[setbuffs]
	if (DEATHWHISPER>=0)
		{d.gI("DEATHWHISPERCHECK").checked=true
		d.gI("DEATHWHISPER").selectedIndex=DEATHWHISPER}
}
	if (d.gI("ACUCHECK").checked==false)
		{d.gI("ACU").disabled=true;}
	else
		{d.gI("ACU").disabled=false;}
	if (d.gI("ADVANCEDBLOCKCHECK").checked==false)
		{d.gI("ADVANCEDBLOCK").disabled=true;}
	else
		{d.gI("ADVANCEDBLOCK").disabled=false;}
	if (d.gI("AGICHECK").checked==false)
		{d.gI("AGI").disabled=true;}
	else
		{d.gI("AGI").disabled=false;}
	if (d.gI("ANGELICICONCHECK").checked==false)
		{d.gI("ANGELICICON").disabled=true;}
	else
		{d.gI("ANGELICICON").disabled=false;}
	if (d.gI("ZERKCHECK").checked==false)
		{d.gI("ZERK").disabled=true;}
	else
		{d.gI("ZERK").disabled=false;}
	if (d.gI("BLESSSHIELDCHECK").checked==false)
		{d.gI("BLESSSHIELD").disabled=true;}
	else
		{d.gI("BLESSSHIELD").disabled=false;}
	if (d.gI("BTB1CHECK").checked==false)
		{d.gI("BTB1").disabled=true;}
	else
		{d.gI("BTB1").disabled=false;}
	if (d.gI("BTB2CHECK").checked==false)
		{d.gI("BTB2").disabled=true;}
	else
		{d.gI("BTB2").disabled=false;}
	if (d.gI("BTB3CHECK").checked==false)
		{d.gI("BTB3").disabled=true;}
	else
		{d.gI("BTB3").disabled=false;}
	if (d.gI("BTSCHECK").checked==false)
		{d.gI("BTS").disabled=true;}
	else
		{d.gI("BTS").disabled=false;}
	if (d.gI("BLINDINGCHECK").checked==false)
		{d.gI("BLINDING").disabled=true;}
	else
		{d.gI("BLINDING").disabled=false;}
	if (d.gI("DCONCHECK").checked==false)
		{d.gI("DCON").disabled=true;}
	else
		{d.gI("DCON").disabled=false;}
	if (d.gI("DANCEOFFIRECHECK").checked==false)
		{d.gI("DANCEOFFIRE").disabled=true;}
	else
		{d.gI("DANCEOFFIRE").disabled=false;}
	if (d.gI("DFURYCHECK").checked==false)
		{d.gI("DFURY").disabled=true;}
	else
		{d.gI("DFURY").disabled=false;}
	if (d.gI("DOICHECK").checked==false)
		{d.gI("DOI").disabled=true;}
	else
		{d.gI("DOI").disabled=false;}
	if (d.gI("DOMYCHECK").checked==false)
		{d.gI("DOMY").disabled=true;}
	else
		{d.gI("DOMY").disabled=false;}
	if (d.gI("DSHCHECK").checked==false)
		{d.gI("DSH").disabled=true;}
	else
		{d.gI("DSH").disabled=false;}
	if (d.gI("DOWACHECK").checked==false)
		{d.gI("DOWA").disabled=true;}
	else
		{d.gI("DOWA").disabled=false;}
	if (d.gI("DASH1CHECK").checked==false)
		{d.gI("DASH1").disabled=true;}
	else
		{d.gI("DASH1").disabled=false;}
	if (d.gI("DASH2CHECK").checked==false)
		{d.gI("DASH2").disabled=true;}
	else
		{d.gI("DASH2").disabled=false;}
	if (d.gI("DEADEYECHECK").checked==false)
		{d.gI("DEADEYE").disabled=true;}
	else
		{d.gI("DEADEYE").disabled=false;}
	if (d.gI("DEATHWHISPERCHECK").checked==false)
		{d.gI("DEATHWHISPER").disabled=true;}
	else
		{d.gI("DEATHWHISPER").disabled=false;}
	if (d.gI("DECREASEWEIGHTCHECK").checked==false)
		{d.gI("DECREASEWEIGHT").disabled=true;}
	else
		{d.gI("DECREASEWEIGHT").disabled=false;}
	if (d.gI("DUELCHECK").checked==false)
		{d.gI("DUEL").disabled=true;}
	else
		{d.gI("DUEL").disabled=false;}
	if (d.gI("EMPCHECK").checked==false)
		{d.gI("EMP").disabled=true;}
	else
		{d.gI("EMP").disabled=false;}
	if (d.gI("EVSHTCHECK").checked==false)
		{d.gI("EVSHT").disabled=true;}
	else
		{d.gI("EVSHT").disabled=false;}
	if (d.gI("FCSCHECK").checked==false)
		{d.gI("FCS").disabled=true;}
	else
		{d.gI("FCS").disabled=false;}
	if (d.gI("FACHECK").checked==false)
		{d.gI("FA").disabled=true;}
	else
		{d.gI("FA").disabled=false;}
	if (d.gI("FOCDCHECK").checked==false)
		{d.gI("FOCD").disabled=true;}
	else
		{d.gI("FOCD").disabled=false;}
	if (d.gI("FRENZY1CHECK").checked==false)
		{d.gI("FRENZY1").disabled=true;
		d.gI("GUTS1CHECK").disabled=false}
	else
		{d.gI("FRENZY1").disabled=false;
		d.gI("GUTS1CHECK").disabled=true}
	if (d.gI("GUTS1CHECK").checked==false)
		{d.gI("GUTS1").disabled=true;
		d.gI("FRENZY1CHECK").disabled=false}
	else
		{d.gI("GUTS1").disabled=false;
		d.gI("FRENZY1CHECK").disabled=true}
	if (d.gI("FRENZY2CHECK").checked==false)
		{d.gI("FRENZY2").disabled=true;
		d.gI("GUTS2CHECK").disabled=false}
	else
		{d.gI("FRENZY2").disabled=false;
		d.gI("GUTS2CHECK").disabled=true}
	if (d.gI("GUTS2CHECK").checked==false)
		{d.gI("GUTS2").disabled=true;
		d.gI("FRENZY2CHECK").disabled=false}
	else
		{d.gI("GUTS2").disabled=false;
		d.gI("FRENZY2CHECK").disabled=true}
	if (d.gI("GREATERMIGHTCHECK").checked==true && d.gI("GREATERSHIELDCHECK").checked==false)
		{d.gI("GREATERMIGHT").disabled=false;
		d.gI("GREATERSHIELDCHECK").disabled=true;
		d.gI("GREATERSHIELDCHECK").checked=false;
		d.gI("GREATERSHIELD").disabled=true;}
	else if (d.gI("GREATERSHIELDCHECK").checked==true && d.gI("GREATERMIGHTCHECK").checked==false)
		{d.gI("GREATERSHIELD").disabled=false;
		d.gI("GREATERMIGHTCHECK").disabled=true;
		d.gI("GREATERMIGHTCHECK").checked=false;
		d.gI("GREATERMIGHT").disabled=true;}
	else if (d.gI("GREATERSHIELDCHECK").checked==true && d.gI("GREATERMIGHTCHECK").checked==true)
		{d.gI("GREATERMIGHT").disabled=false;
		d.gI("GREATERSHIELDCHECK").disabled=true;
		d.gI("GREATERSHIELDCHECK").checked=false;
		d.gI("GREATERSHIELD").disabled=true;}
	else
		{d.gI("GREATERMIGHT").disabled=true;
		d.gI("GREATERSHIELD").disabled=true;
		d.gI("GREATERSHIELDCHECK").disabled=false;
		d.gI("GREATERMIGHTCHECK").disabled=false;}
	if (d.gI("GUIDCHECK").checked==false)
		{d.gI("GUID").disabled=true;}
	else
		{d.gI("GUID").disabled=false;}
	if (d.gI("HASTECHECK").checked==false)
		{d.gI("HASTE").disabled=true;}
	else
		{d.gI("HASTE").disabled=false;}
	if (d.gI("HECHECK").checked==false)
		{d.gI("HE").disabled=true;}
	else
		{d.gI("HE").disabled=false;}
	if (d.gI("BLESSINGOFPROPHECYCHECK").checked==false)
		{d.gI("BLESSINGOFPROPHECY").disabled=true;}
	else
		{d.gI("BLESSINGOFPROPHECY").disabled=false;}
	if (d.gI("HEROICCHECK").checked==false)
		{d.gI("HEROIC").disabled=true;}
	else
		{d.gI("HEROIC").disabled=false;}
	if (d.gI("MB1CHECK").checked==false)
		{d.gI("MB1").disabled=true;}
	else
		{d.gI("MB1").disabled=false;}
	if (d.gI("MB2CHECK").checked==false)
		{d.gI("MB2").disabled=true;}
	else
		{d.gI("MB2").disabled=false;}
	if (d.gI("MB3CHECK").checked==false)
		{d.gI("MB3").disabled=true;}
	else
		{d.gI("MB3").disabled=false;}
	if (d.gI("MAJ1CHECK").checked==false)
		{d.gI("MAJ1").disabled=true;}
	else
		{d.gI("MAJ1").disabled=false;}
	if (d.gI("MAJ2CHECK").checked==false)
		{d.gI("MAJ2").disabled=true;}
	else
		{d.gI("MAJ2").disabled=false;}
	if (d.gI("MANAREGENCHECK").checked==false)
		{d.gI("MANAREGEN").disabled=true;}
	else
		{d.gI("MANAREGEN").disabled=false;}
	if (d.gI("MIGHT1CHECK").checked==false)
		{d.gI("MIGHT1").disabled=true;}
	else
		{d.gI("MIGHT1").disabled=false;}
	if (d.gI("MIGHT2CHECK").checked==false)
		{d.gI("MIGHT2").disabled=true;}
	else
		{d.gI("MIGHT2").disabled=false;}
	if (d.gI("PROPHCHECK").checked==false)
		{d.gI("PROPH").disabled=true;}
	else
		{d.gI("PROPH").disabled=false;}
	if (d.gI("QUEENCHECK").checked==false)
		{d.gI("QUEEN").disabled=true;}
	else
		{d.gI("QUEEN").disabled=false;}
	if (d.gI("RAGE1CHECK").checked==false)
		{d.gI("RAGE1").disabled=true;}
	else
		{d.gI("RAGE1").disabled=false;}
	if (d.gI("RAGE2CHECK").checked==false)
		{d.gI("RAGE2").disabled=true;}
	else
		{d.gI("RAGE2").disabled=false;}
	if (d.gI("RAPIDFIRECHECK").checked==false)
		{d.gI("RAPIDFIRE").disabled=true;}
	else
		{d.gI("RAPIDFIRE").disabled=false}
	if (d.gI("RAPID1CHECK").checked==false)
		{d.gI("RAPID1").disabled=true;}
	else
		{d.gI("RAPID1").disabled=false;}
	if (d.gI("RAPID2CHECK").checked==false)
		{d.gI("RAPID2").disabled=true;}
	else
		{d.gI("RAPID2").disabled=false;}
	if (d.gI("REGENERATIONCHECK").checked==false)
		{d.gI("REGENERATION").disabled=true;}
	else
		{d.gI("REGENERATION").disabled=false;}
	if (d.gI("SERAPHIMCHECK").checked==false)
		{d.gI("SERAPHIM").disabled=true;}
	else
		{d.gI("SERAPHIM").disabled=false;}
	if (d.gI("BLKSCHECK").checked==false)
		{d.gI("BLKS").disabled=true;
		d.gI("SHIELD1CHECK").disabled=false;
		d.gI("SHIELD2CHECK").disabled=false;}
	else if (d.gI("BLKSCHECK").checked==true)
		{d.gI("BLKS").disabled=false;
		d.gI("SHIELD1CHECK").disabled=true;
		d.gI("SHIELD1CHECK").checked=false;
		d.gI("SHIELD2CHECK").disabled=true;
		d.gI("SHIELD2CHECK").checked=false;}
	if (d.gI("SHIELD1CHECK").checked==false)
		{d.gI("SHIELD1").disabled=true;}
	else
		{d.gI("SHIELD1").disabled=false;}
	if (d.gI("SHIELD2CHECK").checked==false)
		{d.gI("SHIELD2").disabled=true;}
	else
		{d.gI("SHIELD2").disabled=false;}
	if (d.gI("SNIPECHECK").checked==false)
		{d.gI("SNIPE").disabled=true;}
	else
		{d.gI("SNIPE").disabled=false;}
	if (d.gI("SOECHECK").checked==false)
		{d.gI("SOEA").disabled=true;}
	else
		{d.gI("SOEA").disabled=false;}
	if (d.gI("SOHCHECK").checked==false)
		{d.gI("SOH").disabled=true;}
	else
		{d.gI("SOH").disabled=false;}
	if (d.gI("SONGOFLIFECHECK").checked==false)
		{d.gI("SONGOFLIFE").disabled=true;}
	else
		{d.gI("SONGOFLIFE").disabled=false;}
	if (d.gI("SONGOFMEDCHECK").checked==false)
		{d.gI("SONGOFMED").disabled=true;}
	else
		{d.gI("SONGOFMED").disabled=false;}
	if (d.gI("VITCHECK").checked==false)
		{d.gI("VIT").disabled=true;}
	else
		{d.gI("VIT").disabled=false;}
	if (d.gI("WARDCHECK").checked==false)
		{d.gI("WARD").disabled=true;}
	else
		{d.gI("WARD").disabled=false;}
	if (d.gI("SWATCHECK").checked==false)
		{d.gI("SWAT").disabled=true;}
	else
		{d.gI("SWAT").disabled=false;}
	if (d.gI("SWINDCHECK").checked==false)
		{d.gI("SWIND").disabled=true;}
	else
		{d.gI("SWIND").disabled=false;}
	if (d.gI("SAGCHECK").checked==false)
		{d.gI("SAG").disabled=true;}
	else
		{d.gI("SAG").disabled=false;}
	if (d.gI("STEALTHCHECK").checked==false)
		{d.gI("STEALTH").disabled=true;}
	else
		{d.gI("STEALTH").disabled=false;}
	if (d.gI("TFCHECK").checked==false)
		{d.gI("TF").disabled=true;}
	else
		{d.gI("TF").disabled=false;}
	if (d.gI("TOTEM1CHECK").checked==false)
		{d.gI("TOTEM1").disabled=true;}
	else
		{d.gI("TOTEM1").disabled=false;}
	if (d.gI("TOTEM2CHECK").checked==false)
		{d.gI("TOTEM2").disabled=true;}
	else
		{d.gI("TOTEM2").disabled=false;}
	if (d.gI("UD1CHECK").checked==false)
		{d.gI("UD1").disabled=true;}
	else
		{d.gI("UD1").disabled=false;}
	if (d.gI("UD2CHECK").checked==false)
		{d.gI("UD2").disabled=true;}
	else
		{d.gI("UD2").disabled=false;}
	if (d.gI("UECHECK").checked==false)
		{d.gI("UE").disabled=true;}
	else
		{d.gI("UE").disabled=false;}
	if (d.gI("WARCRY1CHECK").checked==false)
		{d.gI("WARCRY1").disabled=true;}
	else
		{d.gI("WARCRY1").disabled=false;}
	if (d.gI("WARCRY2CHECK").checked==false)
		{d.gI("WARCRY2").disabled=true;}
	else
		{d.gI("WARCRY2").disabled=false;}
	if (d.gI("BWWCHECK").checked==false)
		{d.gI("BWW").disabled=true;
		d.gI("WWCHECK").disabled=false;}
	else
		{d.gI("BWW").disabled=false;
		d.gI("WWCHECK").disabled=true;
		d.gI("WWCHECK").checked=false;}
	if (d.gI("WWCHECK").checked==false)
		{d.gI("WW").disabled=true;}
	else
		{d.gI("WW").disabled=false;}
	if (d.gI("ZEALOTCHECK").checked==false)
		{d.gI("ZEALOT").disabled=true;}
	else
		{d.gI("ZEALOT").disabled=false;}
}
function toggles() {
	if (d.gI("ACCTCHECK").checked==false)
		{d.gI("ACCT").disabled=true;}
	else
		{d.gI("ACCT").disabled=false;}
	if (d.gI("AEGISSTANCECHECK").checked==false)
		{d.gI("AEGISSTANCE").disabled=true;}
	else
		{d.gI("AEGISSTANCE").disabled=false;}
	if (d.gI("ARAGICHECK").checked==false)
		{d.gI("ARAGI").disabled=true;}
	else
		{d.gI("ARAGI").disabled=false;}
	if (d.gI("ARPCHECK").checked==false)
		{d.gI("ARP").disabled=true;}
	else
		{d.gI("ARP").disabled=false;}
	if (d.gI("ARWISCHECK").checked==false)
		{d.gI("ARWIS").disabled=true;}
	else
		{d.gI("ARWIS").disabled=false;}
	if (d.gI("FFURYCHECK").checked==false)
		{d.gI("FFURY").disabled=true;}
	else
		{d.gI("FFURY").disabled=false;}
	if (d.gI("FOCUSCHANCECHECK").checked==false)
		{d.gI("FOCUSCHANCE").disabled=true;}
	else
		{d.gI("FOCUSCHANCE").disabled=false;}
	if (d.gI("FOCDCHECK").checked==false)
		{d.gI("FOCD").disabled=true;}
	else
		{d.gI("FOCD").disabled=false;}
	if (d.gI("FOCUSPOWERCHECK").checked==false)
		{d.gI("FOCUSPOWER").disabled=true;}
	else
		{d.gI("FOCUSPOWER").disabled=false;}
	if (d.gI("GSCHECK").checked==false)
		{d.gI("GS").disabled=true;}
	else
		{d.gI("GS").disabled=false;}
	if (d.gI("PARRYCHECK").checked==false)
		{d.gI("PARRY").disabled=true;}
	else
		{d.gI("PARRY").disabled=false;}
	if (d.gI("POLEACCCHECK").checked==false)
		{d.gI("POLEACC").disabled=true;}
	else
		{d.gI("POLEACC").disabled=false;}
	if (d.gI("RIPOSTECHECK").checked==false)
		{d.gI("RIPOSTE").disabled=true;}
	else
		{d.gI("RIPOSTE").disabled=false;}
	if (d.gI("SHIELDFORTRESSCHECK").checked==false)
		{d.gI("SHIELDFORTRESS").disabled=true;}
	else
		{d.gI("SHIELDFORTRESS").disabled=false;}
	if (d.gI("SMCHECK").checked==false)
		{d.gI("SM").disabled=true;}
	else
		{d.gI("SM").disabled=false;}
	if (d.gI("SOUL1CHECK").checked==false)
		{d.gI("SOUL1").disabled=true;}
	else
		{d.gI("SOUL1").disabled=false;}
	if (d.gI("SOUL2CHECK").checked==false)
		{d.gI("SOUL2").disabled=true;}
	else
		{d.gI("SOUL2").disabled=false;}
	if (d.gI("SOUL3CHECK").checked==false)
		{d.gI("SOUL3").disabled=true;}
	else
		{d.gI("SOUL3").disabled=false;}
	if (d.gI("SGCHECK").checked==false)
		{d.gI("SG").disabled=true;}
	else
		{d.gI("SG").disabled=false;}
	if (d.gI("VICIOUSSTANCECHECK").checked==false)
		{d.gI("VICIOUSSTANCE").disabled=true;}
	else
		{d.gI("VICIOUSSTANCE").disabled=false;}
}
function debuffs() {
	if (d.gI("DEACCCHECK").checked==false)
		{d.gI("DEACC").disabled=true;}
	else
		{d.gI("DEACC").disabled=false;}
	if (d.gI("ARCANECHAOSCHECK").checked==false)
		{d.gI("ARCANECHAOS").disabled=true;}
	else
		{d.gI("ARCANECHAOS").disabled=false;}
	if (d.gI("ACCHECK").checked==false)
		{d.gI("ARCR").disabled=true;}
	else
		{d.gI("ARCR").disabled=false;}
	if (d.gI("DEASPDCHECK").checked==false)
		{d.gI("DEASPD").disabled=true;}
	else
		{d.gI("DEASPD").disabled=false;}
	if (d.gI("DECASTCHECK").checked==false)
		{d.gI("DECAST").disabled=true;}
	else
		{d.gI("DECAST").disabled=false;}
	if (d.gI("GLOOMCHECK").checked==false)
		{d.gI("GLOOM").disabled=true;}
	else
		{d.gI("GLOOM").disabled=false;}
	if (d.gI("COABYSSCHECK").checked==false)
		{d.gI("COABYSS").disabled=true;}
	else
		{d.gI("COABYSS").disabled=false;}
	if (d.gI("CODOOMCHECK").checked==false)
		{d.gI("CODOOM").disabled=true;}
	else
		{d.gI("CODOOM").disabled=false;}
	if (d.gI("COSHADECHECK").checked==false)
		{d.gI("COSHADE").disabled=true;}
	else
		{d.gI("COSHADE").disabled=false;}
	if (d.gI("DVCHECK").checked==false)
		{d.gI("DV").disabled=true;}
	else
		{d.gI("DV").disabled=false;}
	if (d.gI("DEMONICBDCHECK").checked==false)
		{d.gI("DEMONICBD").disabled=true;}
	else
		{d.gI("DEMONICBD").disabled=false;}
	if (d.gI("PSYCHOCHECK").checked==false)
		{d.gI("PSYCHO").disabled=true;}
	else
		{d.gI("PSYCHO").disabled=false;}
	if (d.gI("TRIBUNALCHECK").checked==false)
		{d.gI("TRIBUNAL").disabled=true;}
	else
		{d.gI("TRIBUNAL").disabled=false;}
	if (d.gI("FVCHECK").checked==false)
		{d.gI("FV").disabled=true;}
	else
		{d.gI("FV").disabled=false;}
	if (d.gI("HEROICDECHECK").checked==false)
		{d.gI("HEROICDE").disabled=true;}
	else
		{d.gI("HEROICDE").disabled=false;}
	if (d.gI("HEROICDREADCHECK").checked==false)
		{d.gI("HEROICDREAD").disabled=true;}
	else
		{d.gI("HEROICDREAD").disabled=false;}
	if (d.gI("CHOLCHECK").checked==false)
		{d.gI("CHOL").disabled=true;}
	else
		{d.gI("CHOL").disabled=false;}
	if (d.gI("MALCHECK").checked==false)
		{d.gI("MAL").disabled=true;}
	else
		{d.gI("MAL").disabled=false;}
	if (d.gI("IVCHECK").checked==false)
		{d.gI("IV").disabled=true;}
	else
		{d.gI("IV").disabled=false;}
	if (d.gI("LVORCHECK").checked==false)
		{d.gI("LVOR").disabled=true;}
	else
		{d.gI("LVOR").disabled=false;}
	if (d.gI("DEPATKCHECK").checked==false)
		{d.gI("DEPATK").disabled=true;}
	else
		{d.gI("DEPATK").disabled=false;}
	if (d.gI("DEPDEFCHECK").checked==false)
		{d.gI("DEPDEF").disabled=true;}
	else
		{d.gI("DEPDEF").disabled=false;}
	if (d.gI("SANDBOMBCHECK").checked==false)
		{d.gI("SANDBOMB").disabled=true;}
	else
		{d.gI("SANDBOMB").disabled=false;}
	if (d.gI("DESPAIRCHECK").checked==false)
		{d.gI("DESPAIR").disabled=true;}
	else
		{d.gI("DESPAIR").disabled=false;}
	if (d.gI("SCOURGECHECK").checked==false)
		{d.gI("SCOURGE").disabled=true;}
	else
		{d.gI("SCOURGE").disabled=false;}
	if (d.gI("SBCHECK").checked==false)
		{d.gI("SB").disabled=true;}
	else
		{d.gI("SB").disabled=false;}
	if (d.gI("DESPEEDCHECK").checked==false)
		{d.gI("DESPEED").disabled=true;}
	else
		{d.gI("DESPEED").disabled=false;}
	if (d.gI("WVCHECK").checked==false)
		{d.gI("WV").disabled=true;}
	else
		{d.gI("WV").disabled=false;}
	if (d.gI("JUDGMENTCHECK").checked==false)
		{d.gI("JUDGMENT").disabled=true;}
	else
		{d.gI("JUDGMENT").disabled=false;}
}

}

</script>

<!-- calculator -->

<script>
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
	d.gI("WEAPONSA").selectedIndex=0
}
//placeholders
var AddASPD=0
var AddCAST=0
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
var backcritical=0
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
var BuffEVA=0
var BuffEVA60=0
var BuffEVA30=0
var BuffHP=1
var BuffHPR=1
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
var BuffSHIELDPDEF=1
var BuffSPEED=1
var BuffSPEED60=1
var BuffSPEED30=1
var ClassType=0
var Cloak=0
var CON=0
var CONMOD=0
var DEX=0
var DEXMOD=0
var Glove=0
var GPA="<font color=red><b>Grade Penalty applied</b></font>"
var Earring1=0
var Earring2=0
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
var position=d.gI("POSITION").value
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
var ShieldBlockRate=0.2
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
	d.gI("tattooslot1fighter").selectedIndex=0
	d.gI("tattooslot2fighter").selectedIndex=0
	d.gI("tattooslot3fighter").selectedIndex=0
	d.gI("tattooslot1nuker").selectedIndex=0
	d.gI("tattooslot2nuker").selectedIndex=0
	d.gI("tattooslot3nuker").selectedIndex=0
	d.gI("tattooslot1healer").selectedIndex=0
	d.gI("tattooslot2healer").selectedIndex=0
	d.gI("tattooslot3healer").selectedIndex=0
	}

//Tattoo Restrictions by class
if (JOB=="AW"||JOB=="AR"||JOB=="AS"||JOB=="BD"||JOB=="BH"||JOB=="DA"||JOB=="DE"||JOB=="EK"||JOB=="EFS"||JOB=="GL"||JOB=="HE"||JOB=="HK"||JOB=="MO"||JOB=="OR"||JOB=="PA"||JOB=="PK"||JOB=="PR"||JOB=="PW"||JOB=="RO"||JOB=="SC"||JOB=="SK"||JOB=="SR"||JOB=="SW"||JOB=="TK"||JOB=="TH"||JOB=="TY"||JOB=="WD"||JOB=="WA"||JOB=="WS"||JOB=="EF"||JOB=="DF"||JOB=="OR"||JOB=="DO"||JOB=="HF"||JOB=="OF")
{
d.gI("tattooslot1fighter").style.display = 'block'
d.gI("tattooslot2fighter").style.display = 'block'
d.gI("tattooslot3fighter").style.display = 'block'
d.gI("tattooslot1healer").style.display = 'none'
d.gI("tattooslot2healer").style.display = 'none'
d.gI("tattooslot3healer").style.display = 'none'
d.gI("tattooslot1nuker").style.display = 'none'
d.gI("tattooslot2nuker").style.display = 'none'
d.gI("tattooslot3nuker").style.display = 'none'
var TAT1=d.gI("tattooslot1fighter").value
var TAT2=d.gI("tattooslot2fighter").value
var TAT3=d.gI("tattooslot3fighter").value
}
else if (JOB=="EO"||JOB=="CL"||JOB=="PP"||JOB=="BI"||JOB=="EE"||JOB=="SO"||JOB=="SHE"||JOB=="OS"||JOB=="WC"||JOB=="OL"||JOB=="OM")
{
d.gI("tattooslot1fighter").style.display = 'none'
d.gI("tattooslot2fighter").style.display = 'none'
d.gI("tattooslot3fighter").style.display = 'none'
d.gI("tattooslot1healer").style.display = 'block'
d.gI("tattooslot2healer").style.display = 'block'
d.gI("tattooslot3healer").style.display = 'block'
d.gI("tattooslot1nuker").style.display = 'none'
d.gI("tattooslot2nuker").style.display = 'none'
d.gI("tattooslot3nuker").style.display = 'none'
var TAT1=d.gI("tattooslot1healer").value
var TAT2=d.gI("tattooslot2healer").value
var TAT3=d.gI("tattooslot3healer").value
}
else if (JOB=="WI"||JOB=="SOR"||JOB=="NE"||JOB=="WL"||JOB=="EW"||JOB=="SPS"||JOB=="ELS"||JOB=="DW"||JOB=="PS"||JOB=="SPH"||JOB=="DM"||JOB=="EM"||JOB=="HM")
{
d.gI("tattooslot1fighter").style.display = 'none'
d.gI("tattooslot2fighter").style.display = 'none'
d.gI("tattooslot3fighter").style.display = 'none'
d.gI("tattooslot1healer").style.display = 'none'
d.gI("tattooslot2healer").style.display = 'none'
d.gI("tattooslot3healer").style.display = 'none'
d.gI("tattooslot1nuker").style.display = 'block'
d.gI("tattooslot2nuker").style.display = 'block'
d.gI("tattooslot3nuker").style.display = 'block'
var TAT1=d.gI("tattooslot1nuker").value
var TAT2=d.gI("tattooslot2nuker").value
var TAT3=d.gI("tattooslot3nuker").value
}

if (JOB=="EF"||JOB=="DF"||JOB=="OR"||JOB=="DO"||JOB=="HF"||JOB=="HM"||JOB=="EM"||JOB=="DM"||JOB=="OM"){
d.gI("tattooslot2fighter").disabled=true
d.gI("tattooslot3fighter").disabled=true
d.gI("tattooslot2healer").disabled=true
d.gI("tattooslot3healer").disabled=true
d.gI("tattooslot2nuker").disabled=true
d.gI("tattooslot3nuker").disabled=true
var TAT2=0
var TAT3=0
}
else if (JOB=="RO"||JOB=="WA"||JOB=="HK"||JOB=="WI"||JOB=="CL"||JOB=="EK"||JOB=="EFS"||JOB=="EO"||JOB=="EW"||JOB=="PK"||JOB=="AS"||JOB=="DW"||JOB=="SO"||JOB=="MO"||JOB=="OR"||JOB=="OS"||JOB=="SC"||JOB=="AR"){
d.gI("tattooslot2fighter").disabled=false
d.gI("tattooslot3fighter").disabled=true
d.gI("tattooslot2healer").disabled=false
d.gI("tattooslot3healer").disabled=true
d.gI("tattooslot2nuker").disabled=false
d.gI("tattooslot3nuker").disabled=true
var TAT3=0
}
else{
d.gI("tattooslot2fighter").disabled=false
d.gI("tattooslot3fighter").disabled=false
d.gI("tattooslot2healer").disabled=false
d.gI("tattooslot3healer").disabled=false
d.gI("tattooslot2nuker").disabled=false
d.gI("tattooslot3nuker").disabled=false
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
var movemode=d.gI("MOVEMODE").value

//Shield Grade
var shieldgrade=d.gI("SHIELDGRADE").value
if (shieldgrade=="S")
	{shield=d.gI("SHIELDS").value;}
else if (shieldgrade=="A")
	{shield=d.gI("SHIELDA").value;}
else if (shieldgrade=="B")
	{shield=d.gI("SHIELDB").value;}
else if (shieldgrade=="C")
	{shield=d.gI("SHIELDC").value;}
else if (shieldgrade=="D")
	{shield=d.gI("SHIELDD").value;}
else if (shieldgrade=="N")
	{shield=d.gI("SHIELDN").value;}

//Shields
Shield=SHIELDPDEF[shield]
if (shield=="0")
{ShieldEvasion=0}
else if (shield>0)
{ShieldEvasion=-8}

//Shield Enchant
var shieldenchant=d.gI("SHIELDENCHANT").value
if (shieldenchant <= 3)
	{shieldunderenchant=shieldenchant;shieldoverenchant=0;}
else
	{shieldunderenchant=3;shieldoverenchant=shieldenchant-3;}
if (shield=="0") {
	shieldunderPDEF=0
	shieldoverPDEF=0
	Shield=Shield
	ShieldBlockRate=0
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
var weapongrade=d.gI("WEAPONGRADE").value
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

document.addEventListener('DOMContentLoaded', function() {
    var weaponsa=document.forms['statcalculator'].WEAPONSA;
    weaponsa.length=5;

for (i=0;i<5;i++)
	{
	var p=i*2+3
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
});
//Weapon Enchant
var weaponenchant=d.gI("WEAPONENCHANT").value
if (weaponenchant <= 3)
	{weaponunderenchant=weaponenchant;weaponoverenchant=0;}
else
	{weaponunderenchant=3;weaponoverenchant=weaponenchant-3;}
if (weapongrade=="N"||weapon=="0") {
	d.gI("WEAPONENCHANT").disabled=true
	underMATK=0
	overMATK=0
	}
else if (weapongrade=="H") {
	d.gI("WEAPONENCHANT").disabled=true
	underMATK=0
	overMATK=0
	}
else if (weapongrade=="D") {
	d.gI("WEAPONENCHANT").disabled=false
	underMATK=2
	overMATK=4
	}
else if (weapongrade=="S") {
	d.gI("WEAPONENCHANT").disabled=false
	underMATK=4
	overMATK=8
	}
else {
	d.gI("WEAPONENCHANT").disabled=false
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
	var weapon_sa=d.gI("WEAPONSA").value
	var sasubvalue=d.gI("WEAPONSA").selectedIndex
	var samultiplier=sasubvalue*2+4
	}
else if (WpnType=="Duals")
	{
	var duals_sa=WEAPON[weapon][3]
	var duals_v=WEAPON[weapon][4]
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
else if (weapon_sa=="Back Blow" && CSA==0 && position==3)
	{backcritical=backcritical+WEAPON[weapon][samultiplier]}
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
	{BuffHP=BuffHP*1.25;BuffMP=BuffMP*1.3;ShieldBlockRate=ShieldBlockRate*1.39}
else if (weapon=="331" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5}
else if (weapon=="332" && CSA==0)
	{BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5}
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
	{BuffASPD=BuffASPD*1.07;BuffACC=BuffACC+4.89}
else if (weapon=="339" && CSA==0)
	{BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;BuffASPD*BuffASPD*1.03;backcritical=backcritical+220}
else if (weapon=="340" && CSA==0)
	{BuffHP=BuffHP*1.25;BuffMP=BuffMP*1.3;BuffCP=BuffCP*1.5;AddCRIT=AddCRIT+78.7}

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
	{WpnSpd=379;WpnAcc=4.75;WpnCrt=40;WpnMAS="Blunt";ShieldDisabled=false;randdmg=1.1}

if (ShieldDisabled==true) {
	d.gI("SHIELDS").disabled=true
	d.gI("SHIELDA").disabled=true
	d.gI("SHIELDB").disabled=true
	d.gI("SHIELDC").disabled=true
	d.gI("SHIELDD").disabled=true
	d.gI("SHIELDN").disabled=true
	shield="unequipped"
	Shield=0
	ShieldEvasion=0
	ShieldBlockRate=0
	}
else if (ShieldDisabled==false) {
	d.gI("SHIELDS").disabled=false
	d.gI("SHIELDA").disabled=false
	d.gI("SHIELDB").disabled=false
	d.gI("SHIELDC").disabled=false
	d.gI("SHIELDD").disabled=false
	d.gI("SHIELDN").disabled=false
}
if (shieldgrade=="N"||Shield=="0") {
	d.gI("SHIELDENCHANT").disabled=true
	}
else {
	d.gI("SHIELDENCHANT").disabled=false
	}

if (shieldgrade=="D" && LVL<20 && Shield!=0)
	{pen=pen+1;d.gI("shield grade penalty").innerHTML=GPA}
else if (shieldgrade=="C" && LVL<40 && Shield!=0)
	{pen=pen+1;d.gI("shield grade penalty").innerHTML=GPA}
else if (shieldgrade=="B" && LVL<52 && Shield!=0)
	{pen=pen+1;d.gI("shield grade penalty").innerHTML=GPA}
else if (shieldgrade=="A" && LVL<61 && Shield!=0)
	{pen=pen+1;d.gI("shield grade penalty").innerHTML=GPA}
else if (shieldgrade=="S" && LVL<76 && Shield!=0)
	{pen=pen+1;d.gI("shield grade penalty").innerHTML=GPA}
else
	{d.gI("shield grade penalty").innerHTML=" "}


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
var helmetgrade=d.gI("HELMETGRADE").value
if (helmetgrade=="S")
	{helmet=d.gI("HELMETS").value}
else if (helmetgrade=="A")
	{helmet=d.gI("HELMETA").value}
else if (helmetgrade=="B")
	{helmet=d.gI("HELMETB").value}
else if (helmetgrade=="C")
	{helmet=d.gI("HELMETC").value}
else if (helmetgrade=="D")
	{helmet=d.gI("HELMETD").value}
else if (helmetgrade=="N")
	{helmet=d.gI("HELMETN").value}

if (helmetgrade=="D" && LVL<20 && helmet!=0)
	{pen=pen+1;d.gI("helmet grade penalty").innerHTML=GPA}
else if (helmetgrade=="C" && LVL<40 && helmet!=0)
	{pen=pen+1;d.gI("helmet grade penalty").innerHTML=GPA}
else if (helmetgrade=="B" && LVL<52 && helmet!=0)
	{pen=pen+1;d.gI("helmet grade penalty").innerHTML=GPA}
else if (helmetgrade=="A" && LVL<61 && helmet!=0)
	{pen=pen+1;d.gI("helmet grade penalty").innerHTML=GPA}
else if (helmetgrade=="S" && LVL<76 && helmet!=0)
	{pen=pen+1;d.gI("helmet grade penalty").innerHTML=GPA}
else
	{d.gI("helmet grade penalty").innerHTML=" "}

//Helmets
Helmet=HELMETPDEF[helmet]
HelmetSet=HELMETSET[helmet]

//Helmet Enchant
var helmetenchant=d.gI("HELMETENCHANT").value
if (helmetenchant <= 3)
	{helmetunderenchant=helmetenchant;helmetoverenchant=0;}
else
	{helmetunderenchant=3;helmetoverenchant=helmetenchant-3;}
if (helmetgrade=="N"||helmet=="0") {
	d.gI("HELMETENCHANT").disabled=true
	helmetunderPDEF=0
	helmetoverPDEF=0
	Helmet=Helmet
	}
else {
	d.gI("HELMETENCHANT").disabled=false
	helmetunderPDEF=1
	helmetoverPDEF=3
	Helmet=Helmet+(helmetunderenchant*helmetunderPDEF)+(helmetoverenchant*helmetoverPDEF)
	}

//Body Grade
var lowergrade=d.gI("LOWERGRADE").value
if (lowergrade=="S")
	{lower=d.gI("LOWERS").value}
else if (lowergrade=="A")
	{lower=d.gI("LOWERA").value}
else if (lowergrade=="B")
	{lower=d.gI("LOWERB").value}
else if (lowergrade=="C")
	{lower=d.gI("LOWERC").value}
else if (lowergrade=="D")
	{lower=d.gI("LOWERD").value}
else if (lowergrade=="N")
	{lower=d.gI("LOWERN").value}

//Body (Lower)
Lower=LOWERPDEF[lower]
ALType=LOWERTYPE[lower]
LowerSet=LOWERSET[lower]
if ((race=="HM"||race=="EM"||race=="DM"||race=="OM") && lower==0)
{Lower=8}

//Body (Lower) Enchant
var lowerenchant=d.gI("LOWERENCHANT").value
if (lowerenchant <= 3)
	{lowerunderenchant=lowerenchant;loweroverenchant=0;}
else
	{lowerunderenchant=3;loweroverenchant=lowerenchant-3;}
if (lowergrade=="N"||lower=="0") {
	d.gI("LOWERENCHANT").disabled=true
	lowerunderPDEF=0
	loweroverPDEF=0
	Lower=Lower
	}
else {
	d.gI("LOWERENCHANT").disabled=false
	lowerunderPDEF=1
	loweroverPDEF=3
	Lower=Lower+(lowerunderenchant*lowerunderPDEF)+(loweroverenchant*loweroverPDEF)
	}

//Body (Upper) Grade
var uppergrade=d.gI("UPPERGRADE").value
if (uppergrade=="S")
	{upper=d.gI("UPPERS").value}
else if (uppergrade=="A")
	{upper=d.gI("UPPERA").value}
else if (uppergrade=="B")
	{upper=d.gI("UPPERB").value}
else if (uppergrade=="C")
	{upper=d.gI("UPPERC").value}
else if (uppergrade=="D")
	{upper=d.gI("UPPERD").value}
else if (uppergrade=="N")
	{upper=d.gI("UPPERN").value}

if (uppergrade=="D" && LVL<20 && upper!=0)
	{pen=pen+1;d.gI("upper grade penalty").innerHTML=GPA}
else if (uppergrade=="C" && LVL<40 && upper!=0)
	{pen=pen+1;d.gI("upper grade penalty").innerHTML=GPA}
else if (uppergrade=="B" && LVL<52 && upper!=0)
	{pen=pen+1;d.gI("upper grade penalty").innerHTML=GPA}
else if (uppergrade=="A" && LVL<61 && upper!=0)
	{pen=pen+1;d.gI("upper grade penalty").innerHTML=GPA}
else if (uppergrade=="S" && LVL<76 && upper!=0)
	{pen=pen+1;d.gI("upper grade penalty").innerHTML=GPA}
else
	{d.gI("upper grade penalty").innerHTML=" "}

//Upper
Upper=UPPERPDEF[upper]
AddMP=AddMP+UPPERMP[upper]
AUType=UPPERTYPE[upper]
fullbody=FULLBODY[upper]
UpperSet=UPPERSET[upper]
if ((race=="HM"||race=="EM"||race=="DM"||race=="OM") && upper==0)
	{Upper=15}

//Body (Upper) Enchant
var upperenchant=d.gI("UPPERENCHANT").value
if (upperenchant <= 3)
	{upperunderenchant=upperenchant;upperoverenchant=0;}
else
	{upperunderenchant=3;upperoverenchant=upperenchant-3;}
if (uppergrade=="N"||upper=="0") {
	d.gI("UPPERENCHANT").disabled=true
	upperunderPDEF=0
	upperoverPDEF=0
	Upper=Upper
	}
else {
	d.gI("UPPERENCHANT").disabled=false
	upperunderPDEF=1
	upperoverPDEF=3
	Upper=Upper+(upperunderenchant*upperunderPDEF)+(upperoverenchant*upperoverPDEF)
	}

//Disable Lower when Upper is a full body armor
if (fullbody==1)
	{
	d.gI("LOWERS").disabled=true
	d.gI("LOWERA").disabled=true
	d.gI("LOWERB").disabled=true
	d.gI("LOWERC").disabled=true
	d.gI("LOWERD").disabled=true
	d.gI("LOWERN").disabled=true
	d.gI("LOWERENCHANT").disabled=true
	lower="unequipped"
	Lower=0
	}
else if (fullbody==0)
	{
	d.gI("LOWERS").disabled=false
	d.gI("LOWERA").disabled=false
	d.gI("LOWERB").disabled=false
	d.gI("LOWERC").disabled=false
	d.gI("LOWERD").disabled=false
	d.gI("LOWERN").disabled=false
	AddMP=AddMP+LOWERMP[lower]
	}

if (lowergrade=="D" && LVL<20 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("lower grade penalty").innerHTML=GPA}
else if (lowergrade=="C" && LVL<40 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("lower grade penalty").innerHTML=GPA}
else if (lowergrade=="B" && LVL<52 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("lower grade penalty").innerHTML=GPA}
else if (lowergrade=="A" && LVL<61 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("lower grade penalty").innerHTML=GPA}
else if (lowergrade=="S" && LVL<76 && lower!=0 && fullbody==0)
	{pen=pen+1;d.gI("lower grade penalty").innerHTML=GPA}
else
	{d.gI("lower grade penalty").innerHTML=" "}

//Armor Types (Heavy/Light/Robe)
if (AUType=="H" && (ALType=="H"||fullbody==1))
	{AType="H"}
else if (AUType=="L" && (ALType=="L"||fullbody==1))
	{AType="L"}
else if (AUType=="R" && (ALType=="R"||fullbody==1))
	{AType="R"}

//Glove Grade
var glovegrade=d.gI("GLOVEGRADE").value
if (glovegrade=="S")
	{glove=d.gI("GLOVES").value}
else if (glovegrade=="A")
	{glove=d.gI("GLOVEA").value}
else if (glovegrade=="B")
	{glove=d.gI("GLOVEB").value}
else if (glovegrade=="C")
	{glove=d.gI("GLOVEC").value}
else if (glovegrade=="D")
	{glove=d.gI("GLOVED").value}
else if (glovegrade=="N")
	{glove=d.gI("GLOVEN").value}

if (glovegrade=="D" && LVL<20 && glove!=0)
	{pen=pen+1;d.gI("glove grade penalty").innerHTML=GPA}
else if (glovegrade=="C" && LVL<40 && glove!=0)
	{pen=pen+1;d.gI("glove grade penalty").innerHTML=GPA}
else if (glovegrade=="B" && LVL<52 && glove!=0)
	{pen=pen+1;d.gI("glove grade penalty").innerHTML=GPA}
else if (glovegrade=="A" && LVL<61 && glove!=0)
	{pen=pen+1;d.gI("glove grade penalty").innerHTML=GPA}
else if (glovegrade=="S" && LVL<76 && glove!=0)
	{pen=pen+1;d.gI("glove grade penalty").innerHTML=GPA}
else
	{d.gI("glove grade penalty").innerHTML=" "}

//Glove
Glove=GLOVEPDEF[glove]
GloveSet=GLOVESET[glove]

//Glove Enchant
var gloveenchant=d.gI("GLOVEENCHANT").value
if (gloveenchant <= 3)
	{gloveunderenchant=gloveenchant;gloveoverenchant=0;}
else
	{gloveunderenchant=3;gloveoverenchant=gloveenchant-3;}
if (glovegrade=="N"||glove=="0") {
	d.gI("GLOVEENCHANT").disabled=true
	gloveunderPDEF=0
	gloveoverPDEF=0
	Glove=Glove
	}
else {
	d.gI("GLOVEENCHANT").disabled=false
	gloveunderPDEF=1
	gloveoverPDEF=3
	Glove=Glove+(gloveunderenchant*gloveunderPDEF)+(gloveoverenchant*gloveoverPDEF)
	}

//Boot Grade
var bootgrade=d.gI("BOOTGRADE").value
if (bootgrade=="S")
	{boot=d.gI("BOOTS").value}
else if (bootgrade=="A")
	{boot=d.gI("BOOTA").value}
else if (bootgrade=="B")
	{boot=d.gI("BOOTB").value}
else if (bootgrade=="C")
	{boot=d.gI("BOOTC").value}
else if (bootgrade=="D")
	{boot=d.gI("BOOTD").value}
else if (bootgrade=="N")
	{boot=d.gI("BOOTN").value}

if (bootgrade=="D" && LVL<20 && boot!=0)
	{pen=pen+1;d.gI("boot grade penalty").innerHTML=GPA}
else if (bootgrade=="C" && LVL<40 && boot!=0)
	{pen=pen+1;d.gI("boot grade penalty").innerHTML=GPA}
else if (bootgrade=="B" && LVL<52 && boot!=0)
	{pen=pen+1;d.gI("boot grade penalty").innerHTML=GPA}
else if (bootgrade=="A" && LVL<61 && boot!=0)
	{pen=pen+1;d.gI("boot grade penalty").innerHTML=GPA}
else if (bootgrade=="S" && LVL<76 && boot!=0)
	{pen=pen+1;d.gI("boot grade penalty").innerHTML=GPA}
else
	{d.gI("boot grade penalty").innerHTML=" "}

//Boot
Boot=BOOTPDEF[boot]
BootSet=BOOTSET[boot]

//Boot Enchant
var bootenchant=d.gI("BOOTENCHANT").value
if (bootenchant <= 3)
	{bootunderenchant=bootenchant;bootoverenchant=0;}
else
	{bootunderenchant=3;bootoverenchant=bootenchant-3;}
if (bootgrade=="N"||boot=="0") {
	d.gI("BOOTENCHANT").disabled=true
	bootunderPDEF=0
	bootoverPDEF=0
	Boot=Boot
	}
else {
	d.gI("BOOTENCHANT").disabled=false
	bootunderPDEF=1
	bootoverPDEF=3
	Boot=Boot+(bootunderenchant*bootunderPDEF)+(bootoverenchant*bootoverPDEF)
	}

//Necklace Grade
var necklacegrade=d.gI("NECKLACEGRADE").value
if (necklacegrade=="S")
	{necklace=d.gI("NECKLACES").value}
else if (necklacegrade=="A")
	{necklace=d.gI("NECKLACEA").value}
else if (necklacegrade=="B")
	{necklace=d.gI("NECKLACEB").value}
else if (necklacegrade=="C")
	{necklace=d.gI("NECKLACEC").value}
else if (necklacegrade=="D")
	{necklace=d.gI("NECKLACED").value}
else if (necklacegrade=="N")
	{necklace=d.gI("NECKLACEN").value}

if (necklacegrade=="D" && LVL<20 && necklace!=0)
	{pen=pen+1;d.gI("necklace grade penalty").innerHTML=GPA}
else if (necklacegrade=="C" && LVL<40 && necklace!=0)
	{pen=pen+1;d.gI("necklace grade penalty").innerHTML=GPA}
else if (necklacegrade=="B" && LVL<52 && necklace!=0)
	{pen=pen+1;d.gI("necklace grade penalty").innerHTML=GPA}
else if (necklacegrade=="A" && LVL<61 && necklace!=0)
	{pen=pen+1;d.gI("necklace grade penalty").innerHTML=GPA}
else if (necklacegrade=="S" && LVL<76 && necklace!=0)
	{pen=pen+1;d.gI("necklace grade penalty").innerHTML=GPA}
else
	{d.gI("necklace grade penalty").innerHTML=" "}

//Necklace
Necklace=NECKLACEMDEF[necklace]
if (necklace=="6")
	{AddMP=AddMP+33}
else if (necklace=="20")
	{NECKLACEHP=445;AddMP=AddMP+42;NECKLACEPATK=1.04;NECKLACEMATK=1.08}
else if (necklace=="23")
	{AddMP=AddMP+26}
else if (necklace=="27")
	{AddMP=AddMP+42}
else if (necklace=="28")
	{AddMP=AddMP+42}

//Necklace Enchant
var necklaceenchant=d.gI("NECKLACEENCHANT").value
if (necklaceenchant <= 3)
	{necklaceunderenchant=necklaceenchant;necklaceoverenchant=0;}
else
	{necklaceunderenchant=3;necklaceoverenchant=necklaceenchant-3;}
if (necklacegrade=="N"||necklace=="0") {
	d.gI("NECKLACEENCHANT").disabled=true
	necklaceunderPDEF=0
	necklaceoverPDEF=0
	Necklace=Necklace
	}
else {
	d.gI("NECKLACEENCHANT").disabled=false
	necklaceunderPDEF=1
	necklaceoverPDEF=3
	Necklace=Necklace+(necklaceunderenchant*necklaceunderPDEF)+(necklaceoverenchant*necklaceoverPDEF)
	}

//Earring1 Grade
var earring1grade=d.gI("EARRING1GRADE").value
if (earring1grade=="S")
	{earring1=d.gI("EARRING1S").value}
else if (earring1grade=="A")
	{earring1=d.gI("EARRING1A").value}
else if (earring1grade=="B")
	{earring1=d.gI("EARRING1B").value}
else if (earring1grade=="C")
	{earring1=d.gI("EARRING1C").value}
else if (earring1grade=="D")
	{earring1=d.gI("EARRING1D").value}
else if (earring1grade=="N")
	{earring1=d.gI("EARRING1N").value}

if (earring1grade=="D" && LVL<20 && earring1!=0)
	{pen=pen+1;d.gI("earring1 grade penalty").innerHTML=GPA}
else if (earring1grade=="C" && LVL<40 && earring1!=0)
	{pen=pen+1;d.gI("earring1 grade penalty").innerHTML=GPA}
else if (earring1grade=="B" && LVL<52 && earring1!=0)
	{pen=pen+1;d.gI("earring1 grade penalty").innerHTML=GPA}
else if (earring1grade=="A" && LVL<61 && earring1!=0)
	{pen=pen+1;d.gI("earring1 grade penalty").innerHTML=GPA}
else if (earring1grade=="S" && LVL<76 && earring1!=0)
	{pen=pen+1;d.gI("earring1 grade penalty").innerHTML=GPA}
else
	{d.gI("earring1 grade penalty").innerHTML=" "}

//Earring1
Earring1=EARRINGMDEF[earring1]
if (earring1=="5")
	{AddMP=AddMP+31}
else if (earring1=="9")
	{AddMP=AddMP+31}
else if (earring1=="15")
	{AddMP=AddMP+25}
else if (earring1=="21")
	{AddMP=AddMP+20}
else if (earring1=="25")
	{AddMP=AddMP+31}
else if (earring1=="27")
	{AddMP=AddMP+31}

//Earring1 Enchant
var earring1enchant=d.gI("EARRING1ENCHANT").value
if (earring1enchant <= 3)
	{earring1underenchant=earring1enchant;earring1overenchant=0;}
else
	{earring1underenchant=3;earring1overenchant=earring1enchant-3;}
if (earring1grade=="N"||earring1=="0") {
	d.gI("EARRING1ENCHANT").disabled=true
	earring1underPDEF=0
	earring1overPDEF=0
	Earring1=Earring1
	}
else {
	d.gI("EARRING1ENCHANT").disabled=false
	earring1underPDEF=1
	earring1overPDEF=3
	Earring1=Earring1+(earring1underenchant*earring1underPDEF)+(earring1overenchant*earring1overPDEF)
	}

//Earring2 Grade
var earring2grade=d.gI("EARRING2GRADE").value
if (earring2grade=="S")
	{earring2=d.gI("EARRING2S").value}
else if (earring2grade=="A")
	{earring2=d.gI("EARRING2A").value}
else if (earring2grade=="B")
	{earring2=d.gI("EARRING2B").value}
else if (earring2grade=="C")
	{earring2=d.gI("EARRING2C").value}
else if (earring2grade=="D")
	{earring2=d.gI("EARRING2D").value}
else if (earring2grade=="N")
	{earring2=d.gI("EARRING2N").value}

if (earring2grade=="D" && LVL<20 && earring2!=0)
	{pen=pen+1;d.gI("earring2 grade penalty").innerHTML=GPA}
else if (earring2grade=="C" && LVL<40 && earring2!=0)
	{pen=pen+1;d.gI("earring2 grade penalty").innerHTML=GPA}
else if (earring2grade=="B" && LVL<52 && earring2!=0)
	{pen=pen+1;d.gI("earring2 grade penalty").innerHTML=GPA}
else if (earring2grade=="A" && LVL<61 && earring2!=0)
	{pen=pen+1;d.gI("earring2 grade penalty").innerHTML=GPA}
else if (earring2grade=="S" && LVL<76 && earring2!=0)
	{pen=pen+1;d.gI("earring2 grade penalty").innerHTML=GPA}
else
	{d.gI("earring2 grade penalty").innerHTML=" "}

//Earring2
Earring2=EARRINGMDEF[earring2]
if (earring2=="5")
	{AddMP=AddMP+31}
else if (earring2=="9")
	{AddMP=AddMP+31}
else if (earring2=="15")
	{AddMP=AddMP+25}
else if (earring2=="21")
	{AddMP=AddMP+20}
else if (earring2=="25")
	{AddMP=AddMP+31}
else if (earring2=="27")
	{AddMP=AddMP+31}

//Earring2 Enchant
var earring2enchant=d.gI("EARRING2ENCHANT").value
if (earring2enchant <= 3)
	{earring2underenchant=earring2enchant;earring2overenchant=0;}
else
	{earring2underenchant=3;earring2overenchant=earring2enchant-3;}
if (earring2grade=="N"||earring2=="0") {
	d.gI("EARRING2ENCHANT").disabled=true
	earring2underPDEF=0
	earring2overPDEF=0
	Earring2=Earring2
	}
else {
	d.gI("EARRING2ENCHANT").disabled=false
	earring2underPDEF=1
	earring2overPDEF=3
	Earring2=Earring2+(earring2underenchant*earring2underPDEF)+(earring2overenchant*earring2overPDEF)
	}

//Ring1 Grade
var ring1grade=d.gI("RING1GRADE").value
if (ring1grade=="S")
	{ring1=d.gI("RING1S").value}
else if (ring1grade=="A")
	{ring1=d.gI("RING1A").value}
else if (ring1grade=="B")
	{ring1=d.gI("RING1B").value}
else if (ring1grade=="C")
	{ring1=d.gI("RING1C").value}
else if (ring1grade=="D")
	{ring1=d.gI("RING1D").value}
else if (ring1grade=="N")
	{ring1=d.gI("RING1N").value}

if (ring1grade=="D" && LVL<20 && ring1!=0)
	{pen=pen+1;d.gI("ring1 grade penalty").innerHTML=GPA}
else if (ring1grade=="C" && LVL<40 && ring1!=0)
	{pen=pen+1;d.gI("ring1 grade penalty").innerHTML=GPA}
else if (ring1grade=="B" && LVL<52 && ring1!=0)
	{pen=pen+1;d.gI("ring1 grade penalty").innerHTML=GPA}
else if (ring1grade=="A" && LVL<61 && ring1!=0)
	{pen=pen+1;d.gI("ring1 grade penalty").innerHTML=GPA}
else if (ring1grade=="S" && LVL<76 && ring1!=0)
	{pen=pen+1;d.gI("ring1 grade penalty").innerHTML=GPA}
else
	{d.gI("ring1 grade penalty").innerHTML=" "}

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
var ring1enchant=d.gI("RING1ENCHANT").value
if (ring1enchant <= 3)
	{ring1underenchant=ring1enchant;ring1overenchant=0;}
else
	{ring1underenchant=3;ring1overenchant=ring1enchant-3;}
if (ring1grade=="N"||ring1=="0") {
	d.gI("RING1ENCHANT").disabled=true
	ring1underPDEF=0
	ring1overPDEF=0
	Ring1=Ring1
	}
else {
	d.gI("RING1ENCHANT").disabled=false
	ring1underPDEF=1
	ring1overPDEF=3
	Ring1=Ring1+(ring1underenchant*ring1underPDEF)+(ring1overenchant*ring1overPDEF)
	}

//Ring2 Grade
var ring2grade=d.gI("RING2GRADE").value
if (ring2grade=="S")
	{ring2=d.gI("RING2S").value}
else if (ring2grade=="A")
	{ring2=d.gI("RING2A").value}
else if (ring2grade=="B")
	{ring2=d.gI("RING2B").value}
else if (ring2grade=="C")
	{ring2=d.gI("RING2C").value}
else if (ring2grade=="D")
	{ring2=d.gI("RING2D").value}
else if (ring2grade=="N")
	{ring2=d.gI("RING2N").value}

var GPA="<font color=red><b>Grade Penalty applied</b></font>"

if (ring2grade=="D" && LVL<20 && ring2!=0)
	{pen=pen+1;d.gI("ring2 grade penalty").innerHTML=GPA}
else if (ring2grade=="C" && LVL<40 && ring2!=0)
	{pen=pen+1;d.gI("ring2 grade penalty").innerHTML=GPA}
else if (ring2grade=="B" && LVL<52 && ring2!=0)
	{pen=pen+1;d.gI("ring2 grade penalty").innerHTML=GPA}
else if (ring2grade=="A" && LVL<61 && ring2!=0)
	{pen=pen+1;d.gI("ring2 grade penalty").innerHTML=GPA}
else if (ring2grade=="S" && LVL<76 && ring2!=0)
	{pen=pen+1;d.gI("ring2 grade penalty").innerHTML=GPA}
else
	{d.gI("ring2 grade penalty").innerHTML=" "}

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
var ring2enchant=d.gI("RING2ENCHANT").value
if (ring2enchant <= 3)
	{ring2underenchant=ring2enchant;ring2overenchant=0;}
else
	{ring2underenchant=3;ring2overenchant=ring2enchant-3;}
if (ring2grade=="N"||ring2=="0") {
	d.gI("RING2ENCHANT").disabled=true
	ring2underPDEF=0
	ring2overPDEF=0
	Ring2=Ring2
	}
else {
	d.gI("RING2ENCHANT").disabled=false
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
		{ShieldBlockRate=ShieldBlockRate*1.24}
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
		{ShieldBlockRate=ShieldBlockRate*1.18}
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
		{ShieldBlockRate=ShieldBlockRate*1.24}
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
		{ShieldBlockRate=ShieldBlockRate*1.0526}
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
//Nightmare Light
	if (helmet=="8" && upper=="56" && glove=="25" && boot=="11")
		{DEX=DEX+1;CON=CON-1;BuffMDEF=BuffMDEF*1.04}
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
	if (d.gI("ACCTCHECK").checked==true)
		{BuffACC=BuffACC+3}
//Accuracy Debuffs
	if (d.gI("DEACCCHECK").checked==true)
		{var deacc=d.gI("DEACC").value;BuffACC=BuffACC-DEACC[deacc]}
//Acumen
	if (d.gI("ACUCHECK").checked==true)
		{var acu=d.gI("ACU").value;BuffCAST=BuffCAST*ACUMEN[acu]}
//Advanced Block
	if (d.gI("ADVANCEDBLOCKCHECK").checked==true)
		{var advancedblock=d.gI("ADVANCEDBLOCK").value;BuffSHIELDPDEF=BuffSHIELDPDEF*ADVANCEDBLOCK[advancedblock]}
//Aegis Stance
	if (d.gI("AEGISSTANCECHECK").checked==true)
		{var aegisstance=d.gI("AEGISSTANCE").value;BuffSHIELDPDEF=BuffSHIELDPDEF*0.6;block360=true}
//Agility
	if (d.gI("AGICHECK").checked==true)
		{var agi=d.gI("AGI").value;BuffEVA=BuffEVA+AGILITY[agi]}
//Angelic Icon
	if (d.gI("ANGELICICONCHECK").checked==true)
		{var angelic=d.gI("ANGELICICON").value
		AddSPEED=AddSPEED+ANGELICSPEED[angelic]}
	if (d.gI("ANGELICICONCHECK").checked==true && (WpnType=="Fist"||WpnType=="2hb"||WpnType=="Blunt"))
		{var angelic=d.gI("ANGELICICON").value
		BuffACC=BuffACC+6
		BuffPDEF=BuffPDEF*1.5
		BuffMDEF=BuffMDEF*1.5
		BuffASPD=BuffASPD*ANGELICASPD[angelic]
		BuffCRITDMG=BuffCRITDMG*ANGELICCRITDMG[angelic]}
	if (d.gI("ANGELICICONCHECK").checked==true && (WpnType=="Polearm"||WpnType=="2hs"||WpnType=="Sword"))
		{var angelic=d.gI("ANGELICICON").value
		AddCRIT=AddCRIT+ANGELICCRIT[angelic]
		BuffACC=BuffACC+6
		BuffPDEF=BuffPDEF*1.5
		BuffMDEF=BuffMDEF*1.5
		BuffASPD=BuffASPD*ANGELICASPD[angelic]}
//Arcane Agility
	if (d.gI("ARAGICHECK").checked==true)
		{var aragi=d.gI("ARAGI").value;BuffCAST=BuffCAST*1.2}
//Arcane Chaos
	if (d.gI("ARCANECHAOSCHECK").checked==true)
		{var arcanechaos=d.gI("ARCANECHAOS").value;AddMPR=AddMPR-24}
//Arcane Power
	if (d.gI("ARPCHECK").checked==true)
		{var arcanepower=d.gI("ARP").value;BuffMATK=1.3*BuffMATK}
//Arcane Wisdom
	if (d.gI("ARWISCHECK").checked==true)
		{var arwis=d.gI("ARWIS").value;BuffCAST=BuffCAST*0.9}
//Armor Crush
	if (d.gI("ACCHECK").checked==true)
		{var armorcrush=d.gI("ARCR").value;BuffPDEF=0.70*BuffPDEF;BuffMDEF=0.70*BuffMDEF}
//Attack Speed Debuffs
	if (d.gI("DEASPDCHECK").checked==true)
		{var deaspd=d.gI("DEASPD").value;BuffASPD=BuffASPD*DEASPD[deaspd]}
//Berserker Spirit
	if (d.gI("ZERKCHECK").checked==true)
		{var zerk=d.gI("ZERK").value;BuffPATK=BuffPATK*ZERK[zerk];BuffPDEF=BuffPDEF*ZERKPDEF[zerk];BuffMATK=BuffMATK*ZERKMATK[zerk];BuffMDEF=BuffMDEF*ZERKMDEF[zerk];BuffEVA=BuffEVA+ZERKEVA[zerk];AddSPEED=AddSPEED+ZERKSPEED[zerk];BuffASPD=BuffASPD*ZERK[zerk];BuffCAST=BuffCAST*ZERK[zerk]}
//Bless Shield
	if (d.gI("BLESSSHIELDCHECK").checked==true)
		{var blessshield=d.gI("BLESSSHIELD").value;ShieldBlockRate=ShieldBlockRate*BLESSSHIELD[blessshield]}
//Bless the Body
	if (d.gI("BTB1CHECK").checked==true)
		{var btb1=d.gI("BTB1").value
		BuffHP=BuffHP*BTB[btb1]}
	if (d.gI("BTB2CHECK").checked==true)
		{var btb2=d.gI("BTB2").value
		BuffHP=BuffHP*BTB[btb2]}
	if (d.gI("BTB3CHECK").checked==true)
		{var btb3=d.gI("BTB3").value
		BuffHP=BuffHP*BTB[btb3]}
//Bless the Soul
	if (d.gI("BTSCHECK").checked==true)
		{var bts=d.gI("BTS").value;BuffMP=BuffMP*BTS[bts]}
//Blessing of Prophecy
	if (d.gI("BLESSINGOFPROPHECYCHECK").checked==true && (ClassType=="F1"||ClassType=="F2"||ClassType=="F3")) {
		var blessingofprophecy=d.gI("BLESSINGOFPROPHECY").value;
		weightlimit=weightlimit*1.25}
//Blessing of Seraphim
	if (d.gI("SERAPHIMCHECK").checked==true)
		{var seraphim=d.gI("SERAPHIM").value;BuffMPR=BuffMPR*SERAPHIM[seraphim]}
//Blinding Blow
	if (d.gI("BLINDINGCHECK").checked==true)
		{var blinding=d.gI("BLINDING").value;BuffSPEED=BuffSPEED*1.4}
//Block Shield
	if (d.gI("BLKSCHECK").checked==true)
		{var blockshield=d.gI("BLKS").value;BuffPDEF=0.90*BuffPDEF}
//Block Wind Walk
	if (d.gI("BWWCHECK").checked==true)
		{var bww=d.gI("BWW").value;BuffSPEED=BuffSPEED*0.9}
//Casting Spd. Debuffs
	if (d.gI("DECASTCHECK").checked==true)
		{BuffCAST=BuffCAST*0.77}
//Curse Gloom
	if (d.gI("GLOOMCHECK").checked==true)
		{var gloom=d.gI("GLOOM").value;BuffMDEF=0.77*BuffMDEF}
//Curse of Abyss
	if (d.gI("COABYSSCHECK").checked==true)
		{var coabyss=d.gI("COABYSS").value;BuffMATK=0.70*BuffMATK;BuffEVA=BuffEVA-6;BuffSPEED=BuffSPEED*0.9;BuffCAST=BuffCAST*0.8}
//Curse of Doom
	if (d.gI("CODOOMCHECK").checked==true)
		{var codoom=d.gI("CODOOM").value;BuffPATK=0.83*BuffPATK}
//Curse of Shade
	if (d.gI("COSHADECHECK").checked==true)
		{var coshade=d.gI("COSHADE").value;BuffPDEF=CURSEOFSHADE[coshade]*BuffPDEF;BuffMDEF=CURSEOFSHADE[coshade]*BuffMDEF}
//Dance of Concentration
	if (d.gI("DCONCHECK").checked==true)
		{var dcon=d.gI("DCON").value;BuffCAST=BuffCAST*1.3}
//Dance of Fire
	if (d.gI("DANCEOFFIRECHECK").checked==true)
		{var dcon=d.gI("DANCEOFFIRE").value;BuffCRITDMG=BuffCRITDMG*1.5}
//Dance of Fury
	if (d.gI("DFURYCHECK").checked==true)
		{var dfury=d.gI("DFURY").value;BuffASPD=BuffASPD*1.15}
//Dance of Inspiration
	if (d.gI("DOICHECK").checked==true)
		{var doi=d.gI("DOI").value;BuffACC=BuffACC+4}
//Dance of Mystic
	if (d.gI("DOMYCHECK").checked==true)
		{var domy=d.gI("DOMY").value;BuffMATK=1.2*BuffMATK}
//Dance of Shadow
	if (d.gI("DSHCHECK").checked==true)
		{var dsh=d.gI("DSH").value;BuffSPEED=BuffSPEED*0.5}
//Dance of Warrior
	if (d.gI("DOWACHECK").checked==true)
		{var dowa=d.gI("DOWA").value;BuffPATK=1.12*BuffPATK}
//Dark Vortex
	if (d.gI("DVCHECK").checked==true)
		{var fv=d.gI("DV").value;AddMPR2=AddMPR2-12}
//Dash
	if (d.gI("DASH1CHECK").checked==true)
		{var dash1=d.gI("DASH1").value;BuffSPEED=BuffSPEED*DASH[dash1]}
	if (d.gI("DASH2CHECK").checked==true)
		{var dash2=d.gI("DASH2").value;BuffSPEED=BuffSPEED*DASH[dash2]}
//Dead Eye
	if (d.gI("DEADEYECHECK").checked==true && WpnMAS=="Bow")
		{var deadeye=d.gI("DEADEYE").value;AddPATK=AddPATK+DEADEYEPATK[deadeye];BuffACC=BuffACC+DEADEYEACC[deadeye];BuffASPD=BuffASPD*0.8;BuffCRITDMG=BuffCRITDMG*1.2}
//Death Whisper
	if (d.gI("DEATHWHISPERCHECK").checked==true)
		{var deadeye=d.gI("DEATHWHISPER").value;BuffCRITDMG=BuffCRITDMG*DEATHWHISPER[deadeye]}
//Decrease Weight
	if (d.gI("DECREASEWEIGHTCHECK").checked==true)
		{var bu=d.gI("DECREASEWEIGHT").value;weightpenalty=weightpenalty+DECREASEWEIGHT[bu]}
//Demonic Blade Dance
	if (d.gI("DEMONICBDCHECK").checked==true)
		{var demonicbd=d.gI("DEMONICBD").value;BuffPATK=BuffPATK*DEMONICBD[demonicbd];BuffMATK=BuffMATK*DEMONICBD[demonicbd]}
//Duelist Spirit
	if (d.gI("DUELCHECK").checked==true && WpnType=="Duals")
		{var duel=d.gI("DUEL").value;BuffASPD=BuffASPD*DUELIST[duel]}
//Empower
	if (d.gI("EMPCHECK").checked==true)
		{var emp=d.gI("EMP").value;BuffMATK=BuffMATK*EMPOWER[emp]}
//Evade Shot
	if (d.gI("EVSHTCHECK").checked==true)
		{var evsht=d.gI("EVSHT").value;BuffEVA=BuffEVA+6}
//Fire Vortex
	if (d.gI("FVCHECK").checked==true)
		{var fv=d.gI("FV").value;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.7;BuffCAST=BuffCAST*0.9;AddMPR2=AddMPR2-12}
//Fist Fury
	if (d.gI("FFURYCHECK").checked==true)
		{var ffury=d.gI("FFURY").value;BuffASPD=BuffASPD*1.25}
//Focus
	if (d.gI("FCSCHECK").checked==true)
		{var fcs=d.gI("FCS").value;subcritical=subcritical+(basecritical*FOCUS[fcs])}
//Focus Attack
	if (d.gI("FACHECK").checked==true && WpnType=="Polearm")
		{var focusattack=d.gI("FA").value;BuffACC=BuffACC+FOCUSATTACK[focusattack];BuffCRITDMG=BuffCRITDMG*1.1}
//Focus Chance
	if (d.gI("FOCUSCHANCECHECK").checked==true && position==1 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCUSCHANCE").value;BuffCOMBATCRIT=BuffCOMBATCRIT*0.7}
	if (d.gI("FOCUSCHANCECHECK").checked==true && position==2 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCUSCHANCE").value;BuffCOMBATCRIT=BuffCOMBATCRIT*1.3}
	if (d.gI("FOCUSCHANCECHECK").checked==true && position==3 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCUSCHANCE").value;BuffCOMBATCRIT=BuffCOMBATCRIT*1.6}
//Focus Death
	if (d.gI("FOCDCHECK").checked==true && position==1 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCD").value;subcritical=subcritical+(basecritical*-0.3);BuffCRITDMG=BuffCRITDMG*0.7}
	if (d.gI("FOCDCHECK").checked==true && position==2 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCD").value;subcritical=subcritical+(basecritical*-0.3)}
	if (d.gI("FOCDCHECK").checked==true && position==3 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCD").value;subcritical=subcritical+(basecritical*-0.3);BuffCRITDMG=BuffCRITDMG*1.9}
//Focus Power
	if (d.gI("FOCUSPOWERCHECK").checked==true && position==1 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCUSPOWER").value;BuffCRITDMG=BuffCRITDMG*0.7}
	if (d.gI("FOCUSPOWERCHECK").checked==true && position==2 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCUSPOWER").value;BuffCRITDMG=BuffCRITDMG*1.3}
	if (d.gI("FOCUSPOWERCHECK").checked==true && position==3 && WpnMAS=="Dagger")
		{var focd=d.gI("FOCUSPOWER").value;BuffCRITDMG=BuffCRITDMG*1.6}
//Frenzy
	if (d.gI("FRENZY1CHECK").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var frenzy1=d.gI("FRENZY1").value
		BuffPATK=BuffPATK*FRENZY2HS[frenzy1]
		BuffACC=BuffACC+FRENZY2HSACC[frenzy1]}
	else if (d.gI("FRENZY1CHECK").checked==true && (WpnType=="Sword"||WpnType=="Blunt"))
		{var frenzy1=d.gI("FRENZY1").value;BuffPATK=BuffPATK*FRENZY[frenzy1]}
	else if (d.gI("FRENZY1CHECK").checked==true && WpnType=="Polearm")
		{var frenzy1=d.gI("FRENZY1").value;BuffPATK=BuffPATK*FRENZYPOLE[frenzy1]}
	else if (d.gI("FRENZY1CHECK").checked==true)
		{var frenzy1=d.gI("FRENZY1").value;BuffPATK=BuffPATK*FRENZYOTHER[frenzy1]}
	if (d.gI("FRENZY2CHECK").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var frenzy2=d.gI("FRENZY2").value
		BuffPATK=BuffPATK*FRENZY2HS[frenzy2]
		BuffACC=BuffACC+FRENZY2HSACC[frenzy2]}
	else if (d.gI("FRENZY2CHECK").checked==true && (WpnType=="Sword"||WpnType=="Blunt"))
		{var frenzy2=d.gI("FRENZY2").value;BuffPATK=BuffPATK*FRENZY[frenzy2]}
	else if (d.gI("FRENZY2CHECK").checked==true && WpnType=="Polearm")
		{var frenzy2=d.gI("FRENZY2").value;BuffPATK=BuffPATK*FRENZYPOLE[frenzy2]}
	else if (d.gI("FRENZY2CHECK").checked==true)
		{var frenzy2=d.gI("FRENZY2").value;BuffPATK=BuffPATK*FRENZYOTHER[frenzy2]}
//Greater Might
	if (d.gI("GREATERMIGHTCHECK").checked==true)
		{var greatermight=d.gI("GREATERMIGHT").value;BuffPATK=BuffPATK*GREATERMIGHT[greatermight]}
//Greater Shield
	if (d.gI("GREATERSHIELDCHECK").checked==true)
		{var greatershield=d.gI("GREATERSHIELD").value;BuffPDEF=BuffPDEF*GREATERSHIELD[greatershield]}
//Guard Stance
	if (d.gI("GSCHECK").checked==true)
		{var gs=d.gI("GS").value;AddPDEF=AddPDEF+GUARDSTANCE[gs];ShieldBlockRate=ShieldBlockRate*1.5}
//Guidance
	if (d.gI("GUIDCHECK").checked==true)
		{var guid=d.gI("GUID").value;BuffACC=BuffACC+GUIDANCE[guid]}
//Guts
	if (d.gI("GUTS1CHECK").checked==true)
		{var guts1=d.gI("GUTS1").value;BuffPDEF=BuffPDEF*GUTS[guts1]}
	if (d.gI("GUTS2CHECK").checked==true)
		{var guts2=d.gI("GUTS2").value;BuffPDEF=BuffPDEF*GUTS[guts2]}
//Haste
	if (d.gI("HASTECHECK").checked==true)
		{var haste=d.gI("HASTE").value;BuffASPD=BuffASPD*HASTE[haste]}
//Hawk Eye
	if (d.gI("HECHECK").checked==true)
		{var hawkeye=d.gI("HE").value;BuffPDEF=0.90*BuffPDEF;BuffACC=BuffACC+HAWKEYE[hawkeye]}
//Hero Debuffs
	if (d.gI("HEROICDECHECK").checked==true) {
		var heroicde=d.gI("HEROICDE").value;
		if (heroicde=="1")
			{BuffPDEF=BuffPDEF*0.5;AddMDEF=AddMDEF-50;BuffEVA=BuffEVA-16;ShieldBlockRate=ShieldBlockRate*0.5}
	}
	if (d.gI("HEROICDREADCHECK").checked==true) {
		var heroicdread=d.gI("HEROICDREAD").value;
		if (heroicdread=="1")
			{BuffSPEED=BuffSPEED*1.54}
	}
//Hero Skills
	if (d.gI("HEROICCHECK").checked==true) {
		var heroic=d.gI("HEROIC").value;
		if (heroic=="1")
			{AddPATK=AddPATK+500;AddMATK=AddMATK+500;BuffPDEF=BuffPDEF*0.75;AddMDEF=AddMDEF-25;BuffACC=BuffACC+8;BuffEVA=BuffEVA-8;AddSPEED=AddSPEED+20;AddASPD=AddASPD+100;AddCAST=AddCAST+100}
		else if (heroic=="2" && shield!=0)
			{AddPDEF=AddPDEF+5400;AddMDEF=AddMDEF+4050;AddSPEED=AddSPEED+5}
		else if (heroic=="3")
			{AddPATK=AddPATK+250;AddPDEF=AddPDEF+500}
	}
//Hot Springs Cholera
	if (d.gI("CHOLCHECK").checked==true)
		{var chol=d.gI("CHOL").value;BuffACC=BuffACC+HSCHOLACC[chol];BuffEVA=BuffEVA+HSCHOLEVA[chol]}
//Hot Springs Malaria
	if (d.gI("MALCHECK").checked==true)
		{var mal=d.gI("MAL").value;BuffCAST=BuffCAST*HSMALARIA[mal]}
//Ice Vortex
	if (d.gI("IVCHECK").checked==true)
		{var iv=d.gI("IV").value;BuffSPEED=BuffSPEED*0.7;BuffASPD=BuffASPD*0.9;BuffCAST=BuffCAST*0.9;AddMPR2=AddMPR2-12}
//Judgment
	if (d.gI("JUDGMENTCHECK").checked==true)
		{var iv=d.gI("JUDGMENT").value;BuffCRITDMG=BuffCRITDMG*JUDGMENT[iv]}
//Light Vortex
	if (d.gI("LVORCHECK").checked==true)
		{var lvor=d.gI("LVOR").value;BuffACC=BuffACC-6;AddMPR2=AddMPR2-12}
//Magic Barrier
	if (d.gI("MB1CHECK").checked==true)
		{var mb1=d.gI("MB1").value;BuffMDEF=BuffMDEF*MAGICBARRIER[mb1]}
	if (d.gI("MB2CHECK").checked==true)
		{var mb2=d.gI("MB2").value;BuffMDEF=BuffMDEF*MAGICBARRIER[mb2]}
	if (d.gI("MB3CHECK").checked==true)
		{var mb3=d.gI("MB3").value;BuffMDEF=BuffMDEF*MAGICBARRIER[mb3]}
//Majesty
	if (d.gI("MAJ1CHECK").checked==true)
		{var maj1=d.gI("MAJ1").value;BuffPDEF=BuffPDEF*MAJESTY[maj1];BuffEVA=BuffEVA+MAJESTYEVA[maj1]}
	if (d.gI("MAJ2CHECK").checked==true)
		{var maj2=d.gI("MAJ2").value;BuffPDEF=BuffPDEF*MAJESTY[maj2];BuffEVA=BuffEVA+MAJESTYEVA[maj2]}
//Mana Regeneration
	if (d.gI("MANAREGENCHECK").checked==true)
		{var manaregen=d.gI("MANAREGEN").value;AddMPR=AddMPR+MANAREGEN[manaregen]}
	if (d.gI("MIGHT2CHECK").checked==true)
		{var might2=d.gI("MIGHT2").value;BuffPATK=BuffPATK*MIGHT[might2]}
//Might
	if (d.gI("MIGHT1CHECK").checked==true)
		{var might1=d.gI("MIGHT1").value;BuffPATK=BuffPATK*MIGHT[might1]}
	if (d.gI("MIGHT2CHECK").checked==true)
		{var might2=d.gI("MIGHT2").value;BuffPATK=BuffPATK*MIGHT[might2]}
//Parry Stance
	if (d.gI("PARRYCHECK").checked==true)
		{var parry=d.gI("PARRY").value;BuffPDEF=1.25*BuffPDEF;BuffMDEF=1.25*BuffMDEF;BuffACC=BuffACC-4;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.8}
//P.Atk. Debuffs
	if (d.gI("DEPATKCHECK").checked==true)
		{var depatk=d.gI("DEPATK").value;BuffPATK=BuffPATK*WEAKNESS[depatk]}
//P.Def. Debuffs
	if (d.gI("DEPDEFCHECK").checked==true)
		{var depdef=d.gI("DEPDEF").value;BuffPDEF=BuffPDEF*HEX[depdef]}
//Polearm Accuracy
	if (d.gI("POLEACCCHECK").checked==true)
		{var poleacc=d.gI("POLEACC").value;BuffACC=BuffACC+POLEACC[poleacc]}
//Prophecies
	var proph=d.gI("PROPH").value
	if (d.gI("PROPHCHECK").checked==true)
		{BuffHP=BuffHP*PROPHECYHP[proph];
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
		BuffCRITDMG=BuffCRITDMG*PROPHECYCRITDMG[proph]}
	if (d.gI("PROPHCHECK").checked==true && proph==4 && position==3)
		{BuffCRITDMG=BuffCRITDMG*1.2;backcritical=backcritical+200}
//Psycho Symphony
	if (d.gI("PSYCHOCHECK").checked==true)
		{var psycho=d.gI("PSYCHO").value;
		BuffSPEED=BuffSPEED*PSYCHO[psycho];
		BuffASPD=BuffASPD*PSYCHO[psycho];
		BuffCAST=BuffCAST*PSYCHO[psycho];}
//Queen Buffs
	var queen=d.gI("QUEEN").value
	if ((queen=="1"||queen=="2"||queen=="3") && d.gI("QUEENCHECK").checked==true)
		{BuffPATK=CATBUFFS[queen]*BuffPATK;BuffACC=BuffACC+2}
	else if ((queen=="4"||queen=="5"||queen=="6") && d.gI("QUEENCHECK").checked==true)
		{subcritical=subcritical+(basecritical*CATBUFFS[queen]);BuffCRITDMG=BuffCRITDMG*CATBUFFS2[queen]}
//Rage
	if (d.gI("RAGE1CHECK").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var rage1=d.gI("RAGE1").value;BuffPATK=RAGE2HS[rage1]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3;BuffACC=BuffACC+RAGE2HSACC[rage1]}
	else if (d.gI("RAGE1CHECK").checked==true && (WpnType=="Sword"||WpnType=="Blunt"||WpnType=="Polearm"))
		{var rage1=d.gI("RAGE1").value;BuffPATK=RAGE[rage1]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3}
	else if (d.gI("RAGE1CHECK").checked==true)
		{var rage1=d.gI("RAGE1").value;BuffPATK=RAGEOTHER[rage1]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3}
	if (d.gI("RAGE2CHECK").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var rage2=d.gI("RAGE2").value;BuffPATK=RAGE2HS[rage2]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3;BuffACC=BuffACC+RAGE2HSACC[rage2]}
	else if (d.gI("RAGE2CHECK").checked==true && (WpnType=="Sword"||WpnType=="Blunt"||WpnType=="Polearm"))
		{var rage2=d.gI("RAGE2").value;BuffPATK=RAGE[rage2]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3}
	else if (d.gI("RAGE2CHECK").checked==true && (WpnType!="2hs" && WpnType!="2hb"))
		{var rage2=d.gI("RAGE2").value;BuffPATK=RAGEOTHER[rage2]*BuffPATK;BuffPDEF=0.80*BuffPDEF;BuffEVA=BuffEVA-3}
//Rapid Fire
	if (d.gI("RAPIDFIRECHECK").checked==true && WpnMAS=="Bow")
		{var rapidfire=d.gI("RAPIDFIRE").value
		AddPATK=AddPATK+RAPIDFIRE[rapidfire];
		BuffASPD=BuffASPD*1.2}
//Rapid Shot
	if (d.gI("RAPID1CHECK").checked==true && WpnMAS=="Bow")
		{var rapid1=d.gI("RAPID1").value;BuffASPD=BuffASPD*RAPIDSHOT[rapid1]}
	if (d.gI("RAPID2CHECK").checked==true && WpnMAS=="Bow")
		{var rapid2=d.gI("RAPID2").value;BuffASPD=BuffASPD*RAPIDSHOT[rapid2]}
//Regeneration
	if (d.gI("REGENERATIONCHECK").checked==true)
		{var regeneration=d.gI("REGENERATION").value;BuffHPR=BuffHPR*REGENERATION[regeneration]}
//Riposte Stance
	if (d.gI("RIPOSTECHECK").checked==true)
		{var riposte=d.gI("RIPOSTE").value;BuffACC=BuffACC-4;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.8}
//Sand Bomb
	if (d.gI("SANDBOMBCHECK").checked==true)
		{var sandbomb=d.gI("SANDBOMB").value;BuffACC=BuffACC+SANDBOMB[sandbomb]}
//Seal of Despair
	if (d.gI("DESPAIRCHECK").checked==true)
		{var despair=d.gI("DESPAIR").value;BuffMDEF=0.70*BuffMDEF;BuffACC=BuffACC-6;subcritical=subcritical+(basecritical*-0.3);BuffSPEED=BuffSPEED*0.8;BuffASPD=BuffASPD*0.8;BuffCRITDMG=BuffCRITDMG*0.7}
//Seal of Scourge
	if (d.gI("SCOURGECHECK").checked==true)
		{BuffMPR2=BuffMPR2*0}
//Shield
	if (d.gI("SHIELD1CHECK").checked==true)
		{var shield1=d.gI("SHIELD1").value;BuffPDEF=BuffPDEF*SHIELD[shield1]}
	if (d.gI("SHIELD2CHECK").checked==true)
		{var shield2=d.gI("SHIELD2").value;BuffPDEF=BuffPDEF*SHIELD[shield2]}
//Shield Fortress
	if (d.gI("SHIELDFORTRESSCHECK").checked==true)
		{var shieldfortress=d.gI("SHIELDFORTRESS").value;AddSHIELDPDEF=AddSHIELDPDEF+SHIELDFORTRESS[shieldfortress]}
//Shock Blast
	if (d.gI("SBCHECK").checked==true)
		{var shockblast=d.gI("SB").value;BuffPDEF=0.70*BuffPDEF;BuffMDEF=0.70*BuffMDEF}
//Silent Move
	if (d.gI("SMCHECK").checked==true)
		{var sm=d.gI("SM").value;BuffSPEED=BuffSPEED*0.6}
//Slow
	if (d.gI("DESPEEDCHECK").checked==true)
		{var despeed=d.gI("DESPEED").value;BuffSPEED=BuffSPEED*SLOW[despeed]}
//Snipe
	if (d.gI("SNIPECHECK").checked==true && WpnMAS=="Bow")
		{var snipe=d.gI("SNIPE").value;AddPATK=AddPATK+SNIPE[snipe];BuffACC=BuffACC+SNIPEACC[snipe];subcritical=subcritical+(basecritical*0.2)}
//Song of Earth
	if (d.gI("SOECHECK").checked==true)
		{BuffPDEF=1.25*BuffPDEF}
//Song of Hunter
	if (d.gI("SOHCHECK").checked==true)
		{subcritical=subcritical+(basecritical*1)}
//Song of Life
	if (d.gI("SONGOFLIFECHECK").checked==true)
		{BuffHPR=BuffHPR*1.2}
//Song of Meditation
	if (d.gI("SONGOFMEDCHECK").checked==true)
		{BuffMPR=BuffMPR*1.2}
//Song of Vitality
	if (d.gI("VITCHECK").checked==true)
		{BuffHP=1.3*BuffHP}
//Song of Warding
	if (d.gI("WARDCHECK").checked==true)
		{BuffMDEF=1.3*BuffMDEF}
//Song of Water
	if (d.gI("SWATCHECK").checked==true)
		{BuffEVA=BuffEVA+3}
//Song of Wind
	if (d.gI("SWINDCHECK").checked==true)
		{AddSPEED=AddSPEED+20}
//Soul Cry
	if (d.gI("SOUL1CHECK").checked==true)
		{var soul1=d.gI("SOUL1").value;AddPATK=AddPATK+SOULCRY[soul1]}
	if (d.gI("SOUL2CHECK").checked==true)
		{var soul2=d.gI("SOUL2").value;AddPATK=AddPATK+SOULCRY[soul2]}
	if (d.gI("SOUL3CHECK").checked==true)
		{var soul3=d.gI("SOUL3").value;AddPATK=AddPATK+SOULCRY[soul3]}
//Soul Guard
	if (d.gI("SGCHECK").checked==true)
		{var sg=d.gI("SG").value;AddPDEF=AddPDEF+SOULGUARD[sg]}
//Soul of Sagitarrius
	if (d.gI("SAGCHECK").checked==true)
		{var sag=d.gI("SAG").value;BuffMP=BuffMP*SOULOFSAG[sag]}
//Stealth
	if (d.gI("STEALTHCHECK").checked==true)
		{var stealth=d.gI("STEALTH").value
		BuffPATK=BuffPATK*0.55;
		BuffPDEF=BuffPDEF*STEALTH[stealth];
		BuffMDEF=BuffMDEF*STEALTH[stealth];
		BuffACC=BuffACC-12;
		BuffEVA=BuffEVA+STEALTHEVA[stealth]}
//Thrill Fight
	if (d.gI("TFCHECK").checked==true)
		{var tf=d.gI("TF").value;BuffSPEED=BuffSPEED*0.8;BuffASPD=BuffASPD*THRILLFIGHT[tf]}
//Totem
	var totem1=d.gI("TOTEM1").value
	if (totem1=="BEAR" && d.gI("TOTEM1CHECK").checked==true)
		{BuffSPEED=BuffSPEED*0.7}
	if (totem1=="BEAR" && d.gI("TOTEM1CHECK").checked==true && WpnMAS=="Fist")
		{BuffPATK=1.2*BuffPATK}
	else if (totem1=="WOLF" && d.gI("TOTEM1CHECK").checked==true)
		{BuffSPEED=BuffSPEED*1.2;BuffACC=BuffACC+3}
	var totem2=d.gI("TOTEM2").value
	if (totem2=="BEAR" && d.gI("TOTEM2CHECK").checked==true)
		{BuffSPEED=BuffSPEED*0.7}
	if (totem2=="BEAR" && d.gI("TOTEM2CHECK").checked==true && WpnMAS=="Fist")
		{BuffPATK=1.2*BuffPATK;BuffCRITDMG=BuffCRITDMG*1.2}
	else if (totem2=="BISON" && d.gI("TOTEM2CHECK").checked==true)
		{BuffPATK60=1.43*BuffPATK60;AddCRIT60=AddCRIT60+100;AddCRIT30=AddCRIT30+300;BuffACC=BuffACC+6}
	else if (totem2=="HAWK" && d.gI("TOTEM2CHECK").checked==true && WpnMAS=="Fist")
		{AddCRIT=AddCRIT+100;BuffACC=BuffACC+6;BuffCRITDMG=BuffCRITDMG*1.3}
	else if (totem2=="OGRE" && d.gI("TOTEM2CHECK").checked==true)
		{BuffMDEF=1.3*BuffMDEF;BuffPDEF=1.3*BuffPDEF;BuffEVA=BuffEVA-9;BuffSPEED=BuffSPEED*0.7}
	else if (totem2=="PUMA" && d.gI("TOTEM2CHECK").checked==true && WpnMAS=="Fist")
		{BuffACC=BuffACC+6;BuffASPD=BuffASPD*1.2}
	else if (totem2=="RABBIT" && d.gI("TOTEM2CHECK").checked==true)
		{BuffPATK=0.70*BuffPATK;BuffEVA=BuffEVA+12;BuffSPEED=BuffSPEED*1.3;BuffACC=BuffACC-9}
	else if (totem2=="WOLF" && d.gI("TOTEM2CHECK").checked==true)
		{BuffSPEED=BuffSPEED*1.2;BuffACC=BuffACC+3}
//Tribunal
	var tribunal=d.gI("TRIBUNAL").value
	if (d.gI("TRIBUNALCHECK").checked==true)
		{var tribunal=d.gI("TRIBUNAL").value;
		subcritical=subcritical+(basecritical*TRIBUNAL[tribunal])}
//Ultimate Defense
	if (d.gI("UD1CHECK").checked==true)
		{var ud1=d.gI("UD1").value
		AddPDEF=AddPDEF+UDPDEF[ud1]
		AddMDEF=AddMDEF+UDMDEF[ud1]}
	if (d.gI("UD2CHECK").checked==true)
		{var ud2=d.gI("UD2").value
		AddPDEF=AddPDEF+UDPDEF[ud2]
		AddMDEF=AddMDEF+UDMDEF[ud2]}
//Ultimate Evasion
	if (d.gI("UECHECK").checked==true)
		{var ue=d.gI("UE").value;BuffEVA=BuffEVA+UE[ue]}
//Vicious Stance
	if (d.gI("VICIOUSSTANCECHECK").checked==true)
		{var ue=d.gI("VICIOUSSTANCE").value;AddCRITDMG=AddCRITDMG+VICIOUSSTANCE[ue]}
//War Cry
	if (d.gI("WARCRY1CHECK").checked==true)
		{var warcry1=d.gI("WARCRY1").value;BuffPATK=BuffPATK*WARCRY[warcry1]}
	if (d.gI("WARCRY2CHECK").checked==true)
		{var warcry2=d.gI("WARCRY2").value;BuffPATK=BuffPATK*WARCRY[warcry2]}
//Wind Vortex
	if (d.gI("WVCHECK").checked==true)
		{var wv=d.gI("WV").value;BuffSPEED=BuffSPEED*0.9;BuffASPD=BuffASPD*0.9;BuffCAST=BuffCAST*0.7;AddMPR2=AddMPR2-12}
//Wind Walk
	if (d.gI("WWCHECK").checked==true)
		{var ww=d.gI("WW").value;AddSPEED=AddSPEED+WINDWALK[ww]}
//Zealot
	if (d.gI("ZEALOTCHECK").checked==true)
		{var zealot=d.gI("ZEALOT").value
		AddSPEED=AddSPEED+ZEALOTSPEED[zealot]}
	if (d.gI("ZEALOTCHECK").checked==true && (WpnType=="Fist"||WpnType=="2hb"||WpnType=="Blunt"))
		{var zealot=d.gI("ZEALOT").value
		BuffASPD=BuffASPD*ZEALOT[zealot]
		BuffACC=BuffACC+6
		BuffCRITDMG=BuffCRITDMG*ANGELICCRITDMG[zealot]}
	if (d.gI("ZEALOTCHECK").checked==true && JOB=="DE" && (WpnType=="Polearm"||WpnType=="2hs"||WpnType=="Sword"))
		{var zealot=d.gI("ZEALOT").value
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
if (d.gI("HMO1CHECK").checked==true && AType=="H"||d.gI("HMO2CHECK").checked==true && AType=="H"||d.gI("HMO3CHECK").checked==true && AType=="H")
	{BuffCAST=BuffCAST*1.71;BuffASPD=BuffASPD*1.25}
if (d.gI("LMO1CHECK").checked==true && AType=="L"||d.gI("LMO2CHECK").checked==true && AType=="L"||d.gI("LMO3CHECK").checked==true && AType=="L")
	{BuffCAST=BuffCAST*1.9;BuffASPD=BuffASPD*1.25}
if (d.gI("LMSCHECK").checked==true && AType=="L")
	{BuffCAST=BuffCAST*1.88;BuffASPD=BuffASPD*1.25}
if (d.gI("LMH1CHECK").checked==true && AType=="L"||d.gI("LMH2CHECK").checked==true && AType=="L")
	{BuffCAST=BuffCAST*1.91;BuffASPD=BuffASPD*1.25}
if (d.gI("HMPCHECK").checked==true && AType=="H")
	{BuffCAST=BuffCAST*1.68;BuffASPD=BuffASPD*1.25}

//Passives
//Weapon Mastery for Fighter Classes
	if (d.gI("WMFCHECK").checked==true)
		{var wmf=d.gI("WMF").value;AddPATK=AddPATK+WMF[wmf]}
//Weapon Mastery for Mystic Classes
	if (d.gI("WMM1CHECK").checked==true)
		{var wmm1=d.gI("WMM1").value
		AddPATK=AddPATK+WMMPATK[wmm1];
		AddMATK=AddMATK+WMMMATK[wmm1]}
	if (d.gI("WMM2CHECK").checked==true)
		{var wmm2=d.gI("WMM2").value
		AddPATK=AddPATK+WMMPATK[wmm2];
		AddMATK=AddMATK+WMMMATK[wmm2]}
	if (d.gI("WMM3CHECK").checked==true)
		{var wmm3=d.gI("WMM3").value
		AddPATK=AddPATK+WMMPATK[wmm3];
		AddMATK=AddMATK+WMMMATK[wmm3]}
//Sword/Blunt Mastery (Warrior)
	if (d.gI("WSBM1CHECK").checked==true && (WpnMAS=="Blunt"||WpnMAS=="Sword"))
		{var wsbm1=d.gI("WSBM1").value;AddPATK=AddPATK+MTYPE1[wsbm1]}
	if (d.gI("WSBM2CHECK").checked==true && (WpnMAS=="Blunt"||WpnMAS=="Sword"))
		{var wsbm2=d.gI("WSBM2").value;AddPATK=AddPATK+MTYPE1[wsbm2]}
//Blunt Mastery
	if (d.gI("BLUNTM1CHECK").checked==true && WpnMAS=="Blunt")
		{var bluntm1=d.gI("BLUNTM1").value
		AddPATK=AddPATK+MTYPE1[bluntm1];}
	if (d.gI("BLUNTM2CHECK").checked==true && WpnMAS=="Blunt")
		{var bluntm2=d.gI("BLUNTM2").value
		AddPATK=AddPATK+MTYPE1[bluntm2];}
	if (d.gI("BLUNTM2CHECK").checked==true)
		{var bluntm2=d.gI("BLUNTM2").value
		AddSPEED=AddSPEED+BLUNTMSPEED[bluntm2]
		AddCRITDMG=AddCRITDMG+BLUNTMCRITDAMAGE[bluntm2]}
//Polearm Mastery
	if (d.gI("POLEM1CHECK").checked==true && WpnMAS=="Polearm")
		{var polem1=d.gI("POLEM1").value;AddPATK=AddPATK+MTYPE1[polem1]}
	if (d.gI("POLEM2CHECK").checked==true && WpnMAS=="Polearm")
		{var polem2=d.gI("POLEM2").value;AddPATK=AddPATK+MTYPE1[polem2]}
//Fist Mastery
	if (d.gI("FISTM1CHECK").checked==true && WpnMAS=="Fist")
		{var fistm1=d.gI("FISTM1").value;AddPATK=AddPATK+MTYPE1[fistm1]}
	if (d.gI("FISTM2CHECK").checked==true && WpnMAS=="Fist")
		{var fistm2=d.gI("FISTM2").value;AddPATK=AddPATK+MTYPE1[fistm2]}
//Sword/Blunt Mastery (Knight)
	if  (d.gI("KSBM1CHECK").checked==true && (WpnMAS=="Sword"||WpnMAS=="Blunt"))
		{var ksbm1=d.gI("KSBM1").value;AddPATK=AddPATK+KNIGHTMASTERY[ksbm1]}
	if  (d.gI("KSBM2CHECK").checked==true && (WpnMAS=="Sword"||WpnMAS=="Blunt"))
		{var ksbm2=d.gI("KSBM2").value;AddPATK=AddPATK+KNIGHTMASTERY[ksbm2]}
//Dagger Mastery
	if (d.gI("DAGGERM1CHECK").checked==true && WpnMAS=="Dagger")
		{var daggerm1=d.gI("DAGGERM1").value;AddPATK=AddPATK+DAGGERM[daggerm1]}
	if (d.gI("DAGGERM2CHECK").checked==true && WpnMAS=="Dagger")
		{var daggerm2=d.gI("DAGGERM2").value;AddPATK=AddPATK+DAGGERM[daggerm2]}
//Bow Mastery
	if (d.gI("BOWM1CHECK").checked==true && WpnMAS=="Bow")
		{var bowm1=d.gI("BOWM1").value;AddPATK=AddPATK+BOWM[bowm1]}
	if (d.gI("BOWM2CHECK").checked==true && WpnMAS=="Bow")
		{var bowm2=d.gI("BOWM2").value;AddPATK=AddPATK+BOWM[bowm2]}
//Dual Weapon Mastery
	if (d.gI("DUALMCHECK").checked==true && WpnMAS=="Duals")
		{var dualm=d.gI("DUALM").value;AddPATK=AddPATK+DUALM[dualm]}
//Two Handed Weapon Mastery
	if (d.gI("THM1CHECK").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var thm1=d.gI("THM1").value
		AddPATK=AddPATK+THM[thm1];
		BuffACC=BuffACC+3}
	if (d.gI("THM2CHECK").checked==true && (WpnType=="2hs"||WpnType=="2hb"))
		{var thm2=d.gI("THM2").value
		AddPATK=AddPATK+THM[thm2];
		BuffACC=BuffACC+3}
//Armor Mastery (Fighter)
	if (d.gI("AMFCHECK").checked==true && AType=="L")
		{var amf=d.gI("AMF").value
		AddPDEF=AddPDEF+AMF[amf];
		BuffEVA=BuffEVA+AMFEVA[amf]}
	else if (d.gI("AMFCHECK").checked==true && AType!="L")
		{var amf=d.gI("AMF").value
		AddPDEF=AddPDEF+AMF[amf];}
//Armor Mastery (Mystic)
	if (d.gI("AMMCHECK").checked==true)
		{var amm=d.gI("AMM").value;AddPDEF=AddPDEF+AMM[amm]}
//Heavy Armor Mastery (Knight)
	if (d.gI("HMK1CHECK").checked==true && AType=="H")
		{var hmk1=d.gI("HMK1").value;AddPDEF=AddPDEF+HMK[hmk1]}
	if (d.gI("HMK2CHECK").checked==true && AType=="H")
		{var hmk2=d.gI("HMK2").value;AddPDEF=AddPDEF+HMK[hmk2]}
//Heavy Armor Mastery (Warrior)
	if (d.gI("HMW1CHECK").checked==true && AType=="H")
		{var hmw1=d.gI("HMW1").valueAddPDEF=AddPDEF+HMW[hmw1]}
	if (d.gI("HMW2CHECK").checked==true && AType=="H")
		{var hmw2=d.gI("HMW2").value;AddPDEF=AddPDEF+HMW[hmw2]}
//Heavy Armor Mastery (Orc Mystic)
	if (d.gI("HMO1CHECK").checked==true && AType=="H")
		{var hmo1=d.gI("HMO1").value;AddPDEF=AddPDEF+HMO[hmo1]}
	if (d.gI("HMO2CHECK").checked==true && AType=="H")
		{var hmo2=d.gI("HMO2").value;AddPDEF=AddPDEF+HMO[hmo2]}
	if (d.gI("HMO3CHECK").checked==true && AType=="H")
		{var hmo3=d.gI("HMO3").value;AddPDEF=AddPDEF+HMO[hmo3]}
//Heavy Armor Mastery (Prophet)
	if (d.gI("HMPCHECK").checked==true && AType=="H")
		{var hmp=d.gI("HMP").value;AddPDEF=AddPDEF+HMP[hmp]}
//Light Armor Mastery (Warrior)
	if (d.gI("LMW1CHECK").checked==true && AType=="L")
		{var lmw1=d.gI("LMW1").value
		AddPDEF=AddPDEF+LMW[lmw1]
		BuffEVA=BuffEVA+LMWEVA[lmw1]}
	if (d.gI("LMW2CHECK").checked==true && AType=="L")
		{var lmw2=d.gI("LMW2").value
		AddPDEF=AddPDEF+LMW[lmw2]
		BuffEVA=BuffEVA+LMWEVA[lmw2]}
//Light Armor Mastery (Rogue)
	if (d.gI("LMR1CHECK").checked==true && AType=="L")
		{var lmr1=d.gI("LMR1").value
		AddPDEF=AddPDEF+LMR[lmr1]
		BuffEVA=BuffEVA+LMREVA[lmr1]}
	if (d.gI("LMR2CHECK").checked==true && AType=="L")
		{var lmr2=d.gI("LMR2").value
		AddPDEF=AddPDEF+LMR[lmr2]
		BuffEVA=BuffEVA+LMREVA[lmr2]}
//Light Armor Mastery (Orc Mystic)
	if (d.gI("LMO1CHECK").checked==true && AType=="L")
		{var lmo1=d.gI("LMO1").value;AddPDEF=AddPDEF+LMO[lmo1];BuffMPR=BuffMPR*1.2}
	if (d.gI("LMO2CHECK").checked==true && AType=="L")
		{var lmo2=d.gI("LMO2").value;AddPDEF=AddPDEF+LMO[lmo2];BuffMPR=BuffMPR*1.2}
	if (d.gI("LMO3CHECK").checked==true && AType=="L")
		{var lmo3=d.gI("LMO3").value;AddPDEF=AddPDEF+LMO[lmo3];BuffMPR=BuffMPR*1.2}
//Light Armor Mastery (Healer)
	if (d.gI("LMH1CHECK").checked==true && AType=="L")
		{var lmh1=d.gI("LMH1").value;AddPDEF=AddPDEF+LMH[lmh1];BuffMPR=BuffMPR*1.2}
	if (d.gI("LMH2CHECK").checked==true && AType=="L")
		{var lmh2=d.gI("LMH2").value;AddPDEF=AddPDEF+LMH[lmh2];BuffMPR=BuffMPR*1.2}
//Light Armor Mastery (Summoner)
	if (d.gI("LMSCHECK").checked==true && AType=="L")
		{var lms=d.gI("LMS").value;AddPDEF=AddPDEF+LMS[lms];BuffMPR=BuffMPR*1.2}
//Robe Mastery (Nuker)
	if (d.gI("RMN1CHECK").checked==true && AType=="R")
		{var rmn1=d.gI("RMN1").value;AddPDEF=AddPDEF+RMN[rmn1]}
	if (d.gI("RMN2CHECK").checked==true && AType=="R")
		{var rmn2=d.gI("RMN2").value;AddPDEF=AddPDEF+RMN[rmn2]}
//Robe Mastery (Healer)
	if (d.gI("RMH1CHECK").checked==true && AType=="R")
		{var rmh1=d.gI("RMH1").value;AddPDEF=AddPDEF+RMH[rmh1]}
	if (d.gI("RMH2CHECK").checked==true && AType=="R")
		{var rmh2=d.gI("RMH2").value;AddPDEF=AddPDEF+RMH[rmh2]}
//Robe Mastery (Orc Mystic)
	if (d.gI("RMO1CHECK").checked==true && AType=="R")
		{var rmo1=d.gI("RMO1").value;AddPDEF=AddPDEF+RMO[rmo1]}
	if (d.gI("RMO2CHECK").checked==true && AType=="R")
		{var rmo2=d.gI("RMO2").value;AddPDEF=AddPDEF+RMO[rmo2]}
	if (d.gI("RMO3CHECK").checked==true && AType=="R")
		{var rmo3=d.gI("RMO3").value;AddPDEF=AddPDEF+RMO[rmo3]}
//Magic Resistance
	if (d.gI("MR1CHECK").checked==true)
		{var mr1=d.gI("MR1").value;AddMDEF=AddMDEF+MR[mr1]}
	if (d.gI("MR2CHECK").checked==true)
		{var mr2=d.gI("MR2").value;AddMDEF=AddMDEF+MR[mr2]}
//Anti-Magic
	if (d.gI("AM1CHECK").checked==true)
		{var am1=d.gI("AM1").value;AddMDEF=AddMDEF+AM[am1]}
	if (d.gI("AM2CHECK").checked==true)
		{var am2=d.gI("AM2").value;AddMDEF=AddMDEF+AM[am2]}
	if (d.gI("AM3CHECK").checked==true)
		{var am3=d.gI("AM3").value;AddMDEF=AddMDEF+AM[am3]}
//Aegis
	if (d.gI("AEGISCHECK").checked==true)
		{block360=true}
//Agile Movement
	if (d.gI("AGILEMOVEMENT1CHECK").checked==true && AType=="L")
		{var agilemovement1=d.gI("AGILEMOVEMENT1").value
		BuffACC=BuffACC+AGILEMOVEMENT[agilemovement1]
		AddSPEED=AddSPEED+AGILEMOVEMENTSPEED[agilemovement1]}
	if (d.gI("AGILEMOVEMENT2CHECK").checked==true && AType=="L")
		{var agilemovement2=d.gI("AGILEMOVEMENT2").value
		BuffACC=BuffACC+AGILEMOVEMENT[agilemovement2]
		AddSPEED=AddSPEED+AGILEMOVEMENTSPEED[agilemovement2]}
//Boost Attack Speed
	if (d.gI("BOOSTASPD1CHECK").checked==true)
		{var boostaspd1=d.gI("BOOSTASPD1").value;BuffASPD=BuffASPD*BOOSTASPD[boostaspd1]}
	if (d.gI("BOOSTASPD2CHECK").checked==true)
		{var boostaspd2=d.gI("BOOSTASPD2").value;BuffASPD=BuffASPD*BOOSTASPD[boostaspd2]}
//Boost Evasion
	if (d.gI("BOOSTEVASION1CHECK").checked==true)
		{var boostevasion1=d.gI("BOOSTEVASION1").value;BuffEVA=BuffEVA+BOOSTEVASION[boostevasion1]}
	if (d.gI("BOOSTEVASION2CHECK").checked==true)
		{var boostevasion2=d.gI("BOOSTEVASION2").value;BuffEVA=BuffEVA+BOOSTEVASION[boostevasion2]}
//Boost HP
	if (d.gI("BOOSTHP1CHECK").checked==true)
		{var boosthp1=d.gI("BOOSTHP1").value
		AddHP=AddHP+BOOSTHP[boosthp1]
		AddCP=AddCP+BOOSTHPCP[boosthp1]}
	if (d.gI("BOOSTHP2CHECK").checked==true)
		{var boosthp2=d.gI("BOOSTHP2").value
		AddHP=AddHP+BOOSTHP[boosthp2]
		AddCP=AddCP+BOOSTHPCP[boosthp2]}
	if (d.gI("BOOSTHP3CHECK").checked==true)
		{var boosthp3=d.gI("BOOSTHP3").value
		AddHP=AddHP+BOOSTHP[boosthp3]
		AddCP=AddCP+BOOSTHPCP[boosthp3]}
//Boost Mana
	if (d.gI("BOOSTMP1CHECK").checked==true)
		{var boostmp1=d.gI("BOOSTMP1").value;AddMP=AddMP+BOOSTMP[boostmp1]}
	if (d.gI("BOOSTMP2CHECK").checked==true)
		{var boostmp2=d.gI("BOOSTMP2").value;AddMP=AddMP+BOOSTMP[boostmp2]}
//Clan Aegis
	if (d.gI("CLANPDEFCHECK").checked==true)
		{var clanpdef=d.gI("CLANPDEF").value;BuffPDEF=BuffPDEF*CLANMULTIPLY[clanpdef]}
//Clan Guidance
	if (d.gI("CLANGUIDANCECHECK").checked==true)
		{var clanguidance=d.gI("CLANGUIDANCE").value;BuffACC=BuffACC+CLANADDB[clanguidance]}
//Clan Magic Protection
	if (d.gI("CLANMDEFCHECK").checked==true)
		{var clanmdef=d.gI("CLANMDEF").value;BuffMDEF=BuffMDEF*CLANMULTIPLYB[clanmdef]}
//Clan March
	if (d.gI("CLANSPEEDCHECK").checked==true)
		{var clanspeed=d.gI("CLANSPEED").value;AddSPEED=AddSPEED+CLANADD[clanspeed]}
//Clan Might
	if (d.gI("CLANPATKCHECK").checked==true)
		{var clanpatk=d.gI("CLANPATK").value;BuffPATK=BuffPATK*CLANMULTIPLY[clanpatk]}
//Clan Spirituality
	if (d.gI("CLANCPCHECK").checked==true)
		{var clancp=d.gI("CLANCP").value;BuffCP=BuffCP*CLANMULTIPLYB[clancp]}
//Clan Vitality
	if (d.gI("CLANHPCHECK").checked==true)
		{var clanhp=d.gI("CLANHP").value;BuffHP=BuffHP*CLANMULTIPLY[clanhp]}
//Clear Mind
	if (d.gI("CLEARMINDCHECK").checked==true && movemode==1)
		{var clearmind=d.gI("CLEARMIND").value;AddMPR=AddMPR+CLEARMINDWALK[clearmind]}
	if (d.gI("CLEARMINDCHECK").checked==true && movemode==1.1)
		{var clearmind=d.gI("CLEARMIND").value;AddMPR=AddMPR+CLEARMINDSTAND[clearmind]}
//Critical Chance
	if (d.gI("CRITICALCHANCE1CHECK").checked==true)
		{var criticalchance1=d.gI("CRITICALCHANCE1").value;subcritical=subcritical+(basecritical*CRITICALCHANCE[criticalchance1])}
	if (d.gI("CRITICALCHANCE2CHECK").checked==true)
		{var criticalchance2=d.gI("CRITICALCHANCE2").value;subcritical=subcritical+(basecritical*CRITICALCHANCE[criticalchance2])}
//Critical Power
	if (d.gI("CRITICALPOWER1CHECK").checked==true)
		{var bu=d.gI("CRITICALPOWER1").value;AddCRITDMG=AddCRITDMG+CRITICALPOWER[bu]}
	if (d.gI("CRITICALPOWER2CHECK").checked==true)
		{var bu=d.gI("CRITICALPOWER2").value;AddCRITDMG=AddCRITDMG+CRITICALPOWER[bu]}
//Esprit
	if (d.gI("ESPRIT1CHECK").checked==true && movemode==0.7)
		{var esprit=d.gI("ESPRIT1").value;AddHPR=AddHPR+ESPRITHP[esprit];AddMPR=AddMPR+ESPRITMP[esprit]}
	if (d.gI("ESPRIT2CHECK").checked==true && movemode==0.7)
		{var esprit=d.gI("ESPRIT2").value;AddHPR=AddHPR+ESPRITHP[esprit];AddMPR=AddMPR+ESPRITMP[esprit]}
//Fast HP Recovery
	if (d.gI("FASTHPRECOVERY1CHECK").checked==true)
		{var fastcast1=d.gI("FASTHPRECOVERY1").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
	if (d.gI("FASTHPRECOVERY2CHECK").checked==true)
		{var fastcast1=d.gI("FASTHPRECOVERY2").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
	if (d.gI("FASTHPRECOVERY3CHECK").checked==true)
		{var fastcast1=d.gI("FASTHPRECOVERY3").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
	if (d.gI("FASTHPRECOVERY4CHECK").checked==true)
		{var fastcast1=d.gI("FASTHPRECOVERY4").value;AddHPR=AddHPR+(FASTHPRECOVERY[fastcast1]*movemode)}
//Fast Mana Recovery
	if (d.gI("FASTMANARECOVERY1CHECK").checked==true)
		{var fastcast1=d.gI("FASTMANARECOVERY1").value;AddMPR=AddMPR+(FASTMANARECOVERY[fastcast1]*movemode)}
	if (d.gI("FASTMANARECOVERY2CHECK").checked==true)
		{var fastcast1=d.gI("FASTMANARECOVERY2").value;AddMPR=AddMPR+(FASTMANARECOVERY[fastcast1]*movemode)}
//Fast Spell Casting
	if (d.gI("FASTCAST1CHECK").checked==true)
		{var fastcast1=d.gI("FASTCAST1").value;BuffCAST=BuffCAST*FASTCAST[fastcast1]}
	if (d.gI("FASTCAST2CHECK").checked==true)
		{var fastcast2=d.gI("FASTCAST2").value;BuffCAST=BuffCAST*FASTCAST[fastcast2]}
//Final Fortress
	if (d.gI("FINALFORTRESSCHECK").checked==true)
		{var finalfortress=d.gI("FINALFORTRESS").value;AddPDEF30=AddPDEF30+FINALFORTRESS[finalfortress]}
//Final Frenzy
	if (d.gI("FINALFRENZYCHECK").checked==true)
		{var finalfrenzy=d.gI("FINALFRENZY").value;AddPATK30=AddPATK30+FINALFRENZY[finalfrenzy]}
//Focus Mind
	if (d.gI("FOCUSMIND1CHECK").checked==true)
		{var fastcast1=d.gI("FOCUSMIND1").value;AddMPR=AddMPR+(FOCUSMIND[fastcast1]*movemode)}
	if (d.gI("FOCUSMIND2CHECK").checked==true)
		{var fastcast1=d.gI("FOCUSMIND2").value;AddMPR=AddMPR+(FOCUSMIND[fastcast1]*movemode)}
//Quick Step
	if (d.gI("QUICKSTEP1CHECK").checked==true)
		{var quickstep1=d.gI("QUICKSTEP1").value;AddSPEED=AddSPEED+QUICKSTEP[quickstep1]}
	if (d.gI("QUICKSTEP2CHECK").checked==true)
		{var quickstep2=d.gI("QUICKSTEP2").value;AddSPEED=AddSPEED+QUICKSTEP[quickstep2]}
//Quiver of Holding
	if (d.gI("QUIVEROFHOLDINGCHECK").checked==true)
		{var quiverofholding=d.gI("QUIVEROFHOLDING").value;weightlimit=weightlimit*QUIVEROFHOLDING[quiverofholding]}
//Seal of Strife
	if (d.gI("SEALOFSTRIFECHECK").checked==true)
		{var sealofstrife=d.gI("SEALOFSTRIFE").value;BuffCP=BuffCP*SEALOFSTRIFE[sealofstrife]}
//Shadow Sense
	if (d.gI("SHADOWSENSECHECK").checked==true)
		{BuffACC=BuffACC+3}
//Shield Mastery
	if (d.gI("SHIELDMASTERY1CHECK").checked==true)
		{var shieldmastery1=d.gI("SHIELDMASTERY1").value;ShieldBlockRate=ShieldBlockRate*SHIELDMASTERY[shieldmastery1]}
	if (d.gI("SHIELDMASTERY2CHECK").checked==true)
		{var shieldmastery2=d.gI("SHIELDMASTERY2").value;ShieldBlockRate=ShieldBlockRate*SHIELDMASTERY[shieldmastery2]}
//Vital Force
	if (d.gI("VITALFORCE1CHECK").checked==true && movemode==1.5)
		{var fastcast1=d.gI("VITALFORCE1").value;AddHPR=AddHPR+VITALFORCEHP[fastcast1]*CONMOD;AddMPR=AddMPR+VITALFORCEMP[fastcast1]}
	if (d.gI("VITALFORCE2CHECK").checked==true && movemode==1.5)
		{var fastcast1=d.gI("VITALFORCE2").value;AddHPR=AddHPR+VITALFORCEHP[fastcast1]*CONMOD;AddMPR=AddMPR+VITALFORCEMP[fastcast1]}
//Weight Limit
	if (d.gI("WEIGHTLIMIT1CHECK").checked==true)
		{var weightlimit1=d.gI("WEIGHTLIMIT1").value;weightlimit=weightlimit*WEIGHTLIMIT[weightlimit1]}
	if (d.gI("WEIGHTLIMIT2CHECK").checked==true)
		{var weightlimit2=d.gI("WEIGHTLIMIT2").value;weightlimit=weightlimit*WEIGHTLIMIT[weightlimit2]}
	if (d.gI("WEIGHTLIMIT3CHECK").checked==true)
		{var weightlimit3=d.gI("WEIGHTLIMIT3").value;weightlimit=weightlimit*WEIGHTLIMIT[weightlimit3]}

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
if (d.gI("WMM1CHECK").checked==true||d.gI("WMM2CHECK").checked==true||d.gI("WMM3CHECK").checked==true)
	{MasteryPATK=1.45}
else if (d.gI("WMFCHECK").checked==true)
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
if (d.gI("WMM1CHECK").checked==true||d.gI("WMM2CHECK").checked==true||d.gI("WMM3CHECK").checked==true)
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
d.gI("SHIELDPDEF").innerHTML=shieldpdef2

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
{d.gI("MDEF").innerHTML=mdef2;combatmdef=mdef}
else if (d.gI("HP6").checked==true)
{d.gI("MDEF").innerHTML=mdef602;combatmdef=mdef60}
else if (d.gI("HP3").checked==true)
{d.gI("MDEF").innerHTML=mdef302;combatmdef=mdef30}

//Accuracy Calculation
var Accuracy=(Math.sqrt(DEX)*6)+LVL+WpnAcc+RINGOFQUEENACC+RINGOFBAIUMACC+RINGOFCOREACC+BuffACC
var Accuracy2=Math.floor(Accuracy)
var Accuracy60=Accuracy2+BuffACC60
var Accuracy602=Math.floor(Accuracy60)
var Accuracy30=Accuracy2+BuffACC30+BuffACC60
var Accuracy302=Math.floor(Accuracy30)
d.gI("ACCURACY").innerHTML=Accuracy2
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
{d.gI("EVASION").innerHTML=Evasion2;combatevasion=Evasion}
else if (d.gI("HP6").checked==true)
{d.gI("EVASION").innerHTML=Evasion602;combatevasion=Evasion60}
else if (d.gI("HP3").checked==true)
{d.gI("EVASION").innerHTML=Evasion302;combatevasion=Evasion30}

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

//Shield Block Rate
ShieldBlockRate=ShieldBlockRate*DEXMOD
if ((position==4||position==5) && block360==false)
	{ShieldBlockRate=0}
if (ShieldBlockRate>=1)
	{ShieldBlockRate=1}
var shieldblockrate=Math.floor(ShieldBlockRate*100)+"%"
d.gI("SHIELDBLOCKRATE").innerHTML=shieldblockrate
var avgshieldpdef=shieldpdef*ShieldBlockRate+pdef*(1-ShieldBlockRate)
var avgshieldpdef2=Math.floor(avgshieldpdef)
d.gI("AVGSHIELDPDEF").innerHTML=avgshieldpdef2

//Weight Limit
var weightlimit2=weightlimit*CONMOD
d.gI("WEIGHTLIMIT").innerHTML=Math.floor(weightlimit2)
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
var hpregen=basehpregen*CONMOD*LVLMOD*BuffHPR*movemode+AddHPR
var hpregen2=Math.floor(hpregen*10)/10
d.gI("HPREGEN").innerHTML=hpregen2
var cpregen=basecpregen*CONMOD*LVLMOD*BuffCPR*movemode+AddCPR
var cpregen2=Math.floor(cpregen*10)/10
d.gI("CPREGEN").innerHTML=cpregen2
var mpregen=(basempregen*MENMOD*LVLMOD*BuffMPR*movemode+AddMPR)*BuffMPR2+AddMPR2
var mpregen2=Math.floor(mpregen*10)/10
d.gI("MPREGEN").innerHTML=mpregen2

////////////////////Damage Calculations
//Enemy Stats
var targettype="player"
var Ecombatpatk=500*2
var Ecombatpdef=1000
var Eshieldpdef=1500
var EShieldBlockRate=0.40
var Eavgshieldpdef=1200
var Eblock360=false
var Ecombatcritical=220
var Ecombatatkspd=500
var Eranddmg=1.1

if (d.gI("SOULSHOTS").checked==true)
	{combatpatk=combatpatk*2}

if ((position==2||position==3) && Eblock360==false)
	{var EShieldBlockRate=0}

if (((weapongrade=="S"||weapongrade=="A") && weapon_sa!="no SA" && targettype=="player")||weapongrade=="H" && targettype=="player")
	{combatpatk=combatpatk*1.05}

if (WpnMAS=="Bow")
	{EShieldBlockRate=EShieldBlockRate*3
	if (EShieldBlockRate>=1)
		{EShieldBlockRate=1}
	}

//Base Damage
if (WpnMAS=="Fist"||WpnMAS=="Duals")
	{var combatpatk=combatpatk/2}
var basedmg=combatpatk*70/Ecombatpdef
var Ebasedmg=Ecombatpatk*70/combatpdef

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
if ((position==1 && EShieldBlockRate!=0)||((position==2||position==3) && block360==true && EShieldBlockRate!=0))
	{var shieldblockdmg=combatpatk*70/Eshieldpdef
	var shieldblockdmg2=Math.floor(shieldblockdmg)
	if (shieldblockdmg2==0) {shieldblockdmg2=1}}
else
	{var shieldblockdmg2=0;var shieldblockdmg=0}
if ((position==1 && ShieldBlockRate!=0)||((position==4||position==5) && block360==true && ShieldBlockRate!=0))
	{var Eshieldblockdmg=Ecombatpatk*70/shieldpdef
	var Eshieldblockdmg2=Math.floor(Eshieldblockdmg)
	if (Eshieldblockdmg2==0) {Eshieldblockdmg2=1}}
else
	{var Eshieldblockdmg2=0;var Eshieldblockdmg=0}

//Shield Block Min/Max Damage
if ((position==1 && EShieldBlockRate!=0)||((position==2||position==3) && Eblock360==true && EShieldBlockRate!=0))
	{var shieldmindmg=(combatpatk*70/Eshieldpdef)/randdmg
	var shieldmindmg2=Math.floor(shieldmindmg)
	if (shieldmindmg2==0) {shieldmindmg2=1}
	var shieldmaxdmg=(combatpatk*70/Eshieldpdef)*randdmg
	var shieldmaxdmg2=Math.floor(shieldmaxdmg)
	if (shieldmaxdmg2==0) {shieldmaxdmg2=1}
	d.gI("SHIELDDMGRNG").innerHTML=(shieldmindmg2+"-"+shieldmaxdmg2)}
else
	{var shieldmindmg2=0;var shieldmaxdmg2=0;var shieldmindmg=0;var shieldmaxdmg=0
	d.gI("SHIELDDMGRNG").innerHTML=("-")}


if ((position==1 && ShieldBlockRate!=0)||((position==4||position==5) && block360==true && ShieldBlockRate!=0))
	{var Eshieldmindmg=(Ecombatpatk*70/shieldpdef)/randdmg
	var Eshieldmindmg2=Math.floor(Eshieldmindmg)
	if (Eshieldmindmg2==0) {Eshieldmindmg2=1}
	var Eshieldmaxdmg=(Ecombatpatk*70/shieldpdef)*randdmg
	var Eshieldmaxdmg2=Math.floor(Eshieldmaxdmg)
	if (Eshieldmaxdmg2==0) {Eshieldmaxdmg2=1}
	d.gI("ESHIELDDMGRNG").innerHTML=(Eshieldmindmg2+"-"+Eshieldmaxdmg2)}
else
	{var Eshieldmindmg2=0;var Eshieldmaxdmg2=0;var Eshieldmindmg=0;var Eshieldmaxdmg=0
	d.gI("ESHIELDDMGRNG").innerHTML=("-")}

//Critical hits
if (position==1)
	{var critchance=(combatcritical/10)*BuffCOMBATCRIT
	if (critchance>=100)
		{critchance=100}
	var critchance2=Math.floor(critchance*10)/10}
else if (position==2)
	{var critchance=(combatcritical/10)*1.2*BuffCOMBATCRIT
	if (critchance>=100)
		{critchance=100}
	var critchance2=Math.floor(critchance*10)/10}
else if (position==3)
	{var critchance=(combatcritical/10)*1.4*BuffCOMBATCRIT+(backcritical/10)
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

var critdmg=basedmg*2*BuffCRITDMG*RINGOFBAIUMCRITDMG*RINGOFQUEENCRITDMG+(AddCRITDMG*70/Ecombatpdef)
var sbcritdmg=shieldblockdmg*2*BuffCRITDMG*RINGOFBAIUMCRITDMG*RINGOFQUEENCRITDMG+(AddCRITDMG*70/Eshieldpdef)
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
	{var Ecritdmg=Ebasedmg*2
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
	{var Esbcritdmg=Eshieldblockdmg*2
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
	var Ehitspersecond2=Math.floor(Ehitspersecond*100)/100
	d.gI("EHITSPERSECOND").innerHTML=(Ehitspersecond2)}
else
	{var Ehitspersecond=0;var Ehitspersecond2=0;
	d.gI("EHITSPERSECOND").innerHTML=("-")}

//Damage Per Second
if (position>=1 && position<=3)
	{var avgdmg=(basedmg*(1-EShieldBlockRate)*(1-(critchance/100))+shieldblockdmg*EShieldBlockRate*(1-(critchance/100))+critdmg*(1-EShieldBlockRate)*(critchance/100)+sbcritdmg*EShieldBlockRate*(critchance/100))*hitspersecond
	var avgdmg2=Math.floor(avgdmg*10)/10
	if (avgdmg2==0) {avgdmg2=1}}
else {var avgdmg2=0}
d.gI("AVGDMG").innerHTML=avgdmg2
if (position==1||position==4||position==5)
	{var Eavgdmg=(Ebasedmg*(1-ShieldBlockRate)*(1-(Ecritchance/100))+Eshieldblockdmg*ShieldBlockRate*(1-(Ecritchance/100))+Ecritdmg*(1-ShieldBlockRate)*(Ecritchance/100)+Esbcritdmg*ShieldBlockRate*(Ecritchance/100))*Ehitspersecond
	var Eavgdmg2=Math.floor(Eavgdmg*10)/10
	if (Eavgdmg2==0) {Eavgdmg2=1}}
else
	{var Eavgdmg2=0}
d.gI("EAVGDMG").innerHTML=Eavgdmg2

//d.gI("TEST").innerHTML=shieldblockdmg
}

}

</script>

<!-- load -->
<script>
window.onload=function() {
classskills();
equipmentgrade();
buffs();
passives();
toggles();
debuffs();
calc();
boxgoaway()}
</script>