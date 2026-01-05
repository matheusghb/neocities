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
    const ihatecoding = document.getElementsByClassName("party-container")
    for (let i = 0; i < ihatecoding.length; i++) {
        if (ihatecoding[i].style.display === "none") {
            ihatecoding[i].style.display = "flex"
        } else {
            ihatecoding[i].style.display = "none"
        }
    }
}

function generatortoggle() {
    const ihatecoding = document.getElementsByClassName("mission-generator")
    for (let i = 0; i < ihatecoding.length; i++) {
        if (ihatecoding[i].style.display === "none") {
            ihatecoding[i].style.display = "flex"
        } else {
            ihatecoding[i].style.display = "none"
        }
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
        result = result + " One may expect: "

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
                        howlist.push("and "+howvalue+".")
                        i = i+1
                    }
                    else {
                        howlist.push(" "+howvalue+".")
                    }
                }
            }
        }
        howlist.forEach(function(value) {
            result = result + value
        })

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
    label.innerHTML = "Player "+(lp.length+1)
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
    pdelete.onclick = function() {

        document.getElementById("div" + (this.id)[3]).remove()

        // splicing the lp list at a specific element and concating afterwards so we're able to keep the order later
        // as in, if i delete index 2, i dont get a element with the number 3 on the index 2
        // the slices uses the id from the delete button to define its index (its the same number)
        // through getting the fourth (index 3) element on the id's string (its always its position)

        lp = (lp.slice ( 0, (Number (this.id [3]))) ).concat(lp.slice (Number (this.id [3]) +1) )

        x = 0

        lp.forEach(function(value) {
            value.id = "div"+x
            value.firstElementChild.innerHTML = "Player "+(x+1)
            value.firstElementChild.id = "label "+ x
            value.firstElementChild.nextElementSibling.id = "teste " + x
            value.lastElementChild.id = "del" + x
            x = x + 1
        })
    }
    
    input.append(label,pinput,pdelete)

    lp.push(input)

    if (!document.getElementById("sendbtn")) {

        dif_slider = document.createElement("input")
        dif_slider.min = 1
        dif_slider.max = 5
        dif_slider.type = "range"
        dif_slider.id = "dif-slider"

        send = document.createElement("button")
        send.innerHTML = "Send"
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

        div_inputs.before(dif_slider)

        div_inputs.after(send)
    }

    lp.forEach(function(value) { 
        div_inputs.append(value)
    })
}