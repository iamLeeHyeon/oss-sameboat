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