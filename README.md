## aframe-stl-model-component

[![Version](http://img.shields.io/npm/v/aframe-stl-model-component.svg?style=flat-square)](https://npmjs.org/package/aframe-stl-model-component)
[![License](http://img.shields.io/npm/l/aframe-stl-model-component.svg?style=flat-square)](https://npmjs.org/package/aframe-stl-model-component)

A STL files component for A-Frame.

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-stl-model-component/dist/aframe-stl-model-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity stl-model="foo: bar"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-stl-model-component
```

Then require and use.

```js
require('aframe');
require('aframe-stl-model-component');
```
