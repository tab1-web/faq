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
	<tbody><tr><td width="95">HP</td><td id="HP" align="right">188</td><td width="15"></td><td width="95">CP</td><td id="CP" width="35" align="right">46</td></tr>
	<tr><td>MP</td><td id="MP" align="right">341</td><td></td><td></td><td id="TEST" align="right"></td></tr>
	<tr><td>P.Atk.</td><td id="PATK" align="right">6</td><td></td><td>M.Atk.</td><td id="MATK" align="right">3</td></tr>
	<tr><td>P.Def.</td><td id="PDEF" align="right">553</td><td></td><td>M.Def.</td><td id="MDEF" align="right">62</td></tr>
	<tr><td>Accuracy</td><td id="ACCURACY" align="right">42</td><td></td><td>Evasion</td><td id="EVASION" align="right">34</td></tr>
	<tr><td>Critical</td><td id="CRITICAL" align="right">57</td><td></td><td>Speed</td><td id="SPEED" align="right">93</td></tr>
	<tr><td>Atk. Spd.</td><td id="ATKSPD" align="right">275</td><td></td><td>Casting Spd.</td><td id="CASTINGSPD" align="right">147</td></tr>
</tbody></table>
</fieldset></td>
<td valign="bottom">
<fieldset>
<legend class="style2">Base Stats</legend>
<table class="statcalc" cellpadding="5">
	<tbody><tr><td>STR</td><td id="STR">41</td><td>DEX</td><td id="DEX">31</td><td>CON</td><td id="CON">35</td></tr>
	<tr><td>INT</td><td id="INT">25</td><td>WIT</td><td id="WIT">12</td><td>MEN</td><td id="MEN">26</td></tr>
</tbody></table>
<table class="statcalc">
<tbody><tr><td colspan="4" class="style2">Tattoos</td>
</tr>
<tr>			<td>1</td>
<td colspan="3">			<select id="tattooslot1nuker" onchange="calc()" style="display: none;"><option value="0" selected="selected">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="49">INT+1 MEN-1</option><option value="50">INT+1 MEN-2</option><option value="51">INT+1 MEN-3</option><option value="52">INT+1 WIT-1</option><option value="53">INT+1 WIT-2</option><option value="54">INT+1 WIT-3</option><option value="55">INT+2 MEN-2</option><option value="56">INT+2 MEN-3</option><option value="57">INT+2 MEN-4</option><option value="58">INT+2 WIT-2</option><option value="59">INT+2 WIT-3</option><option value="60">INT+2 WIT-4</option><option value="61">INT+3 MEN-3</option><option value="62">INT+3 MEN-4</option><option value="63">INT+3 MEN-5</option><option value="64">INT+3 WIT-3</option><option value="65">INT+3 WIT-4</option><option value="66">INT+3 WIT-5</option><option value="67">INT+4 MEN-4</option><option value="68">INT+4 MEN-5</option><option value="69">INT+4 MEN-6</option><option value="70">INT+4 WIT-4</option><option value="71">INT+4 WIT-5</option><option value="72">INT+4 WIT-6</option><option value="73">MEN+1 INT-1</option><option value="74">MEN+1 INT-2</option><option value="75">MEN+1 INT-3</option><option value="76">MEN+1 WIT-1</option><option value="77">MEN+1 WIT-2</option><option value="78">MEN+1 WIT-3</option><option value="79">MEN+2 INT-2</option><option value="80">MEN+2 INT-3</option><option value="81">MEN+2 INT-4</option><option value="82">MEN+2 WIT-2</option><option value="83">MEN+2 WIT-3</option><option value="84">MEN+2 WIT-4</option><option value="85">MEN+3 INT-3</option><option value="86">MEN+3 INT-4</option><option value="87">MEN+3 INT-5</option><option value="88">MEN+3 WIT-3</option><option value="89">MEN+3 WIT-4</option><option value="90">MEN+3 WIT-5</option><option value="91">MEN+4 INT-4</option><option value="92">MEN+4 INT-5</option><option value="93">MEN+4 INT-6</option><option value="94">MEN+4 WIT-4</option><option value="95">MEN+4 WIT-5</option><option value="96">MEN+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="121">WIT+1 INT-1</option><option value="122">WIT+1 INT-2</option><option value="123">WIT+1 INT-3</option><option value="124">WIT+1 MEN-1</option><option value="125">WIT+1 MEN-2</option><option value="126">WIT+1 MEN-3</option><option value="127">WIT+2 INT-2</option><option value="128">WIT+2 INT-3</option><option value="129">WIT+2 INT-4</option><option value="130">WIT+2 MEN-2</option><option value="131">WIT+2 MEN-3</option><option value="132">WIT+2 MEN-4</option><option value="133">WIT+3 INT-3</option><option value="134">WIT+3 INT-4</option><option value="135">WIT+3 INT-5</option><option value="136">WIT+3 MEN-3</option><option value="137">WIT+3 MEN-4</option><option value="138">WIT+3 MEN-5</option><option value="139">WIT+4 INT-4</option><option value="140">WIT+4 INT-5</option><option value="141">WIT+4 INT-6</option><option value="142">WIT+4 MEN-4</option><option value="143">WIT+4 MEN-5</option><option value="144">WIT+4 MEN-6</option></select>
				<select id="tattooslot1fighter" onchange="calc()" style="display: block;"><option value="0">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4" selected="selected">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="52">INT+1 WIT-1</option><option value="53">INT+1 WIT-2</option><option value="54">INT+1 WIT-3</option><option value="58">INT+2 WIT-2</option><option value="59">INT+2 WIT-3</option><option value="60">INT+2 WIT-4</option><option value="64">INT+3 WIT-3</option><option value="65">INT+3 WIT-4</option><option value="66">INT+3 WIT-5</option><option value="70">INT+4 WIT-4</option><option value="71">INT+4 WIT-5</option><option value="72">INT+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="121">WIT+1 INT-1</option><option value="122">WIT+1 INT-2</option><option value="123">WIT+1 INT-3</option><option value="127">WIT+2 INT-2</option><option value="128">WIT+2 INT-3</option><option value="129">WIT+2 INT-4</option><option value="133">WIT+3 INT-3</option><option value="134">WIT+3 INT-4</option><option value="135">WIT+3 INT-5</option><option value="139">WIT+4 INT-4</option><option value="140">WIT+4 INT-5</option><option value="141">WIT+4 INT-6</option></select>
				<select id="tattooslot1healer" onchange="calc()" style="display: none;"><option value="0" selected="selected">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="76">MEN+1 WIT-1</option><option value="77">MEN+1 WIT-2</option><option value="78">MEN+1 WIT-3</option><option value="82">MEN+2 WIT-2</option><option value="83">MEN+2 WIT-3</option><option value="84">MEN+2 WIT-4</option><option value="88">MEN+3 WIT-3</option><option value="89">MEN+3 WIT-4</option><option value="90">MEN+3 WIT-5</option><option value="94">MEN+4 WIT-4</option><option value="95">MEN+4 WIT-5</option><option value="96">MEN+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="124">WIT+1 MEN-1</option><option value="125">WIT+1 MEN-2</option><option value="126">WIT+1 MEN-3</option><option value="130">WIT+2 MEN-2</option><option value="131">WIT+2 MEN-3</option><option value="132">WIT+2 MEN-4</option><option value="136">WIT+3 MEN-3</option><option value="137">WIT+3 MEN-4</option><option value="138">WIT+3 MEN-5</option><option value="142">WIT+4 MEN-4</option><option value="143">WIT+4 MEN-5</option><option value="144">WIT+4 MEN-6</option></select>
</td></tr><tr>
			<td>2</td>
<td colspan="3">			<select id="tattooslot2nuker" onchange="calc()" style="display: none;"><option value="0" selected="selected">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="49">INT+1 MEN-1</option><option value="50">INT+1 MEN-2</option><option value="51">INT+1 MEN-3</option><option value="52">INT+1 WIT-1</option><option value="53">INT+1 WIT-2</option><option value="54">INT+1 WIT-3</option><option value="55">INT+2 MEN-2</option><option value="56">INT+2 MEN-3</option><option value="57">INT+2 MEN-4</option><option value="58">INT+2 WIT-2</option><option value="59">INT+2 WIT-3</option><option value="60">INT+2 WIT-4</option><option value="61">INT+3 MEN-3</option><option value="62">INT+3 MEN-4</option><option value="63">INT+3 MEN-5</option><option value="64">INT+3 WIT-3</option><option value="65">INT+3 WIT-4</option><option value="66">INT+3 WIT-5</option><option value="67">INT+4 MEN-4</option><option value="68">INT+4 MEN-5</option><option value="69">INT+4 MEN-6</option><option value="70">INT+4 WIT-4</option><option value="71">INT+4 WIT-5</option><option value="72">INT+4 WIT-6</option><option value="73">MEN+1 INT-1</option><option value="74">MEN+1 INT-2</option><option value="75">MEN+1 INT-3</option><option value="76">MEN+1 WIT-1</option><option value="77">MEN+1 WIT-2</option><option value="78">MEN+1 WIT-3</option><option value="79">MEN+2 INT-2</option><option value="80">MEN+2 INT-3</option><option value="81">MEN+2 INT-4</option><option value="82">MEN+2 WIT-2</option><option value="83">MEN+2 WIT-3</option><option value="84">MEN+2 WIT-4</option><option value="85">MEN+3 INT-3</option><option value="86">MEN+3 INT-4</option><option value="87">MEN+3 INT-5</option><option value="88">MEN+3 WIT-3</option><option value="89">MEN+3 WIT-4</option><option value="90">MEN+3 WIT-5</option><option value="91">MEN+4 INT-4</option><option value="92">MEN+4 INT-5</option><option value="93">MEN+4 INT-6</option><option value="94">MEN+4 WIT-4</option><option value="95">MEN+4 WIT-5</option><option value="96">MEN+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="121">WIT+1 INT-1</option><option value="122">WIT+1 INT-2</option><option value="123">WIT+1 INT-3</option><option value="124">WIT+1 MEN-1</option><option value="125">WIT+1 MEN-2</option><option value="126">WIT+1 MEN-3</option><option value="127">WIT+2 INT-2</option><option value="128">WIT+2 INT-3</option><option value="129">WIT+2 INT-4</option><option value="130">WIT+2 MEN-2</option><option value="131">WIT+2 MEN-3</option><option value="132">WIT+2 MEN-4</option><option value="133">WIT+3 INT-3</option><option value="134">WIT+3 INT-4</option><option value="135">WIT+3 INT-5</option><option value="136">WIT+3 MEN-3</option><option value="137">WIT+3 MEN-4</option><option value="138">WIT+3 MEN-5</option><option value="139">WIT+4 INT-4</option><option value="140">WIT+4 INT-5</option><option value="141">WIT+4 INT-6</option><option value="142">WIT+4 MEN-4</option><option value="143">WIT+4 MEN-5</option><option value="144">WIT+4 MEN-6</option></select>
				<select id="tattooslot2fighter" onchange="calc()" style="display: block;"><option value="0">No Tattoo</option><option value="1" selected="selected">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="52">INT+1 WIT-1</option><option value="53">INT+1 WIT-2</option><option value="54">INT+1 WIT-3</option><option value="58">INT+2 WIT-2</option><option value="59">INT+2 WIT-3</option><option value="60">INT+2 WIT-4</option><option value="64">INT+3 WIT-3</option><option value="65">INT+3 WIT-4</option><option value="66">INT+3 WIT-5</option><option value="70">INT+4 WIT-4</option><option value="71">INT+4 WIT-5</option><option value="72">INT+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="121">WIT+1 INT-1</option><option value="122">WIT+1 INT-2</option><option value="123">WIT+1 INT-3</option><option value="127">WIT+2 INT-2</option><option value="128">WIT+2 INT-3</option><option value="129">WIT+2 INT-4</option><option value="133">WIT+3 INT-3</option><option value="134">WIT+3 INT-4</option><option value="135">WIT+3 INT-5</option><option value="139">WIT+4 INT-4</option><option value="140">WIT+4 INT-5</option><option value="141">WIT+4 INT-6</option></select>
				<select id="tattooslot2healer" onchange="calc()" style="display: none;"><option value="0" selected="selected">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="76">MEN+1 WIT-1</option><option value="77">MEN+1 WIT-2</option><option value="78">MEN+1 WIT-3</option><option value="82">MEN+2 WIT-2</option><option value="83">MEN+2 WIT-3</option><option value="84">MEN+2 WIT-4</option><option value="88">MEN+3 WIT-3</option><option value="89">MEN+3 WIT-4</option><option value="90">MEN+3 WIT-5</option><option value="94">MEN+4 WIT-4</option><option value="95">MEN+4 WIT-5</option><option value="96">MEN+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="124">WIT+1 MEN-1</option><option value="125">WIT+1 MEN-2</option><option value="126">WIT+1 MEN-3</option><option value="130">WIT+2 MEN-2</option><option value="131">WIT+2 MEN-3</option><option value="132">WIT+2 MEN-4</option><option value="136">WIT+3 MEN-3</option><option value="137">WIT+3 MEN-4</option><option value="138">WIT+3 MEN-5</option><option value="142">WIT+4 MEN-4</option><option value="143">WIT+4 MEN-5</option><option value="144">WIT+4 MEN-6</option></select>
</td></tr><tr>
			<td>3</td>
<td colspan="3">			<select id="tattooslot3nuker" onchange="calc()" style="display: none;"><option value="0" selected="selected">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="49">INT+1 MEN-1</option><option value="50">INT+1 MEN-2</option><option value="51">INT+1 MEN-3</option><option value="52">INT+1 WIT-1</option><option value="53">INT+1 WIT-2</option><option value="54">INT+1 WIT-3</option><option value="55">INT+2 MEN-2</option><option value="56">INT+2 MEN-3</option><option value="57">INT+2 MEN-4</option><option value="58">INT+2 WIT-2</option><option value="59">INT+2 WIT-3</option><option value="60">INT+2 WIT-4</option><option value="61">INT+3 MEN-3</option><option value="62">INT+3 MEN-4</option><option value="63">INT+3 MEN-5</option><option value="64">INT+3 WIT-3</option><option value="65">INT+3 WIT-4</option><option value="66">INT+3 WIT-5</option><option value="67">INT+4 MEN-4</option><option value="68">INT+4 MEN-5</option><option value="69">INT+4 MEN-6</option><option value="70">INT+4 WIT-4</option><option value="71">INT+4 WIT-5</option><option value="72">INT+4 WIT-6</option><option value="73">MEN+1 INT-1</option><option value="74">MEN+1 INT-2</option><option value="75">MEN+1 INT-3</option><option value="76">MEN+1 WIT-1</option><option value="77">MEN+1 WIT-2</option><option value="78">MEN+1 WIT-3</option><option value="79">MEN+2 INT-2</option><option value="80">MEN+2 INT-3</option><option value="81">MEN+2 INT-4</option><option value="82">MEN+2 WIT-2</option><option value="83">MEN+2 WIT-3</option><option value="84">MEN+2 WIT-4</option><option value="85">MEN+3 INT-3</option><option value="86">MEN+3 INT-4</option><option value="87">MEN+3 INT-5</option><option value="88">MEN+3 WIT-3</option><option value="89">MEN+3 WIT-4</option><option value="90">MEN+3 WIT-5</option><option value="91">MEN+4 INT-4</option><option value="92">MEN+4 INT-5</option><option value="93">MEN+4 INT-6</option><option value="94">MEN+4 WIT-4</option><option value="95">MEN+4 WIT-5</option><option value="96">MEN+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="121">WIT+1 INT-1</option><option value="122">WIT+1 INT-2</option><option value="123">WIT+1 INT-3</option><option value="124">WIT+1 MEN-1</option><option value="125">WIT+1 MEN-2</option><option value="126">WIT+1 MEN-3</option><option value="127">WIT+2 INT-2</option><option value="128">WIT+2 INT-3</option><option value="129">WIT+2 INT-4</option><option value="130">WIT+2 MEN-2</option><option value="131">WIT+2 MEN-3</option><option value="132">WIT+2 MEN-4</option><option value="133">WIT+3 INT-3</option><option value="134">WIT+3 INT-4</option><option value="135">WIT+3 INT-5</option><option value="136">WIT+3 MEN-3</option><option value="137">WIT+3 MEN-4</option><option value="138">WIT+3 MEN-5</option><option value="139">WIT+4 INT-4</option><option value="140">WIT+4 INT-5</option><option value="141">WIT+4 INT-6</option><option value="142">WIT+4 MEN-4</option><option value="143">WIT+4 MEN-5</option><option value="144">WIT+4 MEN-6</option></select>
				<select id="tattooslot3fighter" onchange="calc()" style="display: block;"><option value="0">No Tattoo</option><option value="1">CON+1 DEX-1</option><option value="2">CON+1 DEX-2</option><option value="3">CON+1 DEX-3</option><option value="4">CON+1 STR-1</option><option value="5">CON+1 STR-2</option><option value="6">CON+1 STR-3</option><option value="7">CON+2 DEX-2</option><option value="8">CON+2 DEX-3</option><option value="9">CON+2 DEX-4</option><option value="10">CON+2 STR-2</option><option value="11">CON+2 STR-3</option><option value="12">CON+2 STR-4</option><option value="13" selected="selected">CON+3 DEX-3</option><option value="14">CON+3 DEX-4</option><option value="15">CON+3 DEX-5</option><option value="16">CON+3 STR-3</option><option value="17">CON+3 STR-4</option><option value="18">CON+3 STR-5</option><option value="19">CON+4 DEX-4</option><option value="20">CON+4 DEX-5</option><option value="21">CON+4 DEX-6</option><option value="22">CON+4 STR-4</option><option value="23">CON+4 STR-5</option><option value="24">CON+4 STR-6</option><option value="25">DEX+1 CON-1</option><option value="26">DEX+1 CON-2</option><option value="27">DEX+1 CON-3</option><option value="28">DEX+1 STR-1</option><option value="29">DEX+1 STR-2</option><option value="30">DEX+1 STR-3</option><option value="31">DEX+2 CON-2</option><option value="32">DEX+2 CON-3</option><option value="33">DEX+2 CON-4</option><option value="34">DEX+2 STR-2</option><option value="35">DEX+2 STR-3</option><option value="36">DEX+2 STR-4</option><option value="37">DEX+3 CON-3</option><option value="38">DEX+3 CON-4</option><option value="39">DEX+3 CON-5</option><option value="40">DEX+3 STR-3</option><option value="41">DEX+3 STR-4</option><option value="42">DEX+3 STR-5</option><option value="43">DEX+4 CON-4</option><option value="44">DEX+4 CON-5</option><option value="45">DEX+4 CON-6</option><option value="46">DEX+4 STR-4</option><option value="47">DEX+4 STR-5</option><option value="48">DEX+4 STR-6</option><option value="52">INT+1 WIT-1</option><option value="53">INT+1 WIT-2</option><option value="54">INT+1 WIT-3</option><option value="58">INT+2 WIT-2</option><option value="59">INT+2 WIT-3</option><option value="60">INT+2 WIT-4</option><option value="64">INT+3 WIT-3</option><option value="65">INT+3 WIT-4</option><option value="66">INT+3 WIT-5</option><option value="70">INT+4 WIT-4</option><option value="71">INT+4 WIT-5</option><option value="72">INT+4 WIT-6</option><option value="97">STR+1 CON-1</option><option value="98">STR+1 CON-2</option><option value="99">STR+1 CON-3</option><option value="100">STR+1 DEX-1</option><option value="101">STR+1 DEX-2</option><option value="102">STR+1 DEX-3</option><option value="103">STR+2 CON-2</option><option value="104">STR+2 CON-3</option><option value="105">STR+2 CON-4</option><option value="106">STR+2 DEX-2</option><option value="107">STR+2 DEX-3</option><option value="108">STR+2 DEX-4</option><option value="109">STR+3 CON-3</option><option value="110">STR+3 CON-4</option><option value="111">STR+3 CON-5</option><option value="112">STR+3 DEX-3</option><option value="113">STR+3 DEX-4</option><option value="114">STR+3 DEX-5</option><option value="115">STR+4 CON-4</option><option value="116">STR+4 CON-5</option><option value="117">STR+4 CON-6</option><option value="118">STR+4 DEX-4</option><option value="119">STR+4 DEX-5</option><option value="120">STR+4 DEX-6</option><option value="121">WIT+1 INT-1</option><option value="122">WIT+1 INT-2</option><option value="123">WIT+1 INT-3</option><option value="127">WIT+2 INT-2</option><option value="128">WIT+2 INT-3</option><option value="129">WIT+2 INT-4</option><option value="133">WIT+3 INT-3</option><option value="134">WIT+3 INT-4</option><option value="135">WIT+3 INT-5</option><option value="139">WIT+4 INT-4</option><option value="140">WIT+4 INT-5</option><option value="141">WIT+4 INT-6</option></select>
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
	<tbody><tr><td>50% Weight Penalty</td><td id="WEIGHT50" align="right">48539</td></tr>
	<tr><td>Weight Limit</td><td id="WEIGHTLIMIT" align="right">85560</td></tr>
	<tr><td>HP Regen</td><td id="HPREGEN" align="right">3.5</td><td></td><td></td><td align="right"></td></tr>
	<tr><td>CP Regen</td><td id="CPREGEN" align="right">2.4</td><td></td><td></td><td align="right"></td></tr>
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
		<td id="SHIELDPDEF">553</td>
		<td id="AVGSHIELDPDEF">553</td>
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
		<td id="AVGDMG">0.2</td>
		<td id="HITSPERSECOND">0.55</td>
		<td id="DMGRNG">1-1</td>
		<td id="SHIELDDMGRNG">1-1</td>
		<td id="CRITCHANCE">5.7%</td>
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
		<td id="EAVGDMG">154.1</td>
		<td id="EHITSPERSECOND">1</td>
		<td id="EDMGRNG">114-139</td>
		<td id="ESHIELDDMGRNG">-</td>
		<td id="ECRITCHANCE">22%</td>
		<td id="ECRITDMG">229-278</td>
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
					<option value="0">Unequipped
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
					</option><option value="0" selected="selected">====Dual Sword====
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
					<option value="0">Unequipped
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
					</option><option value="0" selected="selected">====Dual Sword====
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
					<option value="0">Unequipped
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
					</option><option value="0" selected="selected">====Duals====
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
					<option>====S Grade====
					</option><option value="Draconic" selected="selected">Draconic
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
				<td><select id="HELMETENCHANT" onchange="calc()">
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
					<option value="0">Unequipped
					</option><option value="1" selected="selected">Draconic Leather Helmet
					</option><option value="2">Imperial Crusader Helmet
					</option><option value="3">Major Arcana Circlet
				</option></select>
				<select id="HELMETA" onchange="calc()" style="display: none;">
					<option value="0">Unequipped
					</option><option value="4">Apella Cap (R)
					</option><option value="5">Apella Great Helm (H)
					</option><option value="6">Apella Helm (L)
					</option><option value="7">Dark Crystal Helmet
					</option><option value="8">Helm of Nightmare
					</option><option value="9">Majestic Circlet
					</option><option value="10" selected="selected">Tallum Helm
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
				<td id="helmet grade penalty"><font color="red"><b>Grade Penalty applied</b></font></td></tr>
<tr>
			<td>Body - Upper</td>
				<td><select id="UPPERENCHANT" onchange="calc()">
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
					<option value="0">Unequipped
					</option><option value="31" selected="selected">Draconic Leather Armor
					</option><option value="40">Imperial Crusader Breastplate
					</option><option value="49">Major Arcana Robe
				</option></select>
				<select id="UPPERA" onchange="calc()" style="display: none;">
					<option value="0">Unequipped
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
					</option><option value="70" selected="selected">Tallum Leather Armor
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
				<td id="upper grade penalty"><font color="red"><b>Grade Penalty applied</b></font></td></tr>
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
				<td><select id="LOWERS" onchange="calc()" style="display: block;" disabled="disabled">
					<option value="0" selected="selected">Unequipped
					</option><option value="24">Imperial Crusader Gaiters
				</option></select>
				<select id="LOWERA" onchange="calc()" style="display: none;" disabled="disabled">
					<option value="0" selected="selected">Unequipped
					</option><option value="13">Dark Crystal Gaiters
					</option><option value="14">Dark Crystalline Leggings
					</option><option value="46">Tallum Stockings
				</option></select>
				<select id="LOWERB" onchange="calc()" style="display: none;" disabled="disabled">
					<option value="0" selected="selected">Unequipped
					</option><option value="2">Avadon Gaiters
					</option><option value="3">Blue Wolf Gaiters
					</option><option value="4">Blue Wolf Stockings
					</option><option value="51">Stockings of Doom
					</option><option value="53">Stockings of Zubei
					</option><option value="55">Zubei's Gaiters
					</option><option value="56">Zubei's Leather Gaiters
				</option></select>
				<select id="LOWERC" onchange="calc()" style="display: none;" disabled="disabled">
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
				<select id="LOWERD" onchange="calc()" style="display: none;" disabled="disabled">
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
				<select id="LOWERN" onchange="calc()" style="display: none;" disabled="disabled">
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
				<td><select id="GLOVEENCHANT" onchange="calc()">
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
					<option value="0">Unequipped
					</option><option value="16" selected="selected">Draconic Leather Gloves
					</option><option value="27">Imperial Crusader Gauntlets
					</option><option value="32">Major Arcana Gloves
				</option></select>
				<select id="GLOVEA" onchange="calc()" style="display: none;">
					<option value="0">Unequipped
					</option><option value="1">Apella Gauntlet (H)
					</option><option value="2">Apella Leather Gloves (L)
					</option><option value="3">Apella Silk Gloves (R)
					</option><option value="12">Dark Crystal Gloves
					</option><option value="25">Gloves of Nightmare
					</option><option value="31">Majestic Gloves
					</option><option value="45" selected="selected">Tallum Gloves
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
				<td id="glove grade penalty"><font color="red"><b>Grade Penalty applied</b></font></td></tr>
<tr>
			<td>Boots</td>
				<td><select id="BOOTENCHANT" onchange="calc()">
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
					<option value="0">Unequipped
					</option><option value="28" selected="selected">Draconic Leather Boots
					</option><option value="33">Imperial Crusader Boots
					</option><option value="41">Major Arcana Boots
				</option></select>
				<select id="BOOTA" onchange="calc()" style="display: none;">
					<option value="0">Unequipped
					</option><option value="1">Apella Boots (L)
					</option><option value="2">Apella Sandals (R)
					</option><option value="3">Apella Solleret (H)
					</option><option value="11">Boots of Nightmare
					</option><option value="24">Dark Crystal Boots
					</option><option value="40">Majestic Boots
					</option><option value="50" selected="selected">Tallum Boots
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
				<td id="boot grade penalty"><font color="red"><b>Grade Penalty applied</b></font></td></tr>
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
					<option>==============
					</option><option value="0">clear all buffs
					</option><option value="1" selected="selected">Lvl 78 Hierophant
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
		<td><input type="checkbox" id="BTB1CHECK" onclick="buffs();calc()" style="display: block;" checked="checked">
		<input type="checkbox" id="BTB2CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="BTB3CHECK" onclick="buffs();calc()" style="display: none;"></td>
		<td><select id="BTB1" onchange="calc()" style="display: block;">
			<option value="1">Bless the Body 1
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
			</option><option value="6" selected="selected">Body of Avatar 6
		</option></select>
		<select id="BTB2" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1">Bless the Body 1
			</option><option value="2">Bless the Body 2
			</option><option value="3">Bless the Body 3
			</option><option value="4">Bless the Body 4
			</option><option value="5">Bless the Body 5
			</option><option value="6">Bless the Body 6
			</option><option value="1">Battle Roar 1
			</option><option value="1" selected="selected">Body of Avatar 1
			</option><option value="2">Body of Avatar 2
			</option><option value="3">Body of Avatar 3
			</option><option value="4">Body of Avatar 4
			</option><option value="5">Body of Avatar 5
			</option><option value="6">Body of Avatar 6
		</option></select>
		<select id="BTB3" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1">Bless the Body 1
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
			</option><option value="1" selected="selected">Body of Avatar 1
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
		<td><input type="checkbox" id="BTSCHECK" onclick="buffs();calc()" checked="checked"></td>
		<td><select id="BTS" onchange="calc()">
			<option value="1">Bless the Soul 1
			</option><option value="2">Bless the Soul 2
			</option><option value="3">Bless the Soul 3
			</option><option value="4">Bless the Soul 4
			</option><option value="5">Bless the Soul 5
			</option><option value="6" selected="selected">Bless the Soul 6
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
		<input type="checkbox" id="MIGHT2CHECK" onclick="buffs();calc()" style="display: block;" checked="checked"></td>
		<td><select id="MIGHT1" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1">Might 1
			</option><option value="2">Might 2
			</option><option value="3">Might 3
			</option><option value="3">Herb of Strength
			</option><option value="1">Chant of Battle 1
			</option><option value="2">Chant of Battle 2
			</option><option value="3">Chant of Battle 3
			</option><option value="1" selected="selected">Pa'agrian Gift 1
			</option><option value="2">Pa'agrian Gift 2
			</option><option value="3">Pa'agrian Gift 3
		</option></select>
		<select id="MIGHT2" onchange="calc()" style="display: block;">
			<option value="1">Might 1
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
			</option><option value="3" selected="selected">Pa'agrian Gift 3
		</option></select></td>
		<td><input type="checkbox" id="DOWACHECK" onclick="buffs();calc()"></td>
		<td><select id="DOWA" onchange="calc()" disabled="disabled">
			<option value="DOW" selected="selected">Dance of Warrior
		</option></select></td>
		<td><input type="checkbox" id="GREATERMIGHTCHECK" onclick="buffs();calc()"></td>
		<td><select id="GREATERMIGHT" onchange="calc()" disabled="disabled">
			<option value="1">Greater Might 1
			</option><option value="2">Greater Might 2
			</option><option value="3">Greater Might 3
			</option><option value="1" selected="selected">War Chant 1
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
		<input type="checkbox" id="SHIELD2CHECK" onclick="buffs();calc()" style="display: block;" checked="checked"></td>
		<td><select id="SHIELD1" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="1">Shield 1
			</option><option value="2">Shield 2
			</option><option value="3">Shield 3
			</option><option value="1">Blessings of Pa'agrio 1
			</option><option value="2">Blessings of Pa'agrio 2
			</option><option value="3">Blessings of Pa'agrio 3
			</option><option value="1">Chant of Shielding 1
			</option><option value="2">Chant of Shielding 2
			</option><option value="3">Chant of Shielding 3
			</option><option value="1" selected="selected">Soul Shield 1
			</option><option value="2">Soul Shield 2
			</option><option value="3">Soul Shield 3
		</option></select>
		<select id="SHIELD2" onchange="calc()" style="display: block;">
			<option value="1">Shield 1
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
			</option><option value="3" selected="selected">Soul Shield 3
		</option></select></td>
		<td><input type="checkbox" id="SOECHECK" onclick="buffs();calc()"></td>
		<td><select id="SOEA" onchange="calc()" disabled="disabled">
			<option value="SOE" selected="selected">Song of Earth
		</option></select></td>
		<td><input type="checkbox" id="GREATERSHIELDCHECK" onclick="buffs();calc()"></td>
		<td><select id="GREATERSHIELD" onchange="calc()" disabled="disabled">
			<option value="1">Greater Shield 1
			</option><option value="2">Greater Shield 2
			</option><option value="3">Greater Shield 3
			</option><option value="1" selected="selected">Earth Chant 1
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
		<td><input type="checkbox" id="MB1CHECK" onclick="buffs();calc()" style="display: block;" checked="checked">
		<input type="checkbox" id="MB2CHECK" onclick="buffs();calc()" style="display: none;">
		<input type="checkbox" id="MB3CHECK" onclick="buffs();calc()" style="display: none;"></td>
		<td><select id="MB1" onchange="calc()" style="display: block;">
			<option value="2">Magic Barrier 1
			</option><option value="3">Magic Barrier 2
			</option><option value="1">Chant of Fire 1
			</option><option value="2">Chant of Fire 2
			</option><option value="3">Chant of Fire 3
			</option><option value="1">Glory of Pa'agrio 1
			</option><option value="2">Glory of Pa'agrio 2
			</option><option value="3" selected="selected">Glory of Pa'agrio 3
		</option></select>
		<select id="MB2" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="2">Magic Barrier 1
			</option><option value="3">Magic Barrier 2
			</option><option value="1">Chant of Fire 1
			</option><option value="2">Chant of Fire 2
			</option><option value="3">Chant of Fire 3
			</option><option value="1">Glory of Pa'agrio 1
			</option><option value="2">Glory of Pa'agrio 2
			</option><option value="3">Glory of Pa'agrio 3
			</option><option value="1">Spirit Barrier 1
			</option><option value="2" selected="selected">Spirit Barrier 2
			</option><option value="3">Spirit Barrier 3
		</option></select>
		<select id="MB3" onchange="calc()" style="display: none;" disabled="disabled">
			<option value="2">Magic Barrier 1
			</option><option value="3">Magic Barrier 2
			</option><option value="1">Chant of Fire 1
			</option><option value="2">Chant of Fire 2
			</option><option value="3">Chant of Fire 3
			</option><option value="1">Glory of Pa'agrio 1
			</option><option value="2">Glory of Pa'agrio 2
			</option><option value="3">Glory of Pa'agrio 3
			</option><option value="1">Iron Will 1
			</option><option value="2" selected="selected">Iron Will 2
			</option><option value="3">Iron Will 3
		</option></select></td>
		<td><input type="checkbox" id="WARDCHECK" onclick="buffs();calc()"></td>
		<td><select id="WARD" onchange="calc()" disabled="disabled">
			<option value="SOW" selected="selected">Song of Warding
		</option></select></td></tr>
<tr>
	<td>Accuracy</td>
		<td><input type="checkbox" id="GUIDCHECK" onclick="buffs();calc()" checked="checked"></td>
		<td><select id="GUID" onchange="calc()">
			<option value="1">Guidance 1
			</option><option value="2">Guidance 2
			</option><option value="3">Guidance 3
			</option><option value="1">Chant of Eagle 1
			</option><option value="2">Chant of Eagle 2
			</option><option value="3">Chant of Eagle 3
			</option><option value="1">Vision of Pa'agrio 1
			</option><option value="2">Vision of Pa'agrio 2
			</option><option value="3" selected="selected">Vision of Pa'agrio 3
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
			<option value="1">Agility 1
			</option><option value="2">Agility 2
			</option><option value="3">Agility 3
			</option><option value="1">Chant of Evasion 1
			</option><option value="2">Chant of Evasion 2
			</option><option value="3">Chant of Evasion 3
			</option><option value="1" selected="selected">Tact of Pa'agrio 1
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
		<td><input type="checkbox" id="FCSCHECK" onclick="buffs();calc()" checked="checked"></td>
		<td><select id="FCS" onchange="calc()">
			<option value="1">Focus 1
			</option><option value="2">Focus 2
			</option><option value="3">Focus 3
			</option><option value="1">Chant of Predator 1
			</option><option value="2">Chant of Predator 2
			</option><option value="3">Chant of Predator 3
			</option><option value="3" selected="selected">Herb of Critical Attack
		</option></select></td>
		<td><input type="checkbox" id="SOHCHECK" onclick="buffs();calc()"></td>
		<td><select id="SOH" onchange="calc()" disabled="disabled">
			<option value="SOH" selected="selected">Song of Hunter
		</option></select></td></tr>
<tr>
	<td>Speed</td>
		<td><input type="checkbox" id="WWCHECK" onclick="buffs();calc()" checked="checked"></td>
		<td><select id="WW" onchange="calc()">
			<option value="1">Wind Walk 1
			</option><option value="2">Wind Walk 2
			</option><option value="1">Pa'agrian Haste 1
			</option><option value="2">Pa'agrian Haste 2
			</option><option value="1" id="Sprint1">Sprint 1
			</option><option value="2" id="Sprint2">Sprint 2
			</option><option value="1">Haste Potion
			</option><option value="2">Greater Quick Step Potion
			</option><option value="2" selected="selected">Herb of Speed
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
		<td><input type="checkbox" id="HASTECHECK" onclick="buffs();calc()" checked="checked"></td>
		<td><select id="HASTE" onchange="calc()">
			<option value="1">Haste 1
			</option><option value="2">Haste 2
			</option><option value="1">Chant of Fury 1
			</option><option value="2">Chant of Fury 2
			</option><option value="1">Potion of Alacrity
			</option><option value="2">Greater Swift Attack Potion
			</option><option value="2" selected="selected">Herb of Atk. Speed
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
		<td><input type="checkbox" id="ACUCHECK" onclick="buffs();calc()" checked="checked"></td>
		<td><select id="ACU" onchange="calc()">
			<option value="1">Acumen 1
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
			</option><option value="3" selected="selected">Herb of Casting Spd.
		</option></select></td>
		<td><input type="checkbox" id="DCONCHECK" onclick="buffs();calc()"></td>
		<td><select id="DCON" onchange="calc()" disabled="disabled">
			<option value="DOC" selected="selected">Dance of Concentration
		</option></select></td></tr>
<tr>
	<td>Crit. Dmg.</td>
		<td><input type="checkbox" id="DEATHWHISPERCHECK" onclick="buffs();calc()" checked="checked"></td>
		<td><select id="DEATHWHISPER" onchange="calc()">
			<option value="1">Death Whisper 1
			</option><option value="2">Death Whisper 2
			</option><option value="3">Death Whisper 3
			</option><option value="1">Chant of Rage 1
			</option><option value="2">Chant of Rage 2
			</option><option value="3">Chant of Rage 3
			</option><option value="3" selected="selected">The Eye of Pa'agrio
		</option></select></td>
		<td><input type="checkbox" id="DANCEOFFIRECHECK" onclick="buffs();calc()"></td>
		<td><select id="DANCEOFFIRE" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Dance of Fire
		</option></select></td></tr>
<tr>
	<td>Shield</td>
		<td><input type="checkbox" id="BLESSSHIELDCHECK" onclick="buffs();calc()" checked="checked"></td>
		<td><select id="BLESSSHIELD" onchange="calc()">
			<option value="1">Bless Shield 1
			</option><option value="2">Bless Shield 2
			</option><option value="3">Bless Shield 3
			</option><option value="4">Bless Shield 4
			</option><option value="5">Bless Shield 5
			</option><option value="6">Bless Shield 6
			</option><option value="1">Under the Protection of Pa'agrio 1
			</option><option value="2">Under the Protection of Pa'agrio 2
			</option><option value="3" selected="selected">Under the Protection of Pa'agrio 3
		</option></select></td>
		<td><input type="checkbox" id="ADVANCEDBLOCKCHECK" onclick="buffs();calc()"></td>
		<td><select id="ADVANCEDBLOCK" onchange="calc()" disabled="disabled">
			<option value="1" selected="selected">Advanced Block 1
			</option><option value="2">Advanced Block 2
			</option><option value="3">Advanced Block 3
		</option></select></td></tr>
<tr>
	<td>Regen</td>
		<td><input type="checkbox" id="REGENERATIONCHECK" onclick="buffs();calc()" checked="checked"></td>
		<td><select id="REGENERATION" onchange="calc()">
			<option value="1">Regeneration 1
			</option><option value="2">Regeneration 2
			</option><option value="3" selected="selected">Regeneration 3
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
			<option value="1">Berserker Spirit 1
			</option><option value="2">Berserker Spirit 2
			</option><option value="1" selected="selected">Rage of Pa'agrio 1
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
		<td><input type="checkbox" id="PROPHCHECK" onclick="buffs();calc()" checked="checked"></td>
		<td><select id="PROPH" onchange="calc()">
			<option value="1">Chant of Victory
			</option><option value="2" selected="selected">Prophecy of Fire
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
			<option value="1">Hex
			</option><option value="1" selected="selected">Poltergeist Cubic
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
			<option value="1">Curse Chaos 1
			</option><option value="2">Curse Chaos 2+
			</option><option value="1" selected="selected">Seal of Chaos 1-2
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
			<option value="1">Slow 1
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
			</option><option value="1" selected="selected">Seal of Slow 1
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
			<option value="1">Curse of Shade 1
			</option><option value="2">Curse of Shade 2
			</option><option value="3">Curse of Shade 3
			</option><option value="1" selected="selected">Mass Curse of Shade 1
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


<script src="../L2Calc_files/rawdata.js"></script>
<script src="../L2Calc_files/block.js"></script>
<script src="../L2Calc_files/disable.js"></script>
<script src="../L2Calc_files/calculator.js"></script>

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