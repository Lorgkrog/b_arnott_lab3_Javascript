import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'contact', component: ContactInfoComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: '', redirectTo: '/about', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
