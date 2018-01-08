# COINS Blockly
Forked copy of google's [blocky](https://developers.google.com/blockly) project with some modifications for use in the [rdoc tool](https://github.com/MRN-Code/asmt/blob/develop/instruments/rdocQMapping.php#L131)

## Upstream source
Google's Blockly is a web-based, visual programming editor.  Users can drag
blocks together to build programs.  All code is free and open source.

**The project page is https://developers.google.com/blockly/**

![](https://developers.google.com/blockly/images/sample.png)

## External Dependencies
- python2.7
- unix system

## Internal Dependencies
- The blockly project is built using the google [closure](https://developers.google.com/closure/) tool kit which is required when building this project. 
- This dependancy is met via the included npm package [google-closure-library](https://www.npmjs.com/package/google-closure-library) however the blocky project expects the closure source files to be located in it's own project folder.
- To accommodate this requirement there is a [postinstall step](package.json#L24) which creates a symlink in the expected path which points back to the installed npm module.

## Usage
```
npm i
npm run build
```

## Output
- The minified js bundle can be found in `build/js/coins-blockly.js`
