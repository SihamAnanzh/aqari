import React from 'react'
import Packges from '../components/packges/Packges'

const PackgesAdd = ({data}) => {

  return (
    <div><Packges  data={data.results}/></div>
  )
}

export default PackgesAdd



export async function getServerSideProps() {

  const res = await fetch('https://stagingapi.aqarifinder.com/api/package/list',{headers:{lang:'ar'}})
  const data = await res.json()


  return { props: { data } }
}
