import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  public names = new Subject<Array<string>>()

  constructor() { }

  public setNames(names: Array<string>): void {
    this.names.next(names);
  }

  public getNames(): Observable<string[]> {
    return this.names.asObservable();
  }


}
