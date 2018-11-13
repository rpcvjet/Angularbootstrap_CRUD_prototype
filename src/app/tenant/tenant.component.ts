import { Component, OnInit, Input } from '@angular/core';
import { TenantService, Tenant } from 'src/app/shared';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {
  @Input() tenants: Tenant [];

  constructor(public tenantService: TenantService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllTenants();

  }

  // http call that gets json data
  getAllTenants() {
    this.tenantService.all()
    .subscribe(tenants => this.tenants = tenants);
  }
  // deletes tennant
  deleteTenant(tenant) {
    this.tenantService.delete(tenant)
      .subscribe(response => {
      this.getAllTenants();
      });
  }


}
