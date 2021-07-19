namespace EIA2Endabgabe {
  export class Referee extends Movable {
    public constructor(_pos: Vector) {
      super(_pos, 4);
    }

    public init(_game: Game): void { return null; }
//Schiedsrichter muss immer prüfen, ob er laufen muss - wenn ja folgt er dem Ball OHNE zum Ball zu gehen 
    public update(_game: Game): void {
      if (this.shouldBeRunning(_game.ball)) {
        this.moveTowards(_game.ball.position);
      }
    }
//Schiedsrichterzeichnen - AußenKreis zur Unterscheidung von Spielern
    public render(_crc2: CanvasRenderingContext2D, _game: Game): void {
      console.log("draw referee");
      _crc2.beginPath();
      _crc2.lineWidth = 2;
      _crc2.fillStyle = "violet";
      _crc2.arc(
        this.position.x,
        this.position.y,
        20,
        0,
        2 * Math.PI,
        false
      );
      _crc2.fill();

      _crc2.beginPath();
      _crc2.lineWidth = 2;
      _crc2.fillStyle = "blue";
      _crc2.arc(
        this.position.x,
        this.position.y,
        10,
        0,
        2 * Math.PI,
        false
      );
      _crc2.fill();
//Radius anzeigen --> DEBUG
      if (DEBUG) {
        _crc2.beginPath();
        _crc2.lineWidth = 2;
        _crc2.strokeStyle = "pink";
        _crc2.arc(
          this.position.x,
          this.position.y,
          (canvas.width * (60 / 90)) / 2, //radius
          0,
          2 * Math.PI,
          false
        );
        _crc2.stroke();
      }
    }
//Befehl, dass Schiedsrichter rennt - zum Ball aber ohne zu nah zu kommen / nur in die Richtung 
    private shouldBeRunning(_ball: Ball): boolean {
      return Vector.getDistance(_ball.position, this.position) > (canvas.width * (60 / 90)) / 2; //smaller than Referee Radius
    }
    
  }
}