const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const desertMenu = ['cake','Ice Cream', 'Pudding', 'Fruit salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => '<p>Item ${index + 1}: ${item}</p>').join('');
document.getElementById('breakfastMenuItem').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += '<p>Item ${index + 1}: ${item}</p>';});
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

    let dessertItem = '';
    for (let i = 0; i < dessertMenu.length; i++) {
        desertItem += '<p>Item ${i +1}: ${dessertMenu[i]}</p>';}
        document.getElementById('desertMenuItems').innerHTML = dessertItem;
