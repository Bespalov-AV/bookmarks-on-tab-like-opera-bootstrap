// chrome.tabs.onCreated.addListener(() => {
//     console.log('new tab')
// })


chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({ url: chrome.extension.getURL("index.html") });
    console.log('!!!!')
});