$(document).ready(function() {
  $('#calendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyBKKSpnHXlRtA3RsJ1bTf-PjV-a4FUMiZo',
    events: {
      googleCalendarId: 'katogcholing.com_f7lv84tnvqojhe8vnv778gc9qo@group.calendar.google.com',
      backgroundColor: '#2E609B',
      textColor: '#f1f1f1',
      borderColor: '#fff'
    },
    timeFormat: 'h(:mm)t',
    
    customButtons: {
        print: {
            text: 'print',
            click: function() {
                DOMPrinter = PrintElem('#app-container');
                DOMPrinter.print();
            },
        }
    },
    header: {
      left:   'title, print',
      center: '',
      right:  'today prev,next month,agendaWeek,agendaDay, listWeek' //basicWeek,basicDay,
    },
    views: {
        listWeek: {
            buttonText: 'weekly agenda'
        }
    }
  });
});