export default {
  prefix: 'fl',
  separator: ':',
  screenMin: 'screens.sm',
  screenMax: 'screens.xl',
  rootRem: 16,
  ratioDecimalRounding: 6,
  defaultRatio: 1.618,
  clamp: true,
  extend: true,
  variants: [],
  theme: {
    fontSize: {
      defaultRatio: 1.125,
      config: {
        'sm': 1.125,
        'base': 1.125,
        'lg': 1.125,
        'xl': 1.25,
        '2xl': 1.25,
        '3xl': 1.35,
        '4xl': 1.35,
        '5xl': 1.5,
        '6xl': 1.5,
      },
      ignore: [],
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
    space: {
      ignore: [
        'px',
      ],
    },
    gap: {
      ignore: [
        '0',
        'px',
      ],
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
    borderRadius: {
      ignore: [
        'none',
        'full',
      ],
    },
  },
};
