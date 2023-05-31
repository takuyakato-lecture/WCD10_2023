// // ⑰DOM
// var title = document.getElementById('title');  //  titleのIDを持つ要素を取得
// var pen = document. getElementById('pen');  //  penのIDを持つ要素を取得
// title.textContent = 'Thank you!';  //  titleのIDを持つ要素のテキストを書き換え
// pen.textContent = 'I am Bob.';  //  penのIDを持つ要素のテキストを書き換え

// // ⑱イベント（onclick）
// function btnClick(){  // イベントハンドラ（関数）の定義
// 	//  ⑰DOMで記述したコード
// 	var title = document. getElementById('title');  //  titleのIDを持つ要素を取得
// 	var pen = document. getElementById('pen');  //  penのIDを持つ要素を取得
// 	title.textContent = 'Thank you!';  //  titleのIDを持つ要素のテキストを書き換え
// 	pen.textContent = 'I am Bob.';  //  penのIDを持つ要素のテキストを書き換え
// }
// // clickイベントが起こった際の処理
// document. getElementById('btn1').onclick = btnClick;

// // 演習①初級
// var c = 0; // ボタンがクリックされた回数に関する変数
// function btnClick(){  // イベントハンドラ（関数）の定義
// 	c = c + 1; // クリック回数を１プラス
// 	var count = document. getElementById('count');  //  countのIDを持つ要素を取得
// 	count.textContent = c;  //  countのIDを持つ要素のテキストを書き換え
// }
// // clickイベントが起こった際の処理
// document. getElementById('btn1').onclick = btnClick;

// // 演習①上級
// function btnClick(){  // イベントハンドラ（関数）の定義
// 	var d = new Date(); // Dateオブジェクトdの作成（現在時刻）
// 	var count = document. getElementById('count');  //  countのIDを持つ要素を取得
// 	var text = 'クリック時刻：' + d.getHours() + '時' + d.getMinutes()
// 									+ '分' + d.getSeconds() + '秒';  // 表示する文章
// 	count.textContent = text;  //  countのIDを持つ要素のテキストを書き換え
// }
// // clickイベントが起こった際の処理
// document. getElementById('btn1').onclick = btnClick;

// 演習②
function mouseOver(){  // イベントハンドラ（関数）の定義
	var pen = document. getElementById('pen');  //  penのIDを持つ要素を取得
	pen.textContent = 'Helloの上を通過！';  //  penのIDを持つ要素のテキストを書き換え
}
// mouseOverイベントが起こった際の処理
document. getElementById('title').onmouseover = mouseOver;
