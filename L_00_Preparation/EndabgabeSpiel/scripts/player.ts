namespace EIA2Endabgabe {
  export type Team = 1 | 2;
  export class Player extends Movable {
    public inaccuracy: number;
    public team: Team;
    public speed: number;
    public playerNumber: number;
    private origPosition: Vector;
//Informationen, die jeder Spieler braucht - Skills, Nummer, Farbe, Position
    public constructor(
      _position: Vector,
      _playerNumber: number,
      _speed: number,
      _inaccuracy: number,
      _team: Team
    ) {
      super(_position, _speed);
      this.origPosition = _position.copy();
      this.playerNumber = _playerNumber;
      this.speed = _speed;
      this.inaccuracy = _inaccuracy;
      this.team = _team;
    }
//Wenn Spieler angeklickt wird - zeigt Spielerinformationen == jetzt selectedPlayer
    public init(_game: Game): void {
      document.addEventListener("click", (e) => {
        if (this.mouseCollision()) {
          this.showInformation();
        }
      });
    }

    public makeSelectedPlayer(): void {
      const selectedPlayer: HTMLElement =
        document.getElementById("selectedPlayer");
      selectedPlayer.innerHTML =
        this.team === 1
          ? (-1 * this.playerNumber).toString()
          : this.playerNumber.toString();
    }
//Anzeige der Stats/Skills
    public showInformation(): void {
      this.makeSelectedPlayer();

      const numberEl: HTMLElement = document.getElementById("displayNumber");
      numberEl.innerHTML = this.playerNumber.toString();

      const teamEl: HTMLElement = document.getElementById("displayTeam");
      teamEl.innerHTML = this.team.toString();

      const inaccuracyEl: HTMLElement =
        document.getElementById("displayInaccuracy");
      inaccuracyEl.innerHTML = (this.inaccuracy * 100).toFixed(2) + "%";

      const speedEl: HTMLElement = document.getElementById("displaySpeed");
      speedEl.innerHTML = this.speed.toString();
    }
//Wenn der Spieler den Ball berührt: --> ActivateShooting, alles steht bis geklickt wird - für Schuß muss Inacuraccy einen random ausgeben für Zielort des Balls/Schussvector
    public update(_game: Game): void {
      if (this.ballCollision(_game.ball)) {
        _game.activateShooting();
        _game.ballPosession =
          this.team === 1 ? -1 * this.playerNumber : this.playerNumber;
        _game.updateGameInfo();
        const shootBall: () => void = (): void => {
          const diff: Vector = Vector.getDifference(mouse, _game.ball.position);

          const inaccuracy: number =
            randomBetween(-0.25, 0.25) * this.inaccuracy;
          const angle: number = Math.atan2(diff.y, diff.x) + inaccuracy;
          const vx: number = Math.cos(angle);
          const vy: number = Math.sin(angle);
          const vel: Vector = new Vector(vx, vy).scale(15);

          _game.ball.vel = vel.copy();

//Ball soll außerhalb der Spielfigur angezeigt werden + vel (vor Schuß)
          while (this.ballCollision(_game.ball)) {
            _game.ball.position.add(vel);
          }
//Sobald geschossen wurde läuft das Spiel weiter -> Listener für nächsten Schuss
          _game.state = GameState.RUNNING;

          canvas.removeEventListener("click", shootBall);
        };
        canvas.addEventListener("click", shootBall);
        return;
      }

//Spieler muss permanent überprüfen, ob der Ball im Radius ist - wenn Ja --> Bewegung "moveTowards" --> wenn Nein "stehen und überprüfen"
      if (this.shouldBeRunning(_game.ball)) {
        this.moveTowards(_game.ball.position);
      } else {
        this.moveTowards(this.origPosition);
      }
    }
    public render(_crc2: CanvasRenderingContext2D, _game: Game): void {
      console.log("draw players");
      const color: string = this.team === 1 ? _game.team1Color : _game.team2Color;

      _crc2.beginPath();
      _crc2.lineWidth = 2;
      _crc2.fillStyle = color;
      _crc2.arc(
        this.position.x,
        this.position.y,
        20, //20 = Player size
        0,
        2 * Math.PI,
        false
      );
      _crc2.fill();

      _crc2.fillStyle = "black";
      _crc2.font = "27px Arial";
      const digits: number = this.playerNumber.toString().length;
      _crc2.fillText(
        this.playerNumber.toString(),
        this.position.x - 8 * digits,
        this.position.y + 10
      );

      const selectedPlayer: Player | undefined = _game.getSelectedPlayer();
      if (selectedPlayer) {
        const isSelected: boolean = this.equals(selectedPlayer);
        if (isSelected) {
          _crc2.beginPath();
          _crc2.lineWidth = 2;
          _crc2.strokeStyle = "yellow";
          _crc2.arc(
            this.position.x,
            this.position.y,
            20,  //20 = Player size
            0,
            2 * Math.PI,
            false
          );
          _crc2.stroke();
        }
      }
//Radius anzeigen --> DEBUG
      if (DEBUG) {
        _crc2.beginPath();
        _crc2.lineWidth = 2;
        _crc2.strokeStyle = "red";
        _crc2.arc(
          this.position.x,
          this.position.y,
          (canvas.width * (30 / 90)) / 2, //Radius
          0,
          2 * Math.PI,
          false
        );
        _crc2.stroke();
      }
    }
//Wenn der Spieler den Ball in seinem Radius erkennt muss er in die Richtung im richtigen Winkel und mit seiner radomized Geschwindigkeit zum Ball 
    private shouldBeRunning(_ball: Ball): boolean {
      return Vector.getDistance(_ball.position, this.position) <= (canvas.width * (30 / 90)) / 2;
    }
//Checken "Mausberührung" und "Ballberührung"
    private ballCollision(_ball: Ball): boolean {
      const r: number = 20 + _ball.radius; //20 = Player size
      return Vector.getDistance(_ball.position, this.position) <= r;
    }

    private mouseCollision(): boolean {
      return Vector.getDistance(mouse, this.position) <= 20;  //20 = Player size
    }
//Keine Nummern doppelt im Spiel
    private equals(_other: Player): boolean {
      return (
        _other.playerNumber === this.playerNumber && _other.team === this.team
      );
    }
  }
}