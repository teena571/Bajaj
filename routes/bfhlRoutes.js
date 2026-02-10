import express from 'express';
import { handleBfhl, health } from '../controllers/bfhlController.js';

const router = express.Router();

router.post('/bfhl', handleBfhl);
router.get('/health', health);

export default router;
