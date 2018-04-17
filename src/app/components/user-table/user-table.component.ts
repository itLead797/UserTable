import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/observable';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../../services/user.model';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['button', 'name', 'email', 'company'];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getServices() {
    console.log('get service');
  }

  testAllServices() {
    console.log('test all services');
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getUser();
  }
  disconnect() {}
}
