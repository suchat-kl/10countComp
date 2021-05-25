import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting-componet',
  templateUrl: './counting-componet.component.html',
  styleUrls: ['./counting-componet.component.css']
})
export class CountingComponetComponent implements OnInit {
count  =0;
onclick(){
  this.count+=1;
}
  constructor() { }

  ngOnInit(): void {
  }

}
