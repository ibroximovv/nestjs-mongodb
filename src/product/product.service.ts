import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { QueryProdutDto } from './dto/get-product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>){}

  async create(createProductDto: CreateProductDto) {
    try {
      const data = await this.productModel.create(createProductDto);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(query: QueryProdutDto) {
    try {
      const { search, page = 1, limit = 10, categoryId, order = "desc", column = "name" } = query
      
      interface FilterObj {
        name?: {$regex: string, $options: string },
        category?: string
      }
      let filter: FilterObj = {}

      if (search) {
        filter.name = { $regex: search, $options: 'i' };
      }

      if (categoryId) {
        filter.category = categoryId
      }
      
      const data = (await this.productModel.find( filter ).populate('category').sort({[column]: order === "asc" ? 1 : -1}).limit(limit).skip((page - 1) * limit))
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string) {
    try {
      const data = await this.productModel.findById(id);
      if(!data) {
        return 
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const findData = await this.productModel.findById(id);
      if(!findData) {
        return 
      }
      const data = await this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true })
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: string) {
    try {
      const findData = await this.productModel.findById(id);
      if(!findData) {
        return 
      }
      const data = await this.productModel.findByIdAndDelete(id)
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
