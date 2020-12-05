////課題09-2////

const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const list = document.getElementById('list');

addButton.addEventListener(('click'), (event) => {
    const li = document.createElement('li');
    const image = document.createElement('img');
    const span = document.createElement('span');
    image.src = "http://placehold.it/64x64";
    list.appendChild(li);
    li.appendChild(image);
    li.appendChild(span);
    for (let i = 1; i <= list.children.length; i++) {
        image.alt = `アイテム${i}`;
        span.textContent = `アイテム${i}`;
    }
});

removeButton.addEventListener(('click'), (event) => {
    try {
        list.removeChild(list.lastElementChild);
    } catch (e) {
        console.log(e);
    }
});
