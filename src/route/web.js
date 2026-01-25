import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);

    router.get('/hoihau', (req, res) => {
        return res.send("Hello World with hau")
    })
    return app.use("/", router);
}

module.exports = initWebRoutes;