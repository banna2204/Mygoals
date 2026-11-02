import { Routes } from '@angular/router';
import { Test } from './components/test/test';
import { ChildRoute } from './components/child-route/child-route';

export const routes: Routes = [
    {
        path:'test', component: Test, data: { id:1, role:'user' },
        children:[
            {
                path:'',
                component:ChildRoute
            }
        ]
    }
];
