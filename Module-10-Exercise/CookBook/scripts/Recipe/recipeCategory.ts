module CookBook.Recipe {
    export class RecipeCategory extends BaseRecipeCategory implements IRecipeCategory {
        private _description: string;
        private _examples: IExample[];

        constructor(other: IRecipeCategory) {
            super(other.name, other.foodGroups);
            this._description = other.description;
            this._examples = other.examples;
        }

        get description(): string {
            return this._description;
        }

        set description(theDescription: string) {
            this._description = theDescription;
        }

        get examples(): IExample[] {
            return this._examples;
        }

        set examples(theExamples: IExample[]) {
            this._examples = theExamples || [];
        }
    }
}