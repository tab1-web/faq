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
