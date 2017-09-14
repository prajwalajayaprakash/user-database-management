import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Location} from "@angular/common";
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  @Input() user: User;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
      this.userService.getUserbyID(+params.get('id')))
      .subscribe(user => this.user = user);
    }
  save(): void {
    this.location.back();
    }
}
