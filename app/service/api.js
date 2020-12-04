const Service = require('egg').Service;

class apiService extends Service {
  // 本地静态数据
  async list() {
    const { ctx } = this;
    const dataList = {
      list: [
        { id: 1, name: '大黑', createTime: '2020-11-24T06:50:55.412Z' },
        { id: 2, name: '二黑', createTime: '2020-11-24T07:15:45.875Z' },
        { id: 3, name: '三黑', createTime: '2020-11-24T06:21:15.879Z' },
        { id: 4, name: '四黑', createTime: '2020-11-24T08:08:26.361Z' },
        { id: 5, name: '五黑', createTime: '2020-11-24T07:37:37.624Z' },
      ],
    };
    // 使用Helper实例对时间进行转换
    dataList.list.forEach((item, index) => {
      item.createTime = ctx.helper.relativeTime(item.createTime);
    });
    return dataList;
  }

  // Api接口转发
  async apiList() {
    const { ctx } = this;
    const { baseApi } = this.config;
    const result = await ctx.curl(`${baseApi}/overview/important_data_overview/mine`, {
      method: 'GET',
      data: {},
      dataType: 'json',
      headers: {
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtc2ciOiIiLCJpc1JlZnJlc2giOmZhbHNlLCJleHAiOjI1NTI5NTg5OTMsInVzZXJuYW1lIjoic3FoLXQifQ.4M1xR_AkTQjXFPovZet5ZMESytfOCqmkyrh9IsKipog',
      },
    });
    return result.data;
  }
}

module.exports = apiService;
