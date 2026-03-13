import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import ActionLogService from './actions-log-service';
import { Observable } from 'rxjs';
import { ActionLog } from '../../models/actionLog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-actions-log',
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './actions-log.html',
  styleUrl: './actions-log.css',
})
export default class ActionsLog implements OnInit {
  logs$!: Observable<ActionLog[]>;
  displayedColumns: string[] = ['timestamp', 'actionName', 'productName'];
  currentSortOrder: 'asc' | 'desc' = 'desc';

  constructor(private actionLogService: ActionLogService) {}

  ngOnInit(): void {
    this.logs$ = this.actionLogService.log$;
    this.currentSortOrder = this.actionLogService.getSortOrder();
  }

  toggleSort(): void {
    this.currentSortOrder = this.currentSortOrder === 'asc' ? 'desc' : 'asc';
    this.actionLogService.sortLogs(this.currentSortOrder);
  }
}
