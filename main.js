const { json } = require("express");

function readExcel(event){
	excelExportCommon(event, handleExcelDataAll);
}
function excelExportCommon(event, callback){
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
        var fileData = reader.result;
        var wb = XLSX.read(fileData, {type : 'binary'});
        var sheetNameList = wb.SheetNames; // 시트 이름 목록 가져오기 
        var firstSheetName = sheetNameList[0]; // 첫번째 시트명
        var firstSheet = wb.Sheets[firstSheetName]; // 첫번째 시트 
        callback(firstSheet);      
    };
    reader.readAsBinaryString(input.files[0]);
}
function handleExcelDataAll(sheet){
	handleExcelDataHtml(sheet); // html 형태
}
function handleExcelDataHtml(sheet){
    $("#displayExcelHtml").html(XLSX.utils.sheet_to_html (sheet));
}

// 출처 : https://github.com/SheetJS/js-xlsx/issues/214
function get_header_row(sheet) {
    var headers = [];
    var range = XLSX.utils.decode_range(sheet['!ref']);
    var C, R = range.s.r; /* start in the first row */
    /* walk every column in the range */
    for(C = range.s.c; C <= range.e.c; ++C) {
        var cell = sheet[XLSX.utils.encode_cell({c:C, r:R})] /* find the cell in the first row */

        var hdr = "UNKNOWN " + C; // <-- replace with your desired default 
        if(cell && cell.t) hdr = XLSX.utils.format_cell(cell);

        headers.push(hdr);
    }
    return headers;
}

function saveExcel() {
  var table = document.querySelector('table');
  table.setAttribute('id', 'test');
  let wb = XLSX.utils.book_new();
  let ws = XLSX.utils.table_to_sheet(document.getElementById("test"));
  XLSX.utils.book_append_sheet(wb, ws, "sheet title");
  XLSX.writeFile(wb,"엑셀.xlsx");
}
  const idx = 1;
function addText() {
  const tr = document.querySelectorAll("tr");
  for(var i=0; i<tr.length; i++) {
    tr[i].setAttribute('id', 'tr');
  }
  const tbody = document.querySelector('tbody');
  const newtr = document.createElement("tr");
  newtr.setAttribute('id','newtr');
  tbody.appendChild(newtr);
  const name = document.getElementById('add_text').value;
  const td = document.createElement("td");
  td.setAttribute('id',name);
  const textNode = document.createTextNode(name);
  td.appendChild(textNode);
  document.getElementById('newtr').appendChild(td);
  if(name === '오이') {
    const img = document.createElement("img");
    img.setAttribute('id','img1');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img1').setAttribute('src', './imh/oi.png')
  }
  if(name === '당근') {  
    const img = document.createElement("img");
  img.setAttribute('id','img2');
  document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img2').setAttribute('src', './imh/carrot.png')
  }
  if(name === '감자') {
    const img = document.createElement("img");
    img.setAttribute('id','img3');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img3').setAttribute('src', './imh/potato.png')
  }
}
