// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let b = document.querySelector("button#kaitou");
b.addEventListener("click",hantei);
// hantei();
// hantei();
// hantei();
// hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let y = document.querySelector("input[name=kaitouIn]");
  yoso = parseInt(y.value);
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  let rslt = document.querySelector("p#result");
  kaisu++;
  rslt.textContent = kaisu+"回目の予想: "+yoso;
  if (kaisu>3) {
    rslt.textContent = "答えは "+kotae+" でした．すでにゲームは終わっています";
  } else if (kotae===yoso) {
    rslt.textContent = "「正解です．おめでとう!」";
  } else if (kaisu===3) {
    rslt.textContent = "まちがい．残念でした．答えは "+kotae+" です．";
  } else if (kotae>yoso) {
    rslt.textContent = "まちがい．答えはもっと大きいですよ";
  } else {
    rslt.textContent = "まちがい．答えはもっと小さいですよ";
  }

  let sp = document.querySelector("span#kaisu");
  sp.textContent = kaisu;
  let yosoDis = document.querySelector("span#answer");
  yosoDis.textContent = yoso;
}