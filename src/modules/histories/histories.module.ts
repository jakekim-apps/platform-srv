import { Module } from '@nestjs/common';
import { HistoriesController } from './histories.controller';
import { HistoriesService } from './histories.service';
import {MongooseModule} from "@nestjs/mongoose";
import {HistorySchema} from "./history.model";

@Module({
  imports: [MongooseModule.forFeature([{name: 'history', schema: HistorySchema}])],
  controllers: [HistoriesController],
  providers: [HistoriesService]
})
export class HistoriesModule {}
