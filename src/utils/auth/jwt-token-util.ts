import { UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

const jwtSecretKey = process.env.JWT_SECRET_KEY;

export function generateAccessToken(userId: number): string {
  return jwt.sign(
    {
      userId: userId,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    },
    `${jwtSecretKey}`,
  );
}

function checkExpDate(exp: number): void {
  if (exp * 1000 < Date.now()) {
    throw new UnauthorizedException('JWT Token has expired.');
  }
}

export function extractUserId(token: string): number {
  try {
    const decodedToken = jwt.verify(token, `${jwtSecretKey}`) as {
      userId: number;
      exp: number;
    };

    checkExpDate(decodedToken.exp);

    return decodedToken.userId;
  } catch (exception) {
    console.error('JWT Verification Error:', exception);
    throw new UnauthorizedException('JWT Token is invalid or malformed.');
  }
}
