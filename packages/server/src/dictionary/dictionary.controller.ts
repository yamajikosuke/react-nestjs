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
} from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { CreateKeyDTO } from './keys.dto';

@Controller('dictionary')
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Get(':id')
  async get(@Param('id') id): Promise<CreateKeyDTO> {
    return await this.dictionaryService.find(id);
  }
}
