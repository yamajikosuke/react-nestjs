import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserProfile } from './user-profile.entity';
import {
  CreateUserProfileDTO,
  UpdateUserProfileDTO,
} from './user-profiles.dto';

@Injectable()
export class UserProfilesService {
  constructor(
    @InjectRepository(UserProfile)
    private readonly userProfileRepository: Repository<UserProfile>,
  ) {}

  async findAll(): Promise<UserProfile[]> {
    return await this.userProfileRepository.find({ order: { id: 'DESC' } });
  }

  async findById(id: number): Promise<UserProfile> {
    const userProfile = await this.userProfileRepository.findOne({
      where: { id },
    });

    if (!userProfile) {
      throw new NotFoundException(`User profile with id ${id} was not found.`);
    }

    return userProfile;
  }

  async create(userProfileData: CreateUserProfileDTO): Promise<UserProfile> {
    const userProfile = this.userProfileRepository.create(userProfileData);
    return await this.userProfileRepository.save(userProfile);
  }

  async update(
    id: number,
    userProfileData: UpdateUserProfileDTO,
  ): Promise<UserProfile> {
    const userProfile = await this.findById(id);
    Object.assign(userProfile, userProfileData);
    return await this.userProfileRepository.save(userProfile);
  }

  async remove(id: number): Promise<void> {
    const userProfile = await this.findById(id);
    await this.userProfileRepository.remove(userProfile);
  }
}
