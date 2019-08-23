import React from 'react'
import Month from './Month'
import Week from './Week'
import Day from './Day'
import startingDay from './resources/startingDay.js'
import offDays from './resources/offDays.js'

function CalendarTile(){
    return(
        <div>
            <Month />
            <Week />
            <Day />
        </div>
    )
}

export default CalendarTile