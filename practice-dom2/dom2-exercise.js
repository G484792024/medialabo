//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

function show() {
	let l = document.createElement('li');
	let hc = document.querySelector('h2#addr');
	hc.insertAdjacentElement('afterend', l);
	l.textContent = campus.address;

	u = document.createElement('ul');
	let hg = document.querySelector('h2#dept');
	hg.insertAdjacentElement('afterend', u);
	for (let g of gakka) {
		l = document.createElement('li');
		u.insertAdjacentElement('beforeend', l);
		l.textContent = g.name;
	}
}

let b = document.querySelector('button#show');
b.addEventListener('click', show);