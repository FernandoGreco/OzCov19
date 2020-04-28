import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrasilComponent } from './brasil/brasil.component';
import { MundoComponent } from './mundo/mundo.component';
import { OsascoComponent } from './osasco/osasco.component';
import { RotasModule } from './rotas.module';

@NgModule({
  declarations: [
    AppComponent,
    BrasilComponent,
    MundoComponent,
    OsascoComponent
  ],
  imports: [
    BrowserModule,
    RotasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
