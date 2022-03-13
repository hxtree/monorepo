"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Collection_1 = require("../components/Collection");
const Cup_1 = require("../components/Cup");
describe('Cup', () => {
    test('.roll()', () => {
        const cup = new Cup_1.Cup();
        cup.push(new Collection_1.Collection(10, 6));
        cup.push(new Collection_1.Collection(1, 2));
        expect(cup.roll()).toBeLessThan(62);
    });
    test('get outcomePercentage() greater than equal to 0', () => {
        const cup = new Cup_1.Cup();
        cup.push(new Collection_1.Collection(10, 6));
        cup.push(new Collection_1.Collection(1, 2));
        cup.roll();
        expect(cup.outcomePercent).toBeGreaterThanOrEqual(0);
    });
    test('get outcomePercentage() greater than equal to 1', () => {
        const cup = new Cup_1.Cup();
        cup.push(new Collection_1.Collection(10, 6));
        cup.push(new Collection_1.Collection(1, 2));
        cup.roll();
        expect(cup.outcomePercent).toBeLessThanOrEqual(1);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VwLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvX190ZXN0c19fL0N1cC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseURBQXNEO0FBQ3RELDJDQUF3QztBQUV4QyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUNqQixNQUFNLEdBQUcsR0FBRyxJQUFJLFNBQUcsRUFBRSxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSx1QkFBVSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSx1QkFBVSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsaURBQWlELEVBQUUsR0FBRyxFQUFFO1FBQ3pELE1BQU0sR0FBRyxHQUFHLElBQUksU0FBRyxFQUFFLENBQUM7UUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUFVLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUFVLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxpREFBaUQsRUFBRSxHQUFHLEVBQUU7UUFDekQsTUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFHLEVBQUUsQ0FBQztRQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksdUJBQVUsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksdUJBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db2xsZWN0aW9uJztcbmltcG9ydCB7IEN1cCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ3VwJztcblxuZGVzY3JpYmUoJ0N1cCcsICgpID0+IHtcbiAgICB0ZXN0KCcucm9sbCgpJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXAgPSBuZXcgQ3VwKCk7XG4gICAgICAgIGN1cC5wdXNoKG5ldyBDb2xsZWN0aW9uKDEwLDYpKTtcbiAgICAgICAgY3VwLnB1c2gobmV3IENvbGxlY3Rpb24oMSwyKSk7XG4gICAgICAgIGV4cGVjdChjdXAucm9sbCgpKS50b0JlTGVzc1RoYW4oNjIpO1xuICAgIH0pO1xuXG4gICAgdGVzdCgnZ2V0IG91dGNvbWVQZXJjZW50YWdlKCkgZ3JlYXRlciB0aGFuIGVxdWFsIHRvIDAnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cCA9IG5ldyBDdXAoKTtcbiAgICAgICAgY3VwLnB1c2gobmV3IENvbGxlY3Rpb24oMTAsNikpO1xuICAgICAgICBjdXAucHVzaChuZXcgQ29sbGVjdGlvbigxLDIpKTtcbiAgICAgICAgY3VwLnJvbGwoKTtcbiAgICAgICAgZXhwZWN0KGN1cC5vdXRjb21lUGVyY2VudCkudG9CZUdyZWF0ZXJUaGFuT3JFcXVhbCgwKTtcbiAgICB9KTtcbiBcbiAgICB0ZXN0KCdnZXQgb3V0Y29tZVBlcmNlbnRhZ2UoKSBncmVhdGVyIHRoYW4gZXF1YWwgdG8gMScsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VwID0gbmV3IEN1cCgpO1xuICAgICAgICBjdXAucHVzaChuZXcgQ29sbGVjdGlvbigxMCw2KSk7XG4gICAgICAgIGN1cC5wdXNoKG5ldyBDb2xsZWN0aW9uKDEsMikpO1xuICAgICAgICBjdXAucm9sbCgpO1xuICAgICAgICBleHBlY3QoY3VwLm91dGNvbWVQZXJjZW50KS50b0JlTGVzc1RoYW5PckVxdWFsKDEpO1xuICAgIH0pO1xufSk7Il19