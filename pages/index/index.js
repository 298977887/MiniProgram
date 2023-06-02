const app = getApp()
Page({
  data: {
    shareObj: null,
    url: 'https://aoun.ltd',//换成你自己的网址
    src: '',
  },
  onLoad: function (e) {
    if (e.url) {
      this.setData({
        src: this.data.url + e.url,
      });
    }else{
      this.setData({
        src: this.data.url,
      });
    }    
  },
  msg: function (e) {
    console.log(e);
    this.data.shareObj = e.detail.data[e.detail.data.length - 1];
  },
  onShareAppMessage(options) {
    let shareObj = this.data.shareObj;
    if (shareObj) {
      return {
        title: shareObj.shareTitle,
        desc: shareObj.shareDesc,
        path: '/pages/index/index?url=' + shareObj.url,
        imageUrl: shareObj.shareImage,
        success: function (res) {
          console.log(res)
        }
      }
    }
  },
})