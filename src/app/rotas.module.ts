import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MundoComponent } from './mundo/mundo.component';
import { BrasilComponent } from './brasil/brasil.component';
import { OsascoComponent } from './osasco/osasco.component';

const routes: Routes = [
  { path: '', component: OsascoComponent },
  { path: 'mundo', component: MundoComponent },
  { path: 'brasil', component: BrasilComponent },
  { path: 'osasco', component: OsascoComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],


})
export class RotasModule { }
