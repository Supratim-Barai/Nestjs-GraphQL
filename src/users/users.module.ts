import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersServices } from './users.service';

@Module({
    providers:[UsersResolver,UsersServices]
})
export class USersModule {}
