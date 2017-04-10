/**
 * Adds a custom menu with items to show the sidebar and dialog.
 * 
 * @param {Object} e The event parameter for a simple onOpen trigger.
 */

function onOpen(e) {

  SpreadsheetApp.getUi()
      .createAddonMenu()
      .addItem('Learn about EasyConcat', 'INFODIALOG')
      .addToUi();
}
  
/**
 * Runs when the add-on is installed; calls onOpen() to ensure menu creation and
 * any other initializion work is done immediately.
 *
 * @param {Object} e The event parameter for a simple onInstall trigger.
 */
function onInstall(e) {
  onOpen(e);
}

function INFODIALOG() {
  var html = HtmlService.createHtmlOutputFromFile('ECHelp')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setTitle('How to use EasyConcat')
      .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showSidebar(html);
}


/*** @param {cell range} cellrange Highlight a range of cells on the same row
@param {String} textdelimiter Enter a delimiter between quotes
@return {String}
@customfunction ***/
function EASYCONCAT(cellrange, textdelimiter) {
  var range = arguments[0];
  var values = range[0];
  var merged = [].concat.apply([], range);
  
  if (!(Array.isArray(range))) {
    throw new Error("Cellrange must be a valid cell range in the sheet");
  }
  var delimiter = arguments[1]; 
  if (typeof delimiter != "string" ) {
    throw new Error("Delimiter must be a string enclosed in quotation marks")
  }
  //this first iterated over values, then changed to range for testing, now using merged
  var valuelist = "";
  for (i in merged) {
    var cleansed = merged[i];
    if (cleansed.length > 0 && cleansed != skipvalue){
       valuelist += cleansed + delimiter;
    }
  }
  var trimmed = valuelist.substr(0, valuelist.length-delimiter.length);
  return trimmed; 
}
