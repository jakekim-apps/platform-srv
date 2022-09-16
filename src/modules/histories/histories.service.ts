import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {History, HistoryDocument} from "./history.model";
import {Model} from "mongoose";

@Injectable()
export class HistoriesService {
    constructor(@InjectModel('history') private readonly historyModel: Model<HistoryDocument>) {}


    // TODO need to update target related things
    async createHistory(history: History): Promise<History> {
        const newHistory = new this.historyModel(history);
        return newHistory.save();
    }

    async getHistory() {
        return this.historyModel.find();
    }

    async updateHistory(id, data): Promise<History> {
        return this.historyModel.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteHistory(id) {
        return this.historyModel.findByIdAndRemove(id);
    }
}
