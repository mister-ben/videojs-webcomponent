# videojs-webcomponent

## Getting started

### Download the library
The only files that you need are in the `dist` folder. You can download them through:

1. Bower: `bower install videojs-webcomponent --save`
2. NPM: `npm install videojs-webcomponent --save`
3. Download the ZIP on GitHub

### Import the Web component
You can add the `video-js` Web component by adding this in your HTML file:<br />
`<link rel="import" href="bower_components/dist/video-js.html" />`

Make sure to not include `video.js` and `video-js.css` because it is bundled inside the Web component.

### Web component shim (optional)
Make sure that you support browsers that don't support Web component yet.

`bower install webcomponentsjs`<br />
`<script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>`

### Player instance
You can access the video.js player instance by doing:

```javascript
var player = document.getElementById('my-player').player();

// Simple auto-play done by hand
player.ready(function() {
  player.play();
});
```

See the official [video.js documentation](https://github.com/videojs/video.js/blob/master/docs/index.md) to learn how to use it or try the `sandbox/index.html` example.

## Add your custom skin
Make sure to add `::shadow` so that you can customize the elements inside the shadow DOM. The default skin will be embeded inside the Web component unless you make your own custom build.
