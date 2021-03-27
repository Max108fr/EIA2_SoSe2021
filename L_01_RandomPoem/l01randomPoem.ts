console.log("psychic paper shows you what you want to see :");
namespace L01randomPoem {

//Variablen deklarieren
    let subjects: string[] = ["The Doctor", "Rose", "The Master", "Donna", "Rory"];
    let predicates: string[] = ["fixes", "starts", "fights", "loves", "sonic srcewdrives"];
    let objects: string[] = ["the TARDIS", "a desater", "some timey wimey stuff", "the Daleks", "a weeping angel"];

//Zufallssätze in der Konsole zusammenstellen

//Für das Gedicht soll die Konsole jeden Arraywert nur einmal ausgeben - runterzählende For-Schleife
//Jeder Satz soll aus je einem Subjekt, Prädikat und Objekt bestehen
    for (let index: number = subjects.length; index > 0; index--) {
        let psychicText: string = getPoem(subjects, predicates, objects);
        console.log(psychicText); 
    }

    function getPoem(_subjects: string[], _predicates: string[], _objects: string[]): string {
        let poem: string = "";
        let result1: number = Math.floor(Math.random() * _subjects.length);
//Ausgabe Subjekt
        poem += _subjects.splice(result1, 1) + " ";

        let result2: number = Math.floor(Math.random() * _predicates.length);
//Ausgabe Prädikat
        poem += _predicates.splice(result2, 1) + " ";

        let result3: number = Math.floor(Math.random() * _objects.length);
//Ausgabe Objekt
        poem += _objects.splice(result3, 1) + " ";
//Ausgabe Gedicht
        return poem;
    }


}