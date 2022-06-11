// html
document.querySelector('.html h1').onclick = function () {
    var html_content = document.querySelector('.html .html_main')
    html_content.classList.toggle('show')
}
var html_h3 = document.querySelectorAll('.html .html_main h3')
var content = document.querySelectorAll('.html .html_main .content')
html_h3[0].onclick = function () {
    content[0].classList.toggle('show')
}
content[0].onclick = function(){
    content[0].classList.toggle('show')
}
html_h3[1].onclick = function () {
    content[1].classList.toggle('show')
}
content[1].onclick = function () {
    content[1].classList.toggle('show')
}
html_h3[2].onclick = function () {
    content[2].classList.toggle('show')
}
content[2].onclick = function () {
    content[2].classList.toggle('show')
}
html_h3[3].onclick = function () {
    content[3].classList.toggle('show')
}
content[3].onclick = function () {
    content[3].classList.toggle('show')
}
html_h3[4].onclick = function () {
    content[4].classList.toggle('show')
}
content[4].onclick = function () {
    content[4].classList.toggle('show')
}
html_h3[5].onclick = function () {
    content[5].classList.toggle('show')
}
content[5].onclick = function () {
    content[5].classList.toggle('show')
}
html_h3[6].onclick = function () {
    content[6].classList.toggle('show')
}
content[6].onclick = function () {
    content[6].classList.toggle('show')
}

//css
document.querySelector('.css h1').onclick = function () {
    var css_content = document.querySelector('.css .css_main')
    css_content.classList.toggle('show')
}
var css_h3 = document.querySelectorAll('.css .css_main h3')
var contentCSS = document.querySelectorAll('.css .css_main .content')
css_h3[0].onclick = function () {
    contentCSS[0].classList.toggle('show')
}
contentCSS[0].onclick = function () {
    contentCSS[0].classList.toggle('show')
}