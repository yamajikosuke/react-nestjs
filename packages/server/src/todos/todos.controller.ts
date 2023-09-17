import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  HttpException,
  Get,
  Delete,
  Param,
  Put,
  Headers,
} from '@nestjs/common';
import { CreateTodoDTO } from './todos.dto';
import { TodosModule } from './todos.module';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getTodo(@Headers('accept-language') language: string) {
    console.log('Accept-Language:', language.split(',')[0]);

    return await this.todosService.findAll();
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async createTodo(@Body() createTodoDTO: CreateTodoDTO) {
    try {
      console.log('createTodoDTO');
      console.log(createTodoDTO);
      console.log('');

      await this.todosService.register(createTodoDTO);
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal server error.',
        },
        500,
      );
    }
    return;
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.todosService.delete(id);
  }

  @Put(':id')
  async update(@Body() createTodoDTO: any, @Param('id') id): Promise<any> {
    const todo = await this.todosService.find(id);
    await this.todosService.updateDetail(id, createTodoDTO.detail);
    todo.data = createTodoDTO.data;
    todo.is_done = createTodoDTO.is_done;
    todo.dead_line = createTodoDTO.dead_line;
    return await this.todosService.update(id, todo);
  }

  @Get(':id')
  async get(@Param('id') id): Promise<void> {
    const todo = await this.todosService.find(id);
    todo.is_done = !todo.is_done;
  }
}
