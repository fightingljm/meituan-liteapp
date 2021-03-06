// export const domain = 'http://temp.chitj.com/haoyouhui';
// export const domain = 'http://192.168.1.115/haoyouhui';
// export const domain = 'http://www.haoyouhui2016.com';
// export const domain = 'https://temp.chitj.com/mojimall';
export const domain = 'https://fashop.wenshuai.cn';
const ROOT_URL = `${domain}/api/`;
const ROOT_URL2 = `${domain}/app/`;

export const API_URL = {
	STORELIST : {
		domain : ROOT_URL,
		apiUrl : 'Store/storeList',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Store/storeList',
		remark : '美食列表，包含分页数据结构',
		method : 'GET',
		tableName : 'ez_store',
	},
	STORESCREEN : {
		domain : ROOT_URL,
		apiUrl : 'Store/storeScreen',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Store/storeScreen',
		remark : '列表搜索条件',
		method : 'GET',
		tableName : 'ez_store',
	},
	INDEXINDEXCLASSIFY : {
		domain : ROOT_URL,
		apiUrl : 'Index/indexclassify',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Index/indexclassify',
		remark : '首页分类焦点轮播图',
		method : 'GET',
		tableName : 'ez_store',
	},
	AREAAREALIST : {
		domain : ROOT_URL,
		apiUrl : 'Area/areaList',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Area/areaList',
		remark : '地址选择数据',
		method : 'GET',
		tableName : 'ez_store',
	},
	AREAAREAHOT : {
		domain : ROOT_URL,
		apiUrl : 'Area/areaHot',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Area/areaHot',
		remark : '热门城市数据',
		method : 'GET',
		tableName : 'ez_store',
	},
	ADVLISTS : {
		domain : ROOT_URL,
		apiUrl : 'adv/lists',
		author : '韩文博',
		fetchUrl : ROOT_URL+'adv/lists',
		remark : '获得某个广告位下的广告列表',
		method : 'GET',
		tableName : 'ez_store',
	},
	SHOPGOODSSEARCH : {
		domain : ROOT_URL,
		apiUrl : 'shopgoods/search',
		author : '韩文博',
		fetchUrl : ROOT_URL+'shopgoods/search',
		remark : '商品根据条件获得列表',
		method : 'GET',
		tableName : 'ez_store',
	},
	SHOPGOODSCATEGORYTREE : {
		domain : ROOT_URL,
		apiUrl : 'shopgoodscategory/tree',
		author : '韩文博',
		fetchUrl : ROOT_URL+'shopgoodscategory/tree',
		remark : '商品分类列表',
		method : 'GET',
		tableName : 'ez_store',
	},
	STOREDETAIL : {
		domain : ROOT_URL,
		apiUrl : 'Store/detail',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Store/detail',
		remark : '店铺详情',
		method : 'GET',
		tableName : 'ez_store',
	},
	SHOPGOODSDETAIL : {
		domain : ROOT_URL,
		apiUrl : 'shopgoods/detail',
		author : '韩文博',
		fetchUrl : ROOT_URL+'shopgoods/detail',
		remark : '单条商品信息',
		method : 'GET',
		tableName : 'ez_store',
	},
	USERREGISTER : {
		domain : ROOT_URL,
		apiUrl : 'user/register',
		author : '韩文博',
		fetchUrl : ROOT_URL+'user/register',
		remark : '注册',
		method : 'POST',
		tableName : 'ez_store',
	},
	USERSENDREGSMS : {
		domain : ROOT_URL,
		apiUrl : 'user/sendregsms',
		author : '韩文博',
		fetchUrl : ROOT_URL+'user/sendregsms',
		remark : '发送注册校正码',
		method : 'POST',
		tableName : 'ez_store',
	},
	USERLOGIN : {
		domain : ROOT_URL,
		apiUrl : 'user/login',
		author : '韩文博',
		fetchUrl : ROOT_URL+'user/login',
		remark : '登陆',
		method : 'POST',
		tableName : 'ez_store',
		showLoading : true,
	},
	USERFINDPASSWORD : {
		domain : ROOT_URL,
		apiUrl : 'user/findpassword',
		author : '韩文博',
		fetchUrl : ROOT_URL+'user/register',
		remark : '找回密码',
		method : 'POST',
		tableName : 'ez_store',
	},
	USERPASSWORDEDIT : {
		domain : ROOT_URL,
		apiUrl : 'user/passwordedit',
		author : '韩文博',
		fetchUrl : ROOT_URL+'user/passwordedit',
		remark : '修改密码',
		method : 'POST',
		tableName : 'ez_store',
	},
	USERSENDFINDPASSWORDSMS : {
		domain : ROOT_URL,
		apiUrl : 'user/sendregsms',
		author : '韩文博',
		fetchUrl : ROOT_URL+'user/sendfindpasswordsms',
		remark : '发送找回密码校正码',
		method : 'POST',
		tableName : 'ez_store',
	},
	MESSAGESYSTEM : {
		domain : ROOT_URL,
		apiUrl : 'user/sendregsms',
		author : '韩文博',
		fetchUrl : ROOT_URL+'message/system',
		remark : '个人中心的通知',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
	},
	BUYBUYSTEP1 : {
		domain : ROOT_URL,
		apiUrl : 'buy/buystep1',
		author : '韩文博',
		fetchUrl : ROOT_URL+'buy/buystep1',
		remark : '生成订单',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
	},
	BUYBUYSTEP2 : {
		domain : ROOT_URL,
		apiUrl : 'buy/buystep2',
		author : '韩文博',
		fetchUrl : ROOT_URL+'buy/buystep2',
		remark : '提交订单',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
	},
	BUYADDRESSDEFAULT : {
		domain : ROOT_URL,
		apiUrl : 'buy/addressdefault',
		author : '韩文博',
		fetchUrl : ROOT_URL+'buy/addressdefault',
		remark : '获得默认收货地址',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
	},
	BUYADDRESSLIST : {
		domain : ROOT_URL,
		apiUrl : 'Buy/addresslist',
		author : '韩文博',
		fetchUrl : ROOT_URL+'Buy/addresslist',
		remark : '获得收货地址',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
	},
	PAYMENTGETORDERINFO : {
		domain : ROOT_URL,
		apiUrl : 'payment/getorderinfo',
		author : '韩文博',
		fetchUrl : ROOT_URL+'payment/getorderinfo',
		remark : '获得订单信息',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
	},
	PAYMENTTOPAY : {
		domain : ROOT_URL,
		apiUrl : 'payment/topay',
		author : '韩文博',
		fetchUrl : ROOT_URL+'payment/topay',
		remark : '获得支付code',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	STOREGOODSLIST : {
		domain : ROOT_URL,
		apiUrl : 'Store/goodsList',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Store/goodsList',
		remark : '获得各种卷',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
	},
	CARTLISTS : {
		domain : ROOT_URL,
		apiUrl : 'cart/lists',
		author : '韩文博',
		fetchUrl : ROOT_URL+'cart/lists',
		remark : '购物车列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
	},
	CARTADD : {
		domain : ROOT_URL,
		apiUrl : 'cart/add',
		author : '韩文博',
		fetchUrl : ROOT_URL+'cart/add',
		remark : '加入购物车',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	ORDERSEARCH : {
		domain : ROOT_URL,
		apiUrl : 'Order/search',
		author : '韩文博',
		fetchUrl : ROOT_URL+'Order/search',
		remark : '买家的订单列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	CARTEDIT : {
		domain : ROOT_URL,
		apiUrl : 'cart/edit',
		author : '韩文博',
		fetchUrl : ROOT_URL+'cart/edit',
		remark : '购物车更新商品数量',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
	},
	CARTDEL : {
		domain : ROOT_URL,
		apiUrl : 'cart/del',
		author : '韩文博',
		fetchUrl : ROOT_URL+'cart/del',
		remark : '购物车更新商品数量',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
	},
	STOREGOODSDETAIL : {
		domain : ROOT_URL,
		apiUrl : 'Store/goodsdetail',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Store/goodsdetail',
		remark : '商户团单详情',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
	},
	BUYADDRESSDEFAULT : {
		domain : ROOT_URL,
		apiUrl : 'buy/addressdefault',
		author : '韩文博',
		fetchUrl : ROOT_URL+'buy/addressdefault',
		remark : '获得默认收货地址',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
	},
	USERREGISTER : {
		domain : ROOT_URL,
		apiUrl : 'user/register',
		author : '韩文博',
		fetchUrl : ROOT_URL+'user/register',
		remark : '注册',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : false,
	},
	UPLOADIMAGESBINARY : {
		domain : ROOT_URL,
		apiUrl : 'upload/imagesbinary',
		author : '韩文博',
		fetchUrl : ROOT_URL+'upload/imagesbinary',
		remark : '上传图片',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
	},
	USERAVATAR : {
		domain : ROOT_URL,
		apiUrl : 'User/avatar',
		author : '韩文博',
		fetchUrl : ROOT_URL+'User/avatar',
		remark : '设置用户头像',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
	},
	STOREORDERCONDITIONWHENCREATEORDER:{
		domain : ROOT_URL,
		apiUrl : 'storeorder/conditionwhencreateorder',
		author : '韩文博',
		fetchUrl : ROOT_URL+'storeorder/conditionwhencreateorder',
		remark : '获得创建订单时所需要的条件',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
	},
	STOREORDERCREATEORDER:{
		domain : ROOT_URL,
		apiUrl : 'storeorder/createorder',
		author : '韩文博',
		fetchUrl : ROOT_URL+'storeorder/createorder',
		remark : '创建订单',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	STOREIMAGESLIST:{
		domain : ROOT_URL,
		apiUrl : 'Store/imageslist',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Store/imageslist',
		remark : '店铺详情内图片列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	STOREORDERSEARCH:{
		domain : ROOT_URL,
		apiUrl : 'storeorder/search',
		author : '韩文博',
		fetchUrl : ROOT_URL+'storeorder/search',
		remark : '买家的订单',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	STOREORDERDETAIL:{
		domain : ROOT_URL,
		apiUrl : 'storeorder/detail',
		author : '韩文博',
		fetchUrl : ROOT_URL+'storeorder/detail',
		remark : '订单详细',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	STOREORDEREVALUATEGOODS:{
		domain : ROOT_URL,
		apiUrl : 'storeorder/evaluategoods',
		author : '韩文博',
		fetchUrl : ROOT_URL+'storeorder/evaluategoods',
		remark : '对某条消费的商品进行评价',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	STOREREFUNDADD:{
		domain : ROOT_URL,
		apiUrl : 'storerefund/add',
		author : '韩文博',
		fetchUrl : ROOT_URL+'storerefund/add',
		remark : '添加订单商品部分退款',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	STOREEVALUATEGOODSEVALUATELIST:{
		domain : ROOT_URL,
		apiUrl : 'storeevaluate/goodsevaluatelist',
		author : '韩文博',
		fetchUrl : ROOT_URL+'storeevaluate/goodsevaluatelist',
		remark : '店铺/店铺下某个商品的评价列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	SHOPORDERDETAIL:{
		domain : ROOT_URL,
		apiUrl : 'shoporder/detail',
		author : '韩文博',
		fetchUrl : ROOT_URL+'shoporder/detail',
		remark : '订单详细',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	BUYADDRESSSETDEFAULT:{
		domain : ROOT_URL,
		apiUrl : 'buy/addresssetdefault',
		author : '韩文博',
		fetchUrl : ROOT_URL+'buy/addresssetdefault',
		remark : '买家设置默认收货地址',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	BUYADDRESSEDIT:{
		domain : ROOT_URL,
		apiUrl : 'buy/addressedit',
		author : '韩文博',
		fetchUrl : ROOT_URL+'buy/addressedit',
		remark : '买家修改收货地址',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	BUYADDRESSADD:{
		domain : ROOT_URL,
		apiUrl : 'buy/addressadd',
		author : '韩文博',
		fetchUrl : ROOT_URL+'buy/addressadd',
		remark : '添加新的收货地址',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	BUYADDRESSDEL:{
		domain : ROOT_URL,
		apiUrl : 'buy/addressdel',
		author : '韩文博',
		fetchUrl : ROOT_URL+'buy/addressdel',
		remark : '买家删除收货地址',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	AREAPROVINCECITYBLOCK:{
		domain : ROOT_URL,
		apiUrl : 'Area/provinceCityBlock',
		author : '韩文博',
		fetchUrl : ROOT_URL+'Area/provinceCityBlock',
		remark : '获得省和市和区县',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	REFUNDINFO:{
		domain : ROOT_URL,
		apiUrl : 'refund/info',
		author : '韩文博',
		fetchUrl : ROOT_URL+'refund/info',
		remark : '获得要退款的订单信息商品信息',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	REFUNDADDREFUNDALL:{
		domain : ROOT_URL,
		apiUrl : 'refund/addrefundall',
		author : '韩文博',
		fetchUrl : ROOT_URL+'refund/addrefundall',
		remark : '添加订单为全部退款即取消订单',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	REFUNDADD:{
		domain : ROOT_URL,
		apiUrl : 'refund/add',
		author : '韩文博',
		fetchUrl : ROOT_URL+'refund/add',
		remark : '添加订单商品部分退款',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	REFUNDSEARCH:{
		domain : ROOT_URL,
		apiUrl : 'refund/search',
		author : '韩文博',
		fetchUrl : ROOT_URL+'refund/search',
		remark : '退款列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	RETURNSEARCH:{
		domain : ROOT_URL,
		apiUrl : 'return/search',
		author : '韩文博',
		fetchUrl : ROOT_URL+'return/search',
		remark : '退货列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	REFUNDDETAIL:{
		domain : ROOT_URL,
		apiUrl : 'refund/detail',
		author : '韩文博',
		fetchUrl : ROOT_URL+'refund/detail',
		remark : '退款记录查看',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	RETURNDELAY:{
		domain : ROOT_URL,
		apiUrl : 'return/delay',
		author : '韩文博',
		fetchUrl : ROOT_URL+'return/delay',
		remark : '修改退货记录的延迟时间',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	RETURNSHIPINFO:{
		domain : ROOT_URL,
		apiUrl : 'return/shipinfo',
		author : '韩文博',
		fetchUrl : ROOT_URL+'return/shipinfo',
		remark : '发货时所需要的退货信息及物流信息',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	RETURNSHIP:{
		domain : ROOT_URL,
		apiUrl : 'return/ship',
		author : '韩文博',
		fetchUrl : ROOT_URL+'return/ship',
		remark : '修改退货记录为发货',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	USERSENDFINDPASSWORDSMS:{
		domain : ROOT_URL,
		apiUrl : 'user/sendfindpasswordsms',
		author : '韩文博',
		fetchUrl : ROOT_URL+'user/sendfindpasswordsms',
		remark : '发送找回密码校正码',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : true,
	},
	USERFINDPASSWORD:{
		domain : ROOT_URL,
		apiUrl : 'user/findpassword',
		author : '韩文博',
		fetchUrl : ROOT_URL+'user/findpassword',
		remark : '找回密码',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : true,
	},
	INDEXAPPLATESTVERSION:{
		domain : ROOT_URL,
		apiUrl : 'index/applatestversion',
		author : '韩文博',
		fetchUrl : ROOT_URL+'index/applatestversion',
		remark : '获得APP最新版本',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	INDEXCAROUSELWELCOME:{
		domain : ROOT_URL,
		apiUrl : 'index/carouselwelcome',
		author : '韩文博',
		fetchUrl : ROOT_URL+'index/carouselwelcome',
		remark : '欢迎页轮播图',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	INDEXAPPUPDATE:{
		domain : ROOT_URL,
		apiUrl : 'index/appupdate',
		author : '韩文博',
		fetchUrl : ROOT_URL+'index/appupdate',
		remark : 'app更新检查',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	USERGETUSERINFO : {
		domain : ROOT_URL,
		apiUrl : 'User/getUserInfo',
		author : '韩文博',
		fetchUrl : ROOT_URL+'User/getUserInfo',
		remark : '获取用户信息',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	USERPOINTSUSERPOINTSLOGLIST : {
		domain : ROOT_URL,
		apiUrl : 'userpoints/userpointsloglist',
		author : '韩文博',
		fetchUrl : ROOT_URL+'userpoints/userpointsloglist',
		remark : '积分账单',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	COLLECTISDONE : {
		domain : ROOT_URL,
		apiUrl : 'collect/isdone',
		author : '韩文博',
		fetchUrl : ROOT_URL+'collect/isdone',
		remark : '判断某条是否已经收藏',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	COLLECTDEL : {
		domain : ROOT_URL,
		apiUrl : 'collect/del',
		author : '韩文博',
		fetchUrl : ROOT_URL+'collect/del',
		remark : '取消收藏',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	COLLECTADD : {
		domain : ROOT_URL,
		apiUrl : 'collect/add',
		author : '韩文博',
		fetchUrl : ROOT_URL+'collect/add',
		remark : '收藏',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	SHAREADD : {
		domain : ROOT_URL,
		apiUrl : 'share/add',
		author : '韩文博',
		fetchUrl : ROOT_URL+'share/add',
		remark : '收藏',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	TOPICLISTS : {
		domain : ROOT_URL,
		apiUrl : 'topic/lists',
		author : '韩文博',
		fetchUrl : ROOT_URL+'topic/lists',
		remark : '获得某个专题分类下的专题列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	PREDEPOSITPDCASHADD : {
		domain : ROOT_URL,
		apiUrl : 'predeposit/pdcashadd',
		author : '韩文博',
		fetchUrl : ROOT_URL+'predeposit/pdcashadd',
		remark : '申请提现',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	PREDEPOSITPDCASHLIST : {
		domain : ROOT_URL,
		apiUrl : 'predeposit/pdcashlist',
		author : '韩文博',
		fetchUrl : ROOT_URL+'predeposit/pdcashlist',
		remark : '申请明细列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	STOREINDEXBOMBSTORE : {
		domain : ROOT_URL,
		apiUrl : 'store/indexbombstore',
		author : '韩文博',
		fetchUrl : ROOT_URL+'store/indexbombstore',
		remark : '首页的推荐爆店活动',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	SHOPGOODSEVALUATELIST : {
		domain : ROOT_URL,
		apiUrl : 'shopgoods/evaluatelist',
		author : '韩文博',
		fetchUrl : ROOT_URL+'shopgoods/evaluatelist',
		remark : '某条商品的评价信息',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	USEREDITPROFILE : {
		domain : ROOT_URL,
		apiUrl : 'user/editProfile',
		author : '韩文博',
		fetchUrl : ROOT_URL+'user/editProfile',
		remark : '修改资料',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	CROWDFUNDINGPROJECTPROJECTSCREEN : {
		domain : ROOT_URL,
		apiUrl : 'Crowdfundingproject/projectscreen',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Crowdfundingproject/projectscreen',
		remark : '众筹搜索条件',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	CROWDFUNDINGPROJECTPROJECTLIST : {
		domain : ROOT_URL,
		apiUrl : 'Crowdfundingproject/projectlist',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Crowdfundingproject/projectlist',
		remark : '众筹列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	CROWDFUNDINGPROJECTPROJECTDETAIL : {
		domain : ROOT_URL,
		apiUrl : 'Crowdfundingproject/projectdetail',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Crowdfundingproject/projectdetail',
		remark : '众筹项目详情',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	CROWDFUNDINGPROJECTPROJECTDYNAMIC : {
		domain : ROOT_URL,
		apiUrl : 'Crowdfundingproject/projectdynamic',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Crowdfundingproject/projectdynamic',
		remark : '项目动态列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	CROWDFUNDINGPROJECTPAYPROJECTBUY : {
		domain : ROOT_URL,
		apiUrl : 'Crowdfundingprojectpay/projectbuy',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Crowdfundingprojectpay/projectbuy',
		remark : '众筹购买',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	CROWDFUNDINGPROJECTORDERINDEX : {
		domain : ROOT_URL,
		apiUrl : 'Crowdfundingprojectorder/index',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Crowdfundingprojectorder/index',
		remark : '用户众筹订单列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	CROWDFUNDINGPROJECTORDERORDERDETAIL : {
		domain : ROOT_URL,
		apiUrl : 'Crowdfundingprojectorder/orderdetail',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Crowdfundingprojectorder/orderdetail',
		remark : '众筹项目订单详情',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	PROCUREMENTDEMANDINDEX : {
		domain : ROOT_URL,
		apiUrl : 'Procurementdemand/index',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Procurementdemand/index',
		remark : '集团采购列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	SUPPLYINFORMATIONSUPPLIERLIST : {
		domain : ROOT_URL,
		apiUrl : 'Supplyinformation/supplierlist',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Supplyinformation/supplierlist',
		remark : '供货信息列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	PAYMENTPAYMENTLIST : {
		domain : ROOT_URL,
		apiUrl : 'Payment/paymentList',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Payment/paymentList',
		remark : '支付方式列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	BRANDALLIANCEINDEX : {
		domain : ROOT_URL,
		apiUrl : 'Brandalliance/index',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Brandalliance/index',
		remark : '加盟品牌列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	BRANDALLIANCEBRANDCLASSIFY : {
		domain : ROOT_URL,
		apiUrl : 'Brandalliance/brandclassify',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Brandalliance/brandclassify',
		remark : '加盟品牌列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	BRANDALLIANCEDETAIL : {
		domain : ROOT_URL,
		apiUrl : 'Brandalliance/detail',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Brandalliance/detail',
		remark : '加盟品牌详情',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	MESSAGESYSTEMUNREAD:{
		domain : ROOT_URL,
		apiUrl : 'Message/systemUnread',
		author : '韩文博',
		fetchUrl : ROOT_URL+'Message/systemUnread',
		remark : '统计系统站内信未读条数',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	NEWSTODAYROW:{
		domain : ROOT_URL,
		apiUrl : 'news/todayRow',
		author : '韩文博',
		fetchUrl : ROOT_URL+'news/todayRow',
		remark : '今日头条',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	NEWSDETAILCONTENT:{
		domain : ROOT_URL2,
		apiUrl : 'news/detailcontent',
		author : '韩文博',
		fetchUrl : ROOT_URL2+'news/detailcontent',
		remark : '今日头条webview',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	EVALUATETOSHOP:{
		domain : ROOT_URL,
		apiUrl : 'evaluate/toshop',
		author : '韩文博',
		fetchUrl : ROOT_URL+'evaluate/toshop',
		remark : '对店铺进行评价',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	USERMYREFEREE:{
		domain : ROOT_URL,
		apiUrl : 'User/myreferee',
		author : '孙泉',
		fetchUrl : ROOT_URL+'User/myreferee',
		remark : '我的邀请人',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	USERQUERYMYREFEREE:{
		domain : ROOT_URL,
		apiUrl : 'User/queryMyreferee',
		author : '孙泉',
		fetchUrl : ROOT_URL+'User/queryMyreferee',
		remark : '查询邀请人',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	BIGSHOTBIGSHOTLIST:{
		domain : ROOT_URL,
		apiUrl : 'BigShot/bigshotlist',
		author : '孙泉',
		fetchUrl : ROOT_URL+'BigShot/bigshotlist',
		remark : '大咖空间',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	USERADDMYREFEREE:{
		domain : ROOT_URL,
		apiUrl : 'User/addMyreferee',
		author : '孙泉',
		fetchUrl : ROOT_URL+'User/addMyreferee',
		remark : '添加我填写的推荐人的码',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : true,
	},
	SHOPGOODSCATEGORYSON:{
		domain : ROOT_URL,
		apiUrl : 'shopgoodscategory/son',
		author : '韩文博',
		fetchUrl : ROOT_URL+'shopgoodscategory/son',
		remark : '获得某一个分类下的子分类（商品分类隐藏属性）',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	ADRECOMMENDSEARCH:{
		domain : ROOT_URL,
		apiUrl : 'adrecommend/search',
		author : '韩文博',
		fetchUrl : ROOT_URL+'adrecommend/search',
		remark : '各种首页推荐位置',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	SHOPGOODSPORTALPRESALELIST:{
		domain : ROOT_URL,
		apiUrl : 'shopgoods/portalPreSaleList',
		author : '韩文博',
		fetchUrl : ROOT_URL+'shopgoods/portalPreSaleList',
		remark : '临时预售',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	SHOPGOODSPRESALECATEGORYGOODSLIST:{
		domain : ROOT_URL,
		apiUrl : 'shopgoods/preSaleCategoryGoodsList',
		author : '韩文博',
		fetchUrl : ROOT_URL+'shopgoods/preSaleCategoryGoodsList',
		remark : '预售列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	TALENTSHOWINDEX:{
		domain : ROOT_URL,
		apiUrl : 'talentshow/index',
		author : '韩文博',
		fetchUrl : ROOT_URL+'talentshow/index',
		remark : '达人秀列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	TALENTSHOWDETAIL:{
		domain : ROOT_URL,
		apiUrl : 'talentshow/detail',
		author : '韩文博',
		fetchUrl : ROOT_URL+'talentshow/detail',
		remark : '达人秀详情',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	TALENTSHOWSEARCH:{
		domain : ROOT_URL,
		apiUrl : 'talentshow/search',
		author : '韩文博',
		fetchUrl : ROOT_URL+'talentshow/search',
		remark : '达人秀查询',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	AREALISTS:{
		domain : ROOT_URL,
		apiUrl : 'area/lists',
		author : '韩文博',
		fetchUrl : ROOT_URL+'area/lists',
		remark : '省份查询',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	TALENTSHOWCATEGORYSON:{
		domain : ROOT_URL,
		apiUrl : 'talentshowcategory/son',
		author : '韩文博',
		fetchUrl : ROOT_URL+'talentshowcategory/son',
		remark : '达人秀分类',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	CUSTOMIZEDCATEGORYTREE:{
		domain : ROOT_URL,
		apiUrl : 'customizedcategory/tree',
		author : '韩文博',
		fetchUrl : ROOT_URL+'customizedcategory/tree',
		remark : '定制分类',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	CUSTOMIZEDSEARCH:{
		domain : ROOT_URL,
		apiUrl : 'customized/search',
		author : '韩文博',
		fetchUrl : ROOT_URL+'customized/search',
		remark : '定制搜索',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	CUSTOMIZEDRECOMMEND:{
		domain : ROOT_URL,
		apiUrl : 'customized/recommend',
		author : '韩文博',
		fetchUrl : ROOT_URL+'customized/recommend',
		remark : '定制推荐厂商',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	CUSTOMIZEDDETAIL:{
		domain : ROOT_URL,
		apiUrl : 'customized/detail',
		author : '韩文博',
		fetchUrl : ROOT_URL+'customized/detail',
		remark : '定制详情',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	CASTINGCATEGORYSON:{
		domain : ROOT_URL,
		apiUrl : 'castingcategory/son',
		author : '韩文博',
		fetchUrl : ROOT_URL+'castingcategory/son',
		remark : '大咖分类',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	CASTINGSEARCH:{
		domain : ROOT_URL,
		apiUrl : 'casting/search',
		author : '韩文博',
		fetchUrl : ROOT_URL+'casting/search',
		remark : '大咖搜索',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	CASTINGDETAIL:{
		domain : ROOT_URL,
		apiUrl : 'casting/detail',
		author : '韩文博',
		fetchUrl : ROOT_URL+'casting/detail',
		remark : '大咖详情',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	STORENEARESTOPERATIONCENTERSTORE:{
		domain : ROOT_URL,
		apiUrl : 'store/nearestoperationcenterstore',
		author : '韩文博',
		fetchUrl : ROOT_URL+'store/nearestoperationcenterstore',
		remark : '最近运营中心店铺',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	STOREOPERATIONCENTERSTORELIST:{
		domain : ROOT_URL,
		apiUrl : 'store/operationcenterstorelist',
		author : '韩文博',
		fetchUrl : ROOT_URL+'store/operationcenterstorelist',
		remark : '最近运营中心店铺列表',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	INFOSEARCH:{
		domain : ROOT_URL,
		apiUrl : 'info/search',
		author : '韩文博',
		fetchUrl : ROOT_URL+'info/search',
		remark : '定制中的一些新闻',
		method : 'GET',
		tableName : 'ez_store',
		needLogin : false,
		showLoading : false,
	},
	SHOPORDERCHANGESTATE : {
		domain : ROOT_URL,
		apiUrl : 'shoporder/changestate',
		author : '韩文博',
		fetchUrl : ROOT_URL+'shoporder/changestate',
		remark : '确认收货',
		method : 'POST',
		tableName : 'ez_store',
		needLogin : true,
		showLoading : false,
	},
	EVALUATETOGOODS : {
		domain : ROOT_URL,
		apiUrl : 'evaluate/togoods',
		author : '韩文博',
		fetchUrl : ROOT_URL+'evaluate/togoods',
		remark : '对单商品进行评价',
		method : 'POST',
		tableName : 'xxxx',
		needLogin : true,
		showLoading : true,
	},
	CROWDFUNDINGPROJECTORDERCHANGESTATE : {
		domain : ROOT_URL,
		apiUrl : 'Crowdfundingprojectorder/changeState',
		author : '韩文博',
		fetchUrl : ROOT_URL+'Crowdfundingprojectorder/changeState',
		remark : '众筹确认收货',
		method : 'POST',
		tableName : 'xxxx',
		needLogin : true,
		showLoading : false,
	},
	USEROPENLOGIN : {
		domain : ROOT_URL,
		apiUrl : 'user/openlogin',
		author : '韩文博',
		fetchUrl : ROOT_URL+'user/openlogin',
		remark : '第三方登陆',
		method : 'POST',
		tableName : 'xxxx',
		needLogin : false,
		showLoading : true,
	},
	USERACCOUNTBINDOPENUSER : {
		domain : ROOT_URL,
		apiUrl : 'user/accountbindopenuser',
		author : '韩文博',
		fetchUrl : ROOT_URL+'user/accountbindopenuser',
		remark : '账号绑定第三方用户',
		method : 'POST',
		tableName : 'xxxx',
		needLogin : true,
		showLoading : true,
	},
	USEROPENUSERBINDPHONE : {
		domain : ROOT_URL,
		apiUrl : 'user/openuserbindphone',
		author : '韩文博',
		fetchUrl : ROOT_URL+'user/openuserbindphone',
		remark : '当前用户绑定手机号',
		method : 'POST',
		tableName : 'xxxx',
		needLogin : true,
		showLoading : true,
	},
	SHOPGOODSCCYPGOODSLIST : {
		domain : ROOT_URL,
		apiUrl : 'shopgoods/ccypGoodsList',
		author : '韩文博',
		fetchUrl : ROOT_URL+'shopgoods/ccypGoodsList',
		remark : '村村优品的全部和点击分类的商品列表',
		method : 'GET',
		tableName : 'xxxx',
		needLogin : false,
		showLoading : false,
	},
	USERCOLLECTEDSHOPGOODS : {
		domain : ROOT_URL,
		apiUrl : 'user/collectedShopGoods',
		author : '韩文博',
		fetchUrl : ROOT_URL+'user/collectedShopGoods',
		remark : '当前用户收藏过的商品列表',
		method : 'GET',
		tableName : 'xxxx',
		needLogin : true,
		showLoading : false,
	},
	GOODSCATEGORYTREE : {
		domain : ROOT_URL,
		apiUrl : 'Goodscategory/tree',
		author : '韩文博',
		fetchUrl : ROOT_URL+'Goodscategory/tree',
		remark : '过滤过的商城分类',
		method : 'GET',
		tableName : 'xxxx',
		needLogin : false,
		showLoading : false,
	},
	ADRECOMMENDCCYPADRECOMMENDCATEGORYLIST : {
		domain : ROOT_URL,
		apiUrl : 'adrecommend/ccypadrecommendcategorylist',
		author : '韩文博',
		fetchUrl : ROOT_URL+'adrecommend/ccypadrecommendcategorylist',
		remark : '村村优品首页推荐的分类列表',
		method : 'GET',
		tableName : 'xxxx',
		needLogin : false,
		showLoading : false,
	},
	SHOPGOODSSEARCHBYADRECOMMEND : {
		domain : ROOT_URL,
		apiUrl : 'shopgoods/searchbyadrecommend',
		author : '韩文博',
		fetchUrl : ROOT_URL+'shopgoods/searchbyadrecommend',
		remark : '根据推荐条件进行搜索商品列表',
		method : 'GET',
		tableName : 'xxxx',
		needLogin : false,
		showLoading : false,
	},
	SHOPGOODSVISITEDRECORD : {
		domain : ROOT_URL,
		apiUrl : 'shopgoods/visitedrecord',
		author : '韩文博',
		fetchUrl : ROOT_URL+'shopgoods/visitedrecord',
		remark : '为您推荐的接口',
		method : 'GET',
		tableName : 'xxxx',
		needLogin : false,
		showLoading : false,
	},
	BUYADDRESSINFO : {
		domain : ROOT_URL,
		apiUrl : 'buy/addressinfo',
		author : '韩文博',
		fetchUrl : ROOT_URL+'buy/addressinfo',
		remark : '获取收货地址信息',
		method : 'GET',
		tableName : 'xxxx',
		needLogin : true,
		showLoading : false,
	},
	SHOPRIGHTSCREEN : {
		domain : ROOT_URL,
		apiUrl : 'Shop/rightscreen',
		author : '孙泉',
		fetchUrl : ROOT_URL+'Shop/rightscreen',
		remark : '分类列表商品筛选条件',
		method : 'GET',
		tableName : 'xxxx',
		needLogin : false,
		showLoading : false,
	},
}
