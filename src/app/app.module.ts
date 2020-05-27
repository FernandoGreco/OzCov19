import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrasilComponent } from './brasil/brasil.component';
import { MundoComponent } from './mundo/mundo.component';
import { OsascoComponent } from './osasco/osasco.component';
import { RotasModule } from './rotas.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BrasilComponent,
    MundoComponent,
    OsascoComponent
  ],
  imports: [
    BrowserModule,
    RotasModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
