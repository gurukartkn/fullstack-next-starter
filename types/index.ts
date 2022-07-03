import jwt from 'jsonwebtoken';
export type DecodedJWT = jwt.JwtPayload & { email: string };
