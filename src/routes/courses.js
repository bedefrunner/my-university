const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('courses.list', '/', async (ctx) => {
  const coursesList = await ctx.orm.course.findAll();
  await ctx.render('courses/index', {
    coursesList,
  });
});

module.exports = router;
