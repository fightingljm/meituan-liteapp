var app = getApp();
import {
  makePhoneCall,
  selectedShopDetail,
  isEmptyObject,
  filterEmptyObject
} from '../../utils/util'

var initOrder = {
  totalNum: 0,
  totalPrice: 0,
  totalGoodsPrice: 0,
  totalPackingFee: 0,
  goodsNums: {},
  goods: []
}

Page({
	data: {
    tabs: ["商品", "评价", "商家"],
    activeIndex: 0,

    activeMenuIndex: 0,
    showCart: false,

    showSubGoods: false,
    showShopModal:false,

    order: initOrder,

    activityIconMap: {
      1: "../../images/shop/减.png",
      2: "../../images/shop/准.png",
      3: "../../images/shop/折.png",
      4: "../../images/shop/赠.png",
      5: "../../images/shop/返.png",
      6: "../../images/shop/特.png",
      7: "../../images/shop/票.png"
    },

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
        console.log('options', options)
		var shopId = options.id;
		var shop = selectedShopDetail(shopId) // throw Exception
        console.log('shop', shop)
		this.setData({
			shopId: shopId,
			shop: shop
		})
        wx.setNavigationBarTitle({
          title: shop.seller_name
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
  addGoods(goods, item) {
    var { goods_id, sub_id, num } = item
    var itemIndex;
    if (sub_id) {
      itemIndex = goods.findIndex(item => {
        return item['goods_id'] == goods_id && item['sub_id'] == sub_id
      })
    } else {
      itemIndex = goods.findIndex(item => {
        return item['goods_id'] == goods_id
      })
    }
    if (itemIndex >= 0) {
      goods[itemIndex]['num'] += num
    } else {
      goods.push(item)
    }
    return goods
  },
  removeGoods(goods, item) {
    var { goods_id, sub_id, num } = item
    var itemIndex;
    if (sub_id) {
      itemIndex = goods.findIndex(item => {
        return item['goods_id'] == goods_id && item['sub_id'] == sub_id
      })
    } else {
      itemIndex = goods.findIndex(item => {
        return item['goods_id'] == goods_id
      })
    }
    if (itemIndex >= 0) {
      item = goods[itemIndex]
      if (item.num > num) {
        item.num -= num
      } else {
        goods.splice(itemIndex, 1)
      }
    }
    return goods
  },
	tabClick: function (e) {
		// console.log('tabClick', e)
		this.setData({
			activeIndex: e.currentTarget.id
		});
  },
  showSubGoods(e) {
    console.log('showSubGoods', e)
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
  showShopModal(e) {
    console.log('showShopModal', e)
    this.setData({
      showShopModal: true,
    })
  },
  hideShopModal(e) {
    this.setData({
      showShopModal: false
    })
  },
  changeSubGoods(e) {
    var { subIndex } = e.currentTarget.dataset;
    var { activeSubGoods } = this.data;
    activeSubGoods['activeIndex'] = subIndex
    this.setData({
      activeSubGoods
    })
  },
  increase(e) {
    console.log('increase', e)
    var { order, shop: { goods_map } } = this.data;
    console.log('increase', goods_map)
    var { goodsId, subId } = e.currentTarget.dataset;
    var goods = goods_map[goodsId];
    console.log('increase', goods)
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
  calcGoodsNums(goods) {
    var goodsNums = {}
    for (let i = 0, len = goods.length; i < len; i++) {
      let { goods_id, num } = goods[i]
      if (goodsNums[goods_id]) {
        goodsNums[goods_id] += num
      } else {
        goodsNums[goods_id] = num
      }
    }
    return goodsNums
  },
  calcSubNums(goods, goodsId) {
    var subNums = {}
    for (let i = 0, len = goods.length; i < len; i++) {
      let { goods_id, sub_id, num } = goods[i]
      if (goods_id == goodsId) {
        subNums[sub_id] = num
      }
    }
    return subNums
  },
  clearCart(e) {
    this.setData({
      order: initOrder,
      showCart: false
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
  onAddQuasiOrder: function (e) {
		var total = this.data.cart.total
		wx.navigateTo({
		  url: '/pages/order/order?pay=1&total=' + total
		})
	},
  // onAddQuasiOrder(e) {
  //   var that = this
  //   var {
  //     info: { seller_id },
  //     order: { goods },
  //     loading
  //   } = this.data
  //   if (loading) {
  //     return
  //   }

  //   this.setData({
  //     loading: true
  //   })
  //   getApp().getLoginInfo(loginInfo => {
  //     if (!loginInfo.is_login) {
  //       wx.navigateTo({
  //         url: '/pages/login/login',
  //       })
  //       this.setData({
  //         loading: false
  //       })
  //       return
  //     }
  //     addQuasiOrder({
  //       seller_id, goods,
  //       success(data) {

  //         that.setData({
  //           loading: false
  //         })
  //         wx.navigateTo({
  //           url: `/pages/order/quasi?id=${data.quasi_order_id}`
  //         })
  //       },
  //       error() {
  //         that.setData({
  //           loading: false
  //         })
  //       }
  //     })
  //   })
  // },
  onShareAppMessage() {
    var { shop: { seller_id, seller_name, pic_url } } = this.data
    return {
      title: seller_name,
      path: `/pages/shop/shop?id=${seller_id}`,
      imageUrl: pic_url
    }
  }
});
