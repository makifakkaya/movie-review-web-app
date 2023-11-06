import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service'
import {User} from "../../../model/User";

@Component({
  selector: 'app-listing',
  templateUrl: './listing-user.component.html',
  styleUrls: ['./listing-user.component.css']
})
export class ListingUserComponent implements OnInit {
  users: User[] = [];

  constructor(private _userService: UserService) {
  }

  async ngOnInit(): Promise<void> {
    await this.getUsers();
  }

  async getUsers() {
    this.users = await this._userService.list();
  }


}
