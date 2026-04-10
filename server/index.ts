import app from './app.js';
import { config } from './config/env.js';
import { checkDbConnection } from './config/db.js';

const startServer = async () => {
  // Check DB/Supabase connection before starting
  await checkDbConnection();

  app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
  });
};

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
