const Router = require('@koa/router');

const {
        Register, Login, Get, GetID, Update, Remove, UserRole
    } = require ('../API/Users_API');

const router = new Router ({prefix:'/hospital'});

router.post('/register', async (ctx) => {
    let body = ctx.request.body;
    let data = await Register(body);
    ctx.response.status = 200;
    ctx.body = data;
});

router.post ('/login', async (ctx) => {
    let body = ctx.request.body;
    let data = await Login(body);
    ctx.response.status = 200;
    ctx.body = data;
});

router.get('/getall', async (ctx) => {
    let data = await Get();
    ctx.response.status = 200;
    ctx.body = data;
});

router.get('/getid/:id', async (ctx) => {
    let id = ctx.params.id;
    let data = await GetID(id);
    ctx.response.status = 200;
    ctx.body = data;
});

router.put('/:id', async (ctx) => {
    let id = ctx.params.id;
    let body = ctx.request.body;
    let data = await Update(id, body);
    ctx.response.status = 200;
    ctx.body = data;
});

router.delete('/:id', async (ctx) => {
    let id = ctx.params.id;
    let data = await Remove(id);
    ctx.response.status = 200;
    ctx.body = data;
});

router.get('/:userRole', async (ctx) => {
    let userRole = ctx.params.userRole;
    let data = await UserRole.find({ userRole: userRole });;
    ctx.response.status = 200;
    ctx.body = data;
});

module.exports = router;