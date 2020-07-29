# 一个简单用于验证的包可添加自定义 Api

`npm i lverifica -D`

## 如在 Typescript 环境下使用需再安装

`npm i @typs/lverifica -D`

### 现在支持的判断方法有

| 函数名               | 参数                                    | 返回值     | 说明                                                                                                         |
| -------------------- | --------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------ |
| isEvent              | val: number && string                   | boolean    | 判断偶数                                                                                                     |
| isOdd                | val: number && string                   | boolean    | 判断奇数                                                                                                     |
| isEmpty              | val: string                             | boolean    | 判断是否为空                                                                                                 |
| isNumber             | val: number                             | boolean    | 判断是否为数字                                                                                               |
| isUrl                | val: string                             | boolean    | 判断是否为 url                                                                                               |
| allEqual             | arr: Array<any>                         | boolean    | 判断数组中的元素是否都相等                                                                                   |
| bifurcateBy          | arr: Array<any>, fn: Function           | Array<any> | 将数组按照指定的函数逻辑进行分组，满足函数条件的逻辑为真，放入第一个数组中，其它不满足的放入第二个数组       |
| capitalizeEveryWord  | str: string                             | string     | 将一个句子中每个单词首字母转换成大写字母                                                                     |
| compact              | arr: Array<any>                         | Array<any> | 将数组中移除值为 false 的内容                                                                                |
| countOccurrences     | arr: Array<any>, val: number            | number     | 统计数组中某个值出现的次数                                                                                   |
| defaults             | obj: object, ...defs: any               | object     | 对象去重 如果对象中含有重复的属性，以前面的为准                                                              |
| difference           | arr: Array<any>, arrT: Array<any>       | Array<any> | 查找两个给定数组的差异，查找出前者数组在后者数组中不存在元素                                                 |
| Drop                 | arr: Array<any>, n: number = 1          | Array<any> | 代码将给定的数组从左边开始删除 n 个元素                                                                      |
| dropRightWhile       | arr: Array<any>, func: Function         | Array<any> | 将给定的数组按照给定的函数条件从右开始删除，直到当前元素满足函数条件为 True 时，停止删除，并返回数组剩余元素 |
| dropWhile            | arr: Array<any>, func: Function         | Array<any> | 按照给定的函数条件筛选数组，不满足函数条件的将从数组中移除                                                   |
| elementContains      | parent: HTMLElement, child: HTMLElement | boolean    | 接收两个 DOM 元素对象参数，判断后者是否是前者的子元素                                                        |
| getColonTimeFromDate | dateInitial: number,dateFinal: number   | number     | 返回两个日期之间相差多少天                                                                                   |
| getStyle             | el: HTMLElement, ruleName: string       | any        | 返回 DOM 元素节点对应的属性值                                                                                | 判断是否为偶数 |
| getType              | val: any                                | String     | 返回数据的类型                                                                                               |
| hasClass             | el: HTMLElement, className: string      | boolean    | 返回 DOM 元素是否包含指定的 Class 样式                                                                       |
| insertAfter          | el: HTMLElement, htmlString: string     | void       | 给定的 DOM 节点后插入新的节点内容                                                                            |
| insertBefore         | el: HTMLElement, htmlString: string     | void       | 给定的 DOM 节点前插入新的节点内容                                                                            |
| isAfterDate          | dateA: Date, dateB: Date                | boolean    | 接受两个日期类型的参数，判断前者的日期是否晚于后者的日期                                                     |
| Last                 | arr: Array<any>                         | Array<any> | 返回数组最后的元素                                                                                           |
| isTrue               | valOne: any, valTwo: any                | boolean    | 判断两个值是否相等                                                                                           |
| There                | arr: Array<any>, val: any               | boolean    | 数组中是否包含该值                                                                                           |
