import express from 'express';
import * as posts from '../../controllers/posts.js';
import { upload } from '../../middleware/multer.js';
import { ensureAuth } from '../../middleware/auth.js';
const router = express.Router();

// @route POST api/posts/create-post
// @desc create new show bill
// @access Private
router.post(
  '/create-show',
  ensureAuth,
  upload.single('image'),
  posts.createShow
);

// @route DELETE api/posts/delete-show/:id
// @desc delete show entry
// @access Private
router.delete('/delete-show/:id', ensureAuth, posts.deleteShow);

export default router;
