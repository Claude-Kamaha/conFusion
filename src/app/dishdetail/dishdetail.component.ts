import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish'
import { Location } from '@angular/common';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  

  dish : Dish;
  constructor(
    private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
 
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
     this.dishservice.getDish(id).then((dish)=>this.dish=dish);
  }
  goBack(): void {
    this.location.back();
  }
}
