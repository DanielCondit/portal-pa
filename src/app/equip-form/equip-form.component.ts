import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable, } from 'rxjs';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { equipForm } from '../app.model';
import { AppService } from '../app.service';
import { equipConfig } from '../app.config';
import { map } from 'rxjs/operators';
import { AppModule } from '../app.module';
import {Router} from '@angular/router';

export interface EquipForm {
  date: string;
  desc: string;
  emails: string;
  fname: string;
  grade: string;
  lname: string;
  org: string;
  osymbol: string;
  phone: number;
  equip: string;
  completed: boolean;
}



@Component({
  selector: 'app-equip-form',
  templateUrl: './equip-form.component.html',
  styleUrls: ['./equip-form.component.scss']
})

export class EquipFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
   }

  constructor(
    private db: AngularFirestore,
    private equipFormService: AppService,
    private router: Router
  ) {}

  equipmentForms: Observable<any[]>;

  ngOnInit() {
    this.equipmentForms = this.db.collection(equipConfig.collection_endpoint).valueChanges();
    this.equipmentForms = this.db
    .collection(equipConfig.collection_endpoint)
    .snapshotChanges()
    .pipe(
      map(actions => {
       return actions.map(a => {
        //Get document data
        const data = a.payload.doc.data() as equipForm;
        //Get document id
        const id = a.payload.doc.id;
        //Use spread operator to add the lname to the document data
        return { id, ...data };
       });
    })
    );  
  }

  // id: string;
  date: string;
  desc: string;
  emails: string;
  fname: string;
  grade: string;
  lname: string;
  org: string;
  osymbol: string;
  phone: number;
  equip: string;
  editMode: boolean = false;
  formToEdit: any = {};

  edit(form) {
    console.log(form);
    //Set formToEdit and editMode
    this.formToEdit = form;
    this.editMode = true;
    //Set form value
    this.fname = form.fname;
  }//edit

  saveForm() {
     if (this.date,this.desc,this.emails,this.fname,this.grade,this.lname,this.org,this.osymbol,this.phone,this.equip !== null) {
     //Get the input value
     let form = {
        desc: this.desc,
        date: this.date,
        emails: this.emails,
        fname: this.fname,
        grade: this.grade,
        lname: this.lname,
        org: this.org,
        osymbol: this.osymbol,
        phone: this.phone,
        equip: this.equip,
     };
      if (!this.editMode) {
        console.log(form);
        this.equipFormService.addEquipForm(form);
      } else {
        //Get the form id
        let formID = this.formToEdit.id;
        //update the task
        this.equipFormService.updateEquipForm(formID, form);
      }
      //set edit mode to false and clear form
      this.editMode = false;
      this.desc = '';
      this.date = '';
      this.emails = '';
      this.fname = '';
      this.grade = '';
      this.lname = '';
      this.org = '';
      this.osymbol = '';
      this.equip = '';
      this.router.navigateByUrl('/PA_Portal');
     }
  }//saveTask

  deleteTask(form) {
    //Get the task lname
    let formId = form.id;
    //delete the task
    this.equipFormService.deleteEquipForm(formId);
  }//deleteTask

}

