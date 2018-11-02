import axios from 'axios';


const http = axios.create({
    'develop': {
        // baseURL: 'https://piaofang.maoyan.com',
        // withCredentials: 'true',
        headers: {
            'Content-Type': 'application/json',
            // Cookie:'SESSION=NGNkOTU4ZGUtODBlMS00YjY3LTk2MDMtOWQwZDU4MTI3ZDY1'
            // 'X-Requested-With': 'XMLHttpRequest',
        }
    }
}['develop'])

http.interceptors.request.use(config => {
    return config;
}, err => Promise.reject(err));

http.interceptors.response.use(res =>{
    // console.info(res.data,'resresres')
    let body = res.data || res;
    if(!body){
        return {}
    }else if(body.code === 401){
        let {
            casLoginUrl,
            appSecurityUrl,
            appRedirectParameter,
            casServiceParameter
        } = body.data;
        // let encodeUrl = `${appSecurityUrl}?${appRedirectParameter}=${encodeURIComponent(window.location.origin)}`;
        // let loginUrl = `${casLoginUrl}?${casServiceParameter}=${encodeURIComponent(encodeUrl)}`;
    }
    return body;
    // console.info(loginUrl,'loginUrlloginUrl')
})
 
function getData (config) {
   return  http.request({
        // url:'http://test1.crmx.aihuishou.com//User/baseinfo',
        url:'http://192.168.3.115:8512/erp-gateway/platform-quotation-gateway/CityGroup/GetRegionsByParent',
        method: 'get',
        params:config.params,
        data:config.data
    })
}

export default {
    getData
}

