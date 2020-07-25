# 一个简单用于验证的包可添加自定义 Api

`npm i lverifica -D`

### 现在支持的判断方法有

- isEvent 判断是否为偶数

- isOdd 判断是否为奇数

- isEmpty 判断是否为空

- isNumber 判断是否为数字

- isUrl 判断是否为 url

```
import  lverifica  from 'lverifica';

  @param type 哪种验证方法？
  @param val 需要验证的值
lverifica.Verified(type,val)

lverifica.Verified('isEvent',2) //true

自定义方法

  @param type 自定义方法名？
  @param fn 自定义方法
lverifica.addStrategy(type,fn);
```
