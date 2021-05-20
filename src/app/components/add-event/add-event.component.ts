import { Component, OnInit } from '@angular/core';
import { Meet } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';

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


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  meet: Meet = new Meet();
  added = false;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  saveEvent(): void {
    
    this.eventService.create(this.meet).then(() => {
      console.log('Created new item successfully!');
      this.added = true;
    });
  }

  newTutorial(): void {
    this.added = false;
    this.meet = new Meet();
  }


}
