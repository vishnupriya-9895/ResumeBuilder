import axiosConfig from "./axiosconfig";
import { Baseurl } from "./baseurl";
 export const addResume=async(reqbody)=>{
  return  await axiosConfig('post',`${Baseurl}/resume`,reqbody)
}
export const getResume=async()=>{
  return await axiosConfig('get',Baseurl+'/resume',"")
}
export const deleteResume=async(id)=>{
 return await axiosConfig('delete', `${Baseurl}/resume/${id}`,{});
}
export const editResume=async(id,reqbody)=>{
 return await axiosConfig('put', `${Baseurl}/resume/${id}`,reqbody);
}
