const funnyWeb = document.getElementById("funny-web")
const wicked = document.getElementById("wicked")
const twisted = document.getElementById("twisted")
const inter = document.getElementById("interesting")
const jokeBtn = document.getElementById("jokeBtn")
const jokeScreen = document.getElementById("jokeScreen")

function funnyWebANIM() {

    setTimeout(() => {
        funnyWeb.classList.remove("animate__fadeInLeftBig")
        funnyWeb.classList.add("animate__fadeOutLeftBig")
    }, 2000);
    setTimeout(() => {
        funnyWeb.classList.remove("animate__fadeOutLeftBig")
        funnyWeb.classList.add("animate__fadeInLeftBig")
    }, 4000);
    setTimeout(() => {
        funnyWeb.classList.remove("animate__fadeInLeftBig")
        funnyWeb.classList.add("animate__fadeOutLeftBig")
    }, 6000);
    setTimeout(() => {
        funnyWeb.classList.remove("animate__fadeOutLeftBig")
        funnyWeb.classList.add("animate__fadeInLeftBig")
    }, 8000);
    setTimeout(() => {
        funnyWebANIM()
    }, 8100);
}
funnyWebANIM()


function twistedANIM() {

    setTimeout(() => {
        twisted.classList.remove("animate__fadeInDownBig")

        twisted.classList.remove("animate__slideInDown")
        twisted.classList.add("animate__slideOutUp")
    }, 2000);
    setTimeout(() => {
        twisted.classList.remove("animate__slideOutUp")
        twisted.classList.add("animate__slideInDown")
    }, 4000);
    setTimeout(() => {
        twisted.classList.remove("animate__slideInDown")
        twisted.classList.add("animate__slideOutUp")
    }, 6000);
    setTimeout(() => {
        twisted.classList.remove("animate__slideOutUp")
        twisted.classList.add("animate__slideInDown")
    }, 8000);
    setTimeout(() => {
        twistedANIM()
    }, 8100);
}
twistedANIM()


function interANIM() {

    setTimeout(() => {
        inter.classList.remove("animate__fadeInTopLeft")

        inter.classList.remove("animate__slideInOutUp")
        inter.classList.add("animate__slideOutUp")
    }, 2000);
    setTimeout(() => {
        inter.classList.remove("animate__slideOutUp")
        inter.classList.add("animate__slideInDown")
    }, 4000);
    setTimeout(() => {
        inter.classList.remove("animate__slideInDown")
        inter.classList.add("animate__slideOutUp")
    }, 6000);
    setTimeout(() => {
        inter.classList.remove("animate__slideOutUp")
        inter.classList.add("animate__slideInDown")
    }, 8000);
    setTimeout(() => {
        interANIM()
    }, 8100);
}
interANIM()

function jokeANIM() {

    setTimeout(() => {
        jokeBtn.classList.remove("animate__fadeInDownBig")
        jokeBtn.classList.add("animate__fadeOutUpBig")
    }, 2000);
    setTimeout(() => {
        jokeBtn.classList.remove("animate__fadeOutUpBig")
        jokeBtn.classList.add("animate__fadeInDownBig")
    }, 4000);
    setTimeout(() => {
        jokeBtn.classList.remove("animate__fadeInDownBig")
        jokeBtn.classList.add("animate__fadeOutUpBig")
    }, 6000);
    setTimeout(() => {
        jokeBtn.classList.remove("animate__fadeOutUpBig")
        jokeBtn.classList.add("animate__fadeInDownBig")
    }, 8000);
    setTimeout(() => {
        jokeANIM()
    }, 8100);
}
jokeANIM()

jokeBtn.addEventListener('click', ()=> {
    jokeScreen.scrollIntoView();

    const errorMSG = document.getElementById("msg")
    errorMSG.innerText = "Sorry :/ no joke today."

    jokeScreen.appendChild(errorMSG)
})


/* i tried :(*/

// const img1 = document.getElementById("img1").addEventListener('click', ()=> {

//     img1.classList.add("animate__animated")
//     img1.classList.add("animate__flipOutY")
    
// })

// const img2 = document.getElementById("img2").addEventListener('click', ()=> {

// })

// const img3 = document.getElementById("img3").addEventListener('click', ()=> {

// })

// const img4 = document.getElementById("img4").addEventListener('click', ()=> {

// })

// const img5 = document.getElementById("img5").addEventListener('click', ()=> {

// })

// const img6 = document.getElementById("img6").addEventListener('click', ()=> {

// })

// const img7 = document.getElementById("img7").addEventListener('click', ()=> {

// })

// const img8 = document.getElementById("img8").addEventListener('click', ()=> {

// })

