import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HelperService } from '../../services/helper-service/helper.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  helperService = inject(HelperService);
}
