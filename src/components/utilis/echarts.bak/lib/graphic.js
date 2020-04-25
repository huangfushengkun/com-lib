/*
 * 原生图形组件 
 * */
let DefConf={
    I:{
        id:"circle",
        type:"circle",
        
    }
};

export default {
    setConf:(params)=>{
        return {
            graphic:{
                id:"circle",
                elements:[{
                    type:"circle",
                    shape:{
                        cx:0,
                        cy:0,
                        r:80
                    },
                    style:{
                        fill:"#fff"
                    }
                }]
            }
        }
    }
}