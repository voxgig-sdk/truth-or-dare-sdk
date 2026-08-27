package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "TruthOrDare",
			"slug": "truth-or-dare",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.truthordarebot.xyz/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"dare": map[string]any{},
				"nhie": map[string]any{},
				"paranoia": map[string]any{},
				"truth": map[string]any{},
				"wyr": map[string]any{},
			},
		},
		"entity": map[string]any{
			"dare": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the question",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "question",
						"req": true,
						"short": "The question text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rating",
						"req": true,
						"short": "The rating of the question",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of question",
						"type": "`$STRING`",
					},
				},
				"name": "dare",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "rating",
											"orig": "rating",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/dare",
								"parts": []any{
									"dare",
								},
								"select": map[string]any{
									"exist": []any{
										"rating",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"nhie": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the question",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "question",
						"req": true,
						"short": "The question text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rating",
						"req": true,
						"short": "The rating of the question",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of question",
						"type": "`$STRING`",
					},
				},
				"name": "nhie",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "rating",
											"orig": "rating",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/nhie",
								"parts": []any{
									"nhie",
								},
								"select": map[string]any{
									"exist": []any{
										"rating",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"paranoia": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the question",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "question",
						"req": true,
						"short": "The question text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rating",
						"req": true,
						"short": "The rating of the question",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of question",
						"type": "`$STRING`",
					},
				},
				"name": "paranoia",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "rating",
											"orig": "rating",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/paranoia",
								"parts": []any{
									"paranoia",
								},
								"select": map[string]any{
									"exist": []any{
										"rating",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"truth": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the question",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "question",
						"req": true,
						"short": "The question text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rating",
						"req": true,
						"short": "The rating of the question",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of question",
						"type": "`$STRING`",
					},
				},
				"name": "truth",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "rating",
											"orig": "rating",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/truth",
								"parts": []any{
									"truth",
								},
								"select": map[string]any{
									"exist": []any{
										"rating",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"wyr": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the question",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "question",
						"req": true,
						"short": "The question text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rating",
						"req": true,
						"short": "The rating of the question",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of question",
						"type": "`$STRING`",
					},
				},
				"name": "wyr",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "rating",
											"orig": "rating",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/wyr",
								"parts": []any{
									"wyr",
								},
								"select": map[string]any{
									"exist": []any{
										"rating",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
