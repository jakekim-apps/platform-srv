import { Module } from '@nestjs/common';
import { SubCategoriesController } from './sub-categories.controller';
import { SubCategoriesService } from './sub-categories.service';
import {MongooseModule} from "@nestjs/mongoose";
import {SubCategorySchema} from "./sub-category.model";

@Module({
  imports: [MongooseModule.forFeature([{name: 'subCategory', schema: SubCategorySchema}])],
  controllers: [SubCategoriesController],
  providers: [SubCategoriesService]
})
export class SubCategoriesModule {}
