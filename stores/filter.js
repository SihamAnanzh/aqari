import { createContext, useState } from "react";

export const FilterContext=createContext({
    type_id:'',
    serivce_id:'',
    regions_id:[],
    serviceResults:[],
    setAddsSResutls:()=>{},
    addsResults:[],
    setSerivceResutls:()=>{},
    setTypeId:()=>{},
    setSerivceId:()=>{},
    setRegionsId:()=>{}


})


export const FliterProvider=(props)=>{
const [typeId,setTypeId]=useState('')
const [serivceId,setSerivceId]=useState('')
const [regionsId,setRegionsId]=useState([])
const [sResults,setServics]=useState([])
const [aResults,setAdds]=useState([])

const setType=(t)=>setTypeId(t)
const setSerivce=(t)=>setSerivceId(t)
const setSResutls=(t)=>setServics(t)
const setAResults=(t)=>setAdds(t)
const setRegions=(t)=>setRegionsId(t)

const FilterContextValue={
    type_id:typeId,
    serivce_id:serivceId,
    regions_id:regionsId,
    setTypeId:setType,
    setSerivceId:setSerivce,
    setRegionsId:setRegions,
    serviceResults:sResults,
    setSerivceResutls:setSResutls,
    setAddsSResutls:setAResults,
    addsResults:aResults,
 
}


return <FilterContext.Provider value={FilterContextValue}>
     {props.children}
    </FilterContext.Provider>
}