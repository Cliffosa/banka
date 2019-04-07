import { config } from 'dotenv';

config(); // Get our file from .env

const jwtSecret = process.env.Jwt_Secret;

export default jwtSecret;
