# Sassy Clean

[![npm version](https://badge.fury.io/js/sassyclean.svg)](http://badge.fury.io/js/sassyclean) [![npm](https://img.shields.io/npm/dm/sassyclean.svg)](https://github.com/ryanburgess/sassyclean) [![Build Status](https://travis-ci.org/ryanburgess/sassyclean.svg?branch=master)](https://travis-ci.org/ryanburgess/sassyclean)

![SassyClean logo](https://raw.github.com/ryanburgess/grunt-sassyclean/master/sassyclean.png)

Scans a project for partials that are never imported. Sassy Clean provides the option to automatically delete the unused partials or display the file name as a console log.

```js
npm install sassyclean -g
```
## Use
Run ```sassyclean <directory> <remove>``` in your project directory.

Directory can be set to the directory that contains your project's partial Sass files.

Remove can be set to `true` or `false`.

Sassyclean assumes that all your Sass files are in a directory with the name `sass` in your project.

## Related
* [Grunt-SassyClean](https://github.com/ryanburgess/grunt-sassyclean)
* [Sassy Sass](https://github.com/ryanburgess/sassysass)

## Contributing
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License
MIT © [Ryan Burgess](http://github.com/ryanburgess)