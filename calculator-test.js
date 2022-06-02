
it('should calculate the monthly rate correctly', () => {
  const values = {amount: 10000, years: 8, rate: 5.8}
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", () => {
  const values = {amount: 100000, years: 30, rate: 4.5}
  expect(calculateMonthlyPayment(values)).toEqual('506.69');
});

