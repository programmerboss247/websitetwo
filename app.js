
//Typing Script JS



var typed = new Typed(".typing", {


strings: ["Web Deiginer", "Web Developer", "Wordpress Designer", "Wordpress Developer", "Graphic Designer","Digital Marketer","SEO EXPERT!!!"],
typeSpeed: 80,
backSpeed: 80,

})


var typed = new Typed (".typing2", {

strings:  ["Web Deiginer", "Web Developer", "Wordpress Designer", "Wordpress Developer", "Graphic Designer","Digital Marketer","SEO EXPERT!!!"],
typeSpeed: 80,
backSpeed: 80,


});


//Show/hide FAQ ANSWER

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq =>{

faq.addEventListener("click", ()=>{


faq.classList.toggle('open');

//change icon

const icon = faq.querySelector(".faq_icon i");

if(icon.className ==='fa-solid fa-plus'){

icon.className ='fa-solid fa-minus';

}
else{
icon.className='fa-solid fa-plus';

}

})


})


// Show /Hide nav menu


const menu = document.querySelector(".nav_menu");

const menuBtn = document.querySelector("#open-menu-btn");

const closeBtn =document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", ()=>{

menu.style.display ="flex";
closeBtn.style.display = "inline-block";
menuBtn.style.display = "none";


    
})


// CLOSE NAV MENU


const closeNav =()=>{

menu.style.display = "none";
closeBtn.style.display = "none";
menuBtn.style.display = "inline-block";

}


closeBtn.addEventListener("click",closeNav);

// Nave color change 

window.addEventListener('scroll', ()=>{

document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>100);

})