import React from 'react';

function GoogleCalendarEmbed() {
  const calendarUrl = 'https://calendar.google.com/calendar/u/0/embed?color=%23f691b2&src=tdsb.on.ca_fj7c56hpkeng4l66pjcqgbum3k@group.calendar.google.com'; // Replace with your Google Calendar URL
  const width = '30%'; // Set the desired width here, e.g., '500px' or '80%'

  return (
    <iframe
      title="Google Calendar"
      src={calendarUrl}
      
      seamless
      className='calendar-embed'
    />
  );
}

export default GoogleCalendarEmbed;


