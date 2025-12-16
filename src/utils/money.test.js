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
});
