const {API_URL} = require('./_ROOT_CONFIG.js')

let FetchDataModule = {}

FetchDataModule.fetch = (ApiName, params)=>{
  if (API_URL[ApiName].showLoading) {
    wx.showLoading({
      title: '加载中',
    })
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: API_URL[ApiName].fetchUrl,
      data: API_URL[ApiName].method=='GET'?params:JSON.stringify(params),
      header: { 
          'Content-Type': 'application/json' ,
          'User-Id': FetchDataModule.state.user_id,
          'Access-Token': FetchDataModule.state.access_token,
      },
      success: (e)=>{
        resolve(JSON.parse(e.data))
      },
      fail: reject,
      method : API_URL[ApiName].method,
      complete : ()=>{
        wx.hideLoading()
      },
      dataType : 'application/json'
    })
  })
}

FetchDataModule.state = {
    city: "天津",
    user_id: '546',
    access_token: '7d59c9c4b916737005db36a42b3cf8ef',
    FetchDataLoading: null,
    device_identification: null,
    latitude: null,
    longitude: null,
    ccyp_province_id: 0,
    dj_province_id: 0,
    district: null
};


export default FetchDataModule