import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Users } from './users';
// import { Http, Headers } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Repos } from './repos';
import{ map } from 'rxjs/operators';
// import { of } from 'rxjs';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private username: string;
  private reponame: string;
  private show:number;;;
 

  constructor(private http:HttpClient) {
    console.log('service is ready');
    this.username = 'Kiptoo462';
    this.reponame = 'Quotes';
    this.show = 10;


   }

   getUsers(){
     return this.http.get(environment.apiUrl+'users/'+ this.username + "?access_token=" + environment.accessToken).pipe(map(res => res));
   }

   getRepos(){
    return this.http.get(environment.apiUrl+ 'users/' + this.username + "/repos?order=created&sort=asc?access_token=" + environment.accessToken).pipe(map(res => res));
  }

  getRepoInfo(){
    return this.http.get( environment.apiUrl + 'search/repositories?q={' + this.reponame +'}&per_page='+this.show+'&sort=forks&order=asc?' + environment.accessToken).pipe(map(res => res));
  }

  updateUsers(username:string){
    this.username = username;
  }


  updateRepos(reponame:string){
    this.reponame = reponame;
  }

  updateShow(show:number){
    this.show = this.show+10;
  }
}
