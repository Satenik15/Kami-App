import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LeftSidebarComponent, HeaderComponent, LoadingSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kami-test-app';
}
