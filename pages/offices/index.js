import React,{useState, useEffect} from 'react'
import Offices from '../../components/offices/Offices'
import axios from 'axios'


const Index = () => {
  const [officeList ,setOfficeList]=useState([])
  useEffect(()=>{
     axios.get('https://stagingapi.aqarifinder.com/api/office/list').then(res=>{
       console.log(res.data.results);
       setOfficeList(res.data.results)
  })
    
  },[])


  return (
    <div>
      <Offices offices={officeList}/>
      </div>
  )
}

export default Index