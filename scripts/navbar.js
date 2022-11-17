const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
menu = body.querySelector(".menu-bar"),
home = body.querySelector(".home");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

home.addEventListener("mouseover",()=>{
sidebar.classList.add("close");
})



// searchBtn.addEventListener("click" , () =>{
// sidebar.classList.remove("close");
// })

toggle.addEventListener("click",()=>{
    if(sidebar.classList.contains("close")){
        sidebar.classList.add("close");
        home.classList.remove("shift");
    }else{
        sidebar.classList.remove("close");
        home.classList.add("shift");
    }
})