import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { form833 } from '../app.model';

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

  formCollectionRef: AngularFirestoreCollection<Form833>;
  form$: Observable<Form833[]>;

  constructor(private afs: AngularFirestore) {
    this.formCollectionRef = this.afs.collection('Form_833');
    this.form$ = this.formCollectionRef.valueChanges();
  }

  // add833(formDesc: string) {
  // if (formDesc && formDesc.trim().length) {
  //   this.formCollectionRef.add({ description: formDesc, completed: false });
  //   }
  // }

  addForm(form) {
    //Add the new task to the collection
    this.formCollectionRef.add(form);
  } //addTask


  ngOnInit() {}
  
  // onSubmit(){
  //  this.itemsService.addItem(this.serviceForm.value);
  // } 
}
