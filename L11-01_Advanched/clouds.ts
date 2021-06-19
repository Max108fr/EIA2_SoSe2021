namespace L11advanced {

    export class Cloud extends Moveable {

    constructor(_size: number, _position?: Vector) {
            console.log("cloud constructor");
            super(_size, _position);
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 60); // Startposition        
            this.velocity = new Vector(40, - 3.5);

            this.size = _size;
        }

    draw(): void {
            console.log("create cloud");

            let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("#screen");
            let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
            let particleNumber: number = 30;
            let particleRadius: number = 20;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);
            gradient.addColorStop(0, "HSL(150, 100%, 80%)");
            gradient.addColorStop(1, ("HSL(150, 50%, 90%)"));
            particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
            particle.arc(50, 0, 30, 0,  2 * Math.PI);
            particle.arc(30, 0, particleRadius, 0,  2 * Math.PI);
            particle.arc(60, -20, particleRadius, 0,  2 * Math.PI);
            particle.arc(50, -10, particleRadius, 0,  2 * Math.PI);
            particle.arc(80, 0, particleRadius, 0,  2 * Math.PI);
            particle.arc(30, 5, 30, 0,  2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.fill();
                             
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;

            for (let i: number = 0; i < particleNumber; i++) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.fill(particle);
                crc2.restore();
            }

            crc2.restore();
            
        }

    }

}