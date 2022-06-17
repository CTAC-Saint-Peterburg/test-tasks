let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
//-Сортировка по возрастанию стоимости курсов
let coursesSort = new Array();
for (let i = 0; i < courses.length; i++) {
    let x = new Object();
    x.name = courses[i].name;
    x.prices = courses[i].prices.sort((a,b)=> a - b);
    coursesSort.push(x);
}
//-Создаём переменную финального результата
let result = new Array();
//-Создаём функцию фильтрующую данные для финального результата и вывода в html
function getResultFunc(data) {
    data.sort((a,b) => a-b); //-сортируем данные необходимые для фильтрации по возрастанию 
let coursesSortFiltering = coursesSort.filter((x)=> {
    if (x.prices[0] >= data[0] && x.prices[1] <= data[1]) {
        return x;
    }
})
result = coursesSortFiltering;
let getTagId = document.getElementById('result');
getTagId.innerHTML = '';
for (let i = 0; i < result.length; i++) {
    getTagId.innerHTML += `${" " + 'Наименование курса:'+ (i+1) + " " + result[i].name}  цена курса: [${result[i].prices}]`;
}

}
