function showPopup1(hasFilter1) {
	const popup = document.querySelector('#popup1');

  if (hasFilter1) {
  	popup.classList.add('has-filter1');
  } else {
  	popup.classList.remove('has-filter1');
  }

  popup.classList.remove('hide1');
}

function closePopup1() {
	const popup = document.querySelector('#popup1');
  popup.classList.add('hide1');
}


function showPopup2(hasFilter2) {
	const popup = document.querySelector('#popup2');

  if (hasFilter2) {
  	popup.classList.add('has-filter2');
  } else {
  	popup.classList.remove('has-filter2');
  }

  popup.classList.remove('hide2');
}

function closePopup1() {
	const popup = document.querySelector('#popup2');
  popup.classList.add('hide2');
}

/*---------------------------------------엑셀기능 js*/

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
    const tr = document.querySelectorAll("tr");
    for(var i=0; i<tr.length; i++) {
      const tdPresent = tr[i].querySelectorAll('td');
      tr[i].setAttribute('id', 'tr');
        tdPresent[0].setAttribute('class', 'tdDate');
        tdPresent[1].setAttribute('class', 'tdClassification');
        tdPresent[2].setAttribute('class', 'tdIngredient');
        const tdValue = tdPresent[2].innerText;
        tdPresent[2].setAttribute('id', tdValue);

        if(tdValue === '오이') {
          const img = document.createElement("img");
          img.setAttribute('id','img1');
          document.getElementById("ImageDiv").appendChild(img);
          document.getElementById('img1').setAttribute('src', './oi.svg')
        }
      
    }
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
function addText() {
  const tdAll = document.querySelectorAll("td");
  for (var i = 0; i < tdAll.length; i++) {
    if (i % 3 === 0)
      tdAll[i].setAttribute('class', 'tdDate');
    if (i % 3 === 1)
      tdAll[i].setAttribute('class', 'tdClassification');
    if (i % 3 === 2)
      tdAll[i].setAttribute('class', 'tdIngredient');
  }
  const tbody = document.querySelector('tbody');
  if (tdAll.length % 3 === 0) {
    const tr = document.querySelectorAll("tr");
    for (var i = 0; i < tr.length; i++) {
      tr[i].setAttribute('id', 'tr');
    }
    const newtr = document.createElement("tr");
    newtr.setAttribute('id', 'newtr');
    tbody.appendChild(newtr);
  }
  const name = document.getElementById('add_text').value;
  const td = document.createElement("td");
  td.setAttribute('id', name);
  const textNode = document.createTextNode(name);
  td.appendChild(textNode);
  document.getElementById('newtr').appendChild(td);
  if (name === '오이') {
    const img = document.createElement("img");
    img.setAttribute('id', 'img1');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img1').setAttribute('src', './cucumber.svg')
  }
  if (name === '당근') {
    const img = document.createElement("img");
    img.setAttribute('id', 'img2');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img2').setAttribute('src', './carrot.svg')
  }
  if (name === '대파') {
    const img = document.createElement("img");
    img.setAttribute('id', 'img3');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img3').setAttribute('src', './greenonion.svg')
  }
  if (name === '양배추') {
    const img = document.createElement("img");
    img.setAttribute('id', 'img4');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img4').setAttribute('src', './cabbage.svg')
  }
  if (name === '가지') {
    const img = document.createElement("img");
    img.setAttribute('id', 'img5');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img5').setAttribute('src', './eggplant.svg')
  }
  if (name === '돼지고기') {
    const img = document.createElement("img");
    img.setAttribute('id', 'img6');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img6').setAttribute('src', './pork.svg')
  }
  if (name === '소고기') {
    const img = document.createElement("img");
    img.setAttribute('id', 'img7');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img7').setAttribute('src', './beef.svg')
  }
  if (name === '오리고기') {
    const img = document.createElement("img");
    img.setAttribute('id', 'img8');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img8').setAttribute('src', './duckmeat.svg')
  }
  if (name === '콜라') {
    const img = document.createElement("img");
    img.setAttribute('id', 'img9');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img9').setAttribute('src', './coke.svg')
  } if (name === '간장') {
    const img = document.createElement("img");
    img.setAttribute('id', 'img10');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img10').setAttribute('src', './soysauce.svg')
  }
  if (name === '고추장') {
    const img = document.createElement("img");
    img.setAttribute('id', 'img11');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img11').setAttribute('src', './kochujang.svg')
  }
  if (name === '소주') {
    const img = document.createElement("img");
    img.setAttribute('id', 'img12');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img12').setAttribute('src', './soju.svg')
  } if (name === '복숭아') {
    const img = document.createElement("img");
    img.setAttribute('id', 'img13');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img13').setAttribute('src', './peach.svg')
  }
  if (name === '사과') {
    const img = document.createElement("img");
    img.setAttribute('id', 'img14');
    document.getElementById("ImageDiv").appendChild(img);
    document.getElementById('img14').setAttribute('src', './apple.svg')
  }
  function mydate() {
    //alert("");
    document.getElementById("dt").hidden = false;
    document.getElementById("ndt").hidden = true;
  }
  function mydate1() {
    d = new Date(document.getElementById("dt").value);
    dt = d.getDate();
    mn = d.getMonth();
    mn++;
    yy = d.getFullYear();
    document.getElementById("ndt").value = dt + "/" + mn + "/" + yy
    document.getElementById("ndt").hidden = false;
    document.getElementById("dt").hidden = true;
  }
}
/*-------------------------------------*/
function check(event) {
    if (event.target.checked) {
      document.getElementById('menu-background').style.left="0px";
      document.querySelector('section').style.left = "0px";
    }
    else {
      document.getElementById('menu-background').style.left = "-170%"
      document.querySelector('section').style.left = "-170%";
    }
}
