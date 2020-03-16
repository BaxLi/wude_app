import React, { useState } from 'react'
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,Toolbar, WeekView, MonthView,DateNavigator, TodayButton,
  Appointments, ViewSwitcher, DayView
} from "@devexpress/dx-react-scheduler-material-ui";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
// import { appointments } from "./data";

const theme = createMuiTheme({ palette: { type: "light", primary: blue } });

export const Calendar=()=> {
  const [currentDate, setcurrentDate] = useState('2020-03-01')
  const setCurrentDateHandler=()=>{
    const date=Date.now()
    console.log("date=",date);
    
setcurrentDate(date)
  }
  return (
    // <MuiThemeProvider theme={theme}>
      <Paper>
        <Scheduler data={[
          { startDate: '2020-03-05 10:00', endDate: '2018-10-31 11:00', title: 'Meeting' },
          { startDate: '2020-03-06 18:00', endDate: '2018-11-01 19:30', title: 'Go to a gym' },
        ]}
        height={350}
        >
          <ViewState currentDate="2020-03-05" defaultCurrentViewName="Week" />
            <MonthView currentDate="2020-03-05"/>
            <WeekView startDayHour={15} endDayHour={21} />
            <DayView  startDayHour={9} endDayHour={14}/>
          <Toolbar />
          <DateNavigator />
          <TodayButton today="YEP" setCurrentDate={setCurrentDateHandler}/>
          <ViewSwitcher />
          <Appointments />
        </Scheduler>
      </Paper>
    // {/* </MuiThemeProvider> */}
  );
}
