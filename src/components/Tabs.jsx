import React, { useState } from 'react'

const Tabs = props => {
    
    const [idx, setIdx] = useState(0)

    const {tabs} = props
    
    const handleClick = (idx) =>{
        setIdx(idx)
    }

    return(
        <div>
            {
                tabs.map((tab, i) => {
                    return <button onClick = { () =>handleClick(i)}key = {i}>{tab.title}</button>
                })
            }
            <div>
                <h1>{tabs[idx].content}</h1>
            </div>
        </div>
    )
}
export default Tabs