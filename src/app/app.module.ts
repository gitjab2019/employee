import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpComponent } from './emp/emp.component';
import { PopupService } from './services/messages/popup.service';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { EditempleadoComponent } from './editempleado/editempleado.component';
import { HeaderComponent } from './header/header.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'edit/:id', component: EditempleadoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    ProductsComponent,
    FooterComponent,
    EditempleadoComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
  ],
  providers: [PopupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
