//EIA 2 Endabgabe SoSe21 "Jogis Spielwiese"
//Maximilian Tabori 266818
//Quellen: Inverted Classroom / Asteroids; Umsetzung in Zusammenarbeit mit Jonas Scheid  

namespace EIA2Endabgabe {

//Soviel wie möglich aber nicht mehr als nötig: Canvas; Spielzustände "Running,Shooting"; NewPlayer
  export let canvas: HTMLCanvasElement | undefined;
  export let crc2: CanvasRenderingContext2D | undefined;

  export const DEBUG: boolean = false;

  export function randomBetween(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }

  export const mouse: Vector = new Vector(0, 0);

  export enum GameState {
    RUNNING,
    SHOOTING,
    ADD_PLAYER
  }

  let game: Game;

  function render(): void {
    console.log ("draw playing field")
    crc2.clearRect(0, 0, canvas.width, canvas.height);

    game.render(crc2);
  }
  function update(): void {
    game.update();
  }

  function init(): void {
    canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    crc2 = canvas.getContext("2d");

    canvas.addEventListener("mousemove", (e) => {
      mouse.set(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
    });

    game = new Game();

    loop();
  }

  function loop(): void {
    render();
    update();

    window.requestAnimationFrame(loop);
  }
  window.onload = init;
}