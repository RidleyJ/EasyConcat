// currently pending approval in the chrome web store

/*** @param {String} cellrange
@param {String} textdelimiter 
@return {String}
@customfunction ***/

//user inputs cell range (has to be on same row) and a text delimiter
function EASYCONCAT(cellrange, textdelimiter) {
  
//the cellrange will be a two-dimensional array representing the values of each cell in the range; get this and go down one level to get the actual values (if the range went down to the next row, the next row's cell values would be at range[1])
  var range = arguments[0];
  var values = range[0];
  
// the text delimiter the person specifies is the second argument
  var delimiter = arguments[1]; 
  
//create an empty text string to push the cell values + delimiter to
  var valuelist = "";
  
// iterate over the cell values; only push those to valuelist that aren't empty
  for (var item in values) {
    var cleansed = values[item];
    if (cleansed !=""){
       valuelist += cleansed + delimiter;
    }
  }
  
// remove the last delimiter by extracting the entire valuelist minus the length of the delimiter
  var trimmed = valuelist.substr(0, valuelist.length-delimiter.length);
  
// the return value, trimmed, is what will appear in the destination cell
  return trimmed; 
}
