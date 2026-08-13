# TruthOrDare SDK feature factory

from truthordare_sdk.feature.base_feature import TruthOrDareBaseFeature
from truthordare_sdk.feature.test_feature import TruthOrDareTestFeature


def _make_feature(name):
    features = {
        "base": lambda: TruthOrDareBaseFeature(),
        "test": lambda: TruthOrDareTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
