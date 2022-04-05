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
            width: '32px',
            height: '32px',
            borderRadius: "50%",
            background: '#EDAA43',
            color: '#fff',
            position: 'absolute',
            top: "16%",
            left:'22px',
            display: 'flex',
            justifyContent: 'center',
            alignItems:"center",
            cursor: "pointer",
            zIndex:"10"
            
        }}>
            <ArrowBack />
        </div>
        </div>
    )

}

export default BackBtn