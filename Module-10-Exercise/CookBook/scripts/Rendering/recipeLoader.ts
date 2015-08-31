/// <reference path="../typings/jquery.d.ts" />

module CookBook.Rendering {
    import FoodGroup = CookBook.Food.FoodGroup;
    import RecipeCategories = CookBook.Recipe.RecipeCategories;
    import RecipeCategory = CookBook.Recipe.IRecipeCategory;
    import RecipeCategorySummary = CookBook.Recipe.IRecipeCategorySummary;
    import Example = CookBook.Recipe.IExample;
    import Ingredient = CookBook.Food.Ingredient;

    export class RecipeLoader {
        constructor(public url: string) {}

        load() {
            $.getJSON(this.url, (data) => {
                this.mapData(data);
            });
        }

        mapData(data) {
            if (data) {
                var categories: any[] = data.recipeCategories;
                CookBook.Rendering.recipeCategories = new RecipeCategories<RecipeCategory>();

                var recipeCategoriesSummary = new RecipeCategories<RecipeCategorySummary>();
                categories.forEach((category) => {
                    var recipeCategory = new CookBook.Recipe.RecipeCategory({
                        name: category.title,
                        foodGroups: this.getFoodGroups(category),
                        description: category.details,
                        examples: this.getExamples(category)
                    });
                    recipeCategories.items.push(recipeCategory);

                    var recipeCategorySummary = new CookBook.Recipe.RecipeCategorySummary(category.title, category.details);
                    recipeCategoriesSummary.items.push(recipeCategorySummary);
                });

                //Render the categories into the select
                CookBook.Rendering.renderer.renderCategories(recipeCategoriesSummary);
            } else {
                CookBook.Rendering.renderer.renderError();
            }
        }

        getFoodGroups(category): FoodGroup[] {
            //Map foodgroups data to TS object
            return category.foodGroups.map((foodGroup) => {
                var group = new FoodGroup(foodGroup.title);
                return group;
            });
        }

        getExamples(category): Example[] {
            return category.examples.map((example) => {
                return new CookBook.Recipe.Example({
                    name: example.name,
                    ingredients: this.getIngredients(example),
                    prepTime: example.prepTime
                });
            });
        }

        getIngredients(example): Ingredient[] {
            return example.ingredients.map((value) => {
                return new Ingredient(value);
            });
        }
    }
}