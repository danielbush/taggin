# Taggin - Tag / markup Generator

A really simple way to generate tags.

This library was written to help create markup fragments for use in tests.

## Synopsis
 
```js
const tag = require('taggin');
let [div, span, p, em] = tag.makeStringGen(['div', 'span', 'p', 'em']);

div(
  'some text ',
  p('some ', em('para'), ' text'),
  ' and then some more text'
);
```
```
=> <div>some text <p>some <em>para</em> text</p> and then some more text</div>
```

### Attributes

```js

For classes and id:

div(['#id123.container'],
  p('first para').class('first'),
  p(['.highlight'], 'second para')
);

For other attributes, use an object literal:

```js

div(['#id123.container', { style: '...' }],
  ...
);

```


