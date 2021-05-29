namespace SpaceRunway {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * 0.8;

        drawBackground();        
        drawStars({x: 400, y: 300}, {x: canvas.width, y: canvas.height});
        drawSun({x: 100, y: 75});
        drawMoon({x: 600, y: 100});
        drawCloud01({x: 600, y: 250}, {x: 250, y: 40});
        drawCloud01({x: 200, y: 175}, {x: 150, y: 30});
        drawCloud02({x: 600, y: 250}, {x: 250, y: 40});
        drawCloud02({x: 200, y: 175}, {x: 150, y: 30});
        drawRunway({x: crc2.canvas.width / 2, y: crc2.canvas.height * 0.8}, 100, 300);
        drawMountains({x: 0, y: horizon}, 80, 150, "HSLA(270, 100%, 30%, 1)", "HSLA(30, 80%, 70%, 1)");
        drawMountains({x: 0, y: horizon}, 50, 120, "HSLA(270, 100%, 30%, 1)", "HSLA(30, 80%, 40%, 1)");

        
        drawLights({x: 325, y: 475});
        drawLights1({x: 300, y: 500});
        drawLights2({x: 275, y: 525});
        drawLights3({x: 250, y: 550});
        drawLights4({x: 225, y: 575});
        drawLights5({x: 200, y: 600});

        drawLights({x: 475, y: 475});
        drawLights1({x: 500, y: 500});
        drawLights2({x: 525, y: 525});
        drawLights3({x: 550, y: 550});
        drawLights4({x: 575, y: 575});
        drawLights5({x: 600, y: 600});

        drawLamp1({x: 10, y: 480});
        drawLamp2({x: 60, y: 300});



    }

    function drawBackground(): void {
        console.log("draw background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(260, 100%, 10%)");
        gradient. addColorStop(0.6, "HSL(250, 100%, 30%)");
        gradient. addColorStop(1, "HSL(30, 100%, 60%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); 
    }

    function drawStars(_position: Vector, _size: Vector): void {
        console.log("draw stars", _position, _size);

        let nParticles: number = 100;
        let radiusParticle: number = 3;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(70, 80%, 80%, 1)");
        gradient.addColorStop(1, "HSLA(60, 60%, 80%, 0)");

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

    function drawSun(_position: Vector): void {
        console.log("draw sun", _position);

        let r1: number = 50;
        let r2: number = 75;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(50, 90%, 60%, 1");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0.2");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();


    }

    function drawMoon(_position: Vector): void {
        console.log("draw moon", _position);

        let r1 = 25;
        let r2 = 50;
        
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(180, 80%, 50%, 1");
        gradient.addColorStop(1, "HSLA(150, 30%, 10%, 0.2");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }


    function drawCloud01(_position: Vector, _size: Vector): void {
        console.log("draw first cloud", _position, _size);

        let nParticles: number = 30;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(110, 80%, 30%, 1)");
        gradient.addColorStop(1, "HSLA(120, 80%, 30%, 0.2)");

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

    function drawCloud02(_position: Vector, _size: Vector): void {
        console.log("draw second cloud", _position, _size);

        let nParticles: number = 20;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(110, 70%, 80%, 0.5)");
        gradient.addColorStop(1, "HSLA(120, 70%, 80%, 0)");

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

    function drawRunway(_position: Vector, _widthBack: number, _widthFront: number): void {
        console.log("draw runway");
        
        crc2.beginPath();
        crc2.moveTo(_position.x + _widthBack / 2, _position.y);
        crc2.lineTo(crc2.canvas.width / 2 + _widthFront / 2, crc2.canvas.height);
        crc2.lineTo(crc2.canvas.width / 2 - _widthFront / 2, crc2.canvas.height);
        crc2.lineTo(_position.x - _widthBack / 2, _position.y);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, _position.y, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(30, 30%, 50%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 10%, 1)");

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();

    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("draw mountains");
        let stepMin: number = 40;
        let stepMax: number = 100;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);
        
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        
        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();

    }

    


    function drawLights(_position: Vector): void {
        console.log("draw lights", _position);
    
        let r1 = 2;
        let r2 = 10;
        
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(340, 100%, 80%, 1");
        gradient.addColorStop(1, "HSLA(300, 80%, 90%, 0");
        
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();

        crc2.restore();
    }

    function drawLights1(_position: Vector): void {
        console.log("draw lights", _position);
  
        let r1 = 4;
        let r2 = 12;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(340, 100%, 70%, 1");
        gradient.addColorStop(1, "HSLA(300, 80%, 80%, 0");
        
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();

        crc2.restore();
    }

    function drawLights2(_position: Vector): void {
        console.log("draw lights", _position);

        let r1 = 6;
        let r2 = 14;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(340, 100%, 60%, 1");
        gradient.addColorStop(1, "HSLA(300, 80%, 70%, 0");
        
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();

        crc2.restore();
    }

    function drawLights3(_position: Vector): void {
        console.log("draw lights", _position);

        let r1 = 8;
        let r2 = 16;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(340, 100%, 50%, 1");
        gradient.addColorStop(1, "HSLA(300, 80%, 60%, 0");
        
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();

        crc2.restore();
    }

    function drawLights4(_position: Vector): void {
        console.log("draw lights", _position);

        let r1 = 10;
        let r2 = 18;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(340, 100%, 40%, 1");
        gradient.addColorStop(1, "HSLA(300, 80%, 50%, 0");
        
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();

        crc2.restore();
    }

    function drawLights5(_position: Vector): void {
        console.log("draw lights", _position);

        let r1 = 12;
        let r2 = 20;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(340, 100%, 30%, 1");
        gradient.addColorStop(1, "HSLA(300, 80%, 40%, 0");
        
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();

        crc2.restore();
    }

    function drawLamp1(_position: Vector): void {
            console.log("draw lamps", _position);

            crc2.save();
            crc2.translate(_position.x, _position.y);

            crc2.strokeStyle = "HSL(0, 100%, 5%)";
            crc2.lineWidth = 4;
            crc2.beginPath();
            crc2.moveTo(315, 0);
            crc2.lineTo(315, 10);
            crc2.closePath();
            crc2.stroke();
        }

    function drawLamp2(_position: Vector): void {
            console.log("draw lamps", _position);

            crc2.save();
            crc2.translate(_position.x, _position.y);

            crc2.strokeStyle = "HSL(0, 100%, 5%)";
            crc2.lineWidth = 4;
            crc2.beginPath();
            crc2.moveTo(300, 0);
            crc2.lineTo(490, 100);
            crc2.closePath();
            crc2.stroke();
        }

}