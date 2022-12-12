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
        if (event.target.id === '닭') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EB%8B%AD');
        }
        if (event.target.id === '칠리소스') {
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
        if (event.target.id === '참치') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%B0%B8%EC%B9%98');
        }
        if (event.target.id === '수박') {
            a.setAttribute('src', 'https://www.10000recipe.com/recipe/list.html?q=%EC%88%98%EB%B0%95');
        }
        else {
            a.setAttribute('src', "");
        }
    }
    
}
