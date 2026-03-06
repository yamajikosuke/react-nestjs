import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { Todo } from './todos.entity';
import { Details } from './details.entity';
import { Category } from './category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, Details, Category])],
  exports: [TypeOrmModule],
  providers: [TodosService],
  controllers: [TodosController],
})
export class TodosModule {}
