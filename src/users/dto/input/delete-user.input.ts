import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class deleteUserInput {
  @Field()
  @IsNotEmpty()
  userId: string;
}
