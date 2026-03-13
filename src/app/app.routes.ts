import { Routes } from '@angular/router';
import { Site } from './site/site';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { Cart } from './pages/cart/cart';
import ActionsLog from './pages/actions-log/actions-log';

export const routes: Routes = [
  {
    path: '',
    component: Site,
    children: [
      { path: '', component: About },
      { path: 'about', component: About },
      { path: 'products', component: Products },
      { path: 'cart', component: Cart },
      { path: 'actions-log', component: ActionsLog },
    ]
  }
];
