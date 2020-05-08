# tailwindcss-fl

Tailwind plugin to automatically generate fluid utility classes by extending your existing Tailwind config. 

### Motivation

* Increase productivity by writing less markup
* Increase readability with more concise class lists
* Increase consistency by using ratios to scale down
* Enable smooth scaling between sizes rather than sizes jumping between breakpoints

**Media query classes**
```html
<div class="m-4 lg:m-6 xl:m-8 max-w-sm lg:max-w-lg xl:max-w-xl">
    <h2 class="text-base lg:text-2xl xl:text-4xl">
        <!-- -->
    </h2>
</div>
```

**Fluid classes**
```html
<div class="fl:m-8 fl:max-w-xl">
    <h2 class="fl:text-4xl">
        <!-- -->
    </h2>
</div>
```

### Installation

```shell
$ yarn add tailwindcss-fl
```

Add to `tailwind.config.js`

```js
module.exports = {
    plugins: [
        require('tailwindcss-fl')({
            /* config */
        }),
    ],
}
```

### Utilities

Out the box, the following classes are generated.

Key | Classes
--- | -------
**`fontSize`** | `fl:text-{ keys }`
**`width`** | `fl:w-{ keys }`
**`maxWidth`** | `fl:max-w-{ keys }`
**`height`** | `fl:h-{ keys }`
**`margin`** | `fl:{ m, mt, mr, mb, ml, mx, my, -m, -mt, -mr, -mb, -ml, -mx, -my }-{ keys }`
**`padding`** | `fl:{ p, pt, pr, pb, pl, px, py }-{ keys }`
**`gap`** | `fl:gap-{ keys }`

Custom classes defined in `tailwind.config.js` under `theme: {}` will be used to generate the fluid utility classes.

**[List of generated classes using the default provided by tailwind](.github/DEFAULT.md)**

### Config

Below is the default config.

```js
{
    prefix: 'fl:',
    screenMin: 'screens.sm',
    screenMax: 'screens.xl',
    defaultRatio: 1.618,
    rootRem: 16,
    clamp: true,
    extend: true,
    variants: [],
    theme: { },
}
```

Option | Type | Description
------ | ---- | -----------
**`prefix`** | `String` | Class name prefix for fluid utility classes.
**`screenMin`** | `Array` | Screen size to scale from. `screens.{key}` or custom `rem/px` value.
**`screenMax`** | `Array` | Screen size to scale to. `screens.{key}` or custom `rem/px` value.
**`defaultRatio`** | `Number` | Scale down using golden ratio `1.618`.
**`rootRem`** | `Number` | `1rem` is equal to `16px`. Default should work for most cases.
**`clamp`** | `Boolean` | Enable the use of [`clamp()`](https://caniuse.com/css-math-functions) to avoid using media queries.
**`extend`** | `Boolean` or `Array` | Extend utility classes, or provide an array of keys to extend, `['margin', 'padding']`.
**`variants`** | `Array` | Tailwind variants, not recommended.
**`theme`** | `Object` | Detailed in depth below.

### Theme

`theme: { }` allows for more fine-tuned control of fluid classes.

#### Using `defaultRatio` only

Define a `defaultRatio` to be applied to all classes under a specific key.

```js
theme: {
    maxWidth: 2,
    padding: 1.5,
},
```

The default ratios are applied to classes `fl:max-w-{ keys }` and `fl:{ p, pt, pr, pb, pl, px, py }-{ keys }`

**[List of generated classes with properties and ratios](.github/RATIO.md)**

#### Using `defaultRatio` and/or a custom config

For more control, a config object can be used to target specific utility classes, the same way tailwind does. 

This is especially useful for `fontSize` because smaller font sizes should not scale down much.

```js
theme: {
    fontSize: {
        defaultRatio: 1.125,
        config: {
            'base': 1.125,
            'lg': 1.125,
            'xl': 1.25,
            '2xl': 1.25,
            '3xl': 1.35,
            '4xl': 1.35,
            '5xl': 1.5,
            '6xl': 1.5,
        },
    },
},
```

Class names can be grouped for the same ratio. 

```js
theme: {
    fontSize: {
        defaultRatio: 1.125,
        config: {
            'base lg': 1.125,
            'xl 2xl': 1.25,
            '3xl 4xl': 1.35,
            '5xl 6xl': 1.618,
        },
    },
},
```

The custom ratios are applied to classes `fl:text-{ keys }`

**[List of generated classes with properties and ratios](.github/CONFIG.md)**

#### Passing an array to custom config

The power of the plugin is extending existing utilities using ratios.

However, an array of `[min, max, screenMin, screenMax]` can also be passed, either to overwrite an existing class, or to create a new custom class.

Parameters are based on **[postcss-range-value](https://github.com/soberwp/postcss-range-value)**.

Param | Type | Description
----- | ---- | -----------
**`min(required)`** | `String` or `Number` | `rem/px` value or a scale down ratio
**`max(required)`** | `String` or `Number` | `rem/px` value or a scale up ratio
**`screenMin`** | `String` | `screens.{key}` or `rem/px` value
**`screenMax`** | `String` | `screens.{key}` or `rem/px` value

Some examples below

```js
theme: {
    maxWidth: {
        defaultRatio: 2,
        config: {
            /* scale down by 2x resulting in 12rem to 24rem between default screen sizes */
            '24/2': [2, '24rem'],

            /* scale up by 2x resulting in 24rem to 48rem between default screen sizes */
            '48/2': ['24rem', 2],

            /* scale from 32rem to 64rem between screens.md and screens.lg */
            '64/2': ['32rem', '64rem', 'screens.md', 'screens.lg'],
        },
    },
},
```
The custom values are added to classes `fl:max-w-{ keys }`

**[List of generated classes with properties and ratios](.github/CONFIGARRAY.md)**

### Fin

Feature requests, questions, found a bug that demands a complaint? [@ the person](https://twitter.com/withjacoby) who has already spent too much time building this.
