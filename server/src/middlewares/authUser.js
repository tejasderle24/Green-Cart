

import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded?.id) {
            return res.status(401).json({ success: false, message: "Not Authorized: Invalid token" });
        }

        req.user = { id: decoded.id }; // Attach user ID or full token payload if needed
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Not Authorized: " + error.message,
        });
    }
};

export default authUser;
