import { GetadminComponent } from './getadmin/getadmin.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FlexBodyComponent } from './flex-body/flex-body.component';
import { FlexFooterComponent } from './flex-footer/flex-footer.component';
import { HomeComponent } from './home/home.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BlueColorDirective } from './blue-color.directive';



@NgModule({
  declarations: [
    AppComponent,
    FlexLayoutComponent,
    FlexBodyComponent,
    FlexFooterComponent,
    HomeComponent,
    RegistrationComponent,
    GetadminComponent,
    DeleteDataComponent,
    BlueColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    MatButtonModule,
    RouterModule.forRoot([
      {
        path: '\home',
        component: HomeComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'getadmin',
        component: GetadminComponent
      },
      {
        path: 'deleteData',
        component: DeleteDataComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
