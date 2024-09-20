import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {
  private highlightSubject = new Subject<boolean>();

  highlight$ = this.highlightSubject.asObservable();

  triggerHighlight() {
    this.highlightSubject.next(true);
  }
}
