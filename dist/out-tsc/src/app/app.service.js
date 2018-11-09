var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { config } from './app.config';
import { AngularFirestore } from '@angular/fire/firestore';
var AppService = /** @class */ (function () {
    function AppService(db) {
        this.db = db;
        // Get the Form_833 collection
        this.serviceForms = db.collection(config.collection_endpoint);
    }
    AppService.prototype.addForm833 = function (form) {
        // Add the new Form_833 to the collection
        this.serviceForms.add(form);
    }; // addForm_833
    AppService.prototype.updateForm833 = function (id, update) {
        // Get the Form_833 document
        this.serviceDoc = this.db.doc(config.collection_endpoint + "/" + id);
        this.serviceDoc.update(update);
    }; // updateForm_833
    AppService.prototype.deleteForm833 = function (id) {
        // Get the Form_833 document
        this.serviceDoc = this.db.doc(config.collection_endpoint + "/" + id);
        // Delete the document
        this.serviceDoc.delete();
    }; // deleteTask
    AppService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore])
    ], AppService);
    return AppService;
}());
export { AppService };
//# sourceMappingURL=app.service.js.map