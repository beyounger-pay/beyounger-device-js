# validator

## npm 引入

```bash
yarn add @beyounger/validator
# or with npm
npm install @beyounger/validator
```

```js
import Device from '@beyounger/validator'

/**
* @params:{
*  siteid: siteid;
*  getGeoPostion:  是否获取地理信息 不传默认 false 
*  
* }
*
* @return: 返回 token
*/
const siteid = "your siteid"

const token = await Device.Report(siteid, false)

或

const siteid = "your siteid"

const token = await Device.Report(siteid)
```

## script 引入

### 最新版本

- <https://cdn.jsdelivr.net/npm/@beyounger/validator@latest/dist/device.js>

### 固定版本

- <https://cdn.jsdelivr.net/npm/@beyounger/validator@0.0.1/dist/device.js>

### usage

#### 获取token

```js

const siteid = "your siteid"
const token = await Device.Report(siteid, false,)


const token = Device.Report(siteid, false,).then( token => {
    console.log(token)
})

```

### 通过EventListener

```js
Device.Report(siteid, false,)
document.addEventListener('beyounger:token', (event) => { 
    console.log('event')
    console.log(event.detail);
 });

```
