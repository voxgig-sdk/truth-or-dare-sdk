# ProjectName SDK exists test

import pytest
from truthordare_sdk import TruthOrDareSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TruthOrDareSDK.test(None, None)
        assert testsdk is not None
