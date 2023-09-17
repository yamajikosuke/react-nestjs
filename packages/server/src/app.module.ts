import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { Todo } from './todos/todos.entity';
import { Details } from './todos/details.entity';
import { TodosModule } from './todos/todos.module';
import { DictionaryModule } from './dictionary/dictionary.module';
import { Key } from './dictionary/keys.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db-server',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'develop',
      entities: [User, Todo, Details, Key],
      synchronize: true,
    }),
    UsersModule,
    TodosModule,
    DictionaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
