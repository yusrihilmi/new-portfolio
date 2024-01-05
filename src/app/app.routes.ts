import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WebProjectsComponent } from './web-projects/web-projects.component';
import { FilterProjectsComponent } from './filter-projects/filter-projects.component';

export const routes: Routes = [
    {
        'path': '', component:HomeComponent
    },
    {
        'path': 'about', component:AboutComponent
    },
    {
        'path': 'web-projects', component:WebProjectsComponent
    },
    {
        'path': 'filter-projects', component:FilterProjectsComponent
    },
];
