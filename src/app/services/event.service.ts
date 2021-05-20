import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Meet } from '../models/event.model';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  private dbPath = '/events';

  eventsRef: AngularFireList<Meet>;

  constructor(private db: AngularFireDatabase) {
    this.eventsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Meet> {
    return this.eventsRef;
  }

  create(meet: Meet): any {
    return this.eventsRef.push(meet);
  }

  update(key: string, value: any): Promise<void> {
    return this.eventsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.eventsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.eventsRef.remove();
  }
}
