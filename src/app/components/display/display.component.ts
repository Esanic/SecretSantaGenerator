import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public from: string[] = ["Santa Claus"]
  public to: string[] = ["Mrs Claus"]

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.formService.getNames().subscribe(names => {
      this.from = [];
      this.to = [];
      let from = [...names];
      let to = [...names];
      

      for(let i = 0; i < from.length; i=0){
        let fromIndex = Math.floor(Math.random() * from.length)
        let toIndex = Math.floor(Math.random() * to.length)

        if(!(from[fromIndex] == to[toIndex])){
          this.from.push(from[fromIndex]);
          this.to.push(to[toIndex]);

          from.splice(fromIndex, 1);
          to.splice(toIndex, 1);
        }

        if(from.length == 1  && to.length == 1 && to[0] == from[0]){
          this.from = [];
          this.to = [];
          from = [...names];
          to = [...names];
        }
      }
    })
  }
}
