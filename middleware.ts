import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import path from 'path';

// Use path.resolve if you're accessing the file system or paths
const directoryPath = path.resolve();
console.log(directoryPath); // Logs the directory path

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
