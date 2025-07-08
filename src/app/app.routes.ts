import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home'; 
import { About } from './components/pages/about/about';
import { Projects } from './components/pages/projects/projects';
import { Services } from './components/pages/services/services';
import { Test } from './test/test';


export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'Services',
        component: Services
    },
    {
        path: 'Projects',
        component: Projects
    },
    {
        path: 'About',
        component: About
    },
    {
        path: 'test',
        component: Test
    },
    

];
