import React from 'react'

import { ProfileView } from '../pages/ProfileView'
import { CalendarTimeline } from '../Calendar/CalendarTimeline'

export const StartPage = () => {
  return (
    <>
      <div>
        <CalendarTimeline />
      </div>

      <div>
        <ProfileView />
      </div>
    </>
  )
}
