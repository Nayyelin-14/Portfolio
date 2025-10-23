import jwt from "jsonwebtoken";
export const generateAccessToken = (userId: string): string => {
  return jwt.sign(
    { userId },
    process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: "15m" } // 15 minutes
  );
};

// Generate Refresh Token (long-lived)
export const generateRefreshToken = (userId: string): string => {
  return jwt.sign(
    { userId },
    process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: "7d" } // 7 days
  );
};
