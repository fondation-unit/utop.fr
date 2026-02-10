function getUrlParameter(param) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === param) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
}

function loadDoc(xmlFile) {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", xmlFile, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      xmlFunction(this.response);
    }
  };

}

function xmlFunction(xml) {
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xml, "text/xml");
  var o = "";
  var x = xmlDoc.getElementsByTagName("program");
  for (var elem of x) {
    var title = elem.getElementsByTagName('cdmfr:programName')[0].childNodes[0].nextSibling.firstChild.nodeValue;
    var link = elem.getElementsByTagName('cdmfr:webLink')[0].children[0].innerHTML;
    var linkName = elem.getElementsByTagName('cdmfr:webLink')[0].children[1].innerHTML;
    var desc = elem.getElementsByTagName('cdmfr:programDescription')[0].children[0].innerHTML;
    var prereq = elem.getElementsByTagName('formalPrerequisites')[0].children[0].innerHTML;
    var contacts = elem.getElementsByTagName('contacts')[0].innerHTML;

    o += "<h2 class=\"formation-title\">" +title+ "</h2>";
    o += "<p class=\"formation-desc\">" +desc+  "</p>";
    o += "<p class=\"formation-desc\">Pré-requis : " +prereq+  "</p>";
    o += "<p class=\"formation-link\"><a href=\"" +link+ "\" target=\"_blank\"><i class=\"fa fa-link\"></i> " +linkName+ "</a></p>";
    o += "<p class=\"formation-desc\">Contacts : " +contacts+  "</p>";
  }
  document.getElementById("formation-data").innerHTML = o;
}