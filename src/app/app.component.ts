import { Component, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { Users } from './models/users';
import { UsersService } from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'appTest';

  users: Users[] = [];

  user: Users = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  };

  validUser = false;
  className = '';
  first_name: string;
  value?: string;

  constructor(private userService: UsersService) {}

  onSelect(data: TabDirective): void {
    this.value = data.heading;
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (res: any) => {
        console.log(res.data);
        this.users = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  data(id, tr) {
    let tbodyList: any = document.querySelectorAll('.tbodyData tr');
   
    for (const tr of tbodyList) {
      if (tr.classList.contains('activo')) {
        tr.classList.remove('activo');
      }
    }

    

    this.userService.getOne(id).subscribe(
      (res: any) => {
        this.user = res.data;

        localStorage.setItem('infoUser', JSON.stringify(this.user));
        sessionStorage.setItem('infoUserSession', JSON.stringify(this.user));

        tr.classList.toggle('activo');

        if (!tr.classList.contains('activo')) {
          this.validUser = false;
        } else {
          this.validUser = true;
        }
        // console.log(tr);
        
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
