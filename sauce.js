const todoform = document.querySelector(".js-todoform");
const todoinput = todoform.querySelector("input"); //input 태그이름을 가지는 todoform에서
const todolist = document.querySelector(".js-todolist");
 
const TODO_LS = "todo";
let v = [];
 
let todos = []; // 할일을 저장할 배열
 
function deletetodo(event){
    //.target : 타겟의 부모, 여기서는 id를 기준으로 지울거다.


    const btn = event.target;
    const div = btn.parentNode; 
    todolist.removeChild(div); //HTML에서만 삭제된다.
    const cleantodos = todos.filter(function(arr){
        return arr.id !== parseInt(div.id);
    }); //cleantodos 는 줄어들지만 todos 는 그대로다.
    //filter는 array의 모든 아이템을 통해 함수를 실행하고\
    //true인 아이템들만 가지고 새로운 array를 만듬
    todos = cleantodos;
    savetodo();
}
function addsrc(event) {
    const a = document.getElementById("iframe");
    const loadtodos = localStorage.getItem(TODO_LS);
    var parsetodo;
        if(loadtodos !== null){
            parsetodo = JSON.parse(loadtodos);// 오브젝트로 변환
    }
    if (event.target.checked) {
        if (event.target.id === '돼지고기') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EB%8F%BC%EC%A7%80%EA%B3%A0%EA%B8%B0');
        }
        if (event.target.id === '사과') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%82%AC%EA%B3%BC');
        }
        if (event.target.id === '소고기') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%86%8C%EA%B3%A0%EA%B8%B0');
        }
        if (event.target.id === '양배추') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%96%91%EB%B0%B0%EC%B6%94');
        }
        if (event.target.id === '당근') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EB%8B%B9%EA%B7%BC');
        }
        if (event.target.id === '닭고기') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EB%8B%AD');
        }
        if (event.target.id === '고추가루') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%B9%A0%EB%A6%AC%EC%86%8C%EC%8A%A4');
        }
        if (event.target.id === '콜라') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%BD%9C%EB%9D%BC');
        }
        if (event.target.id === '오이') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%98%A4%EC%9D%B4');
        }
        if (event.target.id === '오리고기') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%98%A4%EB%A6%AC%EA%B3%A0%EA%B8%B0');
        }
        if (event.target.id === '계란') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EA%B3%84%EB%9E%80');
        }
        if (event.target.id === '가지') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EA%B0%80%EC%A7%80');
        }
        if (event.target.id === '포도') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%ED%8F%AC%EB%8F%84');
        }
        if (event.target.id === '파') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%ED%8C%8C');
        }
        if (event.target.id === '케찹') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%BC%80%EC%B0%B9');
        }
        if (event.target.id === '김치') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EA%B9%80%EC%B9%98');
        }
        if (event.target.id === '고추장') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EA%B3%A0%EC%B6%94%EC%9E%A5');
        }
        if (event.target.id === '마요네즈') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EB%A7%88%EC%9A%94%EB%84%A4%EC%A6%88');
        }
        if (event.target.id === '멜론') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EB%A9%9C%EB%A1%A0');
        }
        if (event.target.id === '된장') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EB%90%9C%EC%9E%A5');
        }
        if (event.target.id === '양파') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%96%91%ED%8C%8C');
        }
        if (event.target.id === '후추') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%ED%9B%84%EC%B6%94');
        }
        if (event.target.id === '복숭아') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EB%B3%B5%EC%88%AD%EC%95%84');
        }
        if (event.target.id === '감자') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EA%B0%90%EC%9E%90');
        }
        if (event.target.id === '소금') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%86%8C%EA%B8%88');
        }
        if (event.target.id === '소주') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%86%8C%EC%A3%BC');
        }
        if (event.target.id === '사이다') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%82%AC%EC%9D%B4%EB%8B%A4');
        }
        if (event.target.id === '설탕') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%84%A4%ED%83%95');
        }
        if (event.target.id === '고구마') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EA%B3%A0%EA%B5%AC%EB%A7%88');
        }
        if (event.target.id === '물엿') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EB%AC%BC%EC%97%BF');
        }
        if (event.target.id === '토마토') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%ED%86%A0%EB%A7%88%ED%86%A0');
        }
        if (event.target.id === '참치캔') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%B0%B8%EC%B9%98');
        }
        if (event.target.id === '수박') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%88%98%EB%B0%95');
        }
    }
    
    else {
            a.setAttribute('src', "");
        }
    
}
 
function savetodo(){
    localStorage.setItem(TODO_LS,JSON.stringify(todos)); 
    //local 스토리지에 저장하기위함, 근데 JS는 string만 저장할 수 있다.
    //그게 JSON stringfy
}
 
function painttodo(date,classification, text){
    const div = document.createElement("div"); //HTML을 우리가 원하는걸 만든다.
    div.setAttribute('class','checkbox');
    const deletebtn = document.createElement("button");
    const checkbox = document.createElement("input");
    const checklabel = document.createElement("label");
    checklabel.setAttribute("for",text);
    div.setAttribute('class','list' );
    checkbox.setAttribute('type', 'checkbox');
    checkbox.style.display = "none";
    const recipeimg = document.createElement('img');
    recipeimg.setAttribute('src','./img/recipe.png');
    checklabel.appendChild(recipeimg);
    checkbox.setAttribute('id', text);
    recipeimg.style.width="100px"
    deletebtn.innerText = "삭제하기";
    const imgText = document.createElement("img");

    if( text === '고추가루' && classification === '소스'){
        imgText.setAttribute('id','rhcnrkfn');
        imgText.setAttribute('src','./img/chili.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
        }
    if( text === '케첩' && classification === '소스'){
        imgText.setAttribute('id','zpckq');
        imgText.setAttribute('src','./img/ketchup.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
        }
    if( text === '고추가루' && classification === '소스'){
        imgText.setAttribute('id','rhcnrkfn');
        imgText.setAttribute('src','./img/chili.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
        }
    if( text === '고추장' && classification === '소스'){
        imgText.setAttribute('id','rhcnwkd');
        imgText.setAttribute('src','./img/kochujang.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
        }
    if( text === '마요네즈' && classification === '소스'){
        imgText.setAttribute('id','akdyspwm');
        imgText.setAttribute('src','./img/mayo.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
        }
    if( text === '후추' && classification === '소스'){
        imgText.setAttribute('id','gncn');
        imgText.setAttribute('src','./img/paper.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
        }
    if( text === '된장' && classification === '소스'){
        imgText.setAttribute('id','ehlswkd');
        imgText.setAttribute('src','./img/miso.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
        }
    if( text === '소금' && classification === '소스'){
        imgText.setAttribute('id','thrma');
        imgText.setAttribute('src','./img/salt.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
        }
    if( text === '설탕' && classification === '소스'){
        imgText.setAttribute('id','tjfxkd');
        imgText.setAttribute('src','./img/sugar.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
        }
    if( text === '물엿' && classification === '소스'){
        imgText.setAttribute('id','anfdut');
        imgText.setAttribute('src','./img/syrup.svg');
        imgText.style.width = '100px';
        imgText.style.height = '100px';
        imgText.style.padding = '25px';
        }
    const spanText = document.createElement("div");
    spanText.setAttribute('class', 'date');
    const spanClassification = document.createElement("div");
    const spanDate = document.createElement("div");
    const newID = todos.length+1; // li에 아이디를 주기위함
    deletebtn.addEventListener('click', deletetodo);
    checkbox.addEventListener('click', addsrc);//클릭했을때 지움
    
    spanText.innerText = text;
    spanDate.innerText = date;
    spanClassification.innerText = classification;
    div.appendChild(spanDate);
    div.appendChild(imgText);
    div.appendChild(checklabel); 
    div.appendChild(checkbox);
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

}
function handle(event){
    event.preventDefault();
    const currentval = todoinput.value;
    var jbSplit = currentval.split(',');
    painttodo(jbSplit[0], jbSplit[1], jbSplit[2]);
    todoinput.value = "";
}
function loadtodo(){
    const loadtodos = localStorage.getItem(TODO_LS);
    if(loadtodos !== null){
        const parsetodo = JSON.parse(loadtodos); // 오브젝트로 변환
        parsetodo.forEach(function(a) {
            if(a.classification === '소스')
            painttodo(a.date, a.classification, a.text); // 새로고침을 해도 로컬 데이터에 있기때문에 입력값이 계속 뜬다.
            });
    }
}

 
function init(){
    loadtodo();
    todoform.addEventListener("submit",handle);
}
 
init();
