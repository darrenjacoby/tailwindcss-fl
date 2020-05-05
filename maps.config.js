const defaults = {
  prefix: 'fl',
  separator: ':',
  screenMin: 'screens.sm',
  screenMax: 'screens.xl',
  rootRem: 16,
  ratioDecimalRounding: 3,
  defaultRatio: 1.618,
  modernBrowsersOnly: true,
  extend: true,
  variants: [],
  theme: {
    fontSize: {
      defaultRatio: 1.25,
      config: {
        'sm': 1.125,
        'base': 1.125,
        'lg': 1.125,
        'xl': 1.125,
        '2xl': 1.5,
        '3xl': 1.5,
        '4xl': 1.618,
        '5xl': 1.618,
        '6xl': 1.618,
      },
    },
    margin: {
      ignore: [
        '0',
        'px',
        'auto',
        '-px',
      ],
    },
    padding: {
      ignore: [
        '0',
        'px',
      ]
    },
    width: {
      ignore: [
        '0',
        'auto',
        'px',
        '1/2',
        '1/3',
        '2/3',
        '1/4',
        '2/4',
        '3/4',
        '1/5',
        '2/5',
        '3/5',
        '4/5',
        '1/6',
        '2/6',
        '3/6',
        '4/6',
        '5/6',
        '1/12',
        '2/12',
        '3/12',
        '4/12',
        '5/12',
        '6/12',
        '7/12',
        '8/12',
        '9/12',
        '10/12',
        '11/12',
        'full',
        'screen',
      ],
    },
    minWidth: {
      ignore: [
        '0',
        'full',
      ],
    },
    maxWidth: {
      ignore: [
        'none',
        'full',
      ],
    },
    height: {
      ignore: [
        '0',
        'auto',
        'px',
        'full',
        'screen',
      ],
    },
    minHeight: {
      ignore: [
        '0',
        'screen',
        'full',
      ],
    },
    maxHeight: {
      ignore: [
        'screen',
        'full',
      ],
    },
    gap: {
      ignore: [
        '0',
        'px',
      ],
    },
  },
};

const classes = {
  fontSize: {
    'text': ['font-size'],
  },
  margin: {
    'm': ['margin'],
    'mt': ['margin-top'],
    'mr': ['margin-right'],
    'mb': ['margin-bottom'],
    'ml': ['margin-left'],
    'mx': ['margin-left', 'margin-right'],
    'my': ['margin-top', 'margin-bottom'],
  },
  padding: {
    'p': ['padding'],
    'pt': ['padding-top'],
    'pr': ['padding-right'],
    'pb': ['padding-bottom'],
    'pl': ['padding-left'],
    'px': ['padding-left', 'padding-right'],
    'py': ['padding-top', 'padding-bottom'],
  },
  width: {
    'w': ['width'],
  },
  minWidth: {
    'min-w': ['min-width'],
  },
  maxWidth: {
    'max-x': ['max-width'],
  },
  height: {
    'h': ['height'],
  },
  minHeight: {
    'min-h': ['min-height'],
  },
  maxHeight: {
    'max-h': ['max-height'],
  },
  gap: {
    'gap': ['gap'],
    'row-gap': ['row-gap'],
    'col-gap': ['column-gap'],
  },
  spacing: [
    'margin',
    'padding',
    'width',
    'height',
    'gap',
  ]
}

export default {
  defaults,
  classes,
}
