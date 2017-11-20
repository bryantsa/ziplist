
describe('ZipList', function () {
  const l = ['a', 'b', 'c'];
  const o = [1, 2, 3];
  describe('zipList()', function () {
    it('should return an array containing both variables for zipList', function () {
      chai.expect(zipList(l,o)).to.equal(["a", 1, "b", 2, "c", 3]);
    });
  });
