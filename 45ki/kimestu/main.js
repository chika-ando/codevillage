{
    /*ラジオボタン　はい・いいえ作る。
    はいのときli.textContent='よかった！'を追加
    　いいえのliは削除
    いいえのときli.textContent='よかった！'を追加
    　はいのliは削除
    */

    // querySelectorAllにaddEventListenerできない???

    const buttonY = document.querySelector('#yes');
    const buttonN = document.querySelector('#no');
    const buttons = document.querySelectorAll('input');
    const ul = document.createElement('ul');
    const selectBtn = document.querySelector('.selectBtn');
    selectBtn.appendChild(ul);
    console.log(typeof buttons);//object
    console.log(Object.keys(buttons));//["0", "1"]
    const array = new Array(2);
    console.log(typeof array);//object
    array[0] = buttons[0];
    array[1] = buttons[1];
    console.log(buttons[0]); //<input id="yes" type="radio" value="よかった！">
    console.log(buttons[1]); //<input id="no" type="radio" value="え～～">

    array.forEach((arr) => {
        arr.addEventListener('click', () =>{
            if (arr.checked) {
                const li = document.createElement('li')
                li.textContent = arr.value;
                ul.appendChild(li);
            }
            if (ul.children.length >= 2) {
                ul.removeChild(ul.firstElementChild);
            };
        });
    });
    // buttonY.addEventListener('click', () => {
    //     if (buttonY.checked === true) {
    //         const li = document.createElement('li')
    //         li.textContent = buttonY.value;
    //         ul.appendChild(li);
    //         if (buttonN.checked === true) {
    //             ul.removeChild(ul.firstElementChild);
    //         }
    //     }
    // }); 
    // buttonN.addEventListener('click', () => {
    //     if (buttonN.checked === true) {
    //         const li = document.createElement('li')
    //         li.textContent = buttonN.value;
    //         ul.appendChild(li);
    //         if (buttonY.checked === true) {
    //             ul.removeChild(ul.firstElementChild);
    //         }
    //     }
    // });



    /*
    ドロップダウンを選択すると、p要素、img要素、p要素を表示

    */
    const likeChara = document.querySelector('.like_chara');
    const characters = document.querySelector('#characters');
    const tanjiro = document.querySelector('#tanjiro');
    const zenitsu = document.querySelector('#zenitsu');
    const nezuko = document.querySelector('#nezuko');
    const dropBox =document.querySelector('#selectDb');

    characters.onchange =  function() {
        const like = document.createElement('P');
        likeChara.appendChild(like);
        const img = document.createElement('img');
        likeChara.appendChild(img);
        const text = document.createElement('p');
        likeChara.appendChild(text);
        
        if(tanjiro.selected) {
            like.textContent = `好きなキャラは${characters.children[1].value}`;
            img.src = './img/tanjiro.jpg';
            text.innerText = `水の呼吸\nヒトカミカグラ`;
        } else if (zenitsu.selected) {
            like.textContent = `好きなキャラは${characters.children[2].value}`;
            img.src = './img/zenitsu.jpg';
            text.textContent = '雷の呼吸';
        } else if (nezuko.selected) {
            like.textContent = `好きなキャラは${characters.children[3].value}`;
            img.src = './img/nezuko.jpeg';
            text.textContent = '呼吸は使えないよ！';
        } 
       
        if(likeChara.children.length >= 5) {
            likeChara.removeChild(likeChara.children[1]);
            likeChara.removeChild(likeChara.children[1]);
            likeChara.removeChild(likeChara.children[1]);
            if(dropBox.selected){
                likeChara.removeChild(likeChara.children[1]);
                likeChara.removeChild(likeChara.children[1]);
                likeChara.removeChild(likeChara.children[1]);
            }
        };
    }


}