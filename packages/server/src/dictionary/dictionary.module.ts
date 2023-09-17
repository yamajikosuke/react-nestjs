import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DictionaryService } from './dictionary.service';
import { DictionaryController } from './dictionary.controller';
import { Key } from './keys.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Key])],
  exports: [TypeOrmModule],
  providers: [DictionaryService],
  controllers: [DictionaryController],
})
export class DictionaryModule {}
