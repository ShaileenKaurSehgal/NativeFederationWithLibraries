import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css',
})
export class AppHeaderComponent {
  @Input() data = [];
  @Output() search = new EventEmitter<string>();

  onSearch(e: Event): void {
    this.search.emit((<HTMLTextAreaElement>e.target).value);
  }
}
