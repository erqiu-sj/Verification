"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verification = void 0;
var Verification = /** @class */ (function () {
    function Verification(Option) {
        this.Option = Option;
    }
    /**
     * 判断偶数
     * @return thisd
     */
    Verification.prototype.isEvent = function () {
        if (typeof this.Option !== "number")
            throw new Error("并不是一个数字");
        if (this.Option % 2 !== 0)
            throw new Error("并不是一个偶数");
        return this;
    };
    /**
     * 判断奇数
     * @return boolean
     */
    Verification.prototype.isOdd = function () {
        if (typeof this.Option !== "number")
            throw new Error("并不是一个数字");
        if (this.Option % 2 !== 1)
            throw new Error("并不是一个奇数");
        return this;
    };
    /**
     * 判断是否为空
     * @return this
     */
    Verification.prototype.isEmpty = function () {
        if (!this.Option.length)
            throw new Error("您并没有任何输入");
        return this;
    };
    /**
     * 判断是否为数字
     * @return this
     */
    Verification.prototype.isNumber = function () {
        var Reg = /^[0-9]+(\.[0-9]+)?$/;
        if (!Reg.test(String(this.Option)))
            throw new Error("不是一个数字");
        return this;
    };
    /**
     * 判断是否为url
     * @return this
     */
    Verification.prototype.isUrl = function () {
        var Reg = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if (!Reg.test(this.Option))
            throw new Error("并不是一个Url");
        return this;
    };
    /**
     * 判断数组中的元素是否都相等
     * @param Options Array<any>
     */
    Verification.prototype.allEqual = function () {
        var _this = this;
        if (!this.Option.every(function (val) { return val === _this.Option[0]; }))
            throw new Error("并不相等");
        return this;
    };
    /**
     * 将数组按照指定的函数逻辑进行分组，满足函数条件的逻辑为真，放入第一个数组中，其它不满足的放入第二个数组
     * @param arr Array<any>
     * @param fn Function
     * @return Array<any>
     */
    Verification.prototype.bifurcateBy = function (arr, fn) {
        return arr.reduce(function (acc, val, i) { return (acc[fn(val, i) ? 0 : 1].push(val), acc); }, [[], []]);
    };
    /**
     * 将一个句子中每个单词首字母转换成大写字母
     * @param str string
     * @return string
     */
    Verification.prototype.capitalizeEveryWord = function (str) {
        return str.replace(/\b[a-z]/g, function (char) { return char.toUpperCase(); });
    };
    /**
     * 将数组中移除值为 false 的内容
     * @return arr Array<any>
     */
    Verification.prototype.compact = function (arr) {
        return arr.filter(Boolean);
    };
    /**
     * 统计数组中某个值出现的次数
     * @param arr Array<any>
     * @param val number
     * @return number
     */
    Verification.prototype.countOccurrences = function (arr, val) {
        return arr.reduce(function (a, v) { return (v === val ? a + 1 : a); }, 0);
    };
    /**
     * 对象去重 如果对象中含有重复的属性，以前面的为准
     * @param obj object
     * @param defs any
     * @return object
     */
    Verification.prototype.defaults = function (obj) {
        var defs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            defs[_i - 1] = arguments[_i];
        }
        return Object.assign.apply(Object, __spreadArrays([{}, obj], defs.reverse(), [obj]));
    };
    /**
     * 查找两个给定数组的差异，查找出前者数组在后者数组中不存在元素
     * @param arr Array<any>
     * @param arrT Array<any>
     * @return Array
     */
    Verification.prototype.difference = function (arr, arrT) {
        var s = new Set(arrT);
        return arr.filter(function (x) { return !s.has(x); });
    };
    /**
     * 代码将给定的数组从左边开始删除 n 个元素
     * @param arr Array
     * @param n number 默认=1
     * @return Array
     */
    Verification.prototype.Drop = function (arr, n) {
        if (n === void 0) { n = 1; }
        return arr.slice(n);
    };
    /**
     * 将给定的数组按照给定的函数条件从右开始删除，直到当前元素满足函数条件为True时，停止删除，并返回数组剩余元素
     *
     * dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
     * @param arr Array<any>
     * @param func Function
     * @return Array
     */
    Verification.prototype.dropRightWhile = function (arr, func) {
        while (arr.length > 0 && !func(arr[arr.length - 1]))
            arr = arr.slice(0, -1);
        return arr;
    };
    /**
     * 按照给定的函数条件筛选数组，不满足函数条件的将从数组中移除
     *
     * dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
     * @param arr
     * @param func
     * @return Array
     */
    Verification.prototype.dropWhile = function (arr, func) {
        while (arr.length > 0 && !func(arr[0]))
            arr = arr.slice(1);
        return arr;
    };
    /**
     * 接收两个DOM元素对象参数，判断后者是否是前者的子元素
     * @param parent HTMLElement
     * @param child HTMLElement
     * @returns this
     */
    Verification.prototype.elementContains = function (parent, child) {
        if ((parent !== child && parent.contains(child)) === false)
            throw new Error("后者不是前者的子元素");
        return this;
    };
    /**
     * 此段代码从Date对象里获取当前时间
     *
     * getColonTimeFromDate(new Date()); // "08:38:00"
     * @param date Data
     * @return string
     */
    Verification.prototype.getColonTimeFromDate = function (date) {
        return date.toTimeString().slice(0, 8);
    };
    /**
     * 返回两个日期之间相差多少天
     *
     * getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
     *
     * @param dateInitial number
     * @param dateFinal number
     * @return number
     */
    Verification.prototype.getDaysDiffBetweenDates = function (dateInitial, dateFinal) {
        return (dateFinal - dateInitial) / (1000 * 3600 * 24);
    };
    /**
     * 返回DOM元素节点对应的属性值
     *
     * getStyle(document.querySelector('p'), 'font-size'); // '16px'
     * @param el Element
     * @param ruleName String
     */
    Verification.prototype.getStyle = function (el, ruleName) {
        return getComputedStyle(el)[ruleName];
    };
    /**
     * 返回数据的类型
     *
     * getType(new Set([1, 2, 3])); // 'set'
     * @param val Type
     * @return string
     */
    Verification.prototype.getType = function (val) {
        return val === undefined
            ? "undefined"
            : val === null
                ? "null"
                : val.constructor.name.toLowerCase();
    };
    /**
     * 返回DOM元素是否包含指定的Class样式。
     *
     * @param el Element
     * @param className String
     */
    Verification.prototype.hasClass = function (el, className) {
        if (!el.classList.contains(className))
            throw new Error("并不包含此Class样式");
        return this;
    };
    /**
     * 给定的DOM节点后插入新的节点内容
     *
     * insertAfter(document.getElementById("myId"), "<p></p>"); // <div id="myId">...</div> <p>after</p>
     * @param el Element
     * @param htmlString string
     * @return this
     */
    Verification.prototype.insertAfter = function (el, htmlString) {
        try {
            el.insertAdjacentHTML("afterend", htmlString);
            return this;
        }
        catch (e) {
            throw new Error("插入失败");
        }
    };
    /**
     * 给定的DOM节点前插入新的节点内容
     *
     * insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
     * @param el Element
     * @param htmlString string
     * @return this
     */
    Verification.prototype.insertBefore = function (el, htmlString) {
        try {
            el.insertAdjacentHTML("beforebegin", htmlString);
            return this;
        }
        catch (e) {
            throw new Error("插入失败");
        }
    };
    /**
     * 接受两个日期类型的参数，判断前者的日期是否晚于后者的日期
     *
     * isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
     * @param dateA Date
     * @param dateB Date
     */
    Verification.prototype.isAfterDate = function (dateA, dateB) {
        if (!(dateA > dateB))
            throw new Error("前者日期早与后者日期");
        return this;
    };
    /**
     * 返回数组最后的元素
     * @param arr Array
     * @return Array
     */
    Verification.prototype.Last = function (arr) {
        return arr[arr.length - 1];
    };
    /**
     * 判断两个值是否相等
     *
     * isTrue(NaN,NaN) //true
     * @param valOne 比较的值
     * @param valTwo 比较的值
     * @return this
     */
    Verification.prototype.isTrue = function (valOne, valTwo) {
        if (!Object.is(valOne, valTwo))
            throw new Error("不相等");
        return this;
    };
    /**
     * 用于监视一个数组和对象是否发生变化,如有发生变化会返回一个数组，记录了变化的值，和变化的下标或属性
     * @param Obj Array<string | number> | Object)
     * @returns Array<Object>
     */
    Verification.prototype.Monitor = function (Obj) {
        var WhoEdit = [];
        if (Obj instanceof Array) {
            Obj.forEach(function (i, index) {
                Object.defineProperty(Obj, index, {
                    set: function (val) {
                        WhoEdit.push({ ModifiedValue: val, index: index });
                    },
                });
            });
        }
        else {
            var _loop_1 = function (key) {
                Object.defineProperty(Obj, key, {
                    set: function (val) {
                        WhoEdit.push({ ModifiedValue: val, Attributes: key });
                    },
                });
            };
            for (var key in Obj) {
                _loop_1(key);
            }
        }
        return WhoEdit;
    };
    return Verification;
}());
exports.Verification = Verification;
