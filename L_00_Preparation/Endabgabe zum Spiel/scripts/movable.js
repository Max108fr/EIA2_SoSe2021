"use strict";
var EIA2Endabgabe;
(function (EIA2Endabgabe) {
    class Movable {
        constructor(_position, _speed) {
            this.position = _position.copy();
            this.speed = _speed;
        }
        moveTowards(target, variableAngle) {
            const diff = EIA2Endabgabe.Vector.getDifference(target, this.position);
            const angle = Math.atan2(diff.y, diff.x) + (variableAngle || 0);
            const vx = Math.cos(angle);
            const vy = Math.sin(angle);
            const vel = new EIA2Endabgabe.Vector(vx, vy).scale(this.speed);
            this.position.add(vel);
        }
    }
    EIA2Endabgabe.Movable = Movable;
})(EIA2Endabgabe || (EIA2Endabgabe = {}));
//# sourceMappingURL=movable.js.map