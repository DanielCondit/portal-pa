import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable, } from 'rxjs';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { form833 } from '../app.model';
import { AppService } from '../app.service';
import { formConfig } from '../app.config';
import { map } from 'rxjs/operators';
import { AppModule } from '../app.module';
import {Router} from '@angular/router';

export interface Form833 {
  date: string;
  desc: string;
  emails: string;
  fname: string;
  grade: string;
  lname: string;
  org: string;
  osymbol: string;
  phone: number;
  support: string;
  completed: boolean;
}



@Component({
  selector: 'app-form833',
  templateUrl: './form833.component.html',
  styleUrls: ['./form833.component.scss'],
})

export class Form833Component implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
   }

  constructor(
    private db: AngularFirestore,
    private form833Service: AppService,
    private router: Router
  ) {}

  serviceForms: Observable<any[]>;

  ngOnInit() {
    this.serviceForms = this.db.collection(formConfig.collection_endpoint).valueChanges();
    this.serviceForms = this.db
    .collection(formConfig.collection_endpoint)
    .snapshotChanges()
    .pipe(
      map(actions => {
       return actions.map(a => {
        //Get document data
        const data = a.payload.doc.data() as form833;
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
  support: string;
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
     if (this.date,this.desc,this.emails,this.fname,this.grade,this.lname,this.org,this.osymbol,this.phone,this.support !== null) {
     //Get the input value
     let form = {
        desc:     this.desc,
        date:     this.date,
        emails:   this.emails,
        fname:    this.fname,
        grade:    this.grade,
        lname:    this.lname,
        org:      this.org,
        osymbol:  this.osymbol,
        phone:    this.phone,
        support:  this.support,
     };
      if (!this.editMode) {
        console.log(form);
        this.form833Service.addForm833(form);
      } else {
        //Get the form id
        let formID = this.formToEdit.id;
        //update the task
        this.form833Service.updateForm833(formID, form);
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
      this.support = '';
      this.router.navigateByUrl('/PA_Portal');
     }
  }//saveTask

  deleteTask(form) {
    //Get the task lname
    let formId = form.id;
    //delete the task
    this.form833Service.deleteForm833(formId);
  }//deleteTask

}
