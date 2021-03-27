"use strict";
console.log("psychic paper shows you what you want to see :");
var L01randomPoem;
(function (L01randomPoem) {
    //Variablen deklarieren
    let subjects = ["The Doctor", "Rose", "The Master", "Donna", "Rory"];
    let predicates = ["fixes", "starts", "fights", "loves", "sonic srcewdrives"];
    let objects = ["the TARDIS", "a desater", "some timey wimey stuff", "the Daleks", "a weeping angel"];
    //Zufallssätze in der Konsole zusammenstellen
    //Für das Gedicht soll die Konsole jeden Arraywert nur einmal ausgeben - runterzählende For-Schleife
    //Jeder Satz soll aus je einem Subjekt, Prädikat und Objekt bestehen
    for (let index = subjects.length; index > 0; index--) {
        let psychicText = getPoem(subjects, predicates, objects);
        console.log(psychicText);
    }
    function getPoem(_subjects, _predicates, _objects) {
        let poem = "";
        let result1 = Math.floor(Math.random() * _subjects.length);
        //Ausgabe Subjekt
        poem += _subjects.splice(result1, 1) + " ";
        let result2 = Math.floor(Math.random() * _predicates.length);
        //Ausgabe Prädikat
        poem += _predicates.splice(result2, 1) + " ";
        let result3 = Math.floor(Math.random() * _objects.length);
        //Ausgabe Objekt
        poem += _objects.splice(result3, 1) + " ";
        //Ausgabe Gedicht
        return poem;
    }
})(L01randomPoem || (L01randomPoem = {}));
//# sourceMappingURL=l01randomPoem.js.map