console.log("ALIVE")


chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {

	console.log(request.toSearch)

	
	$(document.body).append("<div id='wikimodalContainer'></div>")
	$("#wikimodalContainer")
		.load("http://en.wikipedia.org/w/index.php?search=" + request.toSearch)
		.dialog({modal: true})	

  });