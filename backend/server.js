const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const cors = require ('@koa/cors');

const app = new Koa();
const PORT =  5000;

app.use(bodyparser())
app.use(cors({
    origin:""
}))

app.listen(PORT)
    console.log("Application is running on PORT " + PORT);

//import routes
const userRouter = require("./routes/Users_Routes");

//use routes
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());