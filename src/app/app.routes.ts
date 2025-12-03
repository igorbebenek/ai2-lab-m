import { Routes } from '@angular/router';

import { ListComponent } from './list/list';
import { DetailsComponent } from './details/details';
import { AddPersonComponent } from './add-person/add-person';
import { NotFoundComponent } from './not-found/not-found';

export const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'add', component: AddPersonComponent },

  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: '**', component: NotFoundComponent }
];
