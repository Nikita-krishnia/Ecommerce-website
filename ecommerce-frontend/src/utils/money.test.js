import {it, expect,describe} from 'vitest';
import { formatMoney } from "./money";

describe('formayMoney',()=>{
it('formats 2000 cents as $20.00',()=>{
    expect(formatMoney(2000)).toBe('$20.00');
});

it('display 2 decimal',()=>{
    expect(formatMoney(1090)).toBe('$10.90');
    expect(formatMoney(100)).toBe('$1.00');

});

it('works with number 0',()=>{
    expect(formatMoney(0)).toBe('$0.00');
});

it('works with negative numbers', () => {
    expect(formatMoney(-999)).toBe('-$9.99');
    expect(formatMoney(-100)).toBe('-$1.00');
  });
});

