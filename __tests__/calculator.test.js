import { divide } from "../src/calculator.js";

describe('divide', () => {
    it('divides two positive numbers', () => {
        expect(divide(10,5)).toBe(2);
    });
    it('throws when inputs are not numbers', () => {
        expect(() => divide(10, '5')).toThrow('Both arguments must be numbers');
    });
    it('throws when division by zero', () => {
        expect(() => divide(20,0)).toThrow('Division by zero is not allowed');
    });
    it('throws when argument is NaN', () => {
        expect(() => divide(5, NaN)).toThrow('Arguments cannot be NaN')
    });
    it('throws when argument is array', () => {
        expect(() => divide([1,2], 10)).toThrow('Both arguments must be numbers')
    });
    it('throws when argument is boolean', () => {
        expect(() => divide(true, 10)).toThrow('Both arguments must be numbers')
    });
    it('throws when argument is string', () => {
        expect(() => divide('hello', 10)).toThrow('Both arguments must be numbers')
    });
})