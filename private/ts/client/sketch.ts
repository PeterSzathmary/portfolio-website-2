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

const nav = window.document.getElementsByClassName("nav")[0] as HTMLElement;
console.log(nav.offsetHeight);
console.log(typeof nav);

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
    let textSize;

    p.setup = () => {
        let canvas = p.createCanvas(width, height);
        canvas.parent(placeForCanvas!);

        p.noStroke();

        for (let i = 0; i < count; i++) {
            let x = p.random(size, width - size * 2);
            let y = p.random(size, height - size * 2);
            rects.push(new Rect(x, y, size, p));
        }

        if (width >= 480) textSize = 30;
        else textSize = 22;

        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(textSize);

        console.log(rects);
    };

    p.draw = () => {
        p.background(20);

        p.fill("rgba(255,255,255,0.25)");
        p.text(
            "Tap above the half to add rects.\nBelow half to remove.",
            width / 2,
            height / 2
        );

        for (let i = 0; i < rects.length; i++) {
            rects[i].draw();
            rects[i].move();
            rects[i].checkBounds();
        }
    };

    p.mousePressed = () => {
        if (p.mouseY < height / 2 && p.mouseY > 0) {
            let x = p.random(size, width - size * 2);
            let y = p.random(size, height - size * 2);
            rects.push(new Rect(x, y, size, p));
        } else if (p.mouseY > height / 2 && p.mouseY < height) rects.pop();
    };

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

    p.touchStarted = (e: TouchEvent) => {
        let yPos = e.targetTouches[0].clientY - nav.offsetHeight;
        if (yPos < height / 2 && yPos > 0) {
            let x = p.random(size, width - size * 2);
            let y = p.random(size, height - size * 2);
            rects.push(new Rect(x, y, size, p));
        } else if (yPos > height / 2 && yPos < height) rects.pop();
        // console.log("nav.offsetHeight", nav.offsetHeight);
        // console.log("e.targetTouches[0].clientX", e.targetTouches[0].clientX);
        // console.log("e.targetTouches[0].clientY", e.targetTouches[0].clientY);
        // console.log("e.touches", e.touches.length);
        // console.log("e.targetTouches[0]", e.targetTouches[0]);
    };

    p.touchEnded = (e: TouchEvent) => {};
};

new p5(s);
