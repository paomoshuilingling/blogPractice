//配置require基础数据
(function() {
  var _config = {
    baseUrl: StaticDomain, //依赖相对路径
    paths: { //如果某个前缀的依赖不是按照baseUrl拼接这么简单，就需要在这里指出
      underscore: 'underscore',
      util: 'util',
    }
  };
  require.config(_config);

})(window)