import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
leader: Leader[];
  
  constructor(
     private leaderservice: LeaderService,
    private activatedroute: ActivatedRoute
    ) { }

  ngOnInit(): void {
   
    //const id = this.activatedroute.snapshot.params['id'];
    this.leaderservice.getLeaders()
    .then((leader)=>this.leader=leader);
    //console.log(this.leader)

}
}