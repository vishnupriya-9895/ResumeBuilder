import axios from "axios";
 const axiosConfig=async(method,URL,reqbody)=>{
    let objconfig={
     method:method,
         url:URL,
        data:reqbody
    }
  return await axios(objconfig).then((res)=>{
return res
  }).catch((err)=>{
  return err
  })
 }
 export default axiosConfig