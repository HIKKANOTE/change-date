function OnOpen() {
  var ui = SpreadsheetApp.getUi();
  var date = SpreadsheetApp
  .getActiveSpreadsheet()
  .getActiveSheet();
  var sheetTargert = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var D = new Date();
  var sheet = ss.getActiveSheet();
  var Tasks = sheet.getRange("A4").getValue();
  
  ui.createMenu("Меню")
  .addItem("Поднять", "getUP")
  .addToUi();
  date.getRange("A4")
  .setValue(new Date())
  .setHorizontalAlignment("center")
  .setBackgroundColor("#FF0000");
  
  /*for*/
  var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("hello")
    .setFontColor("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
  
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A5").setValue(D).setHorizontalAlignment("center");
   D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A6").setValue(D).setHorizontalAlignment("center"); 
   D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A7").setValue(D).setHorizontalAlignment("center"); 
   D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A8").setValue(D).setHorizontalAlignment("center"); 
     D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A9").setValue(D).setHorizontalAlignment("center");  
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A10").setValue(D).setHorizontalAlignment("center");  
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A11").setValue(D).setHorizontalAlignment("center");  
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A12").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A13").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A14").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A15").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A16").setValue(D).setHorizontalAlignment("center");
    D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A17").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A18").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A19").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A20").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A21").setValue(D).setHorizontalAlignment("center");
    D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A22").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A23").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A24").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A25").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A26").setValue(D).setHorizontalAlignment("center");
    D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A27").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A28").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A29").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A30").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A31").setValue(D).setHorizontalAlignment("center");
    D.setDate(D.getDate() + 1);
      sheetTargert.getRange("A32").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A33").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A34").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
    sheetTargert.getRange("A35").setValue(D).setHorizontalAlignment("center");
  D.setDate(D.getDate() + 1);
}

function getUP() {
 var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  var sheet = ss.getActiveSheet();
   var cell1 = ss.getSheetByName("Лист1");
  var cell2 = ss.getSheetByName("Лист1");
  var cell3 = ss.getSheetByName("Лист1");
  var cell4 = ss.getSheetByName("Лист1");
  ss.getRange("B4").clearContent();
  ss.getRange("C4").clearContent();
  ss.getRange("D4").clearContent();
  
   cell1.getRange(5, 2, 3, 3).copyTo(cell2.getRange(4, 2, 3, 3));
  cell3.getRange(5, 2, 3, 3).copyTo(cell4.getRange(6, 2, 3, 3));
}
 
