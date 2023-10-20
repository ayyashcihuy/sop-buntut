import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { CreateTodoDto } from './dto/index.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response): void {
    const response = this.appService.getHello();

    res.status(200).json(response);
  }

  @Get('/todos')
  getTodos(@Res() res: Response): void {
    const response = this.appService.getTodos();

    res.status(200).json(response);
  }

  @Post()
  async createTodo(@Res() res: Response, @Body() createTodo: CreateTodoDto) {
    const todo = createTodo;

    res.status(201).json(todo);
  }
}
