import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() id: number = 0;

  faUser = faUser;
}
