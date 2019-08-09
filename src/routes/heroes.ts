import * as ctrl from '../controllers/heroes';
import * as Router from 'koa-router';
import config from '../../config/index';
import * as compose from 'koa-compose'
import * as token from '../middlewares/validateJWT';
// process.env.NODE_URL
const router = new Router({
  prefix: `${config.api.baseURL}/heroes`,
});

router.get('/' ,token.validate, ctrl.getAll);

router.post('/signupHero' , ctrl.signUpHero);

router.delete('/:id',token.validate, ctrl.deleteHero);

router.post('/updateHero',token.validate, ctrl.updateHero);

router.post('/getHero',token.validate, ctrl.getHero);

const routes = router.routes();

export default compose([routes]);