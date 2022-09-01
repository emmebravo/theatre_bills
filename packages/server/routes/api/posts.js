import express from 'express';
import * as posts from '../../controllers/posts.js';
import { upload } from '../../middleware/multer.js';
const router = express.Router();

// @route POST api/posts/create-post
// @desc create new show bill
// @access Private
router.post('/create-show', upload.single('file'), posts.createShow);

// @route DELETE api/posts/delete-show/:id
// @desc delete show entry
// @access Private
router.delete('/delete-show/:id', posts.deleteShow);

export default router;
