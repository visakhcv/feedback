/*
Company: BzAnalytics <https://www.bzanalytics.ai>
Author: Rejinsha S <Rejinshalb@gmail.com>
index.ts (c) 2023
Desc: description
Created:  2023-10-28T10:19:33.825Z
Modified: 2023-10-28T10:34:17.283Z
*/

import { App } from './app';
import 'reflect-metadata';

class Index {
  constructor() {
    this.initialize();
  }

  async initialize() {
    const app = new App();

    await app.listen();
  }
}

new Index();
