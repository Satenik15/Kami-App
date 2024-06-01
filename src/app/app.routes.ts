import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("./pages/dashboard/dashboard.component").then(m => m.DashboardComponent)
    },
    {
        path: 'album/:id',
        loadComponent: () => import("./pages/album/album.component").then(m => m.AlbumComponent)
    },
    {
        path: 'album-list',
        loadComponent: () => import("./pages/album-list/album-list.component").then(m => m.AlbumListComponent)
    },
    {
        path: 'photo/:id',
        loadComponent: () => import("./pages/photo/photo.component").then(m => m.PhotoComponent)
    },
    {
        path: 'photo-list',
        loadComponent: () => import("./pages/photo-list/photo-list.component").then(m => m.PhotoListComponent)
    },
    {
        path: 'post/:id',
        loadComponent: () => import("./pages/post/post.component").then(m => m.PostComponent)
    },
    {
        path: 'post-list',
        loadComponent: () => import("./pages/post-list/post-list.component").then(m => m.PostListComponent)
    },
    {
        path: 'user/:id',
        loadComponent: () => import("./pages/user/user.component").then(m => m.UserComponent)
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    }
];
