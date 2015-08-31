module CookBook.Recipe {
    export class RecipeCategorySummary implements IRecipeCategorySummary {
        private _text: string;
        private _title: string;

        constructor(text: string, title: string) {
            this._text = text;
            this._title = title;
        }

        get text(): string {
            return this._text;
        }

        set text(theText: string) {
            this._text = theText;
        }

        get title(): string {
            return this._title;
        }

        set title(theTitle: string) {
            this._title = theTitle;
        }
    }
}