# 文档

# git 地址
git@github.com:huangfushengkun/com-lib.git

## 运行命令
npm run mock 模拟环境
npm run dev 开发环境
npm run build 产线环境

## Git
分支说明
master          (主干)
dev             (开发)
featrue-v0.0.0  (功能)
release-v0.0.0  (测试)

开发->功能->开发->测试->开发->主干

## 接口地址配置
接口地址配置在
config 目录
 |-dev.env.js (开发)
 |-prod.env.js (产线)
 |-mock.env.js (模拟)

ROOT_API_URL:'"http://XXXX"' 接口字段；（根据项目需求自行添加）

## 样式
assets
|-scss
| |-variables.scss （变量以全局注册）

## 网络服务
 网络请求
 httpClient 传参方式 _data_ 与 _auth_ 为指定字段名称 禁止其他使用
 当接口需要变更认证等级时
 Post Put Pacth使用{_data_:{as:2},_auth_:"level_2"} 格式传参
 Get Delete Head Options 使用{params:{_data_:{as:2},_auth_:"level_2"}} 格式传参

fTestService:()=>{
    return httpClient.post(testUrl(),{_data_:{id:2},_auth_:"level_2"});
},
fTestService2:()=>{
    return httpClient.get(testUrl(),{params:{_data_:{id:2}}});
},
fTestService3:()=>{
    return httpClient.delete(testUrl(),{params:{_data_:{id:2}}});
},
