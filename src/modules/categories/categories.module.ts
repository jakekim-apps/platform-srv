import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { CategorySchema } from "./category.model";
import { SubCategorySchema } from "../sub-categories/sub-category.model";

@Module({
  imports: [
      MongooseModule.forFeature([{name: 'category', schema: CategorySchema}])
  ],
  providers: [CategoriesService],
  controllers: [CategoriesController]
})
export class CategoriesModule {}
