import axios from "axios";
const baseUrl='http://localhost:8080/';

const HttpInterceptor={
     get:async (url,headers,queryParam={})=>{
         try {
             let constructedUrl = baseUrl+url;
             for (let keys in queryParam) {
                 if (constructedUrl.match(/^[a-zA-Z0-9]*[?]+$/)) {
                     constructedUrl += `&${keys}=${queryParam[keys]}`
                 } else
                     constructedUrl += `?${keys}=${queryParam[keys]}`
             }
             return await axios.get(constructedUrl, {headers: headers});
         }
         catch (e) {
             throw e;
         }
    },
     post:async (url,data,headers,queryParam=null)=>{
         try {
             let constructedUrl = baseUrl+url;
             for (let keys in queryParam) {
                 if (constructedUrl.match(/^[a-zA-Z0-9]*[?]+$/)) {
                     constructedUrl += `&${keys}=${queryParam[keys]}`
                 } else
                     constructedUrl += `?${keys}=${queryParam[keys]}`
             }
             return await axios.post(constructedUrl,data, {headers: headers});
         }
         catch (e) {
             throw e;
         }
    },
     put:async (url,headers,data,queryParam=null)=>{
         try {
             let constructedUrl = baseUrl+url;
             for (let keys in queryParam) {
                 if (constructedUrl.match(/^[a-zA-Z0-9]*[?]+$/)) {
                     constructedUrl += `&${keys}=${queryParam[keys]}`
                 } else
                     constructedUrl += `?${keys}=${queryParam[keys]}`
             }
             return await axios.put(constructedUrl,data, {headers: headers});
         }
         catch (e) {
             throw e;
         }
    }
}
export default HttpInterceptor;
