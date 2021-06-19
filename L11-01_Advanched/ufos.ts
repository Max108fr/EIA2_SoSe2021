namespace L11advanced {

    export class Ufo extends Moveable {

        constructor(_size: number, _position?: Vector) {
            console.log("ufo constructor");
            super(_size, _position);
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(660, 390); // Startposition
                
            this.velocity = new Vector(50, 0);
            this.velocity.random(120, 20);
        }

        draw(): void {
            console.log("create ufo");
            crc2.save();
            crc2.beginPath();

            crc2.beginPath();
            crc2.fillStyle = "HSL(150, 100%, 50%)";
            crc2.arc(this.position.x, this.position.y - 4, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
            crc2.save();
            crc2.beginPath();
            crc2.fillStyle = "HSL(180, 40%, 60%)";
            crc2.ellipse(this.position.x, this.position.y, 8, 35, Math.PI / 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.save();
            crc2.beginPath();
            crc2.beginPath();
            crc2.fillStyle = "HSL(180, 100%, 100%)";
            crc2.arc(this.position.x, this.position.y - 5, 3, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 12, this.position.y - 5, 3, 0, 2 * Math.PI);
            crc2.arc(this.position.x - 12, this.position.y - 5, 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.save();
            let gradient: CanvasGradient = crc2.createLinearGradient(0, this.position.y, 0, crc2.canvas.height);
            gradient.addColorStop(0, "HSLA(110, 100%, 50%, 0.2)");
            gradient.addColorStop(1, "HSLA(140, 100%, 10%, 0.1)");
            crc2.fillStyle = gradient;
            crc2.moveTo(this.position.x , this.position.y + 5 );
            crc2.lineTo(this.position.x + 30, this.position.y + 50);
            crc2.lineTo(this.position.x - 30, this.position.y + 50);
            crc2.fill();
            crc2.closePath();
            crc2.restore();

        }
    }
}






