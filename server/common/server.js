import Express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as os from 'os';
import cookieParser from 'cookie-parser';
import expressHbs from 'express-handlebars';
import { OpenApiValidator } from 'express-openapi-validator';
import errorHandler from '../api/middlewares/error.handler';
// import rts from '../api/controllers/examples/router';

import l from './logger';
import middlewareStackPrinter from 'middleware-stack-printer';
const app = new Express();

export default class ExpressServer {
  constructor() {
    console.log = l.info;
    const root = path.normalize(`${__dirname}/../..`);
    l.info(`appPath = ${root}client`);
    app.set('appPath', `${root}client`);
    app.use(
      middlewareStackPrinter({
        hideAnon: true,
        printStack: true,
      })
    );
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || '100kb',
      })
    );
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(Express.static(`${root}/public`));

    app.engine(
      '.hbs',
      expressHbs({
        defaultLayout: 'layouts/layout',
        extname: '.hbs',
      })
    );
    app.set('view engine', '.hbs');
    const views = path.join(__dirname, 'views');
    app.set('views', views);

    const apiSpecPath = path.join(__dirname, 'api.yml');
    app.use(
      process.env.OPENAPI_SPEC || '/api/v1/spec',
      Express.static(apiSpecPath)
    );
    new OpenApiValidator({
      apiSpecPath,
    }).install(app);
  }

  router(routes) {
    routes(app);
    // l.info('Routs for the app is as follows:', app.route);
    app.use(errorHandler);

    return this;
  }
  listen(port = process.env.PORT || 5000) {
    const welcome = p => () =>
      l.info(
        `up and running in ${process.env.NODE_ENV ||
          'development'} @: ${os.hostname()} on port: ${p}}`
      );
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}
