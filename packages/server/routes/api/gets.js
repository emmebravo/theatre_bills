import express from 'express';
import * as gets from '../../controllers/gets.js';
//import { ensureAuth } from '../../middleware/auth.js';
const router = express.Router();

// @route GET api/gets/feed
// @desc get feed of all shows
// @access Private
router.get('/feed', gets.feed);

// @route GET api/gets/feed/:id
// @desc get single show
// @access Private
router.get('/feed/:id', gets.getShow);

export default router;
