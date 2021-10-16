import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { ContentComponent } from './content/content.component';
import { TravelsComponent } from './travels/travels.component';
import { trips } from './trips';
import { WasAddedComponent } from './was-added/was-added.component';

const routes: Routes = [{
  path:"", component: ContentComponent
}, {
  path:"blog", component: BlogComponent
}, {
  path:"travels", component: TravelsComponent
}, {
  path:"cart", component: CartComponent
}, {
  path:"travels/:id", component: WasAddedComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
