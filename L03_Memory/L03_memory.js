"use strict";
var l03memory;
(function (l03memory) {
    // Seite/Spiel laden, wenn Click-Befehl dazu gegeben
    window.addEventListener("load", startGame);
    function startGame() {
        let startGame = document.querySelector(".start");
        startGame.addEventListener("click", prepareTable);
    }
    let amountPairs;
    let cardID = ["Cow", "Hippo", "Monkey", "Owl", "Pig", "Rhino", "Turtle", "Bear", "Cat", "Dog", "Fox", "Hare", "Lion", "Mouse", "Panda", "Polarbear", "Badger", "Frog", "Bug", "Guinea Pig"];
    let cardArray = [];
    let remainCards = [];
    let formData;
    let cardSize;
    let frontCards = 0;
    let frontCardsArray = [];
    //Aus Eingabe bezogene Werte
    let backgroundColor;
    let backsideColor;
    let fontColor;
    let fontFamily;
    //Erstellen der ausgelegten Karten
    function createCard(_cardID) {
        let card = document.createElement("div");
        card.innerHTML = "<p>" + _cardID + "</p>";
        card.classList.add("card");
        card.classList.add("hidden");
        cardArray.push(card);
        remainCards.push(card);
        card.addEventListener("click", handleLoad);
        card.style.width = cardSize + "px";
        card.style.height = cardSize + "px";
        if (backgroundColor) {
            card.style.backgroundColor = backgroundColor.toString();
        }
        if (backsideColor) {
            card.style.background = backsideColor.toString();
        }
        if (fontColor) {
            card.style.color = fontColor.toString();
        }
        if (fontFamily) {
            card.style.fontFamily = fontFamily.toString();
        }
    }
    //Wenn Karte geklickt - umdrehen - Check Match mit setTimeOut 
    function handleLoad(_event) {
        let target = _event.target;
        if (target.classList.contains("card")) {
            frontCards++;
            if (!(frontCards > 2) && target.classList.contains("hidden") && target != frontCardsArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    frontCardsArray.push(target);
                }
            }
            else {
                frontCards--;
            }
            if (frontCards == 2) {
                setTimeout(checkMatch, 1500);
            }
        }
    }
    // CheckMatch - check remaining Cards
    function checkMatch() {
        if (frontCardsArray[0].innerHTML == frontCardsArray[1].innerHTML) {
            for (let i = 0; i < 2; i++) {
                frontCardsArray[i].classList.remove("open");
                frontCardsArray[i].classList.add("taken");
            }
            remainCards.splice(0, 2);
        }
        else {
            for (let i = 0; i < frontCardsArray.length; i++) {
                frontCardsArray[i].classList.remove("open");
                frontCardsArray[i].classList.add("hidden");
            }
        }
        frontCardsArray = [];
        frontCards = 0;
        checkWin();
    }
    //wenn remainCards==0 --> Spielende 
    function checkWin() {
        if (remainCards.length == 0) {
            setTimeout(function () { }, 1000);
        }
    }
    // tslint:disable-next-line: typedef
    function shuffleArray(_array) {
        for (let i = _array.length - 1; i > 0; i--) {
            const randomNumber = Math.floor(Math.random() * (i + 1));
            const temp = _array[i];
            _array[i] = _array[randomNumber];
            _array[randomNumber] = temp;
        }
        return _array;
    }
    //Wenn Auswahl getroffen --> Settings hidden; Spielfeld Aufbau und Anzeige
    function prepareTable(_event) {
        let form = document.querySelector(".formular");
        form.style.visibility = "hidden";
        formData = new FormData(document.forms[0]);
        cardSize = Number(formData.get("Slider"));
        backgroundColor = formData.get("BGColor");
        backsideColor = formData.get("BSColor");
        fontColor = formData.get("FColor");
        fontFamily = formData.get("radio");
        let pairOfCards = formData.get("Stepper");
        if (pairOfCards) {
            amountPairs = Number(pairOfCards);
        }
        else {
            amountPairs = 2;
        }
        for (let i = 0; i < amountPairs; i++) {
            createCard(cardID[i]);
            createCard(cardID[i]);
        }
        shuffleArray(cardArray);
        for (let i = 0; i < cardArray.length; i++) {
            let playerbox = document.getElementById("playerbox");
            playerbox.appendChild(cardArray[i]);
        }
    }
})(l03memory || (l03memory = {}));
//# sourceMappingURL=L03_memory.js.map