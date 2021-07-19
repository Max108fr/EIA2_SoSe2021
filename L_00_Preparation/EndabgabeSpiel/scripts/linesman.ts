namespace EIA2Endabgabe {
  export class Linesman extends Movable {
    public constructor(_pos: Vector) {
      super(_pos, 5);
    }

    public init(_game: Game): void {
      return;
    }
//Linienrichter checken immer ob der Ball "y über (-)" oder "y unter (+)" ihnen ist und müssen dementsprechend laufen
    public update(_game: Game): void {
      if (_game.ball.position.y < this.position.y) {
        this.position.y -= this.speed;
      } else if (_game.ball.position.y > this.position.y) {
        this.position.y += this.speed;
      }
    }
    public render(_crc2: CanvasRenderingContext2D, _game: Game): void {
      console.log("draw linesmen");
      _crc2.beginPath();
      _crc2.lineWidth = 2;
      _crc2.fillStyle = "orange";
      _crc2.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI, false);
      _crc2.fill();

      _crc2.beginPath();
      _crc2.lineWidth = 2;
      _crc2.fillStyle = "silver";
      _crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI, false);
      _crc2.fill();
    }
  }
}