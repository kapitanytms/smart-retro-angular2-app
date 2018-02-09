import { GetUserService } from './services/getuser.service';
import { User } from './models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  users: User[];

  constructor(private getUserServise: GetUserService) {}

  ngOnInit(): void {
    this.getUserServise.getUsers().subscribe(res => this.users = res);
  }

}
