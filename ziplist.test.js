
describe('ziplist', function () {
  const testNums = [1, 2, 3, 4];
  describe('sumFor()', function () {
    it('should return 10 for testnums', function () {
      chai.expect(sumFor(testNums)).to.equal(10);
    });
  });
