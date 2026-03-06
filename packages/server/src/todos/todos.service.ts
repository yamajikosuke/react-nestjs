import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { CreateTodoDTO } from './todos.dto';
import { Todo } from './todos.entity';
import { Details } from './details.entity';
import { Category } from './category.entity';

const SALT = '12345';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
    @InjectRepository(Details)
    private readonly detailRepository: Repository<Details>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async delete(id: number): Promise<DeleteResult> {
    return await this.todoRepository.delete(id);
  }

  async update(id: number, todo: CreateTodoDTO): Promise<UpdateResult> {
    return await this.todoRepository.update(id, todo);
  }

  async updateDetail(id: number, detail: string): Promise<void> {
    const res = await this.todoRepository.findOne({ where: { id } });
    if (!res.detailsId) {
      return;
    }
    await this.detailRepository.update(res.detailsId, { detail });
    return;
  }

  async find(id): Promise<CreateTodoDTO> {
    const todos = await this.todoRepository.findOne({ where: { id } });
    return todos;
  }

  async findAll(): Promise<CreateTodoDTO[]> {
    // https://orkhan.gitbook.io/typeorm/docs/find-options
    const todos = await this.todoRepository.find({
      order: { id: 'DESC' },
      relations: ['details'],
    });
    return todos;
  }

  async getCategory(): Promise<any> {
    const res = await this.categoryRepository.find();
    return res;
  }

  async register(todoData: Record<string, any>): Promise<void> {
    const details = new Details();
    const todos = new Todo();
    details.detail = todoData.detail;
    todos.data = todoData.data;
    todos.dead_line = todoData.dead_line;
    const response = await this.detailRepository.save(details);
    todos.details = response;
    await this.todoRepository.save(todos);
    return;
  }
}
