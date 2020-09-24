QUnit.module('MAIN MODULE', {})


QUnit.test('TEST CalcInterest()', assert => {
  const input = document.querySelector('#pr')
  const input = document.querySelector('#te')
  const input= document.querySelector('#rate')
  input.value = 45
  assert.equal(input.value, -3, 'Bad value assigned')
  assert.strictEqual(input.checkValidity(), false, 'Correctly fails validation')
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
})

