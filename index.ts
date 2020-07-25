/**
 * 判断偶数
 * @param val number | string
 */
export function isEvent(val: number | string): boolean {
  if (typeof val == "string") return parseInt(val) % 2 === 0;
  return val % 2 === 0;
}
/**
 * 判断奇数
 * @param val number | string
 */
export function isOdd(val: number | string): boolean {
  if (typeof val == "string") return parseInt(val) % 2 === 0;
  return val % 2 === 1;
}
/**
 * 判断是否为空
 * @param val string
 */
export function isEmpty(val: string): boolean {
  return val.length ? false : true;
}
/**
 * 判断是否为数字
 * @param val number
 */
export function isNumber(val: number): boolean {
  const Reg = /^[0-9]+(\.[0-9]+)?$/;
  return Reg.test(String(val));
}
/**
 * 判断是否为url
 * @param val string
 */
export function isUrl(val: string): boolean {
  const Reg = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return Reg.test(val);
}
/**
 * 判断数组中的元素是否都相等
 * @param arr Array<any>
 */
export function allEqual(arr: Array<any>): boolean {
  return arr.every((val) => val === arr[0]);
}
/**
 * 将数组按照指定的函数逻辑进行分组，满足函数条件的逻辑为真，放入第一个数组中，其它不满足的放入第二个数组
 * @param arr Array<any>
 * @param fn Function
 */
export function bifurcateBy(arr: Array<any>, fn: Function): Array<any> {
  return arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [
    [],
    [],
  ]);
}
/**
 * 将一个句子中每个单词首字母转换成大写字母
 * @param str string
 */
export function capitalizeEveryWord(str: string): string {
  return str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
}
/**
 * 将数组中移除值为 false 的内容
 * @param arr Array<any>
 */
export function compact(arr: Array<any>): Array<any> {
  return arr.filter(Boolean);
}
/**
 * 统计数组中某个值出现的次数
 * @param arr Array<any>
 * @param val number
 */
export function countOccurrences(arr: Array<any>, val: number): number {
  return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
}
/**
 * 对象去重 如果对象中含有重复的属性，以前面的为准
 * @param obj object
 * @param defs any
 */
export function defaults(obj: object, ...defs: any): object {
  return Object.assign({}, obj, ...defs.reverse(), obj);
}
/**
 * 查找两个给定数组的差异，查找出前者数组在后者数组中不存在元素
 * @param arr Array<any>
 * @param arrT Array<any>
 */
export function difference(arr: Array<any>, arrT: Array<any>): Array<any> {
  const s = new Set(arrT);
  return arr.filter((x) => !s.has(x));
}
/**
 * 代码将给定的数组从左边开始删除 n 个元素
 * @param arr Array
 * @param n number 默认=1
 */
export function Drop(arr: Array<any>, n: number = 1): Array<any> {
  return arr.slice(n);
}
/**
 * 将给定的数组按照给定的函数条件从右开始删除，直到当前元素满足函数条件为True时，停止删除，并返回数组剩余元素
 *
 * dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
 * @param arr Array<any>
 * @param func Function
 */
export function dropRightWhile(arr: Array<any>, func: Function): Array<any> {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
}
/**
 * 按照给定的函数条件筛选数组，不满足函数条件的将从数组中移除
 *
 * dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
 * @param arr
 * @param func
 */
export function dropWhile(arr: Array<any>, func: Function): Array<any> {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
}
/**
 * 接收两个DOM元素对象参数，判断后者是否是前者的子元素
 * @param parent HTMLElement
 * @param child HTMLElement
 */
export function elementContains(
  parent: HTMLElement,
  child: HTMLElement
): boolean {
  return parent !== child && parent.contains(child);
}
/**
 * 此段代码从Date对象里获取当前时间
 *
 * getColonTimeFromDate(new Date()); // "08:38:00"
 * @param date Data
 */
export function getColonTimeFromDate(date: Date): String {
  return date.toTimeString().slice(0, 8);
}
/**
 * 返回两个日期之间相差多少天
 *
 * getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
 *
 * @param dateInitial number
 * @param dateFinal number
 */
export function getDaysDiffBetweenDates(
  dateInitial: number,
  dateFinal: number
): number {
  return (dateFinal - dateInitial) / (1000 * 3600 * 24);
}
/**
 * 返回DOM元素节点对应的属性值
 *
 * getStyle(document.querySelector('p'), 'font-size'); // '16px'
 * @param el Element
 * @param ruleName String
 */
export function getStyle(el: HTMLElement, ruleName: string | any): any {
  return getComputedStyle(el)[ruleName];
}
/**
 * 返回数据的类型
 *
 * getType(new Set([1, 2, 3])); // 'set'
 * @param val Type
 */
export function getType(val: any): String {
  return val === undefined
    ? "undefined"
    : val === null
    ? "null"
    : val.constructor.name.toLowerCase();
}
/**
 * 返回DOM元素是否包含指定的Class样式。
 *
 * @param el Element
 * @param className String
 */
export function hasClass(el: HTMLElement, className: string): boolean {
  return el.classList.contains(className);
}
/**
 * 给定的DOM节点后插入新的节点内容
 *
 * insertAfter(document.getElementById("myId"), "<p></p>"); // <div id="myId">...</div> <p>after</p>
 * @param el Element
 * @param htmlString string
 */
export function insertAfter(el: HTMLElement, htmlString: string): void {
  el.insertAdjacentHTML("afterend", htmlString);
}
/**
 * 给定的DOM节点前插入新的节点内容
 *
 * insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
 * @param el Element
 * @param htmlString string
 */
export function insertBefore(el: HTMLElement, htmlString: string): void {
  el.insertAdjacentHTML("beforebegin", htmlString);
}
/**
 * 用于判断数据是否为指定的数据类型，如果是则返回true
 *
 * is(Array, [1]); // true
 * @param type any
 * @param val any
 */
export function is(type: any, val: any): boolean {
  return ![, null].includes(val) && val.constructor === type;
}
/**
 * 接受两个日期类型的参数，判断前者的日期是否晚于后者的日期
 *
 * isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
 * @param dateA Date
 * @param dateB Date
 */
export function isAfterDate(dateA: Date, dateB: Date): boolean {
  return dateA > dateB;
}
/**
 * 返回数组最后的元素
 * @param arr Array
 */
export function Last(arr: Array<any>): Array<any> {
  return arr[arr.length - 1];
}
