import { calculateTax } from "../src";

describe("calcule tax unit test suite", () => {

      it("should return 0 if salary is less than 2500 ", ( ) => {
          const value = generateSalary(1,2500);
          const result = calculateTax(value);
          expect(result).toBe(0);
      });

      it("should return 7.5% if salary is between 2500 and 3200", () => {
        const value = generateSalary(2500, 3200);
        const result = calculateTax(value);
        expect(result).toBe(value * 0.075);
      });
    

      it("should return 15% if salary is less than 4250 ", ( ) => {
          const value = generateSalary(3200,4250);
          const result = calculateTax(value);
          expect(result).toBe(value * 0.15);
      });

      it("should return 27,5% if salary is more than 4250 ", ( ) => {
          const value = generateSalary(4250, 100000);
          const result = calculateTax(value);
          expect(result).toBe(value * 0.275);
      });

})

function generateSalary(minSalary: number, maxSalary: number) {
    return Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
  }
  