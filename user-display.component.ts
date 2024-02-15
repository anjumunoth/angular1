import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent {
userObs$: Observable<any>;
constructor(private um:UserManagementService)
{
  this.userObs$=um.getUsersFromJsonPlaceHolder();
}
}
