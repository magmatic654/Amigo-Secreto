// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let friends = []
let valid_characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let ul_friends = document.getElementById("listaAmigos");
let ul_winner = document.getElementById("resultado");



function getFriend(){
    let friend_label =  document.getElementById("amigo");
    return friend_label.value
}

function setTextToInput(elementID, text){
    let element = document.getElementById(elementID);
    element.value = text;
}

function checkInput(input){
    for(let i = 0; i < input.length; i++){
        if(input[i] === " "){
            continue;
        }
        if(!valid_characters.includes(input[i].toLowerCase())){
            return false;
        }
    }
    return true;
}

function addElementToListHTML(fatherList, text){
    let new_friend = document.createElement("li");
    new_friend.textContent = text;
    fatherList.appendChild(new_friend);
}

function addFriend(){
    let new_friend = getFriend();
    ul_friends.innerHTML = "";
    setTextToInput("amigo", "");
    if(checkInput(new_friend)){
        friends.push(new_friend);
    }
    for(let i = 0; i < friends.length; i++){
        addElementToListHTML(ul_friends, friends[i]);
    }

}

function drawWinner(){
    if(friends.length >= 2){
        let winnerIndex = Math.floor(Math.random() * friends.length);
        ul_winner.innerHTML = "";
        addElementToListHTML(ul_winner, "El ganador es: " + friends[winnerIndex]);
        let buttonDraw = document.querySelector(".button-draw");
        buttonDraw.setAttribute("disabled", "true");
        return winnerIndex;
    }
}
