const { shell } = require("electron");

function open([args]) {
  const [url] = args;
  if (!["https:", "http:"].includes(new URL(url).protocol))
    throw "Url is not valid, needs to include http or https protocol";
  shell.openExternal(url);
}

module.exports = {
  open,
};
