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