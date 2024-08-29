/*
Company: BzAnalytics <https://www.bzanalytics.ai>
Author: Rejinsha S <Rejinshalb@gmail.com>
app.ts (c) 2023
Desc: description
Created:  2023-10-28T10:19:33.825Z
Modified: 2023-10-28T10:35:01.622Z
*/

import express, { Application } from 'express';
import cors from 'cors';
import 'reflect-metadata';

// Routes
import path from 'path';

import cookieParser from 'cookie-parser';
require('dotenv').config();


import userRouter from './routes/user.routes';


export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.use(cookieParser());
  }

  routes() {
    this.app.use('/feedback', userRouter)
  }

  async listen() {
    // this.app.locals.token = localStorage.getItem('admintoken')
    await this.app.listen(this.app.get('port'));
    // eslint-disable-next-line no-console
    console.log(`server started at http://localhost:${this.app.get('port')}`);
  }
}
