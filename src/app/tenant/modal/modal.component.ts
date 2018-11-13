import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { TenantService, Tenant } from 'src/app/shared';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  display = 'none';
  tenantForm: FormGroup;
  tenants: Tenant;
  constructor(public tenantService: TenantService, private fb: FormBuilder) { }


  ngOnInit() {
    this.tenantForm = this.fb.group({
      title: [''],
      name: [''],
      european: [''],
      house: ['']
    });
  }


 openModal() {
  this.display = 'block';
  }

  onCloseHandled() {
    this.display = 'none';
  }

   createTenant(tenant) {
    this.tenantService.create(tenant)
     .subscribe( response => {
     });
     this.reset();
   }

   getAllTenants() {
    this.tenantService.all()
    .subscribe(tenants => this.tenants = tenants);
  }

  // creates a tenant
  saveTenant(tenant) {
  if (!tenant.id) {
    this.createTenant(this.tenantForm.value);
  } else {
    this.updateTenant(tenant);
  }
  this.getAllTenants();
  }

  reset() {
    this.tenantForm = this.fb.group({
      title: [''],
      name: [''],
      european: [''],
      house: ['']
    });
  }

  updateTenant(tenant) {
    this.tenantService.update(tenant)
    .subscribe(response => {
    });
  }
}
