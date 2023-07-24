# validator

## npm 引入

```bash
yarn add @skillnull/device-js
# or with npm
npm install @skillnull/device-js
```

```js
import Device from '@skillnull/device-js'

/**
* @params:{
*  domain: <String> 生成浏览器指纹所需，不传默认使用window.location.host;
*  transferDateToLunar: <String> 要被转化为农历的日期，需要同时开启info中的lunarDate选项才生效
*  info: <Array> 想要获取的信息，不传默认开启全部信息显示
* }
*
* @return: 返回 Promise 对象
*/

Device.Info({
 domain: 'your domain',
 transferDateToLunar: '需要转化为农历的日期。例如： 2023/01/01。',
 info: ['lunarDate']
}).then(data => {
 console.log(data)
})

或

Device.Info().then(data => {
 console.log(data)
})
```

## script 引入

### 最新版本

- <https://cdn.jsdelivr.net/npm/@beyounger/validator@latest/dist/device.js>

### 固定版本

- <https://cdn.jsdelivr.net/npm/@beyounger/validator@0.0.1/dist/device.js>

### usage

```js

```
