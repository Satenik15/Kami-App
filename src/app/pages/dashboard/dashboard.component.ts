import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFolderOpen, faImages, faSignsPost } from '@fortawesome/free-solid-svg-icons';
import { AlbumService } from '../../services/album-service/album.service';
import { PhotoService } from '../../services/photo-service/photo.service';
import { PostService } from '../../services/post-service/post.service';
import { HelperService } from '../../services/helper-service/helper.service';
import { IAlbum } from '../../models/album';
import { IPhoto } from '../../models/photo';
import { IPost } from '../../models/post';
import { ICard } from '../../models/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  albumService = inject(AlbumService);
  photoservice = inject(PhotoService);
  postService = inject(PostService);
  helperService = inject(HelperService);

  faFolderOpen = faFolderOpen;
  faImages = faImages;
  faSignsPost = faSignsPost;
  destroy$: Subject<void> = new Subject();
  albums: IAlbum[] = [];
  photos: IPhoto[] = [];
  posts: IPost[] = [];
  cards: ICard[] = [];

  ngOnInit(): void {
    this.helperService.updateCurrentPage('Dashboard');
    this.albumService.albums$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: IAlbum[] | null) => {
        if (data) {
          this.albums = data;
          this.updateData();
        } else {
          this.albumService.getAlbums().subscribe();
        }
      });

    this.photoservice.photos$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: IPhoto[] | null) => {
        if (data) {
          this.photos = data;
          this.updateData();
        } else {
          this.photoservice.getPhotos().subscribe();
        }
      });

    this.postService.posts$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: IPost[] | null) => {
        if (data) {
          this.posts = data;
          this.updateData();
        } else {
          this.postService.getPosts().subscribe();
        }
      });
  }

  updateData() {
    this.cards = [
      {
        name: 'albums',
        url: '/album-list',
        count: this.albums.length,
        description: 'A photo album is a series of photographic prints collected by an individual person or family in the form of a book.',
        icon: faFolderOpen
      },
      {
        name: 'photos',
        url: '/photo-list',
        count: this.photos.length,
        description: 'A photo is an image created by light falling on a photosensitive surface, usually photographic film or an electronic image sensor.',
        icon: faImages
      },
      {
        name: 'posts',
        url: '/post-list',
        count: this.posts.length,
        description: 'A post refers to any social media status update, photo, or video, or an item shared on a blog or forum',
        icon: faSignsPost
      }
    ]
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
