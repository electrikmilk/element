# element

[![Releases](https://img.shields.io/github/v/release/electrikmilk/element?include_prereleases)](https://github.com/electrikmilk/element/releases)
[![License](https://img.shields.io/github/license/electrikmilk/element)](https://github.com/electrikmilk/element/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@electrikmilk/element)](https://www.npmjs.com/package/@electrikmilk/element)

JavaScript DOM Element Abstraction

```javascript
import {$, $all, tempElement, Element} from '@electrikmilk/element';

const body = $('body');

body.style.backgroundColor = 'black';
body.style.color = 'white';

tempElement('div', {
    class: 'temp',
    text: 'test',
}, async (element) => {
    console.log(element.innerText);
});

const myDiv = new Element('div', {
    class: 'message',
    text: '> Hello, Element!'
});

myDiv.style('backgroundColor','red');

const divs = $all('div');
divs.forEach((e) => {
    e.style.color = 'lightgreen';
});
```
