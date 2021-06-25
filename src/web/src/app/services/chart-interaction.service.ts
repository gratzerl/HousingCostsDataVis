import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export type Interaction = 'click' | 'hover';

@Injectable({
  providedIn: 'root'
})
export class ChartInteractionService {

  private barsInfoChange = new Subject<[countryCode: string, year: string, interaction: Interaction]>();
  private bubbleInfoChange = new Subject<[countryCode: string, year: string, state: Interaction]>();

  constructor() { }

  get barsInfo$(): Observable<[countryCode: string, year: string, interaction: Interaction]> {
    return this.barsInfoChange.asObservable();
  }

  set barsInfo(barInfo: [countryCode: string, year: string, interaction: Interaction]) {
    this.barsInfoChange.next(barInfo);
  }

  get bubbleInfo$(): Observable<[countryCode: string, year: string, state: Interaction]> {
    return this.bubbleInfoChange.asObservable();
  }

  set bubbleInfo(bubbleInfo: [countryCode: string, year: string, state: Interaction]) {
    this.bubbleInfoChange.next(bubbleInfo);
  }
}
