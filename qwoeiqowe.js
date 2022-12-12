const todoform = document.querySelector(".js-todoform");
const todoinput = todoform.querySelector("input"); //input 태그이름을 가지는 todoform에서
const todolist = document.querySelector(".js-todolist");
const TODO_LS = "todo";


let v = [];

let todos = []; // 할일을 저장할 배열

function deletetodo(event) {
    //.target : 타겟의 부모, 여기서는 id를 기준으로 지울거다.
    const btn = event.target;
    const div = btn.parentNode;
    todolist.removeChild(div); //HTML에서만 삭제된다.
    const cleantodos = todos.filter(function (arr) {
        return arr.id !== parseInt(div.id);
    }); //cleantodos 는 줄어들지만 todos 는 그대로다.
    //filter는 array의 모든 아이템을 통해 함수를 실행하고\
    //true인 아이템들만 가지고 새로운 array를 만듬
    todos = cleantodos;
    savetodo();
}

function savetodo() {
    localStorage.setItem(TODO_LS, JSON.stringify(todos));
    //local 스토리지에 저장하기위함, 근데 JS는 string만 저장할 수 있다.
    //그게 JSON stringfy
}

function painttodo(date, classification, text) {
    const div = document.createElement("div"); //HTML을 우리가 원하는걸 만든다.
    div.setAttribute('class', 'list');
    const deletebtn = document.createElement("button");
    deletebtn.innerText = "삭제하기";
    const imgText = document.createElement("img");

    if (text === '사과') {
        imgText.setAttribute('id', 'didvk');
        imgText.setAttribute('src', './img/apple.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    /*const btn = document.createElement("button");
    btn.setAttribute('id','btn');
    div.appendChild(btn);
    $(document).on("click","#btn",function(){ 
        const a = document.getElementById("iframe");
        a.setAttribute("src","https://www.naver.com/");
        document.getElementById("oi");
    })
    
    }*/
    if (text === '소고기') {
        imgText.setAttribute('id', 'thrhrl');
        imgText.setAttribute('src', './img/beef.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '양배추') {
        imgText.setAttribute('id', 'didqocn');
        imgText.setAttribute('src', './img/cabbage.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '당근') {
        imgText.setAttribute('id', 'ekdrms');
        imgText.setAttribute('src', './img/carrot.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '콜라') {
        imgText.setAttribute('id', 'zhffk');
        imgText.setAttribute('src', './img/coke.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '오이') {
        imgText.setAttribute('id', 'dhdl');
        imgText.setAttribute('src', './img/cucumber.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '오리고기') {
        imgText.setAttribute('id', 'dhflrhrl');
        imgText.setAttribute('src', './img/duckmeat.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '가지') {
        imgText.setAttribute('id', 'rkwl');
        imgText.setAttribute('src', './img/eggplant.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '파') {
        imgText.setAttribute('id', 'vk');
        imgText.setAttribute('src', './img/greenonion.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '고추장') {
        imgText.setAttribute('id', 'rhcnwkd');
        imgText.setAttribute('src', './img/kochujang.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '복숭아') {
        imgText.setAttribute('id', 'qhrtnddk');
        imgText.setAttribute('src', './img/peach.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '돼지고기') {
        imgText.setAttribute('id', 'ehowlrhrl');
        imgText.setAttribute('src', './img/pork.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '소주') {
        imgText.setAttribute('id', 'thwn');
        imgText.setAttribute('src', './img/soju.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '닭고기') {
        imgText.setAttribute('id', 'ekfrrhrl');
        imgText.setAttribute('src', './img/chicken.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '닭고기') {
        imgText.setAttribute('id', 'ekfrrhrl');
        imgText.setAttribute('src', './img/chicken.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '계란') {
        imgText.setAttribute('id', 'rPfks');
        imgText.setAttribute('src', './img/egg.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '사이다') {
        imgText.setAttribute('id', 'tkdlek');
        imgText.setAttribute('src', './img/sprite.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '김치') {
        imgText.setAttribute('id', 'rlacl');
        imgText.setAttribute('src', './img/kimchi.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '토마토') {
        imgText.setAttribute('id', 'xhakxh');
        imgText.setAttribute('src', './img/tomato.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '수박') {
        imgText.setAttribute('id', 'tnqkr');
        imgText.setAttribute('src', './img/watermelon.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '참외') {
        imgText.setAttribute('id', 'ckadhl');
        imgText.setAttribute('src', './img/melon.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '포도') {
        imgText.setAttribute('id', 'vheh');
        imgText.setAttribute('src', './img/grape.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '참치캔') {
        imgText.setAttribute('id', 'ckaclzos');
        imgText.setAttribute('src', './img/tuna.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '물엿') {
        imgText.setAttribute('id', 'anfdut');
        imgText.setAttribute('src', './img/syrup.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '고추가루') {
        imgText.setAttribute('id', 'rhcnrkfn');
        imgText.setAttribute('src', './img/chili.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '설탕') {
        imgText.setAttribute('id', 'tjfxkd');
        imgText.setAttribute('src', './img/sugar.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '소금') {
        imgText.setAttribute('id', 'thrma');
        imgText.setAttribute('src', './img/salt.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '케찹') {
        imgText.setAttribute('id', 'zpckq');
        imgText.setAttribute('src', './img/ketchup.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '마요네즈') {
        imgText.setAttribute('id', 'akdyspwm');
        imgText.setAttribute('src', './img/mayo.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '후추') {
        imgText.setAttribute('id', 'gncn');
        imgText.setAttribute('src', './img/pepper.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '된장') {
        imgText.setAttribute('id', 'ehlswkd');
        imgText.setAttribute('src', './img/miso.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '양파') {
        imgText.setAttribute('id', 'didvk');
        imgText.setAttribute('src', './img/onion.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '감자') {
        imgText.setAttribute('id', 'rkawk');
        imgText.setAttribute('src', './img/potato.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    if (text === '고구마') {
        imgText.setAttribute('id', 'rhrnak');
        imgText.setAttribute('src', './img/sweetpotato.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
    }
    const spanClassification = document.createElement("div");
    const spanDate = document.createElement("div");
    const newID = todos.length + 1; // li에 아이디를 주기위함
    deletebtn.addEventListener('click', deletetodo);//클릭했을때 지움
    spanDate.innerText = date;
    spanDate.setAttribute('class', 'date');
    document.getElementsByClassName('date');
    div.appendChild(spanDate);
    div.appendChild(spanClassification);
    div.appendChild(imgText);

    div.appendChild(deletebtn);
    //비어있는 li에 버튼만들고 sapn도 만들고 li안에 span도 넣고
    //span을 li안에 넣고 버튼을 li안에 넣음
    todolist.appendChild(div);//그리고 이 li를 ul에 넣음

    //웹 창에서 엔터를 눌렀을때, 엘리먼트가 만들어짐
    //js로 원하는 태그에 무언가를 만들고 이벤트로서 만듬
    div.id = newID;
    const todoobj = {
        date: date,
        classification: classification,
        text: text,
        id: newID
    };
    todos.push(todoobj); // 이 객체를 배열에 저장했다.
    savetodo();
}

function handle(event) {
    event.preventDefault();
    const currentval = todoinput.value;
    var jbSplit = currentval.split(',');
    painttodo(jbSplit[0], jbSplit[1], jbSplit[2]);
    todoinput.value = "";
}

function loadtodo() {
    const loadtodos = localStorage.getItem(TODO_LS);
    if (loadtodos !== null) {
        const parsetodo = JSON.parse(loadtodos); // 오브젝트로 변환
        parsetodo.forEach(function (a) {
            painttodo(a.date, a.classification, a.text); // 새로고침을 해도 로컬 데이터에 있기때문에 입력값이 계속 뜬다.
        });
    }
}

function init() {
    loadtodo();
    todoform.addEventListener("submit", handle);
}

init();
