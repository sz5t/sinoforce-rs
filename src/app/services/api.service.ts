import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Configuration} from "../framework/configuration";
@Injectable()
export class ApiService {
  headers = new HttpHeaders();
  constructor(private httpClient:HttpClient) { }
  doList(url,params?,data?){
    return this.httpClient.request(
      'GET',
      Configuration.web_api+url,
      {
        responseType:'json',
        params:this.buildParameters(params),
        headers:this.headers
      }
    );
  }
  doQuery(url,params?,data?){
    return this.httpClient.request(
      'GET',
      Configuration.web_api+url,
      {
        responseType:'json',
        params:this.buildParameters(params),
        headers:this.headers
      }
    );
  }
  doGet(url,params?,data?){
    return this.httpClient.request(
      'GET',
      Configuration.web_api+url,
      {
        responseType:'json',
        params:this.buildParameters(params),
        headers:this.headers
      }
    );
  }
  doPut(url,params?,data?){
    return this.httpClient.request(
      'PUT',
      Configuration.web_api+url,
      {
        body:data,
        headers:this.headers,
        params:this.buildParameters(params)
      }
    );
  }
  doDelete(url,params?,data?){
    return this.httpClient.request(
      'DELETE',
      Configuration.web_api+url,
      {
        headers:this.headers,
        params:this.buildParameters(params)
      }
    );
  }
  doPost(url,params?,data?){
    return this.httpClient.request(
      'POST',
      Configuration.web_api+url,
      {
        body:data,
        headers:this.headers
      }
    );
  }
  doProc(url,params?,data?){
    return this.httpClient.request(
      'GET',
      Configuration.web_api+url,
      {
        responseType:'json',
        params:this.buildParameters(params),
        headers:this.headers
      }
    );
  }
  private buildParameters(params): HttpParams{
    let str:string = '';
    if(params){
      for(const p in params){
        str += p +'='+ params[p] + '&';
      }
      console.log(str);
    }
    return new HttpParams({fromString:str});
  }
}
