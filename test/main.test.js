const mul = (a, b) => a * b;
QUnit.module('mul', function() {
  QUnit.test('should add two numbers', function(assert) {
    assert.equal(mul(1, 1), 1, '1 * 1 = 1');
  });
    QUnit.test('should add two numbers', function(assert) {
    assert.equal(mul(2, 2), 4, '2 * 2 = 4');
  });
    QUnit.test('should add two numbers', function(assert) {
    assert.equal(mul(3, 3), 9, '3 * 3 = 9');
  });
    QUnit.test('should add two numbers', function(assert) {
    assert.equal(mul(4, 4), 16, '4 * 4 = 16');
  });
    QUnit.test('should add two numbers', function(assert) {
    assert.equal(mul(5, 5), 25, '5 * 5 = 25');
  });
});
