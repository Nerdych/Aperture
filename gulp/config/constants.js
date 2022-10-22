// Core
import process from 'process';

export const constants = {
  isDev: !process.argv.includes('--build'),
  isBuild: process.argv.includes('--build'),
};
