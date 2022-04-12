import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { useRouter } from 'next/router'
import React from 'react'

const BackBtn = () => {
    const route = useRouter()

    const handelClick=()=> {
        window.history.back()
    }

    return (
        <div className="backBtn">
        <div onClick={handelClick} className='back' >
            <ArrowBack />
        </div>
        </div>
    )

}

export default BackBtn