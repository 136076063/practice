"use strict";
// 定义一个普通的方法 接受一个对象 且有一个name类型为string的的属性;
function init(params) {
    console.log(params.name);
}
function init2(params) {
    console.log(params.name);
}
function init3(params) {
    params.name = '1'; // ok
    console.log(params.name);
}
var init4 = function (params) {
    // params.name = '1'; // error
    console.log(params.name);
};
init4({ name: '123' });
