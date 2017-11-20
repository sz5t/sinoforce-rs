import {Injectable} from '@angular/core';
import {CookiesStorageService, LocalStorageService, SessionStorageService} from 'ngx-store';

@Injectable()
export class ClientStorageService {

  constructor(private cookiesStorage: CookiesStorageService,
              private localStorage: LocalStorageService,
              private localSession: SessionStorageService) {
  }

  public setCookies(key, data) {
    this.cookiesStorage.set(key, data, new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
  }

  public getCookies(key) {
    return this.cookiesStorage.get(key);
  }

  public clearCookies() {
    this.cookiesStorage.clear();
  }

  public setLocalStorage(key, data) {
    this.localStorage.set(key, data);
  }

  public getLocalStorage(key) {
    return this.localStorage.get(key);
  }

  public setSessionStorage(key, data) {
    this.localSession.set(key, data);
  }

  public getSessionStorage(key) {
    return this.localSession.get(key);
  }
}
