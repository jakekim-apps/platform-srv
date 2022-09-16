import mongoose from "mongoose";

enum ActionType {
    REVENUE,
    SPENDING
}

export class HistoryUpdateDto {
    title: string;
    description: string;
    amount: number;
    actionType: ActionType;
    categoryId: mongoose.Schema.Types.ObjectId;
    subCategoryId: mongoose.Schema.Types.ObjectId;
    userId: mongoose.Schema.Types.ObjectId;
}