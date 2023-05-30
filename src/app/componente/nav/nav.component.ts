import { UserService } from './../../service/user.service';
import { AuthService } from 'src/app/service/auth.service';
import { Component, HostBinding,} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @HostBinding('class') classes = '';

  mostrarDropdown: boolean = false;
  userName: string | null;
  userEmail: string | null;
  static atualizarNavbarEvent: any;

  constructor(
    public authService: AuthService,
    private userService: UserService,
  ) {
      this.userName = this.userService.getUserName()
      this.userEmail = this.userService.getUserEmail()

  }

  sair() {
    this.authService.logout()
  }


}
