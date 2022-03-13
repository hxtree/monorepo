"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotationCodec_1 = require("../components/NotationCodec");
const Turn_1 = require("../components/Turn");
describe('Turn', () => {
    test('.constructor()', () => {
        const turn = new Turn_1.Turn('d6,10d12+2*2', 0);
        const notationCodec = new NotationCodec_1.NotationCodec();
        const cup = notationCodec.decodeCup('d6,10d12+2*2');
        expect(turn.cup).toEqual(cup);
    });
    test('get notation()', () => {
        const turn = new Turn_1.Turn('d6,10d12+2*2', 0);
        expect(turn.notation).toBe('d6,10d12+2*2');
    });
    test('set notation()', () => {
        const turn = new Turn_1.Turn('d6', 0);
        turn.notation = 'd8';
        expect(turn.notation).toBe('d8');
    });
    test('get luck()', () => {
        const turn = new Turn_1.Turn('d6,10d12+2*2', 10);
        expect(turn.luck.value).toBe(10);
    });
    test('set luck()', () => {
        const turn = new Turn_1.Turn('d6', 0);
        turn.luck.value = 8;
        expect(turn.luck.value).toBe(8);
    });
    test('get cup()', () => {
        const turn = new Turn_1.Turn('d6,10d12+2*2', 10);
        const notationCodec = new NotationCodec_1.NotationCodec();
        const cup = notationCodec.decodeCup('d6,10d12+2*2');
        expect(turn.cup).toEqual(cup);
    });
    test('set cup()', () => {
        const turn = new Turn_1.Turn('d6', 0);
        const notationCodec = new NotationCodec_1.NotationCodec();
        const cup = notationCodec.decodeCup('d6,10d12+2*2');
        turn.cup = cup;
        expect(turn.cup).toEqual(cup);
    });
    test('roll() greater than', () => {
        const turn = new Turn_1.Turn('10d6', 0);
        expect(turn.roll()).toBeGreaterThanOrEqual(10);
    });
    test('roll() less than', () => {
        const turn = new Turn_1.Turn('10d6', 0);
        expect(turn.roll()).toBeLessThanOrEqual(60);
    });
    test('minPotential()', () => {
        const turn = new Turn_1.Turn('10d6', 0);
        expect(turn.minPotential()).toBe(10);
    });
    test('maxPotential()', () => {
        const turn = new Turn_1.Turn('10d6', 0);
        expect(turn.maxPotential()).toBe(60);
    });
    test('Total should not be 100% every time', () => {
        // 1 out of a million chance of failing
        const turn = new Turn_1.Turn('1000000d6', 0);
        const outcome = turn.roll();
        expect(outcome).toBeLessThan(6000000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHVybi50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL19fdGVzdHNfXy9UdXJuLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBNEQ7QUFDNUQsNkNBQTBDO0FBRTFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7UUFDeEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsY0FBYyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBQzFDLE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO1FBQ3hCLE1BQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLGNBQWMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7UUFDeEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBR0gsSUFBSSxDQUFDLFlBQVksRUFB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RyxFQUFFO1FBQzdDLHVDQUF1QztRQUN2QyxNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vdGF0aW9uQ29kZWMgfSBmcm9tICcuLi9jb21wb25lbnRzL05vdGF0aW9uQ29kZWMnO1xuaW1wb3J0IHsgVHVybiB9IGZyb20gJy4uL2NvbXBvbmVudHMvVHVybic7XG5cbmRlc2NyaWJlKCdUdXJuJywgKCkgPT4ge1xuICAgIHRlc3QoJy5jb25zdHJ1Y3RvcigpJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0dXJuID0gbmV3IFR1cm4oJ2Q2LDEwZDEyKzIqMicsMCk7XG4gICAgICAgIGNvbnN0IG5vdGF0aW9uQ29kZWMgPSBuZXcgTm90YXRpb25Db2RlYygpO1xuICAgICAgICBjb25zdCBjdXAgPSBub3RhdGlvbkNvZGVjLmRlY29kZUN1cCgnZDYsMTBkMTIrMioyJyk7XG4gICAgICAgIGV4cGVjdCh0dXJuLmN1cCkudG9FcXVhbChjdXApO1xuICAgIH0pO1xuXG4gICAgdGVzdCgnZ2V0IG5vdGF0aW9uKCknLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHR1cm4gPSBuZXcgVHVybignZDYsMTBkMTIrMioyJywwKTtcbiAgICAgICAgZXhwZWN0KHR1cm4ubm90YXRpb24pLnRvQmUoJ2Q2LDEwZDEyKzIqMicpO1xuICAgIH0pO1xuXG4gICAgdGVzdCgnc2V0IG5vdGF0aW9uKCknLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHR1cm4gPSBuZXcgVHVybignZDYnLDApO1xuICAgICAgICB0dXJuLm5vdGF0aW9uID0gJ2Q4JztcbiAgICAgICAgZXhwZWN0KHR1cm4ubm90YXRpb24pLnRvQmUoJ2Q4Jyk7XG4gICAgfSk7XG4gICAgXG4gICAgXG4gICAgdGVzdCgnZ2V0IGx1Y2soKScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdHVybiA9IG5ldyBUdXJuKCdkNiwxMGQxMisyKjInLDEwKTtcbiAgICAgICAgZXhwZWN0KHR1cm4ubHVjay52YWx1ZSkudG9CZSgxMCk7XG4gICAgfSk7XG5cbiAgICB0ZXN0KCdzZXQgbHVjaygpJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0dXJuID0gbmV3IFR1cm4oJ2Q2JywwKTtcbiAgICAgICAgdHVybi5sdWNrLnZhbHVlID0gODtcbiAgICAgICAgZXhwZWN0KHR1cm4ubHVjay52YWx1ZSkudG9CZSg4KTtcbiAgICB9KTtcblxuICAgIHRlc3QoJ2dldCBjdXAoKScsICgpID0+IHtcbiAgICAgICAgY29uc3QgdHVybiA9IG5ldyBUdXJuKCdkNiwxMGQxMisyKjInLDEwKTtcbiAgICAgICAgY29uc3Qgbm90YXRpb25Db2RlYyA9IG5ldyBOb3RhdGlvbkNvZGVjKCk7XG4gICAgICAgIGNvbnN0IGN1cCA9IG5vdGF0aW9uQ29kZWMuZGVjb2RlQ3VwKCdkNiwxMGQxMisyKjInKTtcbiAgICAgICAgZXhwZWN0KHR1cm4uY3VwKS50b0VxdWFsKGN1cCk7XG4gICAgfSk7XG5cbiAgICB0ZXN0KCdzZXQgY3VwKCknLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHR1cm4gPSBuZXcgVHVybignZDYnLDApO1xuICAgICAgICBjb25zdCBub3RhdGlvbkNvZGVjID0gbmV3IE5vdGF0aW9uQ29kZWMoKTtcbiAgICAgICAgY29uc3QgY3VwID0gbm90YXRpb25Db2RlYy5kZWNvZGVDdXAoJ2Q2LDEwZDEyKzIqMicpO1xuICAgICAgICB0dXJuLmN1cCA9IGN1cDtcbiAgICAgICAgZXhwZWN0KHR1cm4uY3VwKS50b0VxdWFsKGN1cCk7XG4gICAgfSk7XG5cbiAgICB0ZXN0KCdyb2xsKCkgZ3JlYXRlciB0aGFuJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0dXJuID0gbmV3IFR1cm4oJzEwZDYnLDApO1xuICAgICAgICBleHBlY3QodHVybi5yb2xsKCkpLnRvQmVHcmVhdGVyVGhhbk9yRXF1YWwoMTApO1xuICAgIH0pO1xuXG4gICAgdGVzdCgncm9sbCgpIGxlc3MgdGhhbicsICgpID0+IHtcbiAgICAgICAgY29uc3QgdHVybiA9IG5ldyBUdXJuKCcxMGQ2JywwKTtcbiAgICAgICAgZXhwZWN0KHR1cm4ucm9sbCgpKS50b0JlTGVzc1RoYW5PckVxdWFsKDYwKTtcbiAgICB9KTtcblxuICAgIHRlc3QoJ21pblBvdGVudGlhbCgpJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0dXJuID0gbmV3IFR1cm4oJzEwZDYnLDApO1xuICAgICAgICBleHBlY3QodHVybi5taW5Qb3RlbnRpYWwoKSkudG9CZSgxMCk7XG4gICAgfSk7XG4gICAgXG4gICAgdGVzdCgnbWF4UG90ZW50aWFsKCknLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHR1cm4gPSBuZXcgVHVybignMTBkNicsMCk7XG4gICAgICAgIGV4cGVjdCh0dXJuLm1heFBvdGVudGlhbCgpKS50b0JlKDYwKTtcbiAgICB9KTtcblxuICAgIHRlc3QoJ1RvdGFsIHNob3VsZCBub3QgYmUgMTAwJSBldmVyeSB0aW1lJywgKCkgPT4ge1xuICAgICAgICAvLyAxIG91dCBvZiBhIG1pbGxpb24gY2hhbmNlIG9mIGZhaWxpbmdcbiAgICAgICAgY29uc3QgdHVybiA9IG5ldyBUdXJuKCcxMDAwMDAwZDYnLDApO1xuICAgICAgICBjb25zdCBvdXRjb21lID0gdHVybi5yb2xsKCk7XG4gICAgICAgIGV4cGVjdChvdXRjb21lKS50b0JlTGVzc1RoYW4oNjAwMDAwMCk7XG4gICAgfSk7XG5cbn0pOyJdfQ==