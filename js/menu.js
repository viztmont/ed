const menu = document.querySelector(".menu")
const menun = document.querySelector(".menu-navegacion")

console.log(menu)
console.log(menun)

menu.addEventListener("click", ()=>{
    menun.classList.toggle("spread")
})

window.addEventListener("click", e=>{    
    if(menun.classList.contains("spread") && e.target != menun && e.target !=menu  ){
        menun.classList.toggle("spread")
    }
})