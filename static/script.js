const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active")
});

/* fechar menu e mudar par list */

const navItem = document.querySelector('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
        menuMobile.classList.remove("menu-nav-active")
        menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})