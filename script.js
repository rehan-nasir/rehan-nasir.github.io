function scrollToContact(){
    document.getElementById('contact').scrollIntoView({
        behavior: "smooth",
        block: "end"
    })
}
ScrollReveal().reveal('.scroll-reveal', {
    delay: 450,
    distance: "30px",
    origin: "top",
    reset:true
});