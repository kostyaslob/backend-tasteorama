import { Schema, model } from "mongoose";

const recipesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    area: {
      type: String,
    },
    instructions: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
    },
    time: {
      type: Number,
      required: true,
    },
    ingredients: [
      {
        ingredient: {
          type: Schema.Types.ObjectId,
          ref: "ingredients",
          required: true,
        },
        measure: {
          type: String,
          required: true,
        },
      },
    ],
    calories: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const RecipesCollection = model("recipes", recipesSchema);
