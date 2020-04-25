/*
 * 多对象升读赋值
 * */
function mutlObjectAssign(params){
    let rstObject={};
    for(let obj in params){
        if(typeof params[obj]=="object"&&!Array.isArray(params[obj])){
            let x={};
            x[obj]=mutlObjectAssign(params[obj]);
        }else{
            let x={};
            x[obj]=params[obj];
        }
        Object.assign(rstObject,x);
    }
    return rstObject;
}

export default mutlObjectAssign