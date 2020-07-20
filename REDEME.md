# 一个简单用于验证的包可添加自定义 Api

`npm i jverifica -D`

### 现在支持的判断方法有

- isEvent 判断是否为偶数

- isOdd 判断是否为奇数

- isEmpty 判断是否为空

- isNumber 判断是否为数字

- isUrl 判断是否为 url

```
import  jverifica  from 'jverifica';

  @param type 哪种验证方法？
  @param val 需要验证的值
verify.Verified(type,val)

verify.Verified('isEvent',2) //true

自定义方法

  @param type 自定义方法名？
  @param fn 自定义方法
verify.addStrategy(type,fn);
```
