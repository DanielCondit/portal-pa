import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Form_833 {
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

  formCollectionRef: AngularFirestoreCollection<Form_833>;
  form$: Observable<Form_833[]>;

  constructor(private afs: AngularFirestore) {
    this.formCollectionRef = this.afs.collection('form833');
    this.form$ = this.formCollectionRef.valueChanges();
  }

  ngOnInit() {}
  
  // onSubmit(){
  //  this.itemsService.addItem(this.serviceForm.value);
  // } 
}
