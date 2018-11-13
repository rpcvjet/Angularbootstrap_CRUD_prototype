import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { TenantService } from './shared/tenant-service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TenantComponent } from './tenant/tenant.component';
import { ModalComponent } from './tenant/modal/modal.component';
import { DatatableComponent } from './tenant/datatable/datatable.component';
import { UpdatemodalComponent } from './tenant/updatemodal/updatemodal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    DatatableComponent,
    TenantComponent,
    UpdatemodalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [TenantService],
  bootstrap: [AppComponent],
})
export class AppModule { }
