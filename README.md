# Gulp CSS Table Of Contents

Create a table of contents from comments in CSS files using a markdown-like syntax (`## Heading 2`). This is the Gulp version of [CSS Table Of Contents](https://github.com/ziga-miklic/css-table-of-contents).

## Install

```
npm i gulp-css-table-of-contents -d
```

## Example

The below example created a task `toc` (use `gulp toc` in the terminal). It adds a numeric table of content on top of all the CSS files inside the `css` folder and places them inside `dist`.

Place the below code inside `gulpfile.js`:

``` js
'use strict';
const gulp = require('gulp');
const toc = require('gulp-css-table-of-contents');

function addTableOfContent() {
	const options = {
		isShowNumbers: true,
		indentSize: 0,
	};

	return gulp.src('src/*/*.css')
		.pipe(toc(options))
		.pipe(gulp.dest('dist'));
}

exports['toc'] = addTableOfContent;
```

## Options

Pass in options just like you would for the Node version except for the `code` option which will be automatically set.

A full list of options is available [here](https://github.com/ziga-miklic/css-table-of-contents#options).