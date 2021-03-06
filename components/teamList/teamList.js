const request = require("../../utils/util.js").request
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listData: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      var listData = this.properties.listData;
      if(listData.from=="index"){  // 表示在“首页”中请求队伍列表
        // 以某种条件，向后端请求列表
        var topTabCur = this.properties.listData.topTabCur;
        var res = request('team/list','POST',{type:2})
        res.then(
          (res)=>{
            // console.log(res);
            var teamList = res.data.data;
          },
          (res)=>{
            // console.log(res);
          }
        )
        this.setData({
          teamList: [
            {
              avatar: 'https://team.test.yuxue0824.com/static/avatar/team/8.jpg',
              teamName: 'iParking团队',
              category: 0,
              categoryExplain: ['大学生创新创业大赛'],
              introduction: '本产品基于高精度室内外无缝定位、智能云锁、地图街景，位置指纹匹配技术等多种信息技术，基于手机APP为用户提供停车诱导车位服务。',
              members: [
                {
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/20.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/1.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/3.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/9.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/18.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/1.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/4.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/3.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/6.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/9.jpg'
                }
              ]
            },{
              avatar: 'https://team.test.yuxue0824.com/static/avatar/user/1.jpg',
              teamName: '易知愿团队',
              category: 0,
              categoryExplain: ['网络技术挑战赛'],
              introduction: '我们想要设计一个问答平台，回答高考毕业生对各高校的疑问，帮助高考毕业生找到心仪的学校。',
              members: [
                {
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/18.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/11.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/10.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/14.jpg'
                },
              ]
            },{
              avatar: 'https://team.test.yuxue0824.com/static/avatar/user/1.jpg',
              teamName: '予学团队',
              category: 0,
              categoryExplain: ['计算机&信息技术','微信小程序应用开发大赛'],
              introduction: '我们通过设计一个平台，实现完整的组队流程，帮助有组队需求的人在平台上找到合适的队友。',
              members: [
                {
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/18.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/11.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/10.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/14.jpg'
                },
              ]
            }
            // ,{
            //   teamName: '我创建的队伍1',
            //   category: '0',
            //   categoryExplain: ['miss you'],
            //   introduction: '不睡觉的星星，代替我吻吻你的眼睛。',
            //   members: [
            //     {
            //       avatar: 'https://qiniu.freespace.yuxue0824.com/book%20and%20letters.jpg'
            //     },{
            //       avatar: 'https://qiniu.freespace.yuxue0824.com/cyan.jpg'
            //     },{
            //       avatar: 'https://qiniu.freespace.yuxue0824.com/go%20with%20the%20flow.jpg'
            //     },
            //   ]
            // }
            
          ]
        })
      }
      else if(listData.from=="myTeam"){  // 表示在“我的队伍”中请求队伍列表
        // 以某种条件，向后端请求列表
        console.log(listData);
        // request()
        this.setData({
          teamList: [
            {
              avatar: 'https://team.test.yuxue0824.com/static/avatar/team/8.jpg',
              teamName: '予学团队',
              category: 0,
              categoryExplain: ['做一款大学生组队平台'],
              introduction: '当我们想做一件事情的时候，不容易找到能够一起做这件事情的人。',
              members: [
                {
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/20.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/1.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/3.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/9.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/18.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/1.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/4.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/3.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/6.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/9.jpg'
                }
              ]
            }, {
              avatar: 'https://team.test.yuxue0824.com/static/avatar/team/8.jpg',
              teamName: 'iParking团队',
              category: 0,
              categoryExplain: ['大学生创新创业大赛'],
              introduction: '本产品基于高精度室内外无缝定位、智能云锁、地图街景，位置指纹匹配技术等多种信息技术，基于手机APP为用户提供停车诱导车位服务。',
              members: [
                {
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/20.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/1.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/3.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/9.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/18.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/1.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/4.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/3.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/6.jpg'
                },{
                  avatar: 'https://team.test.yuxue0824.com/static/avatar/user/9.jpg'
                }
              ]
            },
          ]
        })
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
