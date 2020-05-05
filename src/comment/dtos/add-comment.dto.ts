import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddCommentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string;
}