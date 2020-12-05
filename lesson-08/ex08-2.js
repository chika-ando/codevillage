const body = document.body;

const h1 = document.createElement('h1');
h1.textContent = "DOM";

const p = document.createElement('p');
p.textContent = "JavaScriptからHTMLを扱うための仕組み";
const h2 = document.createElement('h2')
h2.textContent = "印象に残っているトピック";


body.appendChild(h1);
body.appendChild(p);
body.appendChild(h2);
const ul = body.appendChild(document.createElement('ul'));

const li1 = document.createElement('li');
li1.textContent = "documentオブジェクト";
const li2 = document.createElement('li')
li2.textContent = "getElementById";
const li3 = document.createElement('li');
li3.textContent = "イベントリスナ";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
