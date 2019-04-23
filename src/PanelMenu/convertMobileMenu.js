import { a, b } from './data/NXP_mobilemenu_ORIG';
// import 'mmenu-js';

var temp = document.createElement('div');
var q = a();
temp.innerHTML = q;
var x = temp.firstElementChild;
// var x = menu();
// var x = temp.firstChild;
window.arr = Array.prototype.slice.call(x.children);

x = window.arr[0].innerHTML;

export { x };
