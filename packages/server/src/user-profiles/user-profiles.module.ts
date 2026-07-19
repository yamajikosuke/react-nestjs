import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile } from './user-profile.entity';
import { UserProfilesController } from './user-profiles.controller';
import { UserProfilesService } from './user-profiles.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserProfile])],
  exports: [TypeOrmModule],
  providers: [UserProfilesService],
  controllers: [UserProfilesController],
})
export class UserProfilesModule {}
