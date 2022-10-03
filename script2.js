function changeTdColor() {
    /*СОЗДАЕМ ПЕРЕМЕННЫЕ
    r,g,b - отвечают за кодировку и вместе выводят цвет
    color - в нее записываем полную строку значения цвета
    */
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    document.getElementById("task1").style.backgroundColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function clickChangeColor() {
    document.getElementById("palette").style.display = "block";
    document.querySelector('jsuites-color').addEventListener('onchange', function(a,b,c) {
        document.getElementById("task1").style.backgroundColor = this.value;
    });
}

function changeTrColor() {
    let current_color = document.getElementById("task1").style.backgroundColor;
    document.getElementById("task3").style.backgroundColor = current_color;
    // document.getElementById("task1").style.backgroundColor = "red";
}
