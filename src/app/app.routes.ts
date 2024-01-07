import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WebProjectsComponent } from './web-projects/web-projects.component';
import { FilterProjectsComponent } from './filter-projects/filter-projects.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GreenchemComponent } from './greenchem/greenchem.component';

export const routes: Routes = [
    {
        'path': 'home','title': 'Home', component:HomeComponent
    },
    {
        'path': 'about', 'title': 'About', component:AboutComponent
    },
    {
        'path': 'web-projects', 'title': 'Web Projects', component:WebProjectsComponent
    },
    {
        'path': 'web-projects', children:[
            {
                'path': 'greenchem', 'title': 'Web Projects | Greenchem', component: GreenchemComponent
            }
        ]
    },
    {
        'path': 'filter-projects', 'title': 'Filter Projects', component:FilterProjectsComponent
    },
    {
        'path': 'social-media', 'title': 'Social Media', component:SocialMediaComponent
    },
    {
        'path': '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        'path': '**', component:PageNotFoundComponent
    }
];
