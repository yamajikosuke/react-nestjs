import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import * as crypto from 'crypto';
import { CreateKeyDTO } from './keys.dto';
// import { CreateDetailsDTO } from './details.dto';
import { Key } from './keys.entity';

const SALT = '12345';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectRepository(Key)
    private readonly keyRepository: Repository<Key>,
  ) {}

  async find(id): Promise<CreateKeyDTO> {
    const keys = await this.keyRepository.findOne(id);
    return keys;
  }
}
