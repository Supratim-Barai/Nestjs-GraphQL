import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql'
import { USersModule } from './users/users.module';

@Module({
  imports:[
      GraphQLModule.forRoot({
          autoSchemaFile:true
      }),
      USersModule
  ],
  controllers:[],
  providers:[]
})
export class AppModule {}
