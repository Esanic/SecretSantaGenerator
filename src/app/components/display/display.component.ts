import { Component, OnInit } from '@angular/core';
import { Path } from 'src/app/models/path';
import { DatabaseService } from 'src/app/services/database.service';
import { FormService } from 'src/app/services/form.service';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public from: string[] = ["Santa Claus"]
  public to: string[] = ["Mrs Claus"]

  public enabledButton: boolean = false;
  public enabledLink: boolean = false;
  public link: string = 'https://esanic.github.io/SecretSantaGenerator/#/saved?key='
  private set: Path = new Path();

  constructor(private formService: FormService, private databaseService: DatabaseService, private clipboard: Clipboard) { }

  ngOnInit(): void {
    this.formService.getNames().subscribe(names => {
      this.enabledButton = true;
      
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

  public save(): void {
    let key: string = '';
    for(let i = 0; i < 15; i++){
      key = key + this.databaseService.generateAlphabet();
    }
    this.set.key = key;
    this.set.from = this.from;
    this.set.to = this.to;

    this.databaseService.create(this.set);
    this.enabledButton = false;
    this.enabledLink = true;
    this.link = this.link + this.set.key;
  }

  public copy(): void {
    this.clipboard.copy(this.link);
  }
}
