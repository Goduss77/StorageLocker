function menu(display) {
    let menu = document.getElementById('navigation-plane');
    menu.style.display = display;
    console.log(display);
}
function user(clicked) {
    let menu1 = document.getElementById('closed-user-menu');
    let menu2 = document.getElementById('opened-user-menu');
    
    if (clicked == 'k') {
        menu1.style.display = 'none';
        menu2.style.display = 'block';
    }
    else if (clicked == 'kk') {
        menu1.style.display = 'block';
        menu2.style.display = 'none';
    }
}