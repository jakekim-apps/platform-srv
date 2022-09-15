import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Category, CategoryDocument} from "./category.model";
import {Model} from "mongoose";
import {Card} from "../cards/card.model";

@Injectable()
export class CategoriesService {
    constructor(@InjectModel('category') private readonly categoryModel: Model<CategoryDocument>) {}

    async createCategory(category: Category): Promise<Category> {
        const newCategory = new this.categoryModel(category);
        return newCategory.save()
    }

    async getCategories(){
        return this.categoryModel.find();
    }

    async updateCategory(id,data):Promise<Card> {
        return this.categoryModel.findByIdAndUpdate(id,data,{new:true})
    }

    async deleteCategory(id){
        return this.categoryModel.findByIdAndRemove(id)
    }

}
