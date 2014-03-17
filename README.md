# mouseleave

mouseleave event emulation

## mouseleave(element, fn)

```js
var mouseleave = require('mouseleave');
var div = document.querySelector(...);

mouseleave(div, function(ev) {
    console.log('the mouse is here');
});
```

## unbind

`mouseleave` returns a function you can use to no longer react to mouseleave events. Call this function and the previously bound event will be unbound.

```js
var unbind = mouseleave(div, function(ev) {
    console.log('the mouse is here');
});

// will listen for mouseleave events

// call `unbind` to stop listening
unbind();
```

## testing

```
$ npm run test-local
```

Then open the url it gives you in a local browser.

## Licence

MIT
