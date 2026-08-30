import Client from 'ssh2-sftp-client';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env.local
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function deploy() {
  const sftp = new Client();
  const localDir = path.resolve(__dirname, '../out');
  const remoteDir = process.env.SFTP_REMOTE_PATH || 'public_html/Shristi-estate';

  const config = {
    host: process.env.SFTP_HOST,
    port: parseInt(process.env.SFTP_PORT || '22', 10),
    username: process.env.SFTP_USER,
    password: process.env.SFTP_PASS,
  };

  try {
    console.log(`Connecting to ${config.host}:${config.port}...`);
    await sftp.connect(config);
    console.log('Connected via SFTP.');

    // Check if remote directory exists, if not, create it
    const exists = await sftp.exists(remoteDir);
    if (!exists) {
      console.log(`Remote directory ${remoteDir} does not exist. Creating it...`);
      await sftp.mkdir(remoteDir, true);
    }

    console.log(`Uploading ${localDir} to ${remoteDir}...`);
    // The 'uploadDir' method handles uploading the entire directory tree
    await sftp.uploadDir(localDir, remoteDir);

    console.log('Upload complete!');
  } catch (err) {
    console.error('Deployment failed:', err.message);
    process.exit(1);
  } finally {
    sftp.end();
  }
}

deploy();
