setInterval(() => {
t= new Date();
let time = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
let date = t.toLocaleDateString();
document.getElementById('time').innerHTML = time + " on " + date;

}, 1);