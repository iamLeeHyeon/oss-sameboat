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
  if(name === '대파') {
    const img = document.createElement("img");
    img.setAttribute('id','img3');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img3').setAttribute('src', './imh/greenonion.png')
  }
  if(name === '양배추') {
    const img = document.createElement("img");
    img.setAttribute('id','img4');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img4').setAttribute('src', './imh/cabbage.png')
  }
  if(name === '가지') {
    const img = document.createElement("img");
    img.setAttribute('id','img5');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img5').setAttribute('src', './imh/eggplant.png')
  }
  if(name === '돼지고기') {
    const img = document.createElement("img");
    img.setAttribute('id','img6');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img6').setAttribute('src', './imh/pork.png')
  }
  if(name === '소고기') {
    const img = document.createElement("img");
    img.setAttribute('id','img7');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img7').setAttribute('src', './imh/beef.png')
  }
  if(name === '오리고기') {
    const img = document.createElement("img");
    img.setAttribute('id','img8');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img8').setAttribute('src', './imh/duckmeat.png')
  }
}
function mydate()
{
  //alert("");
document.getElementById("dt").hidden=false;
document.getElementById("ndt").hidden=true;
}
function mydate1()
{
 d=new Date(document.getElementById("dt").value);
dt=d.getDate();
mn=d.getMonth();
mn++;
yy=d.getFullYear();
document.getElementById("ndt").value=dt+"/"+mn+"/"+yy
document.getElementById("ndt").hidden=false;
document.getElementById("dt").hidden=true;
}
