namespace L1002 {

    export class Lights {

        constructor(_position?: Vector) {
            console.log("draw lights");
        }

        draw(_x: number, _y: number): void {

                for (let index: number = 0; index < 2; index++) {
                let r1: number = 1;
                let r2: number = 15;
                let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            
                gradient.addColorStop(0, "HSLA(310, 90%, 100%, 1");
                gradient.addColorStop(1, "HSLA(310, 100%, 70%, 0.8");
                
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.fillStyle = "black";
                crc2.fillRect(_x - 2, _y + 5, 4, 15); 
        
                crc2.beginPath();
                crc2.fillStyle = gradient;
        
                crc2.moveTo(_x, _y);
                crc2.arc(_x, _y, 15, 0, 2 * Math.PI);
                crc2.fill();
        
                crc2.beginPath();
                crc2.fillStyle = "white";
                crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
            }

        }
    } 
}