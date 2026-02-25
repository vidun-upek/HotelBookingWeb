import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getUserData, storeRecentSearchedCities } from '../controllers/userController.js';
import asyncHandler from '../middleware/asyncHandler.js';

const userRouter = express.Router();

userRouter.get('/data', protect, asyncHandler(getUserData));
userRouter.post('/store-search', protect, asyncHandler(storeRecentSearchedCities));

export default userRouter;