let proxy = new Proxy({}, {
  get: (target, key, receiver) => {
    return Reflect.get(target, key);
  },
  set: (target, key, value, receiver) => {
    value = value.replace(/\s+/g, ""); // 去除空格
    let result = Reflect.set(target, key, value, receiver);
    if (result) {
      Device.Info({
        // domain: 'https://www.beyounger.com',
        domain: '',
        // transferDateToLunar: '2023/1/30',
        info: value && value.split(','),
        geoPosition: true
      }).then(infoResult => {
        let infoHtml = [];
        for (let i in infoResult) {
          let value = infoResult[i];
          if (i === 'lunarDate') {
            value = `${infoResult[i].year} ${infoResult[i].chineseZodiac} ${infoResult[i].month}${infoResult[i].day}`;
          }
          infoHtml.push('<li>' + '   <span>' + i + '</span>' + '   <span style="margin:0 1px;">:</span>' + '   <span style="color: red;">' + value + '</span>' + '</li>');
        }
        document.querySelector('#info_box').innerHTML = '<ul style="margin: 5px;">' + infoHtml.join('') + '</ul>';
      });
    } else {
      throw new ReferenceError('something error');
    }
    return result;
  }
});
const getInfo = () => {
  proxy.value = document.querySelector('#info_input').value;
};
const geoPosition = true;
const Submit = async () => {
  const params = await Device.Info({
    domain: 'https://www.beyounger.com',
    // transferDateToLunar: '2023/1/30',
    info: '',
    geoPosition: true
  });
  const {
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
  } = params;
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
    user_agent: userAgent,
    geo_position: geoPosition,
    date: date,
    lunar_date: `${lunarDate.year} ${lunarDate.chineseZodiac} ${lunarDate.month}${lunarDate.date}`,
    uuid: UUID
  };

  // console.log(submitParams)
  Device.Submit(submitParams);
};