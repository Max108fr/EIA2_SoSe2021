namespace L11advanced {

    export class Alien extends Planet {

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
            console.log("draw Alien");
            crc2.save();
            //Körper
            crc2.moveTo(this.position.x, this.position.y);
            crc2.fillStyle = "green";
            crc2.fillRect(this.position.x, this.position.y, 2, - 20);

            //Kopf
            crc2.beginPath();
            crc2.arc(this.position.x + 1, this.position.y - 25, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.closePath();

            //Arme
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y);
            crc2.moveTo(this.position.x, this.position.y - 18);
            crc2.lineTo(this.position.x + 12, this.position.y - 22);
            crc2.lineTo(this.position.x + 12, this.position.y - 18);
            crc2.lineTo(this.position.x, this.position.y - 14);
            crc2.moveTo(this.position.x, this.position.y - 18);
            crc2.lineTo(this.position.x - 12, this.position.y - 18);
            crc2.lineTo(this.position.x - 12, this.position.y - 14);
            crc2.lineTo(this.position.x, this.position.y - 14);

            crc2.fillStyle = "green";
            crc2.fill();

            //Beine
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x + 10, this.position.y + 5);
            crc2.lineTo(this.position.x + 15, this.position.y + 5);
            crc2.lineTo(this.position.x, this.position.y - 5);
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x - 10, this.position.y + 5);
            crc2.lineTo(this.position.x - 15, this.position.y + 5);
            crc2.lineTo(this.position.x, this.position.y - 5);

            crc2.fillStyle = "green";
            crc2.fill();

            // //Bauch
            crc2.beginPath();
            crc2.arc(this.position.x + 1, this.position.y - 10, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.closePath();

            crc2.restore();

            //Augen 1
            crc2.beginPath();
            crc2.arc(this.position.x - 1, this.position.y - 25, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
            //Augen 2
            crc2.beginPath();
            crc2.arc(this.position.x + 3, this.position.y - 25, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
            //Augen 3
            crc2.beginPath();
            crc2.arc(this.position.x + 2, this.position.y - 26, 1, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
            //Augen 4
            crc2.beginPath();
            crc2.arc(this.position.x - 2, this.position.y - 26, 1, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            crc2.restore();

        }

        public fuel(_timeslice: number): void {
            for (let i: number = 0; i < 10; i++) {
                crc2.save();

                crc2.beginPath();
                crc2.fillRect(this.position.x + 19, this.position.y - 20, 4, this.fillLevel);
                crc2.closePath();
                crc2.fillStyle = "red";
                crc2.strokeStyle = "red";
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