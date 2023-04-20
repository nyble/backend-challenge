import path from 'path';
import cfg from 'nconf';

const root = path.resolve(path.join(__dirname, '..', '..'));
export const assetsRoot = path.join(root, 'assets');

const config = cfg
  .argv()
  .env({ lowerCase: true, separator: '__' })
  .file('defaults', {
    file: path.join(root, 'config', 'config.json'),
  })
  .file('typewriting', {
    file: path.join(root, 'config', 'typewriting.json'),
  });

export default config;
