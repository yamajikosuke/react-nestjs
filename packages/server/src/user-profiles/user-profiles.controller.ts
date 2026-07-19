import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateUserProfileDTO,
  UpdateUserProfileDTO,
} from './user-profiles.dto';
import { UserProfilesService } from './user-profiles.service';

@Controller('user-profiles')
export class UserProfilesController {
  constructor(private readonly userProfilesService: UserProfilesService) {}

  @Get()
  async getUserProfiles() {
    return await this.userProfilesService.findAll();
  }

  @Get(':id')
  async getUserProfile(@Param('id') id: string) {
    return await this.userProfilesService.findById(Number(id));
  }

  @Post()
  async createUserProfile(@Body() createUserProfileDTO: CreateUserProfileDTO) {
    return await this.userProfilesService.create(createUserProfileDTO);
  }

  @Put(':id')
  async updateUserProfile(
    @Param('id') id: string,
    @Body() updateUserProfileDTO: UpdateUserProfileDTO,
  ) {
    return await this.userProfilesService.update(
      Number(id),
      updateUserProfileDTO,
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUserProfile(@Param('id') id: string) {
    await this.userProfilesService.remove(Number(id));
  }
}
