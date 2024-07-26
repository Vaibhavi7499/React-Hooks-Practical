import React from 'react'
import useFetch from '../customHook/useFetch'
const CustomerList = () => {

    let [customer] = useFetch("http://localhost:8000/customerlist");

  return (
    <div>
        <ul>
{
    customer.map((e)=>(
<li key={e?.id}>{e?.name} {e?.address}</li>
    ))
}
</ul>
    </div>
  )
}

export default CustomerList