import { Http, Headers, URLSearchParams } from '@angular/http';
import {Injectable} from '@angular/core';
import { Tenant } from './tenant.model';
// import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000/tenants/';
const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};


@Injectable()
export class TenantService {

  constructor(private http: Http ) {
    console.log('data service conneted');
  }

  all() {
    return this.http.get(BASE_URL)
    .pipe(map(res => res.json()));

  }

  load(id) {
    return this.http.get(`${BASE_URL}${id}`)
    .pipe(map(res => res.json()));
  }

  create(tenant: Tenant) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(tenant), HEADER)
    .pipe(map(res => res.json()));
  }

  update(tenant: Tenant) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(tenant), HEADER)
    .pipe(map(res => res.json()));
  }

  delete(tenant: Tenant) {
    return this.http.delete(`${BASE_URL}${tenant.id}`)
    .pipe(map(res => res.json()));
  }

}
