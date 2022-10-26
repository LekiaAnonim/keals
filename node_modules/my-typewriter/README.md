![promo-mytypewriter](https://user-images.githubusercontent.com/43317360/183382010-0bcf2fff-a56e-4bd6-afba-64410f617068.gif)

A Zero Dependency Super Lightweight Typewriter Effect JavaScript Library.

[![bundle size](https://img.shields.io/bundlephobia/minzip/my-typewriter?style=for-the-badge)](https://bundlephobia.com/package/my-typewriter)
[![license](https://img.shields.io/github/license/helloukey/my-typewriter?style=for-the-badge)](LICENSE)
[![npm release](https://img.shields.io/npm/v/my-typewriter?color=orange&style=for-the-badge)](https://www.npmjs.com/package/my-typewriter)
[![zero dependency](https://img.shields.io/badge/dependencies-0-success?style=for-the-badge)](package.json)
## Features

- Super Lightweight (Less than **1KB**) 🔥
- Easy Configuration ⚙
- Easy Customization ⛏
- Zero Dependencies! 🤯


## CDN

We recommend you to use **my-typewriter** CDN for quick and easy setup.

```html
<script src="https://cdn.jsdelivr.net/npm/my-typewriter/public/myTypewriter.min.js"></script>
```

## Installation

You can install **my-typewriter** using NPM command

```shell
npm install my-typewriter
```
## Usage/Example

Give a **my-typewriter ID** to an element.
```html
<h1>
    <span id="my-typewriter"></span>
</h1>
```
Import and use as shown below. Also, refer to options for customizations.
```javascript
import { typeWriter } from "my-typewriter";

typeWriter({
    texts: ["example 1", "example 2", "example 3"],
})
```


## Options

| Name        | Default | Description                                             |
|-------------|---------|---------------------------------------------------------|
| texts       | [ ]     | Array of texts to add for typewriter effect.            |
| letterPause | 1200    | Pause in milliseconds at end letter.                    |
| typeSpeed   | 0       | Typing speed in milliseconds.                           |
| eraseSpeed  | 100     | Erasing speed in milliseconds.                          |
| blinkSpeed  | 300     | Cursor blink speed in milliseconds.                     |
| speed       | 200     | Default typing and erasing speed, If both are set to 0. |


## License

[![license](https://img.shields.io/github/license/helloukey/my-typewriter?style=for-the-badge)](LICENSE)