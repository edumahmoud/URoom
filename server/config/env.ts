import dotenv from 'dotenv';

dotenv.config();

const requiredEnvVars = ['DATABASE_URL', 'SUPABASE_URL', 'SUPABASE_ANON_KEY', 'JWT_SECRET'];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Critical Error: Missing environment variable [${envVar}]`);
  }
}

export const config = {
  port: Number(process.env.PORT) || 3001,
  dbUrl: process.env.DATABASE_URL as string,
  supabaseUrl: process.env.SUPABASE_URL as string,
  supabaseKey: process.env.SUPABASE_ANON_KEY as string,
  jwtSecret: process.env.JWT_SECRET as string,
};
