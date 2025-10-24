// types.ts
export enum AuthError {
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  UNAUTHORIZED = 'UNAUTHORIZED',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  INVALID_REQUEST = 'INVALID_REQUEST',
  EXPIRED_TOKEN = 'EXPIRED_TOKEN',
  TOKEN_BLACKLISTED = 'TOKEN_BLACKLISTED',
}

export enum TokenType {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
}

export interface Token {
  token: string;
  type: TokenType;
  expiresAt: number;
}

export interface User {
  id: string;
  email: string;
  roles: string[];
}

export interface Claims {
  sub: string;
  email: string;
  roles: string[];
  iat: number;
  exp: number;
}