/*
 * mock
 * */
import mockAdapter from "axios-mock-adapter";
import httpClient from "@/services/lib/httpClient";

import {
    loginUrl
} from "@/services/lib/url"


let mock=new mockAdapter(httpClient);

//正常返回
mock.onPost(loginUrl()).reply(config=>{
    let {id}=JSON.parse(config.data);
    return new Promise((resolve,reject)=>{
        return resolve(
            [200, {
                "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDM3MTI3MzgsInVzZXJfbmFtZSI6IjE5MzgyNjUxNDg4OTY1NzU0ODgiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiNWNlYjgyNjYtNzEyMS00ZjY2LWE1MTItMmU4ODc2MTE3OTJmIiwiY2xpZW50X2lkIjoid2ViLW1hbnVmYWN0dXJlciIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdfQ.utTLMES1A0j4_IEDulRfZSuEGIC-5W1YgUSFbsKubQP-QQDddB1r_U4ZuuSRgCaE-WwOQEGiRaccb15dHTR2r6ye5gN1eTmWL6MsWCNn8FmVwYB77YZvN7mnzWc0jZExFg8d7xhhb4xRgo9qqTrsCefZF1GuhkY_MFvCBg34-XfB2AbdoDJoohqFI3_NRKbmwlzJa2jzVJZ8hvaHhpYrB9EUfzVpu_WfNmDe9TczkoFCFiZSs1FLrzjJAX3f8d02zsoGuPGjsWMnGxsZB4hneCVfsTGltMcHwZ1uRPYFRrSv6gjoGa9stysXaA8exxHCl5WueuSwM6YL8ugxI4cQEQ",
                "token_type": "bearer",
                "expires_in": 31103999,
                "scope": "read write",
                "user": {
                    "role": "1000000000000000003",
                    "flag": null,
                    "rights": [
                        "maintenanceStatus",
                        "pedigree",
                        "operManagement",
                        "dataManagement",
                        "cardManagement",
                        "technicalInfo",
                        "training",
                        "systemSetup",
                        "original",
                        "transcrip",
                        "maintain",
                        "pedigree:fault",
                        "pedigree:dataList",
                        "monitoring",
                        "oper:technology",
                        "oper:faultMonitoring",
                        "oper:lifeTime",
                        "original:acceptance",
                        "original:natureData",
                        "original:natureBigth",
                        "original:verDict",
                        "original:special",
                        "original:modify",
                        "original:adjunct",
                        "original:reason",
                        "original:record",
                        "original:graveChange",
                        "original:seal",
                        "original:tearInstall",
                        "original:cycleIndex",
                        "original:memorandum",
                        "original:carryOut",
                        "transcrip:workTime",
                        "transcrip:argument",
                        "transcrip:maintain",
                        "transcrip:period",
                        "maintain:space",
                        "maintain:accept",
                        "maintain:grease",
                        "maintain:spectrum",
                        "capacity",
                        "zhpManagement",
                        "maintain:partsList"
                    ],
                    "producerFlag": "RF",
                    "id": "1938265148896575488",
                    "username": "Hs"
                },
                "jti": "5ceb8266-7121-4f66-a512-2e887611792f"
            }]
        )
    })
})

//异常返回
mock.onGet(loginUrl()).reply(200, {
    users: [
      { id: 1, name: 'John Smith' }
    ]
})

//模拟接参数
mock.onDelete(loginUrl()).reply(config=>{
    let {id} = config.params;
    return new Promise((resolve,reject)=>{
        if(true){
            return resolve([200,{message:"1"}])
        }else{
            return reject([400,{message:"2"}])
        }
    })
})