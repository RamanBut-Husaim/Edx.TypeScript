class FoodGroup {
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(theName: string) {
        this._name = theName;
    }
} 