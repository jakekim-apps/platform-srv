import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsModule } from "./modules/cards/cards.module";
import { CategoriesModule } from './modules/categories/categories.module';
import { SubCategoriesModule } from './modules/sub-categories/sub-categories.module';
import { UsersModule } from "./modules/users/users.module";
import { HistoriesModule } from "./modules/histories/histories.module";
import {AccountsModule} from "./modules/accounts/accounts.module";

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost:27017/platform'),
      CardsModule,
      CategoriesModule,
      SubCategoriesModule,
      UsersModule,
      HistoriesModule,
      AccountsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
