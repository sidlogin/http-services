import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { BroadcastEvent } from 'src/app/employee';

@Injectable()
export class Broadcaster {
     private eventBus: Subject<BroadcastEvent>;

     constructor() {
          this.eventBus = new Subject<BroadcastEvent>();
     }

     broadcast(key: any, data?: any) {
          this.eventBus.next({key, data});
     }

     on<T>(key: any): Observable<T> {
          return this.eventBus.asObservable()
          .pipe(
               filter((event) => event.key === key),
               map((event) => event.data as T)
          );
     }
}
