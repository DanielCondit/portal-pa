import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable, } from 'rxjs';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { form833 } from '../app.model';
import { AppService } from '../app.service';
import { config } from '../app.config';
import { map } from 'rxjs/operators';

export interface Form833 {
  description: string;
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

  // formCollectionRef: AngularFirestoreCollection<Form833>;
  // form$: Observable<Form833[]>;

  // constructor(private afs: AngularFirestore) {
  //   this.formCollectionRef = this.afs.collection('Form_833');
  //   this.form$ = this.formCollectionRef.valueChanges();
  // }

  // add833(formDesc: string) {
  // if (formDesc && formDesc.trim().length) {
  //   this.formCollectionRef.add({ description: formDesc, completed: false });
  //   }
  // }

  constructor(
    private db: AngularFirestore, 
    private form833Service: AppService
  ) {}

  serviceForms: Observable<any[]>;

  ngOnInit() {
    this.serviceForms = this.db.collection(config.collection_endpoint).valueChanges();
    this.serviceForms = this.db
    .collection(config.collection_endpoint)
    .snapshotChanges()
    .pipe(
      map(actions => {
       return actions.map(a => {
        //Get document data
        const data = a.payload.doc.data() as form833;
        //Use spread operator to add the lname to the document data
        return { data };
       });
    })
    );  
  }

  myForm: string;
  editMode: boolean = false;
  formToEdit: any = {};

  edit(form) {
    console.log(form);
    //Set formToEdit and editMode
    this.formToEdit = form;
    this.editMode = true;
    //Set form value
    this.myForm = form.description;
  }//edit

  saveForm() {
     if (this.myForm !== null) {
     //Get the input value
     let form = {
        description: this.myForm
     };
      if (!this.editMode) {
        console.log(form);
        this.form833Service.addForm833(form);
      } else {
        //Get the task lname
        let tasklname = this.formToEdit.lname;
        //update the task
        this.form833Service.updateForm833(form);
      }
      //set edit mode to false and clear form
      this.editMode = false;
      this.myForm = '';
     }
  }//saveTask

  deleteTask(task) {
    //Get the task lname
    let tasklname = task.lname;
    //delete the task
    this.form833Service.deleteForm833(tasklname);
  }//deleteTask

}
