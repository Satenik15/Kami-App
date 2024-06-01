import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, filter, switchMap, takeUntil } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../services/user-service/user.service';
import { HelperService } from '../../services/helper-service/helper.service';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit, OnDestroy {
  route = inject(ActivatedRoute);
  userService = inject(UserService);
  helperService = inject(HelperService);
  
  destroy$: Subject<void> = new Subject();
  user!: IUser;
  faUser = faUser;

  ngOnInit(): void {
    this.helperService.updateCurrentPage('User');
    this.route.params.pipe(
      takeUntil(this.destroy$),
      filter(value => !!value["id"]),
      switchMap((data: Params) => {
        return this.userService.getUser(data["id"])
      }))
      .subscribe((data: IUser) => {
        if (data) {
          this.user = data; 
        }
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
