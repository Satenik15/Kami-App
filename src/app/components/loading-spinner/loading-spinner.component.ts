import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { LoaderService } from '../../services/loader-service/loader.service';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {
  loaderService = inject(LoaderService);
}
