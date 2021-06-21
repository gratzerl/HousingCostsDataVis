import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartInteractionService {

  private hoveredBarChange = new Subject<string>();
  private hoveredBubbleChange = new Subject<string>();

  private hoveredYearChange = new Subject<string>();

  constructor() { }

  get hoveredBar$(): Observable<string> {
    return this.hoveredBarChange.asObservable();
  }

  set hoveredBar(countryCode: string) {
    this.hoveredBarChange.next(countryCode);
  }

  get hoveredBubble$(): Observable<string> {
    return this.hoveredBubbleChange.asObservable();
  }

  set hoveredBubble(countryCode: string) {
    this.hoveredBubbleChange.next(countryCode);
  }

  get hoveredYear$(): Observable<string> {
    return this.hoveredYearChange.asObservable();
  }

  set hoveredYear(year: string) {
    this.hoveredYearChange.next(year);
  }
}
