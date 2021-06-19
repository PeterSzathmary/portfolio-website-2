import express from "express";
import { io } from "../app.js";
import { journal as journalModel } from "../models/journal.js";
import fs from "fs";

const router = express.Router();

//#region GET routes
router.get("/", (req: express.Request, res: express.Response) => {
    if (req.body !== undefined) {
    }
    res.render("index", {
        title: "home",
        year: new Date().getFullYear(),
    });
});

router.get("/about", (req: express.Request, res: express.Response) => {
    if (req.body !== undefined) {
    }
    res.render("about", {
        title: "about",
        year: new Date().getFullYear(),
    });
});

router.get("/journals", async (req: express.Request, res: express.Response) => {
    if (req.body !== undefined) {
    }

    const journals = await journalModel.find().sort({ $natural: -1 });
    console.log("Journals => ", journals);

    res.render("journals", {
        title: "journals",
        year: new Date().getFullYear(),
        journals: journals,
    });
    // res.json({ hello: "my name is" });
});

router.get("/myProjects", (req: express.Request, res: express.Response) => {
    if (req.body !== undefined) {
    }

    fs.readdir("./public/images/projects", (err, projectsImages) => {
        if (err !== null) {
            console.log(err);
            return;
        }

        // console.log(files);

        // console.log("filesArr", filesArr.length);

        const projectsComments = JSON.parse(
            fs.readFileSync("./public/projectsComments.json").toString()
        );

        // console.log("projectComments.comments");
        // console.log(projectsComments.comments);

        //let projectsComments = ["I made a Cartman in Illustrator."];

        let data = {
            projectsImages: projectsImages,
            projectsComments: projectsComments.comments,
        };

        res.render("myProjects", {
            title: "my projects",
            year: new Date().getFullYear(),
            data: data,
        });
    });
});

router.get("/testing", (req: express.Request, res: express.Response) => {
    if (req.body !== undefined) {
    }
    res.render("testing", {
        title: "testing",
        year: new Date().getFullYear(),
    });
});
//#endregion

//#region POST routes
let date = new Date();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let dd, mm, yyyy, today;
router.post(
    "/newjournal",
    async (req: express.Request, res: express.Response) => {
        //console.log("got a POST request!");
        //console.log("\nREQ\n");
        //console.log(req.body);

        dd = String(date.getDate()).padStart(2, "0");
        mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
        yyyy = date.getFullYear();
        today = dd + "." + mm + "." + yyyy;

        // journal
        const journal = req.body;
        //console.log("j => ", journal);
        journal["createdAt"] = today;
        journal["day"] = days[date.getDay()];
        const response = await journalModel.create(journal);
        console.log(typeof response);

        res.end("\nData successfully send to server!");
    }
);

let i = 0;
router.post("/testing", (req: express.Request, res: express.Response) => {
    console.log("got a POST request");

    let data = req.body;
    console.log(req.body); // { name: 'voldemort' }
    io.sockets.emit("content", data.name + " " + i);
    i++;

    res.end("\nTHANKS FOR SENDING DATA");
});
//#endregion

export default router;
