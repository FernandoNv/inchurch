import { Component, input } from '@angular/core';
import { IUser } from '../../core/auth/auth.service';
import { Avatar } from 'primeng/avatar';

@Component({
  selector: 'app-profile-info',
  imports: [Avatar],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.scss',
})
export class ProfileInfoComponent {
  user = input<IUser>({} as IUser);
}
