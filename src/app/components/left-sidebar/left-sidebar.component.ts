import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { ICard } from '../../models/card';
import { items } from './sidebar-data.utils';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  faSun = faSun;

  items: ICard[] = items;
}
