"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const Dice_1 = require("./Dice");
const NotationCodec_1 = require("./NotationCodec");
/**
 * A Collection holds same sided Dice and can be configured to modify or multiply the Dice outcome.
 */
class Collection {
    // Sides should be a Dice object
    constructor(amount, sides, modifier = 0, multiplier = 1) {
        this._dice = [];
        if (amount === undefined) {
            throw new RangeError('A collection must have at least one dice.');
        }
        for (let i = 1; i <= amount; i++) {
            this._dice.push(new Dice_1.Dice(sides));
        }
        this._sides = sides;
        this._modifier = modifier;
        this._multiplier = multiplier;
        this._excess = 0;
    }
    allocateBonuses(amount) {
        this._dice.forEach((dice) => {
            amount = dice.allocateBonuses(amount);
        });
        return amount;
    }
    set modifier(value) {
        this._modifier = value;
    }
    get modifier() {
        return this._modifier;
    }
    set multiplier(value) {
        this._multiplier = value;
    }
    get multiplier() {
        return this._multiplier;
    }
    get sides() {
        return this._sides;
    }
    get dice() {
        return this._dice;
    }
    set dice(value) {
        this._dice = value;
    }
    get value() {
        let value = 0;
        for (const dice of this._dice) {
            if (dice.value === undefined) {
                continue;
            }
            value += dice.value;
        }
        return (value + this._modifier) * this._multiplier;
    }
    get bonus() {
        let bonus = 0;
        for (const dice of this._dice) {
            if (dice.bonus === undefined) {
                continue;
            }
            bonus += dice.bonus;
        }
        return bonus;
    }
    set bonus(value) {
        this._dice = this._shuffle(this._dice);
        // do while seems to make more sense here
        this._dice.forEach(function (part, index, dice) {
            if (value === 0) {
                dice[index].bonus = 0;
            }
            if (dice[index].value === undefined) {
                throw new RangeError('A bonus cannot only be applied to a rolled dice.');
            }
            const bonus = dice[index].max - (dice[index].value ?? 0);
            dice[index].bonus = bonus;
            if (value > bonus) {
                value -= bonus;
            }
            else {
                value = 0;
            }
        });
        this._excess = value;
    }
    get totalNatural() {
        let total = 0;
        this._dice.forEach(function (part, index, dice) {
            total += dice[index].total;
        });
        return total;
    }
    get total() {
        return (this.totalNatural + this.modifier) * this.multiplier;
    }
    get excess() {
        return this._excess;
    }
    get notation() {
        const notationCodec = new NotationCodec_1.NotationCodec();
        return notationCodec.encodeCollection(this);
    }
    get minOutcome() {
        return this.count();
    }
    get maxOutcome() {
        return this.count() * this._sides;
    }
    get minPotential() {
        return (this.minOutcome + this.modifier) * this.multiplier;
    }
    get maxPotential() {
        return (this.maxOutcome + this.modifier) * this.multiplier;
    }
    get outcomePercent() {
        if (this.value === undefined) {
            throw new Error('Dice must be rolled before an outcome percent can be computed');
        }
        return (this.value - this.count()) / (this.maxOutcome - this.count());
    }
    count() {
        return this._dice.length;
    }
    roll() {
        this._dice.forEach(function (part, index, dice) {
            dice[index].roll();
        });
        return this.total;
    }
    _shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }
}
exports.Collection = Collection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUE4QjtBQUM5QixtREFBZ0Q7QUEyQmhEOztHQUVHO0FBQ0gsTUFBYSxVQUFVO0lBWW5CLGdDQUFnQztJQUNoQyxZQUFtQixNQUFjLEVBQUUsS0FBYSxFQUFFLFdBQW1CLENBQUMsRUFBRSxhQUFxQixDQUFDO1FBWnRGLFVBQUssR0FBZ0IsRUFBRSxDQUFDO1FBYTVCLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN0QixNQUFNLElBQUksVUFBVSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7U0FDckU7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDcEM7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRU0sZUFBZSxDQUFDLE1BQWM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRTtZQUM5QixNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFXLFFBQVEsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7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QUM7SUFFTSxJQUFJO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFVLEVBQUUsS0FBYSxFQUFFLElBQWlCO1lBQ3JFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU8sUUFBUSxDQUFDLEtBQWtCO1FBQy9CLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQzNCLFdBQVcsQ0FBQztRQUNoQixPQUFPLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDdkIsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFlBQVksQ0FBQyxDQUFDO1lBQ3ZELFlBQVksRUFBRSxDQUFDO1lBQ2YsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7U0FDekY7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQ0o7QUF6TEQsZ0NBeUxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGljZSB9IGZyb20gJy4vRGljZSc7XHJcbmltcG9ydCB7IE5vdGF0aW9uQ29kZWMgfSBmcm9tICcuL05vdGF0aW9uQ29kZWMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29sbGVjdGlvbiB7XHJcbiAgICBzZXQgbW9kaWZpZXIodmFsdWU6IG51bWJlcik7XHJcbiAgICBnZXQgbW9kaWZpZXIoKTogbnVtYmVyO1xyXG4gICAgc2V0IG11bHRpcGxpZXIodmFsdWU6IG51bWJlcik7XHJcbiAgICBnZXQgbXVsdGlwbGllcigpOiBudW1iZXI7XHJcbiAgICBnZXQgc2lkZXMoKTogbnVtYmVyO1xyXG4gICAgZ2V0IGRpY2UoKTogQXJyYXk8RGljZT47XHJcbiAgICBzZXQgZGljZSh2YWx1ZTogQXJyYXk8RGljZT4pO1xyXG4gICAgZ2V0IHZhbHVlKCk6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIGdldCBib251cygpOiBudW1iZXI7XHJcbiAgICBzZXQgYm9udXModmFsdWU6IG51bWJlcik7XHJcbiAgICBnZXQgdG90YWxOYXR1cmFsKCk6IG51bWJlcjtcclxuICAgIGdldCB0b3RhbCgpOiBudW1iZXI7XHJcbiAgICBnZXQgZXhjZXNzKCk6IG51bWJlcjtcclxuICAgIGdldCBub3RhdGlvbigpOiBzdHJpbmc7XHJcbiAgICBnZXQgbWluT3V0Y29tZSgpOiBudW1iZXI7XHJcbiAgICBnZXQgbWF4T3V0Y29tZSgpOiBudW1iZXI7XHJcbiAgICBnZXQgbWluUG90ZW50aWFsKCk6IG51bWJlcjtcclxuICAgIGdldCBtYXhQb3RlbnRpYWwoKTogbnVtYmVyO1xyXG4gICAgZ2V0IG91dGNvbWVQZXJjZW50KCk6IG51bWJlcjtcclxuICAgIGNvdW50KCk6IG51bWJlcjtcclxuICAgIHJvbGwoKTogbnVtYmVyO1xyXG4gICAgYWxsb2NhdGVCb251c2VzKGFtb3VudDogbnVtYmVyKTogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQSBDb2xsZWN0aW9uIGhvbGRzIHNhbWUgc2lkZWQgRGljZSBhbmQgY2FuIGJlIGNvbmZpZ3VyZWQgdG8gbW9kaWZ5IG9yIG11bHRpcGx5IHRoZSBEaWNlIG91dGNvbWUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbiBpbXBsZW1lbnRzIElDb2xsZWN0aW9uIHtcclxuICAgIHByaXZhdGUgX2RpY2U6IEFycmF5PERpY2U+ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfc2lkZXM6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9tb2RpZmllcjogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX211bHRpcGxpZXI6IG51bWJlcjtcclxuXHJcbiAgICAvKiogZXhjZXNzIGJvbnVzIGFtb3VudCB0aGF0IGNvdWxkIG5vdCBiZSBhYnNvcmJlZCBieSBkaWNlICovXHJcbiAgICBwcml2YXRlIF9leGNlc3M6IG51bWJlcjtcclxuXHJcbiAgICAvLyBTaWRlcyBzaG91bGQgYmUgYSBEaWNlIG9iamVjdFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGFtb3VudDogbnVtYmVyLCBzaWRlczogbnVtYmVyLCBtb2RpZmllcjogbnVtYmVyID0gMCwgbXVsdGlwbGllcjogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIGlmIChhbW91bnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQSBjb2xsZWN0aW9uIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgZGljZS4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGFtb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpY2UucHVzaChuZXcgRGljZShzaWRlcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2lkZXMgPSBzaWRlcztcclxuICAgICAgICB0aGlzLl9tb2RpZmllciA9IG1vZGlmaWVyO1xyXG4gICAgICAgIHRoaXMuX211bHRpcGxpZXIgPSBtdWx0aXBsaWVyO1xyXG4gICAgICAgIHRoaXMuX2V4Y2VzcyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFsbG9jYXRlQm9udXNlcyhhbW91bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy5fZGljZS5mb3JFYWNoKChkaWNlOiBEaWNlKSA9PiB7XHJcbiAgICAgICAgICAgIGFtb3VudCA9IGRpY2UuYWxsb2NhdGVCb251c2VzKGFtb3VudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG1vZGlmaWVyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tb2RpZmllciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbW9kaWZpZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9kaWZpZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBtdWx0aXBsaWVyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tdWx0aXBsaWVyID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtdWx0aXBsaWVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX211bHRpcGxpZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzaWRlcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRpY2UoKTogQXJyYXk8RGljZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaWNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZGljZSh2YWx1ZTogQXJyYXk8RGljZT4pIHtcclxuICAgICAgICB0aGlzLl9kaWNlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZGljZSBvZiB0aGlzLl9kaWNlKSB7XHJcbiAgICAgICAgICAgIGlmIChkaWNlLnZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhbHVlICs9IGRpY2UudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKHZhbHVlICsgdGhpcy5fbW9kaWZpZXIpICogdGhpcy5fbXVsdGlwbGllcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGJvbnVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGJvbnVzID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBkaWNlIG9mIHRoaXMuX2RpY2UpIHtcclxuICAgICAgICAgICAgaWYgKGRpY2UuYm9udXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9udXMgKz0gZGljZS5ib251cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBib251cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGJvbnVzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9kaWNlID0gdGhpcy5fc2h1ZmZsZSh0aGlzLl9kaWNlKTtcclxuXHJcbiAgICAgICAgLy8gZG8gd2hpbGUgc2VlbXMgdG8gbWFrZSBtb3JlIHNlbnNlIGhlcmVcclxuICAgICAgICB0aGlzLl9kaWNlLmZvckVhY2goZnVuY3Rpb24gKHBhcnQ6IERpY2UsIGluZGV4OiBudW1iZXIsIGRpY2U6IEFycmF5PERpY2U+KSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGljZVtpbmRleF0uYm9udXMgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGljZVtpbmRleF0udmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0EgYm9udXMgY2Fubm90IG9ubHkgYmUgYXBwbGllZCB0byBhIHJvbGxlZCBkaWNlLicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib251cyA9IGRpY2VbaW5kZXhdLm1heCAtIChkaWNlW2luZGV4XS52YWx1ZSA/PyAwKTtcclxuXHJcbiAgICAgICAgICAgIGRpY2VbaW5kZXhdLmJvbnVzID0gYm9udXM7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUgPiBib251cykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgLT0gYm9udXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fZXhjZXNzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0b3RhbE5hdHVyYWwoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9kaWNlLmZvckVhY2goZnVuY3Rpb24gKHBhcnQ6IERpY2UsIGluZGV4OiBudW1iZXIsIGRpY2U6IEFycmF5PERpY2U+KSB7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IGRpY2VbaW5kZXhdLnRvdGFsO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0b3RhbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAodGhpcy50b3RhbE5hdHVyYWwgKyB0aGlzLm1vZGlmaWVyKSAqIHRoaXMubXVsdGlwbGllcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGV4Y2VzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leGNlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBub3RhdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG5vdGF0aW9uQ29kZWMgPSBuZXcgTm90YXRpb25Db2RlYygpO1xyXG4gICAgICAgIHJldHVybiBub3RhdGlvbkNvZGVjLmVuY29kZUNvbGxlY3Rpb24odGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtaW5PdXRjb21lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1heE91dGNvbWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudCgpICogdGhpcy5fc2lkZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtaW5Qb3RlbnRpYWwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMubWluT3V0Y29tZSArIHRoaXMubW9kaWZpZXIpICogdGhpcy5tdWx0aXBsaWVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbWF4UG90ZW50aWFsKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLm1heE91dGNvbWUgKyB0aGlzLm1vZGlmaWVyKSAqIHRoaXMubXVsdGlwbGllcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG91dGNvbWVQZXJjZW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWNlIG11c3QgYmUgcm9sbGVkIGJlZm9yZSBhbiBvdXRjb21lIHBlcmNlbnQgY2FuIGJlIGNvbXB1dGVkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlIC0gdGhpcy5jb3VudCgpKSAvICh0aGlzLm1heE91dGNvbWUgLSB0aGlzLmNvdW50KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaWNlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcm9sbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHRoaXMuX2RpY2UuZm9yRWFjaChmdW5jdGlvbiAocGFydDogRGljZSwgaW5kZXg6IG51bWJlciwgZGljZTogQXJyYXk8RGljZT4pIHtcclxuICAgICAgICAgICAgZGljZVtpbmRleF0ucm9sbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy50b3RhbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zaHVmZmxlKGFycmF5OiBBcnJheTxEaWNlPik6IEFycmF5PERpY2U+e1xyXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsXHJcbiAgICAgICAgICAgIHJhbmRvbUluZGV4O1xyXG4gICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXgtLTtcclxuICAgICAgICAgICAgW2FycmF5W2N1cnJlbnRJbmRleF0sIGFycmF5W3JhbmRvbUluZGV4XV0gPSBbYXJyYXlbcmFuZG9tSW5kZXhdLCBhcnJheVtjdXJyZW50SW5kZXhdXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxufVxyXG4iXX0=