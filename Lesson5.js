"use strict";

//нумерация заданий была с тройки
//Task3. a. Сделайте модальное (появляющееся и исчезающее) окно
//b. (не обязательное задание) Сделайте анимацию при появлении и исчезании. Анимации можно взять здесь:
//1. https://github.com/miniMAC/magic (демо https://www.minimamente.com/project/magic/ )
//2. https://github.com/daneden/animate.css (демо https://daneden.github.io/animate.css/ )
//3. http://animista.net/

let modal = document.getElementById("ModWin");
let btn = document.getElementById("button_ModWin");
let span = document.getElementsByClassName("close_ModWin")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//Task4.Сделайте несколько карточек товара, примерно такого вида...
const fr_button = document.querySelectorAll(".button_fruits");
fr_button.forEach(function (fr_button) {
    fr_button.addEventListener("click", function (event) {
        handleClick(event);
    })
});

function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;
    
    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        fruit_type: cardNode.querySelector('.fruit_type'),
        button_fruits: cardNode.querySelector('.button_fruits'),
    };
    
    const textOnButton = card.button_fruits.innerText;
    
    if (textOnButton === 'Открыть описание') {
        showMoreText(card);
    }
    else if (textOnButton === 'Отмена') {
        hideMoreText(card);
    };

    function showMoreText(card) {
        card.img.style.display = 'none';
        let text;
        
        if (card.fruit_type.innerText === 'Яблоко') {
            text = "Наибольшее распространение получила яблоня домашняя, реже выращивают яблоню сливолистную. Размер красных, зелёных или жёлтых шаровидных плодов 5—13 см в диаметре. Происходит из Центральной Азии, где до сих пор произрастает дикорастущий предок яблони.";
        };
        
        if (card.fruit_type.innerText === "Банан") {
            text = "Размер, цвет и форма могут значительно различаться в зависимости от вида или сорта, но чаще всего они имеют продолговатую цилиндрическую или трёхгранную форму, выпрямленную либо закруглённую. Длина плода варьирует в пределах от 3 до 40 см, толщина — от 2 до 8 см.";
        };
        
        if (card.fruit_type.innerText === 'Апельсин') {        
            text = "Апельсин представляет собой круглый цитрусовый фрукт с оранжевой кожурой, иногда с красными прожилками.";
        };
        
        card.fruit_type.insertAdjacentHTML('afterend', `<div class="fruits_desc">${text}</div>`);
        card.button_fruits.innerText = 'Отмена';
    };

    function hideMoreText() {
        card.img.style.display = 'block';
        card.wrap.querySelector('.fruits_desc').remove();
        card.button_fruits.innerText = 'Открыть описание';
    };
};

//Task5. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему
//желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
//Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

let app = {
    
    config: {
        rows: [8, 7, 6, 5, 4, 3, 2, 1],
        cols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    },
    
    run() {
        let board = this.generateBoard();
        //document.body.childNodes[11].innerHTML = board;
       
        //выводится в модальное окно
        document.body.children.ModWin.firstElementChild.children[2].innerHTML = board;
    },
    
    generateBoard() {
        let board = '';
        let rowStartWithColor = 'white';
        for (let i = 0; i < this.config.rows.length; i++) {
            let row = '';
            if (rowStartWithColor == 'white') {
                row = this.generateRow(rowStartWithColor, this.config.rows[i]);
                rowStartWithColor = 'black';
            }
            else {
                row = this.generateRow(rowStartWithColor, this.config.rows[i]);
                rowStartWithColor = 'white';
            }
            board += row;
        }
        return `<table><tbody>${board}</tbody></table>`;
    },
    
    generateRow(startWithColor, rowNum) {
        let currentColorClass = startWithColor;
        let row = "";
        for (let i = 0; i < this.config.cols.length; i++) {
            let field = "";
            if (currentColorClass === 'white') {
                field = this.generateField('white', rowNum, this.config.cols[i]);
                currentColorClass = 'blackField';
            }
            else {
                field = this.generateField('black', rowNum, this.config.cols[i]);
                currentColorClass = 'white';
            }
            row += field;
        }
        return `<tr>${row}</tr>`;
    },
    
    generateField(color, rowNum, colChar) {
        let fig = "";
        
        if (rowNum == 7){
            fig = "&#9817;"; //белая пешка
        };        
        if (rowNum == 2){
            fig = "&#9823;"; //черная пешка
        }; 
        
        if (rowNum == 8 && colChar == 'C' || rowNum == 8 && colChar == 'F'){
            fig = "&#9815;"; //Белый слон
        };        
        if (rowNum == 1 && colChar == 'C' || rowNum == 1 && colChar == 'F'){
            fig = "&#9821;"; //Черный слон
        };
        
        if (rowNum == 8 && colChar == 'B' || rowNum == 8 && colChar == 'G'){
            fig = "&#9816;"; //Белый конь
        };        
        if (rowNum == 1 && colChar == 'B' || rowNum == 1 && colChar == 'G'){
            fig = "&#9822;"; //Черный конь
        };               
        
        if (rowNum == 8 && colChar == 'A' || rowNum == 8 && colChar == 'H'){
            fig = "&#9814;"; //белая ладья
        };        
        if (rowNum == 1 && colChar == 'A' || rowNum == 1 && colChar == 'H'){
            fig = "&#9820;"; //черная ладья
        };            
        
        if (rowNum == 8 && colChar == 'E'){
            fig = "&#9812;"; //Белый король
        };        
        if (rowNum == 1 && colChar == 'E'){
            fig = "&#9818;"; //Черный король
        };        
        
        if (rowNum == 8 && colChar == 'D'){
            fig = "&#9813;"; //Белый ферзь
        };        
        if (rowNum == 1 && colChar == 'D'){
            fig = "&#9819;"; //Черный ферзь
        };
        
        return `<td data-rownum="${rowNum}" data-colchar="${colChar}" class="${color}">${fig}</td>`;
    },
};

app.run();