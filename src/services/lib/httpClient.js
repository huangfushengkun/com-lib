/*
 * 网络请求
 * httpClient 传参方式 _data_ 与 _auth_ 为指定字段名称 禁止其他使用
 * 当接口需要变更认证等级时
 * Post Put Pacth使用{_data_:{as:2},_auth_:"level_2"} 格式传参
 * Get Delete Head Options 使用{params:{_data_:{as:2},_auth_:"level_2"}} 格式传参
 * */
import axios from "axios";
import qs from "qs"

/* 接口等级映射 */
let authMap=[
    "level_1", // 需要传token
    "level_2"  // 不需要token
]

let defAuth="level_1"; //接口默认等级

//请求实例
let httpClient=axios.create({
    timeout:1000,
    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
    paramsSerializer:function(params){
        return qs.stringify(params);
    },
    responseType:'json',
    responseEncoding:'utf-8'
});

/*
 * 请求过滤器
 * */
httpClient.interceptors.request.use((config)=>{
    let oAuth=defAuth;
    /* 过滤传参 */
    if(config.method=="post"||config.method=="put"||config.method=="patch"){
        config.data=qs.parse(config.data);
        if(typeof config.data._auth_ !=="undefined"&&authMap.includes(config.data._auth_)){
            oAuth=config.data._auth_;
        }
        if(typeof config.data._data_ !=="undefined"){
            config.data=JSON.stringify(config.data._data_);
        }
    }else if(config.method=="get"||config.method=="delete"||config.method=="head"||config.method=="options"){
        if(typeof config.params._auth_ !=="undefined"&&authMap.includes(config.params._auth_)){
            oAuth=config.params._auth_;
        }
        if(typeof config.params._data_ !=="undefined"){
            config.params=config.params._data_;
        }
    }
    //oAuth 处理
    console.log(config);
    if(oAuth=='level_1'){
        if(sessionStorage.getItem('token')){
           config.headers.Authentication=sessionStorage.getItem('token');
        }else{
            console.log('Token失效！');
            return false;
        }
    }
    return config;
},(error)=>{
    return Promise.reject(error);
});

/*
 * 响应过滤器
 * */
httpClient.interceptors.response.use((response)=>{
    console.log(response);
    if(response.status=="200"){
        if(response.data.access_token){
            sessionStorage.setItem('token',response.data.access_token);
        }
        return response;
    }else{
        return Promise.reject(response.status);
    }
},(error)=>{
    return Promise.reject(error);
})


export default httpClient;