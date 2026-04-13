
let lcheck = []

let values = {
    hs: 0,
    ts: 0,
    fs: 0,
    hm: 0,
    tm: 0,
    fm: 0,
    hc: 0,
    tc: 0,
    fc: 0,
    si: 0,
    mi: 0,
    ci: 0,
    sh: 0,
    sp: 0,
    ph: 0,
    ah: 0,
    sr: 0,
    mr: 0,
    cr: 0,
}

const wtitle = document.getElementsByClassName("windowtitle")
for (let i = 0; i < wtitle.length; i++) {
    wtitle[i].addEventListener("click", function() {
        let content = this.parentElement.childNodes[3]
        if (content.style.display == "flex") {
            content.style.display = "none"
            this.childNodes[2].innerHTML = "add"
        } else {
            content.style.display = "flex"
            this.childNodes[2].innerHTML = "remove"
        }
    })
}

const img = document.getElementsByClassName("img")
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function() {
        let l = this.childNodes
        for (let i = 0; i < l.length; i++) {
            if (l[i].tagName == "IMG") {
                zoom(l[i].src)
            } 
        }
    })
}

const btns = document.getElementsByClassName("choose")
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    values[this.parentElement.childNodes[7].id] = values[this.parentElement.childNodes[7].id] + 1
    document.getElementById(this.parentElement.childNodes[7].id).innerHTML = values[this.parentElement.childNodes[7].id]
    add_purchase(this.parentElement.childNodes[7].id)
  })
}

function add_purchase(id) {
    if (document.getElementById("sacrifice")) {
        document.getElementById("sacrifice").remove()
    }

    let idvalue = case_check(id)

    if (lcheck.includes("value"+id)) {
        document.getElementById("valuetext"+id).innerHTML = values[id]+"x "+idvalue
    } else {
        lcheck.push("value"+id)
        const divcomm = document.createElement("div")
        divcomm.id = "value"+id

        const divh = document.createElement("h3")
        divh.innerHTML = "1x "+idvalue
        divh.id = "valuetext" + id
        
        const closebtn = document.createElement("div")
        closebtn.className = "material-symbols-rounded"
        closebtn.innerHTML = "close"
        closebtn.onclick = function() {
            if (values[id] > 1) {
                values[id] = values[id] - 1
                document.getElementById("valuetext"+id).innerHTML = values[id]+"x "+idvalue
                document.getElementById(id).innerHTML = values[id]
            } else {
                lcheck = (lcheck.slice ( 0, lcheck.indexOf("value"+id) ).concat(lcheck.slice ((lcheck.indexOf("value"+id))+1) ))
                document.getElementById(id).innerHTML = 0
                values[id] = 0
                this.parentElement.remove()                
            }

        }
        divcomm.append(divh,closebtn)
        document.getElementById("values").append(divcomm)
    }

}

function case_check(value) {
    switch (value) {
        case "hs":
            return "head sketch"
        case "ts":
            return "torso sketch"
        case "fs":
            return "full sketch"
        case "hm":
            return "head monotone"
        case "tm":
            return "torso monotone"
        case "fm":
            return "full monotone"
        case "hc":
            return "head colored"
        case "tc":
            return "torso colored"
        case "fc":
            return "full colored"
        case "si":
            return "icon sketch"
        case "mi":
            return "icon monotone"
        case "ci":
            return "icon colored"
        case "sh":
            return "homestuck sprite"
        case "sp":
            return "homestuck spritesheet"
        case "ph":
            return "homestuck panel"
        case "ah":
            return "homestuck animation"
        case "sr":
            return "REF sketch"
        case "mr":
            return "REF monotone"
        case "cr":
            return "REF colored"
    }
}

function calc() {
    let price = 0
    for (let i = 0; i < lcheck.length; i++) {

        let v = lcheck[i][5]+lcheck[i][6]

        if (v == Object.keys(values)[0]) { // head sketch
            if (values[v] > 0) {
                price = price + 3
                if (values[v] >= 2) {
                    price = price + (3/4)*(values[v]-1)
                }
            }
        } else if (v == Object.keys(values)[1]) { // torso sketch
            if (values[v] > 0) {
                price = price + 7
                if (values[v] >= 2) {
                    price = price + (7/4)*(values[v]-1)
                }
            }
        } else if (v == Object.keys(values)[2]) { // full sketch
            if (values[v] > 0) {
                price = price + 12
                if (values[v] >= 2) {
                    price = price + (12/4)*(values[v]-1)
                }
            }
        } else if (v == Object.keys(values)[3]) { // head monotone
            if (values[v] > 0) {
                price = price + 5
                if (values[v] >= 2) {
                    price = price + (5/2)*(values[v]-1)
                }
            }
        } else if (v == Object.keys(values)[4]) { // torso monotone
            if (values[v] > 0) {
                price = price + 10
                if (values[v] >= 2) {
                    price = price + (10/2)*(values[v]-1)
                }
            }
        } else if (v == Object.keys(values)[5]) { // full monotone
            if (values[v] > 0) {
                price = price + 25
                if (values[v] >= 2) {
                    price = price + (25/2)*(values[v]-1)
                }
            }
        } else if (v == Object.keys(values)[6]) { // head colored
            if (values[v] > 0) {
                price = price + 10
                if (values[v] >= 2) {
                    price = price + (10*0.75)*(values[v]-1)
                }
            }
        } else if (v == Object.keys(values)[7]) { // torso colored
            if (values[v] > 0) {
                price = price + 25
                if (values[v] >= 2) {
                    price = price + (25*0.75)*(values[v]-1)
                }
            }
        } else if (v == Object.keys(values)[8]) { // full colored
            if (values[v] > 0) {
                price = price + 40
                if (values[v] >= 2) {
                    price = price + (40*0.75)*(values[v]-1)
                }
            }
        } else if (v == Object.keys(values)[9]) { // sketch icon
            if (values[v] > 0) {
                price = price + 3 + (3*(values[v]-1))
            }
        } else if (v == Object.keys(values)[10]) { // monotone icon
            if (values[v] > 0) {
                price = price + 5 + (5*(values[v]-1))
            }
        } else if (v == Object.keys(values)[11]) { // color icon
            if (values[v] > 0) {
                price = price + 10 + (10*(values[v]-1))
            }
        } else if (v == Object.keys(values)[12]) { // sprite homestuck 
            if (values[v] > 0) {
                price = price + 5 + (5*(values[v]-1))
            }
        } else if (v == Object.keys(values)[13]) { // spritesheet homestuck
            if (values[v] > 0) {
                price = price + 15 + (15*(values[v]-1))
            }
        } else if (v == Object.keys(values)[14]) { // panel homestuck
            if (values[v] > 0) {
                price = price + 15 + (15*(values[v]-1))
            }
        } else if (v == Object.keys(values)[15]) { // animation homestuck
            if (values[v] > 0) {
                price = price + 10 + (10*(values[v]-1))
            }
        } else if (v == Object.keys(values)[16]) { // sketch REF
            if (values[v] > 0) {
                price = price + 10 + (10*(values[v]-1))
            }
        } else if (v == Object.keys(values)[17]) { // monotone REF
            if (values[v] > 0) {
                price = price + 20 + (20*(values[v]-1))
            }
        } else if (v == Object.keys(values)[18]) { // color REF
            if (values[v] > 0) {
                price = price + 25 + (25*(values[v]-1))
            }
        }
    }

    document.getElementById("rvalue").innerHTML = price
}

function mobilegetcase() { //not optimal but the original code would limit the UI and im feeling lazy x_x

}

function zoom(imgsrc) {
    const canvas = document.createElement("div")
    const img = document.createElement("img")
    
    canvas.className = "canva"
    img.id = "canvaimg"
    img.src = imgsrc
    canvas.style.opacity = 0
    img.style.opacity = 0
    img.style.translate = "0px 50px"
    canvas.appendChild(img)
    canvas.addEventListener("click", function() {
        this.remove()
    })
    document.getElementsByTagName("body")[0].appendChild(canvas)
    let transl = 50
    let loop = setInterval(function() {
        transl = transl - 2
        canvas.style.opacity = Number(canvas.style.opacity) + .1
        img.style.opacity = Number(img.style.opacity) + .1

        img.style.translate = "0px "+transl+"px"
        console.log(transl, img.style.translate)
        if ((canvas.style.opacity + img.style.opacity) >= 2 && transl >= 0) { 
            clearInterval(loop)            
        }

    },20)
}