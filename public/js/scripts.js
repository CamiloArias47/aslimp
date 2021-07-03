var body = document.body,
    el=window,
    btnSandwich = document.getElementById("btn-sandwich"),
    menuMain = document.getElementById("menu-main"),
    listMenu = document.getElementsByClassName("menu-main-list-container")[0],
    navbar = document.querySelector('.navbar')
    mainContent = document.querySelector('.main-content')
    onTouch = false;

function toggleSanswich(event){
    console.log(event.target) 
    btnSandwich.classList.toggle("change")
    menuMain.classList.toggle("open")
    body.classList.toggle("no-scroll")
    listMenu.classList.toggle("open") 
}

function closeMenu(event){
    if(event.target == menuMain){
        btnSandwich.classList.toggle("change")
        menuMain.classList.toggle("open")
        listMenu.classList.toggle("open")
        body.classList.toggle("no-scroll")
    }
}


function onScrollEventHandler(ev) {
    let bottom = navbar.getBoundingClientRect().bottom
    let top = mainContent.getBoundingClientRect().top

    // we set
    if (bottom >= top && !onTouch) {
        navbar.classList.add("colored")
        onTouch = true
    }
    // we reset
    if (bottom < top && onTouch) {
        navbar.classList.remove("colored")
        onTouch = false
    }
} 


if(el.addEventListener)
    el.addEventListener('scroll', onScrollEventHandler, false) 
else if (el.attachEvent)
    el.attachEvent('onscroll', onScrollEventHandler)

btnSandwich.onclick = toggleSanswich
menuMain.onclick = closeMenu