import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import * as crypto from 'crypto';
import { CreateTodoDTO } from './todos.dto';
// import { CreateDetailsDTO } from './details.dto';
import { Todo } from './todos.entity';
import { Details } from './details.entity';

const SALT = '12345';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
    @InjectRepository(Details)
    private readonly detailRepository: Repository<Details>,
  ) {}

  private createPasswordDigest(password: string) {
    return crypto
      .createHash('sha256')
      .update(SALT + '/' + password)
      .digest('hex');
  }

  async findUserByScreenName(screenName: string): Promise<boolean> {
    const user = await this.todoRepository.findOne({ where: { screenName } });
    return !!user;
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.todoRepository.delete(id);
  }

  async update(id: number, todo: CreateTodoDTO): Promise<UpdateResult> {
    return await this.todoRepository.update(id, todo);
  }

  async updateDetail(id: number, detail: string): Promise<void> {
    const res = await this.todoRepository.findOne(id, {
      relations: ['details'],
    });
    console.log(res.details);
    if (!res.details) {
      return;
    }
    await this.detailRepository.update(res.details.id, { detail: detail });
    return;
  }

  async find(id): Promise<CreateTodoDTO> {
    const todos = await this.todoRepository.findOne(id);
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

  async register(todoData: Record<string, any>): Promise<void> {
    const details = new Details();
    const todos = new Todo();
    console.log('register');
    console.log(todoData);
    details.detail = todoData.detail;
    todos.data = todoData.data;
    todos.dead_line = todoData.dead_line;
    const response = await this.detailRepository.save(details);
    todos.details = response;
    // console.log(todos);
    await this.todoRepository.save(todos);
    return;
  }

  async loginUser(screenName: string, password: string) {
    return await this.todoRepository.findOne({
      where: {
        screenName,
        password: this.createPasswordDigest(password),
      },
    });
  }
}
