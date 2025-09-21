let homeScore = document.getElementById("home-score")
const plus1Home = document.getElementById("add-one-home")
const plus2Home = document.getElementById("add-two-home")
const plus3Home = document.getElementById("add-three-home")

let guestScore = document.getElementById("guest-score")
const plus1Guest = document.getElementById("add-one-guest")
const plus2Guest = document.getElementById("add-two-guest")
const plus3Guest = document.getElementById("add-three-guest")



let homeCounter = 0
let guestCounter = 0

function addBtn(rival, number){
    if (rival == "Home"){
        homeCounter += number;
        homeScore.innerText = homeCounter
    }else{
        
    }
}

plus1Home.addEventListener("click", () => addBtn("Home", 1));
plus2Home.addEventListener("click", () => addBtn("Home", 2));
plus3Home.addEventListener("click", () => addBtn("Home", 3));

