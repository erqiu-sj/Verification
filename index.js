"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verify = (() => {
    let Strategist = {
        isEvent(val) {
            // 判断偶数
            return val % 2 === 0;
        },
        isOdd(val) {
            // 判断奇数
            return val % 2 === 1;
        },
        isEmpty(val) {
            //判断是否为空
            return val.length ? false : true;
        },
        isNumber(val) {
            // 判断是否为数字
            const Reg = /^[0-9]+(\.[0-9]+)?$/;
            return Reg.test(String(val));
        },
        isUrl(val) {
            // 判断是否为url
            const Reg = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
            return Reg.test(val);
        },
    };
    return {
        /**
         *
         * @param type 哪种验证方法？
         * @param val 需要验证的值
         */
        Verified(type, val) {
            return Strategist[type] ? Strategist[type](val) : "并没有该验证方法";
        },
        /**
         *
         * @param type 自定义方法名
         * @param fn 自定义方法
         */
        addStrategy(type, fn) {
            if (Strategist[type])
                return "方法已存在";
            else
                Strategist[type] = fn;
        },
    };
})();
exports.default = verify;
