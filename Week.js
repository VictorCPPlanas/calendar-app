import React from 'react'



function Week(){
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

   
    return(
        <div className="week">
            <ul>
                {weekDays.map((item) => {
                    return( <li key={item}>{item}</li> )
                })}
            </ul>
        </div>
    )
}

export default Week