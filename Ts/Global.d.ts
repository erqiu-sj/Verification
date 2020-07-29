declare function isEvent(val: number | string): boolean;
declare function isOdd(val: number | string): boolean;
declare function isEmpty(val: string): boolean;
declare function isNumber(val: number): boolean;
declare function isUrl(val: string): boolean;
declare function allEqual(arr: Array<any>): boolean;
declare function bifurcateBy(arr: Array<any>, fn: Function): Array<any>;
declare function capitalizeEveryWord(str: string): string;
declare function compact(arr: Array<any>): Array<any>;
declare function defaults(obj: object, ...defs: any): object;
declare function Drop(arr: Array<any>, n: number = 1): Array<any>;
declare function dropRightWhile(arr: Array<any>, func: Function): Array<any>;
declare function dropWhile(arr: Array<any>, func: Function): Array<any>;
declare function elementContains(
  parent: HTMLElement,
  child: HTMLElement
): boolean;
declare function getColonTimeFromDate(date: Date): String;
declare function getDaysDiffBetweenDates(
  dateInitial: number,
  dateFinal: number
): number;
declare function getStyle(el: HTMLElement, ruleName: string | any): any;
declare function getType(val: any): String;
declare function hasClass(el: HTMLElement, className: string): boolean;
declare function insertAfter(el: HTMLElement, htmlString: string): void;
declare function insertBefore(el: HTMLElement, htmlString: string): void;
declare function isAfterDate(dateA: Date, dateB: Date): boolean;
declare function Last(arr: Array<any>): Array<any>;
declare function isTrue(valOne: any, valTwo: any): boolean;
declare function There(arr: Array<any>, val: any): boolean;
