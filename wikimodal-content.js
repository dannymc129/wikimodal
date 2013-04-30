
chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
	
	window.open("http://en.wikipedia.org/w/index.php?search=" + request.toSearch, "'_blank'")
	/*
	$(document.body).append("<div class='wikimodal' id='wikimodalContainer'></div>")
	$("#wikimodalContainer")
		.load("http://en.m.wikipedia.org/w/index.php?search=" + request.toSearch)
		.dialog()	
		*/
  });