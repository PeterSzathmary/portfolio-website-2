import express from "express";
import { io } from "../app.js";
import { journal as journalModel } from "../models/journal.js";
import fs from "fs";

const router = express.Router();

//#region GET routes
// Root Route.
router.get("/", (req: express.Request, res: express.Response) => {
    if (req.body !== undefined) {
    }
    res.render("index", {
        title: "home",
        year: new Date().getFullYear(),
    });
});

// About Route.
router.get("/about", (req: express.Request, res: express.Response) => {
    if (req.body !== undefined) {
    }
    res.render("about", {
        title: "about",
        year: new Date().getFullYear(),
    });
});

// Journals Route.
router.get("/journals", async (req: express.Request, res: express.Response) => {
    if (req.body !== undefined) {
    }

    const journals = await journalModel.find().sort({ $natural: -1 });
    //console.log("Journals => ", journals);

    res.render("journals", {
        title: "journals",
        year: new Date().getFullYear(),
        journals: journals,
    });
    // res.json({ hello: "my name is" });
});

// My Projects Route.
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

// Testing Route.
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
let date: Date;
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

// New Journal Route.
let dd, mm, yyyy, today;
router.post(
    "/newjournal",
    async (req: express.Request, res: express.Response) => {
        date = new Date();
        dd = String(date.getDate()).padStart(2, "0");
        mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
        yyyy = date.getFullYear();
        today = dd + "." + mm + "." + yyyy;

        // journal
        const journal = req.body;
        let content = JSON.parse(JSON.stringify(req.body)).content;
        journal["content"] = content;
        journal["createdAt"] = today;
        journal["day"] = days[date.getDay()];

        const response = await journalModel.create(journal);

        res.end("\nData successfully send to server!");
    }
);

// Testing Route.
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
