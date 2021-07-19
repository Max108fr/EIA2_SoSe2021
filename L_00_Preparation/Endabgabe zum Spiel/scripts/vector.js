"use strict";
var EIA2Endabgabe;
(function (EIA2Endabgabe) {
    class Vector {
        constructor(_x = 0, _y = 0) {
            this.set(_x, _y);
        }
        static getDifference(_v0, _v1) {
            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        }
        static getDistanceSqrd(_v0, _v1) {
            return (_v0.x - _v1.x) ** 2 + (_v0.y - _v1.y) ** 2;
        }
        static getDistance(_v0, _v1) {
            return Math.sqrt(Vector.getDistanceSqrd(_v0, _v1));
        }
        static getRandom(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            return Vector.getPolar(direction, length);
        }
        static getPolar(_angle, _length) {
            let vector = new Vector();
            vector.set(Math.cos(_angle), Math.sin(_angle));
            vector.scale(_length);
            return vector;
        }
        get length() {
            return Math.hypot(this.x, this.y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
            return this;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
            return this;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
            return this;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    EIA2Endabgabe.Vector = Vector;
})(EIA2Endabgabe || (EIA2Endabgabe = {}));
//# sourceMappingURL=vector.js.map