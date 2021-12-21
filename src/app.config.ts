export default {
  pages: ["pages/index/index", "pages/my/index", "pages/shoppingcart/index"],
  tabBar: {
    selectedColor: '#1296db',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'pages/static/images/home.png',
        selectedIconPath: 'pages/static/images/homeS.png'
      },
      {
        pagePath: 'pages/shoppingcart/index',
        text: '购物车',
        iconPath: 'pages/static/images/shopping.png',
        selectedIconPath: 'pages/static/images/shoppingS.png'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: 'pages/static/images/user.png',
        selectedIconPath: 'pages/static/images/userS.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
};
