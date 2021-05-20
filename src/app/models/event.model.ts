import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent,
    CalendarView,
  } from 'angular-calendar';
  import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours,
  } from 'date-fns';

export class Meet {
    key?: String | null;
    Home?: string;
    Away?: string;
    home_division?: string;
    away_division?: string;


    //Implements CalendarEvent interface
    //Gives more parameters for functionability in EventServices (i.e. Filtering)
    //Creates constructor for easier use in parsing data

    constructor(){
        
    }





}
