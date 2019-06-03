export class Toolbar {
    constructor(
        private id: string,
        private label: string,
        private icon: string
    ) {}

    getId = (): string => this.id;
    getLabel = (): string => this.label;
    getIcon = (): string => this.icon;
}
