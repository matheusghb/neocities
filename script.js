const r = document.querySelector(":root")
const api = 'd316fddc6e098b9aadd941057bba118c'
const apilink = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const chuvas = ["rain", "mist", "drizzle"]
const nuvens = ["clouds", "snow"]
document.addEventListener("mousedown", function() {
   r.style.setProperty('--cursor', "url('https://homestuck.net/tools/homestuck-cursors/SBURB%20Cursors/SBurb_Revise.cur'), auto")
})

document.addEventListener("mouseup", function () {
    r.style.setProperty('--cursor', "url('https://homestuck.net/tools/homestuck-cursors/SBURB%20Cursors/SBurb_Select.cur'), auto")
})
weather()
setInterval(hora,1000)
async function weather() {
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Namche,NP&APPID=d316fddc6e098b9aadd941057bba118c")    
    var data = await response.json()
    document.getElementById("temp").innerHTML = Math.round((data.main.temp)-273,15) + '°C'
    document.getElementById("windstext").innerHTML = "~" + Math.round(data.wind.speed) + " km/h"
    document.getElementById("humiditytext").innerHTML = data.main.humidity + "%"
    document.getElementById("weathertext").innerHTML = data.weather[0].main 

    if (chuvas.includes(data.weather[0].main)) {
        document.getElementById("widgeteffect").src = "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Cloud-PNG/Rainy_Cloud_PNG_Clipart.png?m=1629830700"
        document.getElementById("widgeteffect").style.width = "53%"
        document.getElementById("widgeteffect").style.left = "67%"
        document.getElementById("widgeteffect").style.bottom = "25%"
    } else if (nuvens.includes(data.weather[0].main)) {
        document.getElementById("widgeteffect").src = "https://static.vecteezy.com/system/resources/thumbnails/012/595/172/small/realistic-white-cloud-png.png"
        document.getElementById("widgeteffect").style.width = "53%"
        document.getElementById("widgeteffect").style.left = "65%"
        document.getElementById("widgeteffect").style.bottom = "25%"
    } else {
        document.getElementById("widgeteffect").style.display = "none"
    }
}

//tbh this part is poop from a butt

function hora() {


    const date = new Date()
    let h = ""
    let d = ""
    let m = ""
    let mm = ""
    let wd = ""
    
    if (date.getHours() < 10) {
        h = ("0"+date.getHours()).toString()
    } else {
        h = date.getHours().toString()
    }

    if (date.getMinutes() < 10) {
         mm = "0"+date.getMinutes().toString()
    } else {
         mm = (date.getMinutes()).toString()
    }

    if (date.getDate() < 10) {
         d = "0"+date.getDate().toString()
    }
    else {
         d = date.getDate().toString()
    }
    if ((date.getMonth())+1 < 10) {
         m = "0"+(date.getMonth()+1).toString()
    } else {
         m = (date.getMonth()+1).toString()
    }

    if (date.getDay() == 0) {
        wd = "Sunday"
    } else if (date.getDay() == 1) {
        wd = "Monday"
    } else if (date.getDay() == 2) {
        wd = "Tuesday"
    } else if (date.getDay() == 3) {
        wd = "Wednesday"
    } else if (date.getDay() == 4) {
        wd = "Thursday"
    } else if (date.getDay() == 5) {
        wd = "Friday"
    } else {
        wd = "Saturday"
    }
    
    document.getElementById("dia").innerHTML = d+"/"+m+"/"+date.getFullYear()
    document.getElementById("hora").innerHTML = h+":"+mm
    document.getElementById("semanaedia").innerHTML = wd

    if (date.getHours() > 12) {
        document.getElementById("widget").style.background = "linear-gradient(to bottom,rgba(131, 76, 3, 0.9), rgba(126, 185, 17, 0.9))"
        document.getElementById("janela2").style.background = "rgba(27, 1, 1, 0.4)"
        document.getElementById("widgeticon").src= "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Decorative-Elements-PNG/Sunset_Effect_PNG_Transparent_Clip_Art.png?m=1629830831"
    } else if (date.getHours() > 18 || date.getHours() < 5) {
        document.getElementById("widget").style.background = "linear-gradient(to bottom,rgba(55, 51, 109, 0.9), rgba(48, 17, 185, 0.9))"
        document.getElementById("janela2").style.background = "rgba(4, 1, 27, 0.4)"
        document.getElementById("widgeticon").src= "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Weather_icon_-_full_moon.svg/2048px-Weather_icon_-_full_moon.svg.png"
    }
}