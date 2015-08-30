class FoodGroup implements IFoodGroup {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(theName: string) {
        this._name = theName;
    }
} 