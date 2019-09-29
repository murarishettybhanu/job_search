const expressEdge = require("express-edge");
const express = require("express");
const edge = require("edge.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
const connectMongo = require("connect-mongo");
const connectFlash = require("connect-flash");

const createPostController = require("./controllers/createPost");
const homePageController = require("./controllers/homePage");
const storePostController = require("./controllers/storePost");
const getPostController = require("./controllers/getPost");
const createUserController = require("./controllers/createUser");
const createCompanyController = require("./controllers/createCompany")
const storeUserController = require("./controllers/storeUser");
const storeCompanyController = require("./controllers/storeCompany")
const userloginController = require("./controllers/ulogin");
const companyloginController = require("./controllers/clogin")
const loginUserController = require("./controllers/loginUser");
const loginCompanyController = require("./controllers/loginCompany")
const logoutController = require("./controllers/logout");
const companyPostsController = require("./controllers/companyPosts")
const applyPostController = require("./controllers/apply")
const applicationsController = require("./controllers/applications")
const deletePostcontroller = require("./controllers/deletePost")
const acceptRequestscontrollers = require("./controllers/acceptRequests")
const acceptApprovalsController = require("./controllers/acceptApprovals")

const app = new express();
mongoose.connect("mongodb://localhost/node-js-blog");

app.use(connectFlash());

const mongoStore = connectMongo(expressSession);

app.use(
  expressSession({
    secret: "secret",
    store: new mongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);

app.use(fileUpload());
app.use(express.static("public"));
app.use(expressEdge);
app.set("views", `${__dirname}/views`);

app.use("*", (req, res, next) => {
  edge.global("auth", req.session.userId);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storePost = require("./middleware/storePost");
const auth = require("./middleware/auth");
const redirectIfAuthenticated = require("./middleware/redirectIfAuthenticated");

app.get("/", homePageController);
app.get("/post/:id", getPostController);
app.get("/auth/logout", logoutController);
app.get("/posts/new", createPostController);
app.post("/posts/store", storePostController);
app.get("/auth/Userlogin", redirectIfAuthenticated, userloginController);
app.get("/auth/Companylogin", redirectIfAuthenticated, companyloginController);
app.post("/users/login", redirectIfAuthenticated, loginUserController);
app.post("/company/login", redirectIfAuthenticated, loginCompanyController);
app.get("/auth/userRegister", redirectIfAuthenticated, createUserController);
app.get("/auth/companyRegister", redirectIfAuthenticated,createCompanyController);
app.post("/users/register", redirectIfAuthenticated, storeUserController);
app.post("/company/register", redirectIfAuthenticated, storeCompanyController);
app.get("/apply/:id",applyPostController);
app.get("/company/posts",companyPostsController);
app.get("/applications/:id",applicationsController)
app.get("/delete/:id",deletePostcontroller)
app.get("/users/vishalUsers",acceptRequestscontrollers)
app.get("/acceptApprovals/:id",acceptApprovalsController)
app.use((req, res) => res.render('not-found'));

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
