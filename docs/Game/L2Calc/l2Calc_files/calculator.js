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
/*
     FILE ARCHIVED ON 19:35:34 Dec 26, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:16:17 May 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.58
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.014
  esindex: 0.014
  cdx.remote: 15.215
  LoadShardBlock: 403.044 (3)
  PetaboxLoader3.datanode: 234.973 (4)
  PetaboxLoader3.resolve: 188.038 (2)
  load_resource: 73.227
*/