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
    let rects: Array<Rect> = [];
    let count = 50;
    let size = 20;

    p.setup = () => {
        let canvas = p.createCanvas(width, height);
        canvas.parent(placeForCanvas!);

        p.noStroke();

        for (let i = 0; i < count; i++) {
            let x = p.random(size, width - size * 2);
            let y = p.random(size, height - size * 2);
            rects.push(new Rect(x, y, size, p));
        }

        console.log(rects);
    };

    p.draw = () => {
        p.background(20);
        for (let i = 0; i < rects.length; i++) {
            rects[i].draw();
            rects[i].move();
            rects[i].checkBounds();
        }
    };

    p.mousePressed = () => {};

    p.windowResized = () => {
        rects = [];
        for (let i = 0; i < count; i++) {
            let x = p.random(size, width - size * 2);
            let y = p.random(size, height - size * 2);
            rects.push(new Rect(x, y, size, p));
        }
        console.log("window resized!!!");
        width = placeForCanvas!.offsetWidth;
        height = placeForCanvas!.clientHeight;
        p.resizeCanvas(width, height);
    };
};

new p5(s);
