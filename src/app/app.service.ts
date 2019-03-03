import { Injectable } from '@angular/core';

import { formConfig, equipConfig } from './app.config';
import { form833, equipForm } from './app.model';
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
 equipmentForms: AngularFirestoreCollection<equipForm>;
 private equipmentDoc: AngularFirestoreDocument<equipForm>;
 constructor(private db: AngularFirestore) {
 // Get the Form_833 collection
   this.serviceForms = db.collection<form833>(formConfig.collection_endpoint);
   this.equipmentForms = db.collection<equipForm>(equipConfig.collection_endpoint);
  }

 addForm833(form) {
  // Add the new Form_833 to the collection
   this.serviceForms.add(form);
 } // addForm_833

 updateForm833(id, update) {
   // Get the Form_833 document
   this.serviceDoc = this.db.doc<form833>(`${formConfig.collection_endpoint}/${id}`);
   this.serviceDoc.update(update);
 } // updateForm_833

 deleteForm833(id) {
   // Get the Form_833 document
   this.serviceDoc = this.db.doc<form833>(`${formConfig.collection_endpoint}/${id}`);
   // Delete the document
   this.serviceDoc.delete();
 } // deleteTask

 addEquipForm(form) {
  // Add the new Form_833 to the collection
   this.equipmentForms.add(form);
 } // addForm_833

 updateEquipForm(id, update) {
   // Get the Form_833 document
   this.equipmentDoc = this.db.doc<equipForm>(`${equipConfig.collection_endpoint}/${id}`);
   this.equipmentDoc.update(update);
 } // updateForm_833

 deleteEquipForm(id) {
   // Get the Form_833 document
   this.equipmentDoc = this.db.doc<equipForm>(`${equipConfig.collection_endpoint}/${id}`);
   // Delete the document
   this.equipmentDoc.delete();
 } // deleteTask
}
