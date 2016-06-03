# Taggin - Tag / markup Generator

A really simple way to generate tags.

This library was written to help create markup fragments for use in tests.

It is written in es6.

## Synopsis
 
```js
const tag = require('taggin');
let div = tag.makeTag('div');

let str = div(
  'some text ',
  p('some ', em('para'), ' text'),
  ' and then some more text'
);
```
```
=> <div>some text <p>some <em>para</em> text</p> and then some more text</div>
```

## Attributes

For classes and id:

```js

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

## Security

Taggin was built to generate test fragments.
Currently this library does not attempt to sanitize inputs.
You could use a library like ```sanitize-html``` eg

```js
    let div = makeTag('div');
    let str = div(sanitize(untrustedHTML));
```

One slightly problematic feature about automatically incorporating
this into taggin is that it is hard based on the current design to not
sanitize the tags created by taggin itself eg when creating nested
tags.
