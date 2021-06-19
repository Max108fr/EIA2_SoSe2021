//L11_Advanced
//Max Tabori 266818
//Quellen/Ispirationen: Inverted; Lisa Waletzko; Celine Schneller

//Liebe Alida, 
//leider werden die Wochen und meine Abgaben mit dem nahenden Semester-Ende nicht besser... aber immerhin heißt das, dass du es ja auch bald geschafft hast mit uns :)
//Hoffe, dass die Pfeile im Konzeot diesmal stimmen. 

//Die besten Grüße, Max

namespace L11advanced {
    interface Vector {
        x: number;
        y: number;
    }  
    let imageData: ImageData;
    let planetArray: Planet [] = [];
    let moveablesArray: Moveable [] = [];

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;  

        let posMountains: Vector = { x: 0, y: 250 };

        drawBackground();
        drawMars(0, 0);

        drawRunway(670, 390, 50, 300);

        drawSun(100, 75);
        drawMoon(600, 100);

        drawMountains(posMountains, 75, 140, "HSLA(10, 100%, 30%, 1)", "HSLA(20, 100%, 70%, 1)");
        drawMountains(posMountains, 50, 100, "HSLA(30, 100%, 30%, 1)", "HSLA(30, 80%, 70%, 1)");       
        
        drawHangar(400, - 100);

        createPlanet();
        createClouds();
        createUfo();

        console.log(planetArray);

        //save as image
        imageData = crc2.getImageData(0, 0, 900, 500);

        window.setInterval(update, 20);

    }

    function update(): void {
        console.log("moveable update");
        crc2.clearRect(0, 0, 900, 500);
        crc2.putImageData(imageData, 0, 0);

        for (let moveable of moveablesArray) {
            moveable.move(1 / 50);
            moveable.draw();
        }

        for (let stuff of planetArray) {
            stuff.draw();
            stuff.fuel(0.1);
        }
        
    }

    function createUfo(): void {
        for (let i: number = 0; i < 10; i++) {
            console.log("create ufo");
            let ufo: Ufo = new Ufo(1);
            moveablesArray.push(ufo);    
        }
    }

    function createClouds(): void {
        for (let i: number = 0; i < 1; i++) {
            let cloud: Cloud = new Cloud(0.5); 
            moveablesArray.push(cloud);           
        }
    }

    function createPlanet(): void {
        console.log("create stuff");

        for (let i: number = 0; i < 10; i++) {
            let lights: Lights = new Lights();
            planetArray.push(lights);            
        } 
        
        for (let i: number = 0; i < 10; i++) {
            let gaspump: Gaspump = new Gaspump();
            planetArray.push(gaspump);  
        } 

        for (let i: number = 0; i < 10; i++) {
            let alien: Alien = new Alien();
            planetArray.push(alien);  
        }         
        
    }

    function drawBackground(): void {
        console.log("draw space");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(260, 100%, 10%)");
        gradient. addColorStop(0.6, "HSL(250, 100%, 30%)");
    
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); 
}

    function drawMars (_x: number, _y: number): void {
        console.log("draw ground");

        crc2.beginPath();
        crc2.moveTo(_x, _y + 350);
        crc2.lineTo(_x + 1200, _y + 350);
        crc2.lineTo(_x + 1200, _y + 900);
        crc2.lineTo(_x - 1200, _y + 900);

        let gradient2: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 900);
        gradient2.addColorStop(.5, "HSL(20, 70%, 30%"); 
        gradient2.addColorStop(.7, "HSL(30, 100%, 60%");

        crc2.fillStyle = gradient2;
        crc2.fill();
        crc2.closePath();
    }

    function drawRunway(_x: number, _y: number, _widthBack: number, _widthFront: number): void {
        console.log("draw runway");
        
        crc2.beginPath();
        crc2.moveTo(_x + _widthBack / 2, _y);
        crc2.lineTo(crc2.canvas.width / 2 + _widthFront / 2, crc2.canvas.height);
        crc2.lineTo(crc2.canvas.width / 2 - _widthFront / 2, crc2.canvas.height);
        crc2.lineTo(_x - _widthBack / 2, _y);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, _y, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(30, 30%, 50%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 10%, 1)");

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();

    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y + 100);

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

    function drawSun(_x: number, _y: number): void {
        console.log("draw sun", _x, _y);

        let r1: number = 50;
        let r2: number = 75;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(50, 90%, 60%, 1");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0.2");

        crc2.save();
        crc2.translate(_x, _y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    
    function drawMoon(_x: number, _y: number): void {
        console.log("draw moon", _x, _y);

        // tslint:disable-next-line: typedef
        let r1 = 25;
        // tslint:disable-next-line: typedef
        let r2 = 50;
        
        // tslint:disable-next-line: typedef
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(180, 80%, 50%, 1");
        gradient.addColorStop(1, "HSLA(150, 30%, 10%, 0.2");
        crc2.save();
        crc2.translate(_x, _y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawHangar(_x: number, _y: number): void {
        
        //Schatten
        crc2.save();
        crc2.beginPath();
        crc2.arc(660, 390, 90, 3.1 , 2 * Math.PI);
        crc2.fillStyle = "HSLA(0, 0%, 20%)";
        crc2.fill();
        crc2.closePath();
        
        //3D
        crc2.beginPath();
        crc2.moveTo(650, 395);
        crc2.lineTo(740, 395);
        crc2.lineTo(750, 390);
        crc2.lineTo(690, 390);
        crc2.fillStyle = "HSLA(0, 0%, 20%)";
        crc2.fill();
        crc2.closePath();
        
        //Front
        crc2.beginPath();
        crc2.arc(650, 395, 90, 3.1 , 2 * Math.PI);
        crc2.fillStyle = "HSLA(0, 0%, 50%)";
        crc2.fill();
        crc2.closePath();
            
        //Tür
        crc2.beginPath();
        crc2.arc(650, 396, 30, 3.1 , 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
    
        //Fenster 1
        crc2.beginPath();
        crc2.arc(690, 360, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "lightblue";
        crc2.fill();
        crc2.closePath();
    
        //Fenster 2
        crc2.beginPath();
        crc2.arc(610, 360, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "lightblue";
        crc2.fill();
        crc2.closePath();
    
    
    
        }
    }
        