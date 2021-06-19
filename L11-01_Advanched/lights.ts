namespace L11advanced {

    export class Lights extends Planet {

        constructor(_fillLevel?: number, _position?: Vector) {
            super(_fillLevel, _position);
            //random Vektor auf Wiese
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
            console.log("draw lights");
            crc2.save();

            //Laternenpfahl
            crc2.moveTo(this.position.x, this.position.y);
            crc2.fillStyle = "black";
            crc2.fillRect(this.position.x, this.position.y, 2, 5);
              
            //Licht
            crc2.beginPath();
            crc2.arc(this.position.x + 1, this.position.y - 8, 8, 0, 2 * Math.PI, false);
            crc2.closePath();
            crc2.lineWidth = 5;
            crc2.fillStyle = "yellow";
            crc2.lineWidth = 1;
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.strokeStyle = "white";
            crc2.stroke();

            //Glühbirne
            crc2.beginPath();
            crc2.arc(this.position.x + 1, this.position.y - 8, 4, 0, 2 * Math.PI, false);
            crc2.closePath();
            crc2.lineWidth = 5;
            crc2.fillStyle = "orange";
            crc2.lineWidth = 1;
            crc2.fillStyle = "orange";
            crc2.fill();
            crc2.strokeStyle = "white";
            crc2.stroke();

            crc2.restore();

        }

        public fuel(_timeslice: number): void {
            for (let i: number = 0; i < 10; i++) {
                crc2.save();

                crc2.beginPath();
                crc2.fillRect(this.position.x + 19, this.position.y - 20, 4, this.fillLevel);
                crc2.closePath();
                crc2.fillStyle = "yellow";
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