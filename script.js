function scrollToContact(){
    document.getElementById('contact').scrollIntoView({
        behavior: "smooth",
        block: "end"
    })
}
ScrollReveal().reveal('.scroll-reveal', {
    delay: 300,
    distance: "40px",
    origin: "top",
    reset: true
})
function copyEmail() {
    const img = document.getElementById('copy')
    const alt = img.getAttribute('alt')
    navigator.clipboard.writeText(alt)
    document.getElementById('popup-text').textContent = "Copied!"
}
function startTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let period = "AM"
    if (h >= 12) {
        period = "PM"
        if (h > 12) {
            h -= 12
        }
    } 
    else if (h == 0) {
        h = 12
    }
    m = checkTime(m)
    s = checkTime(s)
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " " + period
    setTimeout(startTime, 1000)
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i
}
function startDate(){
    var today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var dayName = days[today.getDay()]
    var monthName = months[today.getMonth()]
    var day = today.getDate()
    var year = today.getFullYear()
    
    var formattedDate = dayName + ' ' + monthName + ' ' + day + ', ' + year
    document.getElementById('date').textContent = formattedDate
}