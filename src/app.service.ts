import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTodos(): string {
    return 'this should return all todos from database';
  }
}
