# webpack 说明

## 解析后的方法和属性说明

- `installedModules` 缓存模块
  - `i`: moduleId, // 模块id
  - `l`: false, // 是否已安装
  - `exports`: {} // 模块导出
- `__webpack_require__` 核心helper方法 负责同步模式引入模块
- `__webpack_require__.m` [`object`] 所有导出模块
- `__webpack_require__.c` [`array`] 所有缓存模块
- `__webpack_require__.d` [`function`] 给导出模块定义getter属性
- `__webpack_require__.o` [`function`] 判断一个对象是否含有指定属性
- `__webpack_require__.n` [`function`] 导出兼容性的导出模块
- `__webpack_require__.r` [`function`] 将导出模块设置为esModule规范类型
- `__webpack_require__.t` [`function`] 创建一个命名空间
- `__webpack_require__.p` [`string`] 发布路径publicPath
  
## 异步加载新增的属性说明

- `installedChunks` [`object`] 已加载/正在加载的缓存模块
- `webpackJsonpCallback` [`function`] 类似jsonp的全局回调方法
- `__webpack_require__.e` [`function`] 异步加载模块
  

## `__webpack_require__.t` 参数mode的说明

ABCD四位分别0或1分别表示：

- A: 直接返回value
- B: 命名空间是否已存在，存在则直接返回vaule
- C: 是否将value所有的属性并入到命名空间
- D: value是否为 moduleId，是则 require