import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class updateUserInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsOptional()
  age?: number;

  @Field({ nullable: true })
  @IsOptional()
  isSubscribe?: boolean;
}
