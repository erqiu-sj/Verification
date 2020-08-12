export declare class Verification {
  isEvent(): this;
  isOdd(): this;
  isEmpty(): this;
  isNumber(): this;
  isUrl(): this;
  allEqual(): this;
  bifurcateBy(arr: Array<any>, fn: Function): Array<any>;
  capitalizeEveryWord(str: string): string;
  compact(arr: Array<any>): Array<any>;
  defaults(obj: object, ...defs: any): object;
  Drop(arr: Array<any>, n: number = 1): Array<any>;
  dropRightWhile(arr: Array<any>, func: Function): Array<any>;
  dropWhile(arr: Array<any>, func: Function): Array<any>;
  elementContains(parent: HTMLElement, child: HTMLElement): this;
  getColonTimeFromDate(date: Date): String;
  getDaysDiffBetweenDates(dateInitial: number, dateFinal: number): number;
  getStyle(el: HTMLElement, ruleName: string | any): any;
  getType(val: any): String;
  hasClass(el: HTMLElement, className: string): this;
  insertAfter(el: HTMLElement, htmlString: string): this;
  insertBefore(el: HTMLElement, htmlString: string): this;
  isAfterDate(dateA: Date, dateB: Date): this;
  Last(arr: Array<any>): Array<any>;
  isTrue(valOne: any, valTwo: any): this;
  There(arr: Array<any>, val: any): this;
  Monitor(Obj: Array<string | number> | Object): Array<Object>;
}
