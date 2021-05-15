namespace L08Blumenwiese {

    interface Vector {
        x: number;
        y: number;
    }
    window.addEventListener("load", handleload);
    let crc2: CanvasRenderingContext2D;

    function handleload(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawSky();
        drawSun({x: 10, y: 0});
        drawCloud({ x: 450, y: 80 }, { x: 200, y: 50 });
        drawCloud({ x: 100, y: 150 }, { x: 170, y: 60 });
        drawCloud({ x: 740, y: 200 }, { x: 130, y: 40 });
        drawMountain();
        drawGras();
        drawTrees({ x: 40, y: 190 });
        drawTrees({ x: 120, y: 10 });
        drawTrees({ x: 400, y: -2 });
        drawFlower({ x: -80, y: 50 });
        drawFlower({ x: -300, y: 30 });
        drawFlower({ x: -650, y: 40 });
        drawStreet();
        drawShadow();
}
//1. Ebene: Himmel
    function drawSky(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(2, 5, 10, crc2.canvas.height);
        gradient.addColorStop(0, "rgb(129, 219, 255)");
        gradient.addColorStop(1, "rgb(9, 185, 255)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
//2. Ebene: Sonne
    function drawSun(_position: Vector): void {
        let r1: number = 80;
        let r2: number = 120;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(80, 100%, 90%, 2)");
        gradient.addColorStop(1, "HSLA(70, 60%, 70%, 10)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
//3.Ebene: Wolken
    function drawCloud(_position: Vector, _size: Vector): void {

        let nParticles: number = 75;
        let radiusParticle: number = 15;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 0.7)");
        gradient.addColorStop(0, "HSLA(60, 100%, 100%, 0.3)");


        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }

        crc2.restore();

    }
//4.Ebene: Berg
    function drawMountain(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "rgb(185, 255, 209)");
        gradient.addColorStop(0.4, "rgb(22, 220, 50)");


        crc2.fillStyle = gradient;
        crc2.strokeStyle = "rgb(185, 255, 209)";

        crc2.save();
        crc2.beginPath();
        crc2.moveTo(900, 350);
        crc2.lineTo(400, 150);
        crc2.lineTo(30, 350);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();
    }
//5. Ebene: Wiese
    function drawGras(): void {
        crc2.strokeStyle = "rgb(131, 235, 136)";
        crc2.fillStyle = "rgb(19, 218, 29)";

        crc2.beginPath();
        crc2.moveTo(0, 350);
        crc2.lineTo(900, 350);
        crc2.lineTo(900, 450);
        crc2.lineTo(0, 450);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
 //6.0.Ebene: Schatten
    function drawShadow(): void {

                
        crc2.strokeStyle = "black";
        crc2.lineWidth = 30;
        crc2.beginPath();
        crc2.moveTo(-205, 170);
        crc2.lineTo(130, 450);
        crc2.closePath();
        crc2.stroke();
    }
//6. Ebene: Bäume
    function drawTrees(_position: Vector): void {

        
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.strokeStyle = "rgb(126, 90, 25)";
        crc2.lineWidth = 30;
        crc2.beginPath();
        crc2.moveTo(200, 100);
        crc2.lineTo(200, 180);
        crc2.closePath();
        crc2.stroke();


        crc2.fillStyle = "rgb(8, 77, 25)";
        crc2.beginPath();
        crc2.ellipse(200, 80, 50, 50, 50, 50, 90);
        crc2.closePath();
        crc2.fill();
 }

//7.Ebene: Blumen
    function drawFlower(_position: Vector): void {

       
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.strokeStyle = "rgb(22, 100, 64)";
        crc2.lineWidth = 4;
        crc2.beginPath();
        crc2.moveTo(200, 100);
        crc2.lineTo(200, 180);
        crc2.closePath();
        crc2.stroke();


        crc2.fillStyle = "rgb(214, 201, 21)";
        crc2.strokeStyle = "rgb(110, 104, 13)";
        crc2.lineWidth = 4;
        crc2.beginPath();
        crc2.ellipse(200, 100, 10, 10, 0, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "rgb(190, 75, 181)";
        crc2.beginPath();
        crc2.ellipse(200, 130, 10, 20, 0, 20, 100);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(200, 70, 10, 20, 0, 20, 100);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(170, 100, 20, 10, 0, 20, 100);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(230, 100, 20, 10, 0, 20, 100);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(175, 80, 20, 10, 10, 20, 100);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(222, 79, 20, 10, 40, 20, 100);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(177, 123, 20, 10, 40, 20, 100);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.ellipse(225, 122, 20, 10, 10, 20, 100);
        crc2.closePath();
        crc2.fill();

        crc2.restore();

    }

//8. Ebene: Straße
    function drawStreet(): void {
        crc2.strokeStyle = "white";
        crc2.lineWidth = 4;
        crc2.fillStyle = "grey";

        crc2.beginPath();
        crc2.moveTo(-50, 152);
        crc2.lineTo(-20, 152);
        crc2.lineTo(350, 400);
        crc2.lineTo(-10, 450);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }


     
}