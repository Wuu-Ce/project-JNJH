// pages/user/home/home.js
const app = getApp()
const checkCookieValid = require('../../utils/util.js').checkCookieValid
const request = require("../../utils/util.js").request
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showLoginRequired: false,
    modalName: null
  },

  lifetimes: {
    attached: function() {
      this.refreshIfLogin();  // 刷新登录状态并setData
      if(this.data.ifLogin){
        this.getMyInfo();
      }else{
        this.setData({
          showLoginRequired: true
        })
        this.setData({
          avatar: "",
          nickname: "尚未登录",
          description: "",
          school: "",
          major: "",
          skill: "",
          grade: "",
        })
      }
    }
  },
  pageLifetimes:{
    show(){
      this.refreshIfLogin();  // 刷新登录状态并setData
      if(this.data.ifLogin){ 
        this.getMyInfo();
      }else{
        this.setData({
          avatar: "",
          nickname: "尚未登录",
          description: "",
          school: "",
          major: "",
          skill: "",
          grade: "",
        })
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 请求个人信息
    getMyInfo(){
      request('/info/detail','POST',{}).then(
        (res)=>{
          this.setData({
            avatar: res.data.data.avatar,
            nickname: res.data.data.nickname,
            description: res.data.data.description,
            school: res.data.data.school,
            major: res.data.data.major,
            skill: res.data.data.skill,
            grade: res.data.data.grade
          })
        },
        ()=>{}
      )
    },
    // 刷新登录状态并setData，用于其他功能进行判断
    refreshIfLogin(){
      var ifLogin = wx.getStorageSync('ifLogin');
      this.setData({
        ifLogin: ifLogin
      })
    },
    // 点击头像
    // 若登录，弹出“点击使用微信头像昵称”的窗口，若未登录，弹窗“需要登录”窗口
    clickAvatar(){
      if(this.data.ifLogin){
        this.showModal("useWechatInfo");
      }else{
        this.setData({
          showLoginRequired: true
        })
      }
    },
    // 使用微信头像昵称
    useWechatInfo(){
      this.hideModal()
      var that = this;
      wx.getUserProfile({
        lang: "zh_CN",
        desc: "您的信息将用于登录",
        success(res){
          request('/info/update','POST',{nickname:res.userInfo.nickName,avatar:res.userInfo.avatarUrl}).then(
            (res)=>{
              that.setData({
                nickname:res.data.data.nickname,
                avatar: res.data.data.avatar
              })
            },
            ()=>{
              wx.showToast({
                title: '保存失败',
                icon: 'error'
              })
            }
          )
        }
      })
    },
    jumpToMyTeam() {
      if(this.data.ifLogin){
        wx.navigateTo({
          url: '/pages/myTeam/myTeam',
        })
      }else{
        this.setData({
          showLoginRequired: true
        })
      }
    },
    jumpToModifyMyInfo(){
      if(this.data.ifLogin){
        wx.navigateTo({
          url: '/pages/modifyMyInfo/modifyMyInfo',
        })
      }else{
        this.setData({
          showLoginRequired: true
        })
      }
    },
    // 跳转到消息通知界面
    jumpToMessage(){
      if(this.data.ifLogin){
        wx.navigateTo({
          url: '/pages/message/message',
        })
      }else{
        this.setData({
          showLoginRequired: true
        })
      }
    },
    // 联系客服
    contactService(){
      this.showModal("contactService");
    },
    // 关于我们
    aboutUS(){
      this.showModal("aboutUS")
    },
    // 模态框
    showModal(modalName){
      this.setData({
        modalName: modalName
      })
    },
    hideModal() {
      this.setData({
        modalName: null
      })
    },
    // 跳转到getcode界面
    jumpToCode(){
      wx.navigateTo({
        url: '/pages/getCode/code',
      })
    },
    // 跳转到设置界面
    jumpToSettings(){
      if(this.data.ifLogin){
        wx.navigateTo({
          url: '/pages/settings/settings',
        })
      }else{
        this.setData({
          showLoginRequired: true
        })
      }
    },
    // 跳转到手机号登录界面
    jumpToSignInTel(){
      wx.navigateTo({
        url: '/pages/signInTel/signInTel',
      })
    }
  }
})
