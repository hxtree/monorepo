"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turn = void 0;
const Cup_1 = require("./Cup");
const Luck_1 = require("./Luck");
const NotationCodec_1 = require("./NotationCodec");
class Turn {
    constructor(notation, luck) {
        this._notationCodec = new NotationCodec_1.NotationCodec();
        this._extraBonus = 0;
        if (luck === undefined) {
            this._luck = new Luck_1.Luck();
        }
        else {
            this._luck = new Luck_1.Luck(luck);
        }
        if (notation === undefined) {
            this._cup = new Cup_1.Cup();
        }
        else {
            this._cup = this._notationCodec.decodeCup(notation);
        }
    }
    get notation() {
        return this._notationCodec.encodeCup(this._cup);
    }
    set notation(value) {
        this._cup = this._notationCodec.decodeCup(value);
    }
    get luck() {
        return this._luck;
    }
    set luck(luck) {
        this._luck = luck;
    }
    get cup() {
        return this._cup;
    }
    set cup(cup) {
        this._cup = cup;
    }
    minPotential() {
        let total = 0;
        this._cup.forEach(function (collection) {
            total += collection.minPotential;
        });
        return total;
    }
    maxPotential() {
        let total = 0;
        this._cup.forEach(function (collection) {
            total += collection.maxPotential;
        });
        return total;
    }
    get total() {
        let total = 0;
        this._cup.forEach(function (collection) {
            total += collection.total;
        });
        return total;
    }
    get extraBonus() {
        return this._extraBonus;
    }
    roll() {
        const value = this._cup.roll();
        if (this._luck.status === Luck_1.Active.disable) {
            return this.total;
        }
        // update luck base value based on roll outcome percentage
        this._luck.update(this._cup.outcomePercent);
        const bonus = this._luck.modify(value) - value;
        // take luck modifier and distribute to dice
        // luck modifies actual dice not modifiers or multipliers
        // there is the potential for an amount to still exist after above iterations, store it
        this._extraBonus = this.cup.allocateBonuses(bonus);
        return this.total;
    }
}
exports.Turn = Turn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHVybi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1R1cm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsK0JBR2U7QUFDZixpQ0FJZ0I7QUFDaEIsbURBR3lCO0FBTXpCLE1BQWEsSUFBSTtJQU9iLFlBQ0ksUUFBNEIsRUFDNUIsSUFBd0I7UUFFeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUVyQixJQUFHLElBQUksS0FBSyxTQUFTLEVBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1NBQzNCO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFHLEVBQUUsQ0FBQztTQUN6QjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2RDtJQUNMLENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBVyxRQUFRLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxJQUFXLElBQUk7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQVcsSUFBSSxDQUFDLElBQVc7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQVcsR0FBRztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBVyxHQUFHLENBQUMsR0FBUztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRU0sWUFBWTtRQUVmLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsVUFBdUI7WUFDL0MsS0FBSyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU0sWUFBWTtRQUVmLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsVUFBdUI7WUFDL0MsS0FBSyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsSUFBVyxLQUFLO1FBRVosSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxVQUF1QjtZQUMvQyxLQUFLLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFTSxJQUFJO1FBRVAsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUvQixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLGFBQU0sQ0FBQyxPQUFPLEVBQUM7WUFDcEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3JCO1FBRUQsMERBQTBEO1FBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRS9DLDRDQUE0QztRQUM1Qyx5REFBeUQ7UUFDekQsdUZBQXVGO1FBQ3ZGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Q0FDSjtBQXZHRCxvQkF1R0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ29sbGVjdGlvbiB9IGZyb20gJy4vQ29sbGVjdGlvbic7XG5pbXBvcnQge1xuICAgIEN1cCxcbiAgICBJQ3VwXG59IGZyb20gJy4vQ3VwJztcbmltcG9ydCB7XG4gICAgQWN0aXZlLFxuICAgIElMdWNrLFxuICAgIEx1Y2tcbn0gZnJvbSAnLi9MdWNrJztcbmltcG9ydCB7XG4gICAgSU5vdGF0aW9uQ29kZWMsXG4gICAgTm90YXRpb25Db2RlY1xufSBmcm9tICcuL05vdGF0aW9uQ29kZWMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUdXJuIHtcblxufVxuXG5leHBvcnQgY2xhc3MgVHVybiBpbXBsZW1lbnRzIElUdXJuXG57XG4gICAgcHJpdmF0ZSBfbm90YXRpb25Db2RlYzogSU5vdGF0aW9uQ29kZWM7XG4gICAgcHJpdmF0ZSBfY3VwOiBJQ3VwO1xuICAgIHByaXZhdGUgX2x1Y2s6IElMdWNrO1xuICAgIHByaXZhdGUgX2V4dHJhQm9udXM6IG51bWJlcjsgLy9zdXJwbHVzQm9udXM7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIG5vdGF0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgICAgIGx1Y2s6IG51bWJlciB8IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgICB0aGlzLl9ub3RhdGlvbkNvZGVjID0gbmV3IE5vdGF0aW9uQ29kZWMoKTtcbiAgICAgICAgdGhpcy5fZXh0cmFCb251cyA9IDA7XG5cbiAgICAgICAgaWYobHVjayA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMuX2x1Y2sgPSBuZXcgTHVjaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbHVjayA9IG5ldyBMdWNrKGx1Y2spO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vdGF0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cCA9IG5ldyBDdXAoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cCA9IHRoaXMuX25vdGF0aW9uQ29kZWMuZGVjb2RlQ3VwKG5vdGF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbm90YXRpb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vdGF0aW9uQ29kZWMuZW5jb2RlQ3VwKHRoaXMuX2N1cCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBub3RhdGlvbih2YWx1ZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fY3VwID0gdGhpcy5fbm90YXRpb25Db2RlYy5kZWNvZGVDdXAodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbHVjaygpOiBJTHVjayB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sdWNrO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbHVjayhsdWNrOiBJTHVjayl7XG4gICAgICAgIHRoaXMuX2x1Y2sgPSBsdWNrO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY3VwKCk6IElDdXAge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY3VwKGN1cDogSUN1cCkge1xuICAgICAgICB0aGlzLl9jdXAgPSBjdXA7XG4gICAgfVxuXG4gICAgcHVibGljIG1pblBvdGVudGlhbCgpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgIHRoaXMuX2N1cC5mb3JFYWNoKGZ1bmN0aW9uIChjb2xsZWN0aW9uOiBJQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgdG90YWwgKz0gY29sbGVjdGlvbi5taW5Qb3RlbnRpYWw7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgfVxuXG4gICAgcHVibGljIG1heFBvdGVudGlhbCgpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgIHRoaXMuX2N1cC5mb3JFYWNoKGZ1bmN0aW9uIChjb2xsZWN0aW9uOiBJQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgdG90YWwgKz0gY29sbGVjdGlvbi5tYXhQb3RlbnRpYWw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRvdGFsKCk6IG51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgdGhpcy5fY3VwLmZvckVhY2goZnVuY3Rpb24gKGNvbGxlY3Rpb246IElDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICB0b3RhbCArPSBjb2xsZWN0aW9uLnRvdGFsO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZXh0cmFCb251cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFCb251cztcbiAgICB9XG5cbiAgICBwdWJsaWMgcm9sbCgpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fY3VwLnJvbGwoKTtcblxuICAgICAgICBpZih0aGlzLl9sdWNrLnN0YXR1cyA9PT0gQWN0aXZlLmRpc2FibGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG90YWw7XG4gICAgICAgIH1cbiAgICAgXG4gICAgICAgIC8vIHVwZGF0ZSBsdWNrIGJhc2UgdmFsdWUgYmFzZWQgb24gcm9sbCBvdXRjb21lIHBlcmNlbnRhZ2VcbiAgICAgICAgdGhpcy5fbHVjay51cGRhdGUodGhpcy5fY3VwLm91dGNvbWVQZXJjZW50KTtcblxuICAgICAgICBjb25zdCBib251cyA9IHRoaXMuX2x1Y2subW9kaWZ5KHZhbHVlKSAtIHZhbHVlO1xuXG4gICAgICAgIC8vIHRha2UgbHVjayBtb2RpZmllciBhbmQgZGlzdHJpYnV0ZSB0byBkaWNlXG4gICAgICAgIC8vIGx1Y2sgbW9kaWZpZXMgYWN0dWFsIGRpY2Ugbm90IG1vZGlmaWVycyBvciBtdWx0aXBsaWVyc1xuICAgICAgICAvLyB0aGVyZSBpcyB0aGUgcG90ZW50aWFsIGZvciBhbiBhbW91bnQgdG8gc3RpbGwgZXhpc3QgYWZ0ZXIgYWJvdmUgaXRlcmF0aW9ucywgc3RvcmUgaXRcbiAgICAgICAgdGhpcy5fZXh0cmFCb251cyA9IHRoaXMuY3VwLmFsbG9jYXRlQm9udXNlcyhib251cyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWw7XG4gICAgfVxufSJdfQ==