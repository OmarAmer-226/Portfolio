

let header = document.querySelector('header');
window.addEventListener('scroll', ()=>{
    header.classList.toggle('background', window.scrollY > 0);
});



let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

/*------ TyPING EFFECT ----*/
    let typingEffect = new Typed(".typedText",{
        strings:["Developer","Designer"],
        loop:true,
        typeSpeed:100,
        backSpeed:80,
        backDelay:2000
    })






