import React from 'react'
import './Loading.css'

function Loading() {
    return (
        <div className='w-screen h-screen bg-black/30 backdrop-blur-sm flex justify-center items-center absolute z-50'>
            <div class="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading
