import { Component } from '@angular/core';
import { HeaderService, TableComponent } from 'header';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-table',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.css',
})
export class TodoTableComponent {
  data: any = [];
  filteredData: any = [];
  columns: any = ['id', 'username', 'website', 'phone'];
  constructor(
    private todos: TodoService,
    private headerService: HeaderService
  ) {}
  ngOnInit() {
    this.todos.getAllTodos().subscribe({
      next: (res) => {
        this.data = res;
        this.filteredData = [...this.data];
      },
    });
    this.headerService.searchQuery$.subscribe((query) => {
      this.data = this.filteredData.filter((item: any) =>
        item.username?.toString().toLowerCase().includes(query.toLowerCase())
      );
    });
  }
}
