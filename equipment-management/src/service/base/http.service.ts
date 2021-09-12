import {Injectable, Injector} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpOption} from "./http-option.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http;
  constructor(public injector: Injector) {
    this.http = this.injector.get<HttpClient>(HttpClient);
  }

  get(url: string): Observable<any[]> {
    return this.http.get<any[]>(url)
  }

  post(url: string, body: any) {
    return this.http.post(url, body)
  }

  put(url: string, body: any) {
    return this.http.put(url, body)
  }

  delete(url: string, option = HttpOption) {
    return this.http.delete(url)
  }

}
