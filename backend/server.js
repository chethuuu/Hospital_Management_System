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