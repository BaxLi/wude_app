import React from 'react'
import Timeline from 'react-calendar-timeline'
import moment from 'moment'
import 'react-calendar-timeline/lib/Timeline.css'
import {appointments, groups} from './data'
export const CalendarTimeline=()=>{
    return (
<>
        <Timeline
      groups={groups}
      items={appointments}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
      maxZoom={365*86400*1000*0.25}
      
    />
</>
)
}
