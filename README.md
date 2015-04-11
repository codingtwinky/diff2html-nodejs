# Diff to Html Node Module by [rtfpessoa](https://github.com/rtfpessoa)

Diff to Html generates pretty HTML diffs.

### Inspiration

This project uses [diff2html](https://github.com/rtfpessoa/diff2html) as base.

## Features

* `line-by-line` and `side-by-side` diff

* new and old line numbers

* inserted and removed lines

* GitHub like style

## Online Example

> Go to [Diff2HTML](http://rtfpessoa.github.io/diff2html/)

## Other Distributions

* [WebJar](http://www.webjars.org/)

* Manually download and import [diff2html.js](https://github.com/rtfpessoa/diff2html) into your page

* Node Package CLI [diff2html-cli](https://github.com/rtfpessoa/diff2html-nodejs-cli)

## Setup

    sudo npm install -g diff2html

## Usage

Require the library using:

```
var Diff2Html = require('diff2html').Diff2Html;
```

> Pretty Line-by-Line Html From Git Word Diff Output

    Diff2Html.getPrettyHtmlFromDiff(exInput)

> Pretty Side-by-Side Html From Git Word Diff Output

    Diff2Html.getPrettySideBySideHtmlFromDiff(exInput)

> Intermediate Json From Git Word Diff Output

    Diff2Html.getJsonFromDiff(exInput)

> Pretty Line-by-Line Html From Json

    Diff2Html.getPrettyHtmlFromJson(exInput)

> Pretty Side-by-Side Html From Json

    Diff2Html.getPrettySideBySideHtmlFromJson(exInput)

## Contribution

All contributions are welcome.

To contribute just send a pull request with your feature,fix,... and it will be reviewed asap.

## License

Copyright 2014 Rodrigo Fernandes. Released under the terms of the MIT license.

---
