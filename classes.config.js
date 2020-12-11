export default {
  fontSize: {
    'text&': ['font-size'],
  },
  margin: {
    'm&': ['margin'],
    'mt&': ['margin-top'],
    'mr&': ['margin-right'],
    'mb&': ['margin-bottom'],
    'ml&': ['margin-left'],
    'mx&': ['margin-left', 'margin-right'],
    'my&': ['margin-top', 'margin-bottom'],
  },
  padding: {
    'p&': ['padding'],
    'pt&': ['padding-top'],
    'pr&': ['padding-right'],
    'pb&': ['padding-bottom'],
    'pl&': ['padding-left'],
    'px&': ['padding-left', 'padding-right'],
    'py&': ['padding-top', 'padding-bottom'],
  },
  space: {
    'space-x&:not(.space-x-reverse) > * + *': ['margin-left'],
    'space-x&.space-x-reverse > * + *': ['margin-right'],
    'space-y&:not(.space-y-reverse) > * + *': ['margin-top'],
    'space-y&.space-y-reverse > * + *': ['margin-bottom'],
  },
  gap: {
    'gap&': ['gap'],
    'gap-y&': ['row-gap'],
    'gap-x&': ['column-gap'],
  },
  width: {
    'w&': ['width'],
  },
  minWidth: {
    'min-w&': ['min-width'],
  },
  maxWidth: {
    'max-w&': ['max-width'],
  },
  height: {
    'h&': ['height'],
  },
  minHeight: {
    'min-h&': ['min-height'],
  },
  maxHeight: {
    'max-h&': ['max-height'],
  },
  inset: {
    'top&': ['top'],
    'right&': ['right'],
    'bottom&': ['bottom'],
    'left&': ['left'],
    'inset&': ['top', 'right', 'bottom', 'left'],
  },
  borderWidth: {
    'border&': ['border-width'],
    'border-t&': ['border-top-width'],
    'border-r&': ['border-right-width'],
    'border-b&': ['border-bottom-width'],
    'border-l&': ['border-left-width'],
  },
  borderRadius: {
    'rounded&': ['border-radius'],
    'rounded-t&': ['border-top-left-radius', 'border-top-right-radius'],
    'rounded-r&': ['border-top-left-radius', 'border-bottom-left-radius'],
    'rounded-b&': ['border-bottom-left-radius', 'border-bottom-right-radius'],
    'rounded-l&': ['border-top-left-radius', 'border-bottom-left-radius'],
    'rounded-tl&': ['border-top-left-radius'],
    'rounded-tr&': ['border-top-right-radius'],
    'rounded-br&': ['border-bottom-right-radius'],
    'rounded-bl&': ['border-bottom-left-radius'],
  },
  translate: {
    'translate-x&': ['--tw-translate-x'],
    'translate-y&': ['--tw-translate-y'],
  },
  spacing: [
    'margin',
    'padding',
    'space',
    'gap',
    'width',
    'height',
    'translate',
  ]
}
