import { UserService } from './../../service/user.service';
import { AuthService } from './../../service/auth.service';
import { Component, HostBinding,} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @HostBinding('class') classes = '';

  mostrarDropdown: boolean = false;
  userName: string | null;
  static atualizarNavbarEvent: any;

  constructor(
    public authService: AuthService,
    private userService: UserService,
) {
      this.userName = this.userService.getUserName()

  }

  sair() {
    this.authService.logout()
  }



}
