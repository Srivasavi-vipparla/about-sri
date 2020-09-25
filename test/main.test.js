QUnit.module('MAIN MODULE', {})


QUnit.test('TEST CalcInterest()', assert => {
  document.querySelector('#pr').value=100
  document.querySelector('#te').value=1
  document.querySelector('#rate').value=10
  assert.equal(CalcInterest(),100,1,10,"equlas 110")
  assert.strictEqual(input.checkValidity(), false, 'Correctly fails validation')
 })

