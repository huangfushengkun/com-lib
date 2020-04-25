/*
 * 地址
 * */
let rootUrl=process.env.ROOT_API_URL;
export const loginUrl=()=>(`${rootUrl}/oauth/token`);