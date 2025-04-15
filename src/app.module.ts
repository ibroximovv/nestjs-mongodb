import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductModule, CategoryModule, MongooseModule.forRoot('mongodb://localhost/nest-homework')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
