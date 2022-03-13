"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luck = exports.Active = void 0;
const DefaultLuckAdjustment_1 = require("./LuckAdjustment/DefaultLuckAdjustment");
var Active;
(function (Active) {
    Active[Active["enable"] = 0] = "enable";
    Active[Active["disable"] = 1] = "disable";
})(Active = exports.Active || (exports.Active = {}));
class Luck {
    constructor(value) {
        this._history = [];
        this._algorithm = new DefaultLuckAdjustment_1.DefaultLuckAdjustment;
        // disable luck if undefined
        if (value === undefined) {
            this._status = Active.disable;
            this._value = 0;
            return;
        }
        this._status = Active.enable;
        this._history.push(value);
        this._value = value;
    }
    set status(value) {
        this._status = value;
    }
    get status() {
        return this._status;
    }
    set algorithm(algorithm) {
        this._algorithm = algorithm;
    }
    get algorithm() {
        return this._algorithm;
    }
    update(rollPercent) {
        this.value += this._algorithm.adjustment(rollPercent);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._history.push(value);
        this._value = value;
    }
    modify(number) {
        if (this._status === 0) {
            number = number * this.applicablePercent;
            return Math.round(number);
        }
        return number;
    }
    get applicablePercent() {
        const change = Math.random() * Math.abs(this._value) * .01;
        if (this._value < 0) {
            return 1 - change;
        }
        else if (this._value === 0) {
            return 1;
        }
        else {
            return 1 + change;
        }
    }
}
exports.Luck = Luck;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTHVjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MdWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGtGQUErRTtBQUUvRSxJQUFZLE1BR1g7QUFIRCxXQUFZLE1BQU07SUFDZCx1Q0FBVSxDQUFBO0lBQ1YseUNBQVcsQ0FBQTtBQUNmLENBQUMsRUFIVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFHakI7QUFjRCxNQUFhLElBQUk7SUFNYixZQUFtQixLQUFjO1FBSHpCLGFBQVEsR0FBa0IsRUFBRSxDQUFDO1FBSWpDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSw2Q0FBcUIsQ0FBQztRQUU1Qyw0QkFBNEI7UUFDNUIsSUFBRyxLQUFLLEtBQUssU0FBUyxFQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBVyxTQUFTLENBQUMsU0FBMEI7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQVcsU0FBUztRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFtQjtRQUU3QixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxJQUFXLEtBQUs7UUFFWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQVcsS0FBSyxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFjO1FBRXZCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDckIsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFFekMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQVcsaUJBQWlCO1FBRXhCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQixPQUFPLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDckI7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUNyQjtJQUNMLENBQUM7Q0FDSjtBQTFFRCxvQkEwRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTHVja0FkanVzdG1lbnQgfSBmcm9tICcuL0x1Y2tBZGp1c3RtZW50L0Fic3RyYWN0THVja0FkanVzdG1lbnQnO1xuaW1wb3J0IHsgRGVmYXVsdEx1Y2tBZGp1c3RtZW50IH0gZnJvbSAnLi9MdWNrQWRqdXN0bWVudC9EZWZhdWx0THVja0FkanVzdG1lbnQnO1xuXG5leHBvcnQgZW51bSBBY3RpdmUge1xuICAgIGVuYWJsZSA9IDAsXG4gICAgZGlzYWJsZSA9IDEsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUx1Y2sge1xuICAgIGdldCBzdGF0dXMoKTogQWN0aXZlO1xuICAgIHNldCBzdGF0dXModmFsdWU6IEFjdGl2ZSk7XG4gICAgc2V0IGFsZ29yaXRobShhbGdvcml0aG06IElMdWNrQWRqdXN0bWVudCk7XG4gICAgZ2V0IGFsZ29yaXRobSgpOiBJTHVja0FkanVzdG1lbnQ7XG4gICAgdXBkYXRlKHJvbGxQZXJjZW50OiBudW1iZXIpOiB2b2lkO1xuICAgIGdldCB2YWx1ZSgpOiBudW1iZXI7XG4gICAgc2V0IHZhbHVlKGx1Y2s6IG51bWJlcik7XG4gICAgbW9kaWZ5KG51bWJlcjogbnVtYmVyKTogbnVtYmVyO1xuICAgIGdldCBhcHBsaWNhYmxlUGVyY2VudCgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBMdWNrIGltcGxlbWVudHMgSUx1Y2sge1xuICAgIHByaXZhdGUgX3N0YXR1czogQWN0aXZlO1xuICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaGlzdG9yeTogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgIHByaXZhdGUgX2FsZ29yaXRobTogSUx1Y2tBZGp1c3RtZW50O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHVlPzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2FsZ29yaXRobSA9IG5ldyBEZWZhdWx0THVja0FkanVzdG1lbnQ7XG4gICAgICAgIFxuICAgICAgICAvLyBkaXNhYmxlIGx1Y2sgaWYgdW5kZWZpbmVkXG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gQWN0aXZlLmRpc2FibGU7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdGF0dXMgPSBBY3RpdmUuZW5hYmxlO1xuICAgICAgICB0aGlzLl9oaXN0b3J5LnB1c2godmFsdWUpO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc3RhdHVzKHZhbHVlOiBBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7ICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc3RhdHVzKCk6IEFjdGl2ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7ICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGFsZ29yaXRobShhbGdvcml0aG06IElMdWNrQWRqdXN0bWVudCl7XG4gICAgICAgIHRoaXMuX2FsZ29yaXRobSA9IGFsZ29yaXRobTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFsZ29yaXRobSgpOiBJTHVja0FkanVzdG1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWxnb3JpdGhtO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUocm9sbFBlcmNlbnQ6IG51bWJlcik6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudmFsdWUgKz0gdGhpcy5fYWxnb3JpdGhtLmFkanVzdG1lbnQocm9sbFBlcmNlbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5faGlzdG9yeS5wdXNoKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW9kaWZ5KG51bWJlcjogbnVtYmVyKTogbnVtYmVyXG4gICAge1xuICAgICAgICAgaWYgKHRoaXMuX3N0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgbnVtYmVyID0gbnVtYmVyICogdGhpcy5hcHBsaWNhYmxlUGVyY2VudDtcblxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhcHBsaWNhYmxlUGVyY2VudCgpOiBudW1iZXJcbiAgICB7ICAgICAgICBcbiAgICAgICAgY29uc3QgY2hhbmdlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguYWJzKHRoaXMuX3ZhbHVlKSAqIC4wMTtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIDEgLSBjaGFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fdmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDEgKyBjaGFuZ2U7XG4gICAgICAgIH1cbiAgICB9XG59Il19