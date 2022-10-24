import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public from: string[] = []
  public to: string[] = []

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
      }
    })
  }

  private shuffle(array: string[]): string[] {
      for (var i = array.length - 1; i > 0; --i) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  }

}
