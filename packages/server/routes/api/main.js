import express from 'express';
import users from './users.js';
import posts from './posts.js';

const router = express.Router();

router.use('/users', users);
router.use('/posts', posts);

export default router;
