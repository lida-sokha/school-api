import dotenv from 'dotenv';
dotenv.config();

console.log("🔍 DB_USER is:", process.env.DB_USER);
export default {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    PORT: process.env.DB_PORT,
    dialect: "mysql"
};
