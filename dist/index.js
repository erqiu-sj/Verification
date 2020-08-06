"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTrue = exports.Last = exports.isAfterDate = exports.insertBefore = exports.insertAfter = exports.hasClass = exports.getType = exports.getStyle = exports.getDaysDiffBetweenDates = exports.getColonTimeFromDate = exports.elementContains = exports.dropWhile = exports.dropRightWhile = exports.Drop = exports.difference = exports.defaults = exports.countOccurrences = exports.compact = exports.capitalizeEveryWord = exports.bifurcateBy = exports.allEqual = exports.isUrl = exports.isNumber = exports.isEmpty = exports.isOdd = exports.isEvent = void 0;
/**
 * 判断偶数
 * @param val number | string
 * @return boolean
 */
function isEvent(val) {
    if (typeof val == "string")
        return parseInt(val) % 2 === 0;
    return val % 2 === 0;
}
exports.isEvent = isEvent;
/**
 * 判断奇数
 * @param val number | string
 * @return boolean
 */
function isOdd(val) {
    if (typeof val == "string")
        return parseInt(val) % 2 === 0;
    return val % 2 === 1;
}
exports.isOdd = isOdd;
/**
 * 判断是否为空
 * @param val string
 * @return boolean
 */
function isEmpty(val) {
    return val.length ? false : true;
}
exports.isEmpty = isEmpty;
/**
 * 判断是否为数字
 * @param val number
 * @return boolean
 */
function isNumber(val) {
    var Reg = /^[0-9]+(\.[0-9]+)?$/;
    return Reg.test(String(val));
}
exports.isNumber = isNumber;
/**
 * 判断是否为url
 * @param val string
 * @return boolean
 */
function isUrl(val) {
    var Reg = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return Reg.test(val);
}
exports.isUrl = isUrl;
/**
 * 判断数组中的元素是否都相等
 * @param arr Array<any>
 * @return boolean
 */
function allEqual(arr) {
    return arr.every(function (val) { return val === arr[0]; });
}
exports.allEqual = allEqual;
/**
 * 将数组按照指定的函数逻辑进行分组，满足函数条件的逻辑为真，放入第一个数组中，其它不满足的放入第二个数组
 * @param arr Array<any>
 * @param fn Function
 * @return Array<any>
 */
function bifurcateBy(arr, fn) {
    return arr.reduce(function (acc, val, i) { return (acc[fn(val, i) ? 0 : 1].push(val), acc); }, [
        [],
        [],
    ]);
}
exports.bifurcateBy = bifurcateBy;
/**
 * 将一个句子中每个单词首字母转换成大写字母
 * @param str string
 */
function capitalizeEveryWord(str) {
    return str.replace(/\b[a-z]/g, function (char) { return char.toUpperCase(); });
}
exports.capitalizeEveryWord = capitalizeEveryWord;
/**
 * 将数组中移除值为 false 的内容
 * @param arr Array<any>
 */
function compact(arr) {
    return arr.filter(Boolean);
}
exports.compact = compact;
/**
 * 统计数组中某个值出现的次数
 * @param arr Array<any>
 * @param val number
 */
function countOccurrences(arr, val) {
    return arr.reduce(function (a, v) { return (v === val ? a + 1 : a); }, 0);
}
exports.countOccurrences = countOccurrences;
/**
 * 对象去重 如果对象中含有重复的属性，以前面的为准
 * @param obj object
 * @param defs any
 */
function defaults(obj) {
    var defs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        defs[_i - 1] = arguments[_i];
    }
    return Object.assign.apply(Object, __spreadArrays([{}, obj], defs.reverse(), [obj]));
}
exports.defaults = defaults;
/**
 * 查找两个给定数组的差异，查找出前者数组在后者数组中不存在元素
 * @param arr Array<any>
 * @param arrT Array<any>
 */
function difference(arr, arrT) {
    var s = new Set(arrT);
    return arr.filter(function (x) { return !s.has(x); });
}
exports.difference = difference;
/**
 * 代码将给定的数组从左边开始删除 n 个元素
 * @param arr Array
 * @param n number 默认=1
 */
function Drop(arr, n) {
    if (n === void 0) { n = 1; }
    return arr.slice(n);
}
exports.Drop = Drop;
/**
 * 将给定的数组按照给定的函数条件从右开始删除，直到当前元素满足函数条件为True时，停止删除，并返回数组剩余元素
 *
 * dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
 * @param arr Array<any>
 * @param func Function
 */
function dropRightWhile(arr, func) {
    while (arr.length > 0 && !func(arr[arr.length - 1]))
        arr = arr.slice(0, -1);
    return arr;
}
exports.dropRightWhile = dropRightWhile;
/**
 * 按照给定的函数条件筛选数组，不满足函数条件的将从数组中移除
 *
 * dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
 * @param arr
 * @param func
 */
function dropWhile(arr, func) {
    while (arr.length > 0 && !func(arr[0]))
        arr = arr.slice(1);
    return arr;
}
exports.dropWhile = dropWhile;
/**
 * 接收两个DOM元素对象参数，判断后者是否是前者的子元素
 * @param parent HTMLElement
 * @param child HTMLElement
 */
function elementContains(parent, child) {
    return parent !== child && parent.contains(child);
}
exports.elementContains = elementContains;
/**
 * 此段代码从Date对象里获取当前时间
 *
 * getColonTimeFromDate(new Date()); // "08:38:00"
 * @param date Data
 */
function getColonTimeFromDate(date) {
    return date.toTimeString().slice(0, 8);
}
exports.getColonTimeFromDate = getColonTimeFromDate;
/**
 * 返回两个日期之间相差多少天
 *
 * getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
 *
 * @param dateInitial number
 * @param dateFinal number
 */
function getDaysDiffBetweenDates(dateInitial, dateFinal) {
    return (dateFinal - dateInitial) / (1000 * 3600 * 24);
}
exports.getDaysDiffBetweenDates = getDaysDiffBetweenDates;
/**
 * 返回DOM元素节点对应的属性值
 *
 * getStyle(document.querySelector('p'), 'font-size'); // '16px'
 * @param el Element
 * @param ruleName String
 */
function getStyle(el, ruleName) {
    return getComputedStyle(el)[ruleName];
}
exports.getStyle = getStyle;
/**
 * 返回数据的类型
 *
 * getType(new Set([1, 2, 3])); // 'set'
 * @param val Type
 */
function getType(val) {
    return val === undefined
        ? "undefined"
        : val === null
            ? "null"
            : val.constructor.name.toLowerCase();
}
exports.getType = getType;
/**
 * 返回DOM元素是否包含指定的Class样式。
 *
 * @param el Element
 * @param className String
 */
function hasClass(el, className) {
    return el.classList.contains(className);
}
exports.hasClass = hasClass;
/**
 * 给定的DOM节点后插入新的节点内容
 *
 * insertAfter(document.getElementById("myId"), "<p></p>"); // <div id="myId">...</div> <p>after</p>
 * @param el Element
 * @param htmlString string
 */
function insertAfter(el, htmlString) {
    el.insertAdjacentHTML("afterend", htmlString);
}
exports.insertAfter = insertAfter;
/**
 * 给定的DOM节点前插入新的节点内容
 *
 * insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
 * @param el Element
 * @param htmlString string
 */
function insertBefore(el, htmlString) {
    el.insertAdjacentHTML("beforebegin", htmlString);
}
exports.insertBefore = insertBefore;
/**
 * 接受两个日期类型的参数，判断前者的日期是否晚于后者的日期
 *
 * isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
 * @param dateA Date
 * @param dateB Date
 */
function isAfterDate(dateA, dateB) {
    return dateA > dateB;
}
exports.isAfterDate = isAfterDate;
/**
 * 返回数组最后的元素
 * @param arr Array
 */
function Last(arr) {
    return arr[arr.length - 1];
}
exports.Last = Last;
/**
 * 判断两个值是否相等
 *
 * isTrue(NaN,NaN) //true
 * @param valOne 比较的值
 * @param valTwo 比较的值
 */
function isTrue(valOne, valTwo) {
    return Object.is(valOne, valTwo);
}
exports.isTrue = isTrue;
