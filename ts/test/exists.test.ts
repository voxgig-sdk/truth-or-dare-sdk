
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TruthOrDareSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await TruthOrDareSDK.test()
    equal(null !== testsdk, true)
  })

})
