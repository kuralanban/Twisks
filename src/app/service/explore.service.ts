import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(
    private http: HttpClient
  ) { }


public exploreServicePage(){
  // return this.http.get( `${environment.baseUrl}/explore/${sessionStorage.getItem('userId')}`)
    return this.http.get( `${environment.baseUrl}/explore/${environment.userId}`)

}

}
