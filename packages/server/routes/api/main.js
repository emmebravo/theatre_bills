import express from 'express';
import gets from './gets.js';
import posts from './posts.js';

const router = express.Router();

router.use('/gets', gets);
router.use('/posts', posts);

export default router;
