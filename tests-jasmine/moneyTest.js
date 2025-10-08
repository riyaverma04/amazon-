import { formatCurrency } from "../script/money.js";

describe("formatCurrency", function() {
    it("should format 1000 cents as $10.00", function() {
        expect(formatCurrency(1000)).toBe("$10.00");
    }); 
    it("should format 0 cents as $0.00",function(){
        expect(formatCurrency(0)).toBe("$0.00");
    })
    it("should format 2000.5 cents as $20.01",function(){
        expect(formatCurrency(2000.5)).toBe("$20.01");
    })

});

