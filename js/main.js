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
emailjs.sendForm('service_aahlqus', 'template_bw0ygda', '#contact-form','UrF4UfNnw0iiMSInt')
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
        const scrollY = window.pageYoffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a [href*=' + sectionId + ']')
       
            if(scrolly > sectionTop && scrolly <= sectionHeight){
                sectionClass.add('active-link')
            }else{
                sectionClass.classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)

    