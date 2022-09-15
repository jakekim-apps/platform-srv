import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsModule } from "./modules/cards/cards.module";
import { CategoriesModule } from './modules/categories/categories.module';
import { SubCategoriesModule } from './modules/sub-categories/sub-categories.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/platform'), CardsModule, CategoriesModule, SubCategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
