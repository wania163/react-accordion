import React, { useState } from 'react'
import data from "./data"
import "./Accordian.css"
const Accordian = () => {
    // single selection
    const [selected, setSelected] = useState(null);
    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId== selected?null:getCurrentId);
    }
    // multipe selction

    console.log(selected)
  return (
    
    <div className='wrapper'>
        <h1>Accordian</h1>
        <div className='accordian'>
            {/* Agar data exist karta hai aur data ke andar items hain, to accordion show karo. */}
            {data && data.length> 0 ?
            data.map(dataItems=><div className='item'>
                <div onClick={()=>handleSingleSelection(dataItems.id)} className='title'>
                    <h3>{dataItems.question}</h3>
                    <span>+</span>
                    {/* item click hua hai, woh currently selected item hai? */}
                    {selected === dataItems.id? 
                    <div className='content'>{dataItems.answer}</div>: null}
                </div>
            </div>):<div>No data found</div>}
        </div>
      
    </div>
  )
}

export default Accordian
