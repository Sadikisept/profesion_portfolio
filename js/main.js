// ==================SHOW MENU===============
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    //   ================MENU SHOW================
    /*validate if constant exists*/
    if(navToggle){
        navToggle.addEventListener('click',() =>{
            navMenu.classList.add('show-menu')
        })
    }

// ==================MENU HIDDEN==================
/*validate if constant exists*/
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*================REMOVE MENU MOBILE=======================*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each na__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n =>n.addEventListener('click', linkAction))

// ==========ADD BLUR OF HEADER==============
const blurHeader = ()=>{
    const header = document.getElementById('header')

    this.scroll >= 50 ? header.classList.add('blur-header')
                       :header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

// ========EMAIL JS================
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

    const sendEmail = (e) =>{
     e.preventDefault()   
//serviceID -#for - publickey
emailjs.sen
    }

    contactForm.addEventListener('submit' , sendEmail)