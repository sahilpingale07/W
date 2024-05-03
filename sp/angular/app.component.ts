import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration sheet';
  displayName = ''
  displayAddress = ''
  displayContact = ''
  displayEmail = ''

  getValue(name: string, address: string, contact: string, email: string) {
    this.displayName = name;
    this.displayContact = contact;
    this.displayAddress = address;
    this.displayEmail = email;
  }
}
