package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDareEntityFunc func(client *TruthOrDareSDK, entopts map[string]any) TruthOrDareEntity

var NewNhieEntityFunc func(client *TruthOrDareSDK, entopts map[string]any) TruthOrDareEntity

var NewParanoiaEntityFunc func(client *TruthOrDareSDK, entopts map[string]any) TruthOrDareEntity

var NewTruthEntityFunc func(client *TruthOrDareSDK, entopts map[string]any) TruthOrDareEntity

var NewWyrEntityFunc func(client *TruthOrDareSDK, entopts map[string]any) TruthOrDareEntity

