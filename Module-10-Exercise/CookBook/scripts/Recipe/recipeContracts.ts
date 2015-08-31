module CookBook.Recipe {
    import FoodGroup = CookBook.Food.FoodGroup;
    import Ingredient = CookBook.Food.Ingredient;

    export interface IBaseRecipeCategory {
        name: string;
        foodGroups: FoodGroup[];
    }

    export interface IRecipeCategory extends IBaseRecipeCategory {
        description: string;
        examples: IExample[];
    }

    export interface IRecipeCategorySummary {
        text: string;
        title: string;
    }

    export interface IExample {
        name: string;
        prepTime: string;
        ingredients: Ingredient[];
    }
}