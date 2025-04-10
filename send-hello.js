function sendHello() {
    let now = new Date();
    let hour = now.getHours();
    let message = "Chào ";
    if (hour > 5 && hour <= 10) {
        message += "buổi sáng ☀️!"
    } else if (hour > 10 && hour <= 13) {
        message += "buổi trưa 🌄!"
    } else if (hour > 13 && hour <= 17) {
        message += "buổi chiều 🌇!"
    } else {
        message += "buổi tối 🌃!"
    }
    return message
}
const sentHello = document.getElementById("send_hello")
sentHello.innerText = sendHello()
