const { json } = require("express");

function readExcel() {
  let input = event.target;
  let reader = new FileReader();

  reader.onload = function() {
    let data = reader.result;
    let workBook = XLSX.read(data, {type:'binary'});

    workBook.SheetNames.forEach(function(sheetName){
      console.log('SheetName: ' + sheetName);

      let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
        document.getElementById("content").innerHTML = JSON.stringify(rows)
    })
  };

  reader.readAsBinaryString(input.files[0]);
}

function saveExcel() {
  let wb = XLSX.utils.book_new();
  let ws = XLSX.utils.table_to_sheet(document.getElementById("test"));
  XLSX.utils.book_append_sheet(wb, ws, "sheet title");
  XLSX.writeFile(wb,"엑셀.xlsx");
}
  const idx = 1;
function addText() {
  const name = document.getElementById('add_text').value;
  const td = document.createElement("td");
  td.setAttribute('id',name);
  const textNode = document.createTextNode(name);
  td.appendChild(textNode);
  document.getElementById("addTable").appendChild(td);
}