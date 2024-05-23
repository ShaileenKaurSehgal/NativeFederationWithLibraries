import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent, AppFooterComponent, HeaderService } from 'header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent, AppFooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HeaderService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'home-shell';
  data: any = [];
  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.data$.subscribe((data) => {
      this.data = data;
      console.log('Data received from remote app:', data);
    });
  }
  onSearch(query: string): void {
    this.headerService.setSearchQuery(query);
    console.log(query);
  }
}
