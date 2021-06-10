declare type P5 = import("p5");
declare class p5 {
    /**
     *   This is the p5 instance constructor. A p5 instance
     *   holds all the properties and methods related to a
     *   p5 sketch. It expects an incoming sketch closure
     *   and it can also take an optional node parameter
     *   for attaching the generated p5 canvas to a node.
     *   The sketch closure takes the newly created p5
     *   instance as its sole argument and may optionally
     *   set preload(), setup(), and/or draw() properties
     *   on it for running a sketch.
     *
     *   A p5 sketch can run in "global" or "instance"
     *   mode: "global" - all properties and methods are
     *   attached to the window "instance" - all properties
     *   and methods are bound to this p5 object
     *
     *   @param sketch a closure that can set optional
     *   preload(), setup(), and/or draw() properties on
     *   the given p5 instance
     *   @param [node] element to attach canvas to
     *   @return a p5 instance
     */
    constructor(sketch: (...args: any[]) => any, node?: HTMLElement);
}

const placeForCanvas: HTMLElement | null =
    window.document.getElementById("place-for-canvas");
// console.log(placeForCanvas!.clientHeight);
// console.log(placeForCanvas!.offsetHeight);
// console.log(placeForCanvas!.scrollHeight);

const footer = window.document.getElementsByTagName("footer")[0];
// console.log("footer: " + footer?.offsetHeight);

const s = (p: P5) => {
    let width = placeForCanvas!.offsetWidth;
    /*let height = placeForCanvas!.offsetHeight - footer!.offsetHeight;*/
    let height = placeForCanvas!.clientHeight;
    let size = 50;
    let color = "#82b74b";
    let round = 50;

    p.setup = () => {
        let canvas = p.createCanvas(width, height);
        canvas.parent(placeForCanvas!);
        p.noStroke();
    };

    p.draw = () => {
        p.background(color);

        if (p.mouseIsPressed) {
            round = 0;
        } else {
            round = 50;
        }

        p.rect(width / 2 - size / 2, height / 2 - size / 2, size, size, round);
        p.rect(2, 2, size, size);
        p.rect(width - size - 2, height - size - 2, size, size);
    };

    p.mousePressed = () => {};

    p.windowResized = () => {
        console.log("window resized!!!");
        width = placeForCanvas!.offsetWidth;
        height = placeForCanvas!.clientHeight;
        p.resizeCanvas(width, height);
    };
};

new p5(s);
