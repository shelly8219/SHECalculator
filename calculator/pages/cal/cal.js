Page({

  /**
   * 页面的初始数据
   */
  data: {
    id1:"back",
    id2: "clear",
    id3: "negative",
    id4: "+",
    id5: "9",
    id6: "8",
    id7: "7",
    id8: "6",
    id9:"5",
    id10:"4",
    id11:"3",
    id12:"2",
    id13:"1",
    id14: "0",
    id15: ".",
    id16: "00",
    id17: "-",
    id18: "*",
    id19: "/",
    id20: "=",
    screenData:"0",
    lastIsOp:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  clickBtn: function (event){
    console.log(event.target.id);
    var id=event.target.id;
    if(id==this.data.id1)
    {
      //退格
      var data=this.data.screenData;
      if(data==0)
      {
        return;
      }
      data=data.substring(0,data.length-1);
      if(data==""||data==".")
      {
        data=0;
      }
      this.setData({screenData:data});
    }else if(id==this.data.id2)
    {
      //清屏
      this.setData({screenData:"0"});
    } else if (id == this.data.id3)
    {
      //正负号
      var data=this.data.screenData;
      if(data==0)
      {
        return;
      }
      var firstWord=data.substring(0,1);
      if(firstWord=="-")
      {
        data=data.substring(1,data.length);
      }else
      {
        data="-"+data;
      }
      this.setData({screenData:data});
    } else if (id == this.data.id20)
    {
      //等于
      var data=this.data.screenData;
      if(data==0)
      {
        return;
      }
      var result=eval(data);
      this.setData({ screenData: result});
    }
    else
    {
      //操作符只取一个
      if (id == this.data.id4 || id == this.data.id17 || id == this.data.id18 || id == this.data.id19) {
         if(this.data.lastIsOp==true||this.data.screenData==0)
         {
           return;
         }
      }

      //如果第一个是0
      var sd = this.data.screenData;
      var data;
      if (sd == 0) {
        data = id;
      } else {
        data = sd + id;
      }
    //字符串拼接
      this.setData({ screenData: data });
      //操作符只取一个
      if (id == this.data.id4 || id == this.data.id17 || id == this.data.id18 || id == this.data.id19) {
        this.setData({ lastIsOp: true });
      } else {
        this.setData({ lastIsOp: false });
      }
    }
  }
})