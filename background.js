chrome.runtime.onInstalled.addListener(() => {
    console.log("Auto Credit installed successfully!");
})


chrome.bookmarks.onCreated.addListener((id, bookmark) => {
    alert("Bookmark created: " + bookmark.title);
})