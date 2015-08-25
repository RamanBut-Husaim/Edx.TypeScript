class Example implements IExample {
    private _name: string;
    private _ingredients: Ingredient[] = [];
    private _prepTime: string; 

    constructor(example: IExample) {
        this._name = example.name;
        this._ingredients = example.ingredients;
        this._prepTime = example.prepTime;
    }
    
    get name(): string {
        return this._name;
    }
    
    set name(theName: string) {
        this._name = theName;
    }

    get ingredients(): Ingredient[] {
        return this._ingredients;
    }

    set ingredients(theIngredients: Ingredient[]) {
        this._ingredients = theIngredients || [];
    }

    get prepTime(): string {
        return this._prepTime;
    }

    set prepTime(thePrepTime: string) {
        this._prepTime = thePrepTime;
    }
}


