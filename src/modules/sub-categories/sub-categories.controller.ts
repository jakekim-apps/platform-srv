import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SubCategoriesService } from "./sub-categories.service";
import { SubCategory } from "./sub-category.model";
import {SubCategoryUpdateDto} from "./sub-category.update.dto";

@Controller('sub-categories')
export class SubCategoriesController {
    constructor(private readonly subCategoriesService: SubCategoriesService) {}

    @Get()
    async getAll() {
        return this.subCategoriesService.getSubCategories()
    }

    @Post()
    async createSubCategory(@Body() subCategoryDto: SubCategory){
        return this.subCategoriesService.createSubCategory(subCategoryDto)
    }

    @Put(':id')
    async updateSubCategory(
        @Param('id') id:string ,@Body() updateData:SubCategoryUpdateDto
    ):Promise<SubCategory>{
        return this.subCategoriesService.updateSubCategory(id,updateData)
    }

    @Delete(':id')
    async deleteSubCategory(@Param('id') id:string){
        return this.subCategoriesService.deleteSubCategory(id)
    }
}

