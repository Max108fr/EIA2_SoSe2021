//Quellen: Mit Hilfe von Jonas Scheid; https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API; 

namespace l08canvas {
    
    window.addEventListener("load", generateCanvas);
    
    let crc2: CanvasRenderingContext2D;
    let crc3: CanvasRenderingContext2D;
    let crc4: CanvasRenderingContext2D;

    function generateCanvas(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector(".canvas");
        crc2 = canvas.getContext("2d");
        crc3 = canvas.getContext("2d");
        crc4 = canvas.getContext("2d");

        ball();
        square();
        triangle();
        }


    function ball(): void {
        for (let index: number = 0; index < 5; index++) {

            let firstball: number = Math.floor(Math.random() * 25);
            let secondball: number = Math.floor(Math.random() * 50);
            let thirdball: number = Math.floor(Math.random() * 75);

            crc2.beginPath();

            crc2.arc(Math.floor(Math.random() * (100) + 1), (Math.random() * (100) + 1), (Math.random() * (100) + 1), 0, 5 + Math.PI);

            crc2.fillStyle = "rgb( " + firstball + ", " + secondball + ", " + thirdball + ")";
            crc2.fill();

            crc2.closePath();
            crc2.stroke();
        }

    }
    
    function square(): void {
        for (let i: number = 0; i < 5; i++) {
            let firstsquare: number = Math.floor(Math.random() * 25);
            let secondsquare: number = Math.floor(Math.random() * 25 );
            let thirdsquare: number = Math.floor(Math.random() * 25 );

            crc3.beginPath();
            crc3.moveTo(Math.floor(Math.random() * (500) + 1), Math.floor(Math.random() * (250) + 1));
            crc3.lineTo(Math.floor(Math.random() * (500) + 1), Math.floor(Math.random() * (250) + 1));
            crc3.lineTo(Math.floor(Math.random() * (500) + 1), Math.floor(Math.random() * (250) + 1));
            crc3.lineTo(Math.floor(Math.random() * (500) + 1), Math.floor(Math.random() * (250) + 1));

            crc3.stroke();
            crc3.closePath();
            
            crc3.fillStyle = "rgb(" + firstsquare + ", " + secondsquare + "," + thirdsquare + ")";
            crc3.fill();

        }
    }

    function triangle(): void {
        for (let index: number = 0; index < 5; index++) {

            let firsttriangle: number = Math.floor(Math.random() * 25);
            let secondtriangle: number = Math.floor(Math.random() * 50);
            let thirdtriangle: number = Math.floor(Math.random() * 75);

            crc4.beginPath();

            crc4.moveTo(Math.floor(Math.random() * (100) + 1), Math.floor(Math.random() * (100) + 1));
            crc4.lineTo(Math.floor(Math.random() * (150) + 1), Math.floor(Math.random() * (150) + 1));
            crc4.lineTo(Math.floor(Math.random() * (200) + 1), Math.floor(Math.random() * (200) + 1));
            crc4.lineTo(Math.floor(Math.random() * (350) + 1), Math.floor(Math.random() * (250) + 1));

            crc4.fillStyle = "rgb( " + firsttriangle + ", " + secondtriangle + ", " + thirdtriangle + ")";
            crc4.fill();

            crc4.closePath();
            crc4.stroke();
    }
}