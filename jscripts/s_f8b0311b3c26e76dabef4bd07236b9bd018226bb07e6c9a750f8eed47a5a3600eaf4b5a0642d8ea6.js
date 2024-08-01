var internalCheck = 0;

window.addEventListener("resize", function () {
	fgSet("loginBox", "marginTop", 1, -(fgGet("loginBox", "offsetHeight", 0) / 2) + "px");
	fgSet("loginBox", "marginLeft", 1, -(fgGet("loginBox", "offsetWidth", 0) / 2) + "px");
}, false);

document.addEventListener("keydown", handlerKeyDown, false);

function handlerKeyDown(e) {
	var vCode = e.keyCode;
	
	if (vCode == 13) {
		document.getElementById("signin").click();
	}
}

function fgGet(inName, inGetWhat, inStyle) {
    var vReturn = "";

    if (inStyle == 1)
        eval("vReturn = document.getElementById(inName).style." + inGetWhat);
    else
        eval("vReturn = document.getElementById(inName)." + inGetWhat);
    
    return vReturn;
}

function fgSet(inName, inSetWhat, inStyle, inValue) {
    if (inStyle == 1) {
        if (inName.indexOf("|") == -1)
            eval("document.getElementById(inName).style." + inSetWhat + " = inValue");
        else {
            var vTempAr = inName.split('|');
            
            for (var i = 0; i < vTempAr.length ; i++) {
                eval("document.getElementById('" + vTempAr[i] + "').style." + inSetWhat + " = inValue");
            }
        }
    }
    else {
        if (inName.indexOf("|") == -1)
            eval("document.getElementById(inName)." + inSetWhat + " = inValue");
        else {
            var vTempAr = inName.split('|');
            
            for (var i = 0; i < vTempAr.length ; i++) {
                eval("document.getElementById('" + vTempAr[i] + "')." + inSetWhat + " = inValue");
            }
        }
    }
}

function fgServerRequestP(inURL, inParams, inReturnFunction, inReturnParams) {
    var vXmlhttp, vReturn;

    if (window.XMLHttpRequest) {
        vXmlhttp = new XMLHttpRequest();
    }
    else {
        vXmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    vXmlhttp.onreadystatechange = function () {
        if (vXmlhttp.readyState == 4 && vXmlhttp.status == 200) {
            vReturn = vXmlhttp.responseText;

            if (inReturnFunction != null)
                eval(inReturnFunction + "(inReturnParams + vReturn);");
        }
        else if (vXmlhttp.readyState == 4) {
            vReturn = "Failed";
            
            if (inReturnFunction != null)
                eval(inReturnFunction + "(inReturnParams + vReturn);");
        }
    }
    vXmlhttp.open("POST", inURL, true);
    vXmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    vXmlhttp.send(inParams);
}

function fgServerRequestPC(inURL, inParams, inReturnFunction, inReturnParams) {
    var vXmlhttp, vReturn;

    if (window.XMLHttpRequest) {
        vXmlhttp = new XMLHttpRequest();
    }
    else {
        vXmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    vXmlhttp.onreadystatechange = function () {
        if (vXmlhttp.readyState == 4 && vXmlhttp.status == 200) {
			internalCheck = 1;
            vReturn = vXmlhttp.responseText;

            if (inReturnFunction != null)
                eval(inReturnFunction + "(inReturnParams + vReturn);");
        }
        else if (vXmlhttp.readyState == 4) {
            internalCheck = 2;
			vReturn = "Failed";
            
            if (inReturnFunction != null)
                eval(inReturnFunction + "(inReturnParams + vReturn);");
        }
    }
    vXmlhttp.open("POST", inURL, true);
    vXmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    vXmlhttp.send(inParams);
}