namespace L11advanced {

    export abstract class Moveable {

        protected position: Vector;
        protected velocity: Vector;
        protected size: number;

        constructor(_size: number, _position?: Vector) {
            console.log("Moveables constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            
        }

        public draw(): void {
            console.log("Moveables draw");
            
        }

        public move(_timeslice: number): void {
            console.log("Moveables move");

            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
            
        }


    }

}