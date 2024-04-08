export class Model {
    user;
    items;

    constructor() {
        this.user = "Utku";
        this.items = [
            new TodoItem("Spor", true),
            new TodoItem("Kahvaltı", false),
            new TodoItem("Kitap Okuma", false),
            new TodoItem("Sinema", false),

        ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description: string, action: boolean) {
        this.description = description;
        this.action = action;
    }
}