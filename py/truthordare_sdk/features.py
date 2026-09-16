# TruthOrDare SDK feature factory

from truthordare_sdk.feature.base_feature import TruthOrDareBaseFeature
from truthordare_sdk.feature.ratelimit_feature import TruthOrDareRatelimitFeature
from truthordare_sdk.feature.retry_feature import TruthOrDareRetryFeature
from truthordare_sdk.feature.test_feature import TruthOrDareTestFeature
from truthordare_sdk.feature.timeout_feature import TruthOrDareTimeoutFeature


_FEATURES = {
    "base": lambda: TruthOrDareBaseFeature(),
    "ratelimit": lambda: TruthOrDareRatelimitFeature(),
    "retry": lambda: TruthOrDareRetryFeature(),
    "test": lambda: TruthOrDareTestFeature(),
    "timeout": lambda: TruthOrDareTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
