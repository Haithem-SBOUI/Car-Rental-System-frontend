import { Component } from '@angular/core';

@Component({
  selector: 'user-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn(): boolean {
    // return this.authService.isLoggedIn;
    return true;
  }

}
