/*
 * 模块服务
 * httpClient 传参方式 _data_ 与 _auth_ 为指定字段名称 禁止其他使用
 * 当接口需要变更认证等级时，使用{_data_:{as:2},_auth_:"level_2"} 格式传参
 * */
import httpClient from "./lib/httpClient"
//接口地址
 import {
    loginUrl
} from "./lib/url"

export default {
    fTestService:()=>{
       return httpClient.post(testUrl(),{_data_:{id:2},_auth_:"level_2"});
    },
    fTestService2:()=>{
       return httpClient.get(testUrl(),{params:{_data_:{id:2}}});
    },
    fTestService3:()=>{
        return httpClient.delete(testUrl(),{params:{_data_:{id:2}}});
    },
}