import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const { token, refreshToken } = req.headers; // Get both tokens from the client

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Not Authorized. Please log in again!"
        });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);

        if (error.name === "TokenExpiredError") {
            if (!refreshToken) {
                return res.status(401).json({
                    success: false,
                    message: "Access token expired. Please log in again!"
                });
            }

            try {
               
                const refreshTokenDecode = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);


                const newAccessToken = jwt.sign(
                    { id: refreshTokenDecode.id },
                    process.env.JWT_SECRET,
                    { expiresIn: "1d" } 
                );

                const newRefreshToken = jwt.sign(
                    { id: refreshTokenDecode.id },
                    process.env.JWT_REFRESH_SECRET,
                    { expiresIn: "7d" }
                );

                return res.status(200).json({
                    success: true,
                    message: "Access token refreshed successfully.",
                    accessToken: newAccessToken,
                    refreshToken: newRefreshToken 
                });
            } catch (refreshError) {
                console.log(refreshError);
                return res.status(403).json({
                    success: false,
                    message: "Invalid refresh token. Please log in again!"
                });
            }
        }

        return res.status(400).json({
            success: false,
            message: "Invalid Token. Please log in again."
        });
    }
};

export default authMiddleware;
