import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TenantService, Tenant } from 'src/app/shared';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { UpdatemodalComponent } from '../updatemodal/updatemodal.component';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {

    @Input() tenants: Tenant [];
    @Output() deleted = new EventEmitter();
    @ViewChild(UpdatemodalComponent) child: UpdatemodalComponent;

    constructor(public tenantService: TenantService) { }


    openModal(tenants) {
      this.child.OpenEditModal(tenants);
    }

}
