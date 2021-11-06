const Koa = require("koa");
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

const { getImageBufferByUrl } = require('./util')
const { dissimilarity } = require('./cv')


router.post('/dissimilarity', async ctx => {
  const { url1, url2 } = ctx.request.body;
  try {
    const buf1 = await getImageBufferByUrl(url1)
    const buf2 = await getImageBufferByUrl(url2)
    ctx.body = await dissimilarity(buf1, buf2)
  } catch (error) {
    ctx.body = error
  }
})

app.use(bodyParser());
app.use(router.routes());
app.listen(3030, () => {
  console.log('服务启动成功');
});