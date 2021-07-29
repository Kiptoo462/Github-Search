import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  

  repos:any;Repos: any;
  reponame:string;
  show:number;


  constructor(private dataService: DataService) { 
    this.repos = new Repos ("","","",new Date());
    this.dataService.getRepoInfo().subscribe((repos:any) => {
      console.log(repos);
      this.repos = repos;
    });

     
  }


  searchRepo(){
    this.dataService.updateRepos(this.reponame);
    this.dataService.getRepoInfo().subscribe((repos:any) => {
     console.log(repos);
     this.repos = repos;
   });
   
  }

  loadMore(){
    // this.dataService.updateRepos(this.reponame);
    this.dataService.updateShow(this.show);
    this.dataService.getRepoInfo().subscribe((repos:any) => {
     console.log(repos);
     this.repos = repos;
   });
   
  }


  ngOnInit(): void {
  }

}
