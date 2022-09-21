import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CategoriesService} from "./categories.service";
import {Category} from "./category.model";
import {CategoryUpdateDto} from "./category.update.dto";

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Get()
    async getAll() {
        return this.categoriesService.getCategories()
    }

    @Post()
    async createCategory(@Body() categoryDto: Category){
        return this.categoriesService.createCategory(categoryDto)
    }


    @Put(':id')
    async updateCategory(
        @Param('id') id:string ,@Body() updateData:CategoryUpdateDto
    ):Promise<Category>{
        return this.categoriesService.updateCategory(id,updateData)
    }

    // TODO remove child all
    @Delete(':id')
    async deleteCategory(@Param('id') id:string){
        return this.categoriesService.deleteCategory(id)
    }

}
