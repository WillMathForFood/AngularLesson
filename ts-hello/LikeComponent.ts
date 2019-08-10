export class LikeComponent {
    constructor(private _count: number, private _selected: boolean) {}

    click() {
        this._count += this._selected ? -1 : 1;
        this._selected = !this._selected;
    }

    get count() {
        return this._count;
    }

    get selected() {
        return this._selected;
    }
}