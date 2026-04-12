
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

function click(string) {
    document.getElementById(string).addEventListener("click",function() {
        this.style.filter = "brightness(100%)"
        if (string == "br") {
            document.getElementById("usa").style.filter = "brightness(70%)"
        } else {
            document.getElementById("br").style.filter = "brightness(70%)"
        }
        payflag = string
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