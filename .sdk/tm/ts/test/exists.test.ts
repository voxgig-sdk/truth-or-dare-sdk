
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TruthOrDareSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TruthOrDareSDK.test()
    equal(testsdk instanceof TruthOrDareSDK, true,
      'TruthOrDareSDK.test() must return a client synchronously')
  })

})
