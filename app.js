const menu=document.querySelector("#menu");
const menuBtn=document.querySelector('#hb-icon');
const closeBtn=document.querySelector('#close-icon');

function displayMenu(){
        menu.style.animation ='display-menu 0.7s';
        menu.style.display ='grid';
        closeBtn.style.display ='block';
        menuBtn.style.display ='none';
}

function closeMenu(){
        menu.style.animation ='display-menu 1s reverse';
        menu.style.removeProperty('display');
        closeBtn.style.display ='none';
        menuBtn.style.display ='block';
}

menuBtn.addEventListener('click',displayMenu);    
closeBtn.addEventListener('click', closeMenu);

document.onclick = (event) => {
    let isClickInside = menu.contains(event.target) || menuBtn.contains(event.target) || closeBtn.contains(event.target);

    if (!isClickInside) {
      closeMenu();
    }
}
