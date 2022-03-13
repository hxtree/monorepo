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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTHVjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0x1Y2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esa0ZBQStFO0FBRS9FLElBQVksTUFHWDtBQUhELFdBQVksTUFBTTtJQUNkLHVDQUFVLENBQUE7SUFDVix5Q0FBVyxDQUFBO0FBQ2YsQ0FBQyxFQUhXLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQUdqQjtBQWNELE1BQWEsSUFBSTtJQU1iLFlBQW1CLEtBQWM7UUFIekIsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFJakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDZDQUFxQixDQUFDO1FBRTVDLDRCQUE0QjtRQUM1QixJQUFHLEtBQUssS0FBSyxTQUFTLEVBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFXLFNBQVMsQ0FBQyxTQUEwQjtRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQW1CO1FBRTdCLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELElBQVcsS0FBSztRQUVaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQWM7UUFFdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsRUFBRTtZQUNyQixNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUV6QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0I7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFBVyxpQkFBaUI7UUFFeEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUNyQjthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxDQUFDLENBQUM7U0FDWjthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQztDQUNKO0FBMUVELG9CQTBFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMdWNrQWRqdXN0bWVudCB9IGZyb20gJy4vTHVja0FkanVzdG1lbnQvQWJzdHJhY3RMdWNrQWRqdXN0bWVudCc7XG5pbXBvcnQgeyBEZWZhdWx0THVja0FkanVzdG1lbnQgfSBmcm9tICcuL0x1Y2tBZGp1c3RtZW50L0RlZmF1bHRMdWNrQWRqdXN0bWVudCc7XG5cbmV4cG9ydCBlbnVtIEFjdGl2ZSB7XG4gICAgZW5hYmxlID0gMCxcbiAgICBkaXNhYmxlID0gMSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTHVjayB7XG4gICAgZ2V0IHN0YXR1cygpOiBBY3RpdmU7XG4gICAgc2V0IHN0YXR1cyh2YWx1ZTogQWN0aXZlKTtcbiAgICBzZXQgYWxnb3JpdGhtKGFsZ29yaXRobTogSUx1Y2tBZGp1c3RtZW50KTtcbiAgICBnZXQgYWxnb3JpdGhtKCk6IElMdWNrQWRqdXN0bWVudDtcbiAgICB1cGRhdGUocm9sbFBlcmNlbnQ6IG51bWJlcik6IHZvaWQ7XG4gICAgZ2V0IHZhbHVlKCk6IG51bWJlcjtcbiAgICBzZXQgdmFsdWUobHVjazogbnVtYmVyKTtcbiAgICBtb2RpZnkobnVtYmVyOiBudW1iZXIpOiBudW1iZXI7XG4gICAgZ2V0IGFwcGxpY2FibGVQZXJjZW50KCk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEx1Y2sgaW1wbGVtZW50cyBJTHVjayB7XG4gICAgcHJpdmF0ZSBfc3RhdHVzOiBBY3RpdmU7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oaXN0b3J5OiBBcnJheTxudW1iZXI+ID0gW107XG4gICAgcHJpdmF0ZSBfYWxnb3JpdGhtOiBJTHVja0FkanVzdG1lbnQ7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IodmFsdWU/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtID0gbmV3IERlZmF1bHRMdWNrQWRqdXN0bWVudDtcbiAgICAgICAgXG4gICAgICAgIC8vIGRpc2FibGUgbHVjayBpZiB1bmRlZmluZWRcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBBY3RpdmUuZGlzYWJsZTtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IEFjdGl2ZS5lbmFibGU7XG4gICAgICAgIHRoaXMuX2hpc3RvcnkucHVzaCh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzdGF0dXModmFsdWU6IEFjdGl2ZSkge1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTsgICAgXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzdGF0dXMoKTogQWN0aXZlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXR1czsgICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYWxnb3JpdGhtKGFsZ29yaXRobTogSUx1Y2tBZGp1c3RtZW50KXtcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtID0gYWxnb3JpdGhtO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWxnb3JpdGhtKCk6IElMdWNrQWRqdXN0bWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGdvcml0aG07XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShyb2xsUGVyY2VudDogbnVtYmVyKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy52YWx1ZSArPSB0aGlzLl9hbGdvcml0aG0uYWRqdXN0bWVudChyb2xsUGVyY2VudCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpe1xuICAgICAgICB0aGlzLl9oaXN0b3J5LnB1c2godmFsdWUpO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb2RpZnkobnVtYmVyOiBudW1iZXIpOiBudW1iZXJcbiAgICB7XG4gICAgICAgICBpZiAodGhpcy5fc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgICBudW1iZXIgPSBudW1iZXIgKiB0aGlzLmFwcGxpY2FibGVQZXJjZW50O1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFwcGxpY2FibGVQZXJjZW50KCk6IG51bWJlclxuICAgIHsgICAgICAgIFxuICAgICAgICBjb25zdCBjaGFuZ2UgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5hYnModGhpcy5fdmFsdWUpICogLjAxO1xuICAgICAgICBpZiAodGhpcy5fdmFsdWUgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMSAtIGNoYW5nZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl92YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMSArIGNoYW5nZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=