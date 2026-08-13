# TruthOrDare SDK utility: make_context

from projectname_sdk.core.context import TruthOrDareContext


def make_context_util(ctxmap, basectx):
    return TruthOrDareContext(ctxmap, basectx)
