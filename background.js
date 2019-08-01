// アドレスバーの右側の拡張機能のアイコンをクリックした際のイベント
// ※ manifest.jsonの"browser_action" => "default_popup"の指定があると無効になる
chrome.browserAction.onClicked.addListener(function() {
  alert("Hello World BrowserAction");
});

// 右クリックしたときに表示されるコンテキストメニューの表示
chrome.contextMenus.create({ title: "ChromeExtensionSample" });

// 右クリックしたときに表示されるコンテキストメニューを選択された時の動作
chrome.contextMenus.onClicked.addListener(function() {
  alert("onClickedイベントでクリック");
});