import { Request, Response } from 'express';
import { IResponse } from '../models/iResponse.model';
import { Helper } from '../../core/helper/helper';

export class IndexService {
  private helper: Helper;

  constructor() {
    this.helper = new Helper();
  }

  welcomeService(req: Request, res: Response): void {
    const response: IResponse = {
      status: true,
      message: 'Welcome to API (0.0.1)'
    };
    const helper = new Helper();
    helper.sentResponse(res, response, 200);
  }
}
