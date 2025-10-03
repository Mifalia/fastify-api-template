import dotenv from 'dotenv';
import path from 'path';
import { APP_ROOT_DIR } from '_common/constants/server';

/**
 * Loads env vars from env files
 */
(() => {
  // a declared file will have more priority than the followings
  const envFiles = ['.env.local', '.env'];

  dotenv.config({
    path: envFiles.map(f => path.resolve(path.join(APP_ROOT_DIR, f))),
  });
})();
