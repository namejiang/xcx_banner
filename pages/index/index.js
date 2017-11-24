// pages/shouchang/shouchang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clubs: [
      { image: "/image/21.png", name: "name1-1",id:1 },
      { image: "/image/25.png", name: "name1-2", id: 2},
      { image: "/image/29.png", name: "name1-3", id: 3 },
      // { image: "/image/tu12.png", name: "name1-1" },
      // { image: "/image/tu12.png", name: "name1-5" },
    ],
    key: 2
  },
  //触摸开始事件
  touchstart: function (e) {
    console.log(e.touches[0].pageX);
    this.data.touchDot = e.touches[0].pageX;
    var that = this;
    this.data.interval = setInterval(function () {
      that.data.time += 1;
    }, 100);
  },
  //触摸移动事件
  touchmove: function (e) {
    let touchMove = e.touches[0].pageX;
    let touchDot = this.data.touchDot;
    let time = this.data.time;
    console.log("touchMove: " + touchMove + ", touchDot: " + touchDot + ", diff: " + (touchMove - touchDot));
    //向左滑动
    if (touchMove - touchDot <= -40 && time < 10 && !this.data.done) {
      console.log("向左滑动");
      if (this.data.key < 3) {
        this.data.done = true;
        this.scrollLeft(e);
      }
    }
    //向右滑动
    if (touchMove - touchDot >= 40 && time < 10 && !this.data.done) {
      console.log("向右滑动");
      if(this.data.key>1){
        this.data.done = true;
        this.scrollRight(e);
      }
    }
  },
  //触摸结束事件
  touchend: function (e) {
    clearInterval(this.data.interval);
    this.data.time = 0;
    this.data.done = false;
  },
  //向左滑动事件
  scrollLeft(e) {
    var animation1 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation2 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation3 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation4 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation5 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })

    this.animation1 = animation1;
    this.animation2 = animation2;
    this.animation3 = animation3;
    this.animation4 = animation4;
    this.animation5 = animation5;
    this.animation1.translateX(-60).opacity(0).step();
    this.animation2.translateX(-400).opacity(0.5).scale(0.8, 0.8).step();
    this.animation3.translateX(-350).opacity(0.5).scale(1, 1).step();
    this.animation4.translateX(-250).opacity(1).scale(1.4, 1.4).step();
    this.animation5.translateX(-30).opacity(0.5).scale(1, 1).step();


    this.setData({
      animation1: animation1.export(),
      animation2: animation2.export(),
      animation3: animation3.export(),
      animation4: animation4.export(),
      animation5: animation5.export()
    })

    var that = this;
    setTimeout(function () {console.log(e)
      that.animation1.translateX(-50).opacity(0.2).scale(0.8, 0.8).step({ duration: 0, timingFunction: 'linear' });
      that.animation2.translateX(-180).opacity(0.5).scale(1, 1).step({ duration: 0, timingFunction: 'linear' });
      that.animation3.translateX(-120).opacity(1).scale(1.4, 1.4).step({ duration: 0, timingFunction: 'linear' });
      that.animation4.translateX(-65).opacity(0.5).scale(1, 1).step({ duration: 0, timingFunction: 'linear' });
      that.animation5.translateX(50).opacity(0.2).scale(0.8, 0.8).step({ duration: 0, timingFunction: 'linear' });
      that.setData({
        animation1: animation1.export(),
        animation2: animation2.export(),
        animation3: animation3.export(),
        animation4: animation4.export(),
        animation5: animation5.export()
      })
    }.bind(this), 195)

    let array = this.data.clubs;
    let shift = array.shift();
    array.push(shift);
    console.log(array, shift)
    setTimeout(function () {
      this.setData({
        clubs: array,
        key: shift.id == 1 ? shift.id + 2:shift.id -1
      })
    }.bind(this), 195)
  },

  //向右滑动事件
  scrollRight(e) {
    var animation1 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation2 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation3 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation4 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation5 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })

    this.animation1 = animation1;
    this.animation2 = animation2;
    this.animation3 = animation3;
    this.animation4 = animation4;
    this.animation5 = animation5;

    this.animation1.translateX(30).opacity(0.5).scale(1, 1).step();
    this.animation2.translateX(70).opacity(1).scale(1.4, 1.4).step();
    this.animation3.translateX(110).opacity(0.5).scale(1, 1).step();
    this.animation4.translateX(120).opacity(0.2).scale(0.8, 0.8).step();
    this.animation5.translateX(130).opacity(0).step();


    this.setData({
      animation1: animation1.export(),
      animation2: animation2.export(),
      animation3: animation3.export(),
      animation4: animation4.export(),
      animation5: animation5.export()
    })

    var that = this;
    setTimeout(function () {
      that.animation1.translateX(-50).opacity(0.2).scale(0.8, 0.8).step({ duration: 0, timingFunction: 'linear' });
      that.animation2.translateX(-180).opacity(0.5).scale(1, 1).step({ duration: 0, timingFunction: 'linear' });
      that.animation3.translateX(-120).opacity(1).scale(1.4, 1.4).step({ duration: 0, timingFunction: 'linear' });
      that.animation4.translateX(-60).opacity(0.5).scale(1, 1).step({ duration: 0, timingFunction: 'linear' });
      that.animation5.translateX(50).opacity(0.2).scale(0.8, 0.8).step({ duration: 0, timingFunction: 'linear' });
      that.setData({
        animation1: animation1.export(),
        animation2: animation2.export(),
        animation3: animation3.export(),
        animation4: animation4.export(),
        animation5: animation5.export()
      })
    }.bind(this), 195)

    let array = this.data.clubs;
    let pop = array.pop();
    array.unshift(pop);

    setTimeout(function () {
      this.setData({
        clubs: array,
        key: pop.id == 3 ? pop.id - 2 : pop.id + 1
      })
    }.bind(this), 195)
  }

})