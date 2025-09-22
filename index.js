let homeScore = document.getElementById("home-score")
const plus1Home = document.getElementById("add-one-home")
const plus2Home = document.getElementById("add-two-home")
const plus3Home = document.getElementById("add-three-home")

let guestScore = document.getElementById("guest-score")
const plus1Guest = document.getElementById("add-one-guest")
const plus2Guest = document.getElementById("add-two-guest")
const plus3Guest = document.getElementById("add-three-guest")

let homeBorder = document.getElementById('home-counter')
let guestBorder = document.getElementById('guest-counter')


let clearButton = document.getElementById("clear-btn")
let saveButton = document.getElementById("save-btn")

let results = document.getElementById("matches")


let homeCounter = 0
let guestCounter = 0

function checkWinner() {

    if (homeCounter > guestCounter) {
        homeBorder.style.borderColor = '#27F549'
        guestBorder.style.borderColor = ''
    }
    if (homeCounter < guestCounter) {
        guestBorder.style.borderColor = '#27F549'
        homeBorder.style.borderColor = ''
    }
    if (homeCounter == guestCounter) {
        guestBorder.style.borderColor = '#2750F5'
        homeBorder.style.borderColor = '#2750F5'
    }

}

function clearBorder() {
    guestBorder.style.borderColor = ''
    homeBorder.style.borderColor = ''
}

function addBtn(rival, number) {
    if (rival == "Home") {
        homeCounter += number;
        homeScore.innerText = homeCounter
    } else {
        guestCounter += number;
        guestScore.innerText = guestCounter;
    }
    checkWinner()
}

function clearCounters() {
    homeCounter = 0
    guestCounter = 0
    homeScore.innerText = homeCounter
    guestScore.innerText = guestCounter
    clearBorder()
}

clearButton.addEventListener("click", () => clearCounters())



plus1Home.addEventListener("click", () => addBtn("Home", 1));
plus2Home.addEventListener("click", () => addBtn("Home", 2));
plus3Home.addEventListener("click", () => addBtn("Home", 3));


plus1Guest.addEventListener("click", () => addBtn("Guest", 1))
plus2Guest.addEventListener("click", () => addBtn("Guest", 2))
plus3Guest.addEventListener("click", () => addBtn("Guest", 3))


saveButton.addEventListener("click", () => saveResult())

function saveResult() {
    const newMatch = document.createElement("p")
    newMatch.textContent = " Home " + homeCounter + " - " + guestCounter + " Guest "
    document.getElementById("results-container").append(newMatch)
    clearCounters()
}