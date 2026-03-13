import { Injectable } from '@angular/core';
import { ActionLog } from '../../models/actionLog';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class ActionLogService {
  private logSubject = new BehaviorSubject<ActionLog[]>([]);
  public log$: Observable<ActionLog[]> = this.logSubject.asObservable();

  private sortOrder: 'asc' | 'desc' = 'desc';
  constructor() { }

  logAction(actionName: string, productName: string | null = null): void {
    const newLogEntry: ActionLog = {
      timestamp: new Date(),
      actionName: actionName,
      productName: productName
    };
    const currentLog = this.logSubject.getValue();
    currentLog.push(newLogEntry);

    this.sortLogs(this.sortOrder);
  }

  getLogs(): ActionLog[] {
    return this.logSubject.getValue();
  }

  sortLogs(order: 'asc' | 'desc'): void {
    this.sortOrder = order;
    const sortedLogs = [...this.getLogs()].sort((a, b) => {
      const comparison = a.timestamp.getTime() - b.timestamp.getTime();
      return order === 'asc' ? comparison : -comparison;
    });
    this.logSubject.next(sortedLogs);
  }

  getSortOrder(): 'asc' | 'desc' {
    return this.sortOrder;
  }
}