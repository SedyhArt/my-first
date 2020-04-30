
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
let current_level1 = document.querySelector('.current-level1');
let current_level2 = document.querySelector('.current-level2')

themeButton.onclick = function() {
page.classList.toggle('light-theme');
current_level1.classList.toggle('light-theme');
current_level2.classList.toggle('light-theme');
};

