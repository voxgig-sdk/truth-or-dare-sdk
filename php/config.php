<?php
declare(strict_types=1);

// TruthOrDare SDK configuration

class TruthOrDareConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "TruthOrDare",
                "slug" => "truth-or-dare",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api.truthordarebot.xyz/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "dare" => [],
                    "nhie" => [],
                    "paranoia" => [],
                    "truth" => [],
                    "wyr" => [],
                ],
            ],
            "entity" => [
        'dare' => [
          'fields' => [
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the question',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'question',
              'req' => true,
              'short' => 'The question text',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rating',
              'req' => true,
              'short' => 'The rating of the question',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'req' => true,
              'short' => 'The type of question',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dare',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'rating',
                        'orig' => 'rating',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/dare',
                  'segments' => [
                    [
                      'lit' => 'dare',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'rating',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'dare',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'nhie' => [
          'fields' => [
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the question',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'question',
              'req' => true,
              'short' => 'The question text',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rating',
              'req' => true,
              'short' => 'The rating of the question',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'req' => true,
              'short' => 'The type of question',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'nhie',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'rating',
                        'orig' => 'rating',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/nhie',
                  'segments' => [
                    [
                      'lit' => 'nhie',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'rating',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'nhie',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'paranoia' => [
          'fields' => [
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the question',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'question',
              'req' => true,
              'short' => 'The question text',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rating',
              'req' => true,
              'short' => 'The rating of the question',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'req' => true,
              'short' => 'The type of question',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'paranoia',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'rating',
                        'orig' => 'rating',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/paranoia',
                  'segments' => [
                    [
                      'lit' => 'paranoia',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'rating',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'paranoia',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'truth' => [
          'fields' => [
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the question',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'question',
              'req' => true,
              'short' => 'The question text',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rating',
              'req' => true,
              'short' => 'The rating of the question',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'req' => true,
              'short' => 'The type of question',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'truth',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'rating',
                        'orig' => 'rating',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/truth',
                  'segments' => [
                    [
                      'lit' => 'truth',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'rating',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'truth',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'wyr' => [
          'fields' => [
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the question',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'question',
              'req' => true,
              'short' => 'The question text',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rating',
              'req' => true,
              'short' => 'The rating of the question',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'req' => true,
              'short' => 'The type of question',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'wyr',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'rating',
                        'orig' => 'rating',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/wyr',
                  'segments' => [
                    [
                      'lit' => 'wyr',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'rating',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'wyr',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return TruthOrDareFeatures::make_feature($name);
    }
}
