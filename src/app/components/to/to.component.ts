import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-to',
  templateUrl: './to.component.html',
  styleUrls: ['./to.component.css']
})
export class ToComponent implements OnInit {
  private names: Array<string> = []
  public to: Array<string> = []

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.formService.getNames().subscribe(names => {
      this.to = [...names];
      this.shuffle(this.to);

      
    })
  }

  private shuffle(array: Array<string>): string[] {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  }

}
