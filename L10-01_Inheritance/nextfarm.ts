// L09.01 Basis für 10.01/.02
// Quellen: Invertedclassroom 09.01/10.01/.02; Inspriationen von Mona Kabelka

//Einarbeitung der L01.01 Änderungen in Code je nach Zeit bis Sa.23.59

namespace Park {
    let counter: number = 0;
    let textDOMElement: HTMLElement;
    let dayTime: HTMLElement = <HTMLElement>document.querySelector("#daytime");

    interface Stock {
        name: string;
        amount: number;
    }

    let stockAmount: Stock[] = [{
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

    function handleLoad(): void {
        farmDay();
        document.querySelector("#newDay")?.addEventListener("click", farmDay);
        document.querySelector("#stockUp")?.addEventListener("click", stockUp);
    }

    class Animal {
        public name: string;
        public breed: string;
        public sound: string;

        public constructor(_name: string, _breed: string, _sound: string) {
            this.name = _name;
            this.breed = _breed;
            this.sound = _sound;
        }

        public eat(_foodAmount: number, _foodPos: number): void {
            stockAmount[_foodPos].amount -= _foodAmount;
            textDOMElement = <HTMLElement>document.querySelector("#animal" + _foodPos);
            textDOMElement.innerHTML = "John Hammond has <i>" + stockAmount[_foodPos].amount + "</i>" + "kg " + stockAmount[_foodPos].name + " left.";
            console.log(this.breed + " " + this.name + " eats " + _foodAmount  + "kg " + stockAmount[_foodPos].name + ". John Hammond has " + stockAmount[_foodPos].amount + " kg " + stockAmount[_foodPos].name + " left.");
            let eatingDOMElement: HTMLElement = <HTMLElement>document.querySelector("#eatingFood");
            eatingDOMElement.innerHTML = this.name + " eats " + _foodAmount + "kg " + stockAmount[_foodPos].name + ". <br>";
        }

        public sing(_foodAmount: number): void {
            let animalNameDOMElement: HTMLElement = <HTMLElement>document.querySelector("#animalName");
            let songDOMElement: HTMLElement = <HTMLElement>document.querySelector("#songText");

            animalNameDOMElement.innerHTML = this.breed + "  " + this.name;
            songDOMElement.innerHTML = "Old John Hammond had a park " + "<br>" + (this.sound + " ").repeat(5) + "<br>" + "And in his park he had some " + this.breed + "<br>" + (this.sound + " ").repeat(4) + "<br>";
        }
    }

    function farmDay(): void {
        dayTime.innerHTML = "It's a new day!";

        let triceratops: Animal = new Animal("Trixy", "Triceratops", "tritra");
        setTimeout(function (): void {
            triceratops.eat(600, 4);
            triceratops.sing(50);
        },         100);

        let stegosaurus: Animal = new Animal("Sunny", "Stegosaurus", "schubi");
        setTimeout(function (): void {
            stegosaurus.eat(1000, 2);
            stegosaurus.sing(2);
        },         2500);

        let mosasaurus: Animal = new Animal("Molly", "Mosasaurus", "blubblub");
        setTimeout(function (): void {
            mosasaurus.eat(400, 1);
            mosasaurus.sing(40);
        },         5000);

        let brachiosaurus: Animal = new Animal("Betty", "Brachiosaurus", "stampfl");
        setTimeout(function (): void {
            brachiosaurus.eat(200, 3);
            brachiosaurus.sing(20);
        },         7500);
        
        let trex: Animal = new Animal("Ronny", "T-Rex", "grrgrrr");
        setTimeout(function (): void {
            trex.eat(500, 0);
            trex.sing(3);
        },         10000);

        setTimeout(function (): void {
            dayTime.innerHTML = "Day's over! Start a new day on the button below.";
        },         11000);
        
        let dayCounter: HTMLElement = <HTMLElement>document.querySelector("#dayCounter");
        counter++;
        dayCounter.innerHTML = "Day: " + counter;
        console.log("Day: " + counter);
    }

    function stockUp(): void {
        let fullStock: number[] = [5000, 4000, 10000, 8000, 6000];
        for (let index: number = 0; index < fullStock.length; index++) {
            stockAmount[index].amount = fullStock[index];
            textDOMElement = <HTMLElement>document.querySelector("#animal" + index);
            textDOMElement.innerHTML = "John Hammond has " + stockAmount[index].amount + "kg " + stockAmount[index].name + " left.";
        }
    }
}