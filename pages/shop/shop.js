var app = getApp();
import {
  makePhoneCall,
  selectedShopDetail,
  isEmptyObject,
  filterEmptyObject
} from '../../utils/util'

var initOrder = {
  totalNum: 3,
  totalPrice: 30,
  totalGoodsPrice: 27,
  totalPackingFee: 3,
  goodsNums: {
    97804:3
  },
  goods: [
    {
      goods_id: "97804",
      goods_name: "凉皮",
      num: 3,
      packing_fee: "1.00",
      price: "9.00",
      sub_id: undefined,
      sub_name: undefined
    }
  ]
}

Page({
	data: {
    tabs: ["商品", "评价", "商家"],
    activeIndex: 0,

    activeMenuIndex: 0,
    showCart: false,

    showSubGoods: false,

    order: initOrder,
    
		cart: {
			count: 0,
			total: 0
		},
		cartList : [],
		localList: [],
		showCartDetail: false,
		defaultImg: 'http://global.zuzuche.com/assets/images/common/zzc-logo.png',
	},
	onLoad: function (options) {
		var shopId = options.id;
		var shop = selectedShopDetail(shopId) // throw Exception
    console.log('shop', shop)
		this.setData({
			shopId: shopId,
			shop: shop
		})
		var res = wx.getStorageSync('orderList');
		if(res)
		{
			this.setData({
				cart: {
					count: res.count,
					total: res.total
				}
			});
			if(!isEmptyObject(res.cartList))
			{
				this.setData({
					cartList:res.cartList,
					localList: filterEmptyObject(res.cartList)
				})
			}
		}
		if(typeof this.data.cartList[this.data.shopId] == 'undefined' || isEmptyObject(this.data.cartList[this.data.shopId]))
		{
			var cartList = this.data.cartList;
			cartList[this.data.shopId] = [];
			this.setData({
				cartList: cartList
			})
		}
		console.log(this.data.localList, this.data.cartList)
	},
	onShow: function () {
		this.setData({
			classifySeleted: 1
		});
	},
	checkOrderSame: function(name){
		var list = this.data.cartList[this.data.shopId];
		for(var index in list){
			if(list[index].name === name){
				return index;
			}
		}
		return false;
	},
	menuClick: function (e) {
		// console.log('menuclick', e)
		this.setData({
			activeMenuIndex: e.currentTarget.id
		})
	},
	tabClick: function (e) {
		// console.log('tabClick', e)
		this.setData({
			activeIndex: e.currentTarget.id
		});
  },
  showSubGoods(e) {
    var { shop: { goods_map }, order } = this.data;
    var { goodsId } = e.currentTarget.dataset;
    var { goods_id, goods_name, sub_goods } = goods_map[goodsId];
    this.setData({
      showSubGoods: true,
      activeSubGoods: {
        goods_name, goods_id,
        sub_goods,
        activeIndex: 0,
        subNums: this.calcSubNums(order.goods, goodsId)
      }
    })
  },
  hideSubGoods(e) {
    this.setData({
      showSubGoods: false
    })
  },
  increase(e) {
    var { order, shop: { goods_map } } = this.data;
    var { goodsId, subId } = e.currentTarget.dataset;
    var goods = goods_map[goodsId];
    var { goods_id, goods_name } = goods
    if (subId) {
      goods = goods.sub_goods_map[subId];
      var { sub_id, sub_name } = goods
    }
    order.totalNum += 1;
    order.totalGoodsPrice += +goods.price;
    order.totalPackingFee += +goods.packing_fee;
    order.totalPrice = +((order.totalGoodsPrice + order.totalPackingFee).toFixed(2));
    order.goods = this.addGoods(order.goods, {
      goods_id, goods_name,
      sub_id, sub_name,
      price: goods.price,
      packing_fee: goods.packing_fee,
      num: 1
    })
    order.goodsNums = this.calcGoodsNums(order.goods)

    this.setData({
      order
    })

    if (subId) {
      this.setData({
        activeSubGoods: Object.assign(this.data.activeSubGoods, {
          subNums: this.calcSubNums(order.goods, goodsId)
        })
      })
    }

  },
  decrease(e) {
    var { order, shop: { goods_map } } = this.data;
    var { goodsId, subId } = e.currentTarget.dataset;

    var goods = goods_map[goodsId];
    if (subId) {
      goods = goods.sub_goods_map[subId];
    }
    order.totalNum -= 1;
    order.totalGoodsPrice -= +goods.price;
    order.totalPackingFee -= +goods.packing_fee;
    order.totalPrice = +((order.totalGoodsPrice + order.totalPackingFee).toFixed(2));
    order.goods = this.removeGoods(order.goods, {
      goods_id: goodsId,
      sub_id: subId,
      num: 1
    })
    order.goodsNums = this.calcGoodsNums(order.goods)
    this.setData({
      order
    })

    if (subId) {
      this.setData({
        activeSubGoods: Object.assign(this.data.activeSubGoods, {
          subNums: this.calcSubNums(order.goods, goodsId)
        })
      })
    }

    if (order.totalNum == 0) {
      this.hideCart()
    }
  },
  toggleCart(e) {
    var { showCart, order: { totalNum } } = this.data

    if (totalNum <= 0) {
      return;
    }
    this.setData({
      showCart: !showCart
    })
  },
  hideCart(e) {
    this.setData({
      showCart: false
    })
  },
  onPhoneTap(e) {
    // console.log('onPhoneTap', e)
    var { phone } = e.currentTarget.dataset
    makePhoneCall(phone)
  },
  swiperChange(e) {
    console.log('swiperChange', e)
    var { current } = e.detail
    this.setData({
      activeIndex: current
    })
  },
	tapAddCart: function (e) {
		var price = parseFloat(e.target.dataset.price);
		var name  = e.target.dataset.name;
		var img   = e.target.dataset.pic;
		var list  = this.data.cartList;
		var sortedList = [];
		var index;
		if(index = this.checkOrderSame(name)){
			sortedList = list[this.data.shopId][index];
			var num = list[this.data.shopId][index].num;
			list[this.data.shopId][index].num = num + 1;
		}
		else{
			var order = {
				"price" : price,
				"num" : 1,
				"name": name,
				'img':  img,
				"shopId": this.data.shopId,
				"shopName": this.data.shop.restaurant_name,
				"pay": 0,
			}
			list[this.data.shopId].push(order);
			sortedList = order;
		}
		this.setData({
			cartList: list,
			localList: filterEmptyObject(list)
		});
		this.addCount( sortedList);
	},
	tapReduceCart: function (e) {
		var name = e.target.dataset.name;
		var price = parseFloat(e.target.dataset.price);
		var list  = this.data.cartList;
		var index, sortedList = [];
		if(index = this.checkOrderSame(name)){
			var num = list[this.data.shopId][index].num
			if(num > 1){
				sortedList = list[this.data.shopId][index];
				list[this.data.shopId][index].num = num - 1;
			}
			else{
				sortedList = list[this.data.shopId][index]
				list[this.data.shopId].splice(index, 1);
			}
		}
		this.setData({
			cartList: list,
			localList: filterEmptyObject(list)
		});
		this.deduceCount(sortedList);
	},
	addCount: function (list) {
		var count = this.data.cart.count + 1,
			total = this.data.cart.total + list.price;
		total = Math.round(parseFloat(total));
		this.saveCart(count, total);
	},
	deduceCount: function(list){
		var count = this.data.cart.count - 1,
			total = this.data.cart.total - list.price;
		total = Math.round(parseFloat(total));
		this.saveCart(count, total);
	},
	saveCart: function(count, total){
		total = Math.round(parseFloat(total));
		if(typeof total == null)
			total = 0;
		this.setData({
			cart: {
				count: count,
				total: total
			}
		});
		wx.setStorage({
			key: 'orderList',
			data: {
				cartList: this.data.cartList,
				count: this.data.cart.count,
				total: this.data.cart.total,
			}
		})
	},
	follow: function () {
		this.setData({
			followed: !this.data.followed
		});
	},
	onGoodsScroll: function (e) {
		if (e.detail.scrollTop > 10 && !this.data.scrollDown) {
			this.setData({
				scrollDown: true
			});
		} else if (e.detail.scrollTop < 10 && this.data.scrollDown) {
			this.setData({
				scrollDown: false
			});
		}

		var scale = e.detail.scrollWidth / 570,
			scrollTop = e.detail.scrollTop / scale,
			h = 0,
			classifySeleted,
			len = this.data.shop.menu.length;
		this.data.shop.menu.forEach(function (classify, i) {
			var _h = 70 + classify.menu.length * (46 * 3 + 20 * 2);
			if (scrollTop >= h - 100 / scale) {
				classifySeleted = classify.id;
			}
			h += _h;
		});
		this.setData({
			classifySeleted: classifySeleted
		});
	},
	tapClassify: function (e) {
		var id = e.target.dataset.id;
		console.log(id);
		this.setData({
			classifyViewed: id
		});
		console.log(this.data.classifyViewed)
		var self = this;
		setTimeout(function () {
			self.setData({
				classifySeleted: id
			});
		}, 100);
	},
	showCartDetail: function () {
		this.setData({
			showCartDetail: !this.data.showCartDetail
		});
	},
	hideCartDetail: function () {
		this.setData({
			showCartDetail: false
		});
	},
	submit: function (e) {
		var total = this.data.cart.total
		wx.navigateTo({
		  url: '/page/order/order?pay=1&total=' + total
		})
	}
});
