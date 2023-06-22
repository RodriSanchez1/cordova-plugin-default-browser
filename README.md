# Cordova Plugin Default Browser

Cordova plugin for opening a URL in the users default browser. This plugin only works in Electron apps. 
## Installation

    cordova plugin add cordova-plugin-default-browser

## Usage

### Open URL in default browser

```js
cordova.plugins.defaultBrowser.open(url);
```
Parameters:

* url: The URL to open in the default browser. Type: string. Required.

NOTE: The URL must contain the protocol (e.g. http:// or https://). Otherwise an error will be thrown. This is for security reasons.


## Supported Platforms

- Electron

## License

MIT License

## Credits

- The plugin is based on the following  [tutorial ](    https://devadri.com/blog/multiplatform-cordova-plugin/) created by [Devadri](https://github.com/adrian-bueno). Thanks for the great work!

