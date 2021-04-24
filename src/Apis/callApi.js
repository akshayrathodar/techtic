
//i need to use json direct cause Server not allowed me to access data  [ CORS ]
//import axios from 'axios';

//import {GET_DATA_URL} from '../Constants/consts';

import DATA from '../Datas/data.json';

export function getWebSiteData(){
    const prom =  new Promise((res,rej)=>{
        try{
            // axios.get(GET_DATA_URL,{headers:{'Content-Type': 'application/json'}})
            // .then((response)=>{
            //     res(response);
            // }).catch((response)=>{
            //     rej(response);
            // });
            res(DATA);
        }
        catch(err){
            rej(err);
        }
    })
    return prom;
}

