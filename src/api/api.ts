import http from '../util/http' 
// import server from '../util/axios';

// 获取alarm列表
export const logigApi = (params: any) => {
    return http.post('/account/login', params)
}
