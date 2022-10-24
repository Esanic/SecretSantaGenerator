import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
  public from: Array<string> = []

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.formService.getNames().subscribe(names => {
      this.from = [...names];
      this.shuffle(this.from)
    })
  }

  private shuffle(array: Array<string>): string[] {
      for (var i = array.length - 1; i > 0; --i) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  }

}
