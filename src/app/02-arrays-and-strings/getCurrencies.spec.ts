import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () =>{
    it('should contain all possible currencies', ()=>{
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('EUR');
        expect(result).toContain('AUD');
    })
})