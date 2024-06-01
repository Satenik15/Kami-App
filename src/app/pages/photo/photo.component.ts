import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, filter, pipe, switchMap, takeUntil } from 'rxjs';
import { PhotoService } from '../../services/photo-service/photo.service';
import { IPhoto } from '../../models/photo';
import { HelperService } from '../../services/helper-service/helper.service';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent implements OnInit, OnDestroy {
  route = inject(ActivatedRoute);
  photoservice = inject(PhotoService);
  helperService = inject(HelperService);

  destroy$: Subject<void> = new Subject();
  photo!: IPhoto;

  ngOnInit(): void {
    this.helperService.updateCurrentPage('Photo');
    this.route.params.pipe(
      pipe(takeUntil(this.destroy$)),
      filter(value => !!value["id"]),
      switchMap((data: Params) => {
        return this.photoservice.getPhoto(data["id"])
      }))
      .subscribe((data: IPhoto) => {
        if (data) {
          this.photo = data;
        }
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
