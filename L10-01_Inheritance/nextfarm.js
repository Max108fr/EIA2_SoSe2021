"use strict";
var Park;
(function (Park) {
    let counter = 0;
    let textDOMElement;
    let dayTime = document.querySelector("#daytime");
    let stockAmount = [{
            name: "meat",
            amount: 5000
        },
        {
            name: "fish",
            amount: 4000
        },
        {
            name: "grass",
            amount: 10000
        },
        {
            name: "treeleafs",
            amount: 8000
        },
        {
            name: "ferns",
            amount: 6000
        }
    ];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        farmDay();
        document.querySelector("#newDay")?.addEventListener("click", farmDay);
        document.querySelector("#stockUp")?.addEventListener("click", stockUp);
    }
    class Animal {
        constructor(_name, _breed, _sound) {
            this.name = _name;
            this.breed = _breed;
            this.sound = _sound;
        }
        eat(_foodAmount, _foodPos) {
            stockAmount[_foodPos].amount -= _foodAmount;
            textDOMElement = document.querySelector("#animal" + _foodPos);
            textDOMElement.innerHTML = "John Hammond has <i>" + stockAmount[_foodPos].amount + "</i>" + "kg " + stockAmount[_foodPos].name + " left.";
            console.log(this.breed + " " + this.name + " eats " + _foodAmount + "kg " + stockAmount[_foodPos].name + ". John Hammond has " + stockAmount[_foodPos].amount + " kg " + stockAmount[_foodPos].name + " left.");
            let eatingDOMElement = document.querySelector("#eatingFood");
            eatingDOMElement.innerHTML = this.name + " eats " + _foodAmount + "kg " + stockAmount[_foodPos].name + ". <br>";
        }
        sing(_foodAmount) {
            let animalNameDOMElement = document.querySelector("#animalName");
            let songDOMElement = document.querySelector("#songText");
            animalNameDOMElement.innerHTML = this.breed + "  " + this.name;
            songDOMElement.innerHTML = "Old John Hammond had a park " + "<br>" + (this.sound + " ").repeat(5) + "<br>" + "And in his park he had some " + this.breed + "<br>" + (this.sound + " ").repeat(4) + "<br>";
        }
    }
    function farmDay() {
        dayTime.innerHTML = "It's a new day!";
        let triceratops = new Animal("Trixy", "Triceratops", "tritra");
        setTimeout(function () {
            triceratops.eat(600, 4);
            triceratops.sing(50);
        }, 100);
        let stegosaurus = new Animal("Sunny", "Stegosaurus", "schubi");
        setTimeout(function () {
            stegosaurus.eat(1000, 2);
            stegosaurus.sing(2);
        }, 2500);
        let mosasaurus = new Animal("Molly", "Mosasaurus", "blubblub");
        setTimeout(function () {
            mosasaurus.eat(400, 1);
            mosasaurus.sing(40);
        }, 5000);
        let brachiosaurus = new Animal("Betty", "Brachiosaurus", "stampfl");
        setTimeout(function () {
            brachiosaurus.eat(200, 3);
            brachiosaurus.sing(20);
        }, 7500);
        let trex = new Animal("Ronny", "T-Rex", "grrgrrr");
        setTimeout(function () {
            trex.eat(500, 0);
            trex.sing(3);
        }, 10000);
        setTimeout(function () {
            dayTime.innerHTML = "Day's over! Start a new day on the button below.";
        }, 11000);
        let dayCounter = document.querySelector("#dayCounter");
        counter++;
        dayCounter.innerHTML = "Day: " + counter;
        console.log("Day: " + counter);
    }
    function stockUp() {
        let fullStock = [5000, 4000, 10000, 8000, 6000];
        for (let index = 0; index < fullStock.length; index++) {
            stockAmount[index].amount = fullStock[index];
            textDOMElement = document.querySelector("#animal" + index);
            textDOMElement.innerHTML = "John Hammond has " + stockAmount[index].amount + "kg " + stockAmount[index].name + " left.";
        }
    }
})(Park || (Park = {}));
//# sourceMappingURL=nextfarm.js.map