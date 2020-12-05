////課題09-1////

const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const list = document.getElementById('list');

addButton.addEventListener(('click'), (event) => {
    const li = document.createElement('li');
    list.appendChild(li);
    for (let i = 1; i <= list.children.length; i++ )
    li.textContent = `アイテム${i}`;
});

removeButton.addEventListener(('click'), (event) => {
   try {
       list.removeChild(list.lastElementChild);
   } catch(e) {
    console.log(e);
   }
});



