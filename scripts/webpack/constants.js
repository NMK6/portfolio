const { resolve } = require('path');
const { path: PROJECT_ROOT } = require('app-root-path');
exports.PROJECT_ROOT = PROJECT_ROOT;
exports.SOURCE_DIR = resolve(PROJECT_ROOT, './src');
exports.BUILD_DIR = resolve(PROJECT_ROOT, './dist');
