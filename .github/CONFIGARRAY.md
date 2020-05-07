## Example: Passing an array to custom config

### **`maxWidth`**

Class | Properties | Scale | Screen Min & Max
----- | ---------- | ----- | -------
`.fl:max-w-24/2` | `max-width: 24rem` | `12rem-24rem` | `screens.sm` to `screens.xl`
`.fl:max-w-48/2` | `max-width: 48rem` | `24rem-48rem` | `screens.sm` to `screens.xl`
`.fl:max-w-64/2` | `max-width: 64rem` | `32rem-64rem` | `screens.md` to `screens.lg`

Plus extending existing classes using `defaultRatio: 2`

Class | Properties | Downscaling Ratio
----- | ---------- | -----------------
`.fl:max-w-xs` | `max-width: 20rem` | `2`
`.fl:max-w-sm` | `max-width: 24rem` | `2`
`.fl:max-w-md` | `max-width: 28rem` | `2`
`.fl:max-w-lg` | `max-width: 32rem` | `2`
`.fl:max-w-xl` | `max-width: 36rem` | `2`
`.fl:max-w-2xl` | `max-width: 42rem` | `2`
`.fl:max-w-3xl` | `max-width: 48rem` | `2`
`.fl:max-w-4xl` | `max-width: 56rem` | `2`
`.fl:max-w-5xl` | `max-width: 64rem` | `2`
`.fl:max-w-6xl` | `max-width: 72rem` | `2`
