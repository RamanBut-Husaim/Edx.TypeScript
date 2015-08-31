module CookBook.Recipe {
    import FoodGroup = CookBook.Food.FoodGroup;

    export class BaseRecipeCategory implements IBaseRecipeCategory {
        private _name: string;
        private _foodGroups: FoodGroup[] = [];

        constructor(name: string, foodGroups: FoodGroup[]) {
            this._name = name;
            this._foodGroups = foodGroups || [];
        }

        get name(): string {
            return this._name;
        }

        set name(theName: string) {
            this._name = theName;
        }

        get foodGroups(): FoodGroup[] {
            return this._foodGroups;
        }

        set foodGroups(theFoodGroups: FoodGroup[]) {
            this._foodGroups = theFoodGroups || [];
        }
    }
}