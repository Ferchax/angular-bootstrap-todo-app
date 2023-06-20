//Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Created with Angular CLi using "ng new" command
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//third party modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule, ColorTheme } from 'ngx-bootstrap-icons';
import { bootstrapFill } from 'ngx-bootstrap-icons';

//Custom components
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NotesComponent } from './pages/notes/notes.component';

const icons = {
  bootstrapFill
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    PageNotFoundComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
