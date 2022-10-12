import React, { useState } from 'react'
import Navbar from '../components/viewComponents/Header'
import Section from '../components/viewComponents/section'
export default function View() {
    const [check,setCheck] = useState(true);
    
    const hanldeDelete = (temp)=>{
        setCheck(temp);
    }
    return (
        <>
            <Navbar  onDelete={hanldeDelete} />
            <Section check={check}/>
        </>
    )
}
