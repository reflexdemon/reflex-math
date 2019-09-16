import pino from 'pino';
//API for pino https://github.com/pinojs/pino/blob/master/docs/api.md
const l = pino({
  name: process.env.APP_ID || 'reflex-math',
  level: process.env.LOG_LEVEL || 'trace',
});

export default l;
