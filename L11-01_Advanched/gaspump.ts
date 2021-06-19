namespace L11advanced {

    export class Gaspump extends Planet {

        constructor(_fillLevel?: number, _position?: Vector) {
            super(_fillLevel, _position);
            let randomX: number = Math.floor(Math.random() * 900) + 100; 
            let randomY: number = Math.floor(Math.random() * 200) + 350;
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(randomX, randomY);

            let randomFill: number = Math.floor(Math.random() * 50);
           
            if (_fillLevel)
                this.fillLevel = _fillLevel;
            else
                this.fillLevel = randomFill;
            
            this.velocity = new Vector(0, 0);

        }

        draw(): void {
            console.log("draw pump");

            crc2.save();
            
            //Zapfsäule
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x, this.position.y - 20);
            crc2.lineTo(this.position.x + 15, this.position.y - 20);
            crc2.lineTo(this.position.x + 15, this.position.y);
            crc2.lineTo(this.position.x, this.position.y);

            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "silver";
            crc2.fill();
            
            //Schild 1
            crc2.beginPath();
            crc2.ellipse(this.position.x + 7.5, this.position.y - 24, 7, 10, Math.PI / 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.lineWidth = 1;
            crc2.fillStyle = "whithe";
            crc2.lineWidth = 2;
            crc2.fillStyle = "blue";
            crc2.fill();

            //Schild 2
            crc2.beginPath();
            crc2.ellipse(this.position.x + 7.5, this.position.y - 24, 2, 6, Math.PI / 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.lineWidth = 1;
            crc2.fillStyle = "pink";
            crc2.lineWidth = 2;
            crc2.fillStyle = "pink";
            crc2.fill();
            
            //Tankschlauch
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y - 20);
            crc2.lineTo(this.position.x, this.position.y - 25);
            crc2.lineTo(this.position.x - 1, this.position.y - 25);
            crc2.lineTo(this.position.x - 3, this.position.y - 22.5);
            crc2.lineTo(this.position.x - 3, this.position.y - 10);
            crc2.lineTo(this.position.x - 1, this.position.y - 7.5);
            crc2.moveTo(this.position.x - 1, this.position.y - 20);
            crc2.moveTo(this.position.x, this.position.y - 20);
            crc2.closePath();
            crc2.lineWidth = 1;
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.restore();
        }

        public fuel(_timeslice: number): void {
            for (let i: number = 0; i < 10; i++) {
                crc2.save();

                crc2.beginPath();
                crc2.fillRect(this.position.x + 19, this.position.y - 20, 4, this.fillLevel);
                crc2.closePath();
                crc2.fillStyle = "pink";
                crc2.strokeStyle = "black";
                crc2.fill();
                crc2.stroke();
                }
            let offset: Vector = this.velocity.copy(); 
            offset.scale(_timeslice);
            this.position.add(offset);
    
            if (this.fillLevel < 50)
                    this.fillLevel += 0.02;
            if (this.fillLevel > 50)
                    this.fillLevel -= this.fillLevel;

            crc2.restore();
        }

    }

}