import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor() {}
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  private searchSubject = new BehaviorSubject<string>('');
  searchQuery$ = this.searchSubject.asObservable();

  setData(data: any): void {
    this.dataSubject.next(data);
  }

  setSearchQuery(query: string): void {
    this.searchSubject.next(query);
  }
}
