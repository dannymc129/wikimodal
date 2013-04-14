function openWikipedia(content) {
	var searchString = content.selectionText;

	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.sendMessage(tab.id, {toSearch: searchString}, null)
	})
}

chrome.contextMenus.create({id: "wikimodal", title: "Search on Wikipedia", contexts: ["selection"]})
chrome.contextMenus.onClicked.addListener(openWikipedia)