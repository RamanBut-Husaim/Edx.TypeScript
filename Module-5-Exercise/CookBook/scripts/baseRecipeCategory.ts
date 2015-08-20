class BaseRecipeCategory {
    private _name: string;
    private _foodGroups: FoodGroup[] = [];

    get name(): string {
        return this._name;
    };

    set name(theName: string) {
        this._name = theName;
    };

    get foodGroups(): FoodGroup[]{
        return this._foodGroups;
    };

    set foodGroups(theFoodGroups: FoodGroup[]) {
        this._foodGroups = theFoodGroups;
    }
} 