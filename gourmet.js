

// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for (let i=0; i<data.results.shop.length; i++) {
    console.log(data.results.shop[i].name);
    console.log(data.results.shop[i].access);
    console.log(data.results.shop[i].address);
    console.log(data.results.shop[i].budget.name);
    console.log(data.results.shop[i].catch);
    console.log(data.results.shop[i].genre.name);
    console.log(data.results.shop[i].open);
    console.log(data.results.shop[i].station_name); 
    console.log(data.results.shop[i].sub_genre.name);
  }
}

//課題4-2 入力した検索キーをコンソールに表示する
let b = document.querySelector("button#searchButton");
b.addEventListener("click",searchRisult);

function searchRisult() {
  let sin = document.querySelector("input[name=searchIn]");
  console.log(sin.value);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let body = document.querySelector('body');
  let div = document.createElement('div');
  div.setAttribute('id', 'result');
  body.insertAdjacentElement('beforeend', div);

  p = document.createElement('p');
  div.insertAdjacentElement('beforeend', p);
  let h4 = document.createElement('h4');
  p.insertAdjacentElement('beforeend', h4);
  h4.textContent = data.results.shop.length+'件がヒットしました';

  u = document.createElement('ul');
  div.insertAdjacentElement('beforeend', u);

  let l, h3, h2, u2, l2;

  for (let i=0; i<data.results.shop.length; i++) {
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    h3 = document.createElement('h3');
    l.insertAdjacentElement('beforeend', h3);
    h3.textContent = '検索結果'+(i+1)+'件目';

    h2 = document.createElement('h2');
    u.insertAdjacentElement('beforeend', h2);
    h2.textContent = data.results.shop[i].name;

    u2 = document.createElement('ul');
    u.insertAdjacentElement('beforeend', u2);

    l2 = document.createElement('li');
    u2.insertAdjacentElement('beforeend', l2);
    l2.textContent = 'アクセス: '+data.results.shop[i].access;
    
    l2 = document.createElement('li');
    u2.insertAdjacentElement('beforeend', l2);
    l2.textContent = '住所: '+data.results.shop[i].address;

    l2 = document.createElement('li');
    u2.insertAdjacentElement('beforeend', l2);
    l2.textContent = '予算: '+data.results.shop[i].budget.name;

    l2 = document.createElement('li');
    u2.insertAdjacentElement('beforeend', l2);
    l2.textContent = 'キャッチコピー: '+data.results.shop[i].catch;

    l2 = document.createElement('li');
    u2.insertAdjacentElement('beforeend', l2);
    l2.textContent = 'ジャンル: '+data.results.shop[i].genre.name;

    l2 = document.createElement('li');
    u2.insertAdjacentElement('beforeend', l2);
    l2.textContent = '営業時間: '+data.results.shop[i].open;

    l2 = document.createElement('li');
    u2.insertAdjacentElement('beforeend', l2);
    l2.textContent = '最寄駅: '+data.results.shop[i].station_name;
    
    if (data.results.shop[i].sub_genre !== undefined) {
      l2 = document.createElement('li');
      u2.insertAdjacentElement('beforeend', l2);
      l2.textContent = 'サブジャンル: '+data.results.shop[i].sub_genre.name;
    }
  }
  printed = true;
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
b = document.querySelector("button#searchButton");
b.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let g = document.querySelector("input[name=searchIn]");
  genre = g.value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+genre+'.json';

  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

let printed = false;

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

	let data = resp.data;

	if (typeof data === 'string') {
		data = JSON.parse(data);
  }

  if (printed) {
    let div = document.querySelector('div');
    div.remove();
  }
	printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること