"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_count, _selected) {
        this._count = _count;
        this._selected = _selected;
    }
    LikeComponent.prototype.click = function () {
        this._count += this._selected ? -1 : 1;
        this._selected = !this._selected;
    };
    Object.defineProperty(LikeComponent.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
