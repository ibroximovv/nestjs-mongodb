import { Type } from 'class-transformer';
import { IsString, IsNumber, IsMongoId } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({ example: "Samsung galaxy s25 ultraaa", description: "Product name" })
    @IsString()
    name: string

    @ApiProperty({ example: 1200, description: "Product price" })
    @Type(() => Number)
    @IsNumber()
    price: number

    @ApiProperty({ example: 10, description: "Product count" })
    @Type(() => Number)
    @IsNumber()
    count: number

    @ApiProperty({ example: "67fd48b3140418756abdfd19", description: "Product categoryId" })
    @IsMongoId()
    category: String
}
