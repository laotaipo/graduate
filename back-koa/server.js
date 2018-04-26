let Koa = require('koa');
let Router = require('koa-router');

let cors = require('koa-cors');
// 引入nodejs的文件系统API
let fs = require('fs');

const app = new Koa();
const router = new Router();
// 提供一个/getJson接口
router.get('/getJson', async ctx => {
    await cors();
    ctx.body = JSON.parse(fs.readFileSync('../static/material.json'));
});
router.get('/getCompany', async ctx => {
    await cors();
    ctx.body = Json.parse(fs.readFileSync('../static/company.json'));
});
// 将koa和两个中间件连起来
app.use(router.routes()).use(router.allowedMethods());

// 监听3000端口
app.listen(3000);