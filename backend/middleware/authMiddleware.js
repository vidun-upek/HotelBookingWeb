import User from '../models/user.js';

export const protect = async (req, res, next) => {
    const { userId } = req.auth || {};

    if (!userId) {
        return res.status(401).json({ success: false, message: 'Not authorized' });
    }

    const user = await User.findById(userId).select('-sensitiveInfo');
    if (!user) return res.status(401).json({ success: false, message: 'User not found' });

    req.user = user;
    next();
};