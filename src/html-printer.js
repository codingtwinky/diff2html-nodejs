/*
 *
 * HtmlPrinter (html-printer.js)
 * Author: rtfpessoa
 *
 */

(function (global, undefined) {

  var lineByLinePrinter = new LineByLinePrinter();
  var sideBySidePrinter = new SideBySidePrinter();

  function HtmlPrinter() {
  }

  HtmlPrinter.prototype.generateLineByLineJsonHtml = lineByLinePrinter.generateLineByLineJsonHtml;

  HtmlPrinter.prototype.generateSideBySideJsonHtml = sideBySidePrinter.generateSideBySideJsonHtml;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = new HtmlPrinter();
  } else if (typeof global.HtmlPrinter === 'undefined') {
    global.HtmlPrinter = new HtmlPrinter();
  }

})(this);
