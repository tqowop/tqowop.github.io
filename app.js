let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let after = document.getElementById('after');


let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
    console.log("next");
    if(active - 1 < 0) {
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

after.onclick = function() {
    console.log("after");
    if(active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}

    // if(active + 1 > lengthItems) {
    //     active = 0;
    // } else {
    //     active = active + 1;
    // }
    // reloadSlider();


// prev.onlick = function () {
//     console.log("prev");
//     if(active - 1 < 0) {
//         active = lengthItems;
//     }else{
//         active = active - 1;
//     }
//     reloadSlider();
// }

 let refreshSlider = setInterval(()=> {after.click()},5000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

}
