const exec = require("cordova/exec");

const PLUGIN_NAME = "CordovaPluginDefaultBrowser";


//Open default browser
exports.open = function (url) {
  exec(null, console.error, PLUGIN_NAME, "open", [url]);
};
