import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _data: any;

  constructor(private http: HttpClient) { }


  /**
   * Obtiene toda la informacion del fichero app-config.json
   */
  public getData() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/config/app-config.json').subscribe(data => {
        this._data = data;
        resolve(true);
      }, error => {
        console.error("Error al obtener la configuración: " + error);
        reject(true);
      })
    })
  }

  /* Valores */

  get website() {
    return get(this._data, 'website');
  }

  get logo() {
    return get(this._data, 'logo');
  }

  get showPrincipalPost() {
    return get(this._data, 'show_principal_post');
  }

  get numPostsPerPage() {
    return get(this._data, 'num_posts_per_page');
  }

  get numCommentsPerPage() {
    return get(this._data, 'num_comments_per_page');
  }

  get socialNetworks() {
    return get(this._data, 'social_networks');
  }

  get linkDashboard() {
    return get(this._data, 'link_dashboard');
  }

}
