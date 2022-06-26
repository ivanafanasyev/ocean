# TextInput + TextInput for react-hook-form wrapper

- accessible and best practice rules (data, required fields and etc.)
- typescript + react
- possibility to add icons
- managable classes
- Validation message handling is included
- react-hook-form HOC is included for controller and register scenario

## Advices

- **Use** inputMode when you need to help user on mobile https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode

- **Do not forget about the autocomplete** https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete

## Notes:

### Why validationMsg and not just an error?

Because you can use not only error option, it could be a hint for the input, validation process loading, or success option for the validation. With my props you can easily set up UI for all scenarios and turn on error if it's needed.

### Why so much props classes?

It could be removed, if it's 100% same input for the whole project.
But sometimes, it can be an option, where we need something different only for one input, props classes for almost all elems allows us to customise it easily with saving the basic structure.

### Libs

I tried to do as max native stuff as I could. But:
I personally use classnames lib (640B gzip), but it can be native as well

```jsx
className={cn(css.input, className)}
// or
className={`${css.input} ${className || ""}`.trim()}
```
