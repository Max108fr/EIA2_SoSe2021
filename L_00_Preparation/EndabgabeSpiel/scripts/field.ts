namespace EIA2Endabgabe {
  export class Field {
    public width: number;
    public height: number;

    private goalTeam1: Rectangle;
    private goalTeam2: Rectangle;

    public constructor(_width: number, _height: number) {
      this.width = _width;
      this.height = _height;

      const goalWidth: number = 200;
      const goalHeight: number = 5;
      this.goalTeam1 = new Rectangle(
        new Vector((this.width - goalWidth) / 2, 0),
        goalWidth,
        goalHeight
      );
      this.goalTeam2 = new Rectangle(
        new Vector((this.width - goalWidth) / 2, this.height - goalHeight),
        goalWidth,
        goalHeight
      );

    }
//Torkontrolle 
    public update(_game: Game): void {
      
      if (this.checkGoal1(_game.ball)) {
        _game.scoreTeam2 += 1;
        _game.updateGameInfo();
        _game.resetBall(2);
      } else if (this.checkGoal2(_game.ball)) {
        _game.scoreTeam1 += 1;
        _game.updateGameInfo();
        _game.resetBall(1);
      }
//Auskontrolle
      if (this.outOfPlay(_game)) {
        _game.resetBall();
           }
    }

    public render(_crc2: CanvasRenderingContext2D, _game: Game): void {
        console.log ("draw football field");
//Mittellinie
        _crc2.strokeStyle = "white";
        _crc2.lineWidth = 2;
        _crc2.beginPath();
        _crc2.moveTo(0, this.height / 2);
        _crc2.lineTo(this.width, this.height / 2);
        _crc2.stroke();
  
//Außengrenze
        _crc2.strokeStyle = "white";
        _crc2.lineWidth = 4;
        _crc2.strokeRect(0, 0, this.width, this.height);

//Strafraum Team1
        _crc2.strokeStyle = "white";
        _crc2.lineWidth = 2;
        _crc2.strokeRect(150, 785, 400, 125);

        _crc2.strokeStyle = "white";
        _crc2.lineWidth = 2;
        _crc2.strokeRect(225, 835, 250, 75);

        _crc2.strokeStyle = "white";
        _crc2.beginPath();
        _crc2.lineWidth = 2;
        _crc2.arc(this.width / 2, this.height - 810, 5, 0, 2 * Math.PI, false);
        _crc2.fillStyle = "white";
        _crc2.stroke();
        _crc2.fill();

//Strafraum Team2
        _crc2.strokeStyle = "white";
        _crc2.lineWidth = 2;
        _crc2.strokeRect(150, 0, 400, 125);

        _crc2.strokeStyle = "white";
        _crc2.lineWidth = 2;
        _crc2.strokeRect(225, 0, 250, 75);

        _crc2.strokeStyle = "white";
        _crc2.beginPath();
        _crc2.lineWidth = 2;
        _crc2.arc(this.width / 2, this.height - 100, 5, 0, 2 * Math.PI, false);
        _crc2.fillStyle = "white";
        _crc2.stroke();
        _crc2.fill();
  
//Mittelkreis groß
        _crc2.strokeStyle = "white";
        _crc2.beginPath();
        _crc2.lineWidth = 2;
        _crc2.arc(this.width / 2, this.height / 2, 100, 0, 2 * Math.PI, false);
        _crc2.stroke();
//Mittelkreis klein
        _crc2.strokeStyle = "white";
        _crc2.beginPath();
        _crc2.lineWidth = 2;
        _crc2.arc(this.width / 2, this.height / 2, 10, 0, 2 * Math.PI, false);
        _crc2.fillStyle = "white";
        _crc2.stroke();
        _crc2.fill();

// Ecken
        _crc2.strokeStyle = "white";
        _crc2.lineWidth = 2;
        _crc2.beginPath();
        _crc2.moveTo(0, this.height - 885);
        _crc2.lineTo(this.width - 675 , 0);
        _crc2.stroke();

        _crc2.strokeStyle = "white";
        _crc2.lineWidth = 2;
        _crc2.beginPath();
        _crc2.moveTo(this.width - 25, 0);
        _crc2.lineTo(this.width, this.height - 885);
        _crc2.stroke();

        _crc2.strokeStyle = "white";
        _crc2.lineWidth = 2;
        _crc2.beginPath();
        _crc2.moveTo(0, this.height - 25);
        _crc2.lineTo(this.width - 675, this.height);
        _crc2.stroke();

        _crc2.strokeStyle = "white";
        _crc2.lineWidth = 2;
        _crc2.beginPath();
        _crc2.moveTo(this.width - 25, this.height);
        _crc2.lineTo(this.width, this.height - 25);
        _crc2.stroke();
  
//Tore - leider ohne Netz :( das pattern wollte er par tout nicht akzeptieren
        _crc2.strokeStyle = _game.team1Color;
        _crc2.lineWidth = 4;
        _crc2.strokeRect(
          this.goalTeam1.position.x,
          this.goalTeam1.position.y,
          this.goalTeam1.width,
          this.goalTeam1.height
        );
        _crc2.strokeStyle = _game.team2Color;
        _crc2.strokeRect(
          this.goalTeam2.position.x,
          this.goalTeam2.position.y,
          this.goalTeam2.width,
          this.goalTeam2.height
        );
      }
//Torarea und GFrenzüberschreitungen permanent abfragen -- tritt eins von beiden ein startet das Spiel mit einem ruhenden Ball beim anderen Team
      private outOfPlay(_game: Game): boolean {
        const fieldRect: Rectangle = new Rectangle(
          new Vector(0, 0),
          this.width,
          this.height
        );
        return !this.checkRectangleBallCollision(_game.ball, fieldRect);
      }
  
      private checkRectangleBallCollision(_ball: Ball, _rect: Rectangle): boolean {
        var distX: number = Math.abs(
          _ball.position.x - _rect.position.x - _rect.width / 2
        );
        var distY: number = Math.abs(
          _ball.position.y - _rect.position.y - _rect.height / 2
        );
  
        if (distX > _rect.width / 2 + _ball.radius) return false;
        if (distY > _rect.height / 2 + _ball.radius) return false;
  
        if (distX <= _rect.width / 2) return true;
        if (distY <= _rect.height / 2) return true;
  
        var dx: number = distX - _rect.width / 2;
        var dy: number = distY - _rect.height / 2;
  
        return dx * dx + dy * dy <= _ball.radius * _ball.radius;
      }
  
      private checkGoal1(_ball: Ball): boolean {
        return this.checkRectangleBallCollision(_ball, this.goalTeam1);
      }
      private checkGoal2(_ball: Ball): boolean {
        return this.checkRectangleBallCollision(_ball, this.goalTeam2);
      }
    }
  }