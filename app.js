//app.js
var server = require('./utils/util.js');
App({
  onLaunch: function () {
    // console.log('App Launch')
    var self = this;
    var rd_session = wx.getStorageSync('rd_session');
    if (!rd_session) {
      self.login();
    } else {
      wx.checkSession({
        success: function () {
          // 登录态未过期
          // console.log('登录态未过期')
          self.rd_session = rd_session;
          self.getUserInfo();
        },
        fail: function () {
          //登录态过期
          // console.log('过期');
          self.login();
        }
      })
    }
  },
  onShow: function () {
    // console.log('App Show')
  },
  onHide: function () {
    // console.log('App Hide')
  },
  globalData: {
    hasLogin: false,
    cartList: [],
    userInfo: [],
    shops: [
        {
            address:"银河购物中心",
            city_id:"340400",
            delivery_fee:4,
            distance:"844958",
            distanceFormat:844.96,
            end_sell_time:null,
            favorite:"0",
            is_rest:"0",
            latitude:"32.648893",
            longitude:"117.018078",
            min_price:"15",
            notice:"进店买东西的最美",
            overall:"5.0",
            phone:"15345548787",
            pic_hd:"http://manage.ipaotui.com/manage_uploadfile/seller/20170623/hd_1498207177149820717757072.jpg",
            pic_url:"http://manage.ipaotui.com/manage_uploadfile/seller/20170623/1498207177149820717757072.jpg",
            qrcode_url:"https://m.ipaotui.com/mini-program/shop?id=3892",
            quality:"5.0",
            reach_time:"30",
            reserve_day:"0",
            sales:"30",
            sell_time:"10:00-21:00",
            seller_id:"3892",
            seller_name:"珍奶会所",
            service:"5.0",
            share_url:"https://m.ipaotui.com/mall/shop?id=3892",
            start_sell_time:null,
            state:"1",
            goods_map:{
                174388:{
                    detail:"",
                    goods_id:"174388",
                    goods_name:"焦糖红豆龙珠奶茶",
                    packing_fee:"0.00",
                    pic_hd1:"http://manage.ipaotui.com/manage_uploadfile/seller_goods/20170623/hd1_1498209225149820922541553.jpg",
                    pic_hd2:"http://manage.ipaotui.com/manage_uploadfile/seller_goods/20170623/hd2_1498209225149820922541553.jpg",
                    pic_url:"http://manage.ipaotui.com/manage_uploadfile/seller_goods/20170623/1498209225149820922541553.jpg",
                    praise:"0",
                    price:"10.00",
                    sales:"0",
                    seller_id:"3892",
                    stock:"100",
                    sub_goods:[
                        {
                            packing_fee:"0.00",
                            price:"10.00",
                            stock:"100",
                            sub_id:"19604",
                            sub_name:"M杯",
                        },{
                            packing_fee:"0.00",
                            price:"15.00",
                            stock:"100",
                            sub_id:"19605",
                            sub_name:"超大杯",
                        }
                    ],
                    sub_goods_map:{
                        19604:{
                            packing_fee:"0.00",
                            price:"10.00",
                            stock:"100",
                            sub_id:"19604",
                            sub_name:"M杯",
                        },
                        19605:{
                            packing_fee:"0.00",
                            price:"15.00",
                            stock:"100",
                            sub_id:"19605",
                            sub_name:"超大杯",
                        }
                    }
                },
                174389:{
                    detail:"",
                    goods_id:"174389",
                    goods_name:"什么都有",
                    packing_fee:"0.00",
                    pic_hd1:"http://manage.ipaotui.com/manage_uploadfile/seller_goods/20170623/hd1_1498209436149820943656970.jpg",
                    pic_hd2:"http://manage.ipaotui.com/manage_uploadfile/seller_goods/20170623/hd2_1498209436149820943656970.jpg",
                    pic_url:"http://manage.ipaotui.com/manage_uploadfile/seller_goods/20170623/1498209436149820943656970.jpg",
                    praise:"0",
                    price:"15.00",
                    sales:"5",
                    seller_id:"3892",
                    stock:"97",
                    sub_goods:[],
                    sub_goods_map:{}
                }
            },
            menus:[
                {
                    goods:"174389,174390,174391,174392,174399,174403,174408",
                    is_use:"1",
                    menu_id:"19151",
                    menu_name:"热销产品",
                    seller_id:"3892",
                    sort:"6",
                    goods2:[
                        {
                            detail:"",
                            goods_id:"174389",
                            goods_name:"什么都有",
                            packing_fee:"0.00",
                            pic_hd1:"http://manage.ipaotui.com/manage_uploadfile/seller_goods/20170623/hd1_1498209436149820943656970.jpg",
                            pic_hd2:"http://manage.ipaotui.com/manage_uploadfile/seller_goods/20170623/hd2_1498209436149820943656970.jpg",
                            pic_url:"http://manage.ipaotui.com/manage_uploadfile/seller_goods/20170623/1498209436149820943656970.jpg",
                            praise:"0",
                            price:"15.00",
                            sales:"5",
                            seller_id:"3892",
                            stock:"97",
                            sub_goods:[]
                        }
                    ]
                },{
                    goods:"174421,174422,174423",
                    is_use:"1",
                    menu_id:"19158",
                    menu_name:"夏季限定",
                    seller_id:"3892",
                    sort:"5",
                    goods2:[
                        {
                            detail:"",
                            goods_id:"174388",
                            goods_name:"焦糖红豆龙珠奶茶",
                            packing_fee:"0.00",
                            pic_hd1:"http://manage.ipaotui.com/manage_uploadfile/seller_goods/20170623/hd1_1498210564149821056457795.jpg",
                            pic_hd2:"http://manage.ipaotui.com/manage_uploadfile/seller_goods/20170623/hd2_1498210564149821056457795.jpg",
                            pic_url:"http://manage.ipaotui.com/manage_uploadfile/seller_goods/20170623/1498210564149821056457795.jpg",
                            praise:"0",
                            price:"10.00",
                            sales:"1",
                            seller_id:"3892",
                            stock:"1000",
                            sub_goods:[
                                {
                                    packing_fee:"0.00",
                                    price:"10.00",
                                    stock:"999",
                                    sub_id:"19614",
                                    sub_name:"L杯",
                                },{
                                    packing_fee:"0.00",
                                    price:"15.00",
                                    stock:"999",
                                    sub_id:"19614",
                                    sub_name:"超大杯",
                                }
                            ]
                        }
                    ]
                }
            ],
            promotion:[
                {
                    info:"在线支付满30减15，满60减30",
                    typeId:"1",
                    pic_url:"http://manage.ipaotui.com/Uploadfile/Img/seller_promotion/first_cut.png"
                },{
                    info:"超值半价购@伊斯坦布尔",
                    typeId:"2",
                    pic_url:"http://manage.ipaotui.com/Uploadfile/Img/seller_promotion/first_cut.png"
                },{
                    info:"超值半价购@初心精选沙拉",
                    typeId:"3",
                    pic_url:"http://manage.ipaotui.com/Uploadfile/Img/seller_promotion/first_cut.png"
                },{
                    info:"满80元赠送迷你雪梨汁200ml1份",
                    typeId:"4",
                    pic_url:"http://manage.ipaotui.com/Uploadfile/Img/seller_promotion/first_cut.png"
                },{
                    info:"下单返券",
                    typeId:"5",
                    pic_url:"http://manage.ipaotui.com/Uploadfile/Img/seller_promotion/first_cut.png"
                },{
                    info:"点赞特价",
                    typeId:"6",
                    pic_url:"http://manage.ipaotui.com/Uploadfile/Img/seller_promotion/first_cut.png"
                },{
                    info:"本店支持开发票，请在下单时填写",
                    typeId:"7",
                    pic_url:"http://manage.ipaotui.com/Uploadfile/Img/seller_promotion/first_cut.png"
                }
            ]
        }
    ],
    activityIconMap: {
      1: "../../images/shop/减.png",
      2: "../../images/shop/准.png",
      3: "../../images/shop/折.png",
      4: "../../images/shop/赠.png",
      5: "../../images/shop/返.png",
      6: "../../images/shop/特.png",
      7: "../../images/shop/票.png"
    }
  },
  rd_session: null,
  login: function () {
    var self = this;
    wx.login({
      success: function (res) {
        // console.log('wx.login', res)
        // server.getJSON('dwq/WxAppApi/setUserSessionKey.php', { code: res.code }, function (res) {
        //   self.rd_session = res.data.rd_session;
        //   self.globalData.hasLogin = true;
        //   wx.setStorageSync('rd_session', self.rd_session);
        //   self.getUserInfo();
        // });
      }
    });
  },
  getUserInfo: function () {
    var self = this;
    wx.getUserInfo({
      success: function (res) {
        self.globalData.userInfo = res.userInfo;
        server.getJSON('dwq/WxAppApi/checkSignature.php', {
          rd_session: self.rd_session,
          signature: res.signature,
          raw_data: res.rawData
        }, function (res) {
          if (!res.data.is_pass) {
            // TODO:验证有误处理
            self.login();
          }
        });
      }
    });
  }
})
