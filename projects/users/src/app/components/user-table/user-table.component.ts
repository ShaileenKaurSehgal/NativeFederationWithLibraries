import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { TableComponent, HeaderService } from 'header';
import { UserDetailsComponent } from '../user-details.component';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [TableComponent, UserDetailsComponent],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css',
})
export class UserTableComponent {
  data: any = [];
  filteredData: any = [];
  columns: any = ['id', 'name', 'email', 'website'];
  constructor(
    private userService: UsersService,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe({
      next: (res) => {
        this.data = res;
        this.filteredData = [...this.data];
        this.headerService.setData(this.data);
        console.log(this.data);
      },
    });
    this.headerService.searchQuery$.subscribe((query) => {
      this.data = this.filteredData.filter((item: any) =>
        item.name?.toString().toLowerCase().includes(query.toLowerCase())
      );
    });
  }
}
