import {Injectable} from '@angular/core';
import {CookiesStorageService} from 'ngx-store';
import {ClearType} from 'ngx-store/dist/src/config';

@Injectable()
export class ClientStorageService {

  constructor(private cookiesStorage: CookiesStorageService) {
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
}
