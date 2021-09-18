import { Component, OnInit, Input } from '@angular/core';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-user-selected',
  templateUrl: './user-selected.component.html',
  styleUrls: ['./user-selected.component.css'],
})
export class UserSelectedComponent implements OnInit {
  @Input() info: Users;
  constructor() {}

  ngOnInit(): void {}
}
