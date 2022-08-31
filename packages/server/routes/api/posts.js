import express from 'express';
import * as posts from '../../controllers/posts.js';
const router = express.Router();

router.post('/create-post', posts.createPost);
router.delete('/delete-post/:id', posts.deletePost);

export default router;
