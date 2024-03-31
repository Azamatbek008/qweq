let menuInside = document.querySelector('.menu-inside')
let menu = document.querySelector('.menu')
menuInside.onclick = function(){
    menu.classList.toggle('active')
}


let c1 = document.getElementById('c1')
let c2 = document.getElementById('c2')
let c3 = document.getElementById('c3')
let c4 = document.getElementById('c4')
let c5 = document.getElementById('c5')


let home = document.querySelector('.home')
let about = document.querySelector('.about')
let work = document.querySelector('.work')
let plan = document.querySelector('.plan')
let contact = document.querySelector('.contact')


function page1()
{
    home.style = "opacity: 1; transform: translateY(-50%); z-index: 1; transition: opacity .2s linear .4s"
    about.style = "opacity: 0; transform: translateY(-30%); z-index: -1;"
    work.style = "opacity: 0; transform: translate(-50%, -30%); z-index: -1;"
    plan.style = "opacity: 0; transform: translate(-50%, -30%); z-index: -1;"
    contact.style = "opacity: 0; transform: translateY(-30%); z-index: -1;"


    c1.style = "color: white; border: 2px solid white;"
    c2.style = "unset"
    c3.style = "unset"
    c4.style = "unset"
    c5.style = "unset"
}

function page2()
{
    home.style = "opacity: 0; transform: translateY(-70%); z-index: -1;"
    about.style = "opacity: 1; transform: translateY(-50%); z-index: 1; transition: opacity .2s linear .4s"
    work.style = "opacity: 0; transform: translate(-50%, -30%); z-index: -1;"
    plan.style = "opacity: 0; transform: translate(-50%, -30%); z-index: -1;"
    contact.style = "opacity: 0; transform: translateY(-30%); z-index: -1;"


    c1.style = "unset"
    c2.style = "color: white; border: 2px solid white;"
    c3.style = "unset"
    c4.style = "unset"
    c5.style = "unset"
}


function page3()
{
    home.style = "opacity: 0; transform: translateY(-70%); z-index: -1;"
    about.style = "opacity: 0; transform: translateY(-70%); z-index: -1;"
    work.style = "opacity: 1; transform: translate(-50%, -50%); z-index: 1; transition: opacity .2s linear .4s"
    plan.style = "opacity: 0; transform: translate(-50%, -30%); z-index: -1;"
    contact.style = "opacity: 0; transform: translateY(-30%); z-index: -1;"


    c1.style = "unset"
    c2.style = "unset"
    c3.style = "color: white; border: 2px solid white;"
    c4.style = "unset"
    c5.style = "unset"
}


function page4()
{
    home.style = "opacity: 0; transform: translateY(-70%); z-index: -1;"
    about.style = "opacity: 0; transform: translateY(-70%); z-index: -1;"
    work.style = "opacity: 0; transform: translate(-50%, -70%); z-index: -1;"
    plan.style = "opacity: 1; transform: translate(-50%, -50%); z-index: 1; transition: opacity .2s linear .4s"
    contact.style = "opacity: 0; transform: translateY(-30%); z-index: -1;"


    c1.style = "unset"
    c2.style = "unset"
    c3.style = "unset"
    c4.style = "color: white; border: 2px solid white;"
    c5.style = "unset"
}

function page5()
{
    home.style = "opacity: 0; transform: translateY(-70%); z-index: -1;"
    about.style = "opacity: 0; transform: translateY(-70%); z-index: -1;"
    work.style = "opacity: 0; transform: translate(-50%, -70%); z-index: -1;"
    plan.style = "opacity: 0; transform: translate(-50%, -70%); z-index: -1;"
    contact.style = "opacity: 1; transform: translateY(-50%); z-index: 1; transition: opacity .2s linear .4s"


    c1.style = "unset"
    c2.style = "unset"
    c3.style = "unset"
    c4.style = "unset"
    c5.style = "color: white; border: 2px solid white;"
}