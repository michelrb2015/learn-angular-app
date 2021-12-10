import { greet } from "./greet";

describe('greet', ()=>{
    it('should return if the input contain name',()=>{
        const result = greet('Michel');
        expect(result).toContain('Michel');
    })
})