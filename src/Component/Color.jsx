import React, { useState } from 'react'
import './Color.css'
function Color() {

    const [color,setColor] = useState()
     const handleColor = (val)=>{
       setColor(val)
     }

    return (
        <div className={`color-container  ${color}`}  >
            <div className='color-content'>
                <div className='color-section'>
                    <h1>COLOR CHANGE APP</h1>
                    <div><p>CHOOSE YOUR COLOR</p></div>
                </div>
                <div className='color-palatte'>
                    <div onClick={()=>handleColor("blue")}className='blue'></div>
                    <div onClick={()=>handleColor("red")}className='red'></div>
                    <div onClick={()=>handleColor("green")}className='green'></div>
                    <div onClick={()=>handleColor("violet")}className='violet'></div>
                    <div onClick={()=>handleColor("yellow")}className='yellow'></div>
                    <div onClick={()=>handleColor("purple")}className='purple'></div>
                    <div onClick={()=>handleColor("orange")}className='orange'></div>
                    <div onClick={()=>handleColor("aqua")}className='aqua'></div>

                </div>
            </div>
        </div>
    )
}

export default Color
