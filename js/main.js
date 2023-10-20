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
emailjs.sendForm('service_20e64bn', 'template_i6ghsti', '#contact-form','UrF4UfNnw0iiMSInt')
       .then(()=>{
        //show sent message
        contactMessage.textContent = 'Message sent successfully✔️'
       
//Remove message after five seconds
setTimeout(()=>{
    contactMessage.textContent = ''
},5000)

//clear input fields
contactForm.reset()
    
},()=>{
        //show error message
        contactMessage.textContent = 'Message not sent (service error)❌'
       })
}

    contactForm.addEventListener('submit' , sendEmail)

    // ========SHOW SCROLL UP===========
    const scrollUp = () =>{
        const scrollUp = document.getElementById('scroll-up')
        //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tg with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                   : scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)

    // ========SCROLL SECTIONS ACTIVE LINK=======
    const sections = document.querySelectorAll('section[id]')

    const scrollActive = () =>{
        const scrolly = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a [href*=' + sectionId + ']')
       
            if(scrolly > sectionTop && scrolly <= sectionHeight){
                sectionsClass.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)

   /*=============SCROLL REVEAR ANIMATION===================*/ 
   const sr = scrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true // Animation repeat
   })

   sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
   sr.reveal(`.home__image`, {origin: 'bottom'})
   sr.reveal(`.about__data, .skills__data`,{origin: 'left'})
   sr.reveal(`.about__image, .skills__content`,{origin: 'right'})
   sr.reveal(`.services__card, .projects__card`,{interval:100})