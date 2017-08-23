
export function __args() {
  var setting = {};
  if (arguments.length === 1 && typeof arguments[0] !== 'string') {
    setting = arguments[0];
  } else {
    setting.url = arguments[0];
    if (typeof arguments[1] === 'object') {
      setting.data = arguments[1];
      setting.success = arguments[2];
    } else {
      setting.success = arguments[1];
    }
  }
  if (setting.url.indexOf('https://') !== 0) {
    // setting.url = 'https://test2.zuzuche.com/' + setting.url;
  }
  return setting;
}

export function __json(method, setting) {
  setting.method = method;
  setting.header = {
    'content-type': 'application/json'
  };
  wx.request(setting);
}

export function getJSON() {
  __json('GET', __args.apply(this, arguments));
}
export function postJSON() {
  __json('POST', __args.apply(this, arguments));
}

export function formatTime(date) {
  const year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

export function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export function isEmptyObject(obj) {
  if ((typeof obj === "object" && !(obj instanceof Array)) || ((obj instanceof Array) && obj.length <= 0)) {
    var isEmpty = true;
    for (var prop in obj) {
      isEmpty = false;
      break;
    }
    return isEmpty;
  }
  return false;
}

export function filterEmptyObject(list) {
  var cartList = [];
  for (var index in list) {
    if (!this.isEmptyObject(list[index])) {
      cartList.push(list[index])
    }
  }
  return cartList;
}

export function selectedShopDetail(shopId) {
  var app = getApp();
  for (var i = 0; i < app.globalData.shops.length; ++i) {
    if (app.globalData.shops[i].id == shopId) {
      return app.globalData.shops[i]
    }
  }

  return null;
}

// 提示框
export function alert(content, callback) {
  wx.showModal({
    title: '提示',
    content: content,
    showCancel: false,
    success: callback
  })
}
// 确认框
export function confirm(options) {
  var {
    content, confirmText, cancelText,
    ok,
  } = options
  confirmText = confirmText || '确定'
  cancelText = cancelText || '关闭'
  wx.showModal({
    content,
    confirmText,
    cancelText,
    success(res) {
      if (res.confirm) {
        ok && ok()
      }
    }
  })
}

// 拨打电话
export function makePhoneCall(phoneNum) {
  confirm({
    content: `是否拨打电话 ${phoneNum}`,
    confirmText: '拨打',
    ok() {
      wx.makePhoneCall({
        phoneNumber: phoneNum,
      })
    }
  })
}

// module.exports = {
//   getJSON: function () {
//     __json('GET', __args.apply(this, arguments));
//   },
//   postJSON: function () {
//     __json('POST', __args.apply(this, arguments));
//   },
//   formatTime,
//   isEmptyObject,
//   selectedShopDetail,
//   filterEmptyObject,
//   makePhoneCall,
//   alert,
//   confirm
// }
