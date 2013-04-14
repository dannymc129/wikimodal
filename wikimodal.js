function openWikipedia(content) {
	var searchstring = content.selectionText;
	chrome.tabs.create({url: "http://en.wikipedia.org/w/index.php?search=" + searchstring})
}

chrome.contextMenus.create({title: "Search on Wikipedia", contexts: ["selection"], onclick: openWikipedia })