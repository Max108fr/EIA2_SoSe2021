namespace EIA2Endabgabe {
  export class Ball extends Movable {
    public radius: number;
    public vel: Vector = new Vector(0, 0);

    public constructor(_radius: number, _pos: Vector) {
      super(_pos, 0);
      this.radius = _radius;
    }

    public init(_game: Game): void {
      return;
    }
//Ballbewegungsgeschwindigtkeit mit "Verlangsamung"
    public update(_game: Game): void {
      this.position.add(this.vel);
      this.vel.scale(0.95);
    }
    
    public render(_crc2: CanvasRenderingContext2D, _game: Game): void {
      console.log ("draw Ball");
      _crc2.beginPath();
      _crc2.lineWidth = 2;
      _crc2.strokeStyle = "black";
      _crc2.fillStyle = "white";
      _crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
      _crc2.fill();
      _crc2.stroke();
      _crc2.beginPath();
      _crc2.lineWidth = 2;
      _crc2.fillStyle = "black";
      _crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI, false);
      _crc2.fill();
      _crc2.beginPath();
      _crc2.lineWidth = 2;
      _crc2.fillStyle = "black";
      _crc2.arc(this.position.x - 8, this.position.y - 8, 5, 0, 2 * Math.PI, false);
      _crc2.fill();
      _crc2.beginPath();
      _crc2.lineWidth = 2;
      _crc2.fillStyle = "black";
      _crc2.arc(this.position.x + 8, this.position.y + 8, 5, 0, 2 * Math.PI, false);
      _crc2.fill();
      _crc2.beginPath();
      _crc2.lineWidth = 2;
      _crc2.fillStyle = "black";
      _crc2.arc(this.position.x - 8, this.position.y + 8, 5, 0, 2 * Math.PI, false);
      _crc2.fill();
      _crc2.beginPath();
      _crc2.lineWidth = 2;
      _crc2.fillStyle = "black";
      _crc2.arc(this.position.x + 8, this.position.y - 8, 5, 0, 2 * Math.PI, false);
      _crc2.fill();
        }
  }
}