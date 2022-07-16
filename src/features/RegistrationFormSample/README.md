# Form

The goal is to create a form with most used fields in the real life using best practices.
For being comfortable I've picked a multi-step form to demonstrate all fields &
one of the option for implementing the multi-step.

All the fields will be in the /shared/ui/molecules folder.

Recomendations and more details comments might placed inside README.md for each component and
comments inside the file.
Fields are oriented to being lightweight, as much as it possible, same time wide, but not overused functionality and easy extandable.

For styles using css.modules, easy to replace to SCSS or any other style methods.
I still think it's the best approach for now, because it's pretty native and CSS is power enough for the
most cases.

The ground rules for this implementation has been getted from here:

- https://medium.com/@orazberdisaparov/how-to-ux-text-field-best-practices-6188bfe9ae5b
- https://uxdesign.cc/text-fields-forms-design-ui-components-series-2b32b2beebd0

Creating the forms don't forget about the components possibilities, being responsive and accessible
https://weblind.ru/ for the user, phone input methods - https://better-mobile-inputs.netlify.app/.
and masks, if you need to: https://github.com/pedrosoares/react-the-mask

Validation: For easy use I use yup library for the validation and TypeScript for code.

Multistep: Xstate lib is a really good option for it in a lot of ways: Local state and multistep,
graphql request + forms, REST requests and multistep and a pretty configurable clear other possibilities.
