import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleStateService {

  public dataObsevable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {
  }

  toggleState = (close: boolean) => {
    this.dataObsevable.next(close);
  }
}
