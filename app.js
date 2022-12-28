//opening the menu 
function open_nav() {
    document.querySelector('#open-btn').style.display = 'none';
    document.querySelector('#close-btn').style.display = 'block';
    document.querySelector('#menu').style.height = '250px';
}

//closing the menu 
function close_nav() {
    document.querySelector('#open-btn').style.display = 'block';
    document.querySelector('#close-btn').style.display = 'none';
    document.querySelector('#menu').style.height = '60px';
}
