import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoTableComponent } from './components/todo-table/todo-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app';
}
