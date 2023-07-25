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
 info: ['lunarDate'],
 geoPosition: true, // 是否获取经纬度
 
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

#### 获取设备信息

```js
  const params = await Device.Info({
    domain: 'https://www.beyounger.com',
    // transferDateToLunar: '2023/1/30',
    info: '',
    geoPosition: true,
    
  })

```

#### 上报设备信息

```js
const Submit =async () => {
  const params = await Device.Info({
    domain: '<https://www.beyounger.com>',
    // transferDateToLunar: '2023/1/30',
    info: '',
    geoPosition: true,

  })
  const  {

    week,
    userAgent,
    deviceType,
    OS,
    OSVersion,
    screenHeight,
    screenWidth,
    language,
    netWork,
    orientation,
    browserInfo,
    fingerprint,
    geoPosition,
    date,
    lunarDate,
    UUID

  } = params
  const submitParams = {
    week,
    user_agent: userAgent,
    device_type: deviceType,
    os: OS,
    os_version: OSVersion,
    screen_height: screenHeight,
    screen_width: screenWidth,
    language: language,
    net_work: netWork,
    orientation: orientation,
    browser_info: browserInfo,
    fingerprint: fingerprint,
    user_agent:userAgent,
    geo_position: geoPosition,
    date: date,
    lunar_date: `${lunarDate.year} ${lunarDate.chineseZodiac} ${lunarDate.month}${lunarDate.date}`,
    uuid: UUID,
  }

  // console.log(submitParams)
  Device.Submit(submitParams)
}

```
