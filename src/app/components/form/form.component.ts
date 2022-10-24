import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public namesForm = this.formBuilder.group({
    names: ''
  })
  public arrayOfNames: Array<string> = []

  constructor(private formBuilder: FormBuilder, private FormService: FormService) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if(this.namesForm.value.names == null || this.namesForm.value.names == ""){
      alert('Du skrev inte in några namn!')
    }
    else{
      this.arrayOfNames = this.namesForm.value.names.split('\n')
      this.FormService.setNames(this.arrayOfNames)
    }
  }
}
