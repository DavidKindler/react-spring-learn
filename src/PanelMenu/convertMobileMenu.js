import React from 'react';
import { a, b } from './data/NXP_mobilemenu_ORIG';

var temp = document.createElement('div');
var q = a();
temp.innerHTML = q;
var y = temp.firstElementChild;
window.arr = Array.prototype.slice.call(y.children);
var g = Array.prototype.slice.call(window.arr[0].children)
console.log('g',g)
var l = g.map( el => {
  console.log('el', el)
})


var x = temp;
x = window.arr[0].innerHTML;
export { x };
