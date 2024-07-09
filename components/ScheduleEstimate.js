'use client';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const ScheduleEstimate = () => {
  return (
    <div>
      <h2>Schedule Estimate</h2>
      <AddToCalendarButton
        name="Title"
        options={['Apple', 'Google']}
        location="World Wide Web"
        startDate="2024-07-04"
        endDate="2024-07-04"
        startTime="10:15"
        endTime="23:30"
        timeZone="America/Chicago"
      ></AddToCalendarButton>
    </div>
  );
}

export default ScheduleEstimate;
