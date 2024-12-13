import React from 'react'
import './Loading.css'

function Loading() {
    return (
        <div className='w-screen h-screen bg-black/30 backdrop-blur-sm flex justify-center items-center absolute z-50'>
            <div className="loader">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
            </div>
        </div>
    )
}

export default Loading
