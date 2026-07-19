import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { Todo } from './todos/todos.entity';
import { Details } from './todos/details.entity';
import { Category } from './todos/category.entity';
import { TodosModule } from './todos/todos.module';
import { DictionaryModule } from './dictionary/dictionary.module';
import { User } from './users/users.entity';
import { UserProfile } from './user-profiles/user-profile.entity';
import { UserProfilesModule } from './user-profiles/user-profiles.module';
// import { Key } from './dictionary/keys.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'develop',
      entities: [Todo, Details, Category, User, UserProfile],
      synchronize: true,
    }),
    UsersModule,
    UserProfilesModule,
    TodosModule,
    DictionaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
