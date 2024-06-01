import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { AlbumService } from '../../services/album-service/album.service';
import { HelperService } from '../../services/helper-service/helper.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { AlbumCardComponent } from '../../components/album-card/album-card.component';
import { IAlbum } from '../../models/album';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [RouterModule, UserCardComponent, AlbumCardComponent],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent implements OnInit, OnDestroy {
  route = inject(ActivatedRoute);
  albumService = inject(AlbumService);
  helperService = inject(HelperService);

  destroy$: Subject<void> = new Subject();
  album!: IAlbum;

  ngOnInit(): void {
    this.helperService.updateCurrentPage('Album');
    this.route.params.pipe(
      switchMap((data: Params) => {
        return this.albumService.getAlbum(data["id"])
      }),
      takeUntil(this.destroy$))
      .subscribe((data: IAlbum) => {
        if (data) {
          this.album = data;
        }
      })
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
