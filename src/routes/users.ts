import config from '../../config'
import * as Router from 'koa-router'
import * as ctrl from '../controllers/users'
import * as compose from 'koa-compose'
import * as token from '../middlewares/validateJWT'

const router = new Router({
    prefix: `${config.api.baseURL}/users`,
});

router.get('/', token.validate, ctrl.getAll);

router.post('/signup', ctrl.signUp);

router.post('/login', ctrl.loginUser);

router.put('/',token.validate, ctrl.updateUser);

router.delete('/:id',token.validate, ctrl.deleteUser);

const routes = router.routes();

export default compose([routes]);