主要涉及几个重要的点
1、接口请求统一使用common/js文件夹下的http模块

2、文件按后端接口模块创建
es: 接口url为 '.../api/info/get-user'，所以api目录下就需要创建一个info.js的文件for后端的info模块

3、当涉及到公共参数之类的，统一写入 api/config.js 文件中，通过模块引入的方式引用公共参数

4、写法示例：
export default {
  getUser() {
    const url = '/api/info/get-user'
    return http.get(url)
  }
}

