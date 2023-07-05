import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor(private http: HttpClient) {}

 public uploadStoryDetails() {
  return this.http.get( `${environment.baseUrl}/user/userDetails/${sessionStorage.getItem('userId')}`)
}

public createNewStory(obj: Object){
   
   return this.http.post(`${environment.baseUrl}/story/createStory`, obj)
}

public viewStory(){
  return this.http.get(`${environment.baseUrl}/story/viewStory/${sessionStorage.getItem('userId')}`)
}

public viewNextStory(){
    return this.http.get(`${environment.baseUrl}/story/viewNextStory/${sessionStorage.getItem('userId')}`)

}


}



