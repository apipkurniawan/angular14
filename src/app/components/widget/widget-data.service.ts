import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class WidgetDataService {
  constructor(private http: HttpClient) {}

  load() {
    return this.http
      .get<Task[]>(
        `https://jsonplaceholder.typicode.com/todos?_start=0&_limit=3`
      )
      .pipe(
        catchError(() => {
          console.info('Error handled by Widget Service...');
          return throwError(() => {
            console.info('Error rethrow by Widget Service');
            return new Error(`Couldn't load data...`);
          });
        })
      );
  }

  addTaskSync(task: Task): Task | never {
    if (task.id === 0) {
      throw Error(`Value zero (0) is not allowed as a task id`);
    }
    return task;
  }
}
