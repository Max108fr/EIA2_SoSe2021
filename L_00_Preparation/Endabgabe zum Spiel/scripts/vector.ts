namespace EIA2Endabgabe {
  export class Vector {
    public x: number;
    public y: number;
//Set Vector
    public constructor(_x: number = 0, _y: number = 0) {
      this.set(_x, _y);
    }
//Distanzen ermöglichen und berrechnen 
    public static getDifference(_v0: Vector, _v1: Vector): Vector {
      return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
    }

    public static getDistanceSqrd(_v0: Vector, _v1: Vector): number {
      return (_v0.x - _v1.x) ** 2 + (_v0.y - _v1.y) ** 2;
    }
    public static getDistance(_v0: Vector, _v1: Vector): number {
      return Math.sqrt(Vector.getDistanceSqrd(_v0, _v1));
    }
//Zufallsgenerator um die gesetzten Einstellungen random auf die Spieler zu verteilen
    public static getRandom(_minLength: number, _maxLength: number): Vector {
      let length: number =
        _minLength + Math.random() * (_maxLength - _minLength);
      let direction: number = Math.random() * 2 * Math.PI;
      return Vector.getPolar(direction, length);
    }
//Winkelbestimmung - wenn Ball in Spieler Radius kommt
    public static getPolar(_angle: number, _length: number): Vector {
      let vector: Vector = new Vector();
      vector.set(Math.cos(_angle), Math.sin(_angle));
      vector.scale(_length);
      return vector;
    }
//Entfernungen, Variablen, Vectoren für Schuss und Bewegung
    public get length(): number {
      return Math.hypot(this.x, this.y);
    }

    public set(_x: number, _y: number): Vector {
      this.x = _x;
      this.y = _y;
      return this;
    }

    public scale(_factor: number): Vector {
      this.x *= _factor;
      this.y *= _factor;
      return this;
    }

    public add(_addend: Vector): Vector {
      this.x += _addend.x;
      this.y += _addend.y;
      return this;
    }

    public copy(): Vector {
      return new Vector(this.x, this.y);
    }
  }
}