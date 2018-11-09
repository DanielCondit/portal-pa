import { Injectable } from '@angular/core';

import { config } from './app.config';
import { form833 } from './app.model';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AppService {
 serviceForms: AngularFirestoreCollection<form833>;
 private serviceDoc: AngularFirestoreDocument<form833>;

 constructor(private db: AngularFirestore) {
 // Get the Form_833 collection
   this.serviceForms = db.collection<form833>(config.collection_endpoint);
  }

 addForm833(form) {
  // Add the new Form_833 to the collection
   this.serviceForms.add(form);
 } // addForm_833

 updateForm833(id, update) {
   // Get the Form_833 document
   this.serviceDoc = this.db.doc<form833>(`${config.collection_endpoint}/${id}`);
   this.serviceDoc.update(update);
 } // updateForm_833

 deleteForm833(id) {
   // Get the Form_833 document
   this.serviceDoc = this.db.doc<form833>(`${config.collection_endpoint}/${id}`);
   // Delete the document
   this.serviceDoc.delete();
 } // deleteTask
}
