import { Router } from 'express';
import * as urlController from '../controllers/url.controller';

const router = Router();

router.get('/:code', urlController.redirect);
router.post('/', urlController.makeShort);

export default router;