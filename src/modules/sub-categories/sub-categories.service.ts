import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SubCategory, SubCategoryDocument } from "./sub-category.model";

@Injectable()
export class SubCategoriesService {
    constructor(@InjectModel('subCategory') private readonly subCategoryModel: Model<SubCategoryDocument>) {}

    async createSubCategory(subCategory: SubCategory): Promise<SubCategory> {
        const newCategory = new this.subCategoryModel(subCategory);
        return newCategory.save()
    }

    async getSubCategories(){
        // return this.subCategoryModel.find();
        return this.subCategoryModel.aggregate([
            {
                $lookup: {
                    from: 'categories',
                    localField: "categoryId",
                    foreignField: "_id",
                    as: "category"
                }
            },
            {
                $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$category", 0 ] }, "$$ROOT" ] } }
            },
            { $project: { category: 0 } }
        ]);
    }

    async updateSubCategory(id,data):Promise<SubCategory> {
        return this.subCategoryModel.findByIdAndUpdate(id,data,{new:true})
    }

    async deleteSubCategory(id){
        return this.subCategoryModel.findByIdAndRemove(id)
    }
}
