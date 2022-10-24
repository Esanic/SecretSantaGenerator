import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FromComponent } from './components/from/from.component';
import { ToComponent } from './components/to/to.component';
import { DisplayComponent } from './components/display/display.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FromComponent,
    ToComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
