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
  private originList: string[] = []
  
  public from: string[] = ["Santa Claus"]
  private tempFrom: string[] = []
  public to: string[] = ["Mrs Claus"]
  private tempTo: string[] = []

  public enabledButton: boolean = false;
  public enabledLink: boolean = false;
  private keyLength = 15;
  
  public link: string = 'https://esanic.github.io/SecretSantaGenerator/#/saved?key='
  
  private set: Path = new Path();

  constructor(private formService: FormService, private databaseService: DatabaseService, private clipboard: Clipboard) { }

  ngOnInit(): void {
    this.formService.getNames().subscribe(names => {
      this.originList = [...names];
      this.enabledButton = true;

      this.resetLists()

      for(let i = 0; i < this.tempFrom.length; i=0){
        let fromIndex = this.randomizer(this.tempFrom.length)
        let toIndex = this.randomizer(this.tempFrom.length)

        if(!(this.tempFrom[fromIndex] == this.tempTo[toIndex])){
          this.from.push(this.tempFrom[fromIndex]);
          this.to.push(this.tempTo[toIndex]);

          this.tempFrom.splice(fromIndex, 1);
          this.tempTo.splice(toIndex, 1);
        }

        if(this.tempFrom.length == 1  && this.tempTo.length == 1 && this.tempTo[0] == this.tempFrom[0]){
          this.resetLists();
        }
      }
    })
  }

  private resetLists(): void {
    this.from = [];
    this.to = [];
    this.tempFrom = [...this.originList];
    this.tempTo = [...this.originList];
  }

  private randomizer(arrayLength: number): number {
    return Math.floor(Math.random() * arrayLength);
  }

  public save(): void {
    let key: string = '';
    for(let i = 0; i < this.keyLength; i++){
      key = key + this.databaseService.generateAlphabet();
    }
    this.set = {...this.set, key: key, from: this.from, to: this.to}

    this.databaseService.create(this.set);
    this.enabledButton = false;
    this.enabledLink = true;
    this.link = this.link + this.set.key;
  }

  public copy(): void {
    this.clipboard.copy(this.link);
  }
}
