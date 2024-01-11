/*=============== PRELOADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
distance:"60px",
duration:2000,
deay:100
});

sr.reveal('contact-headline,.projects-headline',{delay:500});
sr.reveal('.nav, .footer-home, .footer-social, .skill-item, .projects-item',{origin:"top", interval:100});
sr.reveal('.contact-description, .contact-form',{origin:"left",interval:100});
sr.reveal('.hero-image',{origin:"top"});
sr.reveal('.hero-text');
/*=============== SHOW SCROLL UP ===============*/

/*=============== EMAIL JS ===============*/
//selecting elements from DOM
const contactForm=document.getElementById("contact-form"),
contactmessage=document.getElementById("contact-message"),
sendButton=document.querySelector("#contact-form button");

const sendEmail=async(e)=>{
e.preventdefault();//prevent default for submssion

sendButton.disabled=true;
sendButton.textContent="Sending...";

try{
await emailjs.sendForm(
    "service_un98hhz",
    "template_6e9x8x8",
    "#contact-form",
    "bfFC2FdIts14Av_C8"
);
contactmessage.textContent="Message sent successfully";
setTimeout(()=>{
    contactmessage.textContent="";
},4000);

contactForm.reset();
}

catch(error){
    contactmessage.textContent="Message not sent(service error)";
}

finally{
    sendButton.disabled=false;
    sendButton.textContent="Send Message";
}
};

contactForm.addEventListener("submit",sendEmail);