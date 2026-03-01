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