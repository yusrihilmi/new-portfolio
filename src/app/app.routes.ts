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
        'path': '','title': 'YusriPortfolio | Home', component:HomeComponent
    },
    {
        'path': 'about', 'title': 'YusriPortfolio | About', component:AboutComponent
    },
    {
        'path': 'web-projects', 'title': 'YusriPortfolio | Web Projects', component:WebProjectsComponent
    },
    {
        'path': 'web-projects', children:[
            {
                'path': 'greenchem', 'title': 'YusriPortfolio | Web Projects | Greenchem', component: GreenchemComponent
            }
        ]
    },
    {
        'path': 'filter-projects', 'title': 'YusriPortfolio | Filter Projects', component:FilterProjectsComponent
    },
    {
        'path': 'social-media', 'title': 'YusriPortfolio | Social Media', component:SocialMediaComponent
    },
    {
        'path': '','title': 'YusriPortfolio | Home', redirectTo: '/', pathMatch: "prefix"
    },
    {
        'path': '**', component:PageNotFoundComponent
    }
];
