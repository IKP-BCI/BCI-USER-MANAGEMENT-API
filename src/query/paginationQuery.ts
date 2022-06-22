import { ApiProperty } from '@nestjs/swagger';

export class PaginationQuery {
  @ApiProperty({
    minimum: 1,
    default: 1
  })
  page: number;

  @ApiProperty({
    minimum: 1,
    default: 10
  })
  limit: number;

  @ApiProperty({ required: false })
  firmName: string;

  @ApiProperty({ required: false })
  username: string;
}