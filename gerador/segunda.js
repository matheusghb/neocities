const div_inputs = document.getElementById("divinput")
let lp = []

let cr = 0
let t = 0 //tier average
let dif

const flags = document.getElementsByClassName("flag")
for (let i = 0; i < flags.length; i++) {
  flags[i].checked = true
}

const when = ['dawn',
            'morning',
            'afternoon',
            'night']

const where = [
            'shop',
            'house',
            'bridge',
            'park',
            'circus',
            'hospital',
            'school',
            'harbor',
            'museum',
            'metro station',
            'mansion',
            'zoo',
            'library',
            'underground tunnel',
            'prison',
            'police station',
            'castle',
            'farm',
            'abandoned house',
            'lake',
            'beach',
            'waterfall',
            'mountain',
            'ruins',
            'cave',
            'desert',
            'island',
            'dense forest',
            ]

const what = ["Supress","Contact","Mold"]

const mods = ['crazed',
            'sick',
            'persecuted',
            'enraged',
            'confused',
            'framed',
            'brief',
            'huge',
            'enigmatic',
            'sudden',
            'cursed',
            'Juju',
            'stolen',
            'magical',
            'lost']

const who = ['consort',
            'Derse agent',
            'Prospit agent',
            'imp',
            'sprite',
            'amphibian',
            'reptile',
            'bird',
            'fungus',
            'fish',
            'crustacian',
            'lusus',
            'android',
            'crustacian',
            'feline',
            'insect',

            'mania',
            'influence',
            'lie',
            'conspiracy',
            'invasion',
            'storm',
            'invasion',
            "'y event",

            'eletronic device',
            'fruit',
            'tool',
            'weapon',
            'key',
            'egg',
            'potion',
            'gem',
            'wand',
            'book',
            'painting',
            'sphere',
            'clothing',
            'doll',
            'toy',
            'video game',
            'musical instrument',
            'liquid',
            'fire',
            ]

const why = ['self preservation',
            'material interest',
            'a competition']

const how = [
                'athletics',
                'endurance',
                'acrobatics',
                'sleight of hand',
                'sleath',
                'engineering',
                'investigation',
                'occult',
                'animal handling',
                'insight',
                'medicine',
                'perception',
                'sanity',
                'survival',
                'deception',
                'intimidation',
                'performance',
                'persuasion',
            ]

            
function random(list) {
  return list[Math.floor(Math.random() * (0 - list.length)) + list.length]
}

function partytoggle() {
    if (document.getElementById("info") != null) {
        document.getElementById("info").remove()
    }
    const ihatecoding = document.getElementsByClassName("party-container")
    for (let i = 0; i < ihatecoding.length; i++) {
        if (ihatecoding[i].style.display == "flex") {
            ihatecoding[i].style.display = "none"
        } else {
            ihatecoding[i].style.display = "flex"
        }
    }
}

function generatortoggle() {
    const ihatecoding = document.getElementsByClassName("mission-generator")
    if (document.getElementById("info") != null) {
        document.getElementById("info").remove()
    }
    for (let i = 0; i < ihatecoding.length; i++) {
        if (ihatecoding[i].style.display == "flex") {
            ihatecoding[i].style.display = "none"
        } else {
            ihatecoding[i].style.display = "flex"
        }
    }
}

function infotoggle() {

    if (!document.getElementById("info")) {

        if (document.getElementById("party").style.display == "flex") {
            document.getElementById("party").style.display = "none"
        }
        if (document.getElementById("mission").style.display == "flex") {
            document.getElementById("mission").style.display = "none"
        }

        const info = document.createElement("div")
        info.id = "info"

        const tinfom = document.createElement("h1")
        tinfom.id = "tinfom"
        tinfom.innerHTML = "==> About MISSION CALCULATOR"
        tinfom.className = "title"

        const pinfom = document.createElement("p")
        pinfom.id = "pinfom"
        pinfom.innerHTML = "It's just a calculator to deduce the approximate enemies to use on a session with more than one player. Of course, the rulebook isn't made for that, but i can dream. The Tier is the <b>Mission Tier</b> is the recommended enemy tier, and the <b>difficulty</b> is an arbitrary value that ups the CR.<br><br>Having additional players adds about half or a quarter of their tier to the CR based around if their Tier is above or below the average group tier.<br><br>Basically, more players adds more CR based on how far close they are to the rest of the group power-wise. This whole system deduces that the player's damage can be (roughly) summed up by its Tier."

        const tinfop = document.createElement("h1")
        tinfop.id = "tinfop"
        tinfop.innerHTML = "==> About PROMPT GENERATOR"
        tinfop.className = "title"

        const pinfop = document.createElement("p")
        pinfop.id = "pinfop"
        pinfop.innerHTML = "It's a very simple randomizer that just sums up a bunch of words is an order that tries to make sense. It's a bullshit machine, pretty much. The HOW attribute follows whatever difficulty you've if the MISSION CALCULATOR has been used while the site is open.<br>The first word is either MOLD, SURPRESS or CONTACT.<br><br><b>MOLD</b> means that you have to MAINTAIN, GIVE or in any way CREATE the subject.<br><br><b>SURPRESS</b> means that you need to DESTROY, REDUCE or in any way STOP the subject in some way.<br><br>At last, <b>CONTACT</b> means that you need to OBTAIN, FIND or in any way INTERACT with a certain amount of the subject."

        info.append(tinfom,pinfom,tinfop,pinfop)
        document.getElementById("nav").after(info)

    } else {
        document.getElementById("info").remove()
    }
}

function generator() {
    
    let result = '==> '

    document.getElementById("start").innerHTML = "restart_alt"

    result = result + random(what)

    if (flags[0].checked === true && Math.floor(Math.random() * 101)+1 <= document.getElementById('modvalue').value) {

        let mod = random(mods)


        if (mods.slice(0,6).includes(mod)) {

            mod = mod +" "+ random(who.slice(0,16))

        } else if (mods.slice(6,10).includes(mod)) {

            mod = mod +" "+ random(who.slice(16,24))

            if (mod.indexOf("'") > -1) {
                mod = [...mod]
                let temp1 = (mod.slice(0,(mod.indexOf("'"))))
                let temp2 = (mod.slice((mod.indexOf("'"))))
                mod = temp1.join('')+random(
                            ['Derse',
                            'Prospit',
                            'Horrorterror',
                            'Denizen',
                            'Skaia',
                            'Heart',
                            'Mind',
                            'Space',
                            'Time',
                            'Breath',
                            'Blood',
                            'Doom',
                            'Life',
                            'Void',
                            'Light',
                            'Rage',
                            'Hope'])+temp2.join('')
            }

        } else if (mods.slice(10, 15).includes(mod)) {

            mod = mod +" "+ random(who.slice(24,43))

        }

        if (["a","e","i","o","u"].includes(mod[0])) {
            mod = "an "+mod
        }
        else {
            mod = "a "+mod
        }

        result = result +" "+ mod

    } else {

        let subject = random(who)

        if (subject.indexOf("'") > -1) {
                    subject = [...subject]
                    let temp1 = (subject.slice(0,(subject.indexOf("'"))))
                    let temp2 = (subject.slice((subject.indexOf("'"))))
                    subject = temp1.join('')+random(
                                ['Derse',
                               'Prospit',
                               'Horrorterror',
                               'Denizen',
                               'Skaia',
                               'Heart',
                               'Mind',
                               'Space',
                               'Time',
                               'Breath',
                               'Blood',
                               'Doom',
                               'Life',
                               'Void',
                               'Light',
                               'Rage',
                               'Hope'])+temp2.join('')
                }
        
        if (["a","e","i","o","u"].includes(subject[0])) {
            result = result + " an " + subject
        } else {
            result = result + " a " + subject
        }
    }
    
    if (flags[1].checked === true) {
        result = result + " for " + random(why)
    }

    if (flags[2].checked === true) {
        let place = random(where)

        if (["a","e","i","o","u"].includes(place[0])) {
            result = result + " in an " + place
        }
        else {
            result = result + " in a " + place
        }
    }

    if (flags[3].checked === true) {
        result = result + " during the " + random(when) + "."
    }

    if (flags[4].checked === true) {
        result = result + " It might use: "

        let improv = 0

        if (dif === undefined) {
            improv = Math.floor(Math.random() * 5)+1
        } else {
            improv = dif
        }

        let i = 0
        let howlist = []

        while (i < Math.floor(improv*1.5)) {
            
            let howvalue = random(how)
            if (!howlist.includes(howvalue+", ")) {
                if (i < (Math.floor(improv*1.5)-1)) {
                    howlist.push(howvalue+", ")
                    i = i+1
                } else {
                    if (howlist.length > 0) {
                        howlist.push("and "+howvalue)
                        i = i+1
                    }
                    else {
                        howlist.push(" "+howvalue)
                    }
                }
            }
        }
        howlist.forEach(function(value) {
            result = result + value
        })

        result = result + "."

    }

    document.getElementById("prompt").innerHTML = result

}

function delete_generation() {
    document.getElementById("start").innerHTML = "play_arrow"
}

function player_input() {

    let input = document.createElement("div")
    input.id = "div" + lp.length
    input.className = "input-div"

    let label = document.createElement("label")
    label.for = lp.length
    label.innerHTML = (lp.length+1)+"'s Tier"
    label.id = "label "+lp.length
    label.className = "player-label"

    let pinput = document.createElement("input")
    pinput.id = "teste " + lp.length
    pinput.name = lp.length
    pinput.type = "number"
    pinput.min = 1
    pinput.max = 5
    pinput.className = "player-input"
    pinput.value = 1

    let pdelete = document.createElement("button")
    pdelete.id = "del" + lp.length
    pdelete.className = "delete-button"
    pdelete.innerHTML = "X"
    pdelete.onclick = function() {

        document.getElementById("div" + (this.id)[3]).remove()

        // splicing the lp list at a specific element and concating afterwards so we're able to keep the order later
        // as in, if i delete index 2, i dont get a element with the number 3 on the index 2
        // the slices uses the id from the delete button to define its index (its the same number)
        // through getting the fourth (index 3) element on the id's string (its always its position)

        lp = (lp.slice ( 0, (Number (this.id [3]))) ).concat(lp.slice (Number (this.id [3]) +1) )

        x = 0

        if (lp.length < 1) {
            document.getElementById("title-party").innerHTML = "Make a Mission:"
            document.getElementById("sendbtn").remove()
            document.getElementById("difdiv").remove()
        }

        lp.forEach(function(value) {
            value.id = "div"+x
            value.firstElementChild.innerHTML = (x+1)+"'s Tier"
            value.firstElementChild.id = "label "+ x
            value.firstElementChild.nextElementSibling.id = "teste " + x
            value.lastElementChild.id = "del" + x
            x = x + 1
        })
    }
    
    input.append(label,pinput,pdelete)

    lp.push(input)

    if (!document.getElementById("sendbtn")) {

        const dif_div = document.createElement("div")
        dif_div.id = "difdiv"

        const dif_title = document.createElement("h1")
        dif_title.id = "diftitle"
        dif_title.innerHTML = "DIFFICULTY LEVEL: 1"

        const dif_value = document.createElement("p")
        dif_value.id = "difvalue"
        dif_value.innerHTML = "You're making an easy mission."

        const dif_slider = document.createElement("input")
        dif_slider.value = 1
        dif_slider.min = 1
        dif_slider.max = 5
        dif_slider.type = "range"
        dif_slider.id = "dif-slider"
        dif_slider.addEventListener("input",function() {
            if (dif_slider.value == 1) {
                dif_value.innerHTML = "You're making an easy mission."
                dif_title.innerHTML = "DIFFICULTY LEVEL: 1"
            } else if (dif_slider.value == 2) {
                dif_value.innerHTML = "You're making a mild mission."
                dif_title.innerHTML = "DIFFICULTY LEVEL: 2"
            } else if (dif_slider.value == 3) {
                dif_value.innerHTML = "You're making a hard mission."
                dif_title.innerHTML = "DIFFICULTY LEVEL: 3"
            } else if (dif_slider.value == 4) {
                dif_value.innerHTML = "You're making an unfair mission."
                dif_title.innerHTML = "DIFFICULTY LEVEL: 4"
            } else if (dif_slider.value == 5) {
                dif_value.innerHTML = "You're going to kill your players."
                dif_title.innerHTML = "DIFFICULTY LEVEL: 5"
            }
        })

        dif_div.append(dif_title,dif_slider,dif_value)

        const send = document.createElement("button")
        send.innerHTML = "SEND"
        send.id = "sendbtn"
        send.onclick = function() {
            
            let tp = []
            dif = Number(document.getElementById("dif-slider").value)

            for (const value of lp) {
                if (value.firstElementChild.nextElementSibling.value !== "" && dif !== "" && lp.length > 0) {
                    tp.push(Number(value.firstElementChild.nextElementSibling.value))                 
                } else {
                    alert("All values must be filled.")
                    tp = []
                    dif = ''
                    break
                }
            }

            if (tp.length > 0) {
                
                tp.sort(function(a,b){return(b - a)}) // sorts in descending order (the highest first)

                if (lp.length > 1) {

                    tp.forEach(function(value) {
                        t = t + value
                    })

                    t = (Math.floor(t / lp.length)) //getting the tier average (tier / amount of players), also the mission's enemy Tier
                    
                    let tt = t //temporary tier, only used for calculations

                    for (let i = 0; i < (tp.length)-1; ++i) {
                        if (tp[i+1] < t || tp[i+1] > t) {
                            tt = tt + ((tp[i+1]*0.5)-t)
                        } else if (tp[i+1] == t) {
                            if (tp[i+1] > 1) {
                                tt = tt + (t*.25)
                            } else {
                                tt = tt + 1
                            }
                        }
                    }
                    cr = tt + dif*Math.floor(lp.length/2)

                } else {
                    t = tp[0]
                    cr = dif
                }
                document.getElementById("title-party").innerHTML = "You've made a Tier "+t+" mission with "+Math.floor(cr)+" CR."
            }

        }

        div_inputs.before(dif_div)

        div_inputs.after(send)
    }

    lp.forEach(function(value) { 
        div_inputs.append(value)
    })
}