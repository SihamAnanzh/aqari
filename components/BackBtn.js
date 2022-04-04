import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { useRouter } from 'next/router'
import React from 'react'

const BackBtn = () => {
    const route = useRouter()

    const handelClick=()=> {
        route.back()
    }

    return (
        <div className="backBtn">
        <div onClick={handelClick} className='' style={{
            width: '36px',
            height: '36px',
            borderRadius: "50%",
            background: '#EDAA43',
            color: '#fff',
            position: 'fixed',
            bottom: "7%",
            left: route.locale=="en"?'22px':'353px',
            display: 'flex',
            justifyContent: 'center',
            alignItems:"center",
            cursor:"pointer"
            
        }}>
            {route.locale == "en" ? <ArrowBack /> : <ArrowForward />}
        </div>
        </div>
    )

}

export default BackBtn