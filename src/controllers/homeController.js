import db from '../models/index';
import CRUDService from '../services/CRUDService';
import crud from '../services/CRUDService'
let getHomePage = async (req, res) => {


    let data = await db.User.findAll();
    console.log('--------------')
    console.log(data)
    console.log('--------------')
    return res.render('homepage.ejs', {
        data: JSON.stringify(data)
    })
}


let getAboutPage = (req, res) => {
    return res.render('test/about.ejs')
}

let getCRUD = async (req, res) => {
    return res.render('crud.ejs')
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    console.log(message)
    return res.send('post crud from server');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('======================')
    console.log(data)
    console.log('======================')
    return res.render('display-CRUD.ejs', {
        dataTable: data
    })
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId)
        //check user Data not found
        return res.render("edit-CRUD.ejs", {
            user: userData
        })
    }
    else {
        return res.send("Not found")
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render("display-CRUD.ejs", {
        dataTable: allUsers
    })
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
}