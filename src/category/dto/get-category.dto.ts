import { IsOptional, IsNumber, IsIn, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ApiPropertyOptional } from "@nestjs/swagger";

export enum SortOrder {
    ASC = 'asc',
    DESC = "desc"
}

export enum OrderCoulmn {
    name = "name"
}

export class QueryCategoryDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    search?: string

    @ApiPropertyOptional({ example: 1})
    @Type(() => Number)
    @IsOptional()
    @IsNumber()
    page?: number = 1

    @ApiPropertyOptional({ example: 10})
    @Type(() => Number)
    @IsOptional()
    @IsNumber()
    limit?: number = 10

    @ApiPropertyOptional({ enum: SortOrder , example: 'asc' })
    @IsOptional()
    @IsIn(['asc', 'desc'])
    order?: 'asc' | 'desc' = 'desc';

    @ApiPropertyOptional({enum: OrderCoulmn, example: "name" })
    @IsOptional()
    @IsIn(['name'])
    column?: string
}