// 使用 Mock,梳理需求
var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
    // home页bannar图
    "bannar": {
      // bannar图
      "img": "@image(640x320,@color,bannar)",
      // bannar的id
      "classify_id|1000-2000": 100,
      // 点击后进入的详情数据
      // 商品列表
      "product|10-20": [{
        // 商品id
        "product_id|+1":1000, 
        // 图片
       "imgs": {
          // 列表页展示的小图
          "small": "@image(355x355,@color,@ctitle(3))",
          // 分类页面展示的中等图片
        "medium": "@image(640x320,@color,@ctitle(4))",
          // 商品详情页的大图
          "big": "@image(500x500,@color,@ctitle(3))"
        },
        // 商品名称
        "title": "@ctitle(5,15)",
        // 价格
        "price|1-20.1": 100,
        // 单位
        "unit|50-500": 100,
        // 商品详情
        "details": "@cparagraph",
        // 品牌-详情页
        "brand": "@ctitle(2,5)",
        // 数量
        "num": 1,
        //是否勾选中
        "pitchon": 1
      }]
    },
    // 商品列表
    "classifys|6-10": [{
    	"id|+1": 1,
      // 分类id
      "classify_id|+1": 1,
      // 分类图片
      "imgs": {
        // 首页展示的小图
        "small": "@image(710x180,@color,@ctitle(3))",
        // 点击图片进入的列表页图片
        "big": "@image(640x530,@color,@ctitle(3))"
      },
      // 分类的名称
      "classify_title": "@ctitle(3,4)",
      // 子分类
      "cids|3": [{
        "id|+1": 1,
        "name": "@ctitle(3,7)"
      }],
      // 每个分类下的商品数据
      "products|4-8": [{
        // 商品id
        "product_id|+1": 1, 
        // 商品对应的子分类
        "cids|1-3":100,
        // 图片
        "imgs": {
          // 列表页展示的小图
          "small": "@image(355x355,@color,@ctitle(3))",
          // 分类页面展示的中等图片
        "medium": "@image(640x320,@color,@ctitle(4))",
          // 商品详情页的大图
          "big": "@image(500x500,@color,@ctitle(3))"
        },
        // 商品名称
        "title": "@ctitle(5,10)",
        // 商品详情
        "details": "@cparagraph",
        // 价格
        "price|1-20.1": 100,
        // 单位
        "unit|50-500": 100,
        // 品牌-详情页
        "brand": "@ctitle(2,5)",
        // 保质期-详情页
        "expiration|0-3.1": 100,
        // 数量
        "num": 0,
        //商品是否勾选
        "pitchon": 1,
        //商品是否收藏
        "collect": false
      }]
    }],
    // 购物车列表
    /*
      数据结构：
      [
        {
          分类id,
          商品id,
          购物车列表中的id,
          商品的名称,
          商品的价格,
          商品的图片,
          商品的购买数量,
          是否勾选
        }
      ]
    */
    "cart": [],
    // 收藏列表
    /*
      数据结构:
      [
        {
          分类id,
          商品id,
          收藏列表中的id,
          商品的名称,
          商品的价格,
          商品的图片,
          商品的单位
        }
      ]
    */
    "collect": [],
    // 地址管理列表
    /*
      数据结构:
      [
        {
          地址列表的id,
          联系人，
          性别，
          手机号，
          所在城市，
          所在地区-》百度地图
          详细地址
        }
      ]
    */
    "site": [],
    //商品列表
    /*
     数据结构：
     [
     	{
     	分类id,
     	商品id，
     	商品对应的子分类,
     	图片{
     		小，
     		中，
     		大
     	},
     	商品名称，
     	商品详情，
     	价格，
     	单位，
     	品牌，
     	保质期，
     	数量
     	}
     ]
     * */
    "product":[]
})
// 写入到db.json
fs.writeFile('db.json', JSON.stringify(data, null, 4),  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
});