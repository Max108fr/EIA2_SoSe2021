namespace l03memory {

    // Seite/Spiel laden, wenn Click-Befehl dazu gegeben
    window.addEventListener("load", startGame);
    function startGame(): void {
        let startGame: HTMLElement = <HTMLElement>document.querySelector(".start");
        startGame.addEventListener("click", prepareTable);
    }
    let amountPairs: number;
    let cardID: string[] = ["Cow", "Hippo", "Monkey", "Owl", "Pig", "Rhino", "Turtle", "Bear", "Cat", "Dog", "Fox", "Hare", "Lion", "Mouse", "Panda", "Polarbear", "Badger", "Frog", "Bug", "Guinea Pig"];
    let cardArray: HTMLElement[] = [];
    let remainCards: HTMLElement[] = [];
    let formData: FormData;
    let cardSize: number;
    let frontCards: number = 0;
    let frontCardsArray: HTMLElement[] = [];
    //Aus Eingabe bezogene Werte
    let backgroundColor: FormDataEntryValue; 
    let backsideColor: FormDataEntryValue;
    let fontColor: FormDataEntryValue;
    let fontFamily: FormDataEntryValue;
    
    //Erstellen der ausgelegten Karten
    function createCard(_cardID: string): void {
            let card: HTMLElement = document.createElement("div");
    
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
    function handleLoad (_event: Event): void {
            let target: HTMLElement = <HTMLElement>_event.target;
            if (target.classList.contains("card")) {
                frontCards++;
                if (!(frontCards > 2) && target.classList.contains("hidden") && target != frontCardsArray[0]) {
                    if (target.classList.contains("hidden")) {
                        target.classList.remove("hidden");
                        target.classList.add("open");
                        frontCardsArray.push(target);
                    }
                } else {
                    frontCards--;
                }
                if (frontCards == 2) {
                    setTimeout(checkMatch, 1500);
                }
            }
        }
        // CheckMatch - check remaining Cards
    function checkMatch(): void {
            if (frontCardsArray[0].innerHTML == frontCardsArray[1].innerHTML) {
                for (let i: number = 0; i < 2; i++) {
                    frontCardsArray[i].classList.remove("open");
                    frontCardsArray[i].classList.add("taken");
                }
                remainCards.splice(0, 2);
            } else {
                for (let i: number = 0; i < frontCardsArray.length; i++) {
                    frontCardsArray[i].classList.remove("open");
                    frontCardsArray[i].classList.add("hidden");
                }
            }
            frontCardsArray = [];
            frontCards = 0;
            checkWin();
        }
    //wenn remainCards==0 --> Spielende 
    function checkWin(): void {
            if (remainCards.length == 0) {
                setTimeout(function(): void {},     1000);            }
        }
    
    // tslint:disable-next-line: typedef
    function shuffleArray (_array): void {
            for (let i: number = _array.length - 1; i > 0; i--) {
                const randomNumber: number = Math.floor(Math.random() * (i + 1));
                const temp: number = _array[i];
                _array[i] = _array[randomNumber];
                _array[randomNumber] = temp;
            }
            return _array;
        }
    //Wenn Auswahl getroffen --> Settings hidden; Spielfeld Aufbau und Anzeige
    function prepareTable(_event: Event): void {
    
            let form: HTMLFormElement = <HTMLFormElement>document.querySelector(".formular");
            form.style.visibility = "hidden";

            formData = new FormData(document.forms[0]); 
            cardSize = Number(formData.get("Slider")); 
            backgroundColor = formData.get("BGColor"); 
            backsideColor = formData.get("BSColor"); 
            fontColor = formData.get("FColor"); 
            fontFamily = formData.get("radio"); 
    
            let pairOfCards: FormDataEntryValue = formData.get("Stepper"); 
            if (pairOfCards) {
            amountPairs = Number(pairOfCards);
            }
            else {
                amountPairs = 2;
            }
            for (let i: number = 0; i < amountPairs; i++) {
                createCard(cardID[i]);
                createCard(cardID[i]);
            }
    
            shuffleArray(cardArray);
    
            for (let i: number = 0; i < cardArray.length; i++) {
                let playerbox: HTMLDivElement = <HTMLDivElement>document.getElementById("playerbox");
                playerbox.appendChild(cardArray[i]);
            }
        }
    }