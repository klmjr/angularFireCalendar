import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { map } from 'rxjs/operators';
import { Meet } from 'src/app/models/event.model';


import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format,
} from 'date-fns';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  
  
  constructor(private eventService: EventService) { }

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  meets?: Meet[];


  activeDayIsOpen: boolean = false;

  ngOnInit(): void {
    this.fetchEvents();
  }
  fetchEvents(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay,
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay,
    }[this.view];

   /* { 
      title: event.title,
      start: new Date(),
      Home: event.Home,
      Away: event.Away,
      home_division: event.home_division,
      away_division: event.away_division,

   } */

   this.eventService.getAll().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ 
          key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(data => {
    this.meets = data;
  });

    
    }


  }