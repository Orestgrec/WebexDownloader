// Service worker used in Manifest V3.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.fetchJson) {
        const headers = { headers: { Accept: "application/json, text/plain, */*" } };
        if (request.password) headers.headers.accessPwd = request.password;
        else headers.headers.appFrom = "pb";

        fetch(request.fetchJson, headers)
            .then((response) => response.json())
            .then((response) => sendResponse(response))
            .catch(() => sendResponse(null));
        return true;
    }

    if (request.fetchText) {
        fetch(request.fetchText)
            .then((response) => response.text())
            .then((response) => sendResponse(response))
            .catch(() => sendResponse(null));
        return true;
    }

    if (request.safariOpenUrl) {
        chrome.tabs.create({ url: request.safariOpenUrl });
        return false;
    }

    if (request.downloadURL && request.savepath) {
        chrome.downloads.download({
            url: request.downloadURL,
            filename: request.savepath
        });
        return false;
    }

    return false;
});

function reqWatcher(details) {
    const result = (details.requestHeaders || []).filter((e) => e.name.toLowerCase() === "accesspwd");
    if (result.length === 0 || details.tabId < 0) return;

    chrome.tabs.sendMessage(details.tabId, { recPassword: result[0].value });
}

chrome.webRequest.onSendHeaders.addListener(
    reqWatcher,
    { urls: ["*://*.webex.com/webappng/api/v1/recordings/*"] },
    ["requestHeaders"]
);
