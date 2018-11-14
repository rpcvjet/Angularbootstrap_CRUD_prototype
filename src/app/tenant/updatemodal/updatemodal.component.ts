import { Component, OnInit, Output, EventEmitter , Input, ViewChild} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { TenantService, Tenant } from 'src/app/shared';


@Component({
  selector: 'app-updatemodal',
  templateUrl: './updatemodal.component.html',
  styleUrls: ['./updatemodal.component.css']
})
export class UpdatemodalComponent implements OnInit {
  editForm: FormGroup;
  display = 'none';
  selectedTenant: Tenant;
  @Input() tenants: Tenant;

  constructor(public tenantService: TenantService, private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.editForm = this.fb.group({
      title: '',
      name: '',
      european: '',
      house: ''
    });

  }

  OpenEditModal(tenants) {
    console.log('updatemodal--->', tenants);
    this.editForm.patchValue({
      title: tenants.title,
      name: tenants.name,
      european: tenants.european,
      house: tenants.house
    });

    this.display = 'block';
    }

  closeEditModal() {
      this.display = 'none';
    }

    saveTenant(tenant) {
      if (!tenant.id) {
        this.createTenant(this.editForm.value);
      } else {
        this.updateTenant(tenant);
      }
      }

    updateTenant(tenant) {
      this.tenantService.update(tenant)
      .subscribe(response => {
      });
    }

    createTenant(tenant) {
      this.tenantService.create(tenant)
       .subscribe( response => {
       });
       this.closeEditModal();
     }
}
