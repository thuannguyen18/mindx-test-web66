const jwt = require("jsonwebtoken");

// Restrict the resource. Only logged-in user can visit it
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({ message: "You are not allowed to access the resource" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, "JWT_KEY", (err, decoded) => {
        if (err) return res.status(403).json({ message: "Forbidden" });
        req.user = decoded.user;
        next();
    });
}

module.exports = verifyToken;