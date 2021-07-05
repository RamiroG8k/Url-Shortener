import { Router } from 'express';
import * as genCtrl from '../controllers/generic.controller';

const router = Router();

router.get('/hi', genCtrl.sayHi);
router.post('/model', genCtrl.postModel);

export default router;