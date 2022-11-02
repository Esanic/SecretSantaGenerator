import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Path } from 'src/app/models/path';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-display-saved',
  templateUrl: './display-saved.component.html',
  styleUrls: ['./display-saved.component.css']
})
export class DisplaySavedComponent implements OnInit {
  private paths?: Path[];
  private param: string | null = '';
  public dbEntry: any = '';

  constructor(private route: ActivatedRoute, private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.param = this.route.snapshot.queryParamMap.get('key');
    
    this.databaseService.getAll().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => 
          ({key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.paths = data;
      this.dbEntry = this.paths.find(o => o.key === this.param);
      console.log(this.dbEntry)
    })
    

  }

}
