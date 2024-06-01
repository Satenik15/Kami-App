import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, filter, switchMap, takeUntil } from 'rxjs';
import { PostService } from '../../services/post-service/post.service';
import { HelperService } from '../../services/helper-service/helper.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { IPost } from '../../models/post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit, OnDestroy {
  postService = inject(PostService);
  route = inject(ActivatedRoute);
  helperService = inject(HelperService);

  destroy$: Subject<void> = new Subject();
  post!: IPost;

  ngOnInit(): void {
    this.helperService.updateCurrentPage('Post');
    this.route.params.pipe(
      takeUntil(this.destroy$),
      filter(value => !!value["id"]),
      switchMap((data: Params) => {
        return this.postService.getPost(data["id"])
      }))
      .subscribe((data: IPost) => {
        if (data) {
          this.post = data;
        }
      })
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
