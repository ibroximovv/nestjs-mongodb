
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Category } from 'src/category/entities/category.entity';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  count: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Category" })
  category: mongoose.Types.ObjectId
}

export const ProductSchema = SchemaFactory.createForClass(Product);
